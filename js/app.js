/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/*---------------------------------------------------------------------------
Проверка WebP
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height === 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      document.body.classList.add(support ? "webp" : "no-webp");
   });
}


/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("input.tel-mask").forEach((input) => {
         let keyCode;
         function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ __ __",
               i = 0,
               val = this.value.replace(/\D/g, ""),
               new_value = matrix.replace(/[_\d]/g, (a) =>
                  i < val.length ? val.charAt(i++) : a
               );
            i = new_value.indexOf("_");
            if (i !== -1) {
               i < 5 && (i = 3);
               new_value = new_value.slice(0, i);
            }
            let reg = matrix
               .substr(0, this.value.length)
               .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
               .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
               this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) this.value = "";
         }

         input.addEventListener("input", mask);
         input.addEventListener("focus", mask);
         input.addEventListener("blur", mask);
         input.addEventListener("keydown", mask);
      });
   });
}


/*---------------------------------------------------------------------------
Бургер меню
---------------------------------------------------------------------------*/
function burgerMenu() {
   document.addEventListener("DOMContentLoaded", () => {
      const menuIcon = document.querySelector(".menu__icon");
      const menuBody = document.querySelector(".menu__body");
      const body = document.body;
      const menuBodyClose = document.querySelector(".menu__body-close");
      const animationDuration = 500; // 0,3 секунды

      if (!menuIcon || !menuBody) return;

      const closeMenu = () => {
         menuIcon.classList.remove("active");
         menuBody.classList.remove("active");
         body.classList.remove("no-scroll");
      };

      menuIcon.addEventListener("click", () => {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", (e) => {
         const link = e.target.closest("a");
         if (link) {
            e.preventDefault();
            closeMenu();
            setTimeout(() => {
               window.location.href = link.href;
            }, animationDuration);
         }
      });

      if (menuBodyClose) menuBodyClose.addEventListener("click", closeMenu);

      document.addEventListener("click", (e) => {
         if (!menuBody.contains(e.target) && !menuIcon.contains(e.target)) closeMenu();
      });
   });
}



/*---------------------------------------------------------------------------
Попапы
---------------------------------------------------------------------------*/
function popups() {
   document.addEventListener("DOMContentLoaded", () => {
      const openButtons = document.querySelectorAll(".open-popup");

      openButtons.forEach((button) => {
         button.addEventListener("click", function () {
            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);

            if (popup) {
               popup.classList.add("show");
               document.body.style.overflow = "hidden";
            }
         });
      });

      // Закрытие по клику на затемнение или на кнопку
      document.addEventListener("click", (e) => {
         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         const isCloseBtn = e.target.closest(".popup__close");
         const isInsideBody = e.target.closest(".popup__body");
         const isPopupArea = e.target.closest(".popup");

         if (isCloseBtn || (!isInsideBody && isPopupArea)) {
            openPopup.classList.remove("show");
            document.body.style.overflow = "";
         }
      });

      //  Закрытие попапа по клавише ESC
      document.addEventListener("keydown", (e) => {
         if (e.key !== "Escape") return;

         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         openPopup.classList.remove("show");
         document.body.style.overflow = "";
      });
   });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.popups();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.phoneMask();

/*==========================================================================
Observer Animation
============================================================================*/
if (document.readyState === "complete") {
   init();
} else {
   window.addEventListener("load", init);
}

