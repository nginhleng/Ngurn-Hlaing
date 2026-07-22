document.addEventListener('DOMContentLoaded', () => {
    
    // --- Project Grid Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active status from current button and apply to clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Form Submission Handling ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard page refresh submission

        // Extract input strings safely
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Placeholder execution for production backend connection (e.g., Formspree, EmailJS)
            alert(`Thanks for reaching out, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });
});
