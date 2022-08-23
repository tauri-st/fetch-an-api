const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    //Set up API
    const res = await fetch (
        "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    console.log(images);
    //Call random image function
    selectRandomImage(images);
};

const selectRandomImage = async function (images) {
    //Produce a random number and multiply by how many items in array
    //Round the number down 0-99 like array index
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);
    //Use randomIndex to grab a single image from your images array
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});