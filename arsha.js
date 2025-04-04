// document.addEventListener('scroll', function() {
//     const elements = document.querySelectorAll('#slideInRight, #slideInRight');
//     const windowHeight = window.innerHeight;

//     elements.forEach(element => {
//         const position = element.getBoundingClientRect().top;

        
//         if (position < windowHeight && position > 0) {
//             element.classList.add('scroll-animate');
//         } else {
//             element.classList.remove('scroll-animate');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('scroll-animate');
                entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.slideInLeft, .slideInRight, .dataSlideInRight, .slideInUp');
    elements.forEach(element => {
        observer.observe(element);
    });
});