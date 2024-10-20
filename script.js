// Scroll Animation for Process Steps
document.addEventListener('DOMContentLoaded', function () {
    const processSteps = document.querySelectorAll('.process-step');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    processSteps.forEach(step => {
        observer.observe(step);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0; // Current slide index
    const slides = [
        "slide1.jpg",
        "slide2.jpg",
        "slide3.jpg", 
        "slide4.jpg",
        "slide5.jpg",
        "slide6.jpg", 
        "slide7.jpg",
        "slide8.jpg",
        "slide9.jpg", 
        "slide10.jpg",
        "slide11.jpg",
        "slide12.jpg", 
        "slide13.jpg",
        "slide14.jpg",
        "slide15.jpg", 
    ]; 
    const slideElement = document.querySelector(".styled-presentation"); // Select the image element
    const prevButton = document.querySelector(".prev-slide"); // Left arrow
    const nextButton = document.querySelector(".next-slide"); // Right arrow

    // Function to show the current slide
    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0; // Wrap back to the first slide if at the end
        }
        if (index < 0) {
            slideIndex = slides.length - 1; // Wrap to the last slide if going backwards from the first
        }
        slideElement.src = slides[slideIndex]; // Update the image src to the new slide
    }

    // Add event listener for Next button
    nextButton.addEventListener("click", function() {
        slideIndex++;
        showSlide(slideIndex);
    });

    // Add event listener for Previous button
    prevButton.addEventListener("click", function() {
        slideIndex--;
        showSlide(slideIndex);
    });

    // Initialize the slideshow by showing the first slide
    showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', function () {
    const processSteps = document.querySelectorAll('.process-step');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    processSteps.forEach(step => {
        observer.observe(step);
    });
});
