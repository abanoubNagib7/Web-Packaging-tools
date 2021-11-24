import "./style.css";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);
import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="60px"
img.style.height="60px"
element.appendChild(img);

// nooo




