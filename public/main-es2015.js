(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AccountRoutingModule {
}
AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/account/user-account/user-account.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-order/user-order.component */ "./src/app/account/user-order/user-order.component.ts");








class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"], _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_6__["UserOrderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"], _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_6__["UserOrderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/account/user-account/user-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/user-account/user-account.component.ts ***!
  \****************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/account.service */ "./src/app/common/services/account.service.ts");
/* harmony import */ var src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/login.service */ "./src/app/common/services/login.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");











class UserAccountComponent {
    constructor(accountService, loginService) {
        this.accountService = accountService;
        this.loginService = loginService;
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignOutAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"];
    }
    ngOnInit() {
        let user = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
        this.accountService.getAccountByUid(user.uid).subscribe(response => {
            this.account = response[0];
        });
    }
    logout() {
        this.loginService.logout();
    }
}
UserAccountComponent.ɵfac = function UserAccountComponent_Factory(t) { return new (t || UserAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
UserAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAccountComponent, selectors: [["app-user-account"]], decls: 48, vars: 7, consts: [[1, "wrapper"], [1, "container", "account-detail"], [1, "search-page-header"], [1, "header"], ["size", "2x", 3, "icon"], [1, "user-details"], [1, "row"], [1, "col-md-4"], ["href", "/order"], ["size", "1x", 3, "icon"], ["href", "/search"], ["href", "", 3, "click"]], template: function UserAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " View All Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Explore Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_Template_a_click_43_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
    } }, directives: [_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.account-detail[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n  line-height: 1.9em;\n  color: #333;\n}\n\n.search-page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  width: 80%;\n  padding: 14px 1em;\n  height: 64px;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-size: 22px;\n  display: inline-block;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.user-details[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  margin-bottom: 20vh;\n}\n\n.user-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.2em;\n}\n\n.user-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.user-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-of-type(4) {\n  margin-top: 128px;\n}\n\n.user-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-of-type(5) {\n  margin-top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC91c2VyLWFjY291bnQvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvYWNjb3VudC91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3VzZXItYWNjb3VudC9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxhY2NvdW50XFx1c2VyLWFjY291bnRcXHVzZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzNGQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEOEZGOztBQzFGQTtFQUVFLDZCQUFBO0VBQ0EsVUFBQTtFQUdBLGlCQUFBO0VBQ0EsWUFBQTtBRDBGRjs7QUN4RkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBRDBGSjs7QUN4Rkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUQwRk47O0FDckZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRHdGRjs7QUN0RkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FEd0ZKOztBQ3JGTTtFQUNFLGlCQUFBO0FEdUZSOztBQ2xGRTtFQUNFLGlCQUFBO0FEb0ZKOztBQ2pGRTtFQUNFLGdCQUFBO0FEbUZKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRvbWFpbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1zdHJpa2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLmFjY291bnQtZGV0YWlsIHtcbiAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuOWVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNlYXJjaC1wYWdlLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxNHB4IDFlbTtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLnNlYXJjaC1wYWdlLWhlYWRlciAuaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlYXJjaC1wYWdlLWhlYWRlciAuaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnVzZXItZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XG59XG4udXNlci1kZXRhaWxzIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLnVzZXItZGV0YWlscyAucm93IGEgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnVzZXItZGV0YWlscyAucm93Om50aC1vZi10eXBlKDQpIHtcbiAgbWFyZ2luLXRvcDogMTI4cHg7XG59XG4udXNlci1kZXRhaWxzIC5yb3c6bnRoLW9mLXR5cGUoNSkge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG5cclxuXHJcbi5hY2NvdW50LWRldGFpbCB7XHJcbiAgbWFyZ2luLXRvcDogMTZ2aDtcclxuICBsaW5lLWhlaWdodDogMS45ZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXBhZ2UtaGVhZGVyIHtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgd2lkdGg6IDgwJTtcclxuXHJcblxyXG4gIHBhZGRpbmc6IDE0cHggMWVtO1xyXG4gIGhlaWdodDogNjRweDtcclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHMge1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yb3c6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTI4cHg7XHJcbiAgfVxyXG5cclxuICAucm93Om50aC1vZi10eXBlKDUpIHtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-account',
                templateUrl: './user-account.component.html',
                styleUrls: ['./user-account.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/account/user-order/user-order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/user-order/user-order.component.ts ***!
  \************************************************************/
/*! exports provided: UserOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderComponent", function() { return UserOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/order.service */ "./src/app/common/services/order.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/login.service */ "./src/app/common/services/login.service.ts");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function UserOrderComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Domains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserOrderComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.description, " ");
} }
function UserOrderComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserOrderComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r39.amount, "USD"), " ");
} }
function UserOrderComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payer Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserOrderComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.payer_email, " ");
} }
function UserOrderComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 23);
} }
function UserOrderComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r41.contact, " ");
} }
function UserOrderComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserOrderComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r42.creationDate.seconds * 1000, "dd MMM yyyy, hh:mm:ss aa"), " ");
} }
function UserOrderComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserOrderComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r43.status, " ");
} }
function UserOrderComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function UserOrderComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
class UserOrderComponent {
    constructor(orderService, loginService) {
        this.orderService = orderService;
        this.loginService = loginService;
        this.displayedColumns = ['description', 'amount', 'email', 'creationDate', 'status'];
        this.orders = [];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowRight"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
    }
    ngOnInit() {
        let user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        this.getOrdersByUid(user.uid);
    }
    getOrdersByUid(uid) {
        this.orderService.getOrderByUid(uid).subscribe(response => {
            this.orders = response;
            this.dataSource = response;
            console.log(this.orders);
        });
    }
    logout() {
        this.loginService.logout();
    }
}
UserOrderComponent.ɵfac = function UserOrderComponent_Factory(t) { return new (t || UserOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
UserOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserOrderComponent, selectors: [["app-user-order"]], decls: 49, vars: 7, consts: [[1, "wrapper"], [1, "container", "order-detail"], [1, "search-page-header"], [1, "header"], [1, "order-details"], [1, "row"], [1, "col-md-12"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "email"], ["matColumnDef", "contact"], ["matColumnDef", "creationDate"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-md-4"], ["href", "/order"], ["size", "1x", 3, "icon"], ["href", "/search"], ["href", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UserOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserOrderComponent_th_12_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserOrderComponent_td_13_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserOrderComponent_th_15_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserOrderComponent_td_16_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserOrderComponent_th_18_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserOrderComponent_td_19_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserOrderComponent_th_21_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserOrderComponent_td_22_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserOrderComponent_th_24_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserOrderComponent_td_25_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserOrderComponent_th_27_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserOrderComponent_td_28_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserOrderComponent_tr_29_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserOrderComponent_tr_30_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " View All Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Explore Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserOrderComponent_Template_a_click_44_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSignOutAlt);
    } }, directives: [_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.order-detail[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n  line-height: 1.9em;\n  color: #333;\n}\n\n.search-page-header[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 14px 1em;\n  height: 64px;\n  border-bottom: 1px solid #eee;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 20px;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  font-size: 22px;\n  display: inline-block;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.order-details[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 36vh;\n}\n\n.order-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.2em;\n}\n\n.order-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.order-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-top: 128px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8ea;\n  border-style: none;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  color: #58666e;\n  font-size: 1.1em;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n  font-size: 1em;\n  font-weight: 500;\n  color: #58666e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC91c2VyLW9yZGVyL0M6XFxVc2Vyc1xcZGV2Z3JcXE9uZURyaXZlXFxEb2N1bWVudHNcXERldndvcmt4bGFic1xcZG9tYWluLXVzZXIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L3VzZXItb3JkZXIvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFwcFxcYWNjb3VudFxcdXNlci1vcmRlclxcdXNlci1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzdGQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEZ0dGOztBQzdGQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBRGdHRjs7QUM5RkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURnR0o7O0FDOUZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEZ0dOOztBQzNGQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBRDhGRjs7QUM1RkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FEOEZKOztBQzNGTTtFQUNFLGlCQUFBO0FENkZSOztBQ3hGRTtFQUNFLGlCQUFBO0FEMEZKOztBQ3JGQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEd0ZGOztBQ3JGQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEd0ZGOztBQ3JGQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHdGRiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRvbWFpbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1zdHJpa2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLm9yZGVyLWRldGFpbCB7XG4gIG1hcmdpbi10b3A6IDE2dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjllbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zZWFyY2gtcGFnZS1oZWFkZXIge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAxNHB4IDFlbTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbi5zZWFyY2gtcGFnZS1oZWFkZXIgLmhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uc2VhcmNoLXBhZ2UtaGVhZGVyIC5oZWFkZXIgaDEge1xuICBtYXJnaW46IDVweCAwIDAgMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ub3JkZXItZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzNnZoO1xufVxuLm9yZGVyLWRldGFpbHMgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ub3JkZXItZGV0YWlscyAucm93IGEgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLnJvdzpudGgtb2YtdHlwZSgyKSB7XG4gIG1hcmdpbi10b3A6IDEyOHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGVhO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICM1ODY2NmU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzU4NjY2ZTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuLm9yZGVyLWRldGFpbCB7XHJcbiAgbWFyZ2luLXRvcDogMTZ2aDtcclxuICBsaW5lLWhlaWdodDogMS45ZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zZWFyY2gtcGFnZS1oZWFkZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMTRweCAxZW07XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzNnZoO1xyXG5cclxuICAucm93IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjhweDtcclxuICB9XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3I6ICNlMmU4ZWEsICRhbHBoYTogMSk7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICBjb2xvcjogIzU4NjY2ZTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzU4NjY2ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-order',
                templateUrl: './user-order.component.html',
                styleUrls: ['./user-order.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }, { type: src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _home_domain_detail_domain_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/domain-detail/domain-detail.component */ "./src/app/home/domain-detail/domain-detail.component.ts");
/* harmony import */ var _search_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search-page/search-page.component */ "./src/app/search/search-page/search-page.component.ts");
/* harmony import */ var _payment_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment/payment-page/payment-page.component */ "./src/app/payment/payment-page/payment-page.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _account_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/user-account/user-account.component */ "./src/app/account/user-account/user-account.component.ts");
/* harmony import */ var _account_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/user-order/user-order.component */ "./src/app/account/user-order/user-order.component.ts");
/* harmony import */ var _payment_payment_confirm_payment_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment/payment-confirm/payment-confirm.component */ "./src/app/payment/payment-confirm/payment-confirm.component.ts");













const routes = [
    {
        path: '',
        component: _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    {
        path: 'domain/:id',
        component: _home_domain_detail_domain_detail_component__WEBPACK_IMPORTED_MODULE_3__["DomainDetailComponent"]
    },
    {
        path: 'search/:term',
        component: _search_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"]
    },
    {
        path: 'search',
        component: _search_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"]
    },
    {
        path: 'payment/:domain',
        component: _payment_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_5__["PaymentPageComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'payment/confirm/:id',
        component: _payment_payment_confirm_payment_confirm_component__WEBPACK_IMPORTED_MODULE_10__["PaymentConfirmComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'account',
        component: _account_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_8__["UserAccountComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'order',
        component: _account_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_9__["UserOrderComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'domain-user';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _payment_payment_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment/payment.module */ "./src/app/payment/payment.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");



















const ProjectModules = [
    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
    _search_search_module__WEBPACK_IMPORTED_MODULE_14__["SearchModule"],
    _payment_payment_module__WEBPACK_IMPORTED_MODULE_15__["PaymentModule"],
    _account_account_module__WEBPACK_IMPORTED_MODULE_16__["AccountModule"]
];
const DependencyModules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
    ProjectModules,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            DependencyModules,
            ProjectModules,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_14__["SearchModule"],
        _payment_payment_module__WEBPACK_IMPORTED_MODULE_15__["PaymentModule"],
        _account_account_module__WEBPACK_IMPORTED_MODULE_16__["AccountModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_14__["SearchModule"],
        _payment_payment_module__WEBPACK_IMPORTED_MODULE_15__["PaymentModule"],
        _account_account_module__WEBPACK_IMPORTED_MODULE_16__["AccountModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    DependencyModules,
                    ProjectModules,
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/services/account.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/account.service.ts ***!
  \****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");





class AccountService {
    constructor(afs) {
        this.afs = afs;
        this.accountCollection = this.afs.collection('accounts');
    }
    getAccounts() {
        var accountRef = this.afs.collection('accounts', ref => ref.orderBy('creationDate', 'desc'));
        return (this.accounts = accountRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    getAccountById(id) {
        console.log("getAccountById", id);
        this.accountDocument = this.afs.doc(`accounts/${id}`);
        return this.accountDocument.valueChanges();
    }
    getAccountByUid(uid) {
        console.log("getAccountById", uid);
        var accountRef = this.afs.collection('accounts', ref => ref.where('uid', '==', uid).limit(1));
        return (this.accounts = accountRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    setAccount(account) {
        const id = this.afs.createId();
        if (!account.id) {
            account.id = id;
        }
        account.creationDate = new Date();
        account.modificationDate = new Date();
        return this.accountCollection.doc(account.id).set(account, { merge: true });
    }
    deleteAccount(account) {
        this.accountDocument = this.afs.doc(`accounts/${account.id}`);
        return this.accountDocument.delete();
    }
    updateAccount(account) {
        account.modificationDate = new Date();
        this.accountDocument = this.afs.doc(`accounts/${account.id}`);
        return this.accountDocument.update(account);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");





class CategoryService {
    constructor(afs) {
        this.afs = afs;
        this.categoryCollection = this.afs.collection('categories');
    }
    getCategories() {
        var categoryRef = this.afs.collection('categories', ref => ref.orderBy('creationDate', 'desc'));
        return (this.categories = categoryRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    getCategoryById(id) {
        console.log("getCategoryById", id);
        this.categoryDocument = this.afs.doc(`categories/${id}`);
        return this.categoryDocument.valueChanges();
    }
    setCategory(category) {
        const id = this.afs.createId();
        category.id = id;
        category.creationDate = new Date();
        category.modificationDate = new Date();
        return this.categoryCollection.doc(id).set(category);
    }
    deleteCategory(category) {
        this.categoryDocument = this.afs.doc(`categories/${category.id}`);
        return this.categoryDocument.delete();
    }
    updateCategory(category) {
        category.modificationDate = new Date();
        this.categoryDocument = this.afs.doc(`categories/${category.id}`);
        return this.categoryDocument.update(category);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/domain.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/domain.service.ts ***!
  \***************************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");





class DomainService {
    constructor(afs) {
        this.afs = afs;
        this.domainCollection = this.afs.collection('domains');
    }
    getDomains() {
        var domainRef = this.afs.collection('domains', ref => ref.orderBy('creationDate', 'desc'));
        return (this.domains = domainRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    getDomainById(id) {
        console.log("getDomainById", id);
        this.domainDocument = this.afs.doc(`domains/${id}`);
        return this.domainDocument.valueChanges();
    }
    setDomain(domain) {
        const id = this.afs.createId();
        domain.id = id;
        domain.creationDate = new Date();
        domain.modificationDate = new Date();
        return this.domainCollection.doc(id).set(domain);
    }
    deleteDomain(domain) {
        this.domainDocument = this.afs.doc(`domains/${domain.id}`);
        return this.domainDocument.delete();
    }
    updateDomain(domain) {
        domain.modificationDate = new Date();
        this.domainDocument = this.afs.doc(`domains/${domain.id}`);
        return this.domainDocument.update(domain);
    }
}
DomainService.ɵfac = function DomainService_Factory(t) { return new (t || DomainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
DomainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DomainService, factory: DomainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var src_app_shared_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);










class LoginService {
    constructor(dialog, fb, afAuth) {
        this.dialog = dialog;
        this.fb = fb;
        this.afAuth = afAuth;
    }
    domainLogin() {
        const dialogRef = this.dialog.open(src_app_shared_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(response => { });
    }
    logout() {
        this.afAuth.auth.signOut();
    }
    ifUserLoggedIn() {
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");





class OrderService {
    constructor(afs) {
        this.afs = afs;
        this.orderCollection = this.afs.collection('orders');
    }
    getOrders() {
        var orderRef = this.afs.collection('orders', ref => ref.orderBy('creationDate', 'desc'));
        return (this.orders = orderRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    getOrderById(id) {
        console.log("getOrderById", id);
        this.orderDocument = this.afs.doc(`orders/${id}`);
        return this.orderDocument.valueChanges();
    }
    getOrderByUid(uid) {
        var orderRef = this.afs.collection('orders', ref => ref.where('account.uid', '==', uid).orderBy('creationDate', 'desc'));
        return (this.orders = orderRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((actions) => actions.map((a) => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }))));
    }
    setOrder(order) {
        const id = this.afs.createId();
        if (!order.id) {
            order.id = id;
        }
        order.creationDate = new Date();
        order.modificationDate = new Date();
        return this.orderCollection.doc(order.id).set(order, { merge: true });
    }
    deleteOrder(order) {
        this.orderDocument = this.afs.doc(`orders/${order.id}`);
        return this.orderDocument.delete();
    }
    updateOrder(order) {
        order.modificationDate = new Date();
        this.orderDocument = this.afs.doc(`orders/${order.id}`);
        return this.orderDocument.update(order);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/domain-detail/domain-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/domain-detail/domain-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: DomainDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainDetailComponent", function() { return DomainDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/domain.service */ "./src/app/common/services/domain.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/login.service */ "./src/app/common/services/login.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");













function DomainDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The domain name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " is for sale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.domain.name);
} }
function DomainDetailComponent_div_3_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyword_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r7, " ");
} }
function DomainDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What you get:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Domain name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logo design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainDetailComponent_div_3_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openPaymentPage(ctx_r8.domain.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DomainDetailComponent_div_3_a_38_Template, 2, 1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.domain.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Buy ", ctx_r5.domain.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx_r5.domain.price, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 12, ctx_r5.domain.salePrice, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.domain.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.domain.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Keywords for ", ctx_r5.domain.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.domain.keyWords);
} }
class DomainDetailComponent {
    constructor(domainService, router, route, loginService) {
        this.domainService = domainService;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.domainId = params.get("id");
            if (this.domainId) {
                this.fetchDomainById(this.domainId);
            }
        });
    }
    fetchDomainById(id) {
        this.domainService.getDomainById(id).subscribe(response => {
            this.domain = response;
            console.log("fetchDomainById->", this.domain);
        });
    }
    openPaymentPage(id) {
        this.loginService.ifUserLoggedIn().then(response => {
            if (response) {
                this.router.navigateByUrl("/payment/" + id);
                console.log("openPaymentPage->", id);
            }
            else {
                this.loginService.domainLogin();
            }
        });
    }
}
DomainDetailComponent.ɵfac = function DomainDetailComponent_Factory(t) { return new (t || DomainDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
DomainDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainDetailComponent, selectors: [["app-domain-detail"]], decls: 5, vars: 3, consts: [[1, "wrapper"], [3, "isSearch"], ["class", "container single-word", 4, "ngIf"], ["class", "grey-panel", 4, "ngIf"], [1, "container", "single-word"], [1, "word-breakable"], [1, "lead"], ["href", "http://xioxo.com/"], [1, "small"], [1, "grey-panel"], [1, "container", "single-main"], [1, "row"], [1, "col-md-6"], [1, "get-list"], [1, "price-box"], [1, "price-box-desc"], [1, "price-box-value"], ["id", "regular-price"], [1, "domain-price", "text-strike"], [1, "domain-price"], [1, "price-box-actions"], [1, "price-box-buttons"], ["id", "buy-button", 1, "btn", "btn-lg", "btn-buy", 3, "click"], ["size", "1x", 3, "icon"], ["id", "buy-now-text"], [1, "col-md-5", "col-md-offset-1", "thumb-container"], [1, "domain-logo"], [1, "img-responsive", 3, "src"], ["href", "/tag/adaptable", "class", "btn btn-default btn-tag", 4, "ngFor", "ngForOf"], ["href", "/tag/adaptable", 1, "btn", "btn-default", "btn-tag"]], template: function DomainDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DomainDetailComponent_div_2_Template, 8, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DomainDetailComponent_div_3_Template, 39, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.domain);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.single-word[_ngcontent-%COMP%] {\n  padding: 30px;\n  color: #888;\n  font-size: 18px;\n  margin-top: 16vh;\n}\n\n.single-word[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  font-size: 21px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n.single-word[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #494949;\n  text-decoration: none;\n}\n\n.word-breakable[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.grey-panel[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 64px;\n}\n\n.get-list[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 18px;\n  list-style: none;\n}\n\n.get-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  background-image: url('tick.png');\n  background-size: 14px 10px;\n  display: inline-block;\n  width: 14px;\n  height: 10px;\n  content: \"\";\n  margin-right: 12px;\n}\n\n.single-main[_ngcontent-%COMP%] {\n  line-height: 1.9em;\n}\n\n.single-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.domain-price[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.domain-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin-bottom: 40px;\n  padding-bottom: 2px;\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  height: auto;\n  position: relative;\n  background-blend-mode: screen;\n  background-color: #fff;\n}\n\n.domain-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\na.btn-tag[_ngcontent-%COMP%] {\n  background: #E0E8FF;\n  color: #333366;\n  border: 0;\n  text-decoration: none;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.price-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  margin: 30px 0;\n  overflow: hidden;\n}\n\n.price-box[_ngcontent-%COMP%]   .price-box-desc[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n}\n\n.price-box[_ngcontent-%COMP%]   .price-box-value[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.price-box[_ngcontent-%COMP%]   .price-box-actions[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.price-box[_ngcontent-%COMP%]   .price-box-buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\n.price-box[_ngcontent-%COMP%]   .price-box-buttons[_ngcontent-%COMP%]   #buy-now-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.price-box[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  height: auto;\n  font-weight: normal;\n  font-family: \"Lato\", sans-serif;\n  background: #ef156e;\n  color: #fff;\n  border: 0;\n  padding: 6px 14px;\n  line-height: 30px;\n  box-shadow: none;\n  text-shadow: none;\n}\n\n@media (min-width: 992px) {\n  .thumb-container[_ngcontent-%COMP%] {\n    margin-top: -170px;\n  }\n\n  .col-md-offset-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-5[_ngcontent-%COMP%] {\n    width: 41.66666667%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kb21haW4tZGV0YWlsL0M6XFxVc2Vyc1xcZGV2Z3JcXE9uZURyaXZlXFxEb2N1bWVudHNcXERldndvcmt4bGFic1xcZG9tYWluLXVzZXIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL2hvbWUvZG9tYWluLWRldGFpbC9kb21haW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2RvbWFpbi1kZXRhaWwvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFwcFxcaG9tZVxcZG9tYWluLWRldGFpbFxcZG9tYWluLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzNGQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEOEZGOztBQzVGRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUQ4Rko7O0FDekZFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FEMkZKOztBQ25GQTtFQUNFLHFCQUFBO0FEc0ZGOztBQ25GQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FEc0ZGOztBQ25GQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURzRkY7O0FDbkZBO0VBQ0UsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURzRkY7O0FDbkZBO0VBQ0Usa0JBQUE7QURzRkY7O0FDcEZFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBRHNGSjs7QUNoRkE7RUFDRSxpQkFBQTtBRG1GRjs7QUNoRkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsd0NBQUE7RUFHQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRCtFRjs7QUM3RUU7RUFDRSxzQkFBQTtBRCtFSjs7QUN6RUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQ0RUY7O0FDekVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUQwRUY7O0FDdkVBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEMEVGOztBQ3hFRTtFQUNFLG9CQUFBO0FEMEVKOztBQ3ZFRTtFQUNFLGVBQUE7QUR5RUo7O0FDdEVFO0VBQ0UsYUFBQTtBRHdFSjs7QUNyRUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUR1RUo7O0FDckVJO0VBQ0UsZ0JBQUE7QUR1RU47O0FDbkVFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFHQSxnQkFBQTtFQUNBLGlCQUFBO0FEcUVKOztBQzNEQTtFQUNFO0lBQ0Usa0JBQUE7RUQ4REY7O0VDM0RBO0lBQ0Usd0JBQUE7RUQ4REY7O0VDM0RBO0lBQ0UsbUJBQUE7RUQ4REY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZG9tYWluLWRldGFpbC9kb21haW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRvbWFpbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1zdHJpa2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnNpbmdsZS13b3JkIHtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTZ2aDtcbn1cbi5zaW5nbGUtd29yZCAubGVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5zaW5nbGUtd29yZCBhIHtcbiAgY29sb3I6ICM0OTQ5NDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLndvcmQtYnJlYWthYmxlIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZ3JleS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZy1ib3R0b206IDY0cHg7XG59XG5cbi5nZXQtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmdldC1saXN0IGxpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RpY2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNHB4IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uc2luZ2xlLW1haW4ge1xuICBsaW5lLWhlaWdodDogMS45ZW07XG59XG4uc2luZ2xlLW1haW4gLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmRvbWFpbi1wcmljZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZG9tYWluLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRvbWFpbi1sb2dvIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWctcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYS5idG4tdGFnIHtcbiAgYmFja2dyb3VuZDogI0UwRThGRjtcbiAgY29sb3I6ICMzMzMzNjY7XG4gIGJvcmRlcjogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnByaWNlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJpY2UtYm94IC5wcmljZS1ib3gtZGVzYyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xufVxuLnByaWNlLWJveCAucHJpY2UtYm94LXZhbHVlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnByaWNlLWJveCAucHJpY2UtYm94LWFjdGlvbnMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnByaWNlLWJveCAucHJpY2UtYm94LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnByaWNlLWJveCAucHJpY2UtYm94LWJ1dHRvbnMgI2J1eS1ub3ctdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucHJpY2UtYm94IC5idG4tYnV5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogI2VmMTU2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGh1bWItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTcwcHg7XG4gIH1cblxuICAuY29sLW1kLW9mZnNldC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTUge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuXHJcblxyXG4uc2luZ2xlLXdvcmQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2dmg7XHJcblxyXG4gIC5sZWFkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuLndvcmQtYnJlYWthYmxlIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5ncmV5LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xyXG59XHJcblxyXG4uZ2V0LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5nZXQtbGlzdCBsaTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RpY2sucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uc2luZ2xlLW1haW4ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjllbTtcclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4uZG9tYWluLXByaWNlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmRvbWFpbi1sb2dvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcblxyXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG5cclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuYS5idG4tdGFnIHtcclxuICBiYWNrZ3JvdW5kOiAjRTBFOEZGO1xyXG4gIGNvbG9yOiAjMzMzMzY2O1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5wcmljZS1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnByaWNlLWJveC1kZXNjIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLWJveC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAucHJpY2UtYm94LWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5wcmljZS1ib3gtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgI2J1eS1ub3ctdGV4dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWJ1eSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWYxNTZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRodW1iLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTcwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLW1kLW9mZnNldC0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain-detail',
                templateUrl: './domain-detail.component.html',
                styleUrls: ['./domain-detail.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







class FooterComponent {
    constructor() {
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.faPinterest = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPinterest"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 25, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "row", "standard-footer"], [1, "col-md-12", "text-center"], [1, "linklist"], ["href", "https://resources.domains.com/website-terms-of-use/"], [1, "col-sm-10"], ["href", "https://domains.com/", 1, "pinklink"], [1, "col-sm-2", "text-right", "social-media"], ["size", "2x", 3, "icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Domains create brandable domain names for new businesses and products. Find catchy, short and memorable domains for your company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Domains Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Domains is registered in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPinterest);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding-top: 36px;\n  background: #4DB6AC;\n  margin-top: 0;\n  color: #fff;\n  padding-bottom: 36px;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 1;\n  text-decoration: underline;\n  margin-right: 16px;\n}\n\n.social-media[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Zvb3Rlci9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxob21lXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzVGQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FEK0ZGOztBQzVGQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBRCtGRjs7QUMzRkU7RUFDRSxpQkFBQTtBRDhGSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLnRleHQtc3RyaWtlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kb21haW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlYXJjaC1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWxzLWNhcmQgLmRvbWFpbi1pbWFnZSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRldGFpbHMtY2FyZCAucm93IHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMzZweDtcbiAgYmFja2dyb3VuZDogIzREQjZBQztcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAzNnB4O1xufVxuXG4uZm9vdGVyIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLnNvY2lhbC1tZWRpYSBmYS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcblxyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuICBiYWNrZ3JvdW5kOiAjNERCNkFDO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEge1xyXG4gIGZhLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/login.service */ "./src/app/common/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_input_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.searchDomain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r46.searchForm);
} }
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.domainLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_19_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(dialog, fb, afAuth, loginService) {
        this.dialog = dialog;
        this.fb = fb;
        this.afAuth = afAuth;
        this.loginService = loginService;
        this.searchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.loginService.ifUserLoggedIn().then(response => {
            this.isSignedIn = response;
            console.log("isSignedIn->", this.isSignedIn);
        });
        this.searchForm = this.fb.group({
            term: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    searchDomain() {
        let term = this.searchForm.get("term").value;
        this.searchTerm.emit(term);
    }
    domainLogin() {
        this.loginService.domainLogin();
    }
    logout() {
        this.loginService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { isSearch: "isSearch" }, outputs: { searchTerm: "searchTerm" }, decls: 20, vars: 6, consts: [[1, "navbar"], [1, "container"], [1, "navbar-content"], [1, "navbar-left"], ["href", "/", 1, "navbar-brand"], ["src", "../../../assets/images/domain_logo_white.png", "alt", ""], ["class", "navbar-space", 4, "ngIf"], ["class", "navbar-search", 4, "ngIf"], [1, "navbar-middle"], [1, "nav", "navbar-nav"], ["href", "/"], [1, "fav-link", 2, "display", "none"], ["href", "/favourites", "title", "Favourites"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-heart"], ["class", "log-in-out", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "navbar-space"], [1, "navbar-search"], ["id", "search-form", 3, "formGroup"], [1, "search-control"], ["type", "text", "name", "search", "placeholder", "Search domains", "aria-label", "Search domains", "autofocus", "", "value", "", "formControlName", "term"], ["type", "submit", "value", "", 3, "click"], [1, "log-in-out"], ["href", "", 3, "click"], [1, ""], ["href", "/account"], ["href", "/order"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_li_19_Template, 3, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearch == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearch == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedIn == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedIn == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedIn == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedIn == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4DB6AC;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border: 0;\n  min-height: 86px;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  z-index: 1030;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 100px;\n  min-width: 70px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0 20px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0em;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  float: right;\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  display: block;\n  text-align: -webkit-match-parent;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 1;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-space[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 8px 8px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 8px;\n  vertical-align: middle;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 20px;\n  height: 36px;\n  border-radius: 8px;\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex: 1 1 100%;\n  padding: 8px 15px;\n  border: 0;\n  outline: none;\n  -webkit-appearance: none;\n  background: #fff;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 15px;\n  border: 0;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  background: url('search.png') no-repeat center;\n  background-size: contain;\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\n.log-in-out[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWFkZXIvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hlYWRlci9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxob21lXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzdGQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBRCtGRjs7QUM3RkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRCtGSjs7QUM1RkU7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRDhGSjs7QUMxRkU7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxlQUFBO0FENEZKOztBQ3pGSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEMkZOOztBQ3JGRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBRHVGSjs7QUNyRkk7RUFDRSxnQkFBQTtBRHVGTjs7QUNwRkk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO1VBQUEsMEJBQUE7QURzRk47O0FDcEZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FEc0ZSOztBQ3BGUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FEc0ZWOztBQ2hGRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBRGtGSjs7QUMvRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEaUZKOztBQy9FSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEaUZOOztBQ3pFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FEMkVGOztBQ3hFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZUFBQTtBRDBFRjs7QUN2RUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRDBFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLnRleHQtc3RyaWtlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kb21haW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlYXJjaC1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWxzLWNhcmQgLmRvbWFpbi1pbWFnZSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRldGFpbHMtY2FyZCAucm93IHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzREQjZBQztcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDA7XG4gIG1pbi1oZWlnaHQ6IDg2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAzMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5uYXZiYXItbGVmdCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1zZWFyY2gge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLm5hdmJhciAubmF2YmFyLXNlYXJjaCBmb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5uYXZiYXIgLm5hdmJhci1taWRkbGUge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5uYXZiYXIgLm5hdmJhci1taWRkbGUgLm5hdiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmF2YmFyIC5uYXZiYXItbWlkZGxlIHVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuLm5hdmJhciAubmF2YmFyLW1pZGRsZSB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbn1cbi5uYXZiYXIgLm5hdmJhci1taWRkbGUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXZiYXIgLm5hdmJhci1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyOiAwO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nLWluLW91dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM0REI2QUM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDg2cHg7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG5cclxuICAubmF2YmFyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbGVmdCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICB9XHJcblxyXG5cclxuICAubmF2YmFyLXNlYXJjaCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5uYXZiYXItbWlkZGxlIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAgIC5uYXYge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxIDEgMTAwJTtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nLWluLW91dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, { isSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/domain.service */ "./src/app/common/services/domain.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");












function HomePageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_24_Template_img_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const domain_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDomainDetail(domain_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", domain_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](domain_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, domain_r1.salePrice, "USD"));
} }
class HomePageComponent {
    constructor(domainService, router, fb) {
        this.domainService = domainService;
        this.router = router;
        this.fb = fb;
        this.domains = [];
    }
    ngOnInit() {
        this.getDomainDetails();
        this.searchForm = this.fb.group({
            term: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    getDomainDetails() {
        this.domainService.getDomains().subscribe((response) => {
            this.domains = response;
            console.log("getDomainDetails->", this.domains);
        });
    }
    openDomainDetail(id) {
        console.log("openDomainDetail->", id);
        this.router.navigateByUrl("/domain/" + id);
    }
    submitSearchForm() {
        let term = this.searchForm.get("term").value;
        this.router.navigateByUrl("/search/" + term);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 26, vars: 3, consts: [[1, "home"], [3, "isSearch"], [1, "container"], [1, "jumbotron", "text-center"], ["id", "search-form", 3, "formGroup"], [1, "search-control"], ["type", "text", "name", "search", "placeholder", "Search by keyword, e.g. tech, beauty", "aria-label", "Search by keyword, e.g. tech, beauty", "autofocus", "", "value", "", "formControlName", "term"], ["type", "submit", "value", "", 3, "click"], [1, "lead"], ["href", "/buyers"], ["href", "/search"], [1, "container-home"], [1, "row"], [1, "col-md-12"], [1, "small-title"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "details-card"], ["mat-card-image", "", "alt", "logo", 1, "domain-image", 3, "src", "click"], [1, "col-sm-7"], [1, "price", "strike-text"], [1, "col-sm-5"], [1, "price"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search for a domain name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_input_click_9_listener($event) { return ctx.submitSearchForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We sell premium domain names, complete with logo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Explore All Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Featured domains for sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomePageComponent_div_24_Template, 11, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSearch", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.domains);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.home[_ngcontent-%COMP%] {\n  background: #4DB6AC;\n  color: #fff;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4DB6AC;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border: 0;\n  min-height: 86px;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  z-index: 1030;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 100px;\n  min-width: 70px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  float: right;\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  display: block;\n  text-align: -webkit-match-parent;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-middle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 1;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-space[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 8px 8px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 8px;\n  vertical-align: middle;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-top: 8vh;\n  margin-bottom: 4vh;\n  padding-top: 48px;\n  padding-bottom: 36px;\n  color: #fff;\n  text-align: center;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .search-control[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 30px auto 0;\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 47px;\n  margin-bottom: 15px;\n}\n\nform[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0em;\n}\n\n.lead[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin: 36px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.lead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.container-home[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 50px 0;\n  color: #000;\n}\n\n.small-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  color: #292929;\n  text-decoration: none;\n  font-size: 24px;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 20px;\n  height: 36px;\n  border-radius: 8px;\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex: 1 1 100%;\n  padding: 8px 15px;\n  border: 0;\n  outline: none;\n  -webkit-appearance: none;\n  background: #fff;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 15px;\n  border: 0;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  background: url('search.png') no-repeat center;\n  background-size: contain;\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXBhZ2UvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtcGFnZS9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxob21lXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzdGQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBRGdHRjs7QUM3RkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUQrRkY7O0FDN0ZFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUQrRko7O0FDNUZFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUQ4Rko7O0FDM0ZFO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FENkZKOztBQzNGSTtFQUNFLGdCQUFBO0FENkZOOztBQzFGSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtBRDRGTjs7QUMxRk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUQ0RlI7O0FDMUZRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUQ0RlY7O0FDdEZFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FEd0ZKOztBQ3JGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUR1Rko7O0FDckZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR1Rk47O0FDL0VBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURrRkY7O0FDL0VBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEa0ZGOztBQy9FQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURrRkY7O0FDL0VBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEa0ZGOztBQzVFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEK0VGOztBQ3pFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FENEVGOztBQzFFRTtFQUNFLFdBQUE7QUQ0RUo7O0FDeEVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRDJFRjs7QUN4RUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRDJFRjs7QUN4RUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEMEVGOztBQ3hFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUQwRUo7O0FDeEVJO0VBQ0Usc0JBQUE7QUQwRU47O0FDcEVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEc0VKOztBQ2xFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FEb0VGOztBQ2pFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZUFBQTtBRG1FRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLnRleHQtc3RyaWtlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kb21haW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlYXJjaC1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWxzLWNhcmQgLmRvbWFpbi1pbWFnZSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRldGFpbHMtY2FyZCAucm93IHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5ob21lIHtcbiAgYmFja2dyb3VuZDogIzREQjZBQztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzREQjZBQztcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDA7XG4gIG1pbi1oZWlnaHQ6IDg2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAzMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5uYXZiYXItbGVmdCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1taWRkbGUge1xuICBmbGV4OiAxO1xufVxuLm5hdmJhciAubmF2YmFyLW1pZGRsZSAubmF2IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXZiYXIgLm5hdmJhci1taWRkbGUgdWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG4ubmF2YmFyIC5uYXZiYXItbWlkZGxlIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xufVxuLm5hdmJhciAubmF2YmFyLW1pZGRsZSB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdmJhciAubmF2YmFyLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA4cHggOHB4O1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA4dmg7XG4gIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVtYm90cm9uIC5zZWFyY2gtY29udHJvbCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG59XG5cbi5qdW1ib3Ryb24gaDEge1xuICBmb250LXNpemU6IDQ3cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xufVxuXG4ubGVhZCB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbjogMzZweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuLmxlYWQgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyLWhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc21hbGwtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjkyOTI5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMSAxIDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDA7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWFyY2gucG5nKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5ob21lIHtcclxuICBiYWNrZ3JvdW5kOiAjNERCNkFDO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNERCNkFDO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBtaW4taGVpZ2h0OiA4NnB4O1xyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxuXHJcbiAgLm5hdmJhci1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWxlZnQge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW1pZGRsZSB7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5uYXYge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLXRvcDogOHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDR2aDtcclxuICBwYWRkaW5nLXRvcDogNDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gLnNlYXJjaC1jb250cm9sIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gaDEge1xyXG4gIGZvbnQtc2l6ZTogNDdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAwZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sZWFkIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbjogMzZweDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zbWFsbC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyOTI5Mjk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kb21haW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDEgMSAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _domain_detail_domain_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain-detail/domain-detail.component */ "./src/app/home/domain-detail/domain-detail.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/login/login.component */ "./src/app/shared/login/login.component.ts");










class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _domain_detail_domain_detail_component__WEBPACK_IMPORTED_MODULE_5__["DomainDetailComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [_shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
                declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _domain_detail_domain_detail_component__WEBPACK_IMPORTED_MODULE_5__["DomainDetailComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/payment/payment-confirm/payment-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/payment/payment-confirm/payment-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmComponent", function() { return PaymentConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");





class PaymentConfirmComponent {
    constructor() {
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
    }
    ngOnInit() {
    }
}
PaymentConfirmComponent.ɵfac = function PaymentConfirmComponent_Factory(t) { return new (t || PaymentConfirmComponent)(); };
PaymentConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentConfirmComponent, selectors: [["app-payment-confirm"]], decls: 20, vars: 2, consts: [[1, "wrapper"], [1, "navbar"], [1, "container"], [1, "navbar-content"], [1, "navbar-left"], ["href", "/", 1, "navbar-brand"], ["src", "../../../assets/images/domain_logo_black.png", "alt", ""], [1, "row", "payment-wrapper"], [1, "col"], [1, "payment-details"], [1, "check-icon"], ["size", "8x", 3, "icon"], ["href", "/order", 1, "order-link"], ["size", "1x", 3, "icon"]], template: function PaymentConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Payment Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View All Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheckCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.payment-wrapper[_ngcontent-%COMP%] {\n  line-height: 1.9;\n  margin-top: 20vh;\n  margin-bottom: 20vh;\n}\n\n.payment-wrapper[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  margin: 80px 0;\n  text-align: center;\n}\n\n.payment-wrapper[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .order-link[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  min-height: 75%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border: 0;\n  min-height: 86px;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  z-index: 1030;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 100px;\n  min-width: 70px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 8px 8px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 8px;\n  vertical-align: middle;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LWNvbmZpcm0vQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvcGF5bWVudC9wYXltZW50LWNvbmZpcm0vcGF5bWVudC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheW1lbnQtY29uZmlybS9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LWNvbmZpcm1cXHBheW1lbnQtY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzVGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRCtGRjs7QUM3RkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUQrRko7O0FDN0ZJO0VBQ0UsZ0JBQUE7QUQrRk47O0FDMUZBO0VBQ0UsZ0JBQUE7QUQ2RkY7O0FDM0ZFO0VBQ0UsZUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FENEZKOztBQ3ZGQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUR5RkY7O0FDdkZFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUR5Rko7O0FDdEZFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUR3Rko7O0FDcEZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHNGSjs7QUNwRkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRHNGTjs7QUMvRUE7RUFDRSxjQUFBO0FEa0ZGIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LWNvbmZpcm0vcGF5bWVudC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRvbWFpbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1zdHJpa2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnBheW1lbnQtd3JhcHBlciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjk7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XG59XG4ucGF5bWVudC13cmFwcGVyIC5wYXltZW50LWRldGFpbHMge1xuICBtYXJnaW46IDgwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnQtd3JhcHBlciAucGF5bWVudC1kZXRhaWxzIC5vcmRlci1saW5rIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDA7XG4gIG1pbi1oZWlnaHQ6IDg2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAzMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5uYXZiYXItbGVmdCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG59XG4ubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2hlY2staWNvbiB7XG4gIGNvbG9yOiAjNDNhMDQ3O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG5cclxuLnBheW1lbnQtd3JhcHBlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcblxyXG4gIC5wYXltZW50LWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiA4MHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm9yZGVyLWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogNzUlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDg2cHg7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG5cclxuICAubmF2YmFyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbGVmdCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICB9XHJcblxyXG5cclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5jaGVjay1pY29uIHtcclxuICBjb2xvcjogIzQzYTA0NztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-confirm',
                templateUrl: './payment-confirm.component.html',
                styleUrls: ['./payment-confirm.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/payment/payment-page/payment-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment/payment-page/payment-page.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageComponent", function() { return PaymentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/domain.service */ "./src/app/common/services/domain.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/order.service */ "./src/app/common/services/order.service.ts");
/* harmony import */ var src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/account.service */ "./src/app/common/services/account.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");














const _c0 = ["paypal"];
function PaymentPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Includes domain name and logo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Total payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.domain.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 3, ctx_r20.domain.salePrice, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 6, ctx_r20.domain.salePrice, "USD"));
} }
function PaymentPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " I agree to Domain's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Terms and Conditions for Buyers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PaymentPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r23.domain.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class PaymentPageComponent {
    constructor(domainService, router, route, orderService, accountService) {
        this.domainService = domainService;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.isPaidFor = false;
    }
    ngOnInit() {
        this.fetchAccountByUid();
        this.route.paramMap.subscribe(params => {
            this.domainId = params.get("domain");
            if (this.domainId) {
                this.fetchDomainById(this.domainId);
            }
        });
    }
    fetchAccountByUid() {
        let user = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser;
        this.accountService.getAccountByUid(user.uid).subscribe(response => {
            this.account = response[0];
        });
    }
    fetchDomainById(id) {
        this.domainService.getDomainById(id).subscribe(response => {
            this.domain = response;
            if (this.domain) {
                this.renderPaypalButton();
            }
        });
    }
    renderPaypalButton() {
        paypal
            .Buttons({
            OnInit: (data, actions) => {
                actions.disable();
            },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: this.domain.name,
                            amount: {
                                currency_code: 'USD',
                                value: this.domain.salePrice
                            }
                        }
                    ]
                });
            },
            onApprove: (data, actions) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const paypalOrder = yield actions.order.capture();
                this.isPaidFor = true;
                console.log(paypalOrder);
                this.order = {
                    paymentId: paypalOrder.id,
                    payer_id: paypalOrder.payer.payer_id,
                    payer_email: paypalOrder.payer.email_address,
                    payer_address: paypalOrder.payer.address.country_code,
                    status: paypalOrder.status,
                    amount: paypalOrder.purchase_units[0].amount.value,
                    currency: paypalOrder.purchase_units[0].amount.currency_code,
                    description: paypalOrder.purchase_units[0].description,
                    account: this.account
                };
                this.orderService.setOrder(this.order).then(() => {
                    console.log("Order Added");
                    this.domain.isSold = true;
                    this.domainService.updateDomain(this.domain).then(() => {
                        console.log("Domain Updated as Sold");
                        this.router.navigateByUrl("payment/confirm/" + this.order.paymentId);
                    });
                });
            }),
            onError: err => {
                console.log(err);
            }
        })
            .render(this.paypalElement.nativeElement);
    }
}
PaymentPageComponent.ɵfac = function PaymentPageComponent_Factory(t) { return new (t || PaymentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_2__["DomainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"])); };
PaymentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentPageComponent, selectors: [["app-payment-page"]], viewQuery: function PaymentPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paypalElement = _t.first);
    } }, decls: 16, vars: 3, consts: [[1, "navbar"], [1, "container"], [1, "navbar-content"], [1, "navbar-left"], ["href", "/", 1, "navbar-brand"], ["src", "../../../assets/images/domain_logo_black.png", "alt", ""], [1, "wrapper"], [1, "row", "payment-wrapper"], [1, "col-md-7"], ["class", "payment-details", 4, "ngIf"], ["id", "payment-checkbox-confirm", 4, "ngIf"], [1, "payment-buttons"], ["paypal", ""], ["class", "col-md-4 col-md-offset-1", 4, "ngIf"], [1, "payment-details"], [1, "table"], [1, "faint"], [1, "text-right"], [1, "text-right", 2, "border", "0"], ["id", "payment-checkbox-confirm"], [1, "checkbox"], ["type", "checkbox", "id", "payment-confirm-terms"], ["href", "https://resources.brandpa.com/legal/terms-and-conditions-for-buyers/", "target", "_blank"], [1, "col-md-4", "col-md-offset-1"], [1, "domain-logo"], ["alt", "", 1, "img-responsive", 3, "src"]], template: function PaymentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PaymentPageComponent_div_10_Template, 17, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PaymentPageComponent_div_11_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PaymentPageComponent_div_14_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.domain && ctx.isPaidFor == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.domain && ctx.isPaidFor == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.domain && ctx.isPaidFor == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.payment-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  line-height: 1.9;\n}\n\n.payment-details[_ngcontent-%COMP%] {\n  margin: 80px 0;\n}\n\n.payment-details[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.payment-details[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.payment-details[_ngcontent-%COMP%]   .faint[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.payment-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\n.payment-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n.domain-logo[_ngcontent-%COMP%] {\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.15);\n  margin-top: 48px;\n}\n\n.domain-logo[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  min-height: 75%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border: 0;\n  min-height: 86px;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  z-index: 1030;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 100px;\n  min-width: 70px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 8px 8px;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 8px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LXBhZ2UvQzpcXFVzZXJzXFxkZXZnclxcT25lRHJpdmVcXERvY3VtZW50c1xcRGV2d29ya3hsYWJzXFxkb21haW4tdXNlci9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb21tb24uc2NzcyIsInNyYy9hcHAvcGF5bWVudC9wYXltZW50LXBhZ2UvcGF5bWVudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheW1lbnQtcGFnZS9DOlxcVXNlcnNcXGRldmdyXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxEZXZ3b3JreGxhYnNcXGRvbWFpbi11c2VyL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LXBhZ2VcXHBheW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURRQTtFQUNFLDZCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFJO0VBQ0Usc0JBQUE7QUNOTjs7QURZRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBQzdGQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURnR0Y7O0FDN0ZBO0VBQ0UsY0FBQTtBRGdHRjs7QUM5RkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEZ0dKOztBQzdGRTtFQUNFLGlCQUFBO0FEK0ZKOztBQzVGRTtFQUNFLFlBQUE7QUQ4Rko7O0FDM0ZFO0VBQ0UsZ0JBQUE7QUQ2Rko7O0FDMUZFO0VBQ0UsNkJBQUE7QUQ0Rko7O0FDeEZBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBRDJGRjs7QUN6RkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQyRko7O0FDdEZBO0VBQ0UsbUJBQUE7QUR5RkY7O0FDdEZBO0VBQ0UsZ0JBQUE7QUR5RkY7O0FDdkZFO0VBQ0UsZUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEd0ZKOztBQ2xGQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QURvRkY7O0FDbEZFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURvRko7O0FDakZFO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURtRko7O0FDL0VFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRGlGSjs7QUMvRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGlGTiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC1wYWdlL3BheW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLnRleHQtc3RyaWtlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5kb21haW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5yb3cge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlYXJjaC1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQ0JDQkM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWxzLWNhcmQgLmRvbWFpbi1pbWFnZSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRldGFpbHMtY2FyZCAucm93IHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5wYXltZW50LXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS45O1xufVxuXG4ucGF5bWVudC1kZXRhaWxzIHtcbiAgbWFyZ2luOiA4MHB4IDA7XG59XG4ucGF5bWVudC1kZXRhaWxzIC50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucGF5bWVudC1kZXRhaWxzIC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucGF5bWVudC1kZXRhaWxzIC5mYWludCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wYXltZW50LWRldGFpbHMgdGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ucGF5bWVudC1kZXRhaWxzIHRhYmxlIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kb21haW4tbG9nbyB7XG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG4uZG9tYWluLWxvZ28gLmltZy1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2hlY2tib3gge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMDtcbiAgbWluLWhlaWdodDogODZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDMwO1xufVxuLm5hdmJhciAubmF2YmFyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXZiYXIgLm5hdmJhci1sZWZ0IHtcbiAgZmxleDogMCAxIGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogOHB4IDhweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5wYXltZW50LXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOTtcclxufVxyXG5cclxuLnBheW1lbnQtZGV0YWlscyB7XHJcbiAgbWFyZ2luOiA4MHB4IDA7XHJcblxyXG4gIC50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIC5mYWludCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbn1cclxuXHJcbi5kb21haW4tbG9nbyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG5cclxuICAuaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNoZWNrYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA3NSU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDg2cHg7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG5cclxuICAubmF2YmFyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbGVmdCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICB9XHJcblxyXG5cclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDhweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-payment-page',
                templateUrl: './payment-page.component.html',
                styleUrls: ['./payment-page.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_2__["DomainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_common_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }, { type: src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }]; }, { paypalElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['paypal', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class PaymentRoutingModule {
}
PaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentRoutingModule });
PaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentRoutingModule_Factory(t) { return new (t || PaymentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-page/payment-page.component */ "./src/app/payment/payment-page/payment-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _payment_confirm_payment_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-confirm/payment-confirm.component */ "./src/app/payment/payment-confirm/payment-confirm.component.ts");








class PaymentModule {
}
PaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentModule });
PaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentModule_Factory(t) { return new (t || PaymentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentModule, { declarations: [_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_3__["PaymentPageComponent"], _payment_confirm_payment_confirm_component__WEBPACK_IMPORTED_MODULE_6__["PaymentConfirmComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_3__["PaymentPageComponent"], _payment_confirm_payment_confirm_component__WEBPACK_IMPORTED_MODULE_6__["PaymentConfirmComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/search/search-page/search-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/search/search-page/search-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/domain.service */ "./src/app/common/services/domain.service.ts");
/* harmony import */ var src_app_common_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");















function SearchPageComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", filter_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r13.label, " ");
} }
function SearchPageComponent_label_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_label_29_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const category_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getCatDomainDetails(category_r14.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r14 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r11.isRestCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r14.name);
} }
function SearchPageComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_42_Template_img_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const domain_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openDomainDetail(domain_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", domain_r17.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](domain_r17.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, domain_r17.salePrice, "USD"));
} }
class SearchPageComponent {
    constructor(domainService, categoryService, router, route) {
        this.domainService = domainService;
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.domains = [];
        this.categories = [];
        this.allDomains = [];
        this.isAllCategory = true;
        this.maxLength = 0;
        this.minLength = 0;
        this.lengthFilterValue = 0;
        this.maxAmount = 0;
        this.minAmount = 0;
        this.amountFilterValue = 0;
        this.filters = [
            { label: "Relevant", type: "r" },
            { label: "Lowest Price", type: "lp" },
            { label: "Highest Price", type: "hp" },
            { label: "Longest Name", type: "ln" },
            { label: "Shortest Name", type: "sn" }
        ];
    }
    ngOnInit() {
        this.getDomainDetails();
        this.getCategoryDetails();
        this.route.paramMap.subscribe(params => {
            this.searchTerm = params.get("term");
            if (this.searchTerm) {
                this.getSearchDomainDetails(this.searchTerm);
                console.log("getDomainDetails::route->", this.searchTerm);
            }
        });
    }
    getDomainDetails() {
        this.domainService.getDomains().subscribe((response) => {
            this.domains = response;
            this.allDomains = response;
            this.maxLength = this.allDomains.reduce((prev, curr) => {
                return (prev.name.length > curr.name.length) ? prev : curr;
            }).name.length;
            this.minLength = this.allDomains.reduce((prev, curr) => {
                return (prev.name.length < curr.name.length) ? prev : curr;
            }).name.length;
            this.lengthFilterValue = this.maxLength;
            this.maxAmount = +this.allDomains.reduce((prev, curr) => {
                return (prev.salePrice > curr.salePrice) ? prev : curr;
            }).salePrice;
            this.minAmount = +this.allDomains.reduce((prev, curr) => {
                return (prev.salePrice < curr.salePrice) ? prev : curr;
            }).salePrice;
            console.log("getDomainDetails->", this.maxAmount);
            console.log("getDomainDetails->", this.minAmount);
            this.amountFilterValue = this.maxAmount;
        });
    }
    getSearchDomainDetails(term) {
        this.domainService.getDomains().subscribe((response) => {
            this.domains = response;
            this.domains = this.domains.filter(domain => {
                let keywords = domain.keyWords.map(keyword => keyword.toLowerCase());
                if (domain.name.toLowerCase().includes(term.toLowerCase()) || keywords.includes(term.toLowerCase())) {
                    return true;
                }
            });
            console.log("getSearchDomainDetails->", this.domains);
        });
    }
    filterDomainsOnLength(event) {
        let length = event.value;
        console.log("filterDomainsOnLength->", length);
        this.domains = this.allDomains.filter(domain => {
            return domain.name.length <= length;
        });
    }
    filterDomainsOnPrice(event) {
        let price = event.value;
        console.log("filterDomainsOnPrice->", price);
        this.domains = this.allDomains.filter(domain => {
            return domain.salePrice <= price;
        });
    }
    getCatDomainDetails(categoryName) {
        this.isAllCategory = false;
        this.domains = this.allDomains.filter(domain => {
            return domain.category.some(cat => {
                let x = cat.name.toLowerCase() == categoryName.toLowerCase();
                return x;
            });
        });
        console.log("getCatDomainDetails->", this.domains);
    }
    getCategoryDetails() {
        this.categoryService.getCategories().subscribe((response) => {
            this.categories = response;
            this.categories = this.categories.map(category => {
                let newCategory = category;
                let name = category.name;
                newCategory.name = name[0].toUpperCase() + name.slice(1);
                return newCategory;
            });
            console.log("getDomainDetails->", this.categories);
        });
    }
    searchDomains(event) {
        console.log("searchDomains->", event);
        this.getSearchDomainDetails(event);
    }
    addFilters(event) {
        console.log("addFilters->event", event.target.value);
        let filter = event.target.value;
        switch (filter) {
            case "lp":
                this.domains = this.domains.sort((domain1, domain2) => {
                    if (domain1.price > domain2.price) {
                        return 1;
                    }
                    if (domain1.price < domain2.price) {
                        return -1;
                    }
                });
                break;
            case "hp":
                this.domains = this.domains.sort((domain1, domain2) => {
                    if (domain1.price > domain2.price) {
                        return -1;
                    }
                    if (domain1.price < domain2.price) {
                        return 1;
                    }
                });
                break;
            case "ln":
                this.domains = this.domains.sort((domain1, domain2) => {
                    if (domain1.name.length > domain2.name.length) {
                        return -1;
                    }
                    if (domain1.name.length < domain2.name.length) {
                        return 1;
                    }
                });
                break;
            case "sn":
                this.domains = this.domains.sort((domain1, domain2) => {
                    if (domain1.name.length > domain2.name.length) {
                        return 1;
                    }
                    if (domain1.name.length < domain2.name.length) {
                        return -1;
                    }
                });
                break;
            case "r":
                this.domains = this.domains.sort((domain1, domain2) => {
                    if (domain1.creationDate > domain2.creationDate) {
                        return -1;
                    }
                    if (domain1.creationDate < domain2.creationDate) {
                        return 1;
                    }
                });
                break;
        }
    }
    openDomainDetail(id) {
        console.log("openDomainDetail->", id);
        this.router.navigateByUrl("/domain/" + id);
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], decls: 44, vars: 23, consts: [[1, "wrapper"], [3, "isSearch", "searchTerm"], [1, "container", "domain-result"], [1, "row"], [1, "search-page-header"], [1, "sort"], [1, "form-inline", "pure-form"], ["for", "filter"], ["id", "filter", "matNativeControl", "", "required", "", 1, "form-control", 3, "click"], [3, "value", 4, "ngFor", "ngForOf"], [1, "header"], [1, "filter-summary"], [1, "sidebar"], [1, "spacer"], [1, "accordion", "expanded", "industry"], [1, "toggle"], [1, "body", "expanded"], [1, "pure-form"], ["for", "cat-option", 1, "pure-radio"], ["id", "cat-option", "type", "radio", "value", "all", "name", "optionCat", 3, "checked", "click"], ["for", "cat-option", "class", "pure-radio", 4, "ngFor", "ngForOf"], [1, "slider-filter"], [3, "max", "min", "thumbLabel", "ngModel", "ngModelChange", "change"], [1, "content"], [1, "results"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "cat-option", "type", "radio", "name", "optionCat", 3, "value", "checked", "click"], [1, "col-md-3"], [1, "details-card"], ["mat-card-image", "", "alt", "logo", 1, "domain-image", 3, "src", "click"], [1, "col-sm-7"], [1, "price", "strike-text"], [1, "col-sm-5"], [1, "price"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchTerm", function SearchPageComponent_Template_app_header_searchTerm_1_listener($event) { return ctx.searchDomains($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_Template_select_click_9_listener($event) { return ctx.addFilters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchPageComponent_option_10_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Domain names for sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_Template_input_click_26_listener($event) { return ctx.getDomainDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "All Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SearchPageComponent_label_29_Template, 4, 3, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-slider", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPageComponent_Template_mat_slider_ngModelChange_33_listener($event) { return ctx.lengthFilterValue = $event; })("change", function SearchPageComponent_Template_mat_slider_change_33_listener($event) { return ctx.filterDomainsOnLength($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-slider", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPageComponent_Template_mat_slider_ngModelChange_38_listener($event) { return ctx.amountFilterValue = $event; })("change", function SearchPageComponent_Template_mat_slider_change_38_listener($event) { return ctx.filterDomainsOnPrice($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SearchPageComponent_div_42_Template, 11, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Select Max Length ( ", ctx.minLength, " - ", ctx.maxLength, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxLength)("min", ctx.minLength)("thumbLabel", true)("ngModel", ctx.lengthFilterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Select Max Amt ( ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 17, ctx.minAmount, "USD"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 20, ctx.maxAmount, "USD"), " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxAmount)("min", ctx.minAmount)("thumbLabel", true)("ngModel", ctx.amountFilterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.domains);
    } }, directives: [_home_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  display: block;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n\n.text-strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n  border: 1px solid #E4E4E4;\n  border-radius: 2px;\n  overflow: hidden;\n  text-align: left;\n  position: relative;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  text-align: center;\n}\n\n.details-card[_ngcontent-%COMP%]   .domain-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.details-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n\n.domain-result[_ngcontent-%COMP%] {\n  margin-top: 16vh;\n  line-height: 1.9em;\n  color: #333;\n}\n\n.search-page-header[_ngcontent-%COMP%] {\n  border-left: 1px solid #eee;\n  width: 80%;\n  margin-left: 20%;\n  border-bottom: 1px solid #eee;\n  padding: 14px 1em;\n  height: 64px;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  text-align: right;\n  display: inline;\n  float: right;\n  font-weight: 600;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 20px;\n}\n\n.search-page-header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  font-size: 22px;\n  display: inline-block;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 20%;\n  border-top: 1px solid #eee;\n  font-weight: 600;\n}\n\n.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .slider-filter[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  border-top: 1px solid #eee;\n}\n\n.sidebar[_ngcontent-%COMP%]   .slider-filter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .slider-filter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-top: 32px;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-top: -44vh;\n  border-left: 1px solid #eee;\n  min-height: 400px;\n}\n\n.results[_ngcontent-%COMP%] {\n  margin-top: 0.5vh;\n  padding: 0.5em 0.5em 3em 0.5em;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n  color: #4DB6AC;\n}\n\n@media (min-width: 1440px) {\n  .search-page-header[_ngcontent-%COMP%] {\n    border-left: 1px solid #eee;\n    width: 80%;\n    margin-left: 20%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 20%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .search-page-header[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 20%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 20%;\n  }\n}\n\n@media (min-width: 992px) {\n  .search-page-header[_ngcontent-%COMP%] {\n    border-left: 1px solid #eee;\n    width: 70%;\n    margin-left: 30%;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-left: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wYWdlL0M6XFxVc2Vyc1xcZGV2Z3JcXE9uZURyaXZlXFxEb2N1bWVudHNcXERldndvcmt4bGFic1xcZG9tYWluLXVzZXIvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wYWdlL0M6XFxVc2Vyc1xcZGV2Z3JcXE9uZURyaXZlXFxEb2N1bWVudHNcXERldndvcmt4bGFic1xcZG9tYWluLXVzZXIvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLXBhZ2VcXHNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLGFBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDREY7QUFDRjs7QURLQTtFQUNFLGtCQUFBO0FDSEY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRFFBO0VBQ0UsNkJBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUk7RUFDRSxzQkFBQTtBQ05OOztBRFlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDVko7O0FDNUZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUQrRkY7O0FDM0ZBO0VBRUUsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRDRGRjs7QUMxRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQ0Rko7O0FDMUZJO0VBQ0UsaUJBQUE7QUQ0Rk47O0FDdkZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEeUZKOztBQ3ZGSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHlGTjs7QUNwRkE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRHVGRjs7QUNyRkU7RUFDRSxpQkFBQTtBRHVGSjs7QUNwRkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FEc0ZKOztBQ2xGSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBRG9GTjs7QUNqRkk7RUFDRSxnQkFBQTtBRG1GTjs7QUMzRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBRDhFRjs7QUMzRUE7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FEOEVGOztBQzFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FENkVGOztBQzFFQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUQ2RUY7O0VDMUVBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VENkVGOztFQzFFQTtJQUNFLGFBQUE7RUQ2RUY7QUFDRjs7QUMxRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRDRFRjs7RUN6RUE7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUQ0RUY7QUFDRjs7QUN4RUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VEMEVGOztFQ3ZFQTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFRDBFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1zdHJpa2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTRFNDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRvbWFpbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VhcmNoLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JDQkNCQztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGV4dC1zdHJpa2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbHMtY2FyZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU0RTQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscy1jYXJkIC5kb21haW4taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbHMtY2FyZCAuZG9tYWluLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGV0YWlscy1jYXJkIC5yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLmRvbWFpbi1yZXN1bHQge1xuICBtYXJnaW4tdG9wOiAxNnZoO1xuICBsaW5lLWhlaWdodDogMS45ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uc2VhcmNoLXBhZ2UtaGVhZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMTRweCAxZW07XG4gIGhlaWdodDogNjRweDtcbn1cbi5zZWFyY2gtcGFnZS1oZWFkZXIgLnNvcnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VhcmNoLXBhZ2UtaGVhZGVyIC5zb3J0IGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uc2VhcmNoLXBhZ2UtaGVhZGVyIC5oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNlYXJjaC1wYWdlLWhlYWRlciAuaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMjAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zaWRlYmFyIGlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uc2lkZWJhciAuc2xpZGVyLWZpbHRlciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuLnNpZGViYXIgLnNsaWRlci1maWx0ZXIgaDQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5zaWRlYmFyIC5zbGlkZXItZmlsdGVyIGg0Om50aC1vZi10eXBlKDEpIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNDR2aDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLnJlc3VsdHMge1xuICBtYXJnaW4tdG9wOiAwLjV2aDtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gM2VtIDAuNWVtO1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogIzREQjZBQztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuc2VhcmNoLXBhZ2UtaGVhZGVyIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxNDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlYXJjaC1wYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zZWFyY2gtcGFnZS1oZWFkZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcblxyXG4uZG9tYWluLXJlc3VsdCB7XHJcbiAgbWFyZ2luLXRvcDogMTZ2aDtcclxuICBsaW5lLWhlaWdodDogMS45ZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXBhZ2UtaGVhZGVyIHtcclxuXHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogMTRweCAxZW07XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG5cclxuICAuc29ydCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlci1maWx0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG5cclxuXHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuXHJcbiAgICBoNDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC00NHZoO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDNlbSAwLjVlbTtcclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBjb2xvcjogIzREQjZBQztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gIC5zZWFyY2gtcGFnZS1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuc2VhcmNoLXBhZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNlYXJjaC1wYWdlLWhlYWRlciB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-page',
                templateUrl: './search-page.component.html',
                styleUrls: ['./search-page.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"] }, { type: src_app_common_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class SearchRoutingModule {
}
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search/search-page/search-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");







class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                    _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/login.service */ "./src/app/common/services/login.service.ts");









class AuthGuard {
    constructor(afAuth, router, loginService) {
        this.afAuth = afAuth;
        this.router = router;
        this.loginService = loginService;
    }
    canActivate() {
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_common_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/account.service */ "./src/app/common/services/account.service.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");











class LoginComponent {
    constructor(dialogRef, afAuth, accountService, router) {
        this.dialogRef = dialogRef;
        this.afAuth = afAuth;
        this.accountService = accountService;
        this.router = router;
        this.dialogRef.disableClose = false;
    }
    ngOnInit() {
    }
    successCallback(event) {
        let user = event.authResult.user;
        let account = {
            uid: user.uid ? user.uid : " ",
            displayName: user.displayName ? user.displayName : " ",
            email: user.email ? user.email : " ",
            phoneNumber: user.phoneNumber ? user.phoneNumber : " ",
        };
        this.accountService.setAccount(account).then(() => {
            this.dialogRef.close(null);
            window.location.reload();
        });
    }
    onNoClick() {
        this.dialogRef.close(null);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 0, consts: [["mat-dialog-content", ""], ["mat-dialog-title", ""], [3, "signInSuccessWithAuthResult"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login/SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "firebase-ui", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("signInSuccessWithAuthResult", function LoginComponent_Template_firebase_ui_signInSuccessWithAuthResult_3_listener($event) { return ctx.successCallback($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_5__["FirebaseuiAngularLibraryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: src_app_common_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/__ivy_ngcc__/fesm2015/firebaseui-angular.js");


































const firebaseUiAuthConfig = {
    signInOptions: [
        firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["firebase"].auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["firebase"].auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["firebase"].auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
            requireDisplayName: true
        },
        firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["firebase"].auth.PhoneAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["firebaseui"].auth.CredentialHelper.NONE,
    signInFlow: 'popup'
};
const MaterialComponents = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"]
];
const DependencyModules = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"]
];
const SharedComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
            MaterialComponents,
            DependencyModules,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"],
            firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig)
        ],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["FirebaseUIModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]],
                declarations: [SharedComponents],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
                    MaterialComponents,
                    DependencyModules,
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"],
                    firebaseui_angular__WEBPACK_IMPORTED_MODULE_31__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig)
                ],
                exports: [
                    MaterialComponents, DependencyModules, SharedComponents, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"]
                ]
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDuYlZNy7FCT6BNt6dErGWMvh3KUf2RCe4",
        authDomain: "domain-project-51bd1.firebaseapp.com",
        databaseURL: "https://domain-project-51bd1.firebaseio.com",
        projectId: "domain-project-51bd1",
        storageBucket: "domain-project-51bd1.appspot.com",
        messagingSenderId: "853755565473",
        appId: "1:853755565473:web:3acec26fbd32605ca1a7e0",
        measurementId: "G-M9KHYYHTYH"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\devgr\OneDrive\Documents\Devworkxlabs\domain-user\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);