// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(other => other.classList.remove('active'));
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Category Filter
const catBtns = document.querySelectorAll('.faq-cat-btn');

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        faqItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
            item.classList.remove('active');
        });
    });
});

// Search
const searchInput = document.getElementById('faqSearch');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Reset category buttons
    catBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');

    faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();

        if (questionText.includes(query) || answerText.includes(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
        item.classList.remove('active');
    });
});
