import logo from '../img/logo.png';
import "../styled/index.scss";

//HEADER IMAGE
const div = document.createElement('div'); //DIV FOR IMG CEATED
const img = document.createElement('img'); //IMG CEATED
img.src = logo;
document.body.append(div); //ADD ELEMENT TO DOM
div.appendChild(img);
div.classList.add('logo'); //ADD CLASS

export { img };