document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        // Show current slide and activate corresponding dot
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Dot controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    // Auto advance slides
    function autoAdvance() {
        plusSlides(1);
    }
    setInterval(autoAdvance, 5000); // Change slides every 5 seconds

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