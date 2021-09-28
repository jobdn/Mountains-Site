/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/insert-css/index.js":
/*!*******************************************!*\
  !*** ../node_modules/insert-css/index.js ***!
  \*******************************************/
/***/ (function(module) {

var inserted = [];

module.exports = function (css) {
  if (inserted.indexOf(css) >= 0) return;
  inserted.push(css);
  var elem = document.createElement('style');
  var text = document.createTextNode(css);
  elem.appendChild(text);

  if (document.head.childNodes.length) {
    document.head.insertBefore(elem, document.head.childNodes[0]);
  } else {
    document.head.appendChild(elem);
  }
};

/***/ }),

/***/ "../node_modules/normalize-css/index.js":
/*!**********************************************!*\
  !*** ../node_modules/normalize-css/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var insert = __webpack_require__(/*! insert-css */ "../node_modules/insert-css/index.js");

var normalize = __webpack_require__(/*! ./normalize */ "../node_modules/normalize-css/normalize.js");

insert(normalize);

/***/ }),

/***/ "../node_modules/normalize-css/normalize.js":
/*!**************************************************!*\
  !*** ../node_modules/normalize-css/normalize.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n";

/***/ }),

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/***/ (function() {

document.addEventListener('DOMContentLoaded', () => {
  const closeAccordion = (accordion, contentSelector) => {
    const content = accordion.querySelector(contentSelector);
    accordion.dataset.open = false;
    content.style.maxHeight = '';
  };

  const smothHeight = (accordionSelector, titleSelector, contentSelector) => {
    const accordions = document.querySelectorAll(accordionSelector);
    if (!accordions.length) return;
    accordions.forEach(accordion => {
      const title = accordion.querySelector(titleSelector);
      const content = accordion.querySelector(contentSelector);
      title.addEventListener('click', event => {
        if (accordion.dataset.open !== 'true') {
          accordions.forEach(accordionForClose => closeAccordion(accordionForClose, contentSelector));
          accordion.dataset.open = true;
          content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
          closeAccordion(accordion, contentSelector);
        }
      });

      const onResize = () => {
        if (accordion.dataset.open === 'true') {
          if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
            content.style.maxHeight = `${content.scrollHeight}px`;
          }
        }
      };

      window.addEventListener('resize', onResize);
    });
  };

  smothHeight('.accordion', '.accordion__title', '.accordion__content');
});

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/normalize-css */ "../node_modules/normalize-css/index.js");
/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/normalize-scss */ "../node_modules/normalize-scss/sass/_normalize.scss");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _simpleSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simpleSlider */ "./js/simpleSlider.js");
/* harmony import */ var _simpleSlider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_simpleSlider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion */ "./js/accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ (function() {

const menu_links = document.querySelectorAll(".nav__link");
window.addEventListener('scroll', function () {
  let winScroll = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = winScroll / scrollHeight * 100;
  document.querySelector(".menu-slider.menu-slider_active").style.width = scrolled + "%";
});

/***/ }),

/***/ "./js/simpleSlider.js":
/*!****************************!*\
  !*** ./js/simpleSlider.js ***!
  \****************************/
