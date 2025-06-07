const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

document.getElementById('celebrate').addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 150,
        origin: { y: 0.6 }
    });
});

let firstButtonClicked = false;
let count = 1;

function showAlertFirstButton() {
    if (count < 3) {
        alert("I AM NOT USING FACEBOOK LOL")
        count += 1
    } else if (count < 5) {
        alert("yo stop")
        count += 1
    } else if (count >= 1000) {
        window.location.href = 'https://www.facebook.com/lone.iines.12/'
        count += 1
    } else {
        count += 1
        alert(`Ok, You have to click 1000 times to get my FACEBOOK, u sure? :> Count = ${count}`)
    }

    firstButtonClicked = true
}

function showAlertSecondButton() {
    if (firstButtonClicked) {
        alert("AGAIN??? I'm not using FACEBOOK!!!!")
    } else {
        alert("I AM NOT USING FACEBOOK!!!")
    }
}

function showAlertFooter() {
    window.location.href = 'https://github.com/amirnootfound?tab=repositories'
}

document.querySelector('body').classList.toggle('dark-theme');

let d;
d = new Date();

function displayFullYear(date) {
    document.querySelector('footer').innerHTML += `<span class="footer__copy">Copyright &#169; ${date.getFullYear()}. All rights reserved</span>`;

}

displayFullYear(d);

const words = ["Frontend Developer", "Software Engineer", "Social Engineer", "IT Specialist", "Web Developer"];
const typingDelay = 150;
const erasingDelay = 100;
const newLetterDelay = 1000;
let index = 0;
let charIndex = 0;

const typeTextSpan = document.querySelector(".typed");

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typeTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typeTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, newLetterDelay);
    }
}

// const loader = document.getElementById("loader");
// const content = document.getElementById("content");

// function showLoader() {
//     loader.style.display = "flex";
//     content.style.opacity = "0";
// }

// function hideLoader() {
//     loader.style.opacity = "0";
//     setTimeout(() => loader.style.display = "none", 500);
//     content.style.opacity = "1";
// }

// const isLoaded = ["12px", "16px", "20px", "32px", "10px", "18px", "36px", "48px"].some(size => document.fonts.check(`${size} 'SF Pro Display' `));

// if (!isLoaded) {
//     showLoader();
// }
// Promise.all([
//     document.fonts.ready, // Ждём шрифты
//     new Promise(resolve => window.addEventListener("load", resolve)), // Ждём все ресурсы
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()) // Пример API-запроса
// ]).then(hideLoader);

const loader = document.getElementById("loader");
const content = document.getElementById("content");

function showLoader() {
    loader.style.display = "flex";
    content.style.opacity = "0";
}

function hideLoader() {
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
        content.style.opacity = "1";
    });
}

showLoader();

const fontSizes = ["12px", "16px", "20px", "32px", "48px"];
const fonts = ["SF Pro Display", "SF Pro Text", "SF Pro"];

const fontsLoaded = fonts.every(font =>
    fontSizes.some(size => document.fonts.check(`${size} '${font}'`))
);

if (fontsLoaded) {
    hideLoader();
} else {
    Promise.all([
        document.fonts.ready,
        new Promise(resolve => window.addEventListener("load", resolve))
    ]).then(hideLoader);
}