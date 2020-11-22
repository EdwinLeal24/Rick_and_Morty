import { img } from "./elements"
import Items from "./getDataFromApi"
import "../styled/index.scss";

img;
 
//SHOW ITEMS

const api = new Items();

api.getItems()
.then(items => items.map(<T extends {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
  location: { name: string }
}>
  (el: T, i: number) => {

  const li = document.createElement('li');
  const ul = document.querySelector('#items') as HTMLUListElement;
  li.classList.add('item');

  const img = document.createElement('img');
  img.src = el.image;
  li.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = el.name;
  li.appendChild(h2);

  const p = document.createElement('p');
  let specie = (el.species === "Human") ? " 🙋‍♂️" : " 👽"
  p.innerText = el.status + " - " + el.species + specie;
  li.append(p);

  const p2 = document.createElement('p');
  p2.innerText = el.gender;
  li.appendChild(p2);

  const p3 = document.createElement('p');
  p3.innerText = "Last view in: " + el.location.name;
  li.appendChild(p3);

  h2.classList.add('name');
  p.classList.add('status');
  p2.classList.add('gender');
  p3.classList.add('location');


  document.body.append(ul);
  ul.appendChild(li)
  console.log()

}))