function init() {
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = { threshold: [0.4] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');
   for (let elm of elements) {
      observer.observe(elm);
   }
}



/*==========================================================================
Lang panel
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   const lang = document.querySelector('.header__lang');
   const button = lang.querySelector('.header__lang-button');
   const list = lang.querySelector('.header__lang-list');

   // --- Функция открытия ---
   function openLang() {
      list.classList.add('show');
      button.classList.add('active');
   }

   // --- Функция закрытия ---
   function closeLang() {
      list.classList.remove('show');
      button.classList.remove('active');
   }

   // --- Наведение мыши ---
   lang.addEventListener('mouseenter', openLang);
   lang.addEventListener('mouseleave', closeLang);

   // --- Клик по кнопке ---
   button.addEventListener('click', (e) => {
      e.preventDefault();
      if (list.classList.contains('show')) {
         closeLang();
      } else {
         openLang();
      }
   });

   // --- Клик вне блока ---
   document.addEventListener('click', (e) => {
      if (!lang.contains(e.target)) {
         closeLang();
      }
   });
});

/*==========================================================================
Header image anim
============================================================================*/
const headerImage = document.querySelector('.header__image svg');
let lastScrollY = 0;
let ticking = false;

function rotateHeader() {
   const rotation = lastScrollY * 0.3;
   headerImage.style.transform = `rotate(${rotation}deg)`;
   ticking = false;
}

window.addEventListener('scroll', () => {
   lastScrollY = window.scrollY;
   if (!ticking) {
      window.requestAnimationFrame(rotateHeader);
      ticking = true;
   }
});



/*==========================================================================
Hero anim
============================================================================*/
const words = document.querySelectorAll('.hero__title-word');
const illustrations = document.querySelectorAll('.hero__card-illustration');

if (words.length && illustrations.length) {
   let current = 0;

   words[current].classList.add('active');
   illustrations[current].classList.add('active');

   setInterval(() => {
      const prev = current;
      current = (current + 1) % words.length;

      words[prev].classList.remove('active');
      words[prev].classList.add('exit');
      words[current].classList.add('active');

      illustrations[prev].classList.remove('active');
      illustrations[current].classList.add('active');

      setTimeout(() => {
         words[prev].classList.remove('exit');
      }, 600);

   }, 3000);
}


/*==========================================================================
Portfolio case 
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   const cases = document.querySelectorAll('.case');

   function mobileLogic() {
      if (window.innerWidth < 768 && cases.length) {

         cases.forEach((item, index) => {
            item.classList.toggle('active', index === 0);
         });
         cases.forEach(caseItem => {
            caseItem.addEventListener('click', (e) => {
               if (e.target.closest('.case__toggle')) return;

               if (caseItem.classList.contains('active')) {
                  caseItem.classList.remove('active');
                  return;
               }
               cases.forEach(item => item.classList.remove('active'));
               caseItem.classList.add('active');
            });
         });

      } else {
         cases.forEach(item => item.classList.remove('active'));
      }
   }
   mobileLogic();
});


/*==========================================================================
Reviews slider
============================================================================*/
const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      freeMode: false,
      parallax: true,
      speed: 800,
      pagination: {
         el: ".reviews__slider-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".reviews__slide-next",
         prevEl: ".reviews__slide-prev",
      },
   });
}


/*==========================================================================
portfolio slider
============================================================================*/
const portfolioSlider = document.querySelector(".portfolio__slider");

if (portfolioSlider) {
   const portfolioSwiper = new Swiper(portfolioSlider, {
      slidesPerView: 3,
      freeMode: true,
      spaceBetween: 10,
      simulateTouch: false,
      slideToClickedSlide: false,
      watchOverflow: true,
      speed: 5000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
      breakpoints: {
         320: {
            slidesPerView: 1.33,
            loop: true,
         },
         767: {
            slidesPerView: 3,
            loop: false,
         }
      },
   });
}

const videos = document.querySelectorAll('.portfolio__slide video');
const breakpoint = 980;

let currentMode = window.innerWidth >= breakpoint ? 'desktop' : 'mobile';

