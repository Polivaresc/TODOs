/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, button, input, select {\n    font-family: Helvetica, sans-serif;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    gap: 20px;\n    width: 20%;\n    text-align: right;\n    color: #4d4a5a;\n    padding: 50px;\n}\n\n.submit-todo {\n    grid-column: 1/3;\n    border: none;\n    padding: 10px;\n    color: white;\n    font-size: medium;\n    background-image: linear-gradient(to right, #352083, #6A4CD4);\n}\n\n.submit-todo:hover {\n    background-image: linear-gradient(to right, #6A4CD4, #352083);\n}\n\n.form-title {\n    grid-column: 1/3;\n    text-align: left;\n    color: #29113B;\n    margin: 0px;\n    border-bottom: 1px solid #29113B;\n}\n\n.priority-checkbox {\n    text-align: left;\n}\n\ninput, select {\n    color: #4d4a5a;\n    padding: 5px;\n    background: none;\n    border: 1px solid #D2CCF0;\n}\n\ninput:focus, select:focus, input:hover, select:hover {\n    border-bottom: 2px solid #6A4CD4;\n}\n\nselect:hover, button:hover {\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,WAAW;IACX,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB","sourcesContent":["body, button, input, select {\n    font-family: Helvetica, sans-serif;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    gap: 20px;\n    width: 20%;\n    text-align: right;\n    color: #4d4a5a;\n    padding: 50px;\n}\n\n.submit-todo {\n    grid-column: 1/3;\n    border: none;\n    padding: 10px;\n    color: white;\n    font-size: medium;\n    background-image: linear-gradient(to right, #352083, #6A4CD4);\n}\n\n.submit-todo:hover {\n    background-image: linear-gradient(to right, #6A4CD4, #352083);\n}\n\n.form-title {\n    grid-column: 1/3;\n    text-align: left;\n    color: #29113B;\n    margin: 0px;\n    border-bottom: 1px solid #29113B;\n}\n\n.priority-checkbox {\n    text-align: left;\n}\n\ninput, select {\n    color: #4d4a5a;\n    padding: 5px;\n    background: none;\n    border: 1px solid #D2CCF0;\n}\n\ninput:focus, select:focus, input:hover, select:hover {\n    border-bottom: 2px solid #6A4CD4;\n}\n\nselect:hover, button:hover {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanillajs-datepicker */ "./node_modules/vanillajs-datepicker/js/main.js");




const date = document.querySelector('#todo-dueDate')
const datepicker = new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_2__.Datepicker(date)

function getData() {

    const todoForm = document.querySelector('#todo-form')

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#todo-title').value
        const description = document.querySelector('#todo-description').value
        const dueDate = datepicker.value
        const priority = document.querySelector('#todo-priority').value
        const project = document.querySelector('#todo-project').value

        const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority)
        ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.addTodo)(project, todo)
    })   
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
let projects = [{name: 'default', todos: []}]

function addTodo(projectName, todo) {
    console.log(projectName)
    projects.find(p => p.name === projectName).todos.push(todo)
    console.log(projects)
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoFactory)
/* harmony export */ });
function todoFactory(title, description, dueDate, priority) {
    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority
    const getStatus = () => {
        const checked = false
        return checked
    }

    return {getTitle, getDescription, getDueDate, getPriority, getStatus}
}

/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/DateRangePicker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/DateRangePicker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateRangePicker)
/* harmony export */ });
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _Datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Datepicker.js */ "./node_modules/vanillajs-datepicker/js/Datepicker.js");




// filter out the config options inapproprite to pass to Datepicker
function filterOptions(options) {
  const newOpts = Object.assign({}, options);

  delete newOpts.inputs;
  delete newOpts.allowOneSidedRange;
  delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date

  return newOpts;
}

function setupDatepicker(rangepicker, changeDateListener, el, options) {
  (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_0__.registerListeners)(rangepicker, [
    [el, 'changeDate', changeDateListener],
  ]);
  new _Datepicker_js__WEBPACK_IMPORTED_MODULE_2__["default"](el, options, rangepicker);
}

function onChangeDate(rangepicker, ev) {
  // to prevent both datepickers trigger the other side's update each other
  if (rangepicker._updating) {
    return;
  }
  rangepicker._updating = true;

  const target = ev.target;
  if (target.datepicker === undefined) {
    return;
  }

  const datepickers = rangepicker.datepickers;
  const setDateOptions = {render: false};
  const changedSide = rangepicker.inputs.indexOf(target);
  const otherSide = changedSide === 0 ? 1 : 0;
  const changedDate = datepickers[changedSide].dates[0];
  const otherDate = datepickers[otherSide].dates[0];

  if (changedDate !== undefined && otherDate !== undefined) {
    // if the start of the range > the end, swap them
    if (changedSide === 0 && changedDate > otherDate) {
      datepickers[0].setDate(otherDate, setDateOptions);
      datepickers[1].setDate(changedDate, setDateOptions);
    } else if (changedSide === 1 && changedDate < otherDate) {
      datepickers[0].setDate(changedDate, setDateOptions);
      datepickers[1].setDate(otherDate, setDateOptions);
    }
  } else if (!rangepicker.allowOneSidedRange) {
    // to prevent the range from becoming one-sided, copy changed side's
    // selection (no matter if it's empty) to the other side
    if (changedDate !== undefined || otherDate !== undefined) {
      setDateOptions.clear = true;
      datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
    }
  }
  datepickers[0].picker.update().render();
  datepickers[1].picker.update().render();
  delete rangepicker._updating;
}

/**
 * Class representing a date range picker
 */
class DateRangePicker  {
  /**
   * Create a date range picker
   * @param  {Element} element - element to bind a date range picker
   * @param  {Object} [options] - config options
   */
  constructor(element, options = {}) {
    const inputs = Array.isArray(options.inputs)
      ? options.inputs
      : Array.from(element.querySelectorAll('input'));
    if (inputs.length < 2) {
      return;
    }

    element.rangepicker = this;
    this.element = element;
    this.inputs = inputs.slice(0, 2);
    this.allowOneSidedRange = !!options.allowOneSidedRange;

    const changeDateListener = onChangeDate.bind(null, this);
    const cleanOptions = filterOptions(options);
    // in order for initial date setup to work right when pcicLvel > 0,
    // let Datepicker constructor add the instance to the rangepicker
    const datepickers = [];
    Object.defineProperty(this, 'datepickers', {
      get() {
        return datepickers;
      },
    });
    setupDatepicker(this, changeDateListener, this.inputs[0], cleanOptions);
    setupDatepicker(this, changeDateListener, this.inputs[1], cleanOptions);
    Object.freeze(datepickers);
    // normalize the range if inital dates are given
    if (datepickers[0].dates.length > 0) {
      onChangeDate(this, {target: this.inputs[0]});
    } else if (datepickers[1].dates.length > 0) {
      onChangeDate(this, {target: this.inputs[1]});
    }
  }

  /**
   * @type {Array} - selected date of the linked date pickers
   */
  get dates() {
    return this.datepickers.length === 2
      ? [
          this.datepickers[0].dates[0],
          this.datepickers[1].dates[0],
        ]
      : undefined;
  }

  /**
   * Set new values to the config options
   * @param {Object} options - config options to update
   */
  setOptions(options) {
    this.allowOneSidedRange = !!options.allowOneSidedRange;

    const cleanOptions = filterOptions(options);
    this.datepickers[0].setOptions(cleanOptions);
    this.datepickers[1].setOptions(cleanOptions);
  }

  /**
   * Destroy the DateRangePicker instance
   * @return {DateRangePicker} - the instance destroyed
   */
  destroy() {
    this.datepickers[0].destroy();
    this.datepickers[1].destroy();
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_0__.unregisterListeners)(this);
    delete this.element.rangepicker;
  }

  /**
   * Get the start and end dates of the date range
   *
   * The method returns Date objects by default. If format string is passed,
   * it returns date strings formatted in given format.
   * The result array always contains 2 items (start date/end date) and
   * undefined is used for unselected side. (e.g. If none is selected,
   * the result will be [undefined, undefined]. If only the end date is set
   * when allowOneSidedRange config option is true, [undefined, endDate] will
   * be returned.)
   *
   * @param  {String} [format] - Format string to stringify the dates
   * @return {Array} - Start and end dates
   */
  getDates(format = undefined) {
    const callback = format
      ? date => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_1__.formatDate)(date, format, this.datepickers[0].config.locale)
      : date => new Date(date);

    return this.dates.map(date => date === undefined ? date : callback(date));
  }

  /**
   * Set the start and end dates of the date range
   *
   * The method calls datepicker.setDate() internally using each of the
   * arguments in start→end order.
   *
   * When a clear: true option object is passed instead of a date, the method
   * clears the date.
   *
   * If an invalid date, the same date as the current one or an option object
   * without clear: true is passed, the method considers that argument as an
   * "ineffective" argument because calling datepicker.setDate() with those
   * values makes no changes to the date selection.
   *
   * When the allowOneSidedRange config option is false, passing {clear: true}
   * to clear the range works only when it is done to the last effective
   * argument (in other words, passed to rangeEnd or to rangeStart along with
   * ineffective rangeEnd). This is because when the date range is changed,
   * it gets normalized based on the last change at the end of the changing
   * process.
   *
   * @param {Date|Number|String|Object} rangeStart - Start date of the range
   * or {clear: true} to clear the date
   * @param {Date|Number|String|Object} rangeEnd - End date of the range
   * or {clear: true} to clear the date
   */
  setDates(rangeStart, rangeEnd) {
    const [datepicker0, datepicker1] = this.datepickers;
    const origDates = this.dates;

    // If range normalization runs on every change, we can't set a new range
    // that starts after the end of the current range correctly because the
    // normalization process swaps start↔︎end right after setting the new start
    // date. To prevent this, the normalization process needs to run once after
    // both of the new dates are set.
    this._updating = true;
    datepicker0.setDate(rangeStart);
    datepicker1.setDate(rangeEnd);
    delete this._updating;

    if (datepicker1.dates[0] !== origDates[1]) {
      onChangeDate(this, {target: this.inputs[1]});
    } else if (datepicker0.dates[0] !== origDates[0]) {
      onChangeDate(this, {target: this.inputs[0]});
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/Datepicker.js":
/*!************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/Datepicker.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/base-locales.js */ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js");
/* harmony import */ var _options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");
/* harmony import */ var _options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/processOptions.js */ "./node_modules/vanillajs-datepicker/js/options/processOptions.js");
/* harmony import */ var _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picker/Picker.js */ "./node_modules/vanillajs-datepicker/js/picker/Picker.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/inputFieldListeners.js */ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js");
/* harmony import */ var _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/otherListeners.js */ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js");













function stringifyDates(dates, config) {
  return dates
    .map(dt => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(dt, config.format, config.locale))
    .join(config.dateDelimiter);
}

// parse input dates and create an array of time values for selection
// returns undefined if there are no valid dates in inputDates
// when origDates (current selection) is passed, the function works to mix
// the input dates into the current selection
function processInputDates(datepicker, inputDates, clear = false) {
  // const {config, dates: origDates, rangepicker} = datepicker;
  const {config, dates: origDates, rangeSideIndex} = datepicker;
  if (inputDates.length === 0) {
    // empty input is considered valid unless origiDates is passed
    return clear ? [] : undefined;
  }

  // const rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
  let newDates = inputDates.reduce((dates, dt) => {
    let date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, config.format, config.locale);
    if (date === undefined) {
      return dates;
    }
    // adjust to 1st of the month/Jan 1st of the year
    // or to the last day of the monh/Dec 31st of the year if the datepicker
    // is the range-end picker of a rangepicker
    date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, config.pickLevel, rangeSideIndex);
    if (
      (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, config.minDate, config.maxDate)
      && !dates.includes(date)
      && !config.datesDisabled.includes(date)
      && (config.pickLevel > 0 || !config.daysOfWeekDisabled.includes(new Date(date).getDay()))
    ) {
      dates.push(date);
    }
    return dates;
  }, []);
  if (newDates.length === 0) {
    return;
  }
  if (config.multidate && !clear) {
    // get the synmetric difference between origDates and newDates
    newDates = newDates.reduce((dates, date) => {
      if (!origDates.includes(date)) {
        dates.push(date);
      }
      return dates;
    }, origDates.filter(date => !newDates.includes(date)));
  }
  // do length check always because user can input multiple dates regardless of the mode
  return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates
    ? newDates.slice(config.maxNumberOfDates * -1)
    : newDates;
}

// refresh the UI elements
// modes: 1: input only, 2, picker only, 3 both
function refreshUI(datepicker, mode = 3, quickRender = true) {
  const {config, picker, inputField} = datepicker;
  if (mode & 2) {
    const newView = picker.active ? config.pickLevel : config.startView;
    picker.update().changeView(newView).render(quickRender);
  }
  if (mode & 1 && inputField) {
    inputField.value = stringifyDates(datepicker.dates, config);
  }
}

function setDate(datepicker, inputDates, options) {
  let {clear, render, autohide, revert} = options;
  if (render === undefined) {
    render = true;
  }
  if (!render) {
    autohide = false;
  } else if (autohide === undefined) {
    autohide = datepicker.config.autohide;
  }

  const newDates = processInputDates(datepicker, inputDates, clear);
  if (!newDates && !revert) {
    return;
  }
  if (newDates && newDates.toString() !== datepicker.dates.toString()) {
    datepicker.dates = newDates;
    refreshUI(datepicker, render ? 3 : 1);
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_9__.triggerDatepickerEvent)(datepicker, 'changeDate');
  } else {
    refreshUI(datepicker, 1);
  }

  if (autohide) {
    datepicker.hide();
  }
}

/**
 * Class representing a date picker
 */
