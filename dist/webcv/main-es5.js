(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n <app-navbar></app-navbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nb-chat title=\"Maximo\" size=\"medium\" status=\"primary\">\n    <nb-chat-message *ngFor=\"let message of messages\"\n                     [type]=\"message.type\"\n                     [message]=\"message.text\"\n                     [reply]=\"message.reply\"\n                     [sender]=\"message.user.name\"\n                     [date]=\"message.date\"\n                     [files]=\"message.files\"\n                     [quote]=\"message.quote\"\n                     [latitude]=\"message.latitude\"\n                     [longitude]=\"message.longitude\"\n                     [avatar]=\"message.user.avatar\"></nb-chat-message>\n    <nb-chat-form (send)=\"sendMessage($event, 'Visitante', 'http://www.reactiongifs.com/r/wnd1.gif', true)\" [showButton]=\"false\" [dropFiles]=\"true\">\n    </nb-chat-form>\n  </nb-chat>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"largo\">\n    <nb-card-body fullWidth>\n        <!--\n        <nb-icon icon=\"phone-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon>\n-->\n\n\n        <button nbButton disabled ghost status=\"primary\"><nb-icon icon=\"phone-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon> 099 94 15 16</button>\n        <button nbButton disabled ghost shape='round' status=\"success\"><a target='blank_' href='https://www.linkedin.com/in/m%C3%A1ximo-lanza/'><nb-icon icon=\"linkedin-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></a></button>\n        <button nbButton ghost status=\"danger\"><nb-icon icon=\"google-outline\" [options]=\"{ animation: { type: 'zoom' } }\" style=\"margin-right: 0px;padding-right:0px;\"></nb-icon>mail<nb-icon icon=\"at-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n       \n  <!--\n      <nb-actions size=\"small\" >\n        <nb-action icon=\"at-outline\"></nb-action>\n        <nb-action icon=\"linkedin-outline\"></nb-action>\n          <nb-action title='099 94 15 16' icon=\"phone-outline\"></nb-action> \n        <nb-action icon=\"google-outline\"></nb-action>\n      \n       \n      </nb-actions>\n     --> \n      \n\n    </nb-card-body>\n  </nb-card>\n\n\n  \n  <nb-card>\n    <nb-card-body class=\"example-items-rows\">\n        <input type=\"text\" nbInput fullWidth fieldSize=\"small\" placeholder=\"Nombre\">\n        <input type=\"text\" nbInput fullWidth fieldSize=\"small\" placeholder=\"email@ejemplo.com\">\n        <input type=\"text\" nbInput fullWidth fieldSize=\"small\" placeholder=\"Asunto\">\n        <textarea nbInput fullWidth placeholder=\"Mensaje\"></textarea>\n        <button fullWidth nbButton outline status=\"info\">Enviar</button>\n    </nb-card-body>\n  </nb-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nb-card size=\"large\">\n        <nb-card-body>\n          <nb-stepper orientation=\"horizontal\">\n            <nb-step label=\"Experiencia\">\n                <h5>Experiencia</h5>\n              <h6>Hospital Britanico</h6>\n              <p class=\"lorem\">\n                Me desempeño en las tareas de desarrollo en Genexus (nuevas funcionalidades y modificación de funcionalidades existetes).\n                Control y seguimiento de incidentes.\n                Analisis de datos con SQL Server Managemen y generación de reportes.\n                Integración de grupo de innovación del sector de Desarrollo.\n                Atención telefónica de 2do nivel y acceso remoto.\n              </p>\n              <h6>Emestudio</h6>\n              <p class=\"lorem\">\n                Realizé tareas de soporte técnico de hardware y software de clientes de forma presencial y remota.\n                Conducción de vehículo de la empresa.\n                Capacitación de SoftRestaurant a clientes.\n                Seguimiento de usabilidad del sistema en locales comerciales de los clientes.\n              </p>\n              <button nbButton disabled nbStepperPrevious><nb-icon icon=\"arrow-back-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n              <button nbButton nbStepperNext><nb-icon icon=\"arrow-forward-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n            </nb-step>\n            <nb-step label=\"Estudios\">\n              <h5>Estudios</h5>\n              <h6>Tecnologo en Informática</h6>\n              <p class=\"lorem\">\n                Año de inicio: 2015\n                Estado: Avanzado (En curso)\n                Instituto: CEPT - Utu Buceo\n                Localidad: Montevideo\n              </p>\n              <h6>Bachillerato de Informátcia</h6>\n              <p class=\"lorem\">\n                  Año de inicio: 2010\n                  Estado: Finalizado 2012\n                  Instituto: UTU Bachillerato de Informática - Hermenegildo Sabat\n                  Localidad: Florida\n              </p>\n              <button nbButton  nbStepperPrevious><nb-icon icon=\"arrow-back-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n              <button nbButton nbStepperNext><nb-icon icon=\"arrow-forward-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n            </nb-step>\n            <nb-step label=\"Habilidades\">\n              <h5>Habilidades</h5>\n          \n              <p class=\"lorem\">\n                Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum,\n                sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis\n                viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel\n                placerat quis, lobortis in ligula.\n              </p>\n              <p class=\"lorem\">\n                Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam\n                sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui\n                eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum.\n              </p>\n              <button nbButton  nbStepperPrevious><nb-icon icon=\"arrow-back-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n              <button nbButton nbStepperNext><nb-icon icon=\"arrow-forward-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n            </nb-step>\n            <nb-step label=\"Referencias\">\n              <h5>Referencias</h5>\n              <p class=\"lorem\">\n                Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum,\n                sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis\n                viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel\n                placerat quis, lobortis in ligula.\n              </p>\n              <p class=\"lorem\">\n                Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam\n                sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui\n                eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum.\n              </p>\n              <button nbButton  nbStepperPrevious><nb-icon icon=\"arrow-back-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n              <button nbButton disabled nbStepperNext><nb-icon icon=\"arrow-forward-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon></button>\n            </nb-step>\n          </nb-stepper>\n        </nb-card-body>\n      </nb-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n   \n   <nb-layout-header subheader fixed>\n        <nb-user \n        name=\"Maximo Lanza\" \n        title=\"Developer\"\n        picture=\"https://i.imgur.com/fi0KwgG.png\"\n        ></nb-user>   \n </nb-layout-header>\n\n    <nb-sidebar >\n        \n       <!--\n              <button nbButton fullWidth status=\"primary\">Curriculum</button>\n              <button nbButton fullWidth status=\"success\">CV</button>\n              <button nbButton fullWidth status=\"danger\">Danger</button>\n              \n-->\n<nb-menu [items]=\"items\"></nb-menu>\n    </nb-sidebar>\n\n    <nb-layout-column>\n        <router-outlet></router-outlet>\n    </nb-layout-column>\n  </nb-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cv/cv.component */ "./src/app/pages/cv/cv.component.ts");
            /* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
            /* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
            var routes = [
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
                    redirectTo: '/Chat',
                    pathMatch: 'full'
                }, {
                    path: 'Contacto',
                    component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    data: { title: 'Contacto' }
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'webcv';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                        _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"],
                        _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardFooterComponent"]
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
                        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"]
                    ],
                    providers: [_pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/constant/config.ts": 
        /*!************************************!*\
          !*** ./src/app/constant/config.ts ***!
          \************************************/
        /*! exports provided: RESTSERVER, EndPoints */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTSERVER", function () { return RESTSERVER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPoints", function () { return EndPoints; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var RESTSERVER = 'http://localhost:3001';
            var EndPoints = {
                api: '/api/'
            };
            /***/ 
        }),
        /***/ "./src/app/pages/chat/chat.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/pages/chat/chat.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("::ng-deep nb-layout-column {\n  justify-content: center;\n  display: flex;\n}\n\nnb-chat {\n  width: 500px;\n  height: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9DOlxcVXNlcnNcXERyYWtlXFxjb2RlXFx3ZWJjdi9zcmNcXGFwcFxccGFnZXNcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgbmItY2hhdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwdnc7XHJcbiAgfSIsIjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm5iLWNoYXQge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogODB2dztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/chat/chat.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/chat/chat.component.ts ***!
          \**********************************************/
        /*! exports provided: ChatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function () { return ChatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/pages/chat/chat.service.ts");
            var ChatComponent = /** @class */ (function () {
                function ChatComponent(chatService) {
                    this.chatService = chatService;
                    this.messages = [];
                    /*this.chatService.getMessage('welcome').subscribe(data => {
                      this.respuesta= data;
                      //this.messages.push(botReply2);
                    });*/
                    //this.chatService.getMessage('bienvenido').subscribe(data => {
                    //Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.
                    // this.respuesta= data.toString();
                    //  this.messages = [];
                    this.messages.push({
                        text: 'Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.',
                        date: new Date(),
                        reply: false,
                        user: {
                            name: 'Maximo',
                            // avatar: 'https://i.gifer.com/no.gif',
                            avatar: 'https://i.imgur.com/fi0KwgG.png',
                        },
                    });
                    //});
                    //this.messages. = 
                    // this.chatService.getMessage('');
                }
                ChatComponent.prototype.sendMessage = function (event, userName, avatar, reply) {
                    var _this = this;
                    var files = !event.files ? [] : event.files.map(function (file) {
                        return {
                            url: file.src,
                            type: file.type,
                            icon: 'file-text-outline',
                        };
                    });
                    this.chatService.getMessage(event.message).subscribe(function (data) {
                        _this.respuesta = data;
                        //this.messages.push(botReply2);
                    });
                    this.messages.push({
                        text: event.message,
                        date: new Date(),
                        reply: reply,
                        type: files.length ? 'file' : 'text',
                        files: files,
                        user: {
                            name: userName,
                            avatar: avatar,
                        },
                    });
                    /*
                        const botReply : breply = {
                          text: 'Hola!',
                            date: new Date(),
                            reply: false,
                            user: {
                              name: 'Maximo',
                              avatar: 'https://i.gifer.com/no.gif',
                            },
                        }*/
                    //if (botReply) {
                    setTimeout(function () {
                        _this.messages.push({
                            text: _this.respuesta,
                            date: new Date(),
                            reply: false,
                            user: {
                                name: 'Maximo',
                                // avatar: 'https://i.gifer.com/no.gif',
                                avatar: 'https://i.imgur.com/fi0KwgG.png',
                            },
                        });
                    }, 500);
                };
                //}
                ChatComponent.prototype.ngOnInit = function () {
                };
                return ChatComponent;
            }());
            ChatComponent.ctorParameters = function () { return [
                { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
            ]; };
            ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/chat/chat.component.scss")).default]
                })
            ], ChatComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/chat/chat.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/pages/chat/chat.service.ts ***!
          \********************************************/
        /*! exports provided: ChatService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function () { return ChatService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/config */ "./src/app/constant/config.ts");
            var ChatService = /** @class */ (function () {
                function ChatService(http) {
                    this.http = http;
                    this.server = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["RESTSERVER"];
                    this.api = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["EndPoints"].api;
                    this.url = this.server + this.api;
                }
                /*
                  httpOptions ={
                    headers : new HttpHeaders({
                      'Content-Type': 'text',
                      'Access-Control-Allow-Origin': 'http://192.168.1.4:3001',
                      'Access-Control-Allow-Credentials': 'true'
                    })
                  }*/
                ChatService.prototype.getMessage = function (Message) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'text',
                        })
                    };
                    console.log(this.url + Message);
                    return this.http.get(this.url + Message.toString(), { responseType: 'text' });
                };
                return ChatService;
            }());
            ChatService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChatService);
            /***/ 
        }),
        /***/ "./src/app/pages/contact/contact.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/pages/contact/contact.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".largo {\n  width: 100%;\n}\n\ninput, textarea {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXERyYWtlXFxjb2RlXFx3ZWJjdi9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ28ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iLCIubGFyZ28ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/contact/contact.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/contact/contact.component.ts ***!
          \****************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/cv/cv.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/pages/cv/cv.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N2L2N2LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/cv/cv.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/pages/cv/cv.component.ts ***!
          \******************************************/
        /*! exports provided: CvComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function () { return CvComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CvComponent = /** @class */ (function () {
                function CvComponent() {
                }
                CvComponent.prototype.ngOnInit = function () {
                };
                return CvComponent;
            }());
            CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cv',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cv.component.scss */ "./src/app/pages/cv/cv.component.scss")).default]
                })
            ], CvComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/navbar/navbar.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/navbar/navbar.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/navbar/navbar.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/navbar/navbar.component.ts ***!
          \***************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
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
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Drake\code\webcv\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map