document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Muestra el botón después de hacer scroll 300px
            scrollTopBtn.classList.add('show');
            scrollTopBtn.classList.remove('hide');
        } else {
            scrollTopBtn.classList.remove('show');
            scrollTopBtn.classList.add('hide');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave hacia la parte superior
        });
    });
});
