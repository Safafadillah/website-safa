// Fungsi untuk membuat efek bintang berjatuhan
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 120;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        
        const colors = ['#ffffff', '#e2e8f0', '#cbd5e1', '#93c5fd', '#6366f1'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
        
        const duration = Math.random() * 10 + 5;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        starsContainer.appendChild(star);
    }
}

// Tambahkan bintang baru secara berkala
function addStarsPeriodically() {
    setInterval(() => {
        const starsContainer = document.getElementById('stars-container');
        if (starsContainer.children.length < 150) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            
            const colors = ['#ffffff', '#e2e8f0', '#93c5fd', '#6366f1'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            star.style.backgroundColor = color;
            
            const duration = Math.random() * 10 + 5;
            star.style.animationDuration = `${duration}s`;
            star.style.opacity = Math.random() * 0.7 + 0.3;
            
            starsContainer.appendChild(star);
            
            // Hapus bintang setelah selesai animasi
            setTimeout(() => {
                if (star.parentNode === starsContainer) {
                    starsContainer.removeChild(star);
                }
            }, duration * 1000);
        }
    }, 1000);
}

// Ekspor fungsi untuk digunakan di main.js
window.starsModule = {
    createStars,
    addStarsPeriodically
};