/***/ (function() {

/**
 * SimpleAdaptiveSlider by Itchief v2.0.0 (https://github.com/itchief/ui-components/tree/master/simple-adaptive-slider)
 * Copyright 2020 - 2021 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 */
(function () {
  if (typeof window.CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return e;
  }

  window.CustomEvent = CustomEvent;
})(); // базовые классы и селекторы


var WRAPPER_SELECTOR = '.slider__wrapper';
var ITEMS_SELECTOR = '.slider__items';
var ITEM_SELECTOR = '.slider__item';
var ITEM_CLASS_ACTIVE = 'slider__item_active';
var CONTROL_SELECTOR = '.slider__control';
var CONTROL_CLASS_SHOW = 'slider__control_show'; // индикаторы

var INDICATOR_WRAPPER_ELEMENT = 'ol';
var INDICATOR_WRAPPER_CLASS = 'slider__indicators';
var INDICATOR_ITEM_ELEMENT = 'li';
var INDICATOR_ITEM_CLASS = 'slider__indicator';
var INDICATOR_ITEM_CLASS_ACTIVE = 'slider__indicator_active'; // порог для переключения слайда (40%)

var SWIPE_THRESHOLD = 20; // класс для отключения transition

var TRANSITION_NONE = 'transition-none';

function SimpleAdaptiveSlider(selector, config) {
  // .slider
  this._$root = document.querySelector(selector); // .slider__wrapper

  this._$wrapper = this._$root.querySelector(WRAPPER_SELECTOR); // .slider__items

  this._$items = this._$root.querySelector(ITEMS_SELECTOR); // .slider__item

  this._$itemList = this._$root.querySelectorAll(ITEM_SELECTOR); // текущий индекс

  this._currentIndex = 0; // экстремальные значения слайдов

  this._minOrder = 0;
  this._maxOrder = 0;
  this._$itemWithMinOrder = null;
  this._$itemWithMaxOrder = null;
  this._minTranslate = 0;
  this._maxTranslate = 0; // направление смены слайдов (по умолчанию)

  this._direction = 'next'; // флаг, который показывает, что идёт процесс уравновешивания слайдов

  this._balancingItemsFlag = false; // текущее значение трансформации

  this._transform = 0; // swipe параметры

  this._hasSwipeState = false;
  this._swipeStartPosX = 0; // id таймера

  this._intervalId = null; // конфигурация слайдера (по умолчанию)

  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true
  }; // изменяем конфигурацию слайдера в соответствии с переданными настройками

  for (var key in config) {
    if (this._config.hasOwnProperty(key)) {
      this._config[key] = config[key];
    }
  } // добавляем к слайдам data-атрибуты


  for (var i = 0, length = this._$itemList.length; i < length; i++) {
    this._$itemList[i].dataset.order = i;
    this._$itemList[i].dataset.index = i;
    this._$itemList[i].dataset.translate = 0;
  } // перемещаем последний слайд перед первым


  if (this._config.loop) {
    var count = this._$itemList.length - 1;
    var translate = -this._$itemList.length * 100;
    this._$itemList[count].dataset.order = -1;
    this._$itemList[count].dataset.translate = -this._$itemList.length * 100;
    var transformValue = 'translateX('.concat(translate, '%)');
    this._$itemList[count].style.transform = transformValue;
  } // добавляем индикаторы к слайдеру


  this._addIndicators(); // обновляем экстремальные значения переменных


  this._refreshExtremeValues(); // помечаем активные элементы


  this._setActiveClass(); // назначаем обработчики


  this._addEventListener(); // запускаем автоматическую смену слайдов


  this._autoplay();
} // set active class


SimpleAdaptiveSlider.prototype._setActiveClass = function () {
  // slides
  var i;
  var length;
  var $item;
  var index;

  for (i = 0, length = this._$itemList.length; i < length; i++) {
    $item = this._$itemList[i];
    index = parseInt($item.dataset.index);

    if (this._currentIndex === index) {
      $item.classList.add(ITEM_CLASS_ACTIVE);
    } else {
      $item.classList.remove(ITEM_CLASS_ACTIVE);
    }
  } // indicators


  var $indicators = this._$root.querySelectorAll('.' + INDICATOR_ITEM_CLASS);

  if ($indicators.length) {
    for (i = 0, length = $indicators.length; i < length; i++) {
      $item = $indicators[i];
      index = parseInt($item.dataset.slideTo);

      if (this._currentIndex === index) {
        $item.classList.add(INDICATOR_ITEM_CLASS_ACTIVE);
      } else {
        $item.classList.remove(INDICATOR_ITEM_CLASS_ACTIVE);
      }
    }
  } // controls


  var $controls = this._$root.querySelectorAll(CONTROL_SELECTOR);

  if (!$controls.length) {
    return;
  }

  if (this._config.loop) {
    for (i = 0, length = $controls.length; i < length; i++) {
      $controls[i].classList.add(CONTROL_CLASS_SHOW);
    }
  } else {
    if (this._currentIndex === 0) {
      $controls[0].classList.remove(CONTROL_CLASS_SHOW);
      $controls[1].classList.add(CONTROL_CLASS_SHOW);
    } else if (this._currentIndex === this._$itemList.length - 1) {
      $controls[0].classList.add(CONTROL_CLASS_SHOW);
      $controls[1].classList.remove(CONTROL_CLASS_SHOW);
    } else {
      $controls[0].classList.add(CONTROL_CLASS_SHOW);
      $controls[1].classList.add(CONTROL_CLASS_SHOW);
    }
  }
}; // смена слайдов


SimpleAdaptiveSlider.prototype._move = function () {
  if (this._direction === 'none') {
    this._$items.classList.remove(TRANSITION_NONE);

    this._$items.style.transform = 'translateX('.concat(this._transform, '%)');
    return;
  }

  if (!this._config.loop) {
    var condition = this._currentIndex + 1 >= this._$itemList.length;

    if (condition && this._direction === 'next') {
      this._autoplay('stop');

      return;
    }

    if (this._currentIndex <= 0 && this._direction === 'prev') {
      return;
    }
  }

  var step = this._direction === 'next' ? -100 : 100;
  var transform = this._transform + step;

  if (this._direction === 'next') {
    if (++this._currentIndex > this._$itemList.length - 1) {
      this._currentIndex -= this._$itemList.length;
    }
  } else {
    if (--this._currentIndex < 0) {
      this._currentIndex += this._$itemList.length;
    }
  }

  this._transform = transform;
  this._$items.style.transform = 'translateX('.concat(transform, '%)');

  this._setActiveClass();
}; // функция для перемещения к слайду по индексу


SimpleAdaptiveSlider.prototype._moveTo = function (index) {
  var currentIndex = this._currentIndex;
  this._direction = index > currentIndex ? 'next' : 'prev';

  for (var i = 0; i < Math.abs(index - currentIndex); i++) {
    this._move();
  }
}; // метод для автоматической смены слайдов


SimpleAdaptiveSlider.prototype._autoplay = function (action) {
  if (!this._config.autoplay) {
    return;
  }

  if (action === 'stop') {
    clearInterval(this._intervalId);
    this._intervalId = null;
    return;
  }

  if (this._intervalId === null) {
    this._intervalId = setInterval(function () {
      this._direction = 'next';

      this._move();
    }.bind(this), this._config.interval);
  }
}; // добавление индикаторов


SimpleAdaptiveSlider.prototype._addIndicators = function () {
  if (this._$root.querySelector('.' + INDICATOR_WRAPPER_CLASS)) {
    return;
  }

  var $wrapper = document.createElement(INDICATOR_WRAPPER_ELEMENT);
  $wrapper.className = INDICATOR_WRAPPER_CLASS;

  for (var i = 0, length = this._$itemList.length; i < length; i++) {
    var $item = document.createElement(INDICATOR_ITEM_ELEMENT);
    $item.className = INDICATOR_ITEM_CLASS;
    $item.dataset.slideTo = i;
    $wrapper.appendChild($item);
  }

  this._$root.appendChild($wrapper);
}; // refresh extreme values


SimpleAdaptiveSlider.prototype._refreshExtremeValues = function () {
  var $itemList = this._$itemList;
  this._minOrder = parseInt($itemList[0].dataset.order);
  this._maxOrder = this._minOrder;
  this._$itemWithMinOrder = $itemList[0];
  this._$itemWithMaxOrder = this._$itemWithMinOrder;
  this._minTranslate = parseInt($itemList[0].dataset.translate);
  this._maxTranslate = this._minTranslate;

  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var order = parseInt($item.dataset.order);

    if (order < this._minOrder) {
      this._minOrder = order;
      this._$itemWithMinOrder = $item;
      this._minTranslate = parseInt($item.dataset.translate);
    } else if (order > this._maxOrder) {
      this._maxOrder = order;
      this._$itemWithMaxOrder = $item;
      this._minTranslate = parseInt($item.dataset.translate);
    }
  }
}; // balancing items


SimpleAdaptiveSlider.prototype._balancingItems = function () {
  if (!this._balancingItemsFlag) {
    return;
  }

  var $wrapper = this._$wrapper;
  var wrapperRect = $wrapper.getBoundingClientRect();
  var halfWidthItem = wrapperRect.width / 2;
  var count = this._$itemList.length;
  var translate;
  var clientRect;

  if (this._direction === 'next') {
    var wrapperLeft = wrapperRect.left;
    var $min = this._$itemWithMinOrder;
    translate = this._minTranslate;
    clientRect = $min.getBoundingClientRect();

    if (clientRect.right < wrapperLeft - halfWidthItem) {
      $min.dataset.order = this._minOrder + count;
      translate += count * 100;
      $min.dataset.translate = translate;
      $min.style.transform = 'translateX('.concat(translate, '%)');

      this._refreshExtremeValues();
    }
  } else if (this._direction === 'prev') {
    var wrapperRight = wrapperRect.right;
    var $max = this._$itemWithMaxOrder;
    translate = this._maxTranslate;
    clientRect = $max.getBoundingClientRect();

    if (clientRect.left > wrapperRight + halfWidthItem) {
      $max.dataset.order = this._maxOrder - count;
      translate -= count * 100;
      $max.dataset.translate = translate;
      $max.style.transform = 'translateX('.concat(translate, '%)');

      this._refreshExtremeValues();
    }
  }

  requestAnimationFrame(this._balancingItems.bind(this));
}; // adding listeners


