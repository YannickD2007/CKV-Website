const locations = [
    { title: "Sliekerfilm", text: "Waar is het filmhuis in Leeuwarden precies naar vernoemd? Wie of wat is Slieker?", img: "image1.jpg", x: 50, y: 300 },
    { title: "Stadsschouwburg de Harmonie", text: "Achterhaal wanneer de Harmonie is gebouwd en wie de architect was.", img: "image2.jpg", x: 120, y: 320 },
    { title: "Pier Pander Tempel", text: "Pier Pander heeft een prijs gewonnen waarmee hij mocht gaan reizen. Wat was dat?", img: "image3.jpg", x: 200, y: 310 },
    { title: "Klaas Lageweg", text: "Wat is een overkoepelende term voor graffiti en andere straatkunst in de openbare ruimte?", img: "image4.jpg", x: 280, y: 280 },
    { title: "M.C. Escher", text: "Omschrijf duidelijk wat Escher heeft gemaakt en waar hij zo bekend om staat.", img: "image5.jpg", x: 350, y: 260 },
];

let currentIndex = 0;
const character = document.getElementById("character");
const title = document.getElementById("location-title");
const text = document.getElementById("location-text");
const image = document.getElementById("location-image");

function updateLocation() {
    title.textContent = locations[currentIndex].title;
    text.textContent = locations[currentIndex].text;
    image.src = locations[currentIndex].img;
    character.style.transform = `translate(${locations[currentIndex].x}px, ${locations[currentIndex].y}px)`;
}

function nextLocation() {
    if (currentIndex < locations.length - 1) {
        currentIndex++;
        updateLocation();
    }
}

function prevLocation() {
    if (currentIndex > 0) {
        currentIndex--;
        updateLocation();
    }
}

updateLocation();
