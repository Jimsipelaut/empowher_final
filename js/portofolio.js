document.addEventListener('DOMContentLoaded', function () {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const itemsPerPage = 6;
    let currentPage = 0;

    const portfolioImages = [
        { src: "img_portofolio/brosure sterling-01.webp", alt: "Sterling Logo" },
        { src: "img_portofolio/happiza logo no-04.webp", alt: "Happiza Logo" },
        { src: "img_portofolio/puffybear logo_cathrine tugas-01.webp", alt: "Puffybear Logo" },
        { src: "img_portofolio/cathrine_wangkawa pacaging-03.webp", alt: "Wangkawa Packaging" },
        { src: "img_portofolio/mock up seatlas.webp", alt: "Seatlas Mockup" },
        { src: "img_portofolio/kartu nama mock up.webp", alt: "Business Card Mockup" },
        { src: "img_portofolio/gegares loggo-02-02-02.webp", alt: "Gegares Logo" },
        { src: "img_portofolio/SUMOLL LOGO-01-01.webp", alt: "Sumoll Logo" },
        { src: "img_portofolio/wangkawa kopi-02.webp", alt: "Wangkawa Logo" },
        { src: "img_portofolio/pacaging naffle_Cathrine-01-01.webp", alt: "Naffle Packaging" },
        { src: "img_portofolio/Sterling Mini Banner texture.webp", alt: "Sterling Banner" },
        { src: "img_portofolio/happiza flayer_Flayer.webp", alt: "Happiza Flyer" },
        { src: "img_portofolio/Magazine Cover Uniqlo X Treasure.webp", alt: "Magazine Cover Uniqlo X Treasure" },
        { src: "img_portofolio/jam 4 edit.webp", alt: "Jam 4 Edit" },
        { src: "img_portofolio/v(1).webp", alt: "V(1)" },
        { src: "img_portofolio/v(2).webp", alt: "V(2)" },
        { src: "img_portofolio/bunga 4.webp", alt: "Bunga 4" },
        { src: "img_portofolio/sterling logo slvr2-01.webp", alt: "Sterling Logo Slvr2-01" },
    ];

    const totalImages = portfolioImages.length;
    const totalPages = Math.ceil(totalImages / itemsPerPage);

    function updatePortfolio() {
        const startIndex = currentPage * itemsPerPage;
        const currentImages = portfolioImages.slice(startIndex, startIndex + itemsPerPage);

        portfolioItems.forEach((item, index) => {
            if (currentImages[index]) {
                item.innerHTML = `<img src="${currentImages[index].src}" alt="${currentImages[index].alt}" loading="lazy">`;
                item.style.display = 'block'; // Ensure the item is visible
            } else {
                item.style.display = 'none'; // Hide unused items
            }
        });

        // Update button states
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePortfolio();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePortfolio();
        }
    });

    // Initialize the portfolio
    updatePortfolio();
});
