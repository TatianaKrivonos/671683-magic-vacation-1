// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import sliderPagination from './modules/slider-pagination-type.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import './modules/splitting-typography';
import updateImg from './modules/updateImg';

// init modules
mobileHeight();
slider();
sliderPagination();
menu();
footer();
chat();
result();
form();
social();
updateImg();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const body = document.querySelector(`body`);
window.addEventListener(`load`, function () {
  body.classList.add(`loaded`);
});

const backgroundBlock = document.querySelector(`.background-block`);
const pageNav = document.querySelector(`.page-header__nav`);
pageNav.addEventListener(`click`, () => {
  const currentSection = document.querySelector(`.screen.active`);
  if (currentSection && currentSection.classList.contains(`screen--story`)) {
    backgroundBlock.classList.add(`active`);
    setTimeout(() => {
      backgroundBlock.classList.remove(`active`);
    }, 500);
  }
});

const formFieldResult2 = document.querySelector(`#email-field2`);
formFieldResult2.addEventListener(`animationend`, () => {
  formFieldResult2.classList.add(`animation-done`);
});


// ! temporary solution for result titles
const tempoResultBtnS = document.querySelectorAll(`.js-show-result`);
const resultSection1 = document.querySelector(`#result`);
const resultSection2 = document.querySelector(`#result2`);
const resultSection3 = document.querySelector(`#result3`);
const resultImg1 = resultSection1.querySelector(`#win-img-main`).src;
const resultImg2 = resultSection2.querySelector(`#win-img-second`).src;
const resultImg3 = resultSection3.querySelector(`#mistake-img`).src;

const resultSections = [resultSection1, resultSection2, resultSection3];
const resultImages = [resultImg1, resultImg2, resultImg3];

tempoResultBtnS.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    resultSections.forEach((section, i) => {
      if (section.classList.contains(`screen--show`)) {
        const img = section.querySelector(`.result-title-img`);
        img.src = `${resultImages[i]}?` + new Date().getTime();
      }
    });
  });
});
