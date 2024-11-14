// JavaScript for handling image gallery interactivity

// Array of image sources
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

let currentIndex = 0;

// Get DOM elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Function to open the lightbox
function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex];
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentIndex];
}
