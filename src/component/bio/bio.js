import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "and My Age Is 24";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());