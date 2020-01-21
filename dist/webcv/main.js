(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n \n <div class=\"container\"><app-navbar></app-navbar></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n<nb-chat id=\"chat\" title=\"Maximo\" size=\"medium\" status=\"primary\">\n    <nb-chat-message *ngFor=\"let message of messages\"\n                     [type]=\"message.type\"\n                     [message]=\"message.text\"\n                     [reply]=\"message.reply\"\n                     [sender]=\"message.user.name\"\n                     [date]=\"message.date\"\n                     [files]=\"message.files\"\n                     [quote]=\"message.quote\"\n                     [latitude]=\"message.latitude\"\n                     [longitude]=\"message.longitude\"\n                     [avatar]=\"message.user.avatar\"></nb-chat-message>\n    <nb-chat-form (send)=\"sendMessage($event, 'Visitante', 'https://i.imgur.com/6cdEwll.png', true)\" [showButton]=\"true\" [dropFiles]=\"true\">\n    </nb-chat-form>\n  </nb-chat>\n</div>\n  <!--\n    ::ng-deep nb-layout-column {\n    justify-content: center;\n    display: flex;\n  }\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <nb-card class=\"mail\" [nbSpinner]=\"loading\"\n  nbSpinnerStatus=\"info\"\n  nbSpinnerSize=\"large\"\n  nbSpinnerMessage=\"\">\n    <nb-card-header id=\"headermail\">Enviar un mail</nb-card-header>\n    <nb-card-body class=\"example-items-rows\">\n        <input id=\"inputMail\" type=\"text\" nbInput fullWidth fieldSize=\"small\" placeholder=\"Nombre/mail\" [(ngModel)]=\"inputMail\">\n         <textarea id=\"inputMessage\" nbInput fullWidth placeholder=\"Mensaje\" [(ngModel)]=\"inputMensaje\"></textarea>\n        <button fullWidth nbButton outline status=\"info\" (click)=\"sendMailSpinner();\" >Enviar</button>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"resume-wrapper\"> <!-- EXPERIENCE  -->\n  <section class=\"experience section-padding\">\n      <div class=\"container\">\n        <h3 class=\"experience-title\">Experiencia</h3>\n        \n        <div class=\"experience-wrapper\">\n          <div class=\"company-wrapper clearfix\">\n            <div class=\"experience-title\">Hospital Británico</div>\n            <div class=\"time\">Set 2017 - Actualidad</div> \n          </div>\n          \n          <div class=\"job-wrapper clearfix\">\n            <div class=\"experience-title\">Desarrollador GeneXus </div> \n            <div class=\"company-description\">\n                <ul *ngFor=\"let t of tareasHB\">\n                    <li>\n                      {{ t.descripcion }}\n                    </li>\n                  </ul>\n            </div>\n          </div>\n          \n          <div class=\"company-wrapper clearfix\">\n            <div class=\"experience-title\">Emestudio</div> \n            <div class=\"time\">Enero 2015 - Mayo 2016</div> \n          </div>\n          \n           <div class=\"job-wrapper clearfix\">\n            <div class=\"experience-title\">Soporte Técnico</div> \n            <div class=\"company-description\">\n                <ul *ngFor=\"let t of tareasE\">\n                    <li>\n                      {{ t.descripcion }}\n                    </li>\n                  </ul>\n            </div>\n          </div>\n          \n         \n          \n        </div><!--Skill experience-->\n      </div>\n  </section>\n\n  <section class=\"profile section-padding\">\n      <div class=\"container\">\n          <h3 class=\"profile-title\">Habilidades</h3>\n          <div>\n          <h5 class=\"profile-subtitle\"> Java</h5>\n          <hr>\n          <div id=\"tagcontainer\" >\n              <span *ngFor=\"let s of skillsJava\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\n                 \n            </div>  \n            <hr>\n          </div>\n\n          <div>\n              <h5 class=\"profile-subtitle\"> Angular</h5>\n              <hr>\n              <div id=\"tagcontainer\" >\n                  <span *ngFor=\"let s of skillsAngular\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\n                     \n                </div>  \n                <hr>\n              </div>\n\n              <div>\n                  <h5 class=\"profile-subtitle\"> NodeJs (Básico)</h5>\n                  <hr>\n                  <div id=\"tagcontainer\" >\n                      <span *ngFor=\"let s of skillsNodeJs\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\n                         \n                    </div>  \n                    <hr>\n                  </div>\n                  <div>\n                      <h5 class=\"profile-subtitle\"> Otros</h5>\n                      <hr>\n                      <div id=\"tagcontainer\" >\n                          <span *ngFor=\"let s of skillsOtros\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\n                             \n                        </div>  \n                        <hr>\n                      </div>\n        </div>\n    </section>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"content\">\n    <h1 class=\"text404 slide-right\">¡ERROR 404!</h1>\n\n    <p id=\"demo\"></p>\n    <p id=\"demo2\"></p>\n    <p id=\"demo3\"></p>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"contentfront\" class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card__side card__side--front\">\r\n      <nb-icon class=\"flipicon\" icon=\"flip-2-outline\"></nb-icon>\r\n      <div class=\"card__cont\">\r\n        <font size=\"4%\"><span class=\"blue\">alert</span><span>(<span class=\"green\">'Hola!'</span>)</span></font>\r\n      </div>\r\n    </div>\r\n    <div class=\"card__side card__side--back\">\r\n      <div class=\"card__cta\">\r\n        <p *ngFor=\"let l of lineas\">\r\n          <span class=\"green\">{{l.linea}}</span>\r\n        </p>\r\n      </div>\r\n      <nb-icon class=\"flipicon\" icon=\"flip-2-outline\"></nb-icon>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--\r\n<div id=\"contentback\" class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card__side card__side--back\">\r\n      <nb-icon class=\"flipicon\" icon=\"flip-2-outline\"></nb-icon>\r\n      <div class=\"card__cont\">\r\n        <font size=\"4%\"><span class=\"blue\">alert</span><span>(<span class=\"green\">'Hola!'</span>)</span></font>\r\n      </div>\r\n    </div>\r\n    <div class=\"card__side card__side--front\">\r\n      <div class=\"card__cta\">\r\n        <p *ngFor=\"let l of lineas\">\r\n          <span class=\"green\">{{l.linea}}</span>\r\n        </p>\r\n      </div>\r\n      <nb-icon class=\"flipicon\" icon=\"flip-2-outline\"></nb-icon>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\r\n\r\n  <nb-layout-header fixed>\r\n\r\n\r\n    <a href=\"#\" (click)=\"toggle()\">\r\n      <i class=\"nb-menu\">\r\n      </i>\r\n      <nb-icon icon=\"menu-outline\" [options]=\"{ animation: { type: 'zoom' } }\">\r\n      </nb-icon>\r\n    </a>\r\n\r\n\r\n\r\n\r\n    <nb-flip-card id=\"flipcardmax\">\r\n      <nb-card-front>\r\n        <nb-card status=\"warning\">\r\n\r\n          <nb-card-body>\r\n            Máximo Lanza\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </nb-card-front>\r\n      <nb-card-back>\r\n        <nb-card status=\"info\">\r\n\r\n          <nb-card-body>\r\n            Software Developer\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </nb-card-back>\r\n    </nb-flip-card>\r\n    <a style=\"margin-left: auto;text-decoration: none;padding-left:5%;\" target=\"_blank\"\r\n      href='https://drive.google.com/file/d/1d31iKUPrkCTVOkfOkPvkujEVJ4io-bdP/view?usp=sharing'>\r\n      PDF <nb-icon icon=\"download-outline\" [options]=\"{ animation: { type: 'flip' } }\"></nb-icon>\r\n    </a>\r\n\r\n  </nb-layout-header>\r\n\r\n\r\n  <!-- SIDEBAR -->\r\n  <nb-sidebar (clickOutside)=\"onClickedOutside($event)\" responsive=\"true\">\r\n    <nb-user *ngIf=\"collapsed\" title=''  name='' onlyPicture='true' shape=\"round\" picture={{avatar}} size=\"small\">\r\n\r\n    </nb-user>\r\n    <div class=\"imgContainer\">\r\n      <img *ngIf=\"!collapsed\" id=\"myImg\" src={{avatar}} alt=\"Máximo Lanza\" />\r\n    </div>\r\n\r\n    <nb-menu id=\"ItemsMenu\" [items]=\"items\"></nb-menu>\r\n\r\n    <div class=\"iconsContainer\">\r\n      <div id=\"wrapper\">\r\n\r\n        <a class=\"contactIcon\" target='blank_' href='https://www.linkedin.com/in/m%C3%A1ximo-lanza/'>\r\n          <nb-icon class=\"icono\" status=\"info\" nbTooltip=\"LinkedIn\" nbTooltipPlacement=\"top\" icon=\"linkedin-outline\"\r\n            [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon>\r\n        </a>\r\n\r\n\r\n        <a class=\"contactIcon middle\" href=\"tel:+59899941516\">\r\n          <nb-icon class=\"icono\" status=\"success\" nbTooltip=\"099 94 15 16\" nbTooltipPlacement=\"top\" icon=\"phone-outline\"\r\n            [options]=\"{ animation: { type: 'zoom' } }\"> </nb-icon>\r\n        </a>\r\n        <a class=\"contactIcon\" href=\"mailto:max.slanza@gmail.com\">\r\n          <nb-icon class=\"icono\" status=\"danger\" id=\"mail\" nbTooltip=\"max.slanza@gmail.com\" nbTooltipPlacement=\"top\"\r\n            icon=\"at-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </nb-sidebar>\r\n\r\n  <nb-layout-column>\r\n    <router-outlet ></router-outlet>\r\n  </nb-layout-column>\r\n</nb-layout>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cv/cv.component */ "./src/app/pages/cv/cv.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/error404/error404.component */ "./src/app/pages/error404/error404.component.ts");








