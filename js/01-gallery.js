import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, description}) => {
  return `
  <li><img class="picture" src=${preview} width = '400' alt='${description}'></img></li>`;
});




  
