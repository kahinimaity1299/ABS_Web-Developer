document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
});
// Change header background color on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#264653';
    } else {
        header.style.backgroundColor = '#f4a261';
    }
});

// Add color change on button click
const heroButton = document.querySelector('.btn');
heroButton.addEventListener('click', function () {
    heroButton.style.backgroundColor = '#2a9d8f';
    heroButton.style.color = '#fff';
});