function setVideoBehavior() {
   const isDesktop = window.innerWidth >= breakpoint;
   const newMode = isDesktop ? 'desktop' : 'mobile';

   if (newMode === currentMode) return;

   currentMode = newMode;

   videos.forEach(video => {
      const parent = video.closest('.portfolio__slide');

      parent.onmouseenter = null;
      parent.onmouseleave = null;

      if (isDesktop) {
         video.pause();
         video.currentTime = 0;
         video.loop = false;
         video.removeAttribute('autoplay');

         parent.onmouseenter = () => {
            if (video.paused) {
               video.currentTime = 0;
               video.play().catch(() => { });
            }
         };

         parent.onmouseleave = () => {
            if (!video.paused) {
               video.pause();
               video.currentTime = 0;
            }
         };

      } else {
         video.muted = true;
         video.loop = true;
         video.setAttribute('autoplay', 'true');

         video.play().catch(() => { });
      }
   });
}

setVideoBehavior();
window.addEventListener('resize', setVideoBehavior);


/*==========================================================================
Advantages hover
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const container = document.querySelector(".about__advantages");
   const items = document.querySelectorAll(".about__advantage");

   if (!container || !items.length) return;

   const hoverBg = document.createElement("div");
   hoverBg.className = "about__hover-bg";
   container.appendChild(hoverBg);

   // цвета закреплены за индексами
   const colors = ["#e3ecfb", "#b8e0cf", "#f7e9b3", "#ffdcd1", "#e5dcfd"];

   function getColorForItem(item) {
      const index = Array.from(items).indexOf(item);
      return colors[index % colors.length];
   }

   let mode = null;
   let scrollObserver = null;

   function activateFirst() {
      const first = items[0];
      if (!first) return;

      items.forEach(i => i.classList.remove("active", "prev-hover"));

      first.classList.add("active");

      const rect = first.getBoundingClientRect();
      const parent = container.getBoundingClientRect();

      hoverBg.style.top = rect.top - parent.top + "px";
      hoverBg.style.height = rect.height + "px";
      hoverBg.style.opacity = 1;

      hoverBg.style.backgroundColor = getColorForItem(first);
   }

   // ---------------------------
   // DESKTOP MODE
   // ---------------------------
   function enableHoverMode() {
      if (mode === "hover") return;
      mode = "hover";

      if (scrollObserver) {
         scrollObserver.disconnect();
         scrollObserver = null;
      }

      items.forEach(item => {
         item.removeEventListener("mouseenter", mouseEnterHandler);
      });
      items.forEach(item => {
         item.addEventListener("mouseenter", mouseEnterHandler);
      });

      activateFirst();
   }

   function mouseEnterHandler(e) {
      if (mode !== "hover") return;

      const item = e.currentTarget;

      const rect = item.getBoundingClientRect();
      const parent = container.getBoundingClientRect();

      hoverBg.style.top = rect.top - parent.top + "px";
      hoverBg.style.height = rect.height + "px";
      hoverBg.style.opacity = 1;

      items.forEach(i => i.classList.remove("active", "prev-hover"));
      item.classList.add("active");

      const prev = item.previousElementSibling;
      if (prev) prev.classList.add("prev-hover");

      hoverBg.style.backgroundColor = getColorForItem(item);
   }

   // ---------------------------
   // MOBILE MODE
   // ---------------------------
   function enableScrollMode() {
      if (mode === "scroll") return;

      mode = "scroll";

      items.forEach(item => {
         item.removeEventListener("mouseenter", mouseEnterHandler);
      });

      items.forEach(item => item.classList.remove("active", "prev-hover"));

      const linePercent = 0.60;

      scrollObserver = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (!entry.isIntersecting) return;

               const item = entry.target;

               items.forEach(i => i.classList.remove("active", "prev-hover"));
               item.classList.add("active");

               const prev = item.previousElementSibling;
               if (prev) prev.classList.add("prev-hover");

               const rect = item.getBoundingClientRect();
               const parent = container.getBoundingClientRect();

               hoverBg.style.top = rect.top - parent.top + "px";
               hoverBg.style.height = rect.height + "px";
               hoverBg.style.opacity = 1;
               hoverBg.style.backgroundColor = getColorForItem(item);
            });
         },
         {
            threshold: 0,
            rootMargin: `-${linePercent * 100}% 0px -${(1 - linePercent) * 100}% 0px`
         }
      );

      items.forEach(item => scrollObserver.observe(item));
      activateFirst();
   }

   function checkMode() {
      if (window.innerWidth >= 980) enableHoverMode();
      else enableScrollMode();
   }

   checkMode();
   window.addEventListener("resize", checkMode);
});


/*==========================================================================
Nums
============================================================================*/
document.addEventListener("DOMContentLoaded", function () {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            animateNumbers(entry.target);
            observer.unobserve(entry.target);
         }
      });
   }, {
      threshold: 0.5
   });

   const teamAdvSection = document.querySelector('.team-adv');
   if (teamAdvSection) {
      observer.observe(teamAdvSection);
   }

   function animateNumbers(section) {
      const counters = section.querySelectorAll('i[data-num]');
      counters.forEach(counter => {
         const target = +counter.getAttribute('data-num');
         const duration = 4000;
         const increment = target / (duration / 16);
         let current = 0;

         const updateCount = () => {
            current += increment;
            if (current < target) {
               counter.innerText = Math.floor(current);
               requestAnimationFrame(updateCount);
            } else {
               counter.innerText = target;
            }
         };

         updateCount();
      });
   }
});