const routes = [
    {
        path: 'cv',
        component: _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"],
        data: { title: 'Curriculum Vitae' }
    }, {
        path: 'Chat',
        component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
        data: { title: 'Chat' }
    },
    { path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full'
    }, {
        path: 'Contacto',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        data: { title: 'Contacto' }
    }, {
        path: 'Inicio',
        component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"],
        data: { title: 'Inicio' }
    }, {
        path: '404',
        component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_7__["Error404Component"],
        data: { title: '404' }
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep nb-layout-column {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0M6XFxVc2Vyc1xcRHJha2VcXGNvZGVcXHdlYmN2XFxzcmNcXGFwcFxccGFnZXMvLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUNBSiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmItbGF5b3V0LWNvbHVtbiB7XHJcbiAgICAvL2hlaWdodDogODB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IiwiOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Máximo Lanza';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/cv/cv.component */ "./src/app/pages/cv/cv.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/chat/chat.service */ "./src/app/pages/chat/chat.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_contact_mailsender_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact/mailsender.service */ "./src/app/pages/contact/mailsender.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/error404/error404.component */ "./src/app/pages/error404/error404.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
            _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__["InicioComponent"],
            _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__["Error404Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({ name: 'dark' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbChatModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(),
            ng_click_outside__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSpinnerModule"]
        ],
        providers: [_pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"], _pages_contact_mailsender_service__WEBPACK_IMPORTED_MODULE_15__["MailsenderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constant/aboutme.ts":
/*!*************************************!*\
  !*** ./src/app/constant/aboutme.ts ***!
  \*************************************/
/*! exports provided: aboutme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutme", function() { return aboutme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const aboutme = {
    "avatar": 'https://i.imgur.com/bY0ksKF.png',
    "nacimiento": '1993-08-21',
    "lugarnacimiento": 'Montevideo',
    "pnombre": 'Máximo',
    "snombre": 'Santiago',
    "papellido": 'Lanza',
    "sapellido": 'Aguirre',
    "direccion": '18 de Julio 2030',
    "gmailpdf": 'https://drive.google.com/file/d/1roXSx84yFtM2W7mNXELFXFcfY0bPfE5l/view?usp=sharing',
    "presentacion": [
        /*{"principal":"si","linea" :"Con un perfil técnico y práctico, me defino como una persona autodidacta,"  },
        {"principal":"no","linea" :"responsable y proactivo, con fuerte orientación al cumplimiento de"  },
        {"principal":"no","linea" :"objetivos y una marcada tendencia a la resolución de problemas."  },
        {"principal":"si","linea" :" "  },
        {"principal":"si","linea" :"Me encuentro en búsqueda de oportunidades laborales en empresas de desarrollo de software en las"  },
        {"principal":"no","linea" :"cuales poder poner en práctica mis conocimientos sobre el rubro tecnológico."},
        */
        /*
           {"linea" :" Con un perfil técnico y práctico, me defino como una persona autodidacta, responsable y proactiva, con fuerte orientación al cumplimiento de objetivos y una marcada tendencia a la resolución de problemas."  },
           {"linea" :" Me encuentro en búsqueda de oportunidades laborales en empresas de desarrollo de software en las cuales poder poner en práctica mis conocimientos sobre el rubro tecnológico."},
            */
        { "linea": "" },
        { "linea": "  \"Gracias por visitar mi página!" },
        { "linea": "Soy un estudiante de Tecnólogo en Informatica en CETP-Fing con muchas ganas de seguir aprendiendo." },
        { "linea": "Si queres saber más de mi, te invito a que recorras esta web." },
        { "linea": " :) \"" },
        { "linea": "" },
    ],
    "json": [
        /*  {"cabezal" :" {  "},
          {"cabezal" :"       \"nombres\" : \"Máximo Santiago\", "},
          {"cabezal" :"       \"apellidos\" : \"Lanza Aguirre\", >"},
          {"cabezal" :"       \"nacimiento\" : \"1993-08-21\", "},
          {"cabezal" :"       \"licencia\" : \"Auto - Categoría A\", "},
          {"cabezal" :"       \"carnetDeSalud\": \"Si\", "},
          {"cabezal" :" }"},
          */
        { "cabezal": "nombres", "value": "Máximo Santiago" },
        { "cabezal": "apellidos", "value": "Lanza Aguirre" },
        { "cabezal": "nacimiento", "value": "1993-08-21" },
        { "cabezal": "licencia", "value": "Auto - Categoría A" },
        { "cabezal": "carnetDeSalud", "value": "Si" }
    ]
};


/***/ }),

/***/ "./src/app/constant/config.ts":
/*!************************************!*\
  !*** ./src/app/constant/config.ts ***!
  \************************************/
/*! exports provided: RESTSERVER, EndPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTSERVER", function() { return RESTSERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPoints", function() { return EndPoints; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const RESTSERVER = 'https://maxibackend.herokuapp.com';
//export  const RESTSERVER = 'http://localhost:8081';
const EndPoints = {
    api: '/api/',
    mail: '/mail/',
    send: '/send'
};


/***/ }),

/***/ "./src/app/constant/experiencia.ts":
/*!*****************************************!*\
  !*** ./src/app/constant/experiencia.ts ***!
  \*****************************************/
/*! exports provided: experiencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencia", function() { return experiencia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const experiencia = [{
        "empresa": "Hospital Británico",
        "desde": "2017-09-25",
        "hasta": "actualidad",
        "caego": "Desarrollador GeneXus - Sporte de 2do nivel",
        "Tareas": [
            { "descripcion": "Desarrollo aplicaciones web con GeneXus y participo en la actualización de aplicaciones web existentes en GeneXus Evo1, Evo2 y Evo3." },
            { "descripcion": "Realizo control y seguimiento de incidentes en el gestor GLPI apoyandome con SQL Server Management para el análisis de la información y las Knowleadge Bases de distintos sistemas para la revisión de código." },
            { "descripcion": "Me encargo de la centralización de las llamadas del sector de Desarrollo como 2do nivel de Soporte a los sistemas." },
            { "descripcion": "Soy responsable de generar scripts SQL para los reportes solicitados de urgencia elevada, pre-automatización." },
            { "descripcion": "Realizo controles de integración de sistemas haciendo seguimientos de canales en Mirth para mantener una consistencia de los servicios.." },
            { "descripcion": "Integro el grupo de innovación del sector de Desarrollo." },
            { "descripcion": "Me encargo de controlar el correcto funcionamiento y contínua comunicación de información  de integraciones mediante Mirth, con sistemas de proveedores." }
        ]
    },
    {
        "empresa": "Emestudio LTDA",
        "desde": "2015-01-01",
        "hasta": "2016-05-01",
        "caego": "Soporte técnico - Capacitador",
        "Tareas": [
            { "descripcion": "Me encargué de realizar soprote técnico a clientes de forma remota y presencial de Software y Hardware." },
            { "descripcion": "Realizé la preparación de equipos y la instalación física de todo lo necesario para armar las redes para los clientes." },
            { "descripcion": "Era responsable de la capacitacion de SoftRestorant a todo el personal de los clientes." } //,
            // { "descripcion" : "Conducí los vehiculos de la empresa para asistir a los locales para realizar soporte, instalación y cadetería de suministros informáticos."},
            //  { "descripcion" : "Era de mi responsabilidad realizar una guardia rotativa 24hs de 1 semana por mes."}
        ]
    }];


/***/ }),

/***/ "./src/app/constant/habilidades.ts":
/*!*****************************************!*\
  !*** ./src/app/constant/habilidades.ts ***!
  \*****************************************/
