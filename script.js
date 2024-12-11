// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

let slideIndex = 0; // Initialize slide index
let slides = document.querySelectorAll(".custom-slide");
let dots = document.querySelectorAll(".custom-dot");

// Fungsi untuk menampilkan slide berdasarkan index
function showSlide(index) {
    if (index >= slides.length) slideIndex = 0; // Jika index lebih dari jumlah slide, reset ke 0
    if (index < 0) slideIndex = slides.length - 1; // Jika index kurang dari 0, set ke slide terakhir

    slides.forEach((slide, i) => {
        slide.style.display = 'none'; // Sembunyikan semua slide
        dots[i].classList.remove('active'); // Hapus class 'active' dari semua dots
    });

    slides[slideIndex].style.display = 'block'; // Tampilkan slide aktif
    dots[slideIndex].classList.add('active'); // Tambahkan class 'active' pada dot yang aktif
}

// Fungsi untuk berpindah ke slide berikutnya atau sebelumnya
function plusSlides(n) {
    slideIndex += n; // Tambahkan atau kurangi slideIndex
    showSlide(slideIndex); // Tampilkan slide yang baru
}

// Fungsi untuk berpindah ke slide yang sesuai dengan dot yang diklik
function setSlideFromDot(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Fungsi untuk otomatis mengganti slide setiap 3 detik
function autoShowSlides() {
    slideIndex++;
    showSlide(slideIndex); // Tampilkan slide berikutnya
    setTimeout(autoShowSlides, 3000); // Ganti slide setiap 3 detik
}

// Inisialisasi slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex); // Menampilkan slide pertama
    autoShowSlides(); // Mulai slideshow otomatis
});


// Tab Toggle Logic
function toggleTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.classList.remove('active');
    });

    document.querySelector(`.tab[data-tab="${tab}"]`).classList.add('active');
}

// Search Functionality
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.house-card');

    let found = false;

    cards.forEach(card => {
        const title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        card.classList.remove('highlight');

        if (title.includes(searchValue)) {
            card.classList.add('highlight');
            if (!found) {
                found = true;
                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'center'
                });
            }
        }
    });

    if (!found) {
        alert('Tidak ada hasil yang ditemukan!');
    }
});

// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

// Tampilkan tombol saat user scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Tampilkan jika sudah scroll 300px ke bawah
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Tambahkan event listener untuk klik tombol
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Scroll ke paling atas
        behavior: 'smooth' // Efek scroll smooth
    });
});