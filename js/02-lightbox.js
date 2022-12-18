import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesContainer = document.querySelector('.gallery')
const imagesMarkup = createPictureGallery(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createPictureGallery(galleryItems) {
  return galleryItems
  .map(({preview, original, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
}

imagesContainer.addEventListener("click", (eve) => {
  eve.preventDefault();

  // if not a picture - exit

  if (eve.target.nodeName !== "IMG") {
    return;
  }


});


new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