/*! exports provided: habilidades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "habilidades", function() { return habilidades; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const habilidades = [
    {
        "skill": "Java",
        "descriptions": [
            { "tag": "JAVA J2SE" },
            { "tag": "JAVA EE" },
            { "tag": "WebServices" },
            { "tag": "REST" },
            { "tag": "SOAP" },
            { "tag": "Maven" }
        ]
    },
    {
        "skill": "Angular",
        "descriptions": [
            { "tag": "Firebase" },
            { "tag": "PrimeNG" },
            { "tag": "Nebular" },
            { "tag": "Javascript" },
            { "tag": "Typescript" },
            { "tag": "Bootstrap" }
        ]
    },
    {
        "skill": "NodeJs",
        "descriptions": [
            { "tag": "ibm-watson" },
            { "tag": "nodemailer" },
            { "tag": "express" }
        ]
    },
    {
        "skill": "Otros",
        "descriptions": [
            { "tag": "SQL" },
            { "tag": "SQL Server" },
            { "tag": "noSQL" },
            { "tag": "Redis (Basico)" },
            { "tag": "RavenDB (Basico)" },
            { "tag": "HTML" },
            { "tag": "CSS" },
            { "tag": "Postman" },
            { "tag": "SoapUI" },
            { "tag": "Pentaho (Basico)" }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  justify-content: center;\n  display: flex;\n}\n\nnb-chat {\n  width: 80%;\n  height: 80vw;\n}\n\n@media screen and (max-width: 500px) {\n  nb-chat {\n    height: 20%;\n    float: none;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  nb-chat {\n    margin-top: 5%;\n    height: 80%;\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQvQzpcXFVzZXJzXFxEcmFrZVxcY29kZVxcd2ViY3ZcXHNyY1xcYXBwXFxwYWdlcy9jaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwiY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FET0U7RUFDRSxVQUFBO0VBRUEsWUFBQTtBQ0xKOztBRE9JO0VBTEY7SUFPSSxXQUFBO0lBQ0EsV0FBQTtFQ0xKO0FBQ0Y7O0FETUk7RUFWRjtJQVdJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ0hKO0FBQ0YiLCJmaWxlIjoiY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4gIFxyXG4gICRicmVhay1zbWFsbDogNTAwcHg7XHJcbiAgJGJyZWFrLWxhcmdlOiAxMjAwcHg7XHJcblxyXG5cclxuICBuYi1jaGF0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBcclxuICAgIGhlaWdodDogODB2dztcclxuICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcclxuICAgICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xyXG4gICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiIsIiNjb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubmItY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODB2dztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5iLWNoYXQge1xuICAgIGhlaWdodDogMjAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgbmItY2hhdCB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/pages/chat/chat.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var src_app_constant_aboutme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constant/aboutme */ "./src/app/constant/aboutme.ts");





let ChatComponent = class ChatComponent {
    constructor(chatService, sidebarService) {
        this.chatService = chatService;
        this.sidebarService = sidebarService;
        this.avatar = src_app_constant_aboutme__WEBPACK_IMPORTED_MODULE_4__["aboutme"].avatar;
        this.messages = [];
        this.messages.push({
            text: 'Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.',
            date: new Date(),
            reply: false,
            user: {
                name: 'Maximo',
                avatar: this.avatar,
            },
        });
    }
    sendMessage(event, userName, avatar, reply) {
        const files = !event.files ? [] : event.files.map((file) => {
            return {
                url: file.src,
                type: file.type,
                icon: 'file-text-outline',
            };
        });
        this.respuesta = '';
        /* Mensaje del visitante */
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: reply,
            user: {
                name: userName,
                avatar: avatar
            },
        });
        /* Obtengo respuesta */
        //this.chatService.getMessage(event.message);
        this.chatService.getMessage(event.message).subscribe(data => {
            this.respuesta = data;
            console.log(this.respuesta);
            console.log(this.respuesta.length);
            /* Si no esta vacia, respondo lo que obtengo */
            if (this.respuesta.length > 2) {
                this.messages.push({
                    text: this.respuesta,
                    date: new Date(),
                    reply: false,
                    user: {
                        name: 'Maximo',
                        avatar: this.avatar,
                    },
                });
            }
            else {
                this.messages.push({
                    text: 'Ups, esto es incómodo, tengo un problemita técnico en la conexción al servicio de chat. Disculpas!',
                    date: new Date(),
                    reply: false,
                    user: {
                        name: 'Maximo',
                        avatar: this.avatar,
                    },
                });
            }
        });
        /* if (this.respuesta.includes('página')) {
           this.chatService.getMessage(event.message).subscribe(data => {
             this.respuesta = data;
           });
         }*/
        // setTimeout(() => { 
        // }
        //   , 1500);
    }
    colapsar() {
        this.sidebarService.collapse();
    }
    toggle() {
        this.sidebarService.toggle(true);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        if (this.innerWidth < 850) {
            this.colapsar();
        }
        // this.chatService.getMessage('hola').subscribe(data => {
        //this.respuesta= data;
        /**setTimeout(() => { this.messages.push({
          text: this.respuesta,
            date: new Date(),
            reply: false,
            user: {
              name: 'Maximo',
              avatar: 'https://i.imgur.com/fi0KwgG.png',
            },
        }); }, 20);*/
        // });
    }
};
ChatComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/chat/chat.component.scss")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/pages/chat/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/config */ "./src/app/constant/config.ts");




let ChatService = class ChatService {
    constructor(http) {
        this.http = http;
        this.server = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["RESTSERVER"];
        this.api = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["EndPoints"].api;
        this.url = this.server + this.api;
    }
    getMessage(Message) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text'
            })
        };
        console.log(this.url + Message);
        return this.http.get(this.url + Message.toString(), { responseType: 'text' });
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".largo, .mail {\n  width: 100%;\n}\n\ninput, textarea {\n  margin-top: 10px;\n}\n\ntextarea {\n  height: 200px;\n}\n\n::ng-deep nb-layout-column {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvQzpcXFVzZXJzXFxEcmFrZVxcY29kZVxcd2ViY3ZcXHNyY1xcYXBwXFxwYWdlcy9jb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwiY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUVJLFlBQUE7QUNGSiIsImZpbGUiOiJjb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ28sLm1haWwge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcclxuICAgIC8vaGVpZ2h0OiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiIsIi5sYXJnbywgLm1haWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG46Om5nLWRlZXAgbmItbGF5b3V0LWNvbHVtbiB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mailsender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailsender.service */ "./src/app/pages/contact/mailsender.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ContactComponent = class ContactComponent {
    constructor(mailSender, toastrService, sidebarService, location) {
        this.mailSender = mailSender;
        this.toastrService = toastrService;
        this.sidebarService = sidebarService;
        this.location = location;
        this.text = '';
        this.alert = false;
        this.dangerpos = _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbGlobalLogicalPosition"].BOTTOM_START;
        this.index = 0;
        this.classes = 'example-items-rows';
        this.loading = false;
    }
    toggleLoadingAnimation() {
        this.loading = true;
        setTimeout(() => this.loading = false, 3000);
    }
    //Funcion utilizada por el Boton para enviar el mensaje
    toastAlert(isContact, message, title, status, position) {
        if (isContact) {
            setTimeout(() => {
                if (status == 'success') {
                    this.toastrService.success(message, title, { position });
                    this.inputMail = '';
                    this.inputMensaje = '';
                }
                else {
                    this.toastrService.danger(message, title, { position });
                }
            }, 2000);
        }
        console.log(this.loading);
    }
    sendMailSpinner() {
        this.toggleLoadingAnimation(); //Here my spinner started but never stopped
        // this.loading = false;
        this.sendMail('bottom-left', 'success', 4000);
    }
    sendMail(position, status, duration) {
        /**/
        //Si el texto del mensaje a enviar es valido
        this.toggleLoadingAnimation();
        if (this.inputMensaje && this.inputMail) {
            let mensaje;
            //Creo el mensaje para enviar al Servicio
            mensaje = {
                "mail": this.inputMail,
                "mensaje": this.inputMensaje
            };
            //Envio el mensaje con el servicio
            this.mailSender.sendMailPOST(mensaje, true)
                .subscribe(data => this.toastAlert(true, 'Mensaje enviado!!!', 'Ok', 'success', 'bottom-right'), // process data
            (err) => this.toastAlert(true, 'Algo falló, ¿Podrías intentar otra vez?', 'Error', 'danger', 'bottom-right') // process error
            );
            this.alert = true;
            this.index += 1;
        }
        else {
            //console.log("ELSE inputs vacios");
            this.showToastDanger('danger', position);
        }
    }
    showToastDanger(status, position) {
        this.toastrService.show('', 'Los campos no deben de quedar vacíos!', { position, status });
    }
    colapsar() {
        this.sidebarService.collapse();
    }
    toggle() {
        this.sidebarService.toggle(true);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        if (this.innerWidth < 850) {
            this.colapsar();
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _mailsender_service__WEBPACK_IMPORTED_MODULE_2__["MailsenderService"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ContactComponent.prototype, "classes", void 0);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/contact/mailsender.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/mailsender.service.ts ***!
  \*****************************************************/
/*! exports provided: MailsenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsenderService", function() { return MailsenderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constant/config */ "./src/app/constant/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");






let MailsenderService = class MailsenderService {
    constructor(http, toast) {
        this.http = http;
        this.toast = toast;
        this.server = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["RESTSERVER"];
        this.mail = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["EndPoints"].mail;
        this.send = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["EndPoints"].send;
        this.url = this.server + this.send;
        this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get refreshNeeded$() {
        return this._refreshNeeded$;
    }
    sendMail(mailtext) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'text',
            })
        };
        console.log(this.url + mailtext);
        return this.http.post(this.url + mailtext.toString(), { responseType: 'text' });
    }
    sendMailPOST(mail, isContact) {
        const body = JSON.stringify(mail);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log("url: ", this.url);
        console.log("Mail: ", JSON.stringify(mail));
        return this.http.post(this.url, body, httpOptions);
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
MailsenderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] }
];
MailsenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MailsenderService);



/***/ }),

