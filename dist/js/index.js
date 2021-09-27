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

document.querySelectorAll('.card-accordion__title').forEach(title => {
  title.addEventListener('click', function (event) {
    const parent = this.parentNode;
    parent.classList.toggle('card-accordion_active');
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0Esc0lBQXNJLDhDQUE4QztVQUNwTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zaW1wbGVTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nzcy9zYXNzL19ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/ZjgwYyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5zZXJ0ZWQgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgaWYgKGluc2VydGVkLmluZGV4T2YoY3NzKSA+PSAwKSByZXR1cm47XG4gICAgaW5zZXJ0ZWQucHVzaChjc3MpO1xuICAgIFxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbGVtLCBkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG59O1xuIiwidmFyIGluc2VydCA9IHJlcXVpcmUoJ2luc2VydC1jc3MnKTtcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpO1xuXG5pbnNlcnQobm9ybWFsaXplKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiEgbm9ybWFsaXplLmNzcyB2Mi4xLjMgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEJhc2VcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUeXBvZ3JhcGh5XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOSwgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGZvbnQgZmFtaWx5IHNldCBvZGRseSBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIHByZS1mb3JtYXR0ZWQgdGV4dCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4vKipcXG4gKiBTZXQgY29uc2lzdGVudCBxdW90ZSB0eXBlcy5cXG4gKi9cXG5cXG5xIHtcXG4gICAgcXVvdGVzOiBcXFwiXFxcXDIwMUNcXFwiIFxcXCJcXFxcMjAxRFxcXCIgXFxcIlxcXFwyMDE4XFxcIiBcXFwiXFxcXDIwMTlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkuXFxuICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IGRpc3BsYXllZCBvZGRseSBpbiBJRSA5LlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGaWd1cmVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaSA1LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgZm9udCBmYW1pbHkgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAyICovXFxuICAgIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDgrLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIlxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtYWNjb3JkaW9uX190aXRsZScpLmZvckVhY2godGl0bGUgPT4ge1xyXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1hY2NvcmRpb25fYWN0aXZlJyk7XHJcbiAgICB9KVxyXG59KSIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1zY3NzXCI7XHJcbmltcG9ydCAnLi9tZW51JztcclxuaW1wb3J0ICcuL3NpbXBsZVNsaWRlcic7XHJcbmltcG9ydCBcIi4vYWNjb3JkaW9uXCI7IiwiY29uc3QgbWVudV9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saW5rXCIpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB3aW5TY3JvbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9ICh3aW5TY3JvbGwgLyBzY3JvbGxIZWlnaHQpICogMTAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXNsaWRlci5tZW51LXNsaWRlcl9hY3RpdmVcIikuc3R5bGUud2lkdGggPSBzY3JvbGxlZCArIFwiJVwiO1xyXG59KSIsIi8qKlxyXG4gKiBTaW1wbGVBZGFwdGl2ZVNsaWRlciBieSBJdGNoaWVmIHYyLjAuMCAoaHR0cHM6Ly9naXRodWIuY29tL2l0Y2hpZWYvdWktY29tcG9uZW50cy90cmVlL21hc3Rlci9zaW1wbGUtYWRhcHRpdmUtc2xpZGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAyMCAtIDIwMjEgQWxleGFuZGVyIE1hbHRzZXZcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vaXRjaGllZi91aS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xyXG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiBudWxsIH07XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgZS5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcbiAgICByZXR1cm4gZTtcclxuICB9XHJcbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XHJcbn0pKCk7XHJcblxyXG4vLyDQsdCw0LfQvtCy0YvQtSDQutC70LDRgdGB0Ysg0Lgg0YHQtdC70LXQutGC0L7RgNGLXHJcbnZhciBXUkFQUEVSX1NFTEVDVE9SID0gJy5zbGlkZXJfX3dyYXBwZXInO1xyXG52YXIgSVRFTVNfU0VMRUNUT1IgPSAnLnNsaWRlcl9faXRlbXMnO1xyXG52YXIgSVRFTV9TRUxFQ1RPUiA9ICcuc2xpZGVyX19pdGVtJztcclxudmFyIElURU1fQ0xBU1NfQUNUSVZFID0gJ3NsaWRlcl9faXRlbV9hY3RpdmUnO1xyXG52YXIgQ09OVFJPTF9TRUxFQ1RPUiA9ICcuc2xpZGVyX19jb250cm9sJztcclxudmFyIENPTlRST0xfQ0xBU1NfU0hPVyA9ICdzbGlkZXJfX2NvbnRyb2xfc2hvdyc7XHJcbi8vINC40L3QtNC40LrQsNGC0L7RgNGLXHJcbnZhciBJTkRJQ0FUT1JfV1JBUFBFUl9FTEVNRU5UID0gJ29sJztcclxudmFyIElORElDQVRPUl9XUkFQUEVSX0NMQVNTID0gJ3NsaWRlcl9faW5kaWNhdG9ycyc7XHJcbnZhciBJTkRJQ0FUT1JfSVRFTV9FTEVNRU5UID0gJ2xpJztcclxudmFyIElORElDQVRPUl9JVEVNX0NMQVNTID0gJ3NsaWRlcl9faW5kaWNhdG9yJztcclxudmFyIElORElDQVRPUl9JVEVNX0NMQVNTX0FDVElWRSA9ICdzbGlkZXJfX2luZGljYXRvcl9hY3RpdmUnO1xyXG4vLyDQv9C+0YDQvtCzINC00LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0YHQu9Cw0LnQtNCwICg0MCUpXHJcbnZhciBTV0lQRV9USFJFU0hPTEQgPSAyMDtcclxuLy8g0LrQu9Cw0YHRgSDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8gdHJhbnNpdGlvblxyXG52YXIgVFJBTlNJVElPTl9OT05FID0gJ3RyYW5zaXRpb24tbm9uZSc7XHJcblxyXG5mdW5jdGlvbiBTaW1wbGVBZGFwdGl2ZVNsaWRlcihzZWxlY3RvciwgY29uZmlnKSB7XHJcbiAgLy8gLnNsaWRlclxyXG4gIHRoaXMuXyRyb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgLy8gLnNsaWRlcl9fd3JhcHBlclxyXG4gIHRoaXMuXyR3cmFwcGVyID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvcihXUkFQUEVSX1NFTEVDVE9SKTtcclxuICAvLyAuc2xpZGVyX19pdGVtc1xyXG4gIHRoaXMuXyRpdGVtcyA9IHRoaXMuXyRyb290LnF1ZXJ5U2VsZWN0b3IoSVRFTVNfU0VMRUNUT1IpO1xyXG4gIC8vIC5zbGlkZXJfX2l0ZW1cclxuICB0aGlzLl8kaXRlbUxpc3QgPSB0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElURU1fU0VMRUNUT1IpO1xyXG4gIC8vINGC0LXQutGD0YnQuNC5INC40L3QtNC10LrRgVxyXG4gIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XHJcbiAgLy8g0Y3QutGB0YLRgNC10LzQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDRgdC70LDQudC00L7QslxyXG4gIHRoaXMuX21pbk9yZGVyID0gMDtcclxuICB0aGlzLl9tYXhPcmRlciA9IDA7XHJcbiAgdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXIgPSBudWxsO1xyXG4gIHRoaXMuXyRpdGVtV2l0aE1heE9yZGVyID0gbnVsbDtcclxuICB0aGlzLl9taW5UcmFuc2xhdGUgPSAwO1xyXG4gIHRoaXMuX21heFRyYW5zbGF0ZSA9IDA7XHJcbiAgLy8g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDRgdC80LXQvdGLINGB0LvQsNC50LTQvtCyICjQv9C+INGD0LzQvtC70YfQsNC90LjRjilcclxuICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgLy8g0YTQu9Cw0LMsINC60L7RgtC+0YDRi9C5INC/0L7QutCw0LfRi9Cy0LDQtdGCLCDRh9GC0L4g0LjQtNGR0YIg0L/RgNC+0YbQtdGB0YEg0YPRgNCw0LLQvdC+0LLQtdGI0LjQstCw0L3QuNGPINGB0LvQsNC50LTQvtCyXHJcbiAgdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnID0gZmFsc2U7XHJcbiAgLy8g0YLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuFxyXG4gIHRoaXMuX3RyYW5zZm9ybSA9IDA7XHJcbiAgLy8gc3dpcGUg0L/QsNGA0LDQvNC10YLRgNGLXHJcbiAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IGZhbHNlO1xyXG4gIHRoaXMuX3N3aXBlU3RhcnRQb3NYID0gMDtcclxuICAvLyBpZCDRgtCw0LnQvNC10YDQsFxyXG4gIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xyXG4gIC8vINC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwICjQv9C+INGD0LzQvtC70YfQsNC90LjRjilcclxuICB0aGlzLl9jb25maWcgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICBzd2lwZTogdHJ1ZSxcclxuICB9O1xyXG4gIC8vINC40LfQvNC10L3Rj9C10Lwg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNGOINGB0LvQsNC50LTQtdGA0LAg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC/0LXRgNC10LTQsNC90L3Ri9C80Lgg0L3QsNGB0YLRgNC+0LnQutCw0LzQuFxyXG4gIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICB0aGlzLl9jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0Log0YHQu9Cw0LnQtNCw0LwgZGF0YS3QsNGC0YDQuNCx0YPRgtGLXHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2ldLmRhdGFzZXQub3JkZXIgPSBpO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2ldLmRhdGFzZXQuaW5kZXggPSBpO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2ldLmRhdGFzZXQudHJhbnNsYXRlID0gMDtcclxuICB9XHJcbiAgLy8g0L/QtdGA0LXQvNC10YnQsNC10Lwg0L/QvtGB0LvQtdC00L3QuNC5INGB0LvQsNC50LQg0L/QtdGA0LXQtCDQv9C10YDQstGL0LxcclxuICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIHZhciBjb3VudCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgdmFyIHRyYW5zbGF0ZSA9IC10aGlzLl8kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0Lm9yZGVyID0gLTE7XHJcbiAgICB0aGlzLl8kaXRlbUxpc3RbY291bnRdLmRhdGFzZXQudHJhbnNsYXRlID0gLXRoaXMuXyRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgICB2YXIgdHJhbnNmb3JtVmFsdWUgPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0W2NvdW50XS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcclxuICB9XHJcbiAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC40L3QtNC40LrQsNGC0L7RgNGLINC6INGB0LvQsNC50LTQtdGA0YNcclxuICB0aGlzLl9hZGRJbmRpY2F0b3JzKCk7XHJcbiAgLy8g0L7QsdC90L7QstC70Y/QtdC8INGN0LrRgdGC0YDQtdC80LDQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0L/QtdGA0LXQvNC10L3QvdGL0YVcclxuICB0aGlzLl9yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gIC8vINC/0L7QvNC10YfQsNC10Lwg0LDQutGC0LjQstC90YvQtSDRjdC70LXQvNC10L3RgtGLXHJcbiAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoKTtcclxuICAvLyDQvdCw0LfQvdCw0YfQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuFxyXG4gIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcclxuICAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60YPRjiDRgdC80LXQvdGDINGB0LvQsNC50LTQvtCyXHJcbiAgdGhpcy5fYXV0b3BsYXkoKTtcclxufVxyXG5cclxuLy8gc2V0IGFjdGl2ZSBjbGFzc1xyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX3NldEFjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIHNsaWRlc1xyXG4gIHZhciBpO1xyXG4gIHZhciBsZW5ndGg7XHJcbiAgdmFyICRpdGVtO1xyXG4gIHZhciBpbmRleDtcclxuICBmb3IgKGkgPSAwLCBsZW5ndGggPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICRpdGVtID0gdGhpcy5fJGl0ZW1MaXN0W2ldO1xyXG4gICAgaW5kZXggPSBwYXJzZUludCgkaXRlbS5kYXRhc2V0LmluZGV4KTtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoSVRFTV9DTEFTU19BQ1RJVkUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShJVEVNX0NMQVNTX0FDVElWRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGluZGljYXRvcnNcclxuICB2YXIgJGluZGljYXRvcnMgPSB0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIElORElDQVRPUl9JVEVNX0NMQVNTKTtcclxuICBpZiAoJGluZGljYXRvcnMubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSAkaW5kaWNhdG9ycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAkaXRlbSA9ICRpbmRpY2F0b3JzW2ldO1xyXG4gICAgICBpbmRleCA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQuc2xpZGVUbyk7XHJcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZChJTkRJQ0FUT1JfSVRFTV9DTEFTU19BQ1RJVkUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBjb250cm9sc1xyXG4gIHZhciAkY29udHJvbHMgPSB0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yQWxsKENPTlRST0xfU0VMRUNUT1IpO1xyXG4gIGlmICghJGNvbnRyb2xzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9ICRjb250cm9scy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAkY29udHJvbHNbaV0uY2xhc3NMaXN0LmFkZChDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ID09PSAwKSB7XHJcbiAgICAgICRjb250cm9sc1swXS5jbGFzc0xpc3QucmVtb3ZlKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICAgICRjb250cm9sc1sxXS5jbGFzc0xpc3QuYWRkKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgJGNvbnRyb2xzWzBdLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgICAgJGNvbnRyb2xzWzFdLmNsYXNzTGlzdC5yZW1vdmUoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRjb250cm9sc1swXS5jbGFzc0xpc3QuYWRkKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICAgICRjb250cm9sc1sxXS5jbGFzc0xpc3QuYWRkKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0YHQvNC10L3QsCDRgdC70LDQudC00L7QslxyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX21vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25vbmUnKSB7XHJcbiAgICB0aGlzLl8kaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShUUkFOU0lUSU9OX05PTkUpO1xyXG4gICAgdGhpcy5fJGl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRoaXMuX3RyYW5zZm9ybSwgJyUpJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIHZhciBjb25kaXRpb24gPSB0aGlzLl9jdXJyZW50SW5kZXggKyAxID49IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICBpZiAoY29uZGl0aW9uICYmIHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPD0gMCAmJiB0aGlzLl9kaXJlY3Rpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBzdGVwID0gdGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcgPyAtMTAwIDogMTAwO1xyXG4gIHZhciB0cmFuc2Zvcm0gPSB0aGlzLl90cmFuc2Zvcm0gKyBzdGVwO1xyXG4gIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgaWYgKCsrdGhpcy5fY3VycmVudEluZGV4ID4gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEluZGV4IC09IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICgtLXRoaXMuX2N1cnJlbnRJbmRleCA8IDApIHtcclxuICAgICAgdGhpcy5fY3VycmVudEluZGV4ICs9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICB0aGlzLl8kaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNmb3JtLCAnJSknKTtcclxuICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG59O1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0Log0YHQu9Cw0LnQtNGDINC/0L4g0LjQvdC00LXQutGB0YNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9tb3ZlVG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gIHRoaXMuX2RpcmVjdGlvbiA9IGluZGV4ID4gY3VycmVudEluZGV4ID8gJ25leHQnIDogJ3ByZXYnO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgTWF0aC5hYnMoaW5kZXggLSBjdXJyZW50SW5kZXgpOyBpKyspIHtcclxuICAgIHRoaXMuX21vdmUoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyDQvNC10YLQvtC0INC00LvRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC5INGB0LzQtdC90Ysg0YHQu9Cw0LnQtNC+0LJcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9hdXRvcGxheSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvcGxheSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoYWN0aW9uID09PSAnc3RvcCcpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHRoaXMuX2ludGVydmFsSWQgPT09IG51bGwpIHtcclxuICAgIHRoaXMuX2ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0LjQvdC00LjQutCw0YLQvtGA0L7QslxyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX2FkZEluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuXyRyb290LnF1ZXJ5U2VsZWN0b3IoJy4nICsgSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1MpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciAkd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoSU5ESUNBVE9SX1dSQVBQRVJfRUxFTUVOVCk7XHJcbiAgJHdyYXBwZXIuY2xhc3NOYW1lID0gSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1M7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFyICRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChJTkRJQ0FUT1JfSVRFTV9FTEVNRU5UKTtcclxuICAgICRpdGVtLmNsYXNzTmFtZSA9IElORElDQVRPUl9JVEVNX0NMQVNTO1xyXG4gICAgJGl0ZW0uZGF0YXNldC5zbGlkZVRvID0gaTtcclxuICAgICR3cmFwcGVyLmFwcGVuZENoaWxkKCRpdGVtKTtcclxuICB9XHJcbiAgdGhpcy5fJHJvb3QuYXBwZW5kQ2hpbGQoJHdyYXBwZXIpO1xyXG59O1xyXG5cclxuLy8gcmVmcmVzaCBleHRyZW1lIHZhbHVlc1xyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX3JlZnJlc2hFeHRyZW1lVmFsdWVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgdGhpcy5fbWluT3JkZXIgPSBwYXJzZUludCgkaXRlbUxpc3RbMF0uZGF0YXNldC5vcmRlcik7XHJcbiAgdGhpcy5fbWF4T3JkZXIgPSB0aGlzLl9taW5PcmRlcjtcclxuICB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlciA9ICRpdGVtTGlzdFswXTtcclxuICB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlciA9IHRoaXMuXyRpdGVtV2l0aE1pbk9yZGVyO1xyXG4gIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtTGlzdFswXS5kYXRhc2V0LnRyYW5zbGF0ZSk7XHJcbiAgdGhpcy5fbWF4VHJhbnNsYXRlID0gdGhpcy5fbWluVHJhbnNsYXRlO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSAkaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpXTtcclxuICAgIHZhciBvcmRlciA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQub3JkZXIpO1xyXG4gICAgaWYgKG9yZGVyIDwgdGhpcy5fbWluT3JkZXIpIHtcclxuICAgICAgdGhpcy5fbWluT3JkZXIgPSBvcmRlcjtcclxuICAgICAgdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXIgPSAkaXRlbTtcclxuICAgICAgdGhpcy5fbWluVHJhbnNsYXRlID0gcGFyc2VJbnQoJGl0ZW0uZGF0YXNldC50cmFuc2xhdGUpO1xyXG4gICAgfSBlbHNlIGlmIChvcmRlciA+IHRoaXMuX21heE9yZGVyKSB7XHJcbiAgICAgIHRoaXMuX21heE9yZGVyID0gb3JkZXI7XHJcbiAgICAgIHRoaXMuXyRpdGVtV2l0aE1heE9yZGVyID0gJGl0ZW07XHJcbiAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQudHJhbnNsYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBiYWxhbmNpbmcgaXRlbXNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9iYWxhbmNpbmdJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIXRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgJHdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlcjtcclxuICB2YXIgd3JhcHBlclJlY3QgPSAkd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB2YXIgaGFsZldpZHRoSXRlbSA9IHdyYXBwZXJSZWN0LndpZHRoIC8gMjtcclxuICB2YXIgY291bnQgPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoO1xyXG4gIHZhciB0cmFuc2xhdGU7XHJcbiAgdmFyIGNsaWVudFJlY3Q7XHJcbiAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICB2YXIgd3JhcHBlckxlZnQgPSB3cmFwcGVyUmVjdC5sZWZ0O1xyXG4gICAgdmFyICRtaW4gPSB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlcjtcclxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuX21pblRyYW5zbGF0ZTtcclxuICAgIGNsaWVudFJlY3QgPSAkbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGNsaWVudFJlY3QucmlnaHQgPCB3cmFwcGVyTGVmdCAtIGhhbGZXaWR0aEl0ZW0pIHtcclxuICAgICAgJG1pbi5kYXRhc2V0Lm9yZGVyID0gdGhpcy5fbWluT3JkZXIgKyBjb3VudDtcclxuICAgICAgdHJhbnNsYXRlICs9IGNvdW50ICogMTAwO1xyXG4gICAgICAkbWluLmRhdGFzZXQudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG4gICAgICAkbWluLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgICAgIHRoaXMuX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICdwcmV2Jykge1xyXG4gICAgdmFyIHdyYXBwZXJSaWdodCA9IHdyYXBwZXJSZWN0LnJpZ2h0O1xyXG4gICAgdmFyICRtYXggPSB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlcjtcclxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuX21heFRyYW5zbGF0ZTtcclxuICAgIGNsaWVudFJlY3QgPSAkbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGNsaWVudFJlY3QubGVmdCA+IHdyYXBwZXJSaWdodCArIGhhbGZXaWR0aEl0ZW0pIHtcclxuICAgICAgJG1heC5kYXRhc2V0Lm9yZGVyID0gdGhpcy5fbWF4T3JkZXIgLSBjb3VudDtcclxuICAgICAgdHJhbnNsYXRlIC09IGNvdW50ICogMTAwO1xyXG4gICAgICAkbWF4LmRhdGFzZXQudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG4gICAgICAkbWF4LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgICAgIHRoaXMuX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9iYWxhbmNpbmdJdGVtcy5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8vIGFkZGluZyBsaXN0ZW5lcnNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkaXRlbXMgPSB0aGlzLl8kaXRlbXM7XHJcbiAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbiAgICB2YXIgJHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgIGlmICgkdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAkdGFyZ2V0LmRhdGFzZXQuc2xpZGU7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAoJHRhcmdldC5kYXRhc2V0LnNsaWRlVG8pIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgaW5kZXggPSBwYXJzZUludCgkdGFyZ2V0LmRhdGFzZXQuc2xpZGVUbyk7XHJcbiAgICAgIHRoaXMuX21vdmVUbyhpbmRleCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uU3RhcnQoKSB7XHJcbiAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSB0cnVlO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9iYWxhbmNpbmdJdGVtcy5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnID0gZmFsc2U7XHJcbiAgICB0aGlzLl8kcm9vdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZGVyLnRyYW5zaXRpb24uZW5kJyxcclxuICAgICAgeyBidWJibGVzOiB0cnVlIH0pKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3dpcGVTdGFydChlKSB7XHJcbiAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICB0aGlzLl9zd2lwZVN0YXJ0UG9zWCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICB0aGlzLl9zd2lwZVN0YXJ0UG9zWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gdHJ1ZTtcclxuICAgIHRoaXMuX2hhc1N3aXBpbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Td2lwZU1vdmUoZSkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNTd2lwZVN0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLnRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdmFyIGRpZmZQb3NYID0gdGhpcy5fc3dpcGVTdGFydFBvc1ggLSBldmVudC5jbGllbnRYO1xyXG4gICAgdmFyIGRpZmZQb3NZID0gdGhpcy5fc3dpcGVTdGFydFBvc1kgLSBldmVudC5jbGllbnRZO1xyXG4gICAgaWYgKCF0aGlzLl9oYXNTd2lwaW5nKSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmUG9zWSkgPiBNYXRoLmFicyhkaWZmUG9zWCkpIHtcclxuICAgICAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2hhc1N3aXBpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICsgMSA+PSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoICYmIGRpZmZQb3NYID49IDApIHtcclxuICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDw9IDAgJiYgZGlmZlBvc1ggPD0gMCkge1xyXG4gICAgICAgIGRpZmZQb3NYID0gZGlmZlBvc1ggLyA0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdmFsdWUgPSAoZGlmZlBvc1ggLyB0aGlzLl8kd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkgKiAxMDA7XHJcbiAgICB2YXIgdHJhbnNsYXRlWCA9IHRoaXMuX3RyYW5zZm9ybSAtIHZhbHVlO1xyXG4gICAgdGhpcy5fJGl0ZW1zLmNsYXNzTGlzdC5hZGQoVFJBTlNJVElPTl9OT05FKTtcclxuICAgIHRoaXMuXyRpdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGVYLCAnJSknKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Td2lwZUVuZChlKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc1N3aXBlU3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdmFyIGRpZmZQb3NYID0gdGhpcy5fc3dpcGVTdGFydFBvc1ggLSBldmVudC5jbGllbnRYO1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICsgMSA+PSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoICYmIGRpZmZQb3NYID49IDApIHtcclxuICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDw9IDAgJiYgZGlmZlBvc1ggPD0gMCkge1xyXG4gICAgICAgIGRpZmZQb3NYID0gZGlmZlBvc1ggLyA0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdmFsdWUgPSAoZGlmZlBvc1ggLyB0aGlzLl8kd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkgKiAxMDA7XHJcbiAgICB0aGlzLl8kaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShUUkFOU0lUSU9OX05PTkUpO1xyXG4gICAgaWYgKHZhbHVlID4gU1dJUEVfVEhSRVNIT0xEKSB7XHJcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IC1TV0lQRV9USFJFU0hPTEQpIHtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gY2xpY2tcclxuICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgLy8gdHJhbnNpdGlvbnN0YXJ0IGFuZCB0cmFuc2l0aW9uZW5kXHJcbiAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0Jywgb25UcmFuc2l0aW9uU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgLy8gbW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZVxyXG4gIGlmICh0aGlzLl9jb25maWcuYXV0b3BsYXkpIHtcclxuICAgIHRoaXMuXyRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICAvLyBzd2lwZVxyXG4gIGlmICh0aGlzLl9jb25maWcuc3dpcGUpIHtcclxuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHsgfVxyXG4gICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uU3dpcGVTdGFydC5iaW5kKHRoaXMpLFxyXG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSk7XHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblN3aXBlTW92ZS5iaW5kKHRoaXMpLFxyXG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSk7XHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblN3aXBlU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvblN3aXBlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Td2lwZUVuZC5iaW5kKHRoaXMpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblN3aXBlRW5kLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBvbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAvLyDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INCw0LrRgtC40LLQvdC+0YHRgtC4INCy0LrQu9Cw0LTQutC4XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8vINC/0LXRgNC10LnRgtC4INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG5TaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgdGhpcy5fbW92ZSgpO1xyXG59O1xyXG5cclxuLy8g0L/QtdGA0LXQudGC0Lgg0Log0L/RgNC10LTRi9C00YPRidC10LzRgyDRgdC70LDQudC00YNcclxuU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gIHRoaXMuX21vdmUoKTtcclxufTtcclxuXHJcbi8vINGD0L/RgNCw0LLQu9C10L3QuNC1INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0Lkg0YHQvNC10L3QvtC5INGB0LvQsNC50LTQvtCyXHJcblNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5hdXRvcGxheSA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwXHJcbiAgbmV3IFNpbXBsZUFkYXB0aXZlU2xpZGVyKCcuam91cm5hbF9fc2xpZGVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICBzd2lwZTogdHJ1ZSxcclxuICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ub3JtYWxpemUtc2Nzc19zYXNzX19ub3JtYWxpemVfc2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZS1zY3NzX3Nhc3NfX25vcm1hbGl6ZV9zY3NzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJpbnNlcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjc3MiLCJpbmRleE9mIiwicHVzaCIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImhlYWQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0IiwicmVxdWlyZSIsIm5vcm1hbGl6ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWVudV9saW5rcyIsIndpbmRvdyIsIndpblNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbGVkIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJDdXN0b21FdmVudCIsInBhcmFtcyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiV1JBUFBFUl9TRUxFQ1RPUiIsIklURU1TX1NFTEVDVE9SIiwiSVRFTV9TRUxFQ1RPUiIsIklURU1fQ0xBU1NfQUNUSVZFIiwiQ09OVFJPTF9TRUxFQ1RPUiIsIkNPTlRST0xfQ0xBU1NfU0hPVyIsIklORElDQVRPUl9XUkFQUEVSX0VMRU1FTlQiLCJJTkRJQ0FUT1JfV1JBUFBFUl9DTEFTUyIsIklORElDQVRPUl9JVEVNX0VMRU1FTlQiLCJJTkRJQ0FUT1JfSVRFTV9DTEFTUyIsIklORElDQVRPUl9JVEVNX0NMQVNTX0FDVElWRSIsIlNXSVBFX1RIUkVTSE9MRCIsIlRSQU5TSVRJT05fTk9ORSIsIlNpbXBsZUFkYXB0aXZlU2xpZGVyIiwic2VsZWN0b3IiLCJjb25maWciLCJfJHJvb3QiLCJfJHdyYXBwZXIiLCJfJGl0ZW1zIiwiXyRpdGVtTGlzdCIsIl9jdXJyZW50SW5kZXgiLCJfbWluT3JkZXIiLCJfbWF4T3JkZXIiLCJfJGl0ZW1XaXRoTWluT3JkZXIiLCJfJGl0ZW1XaXRoTWF4T3JkZXIiLCJfbWluVHJhbnNsYXRlIiwiX21heFRyYW5zbGF0ZSIsIl9kaXJlY3Rpb24iLCJfYmFsYW5jaW5nSXRlbXNGbGFnIiwiX3RyYW5zZm9ybSIsIl9oYXNTd2lwZVN0YXRlIiwiX3N3aXBlU3RhcnRQb3NYIiwiX2ludGVydmFsSWQiLCJfY29uZmlnIiwibG9vcCIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJzd2lwZSIsImtleSIsImhhc093blByb3BlcnR5IiwiaSIsImRhdGFzZXQiLCJvcmRlciIsImluZGV4IiwidHJhbnNsYXRlIiwiY291bnQiLCJ0cmFuc2Zvcm1WYWx1ZSIsImNvbmNhdCIsInRyYW5zZm9ybSIsIl9hZGRJbmRpY2F0b3JzIiwiX3JlZnJlc2hFeHRyZW1lVmFsdWVzIiwiX3NldEFjdGl2ZUNsYXNzIiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfYXV0b3BsYXkiLCJwcm90b3R5cGUiLCIkaXRlbSIsInBhcnNlSW50IiwiYWRkIiwicmVtb3ZlIiwiJGluZGljYXRvcnMiLCJzbGlkZVRvIiwiJGNvbnRyb2xzIiwiX21vdmUiLCJjb25kaXRpb24iLCJzdGVwIiwiX21vdmVUbyIsImN1cnJlbnRJbmRleCIsIk1hdGgiLCJhYnMiLCJhY3Rpb24iLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwiJHdyYXBwZXIiLCJjbGFzc05hbWUiLCIkaXRlbUxpc3QiLCJfYmFsYW5jaW5nSXRlbXMiLCJ3cmFwcGVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbGZXaWR0aEl0ZW0iLCJjbGllbnRSZWN0Iiwid3JhcHBlckxlZnQiLCJsZWZ0IiwiJG1pbiIsInJpZ2h0Iiwid3JhcHBlclJpZ2h0IiwiJG1heCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIiRpdGVtcyIsIm9uQ2xpY2siLCIkdGFyZ2V0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlIiwib25UcmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Td2lwZVN0YXJ0IiwidHlwZSIsInNlYXJjaCIsInRvdWNoZXMiLCJjbGllbnRYIiwiX3N3aXBlU3RhcnRQb3NZIiwiY2xpZW50WSIsIl9oYXNTd2lwaW5nIiwib25Td2lwZU1vdmUiLCJkaWZmUG9zWCIsImRpZmZQb3NZIiwidmFsdWUiLCJ0cmFuc2xhdGVYIiwib25Td2lwZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwib25EcmFnU3RhcnQiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5U3RhdGUiLCJzdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJlcnIiLCJwYXNzaXZlIiwibmV4dCIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9