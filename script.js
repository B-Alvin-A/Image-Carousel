let images = Array.from(document.getElementsByClassName("imageCarousel"));

let displayPhoto = document.getElementById("main-photo");
let displayName = displayPhoto.getAttribute("name");
changeCaption(displayName);

images.forEach(function (image) {
    image.addEventListener("click" ,changeImage);
});

function changeImage(x){
    let image = x.target;
    let name = image.getAttribute("name");

    displayPhoto.src = image.src;
    changeCaption(name);

    images.forEach(function (img) {
        img.classList.remove("selected");
    });
    image.classList.add("selected");
}

function changeCaption(y){
    let caption = document.getElementById("caption");
    caption.innerHTML = y;
}