/***/ "./src/app/pages/cv/cv.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/cv/cv.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Varela+Round);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);\n::ng-deep nb-layout-column {\n  justify-content: left;\n  display: flexbox;\n}\n#hb, #eme {\n  width: 60%;\n}\n.card-row {\n  display: flex;\n  margin: 0 -0.5rem;\n}\n.card-col {\n  flex: 1 0 calc(50% - 1rem);\n  margin: 0 0.5rem;\n}\n/*Bootstrap*/\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\na.badge:focus, a.badge:hover {\n  text-decoration: none;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\na.badge-primary:focus, a.badge-primary:hover {\n  color: #fff;\n  background-color: #0062cc;\n}\na.badge-primary.focus, a.badge-primary:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\na.badge-secondary:focus, a.badge-secondary:hover {\n  color: #fff;\n  background-color: #545b62;\n}\na.badge-secondary.focus, a.badge-secondary:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\na.badge-success:focus, a.badge-success:hover {\n  color: #fff;\n  background-color: #1e7e34;\n}\na.badge-success.focus, a.badge-success:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\na.badge-info:focus, a.badge-info:hover {\n  color: #fff;\n  background-color: #117a8b;\n}\na.badge-info.focus, a.badge-info:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\na.badge-warning:focus, a.badge-warning:hover {\n  color: #212529;\n  background-color: #d39e00;\n}\na.badge-warning.focus, a.badge-warning:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\na.badge-danger:focus, a.badge-danger:hover {\n  color: #fff;\n  background-color: #bd2130;\n}\na.badge-danger.focus, a.badge-danger:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\na.badge-light:focus, a.badge-light:hover {\n  color: #212529;\n  background-color: #dae0e5;\n}\na.badge-light.focus, a.badge-light:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\na.badge-dark:focus, a.badge-dark:hover {\n  color: #fff;\n  background-color: #1d2124;\n}\na.badge-dark.focus,\na.badge-dark:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n#tagcontainer {\n  display: block;\n}\n.badge {\n  background: #545b62;\n  margin: 10px 10px 10px 10px;\n  font-size: small;\n}\n/*\nnb-card-header{\n    background : Black;\n}*/\n.experience {\n  background: #181818;\n  width: 60%;\n  height: 60%;\n  float: left;\n  position: relative;\n  color: #9099a0;\n  font-weight: 300;\n}\n@media screen and (max-width: 500px) {\n  .experience {\n    min-height: 80%;\n    min-height: 6vh;\n    height: 65%;\n  }\n}\n@media screen and (min-width: 850px) {\n  .experience {\n    height: 100%;\n    min-height: 100%;\n    min-height: 150vh;\n  }\n}\n@media (max-width: 850px) {\n  .experience {\n    width: 100%;\n  }\n}\n.experience h3.experience-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.experience .company-wrapper {\n  width: 30%;\n  float: left;\n  text-align: left;\n  padding-right: 5%;\n  margin-bottom: 60px;\n}\n@media (max-width: 450px) {\n  .experience .company-wrapper {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.experience .job-wrapper {\n  width: 70%;\n  float: left;\n  text-align: left;\n  padding-right: 5%;\n  margin-bottom: 60px;\n}\n@media (max-width: 450px) {\n  .experience .job-wrapper {\n    width: 100%;\n    margin-bottom: 40px;\n  }\n}\n.experience .experience-title {\n  color: white;\n  margin-bottom: 15px;\n}\n.section-padding {\n  position: relative;\n  padding: 60px 60px 40px 40px;\n}\n@media (max-width: 850px) {\n  .section-padding {\n    padding: 80px 15% 40px 10%;\n  }\n}\n@media (max-width: 450px) {\n  .section-padding {\n    padding: 40px 10% 20px 5%;\n  }\n}\n.section-wrapper {\n  position: relative;\n  width: 50%;\n  float: left;\n  text-align: left;\n  color: #9099a0;\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n@media (max-width: 450px) {\n  .section-wrapper {\n    width: 100%;\n  }\n}\n.section-wrapper:nth-child(3) {\n  padding-right: 8%;\n}\n.section-wrapper h3.section-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.resume-wrapper {\n  position: relative;\n  text-align: center;\n  height: 100%;\n}\n.container {\n  min-height: 800px;\n}\n.profile {\n  font-size: 16px;\n  line-height: 1.5em;\n  background: #fff;\n  width: 40%;\n  float: left;\n  color: #9099a0;\n}\n@media screen and (max-width: 500px) {\n  .profile {\n    min-height: 80%;\n    min-height: 6vh;\n    height: 65%;\n  }\n}\n@media screen and (min-width: 850px) {\n  .profile {\n    height: 100%;\n    min-height: 100%;\n    min-height: 150vh;\n  }\n}\n@media (max-width: 850px) {\n  .profile {\n    width: 100%;\n  }\n}\n.profile .name-wrapper {\n  float: left;\n  width: 60%;\n}\n.profile .profile-title {\n  color: #75006c;\n  margin-bottom: 15px;\n}\n.profile .profile-subtitle {\n  color: #75006c;\n  margin-bottom: 15px;\n}\n.profile h3.section-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2L0M6XFxVc2Vyc1xcRHJha2VcXGNvZGVcXHdlYmN2XFxzcmNcXGFwcFxccGFnZXMvY3ZcXGN2LmNvbXBvbmVudC5zY3NzIiwiY3YvY3YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZRLGlFQUFBO0FBQ0EsOEVBQUE7QUFuRlI7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURDRTtFQUNFLFVBQUE7QUNFSjtBRElFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRE9FLFlBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsd0JBQUE7RUFBd0Isc0JBQUE7RUFBcUIscUlBQUE7QUNBeEY7QURDTTtFQUF1QztJQUFPLGdCQUFBO0VDSWxEO0FBQ0Y7QURKTTtFQUE0QixxQkFBQTtBQ09sQztBRE5NO0VBQWEsYUFBQTtBQ1VuQjtBRFRNO0VBQVksa0JBQUE7RUFBa0IsU0FBQTtBQ2NwQztBRGJNO0VBQVksb0JBQUE7RUFBbUIsbUJBQUE7RUFBa0Isb0JBQUE7QUNtQnZEO0FEbEJNO0VBQWUsV0FBQTtFQUFXLHlCQUFBO0FDdUJoQztBRHRCTTtFQUE0QyxXQUFBO0VBQVcseUJBQUE7QUMyQjdEO0FEMUJNO0VBQTRDLFVBQUE7RUFBVSwrQ0FBQTtBQytCNUQ7QUQ5Qk07RUFBaUIsV0FBQTtFQUFXLHlCQUFBO0FDbUNsQztBRGxDTTtFQUFnRCxXQUFBO0VBQVcseUJBQUE7QUN1Q2pFO0FEdENNO0VBQWdELFVBQUE7RUFBVSxpREFBQTtBQzJDaEU7QUQzQzRHO0VBQWUsV0FBQTtFQUFXLHlCQUFBO0FDZ0R0STtBRC9DTTtFQUE0QyxXQUFBO0VBQVcseUJBQUE7QUNvRDdEO0FEbkRNO0VBQTRDLFVBQUE7RUFBVSwrQ0FBQTtBQ3dENUQ7QUR2RE07RUFBWSxXQUFBO0VBQVcseUJBQUE7QUM0RDdCO0FEM0RNO0VBQXNDLFdBQUE7RUFBVyx5QkFBQTtBQ2dFdkQ7QUQvRE07RUFBc0MsVUFBQTtFQUFVLGdEQUFBO0FDb0V0RDtBRG5FTTtFQUFlLGNBQUE7RUFBYyx5QkFBQTtBQ3dFbkM7QUR2RU07RUFBNEMsY0FBQTtFQUFjLHlCQUFBO0FDNEVoRTtBRDNFTTtFQUE0QyxVQUFBO0VBQVUsK0NBQUE7QUNnRjVEO0FEL0VNO0VBQWMsV0FBQTtFQUFXLHlCQUFBO0FDb0YvQjtBRG5GTTtFQUEwQyxXQUFBO0VBQVcseUJBQUE7QUN3RjNEO0FEdkZNO0VBQTBDLFVBQUE7RUFBVSwrQ0FBQTtBQzRGMUQ7QUQzRk07RUFBYSxjQUFBO0VBQWMseUJBQUE7QUNnR2pDO0FEL0ZNO0VBQXdDLGNBQUE7RUFBYyx5QkFBQTtBQ29HNUQ7QURuR007RUFBd0MsVUFBQTtFQUFVLGlEQUFBO0FDd0d4RDtBRHZHTTtFQUFZLFdBQUE7RUFBVyx5QkFBQTtBQzRHN0I7QUQzR007RUFBc0MsV0FBQTtFQUFXLHlCQUFBO0FDZ0h2RDtBRC9HTTs7RUFDbUIsVUFBQTtFQUFVLDhDQUFBO0FDb0huQztBRG5IRTtFQUFXLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLHlCQUFBO0VBQXlCLHFCQUFBO0FDMEgzRTtBRHhIQTtFQUNJLGNBQUE7QUMySEo7QUR4SEE7RUFDSSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EsZ0JBQUE7QUMwSEo7QUR0SEE7OztFQUFBO0FBZ0NBO0VBQ0ksbUJBeEJNO0VBeUJOLFVBQUE7RUFhQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2Q1M7RUF3Q1QsZ0JBQUE7QUNpRko7QURoR0k7RUFKSjtJQUtNLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ21HSjtBQUNGO0FEbEdJO0VBVEo7SUFVTSxZQUFBO0lBQ0EsZ0JBQUE7SUFDRixpQkFBQTtFQ3FHRjtBQUNGO0FEekhNO0VBT047SUFxQndDLFdBQUE7RUNpR3RDO0FBQ0Y7QURqR0k7RUFDRSxjQTNDSztFQTRDTCxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDbUdOO0FEakdJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNtR047QUQxSU07RUFrQ0Y7SUFNa0MsV0FBQTtJQUFZLG1CQUFBO0VDdUdoRDtBQUNGO0FEdEdJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUN3R047QUR2Sk07RUEwQ0Y7SUFNa0MsV0FBQTtJQUFXLG1CQUFBO0VDNEcvQztBQUNGO0FEM0dJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDNkdSO0FEekdFO0VBQ0Usa0JBQUE7RUFDRCw0QkFBQTtBQzRHSDtBRHpLTTtFQTJESjtJQUdxQywwQkFBQTtFQytHckM7QUFDRjtBRDNLTTtFQXdESjtJQUlrQyx5QkFBQTtFQ21IbEM7QUFDRjtBRGpIRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBckZTO0VBc0ZULGdCQUFBO0VBQ0EsbUJBQUE7QUNvSEo7QUQxTE07RUErREo7SUFRa0MsV0FBQTtFQ3VIbEM7QUFDRjtBRHZISTtFQUNFLGlCQUFBO0FDeUhOO0FEdkhJO0VBQ0UsY0E1Rks7RUE2RkwsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3lITjtBRG5IQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDc0hKO0FEbkhFO0VBQ0UsaUJBQUE7QUNzSEo7QURuSEU7RUFhRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFwSU87RUFxSVAsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQXJJVTtBQytPZDtBRDNISTtFQURGO0lBRUksZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDOEhKO0FBQ0Y7QUQ3SEk7RUFORjtJQU9JLFlBQUE7SUFDQSxnQkFBQTtJQUNGLGlCQUFBO0VDZ0lGO0FBQ0Y7QUQ5T007RUFvR0o7SUFtQnNDLFdBQUE7RUMySHRDO0FBQ0Y7QUQzSEk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQzZITjtBRDFISTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQzRIUjtBRDFITTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQzRIUjtBRDFITTtFQUNFLGNBbkpHO0VBb0pILGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM0SFIiLCJmaWxlIjoiY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmItbGF5b3V0LWNvbHVtbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4Ym94IDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI2hiLCNlbWV7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgLmNhcmQtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgLTAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY29sIHtcclxuICAgIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8qQm9vdHN0cmFwKi9cclxuICAuYmFkZ2V7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOi4yNWVtIC40ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTo3NSU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6MTtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO2JvcmRlci1yYWRpdXM6LjI1cmVtO3RyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0fVxyXG4gICAgICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuYmFkZ2V7dHJhbnNpdGlvbjpub25lfX1cclxuICAgICAgYS5iYWRnZTpmb2N1cyxhLmJhZGdlOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfVxyXG4gICAgICAuYmFkZ2U6ZW1wdHl7ZGlzcGxheTpub25lfVxyXG4gICAgICAuYnRuIC5iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTFweH1cclxuICAgICAgLmJhZGdlLXBpbGx7cGFkZGluZy1yaWdodDouNmVtO3BhZGRpbmctbGVmdDouNmVtO2JvcmRlci1yYWRpdXM6MTByZW19XHJcbiAgICAgIC5iYWRnZS1wcmltYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmfVxyXG4gICAgICBhLmJhZGdlLXByaW1hcnk6Zm9jdXMsYS5iYWRnZS1wcmltYXJ5OmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA2MmNjfVxyXG4gICAgICBhLmJhZGdlLXByaW1hcnkuZm9jdXMsYS5iYWRnZS1wcmltYXJ5OmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4ycmVtIHJnYmEoMCwxMjMsMjU1LC41KX1cclxuICAgICAgLmJhZGdlLXNlY29uZGFyeXtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzZjNzU3ZH1cclxuICAgICAgYS5iYWRnZS1zZWNvbmRhcnk6Zm9jdXMsYS5iYWRnZS1zZWNvbmRhcnk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1NDViNjJ9XHJcbiAgICAgIGEuYmFkZ2Utc2Vjb25kYXJ5LmZvY3VzLGEuYmFkZ2Utc2Vjb25kYXJ5OmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4ycmVtIHJnYmEoMTA4LDExNywxMjUsLjUpfS5iYWRnZS1zdWNjZXNze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjhhNzQ1fVxyXG4gICAgICBhLmJhZGdlLXN1Y2Nlc3M6Zm9jdXMsYS5iYWRnZS1zdWNjZXNzOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMWU3ZTM0fVxyXG4gICAgICBhLmJhZGdlLXN1Y2Nlc3MuZm9jdXMsYS5iYWRnZS1zdWNjZXNzOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4ycmVtIHJnYmEoNDAsMTY3LDY5LC41KX1cclxuICAgICAgLmJhZGdlLWluZm97Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMxN2EyYjh9XHJcbiAgICAgIGEuYmFkZ2UtaW5mbzpmb2N1cyxhLmJhZGdlLWluZm86aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMxMTdhOGJ9XHJcbiAgICAgIGEuYmFkZ2UtaW5mby5mb2N1cyxhLmJhZGdlLWluZm86Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgyMywxNjIsMTg0LC41KX1cclxuICAgICAgLmJhZGdlLXdhcm5pbmd7Y29sb3I6IzIxMjUyOTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxMDd9XHJcbiAgICAgIGEuYmFkZ2Utd2FybmluZzpmb2N1cyxhLmJhZGdlLXdhcm5pbmc6aG92ZXJ7Y29sb3I6IzIxMjUyOTtiYWNrZ3JvdW5kLWNvbG9yOiNkMzllMDB9XHJcbiAgICAgIGEuYmFkZ2Utd2FybmluZy5mb2N1cyxhLmJhZGdlLXdhcm5pbmc6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgyNTUsMTkzLDcsLjUpfVxyXG4gICAgICAuYmFkZ2UtZGFuZ2Vye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZGMzNTQ1fVxyXG4gICAgICBhLmJhZGdlLWRhbmdlcjpmb2N1cyxhLmJhZGdlLWRhbmdlcjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2JkMjEzMH1cclxuICAgICAgYS5iYWRnZS1kYW5nZXIuZm9jdXMsYS5iYWRnZS1kYW5nZXI6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgyMjAsNTMsNjksLjUpfVxyXG4gICAgICAuYmFkZ2UtbGlnaHR7Y29sb3I6IzIxMjUyOTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmF9XHJcbiAgICAgIGEuYmFkZ2UtbGlnaHQ6Zm9jdXMsYS5iYWRnZS1saWdodDpob3Zlcntjb2xvcjojMjEyNTI5O2JhY2tncm91bmQtY29sb3I6I2RhZTBlNX1cclxuICAgICAgYS5iYWRnZS1saWdodC5mb2N1cyxhLmJhZGdlLWxpZ2h0OmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIC4ycmVtIHJnYmEoMjQ4LDI0OSwyNTAsLjUpfVxyXG4gICAgICAuYmFkZ2UtZGFya3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzM0M2E0MH1cclxuICAgICAgYS5iYWRnZS1kYXJrOmZvY3VzLGEuYmFkZ2UtZGFyazpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzFkMjEyNH1cclxuICAgICAgYS5iYWRnZS1kYXJrLmZvY3VzLFxyXG4gICAgICBhLmJhZGdlLWRhcms6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSg1Miw1OCw2NCwuNSl9XHJcbiAgLmp1bWJvdHJvbntwYWRkaW5nOjJyZW0gMXJlbTttYXJnaW4tYm90dG9tOjJyZW07YmFja2dyb3VuZC1jb2xvcjojZTllY2VmO2JvcmRlci1yYWRpdXM6LjNyZW19XHJcblxyXG4jdGFnY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG59XHJcblxyXG4uYmFkZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTQ1YjYyOyBcclxuICBcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweCA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICBcclxufVxyXG5cclxuLypcclxubmItY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kIDogQmxhY2s7XHJcbn0qL1xyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZhcmVsYStSb3VuZCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDMwMCw2MDAsNzAwKTtcclxuXHJcbiRwcm9maWxlQmc6I2ZmZjtcclxuJHNraWxsc0JnOiMxODE4MTg7XHJcbiRwcm9maWxlQ29sb3I6IzkwOTlhMDtcclxuJHNraWxsc0NvbG9yOiM5MDk5YTA7IFxyXG4kbGlua0NvbG9yOiM2NmNjOTk7XHJcbiRib2xkQ29sb3I6IzRhNGU1MTtcclxuJHRpbWU6MC42cztcclxuXHJcblxyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICAgIEBpZiAkcG9pbnQgPT0gcGFwYS1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBpZiAkcG9pbnQgPT0gbWFtYS1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBpZiAkcG9pbnQgPT0gYnJvdGhlci1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IGJhYnktYmVhciB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi5leHBlcmllbmNlIHtcclxuICAgIGJhY2tncm91bmQ6JHNraWxsc0JnO1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBtaW4taGVpZ2h0OjgwJTtcclxuICAgICAgbWluLWhlaWdodDo2dmg7XHJcbiAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjE1MHZoO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBjb2xvcjokc2tpbGxzQ29sb3I7XHJcbiAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICBcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYnJvdGhlci1iZWFyKSB7IHdpZHRoOiAxMDAlOyB9IFxyXG4gICAgaDMuZXhwZXJpZW5jZS10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiRsaW5rQ29sb3I7XHJcbiAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6MS4yZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmFieS1iZWFyKSB7d2lkdGg6MTAwJTsgbWFyZ2luLWJvdHRvbToyMHB4O30gXHJcbiAgICB9XHJcbiAgICAuam9iLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDo3MCU7XHJcbiAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgcGFkZGluZy1yaWdodDo1JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGJhYnktYmVhcikge3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTo0MHB4O30gXHJcbiAgICB9XHJcbiAgICAuZXhwZXJpZW5jZS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4OztcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1wYWRkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgcGFkZGluZzo2MHB4IDYwcHggNDBweCA0MHB4O1xyXG4gICBAaW5jbHVkZSBicmVha3BvaW50KGJyb3RoZXItYmVhcikgeyBwYWRkaW5nOjgwcHggMTUlIDQwcHggMTAlOyB9XHJcbiAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmFieS1iZWFyKSB7IHBhZGRpbmc6NDBweCAxMCUgMjBweCA1JTsgfVxyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBjb2xvcjokc2tpbGxzQ29sb3I7XHJcbiAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGJhYnktYmVhcikge3dpZHRoOjEwMCU7fVxyXG4gICAgJjpudGgtY2hpbGQoMyl7IFxyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjglO1xyXG4gICAgfVxyXG4gICAgaDMuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiRsaW5rQ29sb3I7XHJcbiAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6MS4yZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbi5yZXN1bWUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDo4MDBweDtcclxuICB9IFxyXG4gIFxyXG4gIC5wcm9maWxlIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6ODAlO1xyXG4gICAgICBtaW4taGVpZ2h0OjZ2aDtcclxuICAgICAgaGVpZ2h0OiA2NSU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6MTUwdmg7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS41ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiRwcm9maWxlQmc7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgY29sb3I6JHByb2ZpbGVDb2xvcjtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYnJvdGhlci1iZWFyKSB7IHdpZHRoOiAxMDAlOyB9XHJcbiAgICAubmFtZS13cmFwcGVyIHtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjpyZ2IoMTE3LCAwLCAxMDgpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDs7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2ZpbGUtc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOnJnYigxMTcsIDAsIDEwOCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4OztcclxuICAgICAgfVxyXG4gICAgICBoMy5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjokbGlua0NvbG9yO1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOjEuMmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgIH1cclxuICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZhcmVsYStSb3VuZCk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCwzMDAsNjAwLDcwMCk7XG46Om5nLWRlZXAgbmItbGF5b3V0LWNvbHVtbiB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZGlzcGxheTogZmxleGJveDtcbn1cblxuI2hiLCAjZW1lIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0wLjVyZW07XG59XG5cbi5jYXJkLWNvbCB7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4vKkJvb3RzdHJhcCovXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjRlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmJhZGdlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5hLmJhZGdlOmZvY3VzLCBhLmJhZGdlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmFkZ2U6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4uYmFkZ2UtcGlsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cblxuLmJhZGdlLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuYS5iYWRnZS1wcmltYXJ5OmZvY3VzLCBhLmJhZGdlLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cblxuYS5iYWRnZS1wcmltYXJ5LmZvY3VzLCBhLmJhZGdlLXByaW1hcnk6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbn1cblxuLmJhZGdlLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xufVxuXG5hLmJhZGdlLXNlY29uZGFyeTpmb2N1cywgYS5iYWRnZS1zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2Mjtcbn1cblxuYS5iYWRnZS1zZWNvbmRhcnkuZm9jdXMsIGEuYmFkZ2Utc2Vjb25kYXJ5OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcbn1cblxuLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cblxuYS5iYWRnZS1zdWNjZXNzOmZvY3VzLCBhLmJhZGdlLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbn1cblxuYS5iYWRnZS1zdWNjZXNzLmZvY3VzLCBhLmJhZGdlLXN1Y2Nlc3M6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcbn1cblxuLmJhZGdlLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbn1cblxuYS5iYWRnZS1pbmZvOmZvY3VzLCBhLmJhZGdlLWluZm86aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4Yjtcbn1cblxuYS5iYWRnZS1pbmZvLmZvY3VzLCBhLmJhZGdlLWluZm86Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XG59XG5cbi5iYWRnZS13YXJuaW5nIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbmEuYmFkZ2Utd2FybmluZzpmb2N1cywgYS5iYWRnZS13YXJuaW5nOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMDA7XG59XG5cbmEuYmFkZ2Utd2FybmluZy5mb2N1cywgYS5iYWRnZS13YXJuaW5nOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XG59XG5cbi5iYWRnZS1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cblxuYS5iYWRnZS1kYW5nZXI6Zm9jdXMsIGEuYmFkZ2UtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG59XG5cbmEuYmFkZ2UtZGFuZ2VyLmZvY3VzLCBhLmJhZGdlLWRhbmdlcjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xufVxuXG4uYmFkZ2UtbGlnaHQge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuYS5iYWRnZS1saWdodDpmb2N1cywgYS5iYWRnZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xufVxuXG5hLmJhZGdlLWxpZ2h0LmZvY3VzLCBhLmJhZGdlLWxpZ2h0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcbn1cblxuLmJhZGdlLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cblxuYS5iYWRnZS1kYXJrOmZvY3VzLCBhLmJhZGdlLWRhcms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNDtcbn1cblxuYS5iYWRnZS1kYXJrLmZvY3VzLFxuYS5iYWRnZS1kYXJrOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4jdGFnY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICM1NDViNjI7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLypcbm5iLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQgOiBCbGFjaztcbn0qL1xuLmV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5MDk5YTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZXhwZXJpZW5jZSB7XG4gICAgbWluLWhlaWdodDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZXhwZXJpZW5jZSBoMy5leHBlcmllbmNlLXRpdGxlIHtcbiAgY29sb3I6ICM2NmNjOTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZXhwZXJpZW5jZSAuY29tcGFueS13cmFwcGVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5leHBlcmllbmNlIC5jb21wYW55LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5leHBlcmllbmNlIC5qb2Itd3JhcHBlciB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZXhwZXJpZW5jZSAuam9iLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VjdGlvbi1wYWRkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2MHB4IDYwcHggNDBweCA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5zZWN0aW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDgwcHggMTUlIDQwcHggMTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlY3Rpb24tcGFkZGluZyB7XG4gICAgcGFkZGluZzogNDBweCAxMCUgMjBweCA1JTtcbiAgfVxufVxuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5MDk5YTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zZWN0aW9uLXdyYXBwZXI6bnRoLWNoaWxkKDMpIHtcbiAgcGFkZGluZy1yaWdodDogOCU7XG59XG4uc2VjdGlvbi13cmFwcGVyIGgzLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzY2Y2M5OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnJlc3VtZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM5MDk5YTA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucHJvZmlsZSB7XG4gICAgbWluLWhlaWdodDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnByb2ZpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnByb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvZmlsZSAubmFtZS13cmFwcGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MCU7XG59XG4ucHJvZmlsZSAucHJvZmlsZS10aXRsZSB7XG4gIGNvbG9yOiAjNzUwMDZjO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnByb2ZpbGUgLnByb2ZpbGUtc3VidGl0bGUge1xuICBjb2xvcjogIzc1MDA2YztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcm9maWxlIGgzLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzY2Y2M5OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/cv/cv.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/cv/cv.component.ts ***!
  \******************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constant_experiencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/experiencia */ "./src/app/constant/experiencia.ts");
