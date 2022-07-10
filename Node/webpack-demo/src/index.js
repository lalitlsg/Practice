
function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(button);

  button.onclick = (e) =>
    import('./print.js').then((module) => {
      const print = module.default;
      print();
    });

  return element;
}

document.body.appendChild(component());
