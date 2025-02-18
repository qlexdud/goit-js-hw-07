import { galleryItems } from './gallery-items.js';
const listGallery = document.querySelector(".gallery")  || null;
const markup = galleryItems.map((elem) =>
    `<div uk-lightbox>
        <li class="gallery__item">
            <a class="gallery__link" onclick="return false" href="${elem.original}">
                <img
                    class="gallery__image"
                    src="${elem.preview}"
                    data-source="${elem.original}"
                    alt="${elem.description}"
                />
            </a>
        </li>
    </div>`).join("");

listGallery.insertAdjacentHTML("beforeend", markup);
console.log(listGallery);
console.log(galleryItems);

if (listGallery) {
    new SimpleLightbox(".gallery li a", {
        captionsData: 'alt',
        captionDelay: 250
    });
}