/*==========================================================================
Teammate cards
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const teammates = document.querySelectorAll(".teammate");
   const teamButtons = document.querySelectorAll(".open-popup[data-popup='team-popup']");
   let teamSwiper = null;

   // Установка высоты для mobile
   function setBodyHeight(teammate) {
      if (!teammate) return;

      const body = teammate.querySelector('.teammate__body');
      if (!body) return;

      if (teammate.classList.contains('active')) {
         const height = body.scrollHeight + 48;
         body.style.maxHeight = `${height}px`;
      } else {
         body.style.maxHeight = '0px';
      }
   }


   // Пересчёт высоты для всех элементов
   function updateAllBodies() {
      if (window.innerWidth < 768) {
         teammates.forEach(teammate => {
            setBodyHeight(teammate);
         });
      } else {
         teammates.forEach(teammate => {
            const body = teammate.querySelector('.teammate__body');
            if (body) body.style.maxHeight = '';
         });
      }
   }

   // 1) Мобильная логика: активация первого
   function activateFirstMobile() {
      if (window.innerWidth < 768 && teammates.length > 0) {
         const active = Array.from(teammates).some(t => t.classList.contains("active"));

         if (!active) {
            teammates.forEach(t => t.classList.remove("active"));
            teammates[0].classList.add("active");
         }

         updateAllBodies();
      }
   }

   activateFirstMobile();

   // 2) Swiper (desktop)
   function initTeamSwiper(startIndex = 0) {
      if (teamSwiper) {
         teamSwiper.slideTo(startIndex, 0);
         return;
      }

      teamSwiper = new Swiper(".team-popup__slider", {
         initialSlide: startIndex,
         slidesPerView: 'auto',
         centeredSlides: true,
         speed: 500,
         navigation: false,
         keyboard: {
            enabled: true,
            onlyInViewport: true
         },
         breakpoints: {
            768: {
               spaceBetween: 32,
            },
            1400: {
               spaceBetween: 64,
            }
         },
         pagination: {
            el: ".team-popup__paginataion",
            clickable: true,
         },
         navigation: {
            nextEl: ".team-popup__next",
            prevEl: ".team-popup__prev",
         },
      });
   }


   // 3) Клики
   teamButtons.forEach((btn, index) => {

      btn.addEventListener("click", function (e) {
         const isDesktop = window.innerWidth >= 768;
         const teammate = btn.closest(".teammate");

         if (!isDesktop) {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (teammate.classList.contains("active")) {
               teammate.classList.remove("active");
               setBodyHeight(teammate);
               return;
            }

            teammates.forEach(t => {
               t.classList.remove("active");
               setBodyHeight(t);
            });

            teammate.classList.add("active");
            setBodyHeight(teammate);

            return;
         }

         setTimeout(() => {
            initTeamSwiper(index);
         }, 50);

      }, true);
   });

   window.addEventListener("resize", () => {
      activateFirstMobile();
      updateAllBodies();
   });

});


/*==========================================================================
Projects cards
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   let projectSwiper = null;

   function activateFirstMobileProjectInEachSection() {
      if (window.innerWidth < 768) {
         const projectSections = document.querySelectorAll('.projects');

         projectSections.forEach(section => {
            const allProjectsInThisSection = section.querySelectorAll('.project.open-popup[data-popup="projects-popup"]');
            const activeProject = Array.from(allProjectsInThisSection).find(p => p.classList.contains('active'));

            if (!activeProject && allProjectsInThisSection.length) {
               allProjectsInThisSection.forEach(p => p.classList.remove('active'));
               allProjectsInThisSection[0].classList.add('active');
            }
         });
      } else {
         const allActiveProjects = document.querySelectorAll('.project.active');
         allActiveProjects.forEach(p => p.classList.remove('active'));
      }
   }


   activateFirstMobileProjectInEachSection();

   function initProjectSwiper(startIndex = 0) {
      if (projectSwiper) {
         projectSwiper.slideTo(startIndex, 0);
         return;
      }

      projectSwiper = new Swiper(".projects-popup__slider", {
         initialSlide: startIndex,
         effect: 'card',
         slidesPerView: 'auto',
         centeredSlides: true,
         speed: 500,
         keyboard: {
            enabled: true,
            onlyInViewport: true
         },
         pagination: {
            el: ".projects-popup__paginataion",
            clickable: true,
         },
         navigation: {
            nextEl: ".projects-popup__next",
            prevEl: ".projects-popup__prev",
         },
         breakpoints: {
            768: {
               spaceBetween: 32,
            },
            1400: {
               spaceBetween: 64,
            }
         },
      });
   }

   const projects = document.querySelectorAll(".project.open-popup[data-popup='projects-popup']");

   projects.forEach((project, index) => {
      project.addEventListener("click", function (e) {
         const isDesktop = window.innerWidth >= 768;

         // --- MOBILE ---
         if (!isDesktop) {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (project.classList.contains("active")) {
               project.classList.remove("active");
               return;
            }

            const parentSection = project.closest('.projects');
            if (parentSection) {
               const allProjectsInThisSection = parentSection.querySelectorAll('.project.open-popup[data-popup="projects-popup"]');
               allProjectsInThisSection.forEach(p => p.classList.remove('active'));
               project.classList.add("active");
            }
            return;
         }

         // --- DESKTOP — открыть popup ---
         const popupId = project.dataset.popup;
         const popup = document.getElementById(popupId);
         if (!popup) return;

         popup.classList.add("active");

         setTimeout(() => initProjectSwiper(index), 50);
      }, true);
   });

   window.addEventListener("resize", () => {
      activateFirstMobileProjectInEachSection();
   });


});

/*==========================================================================
Completed projects
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const projects = document.querySelectorAll(".completed__project");

   if (!projects.length) return;

   function setHeight(project) {
      const details = project.querySelector(".completed__project-details");
      if (!details) return;
      const height = details.scrollHeight + 20;
      details.style.maxHeight = height + "px";
   }

   function resetHeight(project) {
      const details = project.querySelector(".completed__project-details");
      if (!details) return;
      details.style.maxHeight = "0px";
   }

   function unsetHeight(project) {
      const details = project.querySelector(".completed__project-details");
      if (!details) return;
      details.style.maxHeight = "unset";
   }

   function removePrevClass() {
      projects.forEach(p => p.classList.remove('is-prev'));
   }

   function setPrev(index) {
      removePrevClass();
      if (index > 0) {
         projects[index - 1].classList.add('is-prev');
      }
   }

   function setDefaultHover() {
      projects.forEach((p, i) => {
         p.classList.remove("active");

         if (i === 0) {
            p.classList.add("active");
            setPrev(i);
         }
      });
   }

   function initMobileAccordion() {
      if (window.innerWidth <= 980) {

         projects.forEach((p, i) => {
            if (i === 0) {
               p.classList.add("active");
               setHeight(p);
               setPrev(i);
            } else {
               p.classList.remove("active");
               resetHeight(p);
            }
         });

         projects.forEach((project, i) => {
            project.onclick = () => {
               const isActive = project.classList.contains("active");

               if (isActive) {
                  project.classList.remove("active");
                  resetHeight(project);
                  removePrevClass();
                  return;
               }

               projects.forEach(p => {
                  p.classList.remove("active");
                  resetHeight(p);
               });

               project.classList.add("active");
               setHeight(project);
               setPrev(i);
            };
         });

      } else {

         setDefaultHover();

         projects.forEach((p, i) => {
            unsetHeight(p);

            p.onmouseenter = () => {
               projects.forEach(el => el.classList.remove('active'));
               p.classList.add("active");
               setPrev(i);
            };

         });

      }
   }

   initMobileAccordion();

   window.addEventListener("resize", () => {
      initMobileAccordion();
   });
});


/*==========================================================================
Completed projects hover
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const table = document.querySelector(".completed__table");
   const projects = document.querySelectorAll(".completed__table .completed__project");

   if (!table || !projects.length) return;

   const hoverBg = document.createElement("div");
   hoverBg.className = "completed__hover-bg";
   table.appendChild(hoverBg);

   const colors = ["#e3ecfb", "#b8e0cf", "#f7e9b3", "#ffdcd1", "#e5dcfd"];

   const getColor = (item) => {
      const index = Array.from(projects).indexOf(item);
      return colors[index % colors.length];
   };

   function moveBg(item) {
      const rect = item.getBoundingClientRect();
      const parent = table.getBoundingClientRect();

      hoverBg.style.top = rect.top - parent.top + "px";
      hoverBg.style.height = rect.height + "px";
      hoverBg.style.backgroundColor = getColor(item);
      hoverBg.style.opacity = "1";
   }

   projects.forEach(project => {
      project.addEventListener("mouseenter", () => moveBg(project));
      project.addEventListener("mouseleave", () => {
         hoverBg.style.opacity = "0";
      });
   });
});


/*==========================================================================
Smi slider
============================================================================*/
const smiSlider = document.querySelector(".smi__slider");