class Datepicker {
  /**
   * Create a date picker
   * @param  {Element} element - element to bind a date picker
   * @param  {Object} [options] - config options
   * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
   * date picker belongs to. Use this only when creating date picker as a part
   * of date range picker
   */
  constructor(element, options = {}, rangepicker = undefined) {
    element.datepicker = this;
    this.element = element;

    const config = this.config = Object.assign({
      buttonClass: (options.buttonClass && String(options.buttonClass)) || 'button',
      container: null,
      defaultViewDate: (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(),
      maxDate: undefined,
      minDate: undefined,
    }, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"], this));
    // configure by type
    const inline = this.inline = element.tagName !== 'INPUT';
    let inputField;
    if (inline) {
      config.container = element;
    } else {
      if (options.container) {
        // omit string type check because it doesn't guarantee to avoid errors
        // (invalid selector string causes abend with sytax error)
        config.container = options.container instanceof HTMLElement
          ? options.container
          : document.querySelector(options.container);
      }
      inputField = this.inputField = element;
      inputField.classList.add('datepicker-input');
    }
    if (rangepicker) {
      // check validiry
      const index = rangepicker.inputs.indexOf(inputField);
      const datepickers = rangepicker.datepickers;
      if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
        throw Error('Invalid rangepicker object.');
      }
      // attach itaelf to the rangepicker here so that processInputDates() can
      // determine if this is the range-end picker of the rangepicker while
      // setting inital values when pickLevel > 0
      datepickers[index] = this;
      // add getter for rangepicker
      Object.defineProperty(this, 'rangepicker', {
        get() {
          return rangepicker;
        },
      });
      Object.defineProperty(this, 'rangeSideIndex', {
        get() {
          return index;
        },
      });
    }

    // set up config
    this._options = options;
    Object.assign(config, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this));

    // set initial dates
    let initialDates;
    if (inline) {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(element.dataset.date, config.dateDelimiter);
      delete element.dataset.date;
    } else {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(inputField.value, config.dateDelimiter);
    }
    this.dates = [];
    // process initial value
    const inputDateValues = processInputDates(this, initialDates);
    if (inputDateValues && inputDateValues.length > 0) {
      this.dates = inputDateValues;
    }
    if (inputField) {
      inputField.value = stringifyDates(this.dates, config);
    }

    const picker = this.picker = new _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__["default"](this);

    if (inline) {
      this.show();
    } else {
      // set up event listeners in other modes
      const onMousedownDocument = _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__.onClickOutside.bind(null, this);
      const listeners = [
        [inputField, 'keydown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onKeydown.bind(null, this)],
        [inputField, 'focus', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onFocus.bind(null, this)],
        [inputField, 'mousedown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onMousedown.bind(null, this)],
        [inputField, 'click', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onClickInput.bind(null, this)],
        [inputField, 'paste', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onPaste.bind(null, this)],
        [document, 'mousedown', onMousedownDocument],
        [document, 'touchstart', onMousedownDocument],
        [window, 'resize', picker.place.bind(picker)]
      ];
      (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.registerListeners)(this, listeners);
    }
  }

  /**
   * Format Date object or time value in given format and language
   * @param  {Date|Number} date - date or time value to format
   * @param  {String|Object} format - format string or object that contains
   * toDisplay() custom formatter, whose signature is
   * - args:
   *   - date: {Date} - Date instance of the date passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {String} formatted date
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {String} formatted date
   */
  static formatDate(date, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * Parse date string
   * @param  {String|Date|Number} dateStr - date string, Date object or time
   * value to parse
   * @param  {String|Object} format - format string or object that contains
   * toValue() custom parser, whose signature is
   * - args:
   *   - dateStr: {String|Date|Number} - the dateStr passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {Date|Number} parsed date or its time value
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {Number} time value of parsed date
   */
  static parseDate(dateStr, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dateStr, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * @type {Object} - Installed locales in `[languageCode]: localeObject` format
   * en`:_English (US)_ is pre-installed.
   */
  static get locales() {
    return _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales;
  }

  /**
   * @type {Boolean} - Whether the picker element is shown. `true` whne shown
   */
  get active() {
    return !!(this.picker && this.picker.active);
  }

  /**
   * @type {HTMLDivElement} - DOM object of picker element
   */
  get pickerElement() {
    return this.picker ? this.picker.element : undefined;
  }

  /**
   * Set new values to the config options
   * @param {Object} options - config options to update
   */
  setOptions(options) {
    const picker = this.picker;
    const newOptions = (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this);
    Object.assign(this._options, options);
    Object.assign(this.config, newOptions);
    picker.setOptions(newOptions);

    refreshUI(this, 3);
  }

  /**
   * Show the picker element
   */
  show() {
    if (this.inputField) {
      if (this.inputField.disabled) {
        return;
      }
      if (!(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.isActiveElement)(this.inputField) && !this.config.disableTouchKeyboard) {
        this._showing = true;
        this.inputField.focus();
        delete this._showing;
      }
    }
    this.picker.show();
  }

  /**
   * Hide the picker element
   * Not available on inline picker
   */
  hide() {
    if (this.inline) {
      return;
    }
    this.picker.hide();
    this.picker.update().changeView(this.config.startView).render();
  }

  /**
   * Destroy the Datepicker instance
   * @return {Detepicker} - the instance destroyed
   */
  destroy() {
    this.hide();
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.unregisterListeners)(this);
    this.picker.detach();
    if (!this.inline) {
      this.inputField.classList.remove('datepicker-input');
    }
    delete this.element.datepicker;
    return this;
  }

  /**
   * Get the selected date(s)
   *
   * The method returns a Date object of selected date by default, and returns
   * an array of selected dates in multidate mode. If format string is passed,
   * it returns date string(s) formatted in given format.
   *
   * @param  {String} [format] - Format string to stringify the date(s)
   * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
   * selected, empty array in multidate mode and untitled in sigledate mode
   */
  getDate(format = undefined) {
    const callback = format
      ? date => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, this.config.locale)
      : date => new Date(date);

    if (this.config.multidate) {
      return this.dates.map(callback);
    }
    if (this.dates.length > 0) {
      return callback(this.dates[0]);
    }
  }

  /**
   * Set selected date(s)
   *
   * In multidate mode, you can pass multiple dates as a series of arguments
   * or an array. (Since each date is parsed individually, the type of the
   * dates doesn't have to be the same.)
   * The given dates are used to toggle the select status of each date. The
   * number of selected dates is kept from exceeding the length set to
   * maxNumberOfDates.
   *
   * With clear: true option, the method can be used to clear the selection
   * and to replace the selection instead of toggling in multidate mode.
   * If the option is passed with no date arguments or an empty dates array,
   * it works as "clear" (clear the selection then set nothing), and if the
   * option is passed with new dates to select, it works as "replace" (clear
   * the selection then set the given dates)
   *
   * When render: false option is used, the method omits re-rendering the
   * picker element. In this case, you need to call refresh() method later in
   * order for the picker element to reflect the changes. The input field is
   * refreshed always regardless of this option.
   *
   * When invalid (unparsable, repeated, disabled or out-of-range) dates are
   * passed, the method ignores them and applies only valid ones. In the case
   * that all the given dates are invalid, which is distinguished from passing
   * no dates, the method considers it as an error and leaves the selection
   * untouched. (The input field also remains untouched unless revert: true
   * option is used.)
   *
   * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
   * objects, time values or mix of those for new selection
   * @param {Object} [options] - function options
   * - clear: {boolean} - Whether to clear the existing selection
   *     defualt: false
   * - render: {boolean} - Whether to re-render the picker element
   *     default: true
   * - autohide: {boolean} - Whether to hide the picker element after re-render
   *     Ignored when used with render: false
   *     default: config.autohide
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  setDate(...args) {
    const dates = [...args];
    const opts = {};
    const lastArg = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(args);
    if (
      typeof lastArg === 'object'
      && !Array.isArray(lastArg)
      && !(lastArg instanceof Date)
      && lastArg
    ) {
      Object.assign(opts, dates.pop());
    }

    const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
    setDate(this, inputDates, opts);
  }

  /**
   * Update the selected date(s) with input field's value
   * Not available on inline picker
   *
   * The input field will be refreshed with properly formatted date string.
   *
   * In the case that all the entered dates are invalid (unparsable, repeated,
   * disabled or out-of-range), whixh is distinguished from empty input field,
   * the method leaves the input field untouched as well as the selection by
   * default. If revert: true option is used in this case, the input field is
   * refreshed with the existing selection.
   *
   * @param  {Object} [options] - function options
   * - autohide: {boolean} - whether to hide the picker element after refresh
   *     default: false
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  update(options = undefined) {
    if (this.inline) {
      return;
    }

    const opts = Object.assign(options || {}, {clear: true, render: true});
    const inputDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(this.inputField.value, this.config.dateDelimiter);
    setDate(this, inputDates, opts);
  }

  /**
   * Refresh the picker element and the associated input field
   * @param {String} [target] - target item when refreshing one item only
   * 'picker' or 'input'
   * @param {Boolean} [forceRender] - whether to re-render the picker element
   * regardless of its state instead of optimized refresh
   */
  refresh(target = undefined, forceRender = false) {
    if (target && typeof target !== 'string') {
      forceRender = target;
      target = undefined;
    }

    let mode;
    if (target === 'picker') {
      mode = 2;
    } else if (target === 'input') {
      mode = 1;
    } else {
      mode = 3;
    }
    refreshUI(this, mode, !forceRender);
  }

  /**
   * Enter edit mode
   * Not available on inline picker or when the picker element is hidden
   */
  enterEditMode() {
    if (this.inline || !this.picker.active || this.editMode) {
      return;
    }
    this.editMode = true;
    this.inputField.classList.add('in-edit');
  }

  /**
   * Exit from edit mode
   * Not available on inline picker
   * @param  {Object} [options] - function options
   * - update: {boolean} - whether to call update() after exiting
   *     If false, input field is revert to the existing selection
   *     default: false
   */
  exitEditMode(options = undefined) {
    if (this.inline || !this.editMode) {
      return;
    }
    const opts = Object.assign({update: false}, options);
    delete this.editMode;
    this.inputField.classList.remove('in-edit');
    if (opts.update) {
      this.update(opts);
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/functions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "triggerDatepickerEvent": () => (/* binding */ triggerDatepickerEvent),
/* harmony export */   "goToPrevOrNext": () => (/* binding */ goToPrevOrNext),
/* harmony export */   "switchView": () => (/* binding */ switchView),
/* harmony export */   "unfocus": () => (/* binding */ unfocus)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");



function triggerDatepickerEvent(datepicker, type) {
  const detail = {
    date: datepicker.getDate(),
    viewDate: new Date(datepicker.picker.viewDate),
    viewId: datepicker.picker.currentView.id,
    datepicker,
  };
  datepicker.element.dispatchEvent(new CustomEvent(type, {detail}));
}

// direction: -1 (to previous), 1 (to next)
function goToPrevOrNext(datepicker, direction) {
  const {minDate, maxDate} = datepicker.config;
  const {currentView, viewDate} = datepicker.picker;
  let newViewDate;
  switch (currentView.id) {
    case 0:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addMonths)(viewDate, direction);
      break;
    case 1:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction);
      break;
    default:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction * currentView.navStep);
  }
  newViewDate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(newViewDate, minDate, maxDate);
  datepicker.picker.changeFocus(newViewDate).render();
}

function switchView(datepicker) {
  const viewId = datepicker.picker.currentView.id;
  if (viewId === datepicker.config.maxView) {
    return;
  }
  datepicker.picker.changeView(viewId + 1).render();
}

function unfocus(datepicker) {
  if (datepicker.config.updateOnBlur) {
    datepicker.update({revert: true});
  } else {
    datepicker.refresh('input');
  }
  datepicker.hide();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onKeydown": () => (/* binding */ onKeydown),
/* harmony export */   "onFocus": () => (/* binding */ onFocus),
/* harmony export */   "onMousedown": () => (/* binding */ onMousedown),
/* harmony export */   "onClickInput": () => (/* binding */ onClickInput),
/* harmony export */   "onPaste": () => (/* binding */ onPaste)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");





// Find the closest date that doesn't meet the condition for unavailable date
// Returns undefined if no available date is found
// addFn: function to calculate the next date
//   - args: time value, amount
// increase: amount to pass to addFn
// testFn: function to test the unavailablity of the date
//   - args: time value; retun: true if unavailable
function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
  if (!(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, min, max)) {
    return;
  }
  if (testFn(date)) {
    const newDate = addFn(date, increase);
    return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
  }
  return date;
}

// direction: -1 (left/up), 1 (right/down)
// vertical: true for up/down, false for left/right
function moveByArrowKey(datepicker, ev, direction, vertical) {
  const picker = datepicker.picker;
  const currentView = picker.currentView;
  const step = currentView.step || 1;
  let viewDate = picker.viewDate;
  let addFn;
  let testFn;
  switch (currentView.id) {
    case 0:
      if (vertical) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction * 7);
      } else if (ev.ctrlKey || ev.metaKey) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction);
      } else {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction);
      }
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays;
      testFn = (date) => currentView.disabled.includes(date);
      break;
    case 1:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths)(viewDate, vertical ? direction * 4 : direction);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths;
      testFn = (date) => {
        const dt = new Date(date);
        const {year, disabled} = currentView;
        return dt.getFullYear() === year && disabled.includes(dt.getMonth());
      };
      break;
    default:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction * (vertical ? 4 : 1) * step);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears;
      testFn = date => currentView.disabled.includes((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.startOfYearPeriod)(date, step));
  }
  viewDate = findNextAvailableOne(
    viewDate,
    addFn,
    direction < 0 ? -step : step,
    testFn,
    currentView.minDate,
    currentView.maxDate
  );
  if (viewDate !== undefined) {
    picker.changeFocus(viewDate).render();
  }
}

function onKeydown(datepicker, ev) {
  const key = ev.key;
  if (key === 'Tab') {
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.unfocus)(datepicker);
    return;
  }

  const picker = datepicker.picker;
  const {id, isMinView} = picker.currentView;
  if (!picker.active) {
    if (key === 'ArrowDown') {
      picker.show();
    } else {
      if (key === 'Enter') {
        datepicker.update();
      } else if (key === 'Escape') {
        picker.show();
      }
      return;
    }
  } else if (datepicker.editMode) {
    if (key === 'Enter') {
      datepicker.exitEditMode({update: true, autohide: datepicker.config.autohide});
    } else if (key === 'Escape') {
      picker.hide();
    }
    return;
  } else {
    if (key === 'ArrowLeft') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, -1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, false);
      }
    } else if (key === 'ArrowRight') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, 1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, 1, false);
      }
    } else if (key === 'ArrowUp') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.switchView)(datepicker);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, true);
      }
    } else if (key === 'ArrowDown') {
      if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
        datepicker.enterEditMode();
        return;
      }
      moveByArrowKey(datepicker, ev, 1, true);
    } else if (key === 'Enter') {
      if (isMinView) {
        datepicker.setDate(picker.viewDate);
        return;
      }
      picker.changeView(id - 1).render();
    } else {
      if (key === 'Escape') {
        picker.hide();
      } else if (
        key === 'Backspace'
        || key === 'Delete'
        || (key.length === 1 && !ev.ctrlKey && !ev.metaKey)
      ) {
        datepicker.enterEditMode();
      }
      return;
    }
  }
  ev.preventDefault();
}

function onFocus(datepicker) {
  if (datepicker.config.showOnFocus && !datepicker._showing) {
    datepicker.show();
  }
}

// for the prevention for entering edit mode while getting focus on click
function onMousedown(datepicker, ev) {
  const el = ev.target;
  if (datepicker.picker.active || datepicker.config.showOnClick) {
    el._active = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.isActiveElement)(el);
    el._clicking = setTimeout(() => {
      delete el._active;
      delete el._clicking;
    }, 2000);
  }
}

function onClickInput(datepicker, ev) {
  const el = ev.target;
  if (!el._clicking) {
    return;
  }
  clearTimeout(el._clicking);
  delete el._clicking;

  if (el._active) {
    datepicker.enterEditMode();
  }
  delete el._active;

  if (datepicker.config.showOnClick) {
    datepicker.show();
  }
}

function onPaste(datepicker, ev) {
  if (ev.clipboardData.types.includes('text/plain')) {
    datepicker.enterEditMode();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/otherListeners.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickOutside": () => (/* binding */ onClickOutside)
/* harmony export */ });
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




// for the `document` to delegate the events from outside the picker/input field
function onClickOutside(datepicker, ev) {
  const {element, picker} = datepicker;
  // check both picker's and input's activeness to make updateOnBlur work in
  // the cases where...
  // - picker is hidden by ESC key press → input stays focused
  // - input is unfocused by closing mobile keyboard → piker is kept shown
  if (!picker.active && !(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_0__.isActiveElement)(element)) {
    return;
  }
  const pickerElem = picker.element;
  if ((0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, el => el === element || el === pickerElem)) {
    return;
  }
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.unfocus)(datepicker);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/pickerListeners.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickTodayBtn": () => (/* binding */ onClickTodayBtn),
/* harmony export */   "onClickClearBtn": () => (/* binding */ onClickClearBtn),
/* harmony export */   "onClickViewSwitch": () => (/* binding */ onClickViewSwitch),
/* harmony export */   "onClickPrevBtn": () => (/* binding */ onClickPrevBtn),
/* harmony export */   "onClickNextBtn": () => (/* binding */ onClickNextBtn),
/* harmony export */   "onClickView": () => (/* binding */ onClickView),
/* harmony export */   "onMousedownPicker": () => (/* binding */ onMousedownPicker)
/* harmony export */ });
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




function goToSelectedMonthOrYear(datepicker, selection) {
  const picker = datepicker.picker;
  const viewDate = new Date(picker.viewDate);
  const viewId = picker.currentView.id;
  const newDate = viewId === 1
    ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addMonths)(viewDate, selection - viewDate.getMonth())
    : (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addYears)(viewDate, selection - viewDate.getFullYear());

  picker.changeFocus(newDate).changeView(viewId - 1).render();
}

function onClickTodayBtn(datepicker) {
  const picker = datepicker.picker;
  const currentDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  if (datepicker.config.todayBtnMode === 1) {
    if (datepicker.config.autohide) {
      datepicker.setDate(currentDate);
      return;
    }
    datepicker.setDate(currentDate, {render: false});
    picker.update();
  }
  if (picker.viewDate !== currentDate) {
    picker.changeFocus(currentDate);
  }
  picker.changeView(0).render();
}

function onClickClearBtn(datepicker) {
  datepicker.setDate({clear: true});
}

function onClickViewSwitch(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.switchView)(datepicker);
}

function onClickPrevBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, -1);
}

function onClickNextBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, 1);
}

// For the picker's main block to delegete the events from `datepicker-cell`s
function onClickView(datepicker, ev) {
  const target = (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, '.datepicker-cell');
  if (!target || target.classList.contains('disabled')) {
    return;
  }

  const {id, isMinView} = datepicker.picker.currentView;
  if (isMinView) {
    datepicker.setDate(Number(target.dataset.date));
  } else if (id === 1) {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
  } else {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
  }
}

function onMousedownPicker(ev) {
  ev.preventDefault();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/i18n/base-locales.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locales": () => (/* binding */ locales)
/* harmony export */ });
// default locales
const locales = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date-format.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date-format.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reFormatTokens": () => (/* binding */ reFormatTokens),
/* harmony export */   "reNonDateParts": () => (/* binding */ reNonDateParts),
/* harmony export */   "parseDate": () => (/* binding */ parseDate),
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");



// pattern for format parts
const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
let knownFormats = {};
// parse funtions for date parts
const parseFns = {
  y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m(date, month, locale) {
    const newDate = new Date(date);
    let monthIndex = parseInt(month, 10) - 1;

    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }

      const monthName = month.toLowerCase();
      const compareNames = name => name.toLowerCase().startsWith(monthName);
      // compare with both short and full names because some locales have periods
      // in the short names (not equal to the first X letters of the full names)
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }

    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex)
      ? newDate.setDate(0)
      : newDate.getTime();
  },
  d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  },
};
// format functions for date parts
const formatFns = {
  d(date) {
    return date.getDate();
  },
  dd(date) {
    return padZero(date.getDate(), 2);
  },
  D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m(date) {
    return date.getMonth() + 1;
  },
  mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y(date) {
    return date.getFullYear();
  },
  yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy(date) {
    return padZero(date.getFullYear(), 4);
  },
};

// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}

function padZero(num, length) {
  return num.toString().padStart(length, '0');
}

function parseFormatString(format) {
  if (typeof format !== 'string') {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }

  // sprit the format string into parts and seprators
  const separators = format.split(reFormatTokens);
  const parts = format.match(new RegExp(reFormatTokens, 'g'));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }

  // collect format functions used in the format
  const partFormatters = parts.map(token => formatFns[token]);

  // collect parse function keys used in the format
  // iterate over parseFns' keys in order to keep the order of the keys.
  const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
    const token = parts.find(part => part[0] !== 'D' && part[0].toLowerCase() === key);
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);

  return knownFormats[format] = {
    parser(dateStr, locale) {
      const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
        if (part.length > 0 && parts[index]) {
          const token = parts[index][0];
          if (token === 'M') {
            dtParts.m = part;
          } else if (token !== 'D') {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});

      // iterate over partParserkeys so that the parsing is made in the oder
      // of year, month and day to prevent the day parser from correcting last
      // day of month wrongly
      return partParserKeys.reduce((origDate, key) => {
        const newDate = parseFns[key](origDate, dateParts[key], locale);
        // ingnore the part failed to parse
        return isNaN(newDate) ? origDate : newDate;
      }, (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)());
    },
    formatter(date, locale) {
      let dateStr = partFormatters.reduce((str, fn, index) => {
        return str += `${separators[index]}${fn(date, locale)}`;
      }, '');
      // separators' length is always parts' length + 1,
      return dateStr += (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.lastItemOf)(separators);
    },
  };
}

function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === 'number') {
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(dateStr);
    return isNaN(date) ? undefined : date;
  }
  if (!dateStr) {
    return undefined;
  }
  if (dateStr === 'today') {
    return (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  }

  if (format && format.toValue) {
    const date = format.toValue(dateStr, format, locale);
    return isNaN(date) ? undefined : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(date);
  }

  return parseFormatString(format).parser(dateStr, locale);
}

function formatDate(date, format, locale) {
  if (isNaN(date) || (!date && date !== 0)) {
    return '';
  }

  const dateObj = typeof date === 'number' ? new Date(date) : date;

  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }

  return parseFormatString(format).formatter(dateObj, locale);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date.js":
/*!**********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripTime": () => (/* binding */ stripTime),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "dateValue": () => (/* binding */ dateValue),
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "addMonths": () => (/* binding */ addMonths),
/* harmony export */   "addYears": () => (/* binding */ addYears),
/* harmony export */   "dayOfTheWeekOf": () => (/* binding */ dayOfTheWeekOf),
/* harmony export */   "getWeek": () => (/* binding */ getWeek),
/* harmony export */   "startOfYearPeriod": () => (/* binding */ startOfYearPeriod),
/* harmony export */   "regularizeDate": () => (/* binding */ regularizeDate)
/* harmony export */ });
function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}

function today() {
  return new Date().setHours(0, 0, 0, 0);
}

// Get the time value of the start of given date or year, month and day
function dateValue(...args) {
  switch (args.length) {
    case 0:
      return today();
    case 1:
      return stripTime(args[0]);
  }

  // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
  const newDate = new Date(0);
  newDate.setFullYear(...args);
  return newDate.setHours(0, 0, 0, 0);
}

function addDays(date, amount) {
  const newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount);
}

function addWeeks(date, amount) {
  return addDays(date, amount * 7);
}

function addMonths(date, amount) {
  // If the day of the date is not in the new month, the last day of the new
  // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
  const newDate = new Date(date);
  const monthsToSet = newDate.getMonth() + amount;
  let expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }

  const time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}

function addYears(date, amount) {
  // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
  // new year will be returned.
  const newDate = new Date(date);
  const expectedMonth = newDate.getMonth();
  const time = newDate.setFullYear(newDate.getFullYear() + amount);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}

// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}

// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
  const baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}

// Get the ISO week of a date
function getWeek(date) {
  // start of ISO week is Monday
  const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  // 1st week == the week where the 4th of January is in
  const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}

// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
  /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
  const year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}

// Convert date to the first/last date of the month/year of the date
function regularizeDate(date, timeSpan, useLastDate) {
  if (timeSpan !== 1 && timeSpan !== 2) {
    return date;
  }
  const newDate = new Date(date);
  if (timeSpan === 1) {
    useLastDate
      ? newDate.setMonth(newDate.getMonth() + 1, 0)
      : newDate.setDate(1);
  } else {
    useLastDate
      ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0)
      : newDate.setMonth(0, 1);
  }
  return newDate.setHours(0, 0, 0, 0);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/dom.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHTML": () => (/* binding */ parseHTML),
/* harmony export */   "getParent": () => (/* binding */ getParent),
/* harmony export */   "isActiveElement": () => (/* binding */ isActiveElement),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "showElement": () => (/* binding */ showElement),
/* harmony export */   "emptyChildNodes": () => (/* binding */ emptyChildNodes),
/* harmony export */   "replaceChildNodes": () => (/* binding */ replaceChildNodes)
/* harmony export */ });
const range = document.createRange();

function parseHTML(html) {
  return range.createContextualFragment(html);
}

function getParent(el) {
  return el.parentElement
    || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : undefined);
}

function isActiveElement(el) {
  return el.getRootNode().activeElement === el;
}

// equivalent to jQuery's :visble
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function hideElement(el) {
  if (el.style.display === 'none') {
    return;
  }
  // back up the existing display setting in data-style-display
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = 'none';
}

function showElement(el) {
  if (el.style.display !== 'none') {
    return;
  }
  if (el.dataset.styleDisplay) {
    // restore backed-up dispay property
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = '';
  }
}

function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}

function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === 'string') {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === 'function') {
    newChildNodes.forEach((node) => {
      el.appendChild(node);
    });
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/event.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/event.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerListeners": () => (/* binding */ registerListeners),
/* harmony export */   "unregisterListeners": () => (/* binding */ unregisterListeners),
/* harmony export */   "findElementInEventPath": () => (/* binding */ findElementInEventPath)
/* harmony export */ });
const listenerRegistry = new WeakMap();
const {addEventListener, removeEventListener} = EventTarget.prototype;

// Register event listeners to a key object
// listeners: array of listener definitions;
//   - each definition must be a flat array of event target and the arguments
//     used to call addEventListener() on the target
function registerListeners(keyObj, listeners) {
  let registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach((listener) => {
    addEventListener.call(...listener);
    registered.push(listener);
  });
}

function unregisterListeners(keyObj) {
  let listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach((listener) => {
    removeEventListener.call(...listener);
  });
  listenerRegistry.delete(keyObj);
}

// Event.composedPath() polyfill for Edge
// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
if (!Event.prototype.composedPath) {
  const getComposedPath = (node, path = []) => {
    path.push(node);

    let parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) { // ShadowRoot
      parent = node.host;
    } else if (node.defaultView) {  // Document
      parent = node.defaultView;
    }
    return parent ? getComposedPath(parent, path) : path;
  };

  Event.prototype.composedPath = function () {
    return getComposedPath(this.target);
  };
}

function findFromPath(path, criteria, currentTarget) {
  const [node, ...rest] = path;
  if (criteria(node)) {
    return node;
  }
  if (node === currentTarget || node.tagName === 'HTML' || rest.length === 0) {
    // stop when reaching currentTarget or <html>
    return;
  }
  return findFromPath(rest, criteria, currentTarget);
}

// Search for the actual target of a delegated event
function findElementInEventPath(ev, selector) {
  const criteria = typeof selector === 'function'
    ? selector
    : el => el instanceof Element && el.matches(selector);
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasProperty": () => (/* binding */ hasProperty),
/* harmony export */   "lastItemOf": () => (/* binding */ lastItemOf),
/* harmony export */   "pushUnique": () => (/* binding */ pushUnique),
/* harmony export */   "stringToArray": () => (/* binding */ stringToArray),
/* harmony export */   "isInRange": () => (/* binding */ isInRange),
/* harmony export */   "limitToRange": () => (/* binding */ limitToRange),
/* harmony export */   "createTagRepeat": () => (/* binding */ createTagRepeat),
/* harmony export */   "optimizeTemplateHTML": () => (/* binding */ optimizeTemplateHTML)
/* harmony export */ });
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function lastItemOf(arr) {
  return arr[arr.length - 1];
}

// push only the items not included in the array
function pushUnique(arr, ...items) {
  items.forEach((item) => {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}

function stringToArray(str, separator) {
  // convert empty string to an empty array
  return str ? str.split(separator) : [];
}

function isInRange(testVal, min, max) {
  const minOK = min === undefined || testVal >= min;
  const maxOK = max === undefined || testVal <= max;
  return minOK && maxOK;
}

function limitToRange(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = '') {
  const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
    let val = attributes[attr];
    if (typeof val === 'function') {
      val = val(index);
    }
    return `${src} ${attr}="${val}"`;
  }, tagName);
  html += `<${openTagSrc}></${tagName}>`;

  const next = index + 1;
  return next < repeat
    ? createTagRepeat(tagName, repeat, attributes, next, html)
    : html;
}

// Remove the spacing surrounding tags for HTML parser not to create text nodes
// before/after elements
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/main.js":
/*!******************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/main.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datepicker": () => (/* reexport safe */ _Datepicker_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DateRangePicker": () => (/* reexport safe */ _DateRangePicker_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Datepicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datepicker.js */ "./node_modules/vanillajs-datepicker/js/Datepicker.js");
/* harmony import */ var _DateRangePicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.js */ "./node_modules/vanillajs-datepicker/js/DateRangePicker.js");






/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/defaultOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// config options updatable by setOptions() and their default values
const defaultOptions = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  calendarWeeks: false,
  clearBtn: false,
  dateDelimiter: ',',
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: undefined, // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  format: 'mm/dd/yyyy',
  language: 'en',
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: '»',
  orientation: 'auto',
  pickLevel: 0,
  prevArrow: '«',
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: '',
  todayBtn: false,
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultOptions);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/processOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/processOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ processOptions)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");






const {
  language: defaultLang,
  format: defaultFormat,
  weekStart: defaultWeekStart,
} = _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"];

// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7
    ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dow, day)
    : dow;
}

function calcEndOfWeek(startOfWeek) {
  return (startOfWeek + 6) % 7;
}

// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
  const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(value, format, locale);
  return date !== undefined ? date : origValue;
}

// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue, max = 3) {
  const viewId = parseInt(value, 10);
  return viewId >= 0 && viewId <= max ? viewId : origValue;
}

// Create Datepicker configuration to set
function processOptions(options, datepicker) {
  const inOpts = Object.assign({}, options);
  const config = {};
  const locales = datepicker.constructor.locales;
  const rangeSideIndex = datepicker.rangeSideIndex;
  let {
    format,
    language,
    locale,
    maxDate,
    maxView,
    minDate,
    pickLevel,
    startView,
    weekStart,
  } = datepicker.config || {};

  if (inOpts.language) {
    let lang;
    if (inOpts.language !== language) {
      if (locales[inOpts.language]) {
        lang = inOpts.language;
      } else {
        // Check if langauge + region tag can fallback to the one without
        // region (e.g. fr-CA → fr)
        lang = inOpts.language.split('-')[0];
        if (locales[lang] === undefined) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config.language = lang;

      // update locale as well when updating language
      const origLocale = locale || locales[defaultLang];
      // use default language's properties for the fallback
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales[language]);
      }
      config.locale = locale;
      // if format and/or weekStart are the same as old locale's defaults,
      // update them to new locale's defaults
      if (format === origLocale.format) {
        format = config.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = config.weekStart = locale.weekStart;
        config.weekEnd = calcEndOfWeek(locale.weekStart);
      }
    }
  }

  if (inOpts.format) {
    const hasToDisplay = typeof inOpts.format.toDisplay === 'function';
    const hasToValue = typeof inOpts.format.toValue === 'function';
    const validFormatString = _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.reFormatTokens.test(inOpts.format);
    if ((hasToDisplay && hasToValue) || validFormatString) {
      format = config.format = inOpts.format;
    }
    delete inOpts.format;
  }

  //*** pick level ***//
  let newPickLevel = pickLevel;
  if (inOpts.pickLevel !== undefined) {
    newPickLevel = validateViewId(inOpts.pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    if (newPickLevel > pickLevel) {
      // complement current minDate/madDate so that the existing range will be
      // expanded to fit the new level later
      if (inOpts.minDate === undefined) {
        inOpts.minDate = minDate;
      }
      if (inOpts.maxDate === undefined) {
        inOpts.maxDate = maxDate;
      }
    }
    // complement datesDisabled so that it will be reset later
    if (!inOpts.datesDisabled) {
      inOpts.datesDisabled = [];
    }
    pickLevel = config.pickLevel = newPickLevel;
  }

  //*** dates ***//
  // while min and maxDate for "no limit" in the options are better to be null
  // (especially when updating), the ones in the config have to be undefined
  // because null is treated as 0 (= unix epoch) when comparing with time value
  let minDt = minDate;
  let maxDt = maxDate;
  if (inOpts.minDate !== undefined) {
    const defaultMinDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(0, 0, 1);
    minDt = inOpts.minDate === null
      ? defaultMinDt  // set 0000-01-01 to prevent negative values for year
      : validateDate(inOpts.minDate, format, locale, minDt);
    if (minDt !== defaultMinDt) {
      minDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(minDt, pickLevel, false);
    }
    delete inOpts.minDate;
  }
  if (inOpts.maxDate !== undefined) {
    maxDt = inOpts.maxDate === null
      ? undefined
      : validateDate(inOpts.maxDate, format, locale, maxDt);
    if (maxDt !== undefined) {
      maxDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(maxDt, pickLevel, true);
    }
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config.minDate = maxDt;
    maxDate = config.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config.maxDate = maxDt;
    }
  }

  if (inOpts.datesDisabled) {
    config.datesDisabled = inOpts.datesDisabled.reduce((dates, dt) => {
      const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, format, locale);
      return date !== undefined
        ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dates, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, pickLevel, rangeSideIndex))
        : dates;
    }, []);
    delete inOpts.datesDisabled;
  }
  if (inOpts.defaultViewDate !== undefined) {
    const viewDate = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(inOpts.defaultViewDate, format, locale);
    if (viewDate !== undefined) {
      config.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }

  //*** days of week ***//
  if (inOpts.weekStart !== undefined) {
    const wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = config.weekStart = wkStart;
      config.weekEnd = calcEndOfWeek(wkStart);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }

  //*** multi date ***//
  if (inOpts.maxNumberOfDates !== undefined) {
    const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config.maxNumberOfDates = maxNumberOfDates;
      config.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }

  //*** view ***//
  let newMaxView = maxView;
  if (inOpts.maxView !== undefined) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  // ensure max view >= pick level
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config.maxView = newMaxView;
  }

  let newStartView = startView;
  if (inOpts.startView !== undefined) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  // ensure pick level <= start view <= max view
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config.startView = newStartView;
  }

  //*** template ***//
  if (inOpts.prevArrow) {
    const prevArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    const nextArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }

  //*** misc ***//
  if (inOpts.disableTouchKeyboard !== undefined) {
    config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config.orientation = {
      x: orientation.find(x => (x === 'left' || x === 'right')) || 'auto',
      y: orientation.find(y => (y === 'top' || y === 'bottom')) || 'auto',
    };
    delete inOpts.orientation;
  }
  if (inOpts.todayBtnMode !== undefined) {
    switch(inOpts.todayBtnMode) {
      case 0:
      case 1:
        config.todayBtnMode = inOpts.todayBtnMode;
    }
    delete inOpts.todayBtnMode;
  }

  //*** copy the rest ***//
  Object.keys(inOpts).forEach((key) => {
    if (inOpts[key] !== undefined && (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(_defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"], key)) {
      config[key] = inOpts[key];
    }
  });

  return config;
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/Picker.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/Picker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pickerTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js");
/* harmony import */ var _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/DaysView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js");
/* harmony import */ var _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/MonthsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js");
/* harmony import */ var _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/YearsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../events/pickerListeners.js */ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js");











const orientClasses = ['left', 'top', 'right', 'bottom'].reduce((obj, key) => {
  obj[key] = `datepicker-orient-${key}`;
  return obj;
}, {});
const toPx = num => num ? `${num}px` : num;

function processPickerOptions(picker, options) {
  if (options.title !== undefined) {
    if (options.title) {
      picker.controls.title.textContent = options.title;
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.title);
    } else {
      picker.controls.title.textContent = '';
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.title);
    }
  }
  if (options.prevArrow) {
    const prevBtn = picker.controls.prevBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(prevBtn);
    options.prevArrow.forEach((node) => {
      prevBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.nextArrow) {
    const nextBtn = picker.controls.nextBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(nextBtn);
    options.nextArrow.forEach((node) => {
      nextBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.locale) {
    picker.controls.todayBtn.textContent = options.locale.today;
    picker.controls.clearBtn.textContent = options.locale.clear;
  }
  if (options.todayBtn !== undefined) {
    if (options.todayBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.todayBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.todayBtn);
    }
  }
  if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate') || (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
    const {minDate, maxDate} = picker.datepicker.config;
    picker.controls.todayBtn.disabled = !(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(), minDate, maxDate);
  }
  if (options.clearBtn !== undefined) {
    if (options.clearBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.clearBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.clearBtn);
    }
  }
}

// Compute view date to reset, which will be...
// - the last item of the selected dates or defaultViewDate if no selection
// - limitted to minDate or maxDate if it exceeds the range
function computeResetViewDate(datepicker) {
  const {dates, config} = datepicker;
  const viewDate = dates.length > 0 ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(dates) : config.defaultViewDate;
  return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(viewDate, config.minDate, config.maxDate);
}

// Change current view's view date
function setViewDate(picker, newDate) {
  const oldViewDate = new Date(picker.viewDate);
  const newViewDate = new Date(newDate);
  const {id, year, first, last} = picker.currentView;
  const viewYear = newViewDate.getFullYear();

  picker.viewDate = newDate;
  if (viewYear !== oldViewDate.getFullYear()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeYear');
  }
  if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeMonth');
  }

  // return whether the new date is in different period on time from the one
  // displayed in the current view
  // when true, the view needs to be re-rendered on the next UI refresh.
  switch (id) {
    case 0:
      return newDate < first || newDate > last;
    case 1:
      return viewYear !== year;
    default:
      return viewYear < first || viewYear > last;
  }
}

function getTextDirection(el) {
  return window.getComputedStyle(el).direction;
}

// find the closet scrollable ancestor elemnt under the body
function findScrollParents(el) {
  const parent = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(el);
  if (parent === document.body || !parent) {
    return;
  }

  // checking overflow only is enough because computed overflow cannot be
  // visible or a combination of visible and other when either axis is set
  // to other than visible.
  // (Setting one axis to other than 'visible' while the other is 'visible'
  // results in the other axis turning to 'auto')
  return window.getComputedStyle(parent).overflow !== 'visible'
    ? parent
    : findScrollParents(parent);
}

// Class representing the picker UI
class Picker {
  constructor(datepicker) {
    const {config} = this.datepicker = datepicker;

    const template = _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"].replace(/%buttonClass%/g, config.buttonClass);
    const element = this.element = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)(template).firstChild;
    const [header, main, footer] = element.firstChild.children;
    const title = header.firstElementChild;
    const [prevBtn, viewSwitch, nextBtn] = header.lastElementChild.children;
    const [todayBtn, clearBtn] = footer.firstChild.children;
    const controls = {
      title,
      prevBtn,
      viewSwitch,
      nextBtn,
      todayBtn,
      clearBtn,
    };
    this.main = main;
    this.controls = controls;

    const elementClass = datepicker.inline ? 'inline' : 'dropdown';
    element.classList.add(`datepicker-${elementClass}`);

    processPickerOptions(this, config);
    this.viewDate = computeResetViewDate(datepicker);

    // set up event listeners
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_3__.registerListeners)(datepicker, [
      [element, 'mousedown', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onMousedownPicker],
      [main, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickView.bind(null, datepicker)],
      [controls.viewSwitch, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickViewSwitch.bind(null, datepicker)],
      [controls.prevBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickPrevBtn.bind(null, datepicker)],
      [controls.nextBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickNextBtn.bind(null, datepicker)],
      [controls.todayBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickTodayBtn.bind(null, datepicker)],
      [controls.clearBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickClearBtn.bind(null, datepicker)],
    ]);

    // set up views
    this.views = [
      new _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__["default"](this),
      new _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__["default"](this),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 2, name: 'years', cellClass: 'year', step: 1}),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 3, name: 'decades', cellClass: 'decade', step: 10}),
    ];
    this.currentView = this.views[config.startView];

    this.currentView.render();
    this.main.appendChild(this.currentView.element);
    if (config.container) {
      config.container.appendChild(this.element);
    } else {
      datepicker.inputField.after(this.element);
    }
  }

  setOptions(options) {
    processPickerOptions(this, options);
    this.views.forEach((view) => {
      view.init(options, false);
    });
    this.currentView.render();
  }

  detach() {
    this.element.remove();
  }

  show() {
    if (this.active) {
      return;
    }

    const {datepicker, element} = this;
    if (datepicker.inline) {
      element.classList.add('active');
    } else {
      // ensure picker's direction matches input's
      const inputDirection = getTextDirection(datepicker.inputField);
      if (inputDirection !== getTextDirection((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(element))) {
        element.dir = inputDirection;
      } else if (element.dir) {
        element.removeAttribute('dir');
      }

      element.style.visiblity = 'hidden';
      element.classList.add('active');
      this.place();
      element.style.visiblity = '';

      if (datepicker.config.disableTouchKeyboard) {
        datepicker.inputField.blur();
      }
    }
    this.active = true;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(datepicker, 'show');
  }

  hide() {
    if (!this.active) {
      return;
    }
    this.datepicker.exitEditMode();
    this.element.classList.remove('active');
    this.active = false;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'hide');
  }

  place() {
    const {classList, offsetParent, style} = this.element;
    const {config, inputField} = this.datepicker;
    const {
      width: calendarWidth,
      height: calendarHeight,
    } = this.element.getBoundingClientRect();
    const {
      left: inputLeft,
      top: inputTop,
      right: inputRight,
      bottom: inputBottom,
      width: inputWidth,
      height: inputHeight
    } = inputField.getBoundingClientRect();
    let {x: orientX, y: orientY} = config.orientation;
    let left = inputLeft;
    let top = inputTop;

    // caliculate offsetLeft/Top of inputField
    if (offsetParent === document.body || !offsetParent) {
      left += window.scrollX;
      top += window.scrollY;
    } else {
      const offsetParentRect = offsetParent.getBoundingClientRect();
      left -= offsetParentRect.left - offsetParent.scrollLeft;
      top -= offsetParentRect.top - offsetParent.scrollTop;
    }

    // caliculate the boundaries of the visible area that contains inputField
    const scrollParent = findScrollParents(inputField);
    let scrollAreaLeft = 0;
    let scrollAreaTop = 0;
    let {
      clientWidth: scrollAreaRight,
      clientHeight: scrollAreaBottom,
    } = document.documentElement;

    if (scrollParent) {
      const scrollParentRect = scrollParent.getBoundingClientRect();
      if (scrollParentRect.top > 0) {
        scrollAreaTop = scrollParentRect.top;
      }
      if (scrollParentRect.left > 0) {
        scrollAreaLeft = scrollParentRect.left;
      }
      if (scrollParentRect.right < scrollAreaRight) {
        scrollAreaRight = scrollParentRect.right;
      }
      if (scrollParentRect.bottom < scrollAreaBottom) {
        scrollAreaBottom = scrollParentRect.bottom;
      }
    }

    // determine the horizontal orientation and left position
    let adjustment = 0;
    if (orientX === 'auto') {
      if (inputLeft < scrollAreaLeft) {
        orientX = 'left';
        adjustment = scrollAreaLeft - inputLeft;
      } else if (inputLeft + calendarWidth > scrollAreaRight) {
        orientX = 'right';
        if (scrollAreaRight < inputRight) {
          adjustment = scrollAreaRight - inputRight;
        }
      } else if (getTextDirection(inputField) === 'rtl') {
        orientX = inputRight - calendarWidth < scrollAreaLeft ? 'left' : 'right';
      } else {
        orientX = 'left';
      }
    }
    if (orientX === 'right') {
      left += inputWidth - calendarWidth;
    }
    left += adjustment;

    // determine the vertical orientation and top position
    if (orientY === 'auto') {
      if (inputTop - calendarHeight > scrollAreaTop) {
        orientY = inputBottom + calendarHeight > scrollAreaBottom ? 'top' : 'bottom';
      } else {
        orientY = 'bottom';
      }
    }
    if (orientY === 'top') {
      top -= calendarHeight;
    } else {
      top += inputHeight;
    }

    classList.remove(...Object.values(orientClasses));
    classList.add(orientClasses[orientX], orientClasses[orientY]);

    style.left = toPx(left);
    style.top = toPx(top);
  }

  setViewSwitchLabel(labelText) {
    this.controls.viewSwitch.textContent = labelText;
  }

  setPrevBtnDisabled(disabled) {
    this.controls.prevBtn.disabled = disabled;
  }

  setNextBtnDisabled(disabled) {
    this.controls.nextBtn.disabled = disabled;
  }

  changeView(viewId) {
    const oldView = this.currentView;
    const newView =  this.views[viewId];
    if (newView.id !== oldView.id) {
      this.currentView = newView;
      this._renderMethod = 'render';
      (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'changeView');
      this.main.replaceChild(newView.element, oldView.element);
    }
    return this;
  }

  // Change the focused date (view date)
  changeFocus(newViewDate) {
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
    this.views.forEach((view) => {
      view.updateFocus();
    });
    return this;
  }

  // Apply the change of the selected dates
  update() {
    const newViewDate = computeResetViewDate(this.datepicker);
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
    this.views.forEach((view) => {
      view.updateFocus();
      view.updateSelection();
    });
    return this;
  }

  // Refresh the picker UI
  render(quickRender = true) {
    const renderMethod = (quickRender && this._renderMethod) || 'render';
    delete this._renderMethod;

    this.currentView[renderMethod]();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const calendarWeeksTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 6, {class: 'week'})}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendarWeeksTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const daysTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="days">
  <div class="days-of-week">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 7, {class: 'dow'})}</div>
  <div class="datepicker-grid">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 42)}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (daysTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const pickerTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% prev-btn"></button>
        <button type="button" class="%buttonClass% view-switch"></button>
        <button type="button" class="%buttonClass% next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% today-btn"></button>
        <button type="button" class="%buttonClass% clear-btn"></button>
      </div>
    </div>
  </div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pickerTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaysView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/daysTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js");
/* harmony import */ var _templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/calendarWeeksTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");








class DaysView extends _View_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(picker) {
    super(picker, {
      id: 0,
      name: 'days',
      cellClass: 'day',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      const inner = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"]).firstChild;
      this.dow = inner.firstChild;
      this.grid = inner.lastChild;
      this.element.appendChild(inner);
    }
    super.init(options);
  }

  setOptions(options) {
    let updateDOW;

    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      this.minDate = options.minDate;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      this.maxDate = options.maxDate;
    }
    if (options.datesDisabled) {
      this.datesDisabled = options.datesDisabled;
    }
    if (options.daysOfWeekDisabled) {
      this.daysOfWeekDisabled = options.daysOfWeekDisabled;
      updateDOW = true;
    }
    if (options.daysOfWeekHighlighted) {
      this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
    }
    if (options.todayHighlight !== undefined) {
      this.todayHighlight = options.todayHighlight;
    }
    if (options.weekStart !== undefined) {
      this.weekStart = options.weekStart;
      this.weekEnd = options.weekEnd;
      updateDOW = true;
    }
    if (options.locale) {
      const locale = this.locale = options.locale;
      this.dayNames = locale.daysMin;
      this.switchLabelFormat = locale.titleFormat;
      updateDOW = true;
    }
    if (options.beforeShowDay !== undefined) {
      this.beforeShow = typeof options.beforeShowDay === 'function'
        ? options.beforeShowDay
        : undefined;
    }

    if (options.calendarWeeks !== undefined) {
      if (options.calendarWeeks && !this.calendarWeeks) {
        const weeksElem = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"]).firstChild;
        this.calendarWeeks = {
          element: weeksElem,
          dow: weeksElem.firstChild,
          weeks: weeksElem.lastChild,
        };
        this.element.insertBefore(weeksElem, this.element.firstChild);
      } else if (this.calendarWeeks && !options.calendarWeeks) {
        this.element.removeChild(this.calendarWeeks.element);
        this.calendarWeeks = null;
      }
    }
    if (options.showDaysOfWeek !== undefined) {
      if (options.showDaysOfWeek) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.calendarWeeks.dow);
        }
      } else {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.calendarWeeks.dow);
        }
      }
    }

    // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
    if (updateDOW) {
      Array.from(this.dow.children).forEach((el, index) => {
        const dow = (this.weekStart + index) % 7;
        el.textContent = this.dayNames[dow];
        el.className = this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
      });
    }
  }

  // Apply update on the focused date to view's settings
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const viewYear = viewDate.getFullYear();
    const viewMonth = viewDate.getMonth();
    const firstOfMonth = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth, 1);
    const start = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(firstOfMonth, this.weekStart, this.weekStart);

    this.first = firstOfMonth;
    this.last = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth + 1, 0);
    this.start = start;
    this.focused = this.picker.viewDate;
  }

  // Apply update on the selected dates to view's settings
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates;
    if (rangepicker) {
      this.range = rangepicker.dates;
    }
  }

   // Update the entire view UI
  render() {
    // update today marker on ever render
    this.today = this.todayHighlight ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)() : undefined;
    // refresh disabled dates on every render in order to clear the ones added
    // by beforeShow hook at previous render
    this.disabled = [...this.datesDisabled];

    const switchLabel = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.focused, this.switchLabelFormat, this.locale);
    this.picker.setViewSwitchLabel(switchLabel);
    this.picker.setPrevBtnDisabled(this.first <= this.minDate);
    this.picker.setNextBtnDisabled(this.last >= this.maxDate);

    if (this.calendarWeeks) {
      // start of the UTC week (Monday) of the 1st of the month
      const startOfWeek = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(this.first, 1, 1);
      Array.from(this.calendarWeeks.weeks.children).forEach((el, index) => {
        el.textContent = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.getWeek)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(startOfWeek, index));
      });
    }
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addDays)(this.start, index);
      const date = new Date(current);
      const day = date.getDay();

      el.className = `datepicker-cell ${this.cellClass}`;
      el.dataset.date = current;
      el.textContent = date.getDate();

      if (current < this.first) {
        classList.add('prev');
      } else if (current > this.last) {
        classList.add('next');
      }
      if (this.today === current) {
        classList.add('today');
      }
      if (current < this.minDate || current > this.maxDate || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.daysOfWeekDisabled.includes(day)) {
        classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (this.daysOfWeekHighlighted.includes(day)) {
        classList.add('highlighted');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, current);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.dataset.date);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / 86400000);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function computeMonthRange(range, thisYear) {
  if (!range || !range[0] || !range[1]) {
    return;
  }

  const [[startY, startM], [endY, endM]] = range;
  if (startY > thisYear || endY < thisYear) {
    return;
  }
  return [
    startY === thisYear ? startM : -1,
    endY === thisYear ? endM : 12,
  ];
}

class MonthsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker) {
    super(picker, {
      id: 1,
      name: 'months',
      cellClass: 'month',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.grid = this.element;
      this.element.classList.add('months', 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12, {'data-month': ix => ix})));
    }
    super.init(options);
  }

  setOptions(options) {
    if (options.locale) {
      this.monthNames = options.locale.monthsShort;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minMonth = this.minDate = undefined;
      } else {
        const minDateObj = new Date(options.minDate);
        this.minYear = minDateObj.getFullYear();
        this.minMonth = minDateObj.getMonth();
        this.minDate = minDateObj.setDate(1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxMonth = this.maxDate = undefined;
      } else {
        const maxDateObj = new Date(options.maxDate);
        this.maxYear = maxDateObj.getFullYear();
        this.maxMonth = maxDateObj.getMonth();
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, this.maxMonth + 1, 0);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options.beforeShowMonth !== undefined) {
      this.beforeShow = typeof options.beforeShowMonth === 'function'
        ? options.beforeShowMonth
        : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    this.year = viewDate.getFullYear();
    this.focused = viewDate.getMonth();
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((selected, timeValue) => {
      const date = new Date(timeValue);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (selected[year] === undefined) {
        selected[year] = [month];
      } else {
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(selected[year], month);
      }
      return selected;
    }, {});
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        const date = new Date(timeValue);
        return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled months on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.reduce((arr, disabled) => {
      const dt = new Date(disabled);
      if (this.year === dt.getFullYear()) {
        arr.push(dt.getMonth());
      }
      return arr;
    }, []);

    this.picker.setViewSwitchLabel(this.year);
    this.picker.setPrevBtnDisabled(this.year <= this.minYear);
    this.picker.setNextBtnDisabled(this.year >= this.maxYear);

    const selected = this.selected[this.year] || [];
    const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
    const isMinYear = this.year === this.minYear;
    const isMaxYear = this.year === this.maxYear;
    const range = computeMonthRange(this.range, this.year);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.year, index, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      // reset text on every render to clear the custom content set
      // by beforeShow hook at previous render
      el.textContent = this.monthNames[index];

      if (
        yrOutOfRange
        || isMinYear && index < this.minMonth
        || isMaxYear && index > this.maxMonth
        || this.disabled.includes(index)
      ) {
        classList.add('disabled');
      }
      if (range) {
        const [rangeStart, rangeEnd] = range;
        if (index > rangeStart && index < rangeEnd) {
          classList.add('range');
        }
        if (index === rangeStart) {
          classList.add('range-start');
        }
        if (index === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, index, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const selected = this.selected[this.year] || [];
    const [rangeStart, rangeEnd] = computeMonthRange(this.range, this.year) || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      if (index > rangeStart && index < rangeEnd) {
        classList.add('range');
      }
      if (index === rangeStart) {
        classList.add('range-start');
      }
      if (index === rangeEnd) {
        classList.add('range-end');
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[this.focused].classList.add('focused');
  }
}

/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/View.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/View.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");



// Base class of the view classes
class View {
  constructor(picker, config) {
    Object.assign(this, config, {
      picker,
      element: (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.parseHTML)(`<div class="datepicker-view"></div>`).firstChild,
      selected: [],
    });
    this.init(this.picker.datepicker.config);
  }

  init(options) {
    if (options.pickLevel !== undefined) {
      this.isMinView = this.id === options.pickLevel;
    }
    this.setOptions(options);
    this.updateFocus();
    this.updateSelection();
  }

  // Execute beforeShow() callback and apply the result to the element
  // args:
  // - current - current value on the iteration on view rendering
  // - timeValue - time value of the date to pass to beforeShow()
  performBeforeHook(el, current, timeValue) {
    let result = this.beforeShow(new Date(timeValue));
    switch (typeof result) {
      case 'boolean':
        result = {enabled: result};
        break;
      case 'string':
        result = {classes: result};
    }

    if (result) {
      if (result.enabled === false) {
        el.classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (result.classes) {
        const extraClasses = result.classes.split(/\s+/);
        el.classList.add(...extraClasses);
        if (extraClasses.includes('disabled')) {
          (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
        }
      }
      if (result.content) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.replaceChildNodes)(el, result.content);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function toTitleCase(word) {
  return [...word].reduce((str, ch, ix) => str += ix ? ch : ch.toUpperCase(), '');
}

// Class representing the years and decades view elements
class YearsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker, config) {
    super(picker, config);
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.navStep = this.step * 10;
      this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
      this.grid = this.element;
      this.element.classList.add(this.name, 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12)));
    }
    super.init(options);
  }

  setOptions(options) {
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minDate = undefined;
      } else {
        this.minYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.minDate, this.step);
        this.minDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.minYear, 0, 1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxDate = undefined;
      } else {
        this.maxYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.maxDate, this.step);
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, 11, 31);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options[this.beforeShowOption] !== undefined) {
      const beforeShow = options[this.beforeShowOption];
      this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const first = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.navStep);
    const last = first + 9 * this.step;

    this.first = first;
    this.last = last;
    this.start = first - this.step;
    this.focused = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.step);
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((years, timeValue) => {
      return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(years, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step));
    }, []);
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        if (timeValue !== undefined) {
          return (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step);
        }
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled years on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.map(disabled => new Date(disabled).getFullYear());

    this.picker.setViewSwitchLabel(`${this.first}-${this.last}`);
    this.picker.setPrevBtnDisabled(this.first <= this.minYear);
    this.picker.setNextBtnDisabled(this.last >= this.maxYear);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = this.start + (index * this.step);
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(current, 0, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      el.textContent = el.dataset.year = current;

      if (index === 0) {
        classList.add('prev');
      } else if (index === 11) {
        classList.add('next');
      }
      if (current < this.minYear || current > this.maxYear || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.textContent);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / this.step);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/handler.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_handler__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdUVBQXVFLHlDQUF5QyxHQUFHLGdCQUFnQixvQkFBb0IsNkNBQTZDLGdCQUFnQixpQkFBaUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsbUJBQW1CLHdCQUF3QixvRUFBb0UsR0FBRyx3QkFBd0Isb0VBQW9FLEdBQUcsaUJBQWlCLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQix1Q0FBdUMsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsbUJBQW1CLHFCQUFxQixtQkFBbUIsdUJBQXVCLGdDQUFnQyxHQUFHLDBEQUEwRCx1Q0FBdUMsR0FBRyxnQ0FBZ0Msc0JBQXNCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSx1REFBdUQseUNBQXlDLEdBQUcsZ0JBQWdCLG9CQUFvQiw2Q0FBNkMsZ0JBQWdCLGlCQUFpQix3QkFBd0IscUJBQXFCLG9CQUFvQixHQUFHLGtCQUFrQix1QkFBdUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsd0JBQXdCLG9FQUFvRSxHQUFHLHdCQUF3QixvRUFBb0UsR0FBRyxpQkFBaUIsdUJBQXVCLHVCQUF1QixxQkFBcUIsa0JBQWtCLHVDQUF1QyxHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRyxtQkFBbUIscUJBQXFCLG1CQUFtQix1QkFBdUIsZ0NBQWdDLEdBQUcsMERBQTBELHVDQUF1QyxHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyxtQkFBbUI7QUFDdmlGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ0c7QUFDZTs7QUFFbEQ7QUFDQSx1QkFBdUIsNERBQVU7O0FBRWxCOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaURBQVc7QUFDaEMsUUFBUSxrREFBTztBQUNmLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLGlCQUFpQiwyQkFBMkI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hzRTtBQUN0QjtBQUNQOztBQUV6QztBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBO0FBQ0EsRUFBRSxnRUFBaUI7QUFDbkI7QUFDQTtBQUNBLE1BQU0sc0RBQVU7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1QkFBdUI7QUFDakQsTUFBTTtBQUNOLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQVU7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDLFNBQVMsYUFBYTtBQUN0QixhQUFhLDJCQUEyQjtBQUN4QyxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRCxNQUFNO0FBQ04sMEJBQTBCLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pOb0U7QUFDaEI7QUFDTztBQUNkO0FBQ3lCO0FBQ3ZCO0FBQ1U7QUFDQTtBQUNqQjtBQUNxQjtBQUMwQztBQUM3Qzs7QUFFMUQ7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBdUM7QUFDbkQsU0FBUywwQ0FBMEM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsOERBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBYztBQUN6QjtBQUNBLE1BQU0sd0RBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEVBQXNCO0FBQzFCLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFLO0FBQzVCO0FBQ0E7QUFDQSxLQUFLLEVBQUUsc0VBQWMsQ0FBQyxrRUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsc0VBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBYTtBQUNsQztBQUNBLE1BQU07QUFDTixxQkFBcUIsNERBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlEQUFNOztBQUUzQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDLDJFQUFtQjtBQUNyRDtBQUNBLGdDQUFnQywyRUFBYztBQUM5Qyw4QkFBOEIseUVBQVk7QUFDMUMsa0NBQWtDLDZFQUFnQjtBQUNsRCw4QkFBOEIsOEVBQWlCO0FBQy9DLDhCQUE4Qix5RUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQWlCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLFdBQVcsK0RBQVUsdUJBQXVCLDBEQUFPLFVBQVUsNkRBQVU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLFdBQVcsOERBQVMsMEJBQTBCLDBEQUFPLFVBQVUsNkRBQVU7QUFDekU7O0FBRUE7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBTztBQUNsQjs7QUFFQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBVTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixrQkFBa0IsU0FBUztBQUMzQjtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxHQUFHLDBCQUEwQjtBQUN6RSx1QkFBdUIsNERBQWE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JmNkM7QUFDTTs7QUFFNUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsT0FBTztBQUNqRTs7QUFFQTtBQUNPO0FBQ1AsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFTO0FBQzdCO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVE7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixzREFBUTtBQUM1QjtBQUNBLGdCQUFnQiwyREFBWTtBQUM1QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0MwQztBQUNJO0FBQ2lDO0FBQ1o7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU8sd0RBQVM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQU87QUFDMUIsUUFBUTtBQUNSLG1CQUFtQixzREFBUTtBQUMzQixRQUFRO0FBQ1IsbUJBQW1CLHFEQUFPO0FBQzFCO0FBQ0EsY0FBYyxpREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQVM7QUFDMUIsY0FBYyxtREFBUztBQUN2QjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVE7QUFDekIsY0FBYyxrREFBUTtBQUN0QixxREFBcUQsK0RBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBOztBQUVBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsK0JBQStCLG1EQUFtRDtBQUNsRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxRQUFRLDZEQUFjO0FBQ3RCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLDZEQUFjO0FBQ3RCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLHlEQUFVO0FBQ2xCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLDREQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNOEM7QUFDUztBQUNoQjs7QUFFdkM7QUFDTztBQUNQLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXNCO0FBQzVCO0FBQ0E7QUFDQSxFQUFFLHNEQUFPO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEQ7QUFDSDtBQUNHOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBUztBQUNmLE1BQU0sc0RBQVE7O0FBRWQ7QUFDQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLG1EQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNCQUFzQixZQUFZO0FBQ2xDOztBQUVPO0FBQ1AsRUFBRSx5REFBVTtBQUNaOztBQUVPO0FBQ1AsRUFBRSw2REFBYztBQUNoQjs7QUFFTztBQUNQLEVBQUUsNkRBQWM7QUFDaEI7O0FBRUE7QUFDTztBQUNQLGlCQUFpQixxRUFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDTDs7QUFFdEM7QUFDTztBQUNQO0FBQ08scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRSwrQ0FBSztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQixFQUFFLGlCQUFpQjtBQUM5RCxPQUFPO0FBQ1A7QUFDQSx3QkFBd0IscURBQVU7QUFDbEMsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGlCQUFpQixtREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtDQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsbURBQVM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDWDs7QUFFckIsb0RBQU8sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL0RhdGVSYW5nZVBpY2tlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9EYXRlcGlja2VyLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2V2ZW50cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2lucHV0RmllbGRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL290aGVyTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2V2ZW50cy9waWNrZXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvaTE4bi9iYXNlLWxvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RhdGUtZm9ybWF0LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kYXRlLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9tYWluLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL29wdGlvbnMvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvb3B0aW9ucy9wcm9jZXNzT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvUGlja2VyLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvY2FsZW5kYXJXZWVrc1RlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvZGF5c1RlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvcGlja2VyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL0RheXNWaWV3LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9Nb250aHNWaWV3LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9WaWV3LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9ZZWFyc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM0ZDRhNWE7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5zdWJtaXQtdG9kbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUyMDgzLCAjNkE0Q0Q0KTtcXG59XFxuXFxuLnN1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNkE0Q0Q0LCAjMzUyMDgzKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogIzI5MTEzQjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjkxMTNCO1xcbn1cXG5cXG4ucHJpb3JpdHktY2hlY2tib3gge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgY29sb3I6ICM0ZDRhNWE7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyQ0NGMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgaW5wdXQ6aG92ZXIsIHNlbGVjdDpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNkE0Q0Q0O1xcbn1cXG5cXG5zZWxlY3Q6aG92ZXIsIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM0ZDRhNWE7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5zdWJtaXQtdG9kbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzUyMDgzLCAjNkE0Q0Q0KTtcXG59XFxuXFxuLnN1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNkE0Q0Q0LCAjMzUyMDgzKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogIzI5MTEzQjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjkxMTNCO1xcbn1cXG5cXG4ucHJpb3JpdHktY2hlY2tib3gge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gICAgY29sb3I6ICM0ZDRhNWE7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyQ0NGMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgaW5wdXQ6aG92ZXIsIHNlbGVjdDpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNkE0Q0Q0O1xcbn1cXG5cXG5zZWxlY3Q6aG92ZXIsIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSBcIi4vdG9kb1wiXG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSBcIi4vcHJvamVjdFwiXG5pbXBvcnQgeyBEYXRlcGlja2VyIH0gZnJvbSAndmFuaWxsYWpzLWRhdGVwaWNrZXInO1xuXG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZHVlRGF0ZScpXG5jb25zdCBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoZGF0ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpXG5cbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJykudmFsdWVcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkYXRlcGlja2VyLnZhbHVlXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKS52YWx1ZVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvamVjdCcpLnZhbHVlXG5cbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGFkZFRvZG8ocHJvamVjdCwgdG9kbylcbiAgICB9KSAgIFxufVxuIiwibGV0IHByb2plY3RzID0gW3tuYW1lOiAnZGVmYXVsdCcsIHRvZG9zOiBbXX1dXG5cbmZ1bmN0aW9uIGFkZFRvZG8ocHJvamVjdE5hbWUsIHRvZG8pIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSlcbiAgICBwcm9qZWN0cy5maW5kKHAgPT4gcC5uYW1lID09PSBwcm9qZWN0TmFtZSkudG9kb3MucHVzaCh0b2RvKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxufVxuXG5leHBvcnQge2FkZFRvZG99IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGVcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGVcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGNoZWNrZWRcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFN0YXR1c31cbn0iLCJpbXBvcnQge3JlZ2lzdGVyTGlzdGVuZXJzLCB1bnJlZ2lzdGVyTGlzdGVuZXJzfSBmcm9tICcuL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge2Zvcm1hdERhdGV9IGZyb20gJy4vbGliL2RhdGUtZm9ybWF0LmpzJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlci5qcyc7XG5cbi8vIGZpbHRlciBvdXQgdGhlIGNvbmZpZyBvcHRpb25zIGluYXBwcm9wcml0ZSB0byBwYXNzIHRvIERhdGVwaWNrZXJcbmZ1bmN0aW9uIGZpbHRlck9wdGlvbnMob3B0aW9ucykge1xuICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgZGVsZXRlIG5ld09wdHMuaW5wdXRzO1xuICBkZWxldGUgbmV3T3B0cy5hbGxvd09uZVNpZGVkUmFuZ2U7XG4gIGRlbGV0ZSBuZXdPcHRzLm1heE51bWJlck9mRGF0ZXM7IC8vIHRvIGVuc3VyZSBlYWNoIGRhdGVwaWNrZXIgaGFuZGxlcyBhIHNpbmdsZSBkYXRlXG5cbiAgcmV0dXJuIG5ld09wdHM7XG59XG5cbmZ1bmN0aW9uIHNldHVwRGF0ZXBpY2tlcihyYW5nZXBpY2tlciwgY2hhbmdlRGF0ZUxpc3RlbmVyLCBlbCwgb3B0aW9ucykge1xuICByZWdpc3Rlckxpc3RlbmVycyhyYW5nZXBpY2tlciwgW1xuICAgIFtlbCwgJ2NoYW5nZURhdGUnLCBjaGFuZ2VEYXRlTGlzdGVuZXJdLFxuICBdKTtcbiAgbmV3IERhdGVwaWNrZXIoZWwsIG9wdGlvbnMsIHJhbmdlcGlja2VyKTtcbn1cblxuZnVuY3Rpb24gb25DaGFuZ2VEYXRlKHJhbmdlcGlja2VyLCBldikge1xuICAvLyB0byBwcmV2ZW50IGJvdGggZGF0ZXBpY2tlcnMgdHJpZ2dlciB0aGUgb3RoZXIgc2lkZSdzIHVwZGF0ZSBlYWNoIG90aGVyXG4gIGlmIChyYW5nZXBpY2tlci5fdXBkYXRpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmFuZ2VwaWNrZXIuX3VwZGF0aW5nID0gdHJ1ZTtcblxuICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gIGlmICh0YXJnZXQuZGF0ZXBpY2tlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGF0ZXBpY2tlcnMgPSByYW5nZXBpY2tlci5kYXRlcGlja2VycztcbiAgY29uc3Qgc2V0RGF0ZU9wdGlvbnMgPSB7cmVuZGVyOiBmYWxzZX07XG4gIGNvbnN0IGNoYW5nZWRTaWRlID0gcmFuZ2VwaWNrZXIuaW5wdXRzLmluZGV4T2YodGFyZ2V0KTtcbiAgY29uc3Qgb3RoZXJTaWRlID0gY2hhbmdlZFNpZGUgPT09IDAgPyAxIDogMDtcbiAgY29uc3QgY2hhbmdlZERhdGUgPSBkYXRlcGlja2Vyc1tjaGFuZ2VkU2lkZV0uZGF0ZXNbMF07XG4gIGNvbnN0IG90aGVyRGF0ZSA9IGRhdGVwaWNrZXJzW290aGVyU2lkZV0uZGF0ZXNbMF07XG5cbiAgaWYgKGNoYW5nZWREYXRlICE9PSB1bmRlZmluZWQgJiYgb3RoZXJEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBpZiB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlID4gdGhlIGVuZCwgc3dhcCB0aGVtXG4gICAgaWYgKGNoYW5nZWRTaWRlID09PSAwICYmIGNoYW5nZWREYXRlID4gb3RoZXJEYXRlKSB7XG4gICAgICBkYXRlcGlja2Vyc1swXS5zZXREYXRlKG90aGVyRGF0ZSwgc2V0RGF0ZU9wdGlvbnMpO1xuICAgICAgZGF0ZXBpY2tlcnNbMV0uc2V0RGF0ZShjaGFuZ2VkRGF0ZSwgc2V0RGF0ZU9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlZFNpZGUgPT09IDEgJiYgY2hhbmdlZERhdGUgPCBvdGhlckRhdGUpIHtcbiAgICAgIGRhdGVwaWNrZXJzWzBdLnNldERhdGUoY2hhbmdlZERhdGUsIHNldERhdGVPcHRpb25zKTtcbiAgICAgIGRhdGVwaWNrZXJzWzFdLnNldERhdGUob3RoZXJEYXRlLCBzZXREYXRlT3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFyYW5nZXBpY2tlci5hbGxvd09uZVNpZGVkUmFuZ2UpIHtcbiAgICAvLyB0byBwcmV2ZW50IHRoZSByYW5nZSBmcm9tIGJlY29taW5nIG9uZS1zaWRlZCwgY29weSBjaGFuZ2VkIHNpZGUnc1xuICAgIC8vIHNlbGVjdGlvbiAobm8gbWF0dGVyIGlmIGl0J3MgZW1wdHkpIHRvIHRoZSBvdGhlciBzaWRlXG4gICAgaWYgKGNoYW5nZWREYXRlICE9PSB1bmRlZmluZWQgfHwgb3RoZXJEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldERhdGVPcHRpb25zLmNsZWFyID0gdHJ1ZTtcbiAgICAgIGRhdGVwaWNrZXJzW290aGVyU2lkZV0uc2V0RGF0ZShkYXRlcGlja2Vyc1tjaGFuZ2VkU2lkZV0uZGF0ZXMsIHNldERhdGVPcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgZGF0ZXBpY2tlcnNbMF0ucGlja2VyLnVwZGF0ZSgpLnJlbmRlcigpO1xuICBkYXRlcGlja2Vyc1sxXS5waWNrZXIudXBkYXRlKCkucmVuZGVyKCk7XG4gIGRlbGV0ZSByYW5nZXBpY2tlci5fdXBkYXRpbmc7XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgZGF0ZSByYW5nZSBwaWNrZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyICB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkYXRlIHJhbmdlIHBpY2tlclxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGEgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBjb25maWcgb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuaXNBcnJheShvcHRpb25zLmlucHV0cylcbiAgICAgID8gb3B0aW9ucy5pbnB1dHNcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgIGlmIChpbnB1dHMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQucmFuZ2VwaWNrZXIgPSB0aGlzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dHMgPSBpbnB1dHMuc2xpY2UoMCwgMik7XG4gICAgdGhpcy5hbGxvd09uZVNpZGVkUmFuZ2UgPSAhIW9wdGlvbnMuYWxsb3dPbmVTaWRlZFJhbmdlO1xuXG4gICAgY29uc3QgY2hhbmdlRGF0ZUxpc3RlbmVyID0gb25DaGFuZ2VEYXRlLmJpbmQobnVsbCwgdGhpcyk7XG4gICAgY29uc3QgY2xlYW5PcHRpb25zID0gZmlsdGVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBpbiBvcmRlciBmb3IgaW5pdGlhbCBkYXRlIHNldHVwIHRvIHdvcmsgcmlnaHQgd2hlbiBwY2ljTHZlbCA+IDAsXG4gICAgLy8gbGV0IERhdGVwaWNrZXIgY29uc3RydWN0b3IgYWRkIHRoZSBpbnN0YW5jZSB0byB0aGUgcmFuZ2VwaWNrZXJcbiAgICBjb25zdCBkYXRlcGlja2VycyA9IFtdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGF0ZXBpY2tlcnMnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBkYXRlcGlja2VycztcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc2V0dXBEYXRlcGlja2VyKHRoaXMsIGNoYW5nZURhdGVMaXN0ZW5lciwgdGhpcy5pbnB1dHNbMF0sIGNsZWFuT3B0aW9ucyk7XG4gICAgc2V0dXBEYXRlcGlja2VyKHRoaXMsIGNoYW5nZURhdGVMaXN0ZW5lciwgdGhpcy5pbnB1dHNbMV0sIGNsZWFuT3B0aW9ucyk7XG4gICAgT2JqZWN0LmZyZWV6ZShkYXRlcGlja2Vycyk7XG4gICAgLy8gbm9ybWFsaXplIHRoZSByYW5nZSBpZiBpbml0YWwgZGF0ZXMgYXJlIGdpdmVuXG4gICAgaWYgKGRhdGVwaWNrZXJzWzBdLmRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9uQ2hhbmdlRGF0ZSh0aGlzLCB7dGFyZ2V0OiB0aGlzLmlucHV0c1swXX0pO1xuICAgIH0gZWxzZSBpZiAoZGF0ZXBpY2tlcnNbMV0uZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgb25DaGFuZ2VEYXRlKHRoaXMsIHt0YXJnZXQ6IHRoaXMuaW5wdXRzWzFdfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtBcnJheX0gLSBzZWxlY3RlZCBkYXRlIG9mIHRoZSBsaW5rZWQgZGF0ZSBwaWNrZXJzXG4gICAqL1xuICBnZXQgZGF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlcnMubGVuZ3RoID09PSAyXG4gICAgICA/IFtcbiAgICAgICAgICB0aGlzLmRhdGVwaWNrZXJzWzBdLmRhdGVzWzBdLFxuICAgICAgICAgIHRoaXMuZGF0ZXBpY2tlcnNbMV0uZGF0ZXNbMF0sXG4gICAgICAgIF1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgdmFsdWVzIHRvIHRoZSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZyBvcHRpb25zIHRvIHVwZGF0ZVxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5hbGxvd09uZVNpZGVkUmFuZ2UgPSAhIW9wdGlvbnMuYWxsb3dPbmVTaWRlZFJhbmdlO1xuXG4gICAgY29uc3QgY2xlYW5PcHRpb25zID0gZmlsdGVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXJzWzBdLnNldE9wdGlvbnMoY2xlYW5PcHRpb25zKTtcbiAgICB0aGlzLmRhdGVwaWNrZXJzWzFdLnNldE9wdGlvbnMoY2xlYW5PcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBEYXRlUmFuZ2VQaWNrZXIgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVJhbmdlUGlja2VyfSAtIHRoZSBpbnN0YW5jZSBkZXN0cm95ZWRcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kYXRlcGlja2Vyc1swXS5kZXN0cm95KCk7XG4gICAgdGhpcy5kYXRlcGlja2Vyc1sxXS5kZXN0cm95KCk7XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVycyh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5lbGVtZW50LnJhbmdlcGlja2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgRGF0ZSBvYmplY3RzIGJ5IGRlZmF1bHQuIElmIGZvcm1hdCBzdHJpbmcgaXMgcGFzc2VkLFxuICAgKiBpdCByZXR1cm5zIGRhdGUgc3RyaW5ncyBmb3JtYXR0ZWQgaW4gZ2l2ZW4gZm9ybWF0LlxuICAgKiBUaGUgcmVzdWx0IGFycmF5IGFsd2F5cyBjb250YWlucyAyIGl0ZW1zIChzdGFydCBkYXRlL2VuZCBkYXRlKSBhbmRcbiAgICogdW5kZWZpbmVkIGlzIHVzZWQgZm9yIHVuc2VsZWN0ZWQgc2lkZS4gKGUuZy4gSWYgbm9uZSBpcyBzZWxlY3RlZCxcbiAgICogdGhlIHJlc3VsdCB3aWxsIGJlIFt1bmRlZmluZWQsIHVuZGVmaW5lZF0uIElmIG9ubHkgdGhlIGVuZCBkYXRlIGlzIHNldFxuICAgKiB3aGVuIGFsbG93T25lU2lkZWRSYW5nZSBjb25maWcgb3B0aW9uIGlzIHRydWUsIFt1bmRlZmluZWQsIGVuZERhdGVdIHdpbGxcbiAgICogYmUgcmV0dXJuZWQuKVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtmb3JtYXRdIC0gRm9ybWF0IHN0cmluZyB0byBzdHJpbmdpZnkgdGhlIGRhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAtIFN0YXJ0IGFuZCBlbmQgZGF0ZXNcbiAgICovXG4gIGdldERhdGVzKGZvcm1hdCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZm9ybWF0XG4gICAgICA/IGRhdGUgPT4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIHRoaXMuZGF0ZXBpY2tlcnNbMF0uY29uZmlnLmxvY2FsZSlcbiAgICAgIDogZGF0ZSA9PiBuZXcgRGF0ZShkYXRlKTtcblxuICAgIHJldHVybiB0aGlzLmRhdGVzLm1hcChkYXRlID0+IGRhdGUgPT09IHVuZGVmaW5lZCA/IGRhdGUgOiBjYWxsYmFjayhkYXRlKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqXG4gICAqIFRoZSBtZXRob2QgY2FsbHMgZGF0ZXBpY2tlci5zZXREYXRlKCkgaW50ZXJuYWxseSB1c2luZyBlYWNoIG9mIHRoZVxuICAgKiBhcmd1bWVudHMgaW4gc3RhcnTihpJlbmQgb3JkZXIuXG4gICAqXG4gICAqIFdoZW4gYSBjbGVhcjogdHJ1ZSBvcHRpb24gb2JqZWN0IGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGEgZGF0ZSwgdGhlIG1ldGhvZFxuICAgKiBjbGVhcnMgdGhlIGRhdGUuXG4gICAqXG4gICAqIElmIGFuIGludmFsaWQgZGF0ZSwgdGhlIHNhbWUgZGF0ZSBhcyB0aGUgY3VycmVudCBvbmUgb3IgYW4gb3B0aW9uIG9iamVjdFxuICAgKiB3aXRob3V0IGNsZWFyOiB0cnVlIGlzIHBhc3NlZCwgdGhlIG1ldGhvZCBjb25zaWRlcnMgdGhhdCBhcmd1bWVudCBhcyBhblxuICAgKiBcImluZWZmZWN0aXZlXCIgYXJndW1lbnQgYmVjYXVzZSBjYWxsaW5nIGRhdGVwaWNrZXIuc2V0RGF0ZSgpIHdpdGggdGhvc2VcbiAgICogdmFsdWVzIG1ha2VzIG5vIGNoYW5nZXMgdG8gdGhlIGRhdGUgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBXaGVuIHRoZSBhbGxvd09uZVNpZGVkUmFuZ2UgY29uZmlnIG9wdGlvbiBpcyBmYWxzZSwgcGFzc2luZyB7Y2xlYXI6IHRydWV9XG4gICAqIHRvIGNsZWFyIHRoZSByYW5nZSB3b3JrcyBvbmx5IHdoZW4gaXQgaXMgZG9uZSB0byB0aGUgbGFzdCBlZmZlY3RpdmVcbiAgICogYXJndW1lbnQgKGluIG90aGVyIHdvcmRzLCBwYXNzZWQgdG8gcmFuZ2VFbmQgb3IgdG8gcmFuZ2VTdGFydCBhbG9uZyB3aXRoXG4gICAqIGluZWZmZWN0aXZlIHJhbmdlRW5kKS4gVGhpcyBpcyBiZWNhdXNlIHdoZW4gdGhlIGRhdGUgcmFuZ2UgaXMgY2hhbmdlZCxcbiAgICogaXQgZ2V0cyBub3JtYWxpemVkIGJhc2VkIG9uIHRoZSBsYXN0IGNoYW5nZSBhdCB0aGUgZW5kIG9mIHRoZSBjaGFuZ2luZ1xuICAgKiBwcm9jZXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV8TnVtYmVyfFN0cmluZ3xPYmplY3R9IHJhbmdlU3RhcnQgLSBTdGFydCBkYXRlIG9mIHRoZSByYW5nZVxuICAgKiBvciB7Y2xlYXI6IHRydWV9IHRvIGNsZWFyIHRoZSBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ8U3RyaW5nfE9iamVjdH0gcmFuZ2VFbmQgLSBFbmQgZGF0ZSBvZiB0aGUgcmFuZ2VcbiAgICogb3Ige2NsZWFyOiB0cnVlfSB0byBjbGVhciB0aGUgZGF0ZVxuICAgKi9cbiAgc2V0RGF0ZXMocmFuZ2VTdGFydCwgcmFuZ2VFbmQpIHtcbiAgICBjb25zdCBbZGF0ZXBpY2tlcjAsIGRhdGVwaWNrZXIxXSA9IHRoaXMuZGF0ZXBpY2tlcnM7XG4gICAgY29uc3Qgb3JpZ0RhdGVzID0gdGhpcy5kYXRlcztcblxuICAgIC8vIElmIHJhbmdlIG5vcm1hbGl6YXRpb24gcnVucyBvbiBldmVyeSBjaGFuZ2UsIHdlIGNhbid0IHNldCBhIG5ldyByYW5nZVxuICAgIC8vIHRoYXQgc3RhcnRzIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmFuZ2UgY29ycmVjdGx5IGJlY2F1c2UgdGhlXG4gICAgLy8gbm9ybWFsaXphdGlvbiBwcm9jZXNzIHN3YXBzIHN0YXJ04oaU77iOZW5kIHJpZ2h0IGFmdGVyIHNldHRpbmcgdGhlIG5ldyBzdGFydFxuICAgIC8vIGRhdGUuIFRvIHByZXZlbnQgdGhpcywgdGhlIG5vcm1hbGl6YXRpb24gcHJvY2VzcyBuZWVkcyB0byBydW4gb25jZSBhZnRlclxuICAgIC8vIGJvdGggb2YgdGhlIG5ldyBkYXRlcyBhcmUgc2V0LlxuICAgIHRoaXMuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICBkYXRlcGlja2VyMC5zZXREYXRlKHJhbmdlU3RhcnQpO1xuICAgIGRhdGVwaWNrZXIxLnNldERhdGUocmFuZ2VFbmQpO1xuICAgIGRlbGV0ZSB0aGlzLl91cGRhdGluZztcblxuICAgIGlmIChkYXRlcGlja2VyMS5kYXRlc1swXSAhPT0gb3JpZ0RhdGVzWzFdKSB7XG4gICAgICBvbkNoYW5nZURhdGUodGhpcywge3RhcmdldDogdGhpcy5pbnB1dHNbMV19KTtcbiAgICB9IGVsc2UgaWYgKGRhdGVwaWNrZXIwLmRhdGVzWzBdICE9PSBvcmlnRGF0ZXNbMF0pIHtcbiAgICAgIG9uQ2hhbmdlRGF0ZSh0aGlzLCB7dGFyZ2V0OiB0aGlzLmlucHV0c1swXX0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtsYXN0SXRlbU9mLCBzdHJpbmdUb0FycmF5LCBpc0luUmFuZ2V9IGZyb20gJy4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7dG9kYXksIHJlZ3VsYXJpemVEYXRlfSBmcm9tICcuL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VEYXRlLCBmb3JtYXREYXRlfSBmcm9tICcuL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQge2lzQWN0aXZlRWxlbWVudH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJMaXN0ZW5lcnMsIHVucmVnaXN0ZXJMaXN0ZW5lcnN9IGZyb20gJy4vbGliL2V2ZW50LmpzJztcbmltcG9ydCB7bG9jYWxlc30gZnJvbSAnLi9pMThuL2Jhc2UtbG9jYWxlcy5qcyc7XG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zL2RlZmF1bHRPcHRpb25zLmpzJztcbmltcG9ydCBwcm9jZXNzT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvcHJvY2Vzc09wdGlvbnMuanMnO1xuaW1wb3J0IFBpY2tlciBmcm9tICcuL3BpY2tlci9QaWNrZXIuanMnO1xuaW1wb3J0IHt0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50fSBmcm9tICcuL2V2ZW50cy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHtvbktleWRvd24sIG9uRm9jdXMsIG9uTW91c2Vkb3duLCBvbkNsaWNrSW5wdXQsIG9uUGFzdGV9IGZyb20gJy4vZXZlbnRzL2lucHV0RmllbGRMaXN0ZW5lcnMuanMnO1xuaW1wb3J0IHtvbkNsaWNrT3V0c2lkZX0gZnJvbSAnLi9ldmVudHMvb3RoZXJMaXN0ZW5lcnMuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlEYXRlcyhkYXRlcywgY29uZmlnKSB7XG4gIHJldHVybiBkYXRlc1xuICAgIC5tYXAoZHQgPT4gZm9ybWF0RGF0ZShkdCwgY29uZmlnLmZvcm1hdCwgY29uZmlnLmxvY2FsZSkpXG4gICAgLmpvaW4oY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xufVxuXG4vLyBwYXJzZSBpbnB1dCBkYXRlcyBhbmQgY3JlYXRlIGFuIGFycmF5IG9mIHRpbWUgdmFsdWVzIGZvciBzZWxlY3Rpb25cbi8vIHJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBubyB2YWxpZCBkYXRlcyBpbiBpbnB1dERhdGVzXG4vLyB3aGVuIG9yaWdEYXRlcyAoY3VycmVudCBzZWxlY3Rpb24pIGlzIHBhc3NlZCwgdGhlIGZ1bmN0aW9uIHdvcmtzIHRvIG1peFxuLy8gdGhlIGlucHV0IGRhdGVzIGludG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG5mdW5jdGlvbiBwcm9jZXNzSW5wdXREYXRlcyhkYXRlcGlja2VyLCBpbnB1dERhdGVzLCBjbGVhciA9IGZhbHNlKSB7XG4gIC8vIGNvbnN0IHtjb25maWcsIGRhdGVzOiBvcmlnRGF0ZXMsIHJhbmdlcGlja2VyfSA9IGRhdGVwaWNrZXI7XG4gIGNvbnN0IHtjb25maWcsIGRhdGVzOiBvcmlnRGF0ZXMsIHJhbmdlU2lkZUluZGV4fSA9IGRhdGVwaWNrZXI7XG4gIGlmIChpbnB1dERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGVtcHR5IGlucHV0IGlzIGNvbnNpZGVyZWQgdmFsaWQgdW5sZXNzIG9yaWdpRGF0ZXMgaXMgcGFzc2VkXG4gICAgcmV0dXJuIGNsZWFyID8gW10gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBjb25zdCByYW5nZUVuZCA9IHJhbmdlcGlja2VyICYmIGRhdGVwaWNrZXIgPT09IHJhbmdlcGlja2VyLmRhdGVwaWNrZXJzWzFdO1xuICBsZXQgbmV3RGF0ZXMgPSBpbnB1dERhdGVzLnJlZHVjZSgoZGF0ZXMsIGR0KSA9PiB7XG4gICAgbGV0IGRhdGUgPSBwYXJzZURhdGUoZHQsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5sb2NhbGUpO1xuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRlcztcbiAgICB9XG4gICAgLy8gYWRqdXN0IHRvIDFzdCBvZiB0aGUgbW9udGgvSmFuIDFzdCBvZiB0aGUgeWVhclxuICAgIC8vIG9yIHRvIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9uaC9EZWMgMzFzdCBvZiB0aGUgeWVhciBpZiB0aGUgZGF0ZXBpY2tlclxuICAgIC8vIGlzIHRoZSByYW5nZS1lbmQgcGlja2VyIG9mIGEgcmFuZ2VwaWNrZXJcbiAgICBkYXRlID0gcmVndWxhcml6ZURhdGUoZGF0ZSwgY29uZmlnLnBpY2tMZXZlbCwgcmFuZ2VTaWRlSW5kZXgpO1xuICAgIGlmIChcbiAgICAgIGlzSW5SYW5nZShkYXRlLCBjb25maWcubWluRGF0ZSwgY29uZmlnLm1heERhdGUpXG4gICAgICAmJiAhZGF0ZXMuaW5jbHVkZXMoZGF0ZSlcbiAgICAgICYmICFjb25maWcuZGF0ZXNEaXNhYmxlZC5pbmNsdWRlcyhkYXRlKVxuICAgICAgJiYgKGNvbmZpZy5waWNrTGV2ZWwgPiAwIHx8ICFjb25maWcuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKG5ldyBEYXRlKGRhdGUpLmdldERheSgpKSlcbiAgICApIHtcbiAgICAgIGRhdGVzLnB1c2goZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlcztcbiAgfSwgW10pO1xuICBpZiAobmV3RGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChjb25maWcubXVsdGlkYXRlICYmICFjbGVhcikge1xuICAgIC8vIGdldCB0aGUgc3lubWV0cmljIGRpZmZlcmVuY2UgYmV0d2VlbiBvcmlnRGF0ZXMgYW5kIG5ld0RhdGVzXG4gICAgbmV3RGF0ZXMgPSBuZXdEYXRlcy5yZWR1Y2UoKGRhdGVzLCBkYXRlKSA9PiB7XG4gICAgICBpZiAoIW9yaWdEYXRlcy5pbmNsdWRlcyhkYXRlKSkge1xuICAgICAgICBkYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGVzO1xuICAgIH0sIG9yaWdEYXRlcy5maWx0ZXIoZGF0ZSA9PiAhbmV3RGF0ZXMuaW5jbHVkZXMoZGF0ZSkpKTtcbiAgfVxuICAvLyBkbyBsZW5ndGggY2hlY2sgYWx3YXlzIGJlY2F1c2UgdXNlciBjYW4gaW5wdXQgbXVsdGlwbGUgZGF0ZXMgcmVnYXJkbGVzcyBvZiB0aGUgbW9kZVxuICByZXR1cm4gY29uZmlnLm1heE51bWJlck9mRGF0ZXMgJiYgbmV3RGF0ZXMubGVuZ3RoID4gY29uZmlnLm1heE51bWJlck9mRGF0ZXNcbiAgICA/IG5ld0RhdGVzLnNsaWNlKGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzICogLTEpXG4gICAgOiBuZXdEYXRlcztcbn1cblxuLy8gcmVmcmVzaCB0aGUgVUkgZWxlbWVudHNcbi8vIG1vZGVzOiAxOiBpbnB1dCBvbmx5LCAyLCBwaWNrZXIgb25seSwgMyBib3RoXG5mdW5jdGlvbiByZWZyZXNoVUkoZGF0ZXBpY2tlciwgbW9kZSA9IDMsIHF1aWNrUmVuZGVyID0gdHJ1ZSkge1xuICBjb25zdCB7Y29uZmlnLCBwaWNrZXIsIGlucHV0RmllbGR9ID0gZGF0ZXBpY2tlcjtcbiAgaWYgKG1vZGUgJiAyKSB7XG4gICAgY29uc3QgbmV3VmlldyA9IHBpY2tlci5hY3RpdmUgPyBjb25maWcucGlja0xldmVsIDogY29uZmlnLnN0YXJ0VmlldztcbiAgICBwaWNrZXIudXBkYXRlKCkuY2hhbmdlVmlldyhuZXdWaWV3KS5yZW5kZXIocXVpY2tSZW5kZXIpO1xuICB9XG4gIGlmIChtb2RlICYgMSAmJiBpbnB1dEZpZWxkKSB7XG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9IHN0cmluZ2lmeURhdGVzKGRhdGVwaWNrZXIuZGF0ZXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlcGlja2VyLCBpbnB1dERhdGVzLCBvcHRpb25zKSB7XG4gIGxldCB7Y2xlYXIsIHJlbmRlciwgYXV0b2hpZGUsIHJldmVydH0gPSBvcHRpb25zO1xuICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICByZW5kZXIgPSB0cnVlO1xuICB9XG4gIGlmICghcmVuZGVyKSB7XG4gICAgYXV0b2hpZGUgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChhdXRvaGlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXV0b2hpZGUgPSBkYXRlcGlja2VyLmNvbmZpZy5hdXRvaGlkZTtcbiAgfVxuXG4gIGNvbnN0IG5ld0RhdGVzID0gcHJvY2Vzc0lucHV0RGF0ZXMoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgY2xlYXIpO1xuICBpZiAoIW5ld0RhdGVzICYmICFyZXZlcnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5ld0RhdGVzICYmIG5ld0RhdGVzLnRvU3RyaW5nKCkgIT09IGRhdGVwaWNrZXIuZGF0ZXMudG9TdHJpbmcoKSkge1xuICAgIGRhdGVwaWNrZXIuZGF0ZXMgPSBuZXdEYXRlcztcbiAgICByZWZyZXNoVUkoZGF0ZXBpY2tlciwgcmVuZGVyID8gMyA6IDEpO1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQoZGF0ZXBpY2tlciwgJ2NoYW5nZURhdGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWZyZXNoVUkoZGF0ZXBpY2tlciwgMSk7XG4gIH1cblxuICBpZiAoYXV0b2hpZGUpIHtcbiAgICBkYXRlcGlja2VyLmhpZGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGRhdGUgcGlja2VyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVwaWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgZGF0ZSBwaWNrZXJcbiAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBhIGRhdGUgcGlja2VyXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdIC0gY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtICB7RGF0ZVJhbmdlUGlja2VyfSBbcmFuZ2VwaWNrZXJdIC0gRGF0ZVJhbmdlUGlja2VyIGluc3RhbmNlIHRoZVxuICAgKiBkYXRlIHBpY2tlciBiZWxvbmdzIHRvLiBVc2UgdGhpcyBvbmx5IHdoZW4gY3JlYXRpbmcgZGF0ZSBwaWNrZXIgYXMgYSBwYXJ0XG4gICAqIG9mIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30sIHJhbmdlcGlja2VyID0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5kYXRlcGlja2VyID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGJ1dHRvbkNsYXNzOiAob3B0aW9ucy5idXR0b25DbGFzcyAmJiBTdHJpbmcob3B0aW9ucy5idXR0b25DbGFzcykpIHx8ICdidXR0b24nLFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgZGVmYXVsdFZpZXdEYXRlOiB0b2RheSgpLFxuICAgICAgbWF4RGF0ZTogdW5kZWZpbmVkLFxuICAgICAgbWluRGF0ZTogdW5kZWZpbmVkLFxuICAgIH0sIHByb2Nlc3NPcHRpb25zKGRlZmF1bHRPcHRpb25zLCB0aGlzKSk7XG4gICAgLy8gY29uZmlndXJlIGJ5IHR5cGVcbiAgICBjb25zdCBpbmxpbmUgPSB0aGlzLmlubGluZSA9IGVsZW1lbnQudGFnTmFtZSAhPT0gJ0lOUFVUJztcbiAgICBsZXQgaW5wdXRGaWVsZDtcbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBjb25maWcuY29udGFpbmVyID0gZWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIC8vIG9taXQgc3RyaW5nIHR5cGUgY2hlY2sgYmVjYXVzZSBpdCBkb2Vzbid0IGd1YXJhbnRlZSB0byBhdm9pZCBlcnJvcnNcbiAgICAgICAgLy8gKGludmFsaWQgc2VsZWN0b3Igc3RyaW5nIGNhdXNlcyBhYmVuZCB3aXRoIHN5dGF4IGVycm9yKVxuICAgICAgICBjb25maWcuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAgID8gb3B0aW9ucy5jb250YWluZXJcbiAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXRGaWVsZCA9IHRoaXMuaW5wdXRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2RhdGVwaWNrZXItaW5wdXQnKTtcbiAgICB9XG4gICAgaWYgKHJhbmdlcGlja2VyKSB7XG4gICAgICAvLyBjaGVjayB2YWxpZGlyeVxuICAgICAgY29uc3QgaW5kZXggPSByYW5nZXBpY2tlci5pbnB1dHMuaW5kZXhPZihpbnB1dEZpZWxkKTtcbiAgICAgIGNvbnN0IGRhdGVwaWNrZXJzID0gcmFuZ2VwaWNrZXIuZGF0ZXBpY2tlcnM7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gMSB8fCAhQXJyYXkuaXNBcnJheShkYXRlcGlja2VycykpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmFuZ2VwaWNrZXIgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgLy8gYXR0YWNoIGl0YWVsZiB0byB0aGUgcmFuZ2VwaWNrZXIgaGVyZSBzbyB0aGF0IHByb2Nlc3NJbnB1dERhdGVzKCkgY2FuXG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgcmFuZ2UtZW5kIHBpY2tlciBvZiB0aGUgcmFuZ2VwaWNrZXIgd2hpbGVcbiAgICAgIC8vIHNldHRpbmcgaW5pdGFsIHZhbHVlcyB3aGVuIHBpY2tMZXZlbCA+IDBcbiAgICAgIGRhdGVwaWNrZXJzW2luZGV4XSA9IHRoaXM7XG4gICAgICAvLyBhZGQgZ2V0dGVyIGZvciByYW5nZXBpY2tlclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyYW5nZXBpY2tlcicsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiByYW5nZXBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyYW5nZVNpZGVJbmRleCcsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCBjb25maWdcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgcHJvY2Vzc09wdGlvbnMob3B0aW9ucywgdGhpcykpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgZGF0ZXNcbiAgICBsZXQgaW5pdGlhbERhdGVzO1xuICAgIGlmIChpbmxpbmUpIHtcbiAgICAgIGluaXRpYWxEYXRlcyA9IHN0cmluZ1RvQXJyYXkoZWxlbWVudC5kYXRhc2V0LmRhdGUsIGNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXQuZGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbERhdGVzID0gc3RyaW5nVG9BcnJheShpbnB1dEZpZWxkLnZhbHVlLCBjb25maWcuZGF0ZURlbGltaXRlcik7XG4gICAgfVxuICAgIHRoaXMuZGF0ZXMgPSBbXTtcbiAgICAvLyBwcm9jZXNzIGluaXRpYWwgdmFsdWVcbiAgICBjb25zdCBpbnB1dERhdGVWYWx1ZXMgPSBwcm9jZXNzSW5wdXREYXRlcyh0aGlzLCBpbml0aWFsRGF0ZXMpO1xuICAgIGlmIChpbnB1dERhdGVWYWx1ZXMgJiYgaW5wdXREYXRlVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0ZXMgPSBpbnB1dERhdGVWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbnB1dEZpZWxkKSB7XG4gICAgICBpbnB1dEZpZWxkLnZhbHVlID0gc3RyaW5naWZ5RGF0ZXModGhpcy5kYXRlcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrZXIgPSB0aGlzLnBpY2tlciA9IG5ldyBQaWNrZXIodGhpcyk7XG5cbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IHVwIGV2ZW50IGxpc3RlbmVycyBpbiBvdGhlciBtb2Rlc1xuICAgICAgY29uc3Qgb25Nb3VzZWRvd25Eb2N1bWVudCA9IG9uQ2xpY2tPdXRzaWRlLmJpbmQobnVsbCwgdGhpcyk7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXG4gICAgICAgIFtpbnB1dEZpZWxkLCAna2V5ZG93bicsIG9uS2V5ZG93bi5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2lucHV0RmllbGQsICdmb2N1cycsIG9uRm9jdXMuYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnbW91c2Vkb3duJywgb25Nb3VzZWRvd24uYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnY2xpY2snLCBvbkNsaWNrSW5wdXQuYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAncGFzdGUnLCBvblBhc3RlLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbZG9jdW1lbnQsICdtb3VzZWRvd24nLCBvbk1vdXNlZG93bkRvY3VtZW50XSxcbiAgICAgICAgW2RvY3VtZW50LCAndG91Y2hzdGFydCcsIG9uTW91c2Vkb3duRG9jdW1lbnRdLFxuICAgICAgICBbd2luZG93LCAncmVzaXplJywgcGlja2VyLnBsYWNlLmJpbmQocGlja2VyKV1cbiAgICAgIF07XG4gICAgICByZWdpc3Rlckxpc3RlbmVycyh0aGlzLCBsaXN0ZW5lcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgRGF0ZSBvYmplY3Qgb3IgdGltZSB2YWx1ZSBpbiBnaXZlbiBmb3JtYXQgYW5kIGxhbmd1YWdlXG4gICAqIEBwYXJhbSAge0RhdGV8TnVtYmVyfSBkYXRlIC0gZGF0ZSBvciB0aW1lIHZhbHVlIHRvIGZvcm1hdFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBmb3JtYXQgLSBmb3JtYXQgc3RyaW5nIG9yIG9iamVjdCB0aGF0IGNvbnRhaW5zXG4gICAqIHRvRGlzcGxheSgpIGN1c3RvbSBmb3JtYXR0ZXIsIHdob3NlIHNpZ25hdHVyZSBpc1xuICAgKiAtIGFyZ3M6XG4gICAqICAgLSBkYXRlOiB7RGF0ZX0gLSBEYXRlIGluc3RhbmNlIG9mIHRoZSBkYXRlIHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBmb3JtYXQ6IHtPYmplY3R9IC0gdGhlIGZvcm1hdCBvYmplY3QgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGxvY2FsZToge09iamVjdH0gLSBsb2NhbGUgZm9yIHRoZSBsYW5ndWFnZSBzcGVjaWZpZWQgYnkgYGxhbmdgXG4gICAqIC0gcmV0dXJuOlxuICAgKiAgICAge1N0cmluZ30gZm9ybWF0dGVkIGRhdGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbbGFuZz1lbl0gLSBsYW5ndWFnZSBjb2RlIGZvciB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRlXG4gICAqL1xuICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxhbmcgJiYgbG9jYWxlc1tsYW5nXSB8fCBsb2NhbGVzLmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBkYXRlIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd8RGF0ZXxOdW1iZXJ9IGRhdGVTdHIgLSBkYXRlIHN0cmluZywgRGF0ZSBvYmplY3Qgb3IgdGltZVxuICAgKiB2YWx1ZSB0byBwYXJzZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBmb3JtYXQgLSBmb3JtYXQgc3RyaW5nIG9yIG9iamVjdCB0aGF0IGNvbnRhaW5zXG4gICAqIHRvVmFsdWUoKSBjdXN0b20gcGFyc2VyLCB3aG9zZSBzaWduYXR1cmUgaXNcbiAgICogLSBhcmdzOlxuICAgKiAgIC0gZGF0ZVN0cjoge1N0cmluZ3xEYXRlfE51bWJlcn0gLSB0aGUgZGF0ZVN0ciBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gZm9ybWF0OiB7T2JqZWN0fSAtIHRoZSBmb3JtYXQgb2JqZWN0IHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBsb2NhbGU6IHtPYmplY3R9IC0gbG9jYWxlIGZvciB0aGUgbGFuZ3VhZ2Ugc3BlY2lmaWVkIGJ5IGBsYW5nYFxuICAgKiAtIHJldHVybjpcbiAgICogICAgIHtEYXRlfE51bWJlcn0gcGFyc2VkIGRhdGUgb3IgaXRzIHRpbWUgdmFsdWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbbGFuZz1lbl0gLSBsYW5ndWFnZSBjb2RlIGZvciB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRpbWUgdmFsdWUgb2YgcGFyc2VkIGRhdGVcbiAgICovXG4gIHN0YXRpYyBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsYW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlU3RyLCBmb3JtYXQsIGxhbmcgJiYgbG9jYWxlc1tsYW5nXSB8fCBsb2NhbGVzLmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7T2JqZWN0fSAtIEluc3RhbGxlZCBsb2NhbGVzIGluIGBbbGFuZ3VhZ2VDb2RlXTogbG9jYWxlT2JqZWN0YCBmb3JtYXRcbiAgICogZW5gOl9FbmdsaXNoIChVUylfIGlzIHByZS1pbnN0YWxsZWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0IGxvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGxvY2FsZXM7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Jvb2xlYW59IC0gV2hldGhlciB0aGUgcGlja2VyIGVsZW1lbnQgaXMgc2hvd24uIGB0cnVlYCB3aG5lIHNob3duXG4gICAqL1xuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiAhISh0aGlzLnBpY2tlciAmJiB0aGlzLnBpY2tlci5hY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gLSBET00gb2JqZWN0IG9mIHBpY2tlciBlbGVtZW50XG4gICAqL1xuICBnZXQgcGlja2VyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5waWNrZXIgPyB0aGlzLnBpY2tlci5lbGVtZW50IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgdmFsdWVzIHRvIHRoZSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZyBvcHRpb25zIHRvIHVwZGF0ZVxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgcGlja2VyID0gdGhpcy5waWNrZXI7XG4gICAgY29uc3QgbmV3T3B0aW9ucyA9IHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIHRoaXMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgbmV3T3B0aW9ucyk7XG4gICAgcGlja2VyLnNldE9wdGlvbnMobmV3T3B0aW9ucyk7XG5cbiAgICByZWZyZXNoVUkodGhpcywgMyk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICovXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRGaWVsZCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRGaWVsZC5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzQWN0aXZlRWxlbWVudCh0aGlzLmlucHV0RmllbGQpICYmICF0aGlzLmNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCkge1xuICAgICAgICB0aGlzLl9zaG93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnB1dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zaG93aW5nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBpY2tlci5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyXG4gICAqL1xuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5waWNrZXIudXBkYXRlKCkuY2hhbmdlVmlldyh0aGlzLmNvbmZpZy5zdGFydFZpZXcpLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIERhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGV0ZXBpY2tlcn0gLSB0aGUgaW5zdGFuY2UgZGVzdHJveWVkXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHVucmVnaXN0ZXJMaXN0ZW5lcnModGhpcyk7XG4gICAgdGhpcy5waWNrZXIuZGV0YWNoKCk7XG4gICAgaWYgKCF0aGlzLmlubGluZSkge1xuICAgICAgdGhpcy5pbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2RhdGVwaWNrZXItaW5wdXQnKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRlcGlja2VyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2VsZWN0ZWQgZGF0ZShzKVxuICAgKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYSBEYXRlIG9iamVjdCBvZiBzZWxlY3RlZCBkYXRlIGJ5IGRlZmF1bHQsIGFuZCByZXR1cm5zXG4gICAqIGFuIGFycmF5IG9mIHNlbGVjdGVkIGRhdGVzIGluIG11bHRpZGF0ZSBtb2RlLiBJZiBmb3JtYXQgc3RyaW5nIGlzIHBhc3NlZCxcbiAgICogaXQgcmV0dXJucyBkYXRlIHN0cmluZyhzKSBmb3JtYXR0ZWQgaW4gZ2l2ZW4gZm9ybWF0LlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtmb3JtYXRdIC0gRm9ybWF0IHN0cmluZyB0byBzdHJpbmdpZnkgdGhlIGRhdGUocylcbiAgICogQHJldHVybiB7RGF0ZXxTdHJpbmd8RGF0ZVtdfFN0cmluZ1tdfSAtIHNlbGVjdGVkIGRhdGUocyksIG9yIGlmIG5vbmUgaXNcbiAgICogc2VsZWN0ZWQsIGVtcHR5IGFycmF5IGluIG11bHRpZGF0ZSBtb2RlIGFuZCB1bnRpdGxlZCBpbiBzaWdsZWRhdGUgbW9kZVxuICAgKi9cbiAgZ2V0RGF0ZShmb3JtYXQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZvcm1hdFxuICAgICAgPyBkYXRlID0+IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLmNvbmZpZy5sb2NhbGUpXG4gICAgICA6IGRhdGUgPT4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubXVsdGlkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlcy5tYXAoY2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5kYXRlc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RlZCBkYXRlKHMpXG4gICAqXG4gICAqIEluIG11bHRpZGF0ZSBtb2RlLCB5b3UgY2FuIHBhc3MgbXVsdGlwbGUgZGF0ZXMgYXMgYSBzZXJpZXMgb2YgYXJndW1lbnRzXG4gICAqIG9yIGFuIGFycmF5LiAoU2luY2UgZWFjaCBkYXRlIGlzIHBhcnNlZCBpbmRpdmlkdWFsbHksIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBkYXRlcyBkb2Vzbid0IGhhdmUgdG8gYmUgdGhlIHNhbWUuKVxuICAgKiBUaGUgZ2l2ZW4gZGF0ZXMgYXJlIHVzZWQgdG8gdG9nZ2xlIHRoZSBzZWxlY3Qgc3RhdHVzIG9mIGVhY2ggZGF0ZS4gVGhlXG4gICAqIG51bWJlciBvZiBzZWxlY3RlZCBkYXRlcyBpcyBrZXB0IGZyb20gZXhjZWVkaW5nIHRoZSBsZW5ndGggc2V0IHRvXG4gICAqIG1heE51bWJlck9mRGF0ZXMuXG4gICAqXG4gICAqIFdpdGggY2xlYXI6IHRydWUgb3B0aW9uLCB0aGUgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGNsZWFyIHRoZSBzZWxlY3Rpb25cbiAgICogYW5kIHRvIHJlcGxhY2UgdGhlIHNlbGVjdGlvbiBpbnN0ZWFkIG9mIHRvZ2dsaW5nIGluIG11bHRpZGF0ZSBtb2RlLlxuICAgKiBJZiB0aGUgb3B0aW9uIGlzIHBhc3NlZCB3aXRoIG5vIGRhdGUgYXJndW1lbnRzIG9yIGFuIGVtcHR5IGRhdGVzIGFycmF5LFxuICAgKiBpdCB3b3JrcyBhcyBcImNsZWFyXCIgKGNsZWFyIHRoZSBzZWxlY3Rpb24gdGhlbiBzZXQgbm90aGluZyksIGFuZCBpZiB0aGVcbiAgICogb3B0aW9uIGlzIHBhc3NlZCB3aXRoIG5ldyBkYXRlcyB0byBzZWxlY3QsIGl0IHdvcmtzIGFzIFwicmVwbGFjZVwiIChjbGVhclxuICAgKiB0aGUgc2VsZWN0aW9uIHRoZW4gc2V0IHRoZSBnaXZlbiBkYXRlcylcbiAgICpcbiAgICogV2hlbiByZW5kZXI6IGZhbHNlIG9wdGlvbiBpcyB1c2VkLCB0aGUgbWV0aG9kIG9taXRzIHJlLXJlbmRlcmluZyB0aGVcbiAgICogcGlja2VyIGVsZW1lbnQuIEluIHRoaXMgY2FzZSwgeW91IG5lZWQgdG8gY2FsbCByZWZyZXNoKCkgbWV0aG9kIGxhdGVyIGluXG4gICAqIG9yZGVyIGZvciB0aGUgcGlja2VyIGVsZW1lbnQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcy4gVGhlIGlucHV0IGZpZWxkIGlzXG4gICAqIHJlZnJlc2hlZCBhbHdheXMgcmVnYXJkbGVzcyBvZiB0aGlzIG9wdGlvbi5cbiAgICpcbiAgICogV2hlbiBpbnZhbGlkICh1bnBhcnNhYmxlLCByZXBlYXRlZCwgZGlzYWJsZWQgb3Igb3V0LW9mLXJhbmdlKSBkYXRlcyBhcmVcbiAgICogcGFzc2VkLCB0aGUgbWV0aG9kIGlnbm9yZXMgdGhlbSBhbmQgYXBwbGllcyBvbmx5IHZhbGlkIG9uZXMuIEluIHRoZSBjYXNlXG4gICAqIHRoYXQgYWxsIHRoZSBnaXZlbiBkYXRlcyBhcmUgaW52YWxpZCwgd2hpY2ggaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIHBhc3NpbmdcbiAgICogbm8gZGF0ZXMsIHRoZSBtZXRob2QgY29uc2lkZXJzIGl0IGFzIGFuIGVycm9yIGFuZCBsZWF2ZXMgdGhlIHNlbGVjdGlvblxuICAgKiB1bnRvdWNoZWQuIChUaGUgaW5wdXQgZmllbGQgYWxzbyByZW1haW5zIHVudG91Y2hlZCB1bmxlc3MgcmV2ZXJ0OiB0cnVlXG4gICAqIG9wdGlvbiBpcyB1c2VkLilcbiAgICpcbiAgICogQHBhcmFtIHsuLi4oRGF0ZXxOdW1iZXJ8U3RyaW5nKXxBcnJheX0gW2RhdGVzXSAtIERhdGUgc3RyaW5ncywgRGF0ZVxuICAgKiBvYmplY3RzLCB0aW1lIHZhbHVlcyBvciBtaXggb2YgdGhvc2UgZm9yIG5ldyBzZWxlY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSBjbGVhcjoge2Jvb2xlYW59IC0gV2hldGhlciB0byBjbGVhciB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uXG4gICAqICAgICBkZWZ1YWx0OiBmYWxzZVxuICAgKiAtIHJlbmRlcjoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZS1yZW5kZXIgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqICAgICBkZWZhdWx0OiB0cnVlXG4gICAqIC0gYXV0b2hpZGU6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gaGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgYWZ0ZXIgcmUtcmVuZGVyXG4gICAqICAgICBJZ25vcmVkIHdoZW4gdXNlZCB3aXRoIHJlbmRlcjogZmFsc2VcbiAgICogICAgIGRlZmF1bHQ6IGNvbmZpZy5hdXRvaGlkZVxuICAgKiAtIHJldmVydDoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZWZyZXNoIHRoZSBpbnB1dCBmaWVsZCB3aGVuIGFsbCB0aGVcbiAgICogICAgIHBhc3NlZCBkYXRlcyBhcmUgaW52YWxpZFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHNldERhdGUoLi4uYXJncykge1xuICAgIGNvbnN0IGRhdGVzID0gWy4uLmFyZ3NdO1xuICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICBjb25zdCBsYXN0QXJnID0gbGFzdEl0ZW1PZihhcmdzKTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGFzdEFyZyA9PT0gJ29iamVjdCdcbiAgICAgICYmICFBcnJheS5pc0FycmF5KGxhc3RBcmcpXG4gICAgICAmJiAhKGxhc3RBcmcgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgJiYgbGFzdEFyZ1xuICAgICkge1xuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLCBkYXRlcy5wb3AoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXREYXRlcyA9IEFycmF5LmlzQXJyYXkoZGF0ZXNbMF0pID8gZGF0ZXNbMF0gOiBkYXRlcztcbiAgICBzZXREYXRlKHRoaXMsIGlucHV0RGF0ZXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgZGF0ZShzKSB3aXRoIGlucHV0IGZpZWxkJ3MgdmFsdWVcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyXG4gICAqXG4gICAqIFRoZSBpbnB1dCBmaWVsZCB3aWxsIGJlIHJlZnJlc2hlZCB3aXRoIHByb3Blcmx5IGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cbiAgICpcbiAgICogSW4gdGhlIGNhc2UgdGhhdCBhbGwgdGhlIGVudGVyZWQgZGF0ZXMgYXJlIGludmFsaWQgKHVucGFyc2FibGUsIHJlcGVhdGVkLFxuICAgKiBkaXNhYmxlZCBvciBvdXQtb2YtcmFuZ2UpLCB3aGl4aCBpcyBkaXN0aW5ndWlzaGVkIGZyb20gZW1wdHkgaW5wdXQgZmllbGQsXG4gICAqIHRoZSBtZXRob2QgbGVhdmVzIHRoZSBpbnB1dCBmaWVsZCB1bnRvdWNoZWQgYXMgd2VsbCBhcyB0aGUgc2VsZWN0aW9uIGJ5XG4gICAqIGRlZmF1bHQuIElmIHJldmVydDogdHJ1ZSBvcHRpb24gaXMgdXNlZCBpbiB0aGlzIGNhc2UsIHRoZSBpbnB1dCBmaWVsZCBpc1xuICAgKiByZWZyZXNoZWQgd2l0aCB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSBhdXRvaGlkZToge2Jvb2xlYW59IC0gd2hldGhlciB0byBoaWRlIHRoZSBwaWNrZXIgZWxlbWVudCBhZnRlciByZWZyZXNoXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKiAtIHJldmVydDoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZWZyZXNoIHRoZSBpbnB1dCBmaWVsZCB3aGVuIGFsbCB0aGVcbiAgICogICAgIHBhc3NlZCBkYXRlcyBhcmUgaW52YWxpZFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHVwZGF0ZShvcHRpb25zID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyB8fCB7fSwge2NsZWFyOiB0cnVlLCByZW5kZXI6IHRydWV9KTtcbiAgICBjb25zdCBpbnB1dERhdGVzID0gc3RyaW5nVG9BcnJheSh0aGlzLmlucHV0RmllbGQudmFsdWUsIHRoaXMuY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xuICAgIHNldERhdGUodGhpcywgaW5wdXREYXRlcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgcGlja2VyIGVsZW1lbnQgYW5kIHRoZSBhc3NvY2lhdGVkIGlucHV0IGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdGFyZ2V0XSAtIHRhcmdldCBpdGVtIHdoZW4gcmVmcmVzaGluZyBvbmUgaXRlbSBvbmx5XG4gICAqICdwaWNrZXInIG9yICdpbnB1dCdcbiAgICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VSZW5kZXJdIC0gd2hldGhlciB0byByZS1yZW5kZXIgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqIHJlZ2FyZGxlc3Mgb2YgaXRzIHN0YXRlIGluc3RlYWQgb2Ygb3B0aW1pemVkIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2godGFyZ2V0ID0gdW5kZWZpbmVkLCBmb3JjZVJlbmRlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgZm9yY2VSZW5kZXIgPSB0YXJnZXQ7XG4gICAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IG1vZGU7XG4gICAgaWYgKHRhcmdldCA9PT0gJ3BpY2tlcicpIHtcbiAgICAgIG1vZGUgPSAyO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnaW5wdXQnKSB7XG4gICAgICBtb2RlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kZSA9IDM7XG4gICAgfVxuICAgIHJlZnJlc2hVSSh0aGlzLCBtb2RlLCAhZm9yY2VSZW5kZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVudGVyIGVkaXQgbW9kZVxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXIgb3Igd2hlbiB0aGUgcGlja2VyIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAqL1xuICBlbnRlckVkaXRNb2RlKCkge1xuICAgIGlmICh0aGlzLmlubGluZSB8fCAhdGhpcy5waWNrZXIuYWN0aXZlIHx8IHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gICAgdGhpcy5pbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2luLWVkaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGl0IGZyb20gZWRpdCBtb2RlXG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSB1cGRhdGU6IHtib29sZWFufSAtIHdoZXRoZXIgdG8gY2FsbCB1cGRhdGUoKSBhZnRlciBleGl0aW5nXG4gICAqICAgICBJZiBmYWxzZSwgaW5wdXQgZmllbGQgaXMgcmV2ZXJ0IHRvIHRoZSBleGlzdGluZyBzZWxlY3Rpb25cbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBleGl0RWRpdE1vZGUob3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmlubGluZSB8fCAhdGhpcy5lZGl0TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7dXBkYXRlOiBmYWxzZX0sIG9wdGlvbnMpO1xuICAgIGRlbGV0ZSB0aGlzLmVkaXRNb2RlO1xuICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbi1lZGl0Jyk7XG4gICAgaWYgKG9wdHMudXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZShvcHRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7bGltaXRUb1JhbmdlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHthZGRNb250aHMsIGFkZFllYXJzfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KGRhdGVwaWNrZXIsIHR5cGUpIHtcbiAgY29uc3QgZGV0YWlsID0ge1xuICAgIGRhdGU6IGRhdGVwaWNrZXIuZ2V0RGF0ZSgpLFxuICAgIHZpZXdEYXRlOiBuZXcgRGF0ZShkYXRlcGlja2VyLnBpY2tlci52aWV3RGF0ZSksXG4gICAgdmlld0lkOiBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50Vmlldy5pZCxcbiAgICBkYXRlcGlja2VyLFxuICB9O1xuICBkYXRlcGlja2VyLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodHlwZSwge2RldGFpbH0pKTtcbn1cblxuLy8gZGlyZWN0aW9uOiAtMSAodG8gcHJldmlvdXMpLCAxICh0byBuZXh0KVxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIGRpcmVjdGlvbikge1xuICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSBkYXRlcGlja2VyLmNvbmZpZztcbiAgY29uc3Qge2N1cnJlbnRWaWV3LCB2aWV3RGF0ZX0gPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgbGV0IG5ld1ZpZXdEYXRlO1xuICBzd2l0Y2ggKGN1cnJlbnRWaWV3LmlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgbmV3Vmlld0RhdGUgPSBhZGRNb250aHModmlld0RhdGUsIGRpcmVjdGlvbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBuZXdWaWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5ld1ZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbiAqIGN1cnJlbnRWaWV3Lm5hdlN0ZXApO1xuICB9XG4gIG5ld1ZpZXdEYXRlID0gbGltaXRUb1JhbmdlKG5ld1ZpZXdEYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgZGF0ZXBpY2tlci5waWNrZXIuY2hhbmdlRm9jdXMobmV3Vmlld0RhdGUpLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVmlldyhkYXRlcGlja2VyKSB7XG4gIGNvbnN0IHZpZXdJZCA9IGRhdGVwaWNrZXIucGlja2VyLmN1cnJlbnRWaWV3LmlkO1xuICBpZiAodmlld0lkID09PSBkYXRlcGlja2VyLmNvbmZpZy5tYXhWaWV3KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRhdGVwaWNrZXIucGlja2VyLmNoYW5nZVZpZXcodmlld0lkICsgMSkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvY3VzKGRhdGVwaWNrZXIpIHtcbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnVwZGF0ZU9uQmx1cikge1xuICAgIGRhdGVwaWNrZXIudXBkYXRlKHtyZXZlcnQ6IHRydWV9KTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlcGlja2VyLnJlZnJlc2goJ2lucHV0Jyk7XG4gIH1cbiAgZGF0ZXBpY2tlci5oaWRlKCk7XG59XG4iLCJpbXBvcnQge2lzSW5SYW5nZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7aXNBY3RpdmVFbGVtZW50fSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCB7YWRkRGF5cywgYWRkTW9udGhzLCBhZGRZZWFycywgc3RhcnRPZlllYXJQZXJpb2R9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7Z29Ub1ByZXZPck5leHQsIHN3aXRjaFZpZXcsIHVuZm9jdXN9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcblxuLy8gRmluZCB0aGUgY2xvc2VzdCBkYXRlIHRoYXQgZG9lc24ndCBtZWV0IHRoZSBjb25kaXRpb24gZm9yIHVuYXZhaWxhYmxlIGRhdGVcbi8vIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vIGF2YWlsYWJsZSBkYXRlIGlzIGZvdW5kXG4vLyBhZGRGbjogZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBuZXh0IGRhdGVcbi8vICAgLSBhcmdzOiB0aW1lIHZhbHVlLCBhbW91bnRcbi8vIGluY3JlYXNlOiBhbW91bnQgdG8gcGFzcyB0byBhZGRGblxuLy8gdGVzdEZuOiBmdW5jdGlvbiB0byB0ZXN0IHRoZSB1bmF2YWlsYWJsaXR5IG9mIHRoZSBkYXRlXG4vLyAgIC0gYXJnczogdGltZSB2YWx1ZTsgcmV0dW46IHRydWUgaWYgdW5hdmFpbGFibGVcbmZ1bmN0aW9uIGZpbmROZXh0QXZhaWxhYmxlT25lKGRhdGUsIGFkZEZuLCBpbmNyZWFzZSwgdGVzdEZuLCBtaW4sIG1heCkge1xuICBpZiAoIWlzSW5SYW5nZShkYXRlLCBtaW4sIG1heCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRlc3RGbihkYXRlKSkge1xuICAgIGNvbnN0IG5ld0RhdGUgPSBhZGRGbihkYXRlLCBpbmNyZWFzZSk7XG4gICAgcmV0dXJuIGZpbmROZXh0QXZhaWxhYmxlT25lKG5ld0RhdGUsIGFkZEZuLCBpbmNyZWFzZSwgdGVzdEZuLCBtaW4sIG1heCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIGRpcmVjdGlvbjogLTEgKGxlZnQvdXApLCAxIChyaWdodC9kb3duKVxuLy8gdmVydGljYWw6IHRydWUgZm9yIHVwL2Rvd24sIGZhbHNlIGZvciBsZWZ0L3JpZ2h0XG5mdW5jdGlvbiBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgZGlyZWN0aW9uLCB2ZXJ0aWNhbCkge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3QgY3VycmVudFZpZXcgPSBwaWNrZXIuY3VycmVudFZpZXc7XG4gIGNvbnN0IHN0ZXAgPSBjdXJyZW50Vmlldy5zdGVwIHx8IDE7XG4gIGxldCB2aWV3RGF0ZSA9IHBpY2tlci52aWV3RGF0ZTtcbiAgbGV0IGFkZEZuO1xuICBsZXQgdGVzdEZuO1xuICBzd2l0Y2ggKGN1cnJlbnRWaWV3LmlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIHZpZXdEYXRlID0gYWRkRGF5cyh2aWV3RGF0ZSwgZGlyZWN0aW9uICogNyk7XG4gICAgICB9IGVsc2UgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICB2aWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0RhdGUgPSBhZGREYXlzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgYWRkRm4gPSBhZGREYXlzO1xuICAgICAgdGVzdEZuID0gKGRhdGUpID0+IGN1cnJlbnRWaWV3LmRpc2FibGVkLmluY2x1ZGVzKGRhdGUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgdmlld0RhdGUgPSBhZGRNb250aHModmlld0RhdGUsIHZlcnRpY2FsID8gZGlyZWN0aW9uICogNCA6IGRpcmVjdGlvbik7XG4gICAgICBhZGRGbiA9IGFkZE1vbnRocztcbiAgICAgIHRlc3RGbiA9IChkYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IHt5ZWFyLCBkaXNhYmxlZH0gPSBjdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIGR0LmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZGlzYWJsZWQuaW5jbHVkZXMoZHQuZ2V0TW9udGgoKSk7XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbiAqICh2ZXJ0aWNhbCA/IDQgOiAxKSAqIHN0ZXApO1xuICAgICAgYWRkRm4gPSBhZGRZZWFycztcbiAgICAgIHRlc3RGbiA9IGRhdGUgPT4gY3VycmVudFZpZXcuZGlzYWJsZWQuaW5jbHVkZXMoc3RhcnRPZlllYXJQZXJpb2QoZGF0ZSwgc3RlcCkpO1xuICB9XG4gIHZpZXdEYXRlID0gZmluZE5leHRBdmFpbGFibGVPbmUoXG4gICAgdmlld0RhdGUsXG4gICAgYWRkRm4sXG4gICAgZGlyZWN0aW9uIDwgMCA/IC1zdGVwIDogc3RlcCxcbiAgICB0ZXN0Rm4sXG4gICAgY3VycmVudFZpZXcubWluRGF0ZSxcbiAgICBjdXJyZW50Vmlldy5tYXhEYXRlXG4gICk7XG4gIGlmICh2aWV3RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGlja2VyLmNoYW5nZUZvY3VzKHZpZXdEYXRlKS5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25LZXlkb3duKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGtleSA9IGV2LmtleTtcbiAgaWYgKGtleSA9PT0gJ1RhYicpIHtcbiAgICB1bmZvY3VzKGRhdGVwaWNrZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCB7aWQsIGlzTWluVmlld30gPSBwaWNrZXIuY3VycmVudFZpZXc7XG4gIGlmICghcGlja2VyLmFjdGl2ZSkge1xuICAgIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBwaWNrZXIuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGRhdGVwaWNrZXIudXBkYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgcGlja2VyLnNob3coKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0ZXBpY2tlci5lZGl0TW9kZSkge1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGRhdGVwaWNrZXIuZXhpdEVkaXRNb2RlKHt1cGRhdGU6IHRydWUsIGF1dG9oaWRlOiBkYXRlcGlja2VyLmNvbmZpZy5hdXRvaGlkZX0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAtMSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgMSk7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgMSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgc3dpdGNoVmlldyhkYXRlcGlja2VyKTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAtMSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBpZiAoZXYuc2hpZnRLZXkgJiYgIWV2LmN0cmxLZXkgJiYgIWV2Lm1ldGFLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAxLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGlzTWluVmlldykge1xuICAgICAgICBkYXRlcGlja2VyLnNldERhdGUocGlja2VyLnZpZXdEYXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGlja2VyLmNoYW5nZVZpZXcoaWQgLSAxKS5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgcGlja2VyLmhpZGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ0JhY2tzcGFjZSdcbiAgICAgICAgfHwga2V5ID09PSAnRGVsZXRlJ1xuICAgICAgICB8fCAoa2V5Lmxlbmd0aCA9PT0gMSAmJiAhZXYuY3RybEtleSAmJiAhZXYubWV0YUtleSlcbiAgICAgICkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9jdXMoZGF0ZXBpY2tlcikge1xuICBpZiAoZGF0ZXBpY2tlci5jb25maWcuc2hvd09uRm9jdXMgJiYgIWRhdGVwaWNrZXIuX3Nob3dpbmcpIHtcbiAgICBkYXRlcGlja2VyLnNob3coKTtcbiAgfVxufVxuXG4vLyBmb3IgdGhlIHByZXZlbnRpb24gZm9yIGVudGVyaW5nIGVkaXQgbW9kZSB3aGlsZSBnZXR0aW5nIGZvY3VzIG9uIGNsaWNrXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZWRvd24oZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3QgZWwgPSBldi50YXJnZXQ7XG4gIGlmIChkYXRlcGlja2VyLnBpY2tlci5hY3RpdmUgfHwgZGF0ZXBpY2tlci5jb25maWcuc2hvd09uQ2xpY2spIHtcbiAgICBlbC5fYWN0aXZlID0gaXNBY3RpdmVFbGVtZW50KGVsKTtcbiAgICBlbC5fY2xpY2tpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlbGV0ZSBlbC5fYWN0aXZlO1xuICAgICAgZGVsZXRlIGVsLl9jbGlja2luZztcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja0lucHV0KGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGVsID0gZXYudGFyZ2V0O1xuICBpZiAoIWVsLl9jbGlja2luZykge1xuICAgIHJldHVybjtcbiAgfVxuICBjbGVhclRpbWVvdXQoZWwuX2NsaWNraW5nKTtcbiAgZGVsZXRlIGVsLl9jbGlja2luZztcblxuICBpZiAoZWwuX2FjdGl2ZSkge1xuICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICB9XG4gIGRlbGV0ZSBlbC5fYWN0aXZlO1xuXG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy5zaG93T25DbGljaykge1xuICAgIGRhdGVwaWNrZXIuc2hvdygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblBhc3RlKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGlmIChldi5jbGlwYm9hcmREYXRhLnR5cGVzLmluY2x1ZGVzKCd0ZXh0L3BsYWluJykpIHtcbiAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtpc0FjdGl2ZUVsZW1lbnR9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IHtmaW5kRWxlbWVudEluRXZlbnRQYXRofSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHt1bmZvY3VzfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbi8vIGZvciB0aGUgYGRvY3VtZW50YCB0byBkZWxlZ2F0ZSB0aGUgZXZlbnRzIGZyb20gb3V0c2lkZSB0aGUgcGlja2VyL2lucHV0IGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja091dHNpZGUoZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3Qge2VsZW1lbnQsIHBpY2tlcn0gPSBkYXRlcGlja2VyO1xuICAvLyBjaGVjayBib3RoIHBpY2tlcidzIGFuZCBpbnB1dCdzIGFjdGl2ZW5lc3MgdG8gbWFrZSB1cGRhdGVPbkJsdXIgd29yayBpblxuICAvLyB0aGUgY2FzZXMgd2hlcmUuLi5cbiAgLy8gLSBwaWNrZXIgaXMgaGlkZGVuIGJ5IEVTQyBrZXkgcHJlc3Mg4oaSIGlucHV0IHN0YXlzIGZvY3VzZWRcbiAgLy8gLSBpbnB1dCBpcyB1bmZvY3VzZWQgYnkgY2xvc2luZyBtb2JpbGUga2V5Ym9hcmQg4oaSIHBpa2VyIGlzIGtlcHQgc2hvd25cbiAgaWYgKCFwaWNrZXIuYWN0aXZlICYmICFpc0FjdGl2ZUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGlja2VyRWxlbSA9IHBpY2tlci5lbGVtZW50O1xuICBpZiAoZmluZEVsZW1lbnRJbkV2ZW50UGF0aChldiwgZWwgPT4gZWwgPT09IGVsZW1lbnQgfHwgZWwgPT09IHBpY2tlckVsZW0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHVuZm9jdXMoZGF0ZXBpY2tlcik7XG59XG4iLCJpbXBvcnQge3RvZGF5LCBhZGRNb250aHMsIGFkZFllYXJzfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge2ZpbmRFbGVtZW50SW5FdmVudFBhdGh9IGZyb20gJy4uL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge2dvVG9QcmV2T3JOZXh0LCBzd2l0Y2hWaWV3fSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbmZ1bmN0aW9uIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIHNlbGVjdGlvbikge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZShwaWNrZXIudmlld0RhdGUpO1xuICBjb25zdCB2aWV3SWQgPSBwaWNrZXIuY3VycmVudFZpZXcuaWQ7XG4gIGNvbnN0IG5ld0RhdGUgPSB2aWV3SWQgPT09IDFcbiAgICA/IGFkZE1vbnRocyh2aWV3RGF0ZSwgc2VsZWN0aW9uIC0gdmlld0RhdGUuZ2V0TW9udGgoKSlcbiAgICA6IGFkZFllYXJzKHZpZXdEYXRlLCBzZWxlY3Rpb24gLSB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuICBwaWNrZXIuY2hhbmdlRm9jdXMobmV3RGF0ZSkuY2hhbmdlVmlldyh2aWV3SWQgLSAxKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tUb2RheUJ0bihkYXRlcGlja2VyKSB7XG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IHRvZGF5KCk7XG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy50b2RheUJ0bk1vZGUgPT09IDEpIHtcbiAgICBpZiAoZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShjdXJyZW50RGF0ZSwge3JlbmRlcjogZmFsc2V9KTtcbiAgICBwaWNrZXIudXBkYXRlKCk7XG4gIH1cbiAgaWYgKHBpY2tlci52aWV3RGF0ZSAhPT0gY3VycmVudERhdGUpIHtcbiAgICBwaWNrZXIuY2hhbmdlRm9jdXMoY3VycmVudERhdGUpO1xuICB9XG4gIHBpY2tlci5jaGFuZ2VWaWV3KDApLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja0NsZWFyQnRuKGRhdGVwaWNrZXIpIHtcbiAgZGF0ZXBpY2tlci5zZXREYXRlKHtjbGVhcjogdHJ1ZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1ZpZXdTd2l0Y2goZGF0ZXBpY2tlcikge1xuICBzd2l0Y2hWaWV3KGRhdGVwaWNrZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1ByZXZCdG4oZGF0ZXBpY2tlcikge1xuICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAtMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrTmV4dEJ0bihkYXRlcGlja2VyKSB7XG4gIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIDEpO1xufVxuXG4vLyBGb3IgdGhlIHBpY2tlcidzIG1haW4gYmxvY2sgdG8gZGVsZWdldGUgdGhlIGV2ZW50cyBmcm9tIGBkYXRlcGlja2VyLWNlbGxgc1xuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tWaWV3KGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsICcuZGF0ZXBpY2tlci1jZWxsJyk7XG4gIGlmICghdGFyZ2V0IHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7aWQsIGlzTWluVmlld30gPSBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50VmlldztcbiAgaWYgKGlzTWluVmlldykge1xuICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShOdW1iZXIodGFyZ2V0LmRhdGFzZXQuZGF0ZSkpO1xuICB9IGVsc2UgaWYgKGlkID09PSAxKSB7XG4gICAgZ29Ub1NlbGVjdGVkTW9udGhPclllYXIoZGF0ZXBpY2tlciwgTnVtYmVyKHRhcmdldC5kYXRhc2V0Lm1vbnRoKSk7XG4gIH0gZWxzZSB7XG4gICAgZ29Ub1NlbGVjdGVkTW9udGhPclllYXIoZGF0ZXBpY2tlciwgTnVtYmVyKHRhcmdldC5kYXRhc2V0LnllYXIpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZWRvd25QaWNrZXIoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cbiIsIi8vIGRlZmF1bHQgbG9jYWxlc1xuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSB7XG4gIGVuOiB7XG4gICAgZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXG4gICAgZGF5c1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgZGF5c01pbjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gICAgbW9udGhzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcbiAgICBtb250aHNTaG9ydDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgIHRvZGF5OiBcIlRvZGF5XCIsXG4gICAgY2xlYXI6IFwiQ2xlYXJcIixcbiAgICB0aXRsZUZvcm1hdDogXCJNTSB5XCJcbiAgfVxufTtcbiIsImltcG9ydCB7c3RyaXBUaW1lLCB0b2RheX0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7bGFzdEl0ZW1PZn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIHBhdHRlcm4gZm9yIGZvcm1hdCBwYXJ0c1xuZXhwb3J0IGNvbnN0IHJlRm9ybWF0VG9rZW5zID0gL2RkP3xERD98bW0/fE1NP3x5eT8oPzp5eSk/Lztcbi8vIHBhdHRlcm4gZm9yIG5vbiBkYXRlIHBhcnRzXG5leHBvcnQgY29uc3QgcmVOb25EYXRlUGFydHMgPSAvW1xccyEtLzotQFstYHstfuW5tOaciOaXpV0rLztcbi8vIGNhY2hlIGZvciBwZXJzZWQgZm9ybWF0c1xubGV0IGtub3duRm9ybWF0cyA9IHt9O1xuLy8gcGFyc2UgZnVudGlvbnMgZm9yIGRhdGUgcGFydHNcbmNvbnN0IHBhcnNlRm5zID0ge1xuICB5KGRhdGUsIHllYXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkuc2V0RnVsbFllYXIocGFyc2VJbnQoeWVhciwgMTApKTtcbiAgfSxcbiAgbShkYXRlLCBtb250aCwgbG9jYWxlKSB7XG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGxldCBtb250aEluZGV4ID0gcGFyc2VJbnQobW9udGgsIDEwKSAtIDE7XG5cbiAgICBpZiAoaXNOYU4obW9udGhJbmRleCkpIHtcbiAgICAgIGlmICghbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9udGhOYW1lID0gbW9udGgudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGNvbXBhcmVOYW1lcyA9IG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgobW9udGhOYW1lKTtcbiAgICAgIC8vIGNvbXBhcmUgd2l0aCBib3RoIHNob3J0IGFuZCBmdWxsIG5hbWVzIGJlY2F1c2Ugc29tZSBsb2NhbGVzIGhhdmUgcGVyaW9kc1xuICAgICAgLy8gaW4gdGhlIHNob3J0IG5hbWVzIChub3QgZXF1YWwgdG8gdGhlIGZpcnN0IFggbGV0dGVycyBvZiB0aGUgZnVsbCBuYW1lcylcbiAgICAgIG1vbnRoSW5kZXggPSBsb2NhbGUubW9udGhzU2hvcnQuZmluZEluZGV4KGNvbXBhcmVOYW1lcyk7XG4gICAgICBpZiAobW9udGhJbmRleCA8IDApIHtcbiAgICAgICAgbW9udGhJbmRleCA9IGxvY2FsZS5tb250aHMuZmluZEluZGV4KGNvbXBhcmVOYW1lcyk7XG4gICAgICB9XG4gICAgICBpZiAobW9udGhJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdEYXRlLnNldE1vbnRoKG1vbnRoSW5kZXgpO1xuICAgIHJldHVybiBuZXdEYXRlLmdldE1vbnRoKCkgIT09IG5vcm1hbGl6ZU1vbnRoKG1vbnRoSW5kZXgpXG4gICAgICA/IG5ld0RhdGUuc2V0RGF0ZSgwKVxuICAgICAgOiBuZXdEYXRlLmdldFRpbWUoKTtcbiAgfSxcbiAgZChkYXRlLCBkYXkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkuc2V0RGF0ZShwYXJzZUludChkYXksIDEwKSk7XG4gIH0sXG59O1xuLy8gZm9ybWF0IGZ1bmN0aW9ucyBmb3IgZGF0ZSBwYXJ0c1xuY29uc3QgZm9ybWF0Rm5zID0ge1xuICBkKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4gIH0sXG4gIGRkKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldERhdGUoKSwgMik7XG4gIH0sXG4gIEQoZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5kYXlzU2hvcnRbZGF0ZS5nZXREYXkoKV07XG4gIH0sXG4gIEREKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5c1tkYXRlLmdldERheSgpXTtcbiAgfSxcbiAgbShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIG1tKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgfSxcbiAgTShkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0W2RhdGUuZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gIH0sXG4gIHkoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH0sXG4gIHl5KGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldEZ1bGxZZWFyKCksIDIpLnNsaWNlKC0yKTtcbiAgfSxcbiAgeXl5eShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRGdWxsWWVhcigpLCA0KTtcbiAgfSxcbn07XG5cbi8vIGdldCBtb250aCBpbmRleCBpbiBub3JtYWwgcmFuZ2UgKDAgLSAxMSkgZnJvbSBhbnkgbnVtYmVyXG5mdW5jdGlvbiBub3JtYWxpemVNb250aChtb250aEluZGV4KSB7XG4gIHJldHVybiBtb250aEluZGV4ID4gLTEgPyBtb250aEluZGV4ICUgMTIgOiBub3JtYWxpemVNb250aChtb250aEluZGV4ICsgMTIpO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvKG51bSwgbGVuZ3RoKSB7XG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydChsZW5ndGgsICcwJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkge1xuICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcbiAgfVxuICBpZiAoZm9ybWF0IGluIGtub3duRm9ybWF0cykge1xuICAgIHJldHVybiBrbm93bkZvcm1hdHNbZm9ybWF0XTtcbiAgfVxuXG4gIC8vIHNwcml0IHRoZSBmb3JtYXQgc3RyaW5nIGludG8gcGFydHMgYW5kIHNlcHJhdG9yc1xuICBjb25zdCBzZXBhcmF0b3JzID0gZm9ybWF0LnNwbGl0KHJlRm9ybWF0VG9rZW5zKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXQubWF0Y2gobmV3IFJlZ0V4cChyZUZvcm1hdFRva2VucywgJ2cnKSk7XG4gIGlmIChzZXBhcmF0b3JzLmxlbmd0aCA9PT0gMCB8fCAhcGFydHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcbiAgfVxuXG4gIC8vIGNvbGxlY3QgZm9ybWF0IGZ1bmN0aW9ucyB1c2VkIGluIHRoZSBmb3JtYXRcbiAgY29uc3QgcGFydEZvcm1hdHRlcnMgPSBwYXJ0cy5tYXAodG9rZW4gPT4gZm9ybWF0Rm5zW3Rva2VuXSk7XG5cbiAgLy8gY29sbGVjdCBwYXJzZSBmdW5jdGlvbiBrZXlzIHVzZWQgaW4gdGhlIGZvcm1hdFxuICAvLyBpdGVyYXRlIG92ZXIgcGFyc2VGbnMnIGtleXMgaW4gb3JkZXIgdG8ga2VlcCB0aGUgb3JkZXIgb2YgdGhlIGtleXMuXG4gIGNvbnN0IHBhcnRQYXJzZXJLZXlzID0gT2JqZWN0LmtleXMocGFyc2VGbnMpLnJlZHVjZSgoa2V5cywga2V5KSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBwYXJ0cy5maW5kKHBhcnQgPT4gcGFydFswXSAhPT0gJ0QnICYmIHBhcnRbMF0udG9Mb3dlckNhc2UoKSA9PT0ga2V5KTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBrbm93bkZvcm1hdHNbZm9ybWF0XSA9IHtcbiAgICBwYXJzZXIoZGF0ZVN0ciwgbG9jYWxlKSB7XG4gICAgICBjb25zdCBkYXRlUGFydHMgPSBkYXRlU3RyLnNwbGl0KHJlTm9uRGF0ZVBhcnRzKS5yZWR1Y2UoKGR0UGFydHMsIHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwYXJ0Lmxlbmd0aCA+IDAgJiYgcGFydHNbaW5kZXhdKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0c1tpbmRleF1bMF07XG4gICAgICAgICAgaWYgKHRva2VuID09PSAnTScpIHtcbiAgICAgICAgICAgIGR0UGFydHMubSA9IHBhcnQ7XG4gICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiAhPT0gJ0QnKSB7XG4gICAgICAgICAgICBkdFBhcnRzW3Rva2VuXSA9IHBhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdFBhcnRzO1xuICAgICAgfSwge30pO1xuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgcGFydFBhcnNlcmtleXMgc28gdGhhdCB0aGUgcGFyc2luZyBpcyBtYWRlIGluIHRoZSBvZGVyXG4gICAgICAvLyBvZiB5ZWFyLCBtb250aCBhbmQgZGF5IHRvIHByZXZlbnQgdGhlIGRheSBwYXJzZXIgZnJvbSBjb3JyZWN0aW5nIGxhc3RcbiAgICAgIC8vIGRheSBvZiBtb250aCB3cm9uZ2x5XG4gICAgICByZXR1cm4gcGFydFBhcnNlcktleXMucmVkdWNlKChvcmlnRGF0ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBwYXJzZUZuc1trZXldKG9yaWdEYXRlLCBkYXRlUGFydHNba2V5XSwgbG9jYWxlKTtcbiAgICAgICAgLy8gaW5nbm9yZSB0aGUgcGFydCBmYWlsZWQgdG8gcGFyc2VcbiAgICAgICAgcmV0dXJuIGlzTmFOKG5ld0RhdGUpID8gb3JpZ0RhdGUgOiBuZXdEYXRlO1xuICAgICAgfSwgdG9kYXkoKSk7XG4gICAgfSxcbiAgICBmb3JtYXR0ZXIoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICBsZXQgZGF0ZVN0ciA9IHBhcnRGb3JtYXR0ZXJzLnJlZHVjZSgoc3RyLCBmbiwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBgJHtzZXBhcmF0b3JzW2luZGV4XX0ke2ZuKGRhdGUsIGxvY2FsZSl9YDtcbiAgICAgIH0sICcnKTtcbiAgICAgIC8vIHNlcGFyYXRvcnMnIGxlbmd0aCBpcyBhbHdheXMgcGFydHMnIGxlbmd0aCArIDEsXG4gICAgICByZXR1cm4gZGF0ZVN0ciArPSBsYXN0SXRlbU9mKHNlcGFyYXRvcnMpO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsb2NhbGUpIHtcbiAgaWYgKGRhdGVTdHIgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBkYXRlU3RyID09PSAnbnVtYmVyJykge1xuICAgIGNvbnN0IGRhdGUgPSBzdHJpcFRpbWUoZGF0ZVN0cik7XG4gICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogZGF0ZTtcbiAgfVxuICBpZiAoIWRhdGVTdHIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChkYXRlU3RyID09PSAndG9kYXknKSB7XG4gICAgcmV0dXJuIHRvZGF5KCk7XG4gIH1cblxuICBpZiAoZm9ybWF0ICYmIGZvcm1hdC50b1ZhbHVlKSB7XG4gICAgY29uc3QgZGF0ZSA9IGZvcm1hdC50b1ZhbHVlKGRhdGVTdHIsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyB1bmRlZmluZWQgOiBzdHJpcFRpbWUoZGF0ZSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KS5wYXJzZXIoZGF0ZVN0ciwgbG9jYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsb2NhbGUpIHtcbiAgaWYgKGlzTmFOKGRhdGUpIHx8ICghZGF0ZSAmJiBkYXRlICE9PSAwKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IGRhdGVPYmogPSB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGU7XG5cbiAgaWYgKGZvcm1hdC50b0Rpc3BsYXkpIHtcbiAgICByZXR1cm4gZm9ybWF0LnRvRGlzcGxheShkYXRlT2JqLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KS5mb3JtYXR0ZXIoZGF0ZU9iaiwgbG9jYWxlKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzdHJpcFRpbWUodGltZVZhbHVlKSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lVmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXkoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG4vLyBHZXQgdGhlIHRpbWUgdmFsdWUgb2YgdGhlIHN0YXJ0IG9mIGdpdmVuIGRhdGUgb3IgeWVhciwgbW9udGggYW5kIGRheVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWYWx1ZSguLi5hcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gdG9kYXkoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gc3RyaXBUaW1lKGFyZ3NbMF0pO1xuICB9XG5cbiAgLy8gdXNlIHNldEZ1bGxZZWFyKCkgdG8ga2VlcCAyLWRpZ2l0IHllYXIgZnJvbSBiZWluZyBtYXBwZWQgdG8gMTkwMC0xOTk5XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgbmV3RGF0ZS5zZXRGdWxsWWVhciguLi5hcmdzKTtcbiAgcmV0dXJuIG5ld0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2Vla3MoZGF0ZSwgYW1vdW50KSB7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGFtb3VudCAqIDcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9udGhzKGRhdGUsIGFtb3VudCkge1xuICAvLyBJZiB0aGUgZGF5IG9mIHRoZSBkYXRlIGlzIG5vdCBpbiB0aGUgbmV3IG1vbnRoLCB0aGUgbGFzdCBkYXkgb2YgdGhlIG5ld1xuICAvLyBtb250aCB3aWxsIGJlIHJldHVybmVkLiBlLmcuIEphbiAzMSArIDEgbW9udGgg4oaSIEZlYiAyOCAobm90IE1hciAwMylcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBtb250aHNUb1NldCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIGFtb3VudDtcbiAgbGV0IGV4cGVjdGVkTW9udGggPSBtb250aHNUb1NldCAlIDEyO1xuICBpZiAoZXhwZWN0ZWRNb250aCA8IDApIHtcbiAgICBleHBlY3RlZE1vbnRoICs9IDEyO1xuICB9XG5cbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuc2V0TW9udGgobW9udGhzVG9TZXQpO1xuICByZXR1cm4gbmV3RGF0ZS5nZXRNb250aCgpICE9PSBleHBlY3RlZE1vbnRoID8gbmV3RGF0ZS5zZXREYXRlKDApIDogdGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFllYXJzKGRhdGUsIGFtb3VudCkge1xuICAvLyBJZiB0aGUgZGF0ZSBpcyBGZWIgMjkgYW5kIHRoZSBuZXcgeWVhciBpcyBub3QgYSBsZWFwIHllYXIsIEZlYiAyOCBvZiB0aGVcbiAgLy8gbmV3IHllYXIgd2lsbCBiZSByZXR1cm5lZC5cbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBleHBlY3RlZE1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCB0aW1lID0gbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZXhwZWN0ZWRNb250aCA9PT0gMSAmJiBuZXdEYXRlLmdldE1vbnRoKCkgPT09IDIgPyBuZXdEYXRlLnNldERhdGUoMCkgOiB0aW1lO1xufVxuXG4vLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHR3ZW4gMiBkYXlzIG9mIHRoZSB3ZWVrXG5mdW5jdGlvbiBkYXlEaWZmKGRheSwgZnJvbSkge1xuICByZXR1cm4gKGRheSAtIGZyb20gKyA3KSAlIDc7XG59XG5cbi8vIEdldCB0aGUgZGF0ZSBvZiB0aGUgc3BlY2lmaWVkIGRheSBvZiB0aGUgd2VlayBvZiBnaXZlbiBiYXNlIGRhdGVcbmV4cG9ydCBmdW5jdGlvbiBkYXlPZlRoZVdlZWtPZihiYXNlRGF0ZSwgZGF5T2ZXZWVrLCB3ZWVrU3RhcnQgPSAwKSB7XG4gIGNvbnN0IGJhc2VEYXkgPSBuZXcgRGF0ZShiYXNlRGF0ZSkuZ2V0RGF5KCk7XG4gIHJldHVybiBhZGREYXlzKGJhc2VEYXRlLCBkYXlEaWZmKGRheU9mV2Vlaywgd2Vla1N0YXJ0KSAtIGRheURpZmYoYmFzZURheSwgd2Vla1N0YXJ0KSk7XG59XG5cbi8vIEdldCB0aGUgSVNPIHdlZWsgb2YgYSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlKSB7XG4gIC8vIHN0YXJ0IG9mIElTTyB3ZWVrIGlzIE1vbmRheVxuICBjb25zdCB0aHVPZlRoZVdlZWsgPSBkYXlPZlRoZVdlZWtPZihkYXRlLCA0LCAxKTtcbiAgLy8gMXN0IHdlZWsgPT0gdGhlIHdlZWsgd2hlcmUgdGhlIDR0aCBvZiBKYW51YXJ5IGlzIGluXG4gIGNvbnN0IGZpcnN0VGh1ID0gZGF5T2ZUaGVXZWVrT2YobmV3IERhdGUodGh1T2ZUaGVXZWVrKS5zZXRNb250aCgwLCA0KSwgNCwgMSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aHVPZlRoZVdlZWsgLSBmaXJzdFRodSkgLyA2MDQ4MDAwMDApICsgMTtcbn1cblxuLy8gR2V0IHRoZSBzdGFydCB5ZWFyIG9mIHRoZSBwZXJpb2Qgb2YgeWVhcnMgdGhhdCBpbmNsdWRlcyBnaXZlbiBkYXRlXG4vLyB5ZWFyczogbGVuZ3RoIG9mIHRoZSB5ZWFyIHBlcmlvZFxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyUGVyaW9kKGRhdGUsIHllYXJzKSB7XG4gIC8qIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWWVhcl96ZXJvI0lTT184NjAxICovXG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gTWF0aC5mbG9vcih5ZWFyIC8geWVhcnMpICogeWVhcnM7XG59XG5cbi8vIENvbnZlcnQgZGF0ZSB0byB0aGUgZmlyc3QvbGFzdCBkYXRlIG9mIHRoZSBtb250aC95ZWFyIG9mIHRoZSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gcmVndWxhcml6ZURhdGUoZGF0ZSwgdGltZVNwYW4sIHVzZUxhc3REYXRlKSB7XG4gIGlmICh0aW1lU3BhbiAhPT0gMSAmJiB0aW1lU3BhbiAhPT0gMikge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgaWYgKHRpbWVTcGFuID09PSAxKSB7XG4gICAgdXNlTGFzdERhdGVcbiAgICAgID8gbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyAxLCAwKVxuICAgICAgOiBuZXdEYXRlLnNldERhdGUoMSk7XG4gIH0gZWxzZSB7XG4gICAgdXNlTGFzdERhdGVcbiAgICAgID8gbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyAxLCAwLCAwKVxuICAgICAgOiBuZXdEYXRlLnNldE1vbnRoKDAsIDEpO1xuICB9XG4gIHJldHVybiBuZXdEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuIiwiY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWwpIHtcbiAgcmV0dXJuIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudChlbCkge1xuICByZXR1cm4gZWwucGFyZW50RWxlbWVudFxuICAgIHx8IChlbC5wYXJlbnROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGVsLnBhcmVudE5vZGUuaG9zdCA6IHVuZGVmaW5lZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGl2ZUVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIGVsLmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gZWw7XG59XG5cbi8vIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgOnZpc2JsZVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xuICByZXR1cm4gISEoZWwub2Zmc2V0V2lkdGggfHwgZWwub2Zmc2V0SGVpZ2h0IHx8IGVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYmFjayB1cCB0aGUgZXhpc3RpbmcgZGlzcGxheSBzZXR0aW5nIGluIGRhdGEtc3R5bGUtZGlzcGxheVxuICBpZiAoZWwuc3R5bGUuZGlzcGxheSkge1xuICAgIGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5ID0gZWwuc3R5bGUuZGlzcGxheTtcbiAgfVxuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWwpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuZGF0YXNldC5zdHlsZURpc3BsYXkpIHtcbiAgICAvLyByZXN0b3JlIGJhY2tlZC11cCBkaXNwYXkgcHJvcGVydHlcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuZGF0YXNldC5zdHlsZURpc3BsYXk7XG4gICAgZGVsZXRlIGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5O1xuICB9IGVsc2Uge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlDaGlsZE5vZGVzKGVsKSB7XG4gIGlmIChlbC5maXJzdENoaWxkKSB7XG4gICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gICAgZW1wdHlDaGlsZE5vZGVzKGVsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoZWwsIG5ld0NoaWxkTm9kZXMpIHtcbiAgZW1wdHlDaGlsZE5vZGVzKGVsKTtcbiAgaWYgKG5ld0NoaWxkTm9kZXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQobmV3Q2hpbGROb2Rlcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5ld0NoaWxkTm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKG5ld0NoaWxkTm9kZXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Q2hpbGROb2Rlcy5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbmV3Q2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBlbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgbGlzdGVuZXJSZWdpc3RyeSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB7YWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lcn0gPSBFdmVudFRhcmdldC5wcm90b3R5cGU7XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyB0byBhIGtleSBvYmplY3Rcbi8vIGxpc3RlbmVyczogYXJyYXkgb2YgbGlzdGVuZXIgZGVmaW5pdGlvbnM7XG4vLyAgIC0gZWFjaCBkZWZpbml0aW9uIG11c3QgYmUgYSBmbGF0IGFycmF5IG9mIGV2ZW50IHRhcmdldCBhbmQgdGhlIGFyZ3VtZW50c1xuLy8gICAgIHVzZWQgdG8gY2FsbCBhZGRFdmVudExpc3RlbmVyKCkgb24gdGhlIHRhcmdldFxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXJzKGtleU9iaiwgbGlzdGVuZXJzKSB7XG4gIGxldCByZWdpc3RlcmVkID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQoa2V5T2JqKTtcbiAgaWYgKCFyZWdpc3RlcmVkKSB7XG4gICAgcmVnaXN0ZXJlZCA9IFtdO1xuICAgIGxpc3RlbmVyUmVnaXN0cnkuc2V0KGtleU9iaiwgcmVnaXN0ZXJlZCk7XG4gIH1cbiAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lci5jYWxsKC4uLmxpc3RlbmVyKTtcbiAgICByZWdpc3RlcmVkLnB1c2gobGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJMaXN0ZW5lcnMoa2V5T2JqKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSBsaXN0ZW5lclJlZ2lzdHJ5LmdldChrZXlPYmopO1xuICBpZiAoIWxpc3RlbmVycykge1xuICAgIHJldHVybjtcbiAgfVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwoLi4ubGlzdGVuZXIpO1xuICB9KTtcbiAgbGlzdGVuZXJSZWdpc3RyeS5kZWxldGUoa2V5T2JqKTtcbn1cblxuLy8gRXZlbnQuY29tcG9zZWRQYXRoKCkgcG9seWZpbGwgZm9yIEVkZ2Vcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2tsZWluZnJldW5kL2U5Nzg3ZDczNzc2YzBlMzc1MGRjZmNkYzg5ZjEwMGVjXG5pZiAoIUV2ZW50LnByb3RvdHlwZS5jb21wb3NlZFBhdGgpIHtcbiAgY29uc3QgZ2V0Q29tcG9zZWRQYXRoID0gKG5vZGUsIHBhdGggPSBbXSkgPT4ge1xuICAgIHBhdGgucHVzaChub2RlKTtcblxuICAgIGxldCBwYXJlbnQ7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5ob3N0KSB7IC8vIFNoYWRvd1Jvb3RcbiAgICAgIHBhcmVudCA9IG5vZGUuaG9zdDtcbiAgICB9IGVsc2UgaWYgKG5vZGUuZGVmYXVsdFZpZXcpIHsgIC8vIERvY3VtZW50XG4gICAgICBwYXJlbnQgPSBub2RlLmRlZmF1bHRWaWV3O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Q29tcG9zZWRQYXRoKHBhcmVudCwgcGF0aCkgOiBwYXRoO1xuICB9O1xuXG4gIEV2ZW50LnByb3RvdHlwZS5jb21wb3NlZFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldENvbXBvc2VkUGF0aCh0aGlzLnRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRGcm9tUGF0aChwYXRoLCBjcml0ZXJpYSwgY3VycmVudFRhcmdldCkge1xuICBjb25zdCBbbm9kZSwgLi4ucmVzdF0gPSBwYXRoO1xuICBpZiAoY3JpdGVyaWEobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBpZiAobm9kZSA9PT0gY3VycmVudFRhcmdldCB8fCBub2RlLnRhZ05hbWUgPT09ICdIVE1MJyB8fCByZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIHN0b3Agd2hlbiByZWFjaGluZyBjdXJyZW50VGFyZ2V0IG9yIDxodG1sPlxuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gZmluZEZyb21QYXRoKHJlc3QsIGNyaXRlcmlhLCBjdXJyZW50VGFyZ2V0KTtcbn1cblxuLy8gU2VhcmNoIGZvciB0aGUgYWN0dWFsIHRhcmdldCBvZiBhIGRlbGVnYXRlZCBldmVudFxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNyaXRlcmlhID0gdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nXG4gICAgPyBzZWxlY3RvclxuICAgIDogZWwgPT4gZWwgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICByZXR1cm4gZmluZEZyb21QYXRoKGV2LmNvbXBvc2VkUGF0aCgpLCBjcml0ZXJpYSwgZXYuY3VycmVudFRhcmdldCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJdGVtT2YoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG4vLyBwdXNoIG9ubHkgdGhlIGl0ZW1zIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBwdXNoVW5pcXVlKGFyciwgLi4uaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJyLnB1c2goaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHIsIHNlcGFyYXRvcikge1xuICAvLyBjb252ZXJ0IGVtcHR5IHN0cmluZyB0byBhbiBlbXB0eSBhcnJheVxuICByZXR1cm4gc3RyID8gc3RyLnNwbGl0KHNlcGFyYXRvcikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZSh0ZXN0VmFsLCBtaW4sIG1heCkge1xuICBjb25zdCBtaW5PSyA9IG1pbiA9PT0gdW5kZWZpbmVkIHx8IHRlc3RWYWwgPj0gbWluO1xuICBjb25zdCBtYXhPSyA9IG1heCA9PT0gdW5kZWZpbmVkIHx8IHRlc3RWYWwgPD0gbWF4O1xuICByZXR1cm4gbWluT0sgJiYgbWF4T0s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdFRvUmFuZ2UodmFsLCBtaW4sIG1heCkge1xuICBpZiAodmFsIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFnUmVwZWF0KHRhZ05hbWUsIHJlcGVhdCwgYXR0cmlidXRlcyA9IHt9LCBpbmRleCA9IDAsIGh0bWwgPSAnJykge1xuICBjb25zdCBvcGVuVGFnU3JjID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKChzcmMsIGF0dHIpID0+IHtcbiAgICBsZXQgdmFsID0gYXR0cmlidXRlc1thdHRyXTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsID0gdmFsKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NyY30gJHthdHRyfT1cIiR7dmFsfVwiYDtcbiAgfSwgdGFnTmFtZSk7XG4gIGh0bWwgKz0gYDwke29wZW5UYWdTcmN9PjwvJHt0YWdOYW1lfT5gO1xuXG4gIGNvbnN0IG5leHQgPSBpbmRleCArIDE7XG4gIHJldHVybiBuZXh0IDwgcmVwZWF0XG4gICAgPyBjcmVhdGVUYWdSZXBlYXQodGFnTmFtZSwgcmVwZWF0LCBhdHRyaWJ1dGVzLCBuZXh0LCBodG1sKVxuICAgIDogaHRtbDtcbn1cblxuLy8gUmVtb3ZlIHRoZSBzcGFjaW5nIHN1cnJvdW5kaW5nIHRhZ3MgZm9yIEhUTUwgcGFyc2VyIG5vdCB0byBjcmVhdGUgdGV4dCBub2Rlc1xuLy8gYmVmb3JlL2FmdGVyIGVsZW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVUZW1wbGF0ZUhUTUwoaHRtbCkge1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKC8+XFxzKy9nLCAnPicpLnJlcGxhY2UoL1xccys8LywgJzwnKTtcbn1cbiIsImltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlci5qcyc7XG5pbXBvcnQgRGF0ZVJhbmdlUGlja2VyIGZyb20gJy4vRGF0ZVJhbmdlUGlja2VyLmpzJztcblxuZXhwb3J0IHtEYXRlcGlja2VyLCBEYXRlUmFuZ2VQaWNrZXJ9O1xuIiwiLy8gY29uZmlnIG9wdGlvbnMgdXBkYXRhYmxlIGJ5IHNldE9wdGlvbnMoKSBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBhdXRvaGlkZTogZmFsc2UsXG4gIGJlZm9yZVNob3dEYXk6IG51bGwsXG4gIGJlZm9yZVNob3dEZWNhZGU6IG51bGwsXG4gIGJlZm9yZVNob3dNb250aDogbnVsbCxcbiAgYmVmb3JlU2hvd1llYXI6IG51bGwsXG4gIGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxuICBjbGVhckJ0bjogZmFsc2UsXG4gIGRhdGVEZWxpbWl0ZXI6ICcsJyxcbiAgZGF0ZXNEaXNhYmxlZDogW10sXG4gIGRheXNPZldlZWtEaXNhYmxlZDogW10sXG4gIGRheXNPZldlZWtIaWdobGlnaHRlZDogW10sXG4gIGRlZmF1bHRWaWV3RGF0ZTogdW5kZWZpbmVkLCAvLyBwbGFjZWhvbGRlciwgZGVmYXVsdHMgdG8gdG9kYXkoKSBieSB0aGUgcHJvZ3JhbVxuICBkaXNhYmxlVG91Y2hLZXlib2FyZDogZmFsc2UsXG4gIGZvcm1hdDogJ21tL2RkL3l5eXknLFxuICBsYW5ndWFnZTogJ2VuJyxcbiAgbWF4RGF0ZTogbnVsbCxcbiAgbWF4TnVtYmVyT2ZEYXRlczogMSxcbiAgbWF4VmlldzogMyxcbiAgbWluRGF0ZTogbnVsbCxcbiAgbmV4dEFycm93OiAnwrsnLFxuICBvcmllbnRhdGlvbjogJ2F1dG8nLFxuICBwaWNrTGV2ZWw6IDAsXG4gIHByZXZBcnJvdzogJ8KrJyxcbiAgc2hvd0RheXNPZldlZWs6IHRydWUsXG4gIHNob3dPbkNsaWNrOiB0cnVlLFxuICBzaG93T25Gb2N1czogdHJ1ZSxcbiAgc3RhcnRWaWV3OiAwLFxuICB0aXRsZTogJycsXG4gIHRvZGF5QnRuOiBmYWxzZSxcbiAgdG9kYXlCdG5Nb2RlOiAwLFxuICB0b2RheUhpZ2hsaWdodDogZmFsc2UsXG4gIHVwZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgd2Vla1N0YXJ0OiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdGlvbnM7XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWUsIHJlZ3VsYXJpemVEYXRlfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3JlRm9ybWF0VG9rZW5zLCBwYXJzZURhdGV9IGZyb20gJy4uL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTH0gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9kZWZhdWx0T3B0aW9ucy5qcyc7XG5cbmNvbnN0IHtcbiAgbGFuZ3VhZ2U6IGRlZmF1bHRMYW5nLFxuICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gIHdlZWtTdGFydDogZGVmYXVsdFdlZWtTdGFydCxcbn0gPSBkZWZhdWx0T3B0aW9ucztcblxuLy8gUmVkdWNlciBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0IGludmFsaWQgZGF5LW9mLXdlZWsgZnJvbSB0aGUgaW5wdXRcbmZ1bmN0aW9uIHNhbml0aXplRE9XKGRvdywgZGF5KSB7XG4gIHJldHVybiBkb3cubGVuZ3RoIDwgNiAmJiBkYXkgPj0gMCAmJiBkYXkgPCA3XG4gICAgPyBwdXNoVW5pcXVlKGRvdywgZGF5KVxuICAgIDogZG93O1xufVxuXG5mdW5jdGlvbiBjYWxjRW5kT2ZXZWVrKHN0YXJ0T2ZXZWVrKSB7XG4gIHJldHVybiAoc3RhcnRPZldlZWsgKyA2KSAlIDc7XG59XG5cbi8vIHZhbGlkYXRlIGlucHV0IGRhdGUuIGlmIGludmFsaWQsIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHZhbHVlLCBmb3JtYXQsIGxvY2FsZSwgb3JpZ1ZhbHVlKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZURhdGUodmFsdWUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCA/IGRhdGUgOiBvcmlnVmFsdWU7XG59XG5cbi8vIFZhbGlkYXRlIHZpZXdJZC4gaWYgaW52YWxpZCwgZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIHZhbHVlXG5mdW5jdGlvbiB2YWxpZGF0ZVZpZXdJZCh2YWx1ZSwgb3JpZ1ZhbHVlLCBtYXggPSAzKSB7XG4gIGNvbnN0IHZpZXdJZCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIHJldHVybiB2aWV3SWQgPj0gMCAmJiB2aWV3SWQgPD0gbWF4ID8gdmlld0lkIDogb3JpZ1ZhbHVlO1xufVxuXG4vLyBDcmVhdGUgRGF0ZXBpY2tlciBjb25maWd1cmF0aW9uIHRvIHNldFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucywgZGF0ZXBpY2tlcikge1xuICBjb25zdCBpbk9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgY29uc3QgY29uZmlnID0ge307XG4gIGNvbnN0IGxvY2FsZXMgPSBkYXRlcGlja2VyLmNvbnN0cnVjdG9yLmxvY2FsZXM7XG4gIGNvbnN0IHJhbmdlU2lkZUluZGV4ID0gZGF0ZXBpY2tlci5yYW5nZVNpZGVJbmRleDtcbiAgbGV0IHtcbiAgICBmb3JtYXQsXG4gICAgbGFuZ3VhZ2UsXG4gICAgbG9jYWxlLFxuICAgIG1heERhdGUsXG4gICAgbWF4VmlldyxcbiAgICBtaW5EYXRlLFxuICAgIHBpY2tMZXZlbCxcbiAgICBzdGFydFZpZXcsXG4gICAgd2Vla1N0YXJ0LFxuICB9ID0gZGF0ZXBpY2tlci5jb25maWcgfHwge307XG5cbiAgaWYgKGluT3B0cy5sYW5ndWFnZSkge1xuICAgIGxldCBsYW5nO1xuICAgIGlmIChpbk9wdHMubGFuZ3VhZ2UgIT09IGxhbmd1YWdlKSB7XG4gICAgICBpZiAobG9jYWxlc1tpbk9wdHMubGFuZ3VhZ2VdKSB7XG4gICAgICAgIGxhbmcgPSBpbk9wdHMubGFuZ3VhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayBpZiBsYW5nYXVnZSArIHJlZ2lvbiB0YWcgY2FuIGZhbGxiYWNrIHRvIHRoZSBvbmUgd2l0aG91dFxuICAgICAgICAvLyByZWdpb24gKGUuZy4gZnItQ0Eg4oaSIGZyKVxuICAgICAgICBsYW5nID0gaW5PcHRzLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XG4gICAgICAgIGlmIChsb2NhbGVzW2xhbmddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsYW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5sYW5ndWFnZTtcbiAgICBpZiAobGFuZykge1xuICAgICAgbGFuZ3VhZ2UgPSBjb25maWcubGFuZ3VhZ2UgPSBsYW5nO1xuXG4gICAgICAvLyB1cGRhdGUgbG9jYWxlIGFzIHdlbGwgd2hlbiB1cGRhdGluZyBsYW5ndWFnZVxuICAgICAgY29uc3Qgb3JpZ0xvY2FsZSA9IGxvY2FsZSB8fCBsb2NhbGVzW2RlZmF1bHRMYW5nXTtcbiAgICAgIC8vIHVzZSBkZWZhdWx0IGxhbmd1YWdlJ3MgcHJvcGVydGllcyBmb3IgdGhlIGZhbGxiYWNrXG4gICAgICBsb2NhbGUgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgICAgICB3ZWVrU3RhcnQ6IGRlZmF1bHRXZWVrU3RhcnRcbiAgICAgIH0sIGxvY2FsZXNbZGVmYXVsdExhbmddKTtcbiAgICAgIGlmIChsYW5ndWFnZSAhPT0gZGVmYXVsdExhbmcpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihsb2NhbGUsIGxvY2FsZXNbbGFuZ3VhZ2VdKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAvLyBpZiBmb3JtYXQgYW5kL29yIHdlZWtTdGFydCBhcmUgdGhlIHNhbWUgYXMgb2xkIGxvY2FsZSdzIGRlZmF1bHRzLFxuICAgICAgLy8gdXBkYXRlIHRoZW0gdG8gbmV3IGxvY2FsZSdzIGRlZmF1bHRzXG4gICAgICBpZiAoZm9ybWF0ID09PSBvcmlnTG9jYWxlLmZvcm1hdCkge1xuICAgICAgICBmb3JtYXQgPSBjb25maWcuZm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWVrU3RhcnQgPT09IG9yaWdMb2NhbGUud2Vla1N0YXJ0KSB7XG4gICAgICAgIHdlZWtTdGFydCA9IGNvbmZpZy53ZWVrU3RhcnQgPSBsb2NhbGUud2Vla1N0YXJ0O1xuICAgICAgICBjb25maWcud2Vla0VuZCA9IGNhbGNFbmRPZldlZWsobG9jYWxlLndlZWtTdGFydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGluT3B0cy5mb3JtYXQpIHtcbiAgICBjb25zdCBoYXNUb0Rpc3BsYXkgPSB0eXBlb2YgaW5PcHRzLmZvcm1hdC50b0Rpc3BsYXkgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3QgaGFzVG9WYWx1ZSA9IHR5cGVvZiBpbk9wdHMuZm9ybWF0LnRvVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3QgdmFsaWRGb3JtYXRTdHJpbmcgPSByZUZvcm1hdFRva2Vucy50ZXN0KGluT3B0cy5mb3JtYXQpO1xuICAgIGlmICgoaGFzVG9EaXNwbGF5ICYmIGhhc1RvVmFsdWUpIHx8IHZhbGlkRm9ybWF0U3RyaW5nKSB7XG4gICAgICBmb3JtYXQgPSBjb25maWcuZm9ybWF0ID0gaW5PcHRzLmZvcm1hdDtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5mb3JtYXQ7XG4gIH1cblxuICAvLyoqKiBwaWNrIGxldmVsICoqKi8vXG4gIGxldCBuZXdQaWNrTGV2ZWwgPSBwaWNrTGV2ZWw7XG4gIGlmIChpbk9wdHMucGlja0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdQaWNrTGV2ZWwgPSB2YWxpZGF0ZVZpZXdJZChpbk9wdHMucGlja0xldmVsLCAyKTtcbiAgICBkZWxldGUgaW5PcHRzLnBpY2tMZXZlbDtcbiAgfVxuICBpZiAobmV3UGlja0xldmVsICE9PSBwaWNrTGV2ZWwpIHtcbiAgICBpZiAobmV3UGlja0xldmVsID4gcGlja0xldmVsKSB7XG4gICAgICAvLyBjb21wbGVtZW50IGN1cnJlbnQgbWluRGF0ZS9tYWREYXRlIHNvIHRoYXQgdGhlIGV4aXN0aW5nIHJhbmdlIHdpbGwgYmVcbiAgICAgIC8vIGV4cGFuZGVkIHRvIGZpdCB0aGUgbmV3IGxldmVsIGxhdGVyXG4gICAgICBpZiAoaW5PcHRzLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbk9wdHMubWluRGF0ZSA9IG1pbkRhdGU7XG4gICAgICB9XG4gICAgICBpZiAoaW5PcHRzLm1heERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbk9wdHMubWF4RGF0ZSA9IG1heERhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbXBsZW1lbnQgZGF0ZXNEaXNhYmxlZCBzbyB0aGF0IGl0IHdpbGwgYmUgcmVzZXQgbGF0ZXJcbiAgICBpZiAoIWluT3B0cy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICBpbk9wdHMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBwaWNrTGV2ZWwgPSBjb25maWcucGlja0xldmVsID0gbmV3UGlja0xldmVsO1xuICB9XG5cbiAgLy8qKiogZGF0ZXMgKioqLy9cbiAgLy8gd2hpbGUgbWluIGFuZCBtYXhEYXRlIGZvciBcIm5vIGxpbWl0XCIgaW4gdGhlIG9wdGlvbnMgYXJlIGJldHRlciB0byBiZSBudWxsXG4gIC8vIChlc3BlY2lhbGx5IHdoZW4gdXBkYXRpbmcpLCB0aGUgb25lcyBpbiB0aGUgY29uZmlnIGhhdmUgdG8gYmUgdW5kZWZpbmVkXG4gIC8vIGJlY2F1c2UgbnVsbCBpcyB0cmVhdGVkIGFzIDAgKD0gdW5peCBlcG9jaCkgd2hlbiBjb21wYXJpbmcgd2l0aCB0aW1lIHZhbHVlXG4gIGxldCBtaW5EdCA9IG1pbkRhdGU7XG4gIGxldCBtYXhEdCA9IG1heERhdGU7XG4gIGlmIChpbk9wdHMubWluRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZGVmYXVsdE1pbkR0ID0gZGF0ZVZhbHVlKDAsIDAsIDEpO1xuICAgIG1pbkR0ID0gaW5PcHRzLm1pbkRhdGUgPT09IG51bGxcbiAgICAgID8gZGVmYXVsdE1pbkR0ICAvLyBzZXQgMDAwMC0wMS0wMSB0byBwcmV2ZW50IG5lZ2F0aXZlIHZhbHVlcyBmb3IgeWVhclxuICAgICAgOiB2YWxpZGF0ZURhdGUoaW5PcHRzLm1pbkRhdGUsIGZvcm1hdCwgbG9jYWxlLCBtaW5EdCk7XG4gICAgaWYgKG1pbkR0ICE9PSBkZWZhdWx0TWluRHQpIHtcbiAgICAgIG1pbkR0ID0gcmVndWxhcml6ZURhdGUobWluRHQsIHBpY2tMZXZlbCwgZmFsc2UpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm1pbkRhdGU7XG4gIH1cbiAgaWYgKGluT3B0cy5tYXhEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhEdCA9IGluT3B0cy5tYXhEYXRlID09PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB2YWxpZGF0ZURhdGUoaW5PcHRzLm1heERhdGUsIGZvcm1hdCwgbG9jYWxlLCBtYXhEdCk7XG4gICAgaWYgKG1heER0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1heER0ID0gcmVndWxhcml6ZURhdGUobWF4RHQsIHBpY2tMZXZlbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubWF4RGF0ZTtcbiAgfVxuICBpZiAobWF4RHQgPCBtaW5EdCkge1xuICAgIG1pbkRhdGUgPSBjb25maWcubWluRGF0ZSA9IG1heER0O1xuICAgIG1heERhdGUgPSBjb25maWcubWF4RGF0ZSA9IG1pbkR0O1xuICB9IGVsc2Uge1xuICAgIGlmIChtaW5EYXRlICE9PSBtaW5EdCkge1xuICAgICAgbWluRGF0ZSA9IGNvbmZpZy5taW5EYXRlID0gbWluRHQ7XG4gICAgfVxuICAgIGlmIChtYXhEYXRlICE9PSBtYXhEdCkge1xuICAgICAgbWF4RGF0ZSA9IGNvbmZpZy5tYXhEYXRlID0gbWF4RHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGluT3B0cy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgY29uZmlnLmRhdGVzRGlzYWJsZWQgPSBpbk9wdHMuZGF0ZXNEaXNhYmxlZC5yZWR1Y2UoKGRhdGVzLCBkdCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlRGF0ZShkdCwgZm9ybWF0LCBsb2NhbGUpO1xuICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHB1c2hVbmlxdWUoZGF0ZXMsIHJlZ3VsYXJpemVEYXRlKGRhdGUsIHBpY2tMZXZlbCwgcmFuZ2VTaWRlSW5kZXgpKVxuICAgICAgICA6IGRhdGVzO1xuICAgIH0sIFtdKTtcbiAgICBkZWxldGUgaW5PcHRzLmRhdGVzRGlzYWJsZWQ7XG4gIH1cbiAgaWYgKGluT3B0cy5kZWZhdWx0Vmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gcGFyc2VEYXRlKGluT3B0cy5kZWZhdWx0Vmlld0RhdGUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICBpZiAodmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLmRlZmF1bHRWaWV3RGF0ZSA9IHZpZXdEYXRlO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLmRlZmF1bHRWaWV3RGF0ZTtcbiAgfVxuXG4gIC8vKioqIGRheXMgb2Ygd2VlayAqKiovL1xuICBpZiAoaW5PcHRzLndlZWtTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgd2tTdGFydCA9IE51bWJlcihpbk9wdHMud2Vla1N0YXJ0KSAlIDc7XG4gICAgaWYgKCFpc05hTih3a1N0YXJ0KSkge1xuICAgICAgd2Vla1N0YXJ0ID0gY29uZmlnLndlZWtTdGFydCA9IHdrU3RhcnQ7XG4gICAgICBjb25maWcud2Vla0VuZCA9IGNhbGNFbmRPZldlZWsod2tTdGFydCk7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMud2Vla1N0YXJ0O1xuICB9XG4gIGlmIChpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkKSB7XG4gICAgY29uZmlnLmRheXNPZldlZWtEaXNhYmxlZCA9IGluT3B0cy5kYXlzT2ZXZWVrRGlzYWJsZWQucmVkdWNlKHNhbml0aXplRE9XLCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXlzT2ZXZWVrRGlzYWJsZWQ7XG4gIH1cbiAgaWYgKGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIHtcbiAgICBjb25maWcuZGF5c09mV2Vla0hpZ2hsaWdodGVkID0gaW5PcHRzLmRheXNPZldlZWtIaWdobGlnaHRlZC5yZWR1Y2Uoc2FuaXRpemVET1csIFtdKTtcbiAgICBkZWxldGUgaW5PcHRzLmRheXNPZldlZWtIaWdobGlnaHRlZDtcbiAgfVxuXG4gIC8vKioqIG11bHRpIGRhdGUgKioqLy9cbiAgaWYgKGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXhOdW1iZXJPZkRhdGVzID0gcGFyc2VJbnQoaW5PcHRzLm1heE51bWJlck9mRGF0ZXMsIDEwKTtcbiAgICBpZiAobWF4TnVtYmVyT2ZEYXRlcyA+PSAwKSB7XG4gICAgICBjb25maWcubWF4TnVtYmVyT2ZEYXRlcyA9IG1heE51bWJlck9mRGF0ZXM7XG4gICAgICBjb25maWcubXVsdGlkYXRlID0gbWF4TnVtYmVyT2ZEYXRlcyAhPT0gMTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzO1xuICB9XG4gIGlmIChpbk9wdHMuZGF0ZURlbGltaXRlcikge1xuICAgIGNvbmZpZy5kYXRlRGVsaW1pdGVyID0gU3RyaW5nKGluT3B0cy5kYXRlRGVsaW1pdGVyKTtcbiAgICBkZWxldGUgaW5PcHRzLmRhdGVEZWxpbWl0ZXI7XG4gIH1cblxuICAvLyoqKiB2aWV3ICoqKi8vXG4gIGxldCBuZXdNYXhWaWV3ID0gbWF4VmlldztcbiAgaWYgKGluT3B0cy5tYXhWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdNYXhWaWV3ID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLm1heFZpZXcsIG1heFZpZXcpO1xuICAgIGRlbGV0ZSBpbk9wdHMubWF4VmlldztcbiAgfVxuICAvLyBlbnN1cmUgbWF4IHZpZXcgPj0gcGljayBsZXZlbFxuICBuZXdNYXhWaWV3ID0gcGlja0xldmVsID4gbmV3TWF4VmlldyA/IHBpY2tMZXZlbCA6IG5ld01heFZpZXc7XG4gIGlmIChuZXdNYXhWaWV3ICE9PSBtYXhWaWV3KSB7XG4gICAgbWF4VmlldyA9IGNvbmZpZy5tYXhWaWV3ID0gbmV3TWF4VmlldztcbiAgfVxuXG4gIGxldCBuZXdTdGFydFZpZXcgPSBzdGFydFZpZXc7XG4gIGlmIChpbk9wdHMuc3RhcnRWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdTdGFydFZpZXcgPSB2YWxpZGF0ZVZpZXdJZChpbk9wdHMuc3RhcnRWaWV3LCBuZXdTdGFydFZpZXcpO1xuICAgIGRlbGV0ZSBpbk9wdHMuc3RhcnRWaWV3O1xuICB9XG4gIC8vIGVuc3VyZSBwaWNrIGxldmVsIDw9IHN0YXJ0IHZpZXcgPD0gbWF4IHZpZXdcbiAgaWYgKG5ld1N0YXJ0VmlldyA8IHBpY2tMZXZlbCkge1xuICAgIG5ld1N0YXJ0VmlldyA9IHBpY2tMZXZlbDtcbiAgfSBlbHNlIGlmIChuZXdTdGFydFZpZXcgPiBtYXhWaWV3KSB7XG4gICAgbmV3U3RhcnRWaWV3ID0gbWF4VmlldztcbiAgfVxuICBpZiAobmV3U3RhcnRWaWV3ICE9PSBzdGFydFZpZXcpIHtcbiAgICBjb25maWcuc3RhcnRWaWV3ID0gbmV3U3RhcnRWaWV3O1xuICB9XG5cbiAgLy8qKiogdGVtcGxhdGUgKioqLy9cbiAgaWYgKGluT3B0cy5wcmV2QXJyb3cpIHtcbiAgICBjb25zdCBwcmV2QXJyb3cgPSBwYXJzZUhUTUwoaW5PcHRzLnByZXZBcnJvdyk7XG4gICAgaWYgKHByZXZBcnJvdy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmZpZy5wcmV2QXJyb3cgPSBwcmV2QXJyb3cuY2hpbGROb2RlcztcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5wcmV2QXJyb3c7XG4gIH1cbiAgaWYgKGluT3B0cy5uZXh0QXJyb3cpIHtcbiAgICBjb25zdCBuZXh0QXJyb3cgPSBwYXJzZUhUTUwoaW5PcHRzLm5leHRBcnJvdyk7XG4gICAgaWYgKG5leHRBcnJvdy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmZpZy5uZXh0QXJyb3cgPSBuZXh0QXJyb3cuY2hpbGROb2RlcztcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5uZXh0QXJyb3c7XG4gIH1cblxuICAvLyoqKiBtaXNjICoqKi8vXG4gIGlmIChpbk9wdHMuZGlzYWJsZVRvdWNoS2V5Ym9hcmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50ICYmICEhaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGlzYWJsZVRvdWNoS2V5Ym9hcmQ7XG4gIH1cbiAgaWYgKGluT3B0cy5vcmllbnRhdGlvbikge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gaW5PcHRzLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyk7XG4gICAgY29uZmlnLm9yaWVudGF0aW9uID0ge1xuICAgICAgeDogb3JpZW50YXRpb24uZmluZCh4ID0+ICh4ID09PSAnbGVmdCcgfHwgeCA9PT0gJ3JpZ2h0JykpIHx8ICdhdXRvJyxcbiAgICAgIHk6IG9yaWVudGF0aW9uLmZpbmQoeSA9PiAoeSA9PT0gJ3RvcCcgfHwgeSA9PT0gJ2JvdHRvbScpKSB8fCAnYXV0bycsXG4gICAgfTtcbiAgICBkZWxldGUgaW5PcHRzLm9yaWVudGF0aW9uO1xuICB9XG4gIGlmIChpbk9wdHMudG9kYXlCdG5Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2goaW5PcHRzLnRvZGF5QnRuTW9kZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICBjb25maWcudG9kYXlCdG5Nb2RlID0gaW5PcHRzLnRvZGF5QnRuTW9kZTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy50b2RheUJ0bk1vZGU7XG4gIH1cblxuICAvLyoqKiBjb3B5IHRoZSByZXN0ICoqKi8vXG4gIE9iamVjdC5rZXlzKGluT3B0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGluT3B0c1trZXldICE9PSB1bmRlZmluZWQgJiYgaGFzUHJvcGVydHkoZGVmYXVsdE9wdGlvbnMsIGtleSkpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gaW5PcHRzW2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgbGFzdEl0ZW1PZiwgaXNJblJhbmdlLCBsaW1pdFRvUmFuZ2V9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5fSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTCwgZ2V0UGFyZW50LCBzaG93RWxlbWVudCwgaGlkZUVsZW1lbnQsIGVtcHR5Q2hpbGROb2Rlc30gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTGlzdGVuZXJzfSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHBpY2tlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3BpY2tlclRlbXBsYXRlLmpzJztcbmltcG9ydCBEYXlzVmlldyBmcm9tICcuL3ZpZXdzL0RheXNWaWV3LmpzJztcbmltcG9ydCBNb250aHNWaWV3IGZyb20gJy4vdmlld3MvTW9udGhzVmlldy5qcyc7XG5pbXBvcnQgWWVhcnNWaWV3IGZyb20gJy4vdmlld3MvWWVhcnNWaWV3LmpzJztcbmltcG9ydCB7dHJpZ2dlckRhdGVwaWNrZXJFdmVudH0gZnJvbSAnLi4vZXZlbnRzL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQge1xuICBvbkNsaWNrVG9kYXlCdG4sXG4gIG9uQ2xpY2tDbGVhckJ0bixcbiAgb25DbGlja1ZpZXdTd2l0Y2gsXG4gIG9uQ2xpY2tQcmV2QnRuLFxuICBvbkNsaWNrTmV4dEJ0bixcbiAgb25DbGlja1ZpZXcsXG4gIG9uTW91c2Vkb3duUGlja2VyLFxufSBmcm9tICcuLi9ldmVudHMvcGlja2VyTGlzdGVuZXJzLmpzJztcblxuY29uc3Qgb3JpZW50Q2xhc3NlcyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ10ucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICBvYmpba2V5XSA9IGBkYXRlcGlja2VyLW9yaWVudC0ke2tleX1gO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuY29uc3QgdG9QeCA9IG51bSA9PiBudW0gPyBgJHtudW19cHhgIDogbnVtO1xuXG5mdW5jdGlvbiBwcm9jZXNzUGlja2VyT3B0aW9ucyhwaWNrZXIsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XG4gICAgICBwaWNrZXIuY29udHJvbHMudGl0bGUudGV4dENvbnRlbnQgPSBvcHRpb25zLnRpdGxlO1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGlja2VyLmNvbnRyb2xzLnRpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMudGl0bGUpO1xuICAgIH1cbiAgfVxuICBpZiAob3B0aW9ucy5wcmV2QXJyb3cpIHtcbiAgICBjb25zdCBwcmV2QnRuID0gcGlja2VyLmNvbnRyb2xzLnByZXZCdG47XG4gICAgZW1wdHlDaGlsZE5vZGVzKHByZXZCdG4pO1xuICAgIG9wdGlvbnMucHJldkFycm93LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIHByZXZCdG4uYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLm5leHRBcnJvdykge1xuICAgIGNvbnN0IG5leHRCdG4gPSBwaWNrZXIuY29udHJvbHMubmV4dEJ0bjtcbiAgICBlbXB0eUNoaWxkTm9kZXMobmV4dEJ0bik7XG4gICAgb3B0aW9ucy5uZXh0QXJyb3cuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbmV4dEJ0bi5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgcGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuLnRleHRDb250ZW50ID0gb3B0aW9ucy5sb2NhbGUudG9kYXk7XG4gICAgcGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuLnRleHRDb250ZW50ID0gb3B0aW9ucy5sb2NhbGUuY2xlYXI7XG4gIH1cbiAgaWYgKG9wdGlvbnMudG9kYXlCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLnRvZGF5QnRuKSB7XG4gICAgICBzaG93RWxlbWVudChwaWNrZXIuY29udHJvbHMudG9kYXlCdG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMudG9kYXlCdG4pO1xuICAgIH1cbiAgfVxuICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSB8fCBoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgY29uc3Qge21pbkRhdGUsIG1heERhdGV9ID0gcGlja2VyLmRhdGVwaWNrZXIuY29uZmlnO1xuICAgIHBpY2tlci5jb250cm9scy50b2RheUJ0bi5kaXNhYmxlZCA9ICFpc0luUmFuZ2UodG9kYXkoKSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY2xlYXJCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLmNsZWFyQnRuKSB7XG4gICAgICBzaG93RWxlbWVudChwaWNrZXIuY29udHJvbHMuY2xlYXJCdG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMuY2xlYXJCdG4pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDb21wdXRlIHZpZXcgZGF0ZSB0byByZXNldCwgd2hpY2ggd2lsbCBiZS4uLlxuLy8gLSB0aGUgbGFzdCBpdGVtIG9mIHRoZSBzZWxlY3RlZCBkYXRlcyBvciBkZWZhdWx0Vmlld0RhdGUgaWYgbm8gc2VsZWN0aW9uXG4vLyAtIGxpbWl0dGVkIHRvIG1pbkRhdGUgb3IgbWF4RGF0ZSBpZiBpdCBleGNlZWRzIHRoZSByYW5nZVxuZnVuY3Rpb24gY29tcHV0ZVJlc2V0Vmlld0RhdGUoZGF0ZXBpY2tlcikge1xuICBjb25zdCB7ZGF0ZXMsIGNvbmZpZ30gPSBkYXRlcGlja2VyO1xuICBjb25zdCB2aWV3RGF0ZSA9IGRhdGVzLmxlbmd0aCA+IDAgPyBsYXN0SXRlbU9mKGRhdGVzKSA6IGNvbmZpZy5kZWZhdWx0Vmlld0RhdGU7XG4gIHJldHVybiBsaW1pdFRvUmFuZ2Uodmlld0RhdGUsIGNvbmZpZy5taW5EYXRlLCBjb25maWcubWF4RGF0ZSk7XG59XG5cbi8vIENoYW5nZSBjdXJyZW50IHZpZXcncyB2aWV3IGRhdGVcbmZ1bmN0aW9uIHNldFZpZXdEYXRlKHBpY2tlciwgbmV3RGF0ZSkge1xuICBjb25zdCBvbGRWaWV3RGF0ZSA9IG5ldyBEYXRlKHBpY2tlci52aWV3RGF0ZSk7XG4gIGNvbnN0IG5ld1ZpZXdEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XG4gIGNvbnN0IHtpZCwgeWVhciwgZmlyc3QsIGxhc3R9ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBjb25zdCB2aWV3WWVhciA9IG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcGlja2VyLnZpZXdEYXRlID0gbmV3RGF0ZTtcbiAgaWYgKHZpZXdZZWFyICE9PSBvbGRWaWV3RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChwaWNrZXIuZGF0ZXBpY2tlciwgJ2NoYW5nZVllYXInKTtcbiAgfVxuICBpZiAobmV3Vmlld0RhdGUuZ2V0TW9udGgoKSAhPT0gb2xkVmlld0RhdGUuZ2V0TW9udGgoKSkge1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQocGlja2VyLmRhdGVwaWNrZXIsICdjaGFuZ2VNb250aCcpO1xuICB9XG5cbiAgLy8gcmV0dXJuIHdoZXRoZXIgdGhlIG5ldyBkYXRlIGlzIGluIGRpZmZlcmVudCBwZXJpb2Qgb24gdGltZSBmcm9tIHRoZSBvbmVcbiAgLy8gZGlzcGxheWVkIGluIHRoZSBjdXJyZW50IHZpZXdcbiAgLy8gd2hlbiB0cnVlLCB0aGUgdmlldyBuZWVkcyB0byBiZSByZS1yZW5kZXJlZCBvbiB0aGUgbmV4dCBVSSByZWZyZXNoLlxuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ld0RhdGUgPCBmaXJzdCB8fCBuZXdEYXRlID4gbGFzdDtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdmlld1llYXIgIT09IHllYXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2aWV3WWVhciA8IGZpcnN0IHx8IHZpZXdZZWFyID4gbGFzdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZXh0RGlyZWN0aW9uKGVsKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlyZWN0aW9uO1xufVxuXG4vLyBmaW5kIHRoZSBjbG9zZXQgc2Nyb2xsYWJsZSBhbmNlc3RvciBlbGVtbnQgdW5kZXIgdGhlIGJvZHlcbmZ1bmN0aW9uIGZpbmRTY3JvbGxQYXJlbnRzKGVsKSB7XG4gIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudChlbCk7XG4gIGlmIChwYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgIXBhcmVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGNoZWNraW5nIG92ZXJmbG93IG9ubHkgaXMgZW5vdWdoIGJlY2F1c2UgY29tcHV0ZWQgb3ZlcmZsb3cgY2Fubm90IGJlXG4gIC8vIHZpc2libGUgb3IgYSBjb21iaW5hdGlvbiBvZiB2aXNpYmxlIGFuZCBvdGhlciB3aGVuIGVpdGhlciBheGlzIGlzIHNldFxuICAvLyB0byBvdGhlciB0aGFuIHZpc2libGUuXG4gIC8vIChTZXR0aW5nIG9uZSBheGlzIHRvIG90aGVyIHRoYW4gJ3Zpc2libGUnIHdoaWxlIHRoZSBvdGhlciBpcyAndmlzaWJsZSdcbiAgLy8gcmVzdWx0cyBpbiB0aGUgb3RoZXIgYXhpcyB0dXJuaW5nIHRvICdhdXRvJylcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkub3ZlcmZsb3cgIT09ICd2aXNpYmxlJ1xuICAgID8gcGFyZW50XG4gICAgOiBmaW5kU2Nyb2xsUGFyZW50cyhwYXJlbnQpO1xufVxuXG4vLyBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHBpY2tlciBVSVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyIHtcbiAgY29uc3RydWN0b3IoZGF0ZXBpY2tlcikge1xuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcy5kYXRlcGlja2VyID0gZGF0ZXBpY2tlcjtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gcGlja2VyVGVtcGxhdGUucmVwbGFjZSgvJWJ1dHRvbkNsYXNzJS9nLCBjb25maWcuYnV0dG9uQ2xhc3MpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgPSBwYXJzZUhUTUwodGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgW2hlYWRlciwgbWFpbiwgZm9vdGVyXSA9IGVsZW1lbnQuZmlyc3RDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCB0aXRsZSA9IGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBbcHJldkJ0biwgdmlld1N3aXRjaCwgbmV4dEJ0bl0gPSBoZWFkZXIubGFzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCBbdG9kYXlCdG4sIGNsZWFyQnRuXSA9IGZvb3Rlci5maXJzdENoaWxkLmNoaWxkcmVuO1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBwcmV2QnRuLFxuICAgICAgdmlld1N3aXRjaCxcbiAgICAgIG5leHRCdG4sXG4gICAgICB0b2RheUJ0bixcbiAgICAgIGNsZWFyQnRuLFxuICAgIH07XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG5cbiAgICBjb25zdCBlbGVtZW50Q2xhc3MgPSBkYXRlcGlja2VyLmlubGluZSA/ICdpbmxpbmUnIDogJ2Ryb3Bkb3duJztcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGRhdGVwaWNrZXItJHtlbGVtZW50Q2xhc3N9YCk7XG5cbiAgICBwcm9jZXNzUGlja2VyT3B0aW9ucyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMudmlld0RhdGUgPSBjb21wdXRlUmVzZXRWaWV3RGF0ZShkYXRlcGlja2VyKTtcblxuICAgIC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnNcbiAgICByZWdpc3Rlckxpc3RlbmVycyhkYXRlcGlja2VyLCBbXG4gICAgICBbZWxlbWVudCwgJ21vdXNlZG93bicsIG9uTW91c2Vkb3duUGlja2VyXSxcbiAgICAgIFttYWluLCAnY2xpY2snLCBvbkNsaWNrVmlldy5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy52aWV3U3dpdGNoLCAnY2xpY2snLCBvbkNsaWNrVmlld1N3aXRjaC5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5wcmV2QnRuLCAnY2xpY2snLCBvbkNsaWNrUHJldkJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5uZXh0QnRuLCAnY2xpY2snLCBvbkNsaWNrTmV4dEJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy50b2RheUJ0biwgJ2NsaWNrJywgb25DbGlja1RvZGF5QnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLmNsZWFyQnRuLCAnY2xpY2snLCBvbkNsaWNrQ2xlYXJCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgXSk7XG5cbiAgICAvLyBzZXQgdXAgdmlld3NcbiAgICB0aGlzLnZpZXdzID0gW1xuICAgICAgbmV3IERheXNWaWV3KHRoaXMpLFxuICAgICAgbmV3IE1vbnRoc1ZpZXcodGhpcyksXG4gICAgICBuZXcgWWVhcnNWaWV3KHRoaXMsIHtpZDogMiwgbmFtZTogJ3llYXJzJywgY2VsbENsYXNzOiAneWVhcicsIHN0ZXA6IDF9KSxcbiAgICAgIG5ldyBZZWFyc1ZpZXcodGhpcywge2lkOiAzLCBuYW1lOiAnZGVjYWRlcycsIGNlbGxDbGFzczogJ2RlY2FkZScsIHN0ZXA6IDEwfSksXG4gICAgXTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy52aWV3c1tjb25maWcuc3RhcnRWaWV3XTtcblxuICAgIHRoaXMuY3VycmVudFZpZXcucmVuZGVyKCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudFZpZXcuZWxlbWVudCk7XG4gICAgaWYgKGNvbmZpZy5jb250YWluZXIpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZXBpY2tlci5pbnB1dEZpZWxkLmFmdGVyKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcHJvY2Vzc1BpY2tlck9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LmluaXQob3B0aW9ucywgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudFZpZXcucmVuZGVyKCk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7ZGF0ZXBpY2tlciwgZWxlbWVudH0gPSB0aGlzO1xuICAgIGlmIChkYXRlcGlja2VyLmlubGluZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW5zdXJlIHBpY2tlcidzIGRpcmVjdGlvbiBtYXRjaGVzIGlucHV0J3NcbiAgICAgIGNvbnN0IGlucHV0RGlyZWN0aW9uID0gZ2V0VGV4dERpcmVjdGlvbihkYXRlcGlja2VyLmlucHV0RmllbGQpO1xuICAgICAgaWYgKGlucHV0RGlyZWN0aW9uICE9PSBnZXRUZXh0RGlyZWN0aW9uKGdldFBhcmVudChlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudC5kaXIgPSBpbnB1dERpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kaXIpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2libGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMucGxhY2UoKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJsaXR5ID0gJyc7XG5cbiAgICAgIGlmIChkYXRlcGlja2VyLmNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCkge1xuICAgICAgICBkYXRlcGlja2VyLmlucHV0RmllbGQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChkYXRlcGlja2VyLCAnc2hvdycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0ZXBpY2tlci5leGl0RWRpdE1vZGUoKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHRoaXMuZGF0ZXBpY2tlciwgJ2hpZGUnKTtcbiAgfVxuXG4gIHBsYWNlKCkge1xuICAgIGNvbnN0IHtjbGFzc0xpc3QsIG9mZnNldFBhcmVudCwgc3R5bGV9ID0gdGhpcy5lbGVtZW50O1xuICAgIGNvbnN0IHtjb25maWcsIGlucHV0RmllbGR9ID0gdGhpcy5kYXRlcGlja2VyO1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoOiBjYWxlbmRhcldpZHRoLFxuICAgICAgaGVpZ2h0OiBjYWxlbmRhckhlaWdodCxcbiAgICB9ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQ6IGlucHV0TGVmdCxcbiAgICAgIHRvcDogaW5wdXRUb3AsXG4gICAgICByaWdodDogaW5wdXRSaWdodCxcbiAgICAgIGJvdHRvbTogaW5wdXRCb3R0b20sXG4gICAgICB3aWR0aDogaW5wdXRXaWR0aCxcbiAgICAgIGhlaWdodDogaW5wdXRIZWlnaHRcbiAgICB9ID0gaW5wdXRGaWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQge3g6IG9yaWVudFgsIHk6IG9yaWVudFl9ID0gY29uZmlnLm9yaWVudGF0aW9uO1xuICAgIGxldCBsZWZ0ID0gaW5wdXRMZWZ0O1xuICAgIGxldCB0b3AgPSBpbnB1dFRvcDtcblxuICAgIC8vIGNhbGljdWxhdGUgb2Zmc2V0TGVmdC9Ub3Agb2YgaW5wdXRGaWVsZFxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgIW9mZnNldFBhcmVudCkge1xuICAgICAgbGVmdCArPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHRvcCArPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IG9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxlZnQgLT0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0IC0gb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQ7XG4gICAgICB0b3AgLT0gb2Zmc2V0UGFyZW50UmVjdC50b3AgLSBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8vIGNhbGljdWxhdGUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHZpc2libGUgYXJlYSB0aGF0IGNvbnRhaW5zIGlucHV0RmllbGRcbiAgICBjb25zdCBzY3JvbGxQYXJlbnQgPSBmaW5kU2Nyb2xsUGFyZW50cyhpbnB1dEZpZWxkKTtcbiAgICBsZXQgc2Nyb2xsQXJlYUxlZnQgPSAwO1xuICAgIGxldCBzY3JvbGxBcmVhVG9wID0gMDtcbiAgICBsZXQge1xuICAgICAgY2xpZW50V2lkdGg6IHNjcm9sbEFyZWFSaWdodCxcbiAgICAgIGNsaWVudEhlaWdodDogc2Nyb2xsQXJlYUJvdHRvbSxcbiAgICB9ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHNjcm9sbFBhcmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsUGFyZW50UmVjdCA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LnRvcCA+IDApIHtcbiAgICAgICAgc2Nyb2xsQXJlYVRvcCA9IHNjcm9sbFBhcmVudFJlY3QudG9wO1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QubGVmdCA+IDApIHtcbiAgICAgICAgc2Nyb2xsQXJlYUxlZnQgPSBzY3JvbGxQYXJlbnRSZWN0LmxlZnQ7XG4gICAgICB9XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC5yaWdodCA8IHNjcm9sbEFyZWFSaWdodCkge1xuICAgICAgICBzY3JvbGxBcmVhUmlnaHQgPSBzY3JvbGxQYXJlbnRSZWN0LnJpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QuYm90dG9tIDwgc2Nyb2xsQXJlYUJvdHRvbSkge1xuICAgICAgICBzY3JvbGxBcmVhQm90dG9tID0gc2Nyb2xsUGFyZW50UmVjdC5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRoZSBob3Jpem9udGFsIG9yaWVudGF0aW9uIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgbGV0IGFkanVzdG1lbnQgPSAwO1xuICAgIGlmIChvcmllbnRYID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChpbnB1dExlZnQgPCBzY3JvbGxBcmVhTGVmdCkge1xuICAgICAgICBvcmllbnRYID0gJ2xlZnQnO1xuICAgICAgICBhZGp1c3RtZW50ID0gc2Nyb2xsQXJlYUxlZnQgLSBpbnB1dExlZnQ7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0TGVmdCArIGNhbGVuZGFyV2lkdGggPiBzY3JvbGxBcmVhUmlnaHQpIHtcbiAgICAgICAgb3JpZW50WCA9ICdyaWdodCc7XG4gICAgICAgIGlmIChzY3JvbGxBcmVhUmlnaHQgPCBpbnB1dFJpZ2h0KSB7XG4gICAgICAgICAgYWRqdXN0bWVudCA9IHNjcm9sbEFyZWFSaWdodCAtIGlucHV0UmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2V0VGV4dERpcmVjdGlvbihpbnB1dEZpZWxkKSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgb3JpZW50WCA9IGlucHV0UmlnaHQgLSBjYWxlbmRhcldpZHRoIDwgc2Nyb2xsQXJlYUxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZW50WCA9ICdsZWZ0JztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudFggPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgKz0gaW5wdXRXaWR0aCAtIGNhbGVuZGFyV2lkdGg7XG4gICAgfVxuICAgIGxlZnQgKz0gYWRqdXN0bWVudDtcblxuICAgIC8vIGRldGVybWluZSB0aGUgdmVydGljYWwgb3JpZW50YXRpb24gYW5kIHRvcCBwb3NpdGlvblxuICAgIGlmIChvcmllbnRZID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChpbnB1dFRvcCAtIGNhbGVuZGFySGVpZ2h0ID4gc2Nyb2xsQXJlYVRvcCkge1xuICAgICAgICBvcmllbnRZID0gaW5wdXRCb3R0b20gKyBjYWxlbmRhckhlaWdodCA+IHNjcm9sbEFyZWFCb3R0b20gPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZW50WSA9ICdib3R0b20nO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50WSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRvcCAtPSBjYWxlbmRhckhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wICs9IGlucHV0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4uT2JqZWN0LnZhbHVlcyhvcmllbnRDbGFzc2VzKSk7XG4gICAgY2xhc3NMaXN0LmFkZChvcmllbnRDbGFzc2VzW29yaWVudFhdLCBvcmllbnRDbGFzc2VzW29yaWVudFldKTtcblxuICAgIHN0eWxlLmxlZnQgPSB0b1B4KGxlZnQpO1xuICAgIHN0eWxlLnRvcCA9IHRvUHgodG9wKTtcbiAgfVxuXG4gIHNldFZpZXdTd2l0Y2hMYWJlbChsYWJlbFRleHQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLnZpZXdTd2l0Y2gudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIH1cblxuICBzZXRQcmV2QnRuRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLnByZXZCdG4uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHNldE5leHRCdG5EaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuY29udHJvbHMubmV4dEJ0bi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3SWQpIHtcbiAgICBjb25zdCBvbGRWaWV3ID0gdGhpcy5jdXJyZW50VmlldztcbiAgICBjb25zdCBuZXdWaWV3ID0gIHRoaXMudmlld3Nbdmlld0lkXTtcbiAgICBpZiAobmV3Vmlldy5pZCAhPT0gb2xkVmlldy5pZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ld1ZpZXc7XG4gICAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSAncmVuZGVyJztcbiAgICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQodGhpcy5kYXRlcGlja2VyLCAnY2hhbmdlVmlldycpO1xuICAgICAgdGhpcy5tYWluLnJlcGxhY2VDaGlsZChuZXdWaWV3LmVsZW1lbnQsIG9sZFZpZXcuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQ2hhbmdlIHRoZSBmb2N1c2VkIGRhdGUgKHZpZXcgZGF0ZSlcbiAgY2hhbmdlRm9jdXMobmV3Vmlld0RhdGUpIHtcbiAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSBzZXRWaWV3RGF0ZSh0aGlzLCBuZXdWaWV3RGF0ZSkgPyAncmVuZGVyJyA6ICdyZWZyZXNoRm9jdXMnO1xuICAgIHRoaXMudmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy51cGRhdGVGb2N1cygpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGNoYW5nZSBvZiB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG5ld1ZpZXdEYXRlID0gY29tcHV0ZVJlc2V0Vmlld0RhdGUodGhpcy5kYXRlcGlja2VyKTtcbiAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSBzZXRWaWV3RGF0ZSh0aGlzLCBuZXdWaWV3RGF0ZSkgPyAncmVuZGVyJyA6ICdyZWZyZXNoJztcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIHZpZXcudXBkYXRlRm9jdXMoKTtcbiAgICAgIHZpZXcudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBSZWZyZXNoIHRoZSBwaWNrZXIgVUlcbiAgcmVuZGVyKHF1aWNrUmVuZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJlbmRlck1ldGhvZCA9IChxdWlja1JlbmRlciAmJiB0aGlzLl9yZW5kZXJNZXRob2QpIHx8ICdyZW5kZXInO1xuICAgIGRlbGV0ZSB0aGlzLl9yZW5kZXJNZXRob2Q7XG5cbiAgICB0aGlzLmN1cnJlbnRWaWV3W3JlbmRlck1ldGhvZF0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVUYWdSZXBlYXQsIG9wdGltaXplVGVtcGxhdGVIVE1MfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuXG5jb25zdCBjYWxlbmRhcldlZWtzVGVtcGxhdGUgPSBvcHRpbWl6ZVRlbXBsYXRlSFRNTChgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXdlZWtzXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXlzLW9mLXdlZWtcIj48c3BhbiBjbGFzcz1cImRvd1wiPjwvc3Bhbj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlZWtzXCI+JHtjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCA2LCB7Y2xhc3M6ICd3ZWVrJ30pfTwvZGl2PlxuPC9kaXY+YCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGVuZGFyV2Vla3NUZW1wbGF0ZTtcbiIsImltcG9ydCB7Y3JlYXRlVGFnUmVwZWF0LCBvcHRpbWl6ZVRlbXBsYXRlSFRNTH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcblxuY29uc3QgZGF5c1RlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJkYXlzXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXlzLW9mLXdlZWtcIj4ke2NyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDcsIHtjbGFzczogJ2Rvdyd9KX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZ3JpZFwiPiR7Y3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgNDIpfTwvZGl2PlxuPC9kaXY+YCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRheXNUZW1wbGF0ZTtcbiIsImltcG9ydCB7b3B0aW1pemVUZW1wbGF0ZUhUTUx9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5cbmNvbnN0IHBpY2tlclRlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXBpY2tlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBwcmV2LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgdmlldy1zd2l0Y2hcIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIG5leHQtYnRuXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tYWluXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgdG9kYXktYnRuXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBjbGVhci1idG5cIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrZXJUZW1wbGF0ZTtcbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWV9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5LCBkYXRlVmFsdWUsIGFkZERheXMsIGFkZFdlZWtzLCBkYXlPZlRoZVdlZWtPZiwgZ2V0V2Vla30gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tICcuLi8uLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIHNob3dFbGVtZW50LCBoaWRlRWxlbWVudH0gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgZGF5c1RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy9kYXlzVGVtcGxhdGUuanMnO1xuaW1wb3J0IGNhbGVuZGFyV2Vla3NUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FsZW5kYXJXZWVrc1RlbXBsYXRlLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheXNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlcikge1xuICAgIHN1cGVyKHBpY2tlciwge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnZGF5cycsXG4gICAgICBjZWxsQ2xhc3M6ICdkYXknLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IGlubmVyID0gcGFyc2VIVE1MKGRheXNUZW1wbGF0ZSkuZmlyc3RDaGlsZDtcbiAgICAgIHRoaXMuZG93ID0gaW5uZXIuZmlyc3RDaGlsZDtcbiAgICAgIHRoaXMuZ3JpZCA9IGlubmVyLmxhc3RDaGlsZDtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgfVxuICAgIHN1cGVyLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBsZXQgdXBkYXRlRE9XO1xuXG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IG9wdGlvbnMubWluRGF0ZTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IG9wdGlvbnMubWF4RGF0ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gb3B0aW9ucy5kYXRlc0Rpc2FibGVkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkID0gb3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHRoaXMuZGF5c09mV2Vla0hpZ2hsaWdodGVkID0gb3B0aW9ucy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRvZGF5SGlnaGxpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9kYXlIaWdobGlnaHQgPSBvcHRpb25zLnRvZGF5SGlnaGxpZ2h0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53ZWVrU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53ZWVrU3RhcnQgPSBvcHRpb25zLndlZWtTdGFydDtcbiAgICAgIHRoaXMud2Vla0VuZCA9IG9wdGlvbnMud2Vla0VuZDtcbiAgICAgIHVwZGF0ZURPVyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgICAgIHRoaXMuZGF5TmFtZXMgPSBsb2NhbGUuZGF5c01pbjtcbiAgICAgIHRoaXMuc3dpdGNoTGFiZWxGb3JtYXQgPSBsb2NhbGUudGl0bGVGb3JtYXQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTaG93RGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYmVmb3JlU2hvdyA9IHR5cGVvZiBvcHRpb25zLmJlZm9yZVNob3dEYXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLmJlZm9yZVNob3dEYXlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY2FsZW5kYXJXZWVrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5jYWxlbmRhcldlZWtzICYmICF0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgY29uc3Qgd2Vla3NFbGVtID0gcGFyc2VIVE1MKGNhbGVuZGFyV2Vla3NUZW1wbGF0ZSkuZmlyc3RDaGlsZDtcbiAgICAgICAgdGhpcy5jYWxlbmRhcldlZWtzID0ge1xuICAgICAgICAgIGVsZW1lbnQ6IHdlZWtzRWxlbSxcbiAgICAgICAgICBkb3c6IHdlZWtzRWxlbS5maXJzdENoaWxkLFxuICAgICAgICAgIHdlZWtzOiB3ZWVrc0VsZW0ubGFzdENoaWxkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdlZWtzRWxlbSwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MgJiYgIW9wdGlvbnMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jYWxlbmRhcldlZWtzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyV2Vla3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zaG93RGF5c09mV2VlayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5zaG93RGF5c09mV2Vlaykge1xuICAgICAgICBzaG93RWxlbWVudCh0aGlzLmRvdyk7XG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgICBzaG93RWxlbWVudCh0aGlzLmNhbGVuZGFyV2Vla3MuZG93KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUVsZW1lbnQodGhpcy5kb3cpO1xuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgICAgaGlkZUVsZW1lbnQodGhpcy5jYWxlbmRhcldlZWtzLmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGF5cy1vZi13ZWVrIHdoZW4gbG9jYWxlLCBkYXlzT2Z3ZWVrRGlzYWJsZWQgb3Igd2Vla1N0YXJ0IGlzIGNoYW5nZWRcbiAgICBpZiAodXBkYXRlRE9XKSB7XG4gICAgICBBcnJheS5mcm9tKHRoaXMuZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZG93ID0gKHRoaXMud2Vla1N0YXJ0ICsgaW5kZXgpICUgNztcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0aGlzLmRheU5hbWVzW2Rvd107XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKGRvdykgPyAnZG93IGRpc2FibGVkJyA6ICdkb3cnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgdXBkYXRlIG9uIHRoZSBmb2N1c2VkIGRhdGUgdG8gdmlldydzIHNldHRpbmdzXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIGNvbnN0IHZpZXdZZWFyID0gdmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB2aWV3TW9udGggPSB2aWV3RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IGRhdGVWYWx1ZSh2aWV3WWVhciwgdmlld01vbnRoLCAxKTtcbiAgICBjb25zdCBzdGFydCA9IGRheU9mVGhlV2Vla09mKGZpcnN0T2ZNb250aCwgdGhpcy53ZWVrU3RhcnQsIHRoaXMud2Vla1N0YXJ0KTtcblxuICAgIHRoaXMuZmlyc3QgPSBmaXJzdE9mTW9udGg7XG4gICAgdGhpcy5sYXN0ID0gZGF0ZVZhbHVlKHZpZXdZZWFyLCB2aWV3TW9udGggKyAxLCAwKTtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5mb2N1c2VkID0gdGhpcy5waWNrZXIudmlld0RhdGU7XG4gIH1cblxuICAvLyBBcHBseSB1cGRhdGUgb24gdGhlIHNlbGVjdGVkIGRhdGVzIHRvIHZpZXcncyBzZXR0aW5nc1xuICB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qge2RhdGVzLCByYW5nZXBpY2tlcn0gPSB0aGlzLnBpY2tlci5kYXRlcGlja2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlcztcbiAgICBpZiAocmFuZ2VwaWNrZXIpIHtcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZXBpY2tlci5kYXRlcztcbiAgICB9XG4gIH1cblxuICAgLy8gVXBkYXRlIHRoZSBlbnRpcmUgdmlldyBVSVxuICByZW5kZXIoKSB7XG4gICAgLy8gdXBkYXRlIHRvZGF5IG1hcmtlciBvbiBldmVyIHJlbmRlclxuICAgIHRoaXMudG9kYXkgPSB0aGlzLnRvZGF5SGlnaGxpZ2h0ID8gdG9kYXkoKSA6IHVuZGVmaW5lZDtcbiAgICAvLyByZWZyZXNoIGRpc2FibGVkIGRhdGVzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG5cbiAgICBjb25zdCBzd2l0Y2hMYWJlbCA9IGZvcm1hdERhdGUodGhpcy5mb2N1c2VkLCB0aGlzLnN3aXRjaExhYmVsRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKHN3aXRjaExhYmVsKTtcbiAgICB0aGlzLnBpY2tlci5zZXRQcmV2QnRuRGlzYWJsZWQodGhpcy5maXJzdCA8PSB0aGlzLm1pbkRhdGUpO1xuICAgIHRoaXMucGlja2VyLnNldE5leHRCdG5EaXNhYmxlZCh0aGlzLmxhc3QgPj0gdGhpcy5tYXhEYXRlKTtcblxuICAgIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgIC8vIHN0YXJ0IG9mIHRoZSBVVEMgd2VlayAoTW9uZGF5KSBvZiB0aGUgMXN0IG9mIHRoZSBtb250aFxuICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBkYXlPZlRoZVdlZWtPZih0aGlzLmZpcnN0LCAxLCAxKTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5jYWxlbmRhcldlZWtzLndlZWtzLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBnZXRXZWVrKGFkZFdlZWtzKHN0YXJ0T2ZXZWVrLCBpbmRleCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhZGREYXlzKHRoaXMuc3RhcnQsIGluZGV4KTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50KTtcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICAgIGVsLmNsYXNzTmFtZSA9IGBkYXRlcGlja2VyLWNlbGwgJHt0aGlzLmNlbGxDbGFzc31gO1xuICAgICAgZWwuZGF0YXNldC5kYXRlID0gY3VycmVudDtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5maXJzdCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPiB0aGlzLmxhc3QpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9kYXkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5taW5EYXRlIHx8IGN1cnJlbnQgPiB0aGlzLm1heERhdGUgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKGRheSkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHVzaFVuaXF1ZSh0aGlzLmRpc2FibGVkLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRheXNPZldlZWtIaWdobGlnaHRlZC5pbmNsdWRlcyhkYXkpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJlZm9yZVNob3cpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQmVmb3JlSG9vayhlbCwgY3VycmVudCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IE51bWJlcihlbC5kYXRhc2V0LmRhdGUpO1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlIG9mIGZvY3VzZWQgaXRlbVxuICByZWZyZXNoRm9jdXMoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKCh0aGlzLmZvY3VzZWQgLSB0aGlzLnN0YXJ0KSAvIDg2NDAwMDAwKTtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlLCBjcmVhdGVUYWdSZXBlYXR9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2RhdGVWYWx1ZX0gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoUmFuZ2UocmFuZ2UsIHRoaXNZZWFyKSB7XG4gIGlmICghcmFuZ2UgfHwgIXJhbmdlWzBdIHx8ICFyYW5nZVsxXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IFtbc3RhcnRZLCBzdGFydE1dLCBbZW5kWSwgZW5kTV1dID0gcmFuZ2U7XG4gIGlmIChzdGFydFkgPiB0aGlzWWVhciB8fCBlbmRZIDwgdGhpc1llYXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIFtcbiAgICBzdGFydFkgPT09IHRoaXNZZWFyID8gc3RhcnRNIDogLTEsXG4gICAgZW5kWSA9PT0gdGhpc1llYXIgPyBlbmRNIDogMTIsXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyKSB7XG4gICAgc3VwZXIocGlja2VyLCB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdtb250aHMnLFxuICAgICAgY2VsbENsYXNzOiAnbW9udGgnLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb250aHMnLCAnZGF0ZXBpY2tlci1ncmlkJyk7XG4gICAgICB0aGlzLmdyaWQuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKGNyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDEyLCB7J2RhdGEtbW9udGgnOiBpeCA9PiBpeH0pKSk7XG4gICAgfVxuICAgIHN1cGVyLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIHRoaXMubW9udGhOYW1lcyA9IG9wdGlvbnMubG9jYWxlLm1vbnRoc1Nob3J0O1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWluRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWluWWVhciA9IHRoaXMubWluTW9udGggPSB0aGlzLm1pbkRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaW5EYXRlT2JqID0gbmV3IERhdGUob3B0aW9ucy5taW5EYXRlKTtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gbWluRGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1pbk1vbnRoID0gbWluRGF0ZU9iai5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1pbkRhdGUgPSBtaW5EYXRlT2JqLnNldERhdGUoMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5tYXhEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gdGhpcy5tYXhNb250aCA9IHRoaXMubWF4RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heERhdGVPYmogPSBuZXcgRGF0ZShvcHRpb25zLm1heERhdGUpO1xuICAgICAgICB0aGlzLm1heFllYXIgPSBtYXhEYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMubWF4TW9udGggPSBtYXhEYXRlT2JqLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubWF4RGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1heFllYXIsIHRoaXMubWF4TW9udGggKyAxLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gW107XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJlZm9yZVNob3dNb250aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTaG93TW9udGggPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLmJlZm9yZVNob3dNb250aFxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHZpZXdEYXRlIHNldCBvbiB0aGUgcGlja2VyXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIHRoaXMueWVhciA9IHZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5mb2N1c2VkID0gdmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXMucmVkdWNlKChzZWxlY3RlZCwgdGltZVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZVZhbHVlKTtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGlmIChzZWxlY3RlZFt5ZWFyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdGVkW3llYXJdID0gW21vbnRoXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHB1c2hVbmlxdWUoc2VsZWN0ZWRbeWVhcl0sIG1vbnRoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9LCB7fSk7XG4gICAgaWYgKHJhbmdlcGlja2VyICYmIHJhbmdlcGlja2VyLmRhdGVzKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXMubWFwKHRpbWVWYWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lVmFsdWUpO1xuICAgICAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyB1bmRlZmluZWQgOiBbZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBlbnRpcmUgdmlldyBVSVxuICByZW5kZXIoKSB7XG4gICAgLy8gcmVmcmVzaCBkaXNhYmxlZCBtb250aHMgb24gZXZlcnkgcmVuZGVyIGluIG9yZGVyIHRvIGNsZWFyIHRoZSBvbmVzIGFkZGVkXG4gICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBbLi4udGhpcy5kYXRlc0Rpc2FibGVkXTtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkLnJlZHVjZSgoYXJyLCBkaXNhYmxlZCkgPT4ge1xuICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZShkaXNhYmxlZCk7XG4gICAgICBpZiAodGhpcy55ZWFyID09PSBkdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIGFyci5wdXNoKGR0LmdldE1vbnRoKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnBpY2tlci5zZXRWaWV3U3dpdGNoTGFiZWwodGhpcy55ZWFyKTtcbiAgICB0aGlzLnBpY2tlci5zZXRQcmV2QnRuRGlzYWJsZWQodGhpcy55ZWFyIDw9IHRoaXMubWluWWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0TmV4dEJ0bkRpc2FibGVkKHRoaXMueWVhciA+PSB0aGlzLm1heFllYXIpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkW3RoaXMueWVhcl0gfHwgW107XG4gICAgY29uc3QgeXJPdXRPZlJhbmdlID0gdGhpcy55ZWFyIDwgdGhpcy5taW5ZZWFyIHx8IHRoaXMueWVhciA+IHRoaXMubWF4WWVhcjtcbiAgICBjb25zdCBpc01pblllYXIgPSB0aGlzLnllYXIgPT09IHRoaXMubWluWWVhcjtcbiAgICBjb25zdCBpc01heFllYXIgPSB0aGlzLnllYXIgPT09IHRoaXMubWF4WWVhcjtcbiAgICBjb25zdCByYW5nZSA9IGNvbXB1dGVNb250aFJhbmdlKHRoaXMucmFuZ2UsIHRoaXMueWVhcik7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZVZhbHVlKHRoaXMueWVhciwgaW5kZXgsIDEpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgICBlbC5kYXRhc2V0LmRhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgLy8gcmVzZXQgdGV4dCBvbiBldmVyeSByZW5kZXIgdG8gY2xlYXIgdGhlIGN1c3RvbSBjb250ZW50IHNldFxuICAgICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgICAgZWwudGV4dENvbnRlbnQgPSB0aGlzLm1vbnRoTmFtZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHlyT3V0T2ZSYW5nZVxuICAgICAgICB8fCBpc01pblllYXIgJiYgaW5kZXggPCB0aGlzLm1pbk1vbnRoXG4gICAgICAgIHx8IGlzTWF4WWVhciAmJiBpbmRleCA+IHRoaXMubWF4TW9udGhcbiAgICAgICAgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhpbmRleClcbiAgICAgICkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSByYW5nZTtcbiAgICAgICAgaWYgKGluZGV4ID4gcmFuZ2VTdGFydCAmJiBpbmRleCA8IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGluZGV4LCBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlcyBvZiBzZWxlY3RlZCBhbmQgZm9jdXNlZCBpdGVtc1xuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFt0aGlzLnllYXJdIHx8IFtdO1xuICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSBjb21wdXRlTW9udGhSYW5nZSh0aGlzLnJhbmdlLCB0aGlzLnllYXIpIHx8IFtdO1xuICAgIHRoaXMuZ3JpZFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZSwgLnJhbmdlLXN0YXJ0LCAucmFuZ2UtZW5kLCAuc2VsZWN0ZWQsIC5mb2N1c2VkJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZScsICdyYW5nZS1zdGFydCcsICdyYW5nZS1lbmQnLCAnc2VsZWN0ZWQnLCAnZm9jdXNlZCcpO1xuICAgICAgfSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGluZGV4ID4gcmFuZ2VTdGFydCAmJiBpbmRleCA8IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZSBvZiBmb2N1c2VkIGl0ZW1cbiAgcmVmcmVzaEZvY3VzKCkge1xuICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9jdXNlZCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLmNoaWxkcmVuW3RoaXMuZm9jdXNlZF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59IiwiaW1wb3J0IHtwdXNoVW5pcXVlfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIHJlcGxhY2VDaGlsZE5vZGVzfSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcblxuLy8gQmFzZSBjbGFzcyBvZiB0aGUgdmlldyBjbGFzc2VzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyLCBjb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZywge1xuICAgICAgcGlja2VyLFxuICAgICAgZWxlbWVudDogcGFyc2VIVE1MKGA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci12aWV3XCI+PC9kaXY+YCkuZmlyc3RDaGlsZCxcbiAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmluaXQodGhpcy5waWNrZXIuZGF0ZXBpY2tlci5jb25maWcpO1xuICB9XG5cbiAgaW5pdChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucGlja0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNNaW5WaWV3ID0gdGhpcy5pZCA9PT0gb3B0aW9ucy5waWNrTGV2ZWw7XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIC8vIEV4ZWN1dGUgYmVmb3JlU2hvdygpIGNhbGxiYWNrIGFuZCBhcHBseSB0aGUgcmVzdWx0IHRvIHRoZSBlbGVtZW50XG4gIC8vIGFyZ3M6XG4gIC8vIC0gY3VycmVudCAtIGN1cnJlbnQgdmFsdWUgb24gdGhlIGl0ZXJhdGlvbiBvbiB2aWV3IHJlbmRlcmluZ1xuICAvLyAtIHRpbWVWYWx1ZSAtIHRpbWUgdmFsdWUgb2YgdGhlIGRhdGUgdG8gcGFzcyB0byBiZWZvcmVTaG93KClcbiAgcGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIHRpbWVWYWx1ZSkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmJlZm9yZVNob3cobmV3IERhdGUodGltZVZhbHVlKSk7XG4gICAgc3dpdGNoICh0eXBlb2YgcmVzdWx0KSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmVzdWx0ID0ge2VuYWJsZWQ6IHJlc3VsdH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmVzdWx0ID0ge2NsYXNzZXM6IHJlc3VsdH07XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKHJlc3VsdC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICBwdXNoVW5pcXVlKHRoaXMuZGlzYWJsZWQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5jbGFzc2VzKSB7XG4gICAgICAgIGNvbnN0IGV4dHJhQ2xhc3NlcyA9IHJlc3VsdC5jbGFzc2VzLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzc2VzKTtcbiAgICAgICAgaWYgKGV4dHJhQ2xhc3Nlcy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgIHB1c2hVbmlxdWUodGhpcy5kaXNhYmxlZCwgY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuY29udGVudCkge1xuICAgICAgICByZXBsYWNlQ2hpbGROb2RlcyhlbCwgcmVzdWx0LmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZSwgY3JlYXRlVGFnUmVwZWF0fSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWUsIHN0YXJ0T2ZZZWFyUGVyaW9kfSBmcm9tICcuLi8uLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTH0gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZSh3b3JkKSB7XG4gIHJldHVybiBbLi4ud29yZF0ucmVkdWNlKChzdHIsIGNoLCBpeCkgPT4gc3RyICs9IGl4ID8gY2ggOiBjaC50b1VwcGVyQ2FzZSgpLCAnJyk7XG59XG5cbi8vIENsYXNzIHJlcHJlc2VudGluZyB0aGUgeWVhcnMgYW5kIGRlY2FkZXMgdmlldyBlbGVtZW50c1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhcnNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlciwgY29uZmlnKSB7XG4gICAgc3VwZXIocGlja2VyLCBjb25maWcpO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMubmF2U3RlcCA9IHRoaXMuc3RlcCAqIDEwO1xuICAgICAgdGhpcy5iZWZvcmVTaG93T3B0aW9uID0gYGJlZm9yZVNob3cke3RvVGl0bGVDYXNlKHRoaXMuY2VsbENsYXNzKX1gO1xuICAgICAgdGhpcy5ncmlkID0gdGhpcy5lbGVtZW50O1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5uYW1lLCAnZGF0ZXBpY2tlci1ncmlkJyk7XG4gICAgICB0aGlzLmdyaWQuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKGNyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDEyKSkpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1pblllYXIgPSB0aGlzLm1pbkRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblllYXIgPSBzdGFydE9mWWVhclBlcmlvZChvcHRpb25zLm1pbkRhdGUsIHRoaXMuc3RlcCk7XG4gICAgICAgIHRoaXMubWluRGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1pblllYXIsIDAsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHRoaXMubWF4RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHN0YXJ0T2ZZZWFyUGVyaW9kKG9wdGlvbnMubWF4RGF0ZSwgdGhpcy5zdGVwKTtcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gZGF0ZVZhbHVlKHRoaXMubWF4WWVhciwgMTEsIDMxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gW107XG4gICAgfVxuICAgIGlmIChvcHRpb25zW3RoaXMuYmVmb3JlU2hvd09wdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYmVmb3JlU2hvdyA9IG9wdGlvbnNbdGhpcy5iZWZvcmVTaG93T3B0aW9uXTtcbiAgICAgIHRoaXMuYmVmb3JlU2hvdyA9IHR5cGVvZiBiZWZvcmVTaG93ID09PSAnZnVuY3Rpb24nID8gYmVmb3JlU2hvdyA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHZpZXdEYXRlIHNldCBvbiB0aGUgcGlja2VyXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIGNvbnN0IGZpcnN0ID0gc3RhcnRPZlllYXJQZXJpb2Qodmlld0RhdGUsIHRoaXMubmF2U3RlcCk7XG4gICAgY29uc3QgbGFzdCA9IGZpcnN0ICsgOSAqIHRoaXMuc3RlcDtcblxuICAgIHRoaXMuZmlyc3QgPSBmaXJzdDtcbiAgICB0aGlzLmxhc3QgPSBsYXN0O1xuICAgIHRoaXMuc3RhcnQgPSBmaXJzdCAtIHRoaXMuc3RlcDtcbiAgICB0aGlzLmZvY3VzZWQgPSBzdGFydE9mWWVhclBlcmlvZCh2aWV3RGF0ZSwgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXMucmVkdWNlKCh5ZWFycywgdGltZVZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gcHVzaFVuaXF1ZSh5ZWFycywgc3RhcnRPZlllYXJQZXJpb2QodGltZVZhbHVlLCB0aGlzLnN0ZXApKTtcbiAgICB9LCBbXSk7XG4gICAgaWYgKHJhbmdlcGlja2VyICYmIHJhbmdlcGlja2VyLmRhdGVzKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXMubWFwKHRpbWVWYWx1ZSA9PiB7XG4gICAgICAgIGlmICh0aW1lVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBzdGFydE9mWWVhclBlcmlvZCh0aW1lVmFsdWUsIHRoaXMuc3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHJlZnJlc2ggZGlzYWJsZWQgeWVhcnMgb24gZXZlcnkgcmVuZGVyIGluIG9yZGVyIHRvIGNsZWFyIHRoZSBvbmVzIGFkZGVkXG4gICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBbLi4udGhpcy5kYXRlc0Rpc2FibGVkXTtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkLm1hcChkaXNhYmxlZCA9PiBuZXcgRGF0ZShkaXNhYmxlZCkuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICB0aGlzLnBpY2tlci5zZXRWaWV3U3dpdGNoTGFiZWwoYCR7dGhpcy5maXJzdH0tJHt0aGlzLmxhc3R9YCk7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMuZmlyc3QgPD0gdGhpcy5taW5ZZWFyKTtcbiAgICB0aGlzLnBpY2tlci5zZXROZXh0QnRuRGlzYWJsZWQodGhpcy5sYXN0ID49IHRoaXMubWF4WWVhcik7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFydCArIChpbmRleCAqIHRoaXMuc3RlcCk7XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZVZhbHVlKGN1cnJlbnQsIDAsIDEpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgICBlbC5kYXRhc2V0LmRhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgZWwudGV4dENvbnRlbnQgPSBlbC5kYXRhc2V0LnllYXIgPSBjdXJyZW50O1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMTEpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPCB0aGlzLm1pblllYXIgfHwgY3VycmVudCA+IHRoaXMubWF4WWVhciB8fCB0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJlZm9yZVNob3cpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQmVmb3JlSG9vayhlbCwgY3VycmVudCwgZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IE51bWJlcihlbC50ZXh0Q29udGVudCk7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY3VycmVudCA+IHJhbmdlU3RhcnQgJiYgY3VycmVudCA8IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2Ugb2YgZm9jdXNlZCBpdGVtXG4gIHJlZnJlc2hGb2N1cygpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKHRoaXMuZm9jdXNlZCAtIHRoaXMuc3RhcnQpIC8gdGhpcy5zdGVwKTtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmdldERhdGEoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==