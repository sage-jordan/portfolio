// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu

let showMenu = false; // State T/F

menuBtn.addEventListener('click', toggleMenu); // Event Listner

function toggleMenu() { // Toggle Menu (classes and state)
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => {
            item.classList.add('show')
        });
        showMenu = true; 
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show');
        });
        showMenu = false;
    }
};
