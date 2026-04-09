document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(
        ".hero, .block, .research-block, .profile-card, .logo-card, .publications-block, .pub-year-box, .timeline-item, .contact-item"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    animatedElements.forEach((el, index) => {
        el.classList.add("fade-in-section");
        el.style.transitionDelay = `${Math.min(index * 60, 360)}ms`;
        observer.observe(el);
    });
});
