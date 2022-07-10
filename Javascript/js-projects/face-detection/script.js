const videoElement = document.getElementById('video');

const startVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.log(err);
    });
};

// startVideo();
