// Before/After Slider
document.querySelectorAll('.ba-container').forEach(container => {
    const slider = container.querySelector('.ba-slider');
    const before = container.querySelector('.ba-before');
    const handle = container.querySelector('.ba-handle');

    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        handle.style.left = `${value}%`;
    });
});

// Filter
const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.filter === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
