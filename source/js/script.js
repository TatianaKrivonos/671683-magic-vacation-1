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
  if (currentSection.classList.contains(`screen--story`)) {
    backgroundBlock.classList.add(`active`);
    setTimeout(() => {
      backgroundBlock.classList.remove(`active`);
    }, 500);
  }
});
