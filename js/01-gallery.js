import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery')

const markup = images
	.map(galleryItems => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')

  list.insertAdjacentHTML('beforeend', markup)
    // const img = document.createElement('img')
  
const pictures = document.querySelectorAll('.picture')
