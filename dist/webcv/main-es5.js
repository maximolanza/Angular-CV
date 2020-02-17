function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n \r\n <div class=\"container\"><app-navbar></app-navbar></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\">\r\n<nb-chat id=\"chat\" title=\"Maximo\" size=\"medium\" status=\"primary\">\r\n    <nb-chat-message *ngFor=\"let message of messages\"\r\n                     [type]=\"message.type\"\r\n                     [message]=\"message.text\"\r\n                     [reply]=\"message.reply\"\r\n                     [sender]=\"message.user.name\"\r\n                     [date]=\"message.date\"\r\n                     [files]=\"message.files\"\r\n                     [quote]=\"message.quote\"\r\n                     [latitude]=\"message.latitude\"\r\n                     [longitude]=\"message.longitude\"\r\n                     [avatar]=\"message.user.avatar\"></nb-chat-message>\r\n    <nb-chat-form (send)=\"sendMessage($event, 'Visitante', 'https://i.imgur.com/6cdEwll.png', true)\" [showButton]=\"true\" [dropFiles]=\"true\">\r\n    </nb-chat-form>\r\n  </nb-chat>\r\n</div>\r\n  <!--\r\n    ::ng-deep nb-layout-column {\r\n    justify-content: center;\r\n    display: flex;\r\n  }\r\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <nb-card class=\"mail\" [nbSpinner]=\"loading\"\r\n  nbSpinnerStatus=\"info\"\r\n  nbSpinnerSize=\"large\"\r\n  nbSpinnerMessage=\"\">\r\n    <nb-card-header id=\"headermail\">Enviar un mail</nb-card-header>\r\n    <nb-card-body class=\"example-items-rows\">\r\n        <input id=\"inputMail\" type=\"text\" nbInput fullWidth fieldSize=\"small\" placeholder=\"Nombre/mail\" [(ngModel)]=\"inputMail\">\r\n         <textarea id=\"inputMessage\" nbInput fullWidth placeholder=\"Mensaje\" [(ngModel)]=\"inputMensaje\"></textarea>\r\n        <button fullWidth nbButton outline status=\"info\" (click)=\"sendMailSpinner();\" >Enviar</button>\r\n    </nb-card-body>\r\n  </nb-card>\r\n  \r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCvCvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div class=\"resume-wrapper\"> <!-- EXPERIENCE  -->\r\n  <section class=\"experience section-padding\">\r\n      <div class=\"container\">\r\n        <h3 class=\"first-title exp\">Experiencia</h3>\r\n\r\n        <div class=\"experience-wrapper\">\r\n          <div class=\"company-wrapper clearfix\">\r\n            <div class=\"experience-title\">Hospital Británico</div>\r\n            <div class=\"time\">Set 2017 - Actualidad</div>\r\n          </div>\r\n\r\n          <div class=\"job-wrapper clearfix\">\r\n            <div class=\"experience-title\">Desarrollador GeneXus </div>\r\n            <div class=\"company-description\">\r\n                <ul *ngFor=\"let t of tareasHB\">\r\n                    <li>\r\n                      {{ t.descripcion }}\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"company-wrapper clearfix\">\r\n            <div class=\"experience-title\">Emestudio</div>\r\n            <div class=\"time\">Enero 2015 - Mayo 2016</div>\r\n          </div>\r\n\r\n           <div class=\"job-wrapper clearfix\">\r\n            <div class=\"experience-title\">Soporte Técnico</div>\r\n            <div class=\"company-description\">\r\n                <ul *ngFor=\"let t of tareasE\">\r\n                    <li>\r\n                      {{ t.descripcion }}\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div><!--Skill experience-->\r\n      </div>\r\n  </section>\r\n\r\n  <section class=\"profile section-padding\">\r\n      <div class=\"container\">\r\n          <h3 class=\"first-title hab\">Habilidades</h3>\r\n          <div>\r\n          <h5 class=\"profile-subtitle\"> Java</h5>\r\n          <hr>\r\n          <div id=\"tagcontainer\" >\r\n              <span *ngFor=\"let s of skillsJava\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\r\n\r\n            </div>\r\n            <hr>\r\n          </div>\r\n\r\n          <div>\r\n              <h5 class=\"profile-subtitle\"> Angular</h5>\r\n              <hr>\r\n              <div id=\"tagcontainer\" >\r\n                  <span *ngFor=\"let s of skillsAngular\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\r\n\r\n                </div>\r\n                <hr>\r\n              </div>\r\n\r\n              <div>\r\n                  <h5 class=\"profile-subtitle\"> NodeJs (Básico)</h5>\r\n                  <hr>\r\n                  <div id=\"tagcontainer\" >\r\n                      <span *ngFor=\"let s of skillsNodeJs\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\r\n\r\n                    </div>\r\n                    <hr>\r\n                  </div>\r\n                  <div>\r\n                      <h5 class=\"profile-subtitle\"> Otros</h5>\r\n                      <hr>\r\n                      <div id=\"tagcontainer\" >\r\n                          <span *ngFor=\"let s of skillsOtros\" class=\"badge badge-pill badge-light\"> <font color=\"white\">{{s.tag}}</font> </span>\r\n\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n        </div>\r\n    </section>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesError404Error404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"content\">\r\n    <h1 class=\"text404 slide-right\">¡ERROR 404!</h1>\r\n    <p id=\"demo\"></p>\r\n    <p id=\"demo2\"></p>\r\n    <p id=\"demo3\"></p>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"content\">\r\n  <font size=\"16px\" class=\"text404 slide-right scale-down-center\"><span class=\"blue\">alert</span><span>(<span\r\n        class=\"text404\">'Hola!'</span>)</span></font>\r\n</div>\r\n\r\n<div>\r\n  <div *ngFor=\"let l of lineas\">\r\n    <p> <span class=\"text404\">{{l.linea}}</span></p>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\r\n\r\n  <nb-layout-header fixed>\r\n\r\n\r\n    <a href=\"#\" (click)=\"toggle()\">\r\n      <i class=\"nb-menu\">\r\n      </i>\r\n      <nb-icon icon=\"menu-outline\" [options]=\"{ animation: { type: 'zoom' } }\">\r\n      </nb-icon>\r\n    </a>\r\n    <nb-card-body>\r\n      Máximo Lanza\r\n    </nb-card-body>\r\n\r\n    <a style=\"margin-left: auto;text-decoration: none;padding-left:5%;\" target=\"_blank\"\r\n      href='https://drive.google.com/file/d/1d31iKUPrkCTVOkfOkPvkujEVJ4io-bdP/view?usp=sharing'>\r\n      PDF <nb-icon icon=\"download-outline\" [options]=\"{ animation: { type: 'flip' } }\"></nb-icon>\r\n    </a>\r\n\r\n  </nb-layout-header>\r\n\r\n\r\n  <!-- SIDEBAR -->\r\n  <nb-sidebar (clickOutside)=\"onClickedOutside($event)\" responsive=\"true\">\r\n    <nb-user *ngIf=\"collapsed\" title=''  name='' onlyPicture='true' shape=\"round\" picture={{avatar}} size=\"small\">\r\n\r\n    </nb-user>\r\n    <div class=\"imgContainer\">\r\n      <img *ngIf=\"!collapsed\" id=\"myImg\" src={{avatar}} alt=\"Máximo Lanza\" />\r\n    </div>\r\n\r\n    <nb-menu id=\"ItemsMenu\" [items]=\"items\"></nb-menu>\r\n\r\n    <div class=\"iconsContainer\">\r\n      <div id=\"wrapper\">\r\n\r\n        <a class=\"contactIcon\" target='blank_' href='https://www.linkedin.com/in/m%C3%A1ximo-lanza/'>\r\n          <nb-icon class=\"icono\" status=\"info\" nbTooltip=\"LinkedIn\" nbTooltipPlacement=\"top\" icon=\"linkedin-outline\"\r\n            [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon>\r\n        </a>\r\n\r\n\r\n        <a class=\"contactIcon middle\" href=\"tel:+59899941516\">\r\n          <nb-icon class=\"icono\" status=\"success\" nbTooltip=\"099 94 15 16\" nbTooltipPlacement=\"top\" icon=\"phone-outline\"\r\n            [options]=\"{ animation: { type: 'zoom' } }\"> </nb-icon>\r\n        </a>\r\n        <a class=\"contactIcon\" href=\"mailto:max.slanza@gmail.com\">\r\n          <nb-icon class=\"icono\" status=\"danger\" id=\"mail\" nbTooltip=\"max.slanza@gmail.com\" nbTooltipPlacement=\"top\"\r\n            icon=\"at-outline\" [options]=\"{ animation: { type: 'zoom' } }\"></nb-icon>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </nb-sidebar>\r\n\r\n  <nb-layout-column>\r\n    <router-outlet ></router-outlet>\r\n  </nb-layout-column>\r\n</nb-layout>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/cv/cv.component */
    "./src/app/pages/cv/cv.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/inicio/inicio.component */
    "./src/app/pages/inicio/inicio.component.ts");
    /* harmony import */


    var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/error404/error404.component */
    "./src/app/pages/error404/error404.component.ts");

    var routes = [{
      path: 'cv',
      component: _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"],
      data: {
        title: 'Curriculum Vitae'
      }
    }
    /*,{
    path: 'Chat',
    component: ChatComponent,
    data: { title: 'Chat' }
    },*/
    , {
      path: 'Chat',
      redirectTo: '/404'
    }, {
      path: '',
      redirectTo: '/Inicio',
      pathMatch: 'full'
    }, {
      path: 'Contacto',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
      data: {
        title: 'Contacto'
      }
    }, {
      path: 'Inicio',
      component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"],
      data: {
        title: 'Inicio'
      }
    }, {
      path: '404',
      component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"],
      data: {
        title: '404'
      }
    }, {
      path: '**',
      redirectTo: '/404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep nb-layout-column {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtbGFuemFcXGFuZ3VsYXJDVlxcQW5ndWxhci1DVi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmItbGF5b3V0LWNvbHVtbiB7XHJcbiAgICAvL2hlaWdodDogODB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IiwiOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Máximo Lanza';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/cv/cv.component */
    "./src/app/pages/cv/cv.component.ts");
    /* harmony import */


    var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/chat/chat.component */
    "./src/app/pages/chat/chat.component.ts");
    /* harmony import */


    var _pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/chat/chat.service */
    "./src/app/pages/chat/chat.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/inicio/inicio.component */
    "./src/app/pages/inicio/inicio.component.ts");
    /* harmony import */


    var _pages_contact_mailsender_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/contact/mailsender.service */
    "./src/app/pages/contact/mailsender.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib_esmodule/index.js");
    /* harmony import */


    var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/error404/error404.component */
    "./src/app/pages/error404/error404.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _pages_cv_cv_component__WEBPACK_IMPORTED_MODULE_9__["CvComponent"], _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__["InicioComponent"], _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_18__["Error404Component"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({
        name: 'dark'
      }), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbChatModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(), ng_click_outside__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSpinnerModule"]],
      providers: [_pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"], _pages_contact_mailsender_service__WEBPACK_IMPORTED_MODULE_15__["MailsenderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/constant/aboutme.ts":
  /*!*************************************!*\
    !*** ./src/app/constant/aboutme.ts ***!
    \*************************************/

  /*! exports provided: aboutme */

  /***/
  function srcAppConstantAboutmeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "aboutme", function () {
      return aboutme;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var aboutme = {
      'avatar': 'https://i.imgur.com/bY0ksKF.png',
      'nacimiento': '1993-08-21',
      'lugarnacimiento': 'Montevideo',
      'pnombre': 'Máximo',
      'snombre': 'Santiago',
      'papellido': 'Lanza',
      'sapellido': 'Aguirre',
      'direccion': '18 de Julio 2030',
      'gmailpdf': 'https://drive.google.com/file/d/1roXSx84yFtM2W7mNXELFXFcfY0bPfE5l/view?usp=sharing',
      'presentacion': [
      /*{'principal':'si','linea' :'Con un perfil técnico y práctico, me defino como una persona autodidacta,'  },
      {'principal':'no','linea' :'responsable y proactivo, con fuerte orientación al cumplimiento de'  },
      {'principal':'no','linea' :'objetivos y una marcada tendencia a la resolución de problemas.'  },
      {'principal':'si','linea' :' '  },
      {'principal':'si','linea' :'Me encuentro en búsqueda de oportunidades laborales en empresas de desarrollo de software en las'  },
      {'principal':'no','linea' :'cuales poder poner en práctica mis conocimientos sobre el rubro tecnológico.'},
      */

      /*
         {'linea' :' Con un perfil técnico y práctico, me defino como una persona autodidacta, responsable y proactiva, con fuerte orientación al cumplimiento de objetivos y una marcada tendencia a la resolución de problemas.'  },
         {'linea' :' Me encuentro en búsqueda de oportunidades laborales en empresas de desarrollo de software en las cuales poder poner en práctica mis conocimientos sobre el rubro tecnológico.'},
          */
      {
        linea: ''
      }, {
        linea: 'Soy Jr Developer'
      }, {
        linea: 'Estudiante en el último año de la carrera de Tecnólogo en Informatica.'
      }, {
        linea: 'Gran apasionado por el desarrollo de software y el constante aprendizaje.'
      }, {
        linea: 'Si buscas una persona con mucha motivación'
      }, {
        linea: '¡No dudes en contactarme!'
      }],
      'json': [
      /*  {'cabezal' :' {  '},
        {'cabezal' :'       \'nombres\' : \'Máximo Santiago\', '},
        {'cabezal' :'       \'apellidos\' : \'Lanza Aguirre\', >'},
        {'cabezal' :'       \'nacimiento\' : \'1993-08-21\', '},
        {'cabezal' :'       \'licencia\' : \'Auto - Categoría A\', '},
        {'cabezal' :'       \'carnetDeSalud\': \'Si\', '},
        {'cabezal' :' }'},
        */
      {
        'cabezal': 'nombres',
        'value': 'Máximo Santiago'
      }, {
        'cabezal': 'apellidos',
        'value': 'Lanza Aguirre'
      }, {
        'cabezal': 'nacimiento',
        'value': '1993-08-21'
      }, {
        'cabezal': 'licencia',
        'value': 'Auto - Categoría A'
      }, {
        'cabezal': 'carnetDeSalud',
        'value': 'Si'
      }]
    };
    /***/
  },

  /***/
  "./src/app/constant/config.ts":
  /*!************************************!*\
    !*** ./src/app/constant/config.ts ***!
    \************************************/

  /*! exports provided: RESTSERVER, EndPoints */

  /***/
  function srcAppConstantConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESTSERVER", function () {
      return RESTSERVER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EndPoints", function () {
      return EndPoints;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RESTSERVER = 'https://maxibackend.herokuapp.com'; //export  const RESTSERVER = 'http://localhost:8081';

    var EndPoints = {
      api: '/api/',
      mail: '/mail/',
      send: '/send'
    };
    /***/
  },

  /***/
  "./src/app/constant/experiencia.ts":
  /*!*****************************************!*\
    !*** ./src/app/constant/experiencia.ts ***!
    \*****************************************/

  /*! exports provided: experiencia */

  /***/
  function srcAppConstantExperienciaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "experiencia", function () {
      return experiencia;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var experiencia = [{
      "empresa": "Hospital Británico",
      "desde": "2017-09-25",
      "hasta": "actualidad",
      "caego": "Desarrollador GeneXus - Sporte de 2do nivel",
      "Tareas": [{
        "descripcion": "Desarrollo aplicaciones web con GeneXus y participo en la actualización de aplicaciones web existentes en GeneXus Evo1, Evo2 y Evo3."
      }, {
        "descripcion": "Realizo control y seguimiento de incidentes en el gestor GLPI apoyandome con SQL Server Management para el análisis de la información y las Knowleadge Bases de distintos sistemas para la revisión de código."
      }, {
        "descripcion": "Me encargo de la centralización de las llamadas del sector de Desarrollo como 2do nivel de Soporte a los sistemas."
      }, {
        "descripcion": "Soy responsable de generar scripts SQL para los reportes solicitados de urgencia elevada, pre-automatización."
      }, {
        "descripcion": "Realizo controles de integración de sistemas haciendo seguimientos de canales en Mirth para mantener una consistencia de los servicios.."
      }, {
        "descripcion": "Integro el grupo de innovación del sector de Desarrollo."
      }, {
        "descripcion": "Me encargo de controlar el correcto funcionamiento y contínua comunicación de información  de integraciones mediante Mirth, con sistemas de proveedores."
      }]
    }, {
      "empresa": "Emestudio LTDA",
      "desde": "2015-01-01",
      "hasta": "2016-05-01",
      "caego": "Soporte técnico - Capacitador",
      "Tareas": [{
        "descripcion": "Me encargué de realizar soprote técnico a clientes de forma remota y presencial de Software y Hardware."
      }, {
        "descripcion": "Realizé la preparación de equipos y la instalación física de todo lo necesario para armar las redes para los clientes."
      }, {
        "descripcion": "Era responsable de la capacitacion de SoftRestorant a todo el personal de los clientes."
      } //,
      // { "descripcion" : "Conducí los vehiculos de la empresa para asistir a los locales para realizar soporte, instalación y cadetería de suministros informáticos."},
      //  { "descripcion" : "Era de mi responsabilidad realizar una guardia rotativa 24hs de 1 semana por mes."}
      ]
    }];
    /***/
  },

  /***/
  "./src/app/constant/habilidades.ts":
  /*!*****************************************!*\
    !*** ./src/app/constant/habilidades.ts ***!
    \*****************************************/

  /*! exports provided: habilidades */

  /***/
  function srcAppConstantHabilidadesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "habilidades", function () {
      return habilidades;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var habilidades = [{
      "skill": "Java",
      "descriptions": [{
        "tag": "JAVA J2SE"
      }, {
        "tag": "JAVA EE"
      }, {
        "tag": "WebServices"
      }, {
        "tag": "REST"
      }, {
        "tag": "SOAP"
      }, {
        "tag": "Maven"
      }]
    }, {
      "skill": "Angular",
      "descriptions": [{
        "tag": "Firebase"
      }, {
        "tag": "PrimeNG"
      }, {
        "tag": "Nebular"
      }, {
        "tag": "Javascript"
      }, {
        "tag": "Typescript"
      }, {
        "tag": "Bootstrap"
      }]
    }, {
      "skill": "NodeJs",
      "descriptions": [{
        "tag": "ibm-watson"
      }, {
        "tag": "nodemailer"
      }, {
        "tag": "express"
      }]
    }, {
      "skill": "Otros",
      "descriptions": [{
        "tag": "SQL"
      }, {
        "tag": "SQL Server"
      }, {
        "tag": "noSQL"
      }, {
        "tag": "Redis (Basico)"
      }, {
        "tag": "RavenDB (Basico)"
      }, {
        "tag": "HTML"
      }, {
        "tag": "CSS"
      }, {
        "tag": "Postman"
      }, {
        "tag": "SoapUI"
      }, {
        "tag": "Pentaho (Basico)"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/chat/chat.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n\nnb-chat {\n  width: 80%;\n  height: 80vw;\n}\n\n@media screen and (max-width: 500px) {\n  nb-chat {\n    height: 20%;\n    float: none;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  nb-chat {\n    margin-top: 5%;\n    height: 80%;\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9DOlxcVXNlcnNcXG1sYW56YVxcYW5ndWxhckNWXFxBbmd1bGFyLUNWL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBRE9FO0VBQ0UsVUFBQTtFQUVBLFlBQUE7QUNMSjs7QURPSTtFQUxGO0lBT0ksV0FBQTtJQUNBLFdBQUE7RUNMSjtBQUNGOztBRE1JO0VBVkY7SUFXSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4gIFxyXG4gICRicmVhay1zbWFsbDogNTAwcHg7XHJcbiAgJGJyZWFrLWxhcmdlOiAxMjAwcHg7XHJcblxyXG5cclxuICBuYi1jaGF0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBcclxuICAgIGhlaWdodDogODB2dztcclxuICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcclxuICAgICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xyXG4gICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiIsIiNjb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubmItY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODB2dztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5iLWNoYXQge1xuICAgIGhlaWdodDogMjAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgbmItY2hhdCB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/chat/chat.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppPagesChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/pages/chat/chat.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var src_app_constant_aboutme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constant/aboutme */
    "./src/app/constant/aboutme.ts");

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(chatService, sidebarService) {
        _classCallCheck(this, ChatComponent);

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
            avatar: this.avatar
          }
        });
      }

      _createClass(ChatComponent, [{
        key: "sendMessage",
        value: function sendMessage(event, userName, avatar, reply) {
          var _this = this;

          var files = !event.files ? [] : event.files.map(function (file) {
            return {
              url: file.src,
              type: file.type,
              icon: 'file-text-outline'
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
            }
          });
          /* Obtengo respuesta */
          //this.chatService.getMessage(event.message);

          this.chatService.getMessage(event.message).subscribe(function (data) {
            _this.respuesta = data;
            console.log(_this.respuesta);
            console.log(_this.respuesta.length);
            /* Si no esta vacia, respondo lo que obtengo */

            if (_this.respuesta.length > 2) {
              _this.messages.push({
                text: _this.respuesta,
                date: new Date(),
                reply: false,
                user: {
                  name: 'Maximo',
                  avatar: _this.avatar
                }
              });
            } else {
              _this.messages.push({
                text: 'Ups, esto es incómodo, tengo un problemita técnico en la conexción al servicio de chat. Disculpas!',
                date: new Date(),
                reply: false,
                user: {
                  name: 'Maximo',
                  avatar: _this.avatar
                }
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
      }, {
        key: "colapsar",
        value: function colapsar() {
          this.sidebarService.collapse();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.sidebarService.toggle(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);

          if (this.innerWidth < 850) {
            this.colapsar();
          } // this.chatService.getMessage('hola').subscribe(data => {
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
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"]
      }];
    };

    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/pages/chat/chat.component.scss")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/chat/chat.service.ts ***!
    \********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppPagesChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constant/config */
    "./src/app/constant/config.ts");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(http) {
        _classCallCheck(this, ChatService);

        this.http = http;
        this.server = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["RESTSERVER"];
        this.api = src_app_constant_config__WEBPACK_IMPORTED_MODULE_3__["EndPoints"].api;
        this.url = this.server + this.api;
      }

      _createClass(ChatService, [{
        key: "getMessage",
        value: function getMessage(Message) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'text'
            })
          };
          console.log(this.url + Message);
          return this.http.get(this.url + Message.toString(), {
            responseType: 'text'
          });
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/contact/contact.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".largo, .mail {\n  width: 100%;\n}\n\ninput, textarea {\n  margin-top: 10px;\n}\n\ntextarea {\n  height: 200px;\n}\n\n::ng-deep nb-layout-column {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXG1sYW56YVxcYW5ndWxhckNWXFxBbmd1bGFyLUNWL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUVJLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnbywubWFpbCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xyXG4gICAgLy9oZWlnaHQ6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuIiwiLmxhcmdvLCAubWFpbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mailsender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mailsender.service */
    "./src/app/pages/contact/mailsender.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(mailSender, toastrService, sidebarService, location) {
        _classCallCheck(this, ContactComponent);

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

      _createClass(ContactComponent, [{
        key: "toggleLoadingAnimation",
        value: function toggleLoadingAnimation() {
          var _this2 = this;

          this.loading = true;
          setTimeout(function () {
            return _this2.loading = false;
          }, 3000);
        } // Funcion utilizada por el Boton para enviar el mensaje

      }, {
        key: "toastAlert",
        value: function toastAlert(isContact, message, title, status, position) {
          var _this3 = this;

          if (isContact) {
            setTimeout(function () {
              if (status === 'success') {
                _this3.toastrService.success(message, title, {
                  position: position
                });

                _this3.inputMail = '';
                _this3.inputMensaje = '';
              } else {
                _this3.toastrService.danger(message, title, {
                  position: position
                });
              }
            }, 2000);
          }

          console.log(this.loading);
        }
      }, {
        key: "sendMailSpinner",
        value: function sendMailSpinner() {
          this.toggleLoadingAnimation(); // Here my spinner started but never stopped
          // this.loading = false;

          this.sendMail('bottom-left', 'success', 4000);
        }
      }, {
        key: "sendMail",
        value: function sendMail(position, status, duration) {
          var _this4 = this;

          /**/
          // Si el texto del mensaje a enviar es valido
          this.toggleLoadingAnimation();

          if (this.inputMensaje && this.inputMail) {
            var mensaje; // Creo el mensaje para enviar al Servicio

            mensaje = {
              mail: this.inputMail,
              mensaje: this.inputMensaje
            }; // Envio el mensaje con el servicio

            var errorMessage = 'Algo falló, ¿Podrías intentar otra vez?';
            this.mailSender.sendMailPOST(mensaje, true).subscribe(function (data) {
              return _this4.toastAlert(true, 'Mensaje enviado!!!', 'Ok', 'success', 'bottom-right');
            }, // process data
            function (err) {
              return _this4.toastAlert(true, errorMessage, 'Error', 'danger', 'bottom-right');
            } // process error
            );
            this.alert = true;
            this.index += 1;
          } else {
            // console.log("ELSE inputs vacios");
            this.showToastDanger('danger', position);
          }
        }
      }, {
        key: "showToastDanger",
        value: function showToastDanger(status, position) {
          this.toastrService.show('', 'Los campos no deben de quedar vacíos!', {
            position: position,
            status: status
          });
        }
      }, {
        key: "colapsar",
        value: function colapsar() {
          this.sidebarService.collapse();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.sidebarService.toggle(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var mensajeTest; // Creo el mensaje para enviar al Servicio

          mensajeTest = {
            mail: 'Connection_TEST',
            mensaje: 'Works'
          }; // Envio el mensaje con el servicio

          this.mailSender.sendMailPOST(mensajeTest, false);
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);

          if (this.innerWidth < 850) {
            this.colapsar();
          }
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _mailsender_service__WEBPACK_IMPORTED_MODULE_2__["MailsenderService"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], ContactComponent.prototype, "classes", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/pages/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact/mailsender.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contact/mailsender.service.ts ***!
    \*****************************************************/

  /*! exports provided: MailsenderService */

  /***/
  function srcAppPagesContactMailsenderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailsenderService", function () {
      return MailsenderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constant/config */
    "./src/app/constant/config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var MailsenderService =
    /*#__PURE__*/
    function () {
      function MailsenderService(http, toast) {
        _classCallCheck(this, MailsenderService);

        this.http = http;
        this.toast = toast;
        this.server = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["RESTSERVER"];
        this.mail = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["EndPoints"].mail;
        this.send = src_app_constant_config__WEBPACK_IMPORTED_MODULE_2__["EndPoints"].send;
        this.url = this.server + this.send; // tslint:disable-next-line: variable-name

        this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(MailsenderService, [{
        key: "sendMail",
        value: function sendMail(mailtext) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'text'
            })
          };
          console.log(this.url + mailtext);
          return this.http.post(this.url + mailtext.toString(), {
            responseType: 'text'
          });
        }
      }, {
        key: "sendMailPOST",
        value: function sendMailPOST(mail, isContact) {
          var body = JSON.stringify(mail);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          console.log('url: ', this.url);
          console.log('Mail: ', JSON.stringify(mail));
          return this.http.post(this.url, body, httpOptions);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            // server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }, {
        key: "refreshNeeded$",
        get: function get() {
          return this._refreshNeeded$;
        }
      }]);

      return MailsenderService;
    }();

    MailsenderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]
      }];
    };

    MailsenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MailsenderService);
    /***/
  },

  /***/
  "./src/app/pages/cv/cv.component.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/cv/cv.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCvCvComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Varela+Round);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);\n::ng-deep nb-layout-column {\n  -webkit-box-pack: left;\n          justify-content: left;\n  display: flexbox;\n}\n#hb, #eme {\n  width: 60%;\n}\n.first-title {\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-size: 1.4em;\n  margin-bottom: 20px;\n  font-weight: 600;\n  text-shadow: 1px 1px #000000;\n}\n.exp {\n  color: #17a2b8;\n}\n.hab {\n  color: #17a2b8;\n}\n.card-row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -0.5rem;\n}\n.card-col {\n  -webkit-box-flex: 1;\n          flex: 1 0 calc(50% - 1rem);\n  margin: 0 0.5rem;\n}\n/*Bootstrap*/\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\na.badge:focus, a.badge:hover {\n  text-decoration: none;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\na.badge-primary:focus, a.badge-primary:hover {\n  color: #fff;\n  background-color: #0062cc;\n}\na.badge-primary.focus, a.badge-primary:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\na.badge-secondary:focus, a.badge-secondary:hover {\n  color: #fff;\n  background-color: #545b62;\n}\na.badge-secondary.focus, a.badge-secondary:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\na.badge-success:focus, a.badge-success:hover {\n  color: #fff;\n  background-color: #1e7e34;\n}\na.badge-success.focus, a.badge-success:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\na.badge-info:focus, a.badge-info:hover {\n  color: #fff;\n  background-color: #117a8b;\n}\na.badge-info.focus, a.badge-info:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\na.badge-warning:focus, a.badge-warning:hover {\n  color: #212529;\n  background-color: #d39e00;\n}\na.badge-warning.focus, a.badge-warning:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\na.badge-danger:focus, a.badge-danger:hover {\n  color: #fff;\n  background-color: #bd2130;\n}\na.badge-danger.focus, a.badge-danger:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\na.badge-light:focus, a.badge-light:hover {\n  color: #212529;\n  background-color: #dae0e5;\n}\na.badge-light.focus, a.badge-light:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\na.badge-dark:focus, a.badge-dark:hover {\n  color: #fff;\n  background-color: #1d2124;\n}\na.badge-dark.focus,\na.badge-dark:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n#tagcontainer {\n  display: block;\n}\n.badge {\n  background: #545b62;\n  margin: 10px 10px 10px 10px;\n  font-size: small;\n}\n/*\nnb-card-header{\n    background : Black;\n}*/\n.experience {\n  background: #181818;\n  width: 60%;\n  height: 60%;\n  float: left;\n  position: relative;\n  color: #9099a0;\n  font-weight: 300;\n}\n@media screen and (max-width: 500px) {\n  .experience {\n    min-height: 80%;\n    min-height: 6vh;\n    height: 65%;\n  }\n}\n@media screen and (min-width: 850px) {\n  .experience {\n    height: 100%;\n    min-height: 100%;\n    min-height: 150vh;\n  }\n}\n@media (max-width: 850px) {\n  .experience {\n    width: 100%;\n  }\n}\n.experience h3.experience-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.experience .company-wrapper {\n  width: 30%;\n  float: left;\n  text-align: left;\n  padding-right: 5%;\n  margin-bottom: 60px;\n}\n@media (max-width: 450px) {\n  .experience .company-wrapper {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.experience .job-wrapper {\n  width: 70%;\n  float: left;\n  text-align: left;\n  padding-right: 5%;\n  margin-bottom: 60px;\n}\n@media (max-width: 450px) {\n  .experience .job-wrapper {\n    width: 100%;\n    margin-bottom: 40px;\n  }\n}\n.experience .experience-title {\n  color: white;\n  margin-bottom: 15px;\n}\n.section-padding {\n  position: relative;\n  padding: 60px 60px 40px 40px;\n}\n@media (max-width: 850px) {\n  .section-padding {\n    padding: 80px 15% 40px 10%;\n  }\n}\n@media (max-width: 450px) {\n  .section-padding {\n    padding: 40px 10% 20px 5%;\n  }\n}\n.section-wrapper {\n  position: relative;\n  width: 50%;\n  float: left;\n  text-align: left;\n  color: #9099a0;\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n@media (max-width: 450px) {\n  .section-wrapper {\n    width: 100%;\n  }\n}\n.section-wrapper:nth-child(3) {\n  padding-right: 8%;\n}\n.section-wrapper h3.section-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.resume-wrapper {\n  position: relative;\n  text-align: center;\n  height: 100%;\n}\n.container {\n  min-height: 800px;\n}\n.profile {\n  font-size: 16px;\n  line-height: 1.5em;\n  background: #fff;\n  width: 40%;\n  float: left;\n  color: #9099a0;\n}\n@media screen and (max-width: 500px) {\n  .profile {\n    min-height: 80%;\n    min-height: 6vh;\n    height: 65%;\n  }\n}\n@media screen and (min-width: 850px) {\n  .profile {\n    height: 100%;\n    min-height: 100%;\n    min-height: 150vh;\n  }\n}\n@media (max-width: 850px) {\n  .profile {\n    width: 100%;\n  }\n}\n.profile .name-wrapper {\n  float: left;\n  width: 60%;\n}\n.profile .profile-title {\n  color: #17a2b8;\n  margin-bottom: 15px;\n}\n.profile .profile-subtitle {\n  color: #17a2b8;\n  margin-bottom: 15px;\n}\n.profile h3.section-title {\n  color: #66cc99;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3YvQzpcXFVzZXJzXFxtbGFuemFcXGFuZ3VsYXJDVlxcQW5ndWxhci1DVi9zcmNcXGFwcFxccGFnZXNcXGN2XFxjdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3YvY3YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdRLGlFQUFBO0FBQ0EsOEVBQUE7QUF4R1I7RUFDSSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBRENFO0VBQ0UsVUFBQTtBQ0VKO0FER0E7RUFHRSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRE9BO0VBQ0UsY0FBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0FDSkY7QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDTEo7QURRRTtFQUNFLG1CQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEV0UsWUFBQTtBQUNBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUFrQixtQkFBQTtFQUFtQix3QkFBQTtFQUF3QixzQkFBQTtFQUFxQiw2SUFBQTtFQUFBLHFJQUFBO0FDSnhGO0FES007RUFBdUM7SUFBTyx3QkFBQTtJQUFBLGdCQUFBO0VDQWxEO0FBQ0Y7QURBTTtFQUE0QixxQkFBQTtBQ0dsQztBREZNO0VBQWEsYUFBQTtBQ01uQjtBRExNO0VBQVksa0JBQUE7RUFBa0IsU0FBQTtBQ1VwQztBRFRNO0VBQVksb0JBQUE7RUFBbUIsbUJBQUE7RUFBa0Isb0JBQUE7QUNldkQ7QURkTTtFQUFlLFdBQUE7RUFBVyx5QkFBQTtBQ21CaEM7QURsQk07RUFBNEMsV0FBQTtFQUFXLHlCQUFBO0FDdUI3RDtBRHRCTTtFQUE0QyxVQUFBO0VBQVUsK0NBQUE7QUMyQjVEO0FEMUJNO0VBQWlCLFdBQUE7RUFBVyx5QkFBQTtBQytCbEM7QUQ5Qk07RUFBZ0QsV0FBQTtFQUFXLHlCQUFBO0FDbUNqRTtBRGxDTTtFQUFnRCxVQUFBO0VBQVUsaURBQUE7QUN1Q2hFO0FEdkM0RztFQUFlLFdBQUE7RUFBVyx5QkFBQTtBQzRDdEk7QUQzQ007RUFBNEMsV0FBQTtFQUFXLHlCQUFBO0FDZ0Q3RDtBRC9DTTtFQUE0QyxVQUFBO0VBQVUsK0NBQUE7QUNvRDVEO0FEbkRNO0VBQVksV0FBQTtFQUFXLHlCQUFBO0FDd0Q3QjtBRHZETTtFQUFzQyxXQUFBO0VBQVcseUJBQUE7QUM0RHZEO0FEM0RNO0VBQXNDLFVBQUE7RUFBVSxnREFBQTtBQ2dFdEQ7QUQvRE07RUFBZSxjQUFBO0VBQWMseUJBQUE7QUNvRW5DO0FEbkVNO0VBQTRDLGNBQUE7RUFBYyx5QkFBQTtBQ3dFaEU7QUR2RU07RUFBNEMsVUFBQTtFQUFVLCtDQUFBO0FDNEU1RDtBRDNFTTtFQUFjLFdBQUE7RUFBVyx5QkFBQTtBQ2dGL0I7QUQvRU07RUFBMEMsV0FBQTtFQUFXLHlCQUFBO0FDb0YzRDtBRG5GTTtFQUEwQyxVQUFBO0VBQVUsK0NBQUE7QUN3RjFEO0FEdkZNO0VBQWEsY0FBQTtFQUFjLHlCQUFBO0FDNEZqQztBRDNGTTtFQUF3QyxjQUFBO0VBQWMseUJBQUE7QUNnRzVEO0FEL0ZNO0VBQXdDLFVBQUE7RUFBVSxpREFBQTtBQ29HeEQ7QURuR007RUFBWSxXQUFBO0VBQVcseUJBQUE7QUN3RzdCO0FEdkdNO0VBQXNDLFdBQUE7RUFBVyx5QkFBQTtBQzRHdkQ7QUQzR007O0VBQ21CLFVBQUE7RUFBVSw4Q0FBQTtBQ2dIbkM7QUQvR0U7RUFBVyxrQkFBQTtFQUFrQixtQkFBQTtFQUFtQix5QkFBQTtFQUF5QixxQkFBQTtBQ3NIM0U7QURwSEE7RUFDSSxjQUFBO0FDdUhKO0FEcEhBO0VBQ0ksbUJBQUE7RUFFQSwyQkFBQTtFQUNBLGdCQUFBO0FDc0hKO0FEbEhBOzs7RUFBQTtBQWdDQTtFQUNJLG1CQXhCTTtFQXlCTixVQUFBO0VBYUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBdkNTO0VBd0NULGdCQUFBO0FDNkVKO0FENUZJO0VBSko7SUFLTSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUMrRko7QUFDRjtBRDlGSTtFQVRKO0lBVU0sWUFBQTtJQUNBLGdCQUFBO0lBQ0YsaUJBQUE7RUNpR0Y7QUFDRjtBRHJITTtFQU9OO0lBcUJ3QyxXQUFBO0VDNkZ0QztBQUNGO0FEN0ZJO0VBQ0UsY0EzQ0s7RUE0Q0wsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQytGTjtBRDdGSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDK0ZOO0FEdElNO0VBa0NGO0lBTWtDLFdBQUE7SUFBWSxtQkFBQTtFQ21HaEQ7QUFDRjtBRGxHSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDb0dOO0FEbkpNO0VBMENGO0lBTWtDLFdBQUE7SUFBVyxtQkFBQTtFQ3dHL0M7QUFDRjtBRHZHSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ3lHUjtBRHJHRTtFQUNFLGtCQUFBO0VBQ0QsNEJBQUE7QUN3R0g7QURyS007RUEyREo7SUFHcUMsMEJBQUE7RUMyR3JDO0FBQ0Y7QUR2S007RUF3REo7SUFJa0MseUJBQUE7RUMrR2xDO0FBQ0Y7QUQ3R0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXJGUztFQXNGVCxnQkFBQTtFQUNBLG1CQUFBO0FDZ0hKO0FEdExNO0VBK0RKO0lBUWtDLFdBQUE7RUNtSGxDO0FBQ0Y7QURuSEk7RUFDRSxpQkFBQTtBQ3FITjtBRG5ISTtFQUNFLGNBNUZLO0VBNkZMLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNxSE47QUQvR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2tISjtBRC9HRTtFQUNFLGlCQUFBO0FDa0hKO0FEL0dFO0VBYUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBcElPO0VBcUlQLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FySVU7QUMyT2Q7QUR2SEk7RUFERjtJQUVJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQzBISjtBQUNGO0FEekhJO0VBTkY7SUFPSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDRixpQkFBQTtFQzRIRjtBQUNGO0FEMU9NO0VBb0dKO0lBbUJzQyxXQUFBO0VDdUh0QztBQUNGO0FEdkhJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUN5SE47QUR0SEk7RUFDSSxjQTlPSztFQStPTCxtQkFBQTtBQ3dIUjtBRHRITTtFQUNFLGNBbFBLO0VBbVBMLG1CQUFBO0FDd0hSO0FEdEhNO0VBQ0UsY0FuSkc7RUFvSkgsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3dIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N2L2N2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleGJveCA7XHJcbiAgfVxyXG5cclxuXHJcbiAgI2hiLCNlbWV7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuJGJsdWVjb2xvciA6ICMxN2EyYjg7XHJcbi5maXJzdC10aXRsZXtcclxuXHJcbiAgLy90ZXh0LXNoYWRvdzogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDEwLjApO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAvL3RleHQtYWxpZ246bGVmdDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOjEuNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDAwMDtcclxuXHJcbn1cclxuXHJcbi5leHB7XHJcbiAgY29sb3IgOiAjMTdhMmI4O1xyXG5cclxufVxyXG4uaGFie1xyXG4gIGNvbG9yOiMxN2EyYjg7XHJcbn1cclxuXHJcblxyXG4gIC5jYXJkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb2wge1xyXG4gICAgZmxleDogMSAwIGNhbGMoNTAlIC0gMXJlbSk7XHJcbiAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLypCb290c3RyYXAqL1xyXG4gIC5iYWRnZXtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6LjI1ZW0gLjRlbTtcclxuICAgICAgZm9udC1zaXplOjc1JTtcclxuICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDoxO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7Ym9yZGVyLXJhZGl1czouMjVyZW07dHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXR9XHJcbiAgICAgIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5iYWRnZXt0cmFuc2l0aW9uOm5vbmV9fVxyXG4gICAgICBhLmJhZGdlOmZvY3VzLGEuYmFkZ2U6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XHJcbiAgICAgIC5iYWRnZTplbXB0eXtkaXNwbGF5Om5vbmV9XHJcbiAgICAgIC5idG4gLmJhZGdle3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4fVxyXG4gICAgICAuYmFkZ2UtcGlsbHtwYWRkaW5nLXJpZ2h0Oi42ZW07cGFkZGluZy1sZWZ0Oi42ZW07Ym9yZGVyLXJhZGl1czoxMHJlbX1cclxuICAgICAgLmJhZGdlLXByaW1hcnl7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmZ9XHJcbiAgICAgIGEuYmFkZ2UtcHJpbWFyeTpmb2N1cyxhLmJhZGdlLXByaW1hcnk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDYyY2N9XHJcbiAgICAgIGEuYmFkZ2UtcHJpbWFyeS5mb2N1cyxhLmJhZGdlLXByaW1hcnk6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgwLDEyMywyNTUsLjUpfVxyXG4gICAgICAuYmFkZ2Utc2Vjb25kYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNmM3NTdkfVxyXG4gICAgICBhLmJhZGdlLXNlY29uZGFyeTpmb2N1cyxhLmJhZGdlLXNlY29uZGFyeTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU0NWI2Mn1cclxuICAgICAgYS5iYWRnZS1zZWNvbmRhcnkuZm9jdXMsYS5iYWRnZS1zZWNvbmRhcnk6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgxMDgsMTE3LDEyNSwuNSl9LmJhZGdlLXN1Y2Nlc3N7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyOGE3NDV9XHJcbiAgICAgIGEuYmFkZ2Utc3VjY2Vzczpmb2N1cyxhLmJhZGdlLXN1Y2Nlc3M6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMxZTdlMzR9XHJcbiAgICAgIGEuYmFkZ2Utc3VjY2Vzcy5mb2N1cyxhLmJhZGdlLXN1Y2Nlc3M6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSg0MCwxNjcsNjksLjUpfVxyXG4gICAgICAuYmFkZ2UtaW5mb3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzE3YTJiOH1cclxuICAgICAgYS5iYWRnZS1pbmZvOmZvY3VzLGEuYmFkZ2UtaW5mbzpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzExN2E4Yn1cclxuICAgICAgYS5iYWRnZS1pbmZvLmZvY3VzLGEuYmFkZ2UtaW5mbzpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMnJlbSByZ2JhKDIzLDE2MiwxODQsLjUpfVxyXG4gICAgICAuYmFkZ2Utd2FybmluZ3tjb2xvcjojMjEyNTI5O2JhY2tncm91bmQtY29sb3I6I2ZmYzEwN31cclxuICAgICAgYS5iYWRnZS13YXJuaW5nOmZvY3VzLGEuYmFkZ2Utd2FybmluZzpob3Zlcntjb2xvcjojMjEyNTI5O2JhY2tncm91bmQtY29sb3I6I2QzOWUwMH1cclxuICAgICAgYS5iYWRnZS13YXJuaW5nLmZvY3VzLGEuYmFkZ2Utd2FybmluZzpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMnJlbSByZ2JhKDI1NSwxOTMsNywuNSl9XHJcbiAgICAgIC5iYWRnZS1kYW5nZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNkYzM1NDV9XHJcbiAgICAgIGEuYmFkZ2UtZGFuZ2VyOmZvY3VzLGEuYmFkZ2UtZGFuZ2VyOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYmQyMTMwfVxyXG4gICAgICBhLmJhZGdlLWRhbmdlci5mb2N1cyxhLmJhZGdlLWRhbmdlcjpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMnJlbSByZ2JhKDIyMCw1Myw2OSwuNSl9XHJcbiAgICAgIC5iYWRnZS1saWdodHtjb2xvcjojMjEyNTI5O2JhY2tncm91bmQtY29sb3I6I2Y4ZjlmYX1cclxuICAgICAgYS5iYWRnZS1saWdodDpmb2N1cyxhLmJhZGdlLWxpZ2h0OmhvdmVye2NvbG9yOiMyMTI1Mjk7YmFja2dyb3VuZC1jb2xvcjojZGFlMGU1fVxyXG4gICAgICBhLmJhZGdlLWxpZ2h0LmZvY3VzLGEuYmFkZ2UtbGlnaHQ6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgLjJyZW0gcmdiYSgyNDgsMjQ5LDI1MCwuNSl9XHJcbiAgICAgIC5iYWRnZS1kYXJre2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzQzYTQwfVxyXG4gICAgICBhLmJhZGdlLWRhcms6Zm9jdXMsYS5iYWRnZS1kYXJrOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMWQyMTI0fVxyXG4gICAgICBhLmJhZGdlLWRhcmsuZm9jdXMsXHJcbiAgICAgIGEuYmFkZ2UtZGFyazpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAuMnJlbSByZ2JhKDUyLDU4LDY0LC41KX1cclxuICAuanVtYm90cm9ue3BhZGRpbmc6MnJlbSAxcmVtO21hcmdpbi1ib3R0b206MnJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNlOWVjZWY7Ym9yZGVyLXJhZGl1czouM3JlbX1cclxuXHJcbiN0YWdjb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZDogIzU0NWI2MjtcclxuXHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHggO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuXHJcbn1cclxuXHJcbi8qXHJcbm5iLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZCA6IEJsYWNrO1xyXG59Ki9cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmQpO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCwzMDAsNjAwLDcwMCk7XHJcblxyXG4kcHJvZmlsZUJnOiNmZmY7XHJcbiRza2lsbHNCZzojMTgxODE4O1xyXG4kcHJvZmlsZUNvbG9yOiM5MDk5YTA7XHJcbiRza2lsbHNDb2xvcjojOTA5OWEwO1xyXG4kbGlua0NvbG9yOiM2NmNjOTk7XHJcbiRib2xkQ29sb3I6IzRhNGU1MTtcclxuJHRpbWU6MC42cztcclxuXHJcblxyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICAgIEBpZiAkcG9pbnQgPT0gcGFwYS1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBpZiAkcG9pbnQgPT0gbWFtYS1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICAgIEBpZiAkcG9pbnQgPT0gYnJvdGhlci1iZWFyIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSAgeyBAY29udGVudDsgfVxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgJHBvaW50ID09IGJhYnktYmVhciB7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgIHsgQGNvbnRlbnQ7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4uZXhwZXJpZW5jZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiRza2lsbHNCZztcclxuICAgIHdpZHRoOjYwJTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBtaW4taGVpZ2h0OjgwJTtcclxuICAgICAgbWluLWhlaWdodDo2dmg7XHJcbiAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjE1MHZoO1xyXG5cclxuICAgIH1cclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgY29sb3I6JHNraWxsc0NvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG5cclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYnJvdGhlci1iZWFyKSB7IHdpZHRoOiAxMDAlOyB9XHJcbiAgICBoMy5leHBlcmllbmNlLXRpdGxlIHtcclxuICAgICAgY29sb3I6JGxpbmtDb2xvcjtcclxuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZToxLjJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB9XHJcbiAgICAuY29tcGFueS13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChiYWJ5LWJlYXIpIHt3aWR0aDoxMDAlOyBtYXJnaW4tYm90dG9tOjIwcHg7fVxyXG4gICAgfVxyXG4gICAgLmpvYi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChiYWJ5LWJlYXIpIHt3aWR0aDoxMDAlO21hcmdpbi1ib3R0b206NDBweDt9XHJcbiAgICB9XHJcbiAgICAuZXhwZXJpZW5jZS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4OztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tcGFkZGluZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHBhZGRpbmc6NjBweCA2MHB4IDQwcHggNDBweDtcclxuICAgQGluY2x1ZGUgYnJlYWtwb2ludChicm90aGVyLWJlYXIpIHsgcGFkZGluZzo4MHB4IDE1JSA0MHB4IDEwJTsgfVxyXG4gICBAaW5jbHVkZSBicmVha3BvaW50KGJhYnktYmVhcikgeyBwYWRkaW5nOjQwcHggMTAlIDIwcHggNSU7IH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGNvbG9yOiRza2lsbHNDb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmFieS1iZWFyKSB7d2lkdGg6MTAwJTt9XHJcbiAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgcGFkZGluZy1yaWdodDo4JTtcclxuICAgIH1cclxuICAgIGgzLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjokbGlua0NvbG9yO1xyXG4gICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOjEuMmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbi5yZXN1bWUtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6ODAwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBtaW4taGVpZ2h0OjgwJTtcclxuICAgICAgbWluLWhlaWdodDo2dmg7XHJcbiAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjE1MHZoO1xyXG5cclxuICAgIH1cclxuICAgIC8vZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDoxLjVlbTtcclxuICAgIGJhY2tncm91bmQ6JHByb2ZpbGVCZztcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjb2xvcjokcHJvZmlsZUNvbG9yO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChicm90aGVyLWJlYXIpIHsgd2lkdGg6IDEwMCU7IH1cclxuICAgIC5uYW1lLXdyYXBwZXIge1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB3aWR0aDo2MCU7XHJcblxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDs7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2ZpbGUtc3VidGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDs7XHJcbiAgICAgIH1cclxuICAgICAgaDMuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6JGxpbmtDb2xvcjtcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICB9XHJcbiAgICAgfVxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VmFyZWxhK1JvdW5kKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDMwMCw2MDAsNzAwKTtcbjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4Ym94O1xufVxuXG4jaGIsICNlbWUge1xuICB3aWR0aDogNjAlO1xufVxuXG4uZmlyc3QtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMDAwMDAwO1xufVxuXG4uZXhwIHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5oYWIge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLmNhcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0wLjVyZW07XG59XG5cbi5jYXJkLWNvbCB7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDFyZW0pO1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuXG4vKkJvb3RzdHJhcCovXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjRlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmJhZGdlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5hLmJhZGdlOmZvY3VzLCBhLmJhZGdlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmFkZ2U6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4uYmFkZ2UtcGlsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cblxuLmJhZGdlLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuYS5iYWRnZS1wcmltYXJ5OmZvY3VzLCBhLmJhZGdlLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cblxuYS5iYWRnZS1wcmltYXJ5LmZvY3VzLCBhLmJhZGdlLXByaW1hcnk6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbn1cblxuLmJhZGdlLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xufVxuXG5hLmJhZGdlLXNlY29uZGFyeTpmb2N1cywgYS5iYWRnZS1zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2Mjtcbn1cblxuYS5iYWRnZS1zZWNvbmRhcnkuZm9jdXMsIGEuYmFkZ2Utc2Vjb25kYXJ5OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcbn1cblxuLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cblxuYS5iYWRnZS1zdWNjZXNzOmZvY3VzLCBhLmJhZGdlLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbn1cblxuYS5iYWRnZS1zdWNjZXNzLmZvY3VzLCBhLmJhZGdlLXN1Y2Nlc3M6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcbn1cblxuLmJhZGdlLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbn1cblxuYS5iYWRnZS1pbmZvOmZvY3VzLCBhLmJhZGdlLWluZm86aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4Yjtcbn1cblxuYS5iYWRnZS1pbmZvLmZvY3VzLCBhLmJhZGdlLWluZm86Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XG59XG5cbi5iYWRnZS13YXJuaW5nIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbmEuYmFkZ2Utd2FybmluZzpmb2N1cywgYS5iYWRnZS13YXJuaW5nOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMDA7XG59XG5cbmEuYmFkZ2Utd2FybmluZy5mb2N1cywgYS5iYWRnZS13YXJuaW5nOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XG59XG5cbi5iYWRnZS1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cblxuYS5iYWRnZS1kYW5nZXI6Zm9jdXMsIGEuYmFkZ2UtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG59XG5cbmEuYmFkZ2UtZGFuZ2VyLmZvY3VzLCBhLmJhZGdlLWRhbmdlcjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xufVxuXG4uYmFkZ2UtbGlnaHQge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuYS5iYWRnZS1saWdodDpmb2N1cywgYS5iYWRnZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xufVxuXG5hLmJhZGdlLWxpZ2h0LmZvY3VzLCBhLmJhZGdlLWxpZ2h0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcbn1cblxuLmJhZGdlLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cblxuYS5iYWRnZS1kYXJrOmZvY3VzLCBhLmJhZGdlLWRhcms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNDtcbn1cblxuYS5iYWRnZS1kYXJrLmZvY3VzLFxuYS5iYWRnZS1kYXJrOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuXG4jdGFnY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICM1NDViNjI7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLypcbm5iLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQgOiBCbGFjaztcbn0qL1xuLmV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5MDk5YTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZXhwZXJpZW5jZSB7XG4gICAgbWluLWhlaWdodDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZXhwZXJpZW5jZSBoMy5leHBlcmllbmNlLXRpdGxlIHtcbiAgY29sb3I6ICM2NmNjOTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZXhwZXJpZW5jZSAuY29tcGFueS13cmFwcGVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5leHBlcmllbmNlIC5jb21wYW55LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5leHBlcmllbmNlIC5qb2Itd3JhcHBlciB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZXhwZXJpZW5jZSAuam9iLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VjdGlvbi1wYWRkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2MHB4IDYwcHggNDBweCA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5zZWN0aW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDgwcHggMTUlIDQwcHggMTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlY3Rpb24tcGFkZGluZyB7XG4gICAgcGFkZGluZzogNDBweCAxMCUgMjBweCA1JTtcbiAgfVxufVxuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5MDk5YTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zZWN0aW9uLXdyYXBwZXI6bnRoLWNoaWxkKDMpIHtcbiAgcGFkZGluZy1yaWdodDogOCU7XG59XG4uc2VjdGlvbi13cmFwcGVyIGgzLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzY2Y2M5OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnJlc3VtZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM5MDk5YTA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucHJvZmlsZSB7XG4gICAgbWluLWhlaWdodDogODAlO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnByb2ZpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnByb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvZmlsZSAubmFtZS13cmFwcGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MCU7XG59XG4ucHJvZmlsZSAucHJvZmlsZS10aXRsZSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnByb2ZpbGUgLnByb2ZpbGUtc3VidGl0bGUge1xuICBjb2xvcjogIzE3YTJiODtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcm9maWxlIGgzLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzY2Y2M5OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/cv/cv.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/cv/cv.component.ts ***!
    \******************************************/

  /*! exports provided: CvComponent */

  /***/
  function srcAppPagesCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constant_experiencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constant/experiencia */
    "./src/app/constant/experiencia.ts");
    /* harmony import */


    var _constant_habilidades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../constant/habilidades */
    "./src/app/constant/habilidades.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var CvComponent =
    /*#__PURE__*/
    function () {
      function CvComponent(sidebarService) {
        _classCallCheck(this, CvComponent);

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

      _createClass(CvComponent, [{
        key: "colapsar",
        value: function colapsar() {
          this.sidebarService.collapse();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.sidebarService.toggle(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);

          if (this.innerWidth < 850) {
            this.colapsar();
          }
        }
      }]);

      return CvComponent;
    }();

    CvComponent.ctorParameters = function () {
      return [{
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarService"]
      }];
    };

    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cv',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cv.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cv/cv.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cv.component.scss */
      "./src/app/pages/cv/cv.component.scss")).default]
    })], CvComponent);
    /***/
  },

  /***/
  "./src/app/pages/error404/error404.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/error404/error404.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesError404Error404ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  margin: auto;\n  padding-left: auto;\n}\n\n/*\n.green {\n    color :$green;\n    font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\",\n    \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\",\n    \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier,\n    monospace;\n\n  }*/\n\n.text404, p, h1 {\n  color: #9ccc65;\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n  -webkit-text-size-adjust: 12px;\n     -moz-text-size-adjust: 12px;\n      -ms-text-size-adjust: 12px;\n          text-size-adjust: 12px;\n  text-align: center;\n}\n\n.slide-right {\n  -webkit-animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2020-1-20 20:31:27\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-right\n * ----------------------------------------\n */\n\n@-webkit-keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(-300px);\n    transform: translateX(-300px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(-300px);\n    transform: translateX(-300px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3I0MDQvQzpcXFVzZXJzXFxtbGFuemFcXGFuZ3VsYXJDVlxcQW5ndWxhci1DVi9zcmNcXGFwcFxccGFnZXNcXGVycm9yNDA0XFxlcnJvcjQwNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTs7Ozs7Ozs7SUFBQTs7QUFVQTtFQUNJLGNBbkJJO0VBc0JKLGlPQUFBO0VBSUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRGFFO0VBQ0QsMkVBQUE7RUFDUSxtRUFBQTtBQ1ZUOztBRGVBOzs7OzttREFBQTs7QUFPQTs7OztFQUFBOztBQUtDO0VBQ0c7SUFDRSxxQ0FBQTtJQUNRLDZCQUFBO0VDYlo7RURlRTtJQUNFLGdDQUFBO0lBQ1Esd0JBQUE7RUNiWjtBQUNGOztBRGVFO0VBQ0U7SUFDRSxxQ0FBQTtJQUNRLDZCQUFBO0VDYlo7RURlRTtJQUNFLGdDQUFBO0lBQ1Esd0JBQUE7RUNiWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGdyZWVuOiAjOWNjYzY1O1xyXG5cclxuLmNvbnRlbnQge1xyXG4gICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogYXV0bztcclxuICAgIFxyXG59XHJcbi8qXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvciA6JGdyZWVuO1xyXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkFuZGFsZSBNb25vIFdUXCIsIFwiQW5kYWxlIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLFxyXG4gICAgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLFxyXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLFxyXG4gICAgbW9ub3NwYWNlO1xyXG5cclxuICB9Ki9cclxuICBcclxuLnRleHQ0MDQsIHAsaDEge1xyXG4gICAgY29sb3IgOiRncmVlbjtcclxuICAgIC8vZm9udC1mYW1pbHk6IG5iLXRoZW1lKGZvbnQtZmFtaWx5LXByaW1hcnkpO1xyXG4gICAgLy9jb2xvcjogbmItdGhlbWUodGV4dC1iYXNpYy1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQW5kYWxlIE1vbm8gV1RcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsXHJcbiAgICBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIk5pbWJ1cyBNb25vIExcIiwgTW9uYWNvLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsXHJcbiAgICBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LXNpemUtYWRqdXN0OiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zbGlkZS1yaWdodCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgIGJvdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xLTIwIDIwOjMxOjI3XHJcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cclxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBzbGlkZS1yaWdodFxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogYXV0bztcbn1cblxuLypcbi5ncmVlbiB7XG4gICAgY29sb3IgOiRncmVlbjtcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQW5kYWxlIE1vbm8gV1RcIiwgXCJBbmRhbGUgTW9ub1wiLCBcIkx1Y2lkYSBDb25zb2xlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLFxuICAgIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiTmltYnVzIE1vbm8gTFwiLCBNb25hY28sIFwiQ291cmllciBOZXdcIiwgQ291cmllcixcbiAgICBtb25vc3BhY2U7XG5cbiAgfSovXG4udGV4dDQwNCwgcCwgaDEge1xuICBjb2xvcjogIzljY2M2NTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkFuZGFsZSBNb25vIFdUXCIsIFwiQW5kYWxlIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiTmltYnVzIE1vbm8gTFwiLCBNb25hY28sIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1yaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAycyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAycyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtMS0yMCAyMDozMToyN1xuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtcmlnaHRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/error404/error404.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/error404/error404.component.ts ***!
    \******************************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcAppPagesError404Error404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error404Component =
    /*#__PURE__*/
    function () {
      function Error404Component() {
        _classCallCheck(this, Error404Component);

        this.i = 0;
        this.txt = 'Lorem ipsum dummy text blabla.';
        this.speed = 50;
      }

      _createClass(Error404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var i = 0;
          var i2 = 0;
          var i3 = 0;
          var txt = 'Ups, creo que algo salió mal.';
          var txt2 = '¿Podrías chequear si esta correcta la dirección URL?';
          var txt3 = 'Gracias!';
          var speed = 50;
          startTW1();
          startTW2();
          startTW3();

          function startTW1() {
            typeWriter1();
          }

          function startTW2() {
            setTimeout(typeWriter2, 2000);
          }

          function startTW3() {
            setTimeout(typeWriter3, 5000);
          }

          function typeWriter1()
          /*i: number, txt: String, speed: number*/
          {
            if (i < txt.length) {
              document.getElementById('demo').innerHTML += txt.charAt(i);
              console.log(i);
              i++;
              setTimeout(typeWriter1, speed);
            }
          }

          function typeWriter2()
          /*i: number, txt: String, speed: number*/
          {
            if (i2 < txt2.length) {
              document.getElementById('demo2').innerHTML += txt2.charAt(i2);
              console.log(i2);
              i2++;
              setTimeout(typeWriter2, speed);
            }
          }

          function typeWriter3()
          /*i: number, txt: String, speed: number*/
          {
            if (i3 < txt3.length) {
              document.getElementById('demo3').innerHTML += txt3.charAt(i3);
              console.log(i3);
              i3++;
              setTimeout(typeWriter3, speed);
            }
          }
        }
      }]);

      return Error404Component;
    }();

    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error404/error404.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error404.component.scss */
      "./src/app/pages/error404/error404.component.scss")).default]
    })], Error404Component);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/inicio/inicio.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInicioInicioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;\n  width: 100%;\n}\n\n.blue {\n  color: #29b6f6;\n}\n\n.green {\n  color: #9ccc65;\n}\n\n.content {\n  height: 40%;\n  padding-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.text404, p, h1 {\n  color: #9ccc65;\n  font-size: 1em;\n  text-align: center;\n}\n\n.slide-right {\n  -webkit-animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2020-1-20 20:31:27\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-right\n * ----------------------------------------\n */\n\n@-webkit-keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(-300px);\n    transform: translateX(-300px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-right {\n  0% {\n    -webkit-transform: translateX(-300px);\n    transform: translateX(-300px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcbWxhbnphXFxhbmd1bGFyQ1ZcXEFuZ3VsYXItQ1Yvc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlPQUFBO0VBSUUsV0FBQTtBQ1hKOztBRG9CQTtFQUhFLGNBaEJLO0FDR1A7O0FEb0JBO0VBUEUsY0FmTTtBQ01SOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDbEJGOztBRDRCQTtFQTNCRSxjQWZNO0VBNENKLGNBQUE7RUFDQSxrQkFBQTtBQ3pCSjs7QUQ2QkU7RUFDRCwyRUFBQTtFQUNRLG1FQUFBO0FDMUJUOztBRCtCQTs7Ozs7bURBQUE7O0FBT0E7Ozs7RUFBQTs7QUFLQztFQUNHO0lBQ0UscUNBQUE7SUFDUSw2QkFBQTtFQzdCWjtFRCtCRTtJQUNFLGdDQUFBO0lBQ1Esd0JBQUE7RUM3Qlo7QUFDRjs7QUQrQkU7RUFDRTtJQUNFLHFDQUFBO0lBQ1EsNkJBQUE7RUM3Qlo7RUQrQkU7SUFDRSxnQ0FBQTtJQUNRLHdCQUFBO0VDN0JaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kYnJlYWstc21hbGw6IDUwMHB4O1xyXG4kYnJlYWstbGFyZ2U6IDEyMDBweDtcclxuJGJsdWU6ICMyOWI2ZjY7XHJcbiRncmVlbjogIzljY2M2NTtcclxuXHJcblxyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkFuZGFsZSBNb25vIFdUXCIsIFwiQW5kYWxlIE1vbm9cIiwgXCJMdWNpZGEgQ29uc29sZVwiLFxyXG4gICAgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLFxyXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJOaW1idXMgTW9ubyBMXCIsIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLFxyXG4gICAgbW9ub3NwYWNlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgQGluY2x1ZGUgdGV4dC1jb2xvcigkYmx1ZSk7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgQGluY2x1ZGUgdGV4dC1jb2xvcigkZ3JlZW4pO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuICAvL0ZST05UIFNJREUgU1RZTElOR1xyXG5cclxuXHJcbi50ZXh0NDA0LCBwLGgxIHtcclxuICBAaW5jbHVkZSB0ZXh0LWNvbG9yKCRncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zbGlkZS1yaWdodCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgIGJvdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xLTIwIDIwOjMxOjI3XHJcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cclxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLlxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNsaWRlLXJpZ2h0XHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJBbmRhbGUgTW9ubyBXVFwiLCBcIkFuZGFsZSBNb25vXCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIk5pbWJ1cyBNb25vIExcIiwgTW9uYWNvLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMyOWI2ZjY7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjOWNjYzY1O1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogNDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0NDA0LCBwLCBoMSB7XG4gIGNvbG9yOiAjOWNjYzY1O1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTEtMjAgMjA6MzE6MjdcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby5cbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtcmlnaHRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/inicio/inicio.component.ts ***!
    \**************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppPagesInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../constant/aboutme */
    "./src/app/constant/aboutme.ts");
    /* harmony import */


    var _contact_mailsender_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../contact/mailsender.service */
    "./src/app/pages/contact/mailsender.service.ts");

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent(sidebarService, mailSender) {
        _classCallCheck(this, InicioComponent);

        this.sidebarService = sidebarService;
        this.mailSender = mailSender;
        /**/

        this.name = 'Angular';
        this.aboutme = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"];
        this.lineas = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].presentacion;
        this.json = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].json;
        this.llave1 = '{';
        this.llave2 = '}';
      }

      _createClass(InicioComponent, [{
        key: "colapsar",
        value: function colapsar() {
          this.sidebarService.collapse();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.sidebarService.toggle(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);

          if (this.innerWidth < 850) {
            this.colapsar();
          }
          /* Mail Check */


          var mensaje;
          mensaje = {
            mail: 'Inicio',
            mensaje: 'Connection works!'
          };
          this.mailSender.sendMailPOST(mensaje, false);
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.ctorParameters = function () {
      return [{
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]
      }, {
        type: _contact_mailsender_service__WEBPACK_IMPORTED_MODULE_4__["MailsenderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw', {
      static: false
    })], InicioComponent.prototype, "typewriterElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw2', {
      static: false
    })], InicioComponent.prototype, "typewriterElement2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tw3', {
      static: false
    })], InicioComponent.prototype, "typewriterElement3", void 0);
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.scss */
      "./src/app/pages/inicio/inicio.component.scss")).default]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n::ng-deep nb-layout-column {\n  //height: 80vw;\n  height: 100%;\n}*/\n#myImg {\n  border-radius: 50%;\n  width: 100%;\n  max-width: 200px;\n}\n#ItemsMenu {\n  padding-bottom: 30px;\n}\n#flipcardmax {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 25px;\n  /*@media screen and (max-width: $break-small) {\n    margin-top:10%\n   }\n   @media screen and (min-width: $break-large) {\n    margin-top:%\n\n\n   }*/\n}\n.Icon {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  background: #16161a;\n  cursor: pointer;\n}\n.iconsContainer {\n  padding-top: 20%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.wrapper {\n  position: relative;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contactIcon {\n  width: 20%;\n  margin: 15%;\n  margin-left: 0;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.icono {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcVXNlcnNcXG1sYW56YVxcYW5ndWxhckNWXFxBbmd1bGFyLUNWL3NyY1xcYXBwXFxzaGFyZWRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0U7RUFDRSxvQkFBQTtBQ0FKO0FETUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBOzs7Ozs7O0tBQUE7QUNJSjtBRE9FO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBR0EsZUFBQTtBQ05KO0FEWUU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1JKO0FEWUU7RUFHRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNiSjtBRGdCRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOjpuZy1kZWVwIG5iLWxheW91dC1jb2x1bW4ge1xyXG4gIC8vaGVpZ2h0OiA4MHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxufSovXHJcbiNteUltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gICNJdGVtc01lbnV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xyXG4gIH1cclxuXHJcbiAgJGJyZWFrLXNtYWxsOiA1MDBweDtcclxuICAkYnJlYWstbGFyZ2U6IDUwMXB4O1xyXG5cclxuICAjZmxpcGNhcmRtYXh7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAvKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkge1xyXG4gICAgICBtYXJnaW4tdG9wOjEwJVxyXG4gICAgIH1cclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UpIHtcclxuICAgICAgbWFyZ2luLXRvcDolXHJcblxyXG4gICAgICBcclxuICAgICB9Ki9cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLkljb257XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJhY2tncm91bmQ6IzE2MTYxYTtcclxuICAgIC8vd2lkdGg6MTAwcHg7XHJcbiAgICAvL2hlaWdodDoxMDBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIFxyXG5cclxuICAgXHJcbiAgfVxyXG5cclxuICAuaWNvbnNDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDoyMCU7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0SWNvbntcclxuICBcclxuICAgIC8vcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgbWFyZ2luIDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgXHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWNvbm97XHJcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MjVweDtcclxuIFxyXG4gIH1cclxuXHJcbiAgIiwiLypcbjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgLy9oZWlnaHQ6IDgwdnc7XG4gIGhlaWdodDogMTAwJTtcbn0qL1xuI215SW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuI0l0ZW1zTWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4jZmxpcGNhcmRtYXgge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIC8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7XG4gICAgbWFyZ2luLXRvcDoxMCVcbiAgIH1cbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkge1xuICAgIG1hcmdpbi10b3A6JVxuXG5cbiAgIH0qL1xufVxuXG4uSWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogIzE2MTYxYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbnNDb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3RJY29uIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbm8ge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../constant/aboutme */
    "./src/app/constant/aboutme.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(sidebarService) {
        _classCallCheck(this, NavbarComponent);

        this.sidebarService = sidebarService;
        this.avatar = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].avatar;
        this.link = _constant_aboutme__WEBPACK_IMPORTED_MODULE_3__["aboutme"].gmailpdf;
        this.items = [{
          title: 'Inicio',
          icon: 'hash-outline',
          link: '/'
        }, {
          title: 'Curriculum Vitae',
          icon: 'file-outline',
          link: '/cv'
        },
        /*{
          title: 'ChatBot',
          icon: { icon: 'message-square-outline', pack: 'eva' },
          link: '/Chat',
        },*/
        {
          title: 'Contacto',
          icon: 'email-outline',
          link: '/Contacto'
        }];
        this.collapsed = false;
      }

      _createClass(NavbarComponent, [{
        key: "toggle",
        value: function toggle() {
          this.sidebarService.toggle(true);

          if (this.collapsed) {
            this.collapsed = false;
          } else {
            this.collapsed = true;
          }

          this.innerWidth = window.innerWidth;

          if (this.innerWidth < 850) {
            if (this.collapsed) {
              this.collapsed = false;
            } else {
              this.collapsed = true;
            }
          } else {}

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.innerWidth = window.innerWidth; // console.log(this.innerWidth);

          if (this.innerWidth < 1200) {
            this.collapsed = true;
          }
        }
      }, {
        key: "onClickedOutside",
        value: function onClickedOutside(e) {
          // tslint:disable-next-line: no-string-literal
          console.log(e['screenY']); // tslint:disable-next-line: no-string-literal

          if (!this.collapsed && !(e['screenX'] > 19 && e['screenX'] < 40 && e['screenY'] > 128 && e['screenY'] < 151)) {
            this.sidebarService.toggle(true);
            this.collapsed = true;
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\mlanza\angularCV\Angular-CV\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map