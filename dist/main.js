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
___CSS_LOADER_EXPORT___.push([module.id, "body, button, input, select {\n    font-family: 'Signika', sans-serif;\n}\n\nh1 {\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    font-family: \"Great Vibes\", cursive;\n    background-color: #14C9CB;\n    padding: 10px 40px;\n    font-size: 50px;\n}\n\nmain {\n    display: flex;\n}\n\n/* START LEFT MENU */\n\n.left-menu {\n    flex-shrink: 0;\n    height: 100vh;\n    width: 250px;\n    padding: 30px 40px;\n    background-color: #2d363b;\n    color: #C9DDEE;\n}\n\n.new-project {\n    font-size: medium;\n    border: 2px solid #C9DDEE;\n    color: #C9DDEE;\n    border-radius: 100%;\n    font-weight: bold;\n    background: none;\n    margin-left: 20px;\n}\n\n.new-project:hover {\n    transform: scale(1.1);\n}\n\n.menu-titles {\n    color: #14C9CB;\n    font-size: x-large;\n    font-weight: bold;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    padding: 0;\n}\n\n.menu-project {\n    cursor: pointer;\n    padding: 10px;\n}\n\n.menu-project:hover, .selected-project {\n    background-color: #171c1f;\n}\n\n\n/* END LEFT MENU */\n\n#project-form {\n    height: 200px;\n    padding: 40px 0;\n}\n\n/* START PROJECT PAGE */\n#page-section {\n    display: flex;\n    justify-content: space-around;\n}\n\n#project-page {\n    padding: 40px 100px;\n}\n\n.new-todo {\n    font-size: medium;\n    border: 2px solid black;\n    border-radius: 100%;\n    font-weight: bold;\n    background: none;\n}\n\n.new-todo:hover {\n    transform: scale(1.1);\n}\n\n/* END PROJECT PAGE */\n\n/* START TODO FORM */\n\n#todo-form {\n    height: 300px;\n    padding: 40px 80px;\n}\n\n.template-form {\n    display: none;\n    grid-template-columns: repeat(2, auto);\n    gap: 20px;\n    width: 20%;\n    text-align: right;\n    color: #53646d;\n    padding: 50px;\n}\n\n.submit-button, .cancel-button {\n    padding: 10px 0;\n    font-size: medium;\n    border: 2px solid #14C9CB;\n}\n\n.cancel-button {\n    background: none;\n}\n\n.cancel-button:hover {\n    background-color: #14c8cb88;\n}\n\n.submit-button {\n    background-color: #14C9CB;\n}\n\n.submit-button:hover {\n    background-color: #0b93a8;\n    border-color: #0b93a8;\n}\n\n.form-title {\n    color: black;\n    grid-column: 1/3;\n    text-align: left;\n    margin: 0px;\n    border-bottom: 1px solid #C9DDEE;\n}\n\n.priority-checkbox {\n    text-align: left;\n}\n\ninput, select {\n    color: #53646d;\n    padding: 5px;\n    background: none;\n    border: 1px solid #C9DDEE;\n}\n\ninput:focus, select:focus, input:hover, select:hover {\n    border-bottom: 2px solid #14C9CB;\n}\n\nselect:hover, button:hover {\n    cursor: pointer;\n}\n\n/* END TODO FORM */\n\n/* START MODAL */\n\n.modal-overlay {\n    display: none;\n    flex-direction: column;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n.modal-box {\n    background-color: #2d363b;\n    color: #C9DDEE;\n    font-size: large;\n    text-align: center;\n    margin: auto;\n    padding: 40px 60px;\n    border: 2px solid #C9DDEE;\n}\n\n.modal-buttons {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    gap: 30px;\n    margin-top: 30px;\n}\n\n.yes-button, .no-button {\n    font-size: large;\n    border: 2px solid #14C9CB;\n    padding: 15px 0;\n}\n\n.no-button {\n    background-color: white;\n}\n\n.yes-button {\n    background-color: #14C9CB;\n}\n\n.no-button:hover {\n    border-color: #14C9CB;\n    background-color: #14C9CB;\n}\n\n.yes-button:hover {\n    border-color: #0b93a8;\n    background-color: #0b93a8;\n}\n\n/* END MODAL */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA,oBAAoB;;AAEpB;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA,kBAAkB;;AAElB;IACI,aAAa;IACb,eAAe;AACnB;;AAEA,uBAAuB;AACvB;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,qBAAqB;;AAErB,oBAAoB;;AAEpB;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA,kBAAkB;;AAElB,gBAAgB;;AAEhB;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA,cAAc","sourcesContent":["body, button, input, select {\n    font-family: 'Signika', sans-serif;\n}\n\nh1 {\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    font-family: \"Great Vibes\", cursive;\n    background-color: #14C9CB;\n    padding: 10px 40px;\n    font-size: 50px;\n}\n\nmain {\n    display: flex;\n}\n\n/* START LEFT MENU */\n\n.left-menu {\n    flex-shrink: 0;\n    height: 100vh;\n    width: 250px;\n    padding: 30px 40px;\n    background-color: #2d363b;\n    color: #C9DDEE;\n}\n\n.new-project {\n    font-size: medium;\n    border: 2px solid #C9DDEE;\n    color: #C9DDEE;\n    border-radius: 100%;\n    font-weight: bold;\n    background: none;\n    margin-left: 20px;\n}\n\n.new-project:hover {\n    transform: scale(1.1);\n}\n\n.menu-titles {\n    color: #14C9CB;\n    font-size: x-large;\n    font-weight: bold;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    padding: 0;\n}\n\n.menu-project {\n    cursor: pointer;\n    padding: 10px;\n}\n\n.menu-project:hover, .selected-project {\n    background-color: #171c1f;\n}\n\n\n/* END LEFT MENU */\n\n#project-form {\n    height: 200px;\n    padding: 40px 0;\n}\n\n/* START PROJECT PAGE */\n#page-section {\n    display: flex;\n    justify-content: space-around;\n}\n\n#project-page {\n    padding: 40px 100px;\n}\n\n.new-todo {\n    font-size: medium;\n    border: 2px solid black;\n    border-radius: 100%;\n    font-weight: bold;\n    background: none;\n}\n\n.new-todo:hover {\n    transform: scale(1.1);\n}\n\n/* END PROJECT PAGE */\n\n/* START TODO FORM */\n\n#todo-form {\n    height: 300px;\n    padding: 40px 80px;\n}\n\n.template-form {\n    display: none;\n    grid-template-columns: repeat(2, auto);\n    gap: 20px;\n    width: 20%;\n    text-align: right;\n    color: #53646d;\n    padding: 50px;\n}\n\n.submit-button, .cancel-button {\n    padding: 10px 0;\n    font-size: medium;\n    border: 2px solid #14C9CB;\n}\n\n.cancel-button {\n    background: none;\n}\n\n.cancel-button:hover {\n    background-color: #14c8cb88;\n}\n\n.submit-button {\n    background-color: #14C9CB;\n}\n\n.submit-button:hover {\n    background-color: #0b93a8;\n    border-color: #0b93a8;\n}\n\n.form-title {\n    color: black;\n    grid-column: 1/3;\n    text-align: left;\n    margin: 0px;\n    border-bottom: 1px solid #C9DDEE;\n}\n\n.priority-checkbox {\n    text-align: left;\n}\n\ninput, select {\n    color: #53646d;\n    padding: 5px;\n    background: none;\n    border: 1px solid #C9DDEE;\n}\n\ninput:focus, select:focus, input:hover, select:hover {\n    border-bottom: 2px solid #14C9CB;\n}\n\nselect:hover, button:hover {\n    cursor: pointer;\n}\n\n/* END TODO FORM */\n\n/* START MODAL */\n\n.modal-overlay {\n    display: none;\n    flex-direction: column;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n.modal-box {\n    background-color: #2d363b;\n    color: #C9DDEE;\n    font-size: large;\n    text-align: center;\n    margin: auto;\n    padding: 40px 60px;\n    border: 2px solid #C9DDEE;\n}\n\n.modal-buttons {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    gap: 30px;\n    margin-top: 30px;\n}\n\n.yes-button, .no-button {\n    font-size: large;\n    border: 2px solid #14C9CB;\n    padding: 15px 0;\n}\n\n.no-button {\n    background-color: white;\n}\n\n.yes-button {\n    background-color: #14C9CB;\n}\n\n.no-button:hover {\n    border-color: #14C9CB;\n    background-color: #14C9CB;\n}\n\n.yes-button:hover {\n    border-color: #0b93a8;\n    background-color: #0b93a8;\n}\n\n/* END MODAL */"],"sourceRoot":""}]);
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
/* harmony export */   "projectListeners": () => (/* binding */ projectListeners),
/* harmony export */   "todoListeners": () => (/* binding */ todoListeners)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanillajs-datepicker */ "./node_modules/vanillajs-datepicker/js/main.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ "./src/views.js");






function projectListeners() {
    const newProjectButton = document.querySelector('.new-project')
    newProjectButton.addEventListener('click', _views__WEBPACK_IMPORTED_MODULE_3__.showProjectForm)

    const cancelProject = document.querySelector('#cancel-project')
    cancelProject.addEventListener('click', _views__WEBPACK_IMPORTED_MODULE_3__.showProjectPage)

    const projectForm = document.querySelector('#project-form')
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('input[name=project-title]').value
        const description = document.querySelector('input[name=project-description]').value

        const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(title, description)

        ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.addProject)(project)
        ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project)
        ;(0,_views__WEBPACK_IMPORTED_MODULE_3__.displayMenu)()
        ;(0,_views__WEBPACK_IMPORTED_MODULE_3__.displayPage)()
    })
}

function todoListeners() {
    const newTodoButton = document.querySelector('.new-todo')
    newTodoButton.addEventListener('click', _views__WEBPACK_IMPORTED_MODULE_3__.showTodoForm)

    const cancelTodo = document.querySelector('#cancel-todo')
    cancelTodo.addEventListener('click', _views__WEBPACK_IMPORTED_MODULE_3__.showProjectPage)

    const date = document.querySelector('#todo-dueDate')
    const datepicker = new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_2__.Datepicker(date)

    const todoForm = document.querySelector('#todo-form')
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.querySelector('#todo-title').value
        const description = document.querySelector('#todo-description').value
        const dueDate = datepicker.value
        const priority = document.querySelector('#todo-priority').checked

        const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority)
        
        const currentProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)()
        const currentProjectId = currentProject.id

        ;(0,_project__WEBPACK_IMPORTED_MODULE_1__.addTodo)(currentProjectId, todo)
        ;(0,_views__WEBPACK_IMPORTED_MODULE_3__.displayPage)()
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
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects)
/* harmony export */ });
let projects = [{id: 0, title: 'default', description: '', todos: [{title: 'todo1'}]}]
let currentProjectId = 0

class Project {
    constructor (title, description) {
        this.id = Math.max(...projects.map(project => project.id))+1
        this.title = title
        this.description = description
        this.todos = []
    }
}

function persistProjects() {
    localStorage.setItem('allProjects', JSON.stringify(projects))
}

function retrieveProjects() {
    projects = JSON.parse(localStorage.getItem('allProjects')) ?? projects
}

function addProject(project) {
    projects.push(project)
    persistProjects()
}

function getAllProjects() {
    retrieveProjects()
    return projects
}

function getCurrentProject() {
    return projects.find(p => p.id === currentProjectId)
}

function setCurrentProject(project) {
    currentProjectId = project.id
}

function addTodo(projectId, todo) {
    projects.find(p => p.id === projectId).todos.push(todo)
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = false
    }
}

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProjectForm": () => (/* binding */ showProjectForm),
/* harmony export */   "showProjectPage": () => (/* binding */ showProjectPage),
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu),
/* harmony export */   "displayPage": () => (/* binding */ displayPage),
/* harmony export */   "showTodoForm": () => (/* binding */ showTodoForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function showProjectForm() {
    clearForms()
    document.querySelector('#project-form').style.display = 'grid'
    document.querySelector('#todo-form').style.display = 'none'
    document.querySelector('#project-page').style.display = 'none'   
}

function showProjectPage() {
    document.querySelector('#project-form').style.display = 'none'
    document.querySelector('#todo-form').style.display = 'none'
    document.querySelector('#project-page').style.display = 'block'
}

function displayMenu() {
    const projectsList = document.querySelector('.projects-list')
    projectsList.innerHTML = ''

    const projects = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)()

    projects.forEach(p => {
        const newProject = document.createElement('li')
        newProject.setAttribute('project-id', p.id)
        newProject.setAttribute('class', 'menu-project')
        newProject.textContent = p.title
        newProject.addEventListener('click', function() {
            ;(0,_project__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(p)
            displayPage()
        })
        projectsList.appendChild(newProject)
        
    })
    
}

function displayPage() {
    const projectTitle = document.querySelector('#project-title')
    const projectDescription = document.querySelector('#project-description')
    const projectTodos = document.querySelector('#project-todos')

    const currentProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)()

    projectTitle.textContent = currentProject.title
    projectDescription.textContent = currentProject.description
    projectTodos.innerHTML = ''

    currentProject.todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.title
        projectTodos.appendChild(li)
    })
    showProjectPage()
    markCurrentProject(currentProject)
}

function showTodoForm() {
    clearForms()
    document.querySelector('#todo-form').style.display = 'grid'
}

function markCurrentProject(currentProject) {
    const projectsList = document.querySelector('.projects-list').childNodes
    projectsList.forEach(p => p.classList.remove('selected-project'))

    const currentPage = Array.from(projectsList).find(p => parseInt(p.getAttribute('project-id')) === currentProject.id)
    currentPage.classList.add('selected-project')
}

