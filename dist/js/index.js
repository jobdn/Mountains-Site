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
  document.querySelector(".slider.slider_active").style.width = scrolled + "%";
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
  var slider = new SimpleAdaptiveSlider('.journal__slider', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true
  }); // назначим обработчик при нажатии на кнопку .btn-prev

  document.querySelector('.btn-prev').onclick = function () {
    // перейдём к предыдущему слайду
    slider.prev();
  }; // назначим обработчик при нажатии на кнопку .btn-next


  document.querySelector('.btn-next').onclick = function () {
    // перейдём к следующему слайду
    slider.next();
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0Esc0lBQXNJLDhDQUE4QztVQUNwTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2pzL3NpbXBsZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1zY3NzL3Nhc3MvX25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3Mvc3R5bGUuc2Nzcz9mODBjIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbnNlcnRlZCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQuaW5kZXhPZihjc3MpID49IDApIHJldHVybjtcbiAgICBpbnNlcnRlZC5wdXNoKGNzcyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbn07XG4iLCJ2YXIgaW5zZXJ0ID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJyk7XG5cbmluc2VydChub3JtYWxpemUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFR5cG9ncmFwaHlcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgZm9udCBmYW1pbHkgc2V0IG9kZGx5IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi8qKlxcbiAqIFNldCBjb25zaXN0ZW50IHF1b3RlIHR5cGVzLlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCIgXFxcIlxcXFwyMDFEXFxcIiBcXFwiXFxcXDIwMThcXFwiIFxcXCJcXFxcMjAxOVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZpZ3VyZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpIDUuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDIgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXG4iLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nzc1wiO1xyXG5pbXBvcnQgJy4vbWVudSc7XHJcbmltcG9ydCAnLi9zaW1wbGVTbGlkZXInOyIsImNvbnN0IG1lbnVfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB3aW5TY3JvbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9ICh3aW5TY3JvbGwgLyBzY3JvbGxIZWlnaHQpICogMTAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXIuc2xpZGVyX2FjdGl2ZVwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkICsgXCIlXCI7XHJcbn0pIiwiLyoqXHJcbiAqIFNpbXBsZUFkYXB0aXZlU2xpZGVyIGJ5IEl0Y2hpZWYgdjIuMC4wIChodHRwczovL2dpdGh1Yi5jb20vaXRjaGllZi91aS1jb21wb25lbnRzL3RyZWUvbWFzdGVyL3NpbXBsZS1hZGFwdGl2ZS1zbGlkZXIpXHJcbiAqIENvcHlyaWdodCAyMDIwIC0gMjAyMSBBbGV4YW5kZXIgTWFsdHNldlxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9pdGNoaWVmL3VpLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4gKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7YnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGx9O1xyXG4gICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICBlLmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxuICB9KSgpO1xyXG4gIFxyXG4gIC8vINCx0LDQt9C+0LLRi9C1INC60LvQsNGB0YHRiyDQuCDRgdC10LvQtdC60YLQvtGA0YtcclxuICB2YXIgV1JBUFBFUl9TRUxFQ1RPUiA9ICcuc2xpZGVyX193cmFwcGVyJztcclxuICB2YXIgSVRFTVNfU0VMRUNUT1IgPSAnLnNsaWRlcl9faXRlbXMnO1xyXG4gIHZhciBJVEVNX1NFTEVDVE9SID0gJy5zbGlkZXJfX2l0ZW0nO1xyXG4gIHZhciBJVEVNX0NMQVNTX0FDVElWRSA9ICdzbGlkZXJfX2l0ZW1fYWN0aXZlJztcclxuICB2YXIgQ09OVFJPTF9TRUxFQ1RPUiA9ICcuc2xpZGVyX19jb250cm9sJztcclxuICB2YXIgQ09OVFJPTF9DTEFTU19TSE9XID0gJ3NsaWRlcl9fY29udHJvbF9zaG93JztcclxuICAvLyDQuNC90LTQuNC60LDRgtC+0YDRi1xyXG4gIHZhciBJTkRJQ0FUT1JfV1JBUFBFUl9FTEVNRU5UID0gJ29sJztcclxuICB2YXIgSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1MgPSAnc2xpZGVyX19pbmRpY2F0b3JzJztcclxuICB2YXIgSU5ESUNBVE9SX0lURU1fRUxFTUVOVCA9ICdsaSc7XHJcbiAgdmFyIElORElDQVRPUl9JVEVNX0NMQVNTID0gJ3NsaWRlcl9faW5kaWNhdG9yJztcclxuICB2YXIgSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFID0gJ3NsaWRlcl9faW5kaWNhdG9yX2FjdGl2ZSc7XHJcbiAgLy8g0L/QvtGA0L7QsyDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCAoNDAlKVxyXG4gIHZhciBTV0lQRV9USFJFU0hPTEQgPSAyMDtcclxuICAvLyDQutC70LDRgdGBINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyB0cmFuc2l0aW9uXHJcbiAgdmFyIFRSQU5TSVRJT05fTk9ORSA9ICd0cmFuc2l0aW9uLW5vbmUnO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIFNpbXBsZUFkYXB0aXZlU2xpZGVyKHNlbGVjdG9yLCBjb25maWcpIHtcclxuICAgIC8vIC5zbGlkZXJcclxuICAgIHRoaXMuXyRyb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAvLyAuc2xpZGVyX193cmFwcGVyXHJcbiAgICB0aGlzLl8kd3JhcHBlciA9IHRoaXMuXyRyb290LnF1ZXJ5U2VsZWN0b3IoV1JBUFBFUl9TRUxFQ1RPUik7XHJcbiAgICAvLyAuc2xpZGVyX19pdGVtc1xyXG4gICAgdGhpcy5fJGl0ZW1zID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvcihJVEVNU19TRUxFQ1RPUik7XHJcbiAgICAvLyAuc2xpZGVyX19pdGVtXHJcbiAgICB0aGlzLl8kaXRlbUxpc3QgPSB0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElURU1fU0VMRUNUT1IpO1xyXG4gICAgLy8g0YLQtdC60YPRidC40Lkg0LjQvdC00LXQutGBXHJcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgLy8g0Y3QutGB0YLRgNC10LzQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDRgdC70LDQudC00L7QslxyXG4gICAgdGhpcy5fbWluT3JkZXIgPSAwO1xyXG4gICAgdGhpcy5fbWF4T3JkZXIgPSAwO1xyXG4gICAgdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fJGl0ZW1XaXRoTWF4T3JkZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbWluVHJhbnNsYXRlID0gMDtcclxuICAgIHRoaXMuX21heFRyYW5zbGF0ZSA9IDA7XHJcbiAgICAvLyDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INGB0LzQtdC90Ysg0YHQu9Cw0LnQtNC+0LIgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOKVxyXG4gICAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gICAgLy8g0YTQu9Cw0LMsINC60L7RgtC+0YDRi9C5INC/0L7QutCw0LfRi9Cy0LDQtdGCLCDRh9GC0L4g0LjQtNGR0YIg0L/RgNC+0YbQtdGB0YEg0YPRgNCw0LLQvdC+0LLQtdGI0LjQstCw0L3QuNGPINGB0LvQsNC50LTQvtCyXHJcbiAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSBmYWxzZTtcclxuICAgIC8vINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LhcclxuICAgIHRoaXMuX3RyYW5zZm9ybSA9IDA7XHJcbiAgICAvLyBzd2lwZSDQv9Cw0YDQsNC80LXRgtGA0YtcclxuICAgIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX3N3aXBlU3RhcnRQb3NYID0gMDtcclxuICAgIC8vIGlkINGC0LDQudC80LXRgNCwXHJcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcclxuICAgIC8vINC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwICjQv9C+INGD0LzQvtC70YfQsNC90LjRjilcclxuICAgIHRoaXMuX2NvbmZpZyA9IHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgc3dpcGU6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgLy8g0LjQt9C80LXQvdGP0LXQvCDQutC+0L3RhNC40LPRg9GA0LDRhtC40Y4g0YHQu9Cw0LnQtNC10YDQsCDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lgg0YEg0L/QtdGA0LXQtNCw0L3QvdGL0LzQuCDQvdCw0YHRgtGA0L7QudC60LDQvNC4XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gY29uZmlnW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQuiDRgdC70LDQudC00LDQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5fJGl0ZW1MaXN0W2ldLmRhdGFzZXQub3JkZXIgPSBpO1xyXG4gICAgICB0aGlzLl8kaXRlbUxpc3RbaV0uZGF0YXNldC5pbmRleCA9IGk7XHJcbiAgICAgIHRoaXMuXyRpdGVtTGlzdFtpXS5kYXRhc2V0LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICB9XHJcbiAgICAvLyDQv9C10YDQtdC80LXRidCw0LXQvCDQv9C+0YHQu9C10LTQvdC40Lkg0YHQu9Cw0LnQtCDQv9C10YDQtdC0INC/0LXRgNCy0YvQvFxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICB2YXIgdHJhbnNsYXRlID0gLXRoaXMuXyRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgICAgIHRoaXMuXyRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC5vcmRlciA9IC0xO1xyXG4gICAgICB0aGlzLl8kaXRlbUxpc3RbY291bnRdLmRhdGFzZXQudHJhbnNsYXRlID0gLXRoaXMuXyRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgICAgIHZhciB0cmFuc2Zvcm1WYWx1ZSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgICAgIHRoaXMuXyRpdGVtTGlzdFtjb3VudF0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LjQvdC00LjQutCw0YLQvtGA0Ysg0Log0YHQu9Cw0LnQtNC10YDRg1xyXG4gICAgdGhpcy5fYWRkSW5kaWNhdG9ycygpO1xyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INGN0LrRgdGC0YDQtdC80LDQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0L/QtdGA0LXQvNC10L3QvdGL0YVcclxuICAgIHRoaXMuX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAvLyDQv9C+0LzQtdGH0LDQtdC8INCw0LrRgtC40LLQvdGL0LUg0Y3Qu9C10LzQtdC90YLRi1xyXG4gICAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoKTtcclxuICAgIC8vINC90LDQt9C90LDRh9Cw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XHJcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XHJcbiAgICAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60YPRjiDRgdC80LXQvdGDINGB0LvQsNC50LTQvtCyXHJcbiAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gIH1cclxuICBcclxuICAvLyBzZXQgYWN0aXZlIGNsYXNzXHJcbiAgU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9zZXRBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gc2xpZGVzXHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBsZW5ndGg7XHJcbiAgICB2YXIgJGl0ZW07XHJcbiAgICB2YXIgaW5kZXg7XHJcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgJGl0ZW0gPSB0aGlzLl8kaXRlbUxpc3RbaV07XHJcbiAgICAgIGluZGV4ID0gcGFyc2VJbnQoJGl0ZW0uZGF0YXNldC5pbmRleCk7XHJcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZChJVEVNX0NMQVNTX0FDVElWRSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShJVEVNX0NMQVNTX0FDVElWRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGluZGljYXRvcnNcclxuICAgIHZhciAkaW5kaWNhdG9ycyA9IHRoaXMuXyRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgSU5ESUNBVE9SX0lURU1fQ0xBU1MpO1xyXG4gICAgaWYgKCRpbmRpY2F0b3JzLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSAkaW5kaWNhdG9ycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICRpdGVtID0gJGluZGljYXRvcnNbaV07XHJcbiAgICAgICAgaW5kZXggPSBwYXJzZUludCgkaXRlbS5kYXRhc2V0LnNsaWRlVG8pO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAkaXRlbS5jbGFzc0xpc3QuYWRkKElORElDQVRPUl9JVEVNX0NMQVNTX0FDVElWRSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnRyb2xzXHJcbiAgICB2YXIgJGNvbnRyb2xzID0gdGhpcy5fJHJvb3QucXVlcnlTZWxlY3RvckFsbChDT05UUk9MX1NFTEVDVE9SKTtcclxuICAgIGlmICghJGNvbnRyb2xzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gJGNvbnRyb2xzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJGNvbnRyb2xzW2ldLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICRjb250cm9sc1swXS5jbGFzc0xpc3QucmVtb3ZlKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICAgICAgJGNvbnRyb2xzWzFdLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPT09IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgJGNvbnRyb2xzWzBdLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgICAgICAkY29udHJvbHNbMV0uY2xhc3NMaXN0LnJlbW92ZShDT05UUk9MX0NMQVNTX1NIT1cpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250cm9sc1swXS5jbGFzc0xpc3QuYWRkKENPTlRST0xfQ0xBU1NfU0hPVyk7XHJcbiAgICAgICAgJGNvbnRyb2xzWzFdLmNsYXNzTGlzdC5hZGQoQ09OVFJPTF9DTEFTU19TSE9XKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8g0YHQvNC10L3QsCDRgdC70LDQudC00L7QslxyXG4gIFNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHRoaXMuXyRpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKFRSQU5TSVRJT05fTk9ORSk7XHJcbiAgICAgIHRoaXMuXyRpdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0aGlzLl90cmFuc2Zvcm0sICclKScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgIHZhciBjb25kaXRpb24gPSB0aGlzLl9jdXJyZW50SW5kZXggKyAxID49IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICAgIGlmIChjb25kaXRpb24gJiYgdGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDw9IDAgJiYgdGhpcy5fZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBzdGVwID0gdGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcgPyAtMTAwIDogMTAwO1xyXG4gICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuX3RyYW5zZm9ybSArIHN0ZXA7XHJcbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgaWYgKCsrdGhpcy5fY3VycmVudEluZGV4ID4gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggLT0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKC0tdGhpcy5fY3VycmVudEluZGV4IDwgMCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCArPSB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICB0aGlzLl8kaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNmb3JtLCAnJSknKTtcclxuICAgIHRoaXMuX3NldEFjdGl2ZUNsYXNzKCk7XHJcbiAgfTtcclxuICBcclxuICAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQuiDRgdC70LDQudC00YMg0L/QviDQuNC90LTQtdC60YHRg1xyXG4gIFNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5fbW92ZVRvID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXg7XHJcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSBpbmRleCA+IGN1cnJlbnRJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTWF0aC5hYnMoaW5kZXggLSBjdXJyZW50SW5kZXgpOyBpKyspIHtcclxuICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8g0LzQtdGC0L7QtCDQtNC70Y8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60L7QuSDRgdC80LXQvdGLINGB0LvQsNC50LTQvtCyXHJcbiAgU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9hdXRvcGxheSA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b3BsYXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3N0b3AnKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XHJcbiAgICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxJZCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gICAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INC40L3QtNC40LrQsNGC0L7RgNC+0LJcclxuICBTaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX2FkZEluZGljYXRvcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0aGlzLl8kcm9vdC5xdWVyeVNlbGVjdG9yKCcuJyArIElORElDQVRPUl9XUkFQUEVSX0NMQVNTKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgJHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KElORElDQVRPUl9XUkFQUEVSX0VMRU1FTlQpO1xyXG4gICAgJHdyYXBwZXIuY2xhc3NOYW1lID0gSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1M7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciAkaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoSU5ESUNBVE9SX0lURU1fRUxFTUVOVCk7XHJcbiAgICAgICRpdGVtLmNsYXNzTmFtZSA9IElORElDQVRPUl9JVEVNX0NMQVNTO1xyXG4gICAgICAkaXRlbS5kYXRhc2V0LnNsaWRlVG8gPSBpO1xyXG4gICAgICAkd3JhcHBlci5hcHBlbmRDaGlsZCgkaXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl8kcm9vdC5hcHBlbmRDaGlsZCgkd3JhcHBlcik7XHJcbiAgfTtcclxuICBcclxuICAvLyByZWZyZXNoIGV4dHJlbWUgdmFsdWVzXHJcbiAgU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9yZWZyZXNoRXh0cmVtZVZhbHVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICAgIHRoaXMuX21pbk9yZGVyID0gcGFyc2VJbnQoJGl0ZW1MaXN0WzBdLmRhdGFzZXQub3JkZXIpO1xyXG4gICAgdGhpcy5fbWF4T3JkZXIgPSB0aGlzLl9taW5PcmRlcjtcclxuICAgIHRoaXMuXyRpdGVtV2l0aE1pbk9yZGVyID0gJGl0ZW1MaXN0WzBdO1xyXG4gICAgdGhpcy5fJGl0ZW1XaXRoTWF4T3JkZXIgPSB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlcjtcclxuICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtTGlzdFswXS5kYXRhc2V0LnRyYW5zbGF0ZSk7XHJcbiAgICB0aGlzLl9tYXhUcmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpXTtcclxuICAgICAgdmFyIG9yZGVyID0gcGFyc2VJbnQoJGl0ZW0uZGF0YXNldC5vcmRlcik7XHJcbiAgICAgIGlmIChvcmRlciA8IHRoaXMuX21pbk9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWluT3JkZXIgPSBvcmRlcjtcclxuICAgICAgICB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlciA9ICRpdGVtO1xyXG4gICAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQudHJhbnNsYXRlKTtcclxuICAgICAgfSBlbHNlIGlmIChvcmRlciA+IHRoaXMuX21heE9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF4T3JkZXIgPSBvcmRlcjtcclxuICAgICAgICB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlciA9ICRpdGVtO1xyXG4gICAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9IHBhcnNlSW50KCRpdGVtLmRhdGFzZXQudHJhbnNsYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8gYmFsYW5jaW5nIGl0ZW1zXHJcbiAgU2ltcGxlQWRhcHRpdmVTbGlkZXIucHJvdG90eXBlLl9iYWxhbmNpbmdJdGVtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyICR3cmFwcGVyID0gdGhpcy5fJHdyYXBwZXI7XHJcbiAgICB2YXIgd3JhcHBlclJlY3QgPSAkd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBoYWxmV2lkdGhJdGVtID0gd3JhcHBlclJlY3Qud2lkdGggLyAyO1xyXG4gICAgdmFyIGNvdW50ID0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgIHZhciB0cmFuc2xhdGU7XHJcbiAgICB2YXIgY2xpZW50UmVjdDtcclxuICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgICB2YXIgd3JhcHBlckxlZnQgPSB3cmFwcGVyUmVjdC5sZWZ0O1xyXG4gICAgICB2YXIgJG1pbiA9IHRoaXMuXyRpdGVtV2l0aE1pbk9yZGVyO1xyXG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgICAgIGNsaWVudFJlY3QgPSAkbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoY2xpZW50UmVjdC5yaWdodCA8IHdyYXBwZXJMZWZ0IC0gaGFsZldpZHRoSXRlbSkge1xyXG4gICAgICAgICRtaW4uZGF0YXNldC5vcmRlciA9IHRoaXMuX21pbk9yZGVyICsgY291bnQ7XHJcbiAgICAgICAgdHJhbnNsYXRlICs9IGNvdW50ICogMTAwO1xyXG4gICAgICAgICRtaW4uZGF0YXNldC50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgJG1pbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAgIHRoaXMuX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuICAgICAgdmFyIHdyYXBwZXJSaWdodCA9IHdyYXBwZXJSZWN0LnJpZ2h0O1xyXG4gICAgICB2YXIgJG1heCA9IHRoaXMuXyRpdGVtV2l0aE1heE9yZGVyO1xyXG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLl9tYXhUcmFuc2xhdGU7XHJcbiAgICAgIGNsaWVudFJlY3QgPSAkbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoY2xpZW50UmVjdC5sZWZ0ID4gd3JhcHBlclJpZ2h0ICsgaGFsZldpZHRoSXRlbSkge1xyXG4gICAgICAgICRtYXguZGF0YXNldC5vcmRlciA9IHRoaXMuX21heE9yZGVyIC0gY291bnQ7XHJcbiAgICAgICAgdHJhbnNsYXRlIC09IGNvdW50ICogMTAwO1xyXG4gICAgICAgICRtYXguZGF0YXNldC50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgJG1heC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAgIHRoaXMuX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9iYWxhbmNpbmdJdGVtcy5iaW5kKHRoaXMpKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIGFkZGluZyBsaXN0ZW5lcnNcclxuICBTaW1wbGVBZGFwdGl2ZVNsaWRlci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkaXRlbXMgPSB0aGlzLl8kaXRlbXM7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgICAgdmFyICR0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgICAgaWYgKCR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2wnKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAkdGFyZ2V0LmRhdGFzZXQuc2xpZGU7XHJcbiAgICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKCR0YXJnZXQuZGF0YXNldC5zbGlkZVRvKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KCR0YXJnZXQuZGF0YXNldC5zbGlkZVRvKTtcclxuICAgICAgICB0aGlzLl9tb3ZlVG8oaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uVHJhbnNpdGlvblN0YXJ0KCkge1xyXG4gICAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSB0cnVlO1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2JhbGFuY2luZ0l0ZW1zLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fJHJvb3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlci50cmFuc2l0aW9uLmVuZCcsXHJcbiAgICAgICAgICB7YnViYmxlczogdHJ1ZX0pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Td2lwZVN0YXJ0KGUpIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgIHRoaXMuX3N3aXBlU3RhcnRQb3NYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgdGhpcy5fc3dpcGVTdGFydFBvc1kgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5faGFzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Td2lwZU1vdmUoZSkge1xyXG4gICAgICBpZiAoIXRoaXMuX2hhc1N3aXBlU3RhdGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgIHZhciBkaWZmUG9zWCA9IHRoaXMuX3N3aXBlU3RhcnRQb3NYIC0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgdmFyIGRpZmZQb3NZID0gdGhpcy5fc3dpcGVTdGFydFBvc1kgLSBldmVudC5jbGllbnRZO1xyXG4gICAgICBpZiAoIXRoaXMuX2hhc1N3aXBpbmcpIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlBvc1kpID4gTWF0aC5hYnMoZGlmZlBvc1gpKSB7XHJcbiAgICAgICAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhc1N3aXBpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCF0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggKyAxID49IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggJiYgZGlmZlBvc1ggPj0gMCkge1xyXG4gICAgICAgICAgZGlmZlBvc1ggPSBkaWZmUG9zWCAvIDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPD0gMCAmJiBkaWZmUG9zWCA8PSAwKSB7XHJcbiAgICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHZhbHVlID0gKGRpZmZQb3NYIC8gdGhpcy5fJHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpICogMTAwO1xyXG4gICAgICB2YXIgdHJhbnNsYXRlWCA9IHRoaXMuX3RyYW5zZm9ybSAtIHZhbHVlO1xyXG4gICAgICB0aGlzLl8kaXRlbXMuY2xhc3NMaXN0LmFkZChUUkFOU0lUSU9OX05PTkUpO1xyXG4gICAgICB0aGlzLl8kaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNsYXRlWCwgJyUpJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblN3aXBlRW5kKGUpIHtcclxuICAgICAgaWYgKCF0aGlzLl9oYXNTd2lwZVN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcclxuICAgICAgdmFyIGRpZmZQb3NYID0gdGhpcy5fc3dpcGVTdGFydFBvc1ggLSBldmVudC5jbGllbnRYO1xyXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCArIDEgPj0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAmJiBkaWZmUG9zWCA+PSAwKSB7XHJcbiAgICAgICAgICBkaWZmUG9zWCA9IGRpZmZQb3NYIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA8PSAwICYmIGRpZmZQb3NYIDw9IDApIHtcclxuICAgICAgICAgIGRpZmZQb3NYID0gZGlmZlBvc1ggLyA0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YXIgdmFsdWUgPSAoZGlmZlBvc1ggLyB0aGlzLl8kd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkgKiAxMDA7XHJcbiAgICAgIHRoaXMuXyRpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKFRSQU5TSVRJT05fTk9ORSk7XHJcbiAgICAgIGlmICh2YWx1ZSA+IFNXSVBFX1RIUkVTSE9MRCkge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAtU1dJUEVfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gICAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJykge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsaWNrXHJcbiAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAvLyB0cmFuc2l0aW9uc3RhcnQgYW5kIHRyYW5zaXRpb25lbmRcclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0Jywgb25UcmFuc2l0aW9uU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICRpdGVtcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8gbW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZVxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvcGxheSkge1xyXG4gICAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8gc3dpcGVcclxuICAgIGlmICh0aGlzLl9jb25maWcuc3dpcGUpIHtcclxuICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uU3dpcGVTdGFydC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA/IHtwYXNzaXZlOiBmYWxzZX0gOiBmYWxzZSk7XHJcbiAgICAgIHRoaXMuXyRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uU3dpcGVNb3ZlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID8ge3Bhc3NpdmU6IGZhbHNlfSA6IGZhbHNlKTtcclxuICAgICAgdGhpcy5fJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Td2lwZVN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLl8kcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvblN3aXBlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblN3aXBlRW5kLmJpbmQodGhpcykpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Td2lwZUVuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHRoaXMuXyRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgLy8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQsNC60YLQuNCy0L3QvtGB0YLQuCDQstC60LvQsNC00LrQuFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vINC/0LXRgNC10LnRgtC4INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG4gIFNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgfTtcclxuICBcclxuICAvLyDQv9C10YDQtdC50YLQuCDQuiDQv9GA0LXQtNGL0LTRg9GJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG4gIFNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSAncHJldic7XHJcbiAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgfTtcclxuICBcclxuICAvLyDRg9C/0YDQsNCy0LvQtdC90LjQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC5INGB0LzQtdC90L7QuSDRgdC70LDQudC00L7QslxyXG4gIFNpbXBsZUFkYXB0aXZlU2xpZGVyLnByb3RvdHlwZS5hdXRvcGxheSA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICB9O1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgdmFyIHNsaWRlciA9IG5ldyBTaW1wbGVBZGFwdGl2ZVNsaWRlcignLmpvdXJuYWxfX3NsaWRlcicsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICBzd2lwZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAvLyDQvdCw0LfQvdCw0YfQuNC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXByZXZcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcHJldicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vINC/0LXRgNC10LnQtNGR0Lwg0Log0L/RgNC10LTRi9C00YPRidC10LzRgyDRgdC70LDQudC00YNcclxuICAgICAgc2xpZGVyLnByZXYoKTtcclxuICAgIH1cclxuICAgIC8vINC90LDQt9C90LDRh9C40Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tbmV4dFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1uZXh0Jykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g0L/QtdGA0LXQudC00ZHQvCDQuiDRgdC70LXQtNGD0Y7RidC10LzRgyDRgdC70LDQudC00YNcclxuICAgICAgc2xpZGVyLm5leHQoKTtcclxuICAgIH1cclxuICB9KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZS1zY3NzX3Nhc3NfX25vcm1hbGl6ZV9zY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbm9ybWFsaXplLXNjc3Nfc2Fzc19fbm9ybWFsaXplX3Njc3NcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImluc2VydGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImNzcyIsImluZGV4T2YiLCJwdXNoIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiaGVhZCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnQiLCJyZXF1aXJlIiwibm9ybWFsaXplIiwibWVudV9saW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid2luU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImUiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIldSQVBQRVJfU0VMRUNUT1IiLCJJVEVNU19TRUxFQ1RPUiIsIklURU1fU0VMRUNUT1IiLCJJVEVNX0NMQVNTX0FDVElWRSIsIkNPTlRST0xfU0VMRUNUT1IiLCJDT05UUk9MX0NMQVNTX1NIT1ciLCJJTkRJQ0FUT1JfV1JBUFBFUl9FTEVNRU5UIiwiSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1MiLCJJTkRJQ0FUT1JfSVRFTV9FTEVNRU5UIiwiSU5ESUNBVE9SX0lURU1fQ0xBU1MiLCJJTkRJQ0FUT1JfSVRFTV9DTEFTU19BQ1RJVkUiLCJTV0lQRV9USFJFU0hPTEQiLCJUUkFOU0lUSU9OX05PTkUiLCJTaW1wbGVBZGFwdGl2ZVNsaWRlciIsInNlbGVjdG9yIiwiY29uZmlnIiwiXyRyb290IiwiXyR3cmFwcGVyIiwiXyRpdGVtcyIsIl8kaXRlbUxpc3QiLCJfY3VycmVudEluZGV4IiwiX21pbk9yZGVyIiwiX21heE9yZGVyIiwiXyRpdGVtV2l0aE1pbk9yZGVyIiwiXyRpdGVtV2l0aE1heE9yZGVyIiwiX21pblRyYW5zbGF0ZSIsIl9tYXhUcmFuc2xhdGUiLCJfZGlyZWN0aW9uIiwiX2JhbGFuY2luZ0l0ZW1zRmxhZyIsIl90cmFuc2Zvcm0iLCJfaGFzU3dpcGVTdGF0ZSIsIl9zd2lwZVN0YXJ0UG9zWCIsIl9pbnRlcnZhbElkIiwiX2NvbmZpZyIsImxvb3AiLCJhdXRvcGxheSIsImludGVydmFsIiwic3dpcGUiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJkYXRhc2V0Iiwib3JkZXIiLCJpbmRleCIsInRyYW5zbGF0ZSIsImNvdW50IiwidHJhbnNmb3JtVmFsdWUiLCJjb25jYXQiLCJ0cmFuc2Zvcm0iLCJfYWRkSW5kaWNhdG9ycyIsIl9yZWZyZXNoRXh0cmVtZVZhbHVlcyIsIl9zZXRBY3RpdmVDbGFzcyIsIl9hZGRFdmVudExpc3RlbmVyIiwiX2F1dG9wbGF5IiwicHJvdG90eXBlIiwiJGl0ZW0iLCJwYXJzZUludCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIiRpbmRpY2F0b3JzIiwic2xpZGVUbyIsIiRjb250cm9scyIsIl9tb3ZlIiwiY29uZGl0aW9uIiwic3RlcCIsIl9tb3ZlVG8iLCJjdXJyZW50SW5kZXgiLCJNYXRoIiwiYWJzIiwiYWN0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiYmluZCIsIiR3cmFwcGVyIiwiY2xhc3NOYW1lIiwiJGl0ZW1MaXN0IiwiX2JhbGFuY2luZ0l0ZW1zIiwid3JhcHBlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoYWxmV2lkdGhJdGVtIiwiY2xpZW50UmVjdCIsIndyYXBwZXJMZWZ0IiwibGVmdCIsIiRtaW4iLCJyaWdodCIsIndyYXBwZXJSaWdodCIsIiRtYXgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCIkaXRlbXMiLCJvbkNsaWNrIiwiJHRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJzbGlkZSIsIm9uVHJhbnNpdGlvblN0YXJ0Iiwib25UcmFuc2l0aW9uRW5kIiwiZGlzcGF0Y2hFdmVudCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uU3dpcGVTdGFydCIsInR5cGUiLCJzZWFyY2giLCJ0b3VjaGVzIiwiY2xpZW50WCIsIl9zd2lwZVN0YXJ0UG9zWSIsImNsaWVudFkiLCJfaGFzU3dpcGluZyIsIm9uU3dpcGVNb3ZlIiwiZGlmZlBvc1giLCJkaWZmUG9zWSIsInZhbHVlIiwidHJhbnNsYXRlWCIsIm9uU3dpcGVFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uRHJhZ1N0YXJ0Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwic3VwcG9ydHNQYXNzaXZlIiwib3B0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZXJyIiwicGFzc2l2ZSIsIm5leHQiLCJwcmV2Iiwic2xpZGVyIiwib25jbGljayJdLCJzb3VyY2VSb290IjoiIn0=