SimpleAdaptiveSlider.prototype._addEventListener = function () {
  var $items = this._$items;

  function onClick(e) {
    var $target = e.target;

    this._autoplay('stop');

    if ($target.classList.contains('slider__control')) {
      e.preventDefault();
      this._direction = $target.dataset.slide;

      this._move();
    } else if ($target.dataset.slideTo) {
      e.preventDefault();
      var index = parseInt($target.dataset.slideTo);

      this._moveTo(index);
    }

    if (this._config.loop) {
      this._autoplay();
    }
  }

  function onTransitionStart() {
    this._balancingItemsFlag = true;
    window.requestAnimationFrame(this._balancingItems.bind(this));
  }

  function onTransitionEnd() {
    this._balancingItemsFlag = false;

    this._$root.dispatchEvent(new CustomEvent('slider.transition.end', {
      bubbles: true
    }));
  }

  function onMouseEnter() {
    this._autoplay('stop');
  }

  function onMouseLeave() {
    if (this._config.loop) {
      this._autoplay();
    }
  }

  function onSwipeStart(e) {
    this._autoplay('stop');

    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this._swipeStartPosX = event.clientX;
    this._swipeStartPosY = event.clientY;
    this._hasSwipeState = true;
    this._hasSwiping = false;
  }

  function onSwipeMove(e) {
    if (!this._hasSwipeState) {
      return;
    }

    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    var diffPosX = this._swipeStartPosX - event.clientX;
    var diffPosY = this._swipeStartPosY - event.clientY;

    if (!this._hasSwiping) {
      if (Math.abs(diffPosY) > Math.abs(diffPosX)) {
        this._hasSwipeState = false;
        return;
      }

      this._hasSwiping = true;
    }

    e.preventDefault();

    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }

      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }

    var value = diffPosX / this._$wrapper.getBoundingClientRect().width * 100;
    var translateX = this._transform - value;

    this._$items.classList.add(TRANSITION_NONE);

    this._$items.style.transform = 'translateX('.concat(translateX, '%)');
  }

  function onSwipeEnd(e) {
    if (!this._hasSwipeState) {
      return;
    }

    var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    var diffPosX = this._swipeStartPosX - event.clientX;

    if (!this._config.loop) {
      if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
        diffPosX = diffPosX / 4;
      }

      if (this._currentIndex <= 0 && diffPosX <= 0) {
        diffPosX = diffPosX / 4;
      }
    }

    var value = diffPosX / this._$wrapper.getBoundingClientRect().width * 100;

    this._$items.classList.remove(TRANSITION_NONE);

    if (value > SWIPE_THRESHOLD) {
      this._direction = 'next';

      this._move();
    } else if (value < -SWIPE_THRESHOLD) {
      this._direction = 'prev';

      this._move();
    } else {
      this._direction = 'none';

      this._move();
    }

    this._hasSwipeState = false;

    if (this._config.loop) {
      this._autoplay();
    }
  }

  function onDragStart(e) {
    e.preventDefault();
  }

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this._autoplay('stop');
    } else if (document.visibilityState === 'visible') {
      if (this._config.loop) {
        this._autoplay();
      }
    }
  } // click


  this._$root.addEventListener('click', onClick.bind(this)); // transitionstart and transitionend


  if (this._config.loop) {
    $items.addEventListener('transitionstart', onTransitionStart.bind(this));
    $items.addEventListener('transitionend', onTransitionEnd.bind(this));
  } // mouseenter and mouseleave


  if (this._config.autoplay) {
    this._$root.addEventListener('mouseenter', onMouseEnter.bind(this));

    this._$root.addEventListener('mouseleave', onMouseLeave.bind(this));
  } // swipe


  if (this._config.swipe) {
    var supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        }
      });
      window.addEventListener('testPassiveListener', null, opts);
    } catch (err) {}

    this._$root.addEventListener('touchstart', onSwipeStart.bind(this), supportsPassive ? {
      passive: false
    } : false);

    this._$root.addEventListener('touchmove', onSwipeMove.bind(this), supportsPassive ? {
      passive: false
    } : false);

    this._$root.addEventListener('mousedown', onSwipeStart.bind(this));

    this._$root.addEventListener('mousemove', onSwipeMove.bind(this));

    document.addEventListener('touchend', onSwipeEnd.bind(this));
    document.addEventListener('mouseup', onSwipeEnd.bind(this));
  }

  this._$root.addEventListener('dragstart', onDragStart.bind(this)); // при изменении активности вкладки


  document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
}; // перейти к следующему слайду


SimpleAdaptiveSlider.prototype.next = function () {
  this._direction = 'next';

  this._move();
}; // перейти к предыдущему слайду


SimpleAdaptiveSlider.prototype.prev = function () {
  this._direction = 'prev';

  this._move();
}; // управление автоматической сменой слайдов


SimpleAdaptiveSlider.prototype.autoplay = function (action) {
  this._autoplay('stop');
};

document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  new SimpleAdaptiveSlider('.journal__slider', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true
  });
});

/***/ }),

