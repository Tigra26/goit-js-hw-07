import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryCreate = galleryItems
  .map(({ preview, original, description }) => {
    return ` <a class="gallery__item" href="${original}"> <img class="gallery__image"
src="${preview}"
alt="${description}" />
</a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryCreate);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
