import SmoothScroll from './modules/scroll-suave.js';
import initAnimateScroll from './modules/scroll-animate.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab.js';
import initModal from './modules/modal.js';
import iniTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFecthBitcoin from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

initTabNav();
initAnimateScroll();
initAccordion();
initModal();
iniTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFecthBitcoin();
