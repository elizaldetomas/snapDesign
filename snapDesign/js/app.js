addEventListener('load', () => {
    shortenMenu();
    changeImage();
})

const dropdown = document.querySelectorAll('.dropdown');

// Dekstop
dropdown.forEach(sub => {
    sub.parentNode.addEventListener('mouseenter', () => {
        if (innerWidth > 950) sub.classList.add('dropdown--show');
    })
    sub.parentNode.addEventListener('mouseleave', () => {
        if (innerWidth > 950) sub.classList.remove('dropdown--show');
    })
})

// Mobile
dropdown.forEach(sub => {
    sub.parentNode.addEventListener('click', () => {
        if (innerWidth <= 950) sub.classList.toggle('dropdown--show');
    })
})

addEventListener('resize', () => shortenMenu() )

const btn_menu = document.querySelector('.menu');

btn_menu.addEventListener('click', () => toggleMenu())
document.querySelector('.aside__overlay').addEventListener('click', () => toggleMenu())

function toggleMenu() {
    btn_menu.classList.toggle('menu--open');
    document.querySelector('aside').classList.toggle('aside--open');
    document.querySelector('.aside__overlay').classList.toggle('aside__overlay--show');
    if (!btn_menu.classList.contains('menu--open')) {
        dropdown.forEach(sub => sub.classList.remove('dropdown--show'));
    }
}

function shortenMenu() {
    let links = document.querySelector('.links');
    let account = document.querySelector('.header__right');

    if (innerWidth <= 950) {
        document.querySelector('aside').style.display = "flex";
        document.querySelector('aside').appendChild(links);
        document.querySelector('aside').appendChild(account);

    } else {
        document.querySelector('aside').style.display = "none";
        document.querySelector('.header__left').appendChild(links);
        document.querySelector('header').appendChild(account);
        // Hide menu for dekstop
        document.querySelector('.menu').classList.remove('menu--open');
        document.querySelector('.aside__overlay').classList.remove('aside__overlay--show');
        document.querySelector('aside').classList.remove('aside--open');
        dropdown.forEach(sub => sub.classList.remove('dropdown--show'));
    }
}


changeImage();
addEventListener('resize', () => changeImage())

function changeImage() {
    if (innerWidth <= 600) {
        document.querySelector('.main__right img').setAttribute('src', './images/image-hero-mobile.png');
    } else {
        document.querySelector('.main__right img').setAttribute('src', './images/image-hero-desktop.png');
    }
}