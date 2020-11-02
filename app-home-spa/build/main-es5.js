function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_core/_guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/_core/_guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_core_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_core/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router, route) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.route = route;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.loggedIn()) {
            return true;
          }

          this.router.navigate(['login'], {
            queryParams: {
              uri: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_core/_services/alertify.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_core/_services/alertify.service.ts ***!
    \*****************************************************/

  /*! exports provided: AlertifyService */

  /***/
  function srcApp_core_servicesAlertifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertifyService", function () {
      return AlertifyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);

    var AlertifyService = /*#__PURE__*/function () {
      function AlertifyService() {
        _classCallCheck(this, AlertifyService);

        this.$swal = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: function didOpen(toast) {
            toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
            toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
          }
        });
      }

      _createClass(AlertifyService, [{
        key: "confirm",
        value: function confirm(title, message, okCallback) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then(function (result) {
            if (result.value) {
              okCallback();
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
          });
        }
      }, {
        key: "valid",
        value: function valid(title, message) {
          return new Promise(function (resolve, rejects) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: title,
              text: message,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No'
            }).then(function (result) {
              if (result.value) {
                resolve(true);
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                rejects(false);
              }
            });
          });
        }
      }, {
        key: "validation",
        value: function validation(title, message) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(title, message, 'warning');
        }
      }, {
        key: "success",
        value: function success(message, noToast) {
          if (!noToast) {
            this.Toast.fire({
              icon: 'success',
              title: message
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Successfully!', message, 'success');
          }
        }
      }, {
        key: "error",
        value: function error(message, noToast) {
          if (!noToast) {
            this.Toast.fire({
              icon: 'error',
              title: message
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', message, 'error');
          }
        }
      }, {
        key: "warning",
        value: function warning(message, noToast) {
          if (!noToast) {
            this.Toast.fire({
              icon: 'warning',
              title: message
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Warning!', message, 'warning');
          }
        }
      }, {
        key: "message",
        value: function message(_message, noToast) {
          if (!noToast) {
            this.Toast.fire({
              icon: 'info',
              title: _message
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info!', _message, 'info');
          }
        }
      }]);

      return AlertifyService;
    }();

    AlertifyService.ɵfac = function AlertifyService_Factory(t) {
      return new (t || AlertifyService)();
    };

    AlertifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertifyService,
      factory: AlertifyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_core/_services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_core/_services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_core_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth/login';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.levelSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this.currentLevel = this.levelSource.asObservable();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(model) {
          var _this = this;

          return this.http.post(this.baseUrl, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = response;

            if (data) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('user', JSON.stringify(data.user));
              _this.decodedToken = _this.jwtHelper.decodeToken(data.token);
              _this.currentUser = data.user.User;
            }
          }));
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var token = localStorage.getItem('token');
          return !this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var userRoles = this.decodedToken.role;
          allowedRoles.forEach(function (element) {
            if (userRoles.includes(element)) {
              isMatch = true;
              return;
            }
          });
          return isMatch;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_core/_services/category.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_core/_services/category.service.ts ***!
    \*****************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcApp_core_servicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.ModalNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentModalName = this.ModalNameSource.asObservable();
      }

      _createClass(CategoryService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.baseUrl + 'Category/GetAll', {});
        }
      }, {
        key: "create",
        value: function create(model) {
          return this.http.post(this.baseUrl + 'Category/Create', model);
        }
      }, {
        key: "update",
        value: function update(model) {
          return this.http.put(this.baseUrl + 'Category/Update', model);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.baseUrl + 'Category/Delete/' + id);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_core/_services/role.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_core/_services/role.service.ts ***!
    \*************************************************/

  /*! exports provided: RoleService */

  /***/
  function srcApp_core_servicesRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleService", function () {
      return RoleService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var RoleService = /*#__PURE__*/function () {
      function RoleService(http) {
        _classCallCheck(this, RoleService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.ModalNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentModalName = this.ModalNameSource.asObservable();
      }

      _createClass(RoleService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.baseUrl + 'Role/GetAll', {});
        }
      }, {
        key: "create",
        value: function create(model) {
          return this.http.post(this.baseUrl + 'Role/Create', model);
        }
      }, {
        key: "update",
        value: function update(model) {
          return this.http.put(this.baseUrl + 'Role/Update', model);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.baseUrl + 'Role/Delete/' + id);
        }
      }]);

      return RoleService;
    }();

    RoleService.ɵfac = function RoleService_Factory(t) {
      return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleService,
      factory: RoleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_core/_services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_core/_services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_core_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.ModalNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentModalName = this.ModalNameSource.asObservable();
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.baseUrl + 'User/GetAll', {});
        }
      }, {
        key: "create",
        value: function create(model) {
          return this.http.post(this.baseUrl + 'User/Create', model);
        }
      }, {
        key: "update",
        value: function update(model) {
          return this.http.put(this.baseUrl + 'User/Update', model);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.baseUrl + 'User/Delete/' + id);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./views/shared/layout/layout.component */
    "./src/app/views/shared/layout/layout.component.ts");
    /* harmony import */


    var _views_shared_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/shared/p404/p404.component */
    "./src/app/views/shared/p404/p404.component.ts");
    /* harmony import */


    var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views/login/login.component */
    "./src/app/views/login/login.component.ts");
    /* harmony import */


    var _views_shared_p500_p500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./views/shared/p500/p500.component */
    "./src/app/views/shared/p500/p500.component.ts");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_core/_guards/auth.guard */
    "./src/app/_core/_guards/auth.guard.ts");

    var routes = [// App routes goes here here
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '',
      component: _views_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      runGuardsAndResolvers: 'always',
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: 'app-home',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./views/app-home/app-home.module */
          "./src/app/views/app-home/app-home.module.ts")).then(function (m) {
            return m.AppHomeModule;
          });
        }
      }]
    }, {
      path: 'login',
      component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      data: {
        title: 'Login'
      }
    }, {
      path: '404',
      component: _views_shared_p404_p404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"],
      data: {
        title: 'Not Found'
      }
    }, {
      path: '500',
      component: _views_shared_p500_p500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
      data: {
        title: 'Server Error'
      }
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'apphome-spa';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 160px; \r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  \r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #025fce !important;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCx5QkFBeUI7RUFDM0I7O0VBRUEsK0JBQStCOztFQUUvQjtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxpbmcgKi9cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWZjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _service_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service.interceptor */
    "./src/app/service.interceptor.ts");
    /* harmony import */


    var _views_app_home_app_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./views/app-home/app-home.module */
    "./src/app/views/app-home/app-home.module.ts");
    /* harmony import */


    var _views_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./views/shared/layout/layout.component */
    "./src/app/views/shared/layout/layout.component.ts");
    /* harmony import */


    var _views_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./views/shared/nav-bar/nav-bar.component */
    "./src/app/views/shared/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _views_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./views/shared/footer/footer.component */
    "./src/app/views/shared/footer/footer.component.ts");
    /* harmony import */


    var _views_shared_p404_p404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./views/shared/p404/p404.component */
    "./src/app/views/shared/p404/p404.component.ts");
    /* harmony import */


    var _views_shared_p500_p500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./views/shared/p500/p500.component */
    "./src/app/views/shared/p500/p500.component.ts");
    /* harmony import */


    var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./views/login/login.component */
    "./src/app/views/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_5__["ServiceInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _views_app_home_app_home_module__WEBPACK_IMPORTED_MODULE_6__["AppHomeModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:5000'],
          disallowedRoutes: ['localhost:5000/api/auth']
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _views_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _views_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _views_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _views_shared_p404_p404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"], _views_shared_p500_p500_component__WEBPACK_IMPORTED_MODULE_11__["P500Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _views_app_home_app_home_module__WEBPACK_IMPORTED_MODULE_6__["AppHomeModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _views_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _views_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _views_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _views_shared_p404_p404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"], _views_shared_p500_p500_component__WEBPACK_IMPORTED_MODULE_11__["P500Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _views_app_home_app_home_module__WEBPACK_IMPORTED_MODULE_6__["AppHomeModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              allowedDomains: ['localhost:5000'],
              disallowedRoutes: ['localhost:5000/api/auth']
            }
          })],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_5__["ServiceInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service.interceptor.ts":
  /*!****************************************!*\
    !*** ./src/app/service.interceptor.ts ***!
    \****************************************/

  /*! exports provided: ServiceInterceptor */

  /***/
  function srcAppServiceInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceInterceptor", function () {
      return ServiceInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceInterceptor = /*#__PURE__*/function () {
      function ServiceInterceptor() {
        _classCallCheck(this, ServiceInterceptor);
      }

      _createClass(ServiceInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // WTS TODO: You can personalize your http interception (token for login, handle errors, redirections, loggers ...)
          // More information in:
          // https://angular.io/api/common/http/HttpInterceptor
          // https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
          return next.handle(req);
        }
      }]);

      return ServiceInterceptor;
    }();

    ServiceInterceptor.ɵfac = function ServiceInterceptor_Factory(t) {
      return new (t || ServiceInterceptor)();
    };

    ServiceInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceInterceptor,
      factory: ServiceInterceptor.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/app-home-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/app-home/app-home-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AppHomeRoutingModule */

  /***/
  function srcAppViewsAppHomeAppHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHomeRoutingModule", function () {
      return AppHomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _role_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./role/role.component */
    "./src/app/views/app-home/role/role.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/views/app-home/category/category.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/views/app-home/user/user.component.ts");
    /* harmony import */


    var _bpfc_bpfc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bpfc/bpfc.component */
    "./src/app/views/app-home/bpfc/bpfc.component.ts");

    var routes = [{
      path: '',
      data: {
        title: '',
        breadcrumb: ''
      },
      children: [{
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_2__["RoleComponent"],
        data: {
          title: 'role',
          breadcrumb: 'role'
        }
      }, {
        path: 'category',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
        data: {
          title: 'category',
          breadcrumb: 'category'
        }
      }, {
        path: 'bpfc',
        component: _bpfc_bpfc_component__WEBPACK_IMPORTED_MODULE_5__["BpfcComponent"],
        data: {
          title: 'bpfc',
          breadcrumb: 'bpfc'
        }
      }, {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        data: {
          title: 'user',
          breadcrumb: 'user'
        }
      }]
    }];

    var AppHomeRoutingModule = function AppHomeRoutingModule() {
      _classCallCheck(this, AppHomeRoutingModule);
    };

    AppHomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppHomeRoutingModule
    });
    AppHomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppHomeRoutingModule_Factory(t) {
        return new (t || AppHomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppHomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/app-home.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/app-home/app-home.module.ts ***!
    \***************************************************/

  /*! exports provided: AppHomeModule */

  /***/
  function srcAppViewsAppHomeAppHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHomeModule", function () {
      return AppHomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-home-routing.module */
    "./src/app/views/app-home/app-home-routing.module.ts");
    /* harmony import */


    var _role_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./role/role.component */
    "./src/app/views/app-home/role/role.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/views/app-home/category/category.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/views/app-home/user/user.component.ts");
    /* harmony import */


    var _bpfc_bpfc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bpfc/bpfc.component */
    "./src/app/views/app-home/bpfc/bpfc.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-grids */
    "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");

    var AppHomeModule = function AppHomeModule() {
      _classCallCheck(this, AppHomeModule);
    };

    AppHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppHomeModule
    });
    AppHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppHomeModule_Factory(t) {
        return new (t || AppHomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["DropDownListAllModule"], _app_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppHomeRoutingModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["GridAllModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppHomeModule, {
        declarations: [_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _bpfc_bpfc_component__WEBPACK_IMPORTED_MODULE_6__["BpfcComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["DropDownListAllModule"], _app_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppHomeRoutingModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["GridAllModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__["DropDownListAllModule"], _app_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppHomeRoutingModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["GridAllModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          declarations: [_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _bpfc_bpfc_component__WEBPACK_IMPORTED_MODULE_6__["BpfcComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/bpfc/bpfc.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/app-home/bpfc/bpfc.component.ts ***!
    \*******************************************************/

  /*! exports provided: BpfcComponent */

  /***/
  function srcAppViewsAppHomeBpfcBpfcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BpfcComponent", function () {
      return BpfcComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BpfcComponent = /*#__PURE__*/function () {
      function BpfcComponent() {
        _classCallCheck(this, BpfcComponent);
      }

      _createClass(BpfcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BpfcComponent;
    }();

    BpfcComponent.ɵfac = function BpfcComponent_Factory(t) {
      return new (t || BpfcComponent)();
    };

    BpfcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BpfcComponent,
      selectors: [["app-bpfc"]],
      decls: 2,
      vars: 0,
      template: function BpfcComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " bpfc works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1ob21lL2JwZmMvYnBmYy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpfcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bpfc',
          templateUrl: './bpfc.component.html',
          styleUrls: ['./bpfc.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/category/category.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/app-home/category/category.component.ts ***!
    \***************************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppViewsAppHomeCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-grids */
    "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.js");
    /* harmony import */


    var src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_core/_services/alertify.service */
    "./src/app/_core/_services/alertify.service.ts");
    /* harmony import */


    var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_core/_services/category.service */
    "./src/app/_core/_services/category.service.ts");

    var _c0 = ["grid"];

    function CategoryComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.NO(data_r3.index), " ");
      }
    }

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(categoryService, alertify) {
        _classCallCheck(this, CategoryComponent);

        this.categoryService = categoryService;
        this.alertify = alertify;
        this.editSettings = {
          showDeleteConfirmDialog: false,
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
          mode: 'Normal'
        };
        this.toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
        this.pageSettings = {
          pageCount: 20,
          pageSizes: true,
          pageSize: 10
        };
        this.filterSettings = {
          type: 'Excel'
        };
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.category = {
            id: 0,
            name: ''
          };
          this.getAllCategory();
        } // api

      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this2 = this;

          this.categoryService.getAll().subscribe(function (res) {
            _this2.data = res;
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this3 = this;

          this.categoryService.create(this.category).subscribe(function () {
            _this3.alertify.success('Add Category Successfully');

            _this3.getAllCategory();

            _this3.category.name = '';
          }, function () {
            return _this3.alertify.error('Failed to update the category');
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this4 = this;

          this.categoryService.update(this.category).subscribe(function () {
            _this4.alertify.success('Add Category Successfully'); // this.modalReference.close() ;


            _this4.getAllCategory();

            _this4.category.name = '';
          }, function () {
            return _this4.alertify.error('Failed to update the category');
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this5 = this;

          this.alertify.confirm('Delete Category', 'Are you sure you want to delete this Category "' + id + '" ?', function () {
            _this5.categoryService["delete"](id).subscribe(function () {
              _this5.getAllCategory();

              _this5.alertify.success('The category has been deleted');
            }, function (error) {
              _this5.alertify.error('Failed to delete the category');
            });
          });
        } // end api
        // grid event

      }, {
        key: "toolbarClick",
        value: function toolbarClick(args) {
          switch (args.item.text) {
            /* tslint:disable */
            case 'Excel Export':
              this.grid.excelExport();
              break;

            /* tslint:enable */

            default:
              break;
          }
        }
      }, {
        key: "actionBegin",
        value: function actionBegin(args) {
          if (args.requestType === 'save' && args.action === 'add') {
            this.category.id = 0;
            this.category.name = args.data.name;
            this.create();
          }

          if (args.requestType === 'save' && args.action === 'edit') {
            this.category.id = args.data.id;
            this.category.name = args.data.name;
            this.update();
          }

          if (args.requestType === 'delete') {
            this["delete"](args.data[0].id);
          }
        }
      }, {
        key: "actionComplete",
        value: function actionComplete(e) {
          if (e.requestType === 'beginEdit') {
            if (this.setFocus.field !== 'id') {
              e.form.elements.namedItem(this.setFocus.field).focus(); // Set focus to the Target element
            }
          }
        }
      }, {
        key: "onDoubleClick",
        value: function onDoubleClick(args) {
          this.setFocus = args.column; // Get the column from Double click event
        } // end event

      }, {
        key: "NO",
        value: function NO(index) {
          return (this.grid.pageSettings.currentPage - 1) * this.pageSettings.pageSize + Number(index) + 1;
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      viewQuery: function CategoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        }
      },
      decls: 10,
      vars: 8,
      consts: [[1, "row"], [1, "col-md-12"], [1, "card"], ["gridLines", "Both", "allowPaging", "true", "showColumnMenu", "true", "allowResizing", "true", "allowFiltering", "true", 3, "toolbar", "dataSource", "allowSorting", "allowExcelExport", "filterSettings", "pageSettings", "editSettings", "actionBegin", "actionComplete", "recordDoubleClick", "toolbarClick"], ["grid", ""], ["field", "id", "headerText", "#", "width", "70", "textAlign", "Center", 3, "allowEditing"], ["template", ""], ["field", "name", "headerText", "Category", "width", "200", "textAlign", "Center"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ejs-grid", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function CategoryComponent_Template_ejs_grid_actionBegin_3_listener($event) {
            return ctx.actionBegin($event);
          })("actionComplete", function CategoryComponent_Template_ejs_grid_actionComplete_3_listener($event) {
            return ctx.actionComplete($event);
          })("recordDoubleClick", function CategoryComponent_Template_ejs_grid_recordDoubleClick_3_listener($event) {
            return ctx.onDoubleClick($event);
          })("toolbarClick", function CategoryComponent_Template_ejs_grid_toolbarClick_3_listener($event) {
            return ctx.toolbarClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "e-columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-column", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-column", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toolbar", ctx.toolbarOptions)("dataSource", ctx.data)("allowSorting", true)("allowExcelExport", true)("filterSettings", ctx.filterSettings)("pageSettings", ctx.pageSettings)("editSettings", ctx.editSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowEditing", false);
        }
      },
      directives: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1ob21lL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
        }, {
          type: src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['grid']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/role/role.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/app-home/role/role.component.ts ***!
    \*******************************************************/

  /*! exports provided: RoleComponent */

  /***/
  function srcAppViewsAppHomeRoleRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
      return RoleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-grids */
    "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.js");
    /* harmony import */


    var src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_core/_services/alertify.service */
    "./src/app/_core/_services/alertify.service.ts");
    /* harmony import */


    var src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_core/_services/role.service */
    "./src/app/_core/_services/role.service.ts");

    var _c0 = ["grid"];

    function RoleComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.NO(data_r3.index), " ");
      }
    }

    var RoleComponent = /*#__PURE__*/function () {
      function RoleComponent(roleService, alertify) {
        _classCallCheck(this, RoleComponent);

        this.roleService = roleService;
        this.alertify = alertify;
        this.editSettings = {
          showDeleteConfirmDialog: false,
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
          mode: 'Normal'
        };
        this.toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
        this.pageSettings = {
          pageCount: 20,
          pageSizes: true,
          pageSize: 10
        };
        this.filterSettings = {
          type: 'Excel'
        };
      }

      _createClass(RoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = {
            id: 0,
            name: ''
          };
          this.getAllRole();
        } // api

      }, {
        key: "getAllRole",
        value: function getAllRole() {
          var _this6 = this;

          this.roleService.getAll().subscribe(function (res) {
            _this6.data = res;
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this7 = this;

          this.roleService.create(this.role).subscribe(function () {
            _this7.alertify.success('Add Role Successfully');

            _this7.getAllRole();

            _this7.role.name = '';
          }, function () {
            return _this7.alertify.error('Failed to update the role');
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this8 = this;

          this.roleService.update(this.role).subscribe(function () {
            _this8.alertify.success('Add Role Successfully'); // this.modalReference.close() ;


            _this8.getAllRole();

            _this8.role.name = '';
          }, function () {
            return _this8.alertify.error('Failed to update the role');
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this9 = this;

          this.alertify.confirm('Delete Role', 'Are you sure you want to delete this Role "' + id + '" ?', function () {
            _this9.roleService["delete"](id).subscribe(function () {
              _this9.getAllRole();

              _this9.alertify.success('The role has been deleted');
            }, function (error) {
              _this9.alertify.error('Failed to delete the role');
            });
          });
        } // end api
        // grid event

      }, {
        key: "toolbarClick",
        value: function toolbarClick(args) {
          switch (args.item.text) {
            /* tslint:disable */
            case 'Excel Export':
              this.grid.excelExport();
              break;

            /* tslint:enable */

            default:
              break;
          }
        }
      }, {
        key: "actionBegin",
        value: function actionBegin(args) {
          if (args.requestType === 'save' && args.action === 'add') {
            this.role.id = 0;
            this.role.name = args.data.name;
            this.create();
          }

          if (args.requestType === 'save' && args.action === 'edit') {
            this.role.id = args.data.id;
            this.role.name = args.data.name;
            this.update();
          }

          if (args.requestType === 'delete') {
            this["delete"](args.data[0].id);
          }
        }
      }, {
        key: "actionComplete",
        value: function actionComplete(e) {
          if (e.requestType === 'beginEdit') {
            if (this.setFocus.field !== 'id') {
              e.form.elements.namedItem(this.setFocus.field).focus(); // Set focus to the Target element
            }
          }
        }
      }, {
        key: "onDoubleClick",
        value: function onDoubleClick(args) {
          this.setFocus = args.column; // Get the column from Double click event
        } // end event

      }, {
        key: "NO",
        value: function NO(index) {
          return (this.grid.pageSettings.currentPage - 1) * this.pageSettings.pageSize + Number(index) + 1;
        }
      }]);

      return RoleComponent;
    }();

    RoleComponent.ɵfac = function RoleComponent_Factory(t) {
      return new (t || RoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    RoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoleComponent,
      selectors: [["app-role"]],
      viewQuery: function RoleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        }
      },
      decls: 10,
      vars: 8,
      consts: [[1, "row"], [1, "col-md-12"], [1, "card"], ["gridLines", "Both", "allowPaging", "true", "showColumnMenu", "true", "allowResizing", "true", "allowFiltering", "true", 3, "toolbar", "dataSource", "allowSorting", "allowExcelExport", "filterSettings", "pageSettings", "editSettings", "actionBegin", "actionComplete", "recordDoubleClick", "toolbarClick"], ["grid", ""], ["field", "id", "headerText", "#", "width", "70", "textAlign", "Center", 3, "allowEditing"], ["template", ""], ["field", "name", "headerText", "Role", "width", "200", "textAlign", "Center"]],
      template: function RoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ejs-grid", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function RoleComponent_Template_ejs_grid_actionBegin_3_listener($event) {
            return ctx.actionBegin($event);
          })("actionComplete", function RoleComponent_Template_ejs_grid_actionComplete_3_listener($event) {
            return ctx.actionComplete($event);
          })("recordDoubleClick", function RoleComponent_Template_ejs_grid_recordDoubleClick_3_listener($event) {
            return ctx.onDoubleClick($event);
          })("toolbarClick", function RoleComponent_Template_ejs_grid_toolbarClick_3_listener($event) {
            return ctx.toolbarClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "e-columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-column", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoleComponent_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-column", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toolbar", ctx.toolbarOptions)("dataSource", ctx.data)("allowSorting", true)("allowExcelExport", true)("filterSettings", ctx.filterSettings)("pageSettings", ctx.pageSettings)("editSettings", ctx.editSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowEditing", false);
        }
      },
      directives: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1ob21lL3JvbGUvcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-role',
          templateUrl: './role.component.html',
          styleUrls: ['./role.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]
        }, {
          type: src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['grid']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/app-home/user/user.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/app-home/user/user.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppViewsAppHomeUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-grids */
    "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.js");
    /* harmony import */


    var src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_core/_services/alertify.service */
    "./src/app/_core/_services/alertify.service.ts");
    /* harmony import */


    var src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_core/_services/role.service */
    "./src/app/_core/_services/role.service.ts");
    /* harmony import */


    var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_core/_services/user.service */
    "./src/app/_core/_services/user.service.ts");
    /* harmony import */


    var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @syncfusion/ej2-base */
    "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");
    /* harmony import */


    var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-dropdowns */
    "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.js");

    var _c0 = ["grid"];

    function UserComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var data_r9 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.NO(data_r9.index), " ");
      }
    }

    function UserComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "********************");
      }
    }

    function UserComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-dropdownlist", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_ng_template_18_Template_ejs_dropdownlist_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onChangeRole($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r11 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r6.roles)("value", data_r11.role.name)("fields", ctx_r6.fieldsRole)("allowFiltering", true);
      }
    }

    function UserComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var data_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r14.role.name, " ");
      }
    }

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(userService, roleService, alertify) {
        _classCallCheck(this, UserComponent);

        this.userService = userService;
        this.roleService = roleService;
        this.alertify = alertify;
        this.editSettings = {
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
          mode: 'Normal'
        };
        this.toolbarOptions = ['ExcelExport', 'Add', 'Edit', 'Delete', 'Cancel', 'Search'];
        this.pageSettings = {
          pageCount: 20,
          pageSizes: true,
          pageSize: 10
        };
        this.filterSettings = {
          type: 'Excel'
        };
        this.fieldsRole = {
          text: 'name',
          value: 'name'
        };
      }

      _createClass(UserComponent, [{
        key: "vi",
        value: function vi() {
          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["setCulture"])('vi');

          _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["L10n"].load({
            vi: {
              grid: {
                Add: 'Them'
              },
              pager: {
                currentPageInfo: '{0} / {1} trang',
                totalItemsInfo: '({0} dòng)',
                pagerDropDown: '(Dữ liệu trên mỗi trang)',
                All: 'Tất cả'
              }
            }
          });
        }
      }, {
        key: "en",
        value: function en() {
          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["setCulture"])('en');

          _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__["L10n"].load({
            en: {
              grid: {
                Add: 'Add'
              },
              pager: {
                currentPageInfo: '{0} of {1} pages',
                totalItemsInfo: '({0} items)',
                pagerDropDown: 'Items per page',
                All: 'All'
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = {
            id: 0,
            username: '',
            password: '',
            roleId: 0
          };
          this.getAllUser();
          this.getAllRole();
        } // api

      }, {
        key: "getAllUser",
        value: function getAllUser() {
          var _this10 = this;

          this.userService.getAll().subscribe(function (res) {
            _this10.data = res;
          });
        }
      }, {
        key: "getAllRole",
        value: function getAllRole() {
          var _this11 = this;

          this.roleService.getAll().subscribe(function (res) {
            _this11.roles = res;
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this12 = this;

          this.userService.create(this.user).subscribe(function () {
            _this12.alertify.success('Add User Successfully');

            _this12.getAllUser();

            _this12.user = {
              id: 0,
              username: '',
              password: '',
              roleId: 0
            };
          }, function () {
            return _this12.alertify.error('Failed to update the user');
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this13 = this;

          this.userService.update(this.user).subscribe(function () {
            _this13.alertify.success('Add User Successfully'); // this.modalReference.close() ;


            _this13.getAllUser();

            _this13.user = {
              id: 0,
              username: '',
              password: '',
              roleId: 0
            };
          }, function () {
            return _this13.alertify.error('Failed to update the user');
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this14 = this;

          this.alertify.confirm('Delete User', 'Are you sure you want to delete this User "' + id + '" ?', function () {
            _this14.userService["delete"](id).subscribe(function () {
              _this14.getAllUser();

              _this14.alertify.success('The user has been deleted');
            }, function (error) {
              _this14.alertify.error('Failed to delete the user');
            });
          });
        } // end api
        // grid event

      }, {
        key: "toolbarClick",
        value: function toolbarClick(args) {
          switch (args.item.text) {
            /* tslint:disable */
            case 'Excel Export':
              this.grid.excelExport();
              break;

            /* tslint:enable */

            default:
              break;
          }
        }
      }, {
        key: "actionBegin",
        value: function actionBegin(args) {
          if (args.requestType === 'save' && args.action === 'add') {
            this.user.id = 0;
            this.user.username = args.data.username;
            this.user.password = args.data.password || 'shc@1234';
            this.user.roleId = args.data.roleId;
            this.create();
          }

          if (args.requestType === 'save' && args.action === 'edit') {
            this.user.id = args.data.id;
            this.user.username = args.data.username;
            this.user.password = args.data.password || '';
            this.user.roleId = args.data.roleId;
            this.update();
          }

          if (args.requestType === 'delete') {
            this["delete"](args.data[0].id);
          }
        }
      }, {
        key: "actionComplete",
        value: function actionComplete(e) {
          if (e.requestType === 'beginEdit') {
            if (this.setFocus.field !== 'id' && this.setFocus.field !== 'role.name') {
              e.form.elements.namedItem(this.setFocus.field).focus(); // Set focus to the Target element
            }
          }
        }
      }, {
        key: "onDoubleClick",
        value: function onDoubleClick(args) {
          this.setFocus = args.column; // Get the column from Double click event
        } // end event

      }, {
        key: "NO",
        value: function NO(index) {
          return (this.grid.pageSettings.currentPage - 1) * this.pageSettings.pageSize + Number(index) + 1;
        }
      }, {
        key: "onChangeRole",
        value: function onChangeRole(args) {
          this.roleID = args.itemData.id;
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      viewQuery: function UserComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        }
      },
      decls: 22,
      vars: 8,
      consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["gridLines", "Both", "allowPaging", "true", "showColumnMenu", "true", "allowResizing", "true", "allowFiltering", "true", 3, "toolbar", "dataSource", "allowSorting", "allowExcelExport", "filterSettings", "pageSettings", "editSettings", "actionBegin", "actionComplete", "recordDoubleClick", "toolbarClick"], ["grid", ""], ["field", "id", "headerText", "#", "width", "70", "textAlign", "Center", 3, "allowEditing"], ["template", ""], ["field", "username", "headerText", "Username", "width", "200", "textAlign", "Center"], ["field", "password", "headerText", "Password", "width", "200", "textAlign", "Center"], ["field", "role.name", "headerText", "Role", "editType", "dropdownedit", "width", "200", "textAlign", "Center"], ["editTemplate", ""], [3, "dataSource", "value", "fields", "allowFiltering", "change"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_3_listener() {
            return ctx.en();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "En");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_5_listener() {
            return ctx.vi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ejs-grid", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function UserComponent_Template_ejs_grid_actionBegin_7_listener($event) {
            return ctx.actionBegin($event);
          })("actionComplete", function UserComponent_Template_ejs_grid_actionComplete_7_listener($event) {
            return ctx.actionComplete($event);
          })("recordDoubleClick", function UserComponent_Template_ejs_grid_recordDoubleClick_7_listener($event) {
            return ctx.onDoubleClick($event);
          })("toolbarClick", function UserComponent_Template_ejs_grid_toolbarClick_7_listener($event) {
            return ctx.toolbarClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "e-columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "e-column", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "e-column", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "e-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserComponent_ng_template_15_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "e-column", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_ng_template_18_Template, 1, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserComponent_ng_template_20_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toolbar", ctx.toolbarOptions)("dataSource", ctx.data)("allowSorting", true)("allowExcelExport", true)("filterSettings", ctx.filterSettings)("pageSettings", ctx.pageSettings)("editSettings", ctx.editSettings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowEditing", false);
        }
      },
      directives: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnDirective"], _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_6__["DropDownListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1ob21lL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]
        }, {
          type: src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['grid']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/views/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppViewsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_core/_services/auth.service */
    "./src/app/_core/_services/auth.service.ts");
    /* harmony import */


    var src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_core/_services/alertify.service */
    "./src/app/_core/_services/alertify.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, router, alertifyService, authService) {
        var _this15 = this;

        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.route.queryParams.subscribe(function (params) {
          _this15.uri = params.uri;
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = {
            username: '',
            password: ''
          };
        }
      }, {
        key: "login",
        value: function login() {
          var _this16 = this;

          this.authService.login(this.user).subscribe(function (next) {
            _this16.alertifyService.success('Login Success!!');

            var uri = decodeURI(_this16.uri);

            if (uri !== 'undefined') {
              _this16.router.navigate([uri]);

              return;
            }

            _this16.router.navigate(['/app-home/bpfc']);
          }, function (error) {
            _this16.alertifyService.error('Login failed!!');
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 31,
      vars: 3,
      consts: [[1, "login-page"], [1, "login-box"], [1, "login-logo"], ["href", "../../index2.html"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["form", "ngForm"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "name", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-lock"], [1, "row"], [1, "col-8"], [1, "icheck-primary"], ["type", "checkbox", "id", "remember"], ["for", "remember"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Digital Mixing System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in to start your session");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Remember Me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_core_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }, {
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/shared/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/shared/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppViewsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 17,
      vars: 0,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row", "justify-content-around"], [1, "col-md-10"], [1, "description"], [1, "col-md-2"], [1, "list-unstyled"], ["target", "_blank", "href", "https://ej2.syncfusion.com/angular/documentation/", "title", "Help", "aria-label", "Help", 1, "footerlink"], ["target", "_blank", "href", "https://ej2.syncfusion.com/angular/demos", "title", "Online Samples", "aria-label", "Online Samples", 1, "footerlink"], ["target", "_blank", "href", "https://www.syncfusion.com/support/directtrac/incidents", "title", "Support", "aria-label", "Support", 1, "footerlink"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Syncfusion Essential JS 2 for Angular is a modern Angular UI Components library that has been built from the ground up to be lightweight, responsive, modular and touch friendly. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Online Samples ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Support ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/shared/layout/layout.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/shared/layout/layout.component.ts ***!
    \*********************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppViewsSharedLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/views/shared/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/views/shared/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container-fluid"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/shared/nav-bar/nav-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/shared/nav-bar/nav-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppViewsSharedNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(location) {
        _classCallCheck(this, NavBarComponent);

        this.location = location;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skipLinkPath = "".concat(this.location.path(), "#mainContent");
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 15,
      vars: 1,
      consts: [[1, "skipLink"], ["title", "Skip to Main Content", "aria-label", "Skip to Main Content", 3, "href"], [1, "navbar", "navbar-expand-sm", "navbar-light", "border-bottom", "justify-content-between"], ["routerLink", "", "title", "apphome-spa", "aria-label", "apphome-spa", "role", "heading", "aria-level", "1", 1, "navbar-brand"], [1, "navbar-nav"], ["routerLink", "/app-home/role", "title", "Role", "aria-label", "Role", 1, "nav-item", "nav-link", "active"], ["routerLink", "/app-home/category", "title", "Category", "aria-label", "Category", 1, "nav-item", "nav-link", "active"], ["routerLink", "/app-home/bpfc", "title", "BPFC", "aria-label", "BPFC", 1, "nav-item", "nav-link", "active"], ["routerLink", "/app-home/user", "title", "User", "aria-label", "User", 1, "nav-item", "nav-link", "active"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Skip to Main Content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " App Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " BPFC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.skipLinkPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n\r\n.skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zaGFyZWQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcExpbmsgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMDBweDtcclxuICB0b3A6IC0xMDBweDtcclxufVxyXG5cclxuLnNraXBMaW5rIGE6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/shared/p404/p404.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/shared/p404/p404.component.ts ***!
    \*****************************************************/

  /*! exports provided: P404Component */

  /***/
  function srcAppViewsSharedP404P404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P404Component", function () {
      return P404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var P404Component = /*#__PURE__*/function () {
      function P404Component() {
        _classCallCheck(this, P404Component);
      }

      _createClass(P404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P404Component;
    }();

    P404Component.ɵfac = function P404Component_Factory(t) {
      return new (t || P404Component)();
    };

    P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P404Component,
      selectors: [["app-p404"]],
      decls: 2,
      vars: 0,
      template: function P404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " p404 works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NoYXJlZC9wNDA0L3A0MDQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p404',
          templateUrl: './p404.component.html',
          styleUrls: ['./p404.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/shared/p500/p500.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/shared/p500/p500.component.ts ***!
    \*****************************************************/

  /*! exports provided: P500Component */

  /***/
  function srcAppViewsSharedP500P500ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P500Component", function () {
      return P500Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var P500Component = /*#__PURE__*/function () {
      function P500Component() {
        _classCallCheck(this, P500Component);
      }

      _createClass(P500Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return P500Component;
    }();

    P500Component.ɵfac = function P500Component_Factory(t) {
      return new (t || P500Component)();
    };

    P500Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: P500Component,
      selectors: [["app-p500"]],
      decls: 2,
      vars: 0,
      template: function P500Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " p500 works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NoYXJlZC9wNTAwL3A1MDAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P500Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-p500',
          templateUrl: './p500.component.html',
          styleUrls: ['./p500.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    /* Features of development mode in Angular include:
     * an additional change detection cycle
     * printing out hints when the HTML sanitizer is stripping content
     * running deep object comparison checks to detect model changes
     */


    var environment = {
      production: false,
      apiUrl: 'http://localhost:5000/api/'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! F:\app-home\app-home-spa\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map