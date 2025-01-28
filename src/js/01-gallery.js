import { galleryItems } from './gallery-items.js';
const listGallery = document.querySelector(".gallery");
const markup = galleryItems.map((elem) =>
    `<li class="gallery__item">
        <a class="gallery__link" onclick="return false" href="${elem.original}">
            <img
                class="gallery__image"
                src="${elem.preview}"
                data-source="${elem.original}"
                alt="${elem.description}"
            />
        </a>
    </li>`).join("");

listGallery.insertAdjacentHTML("beforeend", markup);
console.log(listGallery);
console.log(galleryItems);

listGallery.addEventListener("click", selectImg);

function selectImg(event) {
    const selectedImg = event.target.dataset.source;
    console.log(selectedImg);

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src= "${selectedImg}"/>
        </div>
    `)
    instance.show()
}




