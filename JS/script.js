document.addEventListener('DOMContentLoaded', function() {
    const hbg = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    let navIsOpen = false;
    
    hbg.addEventListener('click', (e) => {
        if (navIsOpen) {
            mobileNav.style.transform = 'translateX(100vw)';
            navIsOpen = !navIsOpen;
        } else {
            mobileNav.style.transform = 'translateX(0vw)';
            navIsOpen = !navIsOpen;
        }
    });
});
