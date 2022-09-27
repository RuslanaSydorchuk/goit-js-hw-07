import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galaryDiv = document.querySelector('.gallery');

const createGalery = collection => {
    collection.map(({ preview, original, description }) => {
        const addElements = 
        `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
    </a>`;
        galaryDiv.insertAdjacentHTML('beforeend', addElements);
    });
}

createGalery(galleryItems);

let galleryClick = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});


// const onClick = evt => {
//     evt.preventDefault();
//     const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});
// }
// galaryDiv.addEventListener('click', onClick);
