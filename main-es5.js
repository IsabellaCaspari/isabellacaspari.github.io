function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
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
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/about-me-page/about-me-page.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me-page/about-me-page.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutMePageAboutMePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" id=\"about-me\" style=\"background-color:#FBA481; color: white;\">\n    <div class=\"container p-4\">\n        <div class=\"row\">\n            <div class=\"col-md-12 \">\n                some words\n                <h3>About me</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 \">I have completed my studies since 2018. Since then I have been working as a developer with a focus on front-end and app development. Currently I am working as an frontend for adorsys.gmbh. I have fun developing and designing beautiful things. I am super curious, interested in new technologies and super creativ\n                and in my spare time I love to do graphic design, outdoorsports and as avoluntary I'm organizing a christian youth group. Write me if you have any questions or feedback. I'm looking forward to hearing from you!</div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<app-start-page></app-start-page>\n<app-about-me-page></app-about-me-page>\n<app-tech-skill-page></app-tech-skill-page>\n<app-curriculum-vitae-page></app-curriculum-vitae-page>\n<app-portfolio-site></app-portfolio-site>\n<app-contact-page></app-contact-page>\n<app-footer></app-footer>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" id=\"contact\" style=\"background-color:#FBA481; color: white;\">\n  <div class=\"container p-4\">\n    <div class=\"row\">\n      <div class=\"col-md-6 pb-2\">\n        feel free to\n        <h3>Contact me</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 \">\n        <form #newRequest=\"ngForm\" (ngSubmit)=\"sendMail(newRequest.value)\">\n          <div class=\"form-group\">\n            <label for=\"email\">Your email</label>\n            <input (ngModel)=\"email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\"\n                   aria-describedby=\"emailHelp\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"regarding\">Why do you contact me?</label>\n            <input (ngModel)=\"regarding\" type=\"text\" class=\"form-control\" name=\"regarding\" id=\"regarding\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"text\">Your text</label>\n            <textarea (ngModel)=\"text\" class=\"form-control\" name=\"text\" id=\"text\" rows=\"4\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n        </form>\n      </div>\n\n      <div class=\"col-md-6 \">\n        <img class=\"img-fluid p-4 m-4\" src=\"/assets/img/photo_isabella.png\" style=\"width: 80%; border-radius: 50%\"/>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum-vitae-page/curriculum-vitae-page.component.html": (
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum-vitae-page/curriculum-vitae-page.component.html ***!
    \******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumVitaePageCurriculumVitaePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" id=\"curriculum-vitae\" style=\"background-color:#999999; color: white;\">\n    <div class=\"container pt-4\">\n\n        <div class=\"row\">\n            <div class=\"col-md-6 \">\n                <div class=\"panel panel-primary\">\n                    <div class=\"col-md-6 pb-2\">\n                      learned so far\n                        <h3>Education</h3>\n                    </div>\n                    <ul class=\"timeline\">\n                        <li class=\"pb-2\" *ngFor=\"let period of eduTimePeriod\">\n                            <b>{{period.endDate | date:' y' }}</b><br> {{period.title}}\n                            <br>{{period.description}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 pb-2\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"col-md-6 pb-2\">\n                        experienced so far\n                        <h2>Profession</h2>\n                    </div>\n                    <ul class=\"timeline\">\n                        <li class=\"pb-2\" *ngFor=\"let period of profTimePeriod\">\n                            <strong>{{period.endDate | date:' y' }}</strong><br>\n                          {{period.title}}<br>\n                          <a *ngIf=\"period.link != null\" href={{period.link}}> {{period.description}} </a>\n                          <a *ngIf=\"period.link == null\">{{period.description}}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": (
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div id=\"about-me bg-light\">\n    <div class=\"container p-4 mt-4\">\n        <div class=\"row p-4\">\n            <div class=\"col-sm text-center\">\n                Build with Angular\n            </div>\n            <div class=\"col-sm text-center\">\n                <a href=\"https://github.com/IsabellaCaspari\"><img src=\"/assets/img/github_logo.png\" style=\"width: 10%;\"></a>\n            </div>\n            <div class=\"col-sm text-center\">\n                © Copyright 2024, Isabella Caspari\n            </div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": (
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"\">\n        <img width=\"30\" height=\"30\" src=\"/assets/img/origami_icon.png\" class=\"d-inline-block align-top pr-1\" alt=\"\"> Isabella Caspari\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/#about-me\">about me</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/#tech-skills\">tech skills</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/#curriculum-vitae\">curriculum vitae</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/#portfolio\">portfolio</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/#contact\">contact</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-site/portfolio-site.component.html": (
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-site/portfolio-site.component.html ***!
    \****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortfolioSitePortfolioSiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" id=\"portfolio\" style=\"background-color:#5089A5; color: white;\">\n    <div class=\"container p-4\">\n        <div class=\"row\">\n            <div class=\"col-md-6 \">\n                take a look at\n                <h3>My Portfolio</h3>\n            </div>\n        </div>\n\n        <div class=\"row p-4\">\n            <div class=\"col-sm-12\">\n                <carousel [itemsPerSlide]=\"itemsPerSlide\" [singleSlideOffset]=\"singleSlideOffset\" [noWrap]=\"!noWrap\" [interval]=\"false\" [startFromIndex]=\"0\">\n                    <slide *ngFor=\"let slide of slides; let index=index\" class=\"mx-auto\">\n                        <div class=\"card center mb-5\">\n                            <img class=\"card-img-top\" [src]=\"slide.imageLink\" alt=\"Card image cap\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">{{slide.title}}</h5>\n                                <p class=\"card-text\">{{slide.description}}</p>\n                                <a *ngIf=\"slide.link\" (click)=openLink(slide.link) class=\"btn btn-primary\">See more</a>\n                            </div>\n                        </div>\n                    </slide>\n                </carousel>\n            </div>\n        </div>\n    </div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartPageStartPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" style=\"background-color: #183446; color: white;\">\n    <div class=\"container\">\n        <div class=\"row\" id=\"bubbles\">\n            <div class=\"col-md-2\">\n                <img class=\"img-fluid\" src=\"/assets/img/isabella_caspari_photo.jpg\" style=\" border-radius: 50%\" />\n            </div>\n            <div class=\"col-md-10 \">\n                <h1>Welcome!</h1>\n                <h2>To Isabella's homepage</h2>\n                <div class=\"bubble x1\"></div>\n                <div class=\"bubble x2\"></div>\n                <div class=\"bubble x3\"></div>\n                <div class=\"bubble x4\"></div>\n                <div class=\"bubble x5\"></div>\n            </div>\n        </div>\n        <div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/tech-skill-page/tech-skill-page.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tech-skill-page/tech-skill-page.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechSkillPageTechSkillPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"m-2\" id=\"tech-skills\" style=\"background-color: #5089A5; color: white;\">\n    <div class=\"container p-4\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                favourite technology\n                <h3>Techskills</h3>\n            </div>\n        </div>\n        <div class=\"row p-4\">\n            <div *ngFor=\"let tech of techList\" class=\"col-sm-3\">\n                <div class=\"row pt-2 pb-4 pr-4\">\n                    <div class=\"card\" (click)=\"openLink(tech.link)\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-12\">\n                                <div class=\"text-center\">\n                                    <img *ngIf=\"tech?.imageLink\" class=\"card-img rounded mx-auto\" src=\"{{ tech?.imageLink }}\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"progress\">\n                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=[tech.skillLevel]></div>\n                            </div>\n                        </div>\n                        <div class=\"overlay pt-4 mt-5\">\n                            <h4 class=\"text\">{{tech.name}}</h4>\n                            <p class=\"text\">expertice: {{tech.skillLevel}}%</p>\n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
        while (_) try {
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
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
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
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/about-me-page/about-me-page.component.less": (
  /*!************************************************************!*\
    !*** ./src/app/about-me-page/about-me-page.component.less ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAboutMePageAboutMePageComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lLXBhZ2UvYWJvdXQtbWUtcGFnZS5jb21wb25lbnQubGVzcyJ9 */";

    /***/
  }),
  /***/"./src/app/about-me-page/about-me-page.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/about-me-page/about-me-page.component.ts ***!
    \**********************************************************/
  /*! exports provided: AboutMePageComponent */
  /***/
  function srcAppAboutMePageAboutMePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutMePageComponent", function () {
      return AboutMePageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutMePageComponent = /*#__PURE__*/function () {
      function AboutMePageComponent() {
        _classCallCheck(this, AboutMePageComponent);
      }
      _createClass(AboutMePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return AboutMePageComponent;
    }();
    AboutMePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-me-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about-me-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/about-me-page/about-me-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about-me-page.component.less */"./src/app/about-me-page/about-me-page.component.less"))["default"]]
    })], AboutMePageComponent);

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [{
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }];
    var routerOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    };
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, routerOptions)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.less": (
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'isabellas-angular-app';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.less */"./src/app/app.component.less"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./start-page/start-page.component */"./src/app/start-page/start-page.component.ts");
    /* harmony import */
    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./navbar/navbar.component */"./src/app/navbar/navbar.component.ts");
    /* harmony import */
    var _tech_skill_page_tech_skill_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./tech-skill-page/tech-skill-page.component */"./src/app/tech-skill-page/tech-skill-page.component.ts");
    /* harmony import */
    var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-bootstrap/rating */"./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");
    /* harmony import */
    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./footer/footer.component */"./src/app/footer/footer.component.ts");
    /* harmony import */
    var _curriculum_vitae_page_curriculum_vitae_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./curriculum-vitae-page/curriculum-vitae-page.component */"./src/app/curriculum-vitae-page/curriculum-vitae-page.component.ts");
    /* harmony import */
    var _about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./about-me-page/about-me-page.component */"./src/app/about-me-page/about-me-page.component.ts");
    /* harmony import */
    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./contact-page/contact-page.component */"./src/app/contact-page/contact-page.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _portfolio_site_portfolio_site_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./portfolio-site/portfolio-site.component */"./src/app/portfolio-site/portfolio-site.component.ts");
    /* harmony import */
    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ngx-bootstrap/carousel */"./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_5__["StartPageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _tech_skill_page_tech_skill_page_component__WEBPACK_IMPORTED_MODULE_7__["TechSkillPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _curriculum_vitae_page_curriculum_vitae_page_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumVitaePageComponent"], _about_me_page_about_me_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutMePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["ContactPageComponent"], _portfolio_site_portfolio_site_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioSiteComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_8__["RatingModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/contact-page/contact-page.component.less": (
  /*!**********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.less ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactPageContactPageComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".btn-primary {\n  background: #5089A5;\n  border-color: #5089A5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsYWNhc3BhcmkvU291cmNldHJlZS9pc2FiZWxsYXMtYW5ndWxhci1hcHAvc3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM1MDg5QTU7XG4gIGJvcmRlci1jb2xvcjogIzUwODlBNTtcbn1cbiIsIi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM1MDg5QTU7XG4gIGJvcmRlci1jb2xvcjogIzUwODlBNTtcbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/contact-page/contact-page.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.ts ***!
    \********************************************************/
  /*! exports provided: ContactPageComponent */
  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ContactPageComponent = /*#__PURE__*/function () {
      function ContactPageComponent(router) {
        _classCallCheck(this, ContactPageComponent);
        this.router = router;
      }
      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendMail",
        value: function sendMail(formValue) {
          open('mailto:isabella.caspari@posteo.de?subject=' + formValue.regarding + '&body=' + formValue.text);
        }
      }]);
      return ContactPageComponent;
    }();
    ContactPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact-page.component.less */"./src/app/contact-page/contact-page.component.less"))["default"]]
    })], ContactPageComponent);

    /***/
  }),
  /***/"./src/app/curriculum-vitae-page/curriculum-vitae-page.component.less": (
  /*!****************************************************************************!*\
    !*** ./src/app/curriculum-vitae-page/curriculum-vitae-page.component.less ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppCurriculumVitaePageCurriculumVitaePageComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "body {\n  color: #fff !important;\n}\nul.timeline {\n  list-style-type: none;\n  position: relative;\n}\nul.timeline:before {\n  content: ' ';\n  background: white;\n  display: inline-block;\n  position: absolute;\n  left: 29px;\n  width: 2px;\n  height: 100%;\n  z-index: 400;\n}\nul.timeline > li {\n  margin: 20px 0;\n  padding-left: 20px;\n}\nul.timeline > li:before {\n  content: ' ';\n  background: #999999;\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid white;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  z-index: 400;\n}\na {\n  color: #FBA481;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsYWNhc3BhcmkvU291cmNldHJlZS9pc2FiZWxsYXMtYW5ndWxhci1hcHAvc3JjL2FwcC9jdXJyaWN1bHVtLXZpdGFlLXBhZ2UvY3VycmljdWx1bS12aXRhZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jdXJyaWN1bHVtLXZpdGFlLXBhZ2UvY3VycmljdWx1bS12aXRhZS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjtBREVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FGO0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUY7QURJQTtFQUNFLGNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2N1cnJpY3VsdW0tdml0YWUtcGFnZS9jdXJyaWN1bHVtLXZpdGFlLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xufVxuXG51bC50aW1lbGluZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwudGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI5cHg7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogNDAwO1xufVxudWwudGltZWxpbmUgPiBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgYmFja2dyb3VuZDojOTk5OTk5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgbGVmdDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgei1pbmRleDogNDAwO1xufVxuXG5cbmEge1xuICBjb2xvcjogI0ZCQTQ4MTtcbn1cbiIsImJvZHkge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxudWwudGltZWxpbmUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyOXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDQwMDtcbn1cbnVsLnRpbWVsaW5lID4gbGkge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xuICBjb250ZW50OiAnICc7XG4gIGJhY2tncm91bmQ6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBsZWZ0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA0MDA7XG59XG5hIHtcbiAgY29sb3I6ICNGQkE0ODE7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/curriculum-vitae-page/curriculum-vitae-page.component.ts": (
  /*!**************************************************************************!*\
    !*** ./src/app/curriculum-vitae-page/curriculum-vitae-page.component.ts ***!
    \**************************************************************************/
  /*! exports provided: CurriculumVitaePageComponent */
  /***/
  function srcAppCurriculumVitaePageCurriculumVitaePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CurriculumVitaePageComponent", function () {
      return CurriculumVitaePageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CurriculumVitaePageComponent = /*#__PURE__*/function () {
      function CurriculumVitaePageComponent() {
        _classCallCheck(this, CurriculumVitaePageComponent);
      }
      _createClass(CurriculumVitaePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initList();
        }
      }, {
        key: "initList",
        value: function initList() {
          this.eduTimePeriod = [{
            title: 'Bachelor of Engineering',
            description: 'Georg-Simon-Ohm technical university, Media Engineering',
            startDate: new Date(2014, 9, 10),
            endDate: new Date(2018, 2, 1)
          }, {
            title: 'A-Level focus on economy',
            description: 'Berufsoberschule Scheyern',
            startDate: new Date(2013, 8, 1),
            endDate: new Date(2014, 6, 1)
          }, {
            title: 'B-Level focus on art',
            description: 'Dietrich-Bonhoeffer Realschule Neustadt/Aisch',
            startDate: new Date(2004, 8, 1),
            endDate: new Date(2010, 6, 1)
          }];
          this.profTimePeriod = [{
            title: 'further education: Professional Scrum Master',
            description: 'Scrum.org',
            link: 'https://www.scrum.org/user/733985',
            startDate: new Date(2018, 7, 1),
            endDate: new Date(2020, 3, 1)
          }, {
            title: 'further education: Training license for trainees',
            description: 'Industrie- und Handelskammer',
            link: 'https://www.ihk-akademie-mittelfranken.de/akademie/Weiterbildung/Ausbildung-der-Ausbilder-AdA-/TL70110321',
            startDate: new Date(2018, 7, 1),
            endDate: new Date(2020, 3, 1)
          }, {
            title: 'android developer',
            description: 'adorsys Gmbh & Co.KG',
            link: 'https://adorsys.com/de/',
            startDate: new Date(2018, 7, 1),
            endDate: new Date(2020, 3, 1)
          }, {
            title: 'developer (working student)',
            link: 'https://adorsys.com/de',
            description: 'adorsys Gmbh & Co.KG ',
            startDate: new Date(2017, 7, 1),
            endDate: new Date(2018, 5, 1)
          }, {
            title: 'usability design (working student)',
            description: 'DATEV eG',
            link: 'https://www.datev.com/',
            startDate: new Date(2016, 7, 1),
            endDate: new Date(2017, 7, 1)
          }, {
            title: 'website development (internship)',
            description: 'Universitas Kristen Immanuel Yogyakarta',
            startDate: new Date(2015, 10, 1),
            endDate: new Date(2016, 7, 1)
          }, {
            title: 'development, usability design (working student)',
            description: 'DATEV eG',
            link: 'https://www.datev.com/',
            startDate: new Date(2014, 9, 1),
            endDate: new Date(2015, 6, 1)
          }, {
            title: 'computer science expert (apprenticeship)',
            link: 'https://www.datev.com/',
            description: 'DATEV eG',
            startDate: new Date(2010, 8, 1),
            endDate: new Date(2013, 6, 1)
          }];
        }
      }]);
      return CurriculumVitaePageComponent;
    }();
    CurriculumVitaePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-curriculum-vitae-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./curriculum-vitae-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum-vitae-page/curriculum-vitae-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./curriculum-vitae-page.component.less */"./src/app/curriculum-vitae-page/curriculum-vitae-page.component.less"))["default"]]
    })], CurriculumVitaePageComponent);

    /***/
  }),
  /***/"./src/app/footer/footer.component.less": (
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.less ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppFooterFooterComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */";

    /***/
  }),
  /***/"./src/app/footer/footer.component.ts": (
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.less */"./src/app/footer/footer.component.less"))["default"]]
    })], FooterComponent);

    /***/
  }),
  /***/"./src/app/navbar/navbar.component.less": (
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.less ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppNavbarNavbarComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MifQ== */";

    /***/
  }),
  /***/"./src/app/navbar/navbar.component.ts": (
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/
  /*! exports provided: NavbarComponent */
  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }
      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return NavbarComponent;
    }();
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./navbar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./navbar.component.less */"./src/app/navbar/navbar.component.less"))["default"]]
    })], NavbarComponent);

    /***/
  }),
  /***/"./src/app/portfolio-site/portfolio-site.component.css": (
  /*!*************************************************************!*\
    !*** ./src/app/portfolio-site/portfolio-site.component.css ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPortfolioSitePortfolioSiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "h4 {\n    color: black;\n}\n\n.card {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.card-title,\n.card-text {\n    color: #000;\n}\n\n.card.center.mb-5 {\n    width: 60% !important;\n}\n\n.btn-primary {\n    background: #5089A5;\n    border-color: #5089A5;\n}\n\n@media only screen and (max-width: 767px) {\n    .card.center.mb-5 {\n        width: 100% !important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXNpdGUvcG9ydGZvbGlvLXNpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1zaXRlL3BvcnRmb2xpby1zaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZC10aXRsZSxcbi5jYXJkLXRleHQge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uY2FyZC5jZW50ZXIubWItNSB7XG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICM1MDg5QTU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTA4OUE1O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQuY2VudGVyLm1iLTUge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/portfolio-site/portfolio-site.component.ts": (
  /*!************************************************************!*\
    !*** ./src/app/portfolio-site/portfolio-site.component.ts ***!
    \************************************************************/
  /*! exports provided: PortfolioSiteComponent */
  /***/
  function srcAppPortfolioSitePortfolioSiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PortfolioSiteComponent", function () {
      return PortfolioSiteComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PortfolioSiteComponent = /*#__PURE__*/function () {
      function PortfolioSiteComponent() {
        _classCallCheck(this, PortfolioSiteComponent);
        this.itemsPerSlide = 1;
        this.singleSlideOffset = false;
        this.noWrap = false;
        this.slidesChangeMessage = '';
      }
      _createClass(PortfolioSiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initList();
        }
      }, {
        key: "initList",
        value: function initList() {
          this.slides = [{
            title: 'Facebook Chatbook',
            description: 'This is my chatbot called orlanda that can coordinate appointments and access your Google calendar. ' + 'I developed this work as part of my bachelor thesis. To see more click the button and visit my github page.',
            imageLink: '/assets/img/portfolio/chat_bot.png',
            link: 'https://github.com/IsabellaCaspari/orlanda-nodejs-backend'
          }, {
            title: 'Flutter App Development of the \'bibel21\' app',
            description: 'The app helps you to read through the bible in a year. To see more click the button and visit my github page.',
            imageLink: '/assets/img/portfolio/bibel21.png',
            link: 'https://github.com/IsabellaCaspari/bible21'
          }, {
            title: 'App Development of the \'business card\' app',
            description: 'The app helps you to manage your business cards, you can create new ones or ' + 'edit existing ones. It is very easy to share business cards with colleagues and friends via' + ' QR-code. To see more click the button and visit my github page.',
            imageLink: '/assets/img/portfolio/app_development.png',
            link: 'https://github.com/IsabellaCaspari/business-card-app-kotlin'
          }, {
            title: 'Website of a local church',
            description: 'I programmed this website with wordpress. I decided to use this technology, so that other ' + 'non-technical people can maintain the content. To see more click the button and visit the homepage. ',
            imageLink: '/assets/img/portfolio/website_efg.png',
            link: 'https://efg-vestnertor.de'
          }, {
            title: 'Graphic design',
            description: 'I enjoy designing flyers and cards. Here for example a concert flyer for songwriters. ' + 'For returning occations I also develop a design manual with colors, composition and fonts.',
            imageLink: '/assets/img/portfolio/graphic_design.png'
          }, {
            title: 'Logo Design',
            description: 'Create and design logos through a creative process. Development of a suitable color scheme. ' + 'Here you can see e.g. a wedding logo.',
            imageLink: '/assets/img/portfolio/logo_design.png'
          }];
        }
      }, {
        key: "openLink",
        value: function openLink(link) {
          open(link);
        }
      }]);
      return PortfolioSiteComponent;
    }();
    PortfolioSiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio-site',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./portfolio-site.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-site/portfolio-site.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./portfolio-site.component.css */"./src/app/portfolio-site/portfolio-site.component.css"))["default"]]
    })], PortfolioSiteComponent);

    /***/
  }),
  /***/"./src/app/start-page/start-page.component.less": (
  /*!******************************************************!*\
    !*** ./src/app/start-page/start-page.component.less ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppStartPageStartPageComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "html,\nbody,\n#bubbles {\n  height: 100%;\n}\nbody {\n  overflow: hidden;\n}\n#bubbles {\n  padding: 100px 0;\n}\n.bubble {\n  width: 60px;\n  height: 60px;\n  background: #5089A5;\n  border-radius: 200px;\n  -moz-border-radius: 200px;\n  -webkit-border-radius: 200px;\n  position: absolute;\n}\n.x1 {\n  transform: scale(0.9);\n  opacity: 0.4;\n  background: #D95032;\n  -webkit-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;\n  -moz-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;\n  -o-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;\n}\n.x2 {\n  left: 400px;\n  transform: scale(0.6);\n  opacity: 0.4;\n  background: #FBA481;\n  -webkit-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;\n  -moz-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;\n  -o-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;\n}\n.x3 {\n  left: 320px;\n  transform: scale(0.8);\n  opacity: 0.3;\n  background: white;\n  -webkit-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n  -moz-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n  -o-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n}\n.x4 {\n  left: 650px;\n  transform: scale(0.75);\n  opacity: 0.35;\n  -webkit-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;\n  -moz-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;\n  -o-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;\n}\n.x5 {\n  left: 150px;\n  transform: scale(0.8);\n  opacity: 0.3;\n  -webkit-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;\n  -moz-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;\n  -o-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;\n}\n@-webkit-keyframes moveclouds {\n  0% {\n    top: 500px;\n  }\n  100% {\n    top: -500px;\n  }\n}\n@-webkit-keyframes sideWays {\n  0% {\n    margin-left: 0px;\n  }\n  100% {\n    margin-left: 50px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .img-fluid {\n    max-width: 80%;\n    width: 80% !important;\n  }\n  .x2 {\n    left: 100px !important;\n  }\n  .x3 {\n    left: 200px !important;\n  }\n  .x4 {\n    left: 230px !important;\n  }\n  .x5 {\n    left: 180px !important;\n  }\n}\n@media \"~only screen and (min-width: 960px) and (max-width: 1199px)\", only screen and (min-width: 720px) and (max-width: 959px) {\n  .img-fluid {\n    width: 70% !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsYWNhc3BhcmkvU291cmNldHJlZS9pc2FiZWxsYXMtYW5ndWxhci1hcHAvc3JjL2FwcC9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7O0VBR0UsWUFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtBQ05GO0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVBO0VBR0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RkFBQTtFQUNBLDBGQUFBO0VBQ0Esd0ZBQUE7QUNSRjtBRFdBO0VBQ0UsV0FBQTtFQUdBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkZBQUE7RUFDQSwwRkFBQTtFQUNBLHdGQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFHQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZGQUFBO0VBQ0EsMEZBQUE7RUFDQSx3RkFBQTtBQ1ZGO0FEYUE7RUFDRSxXQUFBO0VBR0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkZBQUE7RUFDQSwwRkFBQTtFQUNBLHdGQUFBO0FDWEY7QURjQTtFQUNFLFdBQUE7RUFHQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtFQUNBLHlGQUFBO0VBQ0EsdUZBQUE7QUNaRjtBRGVBO0VBQ0U7SUFDRSxVQUFBO0VDYkY7RURlQTtJQUNFLFdBQUE7RUNiRjtBQUNGO0FEZ0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ2RGO0VEZ0JBO0lBQ0UsaUJBQUE7RUNkRjtBQUNGO0FEc0RBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUNwQkY7RUR1QkE7SUFDRSxzQkFBQTtFQ3JCRjtFRHdCQTtJQUNFLHNCQUFBO0VDdEJGO0VEeUJBO0lBQ0Usc0JBQUE7RUN2QkY7RUQwQkE7SUFDRSxzQkFBQTtFQ3hCRjtBQUNGO0FENEJBO0VBQ0U7SUFDRSxxQkFBQTtFQzFCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHRhYmxldDogflwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpXCI7XG5AcGhvbmU6IH5cIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIjtcbkBkZXNrdG9wOiBcIn5vbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCI7XG5cblxuaHRtbCxcbmJvZHksXG4jYnViYmxlcyB7XG4gIGhlaWdodDogMTAwJVxufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4jYnViYmxlcyB7XG4gIHBhZGRpbmc6IDEwMHB4IDBcbn1cblxuLmJ1YmJsZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM1MDg5QTU7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi54MSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJhY2tncm91bmQ6ICNEOTUwMzI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgMTVzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtby1hbmltYXRpb246IG1vdmVjbG91ZHMgMTVzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ueDIge1xuICBsZWZ0OiA0MDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIG9wYWNpdHk6IDAuNDtcbiAgYmFja2dyb3VuZDogI0ZCQTQ4MTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyNXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyNXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi54MyB7XG4gIGxlZnQ6IDMyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMjBzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi54NCB7XG4gIGxlZnQ6IDY1MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgb3BhY2l0eTogMC4zNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMThzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxOHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxOHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi54NSB7XG4gIGxlZnQ6IDE1MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyA3cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgN3MgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyA3cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVjbG91ZHMge1xuICAwJSB7XG4gICAgdG9wOiA1MDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC01MDBweDtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lkZVdheXMge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgbW92ZWNsb3VkcyB7XG4gIDAlIHtcbiAgICB0b3A6IDUwMHB4O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAtNTAwcHg7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNpZGVXYXlzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBtb3ZlY2xvdWRzIHtcbiAgMCUge1xuICAgIHRvcDogNTAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtNTAwcHg7XG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBzaWRlV2F5cyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBAcGhvbmUge1xuICAuaW1nLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAueDIge1xuICAgIGxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAueDMge1xuICAgIGxlZnQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAueDQge1xuICAgIGxlZnQ6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAueDUge1xuICAgIGxlZnQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuXG5AbWVkaWEgQGRlc2t0b3AsIEB0YWJsZXQge1xuICAuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuIiwiaHRtbCxcbmJvZHksXG4jYnViYmxlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2J1YmJsZXMge1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuLmJ1YmJsZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM1MDg5QTU7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ueDEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgb3BhY2l0eTogMC40O1xuICBiYWNrZ3JvdW5kOiAjRDk1MDMyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxNXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi54MiB7XG4gIGxlZnQ6IDQwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgb3BhY2l0eTogMC40O1xuICBiYWNrZ3JvdW5kOiAjRkJBNDgxO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyNXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDI1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDI1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi54MyB7XG4gIGxlZnQ6IDMyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMjBzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ueDQge1xuICBsZWZ0OiA2NTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE4cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgMThzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtby1hbmltYXRpb246IG1vdmVjbG91ZHMgMThzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLng1IHtcbiAgbGVmdDogMTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwLjM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDdzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyA3cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDdzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVjbG91ZHMge1xuICAwJSB7XG4gICAgdG9wOiA1MDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC01MDBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNpZGVXYXlzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBtb3ZlY2xvdWRzIHtcbiAgMCUge1xuICAgIHRvcDogNTAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtNTAwcHg7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzaWRlV2F5cyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG1vdmVjbG91ZHMge1xuICAwJSB7XG4gICAgdG9wOiA1MDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC01MDBweDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBzaWRlV2F5cyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbWctZmx1aWQge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgfVxuICAueDIge1xuICAgIGxlZnQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLngzIHtcbiAgICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC54NCB7XG4gICAgbGVmdDogMjMwcHggIWltcG9ydGFudDtcbiAgfVxuICAueDUge1xuICAgIGxlZnQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBcIn5vbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/start-page/start-page.component.ts": (
  /*!****************************************************!*\
    !*** ./src/app/start-page/start-page.component.ts ***!
    \****************************************************/
  /*! exports provided: StartPageComponent */
  /***/
  function srcAppStartPageStartPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StartPageComponent", function () {
      return StartPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var StartPageComponent = /*#__PURE__*/function () {
      function StartPageComponent() {
        _classCallCheck(this, StartPageComponent);
      }
      _createClass(StartPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return StartPageComponent;
    }();
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./start-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./start-page.component.less */"./src/app/start-page/start-page.component.less"))["default"]]
    })], StartPageComponent);

    /***/
  }),
  /***/"./src/app/tech-skill-page/tech-skill-page.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/tech-skill-page/tech-skill-page.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTechSkillPageTechSkillPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".overlay {\n    transition: .1s ease;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.card:hover .overlay {\n    opacity: 1;\n}\n\n.card:hover {\n    opacity: 0.7;\n}\n\n.text {\n    color: black;\n}\n\n.progress-bar {\n    background-color: #5089A5;\n}\n\n.card-img {\n    width: 70%!important;\n}\n\n@media only screen and (max-width: 767px) {\n    .card-img {\n        width: 70%!important;\n    }\n\n  .card-body{\n    visibility: hidden !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaC1za2lsbC1wYWdlL3RlY2gtc2tpbGwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7O0VBRUY7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlY2gtc2tpbGwtcGFnZS90ZWNoLXNraWxsLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXIgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDg5QTU7XG59XG5cbi5jYXJkLWltZyB7XG4gICAgd2lkdGg6IDcwJSFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgICB3aWR0aDogNzAlIWltcG9ydGFudDtcbiAgICB9XG5cbiAgLmNhcmQtYm9keXtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/tech-skill-page/tech-skill-page.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/tech-skill-page/tech-skill-page.component.ts ***!
    \**************************************************************/
  /*! exports provided: TechSkillPageComponent */
  /***/
  function srcAppTechSkillPageTechSkillPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TechSkillPageComponent", function () {
      return TechSkillPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TechSkillPageComponent = /*#__PURE__*/function () {
      function TechSkillPageComponent() {
        _classCallCheck(this, TechSkillPageComponent);
        this.rate = 7;
      }
      _createClass(TechSkillPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initList();
        }
      }, {
        key: "openLink",
        value: function openLink(link) {
          open(link);
        }
      }, {
        key: "initList",
        value: function initList() {
          this.techList = [{
            name: 'android',
            imageLink: '/assets/img/logos/android_logo.png',
            skillLevel: 75,
            star: 5,
            link: 'https://developer.android.com'
          }, {
            name: 'kotlin',
            imageLink: '/assets/img/logos/kotlin_logo.png',
            skillLevel: 80,
            star: 4,
            link: 'https://kotlinlang.org'
          }, {
            name: 'flutter',
            imageLink: '/assets/img/logos/flutter_logo.png',
            skillLevel: 70,
            star: 4,
            link: 'https://flutter.dev'
          }, {
            name: 'java',
            imageLink: '/assets/img/logos/java_logo.png',
            skillLevel: 75,
            star: 4,
            link: 'https://java.com'
          }, {
            name: 'html',
            imageLink: '/assets/img/logos/html_css_logo.png',
            skillLevel: 80,
            star: 4,
            link: 'https://html.spec.whatwg.org/multipage/'
          }, {
            name: 'css',
            imageLink: '/assets/img/logos/css_logo.png',
            skillLevel: 70,
            star: 4,
            link: 'https://www.w3schools.com/css/'
          }, {
            name: 'angular',
            imageLink: '/assets/img/logos/angular_logo.png',
            skillLevel: 60,
            star: 3,
            link: 'https://angular.io'
          }, {
            name: 'indesign, photoshop, illustrator',
            imageLink: '/assets/img/logos/adobe_cloud_logo.png',
            skillLevel: 75,
            star: 3,
            link: 'https://www.adobe.com'
          }];
        }
      }]);
      return TechSkillPageComponent;
    }();
    TechSkillPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tech-skill-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./tech-skill-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/tech-skill-page/tech-skill-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./tech-skill-page.component.css */"./src/app/tech-skill-page/tech-skill-page.component.css"))["default"]]
    })], TechSkillPageComponent);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
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
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /Users/isabellacaspari/Sourcetree/isabellas-angular-app/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map