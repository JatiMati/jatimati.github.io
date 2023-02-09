const pointerTop = document.querySelector('.intro__pointer-top');
const pointerLeft = document.querySelector('.intro__pointer-left');
const numberY = document.querySelector('.intro__pointer-numbers-y span');
const numberX = document.querySelector('.intro__pointer-numbers-x span');

const rectangle1 = document.querySelector('.intro__rectangle-big');
const rectangle2 = document.querySelector('.intro__rectangle-normal');
const rectangle3 = document.querySelector('.intro__rectangle-small');

const intro = document.querySelector('.intro');

const mateusz = document.querySelector('.intro__mateusz');
const jaroszynski = document.querySelector('.intro__jaroszynski');
const portfolio = document.querySelector('.intro__portfolio');
const cv = document.querySelector('.intro__cv');

let mateuszTop = 0;
let mateuszLeft = 0;
let jaroszynskiTop = 0;
let jaroszynskiLeft = 0;
let portfolioTop = 0;
let portfolioLeft = 0;
let cvTop = 0;
let cvLeft = 0;

function getXY() {
    mateuszTop = getComputedStyle(mateusz).top.slice(0, -2);
    mateuszLeft = getComputedStyle(mateusz).left.slice(0, -2);
    console.log(mateuszTop, mateuszLeft);
    jaroszynskiTop = getComputedStyle(jaroszynski).top.slice(0, -2);
    jaroszynskiLeft = getComputedStyle(jaroszynski).left.slice(0, -2);
    portfolioTop = getComputedStyle(portfolio).top.slice(0, -2);
    portfolioLeft = getComputedStyle(portfolio).left.slice(0, -2);
    cvTop = getComputedStyle(cv).top.slice(0, -2);
    cvLeft = getComputedStyle(cv).left.slice(0, -2);
}
getXY();

const hello = document.querySelector('.intro__welcome');
const info = document.querySelector('.informations');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');

function cursorDependances(e) {
    let x = e.clientX;
    let y = e.clientY;

    let w = window.innerWidth;
    let h = window.innerHeight;

    if (x > mateuszLeft) { mateusz.style.left = `${mateuszLeft - (x / 25)}px` }
    else {
        mateusz.style.left = `${mateuszLeft - (x / 25)}px`
    }
    if (x > w / 2) { jaroszynski.style.left = `${jaroszynskiLeft - (x / 9)}px` }
    else {
        jaroszynski.style.left = `${jaroszynskiLeft - (x / 9)}px`
    }
    if (x > w / 2) { portfolio.style.left = `${portfolioLeft - (x / 12)}px` }
    else {
        portfolio.style.left = `${portfolioLeft - (x / 12)}px`
    }
    if (x > w / 2) { cv.style.left = `${cvLeft - (x / 30)}px` }
    else {
        cv.style.left = `${cvLeft - (x / 30)}px`
    }

    if (y > mateuszTop) { mateusz.style.top = `${mateuszTop - (y / 25)}px` }
    else {
        mateusz.style.top = `${mateuszTop - (y / 25)}px`
    }
    if (y > h / 2) { jaroszynski.style.top = `${jaroszynskiTop - (y / 9)}px` }
    else {
        jaroszynski.style.top = `${jaroszynskiTop - (y / 9)}px`
    }
    if (y > h / 2) { portfolio.style.top = `${portfolioTop - (y / 12)}px` }
    else {
        portfolio.style.top = `${portfolioTop - (y / 12)}px`
    }
    if (y > h / 2) { cv.style.top = `${cvTop - (y / 30)}px` }
    else {
        cv.style.top = `${cvTop - (y / 30)}px`
    }

    pointerTop.style.left = `${x}px`
    pointerLeft.style.top = `${y}px`
    numberX.textContent = `${x}`
    numberY.textContent = `${y}`
}

function scrollDependance(e) {
    let sc = window.scrollY;
    console.log(sc / 20);

    if (sc > 700) {
        info.classList.add('active');
    }
    else { info.classList.remove('active'); }

    circle1.style.transform = `rotate(${160 + sc / 20}deg)`;
    circle2.style.transform = `rotate(${190 + sc / 10}deg)`;
}

const mediaQuery = window.matchMedia('(min-width: 941px)')

function mediaQueryProperSize() {
    if (mediaQuery.matches) {
        window.addEventListener('resize', getXY);
        window.onresize = function () {
            location.reload(false);
        }
        intro.addEventListener('mousemove', cursorDependances);
        document.addEventListener('scroll', scrollDependance);
    }
}
mediaQuery.addListener(mediaQueryProperSize);
mediaQueryProperSize();

