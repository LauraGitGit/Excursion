document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 1;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    // Slideshow functionality
    function showSlide(n) {
        currentSlide = n > slides.length ? 1 : n < 1 ? slides.length : n;
        
        [...slides].forEach(slide => slide.style.display = "none");
        [...dots].forEach(dot => dot.classList.remove("active"));
        
        slides[currentSlide - 1].style.display = "block";
        dots[currentSlide - 1].classList.add("active");
    }

    if (slides.length) {
        showSlide(currentSlide);
        setInterval(() => showSlide(++currentSlide), 5000);
    }
    
    window.currentSlide = n => showSlide(currentSlide = n);

    // Back to top buttonfunctionality
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (backToTop) {
            backToTop.classList.toggle('visible', window.pageYOffset > 300);
        }
    });

    backToTop.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Download link effect
    const downloadLinks = document.querySelectorAll('.download-tag');
    downloadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.style.transform = 'scale(1.1)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 200);
        });
    });
}); 