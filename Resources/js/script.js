document.addEventListener('DOMContentLoaded', () => {
    // Slideshow
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    function showSlides(n) {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }
        
        // Show current slide
        slides[slideIndex-1].classList.add("active");
        dots[slideIndex-1].classList.add("active");
    }
    
    // Auto slides
    function autoAdvance() {
        slideIndex++;
        showSlides(slideIndex);
    }
    
    // Initialize slideshow
    showSlides(slideIndex);
    // Change slide every 5 seconds
    setInterval(autoAdvance, 5000); 

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

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

    // Fade-in effect for images and video
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const mediaElements = document.querySelectorAll('video, .slide img');
    mediaElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Hover effect for headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.transition = 'text-shadow 0.3s ease, color 0.3s ease';
        
        heading.addEventListener('mouseenter', () => {
            heading.style.textShadow = `
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.4),
                0 0 60px rgba(255, 255, 255, 0.2)
            `;
            heading.style.color = '#ffffff';
        });
        
        heading.addEventListener('mouseleave', () => {
            heading.style.textShadow = 'none';
            heading.style.color = '#ffffff';
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 