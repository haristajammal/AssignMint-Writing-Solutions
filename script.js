// Updated script.js (Removed file handling)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message has been sent! (This is a placeholder for actual form submission.)');
            contactForm.reset();
        });
    }

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const currency = document.getElementById('currency').value;
            const offeredPrice = document.getElementById('offered-price').value;
            const subject = document.getElementById('subject').value;
            const wordCount = document.getElementById('word-count').value;
            const deadlineDate = document.getElementById('deadline-date').value;
            const deadlineTime = document.getElementById('deadline-time').value;
            const details = document.getElementById('details').value;

            const message = `New Order:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCurrency: ${currency}\nOffered Price: ${offeredPrice}\nSubject: ${subject}\nWord Count: ${wordCount}\nDeadline Date: ${deadlineDate}\nDeadline Time: ${deadlineTime}\nDetails: ${details}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/+923045961066?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            orderForm.reset();
        });
    }
});