/* harmony import */ var _constant_habilidades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/habilidades */ "./src/app/constant/habilidades.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");





let CvComponent = class CvComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.exp = _constant_experiencia__WEBPACK_IMPORTED_MODULE_2__["experiencia"];
        this.tareasHB = this.exp[0].Tareas;
        this.tareasE = this.exp[1].Tareas;
        this.skills = _constant_habilidades__WEBPACK_IMPORTED_MODULE_3__["habilidades"];
        this.skillsJava = this.skills[0].descriptions;
        this.skillsAngular = this.skills[1].descriptions;
        this.skillsNodeJs = this.skills[2].descriptions;
        this.skillsOtros = this.skills[3].descriptions;
    }
    colapsar() {
        this.sidebarService.collapse();
    }
    toggle() {
        this.sidebarService.toggle(true);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        if (this.innerWidth < 850) {
            this.colapsar();
        }
    }
};
CvComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"] }
];
CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cv.component.scss */ "./src/app/pages/cv/cv.component.scss")).default]
    })
], CvComponent);



/***/ }),

/***/ "./src/app/pages/error404/error404.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/error404/error404.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin: auto;\n  padding-left: auto;\n}\n\n/*\n.green {\n    color :$green;\n    font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\",\n    \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\",\n    \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier,\n    monospace;\n\n  }*/\n\n.text404, p, h1 {\n  color: #9ccc65;\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n  -webkit-text-size-adjust: 12px;\n     -moz-text-size-adjust: 12px;\n      -ms-text-size-adjust: 12px;\n          text-size-adjust: 12px;\n  text-align: center;\n}\n\n.slide-right {\n  -webkit-animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2020-1-20 20:31:27\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-right\n * ----------------------------------------\n */\n\n@-webkit-keyframes slide-right {\n  0% {\n    transform: translateX(-300px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    transform: translateX(-300px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0L0M6XFxVc2Vyc1xcRHJha2VcXGNvZGVcXHdlYmN2XFxzcmNcXGFwcFxccGFnZXMvZXJyb3I0MDRcXGVycm9yNDA0LmNvbXBvbmVudC5zY3NzIiwiZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTs7Ozs7Ozs7SUFBQTs7QUFVQTtFQUNJLGNBbkJJO0VBc0JKLGlPQUFBO0VBSUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRGFFO0VBQ0QsMkVBQUE7RUFDUSxtRUFBQTtBQ1ZUOztBRGVBOzs7OzttREFBQTs7QUFPQTs7OztFQUFBOztBQUtDO0VBQ0c7SUFFVSw2QkFBQTtFQ2JaO0VEZUU7SUFFVSx3QkFBQTtFQ2JaO0FBQ0Y7O0FEZUU7RUFDRTtJQUVVLDZCQUFBO0VDYlo7RURlRTtJQUVVLHdCQUFBO0VDYlo7QUFDRiIsImZpbGUiOiJlcnJvcjQwNC9lcnJvcjQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kZ3JlZW46ICM5Y2NjNjU7XHJcblxyXG4uY29udGVudCB7XHJcbiAgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiBhdXRvO1xyXG4gICAgXHJcbn1cclxuLypcclxuLmdyZWVuIHtcclxuICAgIGNvbG9yIDokZ3JlZW47XHJcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQW5kYWxlIE1vbm8gV1RcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsXHJcbiAgICBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIk5pbWJ1cyBNb25vIExcIiwgTW9uYWNvLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsXHJcbiAgICBtb25vc3BhY2U7XHJcblxyXG4gIH0qL1xyXG4gIFxyXG4udGV4dDQwNCwgcCxoMSB7XHJcbiAgICBjb2xvciA6JGdyZWVuO1xyXG4gICAgLy9mb250LWZhbWlseTogbmItdGhlbWUoZm9udC1mYW1pbHktcHJpbWFyeSk7XHJcbiAgICAvL2NvbG9yOiBuYi10aGVtZSh0ZXh0LWJhc2ljLWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJBbmRhbGUgTW9ubyBXVFwiLCBcIkFuZGFsZSBNb25vXCIsIFwiTHVjaWRhIENvbnNvbGVcIixcclxuICAgIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIixcclxuICAgIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiTmltYnVzIE1vbm8gTFwiLCBNb25hY28sIFwiQ291cmllciBOZXdcIiwgQ291cmllcixcclxuICAgIG1vbm9zcGFjZTtcclxuICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNsaWRlLXJpZ2h0IHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAgYm90aDtcclxuXHQgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAgYm90aDtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTEtMjAgMjA6MzE6MjdcclxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxyXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNsaWRlLXJpZ2h0XHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiBhdXRvO1xufVxuXG4vKlxuLmdyZWVuIHtcbiAgICBjb2xvciA6JGdyZWVuO1xuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJBbmRhbGUgTW9ubyBXVFwiLCBcIkFuZGFsZSBNb25vXCIsIFwiTHVjaWRhIENvbnNvbGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLFxuICAgIG1vbm9zcGFjZTtcblxuICB9Ki9cbi50ZXh0NDA0LCBwLCBoMSB7XG4gIGNvbG9yOiAjOWNjYzY1O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQW5kYWxlIE1vbm8gV1RcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIiwgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xLTIwIDIwOjMxOjI3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1yaWdodFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/error404/error404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() {
        this.i = 0;
        this.txt = 'Lorem ipsum dummy text blabla.';
        this.speed = 50;
    }
    ngOnInit() {
        let i = 0;
        let i2 = 0;
        let i3 = 0;
        let txt = 'Ups, creo que algo salió mal.';
        let txt2 = '¿Podrias chequear si esta correcta la dirección URL?';
        let txt3 = 'Gracias!';
        let speed = 50;
        startTW1();
        startTW2();
        startTW3();
        function startTW1() {
            typeWriter1();
        }
        ;
        function startTW2() {
            setTimeout(typeWriter2, 2000);
        }
        ;
        function startTW3() {
            setTimeout(typeWriter3, 5000);
        }
        ;
        function typeWriter1( /*i: number, txt: String, speed: number*/) {
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                console.log(i);
                i++;
                setTimeout(typeWriter1, speed);
            }
        }
        function typeWriter2( /*i: number, txt: String, speed: number*/) {
            if (i2 < txt2.length) {
                document.getElementById("demo2").innerHTML += txt2.charAt(i2);
                console.log(i2);
                i2++;
                setTimeout(typeWriter2, speed);
            }
        }
        function typeWriter3( /*i: number, txt: String, speed: number*/) {
            if (i3 < txt3.length) {
                document.getElementById("demo3").innerHTML += txt3.charAt(i3);
                console.log(i3);
                i3++;
                setTimeout(typeWriter3, speed);
            }
        }
    }
};
Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error404.component.scss */ "./src/app/pages/error404/error404.component.scss")).default]
    })
], Error404Component);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*::ng-deep nb-layout-column {\n  //height: 80vw;\n  height: 100%;\n}*/\n.flipicon {\n  margin-right: 1%;\n  margin-top: 1%;\n}\n@media screen and (max-width: 500px) {\n  .flipicon {\n    width: 4%;\n    float: none;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .flipicon {\n    width: 1.5%;\n    float: right;\n  }\n}\n* {\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n}\n.blue {\n  color: #29b6f6;\n}\n.green {\n  color: #9ccc65;\n}\n.purple {\n  color: #ba68c8;\n}\n.cyan {\n  color: #4dd0e1;\n}\n.red {\n  color: #ef5350;\n}\n.content {\n  height: 50%;\n  color: white;\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card {\n  height: 15%;\n  width: 80%;\n  margin-top: -20%;\n  position: relative;\n}\n.card__side {\n  height: 800%;\n  transition: all 0.8s ease;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);\n}\n.card__side--front {\n  background-color: #121212;\n}\n.card__side--back {\n  transform: rotateY(180deg);\n  background-color: #121212;\n}\n.card:hover .card__side--front {\n  transform: rotateY(-180deg);\n}\n.card:hover .card__side--back {\n  transform: rotateY(0deg);\n}\n.card__cont {\n  height: 100%;\n  background-color: #121212;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card__cta {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  color: white;\n}\n.card__cta p {\n  margin-left: 1rem;\n}\n.card__cta p > .space {\n  margin-left: 2rem;\n}\n/*   #contentfront {\n     @media screen and (max-width: $break-small) {\n          visibility: hidden;\n         position: absolute;\n         }\n         @media screen and (min-width: $break-large) {\n           visibility: visible;\n\n\n         }\n\n       }  */\n/*\n        #contentback {\n          @media screen and (max-width: $break-small) {\n              visibility: visible;\n\n              }\n              @media screen and (min-width: $break-small+1) {\n                visibility: hidden;\n\n              }\n\n            }  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby9DOlxcVXNlcnNcXERyYWtlXFxjb2RlXFx3ZWJjdlxcc3JjXFxhcHBcXHBhZ2VzL2luaWNpb1xcaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwiaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTs7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1hGO0FEWUU7RUFIRjtJQUlJLFNBQUE7SUFDQSxXQUFBO0VDVEY7QUFDRjtBRFVFO0VBUEY7SUFRSSxXQUFBO0lBQ0EsWUFBQTtFQ1BGO0FBQ0Y7QURVQTtFQUNFLGlPQUFBO0FDUEY7QURtQkE7RUFIRSxjQW5DSztBQ3VCUDtBRG1CQTtFQVBFLGNBbENNO0FDMEJSO0FEbUJBO0VBWEUsY0FqQ087QUM2QlQ7QURtQkE7RUFmRSxjQTlCSztBQzhCUDtBRG1CQTtFQW5CRSxjQS9CSTtBQ21DTjtBRG1CQTtFQUNFLFdBQUE7RUF4QkEsWUF5Qm9CO0VBQ3BCLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNoQkY7QURvQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7QURtQkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDbkJKO0FEcUJJO0VBQ0UseUJBQUE7QUNuQk47QURzQkk7RUFDRSwwQkFBQTtFQUVBLHlCQUFBO0FDckJOO0FEeUJFO0VBQ0UsMkJBQUE7QUN2Qko7QUQwQkU7RUFDRSx3QkFBQTtBQ3hCSjtBRDhCRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQTFGRixZQTJGc0I7QUM5QnhCO0FEZ0NJO0VBQ0UsaUJBQUE7QUM5Qk47QURnQ007RUFDRSxpQkFBQTtBQzlCUjtBRG1DQzs7Ozs7Ozs7Ozs7V0FBQTtBQWFEOzs7Ozs7Ozs7OztnQkFBQSIsImZpbGUiOiJpbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kYnJlYWstc21hbGw6IDUwMHB4O1xyXG4kYnJlYWstbGFyZ2U6IDEyMDBweDtcclxuJGJsdWU6ICMyOWI2ZjY7XHJcbiRncmVlbjogIzljY2M2NTtcclxuJHB1cnBsZTogI2JhNjhjODtcclxuJG9yYW5nZTogI2Y1N2MwMDtcclxuJHJlZDogI2VmNTM1MDtcclxuJGN5YW46ICM0ZGQwZTE7XHJcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjZmZhNzI2O1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjZmY5ODAwO1xyXG4vKjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcclxuICAvL2hlaWdodDogODB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0qL1xyXG4uZmxpcGljb257XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcclxuICAgIHdpZHRoOiA0JTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UpIHtcclxuICAgIHdpZHRoOiAxLjUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxuICB9XHJcbn1cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkFuZGFsZSBNb25vIFdUXCIsIFwiQW5kYWxlIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLFxyXG4gICAgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLFxyXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLFxyXG4gICAgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiB0ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBAaW5jbHVkZSB0ZXh0LWNvbG9yKCRibHVlKTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBAaW5jbHVkZSB0ZXh0LWNvbG9yKCRncmVlbik7XHJcbn1cclxuXHJcbi5wdXJwbGUge1xyXG4gIEBpbmNsdWRlIHRleHQtY29sb3IoJHB1cnBsZSk7XHJcbn1cclxuXHJcbi5jeWFuIHtcclxuICBAaW5jbHVkZSB0ZXh0LWNvbG9yKCRjeWFuKTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgQGluY2x1ZGUgdGV4dC1jb2xvcigkcmVkKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIEBpbmNsdWRlIHRleHQtY29sb3Iod2hpdGUpO1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOi0yMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX19zaWRlIHtcclxuICAgIGhlaWdodDogODAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDEuNXJlbSA0cmVtIHJnYmEoYmxhY2ssIDAuNCk7XHJcblxyXG4gICAgJi0tZnJvbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWJhY2sge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyICZfX3NpZGUtLWZyb250IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgJl9fc2lkZS0tYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vRlJPTlQgU0lERSBTVFlMSU5HXHJcbiAgJl9fY29udCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jdGEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBAaW5jbHVkZSB0ZXh0LWNvbG9yKHdoaXRlKTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcblxyXG4gICAgICAmID4gLnNwYWNlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gLyogICAjY29udGVudGZyb250IHtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7XHJcbiAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICB9ICAqL1xyXG5cclxuLypcclxuICAgICAgICAjY29udGVudGJhY2sge1xyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsKzEpIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgKi9cclxuXHJcblxyXG4gICAgICAgICAgICAiLCIvKjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgLy9oZWlnaHQ6IDgwdnc7XG4gIGhlaWdodDogMTAwJTtcbn0qL1xuLmZsaXBpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmxpcGljb24ge1xuICAgIHdpZHRoOiA0JTtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5mbGlwaWNvbiB7XG4gICAgd2lkdGg6IDEuNSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbioge1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQW5kYWxlIE1vbm8gV1RcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIiwgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMyOWI2ZjY7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjOWNjYzY1O1xufVxuXG4ucHVycGxlIHtcbiAgY29sb3I6ICNiYTY4Yzg7XG59XG5cbi5jeWFuIHtcbiAgY29sb3I6ICM0ZGQwZTE7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IC0yMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkX19zaWRlIHtcbiAgaGVpZ2h0OiA4MDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMS41cmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn1cbi5jYXJkX19zaWRlLS1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG4uY2FyZDpob3ZlciAuY2FyZF9fc2lkZS0tZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG4uY2FyZDpob3ZlciAuY2FyZF9fc2lkZS0tYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi5jYXJkX19jb250IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkX19jdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZF9fY3RhIHAge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5jYXJkX19jdGEgcCA+IC5zcGFjZSB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4vKiAgICNjb250ZW50ZnJvbnQge1xuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICB9XG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UpIHtcbiAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuXG4gICAgICAgICB9XG5cbiAgICAgICB9ICAqL1xuLypcbiAgICAgICAgI2NvbnRlbnRiYWNrIHtcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCsxKSB7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/aboutme */ "./src/app/constant/aboutme.ts");
/* harmony import */ var _contact_mailsender_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/mailsender.service */ "./src/app/pages/contact/mailsender.service.ts");





