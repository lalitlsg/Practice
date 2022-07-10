const features = [];
  for (i = 0; i < 1; i++) {
    features.push(new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(
        [76.07298430919218, 27.89691807442266]
      ))
    }));
  }
  // create the source and layer for random features
  const vectorSource = new ol.source.Vector({
    features
  });
  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 3,
        fill: new ol.style.Fill({color: 'green'})
      })
    })
  });
  // create map and add layers
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([76.07298430919218, 27.89691807442266]),
      zoom: 2
    })
  });

  // Overlay info container
  const overlayInfoElement = document.querySelector('.overlay-info');
  const overlayLayer = new ol.Overlay({
      element: overlayInfoElement
  });
  map.addOverlay(overlayLayer);
  const ovelayLon = document.getElementById('lon');
  const ovelayLat = document.getElementById('lat');
  const ovelayAddr = document.getElementById('addr');
  const ovelayTimestamp = document.getElementById('timestamp');


  // Display info on hover : pointermove
  map.on('click', function(e){
      overlayLayer.setPosition(undefined);
      map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        const currentCoords = e.coordinate;
        const coord = feature.getGeometry().getCoordinates();
        const lonlat = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
        const lon = lonlat[0];
        const lat = lonlat[1];
        overlayLayer.setPosition(currentCoords);
        ovelayLon.innerHTML = `Longitude : ${lon}`;
        ovelayLat.innerHTML = `Latitude : ${lat}`;
        ovelayTimestamp.innerHTML = `Timestamp : ${new Date().toISOString()}`
        reverseGeocode(lonlat);
      });
  });

  const reverseGeocodeURL = 'https://nominatim.openstreetmap.org/reverse?format=json';

  function reverseGeocode(coords) {
    fetch(`${reverseGeocodeURL}&lon=${coords[0]}&lat=${coords[1]}`)
      .then(function (response) {
        return response.json();
      }).then((reverseGeocodeResponse) => {
          console.log(reverseGeocodeResponse)
          const address = reverseGeocodeResponse.display_name;
          console.log(address);
          ovelayAddr.innerHTML = `Address : ${address}`
      });
  }







//   [
//       {
//           date: 'July 12, 2020 12:24:30',
//           coords: [76.0729,27.8969],
//           address: 'Nangal Chaudhri, Narnaul, Mahendragarh, Haryana, 123001, India',
//           noOfDays: 6
//       },
//       {
//           date: 'July 14, 2020 09:28:30',
//           coords: [71.0729,30.8969],
//           address: 'Vishal Book Depot, Narnaul, Mahendragarh, Haryana, 123001, India'
//           noOfDays: 1
//       }
//   ]