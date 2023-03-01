/* Contact Form */
function sendEmail(event) {
    event.preventDefault();

    const senderInput = document.getElementById("sender").value;
    const messageInput = document.getElementById("mailBody").value;
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }            
    window.location.href = `mailto:jatiu@ucsd.edu?subject=Portfolio Question&body=${senderInput} at ${emailValue}: ${messageInput}`;
}

/* Scrolling Animations */


window.addEventListener('scroll', () => {
    scrollAnimations();
});

function scrollAnimations() {
    const fadeUpElements = document.querySelectorAll(".fade-up");
    fadeUpElements.forEach((e) => {
        const elementTop = e.getBoundingClientRect().top;
        const elementBottom = e.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            e.classList.add('show');
        }
        else {
            e.classList.remove('show');
        }
    });
}