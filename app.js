document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('privacy-modal');
    const openBtn = document.getElementById('open-privacy-policy');
    const closeBtn = document.getElementById('close-privacy-policy');

    // Open Privacy Policy Modal
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    });

    // Close Privacy Policy Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Restore background scrolling
    });

    // Close modal when clicking outside the box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Handle Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});
