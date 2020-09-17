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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, ɵ0, ɵ1 */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ɵ0 = function ɵ0() {
      return Promise.all(
      /*! import() | pages-login-login-module-ngfactory */
      [__webpack_require__.e("default~pages-dashboard-dashboard-module-ngfactory~pages-login-login-module-ngfactory"), __webpack_require__.e("default~new-product-new-product-module-ngfactory~pages-login-login-module-ngfactory"), __webpack_require__.e("pages-login-login-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./pages/login/login.module.ngfactory */
      "./src/app/pages/login/login.module.ngfactory.js")).then(function (m) {
        return m.LoginModuleNgFactory;
      });
    },
        ɵ1 = function ɵ1() {
      return Promise.all(
      /*! import() | pages-dashboard-dashboard-module-ngfactory */
      [__webpack_require__.e("default~pages-dashboard-dashboard-module-ngfactory~pages-login-login-module-ngfactory"), __webpack_require__.e("pages-dashboard-dashboard-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./pages/dashboard/dashboard.module.ngfactory */
      "./src/app/pages/dashboard/dashboard.module.ngfactory.js")).then(function (m) {
        return m.DashboardModuleNgFactory;
      });
    };

    var routes = [{
      path: "login",
      loadChildren: ɵ0
    }, {
      path: "dashboard",
      loadChildren: ɵ1
    }, {
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'DreamBank';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */
    "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/datepicker/typings/index.ngfactory */
    "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */
    "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_error_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./interceptors/error-handler */
    "./src/app/interceptors/error-handler.ts");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./interceptors/auth-interceptor */
    "./src/app/interceptors/auth-interceptor.ts");
    /* harmony import */


    var _interceptors_fake_backend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./interceptors/fake-backend */
    "./src/app/interceptors/fake-backend.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _shared_stateful_model_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./shared/stateful-model/model */
    "./src/app/shared/stateful-model/model.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _shared_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./shared/modules/angular-material/angular-material.module */
    "./src/app/shared/modules/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBarNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p2_0) {
        return [p0_0, new _interceptors_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorHandlerInterceptor"](p1_0), new _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptorService"](p2_0), new _interceptors_fake_backend__WEBPACK_IMPORTED_MODULE_18__["FakeBackendInterceptor"]()];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["ɵb22"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_30__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _shared_stateful_model_model__WEBPACK_IMPORTED_MODULE_31__["ModelFactory"], _shared_stateful_model_model__WEBPACK_IMPORTED_MODULE_31__["useModelFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
        return [[{
          path: "login",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["ɵ0"]
        }, {
          path: "dashboard",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["ɵ1"]
        }, {
          path: "",
          redirectTo: "login",
          pathMatch: "full"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_20__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_39__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_41__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_41__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_45__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_45__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_48__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_48__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_50__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_50__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_51__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_51__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_52__["AngularMaterialModule"], _shared_modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_52__["AngularMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_53__["ENTER"]]
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
    });
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

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/interceptors/auth-interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth-interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptorService, authInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptor", function () {
      return authInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthInterceptorService = /*#__PURE__*/function () {
      function AuthInterceptorService(router) {
        _classCallCheck(this, AuthInterceptorService);

        this.router = router;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          var token = sessionStorage.getItem('token');
          var request = req;

          if (token) {
            request = req.clone({
              setHeaders: {
                authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              _this.router.navigateByUrl('/login');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
          }));
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function AuthInterceptorService_Factory() {
        return new AuthInterceptorService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      },
      token: AuthInterceptorService,
      providedIn: "root"
    });
    var authInterceptor = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptorService,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/interceptors/error-handler.ts":
  /*!***********************************************!*\
    !*** ./src/app/interceptors/error-handler.ts ***!
    \***********************************************/

  /*! exports provided: ErrorHandlerInterceptor, ErrorHandler */

  /***/
  function srcAppInterceptorsErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function () {
      return ErrorHandlerInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandler", function () {
      return ErrorHandler;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorHandlerInterceptor = /*#__PURE__*/function () {
      function ErrorHandlerInterceptor(_snackBar) {
        _classCallCheck(this, ErrorHandlerInterceptor);

        this._snackBar = _snackBar;
      }

      _createClass(ErrorHandlerInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
              _this2._snackBar.open(err.error.message ? err.error.message : 'Connection Error', '', {
                panelClass: ['red-snackbar'],
                duration: 4000
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
          }));
        }
      }]);

      return ErrorHandlerInterceptor;
    }();

    var ErrorHandler = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: ErrorHandlerInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/interceptors/fake-backend.ts":
  /*!**********************************************!*\
    !*** ./src/app/interceptors/fake-backend.ts ***!
    \**********************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppInterceptorsFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var products = [{
      name: 'Agile Credit',
      icon: 'payments'
    }, {
      name: 'Credit Card',
      icon: 'credit_card'
    }, {
      name: 'Savings',
      icon: 'fact_check'
    }, {
      name: 'Home Leasing',
      icon: 'house'
    }];
    var accountsForUser = [{
      idUser: '123456',
      accountsUser: [{
        id: '1234557121',
        name: "Dan",
        icon: "fact_check",
        type: "Checking",
        status: 'Active',
        currency: 'USD',
        balance: 525.1,
        transactions: []
      }, {
        id: '9991212',
        name: "nie",
        icon: "fact_check",
        type: "Saving",
        status: 'Active',
        currency: 'USD',
        balance: 12.11,
        transactions: []
      }, {
        id: '12124121',
        name: "idk",
        icon: "fact_check",
        type: "Saving",
        status: 'Desactived',
        currency: 'USD',
        balance: 0.14,
        transactions: []
      }]
    }, {
      idUser: '987654321',
      accountsUser: [{
        id: '99999999999',
        name: "otra",
        icon: "fact_check",
        type: "Checking",
        status: 'Active',
        currency: 'USD',
        balance: 525.1,
        transactions: []
      }]
    }];
    var transactions = [{
      id: '1',
      idAccount: '1234557121',
      date: new Date(2020, 9, 2),
      description: 'Paypal',
      currency: 'USD',
      value: 1200
    }, {
      id: '2',
      idAccount: '1234557121',
      date: new Date(2020, 8, 3),
      description: 'Rappi',
      currency: 'USD',
      value: -500
    }, {
      id: '3',
      idAccount: '1234557121',
      date: new Date(2020, 7, 4),
      description: 'Mercadolibre',
      currency: 'USD',
      value: 1000
    }, {
      id: '4',
      idAccount: '1234557121',
      date: new Date(2020, 6, 5),
      description: 'Amazone',
      currency: 'USD',
      value: -200
    }, {
      id: '5',
      idAccount: '1234557121',
      date: new Date(2020, 6, 5),
      description: 'Aliexpress',
      currency: 'USD',
      value: 800
    }, {
      id: '6',
      idAccount: '1234557121',
      date: new Date(2020, 5, 6),
      description: 'Paypal',
      currency: 'USD',
      value: -200
    }, {
      id: '7',
      idAccount: '1234557121',
      date: new Date(2020, 4, 23),
      description: 'Rappi',
      currency: 'USD',
      value: -100
    }, {
      id: '8',
      idAccount: '1234557121',
      date: new Date(2020, 1, 20),
      description: 'Mercadolibre',
      currency: 'USD',
      value: 600
    }, {
      id: '9',
      idAccount: '1234557121',
      date: new Date(2020, 2, 25),
      description: 'Amazone',
      currency: 'USD',
      value: 1300
    }, {
      id: '10',
      idAccount: '1234557121',
      date: new Date(2020, 4, 16),
      description: 'Aliexpress',
      currency: 'USD',
      value: -400
    }];
    var users = [{
      identity: '123456',
      password: '1234',
      avatar: 'data:image/png;base64,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',
      name: 'John Doe',
      lastLogin: new Date(),
      accounts: accountsForUser[0].accountsUser,
      wallets: [],
      notifications: [],
      messages: [],
      jwt: 'fake-jwt-token'
    }, {
      identity: '987654321',
      password: '1234',
      avatar: 'data:image/png;base64,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',
      name: 'Persona prueba',
      lastLogin: new Date(),
      accounts: accountsForUser[1].accountsUser,
      wallets: [],
      notifications: [],
      messages: [],
      jwt: ''
    }];

    var FakeBackendInterceptor = /*#__PURE__*/function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/api/authenticate') && method === 'POST':
                return authenticate();

              case url.endsWith('/api/accounts/transactions') && method === 'POST':
                return transaction();

              case url.endsWith('/api/jwt/authenticate') && method === 'GET':
                return authenticateJwt();

              case url.endsWith('/api/request/product') && method === 'POST':
                return newProduct();

              case url.endsWith('/api/accounts') && method === 'POST':
                return accounts();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.identity === username && x.password === password;
            });
            if (!user) return error('Username or password is incorrect');
            delete user.password;
            user.jwt = 'fake-jwt-token';
            return ok(user);
          }

          function authenticateJwt() {
            if (!isLoggedIn) return unauthorized();
            var jwt = headers.get('Authorization').split(" ")[1];
            var user = users.find(function (x) {
              return x.jwt === jwt;
            });
            if (!user) return error('Session expired');
            delete user.password;
            user.jwt = 'fake-jwt-token';
            return ok(user);
          }

          function transaction() {
            if (!isLoggedIn()) return unauthorized();
            var idAccount = body.idAccount;
            var transaction = transactions.filter(function (x) {
              return x.idAccount === idAccount;
            });
            if (transaction.length === 0) return error('Without transactions');
            return ok(transaction);
          }

          function newProduct() {
            if (!isLoggedIn()) return unauthorized();
            var identity = body.identity,
                product = body.product,
                cellphone = body.cellphone,
                monthly = body.monthly;
            var accountsUsers = accountsForUser.filter(function (x) {
              return x.idUser === identity;
            });
            accountsUsers[0].accountsUser.push({
              id: getRandom(),
              name: 'test',
              icon: products.find(function (x) {
                return x.name == product;
              }).icon,
              type: product,
              status: 'Pending',
              currency: 'USD',
              balance: monthly,
              transactions: []
            });
            return ok();
          }

          function accounts() {
            if (!isLoggedIn()) return unauthorized();
            var identity = body.identity;
            var accountsUsers = accountsForUser.filter(function (x) {
              return x.idUser === identity;
            });
            return ok(accountsUsers[0].accountsUser);
          } // helper functions


          function getRandom() {
            return Math.random() * Math.pow(10, 9) + '';
          }

          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]({
              error: {
                message: message
              }
            }));
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
              status: 401,
              error: {
                message: 'Unauthorised'
              }
            });
          }

          function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    var fakeBackendProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/shared/modules/angular-material/angular-material.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/modules/angular-material/angular-material.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppSharedModulesAngularMaterialAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };
    /***/

  },

  /***/
  "./src/app/shared/stateful-model/model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/stateful-model/model.ts ***!
    \************************************************/

  /*! exports provided: Model, ModelFactory, useModelFactory, MODEL_PROVIDER */

  /***/
  function srcAppSharedStatefulModelModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Model", function () {
      return Model;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelFactory", function () {
      return ModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "useModelFactory", function () {
      return useModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MODEL_PROVIDER", function () {
      return MODEL_PROVIDER;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Model = /*#__PURE__*/function () {
      function Model(initialData, immutable, clone) {
        _classCallCheck(this, Model);

        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initialData);
        this.data$ = this._data.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
          return immutable ? clone ? clone(data) : JSON.parse(JSON.stringify(data)) : data;
        }));
      }

      _createClass(Model, [{
        key: "get",
        value: function get() {
          return this._data.getValue();
        }
      }, {
        key: "set",
        value: function set(data) {
          this._data.next(data);
        }
      }]);

      return Model;
    }();

    var ModelFactory = /*#__PURE__*/function () {
      function ModelFactory() {
        _classCallCheck(this, ModelFactory);
      }

      _createClass(ModelFactory, [{
        key: "create",
        value: function create(initialData) {
          return new Model(initialData, true);
        }
      }, {
        key: "createMutable",
        value: function createMutable(initialData) {
          return new Model(initialData, false);
        }
      }, {
        key: "createWithCustomClone",
        value: function createWithCustomClone(initialData, clone) {
          return new Model(initialData, true, clone);
        }
      }]);

      return ModelFactory;
    }();

    function useModelFactory() {
      return new ModelFactory();
    }

    var MODEL_PROVIDER = {
      provide: ModelFactory,
      useFactory: useModelFactory
    };
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
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
    /*! /home/runner/work/dreambank/dreambank/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map