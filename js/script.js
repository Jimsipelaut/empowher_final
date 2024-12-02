document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.custom-navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarNavWrapper = document.querySelector('.navbar-nav-wrapper');
    let lastScrollY = window.scrollY; // Menyimpan posisi scroll terakhir
    let isNavbarVisible = true; // Menyimpan status visibilitas navbar

    // Event listener untuk navbar burger
    navbarToggle.addEventListener('click', function() {
        navbarNavWrapper.classList.toggle('active');
    });

    // Menyusutkan navbar saat item diklik
    const navItems = document.querySelectorAll('.navbar-nav-wrapper a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarNavWrapper.classList.remove('active'); // Menyembunyikan menu
            navbar.style.top = '-100px'; // Atur nilai ini sesuai tinggi navbar Anda
            isNavbarVisible = false; // Update status visibilitas
        });
    });

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        // Cek apakah pengguna menggulir ke bawah
        if (currentScrollY > lastScrollY && isNavbarVisible) {
            // Jika menggulir ke bawah, sembunyikan navbar
            navbar.style.top = '-100px'; // Atur nilai ini sesuai tinggi navbar Anda
            isNavbarVisible = false; // Update status visibilitas
        } 
        // Cek apakah pengguna menggulir ke atas
        else if (currentScrollY < lastScrollY && !isNavbarVisible) {
            // Jika menggulir ke atas, tampilkan navbar
            navbar.style.top = '0';
            isNavbarVisible = true; // Update status visibilitas
        }

        // Update posisi scroll terakhir
        lastScrollY = currentScrollY;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            } else {
                console.warn(`Element with ID ${targetId} not found.`);
            }
        });
    });

    // Carousel functionality
    let currentCardIndex = 0;
    const cards = document.querySelectorAll('.we-card');
    const totalCards = cards.length;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'prev-1', 'next-1', 'prev-2', 'next-2', 'prev-3', 'next-3');
        });
        cards[currentCardIndex].classList.add('active');

        const prevIndex_1 = (currentCardIndex - 1 + totalCards) % totalCards;
        const nextIndex_1 = (currentCardIndex + 1) % totalCards;
        const prevIndex_2 = (currentCardIndex - 2 + totalCards) % totalCards;
        const nextIndex_2 = (currentCardIndex + 2) % totalCards;
        const prevIndex_3 = (currentCardIndex - 3 + totalCards) % totalCards;
        const nextIndex_3 = (currentCardIndex + 3) % totalCards;

        cards[prevIndex_1].classList.add('prev-1');
        cards[nextIndex_1].classList.add('next-1');
        cards[prevIndex_2].classList.add('prev-2');
        cards[nextIndex_2].classList.add('next-2');
        cards[prevIndex_3].classList.add('prev-3');
        cards[nextIndex_3].classList.add('next-3');
    }

    updateCarousel();

    document.querySelector('.right').addEventListener('click', function () {
        currentCardIndex = (currentCardIndex + 1) % totalCards;
        updateCarousel();
    });

    document.querySelector('.left').addEventListener('click', function () {
        currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    });
});
