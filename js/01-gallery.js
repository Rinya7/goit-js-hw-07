import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryList = document.querySelector(".gallery");
galeryList.addEventListener("click", callback);
function callback(event) {
  console.log(event.target.dataset.source);
  //  return event.target.daraset.sourse
}

console.log(galeryList);

function galeryImagesPreviewHtml(elements) {
  return elements
    .map(
      (element) =>
        `  <li class="gallery__item">
                <a class="gallery__link" href=${element.original} target="_self">
                    <img
                    class="gallery__image"
                    src=${element.preview}
                    data-source=${element.original}
                    alt=${element.description}
                    />
                </a>
            </li>`
    )
    .join("");
}

//const galeryPreviewHtml = galeryImagesPreviewHtml(galleryItems);
galeryList.innerHTML = galeryImagesPreviewHtml(galleryItems);
