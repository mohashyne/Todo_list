/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/addremove.js":
/*!*********************************!*\
  !*** ./src/module/addremove.js ***!
  \*********************************/
/***/ ((module) => {

var add = function add() {
  var addTask = document.getElementById('addTask'); // get the input field element
  if (addTask.value !== '') {
    var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
    tasksArray.push({
      completed: false,
      description: addTask.value
    });
    for (var i = 1; i <= tasksArray.length; i += 1) {
      tasksArray[i - 1].index = i;
    }
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  }
  addTask.value = '';
};
var remove = function remove(index) {
  var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  tasksArray.splice(index, 1);
  for (var i = 1; i <= tasksArray.length; i += 1) {
    tasksArray[i - 1].index = i;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};
var edit = function edit(index) {
  var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  var textInputs = document.querySelectorAll('.text-input');
  textInputs[index].addEventListener('change', function () {
    tasksArray[index].description = textInputs[index].value;
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  });
};
var move = function move(fromIndex, toIndex) {
  var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  var taskToMove = tasksArray[fromIndex];
  tasksArray.splice(fromIndex, 1);
  tasksArray.splice(toIndex, 0, taskToMove);
  for (var i = 1; i <= tasksArray.length; i += 1) {
    tasksArray[i - 1].index = i;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};
var render = function render() {
  var tasksContainer = document.querySelector('.list-container');
  var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  tasksArray.sort(function (a, b) {
    return a.index - b.index;
  });
  tasksContainer.innerHTML = '';
  var checked = '';
  var strike = '';
  for (var i = 0; i < tasksArray.length; i += 1) {
    if (tasksArray[i].completed) {
      checked = 'checked';
      strike = 'strike-through';
    } else {
      checked = '';
      strike = '';
    }
    var html = "\n      <div class=\"task\">\n        <input type=\"checkbox\" class=\"checkbox-input\" ".concat(checked, ">\n        <input type=\"text\" class=\"text-input ").concat(strike, "\" value=\"").concat(tasksArray[i].description, "\">\n        <div class=\"delete-task-icon\">&#x1F5D1;</div>\n        <!-- <div class=\"drag-to-order\">&#x22EE;</div> -->        \n      </div>\n      <hr>\n    ");
    tasksContainer.innerHTML += html;
  }
};
module.exports = {
  add: add,
  render: render,
  remove: remove,
  edit: edit,
  move: move
};

/***/ }),

/***/ "./src/module/interactive.js":
/*!***********************************!*\
  !*** ./src/module/interactive.js ***!
  \***********************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TODO = /*#__PURE__*/function () {
  function TODO() {
    _classCallCheck(this, TODO);
  }
  _createClass(TODO, [{
    key: "strikeThrough",
    value: function strikeThrough(index) {
      this.tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
      var checkBoxes = document.querySelectorAll('.checkbox-input');
      if (checkBoxes[index].checked) {
        this.tasksArray[index].completed = true;
        localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
      } else {
        this.tasksArray[index].completed = false;
        localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
      }
    }
  }]);
  return TODO;
}();
var clearAll = function clearAll() {
  var tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  for (var i = 0; i < tasksArray.length; i += 1) {
    if (tasksArray[i].completed) {
      tasksArray.splice(i, 1);
      i -= 1;
    }
  }
  for (var _i = 1; _i <= tasksArray.length; _i += 1) {
    tasksArray[_i - 1].index = _i;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};
module.exports = {
  TODO: TODO,
  clearAll: clearAll
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
}

body {
  background-color: lightgray;
  width: 420px;
  margin: 0 auto;
}

hr {
  margin: 0;
  padding: 0;
  border: 1px solid rgba(176, 154, 87, 0.795);
}

input {
  border: none;
  outline: none;
  background-color: lightgray;
}

input[placeholder] {
  font-style: italic;
  border-radius: 10px;
  padding: 5px;
}

.delete-task-icon,
.add-button,
.checkbox-input,
footer {
  cursor: pointer;
}

.main {
  margin-top: 20px;
  background-color: #cbd5e1;
  box-shadow: 10px 10px 10px 0 rgba(51, 47, 1, 0.3);
}

header,
.add-list-container,
.task,
footer {
  height: 50px;
  display: flex;
  align-items: center;
  color: #545862;
  font-size: 15px;
  font-weight: 400;
  padding: 1rem;
  line-height: 20px;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.add-task {
  width: 100%;
}

.add-button {
  width: 18px;
}

.text-input {
  width: 85%;
}

.task {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(238, 203, 137, 0.8);
}

footer {
  border-color: rgb(238, 203, 137);
  display: flex;
  justify-content: center;
  transition: all 150ms ease-in-out;
  box-shadow: 0 0 40px 40px #cbd5e1 inset, 0 0 0 0 rgb(238, 203, 137);
}

footer:hover {
  color: rgb(67, 66, 14);
  box-shadow: 0 0 40px 40px #cbd5e1 inset, 0 0 0 0 rgb(238, 203, 137);
}

.drag-to-order {
  width: 10px;
  cursor: move;
}

.dragging {
  opacity: 0.5;
}

.strike-through {
  text-decoration: line-through;
  color: rgba(179, 142, 39, 0.45);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AACA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,2DAAA;EACA,eAAA;AAAF;;AAGA;EACE,2BAAA;EACA,YAAA;EACA,cAAA;AAAF;;AAGA;EACE,SAAA;EACA,UAAA;EACA,2CAAA;AAAF;;AAGA;EACE,YAAA;EACA,aAAA;EACA,2BAAA;AAAF;;AAGA;EACE,kBAAA;EACA,mBAAA;EACA,YAAA;AAAF;;AAGA;;;;EAIE,eAAA;AAAF;;AAGA;EACE,gBAAA;EACA,yBAAA;EACA,iDAAA;AAAF;;AAGA;;;;EAIE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,UAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,8CAAA;AAAF;;AAGA;EACE,gCAAA;EACA,aAAA;EACA,uBAAA;EACA,iCAAA;EACA,mEAAA;AAAF;;AAGA;EACE,sBAAA;EACA,mEAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE,6BAAA;EACA,+BAAA;AAAF","sourcesContent":["\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 14px;\n}\n\nbody {\n  background-color: lightgray;\n  width: 420px;\n  margin: 0 auto;\n}\n\nhr {\n  margin: 0;\n  padding: 0;\n  border: 1px solid rgba(176, 154, 87, 0.795);\n}\n\ninput {\n  border: none;\n  outline: none;\n  background-color: lightgray;\n}\n\ninput[placeholder] {\n  font-style: italic;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.delete-task-icon,\n.add-button,\n.checkbox-input,\nfooter {\n  cursor: pointer;\n}\n\n.main {\n  margin-top: 20px;\n  background-color: #cbd5e1;\n  box-shadow: 10px 10px 10px 0 rgba(51, 47, 1, 0.3);\n}\n\nheader,\n.add-list-container,\n.task,\nfooter {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  color: #545862;\n  font-size: 15px;\n  font-weight: 400;\n  padding: 1rem;\n  line-height: 20px;\n  margin: 0;\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.add-task {\n  width: 100%;\n}\n\n.add-button {\n  width: 18px;\n}\n\n.text-input {\n  width: 85%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 4px 6px rgba(238, 203, 137, 0.8);\n}\n\nfooter {\n  border-color: rgb(238, 203, 137);\n  display: flex;\n  justify-content: center;\n  transition: all 150ms ease-in-out;\n  box-shadow: 0 0 40px 40px #cbd5e1 inset, 0 0 0 0 rgb(238, 203, 137);\n}\n\nfooter:hover {\n  color: rgb(67, 66, 14);\n  box-shadow: 0 0 40px 40px #cbd5e1 inset, 0 0 0 0 rgb(238, 203, 137);\n}\n\n.drag-to-order {\n  width: 10px;\n  cursor: move;\n}\n\n.dragging {\n  opacity: 0.5;\n}\n\n.strike-through {\n  text-decoration: line-through;\n  color: rgba(179, 142, 39, 0.45);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _module_addremove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/addremove.js */ "./src/module/addremove.js");
/* harmony import */ var _module_addremove_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/interactive.js */ "./src/module/interactive.js");
/* harmony import */ var _module_interactive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_interactive_js__WEBPACK_IMPORTED_MODULE_2__);



var addButton = document.querySelector('.add-button');
addButton.addEventListener('click', function () {
  (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.add)();
  (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
});
var addTask = document.getElementById('addTask');
addTask.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.add)();
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  }
});
var tasksContainer = document.querySelector('.list-container');
tasksContainer.addEventListener('click', function (event) {
  var deleteTaskIcon = event.target.closest('.delete-task-icon');
  if (deleteTaskIcon) {
    var deleteTaskIcons = tasksContainer.querySelectorAll('.delete-task-icon');
    Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  }
});
tasksContainer.addEventListener('click', function (event) {
  var textInput = event.target.closest('.text-input');
  if (textInput) {
    var textInputs = tasksContainer.querySelectorAll('.text-input');
    var index = Array.from(textInputs).indexOf(textInput);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.edit)(index);
  }
});
tasksContainer.addEventListener('dragstart', function (event) {
  var taskDiv = event.target.closest('.task');
  taskDiv.classList.add('dragging');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', taskDiv.getAttribute('data-index'));
});
tasksContainer.addEventListener('dragover', function (event) {
  event.preventDefault();
  var draggingTask = document.querySelector('.dragging');
  var closestTask = event.target.closest('.task');
  if (closestTask !== draggingTask && closestTask) {
    var draggingIndex = parseInt(draggingTask.getAttribute('data-index'), 10);
    var closestIndex = parseInt(closestTask.getAttribute('data-index'), 10);
    if (draggingIndex < closestIndex) {
      closestTask.parentNode.insertBefore(draggingTask, closestTask.nextSibling);
      (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.move)(draggingIndex - 1, closestIndex - 1);
    } else {
      closestTask.parentNode.insertBefore(draggingTask, closestTask);
      (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.move)(draggingIndex - 1, closestIndex);
    }
    draggingTask.setAttribute('data-index', closestIndex);
    closestTask.setAttribute('data-index', draggingIndex);
  }
});
var todo = new _module_interactive_js__WEBPACK_IMPORTED_MODULE_2__.TODO();
tasksContainer.addEventListener('click', function (event) {
  var checkBox = event.target.closest('.checkbox-input');
  if (checkBox) {
    var checkBoxes = tasksContainer.querySelectorAll('.checkbox-input');
    var index = Array.from(checkBoxes).indexOf(checkBox);
    todo.strikeThrough(index);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  }
});
var clearAllButton = document.querySelector('.clear-all-completed');
clearAllButton.addEventListener('click', function () {
  (0,_module_interactive_js__WEBPACK_IMPORTED_MODULE_2__.clearAll)();
  (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
});
tasksContainer.addEventListener('click', function (event) {
  var deleteTaskIcon = event.target.closest('.delete-task-icon');
  if (deleteTaskIcon) {
    var deleteTaskIcons = tasksContainer.querySelectorAll('.delete-task-icon');
    var index = Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.remove)(index);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  }
});
tasksContainer.addEventListener('click', function (event) {
  var textInput = event.target.closest('.text-input');
  if (textInput) {
    var textInputs = tasksContainer.querySelectorAll('.text-input');
    var index = Array.from(textInputs).indexOf(textInput);
    (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.edit)(index);
  }
});
tasksContainer.addEventListener('dragstart', function (event) {
  var taskDiv = event.target.closest('.task');
  taskDiv.classList.add('dragging');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', taskDiv.getAttribute('data-index'));
});
tasksContainer.addEventListener('dragover', function (event) {
  event.preventDefault();
  var draggingTask = document.querySelector('.dragging');
  var closestTask = event.target.closest('.task');
  if (closestTask !== draggingTask && closestTask) {
    var draggingIndex = parseInt(draggingTask.getAttribute('data-index'), 10);
    var closestIndex = parseInt(closestTask.getAttribute('data-index'), 10);
    if (draggingIndex < closestIndex) {
      closestTask.parentNode.insertBefore(draggingTask, closestTask.nextSibling);
      (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.move)(draggingIndex - 1, closestIndex - 1);
    } else {
      closestTask.parentNode.insertBefore(draggingTask, closestTask);
      (0,_module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.move)(draggingIndex - 1, closestIndex);
    }
    draggingTask.setAttribute('data-index', closestIndex);
    closestTask.setAttribute('data-index', draggingIndex);
  }
});
window.onload = _module_addremove_js__WEBPACK_IMPORTED_MODULE_1__.render;
})();

/******/ })()
;
//# sourceMappingURL=bundlea9805276f83ab251d1a2.js.map