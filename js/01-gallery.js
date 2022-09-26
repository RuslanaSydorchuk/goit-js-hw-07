import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galary = document.querySelector('.gallery');

const createGalary = collection => {
    return collection.map(({preview, original, description}) => {
        const addElements = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` ;
        galary.insertAdjacentHTML('beforeend', addElements);
    })
}

createGalary(galleryItems);


const onClick = evt => {
    evt.preventDefault();
    const linkOriginal = evt.target.dataset.source;
    if (evt.target.nodeName !== 'IMG') { return };
    const instance = basicLightbox.create(`
    <img src="${linkOriginal}" width="800" height="600">`)
    instance.show();

    const onEscClick = evt=>{ if (evt.code === 'Escape') {
        instance.close();
        galary.removeEventListener('keydown', onEscClick)}}
    galary.addEventListener('keydown', onEscClick)
}

galary.addEventListener('click', onClick);
