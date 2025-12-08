const fadeElements = document.querySelectorAll('.fade-element');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in
            entry.target.classList.add('is-inview');
        } else {
            // Fade out (so it repeats)
            entry.target.classList.remove('is-inview');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});