function clearForms() {
    document.querySelectorAll('input').forEach(i => i.value = '')
    document.getElementById('todo-priority').checked = false
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler */ "./src/handler.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views */ "./src/views.js");




(0,_handler__WEBPACK_IMPORTED_MODULE_1__.projectListeners)()
;(0,_handler__WEBPACK_IMPORTED_MODULE_1__.todoListeners)()
;(0,_views__WEBPACK_IMPORTED_MODULE_2__.showProjectPage)()
;(0,_views__WEBPACK_IMPORTED_MODULE_2__.displayMenu)()
;(0,_views__WEBPACK_IMPORTED_MODULE_2__.displayPage)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0EsT0FBTyx1Q0FBdUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNCQUFzQjtBQUM1QjtBQUNBLE1BQU0sOEJBQThCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LHVEQUFTOztBQUU1Qix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQy9LQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDdUM7QUFDUTs7QUFFcEUsMERBQWdCO0FBQ2hCLHdEQUFhO0FBQ2Isd0RBQWU7QUFDZixvREFBVztBQUNYLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvdmlld3MuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvRGF0ZVJhbmdlUGlja2VyLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL0RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9ldmVudHMvaW5wdXRGaWVsZExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9ldmVudHMvb3RoZXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL3BpY2tlckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9pMThuL2Jhc2UtbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9saWIvZGF0ZS1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9saWIvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvb3B0aW9ucy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9vcHRpb25zL3Byb2Nlc3NPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci9QaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3RlbXBsYXRlcy9jYWxlbmRhcldlZWtzVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3RlbXBsYXRlcy9kYXlzVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3RlbXBsYXRlcy9waWNrZXJUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdmlld3MvRGF5c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL01vbnRoc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL1llYXJzVmlldy5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaWduaWthJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIiwgY3Vyc2l2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0QzlDQjtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTVEFSVCBMRUZUIE1FTlUgKi9cXG5cXG4ubGVmdC1tZW51IHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNjNiO1xcbiAgICBjb2xvcjogI0M5RERFRTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOURERUU7XFxuICAgIGNvbG9yOiAjQzlEREVFO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLm1lbnUtdGl0bGVzIHtcXG4gICAgY29sb3I6ICMxNEM5Q0I7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnUtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1lbnUtcHJvamVjdDpob3ZlciwgLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxYzFmO1xcbn1cXG5cXG5cXG4vKiBFTkQgTEVGVCBNRU5VICovXFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXG59XFxuXFxuLyogU1RBUlQgUFJPSkVDVCBQQUdFICovXFxuI3BhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jcHJvamVjdC1wYWdlIHtcXG4gICAgcGFkZGluZzogNDBweCAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLm5ldy10b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBFTkQgUFJPSkVDVCBQQUdFICovXFxuXFxuLyogU1RBUlQgVE9ETyBGT1JNICovXFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggODBweDtcXG59XFxuXFxuLnRlbXBsYXRlLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM1MzY0NmQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNEM5Q0I7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRjOGNiODg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0QzlDQjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5M2E4O1xcbiAgICBib3JkZXItY29sb3I6ICMwYjkzYTg7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDOURERUU7XFxufVxcblxcbi5wcmlvcml0eS1jaGVja2JveCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBjb2xvcjogIzUzNjQ2ZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlEREVFO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCBpbnB1dDpob3Zlciwgc2VsZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNEM5Q0I7XFxufVxcblxcbnNlbGVjdDpob3ZlciwgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBFTkQgVE9ETyBGT1JNICovXFxuXFxuLyogU1RBUlQgTU9EQUwgKi9cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubW9kYWwtYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzYzYjtcXG4gICAgY29sb3I6ICNDOURERUU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA0MHB4IDYwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOURERUU7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnllcy1idXR0b24sIC5uby1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTRDOUNCO1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5uby1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnllcy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRDOUNCO1xcbn1cXG5cXG4ubm8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTRDOUNCO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRDOUNCO1xcbn1cXG5cXG4ueWVzLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBiOTNhODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTNhODtcXG59XFxuXFxuLyogRU5EIE1PREFMICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxxQkFBcUI7O0FBRXJCLG9CQUFvQjs7QUFFcEI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLGtCQUFrQjs7QUFFbEIsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaWduaWthJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIiwgY3Vyc2l2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0QzlDQjtcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTVEFSVCBMRUZUIE1FTlUgKi9cXG5cXG4ubGVmdC1tZW51IHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNjNiO1xcbiAgICBjb2xvcjogI0M5RERFRTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOURERUU7XFxuICAgIGNvbG9yOiAjQzlEREVFO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLm1lbnUtdGl0bGVzIHtcXG4gICAgY29sb3I6ICMxNEM5Q0I7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnUtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1lbnUtcHJvamVjdDpob3ZlciwgLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxYzFmO1xcbn1cXG5cXG5cXG4vKiBFTkQgTEVGVCBNRU5VICovXFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXG59XFxuXFxuLyogU1RBUlQgUFJPSkVDVCBQQUdFICovXFxuI3BhZ2Utc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jcHJvamVjdC1wYWdlIHtcXG4gICAgcGFkZGluZzogNDBweCAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLm5ldy10b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBFTkQgUFJPSkVDVCBQQUdFICovXFxuXFxuLyogU1RBUlQgVE9ETyBGT1JNICovXFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggODBweDtcXG59XFxuXFxuLnRlbXBsYXRlLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6ICM1MzY0NmQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNEM5Q0I7XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRjOGNiODg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0QzlDQjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5M2E4O1xcbiAgICBib3JkZXItY29sb3I6ICMwYjkzYTg7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDOURERUU7XFxufVxcblxcbi5wcmlvcml0eS1jaGVja2JveCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBjb2xvcjogIzUzNjQ2ZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlEREVFO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCBpbnB1dDpob3Zlciwgc2VsZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNEM5Q0I7XFxufVxcblxcbnNlbGVjdDpob3ZlciwgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBFTkQgVE9ETyBGT1JNICovXFxuXFxuLyogU1RBUlQgTU9EQUwgKi9cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubW9kYWwtYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzYzYjtcXG4gICAgY29sb3I6ICNDOURERUU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA0MHB4IDYwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOURERUU7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnllcy1idXR0b24sIC5uby1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTRDOUNCO1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5uby1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnllcy1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRDOUNCO1xcbn1cXG5cXG4ubm8tYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTRDOUNCO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRDOUNCO1xcbn1cXG5cXG4ueWVzLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBiOTNhODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTNhODtcXG59XFxuXFxuLyogRU5EIE1PREFMICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCJcbmltcG9ydCB7IGFkZFByb2plY3QsIFByb2plY3QsIGFkZFRvZG8sIHNldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0IHsgRGF0ZXBpY2tlciB9IGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyJztcbmltcG9ydCB7IHN1YiB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZGlzcGxheU1lbnUsIGRpc3BsYXlQYWdlLCBzaG93UHJvamVjdEZvcm0sIHNob3dQcm9qZWN0UGFnZSwgc2hvd1RvZG9Gb3JtIH0gZnJvbSBcIi4vdmlld3NcIjtcblxuZnVuY3Rpb24gcHJvamVjdExpc3RlbmVycygpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0JylcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3RGb3JtKVxuXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdCcpXG4gICAgY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9qZWN0UGFnZSlcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXByb2plY3QtdGl0bGVdJykudmFsdWVcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXByb2plY3QtZGVzY3JpcHRpb25dJykudmFsdWVcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKVxuXG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdClcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdClcbiAgICAgICAgZGlzcGxheU1lbnUoKVxuICAgICAgICBkaXNwbGF5UGFnZSgpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJylcbiAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG9Gb3JtKVxuXG4gICAgY29uc3QgY2FuY2VsVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdG9kbycpXG4gICAgY2FuY2VsVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9qZWN0UGFnZSlcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kdWVEYXRlJylcbiAgICBjb25zdCBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoZGF0ZSlcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpLnZhbHVlXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZGF0ZXBpY2tlci52YWx1ZVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5JykuY2hlY2tlZFxuXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZFxuXG4gICAgICAgIGFkZFRvZG8oY3VycmVudFByb2plY3RJZCwgdG9kbylcbiAgICAgICAgZGlzcGxheVBhZ2UoKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IHsgcHJvamVjdExpc3RlbmVycywgdG9kb0xpc3RlbmVycyB9XG4iLCJsZXQgcHJvamVjdHMgPSBbe2lkOiAwLCB0aXRsZTogJ2RlZmF1bHQnLCBkZXNjcmlwdGlvbjogJycsIHRvZG9zOiBbe3RpdGxlOiAndG9kbzEnfV19XVxubGV0IGN1cnJlbnRQcm9qZWN0SWQgPSAwXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pZCA9IE1hdGgubWF4KC4uLnByb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QuaWQpKSsxXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy50b2RvcyA9IFtdXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwZXJzaXN0UHJvamVjdHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3RzKCkge1xuICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSkgPz8gcHJvamVjdHNcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgIHBlcnNpc3RQcm9qZWN0cygpXG59XG5cbmZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHJpZXZlUHJvamVjdHMoKVxuICAgIHJldHVybiBwcm9qZWN0c1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwID0+IHAuaWQgPT09IGN1cnJlbnRQcm9qZWN0SWQpXG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50UHJvamVjdElkID0gcHJvamVjdC5pZFxufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHByb2plY3RJZCwgdG9kbykge1xuICAgIHByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpLnRvZG9zLnB1c2godG9kbylcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgUHJvamVjdCwgYWRkVG9kbywgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0LCBnZXRBbGxQcm9qZWN0cyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2VcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0QWxsUHJvamVjdHMsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIlxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKSB7XG4gICAgY2xlYXJGb3JtcygpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnICAgXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0UGFnZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0JylcbiAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtaWQnLCBwLmlkKVxuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1wcm9qZWN0JylcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHAudGl0bGVcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocClcbiAgICAgICAgICAgIGRpc3BsYXlQYWdlKClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlKCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbicpXG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdG9kb3MnKVxuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpXG5cbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZVxuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgcHJvamVjdFRvZG9zLmlubmVySFRNTCA9ICcnXG5cbiAgICBjdXJyZW50UHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICAgIHByb2plY3RUb2Rvcy5hcHBlbmRDaGlsZChsaSlcbiAgICB9KVxuICAgIHNob3dQcm9qZWN0UGFnZSgpXG4gICAgbWFya0N1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KVxufVxuXG5mdW5jdGlvbiBzaG93VG9kb0Zvcm0oKSB7XG4gICAgY2xlYXJGb3JtcygpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcbn1cblxuZnVuY3Rpb24gbWFya0N1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKS5jaGlsZE5vZGVzXG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXByb2plY3QnKSlcblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gQXJyYXkuZnJvbShwcm9qZWN0c0xpc3QpLmZpbmQocCA9PiBwYXJzZUludChwLmdldEF0dHJpYnV0ZSgncHJvamVjdC1pZCcpKSA9PT0gY3VycmVudFByb2plY3QuaWQpXG4gICAgY3VycmVudFBhZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpXG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKGkgPT4gaS52YWx1ZSA9ICcnKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JykuY2hlY2tlZCA9IGZhbHNlXG59XG5cbmV4cG9ydCB7IHNob3dQcm9qZWN0Rm9ybSwgc2hvd1Byb2plY3RQYWdlLCBkaXNwbGF5TWVudSwgZGlzcGxheVBhZ2UsIHNob3dUb2RvRm9ybSB9IiwiaW1wb3J0IHtyZWdpc3Rlckxpc3RlbmVycywgdW5yZWdpc3Rlckxpc3RlbmVyc30gZnJvbSAnLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tICcuL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXIuanMnO1xuXG4vLyBmaWx0ZXIgb3V0IHRoZSBjb25maWcgb3B0aW9ucyBpbmFwcHJvcHJpdGUgdG8gcGFzcyB0byBEYXRlcGlja2VyXG5mdW5jdGlvbiBmaWx0ZXJPcHRpb25zKG9wdGlvbnMpIHtcbiAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gIGRlbGV0ZSBuZXdPcHRzLmlucHV0cztcbiAgZGVsZXRlIG5ld09wdHMuYWxsb3dPbmVTaWRlZFJhbmdlO1xuICBkZWxldGUgbmV3T3B0cy5tYXhOdW1iZXJPZkRhdGVzOyAvLyB0byBlbnN1cmUgZWFjaCBkYXRlcGlja2VyIGhhbmRsZXMgYSBzaW5nbGUgZGF0ZVxuXG4gIHJldHVybiBuZXdPcHRzO1xufVxuXG5mdW5jdGlvbiBzZXR1cERhdGVwaWNrZXIocmFuZ2VwaWNrZXIsIGNoYW5nZURhdGVMaXN0ZW5lciwgZWwsIG9wdGlvbnMpIHtcbiAgcmVnaXN0ZXJMaXN0ZW5lcnMocmFuZ2VwaWNrZXIsIFtcbiAgICBbZWwsICdjaGFuZ2VEYXRlJywgY2hhbmdlRGF0ZUxpc3RlbmVyXSxcbiAgXSk7XG4gIG5ldyBEYXRlcGlja2VyKGVsLCBvcHRpb25zLCByYW5nZXBpY2tlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlRGF0ZShyYW5nZXBpY2tlciwgZXYpIHtcbiAgLy8gdG8gcHJldmVudCBib3RoIGRhdGVwaWNrZXJzIHRyaWdnZXIgdGhlIG90aGVyIHNpZGUncyB1cGRhdGUgZWFjaCBvdGhlclxuICBpZiAocmFuZ2VwaWNrZXIuX3VwZGF0aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJhbmdlcGlja2VyLl91cGRhdGluZyA9IHRydWU7XG5cbiAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICBpZiAodGFyZ2V0LmRhdGVwaWNrZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGVwaWNrZXJzID0gcmFuZ2VwaWNrZXIuZGF0ZXBpY2tlcnM7XG4gIGNvbnN0IHNldERhdGVPcHRpb25zID0ge3JlbmRlcjogZmFsc2V9O1xuICBjb25zdCBjaGFuZ2VkU2lkZSA9IHJhbmdlcGlja2VyLmlucHV0cy5pbmRleE9mKHRhcmdldCk7XG4gIGNvbnN0IG90aGVyU2lkZSA9IGNoYW5nZWRTaWRlID09PSAwID8gMSA6IDA7XG4gIGNvbnN0IGNoYW5nZWREYXRlID0gZGF0ZXBpY2tlcnNbY2hhbmdlZFNpZGVdLmRhdGVzWzBdO1xuICBjb25zdCBvdGhlckRhdGUgPSBkYXRlcGlja2Vyc1tvdGhlclNpZGVdLmRhdGVzWzBdO1xuXG4gIGlmIChjaGFuZ2VkRGF0ZSAhPT0gdW5kZWZpbmVkICYmIG90aGVyRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSA+IHRoZSBlbmQsIHN3YXAgdGhlbVxuICAgIGlmIChjaGFuZ2VkU2lkZSA9PT0gMCAmJiBjaGFuZ2VkRGF0ZSA+IG90aGVyRGF0ZSkge1xuICAgICAgZGF0ZXBpY2tlcnNbMF0uc2V0RGF0ZShvdGhlckRhdGUsIHNldERhdGVPcHRpb25zKTtcbiAgICAgIGRhdGVwaWNrZXJzWzFdLnNldERhdGUoY2hhbmdlZERhdGUsIHNldERhdGVPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZWRTaWRlID09PSAxICYmIGNoYW5nZWREYXRlIDwgb3RoZXJEYXRlKSB7XG4gICAgICBkYXRlcGlja2Vyc1swXS5zZXREYXRlKGNoYW5nZWREYXRlLCBzZXREYXRlT3B0aW9ucyk7XG4gICAgICBkYXRlcGlja2Vyc1sxXS5zZXREYXRlKG90aGVyRGF0ZSwgc2V0RGF0ZU9wdGlvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcmFuZ2VwaWNrZXIuYWxsb3dPbmVTaWRlZFJhbmdlKSB7XG4gICAgLy8gdG8gcHJldmVudCB0aGUgcmFuZ2UgZnJvbSBiZWNvbWluZyBvbmUtc2lkZWQsIGNvcHkgY2hhbmdlZCBzaWRlJ3NcbiAgICAvLyBzZWxlY3Rpb24gKG5vIG1hdHRlciBpZiBpdCdzIGVtcHR5KSB0byB0aGUgb3RoZXIgc2lkZVxuICAgIGlmIChjaGFuZ2VkRGF0ZSAhPT0gdW5kZWZpbmVkIHx8IG90aGVyRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXREYXRlT3B0aW9ucy5jbGVhciA9IHRydWU7XG4gICAgICBkYXRlcGlja2Vyc1tvdGhlclNpZGVdLnNldERhdGUoZGF0ZXBpY2tlcnNbY2hhbmdlZFNpZGVdLmRhdGVzLCBzZXREYXRlT3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGRhdGVwaWNrZXJzWzBdLnBpY2tlci51cGRhdGUoKS5yZW5kZXIoKTtcbiAgZGF0ZXBpY2tlcnNbMV0ucGlja2VyLnVwZGF0ZSgpLnJlbmRlcigpO1xuICBkZWxldGUgcmFuZ2VwaWNrZXIuX3VwZGF0aW5nO1xufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGRhdGUgcmFuZ2UgcGlja2VyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBpY2tlciAge1xuICAvKipcbiAgICogQ3JlYXRlIGEgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBhIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdIC0gY29uZmlnIG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy5pbnB1dHMpXG4gICAgICA/IG9wdGlvbnMuaW5wdXRzXG4gICAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJhbmdlcGlja2VyID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzLnNsaWNlKDAsIDIpO1xuICAgIHRoaXMuYWxsb3dPbmVTaWRlZFJhbmdlID0gISFvcHRpb25zLmFsbG93T25lU2lkZWRSYW5nZTtcblxuICAgIGNvbnN0IGNoYW5nZURhdGVMaXN0ZW5lciA9IG9uQ2hhbmdlRGF0ZS5iaW5kKG51bGwsIHRoaXMpO1xuICAgIGNvbnN0IGNsZWFuT3B0aW9ucyA9IGZpbHRlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gaW4gb3JkZXIgZm9yIGluaXRpYWwgZGF0ZSBzZXR1cCB0byB3b3JrIHJpZ2h0IHdoZW4gcGNpY0x2ZWwgPiAwLFxuICAgIC8vIGxldCBEYXRlcGlja2VyIGNvbnN0cnVjdG9yIGFkZCB0aGUgaW5zdGFuY2UgdG8gdGhlIHJhbmdlcGlja2VyXG4gICAgY29uc3QgZGF0ZXBpY2tlcnMgPSBbXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RhdGVwaWNrZXJzJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gZGF0ZXBpY2tlcnM7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNldHVwRGF0ZXBpY2tlcih0aGlzLCBjaGFuZ2VEYXRlTGlzdGVuZXIsIHRoaXMuaW5wdXRzWzBdLCBjbGVhbk9wdGlvbnMpO1xuICAgIHNldHVwRGF0ZXBpY2tlcih0aGlzLCBjaGFuZ2VEYXRlTGlzdGVuZXIsIHRoaXMuaW5wdXRzWzFdLCBjbGVhbk9wdGlvbnMpO1xuICAgIE9iamVjdC5mcmVlemUoZGF0ZXBpY2tlcnMpO1xuICAgIC8vIG5vcm1hbGl6ZSB0aGUgcmFuZ2UgaWYgaW5pdGFsIGRhdGVzIGFyZSBnaXZlblxuICAgIGlmIChkYXRlcGlja2Vyc1swXS5kYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBvbkNoYW5nZURhdGUodGhpcywge3RhcmdldDogdGhpcy5pbnB1dHNbMF19KTtcbiAgICB9IGVsc2UgaWYgKGRhdGVwaWNrZXJzWzFdLmRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9uQ2hhbmdlRGF0ZSh0aGlzLCB7dGFyZ2V0OiB0aGlzLmlucHV0c1sxXX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7QXJyYXl9IC0gc2VsZWN0ZWQgZGF0ZSBvZiB0aGUgbGlua2VkIGRhdGUgcGlja2Vyc1xuICAgKi9cbiAgZ2V0IGRhdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXJzLmxlbmd0aCA9PT0gMlxuICAgICAgPyBbXG4gICAgICAgICAgdGhpcy5kYXRlcGlja2Vyc1swXS5kYXRlc1swXSxcbiAgICAgICAgICB0aGlzLmRhdGVwaWNrZXJzWzFdLmRhdGVzWzBdLFxuICAgICAgICBdXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbmV3IHZhbHVlcyB0byB0aGUgY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWcgb3B0aW9ucyB0byB1cGRhdGVcbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuYWxsb3dPbmVTaWRlZFJhbmdlID0gISFvcHRpb25zLmFsbG93T25lU2lkZWRSYW5nZTtcblxuICAgIGNvbnN0IGNsZWFuT3B0aW9ucyA9IGZpbHRlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2Vyc1swXS5zZXRPcHRpb25zKGNsZWFuT3B0aW9ucyk7XG4gICAgdGhpcy5kYXRlcGlja2Vyc1sxXS5zZXRPcHRpb25zKGNsZWFuT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgRGF0ZVJhbmdlUGlja2VyIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVSYW5nZVBpY2tlcn0gLSB0aGUgaW5zdGFuY2UgZGVzdHJveWVkXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGF0ZXBpY2tlcnNbMF0uZGVzdHJveSgpO1xuICAgIHRoaXMuZGF0ZXBpY2tlcnNbMV0uZGVzdHJveSgpO1xuICAgIHVucmVnaXN0ZXJMaXN0ZW5lcnModGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudC5yYW5nZXBpY2tlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICpcbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIERhdGUgb2JqZWN0cyBieSBkZWZhdWx0LiBJZiBmb3JtYXQgc3RyaW5nIGlzIHBhc3NlZCxcbiAgICogaXQgcmV0dXJucyBkYXRlIHN0cmluZ3MgZm9ybWF0dGVkIGluIGdpdmVuIGZvcm1hdC5cbiAgICogVGhlIHJlc3VsdCBhcnJheSBhbHdheXMgY29udGFpbnMgMiBpdGVtcyAoc3RhcnQgZGF0ZS9lbmQgZGF0ZSkgYW5kXG4gICAqIHVuZGVmaW5lZCBpcyB1c2VkIGZvciB1bnNlbGVjdGVkIHNpZGUuIChlLmcuIElmIG5vbmUgaXMgc2VsZWN0ZWQsXG4gICAqIHRoZSByZXN1bHQgd2lsbCBiZSBbdW5kZWZpbmVkLCB1bmRlZmluZWRdLiBJZiBvbmx5IHRoZSBlbmQgZGF0ZSBpcyBzZXRcbiAgICogd2hlbiBhbGxvd09uZVNpZGVkUmFuZ2UgY29uZmlnIG9wdGlvbiBpcyB0cnVlLCBbdW5kZWZpbmVkLCBlbmREYXRlXSB3aWxsXG4gICAqIGJlIHJldHVybmVkLilcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbZm9ybWF0XSAtIEZvcm1hdCBzdHJpbmcgdG8gc3RyaW5naWZ5IHRoZSBkYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gLSBTdGFydCBhbmQgZW5kIGRhdGVzXG4gICAqL1xuICBnZXREYXRlcyhmb3JtYXQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZvcm1hdFxuICAgICAgPyBkYXRlID0+IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLmRhdGVwaWNrZXJzWzBdLmNvbmZpZy5sb2NhbGUpXG4gICAgICA6IGRhdGUgPT4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRlcy5tYXAoZGF0ZSA9PiBkYXRlID09PSB1bmRlZmluZWQgPyBkYXRlIDogY2FsbGJhY2soZGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKlxuICAgKiBUaGUgbWV0aG9kIGNhbGxzIGRhdGVwaWNrZXIuc2V0RGF0ZSgpIGludGVybmFsbHkgdXNpbmcgZWFjaCBvZiB0aGVcbiAgICogYXJndW1lbnRzIGluIHN0YXJ04oaSZW5kIG9yZGVyLlxuICAgKlxuICAgKiBXaGVuIGEgY2xlYXI6IHRydWUgb3B0aW9uIG9iamVjdCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBhIGRhdGUsIHRoZSBtZXRob2RcbiAgICogY2xlYXJzIHRoZSBkYXRlLlxuICAgKlxuICAgKiBJZiBhbiBpbnZhbGlkIGRhdGUsIHRoZSBzYW1lIGRhdGUgYXMgdGhlIGN1cnJlbnQgb25lIG9yIGFuIG9wdGlvbiBvYmplY3RcbiAgICogd2l0aG91dCBjbGVhcjogdHJ1ZSBpcyBwYXNzZWQsIHRoZSBtZXRob2QgY29uc2lkZXJzIHRoYXQgYXJndW1lbnQgYXMgYW5cbiAgICogXCJpbmVmZmVjdGl2ZVwiIGFyZ3VtZW50IGJlY2F1c2UgY2FsbGluZyBkYXRlcGlja2VyLnNldERhdGUoKSB3aXRoIHRob3NlXG4gICAqIHZhbHVlcyBtYWtlcyBubyBjaGFuZ2VzIHRvIHRoZSBkYXRlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogV2hlbiB0aGUgYWxsb3dPbmVTaWRlZFJhbmdlIGNvbmZpZyBvcHRpb24gaXMgZmFsc2UsIHBhc3Npbmcge2NsZWFyOiB0cnVlfVxuICAgKiB0byBjbGVhciB0aGUgcmFuZ2Ugd29ya3Mgb25seSB3aGVuIGl0IGlzIGRvbmUgdG8gdGhlIGxhc3QgZWZmZWN0aXZlXG4gICAqIGFyZ3VtZW50IChpbiBvdGhlciB3b3JkcywgcGFzc2VkIHRvIHJhbmdlRW5kIG9yIHRvIHJhbmdlU3RhcnQgYWxvbmcgd2l0aFxuICAgKiBpbmVmZmVjdGl2ZSByYW5nZUVuZCkuIFRoaXMgaXMgYmVjYXVzZSB3aGVuIHRoZSBkYXRlIHJhbmdlIGlzIGNoYW5nZWQsXG4gICAqIGl0IGdldHMgbm9ybWFsaXplZCBiYXNlZCBvbiB0aGUgbGFzdCBjaGFuZ2UgYXQgdGhlIGVuZCBvZiB0aGUgY2hhbmdpbmdcbiAgICogcHJvY2Vzcy5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfE51bWJlcnxTdHJpbmd8T2JqZWN0fSByYW5nZVN0YXJ0IC0gU3RhcnQgZGF0ZSBvZiB0aGUgcmFuZ2VcbiAgICogb3Ige2NsZWFyOiB0cnVlfSB0byBjbGVhciB0aGUgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV8TnVtYmVyfFN0cmluZ3xPYmplY3R9IHJhbmdlRW5kIC0gRW5kIGRhdGUgb2YgdGhlIHJhbmdlXG4gICAqIG9yIHtjbGVhcjogdHJ1ZX0gdG8gY2xlYXIgdGhlIGRhdGVcbiAgICovXG4gIHNldERhdGVzKHJhbmdlU3RhcnQsIHJhbmdlRW5kKSB7XG4gICAgY29uc3QgW2RhdGVwaWNrZXIwLCBkYXRlcGlja2VyMV0gPSB0aGlzLmRhdGVwaWNrZXJzO1xuICAgIGNvbnN0IG9yaWdEYXRlcyA9IHRoaXMuZGF0ZXM7XG5cbiAgICAvLyBJZiByYW5nZSBub3JtYWxpemF0aW9uIHJ1bnMgb24gZXZlcnkgY2hhbmdlLCB3ZSBjYW4ndCBzZXQgYSBuZXcgcmFuZ2VcbiAgICAvLyB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IHJhbmdlIGNvcnJlY3RseSBiZWNhdXNlIHRoZVxuICAgIC8vIG5vcm1hbGl6YXRpb24gcHJvY2VzcyBzd2FwcyBzdGFydOKGlO+4jmVuZCByaWdodCBhZnRlciBzZXR0aW5nIHRoZSBuZXcgc3RhcnRcbiAgICAvLyBkYXRlLiBUbyBwcmV2ZW50IHRoaXMsIHRoZSBub3JtYWxpemF0aW9uIHByb2Nlc3MgbmVlZHMgdG8gcnVuIG9uY2UgYWZ0ZXJcbiAgICAvLyBib3RoIG9mIHRoZSBuZXcgZGF0ZXMgYXJlIHNldC5cbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgZGF0ZXBpY2tlcjAuc2V0RGF0ZShyYW5nZVN0YXJ0KTtcbiAgICBkYXRlcGlja2VyMS5zZXREYXRlKHJhbmdlRW5kKTtcbiAgICBkZWxldGUgdGhpcy5fdXBkYXRpbmc7XG5cbiAgICBpZiAoZGF0ZXBpY2tlcjEuZGF0ZXNbMF0gIT09IG9yaWdEYXRlc1sxXSkge1xuICAgICAgb25DaGFuZ2VEYXRlKHRoaXMsIHt0YXJnZXQ6IHRoaXMuaW5wdXRzWzFdfSk7XG4gICAgfSBlbHNlIGlmIChkYXRlcGlja2VyMC5kYXRlc1swXSAhPT0gb3JpZ0RhdGVzWzBdKSB7XG4gICAgICBvbkNoYW5nZURhdGUodGhpcywge3RhcmdldDogdGhpcy5pbnB1dHNbMF19KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7bGFzdEl0ZW1PZiwgc3RyaW5nVG9BcnJheSwgaXNJblJhbmdlfSBmcm9tICcuL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5LCByZWd1bGFyaXplRGF0ZX0gZnJvbSAnLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlRGF0ZSwgZm9ybWF0RGF0ZX0gZnJvbSAnLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtpc0FjdGl2ZUVsZW1lbnR9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTGlzdGVuZXJzLCB1bnJlZ2lzdGVyTGlzdGVuZXJzfSBmcm9tICcuL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge2xvY2FsZXN9IGZyb20gJy4vaTE4bi9iYXNlLWxvY2FsZXMuanMnO1xuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9kZWZhdWx0T3B0aW9ucy5qcyc7XG5pbXBvcnQgcHJvY2Vzc09wdGlvbnMgZnJvbSAnLi9vcHRpb25zL3Byb2Nlc3NPcHRpb25zLmpzJztcbmltcG9ydCBQaWNrZXIgZnJvbSAnLi9waWNrZXIvUGlja2VyLmpzJztcbmltcG9ydCB7dHJpZ2dlckRhdGVwaWNrZXJFdmVudH0gZnJvbSAnLi9ldmVudHMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7b25LZXlkb3duLCBvbkZvY3VzLCBvbk1vdXNlZG93biwgb25DbGlja0lucHV0LCBvblBhc3RlfSBmcm9tICcuL2V2ZW50cy9pbnB1dEZpZWxkTGlzdGVuZXJzLmpzJztcbmltcG9ydCB7b25DbGlja091dHNpZGV9IGZyb20gJy4vZXZlbnRzL290aGVyTGlzdGVuZXJzLmpzJztcblxuZnVuY3Rpb24gc3RyaW5naWZ5RGF0ZXMoZGF0ZXMsIGNvbmZpZykge1xuICByZXR1cm4gZGF0ZXNcbiAgICAubWFwKGR0ID0+IGZvcm1hdERhdGUoZHQsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5sb2NhbGUpKVxuICAgIC5qb2luKGNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbn1cblxuLy8gcGFyc2UgaW5wdXQgZGF0ZXMgYW5kIGNyZWF0ZSBhbiBhcnJheSBvZiB0aW1lIHZhbHVlcyBmb3Igc2VsZWN0aW9uXG4vLyByZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbm8gdmFsaWQgZGF0ZXMgaW4gaW5wdXREYXRlc1xuLy8gd2hlbiBvcmlnRGF0ZXMgKGN1cnJlbnQgc2VsZWN0aW9uKSBpcyBwYXNzZWQsIHRoZSBmdW5jdGlvbiB3b3JrcyB0byBtaXhcbi8vIHRoZSBpbnB1dCBkYXRlcyBpbnRvIHRoZSBjdXJyZW50IHNlbGVjdGlvblxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0RGF0ZXMoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBjb25zdCB7Y29uZmlnLCBkYXRlczogb3JpZ0RhdGVzLCByYW5nZXBpY2tlcn0gPSBkYXRlcGlja2VyO1xuICBjb25zdCB7Y29uZmlnLCBkYXRlczogb3JpZ0RhdGVzLCByYW5nZVNpZGVJbmRleH0gPSBkYXRlcGlja2VyO1xuICBpZiAoaW5wdXREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBlbXB0eSBpbnB1dCBpcyBjb25zaWRlcmVkIHZhbGlkIHVubGVzcyBvcmlnaURhdGVzIGlzIHBhc3NlZFxuICAgIHJldHVybiBjbGVhciA/IFtdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gY29uc3QgcmFuZ2VFbmQgPSByYW5nZXBpY2tlciAmJiBkYXRlcGlja2VyID09PSByYW5nZXBpY2tlci5kYXRlcGlja2Vyc1sxXTtcbiAgbGV0IG5ld0RhdGVzID0gaW5wdXREYXRlcy5yZWR1Y2UoKGRhdGVzLCBkdCkgPT4ge1xuICAgIGxldCBkYXRlID0gcGFyc2VEYXRlKGR0LCBjb25maWcuZm9ybWF0LCBjb25maWcubG9jYWxlKTtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGF0ZXM7XG4gICAgfVxuICAgIC8vIGFkanVzdCB0byAxc3Qgb2YgdGhlIG1vbnRoL0phbiAxc3Qgb2YgdGhlIHllYXJcbiAgICAvLyBvciB0byB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbmgvRGVjIDMxc3Qgb2YgdGhlIHllYXIgaWYgdGhlIGRhdGVwaWNrZXJcbiAgICAvLyBpcyB0aGUgcmFuZ2UtZW5kIHBpY2tlciBvZiBhIHJhbmdlcGlja2VyXG4gICAgZGF0ZSA9IHJlZ3VsYXJpemVEYXRlKGRhdGUsIGNvbmZpZy5waWNrTGV2ZWwsIHJhbmdlU2lkZUluZGV4KTtcbiAgICBpZiAoXG4gICAgICBpc0luUmFuZ2UoZGF0ZSwgY29uZmlnLm1pbkRhdGUsIGNvbmZpZy5tYXhEYXRlKVxuICAgICAgJiYgIWRhdGVzLmluY2x1ZGVzKGRhdGUpXG4gICAgICAmJiAhY29uZmlnLmRhdGVzRGlzYWJsZWQuaW5jbHVkZXMoZGF0ZSlcbiAgICAgICYmIChjb25maWcucGlja0xldmVsID4gMCB8fCAhY29uZmlnLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhuZXcgRGF0ZShkYXRlKS5nZXREYXkoKSkpXG4gICAgKSB7XG4gICAgICBkYXRlcy5wdXNoKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZXM7XG4gIH0sIFtdKTtcbiAgaWYgKG5ld0RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY29uZmlnLm11bHRpZGF0ZSAmJiAhY2xlYXIpIHtcbiAgICAvLyBnZXQgdGhlIHN5bm1ldHJpYyBkaWZmZXJlbmNlIGJldHdlZW4gb3JpZ0RhdGVzIGFuZCBuZXdEYXRlc1xuICAgIG5ld0RhdGVzID0gbmV3RGF0ZXMucmVkdWNlKChkYXRlcywgZGF0ZSkgPT4ge1xuICAgICAgaWYgKCFvcmlnRGF0ZXMuaW5jbHVkZXMoZGF0ZSkpIHtcbiAgICAgICAgZGF0ZXMucHVzaChkYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRlcztcbiAgICB9LCBvcmlnRGF0ZXMuZmlsdGVyKGRhdGUgPT4gIW5ld0RhdGVzLmluY2x1ZGVzKGRhdGUpKSk7XG4gIH1cbiAgLy8gZG8gbGVuZ3RoIGNoZWNrIGFsd2F5cyBiZWNhdXNlIHVzZXIgY2FuIGlucHV0IG11bHRpcGxlIGRhdGVzIHJlZ2FyZGxlc3Mgb2YgdGhlIG1vZGVcbiAgcmV0dXJuIGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzICYmIG5ld0RhdGVzLmxlbmd0aCA+IGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzXG4gICAgPyBuZXdEYXRlcy5zbGljZShjb25maWcubWF4TnVtYmVyT2ZEYXRlcyAqIC0xKVxuICAgIDogbmV3RGF0ZXM7XG59XG5cbi8vIHJlZnJlc2ggdGhlIFVJIGVsZW1lbnRzXG4vLyBtb2RlczogMTogaW5wdXQgb25seSwgMiwgcGlja2VyIG9ubHksIDMgYm90aFxuZnVuY3Rpb24gcmVmcmVzaFVJKGRhdGVwaWNrZXIsIG1vZGUgPSAzLCBxdWlja1JlbmRlciA9IHRydWUpIHtcbiAgY29uc3Qge2NvbmZpZywgcGlja2VyLCBpbnB1dEZpZWxkfSA9IGRhdGVwaWNrZXI7XG4gIGlmIChtb2RlICYgMikge1xuICAgIGNvbnN0IG5ld1ZpZXcgPSBwaWNrZXIuYWN0aXZlID8gY29uZmlnLnBpY2tMZXZlbCA6IGNvbmZpZy5zdGFydFZpZXc7XG4gICAgcGlja2VyLnVwZGF0ZSgpLmNoYW5nZVZpZXcobmV3VmlldykucmVuZGVyKHF1aWNrUmVuZGVyKTtcbiAgfVxuICBpZiAobW9kZSAmIDEgJiYgaW5wdXRGaWVsZCkge1xuICAgIGlucHV0RmllbGQudmFsdWUgPSBzdHJpbmdpZnlEYXRlcyhkYXRlcGlja2VyLmRhdGVzLCBjb25maWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgb3B0aW9ucykge1xuICBsZXQge2NsZWFyLCByZW5kZXIsIGF1dG9oaWRlLCByZXZlcnR9ID0gb3B0aW9ucztcbiAgaWYgKHJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVuZGVyID0gdHJ1ZTtcbiAgfVxuICBpZiAoIXJlbmRlcikge1xuICAgIGF1dG9oaWRlID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoYXV0b2hpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGF1dG9oaWRlID0gZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGU7XG4gIH1cblxuICBjb25zdCBuZXdEYXRlcyA9IHByb2Nlc3NJbnB1dERhdGVzKGRhdGVwaWNrZXIsIGlucHV0RGF0ZXMsIGNsZWFyKTtcbiAgaWYgKCFuZXdEYXRlcyAmJiAhcmV2ZXJ0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChuZXdEYXRlcyAmJiBuZXdEYXRlcy50b1N0cmluZygpICE9PSBkYXRlcGlja2VyLmRhdGVzLnRvU3RyaW5nKCkpIHtcbiAgICBkYXRlcGlja2VyLmRhdGVzID0gbmV3RGF0ZXM7XG4gICAgcmVmcmVzaFVJKGRhdGVwaWNrZXIsIHJlbmRlciA/IDMgOiAxKTtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KGRhdGVwaWNrZXIsICdjaGFuZ2VEYXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVmcmVzaFVJKGRhdGVwaWNrZXIsIDEpO1xuICB9XG5cbiAgaWYgKGF1dG9oaWRlKSB7XG4gICAgZGF0ZXBpY2tlci5oaWRlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBkYXRlIHBpY2tlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRhdGUgcGlja2VyXG4gICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmQgYSBkYXRlIHBpY2tlclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGNvbmZpZyBvcHRpb25zXG4gICAqIEBwYXJhbSAge0RhdGVSYW5nZVBpY2tlcn0gW3JhbmdlcGlja2VyXSAtIERhdGVSYW5nZVBpY2tlciBpbnN0YW5jZSB0aGVcbiAgICogZGF0ZSBwaWNrZXIgYmVsb25ncyB0by4gVXNlIHRoaXMgb25seSB3aGVuIGNyZWF0aW5nIGRhdGUgcGlja2VyIGFzIGEgcGFydFxuICAgKiBvZiBkYXRlIHJhbmdlIHBpY2tlclxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9LCByYW5nZXBpY2tlciA9IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuZGF0ZXBpY2tlciA9IHRoaXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBidXR0b25DbGFzczogKG9wdGlvbnMuYnV0dG9uQ2xhc3MgJiYgU3RyaW5nKG9wdGlvbnMuYnV0dG9uQ2xhc3MpKSB8fCAnYnV0dG9uJyxcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGRlZmF1bHRWaWV3RGF0ZTogdG9kYXkoKSxcbiAgICAgIG1heERhdGU6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGU6IHVuZGVmaW5lZCxcbiAgICB9LCBwcm9jZXNzT3B0aW9ucyhkZWZhdWx0T3B0aW9ucywgdGhpcykpO1xuICAgIC8vIGNvbmZpZ3VyZSBieSB0eXBlXG4gICAgY29uc3QgaW5saW5lID0gdGhpcy5pbmxpbmUgPSBlbGVtZW50LnRhZ05hbWUgIT09ICdJTlBVVCc7XG4gICAgbGV0IGlucHV0RmllbGQ7XG4gICAgaWYgKGlubGluZSkge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICAvLyBvbWl0IHN0cmluZyB0eXBlIGNoZWNrIGJlY2F1c2UgaXQgZG9lc24ndCBndWFyYW50ZWUgdG8gYXZvaWQgZXJyb3JzXG4gICAgICAgIC8vIChpbnZhbGlkIHNlbGVjdG9yIHN0cmluZyBjYXVzZXMgYWJlbmQgd2l0aCBzeXRheCBlcnJvcilcbiAgICAgICAgY29uZmlnLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgICA/IG9wdGlvbnMuY29udGFpbmVyXG4gICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIGlucHV0RmllbGQgPSB0aGlzLmlucHV0RmllbGQgPSBlbGVtZW50O1xuICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlcGlja2VyLWlucHV0Jyk7XG4gICAgfVxuICAgIGlmIChyYW5nZXBpY2tlcikge1xuICAgICAgLy8gY2hlY2sgdmFsaWRpcnlcbiAgICAgIGNvbnN0IGluZGV4ID0gcmFuZ2VwaWNrZXIuaW5wdXRzLmluZGV4T2YoaW5wdXRGaWVsZCk7XG4gICAgICBjb25zdCBkYXRlcGlja2VycyA9IHJhbmdlcGlja2VyLmRhdGVwaWNrZXJzO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IDEgfHwgIUFycmF5LmlzQXJyYXkoZGF0ZXBpY2tlcnMpKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHJhbmdlcGlja2VyIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIC8vIGF0dGFjaCBpdGFlbGYgdG8gdGhlIHJhbmdlcGlja2VyIGhlcmUgc28gdGhhdCBwcm9jZXNzSW5wdXREYXRlcygpIGNhblxuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIHJhbmdlLWVuZCBwaWNrZXIgb2YgdGhlIHJhbmdlcGlja2VyIHdoaWxlXG4gICAgICAvLyBzZXR0aW5nIGluaXRhbCB2YWx1ZXMgd2hlbiBwaWNrTGV2ZWwgPiAwXG4gICAgICBkYXRlcGlja2Vyc1tpbmRleF0gPSB0aGlzO1xuICAgICAgLy8gYWRkIGdldHRlciBmb3IgcmFuZ2VwaWNrZXJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmFuZ2VwaWNrZXInLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gcmFuZ2VwaWNrZXI7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmFuZ2VTaWRlSW5kZXgnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgY29uZmlnXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIHRoaXMpKTtcblxuICAgIC8vIHNldCBpbml0aWFsIGRhdGVzXG4gICAgbGV0IGluaXRpYWxEYXRlcztcbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBpbml0aWFsRGF0ZXMgPSBzdHJpbmdUb0FycmF5KGVsZW1lbnQuZGF0YXNldC5kYXRlLCBjb25maWcuZGF0ZURlbGltaXRlcik7XG4gICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0LmRhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxEYXRlcyA9IHN0cmluZ1RvQXJyYXkoaW5wdXRGaWVsZC52YWx1ZSwgY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmRhdGVzID0gW107XG4gICAgLy8gcHJvY2VzcyBpbml0aWFsIHZhbHVlXG4gICAgY29uc3QgaW5wdXREYXRlVmFsdWVzID0gcHJvY2Vzc0lucHV0RGF0ZXModGhpcywgaW5pdGlhbERhdGVzKTtcbiAgICBpZiAoaW5wdXREYXRlVmFsdWVzICYmIGlucHV0RGF0ZVZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRhdGVzID0gaW5wdXREYXRlVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5wdXRGaWVsZCkge1xuICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHN0cmluZ2lmeURhdGVzKHRoaXMuZGF0ZXMsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGlja2VyID0gdGhpcy5waWNrZXIgPSBuZXcgUGlja2VyKHRoaXMpO1xuXG4gICAgaWYgKGlubGluZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnMgaW4gb3RoZXIgbW9kZXNcbiAgICAgIGNvbnN0IG9uTW91c2Vkb3duRG9jdW1lbnQgPSBvbkNsaWNrT3V0c2lkZS5iaW5kKG51bGwsIHRoaXMpO1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW1xuICAgICAgICBbaW5wdXRGaWVsZCwgJ2tleWRvd24nLCBvbktleWRvd24uYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnZm9jdXMnLCBvbkZvY3VzLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ21vdXNlZG93bicsIG9uTW91c2Vkb3duLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ2NsaWNrJywgb25DbGlja0lucHV0LmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ3Bhc3RlJywgb25QYXN0ZS5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2RvY3VtZW50LCAnbW91c2Vkb3duJywgb25Nb3VzZWRvd25Eb2N1bWVudF0sXG4gICAgICAgIFtkb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCBvbk1vdXNlZG93bkRvY3VtZW50XSxcbiAgICAgICAgW3dpbmRvdywgJ3Jlc2l6ZScsIHBpY2tlci5wbGFjZS5iaW5kKHBpY2tlcildXG4gICAgICBdO1xuICAgICAgcmVnaXN0ZXJMaXN0ZW5lcnModGhpcywgbGlzdGVuZXJzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IERhdGUgb2JqZWN0IG9yIHRpbWUgdmFsdWUgaW4gZ2l2ZW4gZm9ybWF0IGFuZCBsYW5ndWFnZVxuICAgKiBAcGFyYW0gIHtEYXRlfE51bWJlcn0gZGF0ZSAtIGRhdGUgb3IgdGltZSB2YWx1ZSB0byBmb3JtYXRcbiAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gZm9ybWF0IC0gZm9ybWF0IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB0b0Rpc3BsYXkoKSBjdXN0b20gZm9ybWF0dGVyLCB3aG9zZSBzaWduYXR1cmUgaXNcbiAgICogLSBhcmdzOlxuICAgKiAgIC0gZGF0ZToge0RhdGV9IC0gRGF0ZSBpbnN0YW5jZSBvZiB0aGUgZGF0ZSBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gZm9ybWF0OiB7T2JqZWN0fSAtIHRoZSBmb3JtYXQgb2JqZWN0IHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBsb2NhbGU6IHtPYmplY3R9IC0gbG9jYWxlIGZvciB0aGUgbGFuZ3VhZ2Ugc3BlY2lmaWVkIGJ5IGBsYW5nYFxuICAgKiAtIHJldHVybjpcbiAgICogICAgIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2xhbmc9ZW5dIC0gbGFuZ3VhZ2UgY29kZSBmb3IgdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWQgZGF0ZVxuICAgKi9cbiAgc3RhdGljIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsYW5nKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsYW5nICYmIGxvY2FsZXNbbGFuZ10gfHwgbG9jYWxlcy5lbik7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgZGF0ZSBzdHJpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfERhdGV8TnVtYmVyfSBkYXRlU3RyIC0gZGF0ZSBzdHJpbmcsIERhdGUgb2JqZWN0IG9yIHRpbWVcbiAgICogdmFsdWUgdG8gcGFyc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gZm9ybWF0IC0gZm9ybWF0IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB0b1ZhbHVlKCkgY3VzdG9tIHBhcnNlciwgd2hvc2Ugc2lnbmF0dXJlIGlzXG4gICAqIC0gYXJnczpcbiAgICogICAtIGRhdGVTdHI6IHtTdHJpbmd8RGF0ZXxOdW1iZXJ9IC0gdGhlIGRhdGVTdHIgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGZvcm1hdDoge09iamVjdH0gLSB0aGUgZm9ybWF0IG9iamVjdCBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gbG9jYWxlOiB7T2JqZWN0fSAtIGxvY2FsZSBmb3IgdGhlIGxhbmd1YWdlIHNwZWNpZmllZCBieSBgbGFuZ2BcbiAgICogLSByZXR1cm46XG4gICAqICAgICB7RGF0ZXxOdW1iZXJ9IHBhcnNlZCBkYXRlIG9yIGl0cyB0aW1lIHZhbHVlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2xhbmc9ZW5dIC0gbGFuZ3VhZ2UgY29kZSBmb3IgdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHJldHVybiB7TnVtYmVyfSB0aW1lIHZhbHVlIG9mIHBhcnNlZCBkYXRlXG4gICAqL1xuICBzdGF0aWMgcGFyc2VEYXRlKGRhdGVTdHIsIGZvcm1hdCwgbGFuZykge1xuICAgIHJldHVybiBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsYW5nICYmIGxvY2FsZXNbbGFuZ10gfHwgbG9jYWxlcy5lbik7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge09iamVjdH0gLSBJbnN0YWxsZWQgbG9jYWxlcyBpbiBgW2xhbmd1YWdlQ29kZV06IGxvY2FsZU9iamVjdGAgZm9ybWF0XG4gICAqIGVuYDpfRW5nbGlzaCAoVVMpXyBpcyBwcmUtaW5zdGFsbGVkLlxuICAgKi9cbiAgc3RhdGljIGdldCBsb2NhbGVzKCkge1xuICAgIHJldHVybiBsb2NhbGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufSAtIFdoZXRoZXIgdGhlIHBpY2tlciBlbGVtZW50IGlzIHNob3duLiBgdHJ1ZWAgd2huZSBzaG93blxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gISEodGhpcy5waWNrZXIgJiYgdGhpcy5waWNrZXIuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9IC0gRE9NIG9iamVjdCBvZiBwaWNrZXIgZWxlbWVudFxuICAgKi9cbiAgZ2V0IHBpY2tlckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyID8gdGhpcy5waWNrZXIuZWxlbWVudCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbmV3IHZhbHVlcyB0byB0aGUgY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWcgb3B0aW9ucyB0byB1cGRhdGVcbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IHBpY2tlciA9IHRoaXMucGlja2VyO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSBwcm9jZXNzT3B0aW9ucyhvcHRpb25zLCB0aGlzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIG5ld09wdGlvbnMpO1xuICAgIHBpY2tlci5zZXRPcHRpb25zKG5ld09wdGlvbnMpO1xuXG4gICAgcmVmcmVzaFVJKHRoaXMsIDMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqL1xuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmlucHV0RmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0RmllbGQuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0FjdGl2ZUVsZW1lbnQodGhpcy5pbnB1dEZpZWxkKSAmJiAhdGhpcy5jb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZC5mb2N1cygpO1xuICAgICAgICBkZWxldGUgdGhpcy5fc2hvd2luZztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5waWNrZXIuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5waWNrZXIuaGlkZSgpO1xuICAgIHRoaXMucGlja2VyLnVwZGF0ZSgpLmNoYW5nZVZpZXcodGhpcy5jb25maWcuc3RhcnRWaWV3KS5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBEYXRlcGlja2VyIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RldGVwaWNrZXJ9IC0gdGhlIGluc3RhbmNlIGRlc3Ryb3llZFxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXJzKHRoaXMpO1xuICAgIHRoaXMucGlja2VyLmRldGFjaCgpO1xuICAgIGlmICghdGhpcy5pbmxpbmUpIHtcbiAgICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkYXRlcGlja2VyLWlucHV0Jyk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0ZXBpY2tlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbGVjdGVkIGRhdGUocylcbiAgICpcbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIGEgRGF0ZSBvYmplY3Qgb2Ygc2VsZWN0ZWQgZGF0ZSBieSBkZWZhdWx0LCBhbmQgcmV0dXJuc1xuICAgKiBhbiBhcnJheSBvZiBzZWxlY3RlZCBkYXRlcyBpbiBtdWx0aWRhdGUgbW9kZS4gSWYgZm9ybWF0IHN0cmluZyBpcyBwYXNzZWQsXG4gICAqIGl0IHJldHVybnMgZGF0ZSBzdHJpbmcocykgZm9ybWF0dGVkIGluIGdpdmVuIGZvcm1hdC5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbZm9ybWF0XSAtIEZvcm1hdCBzdHJpbmcgdG8gc3RyaW5naWZ5IHRoZSBkYXRlKHMpXG4gICAqIEByZXR1cm4ge0RhdGV8U3RyaW5nfERhdGVbXXxTdHJpbmdbXX0gLSBzZWxlY3RlZCBkYXRlKHMpLCBvciBpZiBub25lIGlzXG4gICAqIHNlbGVjdGVkLCBlbXB0eSBhcnJheSBpbiBtdWx0aWRhdGUgbW9kZSBhbmQgdW50aXRsZWQgaW4gc2lnbGVkYXRlIG1vZGVcbiAgICovXG4gIGdldERhdGUoZm9ybWF0ID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmb3JtYXRcbiAgICAgID8gZGF0ZSA9PiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgdGhpcy5jb25maWcubG9jYWxlKVxuICAgICAgOiBkYXRlID0+IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLm11bHRpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZXMubWFwKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuZGF0ZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0ZWQgZGF0ZShzKVxuICAgKlxuICAgKiBJbiBtdWx0aWRhdGUgbW9kZSwgeW91IGNhbiBwYXNzIG11bHRpcGxlIGRhdGVzIGFzIGEgc2VyaWVzIG9mIGFyZ3VtZW50c1xuICAgKiBvciBhbiBhcnJheS4gKFNpbmNlIGVhY2ggZGF0ZSBpcyBwYXJzZWQgaW5kaXZpZHVhbGx5LCB0aGUgdHlwZSBvZiB0aGVcbiAgICogZGF0ZXMgZG9lc24ndCBoYXZlIHRvIGJlIHRoZSBzYW1lLilcbiAgICogVGhlIGdpdmVuIGRhdGVzIGFyZSB1c2VkIHRvIHRvZ2dsZSB0aGUgc2VsZWN0IHN0YXR1cyBvZiBlYWNoIGRhdGUuIFRoZVxuICAgKiBudW1iZXIgb2Ygc2VsZWN0ZWQgZGF0ZXMgaXMga2VwdCBmcm9tIGV4Y2VlZGluZyB0aGUgbGVuZ3RoIHNldCB0b1xuICAgKiBtYXhOdW1iZXJPZkRhdGVzLlxuICAgKlxuICAgKiBXaXRoIGNsZWFyOiB0cnVlIG9wdGlvbiwgdGhlIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBjbGVhciB0aGUgc2VsZWN0aW9uXG4gICAqIGFuZCB0byByZXBsYWNlIHRoZSBzZWxlY3Rpb24gaW5zdGVhZCBvZiB0b2dnbGluZyBpbiBtdWx0aWRhdGUgbW9kZS5cbiAgICogSWYgdGhlIG9wdGlvbiBpcyBwYXNzZWQgd2l0aCBubyBkYXRlIGFyZ3VtZW50cyBvciBhbiBlbXB0eSBkYXRlcyBhcnJheSxcbiAgICogaXQgd29ya3MgYXMgXCJjbGVhclwiIChjbGVhciB0aGUgc2VsZWN0aW9uIHRoZW4gc2V0IG5vdGhpbmcpLCBhbmQgaWYgdGhlXG4gICAqIG9wdGlvbiBpcyBwYXNzZWQgd2l0aCBuZXcgZGF0ZXMgdG8gc2VsZWN0LCBpdCB3b3JrcyBhcyBcInJlcGxhY2VcIiAoY2xlYXJcbiAgICogdGhlIHNlbGVjdGlvbiB0aGVuIHNldCB0aGUgZ2l2ZW4gZGF0ZXMpXG4gICAqXG4gICAqIFdoZW4gcmVuZGVyOiBmYWxzZSBvcHRpb24gaXMgdXNlZCwgdGhlIG1ldGhvZCBvbWl0cyByZS1yZW5kZXJpbmcgdGhlXG4gICAqIHBpY2tlciBlbGVtZW50LiBJbiB0aGlzIGNhc2UsIHlvdSBuZWVkIHRvIGNhbGwgcmVmcmVzaCgpIG1ldGhvZCBsYXRlciBpblxuICAgKiBvcmRlciBmb3IgdGhlIHBpY2tlciBlbGVtZW50IHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMuIFRoZSBpbnB1dCBmaWVsZCBpc1xuICAgKiByZWZyZXNoZWQgYWx3YXlzIHJlZ2FyZGxlc3Mgb2YgdGhpcyBvcHRpb24uXG4gICAqXG4gICAqIFdoZW4gaW52YWxpZCAodW5wYXJzYWJsZSwgcmVwZWF0ZWQsIGRpc2FibGVkIG9yIG91dC1vZi1yYW5nZSkgZGF0ZXMgYXJlXG4gICAqIHBhc3NlZCwgdGhlIG1ldGhvZCBpZ25vcmVzIHRoZW0gYW5kIGFwcGxpZXMgb25seSB2YWxpZCBvbmVzLiBJbiB0aGUgY2FzZVxuICAgKiB0aGF0IGFsbCB0aGUgZ2l2ZW4gZGF0ZXMgYXJlIGludmFsaWQsIHdoaWNoIGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBwYXNzaW5nXG4gICAqIG5vIGRhdGVzLCB0aGUgbWV0aG9kIGNvbnNpZGVycyBpdCBhcyBhbiBlcnJvciBhbmQgbGVhdmVzIHRoZSBzZWxlY3Rpb25cbiAgICogdW50b3VjaGVkLiAoVGhlIGlucHV0IGZpZWxkIGFsc28gcmVtYWlucyB1bnRvdWNoZWQgdW5sZXNzIHJldmVydDogdHJ1ZVxuICAgKiBvcHRpb24gaXMgdXNlZC4pXG4gICAqXG4gICAqIEBwYXJhbSB7Li4uKERhdGV8TnVtYmVyfFN0cmluZyl8QXJyYXl9IFtkYXRlc10gLSBEYXRlIHN0cmluZ3MsIERhdGVcbiAgICogb2JqZWN0cywgdGltZSB2YWx1ZXMgb3IgbWl4IG9mIHRob3NlIGZvciBuZXcgc2VsZWN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gY2xlYXI6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gY2xlYXIgdGhlIGV4aXN0aW5nIHNlbGVjdGlvblxuICAgKiAgICAgZGVmdWFsdDogZmFsc2VcbiAgICogLSByZW5kZXI6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmUtcmVuZGVyIHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKiAgICAgZGVmYXVsdDogdHJ1ZVxuICAgKiAtIGF1dG9oaWRlOiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGhpZGUgdGhlIHBpY2tlciBlbGVtZW50IGFmdGVyIHJlLXJlbmRlclxuICAgKiAgICAgSWdub3JlZCB3aGVuIHVzZWQgd2l0aCByZW5kZXI6IGZhbHNlXG4gICAqICAgICBkZWZhdWx0OiBjb25maWcuYXV0b2hpZGVcbiAgICogLSByZXZlcnQ6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmVmcmVzaCB0aGUgaW5wdXQgZmllbGQgd2hlbiBhbGwgdGhlXG4gICAqICAgICBwYXNzZWQgZGF0ZXMgYXJlIGludmFsaWRcbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBzZXREYXRlKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBkYXRlcyA9IFsuLi5hcmdzXTtcbiAgICBjb25zdCBvcHRzID0ge307XG4gICAgY29uc3QgbGFzdEFyZyA9IGxhc3RJdGVtT2YoYXJncyk7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxhc3RBcmcgPT09ICdvYmplY3QnXG4gICAgICAmJiAhQXJyYXkuaXNBcnJheShsYXN0QXJnKVxuICAgICAgJiYgIShsYXN0QXJnIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICYmIGxhc3RBcmdcbiAgICApIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0cywgZGF0ZXMucG9wKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZXMgPSBBcnJheS5pc0FycmF5KGRhdGVzWzBdKSA/IGRhdGVzWzBdIDogZGF0ZXM7XG4gICAgc2V0RGF0ZSh0aGlzLCBpbnB1dERhdGVzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHNlbGVjdGVkIGRhdGUocykgd2l0aCBpbnB1dCBmaWVsZCdzIHZhbHVlXG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKlxuICAgKiBUaGUgaW5wdXQgZmllbGQgd2lsbCBiZSByZWZyZXNoZWQgd2l0aCBwcm9wZXJseSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcuXG4gICAqXG4gICAqIEluIHRoZSBjYXNlIHRoYXQgYWxsIHRoZSBlbnRlcmVkIGRhdGVzIGFyZSBpbnZhbGlkICh1bnBhcnNhYmxlLCByZXBlYXRlZCxcbiAgICogZGlzYWJsZWQgb3Igb3V0LW9mLXJhbmdlKSwgd2hpeGggaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIGVtcHR5IGlucHV0IGZpZWxkLFxuICAgKiB0aGUgbWV0aG9kIGxlYXZlcyB0aGUgaW5wdXQgZmllbGQgdW50b3VjaGVkIGFzIHdlbGwgYXMgdGhlIHNlbGVjdGlvbiBieVxuICAgKiBkZWZhdWx0LiBJZiByZXZlcnQ6IHRydWUgb3B0aW9uIGlzIHVzZWQgaW4gdGhpcyBjYXNlLCB0aGUgaW5wdXQgZmllbGQgaXNcbiAgICogcmVmcmVzaGVkIHdpdGggdGhlIGV4aXN0aW5nIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gYXV0b2hpZGU6IHtib29sZWFufSAtIHdoZXRoZXIgdG8gaGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgYWZ0ZXIgcmVmcmVzaFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICogLSByZXZlcnQ6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmVmcmVzaCB0aGUgaW5wdXQgZmllbGQgd2hlbiBhbGwgdGhlXG4gICAqICAgICBwYXNzZWQgZGF0ZXMgYXJlIGludmFsaWRcbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICB1cGRhdGUob3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmlubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMgfHwge30sIHtjbGVhcjogdHJ1ZSwgcmVuZGVyOiB0cnVlfSk7XG4gICAgY29uc3QgaW5wdXREYXRlcyA9IHN0cmluZ1RvQXJyYXkodGhpcy5pbnB1dEZpZWxkLnZhbHVlLCB0aGlzLmNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbiAgICBzZXREYXRlKHRoaXMsIGlucHV0RGF0ZXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIHBpY2tlciBlbGVtZW50IGFuZCB0aGUgYXNzb2NpYXRlZCBpbnB1dCBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3RhcmdldF0gLSB0YXJnZXQgaXRlbSB3aGVuIHJlZnJlc2hpbmcgb25lIGl0ZW0gb25seVxuICAgKiAncGlja2VyJyBvciAnaW5wdXQnXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlUmVuZGVyXSAtIHdoZXRoZXIgdG8gcmUtcmVuZGVyIHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKiByZWdhcmRsZXNzIG9mIGl0cyBzdGF0ZSBpbnN0ZWFkIG9mIG9wdGltaXplZCByZWZyZXNoXG4gICAqL1xuICByZWZyZXNoKHRhcmdldCA9IHVuZGVmaW5lZCwgZm9yY2VSZW5kZXIgPSBmYWxzZSkge1xuICAgIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGZvcmNlUmVuZGVyID0gdGFyZ2V0O1xuICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBtb2RlO1xuICAgIGlmICh0YXJnZXQgPT09ICdwaWNrZXInKSB7XG4gICAgICBtb2RlID0gMjtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2lucHV0Jykge1xuICAgICAgbW9kZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGUgPSAzO1xuICAgIH1cbiAgICByZWZyZXNoVUkodGhpcywgbW9kZSwgIWZvcmNlUmVuZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciBlZGl0IG1vZGVcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyIG9yIHdoZW4gdGhlIHBpY2tlciBlbGVtZW50IGlzIGhpZGRlblxuICAgKi9cbiAgZW50ZXJFZGl0TW9kZSgpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUgfHwgIXRoaXMucGlja2VyLmFjdGl2ZSB8fCB0aGlzLmVkaXRNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbi1lZGl0Jyk7XG4gIH1cblxuICAvKipcbiAgICogRXhpdCBmcm9tIGVkaXQgbW9kZVxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gdXBkYXRlOiB7Ym9vbGVhbn0gLSB3aGV0aGVyIHRvIGNhbGwgdXBkYXRlKCkgYWZ0ZXIgZXhpdGluZ1xuICAgKiAgICAgSWYgZmFsc2UsIGlucHV0IGZpZWxkIGlzIHJldmVydCB0byB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZXhpdEVkaXRNb2RlKG9wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUgfHwgIXRoaXMuZWRpdE1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe3VwZGF0ZTogZmFsc2V9LCBvcHRpb25zKTtcbiAgICBkZWxldGUgdGhpcy5lZGl0TW9kZTtcbiAgICB0aGlzLmlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW4tZWRpdCcpO1xuICAgIGlmIChvcHRzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUob3B0cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge2xpbWl0VG9SYW5nZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7YWRkTW9udGhzLCBhZGRZZWFyc30gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckRhdGVwaWNrZXJFdmVudChkYXRlcGlja2VyLCB0eXBlKSB7XG4gIGNvbnN0IGRldGFpbCA9IHtcbiAgICBkYXRlOiBkYXRlcGlja2VyLmdldERhdGUoKSxcbiAgICB2aWV3RGF0ZTogbmV3IERhdGUoZGF0ZXBpY2tlci5waWNrZXIudmlld0RhdGUpLFxuICAgIHZpZXdJZDogZGF0ZXBpY2tlci5waWNrZXIuY3VycmVudFZpZXcuaWQsXG4gICAgZGF0ZXBpY2tlcixcbiAgfTtcbiAgZGF0ZXBpY2tlci5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtkZXRhaWx9KSk7XG59XG5cbi8vIGRpcmVjdGlvbjogLTEgKHRvIHByZXZpb3VzKSwgMSAodG8gbmV4dClcbmV4cG9ydCBmdW5jdGlvbiBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qge21pbkRhdGUsIG1heERhdGV9ID0gZGF0ZXBpY2tlci5jb25maWc7XG4gIGNvbnN0IHtjdXJyZW50Vmlldywgdmlld0RhdGV9ID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGxldCBuZXdWaWV3RGF0ZTtcbiAgc3dpdGNoIChjdXJyZW50Vmlldy5pZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIG5ld1ZpZXdEYXRlID0gYWRkTW9udGhzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgbmV3Vmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBuZXdWaWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24gKiBjdXJyZW50Vmlldy5uYXZTdGVwKTtcbiAgfVxuICBuZXdWaWV3RGF0ZSA9IGxpbWl0VG9SYW5nZShuZXdWaWV3RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGRhdGVwaWNrZXIucGlja2VyLmNoYW5nZUZvY3VzKG5ld1ZpZXdEYXRlKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFZpZXcoZGF0ZXBpY2tlcikge1xuICBjb25zdCB2aWV3SWQgPSBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50Vmlldy5pZDtcbiAgaWYgKHZpZXdJZCA9PT0gZGF0ZXBpY2tlci5jb25maWcubWF4Vmlldykge1xuICAgIHJldHVybjtcbiAgfVxuICBkYXRlcGlja2VyLnBpY2tlci5jaGFuZ2VWaWV3KHZpZXdJZCArIDEpLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5mb2N1cyhkYXRlcGlja2VyKSB7XG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy51cGRhdGVPbkJsdXIpIHtcbiAgICBkYXRlcGlja2VyLnVwZGF0ZSh7cmV2ZXJ0OiB0cnVlfSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZXBpY2tlci5yZWZyZXNoKCdpbnB1dCcpO1xuICB9XG4gIGRhdGVwaWNrZXIuaGlkZSgpO1xufVxuIiwiaW1wb3J0IHtpc0luUmFuZ2V9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2lzQWN0aXZlRWxlbWVudH0gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQge2FkZERheXMsIGFkZE1vbnRocywgYWRkWWVhcnMsIHN0YXJ0T2ZZZWFyUGVyaW9kfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge2dvVG9QcmV2T3JOZXh0LCBzd2l0Y2hWaWV3LCB1bmZvY3VzfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbi8vIEZpbmQgdGhlIGNsb3Nlc3QgZGF0ZSB0aGF0IGRvZXNuJ3QgbWVldCB0aGUgY29uZGl0aW9uIGZvciB1bmF2YWlsYWJsZSBkYXRlXG4vLyBSZXR1cm5zIHVuZGVmaW5lZCBpZiBubyBhdmFpbGFibGUgZGF0ZSBpcyBmb3VuZFxuLy8gYWRkRm46IGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgbmV4dCBkYXRlXG4vLyAgIC0gYXJnczogdGltZSB2YWx1ZSwgYW1vdW50XG4vLyBpbmNyZWFzZTogYW1vdW50IHRvIHBhc3MgdG8gYWRkRm5cbi8vIHRlc3RGbjogZnVuY3Rpb24gdG8gdGVzdCB0aGUgdW5hdmFpbGFibGl0eSBvZiB0aGUgZGF0ZVxuLy8gICAtIGFyZ3M6IHRpbWUgdmFsdWU7IHJldHVuOiB0cnVlIGlmIHVuYXZhaWxhYmxlXG5mdW5jdGlvbiBmaW5kTmV4dEF2YWlsYWJsZU9uZShkYXRlLCBhZGRGbiwgaW5jcmVhc2UsIHRlc3RGbiwgbWluLCBtYXgpIHtcbiAgaWYgKCFpc0luUmFuZ2UoZGF0ZSwgbWluLCBtYXgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0ZXN0Rm4oZGF0ZSkpIHtcbiAgICBjb25zdCBuZXdEYXRlID0gYWRkRm4oZGF0ZSwgaW5jcmVhc2UpO1xuICAgIHJldHVybiBmaW5kTmV4dEF2YWlsYWJsZU9uZShuZXdEYXRlLCBhZGRGbiwgaW5jcmVhc2UsIHRlc3RGbiwgbWluLCBtYXgpO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBkaXJlY3Rpb246IC0xIChsZWZ0L3VwKSwgMSAocmlnaHQvZG93bilcbi8vIHZlcnRpY2FsOiB0cnVlIGZvciB1cC9kb3duLCBmYWxzZSBmb3IgbGVmdC9yaWdodFxuZnVuY3Rpb24gbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIGRpcmVjdGlvbiwgdmVydGljYWwpIHtcbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IGN1cnJlbnRWaWV3ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBjb25zdCBzdGVwID0gY3VycmVudFZpZXcuc3RlcCB8fCAxO1xuICBsZXQgdmlld0RhdGUgPSBwaWNrZXIudmlld0RhdGU7XG4gIGxldCBhZGRGbjtcbiAgbGV0IHRlc3RGbjtcbiAgc3dpdGNoIChjdXJyZW50Vmlldy5pZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICB2aWV3RGF0ZSA9IGFkZERheXModmlld0RhdGUsIGRpcmVjdGlvbiAqIDcpO1xuICAgICAgfSBlbHNlIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgdmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXdEYXRlID0gYWRkRGF5cyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGFkZEZuID0gYWRkRGF5cztcbiAgICAgIHRlc3RGbiA9IChkYXRlKSA9PiBjdXJyZW50Vmlldy5kaXNhYmxlZC5pbmNsdWRlcyhkYXRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHZpZXdEYXRlID0gYWRkTW9udGhzKHZpZXdEYXRlLCB2ZXJ0aWNhbCA/IGRpcmVjdGlvbiAqIDQgOiBkaXJlY3Rpb24pO1xuICAgICAgYWRkRm4gPSBhZGRNb250aHM7XG4gICAgICB0ZXN0Rm4gPSAoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCB7eWVhciwgZGlzYWJsZWR9ID0gY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiBkdC5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGRpc2FibGVkLmluY2x1ZGVzKGR0LmdldE1vbnRoKCkpO1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2aWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24gKiAodmVydGljYWwgPyA0IDogMSkgKiBzdGVwKTtcbiAgICAgIGFkZEZuID0gYWRkWWVhcnM7XG4gICAgICB0ZXN0Rm4gPSBkYXRlID0+IGN1cnJlbnRWaWV3LmRpc2FibGVkLmluY2x1ZGVzKHN0YXJ0T2ZZZWFyUGVyaW9kKGRhdGUsIHN0ZXApKTtcbiAgfVxuICB2aWV3RGF0ZSA9IGZpbmROZXh0QXZhaWxhYmxlT25lKFxuICAgIHZpZXdEYXRlLFxuICAgIGFkZEZuLFxuICAgIGRpcmVjdGlvbiA8IDAgPyAtc3RlcCA6IHN0ZXAsXG4gICAgdGVzdEZuLFxuICAgIGN1cnJlbnRWaWV3Lm1pbkRhdGUsXG4gICAgY3VycmVudFZpZXcubWF4RGF0ZVxuICApO1xuICBpZiAodmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHBpY2tlci5jaGFuZ2VGb2N1cyh2aWV3RGF0ZSkucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uS2V5ZG93bihkYXRlcGlja2VyLCBldikge1xuICBjb25zdCBrZXkgPSBldi5rZXk7XG4gIGlmIChrZXkgPT09ICdUYWInKSB7XG4gICAgdW5mb2N1cyhkYXRlcGlja2VyKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3Qge2lkLCBpc01pblZpZXd9ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBpZiAoIXBpY2tlci5hY3RpdmUpIHtcbiAgICBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgcGlja2VyLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBkYXRlcGlja2VyLnVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHBpY2tlci5zaG93KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGVwaWNrZXIuZWRpdE1vZGUpIHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBkYXRlcGlja2VyLmV4aXRFZGl0TW9kZSh7dXBkYXRlOiB0cnVlLCBhdXRvaGlkZTogZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGV9KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHBpY2tlci5oaWRlKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgLTEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIDEpO1xuICAgICAgfSBlbHNlIGlmIChldi5zaGlmdEtleSkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIDEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIHN3aXRjaFZpZXcoZGF0ZXBpY2tlcik7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgLTEsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgaWYgKGV2LnNoaWZ0S2V5ICYmICFldi5jdHJsS2V5ICYmICFldi5tZXRhS2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgMSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChpc01pblZpZXcpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5zZXREYXRlKHBpY2tlci52aWV3RGF0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBpY2tlci5jaGFuZ2VWaWV3KGlkIC0gMSkucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHBpY2tlci5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdCYWNrc3BhY2UnXG4gICAgICAgIHx8IGtleSA9PT0gJ0RlbGV0ZSdcbiAgICAgICAgfHwgKGtleS5sZW5ndGggPT09IDEgJiYgIWV2LmN0cmxLZXkgJiYgIWV2Lm1ldGFLZXkpXG4gICAgICApIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvY3VzKGRhdGVwaWNrZXIpIHtcbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnNob3dPbkZvY3VzICYmICFkYXRlcGlja2VyLl9zaG93aW5nKSB7XG4gICAgZGF0ZXBpY2tlci5zaG93KCk7XG4gIH1cbn1cblxuLy8gZm9yIHRoZSBwcmV2ZW50aW9uIGZvciBlbnRlcmluZyBlZGl0IG1vZGUgd2hpbGUgZ2V0dGluZyBmb2N1cyBvbiBjbGlja1xuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2Vkb3duKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGVsID0gZXYudGFyZ2V0O1xuICBpZiAoZGF0ZXBpY2tlci5waWNrZXIuYWN0aXZlIHx8IGRhdGVwaWNrZXIuY29uZmlnLnNob3dPbkNsaWNrKSB7XG4gICAgZWwuX2FjdGl2ZSA9IGlzQWN0aXZlRWxlbWVudChlbCk7XG4gICAgZWwuX2NsaWNraW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkZWxldGUgZWwuX2FjdGl2ZTtcbiAgICAgIGRlbGV0ZSBlbC5fY2xpY2tpbmc7XG4gICAgfSwgMjAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tJbnB1dChkYXRlcGlja2VyLCBldikge1xuICBjb25zdCBlbCA9IGV2LnRhcmdldDtcbiAgaWYgKCFlbC5fY2xpY2tpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGVsLl9jbGlja2luZyk7XG4gIGRlbGV0ZSBlbC5fY2xpY2tpbmc7XG5cbiAgaWYgKGVsLl9hY3RpdmUpIHtcbiAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgfVxuICBkZWxldGUgZWwuX2FjdGl2ZTtcblxuICBpZiAoZGF0ZXBpY2tlci5jb25maWcuc2hvd09uQ2xpY2spIHtcbiAgICBkYXRlcGlja2VyLnNob3coKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25QYXN0ZShkYXRlcGlja2VyLCBldikge1xuICBpZiAoZXYuY2xpcGJvYXJkRGF0YS50eXBlcy5pbmNsdWRlcygndGV4dC9wbGFpbicpKSB7XG4gICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7aXNBY3RpdmVFbGVtZW50fSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCB7ZmluZEVsZW1lbnRJbkV2ZW50UGF0aH0gZnJvbSAnLi4vbGliL2V2ZW50LmpzJztcbmltcG9ydCB7dW5mb2N1c30gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG4vLyBmb3IgdGhlIGBkb2N1bWVudGAgdG8gZGVsZWdhdGUgdGhlIGV2ZW50cyBmcm9tIG91dHNpZGUgdGhlIHBpY2tlci9pbnB1dCBmaWVsZFxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IHtlbGVtZW50LCBwaWNrZXJ9ID0gZGF0ZXBpY2tlcjtcbiAgLy8gY2hlY2sgYm90aCBwaWNrZXIncyBhbmQgaW5wdXQncyBhY3RpdmVuZXNzIHRvIG1ha2UgdXBkYXRlT25CbHVyIHdvcmsgaW5cbiAgLy8gdGhlIGNhc2VzIHdoZXJlLi4uXG4gIC8vIC0gcGlja2VyIGlzIGhpZGRlbiBieSBFU0Mga2V5IHByZXNzIOKGkiBpbnB1dCBzdGF5cyBmb2N1c2VkXG4gIC8vIC0gaW5wdXQgaXMgdW5mb2N1c2VkIGJ5IGNsb3NpbmcgbW9iaWxlIGtleWJvYXJkIOKGkiBwaWtlciBpcyBrZXB0IHNob3duXG4gIGlmICghcGlja2VyLmFjdGl2ZSAmJiAhaXNBY3RpdmVFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBpY2tlckVsZW0gPSBwaWNrZXIuZWxlbWVudDtcbiAgaWYgKGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsIGVsID0+IGVsID09PSBlbGVtZW50IHx8IGVsID09PSBwaWNrZXJFbGVtKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB1bmZvY3VzKGRhdGVwaWNrZXIpO1xufVxuIiwiaW1wb3J0IHt0b2RheSwgYWRkTW9udGhzLCBhZGRZZWFyc30gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtmaW5kRWxlbWVudEluRXZlbnRQYXRofSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHtnb1RvUHJldk9yTmV4dCwgc3dpdGNoVmlld30gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG5mdW5jdGlvbiBnb1RvU2VsZWN0ZWRNb250aE9yWWVhcihkYXRlcGlja2VyLCBzZWxlY3Rpb24pIHtcbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUocGlja2VyLnZpZXdEYXRlKTtcbiAgY29uc3Qgdmlld0lkID0gcGlja2VyLmN1cnJlbnRWaWV3LmlkO1xuICBjb25zdCBuZXdEYXRlID0gdmlld0lkID09PSAxXG4gICAgPyBhZGRNb250aHModmlld0RhdGUsIHNlbGVjdGlvbiAtIHZpZXdEYXRlLmdldE1vbnRoKCkpXG4gICAgOiBhZGRZZWFycyh2aWV3RGF0ZSwgc2VsZWN0aW9uIC0gdmlld0RhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgcGlja2VyLmNoYW5nZUZvY3VzKG5ld0RhdGUpLmNoYW5nZVZpZXcodmlld0lkIC0gMSkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrVG9kYXlCdG4oZGF0ZXBpY2tlcikge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3QgY3VycmVudERhdGUgPSB0b2RheSgpO1xuICBpZiAoZGF0ZXBpY2tlci5jb25maWcudG9kYXlCdG5Nb2RlID09PSAxKSB7XG4gICAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICBkYXRlcGlja2VyLnNldERhdGUoY3VycmVudERhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRlcGlja2VyLnNldERhdGUoY3VycmVudERhdGUsIHtyZW5kZXI6IGZhbHNlfSk7XG4gICAgcGlja2VyLnVwZGF0ZSgpO1xuICB9XG4gIGlmIChwaWNrZXIudmlld0RhdGUgIT09IGN1cnJlbnREYXRlKSB7XG4gICAgcGlja2VyLmNoYW5nZUZvY3VzKGN1cnJlbnREYXRlKTtcbiAgfVxuICBwaWNrZXIuY2hhbmdlVmlldygwKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tDbGVhckJ0bihkYXRlcGlja2VyKSB7XG4gIGRhdGVwaWNrZXIuc2V0RGF0ZSh7Y2xlYXI6IHRydWV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tWaWV3U3dpdGNoKGRhdGVwaWNrZXIpIHtcbiAgc3dpdGNoVmlldyhkYXRlcGlja2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tQcmV2QnRuKGRhdGVwaWNrZXIpIHtcbiAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja05leHRCdG4oZGF0ZXBpY2tlcikge1xuICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAxKTtcbn1cblxuLy8gRm9yIHRoZSBwaWNrZXIncyBtYWluIGJsb2NrIHRvIGRlbGVnZXRlIHRoZSBldmVudHMgZnJvbSBgZGF0ZXBpY2tlci1jZWxsYHNcbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrVmlldyhkYXRlcGlja2VyLCBldikge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudEluRXZlbnRQYXRoKGV2LCAnLmRhdGVwaWNrZXItY2VsbCcpO1xuICBpZiAoIXRhcmdldCB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qge2lkLCBpc01pblZpZXd9ID0gZGF0ZXBpY2tlci5waWNrZXIuY3VycmVudFZpZXc7XG4gIGlmIChpc01pblZpZXcpIHtcbiAgICBkYXRlcGlja2VyLnNldERhdGUoTnVtYmVyKHRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgfSBlbHNlIGlmIChpZCA9PT0gMSkge1xuICAgIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIE51bWJlcih0YXJnZXQuZGF0YXNldC5tb250aCkpO1xuICB9IGVsc2Uge1xuICAgIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIE51bWJlcih0YXJnZXQuZGF0YXNldC55ZWFyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2Vkb3duUGlja2VyKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG4iLCIvLyBkZWZhdWx0IGxvY2FsZXNcbmV4cG9ydCBjb25zdCBsb2NhbGVzID0ge1xuICBlbjoge1xuICAgIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgIGRheXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgIGRheXNNaW46IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgbW9udGhzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICB0b2RheTogXCJUb2RheVwiLFxuICAgIGNsZWFyOiBcIkNsZWFyXCIsXG4gICAgdGl0bGVGb3JtYXQ6IFwiTU0geVwiXG4gIH1cbn07XG4iLCJpbXBvcnQge3N0cmlwVGltZSwgdG9kYXl9IGZyb20gJy4vZGF0ZS5qcyc7XG5pbXBvcnQge2xhc3RJdGVtT2Z9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vLyBwYXR0ZXJuIGZvciBmb3JtYXQgcGFydHNcbmV4cG9ydCBjb25zdCByZUZvcm1hdFRva2VucyA9IC9kZD98REQ/fG1tP3xNTT98eXk/KD86eXkpPy87XG4vLyBwYXR0ZXJuIGZvciBub24gZGF0ZSBwYXJ0c1xuZXhwb3J0IGNvbnN0IHJlTm9uRGF0ZVBhcnRzID0gL1tcXHMhLS86LUBbLWB7LX7lubTmnIjml6VdKy87XG4vLyBjYWNoZSBmb3IgcGVyc2VkIGZvcm1hdHNcbmxldCBrbm93bkZvcm1hdHMgPSB7fTtcbi8vIHBhcnNlIGZ1bnRpb25zIGZvciBkYXRlIHBhcnRzXG5jb25zdCBwYXJzZUZucyA9IHtcbiAgeShkYXRlLCB5ZWFyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnNldEZ1bGxZZWFyKHBhcnNlSW50KHllYXIsIDEwKSk7XG4gIH0sXG4gIG0oZGF0ZSwgbW9udGgsIGxvY2FsZSkge1xuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBsZXQgbW9udGhJbmRleCA9IHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxO1xuXG4gICAgaWYgKGlzTmFOKG1vbnRoSW5kZXgpKSB7XG4gICAgICBpZiAoIW1vbnRoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vbnRoTmFtZSA9IG1vbnRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjb21wYXJlTmFtZXMgPSBuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKG1vbnRoTmFtZSk7XG4gICAgICAvLyBjb21wYXJlIHdpdGggYm90aCBzaG9ydCBhbmQgZnVsbCBuYW1lcyBiZWNhdXNlIHNvbWUgbG9jYWxlcyBoYXZlIHBlcmlvZHNcbiAgICAgIC8vIGluIHRoZSBzaG9ydCBuYW1lcyAobm90IGVxdWFsIHRvIHRoZSBmaXJzdCBYIGxldHRlcnMgb2YgdGhlIGZ1bGwgbmFtZXMpXG4gICAgICBtb250aEluZGV4ID0gbG9jYWxlLm1vbnRoc1Nob3J0LmZpbmRJbmRleChjb21wYXJlTmFtZXMpO1xuICAgICAgaWYgKG1vbnRoSW5kZXggPCAwKSB7XG4gICAgICAgIG1vbnRoSW5kZXggPSBsb2NhbGUubW9udGhzLmZpbmRJbmRleChjb21wYXJlTmFtZXMpO1xuICAgICAgfVxuICAgICAgaWYgKG1vbnRoSW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3RGF0ZS5zZXRNb250aChtb250aEluZGV4KTtcbiAgICByZXR1cm4gbmV3RGF0ZS5nZXRNb250aCgpICE9PSBub3JtYWxpemVNb250aChtb250aEluZGV4KVxuICAgICAgPyBuZXdEYXRlLnNldERhdGUoMClcbiAgICAgIDogbmV3RGF0ZS5nZXRUaW1lKCk7XG4gIH0sXG4gIGQoZGF0ZSwgZGF5KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnNldERhdGUocGFyc2VJbnQoZGF5LCAxMCkpO1xuICB9LFxufTtcbi8vIGZvcm1hdCBmdW5jdGlvbnMgZm9yIGRhdGUgcGFydHNcbmNvbnN0IGZvcm1hdEZucyA9IHtcbiAgZChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xuICB9LFxuICBkZChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXREYXRlKCksIDIpO1xuICB9LFxuICBEKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5c1Nob3J0W2RhdGUuZ2V0RGF5KCldO1xuICB9LFxuICBERChkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmRheXNbZGF0ZS5nZXREYXkoKV07XG4gIH0sXG4gIG0oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICB9LFxuICBtbShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XG4gIH0sXG4gIE0oZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFtkYXRlLmdldE1vbnRoKCldO1xuICB9LFxuICBNTShkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICB9LFxuICB5KGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9LFxuICB5eShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRGdWxsWWVhcigpLCAyKS5zbGljZSgtMik7XG4gIH0sXG4gIHl5eXkoZGF0ZSkge1xuICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCk7XG4gIH0sXG59O1xuXG4vLyBnZXQgbW9udGggaW5kZXggaW4gbm9ybWFsIHJhbmdlICgwIC0gMTEpIGZyb20gYW55IG51bWJlclxuZnVuY3Rpb24gbm9ybWFsaXplTW9udGgobW9udGhJbmRleCkge1xuICByZXR1cm4gbW9udGhJbmRleCA+IC0xID8gbW9udGhJbmRleCAlIDEyIDogbm9ybWFsaXplTW9udGgobW9udGhJbmRleCArIDEyKTtcbn1cblxuZnVuY3Rpb24gcGFkWmVybyhudW0sIGxlbmd0aCkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQobGVuZ3RoLCAnMCcpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUZvcm1hdFN0cmluZyhmb3JtYXQpIHtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XG4gIH1cbiAgaWYgKGZvcm1hdCBpbiBrbm93bkZvcm1hdHMpIHtcbiAgICByZXR1cm4ga25vd25Gb3JtYXRzW2Zvcm1hdF07XG4gIH1cblxuICAvLyBzcHJpdCB0aGUgZm9ybWF0IHN0cmluZyBpbnRvIHBhcnRzIGFuZCBzZXByYXRvcnNcbiAgY29uc3Qgc2VwYXJhdG9ycyA9IGZvcm1hdC5zcGxpdChyZUZvcm1hdFRva2Vucyk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0Lm1hdGNoKG5ldyBSZWdFeHAocmVGb3JtYXRUb2tlbnMsICdnJykpO1xuICBpZiAoc2VwYXJhdG9ycy5sZW5ndGggPT09IDAgfHwgIXBhcnRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XG4gIH1cblxuICAvLyBjb2xsZWN0IGZvcm1hdCBmdW5jdGlvbnMgdXNlZCBpbiB0aGUgZm9ybWF0XG4gIGNvbnN0IHBhcnRGb3JtYXR0ZXJzID0gcGFydHMubWFwKHRva2VuID0+IGZvcm1hdEZuc1t0b2tlbl0pO1xuXG4gIC8vIGNvbGxlY3QgcGFyc2UgZnVuY3Rpb24ga2V5cyB1c2VkIGluIHRoZSBmb3JtYXRcbiAgLy8gaXRlcmF0ZSBvdmVyIHBhcnNlRm5zJyBrZXlzIGluIG9yZGVyIHRvIGtlZXAgdGhlIG9yZGVyIG9mIHRoZSBrZXlzLlxuICBjb25zdCBwYXJ0UGFyc2VyS2V5cyA9IE9iamVjdC5rZXlzKHBhcnNlRm5zKS5yZWR1Y2UoKGtleXMsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcGFydHMuZmluZChwYXJ0ID0+IHBhcnRbMF0gIT09ICdEJyAmJiBwYXJ0WzBdLnRvTG93ZXJDYXNlKCkgPT09IGtleSk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ga25vd25Gb3JtYXRzW2Zvcm1hdF0gPSB7XG4gICAgcGFyc2VyKGRhdGVTdHIsIGxvY2FsZSkge1xuICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0ci5zcGxpdChyZU5vbkRhdGVQYXJ0cykucmVkdWNlKChkdFBhcnRzLCBwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAocGFydC5sZW5ndGggPiAwICYmIHBhcnRzW2luZGV4XSkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gcGFydHNbaW5kZXhdWzBdO1xuICAgICAgICAgIGlmICh0b2tlbiA9PT0gJ00nKSB7XG4gICAgICAgICAgICBkdFBhcnRzLm0gPSBwYXJ0O1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gIT09ICdEJykge1xuICAgICAgICAgICAgZHRQYXJ0c1t0b2tlbl0gPSBwYXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHRQYXJ0cztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgLy8gaXRlcmF0ZSBvdmVyIHBhcnRQYXJzZXJrZXlzIHNvIHRoYXQgdGhlIHBhcnNpbmcgaXMgbWFkZSBpbiB0aGUgb2RlclxuICAgICAgLy8gb2YgeWVhciwgbW9udGggYW5kIGRheSB0byBwcmV2ZW50IHRoZSBkYXkgcGFyc2VyIGZyb20gY29ycmVjdGluZyBsYXN0XG4gICAgICAvLyBkYXkgb2YgbW9udGggd3JvbmdseVxuICAgICAgcmV0dXJuIHBhcnRQYXJzZXJLZXlzLnJlZHVjZSgob3JpZ0RhdGUsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRlID0gcGFyc2VGbnNba2V5XShvcmlnRGF0ZSwgZGF0ZVBhcnRzW2tleV0sIGxvY2FsZSk7XG4gICAgICAgIC8vIGluZ25vcmUgdGhlIHBhcnQgZmFpbGVkIHRvIHBhcnNlXG4gICAgICAgIHJldHVybiBpc05hTihuZXdEYXRlKSA/IG9yaWdEYXRlIDogbmV3RGF0ZTtcbiAgICAgIH0sIHRvZGF5KCkpO1xuICAgIH0sXG4gICAgZm9ybWF0dGVyKGRhdGUsIGxvY2FsZSkge1xuICAgICAgbGV0IGRhdGVTdHIgPSBwYXJ0Rm9ybWF0dGVycy5yZWR1Y2UoKHN0ciwgZm4sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYCR7c2VwYXJhdG9yc1tpbmRleF19JHtmbihkYXRlLCBsb2NhbGUpfWA7XG4gICAgICB9LCAnJyk7XG4gICAgICAvLyBzZXBhcmF0b3JzJyBsZW5ndGggaXMgYWx3YXlzIHBhcnRzJyBsZW5ndGggKyAxLFxuICAgICAgcmV0dXJuIGRhdGVTdHIgKz0gbGFzdEl0ZW1PZihzZXBhcmF0b3JzKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHIsIGZvcm1hdCwgbG9jYWxlKSB7XG4gIGlmIChkYXRlU3RyIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgZGF0ZVN0ciA9PT0gJ251bWJlcicpIHtcbiAgICBjb25zdCBkYXRlID0gc3RyaXBUaW1lKGRhdGVTdHIpO1xuICAgIHJldHVybiBpc05hTihkYXRlKSA/IHVuZGVmaW5lZCA6IGRhdGU7XG4gIH1cbiAgaWYgKCFkYXRlU3RyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZGF0ZVN0ciA9PT0gJ3RvZGF5Jykge1xuICAgIHJldHVybiB0b2RheSgpO1xuICB9XG5cbiAgaWYgKGZvcm1hdCAmJiBmb3JtYXQudG9WYWx1ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQudG9WYWx1ZShkYXRlU3RyLCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogc3RyaXBUaW1lKGRhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkucGFyc2VyKGRhdGVTdHIsIGxvY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbG9jYWxlKSB7XG4gIGlmIChpc05hTihkYXRlKSB8fCAoIWRhdGUgJiYgZGF0ZSAhPT0gMCkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBkYXRlT2JqID0gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gbmV3IERhdGUoZGF0ZSkgOiBkYXRlO1xuXG4gIGlmIChmb3JtYXQudG9EaXNwbGF5KSB7XG4gICAgcmV0dXJuIGZvcm1hdC50b0Rpc3BsYXkoZGF0ZU9iaiwgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkuZm9ybWF0dGVyKGRhdGVPYmosIGxvY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3RyaXBUaW1lKHRpbWVWYWx1ZSkge1xuICByZXR1cm4gbmV3IERhdGUodGltZVZhbHVlKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cblxuLy8gR2V0IHRoZSB0aW1lIHZhbHVlIG9mIHRoZSBzdGFydCBvZiBnaXZlbiBkYXRlIG9yIHllYXIsIG1vbnRoIGFuZCBkYXlcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVmFsdWUoLi4uYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHRvZGF5KCk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHN0cmlwVGltZShhcmdzWzBdKTtcbiAgfVxuXG4gIC8vIHVzZSBzZXRGdWxsWWVhcigpIHRvIGtlZXAgMi1kaWdpdCB5ZWFyIGZyb20gYmVpbmcgbWFwcGVkIHRvIDE5MDAtMTk5OVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoMCk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoLi4uYXJncyk7XG4gIHJldHVybiBuZXdEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICByZXR1cm4gbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtzKGRhdGUsIGFtb3VudCkge1xuICByZXR1cm4gYWRkRGF5cyhkYXRlLCBhbW91bnQgKiA3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vbnRocyhkYXRlLCBhbW91bnQpIHtcbiAgLy8gSWYgdGhlIGRheSBvZiB0aGUgZGF0ZSBpcyBub3QgaW4gdGhlIG5ldyBtb250aCwgdGhlIGxhc3QgZGF5IG9mIHRoZSBuZXdcbiAgLy8gbW9udGggd2lsbCBiZSByZXR1cm5lZC4gZS5nLiBKYW4gMzEgKyAxIG1vbnRoIOKGkiBGZWIgMjggKG5vdCBNYXIgMDMpXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGhzVG9TZXQgPSBuZXdEYXRlLmdldE1vbnRoKCkgKyBhbW91bnQ7XG4gIGxldCBleHBlY3RlZE1vbnRoID0gbW9udGhzVG9TZXQgJSAxMjtcbiAgaWYgKGV4cGVjdGVkTW9udGggPCAwKSB7XG4gICAgZXhwZWN0ZWRNb250aCArPSAxMjtcbiAgfVxuXG4gIGNvbnN0IHRpbWUgPSBuZXdEYXRlLnNldE1vbnRoKG1vbnRoc1RvU2V0KTtcbiAgcmV0dXJuIG5ld0RhdGUuZ2V0TW9udGgoKSAhPT0gZXhwZWN0ZWRNb250aCA/IG5ld0RhdGUuc2V0RGF0ZSgwKSA6IHRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRZZWFycyhkYXRlLCBhbW91bnQpIHtcbiAgLy8gSWYgdGhlIGRhdGUgaXMgRmViIDI5IGFuZCB0aGUgbmV3IHllYXIgaXMgbm90IGEgbGVhcCB5ZWFyLCBGZWIgMjggb2YgdGhlXG4gIC8vIG5ldyB5ZWFyIHdpbGwgYmUgcmV0dXJuZWQuXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgZXhwZWN0ZWRNb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgYW1vdW50KTtcbiAgcmV0dXJuIGV4cGVjdGVkTW9udGggPT09IDEgJiYgbmV3RGF0ZS5nZXRNb250aCgpID09PSAyID8gbmV3RGF0ZS5zZXREYXRlKDApIDogdGltZTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR0d2VuIDIgZGF5cyBvZiB0aGUgd2Vla1xuZnVuY3Rpb24gZGF5RGlmZihkYXksIGZyb20pIHtcbiAgcmV0dXJuIChkYXkgLSBmcm9tICsgNykgJSA3O1xufVxuXG4vLyBHZXQgdGhlIGRhdGUgb2YgdGhlIHNwZWNpZmllZCBkYXkgb2YgdGhlIHdlZWsgb2YgZ2l2ZW4gYmFzZSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZUaGVXZWVrT2YoYmFzZURhdGUsIGRheU9mV2Vlaywgd2Vla1N0YXJ0ID0gMCkge1xuICBjb25zdCBiYXNlRGF5ID0gbmV3IERhdGUoYmFzZURhdGUpLmdldERheSgpO1xuICByZXR1cm4gYWRkRGF5cyhiYXNlRGF0ZSwgZGF5RGlmZihkYXlPZldlZWssIHdlZWtTdGFydCkgLSBkYXlEaWZmKGJhc2VEYXksIHdlZWtTdGFydCkpO1xufVxuXG4vLyBHZXQgdGhlIElTTyB3ZWVrIG9mIGEgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSkge1xuICAvLyBzdGFydCBvZiBJU08gd2VlayBpcyBNb25kYXlcbiAgY29uc3QgdGh1T2ZUaGVXZWVrID0gZGF5T2ZUaGVXZWVrT2YoZGF0ZSwgNCwgMSk7XG4gIC8vIDFzdCB3ZWVrID09IHRoZSB3ZWVrIHdoZXJlIHRoZSA0dGggb2YgSmFudWFyeSBpcyBpblxuICBjb25zdCBmaXJzdFRodSA9IGRheU9mVGhlV2Vla09mKG5ldyBEYXRlKHRodU9mVGhlV2Vlaykuc2V0TW9udGgoMCwgNCksIDQsIDEpO1xuICByZXR1cm4gTWF0aC5yb3VuZCgodGh1T2ZUaGVXZWVrIC0gZmlyc3RUaHUpIC8gNjA0ODAwMDAwKSArIDE7XG59XG5cbi8vIEdldCB0aGUgc3RhcnQgeWVhciBvZiB0aGUgcGVyaW9kIG9mIHllYXJzIHRoYXQgaW5jbHVkZXMgZ2l2ZW4gZGF0ZVxuLy8geWVhcnM6IGxlbmd0aCBvZiB0aGUgeWVhciBwZXJpb2RcbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhclBlcmlvZChkYXRlLCB5ZWFycykge1xuICAvKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1llYXJfemVybyNJU09fODYwMSAqL1xuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoeWVhciAvIHllYXJzKSAqIHllYXJzO1xufVxuXG4vLyBDb252ZXJ0IGRhdGUgdG8gdGhlIGZpcnN0L2xhc3QgZGF0ZSBvZiB0aGUgbW9udGgveWVhciBvZiB0aGUgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3VsYXJpemVEYXRlKGRhdGUsIHRpbWVTcGFuLCB1c2VMYXN0RGF0ZSkge1xuICBpZiAodGltZVNwYW4gIT09IDEgJiYgdGltZVNwYW4gIT09IDIpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGlmICh0aW1lU3BhbiA9PT0gMSkge1xuICAgIHVzZUxhc3REYXRlXG4gICAgICA/IG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpICsgMSwgMClcbiAgICAgIDogbmV3RGF0ZS5zZXREYXRlKDEpO1xuICB9IGVsc2Uge1xuICAgIHVzZUxhc3REYXRlXG4gICAgICA/IG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgMSwgMCwgMClcbiAgICAgIDogbmV3RGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgfVxuICByZXR1cm4gbmV3RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSFRNTChodG1sKSB7XG4gIHJldHVybiByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnQoZWwpIHtcbiAgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnRcbiAgICB8fCAoZWwucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBY3RpdmVFbGVtZW50KGVsKSB7XG4gIHJldHVybiBlbC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQgPT09IGVsO1xufVxuXG4vLyBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIDp2aXNibGVcbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgcmV0dXJuICEhKGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudChlbCkge1xuICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGJhY2sgdXAgdGhlIGV4aXN0aW5nIGRpc3BsYXkgc2V0dGluZyBpbiBkYXRhLXN0eWxlLWRpc3BsYXlcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkpIHtcbiAgICBlbC5kYXRhc2V0LnN0eWxlRGlzcGxheSA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gIH1cbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5KSB7XG4gICAgLy8gcmVzdG9yZSBiYWNrZWQtdXAgZGlzcGF5IHByb3BlcnR5XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5O1xuICAgIGRlbGV0ZSBlbC5kYXRhc2V0LnN0eWxlRGlzcGxheTtcbiAgfSBlbHNlIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Q2hpbGROb2RlcyhlbCkge1xuICBpZiAoZWwuZmlyc3RDaGlsZCkge1xuICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIGVtcHR5Q2hpbGROb2RlcyhlbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzKGVsLCBuZXdDaGlsZE5vZGVzKSB7XG4gIGVtcHR5Q2hpbGROb2RlcyhlbCk7XG4gIGlmIChuZXdDaGlsZE5vZGVzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgIGVsLmFwcGVuZENoaWxkKG5ld0NoaWxkTm9kZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuZXdDaGlsZE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIGVsLmFwcGVuZENoaWxkKHBhcnNlSFRNTChuZXdDaGlsZE5vZGVzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5ld0NoaWxkTm9kZXMuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG5ld0NoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgZWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IGxpc3RlbmVyUmVnaXN0cnkgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qge2FkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXJ9ID0gRXZlbnRUYXJnZXQucHJvdG90eXBlO1xuXG4vLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgdG8gYSBrZXkgb2JqZWN0XG4vLyBsaXN0ZW5lcnM6IGFycmF5IG9mIGxpc3RlbmVyIGRlZmluaXRpb25zO1xuLy8gICAtIGVhY2ggZGVmaW5pdGlvbiBtdXN0IGJlIGEgZmxhdCBhcnJheSBvZiBldmVudCB0YXJnZXQgYW5kIHRoZSBhcmd1bWVudHNcbi8vICAgICB1c2VkIHRvIGNhbGwgYWRkRXZlbnRMaXN0ZW5lcigpIG9uIHRoZSB0YXJnZXRcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVycyhrZXlPYmosIGxpc3RlbmVycykge1xuICBsZXQgcmVnaXN0ZXJlZCA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KGtleU9iaik7XG4gIGlmICghcmVnaXN0ZXJlZCkge1xuICAgIHJlZ2lzdGVyZWQgPSBbXTtcbiAgICBsaXN0ZW5lclJlZ2lzdHJ5LnNldChrZXlPYmosIHJlZ2lzdGVyZWQpO1xuICB9XG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCguLi5saXN0ZW5lcik7XG4gICAgcmVnaXN0ZXJlZC5wdXNoKGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyTGlzdGVuZXJzKGtleU9iaikge1xuICBsZXQgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQoa2V5T2JqKTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKC4uLmxpc3RlbmVyKTtcbiAgfSk7XG4gIGxpc3RlbmVyUmVnaXN0cnkuZGVsZXRlKGtleU9iaik7XG59XG5cbi8vIEV2ZW50LmNvbXBvc2VkUGF0aCgpIHBvbHlmaWxsIGZvciBFZGdlXG4vLyBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9rbGVpbmZyZXVuZC9lOTc4N2Q3Mzc3NmMwZTM3NTBkY2ZjZGM4OWYxMDBlY1xuaWYgKCFFdmVudC5wcm90b3R5cGUuY29tcG9zZWRQYXRoKSB7XG4gIGNvbnN0IGdldENvbXBvc2VkUGF0aCA9IChub2RlLCBwYXRoID0gW10pID0+IHtcbiAgICBwYXRoLnB1c2gobm9kZSk7XG5cbiAgICBsZXQgcGFyZW50O1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaG9zdCkgeyAvLyBTaGFkb3dSb290XG4gICAgICBwYXJlbnQgPSBub2RlLmhvc3Q7XG4gICAgfSBlbHNlIGlmIChub2RlLmRlZmF1bHRWaWV3KSB7ICAvLyBEb2N1bWVudFxuICAgICAgcGFyZW50ID0gbm9kZS5kZWZhdWx0VmlldztcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldENvbXBvc2VkUGF0aChwYXJlbnQsIHBhdGgpIDogcGF0aDtcbiAgfTtcblxuICBFdmVudC5wcm90b3R5cGUuY29tcG9zZWRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRDb21wb3NlZFBhdGgodGhpcy50YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kRnJvbVBhdGgocGF0aCwgY3JpdGVyaWEsIGN1cnJlbnRUYXJnZXQpIHtcbiAgY29uc3QgW25vZGUsIC4uLnJlc3RdID0gcGF0aDtcbiAgaWYgKGNyaXRlcmlhKG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgaWYgKG5vZGUgPT09IGN1cnJlbnRUYXJnZXQgfHwgbm9kZS50YWdOYW1lID09PSAnSFRNTCcgfHwgcmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBzdG9wIHdoZW4gcmVhY2hpbmcgY3VycmVudFRhcmdldCBvciA8aHRtbD5cbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGZpbmRGcm9tUGF0aChyZXN0LCBjcml0ZXJpYSwgY3VycmVudFRhcmdldCk7XG59XG5cbi8vIFNlYXJjaCBmb3IgdGhlIGFjdHVhbCB0YXJnZXQgb2YgYSBkZWxlZ2F0ZWQgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRWxlbWVudEluRXZlbnRQYXRoKGV2LCBzZWxlY3Rvcikge1xuICBjb25zdCBjcml0ZXJpYSA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2VsZWN0b3JcbiAgICA6IGVsID0+IGVsIGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGZpbmRGcm9tUGF0aChldi5jb21wb3NlZFBhdGgoKSwgY3JpdGVyaWEsIGV2LmN1cnJlbnRUYXJnZXQpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SXRlbU9mKGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuLy8gcHVzaCBvbmx5IHRoZSBpdGVtcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gcHVzaFVuaXF1ZShhcnIsIC4uLml0ZW1zKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyci5wdXNoKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyLCBzZXBhcmF0b3IpIHtcbiAgLy8gY29udmVydCBlbXB0eSBzdHJpbmcgdG8gYW4gZW1wdHkgYXJyYXlcbiAgcmV0dXJuIHN0ciA/IHN0ci5zcGxpdChzZXBhcmF0b3IpIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luUmFuZ2UodGVzdFZhbCwgbWluLCBtYXgpIHtcbiAgY29uc3QgbWluT0sgPSBtaW4gPT09IHVuZGVmaW5lZCB8fCB0ZXN0VmFsID49IG1pbjtcbiAgY29uc3QgbWF4T0sgPSBtYXggPT09IHVuZGVmaW5lZCB8fCB0ZXN0VmFsIDw9IG1heDtcbiAgcmV0dXJuIG1pbk9LICYmIG1heE9LO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGltaXRUb1JhbmdlKHZhbCwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbCA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHZhbCA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhZ1JlcGVhdCh0YWdOYW1lLCByZXBlYXQsIGF0dHJpYnV0ZXMgPSB7fSwgaW5kZXggPSAwLCBodG1sID0gJycpIHtcbiAgY29uc3Qgb3BlblRhZ1NyYyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZSgoc3JjLCBhdHRyKSA9PiB7XG4gICAgbGV0IHZhbCA9IGF0dHJpYnV0ZXNbYXR0cl07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbCA9IHZhbChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBgJHtzcmN9ICR7YXR0cn09XCIke3ZhbH1cImA7XG4gIH0sIHRhZ05hbWUpO1xuICBodG1sICs9IGA8JHtvcGVuVGFnU3JjfT48LyR7dGFnTmFtZX0+YDtcblxuICBjb25zdCBuZXh0ID0gaW5kZXggKyAxO1xuICByZXR1cm4gbmV4dCA8IHJlcGVhdFxuICAgID8gY3JlYXRlVGFnUmVwZWF0KHRhZ05hbWUsIHJlcGVhdCwgYXR0cmlidXRlcywgbmV4dCwgaHRtbClcbiAgICA6IGh0bWw7XG59XG5cbi8vIFJlbW92ZSB0aGUgc3BhY2luZyBzdXJyb3VuZGluZyB0YWdzIGZvciBIVE1MIHBhcnNlciBub3QgdG8gY3JlYXRlIHRleHQgbm9kZXNcbi8vIGJlZm9yZS9hZnRlciBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplVGVtcGxhdGVIVE1MKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPlxccysvZywgJz4nKS5yZXBsYWNlKC9cXHMrPC8sICc8Jyk7XG59XG4iLCJpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXIuanMnO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlciBmcm9tICcuL0RhdGVSYW5nZVBpY2tlci5qcyc7XG5cbmV4cG9ydCB7RGF0ZXBpY2tlciwgRGF0ZVJhbmdlUGlja2VyfTtcbiIsIi8vIGNvbmZpZyBvcHRpb25zIHVwZGF0YWJsZSBieSBzZXRPcHRpb25zKCkgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgYXV0b2hpZGU6IGZhbHNlLFxuICBiZWZvcmVTaG93RGF5OiBudWxsLFxuICBiZWZvcmVTaG93RGVjYWRlOiBudWxsLFxuICBiZWZvcmVTaG93TW9udGg6IG51bGwsXG4gIGJlZm9yZVNob3dZZWFyOiBudWxsLFxuICBjYWxlbmRhcldlZWtzOiBmYWxzZSxcbiAgY2xlYXJCdG46IGZhbHNlLFxuICBkYXRlRGVsaW1pdGVyOiAnLCcsXG4gIGRhdGVzRGlzYWJsZWQ6IFtdLFxuICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IFtdLFxuICBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IFtdLFxuICBkZWZhdWx0Vmlld0RhdGU6IHVuZGVmaW5lZCwgLy8gcGxhY2Vob2xkZXIsIGRlZmF1bHRzIHRvIHRvZGF5KCkgYnkgdGhlIHByb2dyYW1cbiAgZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6IGZhbHNlLFxuICBmb3JtYXQ6ICdtbS9kZC95eXl5JyxcbiAgbGFuZ3VhZ2U6ICdlbicsXG4gIG1heERhdGU6IG51bGwsXG4gIG1heE51bWJlck9mRGF0ZXM6IDEsXG4gIG1heFZpZXc6IDMsXG4gIG1pbkRhdGU6IG51bGwsXG4gIG5leHRBcnJvdzogJ8K7JyxcbiAgb3JpZW50YXRpb246ICdhdXRvJyxcbiAgcGlja0xldmVsOiAwLFxuICBwcmV2QXJyb3c6ICfCqycsXG4gIHNob3dEYXlzT2ZXZWVrOiB0cnVlLFxuICBzaG93T25DbGljazogdHJ1ZSxcbiAgc2hvd09uRm9jdXM6IHRydWUsXG4gIHN0YXJ0VmlldzogMCxcbiAgdGl0bGU6ICcnLFxuICB0b2RheUJ0bjogZmFsc2UsXG4gIHRvZGF5QnRuTW9kZTogMCxcbiAgdG9kYXlIaWdobGlnaHQ6IGZhbHNlLFxuICB1cGRhdGVPbkJsdXI6IHRydWUsXG4gIHdlZWtTdGFydDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zO1xuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7ZGF0ZVZhbHVlLCByZWd1bGFyaXplRGF0ZX0gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtyZUZvcm1hdFRva2VucywgcGFyc2VEYXRlfSBmcm9tICcuLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vZGVmYXVsdE9wdGlvbnMuanMnO1xuXG5jb25zdCB7XG4gIGxhbmd1YWdlOiBkZWZhdWx0TGFuZyxcbiAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICB3ZWVrU3RhcnQ6IGRlZmF1bHRXZWVrU3RhcnQsXG59ID0gZGVmYXVsdE9wdGlvbnM7XG5cbi8vIFJlZHVjZXIgZnVuY3Rpb24gdG8gZmlsdGVyIG91dCBpbnZhbGlkIGRheS1vZi13ZWVrIGZyb20gdGhlIGlucHV0XG5mdW5jdGlvbiBzYW5pdGl6ZURPVyhkb3csIGRheSkge1xuICByZXR1cm4gZG93Lmxlbmd0aCA8IDYgJiYgZGF5ID49IDAgJiYgZGF5IDwgN1xuICAgID8gcHVzaFVuaXF1ZShkb3csIGRheSlcbiAgICA6IGRvdztcbn1cblxuZnVuY3Rpb24gY2FsY0VuZE9mV2VlayhzdGFydE9mV2Vlaykge1xuICByZXR1cm4gKHN0YXJ0T2ZXZWVrICsgNikgJSA3O1xufVxuXG4vLyB2YWxpZGF0ZSBpbnB1dCBkYXRlLiBpZiBpbnZhbGlkLCBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgdmFsdWVcbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUsIG9yaWdWYWx1ZSkge1xuICBjb25zdCBkYXRlID0gcGFyc2VEYXRlKHZhbHVlLCBmb3JtYXQsIGxvY2FsZSk7XG4gIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWQgPyBkYXRlIDogb3JpZ1ZhbHVlO1xufVxuXG4vLyBWYWxpZGF0ZSB2aWV3SWQuIGlmIGludmFsaWQsIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuZnVuY3Rpb24gdmFsaWRhdGVWaWV3SWQodmFsdWUsIG9yaWdWYWx1ZSwgbWF4ID0gMykge1xuICBjb25zdCB2aWV3SWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICByZXR1cm4gdmlld0lkID49IDAgJiYgdmlld0lkIDw9IG1heCA/IHZpZXdJZCA6IG9yaWdWYWx1ZTtcbn1cblxuLy8gQ3JlYXRlIERhdGVwaWNrZXIgY29uZmlndXJhdGlvbiB0byBzZXRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIGRhdGVwaWNrZXIpIHtcbiAgY29uc3QgaW5PcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuICBjb25zdCBsb2NhbGVzID0gZGF0ZXBpY2tlci5jb25zdHJ1Y3Rvci5sb2NhbGVzO1xuICBjb25zdCByYW5nZVNpZGVJbmRleCA9IGRhdGVwaWNrZXIucmFuZ2VTaWRlSW5kZXg7XG4gIGxldCB7XG4gICAgZm9ybWF0LFxuICAgIGxhbmd1YWdlLFxuICAgIGxvY2FsZSxcbiAgICBtYXhEYXRlLFxuICAgIG1heFZpZXcsXG4gICAgbWluRGF0ZSxcbiAgICBwaWNrTGV2ZWwsXG4gICAgc3RhcnRWaWV3LFxuICAgIHdlZWtTdGFydCxcbiAgfSA9IGRhdGVwaWNrZXIuY29uZmlnIHx8IHt9O1xuXG4gIGlmIChpbk9wdHMubGFuZ3VhZ2UpIHtcbiAgICBsZXQgbGFuZztcbiAgICBpZiAoaW5PcHRzLmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuICAgICAgaWYgKGxvY2FsZXNbaW5PcHRzLmxhbmd1YWdlXSkge1xuICAgICAgICBsYW5nID0gaW5PcHRzLmxhbmd1YWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgbGFuZ2F1Z2UgKyByZWdpb24gdGFnIGNhbiBmYWxsYmFjayB0byB0aGUgb25lIHdpdGhvdXRcbiAgICAgICAgLy8gcmVnaW9uIChlLmcuIGZyLUNBIOKGkiBmcilcbiAgICAgICAgbGFuZyA9IGluT3B0cy5sYW5ndWFnZS5zcGxpdCgnLScpWzBdO1xuICAgICAgICBpZiAobG9jYWxlc1tsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGFuZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIGxhbmd1YWdlID0gY29uZmlnLmxhbmd1YWdlID0gbGFuZztcblxuICAgICAgLy8gdXBkYXRlIGxvY2FsZSBhcyB3ZWxsIHdoZW4gdXBkYXRpbmcgbGFuZ3VhZ2VcbiAgICAgIGNvbnN0IG9yaWdMb2NhbGUgPSBsb2NhbGUgfHwgbG9jYWxlc1tkZWZhdWx0TGFuZ107XG4gICAgICAvLyB1c2UgZGVmYXVsdCBsYW5ndWFnZSdzIHByb3BlcnRpZXMgZm9yIHRoZSBmYWxsYmFja1xuICAgICAgbG9jYWxlID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgd2Vla1N0YXJ0OiBkZWZhdWx0V2Vla1N0YXJ0XG4gICAgICB9LCBsb2NhbGVzW2RlZmF1bHRMYW5nXSk7XG4gICAgICBpZiAobGFuZ3VhZ2UgIT09IGRlZmF1bHRMYW5nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obG9jYWxlLCBsb2NhbGVzW2xhbmd1YWdlXSk7XG4gICAgICB9XG4gICAgICBjb25maWcubG9jYWxlID0gbG9jYWxlO1xuICAgICAgLy8gaWYgZm9ybWF0IGFuZC9vciB3ZWVrU3RhcnQgYXJlIHRoZSBzYW1lIGFzIG9sZCBsb2NhbGUncyBkZWZhdWx0cyxcbiAgICAgIC8vIHVwZGF0ZSB0aGVtIHRvIG5ldyBsb2NhbGUncyBkZWZhdWx0c1xuICAgICAgaWYgKGZvcm1hdCA9PT0gb3JpZ0xvY2FsZS5mb3JtYXQpIHtcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLmZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gICAgICB9XG4gICAgICBpZiAod2Vla1N0YXJ0ID09PSBvcmlnTG9jYWxlLndlZWtTdGFydCkge1xuICAgICAgICB3ZWVrU3RhcnQgPSBjb25maWcud2Vla1N0YXJ0ID0gbG9jYWxlLndlZWtTdGFydDtcbiAgICAgICAgY29uZmlnLndlZWtFbmQgPSBjYWxjRW5kT2ZXZWVrKGxvY2FsZS53ZWVrU3RhcnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbk9wdHMuZm9ybWF0KSB7XG4gICAgY29uc3QgaGFzVG9EaXNwbGF5ID0gdHlwZW9mIGluT3B0cy5mb3JtYXQudG9EaXNwbGF5ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IGhhc1RvVmFsdWUgPSB0eXBlb2YgaW5PcHRzLmZvcm1hdC50b1ZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IHZhbGlkRm9ybWF0U3RyaW5nID0gcmVGb3JtYXRUb2tlbnMudGVzdChpbk9wdHMuZm9ybWF0KTtcbiAgICBpZiAoKGhhc1RvRGlzcGxheSAmJiBoYXNUb1ZhbHVlKSB8fCB2YWxpZEZvcm1hdFN0cmluZykge1xuICAgICAgZm9ybWF0ID0gY29uZmlnLmZvcm1hdCA9IGluT3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMuZm9ybWF0O1xuICB9XG5cbiAgLy8qKiogcGljayBsZXZlbCAqKiovL1xuICBsZXQgbmV3UGlja0xldmVsID0gcGlja0xldmVsO1xuICBpZiAoaW5PcHRzLnBpY2tMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3UGlja0xldmVsID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLnBpY2tMZXZlbCwgMik7XG4gICAgZGVsZXRlIGluT3B0cy5waWNrTGV2ZWw7XG4gIH1cbiAgaWYgKG5ld1BpY2tMZXZlbCAhPT0gcGlja0xldmVsKSB7XG4gICAgaWYgKG5ld1BpY2tMZXZlbCA+IHBpY2tMZXZlbCkge1xuICAgICAgLy8gY29tcGxlbWVudCBjdXJyZW50IG1pbkRhdGUvbWFkRGF0ZSBzbyB0aGF0IHRoZSBleGlzdGluZyByYW5nZSB3aWxsIGJlXG4gICAgICAvLyBleHBhbmRlZCB0byBmaXQgdGhlIG5ldyBsZXZlbCBsYXRlclxuICAgICAgaWYgKGluT3B0cy5taW5EYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5PcHRzLm1pbkRhdGUgPSBtaW5EYXRlO1xuICAgICAgfVxuICAgICAgaWYgKGluT3B0cy5tYXhEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5PcHRzLm1heERhdGUgPSBtYXhEYXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21wbGVtZW50IGRhdGVzRGlzYWJsZWQgc28gdGhhdCBpdCB3aWxsIGJlIHJlc2V0IGxhdGVyXG4gICAgaWYgKCFpbk9wdHMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgaW5PcHRzLmRhdGVzRGlzYWJsZWQgPSBbXTtcbiAgICB9XG4gICAgcGlja0xldmVsID0gY29uZmlnLnBpY2tMZXZlbCA9IG5ld1BpY2tMZXZlbDtcbiAgfVxuXG4gIC8vKioqIGRhdGVzICoqKi8vXG4gIC8vIHdoaWxlIG1pbiBhbmQgbWF4RGF0ZSBmb3IgXCJubyBsaW1pdFwiIGluIHRoZSBvcHRpb25zIGFyZSBiZXR0ZXIgdG8gYmUgbnVsbFxuICAvLyAoZXNwZWNpYWxseSB3aGVuIHVwZGF0aW5nKSwgdGhlIG9uZXMgaW4gdGhlIGNvbmZpZyBoYXZlIHRvIGJlIHVuZGVmaW5lZFxuICAvLyBiZWNhdXNlIG51bGwgaXMgdHJlYXRlZCBhcyAwICg9IHVuaXggZXBvY2gpIHdoZW4gY29tcGFyaW5nIHdpdGggdGltZSB2YWx1ZVxuICBsZXQgbWluRHQgPSBtaW5EYXRlO1xuICBsZXQgbWF4RHQgPSBtYXhEYXRlO1xuICBpZiAoaW5PcHRzLm1pbkRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRlZmF1bHRNaW5EdCA9IGRhdGVWYWx1ZSgwLCAwLCAxKTtcbiAgICBtaW5EdCA9IGluT3B0cy5taW5EYXRlID09PSBudWxsXG4gICAgICA/IGRlZmF1bHRNaW5EdCAgLy8gc2V0IDAwMDAtMDEtMDEgdG8gcHJldmVudCBuZWdhdGl2ZSB2YWx1ZXMgZm9yIHllYXJcbiAgICAgIDogdmFsaWRhdGVEYXRlKGluT3B0cy5taW5EYXRlLCBmb3JtYXQsIGxvY2FsZSwgbWluRHQpO1xuICAgIGlmIChtaW5EdCAhPT0gZGVmYXVsdE1pbkR0KSB7XG4gICAgICBtaW5EdCA9IHJlZ3VsYXJpemVEYXRlKG1pbkR0LCBwaWNrTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5taW5EYXRlO1xuICB9XG4gIGlmIChpbk9wdHMubWF4RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4RHQgPSBpbk9wdHMubWF4RGF0ZSA9PT0gbnVsbFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsaWRhdGVEYXRlKGluT3B0cy5tYXhEYXRlLCBmb3JtYXQsIGxvY2FsZSwgbWF4RHQpO1xuICAgIGlmIChtYXhEdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXhEdCA9IHJlZ3VsYXJpemVEYXRlKG1heER0LCBwaWNrTGV2ZWwsIHRydWUpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm1heERhdGU7XG4gIH1cbiAgaWYgKG1heER0IDwgbWluRHQpIHtcbiAgICBtaW5EYXRlID0gY29uZmlnLm1pbkRhdGUgPSBtYXhEdDtcbiAgICBtYXhEYXRlID0gY29uZmlnLm1heERhdGUgPSBtaW5EdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAobWluRGF0ZSAhPT0gbWluRHQpIHtcbiAgICAgIG1pbkRhdGUgPSBjb25maWcubWluRGF0ZSA9IG1pbkR0O1xuICAgIH1cbiAgICBpZiAobWF4RGF0ZSAhPT0gbWF4RHQpIHtcbiAgICAgIG1heERhdGUgPSBjb25maWcubWF4RGF0ZSA9IG1heER0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbk9wdHMuZGF0ZXNEaXNhYmxlZCkge1xuICAgIGNvbmZpZy5kYXRlc0Rpc2FibGVkID0gaW5PcHRzLmRhdGVzRGlzYWJsZWQucmVkdWNlKChkYXRlcywgZHQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZURhdGUoZHQsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICAgIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwdXNoVW5pcXVlKGRhdGVzLCByZWd1bGFyaXplRGF0ZShkYXRlLCBwaWNrTGV2ZWwsIHJhbmdlU2lkZUluZGV4KSlcbiAgICAgICAgOiBkYXRlcztcbiAgICB9LCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXRlc0Rpc2FibGVkO1xuICB9XG4gIGlmIChpbk9wdHMuZGVmYXVsdFZpZXdEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IHBhcnNlRGF0ZShpbk9wdHMuZGVmYXVsdFZpZXdEYXRlLCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgaWYgKHZpZXdEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5kZWZhdWx0Vmlld0RhdGUgPSB2aWV3RGF0ZTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5kZWZhdWx0Vmlld0RhdGU7XG4gIH1cblxuICAvLyoqKiBkYXlzIG9mIHdlZWsgKioqLy9cbiAgaWYgKGluT3B0cy53ZWVrU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHdrU3RhcnQgPSBOdW1iZXIoaW5PcHRzLndlZWtTdGFydCkgJSA3O1xuICAgIGlmICghaXNOYU4od2tTdGFydCkpIHtcbiAgICAgIHdlZWtTdGFydCA9IGNvbmZpZy53ZWVrU3RhcnQgPSB3a1N0YXJ0O1xuICAgICAgY29uZmlnLndlZWtFbmQgPSBjYWxjRW5kT2ZXZWVrKHdrU3RhcnQpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLndlZWtTdGFydDtcbiAgfVxuICBpZiAoaW5PcHRzLmRheXNPZldlZWtEaXNhYmxlZCkge1xuICAgIGNvbmZpZy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkLnJlZHVjZShzYW5pdGl6ZURPVywgW10pO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkO1xuICB9XG4gIGlmIChpbk9wdHMuZGF5c09mV2Vla0hpZ2hsaWdodGVkKSB7XG4gICAgY29uZmlnLmRheXNPZldlZWtIaWdobGlnaHRlZCA9IGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQucmVkdWNlKHNhbml0aXplRE9XLCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvLyoqKiBtdWx0aSBkYXRlICoqKi8vXG4gIGlmIChpbk9wdHMubWF4TnVtYmVyT2ZEYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWF4TnVtYmVyT2ZEYXRlcyA9IHBhcnNlSW50KGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzLCAxMCk7XG4gICAgaWYgKG1heE51bWJlck9mRGF0ZXMgPj0gMCkge1xuICAgICAgY29uZmlnLm1heE51bWJlck9mRGF0ZXMgPSBtYXhOdW1iZXJPZkRhdGVzO1xuICAgICAgY29uZmlnLm11bHRpZGF0ZSA9IG1heE51bWJlck9mRGF0ZXMgIT09IDE7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubWF4TnVtYmVyT2ZEYXRlcztcbiAgfVxuICBpZiAoaW5PcHRzLmRhdGVEZWxpbWl0ZXIpIHtcbiAgICBjb25maWcuZGF0ZURlbGltaXRlciA9IFN0cmluZyhpbk9wdHMuZGF0ZURlbGltaXRlcik7XG4gICAgZGVsZXRlIGluT3B0cy5kYXRlRGVsaW1pdGVyO1xuICB9XG5cbiAgLy8qKiogdmlldyAqKiovL1xuICBsZXQgbmV3TWF4VmlldyA9IG1heFZpZXc7XG4gIGlmIChpbk9wdHMubWF4VmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3TWF4VmlldyA9IHZhbGlkYXRlVmlld0lkKGluT3B0cy5tYXhWaWV3LCBtYXhWaWV3KTtcbiAgICBkZWxldGUgaW5PcHRzLm1heFZpZXc7XG4gIH1cbiAgLy8gZW5zdXJlIG1heCB2aWV3ID49IHBpY2sgbGV2ZWxcbiAgbmV3TWF4VmlldyA9IHBpY2tMZXZlbCA+IG5ld01heFZpZXcgPyBwaWNrTGV2ZWwgOiBuZXdNYXhWaWV3O1xuICBpZiAobmV3TWF4VmlldyAhPT0gbWF4Vmlldykge1xuICAgIG1heFZpZXcgPSBjb25maWcubWF4VmlldyA9IG5ld01heFZpZXc7XG4gIH1cblxuICBsZXQgbmV3U3RhcnRWaWV3ID0gc3RhcnRWaWV3O1xuICBpZiAoaW5PcHRzLnN0YXJ0VmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3U3RhcnRWaWV3ID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLnN0YXJ0VmlldywgbmV3U3RhcnRWaWV3KTtcbiAgICBkZWxldGUgaW5PcHRzLnN0YXJ0VmlldztcbiAgfVxuICAvLyBlbnN1cmUgcGljayBsZXZlbCA8PSBzdGFydCB2aWV3IDw9IG1heCB2aWV3XG4gIGlmIChuZXdTdGFydFZpZXcgPCBwaWNrTGV2ZWwpIHtcbiAgICBuZXdTdGFydFZpZXcgPSBwaWNrTGV2ZWw7XG4gIH0gZWxzZSBpZiAobmV3U3RhcnRWaWV3ID4gbWF4Vmlldykge1xuICAgIG5ld1N0YXJ0VmlldyA9IG1heFZpZXc7XG4gIH1cbiAgaWYgKG5ld1N0YXJ0VmlldyAhPT0gc3RhcnRWaWV3KSB7XG4gICAgY29uZmlnLnN0YXJ0VmlldyA9IG5ld1N0YXJ0VmlldztcbiAgfVxuXG4gIC8vKioqIHRlbXBsYXRlICoqKi8vXG4gIGlmIChpbk9wdHMucHJldkFycm93KSB7XG4gICAgY29uc3QgcHJldkFycm93ID0gcGFyc2VIVE1MKGluT3B0cy5wcmV2QXJyb3cpO1xuICAgIGlmIChwcmV2QXJyb3cuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25maWcucHJldkFycm93ID0gcHJldkFycm93LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMucHJldkFycm93O1xuICB9XG4gIGlmIChpbk9wdHMubmV4dEFycm93KSB7XG4gICAgY29uc3QgbmV4dEFycm93ID0gcGFyc2VIVE1MKGluT3B0cy5uZXh0QXJyb3cpO1xuICAgIGlmIChuZXh0QXJyb3cuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25maWcubmV4dEFycm93ID0gbmV4dEFycm93LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubmV4dEFycm93O1xuICB9XG5cbiAgLy8qKiogbWlzYyAqKiovL1xuICBpZiAoaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCAmJiAhIWluT3B0cy5kaXNhYmxlVG91Y2hLZXlib2FyZDtcbiAgICBkZWxldGUgaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkO1xuICB9XG4gIGlmIChpbk9wdHMub3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGluT3B0cy5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpO1xuICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IHtcbiAgICAgIHg6IG9yaWVudGF0aW9uLmZpbmQoeCA9PiAoeCA9PT0gJ2xlZnQnIHx8IHggPT09ICdyaWdodCcpKSB8fCAnYXV0bycsXG4gICAgICB5OiBvcmllbnRhdGlvbi5maW5kKHkgPT4gKHkgPT09ICd0b3AnIHx8IHkgPT09ICdib3R0b20nKSkgfHwgJ2F1dG8nLFxuICAgIH07XG4gICAgZGVsZXRlIGluT3B0cy5vcmllbnRhdGlvbjtcbiAgfVxuICBpZiAoaW5PcHRzLnRvZGF5QnRuTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoKGluT3B0cy50b2RheUJ0bk1vZGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uZmlnLnRvZGF5QnRuTW9kZSA9IGluT3B0cy50b2RheUJ0bk1vZGU7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMudG9kYXlCdG5Nb2RlO1xuICB9XG5cbiAgLy8qKiogY29weSB0aGUgcmVzdCAqKiovL1xuICBPYmplY3Qua2V5cyhpbk9wdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpbk9wdHNba2V5XSAhPT0gdW5kZWZpbmVkICYmIGhhc1Byb3BlcnR5KGRlZmF1bHRPcHRpb25zLCBrZXkpKSB7XG4gICAgICBjb25maWdba2V5XSA9IGluT3B0c1trZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImltcG9ydCB7aGFzUHJvcGVydHksIGxhc3RJdGVtT2YsIGlzSW5SYW5nZSwgbGltaXRUb1JhbmdlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHt0b2RheX0gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIGdldFBhcmVudCwgc2hvd0VsZW1lbnQsIGhpZGVFbGVtZW50LCBlbXB0eUNoaWxkTm9kZXN9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IHtyZWdpc3Rlckxpc3RlbmVyc30gZnJvbSAnLi4vbGliL2V2ZW50LmpzJztcbmltcG9ydCBwaWNrZXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9waWNrZXJUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgRGF5c1ZpZXcgZnJvbSAnLi92aWV3cy9EYXlzVmlldy5qcyc7XG5pbXBvcnQgTW9udGhzVmlldyBmcm9tICcuL3ZpZXdzL01vbnRoc1ZpZXcuanMnO1xuaW1wb3J0IFllYXJzVmlldyBmcm9tICcuL3ZpZXdzL1llYXJzVmlldy5qcyc7XG5pbXBvcnQge3RyaWdnZXJEYXRlcGlja2VyRXZlbnR9IGZyb20gJy4uL2V2ZW50cy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHtcbiAgb25DbGlja1RvZGF5QnRuLFxuICBvbkNsaWNrQ2xlYXJCdG4sXG4gIG9uQ2xpY2tWaWV3U3dpdGNoLFxuICBvbkNsaWNrUHJldkJ0bixcbiAgb25DbGlja05leHRCdG4sXG4gIG9uQ2xpY2tWaWV3LFxuICBvbk1vdXNlZG93blBpY2tlcixcbn0gZnJvbSAnLi4vZXZlbnRzL3BpY2tlckxpc3RlbmVycy5qcyc7XG5cbmNvbnN0IG9yaWVudENsYXNzZXMgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgb2JqW2tleV0gPSBgZGF0ZXBpY2tlci1vcmllbnQtJHtrZXl9YDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcbmNvbnN0IHRvUHggPSBudW0gPT4gbnVtID8gYCR7bnVtfXB4YCA6IG51bTtcblxuZnVuY3Rpb24gcHJvY2Vzc1BpY2tlck9wdGlvbnMocGlja2VyLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgcGlja2VyLmNvbnRyb2xzLnRpdGxlLnRleHRDb250ZW50ID0gb3B0aW9ucy50aXRsZTtcbiAgICAgIHNob3dFbGVtZW50KHBpY2tlci5jb250cm9scy50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpY2tlci5jb250cm9scy50aXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRpdGxlKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMucHJldkFycm93KSB7XG4gICAgY29uc3QgcHJldkJ0biA9IHBpY2tlci5jb250cm9scy5wcmV2QnRuO1xuICAgIGVtcHR5Q2hpbGROb2RlcyhwcmV2QnRuKTtcbiAgICBvcHRpb25zLnByZXZBcnJvdy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBwcmV2QnRuLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5uZXh0QXJyb3cpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gcGlja2VyLmNvbnRyb2xzLm5leHRCdG47XG4gICAgZW1wdHlDaGlsZE5vZGVzKG5leHRCdG4pO1xuICAgIG9wdGlvbnMubmV4dEFycm93LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5leHRCdG4uYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgIHBpY2tlci5jb250cm9scy50b2RheUJ0bi50ZXh0Q29udGVudCA9IG9wdGlvbnMubG9jYWxlLnRvZGF5O1xuICAgIHBpY2tlci5jb250cm9scy5jbGVhckJ0bi50ZXh0Q29udGVudCA9IG9wdGlvbnMubG9jYWxlLmNsZWFyO1xuICB9XG4gIGlmIChvcHRpb25zLnRvZGF5QnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy50b2RheUJ0bikge1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuKTtcbiAgICB9XG4gIH1cbiAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykgfHwgaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgIGNvbnN0IHttaW5EYXRlLCBtYXhEYXRlfSA9IHBpY2tlci5kYXRlcGlja2VyLmNvbmZpZztcbiAgICBwaWNrZXIuY29udHJvbHMudG9kYXlCdG4uZGlzYWJsZWQgPSAhaXNJblJhbmdlKHRvZGF5KCksIG1pbkRhdGUsIG1heERhdGUpO1xuICB9XG4gIGlmIChvcHRpb25zLmNsZWFyQnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy5jbGVhckJ0bikge1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29tcHV0ZSB2aWV3IGRhdGUgdG8gcmVzZXQsIHdoaWNoIHdpbGwgYmUuLi5cbi8vIC0gdGhlIGxhc3QgaXRlbSBvZiB0aGUgc2VsZWN0ZWQgZGF0ZXMgb3IgZGVmYXVsdFZpZXdEYXRlIGlmIG5vIHNlbGVjdGlvblxuLy8gLSBsaW1pdHRlZCB0byBtaW5EYXRlIG9yIG1heERhdGUgaWYgaXQgZXhjZWVkcyB0aGUgcmFuZ2VcbmZ1bmN0aW9uIGNvbXB1dGVSZXNldFZpZXdEYXRlKGRhdGVwaWNrZXIpIHtcbiAgY29uc3Qge2RhdGVzLCBjb25maWd9ID0gZGF0ZXBpY2tlcjtcbiAgY29uc3Qgdmlld0RhdGUgPSBkYXRlcy5sZW5ndGggPiAwID8gbGFzdEl0ZW1PZihkYXRlcykgOiBjb25maWcuZGVmYXVsdFZpZXdEYXRlO1xuICByZXR1cm4gbGltaXRUb1JhbmdlKHZpZXdEYXRlLCBjb25maWcubWluRGF0ZSwgY29uZmlnLm1heERhdGUpO1xufVxuXG4vLyBDaGFuZ2UgY3VycmVudCB2aWV3J3MgdmlldyBkYXRlXG5mdW5jdGlvbiBzZXRWaWV3RGF0ZShwaWNrZXIsIG5ld0RhdGUpIHtcbiAgY29uc3Qgb2xkVmlld0RhdGUgPSBuZXcgRGF0ZShwaWNrZXIudmlld0RhdGUpO1xuICBjb25zdCBuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKG5ld0RhdGUpO1xuICBjb25zdCB7aWQsIHllYXIsIGZpcnN0LCBsYXN0fSA9IHBpY2tlci5jdXJyZW50VmlldztcbiAgY29uc3Qgdmlld1llYXIgPSBuZXdWaWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHBpY2tlci52aWV3RGF0ZSA9IG5ld0RhdGU7XG4gIGlmICh2aWV3WWVhciAhPT0gb2xkVmlld0RhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQocGlja2VyLmRhdGVwaWNrZXIsICdjaGFuZ2VZZWFyJyk7XG4gIH1cbiAgaWYgKG5ld1ZpZXdEYXRlLmdldE1vbnRoKCkgIT09IG9sZFZpZXdEYXRlLmdldE1vbnRoKCkpIHtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHBpY2tlci5kYXRlcGlja2VyLCAnY2hhbmdlTW9udGgnKTtcbiAgfVxuXG4gIC8vIHJldHVybiB3aGV0aGVyIHRoZSBuZXcgZGF0ZSBpcyBpbiBkaWZmZXJlbnQgcGVyaW9kIG9uIHRpbWUgZnJvbSB0aGUgb25lXG4gIC8vIGRpc3BsYXllZCBpbiB0aGUgY3VycmVudCB2aWV3XG4gIC8vIHdoZW4gdHJ1ZSwgdGhlIHZpZXcgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQgb24gdGhlIG5leHQgVUkgcmVmcmVzaC5cbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBuZXdEYXRlIDwgZmlyc3QgfHwgbmV3RGF0ZSA+IGxhc3Q7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHZpZXdZZWFyICE9PSB5ZWFyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmlld1llYXIgPCBmaXJzdCB8fCB2aWV3WWVhciA+IGxhc3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGV4dERpcmVjdGlvbihlbCkge1xuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmRpcmVjdGlvbjtcbn1cblxuLy8gZmluZCB0aGUgY2xvc2V0IHNjcm9sbGFibGUgYW5jZXN0b3IgZWxlbW50IHVuZGVyIHRoZSBib2R5XG5mdW5jdGlvbiBmaW5kU2Nyb2xsUGFyZW50cyhlbCkge1xuICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnQoZWwpO1xuICBpZiAocGFyZW50ID09PSBkb2N1bWVudC5ib2R5IHx8ICFwYXJlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjaGVja2luZyBvdmVyZmxvdyBvbmx5IGlzIGVub3VnaCBiZWNhdXNlIGNvbXB1dGVkIG92ZXJmbG93IGNhbm5vdCBiZVxuICAvLyB2aXNpYmxlIG9yIGEgY29tYmluYXRpb24gb2YgdmlzaWJsZSBhbmQgb3RoZXIgd2hlbiBlaXRoZXIgYXhpcyBpcyBzZXRcbiAgLy8gdG8gb3RoZXIgdGhhbiB2aXNpYmxlLlxuICAvLyAoU2V0dGluZyBvbmUgYXhpcyB0byBvdGhlciB0aGFuICd2aXNpYmxlJyB3aGlsZSB0aGUgb3RoZXIgaXMgJ3Zpc2libGUnXG4gIC8vIHJlc3VsdHMgaW4gdGhlIG90aGVyIGF4aXMgdHVybmluZyB0byAnYXV0bycpXG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLm92ZXJmbG93ICE9PSAndmlzaWJsZSdcbiAgICA/IHBhcmVudFxuICAgIDogZmluZFNjcm9sbFBhcmVudHMocGFyZW50KTtcbn1cblxuLy8gQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBwaWNrZXIgVUlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGVwaWNrZXIpIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRoaXMuZGF0ZXBpY2tlciA9IGRhdGVwaWNrZXI7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHBpY2tlclRlbXBsYXRlLnJlcGxhY2UoLyVidXR0b25DbGFzcyUvZywgY29uZmlnLmJ1dHRvbkNsYXNzKTtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gcGFyc2VIVE1MKHRlbXBsYXRlKS5maXJzdENoaWxkO1xuICAgIGNvbnN0IFtoZWFkZXIsIG1haW4sIGZvb3Rlcl0gPSBlbGVtZW50LmZpcnN0Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgdGl0bGUgPSBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgW3ByZXZCdG4sIHZpZXdTd2l0Y2gsIG5leHRCdG5dID0gaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgW3RvZGF5QnRuLCBjbGVhckJ0bl0gPSBmb290ZXIuZmlyc3RDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCBjb250cm9scyA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgcHJldkJ0bixcbiAgICAgIHZpZXdTd2l0Y2gsXG4gICAgICBuZXh0QnRuLFxuICAgICAgdG9kYXlCdG4sXG4gICAgICBjbGVhckJ0bixcbiAgICB9O1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuXG4gICAgY29uc3QgZWxlbWVudENsYXNzID0gZGF0ZXBpY2tlci5pbmxpbmUgPyAnaW5saW5lJyA6ICdkcm9wZG93bic7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkYXRlcGlja2VyLSR7ZWxlbWVudENsYXNzfWApO1xuXG4gICAgcHJvY2Vzc1BpY2tlck9wdGlvbnModGhpcywgY29uZmlnKTtcbiAgICB0aGlzLnZpZXdEYXRlID0gY29tcHV0ZVJlc2V0Vmlld0RhdGUoZGF0ZXBpY2tlcik7XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgcmVnaXN0ZXJMaXN0ZW5lcnMoZGF0ZXBpY2tlciwgW1xuICAgICAgW2VsZW1lbnQsICdtb3VzZWRvd24nLCBvbk1vdXNlZG93blBpY2tlcl0sXG4gICAgICBbbWFpbiwgJ2NsaWNrJywgb25DbGlja1ZpZXcuYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMudmlld1N3aXRjaCwgJ2NsaWNrJywgb25DbGlja1ZpZXdTd2l0Y2guYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMucHJldkJ0biwgJ2NsaWNrJywgb25DbGlja1ByZXZCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMubmV4dEJ0biwgJ2NsaWNrJywgb25DbGlja05leHRCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMudG9kYXlCdG4sICdjbGljaycsIG9uQ2xpY2tUb2RheUJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5jbGVhckJ0biwgJ2NsaWNrJywgb25DbGlja0NsZWFyQnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgIF0pO1xuXG4gICAgLy8gc2V0IHVwIHZpZXdzXG4gICAgdGhpcy52aWV3cyA9IFtcbiAgICAgIG5ldyBEYXlzVmlldyh0aGlzKSxcbiAgICAgIG5ldyBNb250aHNWaWV3KHRoaXMpLFxuICAgICAgbmV3IFllYXJzVmlldyh0aGlzLCB7aWQ6IDIsIG5hbWU6ICd5ZWFycycsIGNlbGxDbGFzczogJ3llYXInLCBzdGVwOiAxfSksXG4gICAgICBuZXcgWWVhcnNWaWV3KHRoaXMsIHtpZDogMywgbmFtZTogJ2RlY2FkZXMnLCBjZWxsQ2xhc3M6ICdkZWNhZGUnLCBzdGVwOiAxMH0pLFxuICAgIF07XG4gICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMudmlld3NbY29uZmlnLnN0YXJ0Vmlld107XG5cbiAgICB0aGlzLmN1cnJlbnRWaWV3LnJlbmRlcigpO1xuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLmN1cnJlbnRWaWV3LmVsZW1lbnQpO1xuICAgIGlmIChjb25maWcuY29udGFpbmVyKSB7XG4gICAgICBjb25maWcuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVwaWNrZXIuaW5wdXRGaWVsZC5hZnRlcih0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHByb2Nlc3NQaWNrZXJPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMudmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy5pbml0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3LnJlbmRlcigpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2RhdGVwaWNrZXIsIGVsZW1lbnR9ID0gdGhpcztcbiAgICBpZiAoZGF0ZXBpY2tlci5pbmxpbmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVuc3VyZSBwaWNrZXIncyBkaXJlY3Rpb24gbWF0Y2hlcyBpbnB1dCdzXG4gICAgICBjb25zdCBpbnB1dERpcmVjdGlvbiA9IGdldFRleHREaXJlY3Rpb24oZGF0ZXBpY2tlci5pbnB1dEZpZWxkKTtcbiAgICAgIGlmIChpbnB1dERpcmVjdGlvbiAhPT0gZ2V0VGV4dERpcmVjdGlvbihnZXRQYXJlbnQoZWxlbWVudCkpKSB7XG4gICAgICAgIGVsZW1lbnQuZGlyID0gaW5wdXREaXJlY3Rpb247XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGlyKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXInKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnBsYWNlKCk7XG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2libGl0eSA9ICcnO1xuXG4gICAgICBpZiAoZGF0ZXBpY2tlci5jb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5pbnB1dEZpZWxkLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQoZGF0ZXBpY2tlciwgJ3Nob3cnKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGVwaWNrZXIuZXhpdEVkaXRNb2RlKCk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudCh0aGlzLmRhdGVwaWNrZXIsICdoaWRlJyk7XG4gIH1cblxuICBwbGFjZSgpIHtcbiAgICBjb25zdCB7Y2xhc3NMaXN0LCBvZmZzZXRQYXJlbnQsIHN0eWxlfSA9IHRoaXMuZWxlbWVudDtcbiAgICBjb25zdCB7Y29uZmlnLCBpbnB1dEZpZWxkfSA9IHRoaXMuZGF0ZXBpY2tlcjtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aDogY2FsZW5kYXJXaWR0aCxcbiAgICAgIGhlaWdodDogY2FsZW5kYXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0OiBpbnB1dExlZnQsXG4gICAgICB0b3A6IGlucHV0VG9wLFxuICAgICAgcmlnaHQ6IGlucHV0UmlnaHQsXG4gICAgICBib3R0b206IGlucHV0Qm90dG9tLFxuICAgICAgd2lkdGg6IGlucHV0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0XG4gICAgfSA9IGlucHV0RmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHt4OiBvcmllbnRYLCB5OiBvcmllbnRZfSA9IGNvbmZpZy5vcmllbnRhdGlvbjtcbiAgICBsZXQgbGVmdCA9IGlucHV0TGVmdDtcbiAgICBsZXQgdG9wID0gaW5wdXRUb3A7XG5cbiAgICAvLyBjYWxpY3VsYXRlIG9mZnNldExlZnQvVG9wIG9mIGlucHV0RmllbGRcbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudC5ib2R5IHx8ICFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIGxlZnQgKz0gd2luZG93LnNjcm9sbFg7XG4gICAgICB0b3AgKz0gd2luZG93LnNjcm9sbFk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZWZ0IC09IG9mZnNldFBhcmVudFJlY3QubGVmdCAtIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgdG9wIC09IG9mZnNldFBhcmVudFJlY3QudG9wIC0gb2Zmc2V0UGFyZW50LnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICAvLyBjYWxpY3VsYXRlIHRoZSBib3VuZGFyaWVzIG9mIHRoZSB2aXNpYmxlIGFyZWEgdGhhdCBjb250YWlucyBpbnB1dEZpZWxkXG4gICAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZmluZFNjcm9sbFBhcmVudHMoaW5wdXRGaWVsZCk7XG4gICAgbGV0IHNjcm9sbEFyZWFMZWZ0ID0gMDtcbiAgICBsZXQgc2Nyb2xsQXJlYVRvcCA9IDA7XG4gICAgbGV0IHtcbiAgICAgIGNsaWVudFdpZHRoOiBzY3JvbGxBcmVhUmlnaHQsXG4gICAgICBjbGllbnRIZWlnaHQ6IHNjcm9sbEFyZWFCb3R0b20sXG4gICAgfSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBhcmVudFJlY3QgPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC50b3AgPiAwKSB7XG4gICAgICAgIHNjcm9sbEFyZWFUb3AgPSBzY3JvbGxQYXJlbnRSZWN0LnRvcDtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LmxlZnQgPiAwKSB7XG4gICAgICAgIHNjcm9sbEFyZWFMZWZ0ID0gc2Nyb2xsUGFyZW50UmVjdC5sZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QucmlnaHQgPCBzY3JvbGxBcmVhUmlnaHQpIHtcbiAgICAgICAgc2Nyb2xsQXJlYVJpZ2h0ID0gc2Nyb2xsUGFyZW50UmVjdC5yaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LmJvdHRvbSA8IHNjcm9sbEFyZWFCb3R0b20pIHtcbiAgICAgICAgc2Nyb2xsQXJlYUJvdHRvbSA9IHNjcm9sbFBhcmVudFJlY3QuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRldGVybWluZSB0aGUgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiBhbmQgbGVmdCBwb3NpdGlvblxuICAgIGxldCBhZGp1c3RtZW50ID0gMDtcbiAgICBpZiAob3JpZW50WCA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoaW5wdXRMZWZ0IDwgc2Nyb2xsQXJlYUxlZnQpIHtcbiAgICAgICAgb3JpZW50WCA9ICdsZWZ0JztcbiAgICAgICAgYWRqdXN0bWVudCA9IHNjcm9sbEFyZWFMZWZ0IC0gaW5wdXRMZWZ0O1xuICAgICAgfSBlbHNlIGlmIChpbnB1dExlZnQgKyBjYWxlbmRhcldpZHRoID4gc2Nyb2xsQXJlYVJpZ2h0KSB7XG4gICAgICAgIG9yaWVudFggPSAncmlnaHQnO1xuICAgICAgICBpZiAoc2Nyb2xsQXJlYVJpZ2h0IDwgaW5wdXRSaWdodCkge1xuICAgICAgICAgIGFkanVzdG1lbnQgPSBzY3JvbGxBcmVhUmlnaHQgLSBpbnB1dFJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGdldFRleHREaXJlY3Rpb24oaW5wdXRGaWVsZCkgPT09ICdydGwnKSB7XG4gICAgICAgIG9yaWVudFggPSBpbnB1dFJpZ2h0IC0gY2FsZW5kYXJXaWR0aCA8IHNjcm9sbEFyZWFMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWVudFggPSAnbGVmdCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRYID09PSAncmlnaHQnKSB7XG4gICAgICBsZWZ0ICs9IGlucHV0V2lkdGggLSBjYWxlbmRhcldpZHRoO1xuICAgIH1cbiAgICBsZWZ0ICs9IGFkanVzdG1lbnQ7XG5cbiAgICAvLyBkZXRlcm1pbmUgdGhlIHZlcnRpY2FsIG9yaWVudGF0aW9uIGFuZCB0b3AgcG9zaXRpb25cbiAgICBpZiAob3JpZW50WSA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoaW5wdXRUb3AgLSBjYWxlbmRhckhlaWdodCA+IHNjcm9sbEFyZWFUb3ApIHtcbiAgICAgICAgb3JpZW50WSA9IGlucHV0Qm90dG9tICsgY2FsZW5kYXJIZWlnaHQgPiBzY3JvbGxBcmVhQm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWVudFkgPSAnYm90dG9tJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudFkgPT09ICd0b3AnKSB7XG4gICAgICB0b3AgLT0gY2FsZW5kYXJIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCArPSBpbnB1dEhlaWdodDtcbiAgICB9XG5cbiAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLk9iamVjdC52YWx1ZXMob3JpZW50Q2xhc3NlcykpO1xuICAgIGNsYXNzTGlzdC5hZGQob3JpZW50Q2xhc3Nlc1tvcmllbnRYXSwgb3JpZW50Q2xhc3Nlc1tvcmllbnRZXSk7XG5cbiAgICBzdHlsZS5sZWZ0ID0gdG9QeChsZWZ0KTtcbiAgICBzdHlsZS50b3AgPSB0b1B4KHRvcCk7XG4gIH1cblxuICBzZXRWaWV3U3dpdGNoTGFiZWwobGFiZWxUZXh0KSB7XG4gICAgdGhpcy5jb250cm9scy52aWV3U3dpdGNoLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICB9XG5cbiAgc2V0UHJldkJ0bkRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5jb250cm9scy5wcmV2QnRuLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBzZXROZXh0QnRuRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLm5leHRCdG4uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGNoYW5nZVZpZXcodmlld0lkKSB7XG4gICAgY29uc3Qgb2xkVmlldyA9IHRoaXMuY3VycmVudFZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9ICB0aGlzLnZpZXdzW3ZpZXdJZF07XG4gICAgaWYgKG5ld1ZpZXcuaWQgIT09IG9sZFZpZXcuaWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXdWaWV3O1xuICAgICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gJ3JlbmRlcic7XG4gICAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHRoaXMuZGF0ZXBpY2tlciwgJ2NoYW5nZVZpZXcnKTtcbiAgICAgIHRoaXMubWFpbi5yZXBsYWNlQ2hpbGQobmV3Vmlldy5lbGVtZW50LCBvbGRWaWV3LmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIENoYW5nZSB0aGUgZm9jdXNlZCBkYXRlICh2aWV3IGRhdGUpXG4gIGNoYW5nZUZvY3VzKG5ld1ZpZXdEYXRlKSB7XG4gICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gc2V0Vmlld0RhdGUodGhpcywgbmV3Vmlld0RhdGUpID8gJ3JlbmRlcicgOiAncmVmcmVzaEZvY3VzJztcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIHZpZXcudXBkYXRlRm9jdXMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEFwcGx5IHRoZSBjaGFuZ2Ugb2YgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBuZXdWaWV3RGF0ZSA9IGNvbXB1dGVSZXNldFZpZXdEYXRlKHRoaXMuZGF0ZXBpY2tlcik7XG4gICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gc2V0Vmlld0RhdGUodGhpcywgbmV3Vmlld0RhdGUpID8gJ3JlbmRlcicgOiAncmVmcmVzaCc7XG4gICAgdGhpcy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LnVwZGF0ZUZvY3VzKCk7XG4gICAgICB2aWV3LnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gUmVmcmVzaCB0aGUgcGlja2VyIFVJXG4gIHJlbmRlcihxdWlja1JlbmRlciA9IHRydWUpIHtcbiAgICBjb25zdCByZW5kZXJNZXRob2QgPSAocXVpY2tSZW5kZXIgJiYgdGhpcy5fcmVuZGVyTWV0aG9kKSB8fCAncmVuZGVyJztcbiAgICBkZWxldGUgdGhpcy5fcmVuZGVyTWV0aG9kO1xuXG4gICAgdGhpcy5jdXJyZW50Vmlld1tyZW5kZXJNZXRob2RdKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlVGFnUmVwZWF0LCBvcHRpbWl6ZVRlbXBsYXRlSFRNTH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcblxuY29uc3QgY2FsZW5kYXJXZWVrc1RlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJjYWxlbmRhci13ZWVrc1wiPlxuICA8ZGl2IGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+PHNwYW4gY2xhc3M9XCJkb3dcIj48L3NwYW4+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPiR7Y3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgNiwge2NsYXNzOiAnd2Vlayd9KX08L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBjYWxlbmRhcldlZWtzVGVtcGxhdGU7XG4iLCJpbXBvcnQge2NyZWF0ZVRhZ1JlcGVhdCwgb3B0aW1pemVUZW1wbGF0ZUhUTUx9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5cbmNvbnN0IGRheXNUZW1wbGF0ZSA9IG9wdGltaXplVGVtcGxhdGVIVE1MKGA8ZGl2IGNsYXNzPVwiZGF5c1wiPlxuICA8ZGl2IGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+JHtjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCA3LCB7Y2xhc3M6ICdkb3cnfSl9PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWdyaWRcIj4ke2NyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDQyKX08L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBkYXlzVGVtcGxhdGU7XG4iLCJpbXBvcnQge29wdGltaXplVGVtcGxhdGVIVE1MfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuXG5jb25zdCBwaWNrZXJUZW1wbGF0ZSA9IG9wdGltaXplVGVtcGxhdGVIVE1MKGA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPlxuICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1waWNrZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXRpdGxlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgcHJldi1idG5cIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIHZpZXctc3dpdGNoXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBuZXh0LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbWFpblwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIHRvZGF5LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgY2xlYXItYnRuXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gKTtcblxuZXhwb3J0IGRlZmF1bHQgcGlja2VyVGVtcGxhdGU7XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHt0b2RheSwgZGF0ZVZhbHVlLCBhZGREYXlzLCBhZGRXZWVrcywgZGF5T2ZUaGVXZWVrT2YsIGdldFdlZWt9IGZyb20gJy4uLy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vbGliL2RhdGUtZm9ybWF0LmpzJztcbmltcG9ydCB7cGFyc2VIVE1MLCBzaG93RWxlbWVudCwgaGlkZUVsZW1lbnR9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IGRheXNUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvZGF5c1RlbXBsYXRlLmpzJztcbmltcG9ydCBjYWxlbmRhcldlZWtzVGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL2NhbGVuZGFyV2Vla3NUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIpIHtcbiAgICBzdXBlcihwaWNrZXIsIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogJ2RheXMnLFxuICAgICAgY2VsbENsYXNzOiAnZGF5JyxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICBjb25zdCBpbm5lciA9IHBhcnNlSFRNTChkYXlzVGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgICB0aGlzLmRvdyA9IGlubmVyLmZpcnN0Q2hpbGQ7XG4gICAgICB0aGlzLmdyaWQgPSBpbm5lci5sYXN0Q2hpbGQ7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgbGV0IHVwZGF0ZURPVztcblxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBvcHRpb25zLm1pbkRhdGU7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgICB0aGlzLm1heERhdGUgPSBvcHRpb25zLm1heERhdGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF5c09mV2Vla0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmRheXNPZldlZWtEaXNhYmxlZCA9IG9wdGlvbnMuZGF5c09mV2Vla0Rpc2FibGVkO1xuICAgICAgdXBkYXRlRE9XID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF5c09mV2Vla0hpZ2hsaWdodGVkKSB7XG4gICAgICB0aGlzLmRheXNPZldlZWtIaWdobGlnaHRlZCA9IG9wdGlvbnMuZGF5c09mV2Vla0hpZ2hsaWdodGVkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50b2RheUhpZ2hsaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRvZGF5SGlnaGxpZ2h0ID0gb3B0aW9ucy50b2RheUhpZ2hsaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Vla1N0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2Vla1N0YXJ0ID0gb3B0aW9ucy53ZWVrU3RhcnQ7XG4gICAgICB0aGlzLndlZWtFbmQgPSBvcHRpb25zLndlZWtFbmQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gICAgICB0aGlzLmRheU5hbWVzID0gbG9jYWxlLmRheXNNaW47XG4gICAgICB0aGlzLnN3aXRjaExhYmVsRm9ybWF0ID0gbG9jYWxlLnRpdGxlRm9ybWF0O1xuICAgICAgdXBkYXRlRE9XID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlU2hvd0RheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTaG93RGF5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5iZWZvcmVTaG93RGF5XG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNhbGVuZGFyV2Vla3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG9wdGlvbnMuY2FsZW5kYXJXZWVrcyAmJiAhdGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgIGNvbnN0IHdlZWtzRWxlbSA9IHBhcnNlSFRNTChjYWxlbmRhcldlZWtzVGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJXZWVrcyA9IHtcbiAgICAgICAgICBlbGVtZW50OiB3ZWVrc0VsZW0sXG4gICAgICAgICAgZG93OiB3ZWVrc0VsZW0uZmlyc3RDaGlsZCxcbiAgICAgICAgICB3ZWVrczogd2Vla3NFbGVtLmxhc3RDaGlsZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh3ZWVrc0VsZW0sIHRoaXMuZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jYWxlbmRhcldlZWtzICYmICFvcHRpb25zLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuY2FsZW5kYXJXZWVrcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jYWxlbmRhcldlZWtzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2hvd0RheXNPZldlZWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG9wdGlvbnMuc2hvd0RheXNPZldlZWspIHtcbiAgICAgICAgc2hvd0VsZW1lbnQodGhpcy5kb3cpO1xuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgICAgc2hvd0VsZW1lbnQodGhpcy5jYWxlbmRhcldlZWtzLmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVFbGVtZW50KHRoaXMuZG93KTtcbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICAgIGhpZGVFbGVtZW50KHRoaXMuY2FsZW5kYXJXZWVrcy5kb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGRheXMtb2Ytd2VlayB3aGVuIGxvY2FsZSwgZGF5c09md2Vla0Rpc2FibGVkIG9yIHdlZWtTdGFydCBpcyBjaGFuZ2VkXG4gICAgaWYgKHVwZGF0ZURPVykge1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmRvdy5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdyA9ICh0aGlzLndlZWtTdGFydCArIGluZGV4KSAlIDc7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGhpcy5kYXlOYW1lc1tkb3ddO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSB0aGlzLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhkb3cpID8gJ2RvdyBkaXNhYmxlZCcgOiAnZG93JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGx5IHVwZGF0ZSBvbiB0aGUgZm9jdXNlZCBkYXRlIHRvIHZpZXcncyBzZXR0aW5nc1xuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICBjb25zdCB2aWV3WWVhciA9IHZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgdmlld01vbnRoID0gdmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBmaXJzdE9mTW9udGggPSBkYXRlVmFsdWUodmlld1llYXIsIHZpZXdNb250aCwgMSk7XG4gICAgY29uc3Qgc3RhcnQgPSBkYXlPZlRoZVdlZWtPZihmaXJzdE9mTW9udGgsIHRoaXMud2Vla1N0YXJ0LCB0aGlzLndlZWtTdGFydCk7XG5cbiAgICB0aGlzLmZpcnN0ID0gZmlyc3RPZk1vbnRoO1xuICAgIHRoaXMubGFzdCA9IGRhdGVWYWx1ZSh2aWV3WWVhciwgdmlld01vbnRoICsgMSwgMCk7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZm9jdXNlZCA9IHRoaXMucGlja2VyLnZpZXdEYXRlO1xuICB9XG5cbiAgLy8gQXBwbHkgdXBkYXRlIG9uIHRoZSBzZWxlY3RlZCBkYXRlcyB0byB2aWV3J3Mgc2V0dGluZ3NcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXM7XG4gICAgaWYgKHJhbmdlcGlja2VyKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXM7XG4gICAgfVxuICB9XG5cbiAgIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHVwZGF0ZSB0b2RheSBtYXJrZXIgb24gZXZlciByZW5kZXJcbiAgICB0aGlzLnRvZGF5ID0gdGhpcy50b2RheUhpZ2hsaWdodCA/IHRvZGF5KCkgOiB1bmRlZmluZWQ7XG4gICAgLy8gcmVmcmVzaCBkaXNhYmxlZCBkYXRlcyBvbiBldmVyeSByZW5kZXIgaW4gb3JkZXIgdG8gY2xlYXIgdGhlIG9uZXMgYWRkZWRcbiAgICAvLyBieSBiZWZvcmVTaG93IGhvb2sgYXQgcHJldmlvdXMgcmVuZGVyXG4gICAgdGhpcy5kaXNhYmxlZCA9IFsuLi50aGlzLmRhdGVzRGlzYWJsZWRdO1xuXG4gICAgY29uc3Qgc3dpdGNoTGFiZWwgPSBmb3JtYXREYXRlKHRoaXMuZm9jdXNlZCwgdGhpcy5zd2l0Y2hMYWJlbEZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIHRoaXMucGlja2VyLnNldFZpZXdTd2l0Y2hMYWJlbChzd2l0Y2hMYWJlbCk7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMuZmlyc3QgPD0gdGhpcy5taW5EYXRlKTtcbiAgICB0aGlzLnBpY2tlci5zZXROZXh0QnRuRGlzYWJsZWQodGhpcy5sYXN0ID49IHRoaXMubWF4RGF0ZSk7XG5cbiAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAvLyBzdGFydCBvZiB0aGUgVVRDIHdlZWsgKE1vbmRheSkgb2YgdGhlIDFzdCBvZiB0aGUgbW9udGhcbiAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gZGF5T2ZUaGVXZWVrT2YodGhpcy5maXJzdCwgMSwgMSk7XG4gICAgICBBcnJheS5mcm9tKHRoaXMuY2FsZW5kYXJXZWVrcy53ZWVrcy5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZ2V0V2VlayhhZGRXZWVrcyhzdGFydE9mV2VlaywgaW5kZXgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBjdXJyZW50ID0gYWRkRGF5cyh0aGlzLnN0YXJ0LCBpbmRleCk7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudCk7XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGVsLmRhdGFzZXQuZGF0ZSA9IGN1cnJlbnQ7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICBpZiAoY3VycmVudCA8IHRoaXMuZmlyc3QpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID4gdGhpcy5sYXN0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvZGF5ID09PSBjdXJyZW50KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA8IHRoaXMubWluRGF0ZSB8fCBjdXJyZW50ID4gdGhpcy5tYXhEYXRlIHx8IHRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhkYXkpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHB1c2hVbmlxdWUodGhpcy5kaXNhYmxlZCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQuaW5jbHVkZXMoZGF5KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2U7XG4gICAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2VzIG9mIHNlbGVjdGVkIGFuZCBmb2N1c2VkIGl0ZW1zXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2UgfHwgW107XG4gICAgdGhpcy5ncmlkXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLCAucmFuZ2Utc3RhcnQsIC5yYW5nZS1lbmQsIC5zZWxlY3RlZCwgLmZvY3VzZWQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlJywgJ3JhbmdlLXN0YXJ0JywgJ3JhbmdlLWVuZCcsICdzZWxlY3RlZCcsICdmb2N1c2VkJyk7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIoZWwuZGF0YXNldC5kYXRlKTtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZSBvZiBmb2N1c2VkIGl0ZW1cbiAgcmVmcmVzaEZvY3VzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgodGhpcy5mb2N1c2VkIC0gdGhpcy5zdGFydCkgLyA4NjQwMDAwMCk7XG4gICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1c2VkJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZSwgY3JlYXRlVGFnUmVwZWF0fSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWV9IGZyb20gJy4uLy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MfSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmZ1bmN0aW9uIGNvbXB1dGVNb250aFJhbmdlKHJhbmdlLCB0aGlzWWVhcikge1xuICBpZiAoIXJhbmdlIHx8ICFyYW5nZVswXSB8fCAhcmFuZ2VbMV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBbW3N0YXJ0WSwgc3RhcnRNXSwgW2VuZFksIGVuZE1dXSA9IHJhbmdlO1xuICBpZiAoc3RhcnRZID4gdGhpc1llYXIgfHwgZW5kWSA8IHRoaXNZZWFyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBbXG4gICAgc3RhcnRZID09PSB0aGlzWWVhciA/IHN0YXJ0TSA6IC0xLFxuICAgIGVuZFkgPT09IHRoaXNZZWFyID8gZW5kTSA6IDEyLFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aHNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlcikge1xuICAgIHN1cGVyKHBpY2tlciwge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnbW9udGhzJyxcbiAgICAgIGNlbGxDbGFzczogJ21vbnRoJyxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICB0aGlzLmdyaWQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9udGhzJywgJ2RhdGVwaWNrZXItZ3JpZCcpO1xuICAgICAgdGhpcy5ncmlkLmFwcGVuZENoaWxkKHBhcnNlSFRNTChjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCAxMiwgeydkYXRhLW1vbnRoJzogaXggPT4gaXh9KSkpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICB0aGlzLm1vbnRoTmFtZXMgPSBvcHRpb25zLmxvY2FsZS5tb250aHNTaG9ydDtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1pblllYXIgPSB0aGlzLm1pbk1vbnRoID0gdGhpcy5taW5EYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWluRGF0ZU9iaiA9IG5ldyBEYXRlKG9wdGlvbnMubWluRGF0ZSk7XG4gICAgICAgIHRoaXMubWluWWVhciA9IG1pbkRhdGVPYmouZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5taW5Nb250aCA9IG1pbkRhdGVPYmouZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5taW5EYXRlID0gbWluRGF0ZU9iai5zZXREYXRlKDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHRoaXMubWF4TW9udGggPSB0aGlzLm1heERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtYXhEYXRlT2JqID0gbmV3IERhdGUob3B0aW9ucy5tYXhEYXRlKTtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gbWF4RGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1heE1vbnRoID0gbWF4RGF0ZU9iai5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1heERhdGUgPSBkYXRlVmFsdWUodGhpcy5tYXhZZWFyLCB0aGlzLm1heE1vbnRoICsgMSwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBvcHRpb25zLmRhdGVzRGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTaG93TW9udGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iZWZvcmVTaG93ID0gdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2hvd01vbnRoID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5iZWZvcmVTaG93TW9udGhcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSB2aWV3RGF0ZSBzZXQgb24gdGhlIHBpY2tlclxuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICB0aGlzLnllYXIgPSB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZm9jdXNlZCA9IHZpZXdEYXRlLmdldE1vbnRoKCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCB7ZGF0ZXMsIHJhbmdlcGlja2VyfSA9IHRoaXMucGlja2VyLmRhdGVwaWNrZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVzLnJlZHVjZSgoc2VsZWN0ZWQsIHRpbWVWYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVWYWx1ZSk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBpZiAoc2VsZWN0ZWRbeWVhcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RlZFt5ZWFyXSA9IFttb250aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwdXNoVW5pcXVlKHNlbGVjdGVkW3llYXJdLCBtb250aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfSwge30pO1xuICAgIGlmIChyYW5nZXBpY2tlciAmJiByYW5nZXBpY2tlci5kYXRlcykge1xuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlcGlja2VyLmRhdGVzLm1hcCh0aW1lVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHJlZnJlc2ggZGlzYWJsZWQgbW9udGhzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZC5yZWR1Y2UoKGFyciwgZGlzYWJsZWQpID0+IHtcbiAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGlzYWJsZWQpO1xuICAgICAgaWYgKHRoaXMueWVhciA9PT0gZHQuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICBhcnIucHVzaChkdC5nZXRNb250aCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuXG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKHRoaXMueWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMueWVhciA8PSB0aGlzLm1pblllYXIpO1xuICAgIHRoaXMucGlja2VyLnNldE5leHRCdG5EaXNhYmxlZCh0aGlzLnllYXIgPj0gdGhpcy5tYXhZZWFyKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFt0aGlzLnllYXJdIHx8IFtdO1xuICAgIGNvbnN0IHlyT3V0T2ZSYW5nZSA9IHRoaXMueWVhciA8IHRoaXMubWluWWVhciB8fCB0aGlzLnllYXIgPiB0aGlzLm1heFllYXI7XG4gICAgY29uc3QgaXNNaW5ZZWFyID0gdGhpcy55ZWFyID09PSB0aGlzLm1pblllYXI7XG4gICAgY29uc3QgaXNNYXhZZWFyID0gdGhpcy55ZWFyID09PSB0aGlzLm1heFllYXI7XG4gICAgY29uc3QgcmFuZ2UgPSBjb21wdXRlTW9udGhSYW5nZSh0aGlzLnJhbmdlLCB0aGlzLnllYXIpO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLnllYXIsIGluZGV4LCAxKTtcblxuICAgICAgZWwuY2xhc3NOYW1lID0gYGRhdGVwaWNrZXItY2VsbCAke3RoaXMuY2VsbENsYXNzfWA7XG4gICAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgICAgZWwuZGF0YXNldC5kYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIC8vIHJlc2V0IHRleHQgb24gZXZlcnkgcmVuZGVyIHRvIGNsZWFyIHRoZSBjdXN0b20gY29udGVudCBzZXRcbiAgICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdGhpcy5tb250aE5hbWVzW2luZGV4XTtcblxuICAgICAgaWYgKFxuICAgICAgICB5ck91dE9mUmFuZ2VcbiAgICAgICAgfHwgaXNNaW5ZZWFyICYmIGluZGV4IDwgdGhpcy5taW5Nb250aFxuICAgICAgICB8fCBpc01heFllYXIgJiYgaW5kZXggPiB0aGlzLm1heE1vbnRoXG4gICAgICAgIHx8IHRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gcmFuZ2U7XG4gICAgICAgIGlmIChpbmRleCA+IHJhbmdlU3RhcnQgJiYgaW5kZXggPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYmVmb3JlU2hvdykge1xuICAgICAgICB0aGlzLnBlcmZvcm1CZWZvcmVIb29rKGVsLCBpbmRleCwgZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRbdGhpcy55ZWFyXSB8fCBbXTtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gY29tcHV0ZU1vbnRoUmFuZ2UodGhpcy5yYW5nZSwgdGhpcy55ZWFyKSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChpbmRleCA+IHJhbmdlU3RhcnQgJiYgaW5kZXggPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2Ugb2YgZm9jdXNlZCBpdGVtXG4gIHJlZnJlc2hGb2N1cygpIHtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlblt0aGlzLmZvY3VzZWRdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufSIsImltcG9ydCB7cHVzaFVuaXF1ZX0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MLCByZXBsYWNlQ2hpbGROb2Rlc30gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5cbi8vIEJhc2UgY2xhc3Mgb2YgdGhlIHZpZXcgY2xhc3Nlc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlciwgY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcsIHtcbiAgICAgIHBpY2tlcixcbiAgICAgIGVsZW1lbnQ6IHBhcnNlSFRNTChgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItdmlld1wiPjwvZGl2PmApLmZpcnN0Q2hpbGQsXG4gICAgICBzZWxlY3RlZDogW10sXG4gICAgfSk7XG4gICAgdGhpcy5pbml0KHRoaXMucGlja2VyLmRhdGVwaWNrZXIuY29uZmlnKTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBpY2tMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzTWluVmlldyA9IHRoaXMuaWQgPT09IG9wdGlvbnMucGlja0xldmVsO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy51cGRhdGVGb2N1cygpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gIH1cblxuICAvLyBFeGVjdXRlIGJlZm9yZVNob3coKSBjYWxsYmFjayBhbmQgYXBwbHkgdGhlIHJlc3VsdCB0byB0aGUgZWxlbWVudFxuICAvLyBhcmdzOlxuICAvLyAtIGN1cnJlbnQgLSBjdXJyZW50IHZhbHVlIG9uIHRoZSBpdGVyYXRpb24gb24gdmlldyByZW5kZXJpbmdcbiAgLy8gLSB0aW1lVmFsdWUgLSB0aW1lIHZhbHVlIG9mIHRoZSBkYXRlIHRvIHBhc3MgdG8gYmVmb3JlU2hvdygpXG4gIHBlcmZvcm1CZWZvcmVIb29rKGVsLCBjdXJyZW50LCB0aW1lVmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5iZWZvcmVTaG93KG5ldyBEYXRlKHRpbWVWYWx1ZSkpO1xuICAgIHN3aXRjaCAodHlwZW9mIHJlc3VsdCkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJlc3VsdCA9IHtlbmFibGVkOiByZXN1bHR9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJlc3VsdCA9IHtjbGFzc2VzOiByZXN1bHR9O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHVzaFVuaXF1ZSh0aGlzLmRpc2FibGVkLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuY2xhc3Nlcykge1xuICAgICAgICBjb25zdCBleHRyYUNsYXNzZXMgPSByZXN1bHQuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Nlcyk7XG4gICAgICAgIGlmIChleHRyYUNsYXNzZXMuaW5jbHVkZXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICBwdXNoVW5pcXVlKHRoaXMuZGlzYWJsZWQsIGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmNvbnRlbnQpIHtcbiAgICAgICAgcmVwbGFjZUNoaWxkTm9kZXMoZWwsIHJlc3VsdC5jb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWUsIGNyZWF0ZVRhZ1JlcGVhdH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7ZGF0ZVZhbHVlLCBzdGFydE9mWWVhclBlcmlvZH0gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuZnVuY3Rpb24gdG9UaXRsZUNhc2Uod29yZCkge1xuICByZXR1cm4gWy4uLndvcmRdLnJlZHVjZSgoc3RyLCBjaCwgaXgpID0+IHN0ciArPSBpeCA/IGNoIDogY2gudG9VcHBlckNhc2UoKSwgJycpO1xufVxuXG4vLyBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHllYXJzIGFuZCBkZWNhZGVzIHZpZXcgZWxlbWVudHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJzVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIsIGNvbmZpZykge1xuICAgIHN1cGVyKHBpY2tlciwgY29uZmlnKTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICB0aGlzLm5hdlN0ZXAgPSB0aGlzLnN0ZXAgKiAxMDtcbiAgICAgIHRoaXMuYmVmb3JlU2hvd09wdGlvbiA9IGBiZWZvcmVTaG93JHt0b1RpdGxlQ2FzZSh0aGlzLmNlbGxDbGFzcyl9YDtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZSwgJ2RhdGVwaWNrZXItZ3JpZCcpO1xuICAgICAgdGhpcy5ncmlkLmFwcGVuZENoaWxkKHBhcnNlSFRNTChjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCAxMikpKTtcbiAgICB9XG4gICAgc3VwZXIuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5taW5EYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gdGhpcy5taW5EYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gc3RhcnRPZlllYXJQZXJpb2Qob3B0aW9ucy5taW5EYXRlLCB0aGlzLnN0ZXApO1xuICAgICAgICB0aGlzLm1pbkRhdGUgPSBkYXRlVmFsdWUodGhpcy5taW5ZZWFyLCAwLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1heERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFllYXIgPSB0aGlzLm1heERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1heFllYXIgPSBzdGFydE9mWWVhclBlcmlvZChvcHRpb25zLm1heERhdGUsIHRoaXMuc3RlcCk7XG4gICAgICAgIHRoaXMubWF4RGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1heFllYXIsIDExLCAzMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBvcHRpb25zLmRhdGVzRGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBpZiAob3B0aW9uc1t0aGlzLmJlZm9yZVNob3dPcHRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNob3cgPSBvcHRpb25zW3RoaXMuYmVmb3JlU2hvd09wdGlvbl07XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2YgYmVmb3JlU2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGJlZm9yZVNob3cgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSB2aWV3RGF0ZSBzZXQgb24gdGhlIHBpY2tlclxuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICBjb25zdCBmaXJzdCA9IHN0YXJ0T2ZZZWFyUGVyaW9kKHZpZXdEYXRlLCB0aGlzLm5hdlN0ZXApO1xuICAgIGNvbnN0IGxhc3QgPSBmaXJzdCArIDkgKiB0aGlzLnN0ZXA7XG5cbiAgICB0aGlzLmZpcnN0ID0gZmlyc3Q7XG4gICAgdGhpcy5sYXN0ID0gbGFzdDtcbiAgICB0aGlzLnN0YXJ0ID0gZmlyc3QgLSB0aGlzLnN0ZXA7XG4gICAgdGhpcy5mb2N1c2VkID0gc3RhcnRPZlllYXJQZXJpb2Qodmlld0RhdGUsIHRoaXMuc3RlcCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCB7ZGF0ZXMsIHJhbmdlcGlja2VyfSA9IHRoaXMucGlja2VyLmRhdGVwaWNrZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVzLnJlZHVjZSgoeWVhcnMsIHRpbWVWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHB1c2hVbmlxdWUoeWVhcnMsIHN0YXJ0T2ZZZWFyUGVyaW9kKHRpbWVWYWx1ZSwgdGhpcy5zdGVwKSk7XG4gICAgfSwgW10pO1xuICAgIGlmIChyYW5nZXBpY2tlciAmJiByYW5nZXBpY2tlci5kYXRlcykge1xuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlcGlja2VyLmRhdGVzLm1hcCh0aW1lVmFsdWUgPT4ge1xuICAgICAgICBpZiAodGltZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRPZlllYXJQZXJpb2QodGltZVZhbHVlLCB0aGlzLnN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGVudGlyZSB2aWV3IFVJXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZWZyZXNoIGRpc2FibGVkIHllYXJzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZC5tYXAoZGlzYWJsZWQgPT4gbmV3IERhdGUoZGlzYWJsZWQpLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKGAke3RoaXMuZmlyc3R9LSR7dGhpcy5sYXN0fWApO1xuICAgIHRoaXMucGlja2VyLnNldFByZXZCdG5EaXNhYmxlZCh0aGlzLmZpcnN0IDw9IHRoaXMubWluWWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0TmV4dEJ0bkRpc2FibGVkKHRoaXMubGFzdCA+PSB0aGlzLm1heFllYXIpO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhcnQgKyAoaW5kZXggKiB0aGlzLnN0ZXApO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVWYWx1ZShjdXJyZW50LCAwLCAxKTtcblxuICAgICAgZWwuY2xhc3NOYW1lID0gYGRhdGVwaWNrZXItY2VsbCAke3RoaXMuY2VsbENsYXNzfWA7XG4gICAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgICAgZWwuZGF0YXNldC5kYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsLnRleHRDb250ZW50ID0gZWwuZGF0YXNldC55ZWFyID0gY3VycmVudDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5taW5ZZWFyIHx8IGN1cnJlbnQgPiB0aGlzLm1heFllYXIgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2U7XG4gICAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2VzIG9mIHNlbGVjdGVkIGFuZCBmb2N1c2VkIGl0ZW1zXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2UgfHwgW107XG4gICAgdGhpcy5ncmlkXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLCAucmFuZ2Utc3RhcnQsIC5yYW5nZS1lbmQsIC5zZWxlY3RlZCwgLmZvY3VzZWQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlJywgJ3JhbmdlLXN0YXJ0JywgJ3JhbmdlLWVuZCcsICdzZWxlY3RlZCcsICdmb2N1c2VkJyk7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIoZWwudGV4dENvbnRlbnQpO1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlIG9mIGZvY3VzZWQgaXRlbVxuICByZWZyZXNoRm9jdXMoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKCh0aGlzLmZvY3VzZWQgLSB0aGlzLnN0YXJ0KSAvIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1c2VkJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdExpc3RlbmVycywgdG9kb0xpc3RlbmVycyB9IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlNZW51LCBkaXNwbGF5UGFnZSwgc2hvd1Byb2plY3RQYWdlIH0gZnJvbSAnLi92aWV3cyc7XG5cbnByb2plY3RMaXN0ZW5lcnMoKVxudG9kb0xpc3RlbmVycygpXG5zaG93UHJvamVjdFBhZ2UoKVxuZGlzcGxheU1lbnUoKVxuZGlzcGxheVBhZ2UoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9