let InicioComponent = class InicioComponent {
    constructor(sidebarService, mailSender) {
        this.sidebarService = sidebarService;
        this.mailSender = mailSender;
        /**/
        this.name = 'Angular';
        this.aboutme = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"];
        this.lineas = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].presentacion;
        this.json = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].json;
        this.llave1 = "{";
        this.llave2 = "}";
    }
    colapsar() {
        this.sidebarService.collapse();
    }
    toggle() {
        this.sidebarService.toggle(true);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        if (this.innerWidth < 850) {
            this.colapsar();
        }
        /* Mail Check */
        let mensaje;
        mensaje = {
            "mail": "Inicio",
            "mensaje": "Connection works"
        };
        this.mailSender.sendMailPOST(mensaje, false);
    }
};
InicioComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] },
    { type: _contact_mailsender_service__WEBPACK_IMPORTED_MODULE_4__["MailsenderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw', { static: false })
], InicioComponent.prototype, "typewriterElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw2', { static: false })
], InicioComponent.prototype, "typewriterElement2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw3', { static: false })
], InicioComponent.prototype, "typewriterElement3", void 0);
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.component.scss */ "./src/app/pages/inicio/inicio.component.scss")).default]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n::ng-deep nb-layout-column {\n  //height: 80vw;\n  height: 100%;\n}*/\n#myImg {\n  border-radius: 50%;\n  width: 100%;\n  max-width: 200px;\n}\n#ItemsMenu {\n  padding-bottom: 30px;\n}\n#flipcardmax {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 25px;\n  /*@media screen and (max-width: $break-small) {\n    margin-top:10%\n   }\n   @media screen and (min-width: $break-large) {\n    margin-top:%\n\n\n   }*/\n}\n.Icon {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  background: #16161a;\n  cursor: pointer;\n}\n.iconsContainer {\n  padding-top: 20%;\n  justify-content: center;\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  text-align: center;\n  justify-content: center;\n}\n.contactIcon {\n  width: 20%;\n  margin: 15%;\n  margin-left: 0;\n  text-align: center;\n  justify-content: center;\n}\n.icono {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9uYXZiYXIvQzpcXFVzZXJzXFxEcmFrZVxcY29kZVxcd2ViY3ZcXHNyY1xcYXBwXFxwYWdlcy8uLlxcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURHRTtFQUNFLG9CQUFBO0FDQUo7QURNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0E7Ozs7Ozs7S0FBQTtBQ0lKO0FET0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFHQSxlQUFBO0FDTko7QURZRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNSSjtBRFlFO0VBR0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ2JKIiwiZmlsZSI6Ii4uL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xyXG4gIC8vaGVpZ2h0OiA4MHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxufSovXHJcbiNteUltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gICNJdGVtc01lbnV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xyXG4gIH1cclxuXHJcbiAgJGJyZWFrLXNtYWxsOiA1MDBweDtcclxuICAkYnJlYWstbGFyZ2U6IDUwMXB4O1xyXG5cclxuICAjZmxpcGNhcmRtYXh7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAvKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkge1xyXG4gICAgICBtYXJnaW4tdG9wOjEwJVxyXG4gICAgIH1cclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UpIHtcclxuICAgICAgbWFyZ2luLXRvcDolXHJcblxyXG4gICAgICBcclxuICAgICB9Ki9cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLkljb257XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJhY2tncm91bmQ6IzE2MTYxYTtcclxuICAgIC8vd2lkdGg6MTAwcHg7XHJcbiAgICAvL2hlaWdodDoxMDBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIFxyXG5cclxuICAgXHJcbiAgfVxyXG5cclxuICAuaWNvbnNDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDoyMCU7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0SWNvbntcclxuICBcclxuICAgIC8vcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgbWFyZ2luIDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgXHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWNvbm97XHJcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MjVweDtcclxuIFxyXG4gIH1cclxuXHJcbiAgIiwiLypcbjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgLy9oZWlnaHQ6IDgwdnc7XG4gIGhlaWdodDogMTAwJTtcbn0qL1xuI215SW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuI0l0ZW1zTWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4jZmxpcGNhcmRtYXgge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIC8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7XG4gICAgbWFyZ2luLXRvcDoxMCVcbiAgIH1cbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xuICAgIG1hcmdpbi10b3A6JVxuXG5cbiAgIH0qL1xufVxuXG4uSWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogIzE2MTYxYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbnNDb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3RJY29uIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbm8ge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/aboutme */ "./src/app/constant/aboutme.ts");




let NavbarComponent = class NavbarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.avatar = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].avatar;
        this.link = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].gmailpdf;
        this.items = [
            {
                title: 'Inicio',
                icon: 'hash-outline',
                link: '/',
            },
            {
                title: 'Curriculum Vitae',
                icon: 'file-outline',
                link: '/cv',
            },
            {
                title: 'ChatBot',
                icon: { icon: 'message-square-outline', pack: 'eva' },
                link: '/Chat',
            },
            {
                title: 'Contacto',
                icon: 'email-outline',
                link: '/Contacto',
            },
        ];
        this.collapsed = false;
    }
    /*colapsar(){
      this.sidebarService.collapse();
    }*/
    toggle() {
        this.sidebarService.toggle(true);
        if (this.collapsed) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;
        }
        this.innerWidth = window.innerWidth;
        // console.log(this.innerWidth);
        if (this.innerWidth < 850) {
            if (this.collapsed) {
                this.collapsed = false;
            }
            else {
                this.collapsed = true;
            }
        }
        else {
        }
        return false;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        //console.log(this.innerWidth);
        if (this.innerWidth < 1200) {
            this.collapsed = true;
        }
    }
    onClickedOutside(e) {
        //console.log('Clicked outside:', e);
        console.log(e['screenY']);
        if (!this.collapsed && !(e['screenX'] > 19 && e['screenX'] < 40 && e['screenY'] > 128 && e['screenY'] < 151)) {
            this.sidebarService.toggle(true);
            this.collapsed = true;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Drake\code\webcv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map