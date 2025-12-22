// Inisialisasi Swiper untuk Projects
function initSwiper() {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

// Scroll animasi untuk fade-in elements
function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Header scroll effect
function headerScrollEffect() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Scroll to top button
function scrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

// Navigasi aktif berdasarkan section yang terlihat
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Animasi hover pada tombol
function setupButtonAnimations() {
    // Animasi hover pada tombol "Let's Talk"
    const talkButton = document.querySelector('.btn-primary-custom');
    if (talkButton) {
        talkButton.addEventListener('mouseenter', function() {
            this.innerHTML = '<i class="fas fa-comment-dots me-2"></i> Let\'s Talk';
        });
        
        talkButton.addEventListener('mouseleave', function() {
            this.innerHTML = 'Let\'s Talk';
        });
    }
    
    // Animasi hover pada tombol "Check out My Projects"
    const projectsButton = document.querySelector('.btn-outline-custom');
    if (projectsButton) {
        projectsButton.addEventListener('mouseenter', function() {
            this.innerHTML = '<i class="fas fa-arrow-right me-2"></i> Check out My Projects';
        });
        
        projectsButton.addEventListener('mouseleave', function() {
            this.innerHTML = 'Check out My Projects';
        });
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efek cahaya bergerak di sekitar foto profil
function setupProfileGlowEffect() {
    const profileGlow = document.querySelector('.profile-glow');
    if (profileGlow) {
        let angle = 0;
        setInterval(() => {
            angle = (angle + 0.5) % 360;
            const x = Math.sin(angle * Math.PI / 180) * 5;
            const y = Math.cos(angle * Math.PI / 180) * 5;
            profileGlow.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        }, 50);
    }
}

// Form submission handler
function setupFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Scroll to top button click handler
function setupScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi bintang
    if (window.starsModule) {
        window.starsModule.createStars();
        window.starsModule.addStarsPeriodically();
    }
    
    // Inisialisasi Swiper
    initSwiper();
    
    // Setup event listeners
    window.addEventListener('scroll', () => {
        fadeInOnScroll();
        headerScrollEffect();
        scrollTopButton();
        setActiveNavLink();
    });
    
    // Trigger fade-in on initial load
    fadeInOnScroll();
    
    // Setup semua fungsi
    setupButtonAnimations();
    setupSmoothScrolling();
    setupProfileGlowEffect();
    setupFormSubmission();
    setupScrollTopButton();
});