/***/ "../node_modules/normalize-scss/sass/_normalize.scss":
/*!***********************************************************!*\
  !*** ../node_modules/normalize-scss/sass/_normalize.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"vendors-node_modules_normalize-scss_sass__normalize_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_normalize-scss_sass__normalize_scss"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQSxzSUFBc0ksOENBQThDO1VBQ3BMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbnNlcnQtY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3Mvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2pzL3NpbXBsZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1zY3NzL3Nhc3MvX25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3Mvc3R5bGUuc2Nzcz9mODBjIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbnNlcnRlZCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQuaW5kZXhPZihjc3MpID49IDApIHJldHVybjtcbiAgICBpbnNlcnRlZC5wdXNoKGNzcyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbn07XG4iLCJ2YXIgaW5zZXJ0ID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJyk7XG5cbmluc2VydChub3JtYWxpemUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFR5cG9ncmFwaHlcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgZm9udCBmYW1pbHkgc2V0IG9kZGx5IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi8qKlxcbiAqIFNldCBjb25zaXN0ZW50IHF1b3RlIHR5cGVzLlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCIgXFxcIlxcXFwyMDFEXFxcIiBcXFwiXFxcXDIwMThcXFwiIFxcXCJcXFxcMjAxOVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZpZ3VyZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpIDUuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDIgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQWNjb3JkaW9uID0gKGFjY29yZGlvbiwgY29udGVudFNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKGNvbnRlbnRTZWxlY3Rvcik7XHJcbiAgICAgICAgYWNjb3JkaW9uLmRhdGFzZXQub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc21vdGhIZWlnaHQgPSAoYWNjb3JkaW9uU2VsZWN0b3IsIHRpdGxlU2VsZWN0b3IsIGNvbnRlbnRTZWxlY3RvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjY29yZGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvcmRpb25zLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhY2NvcmRpb25zLmZvckVhY2goYWNjb3JkaW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0aXRsZVNlbGVjdG9yKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKGNvbnRlbnRTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvbi5kYXRhc2V0Lm9wZW4gIT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGlvbnMuZm9yRWFjaCgoYWNjb3JkaW9uRm9yQ2xvc2UpID0+IGNsb3NlQWNjb3JkaW9uKGFjY29yZGlvbkZvckNsb3NlLCBjb250ZW50U2VsZWN0b3IpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvcmRpb24uZGF0YXNldC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBY2NvcmRpb24oYWNjb3JkaW9uLCBjb250ZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvbi5kYXRhc2V0Lm9wZW4gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChjb250ZW50LnN0eWxlLm1heEhlaWdodCkgIT09IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgc21vdGhIZWlnaHQoJy5hY2NvcmRpb24nLCAnLmFjY29yZGlvbl9fdGl0bGUnLCAnLmFjY29yZGlvbl9fY29udGVudCcpO1xyXG59KTsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nzc1wiO1xyXG5pbXBvcnQgJy4vbWVudSc7XHJcbmltcG9ydCAnLi9zaW1wbGVTbGlkZXInO1xyXG5pbXBvcnQgXCIuL2FjY29yZGlvblwiOyIsImNvbnN0IG1lbnVfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2luU2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSAod2luU2Nyb2xsIC8gc2Nyb2xsSGVpZ2h0KSAqIDEwMDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1zbGlkZXIubWVudS1zbGlkZXJfYWN0aXZlXCIpLnN0eWxlLndpZHRoID0gc2Nyb2xsZWQgKyBcIiVcIjtcclxufSkiLCIvKipcclxuICogU2ltcGxlQWRhcHRpdmVTbGlkZXIgYnkgSXRjaGllZiB2Mi4wLjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9pdGNoaWVmL3VpLWNvbXBvbmVudHMvdHJlZS9tYXN0ZXIvc2ltcGxlLWFkYXB0aXZlLXNsaWRlcilcclxuICogQ29weXJpZ2h0IDIwMjAgLSAyMDIxIEFsZXhhbmRlciBNYWx0c2V2XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2l0Y2hpZWYvdWktY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcclxuICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogbnVsbCB9O1xyXG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgIGUuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXG4gICAgcmV0dXJuIGU7XHJcbiAgfVxyXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59KSgpO1xyXG5cclxuLy8g0LHQsNC30L7QstGL0LUg0LrQu9Cw0YHRgdGLINC4INGB0LXQu9C10LrRgtC+0YDRi1xyXG52YXIgV1JBUFBFUl9TRUxFQ1RPUiA9ICcuc2xpZGVyX193cmFwcGVyJztcclxudmFyIElURU1TX1NFTEVDVE9SID0gJy5zbGlkZXJfX2l0ZW1zJztcclxudmFyIElURU1fU0VMRUNUT1IgPSAnLnNsaWRlcl9faXRlbSc7XHJcbnZhciBJVEVNX0NMQVNTX0FDVElWRSA9ICdzbGlkZXJfX2l0ZW1fYWN0aXZlJztcclxudmFyIENPTlRST0xfU0VMRUNUT1IgPSAnLnNsaWRlcl9fY29udHJvbCc7XHJcbnZhciBDT05UUk9MX0NMQVNTX1NIT1cgPSAnc2xpZGVyX19jb250cm9sX3Nob3cnO1xyXG4vLyDQuNC90LTQuNC60LDRgtC+0YDRi1xyXG52YXIgSU5ESUNBVE9SX1dSQVBQRVJfRUxFTUVOVCA9ICdvbCc7XHJcbnZhciBJTkRJQ0FUT1JfV1JBUFBFUl9DTEFTUyA9ICdzbGlkZXJfX2luZGljYXRvcnMnO1xyXG52YXIgSU5ESUNBVE9SX0lURU1fRUxFTUVOVCA9ICdsaSc7XHJcbnZhciBJTkRJQ0FUT1JfSVRFTV9DTEFTUyA9ICdzbGlkZXJfX2luZGljYXRvcic7XHJcbnZhciBJTkRJQ0FUT1JfSVRFTV9DTEFTU19BQ1RJVkUgPSAnc2xpZGVyX19pbmRpY2F0b3JfYWN0aXZlJztcclxuLy8g0L/QvtGA0L7QsyDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCAoNDAlKVxyXG52YXIgU1dJUEVfVEhSRVNIT0xEID0gMjA7XHJcbi8vINC60LvQsNGB0YEg0LTQu9GPINC+0YLQutC70Y7Rh9C10L3QuNGPIHRyYW5zaXRpb25cclxudmFyIFRSQU5TSVRJT05fTk9ORSA9ICd0cmFuc2l0aW9uLW5vbmUnO1xyXG5cclxuZnVuY3Rpb24gU2ltcGxlQWRhcHRpdmVTbGlkZXIoc2VsZWN0b3IsIGNvbmZpZykge1xyXG4gIC8vIC5zbGlkZXJcclxuICB0aGlzLl8kcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gIC8vIC5zbGlkZXJfX3dyYXBwZXJcclxuICB0aGlzLl8kd3JhcHBlciA9IHRoaXMuXyRyb290LnF1ZXJ5U2VsZWN0b3IoV1JBUFBFUl9TRUxFQ1RPUik7XHJcbiAgLy8gLnNsaWRlcl9faXRlbXNcclxuICB0aGlzLl8kaXRlbXMgPSB0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yKElURU1TX1NFTEVDVE9SKTtcclxuICAvLyAuc2xpZGVyX19pdGVtXHJcbiAgdGhpcy5fJGl0ZW1MaXN0ID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvckFsbChJVEVNX1NFTEVDVE9SKTtcclxuICAvLyDRgtC10LrRg9GJ0LjQuSDQuNC90LTQtdC60YFcclxuICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xyXG4gIC8vINGN0LrRgdGC0YDQtdC80LDQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0YHQu9Cw0LnQtNC+0LJcclxuICB0aGlzLl9taW5PcmRlciA9IDA7XHJcbiAgdGhpcy5fbWF4T3JkZXIgPSAwO1xyXG4gIHRoaXMuXyRpdGVtV2l0aE1pbk9yZGVyID0gbnVsbDtcclxuICB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlciA9IG51bGw7XHJcbiAgdGhpcy5fbWluVHJhbnNsYXRlID0gMDtcclxuICB0aGlzLl9tYXhUcmFuc2xhdGUgPSAwO1xyXG4gIC8vINC90LDQv9GA0LDQstC70LXQvdC40LUg0YHQvNC10L3RiyDRgdC70LDQudC00L7QsiAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4pXHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gIC8vINGE0LvQsNCzLCDQutC+0YLQvtGA0YvQuSDQv9C+0LrQsNC30YvQstCw0LXRgiwg0YfRgtC+INC40LTRkdGCINC/0YDQvtGG0LXRgdGBINGD0YDQsNCy0L3QvtCy0LXRiNC40LLQsNC90LjRjyDRgdC70LDQudC00L7QslxyXG4gIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gIC8vINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LhcclxuICB0aGlzLl90cmFuc2Zvcm0gPSAwO1xyXG4gIC8vIHN3aXBlINC/0LDRgNCw0LzQtdGC0YDRi1xyXG4gIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICB0aGlzLl9zd2lwZVN0YXJ0UG9zWCA9IDA7XHJcbiAgLy8gaWQg0YLQsNC50LzQtdGA0LBcclxuICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcclxuICAvLyDQutC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4pXHJcbiAgdGhpcy5fY29uZmlnID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgc3dpcGU6IHRydWUsXHJcbiAgfTtcclxuICAvLyDQuNC30LzQtdC90Y/QtdC8INC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjiDRgdC70LDQudC00LXRgNCwINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQv9C10YDQtdC00LDQvdC90YvQvNC4INC90LDRgdGC0YDQvtC50LrQsNC80LhcclxuICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC6INGB0LvQsNC50LTQsNC8IGRhdGEt0LDRgtGA0LjQsdGD0YLRi1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuXyRpdGVtTGlzdFtpXS5kYXRhc2V0Lm9yZGVyID0gaTtcclxuICAgIHRoaXMuXyRpdGVtTGlzdFtpXS5kYXRhc2V0LmluZGV4ID0gaTtcclxuICAgIHRoaXMuXyRpdGVtTGlzdFtpXS5kYXRhc2V0LnRyYW5zbGF0ZSA9IDA7XHJcbiAgfVxyXG4gIC8vINC/0LXRgNC10LzQtdGJ0LDQtdC8INC/0L7RgdC70LXQtNC90LjQuSDRgdC70LDQudC0INC/0LXRgNC10LQg0L/QtdGA0LLRi9C8XHJcbiAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICB2YXIgY291bnQgPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoIC0gMTtcclxuICAgIHZhciB0cmFuc2xhdGUgPSAtdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAqIDEwMDtcclxuICAgIHRoaXMuXyRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC5vcmRlciA9IC0xO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0LnRyYW5zbGF0ZSA9IC10aGlzLl8kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgdmFyIHRyYW5zZm9ybVZhbHVlID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNsYXRlLCAnJSknKTtcclxuICAgIHRoaXMuXyRpdGVtTGlzdFtjb3VudF0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XHJcbiAgfVxyXG4gIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQuNC90LTQuNC60LDRgtC+0YDRiyDQuiDRgdC70LDQudC00LXRgNGDXHJcbiAgdGhpcy5fYWRkSW5kaWNhdG9ycygpO1xyXG4gIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDRjdC60YHRgtGA0LXQvNCw0LvRjNC90YvQtSDQt9C90LDRh9C10L3QuNGPINC/0LXRgNC10LzQtdC90L3Ri9GFXHJcbiAgdGhpcy5fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICAvLyDQv9C+0LzQtdGH0LDQtdC8INCw0LrRgtC40LLQvdGL0LUg0Y3Qu9C10LzQtdC90YLRi1xyXG4gIHRoaXMuX3NldEFjdGl2ZUNsYXNzKCk7XHJcbiAgLy8g0L3QsNC30L3QsNGH0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60LhcclxuICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XHJcbiAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutGD0Y4g0YHQvNC10L3RgyDRgdC70LDQudC00L7QslxyXG4gIHRoaXMuX2F1dG9wbGF5KCk7XHJcbn1cclxuXHJcbi8vIHNldCBhY3RpdmUgY2xhc3NcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9zZXRBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBzbGlkZXNcclxuICB2YXIgaTtcclxuICB2YXIgbGVuZ3RoO1xyXG4gIHZhciAkaXRlbTtcclxuICB2YXIgaW5kZXg7XHJcbiAgZm9yIChpID0gMCwgbGVuZ3RoID0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAkaXRlbSA9IHRoaXMuXyRpdGVtTGlzdFtpXTtcclxuICAgIGluZGV4ID0gcGFyc2VJbnQoJGl0ZW0uZGF0YXNldC5pbmRleCk7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKElURU1fQ0xBU1NfQUNUSVZFKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoSVRFTV9DTEFTU19BQ1RJVkUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBpbmRpY2F0b3JzXHJcbiAgdmFyICRpbmRpY2F0b3JzID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLicgKyBJTkRJQ0FUT1JfSVRFTV9DTEFTUyk7XHJcbiAgaWYgKCRpbmRpY2F0b3JzLmxlbmd0aCkge1xyXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gJGluZGljYXRvcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgJGl0ZW0gPSAkaW5kaWNhdG9yc1tpXTtcclxuICAgICAgaW5kZXggPSBwYXJzZUludCgkaXRlbS5kYXRhc2V0LnNsaWRlVG8pO1xyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkaXRlbS5jbGFzc0xpc3QucmVtb3ZlKElORElDQVRPUl9JVEVNX0NMQVNTX0FDVElWRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gY29udHJvbHNcclxuICB2YXIgJGNvbnRyb2xzID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvckFsbChDT05UUk9MX1NFTEVDVE9SKTtcclxuICBpZiAoISRjb250cm9scy5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSAkY29udHJvbHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgJGNvbnRyb2xzW2ldLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gMCkge1xyXG4gICAgICAkY29udHJvbHNbMF0uY2xhc3NMaXN0LnJlbW92ZShDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgICAkY29udHJvbHNbMV0uY2xhc3NMaXN0LmFkZChDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICRjb250cm9sc1swXS5jbGFzc0xpc3QuYWRkKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICAgICRjb250cm9sc1sxXS5jbGFzc0xpc3QucmVtb3ZlKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkY29udHJvbHNbMF0uY2xhc3NMaXN0LmFkZChDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgICAkY29udHJvbHNbMV0uY2xhc3NMaXN0LmFkZChDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vINGB0LzQtdC90LAg0YHQu9Cw0LnQtNC+0LJcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICdub25lJykge1xyXG4gICAgdGhpcy5fJGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoVFJBTlNJVElPTl9OT05FKTtcclxuICAgIHRoaXMuXyRpdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0aGlzLl90cmFuc2Zvcm0sICclKScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIXRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICB2YXIgY29uZGl0aW9uID0gdGhpcy5fY3VycmVudEluZGV4ICsgMSA+PSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgaWYgKGNvbmRpdGlvbiAmJiB0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDw9IDAgJiYgdGhpcy5fZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgc3RlcCA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25leHQnID8gLTEwMCA6IDEwMDtcclxuICB2YXIgdHJhbnNmb3JtID0gdGhpcy5fdHJhbnNmb3JtICsgc3RlcDtcclxuICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgIGlmICgrK3RoaXMuX2N1cnJlbnRJbmRleCA+IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCAtPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoLS10aGlzLl9jdXJyZW50SW5kZXggPCAwKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCArPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgdGhpcy5fJGl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zZm9ybSwgJyUpJyk7XHJcbiAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoKTtcclxufTtcclxuXHJcbi8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQv9C10YDQtdC80LXRidC10L3QuNGPINC6INGB0LvQsNC50LTRgyDQv9C+INC40L3QtNC10LrRgdGDXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fbW92ZVRvID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcclxuICB0aGlzLl9kaXJlY3Rpb24gPSBpbmRleCA+IGN1cnJlbnRJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IE1hdGguYWJzKGluZGV4IC0gY3VycmVudEluZGV4KTsgaSsrKSB7XHJcbiAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0LzQtdGC0L7QtCDQtNC70Y8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60L7QuSDRgdC80LXQvdGLINGB0LvQsNC50LTQvtCyXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fYXV0b3BsYXkgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLl9jb25maWcuYXV0b3BsYXkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGFjdGlvbiA9PT0gJ3N0b3AnKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICh0aGlzLl9pbnRlcnZhbElkID09PSBudWxsKSB7XHJcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbi8vINC00L7QsdCw0LLQu9C10L3QuNC1INC40L3QtNC40LrQsNGC0L7RgNC+0LJcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yKCcuJyArIElORElDQVRPUl9XUkFQUEVSX0NMQVNTKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgJHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KElORElDQVRPUl9XUkFQUEVSX0VMRU1FTlQpO1xyXG4gICR3cmFwcGVyLmNsYXNzTmFtZSA9IElORElDQVRPUl9XUkFQUEVSX0NMQVNTO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoSU5ESUNBVE9SX0lURU1fRUxFTUVOVCk7XHJcbiAgICAkaXRlbS5jbGFzc05hbWUgPSBJTkRJQ0FUT1JfSVRFTV9DTEFTUztcclxuICAgICRpdGVtLmRhdGFzZXQuc2xpZGVUbyA9IGk7XHJcbiAgICAkd3JhcHBlci5hcHBlbmRDaGlsZCgkaXRlbSk7XHJcbiAgfVxyXG4gIHRoaXMuXyRyb290LmFwcGVuZENoaWxkKCR3cmFwcGVyKTtcclxufTtcclxuXHJcbi8vIHJlZnJlc2ggZXh0cmVtZSB2YWx1ZXNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9yZWZyZXNoRXh0cmVtZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgJGl0ZW1MaXN0ID0gdGhpcy5fJGl0ZW1MaXN0O1xyXG4gIHRoaXMuX21pbk9yZGVyID0gcGFyc2VJbnQoJGl0ZW1MaXN0WzBdLmRhdGFzZXQub3JkZXIpO1xyXG4gIHRoaXMuX21heE9yZGVyID0gdGhpcy5fbWluT3JkZXI7XHJcbiAgdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXIgPSAkaXRlbUxpc3RbMF07XHJcbiAgdGhpcy5fJGl0ZW1XaXRoTWF4T3JkZXIgPSB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlcjtcclxuICB0aGlzLl9taW5UcmFuc2xhdGUgPSBwYXJzZUludCgkaXRlbUxpc3RbMF0uZGF0YXNldC50cmFuc2xhdGUpO1xyXG4gIHRoaXMuX21heFRyYW5zbGF0ZSA9IHRoaXMuX21pblRyYW5zbGF0ZTtcclxuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICB2YXIgb3JkZXIgPSBwYXJzZUludCgkaXRlbS5kYXRhc2V0Lm9yZGVyKTtcclxuICAgIGlmIChvcmRlciA8IHRoaXMuX21pbk9yZGVyKSB7XHJcbiAgICAgIHRoaXMuX21pbk9yZGVyID0gb3JkZXI7XHJcbiAgICAgIHRoaXMuXyRpdGVtV2l0aE1pbk9yZGVyID0gJGl0ZW07XHJcbiAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQudHJhbnNsYXRlKTtcclxuICAgIH0gZWxzZSBpZiAob3JkZXIgPiB0aGlzLl9tYXhPcmRlcikge1xyXG4gICAgICB0aGlzLl9tYXhPcmRlciA9IG9yZGVyO1xyXG4gICAgICB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlciA9ICRpdGVtO1xyXG4gICAgICB0aGlzLl9taW5UcmFuc2xhdGUgPSBwYXJzZUludCgkaXRlbS5kYXRhc2V0LnRyYW5zbGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYmFsYW5jaW5nIGl0ZW1zXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fYmFsYW5jaW5nSXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCF0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyICR3cmFwcGVyID0gdGhpcy5fJHdyYXBwZXI7XHJcbiAgdmFyIHdyYXBwZXJSZWN0ID0gJHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgdmFyIGhhbGZXaWR0aEl0ZW0gPSB3cmFwcGVyUmVjdC53aWR0aCAvIDI7XHJcbiAgdmFyIGNvdW50ID0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICB2YXIgdHJhbnNsYXRlO1xyXG4gIHZhciBjbGllbnRSZWN0O1xyXG4gIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgdmFyIHdyYXBwZXJMZWZ0ID0gd3JhcHBlclJlY3QubGVmdDtcclxuICAgIHZhciAkbWluID0gdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXI7XHJcbiAgICB0cmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgICBjbGllbnRSZWN0ID0gJG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChjbGllbnRSZWN0LnJpZ2h0IDwgd3JhcHBlckxlZnQgLSBoYWxmV2lkdGhJdGVtKSB7XHJcbiAgICAgICRtaW4uZGF0YXNldC5vcmRlciA9IHRoaXMuX21pbk9yZGVyICsgY291bnQ7XHJcbiAgICAgIHRyYW5zbGF0ZSArPSBjb3VudCAqIDEwMDtcclxuICAgICAgJG1pbi5kYXRhc2V0LnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgJG1pbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICB0aGlzLl9yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuICAgIHZhciB3cmFwcGVyUmlnaHQgPSB3cmFwcGVyUmVjdC5yaWdodDtcclxuICAgIHZhciAkbWF4ID0gdGhpcy5fJGl0ZW1XaXRoTWF4T3JkZXI7XHJcbiAgICB0cmFuc2xhdGUgPSB0aGlzLl9tYXhUcmFuc2xhdGU7XHJcbiAgICBjbGllbnRSZWN0ID0gJG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChjbGllbnRSZWN0LmxlZnQgPiB3cmFwcGVyUmlnaHQgKyBoYWxmV2lkdGhJdGVtKSB7XHJcbiAgICAgICRtYXguZGF0YXNldC5vcmRlciA9IHRoaXMuX21heE9yZGVyIC0gY291bnQ7XHJcbiAgICAgIHRyYW5zbGF0ZSAtPSBjb3VudCAqIDEwMDtcclxuICAgICAgJG1heC5kYXRhc2V0LnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgJG1heC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICB0aGlzLl9yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYmFsYW5jaW5nSXRlbXMuYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vLyBhZGRpbmcgbGlzdGVuZXJzXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgJGl0ZW1zID0gdGhpcy5fJGl0ZW1zO1xyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgdmFyICR0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICBpZiAoJHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbCcpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJHRhcmdldC5kYXRhc2V0LnNsaWRlO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYgKCR0YXJnZXQuZGF0YXNldC5zbGlkZVRvKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoJHRhcmdldC5kYXRhc2V0LnNsaWRlVG8pO1xyXG4gICAgICB0aGlzLl9tb3ZlVG8oaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvblN0YXJ0KCkge1xyXG4gICAgdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnID0gdHJ1ZTtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYmFsYW5jaW5nSXRlbXMuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcclxuICAgIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fJHJvb3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlci50cmFuc2l0aW9uLmVuZCcsXHJcbiAgICAgIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcclxuICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBvblN3aXBlU3RhcnQoZSkge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLnRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdGhpcy5fc3dpcGVTdGFydFBvc1ggPSBldmVudC5jbGllbnRYO1xyXG4gICAgdGhpcy5fc3dpcGVTdGFydFBvc1kgPSBldmVudC5jbGllbnRZO1xyXG4gICAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IHRydWU7XHJcbiAgICB0aGlzLl9oYXNTd2lwaW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3dpcGVNb3ZlKGUpIHtcclxuICAgIGlmICghdGhpcy5faGFzU3dpcGVTdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZXZlbnQgPSBlLnR5cGUuc2VhcmNoKCd0b3VjaCcpID09PSAwID8gZS50b3VjaGVzWzBdIDogZTtcclxuICAgIHZhciBkaWZmUG9zWCA9IHRoaXMuX3N3aXBlU3RhcnRQb3NYIC0gZXZlbnQuY2xpZW50WDtcclxuICAgIHZhciBkaWZmUG9zWSA9IHRoaXMuX3N3aXBlU3RhcnRQb3NZIC0gZXZlbnQuY2xpZW50WTtcclxuICAgIGlmICghdGhpcy5faGFzU3dpcGluZykge1xyXG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZlBvc1kpID4gTWF0aC5hYnMoZGlmZlBvc1gpKSB7XHJcbiAgICAgICAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9oYXNTd2lwaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCArIDEgPj0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAmJiBkaWZmUG9zWCA+PSAwKSB7XHJcbiAgICAgICAgZGlmZlBvc1ggPSBkaWZmUG9zWCAvIDQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA8PSAwICYmIGRpZmZQb3NYIDw9IDApIHtcclxuICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHZhbHVlID0gKGRpZmZQb3NYIC8gdGhpcy5fJHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpICogMTAwO1xyXG4gICAgdmFyIHRyYW5zbGF0ZVggPSB0aGlzLl90cmFuc2Zvcm0gLSB2YWx1ZTtcclxuICAgIHRoaXMuXyRpdGVtcy5jbGFzc0xpc3QuYWRkKFRSQU5TSVRJT05fTk9ORSk7XHJcbiAgICB0aGlzLl8kaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNsYXRlWCwgJyUpJyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3dpcGVFbmQoZSkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNTd2lwZVN0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcclxuICAgIHZhciBkaWZmUG9zWCA9IHRoaXMuX3N3aXBlU3RhcnRQb3NYIC0gZXZlbnQuY2xpZW50WDtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCArIDEgPj0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAmJiBkaWZmUG9zWCA+PSAwKSB7XHJcbiAgICAgICAgZGlmZlBvc1ggPSBkaWZmUG9zWCAvIDQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA8PSAwICYmIGRpZmZQb3NYIDw9IDApIHtcclxuICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHZhbHVlID0gKGRpZmZQb3NYIC8gdGhpcy5fJHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpICogMTAwO1xyXG4gICAgdGhpcy5fJGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoVFJBTlNJVElPTl9OT05FKTtcclxuICAgIGlmICh2YWx1ZSA+IFNXSVBFX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPCAtU1dJUEVfVEhSRVNIT0xEKSB7XHJcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICdwcmV2JztcclxuICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJykge1xyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGNsaWNrXHJcbiAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gIC8vIHRyYW5zaXRpb25zdGFydCBhbmQgdHJhbnNpdGlvbmVuZFxyXG4gIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgJGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIG9uVHJhbnNpdGlvblN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgJGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIC8vIG1vdXNlZW50ZXIgYW5kIG1vdXNlbGVhdmVcclxuICBpZiAodGhpcy5fY29uZmlnLmF1dG9wbGF5KSB7XHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgLy8gc3dpcGVcclxuICBpZiAodGhpcy5fY29uZmlnLnN3aXBlKSB7XHJcbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7IH1cclxuICAgIHRoaXMuXyRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblN3aXBlU3RhcnQuYmluZCh0aGlzKSxcclxuICAgICAgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpO1xyXG4gICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Td2lwZU1vdmUuYmluZCh0aGlzKSxcclxuICAgICAgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpO1xyXG4gICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Td2lwZVN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Td2lwZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uU3dpcGVFbmQuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Td2lwZUVuZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgLy8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQsNC60YLQuNCy0L3QvtGB0YLQuCDQstC60LvQsNC00LrQuFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vLyDQv9C10YDQtdC50YLQuCDQuiDRgdC70LXQtNGD0Y7RidC10LzRgyDRgdC70LDQudC00YNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gIHRoaXMuX21vdmUoKTtcclxufTtcclxuXHJcbi8vINC/0LXRgNC10LnRgtC4INC6INC/0YDQtdC00YvQtNGD0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuX2RpcmVjdGlvbiA9ICdwcmV2JztcclxuICB0aGlzLl9tb3ZlKCk7XHJcbn07XHJcblxyXG4vLyDRg9C/0YDQsNCy0LvQtdC90LjQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC5INGB0LzQtdC90L7QuSDRgdC70LDQudC00L7QslxyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuYXV0b3BsYXkgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsFxyXG4gIG5ldyBTaW1wbGVBZGFwdGl2ZVNsaWRlcignLmpvdXJuYWxfX3NsaWRlcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgc3dpcGU6IHRydWUsXHJcbiAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbm9ybWFsaXplLXNjc3Nfc2Fzc19fbm9ybWFsaXplX3Njc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ub3JtYWxpemUtc2Nzc19zYXNzX19ub3JtYWxpemVfc2Nzc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9pbmRleC5qc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiaW5zZXJ0ZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3NzIiwiaW5kZXhPZiIsInB1c2giLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJoZWFkIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImluc2VydEJlZm9yZSIsImluc2VydCIsInJlcXVpcmUiLCJub3JtYWxpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VBY2NvcmRpb24iLCJhY2NvcmRpb24iLCJjb250ZW50U2VsZWN0b3IiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJvcGVuIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzbW90aEhlaWdodCIsImFjY29yZGlvblNlbGVjdG9yIiwidGl0bGVTZWxlY3RvciIsImFjY29yZGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRpdGxlIiwiZXZlbnQiLCJhY2NvcmRpb25Gb3JDbG9zZSIsInNjcm9sbEhlaWdodCIsIm9uUmVzaXplIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJtZW51X2xpbmtzIiwid2luU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJ3aWR0aCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJlIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJXUkFQUEVSX1NFTEVDVE9SIiwiSVRFTVNfU0VMRUNUT1IiLCJJVEVNX1NFTEVDVE9SIiwiSVRFTV9DTEFTU19BQ1RJVkUiLCJDT05UUk9MX1NFTEVDVE9SIiwiQ09OVFJPTF9DTEFTU19TSE9XIiwiSU5ESUNBVE9SX1dSQVBQRVJfRUxFTUVOVCIsIklORElDQVRPUl9XUkFQUEVSX0NMQVNTIiwiSU5ESUNBVE9SX0lURU1fRUxFTUVOVCIsIklORElDQVRPUl9JVEVNX0NMQVNTIiwiSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFIiwiU1dJUEVfVEhSRVNIT0xEIiwiVFJBTlNJVElPTl9OT05FIiwiU2ltcGxlQWRhcHRpdmVTbGlkZXIiLCJzZWxlY3RvciIsImNvbmZpZyIsIl8kcm9vdCIsIl8kd3JhcHBlciIsIl8kaXRlbXMiLCJfJGl0ZW1MaXN0IiwiX2N1cnJlbnRJbmRleCIsIl9taW5PcmRlciIsIl9tYXhPcmRlciIsIl8kaXRlbVdpdGhNaW5PcmRlciIsIl8kaXRlbVdpdGhNYXhPcmRlciIsIl9taW5UcmFuc2xhdGUiLCJfbWF4VHJhbnNsYXRlIiwiX2RpcmVjdGlvbiIsIl9iYWxhbmNpbmdJdGVtc0ZsYWciLCJfdHJhbnNmb3JtIiwiX2hhc1N3aXBlU3RhdGUiLCJfc3dpcGVTdGFydFBvc1giLCJfaW50ZXJ2YWxJZCIsIl9jb25maWciLCJsb29wIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsInN3aXBlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJpIiwib3JkZXIiLCJpbmRleCIsInRyYW5zbGF0ZSIsImNvdW50IiwidHJhbnNmb3JtVmFsdWUiLCJjb25jYXQiLCJ0cmFuc2Zvcm0iLCJfYWRkSW5kaWNhdG9ycyIsIl9yZWZyZXNoRXh0cmVtZVZhbHVlcyIsIl9zZXRBY3RpdmVDbGFzcyIsIl9hZGRFdmVudExpc3RlbmVyIiwiX2F1dG9wbGF5IiwicHJvdG90eXBlIiwiJGl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCIkaW5kaWNhdG9ycyIsInNsaWRlVG8iLCIkY29udHJvbHMiLCJfbW92ZSIsImNvbmRpdGlvbiIsInN0ZXAiLCJfbW92ZVRvIiwiY3VycmVudEluZGV4IiwiTWF0aCIsImFicyIsImFjdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCIkd3JhcHBlciIsImNsYXNzTmFtZSIsIiRpdGVtTGlzdCIsIl9iYWxhbmNpbmdJdGVtcyIsIndyYXBwZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFsZldpZHRoSXRlbSIsImNsaWVudFJlY3QiLCJ3cmFwcGVyTGVmdCIsImxlZnQiLCIkbWluIiwicmlnaHQiLCJ3cmFwcGVyUmlnaHQiLCIkbWF4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiJGl0ZW1zIiwib25DbGljayIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0Iiwic2xpZGUiLCJvblRyYW5zaXRpb25TdGFydCIsIm9uVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblN3aXBlU3RhcnQiLCJ0eXBlIiwic2VhcmNoIiwidG91Y2hlcyIsImNsaWVudFgiLCJfc3dpcGVTdGFydFBvc1kiLCJjbGllbnRZIiwiX2hhc1N3aXBpbmciLCJvblN3aXBlTW92ZSIsImRpZmZQb3NYIiwiZGlmZlBvc1kiLCJ2YWx1ZSIsInRyYW5zbGF0ZVgiLCJvblN3aXBlRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJvbkRyYWdTdGFydCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInZpc2liaWxpdHlTdGF0ZSIsInN1cHBvcnRzUGFzc2l2ZSIsIm9wdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImVyciIsInBhc3NpdmUiLCJuZXh0IiwicHJldiJdLCJzb3VyY2VSb290IjoiIn0=