if (smiSlider) {
   const smiSwiper = new Swiper(smiSlider, {
      loop: false,
      spaceBetween: 10,
      autoHeight: false,
      speed: 600,
      pagination: {
         el: ".smi__slider-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".smi__slider-next",
         prevEl: ".smi__slider-prev",
      },
      breakpoints: {
         320: {
            direction: "horizontal",
            slidesPerView: 1,
         },
         980: {
            direction: "vertical",
            slidesPerView: 1,
         }
      },
   });
}

document.addEventListener("DOMContentLoaded", () => {
   const prepositions = [
      "в", "во", "на", "к", "ко", "с", "со", "от", "до", "за", "об", "обо",
      "для", "у", "о", "под", "над", "при", "про", "без", "из", "по"
   ];

   const regex = new RegExp(`\\b(${prepositions.join("|")})\\s+`, "gi");

   function replacePrepositions(node) {
      node.childNodes.forEach(child => {
         if (child.nodeType === 3) { // текстовый узел
            child.nodeValue = child.nodeValue.replace(regex, (_, p1) => p1 + "\u00A0");
         } else if (child.nodeType === 1 && !["SCRIPT", "STYLE", "CODE", "PRE"].includes(child.tagName)) {
            replacePrepositions(child);
         }
      });
   }

   replacePrepositions(document.body);
});

})();

/******/ })()
;