import { galleryItems } from './gallery-items.js';
const listGallery = document.querySelector(".gallery");
let instance
let flagModal

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
    flagModal = 0
    const selectedImg = event.target.dataset.source;
    console.log(selectedImg);

    instance = basicLightbox.create(`
        <div class="modal" id="modalita">
            <img src= "${selectedImg}"/>
         </div>   
            `)
        instance.show()
};

document.addEventListener('keydown', event => {
    const modal = document.querySelector('#modalita');
    if ((modal.style.display != 'none') && (event.key === "Escape") && !flagModal) {
        flagModal = 1;
        instance.close();
        console.log("Нажата Esc – следы прошлого все еще с нами!");
    }
});
