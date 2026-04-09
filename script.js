document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(
        ".hero, .block, .research-block, .profile-card, .logo-card, .publications-block, .pub-year-box"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.12
    });

    animatedElements.forEach((el) => {
        el.classList.add("fade-in-section");
        observer.observe(el);
    });
});
