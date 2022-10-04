import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryCreate = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}" /> </a>
</div>`;
  })
  .join('');

galleryEl.addEventListener('click', event => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    <a class="close-lightbox">Close</a>
    </div>`,
    {
      onShow: instance => {
        instance
          .element('.modal')
          .querySelector('.close-lightbox')
          .addEventListener('click', instance.close);
      },
    },
  );
  instance.show();
});
galleryEl.insertAdjacentHTML('afterbegin', galleryCreate);

