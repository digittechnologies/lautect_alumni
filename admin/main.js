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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/pages/members/members.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/verification/verification.component */ "./src/app/pages/verification/verification.component.ts");
/* harmony import */ var _pages_association_association_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/association/association.component */ "./src/app/pages/association/association.component.ts");
/* harmony import */ var _pages_member_cat_member_cat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/member-cat/member-cat.component */ "./src/app/pages/member-cat/member-cat.component.ts");
/* harmony import */ var _pages_user_cat_user_cat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user-cat/user-cat.component */ "./src/app/pages/user-cat/user-cat.component.ts");
/* harmony import */ var _pages_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin-list/admin-list.component */ "./src/app/pages/admin-list/admin-list.component.ts");
/* harmony import */ var _system_setting_system_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./system-setting/system-setting.component */ "./src/app/system-setting/system-setting.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/opportunities/opportunities.component */ "./src/app/pages/opportunities/opportunities.component.ts");
/* harmony import */ var _pages_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/home-header/home-header.component */ "./src/app/pages/home-header/home-header.component.ts");
/* harmony import */ var _pages_event_programs_event_programs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/event-programs/event-programs.component */ "./src/app/pages/event-programs/event-programs.component.ts");























var appRoutes = [
    {
        path: 'event_programs',
        component: _pages_event_programs_event_programs_component__WEBPACK_IMPORTED_MODULE_22__["EventProgramsComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'home_header',
        component: _pages_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_21__["HomeHeaderComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'aboutus',
        component: _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'opportunities',
        component: _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_20__["OpportunitiesComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_9__["BeforeLoginService"]]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'nav',
        component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'members',
        component: _pages_members_members_component__WEBPACK_IMPORTED_MODULE_11__["MembersComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'request-password-reset',
        component: _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_7__["RequestResetComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_9__["BeforeLoginService"]]
    },
    {
        path: 'response-password-reset',
        component: _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResponseResetComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_9__["BeforeLoginService"]]
    },
    {
        path: 'verification',
        component: _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_13__["VerificationComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'association',
        component: _pages_association_association_component__WEBPACK_IMPORTED_MODULE_14__["AssociationComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'm_cat',
        component: _pages_member_cat_member_cat_component__WEBPACK_IMPORTED_MODULE_15__["MemberCatComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'user_cat',
        component: _pages_user_cat_user_cat_component__WEBPACK_IMPORTED_MODULE_16__["UserCatComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'admin_list',
        component: _pages_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_17__["AdminListComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
    {
        path: 'system_setting',
        component: _system_setting_system_setting_component__WEBPACK_IMPORTED_MODULE_18__["SystemSettingComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_10__["AfterLoginService"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loggedIn\">\r\n  <app-login></app-login>\r\n</div>\r\n<ng-snotify></ng-snotify> \r\n<div *ngIf=\"loggedIn\">  \r\n  <div class=\"wrapper\"> \r\n      <app-navbar></app-navbar><br>\r\n      <br>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <!-- START Notification Sidebar-->\r\n  <aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\"><a class=\"notification-sidebar-close\"><i class=\"ft-x font-medium-3\"></i></a>\r\n      <div class=\"side-nav notification-sidebar-content\">\r\n      <div class=\"row\">\r\n          <div class=\"col-12 mt-1\">\r\n          <ul class=\"nav nav-tabs\">\r\n              <li class=\"nav-item\"><a id=\"base-tab1\" data-toggle=\"tab\" aria-controls=\"tab1\" href=\"#activity-tab\" aria-expanded=\"true\" class=\"nav-link active\">Activity</a></li>\r\n              <li class=\"nav-item\"><a id=\"base-tab2\" data-toggle=\"tab\" aria-controls=\"tab2\" href=\"#chat-tab\" aria-expanded=\"false\" class=\"nav-link\">Chat</a></li>\r\n              <li class=\"nav-item\"><a id=\"base-tab3\" data-toggle=\"tab\" aria-controls=\"tab3\" href=\"#settings-tab\" aria-expanded=\"false\" class=\"nav-link\">Settings</a></li>\r\n          </ul>\r\n          <div class=\"tab-content px-1 pt-1\">\r\n              <div id=\"activity-tab\" role=\"tabpanel\" aria-expanded=\"true\" aria-labelledby=\"base-tab1\" class=\"tab-pane active\">\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                  <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT ACTIVITY</h6>\r\n                  <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                      <li class=\"timeline-line\"></li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-purple bg-lighten-1\"><i class=\"ft-shopping-cart\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new equipments for zonal office.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-info bg-lighten-1\"><i class=\"fa fa-plane\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA will be on 15th August 2015.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-success bg-lighten-1\"><i class=\"ft-mic\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-warning bg-lighten-1\"><i class=\"ft-map-pin\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-red bg-lighten-1\"><i class=\"ft-inbox\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-cyan bg-lighten-1\"><i class=\"ft-mic\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-amber bg-lighten-1\"><i class=\"ft-map-pin\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                      </li>\r\n                      <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\"><span data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\" class=\"bg-grey bg-lighten-1\"><i class=\"ft-inbox\"></i></span></div>\r\n                      <div class=\"col s9 recent-activity-list-text\"><a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                          <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                      </li>\r\n                  </ul>\r\n                  </div>\r\n              </div>\r\n              </div>\r\n              <div id=\"chat-tab\" aria-labelledby=\"base-tab2\" class=\"tab-pane\">\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                  <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT CHAT</h6>\r\n                  <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-12.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-6.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-11.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny !</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-18.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-2.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-3.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great!</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-15.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-19.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-14.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-13.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-22.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-9.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do</p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\"><a><img alt=\"96x96\" src=\"assets/img/portrait/small/avatar-s-20.png\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"></a>\r\n                      <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch</h4><span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it</p>\r\n                      </div>\r\n                  </div>\r\n                  </div>\r\n              </div>\r\n              </div>\r\n              <div id=\"settings-tab\" aria-labelledby=\"base-tab3\" class=\"tab-pane\">\r\n              <div id=\"settings\" class=\"col-12\">\r\n                  <h6 class=\"mt-1 mb-3 text-bold-400\">GENERAL SETTINGS</h6>\r\n                  <ul class=\"list-unstyled\">\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Notifications</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"notifications1\" checked=\"checked\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"notifications1\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Show recent activity</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"recent-activity1\" checked=\"checked\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"recent-activity1\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Notifications</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"notifications2\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"notifications2\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Show recent activity</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"recent-activity2\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"recent-activity2\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Show your emails</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"show-emails\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"show-emails\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                      <div class=\"togglebutton\">\r\n                      <div class=\"switch\"><span class=\"text-bold-500\">Show Task statistics</span>\r\n                          <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                              <input id=\"show-stats\" type=\"checkbox\" class=\"custom-control-input\">\r\n                              <label for=\"show-stats\" class=\"custom-control-label\"></label>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                      </div>\r\n                      <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  </ul>\r\n              </div>\r\n              </div>\r\n          </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n  </aside>\r\n  <!-- END Notification Sidebar--> \r\n\r\n  <!-- Theme customizer Starts-->\r\n  <div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\"><a class=\"customizer-close\"><i class=\"ft-x font-medium-3\"></i></a><a id=\"rtl-icon\" href=\"https://pixinvent.com/apex-angular-4-bootstrap-admin-template/html-demo-6/\" target=\"_blank\" class=\"bg-dark customizer-toggle\"><span class=\"font-medium-1 white align-middle\">RTL</span></a><a id=\"customizer-toggle-icon\" class=\"customizer-toggle bg-danger\"><i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i></a>\r\n      <div data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\" class=\"customizer-content p-3 ps-container ps-theme-dark\">\r\n      <h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\r\n      <p>Customize & Preview in Real Time</p>\r\n      <hr>\r\n      <!-- Layout Options-->\r\n      <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Layout Options</h6>\r\n      <div class=\"layout-switch ml-4\">\r\n          <div class=\"custom-control custom-radio d-inline-block custom-control-inline light-layout\">\r\n          <input id=\"ll-switch\" type=\"radio\" name=\"layout-switch\" checked class=\"custom-control-input\">\r\n          <label for=\"ll-switch\" class=\"custom-control-label\">Light</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio d-inline-block custom-control-inline dark-layout\">\r\n          <input id=\"dl-switch\" type=\"radio\" name=\"layout-switch\" class=\"custom-control-input\">\r\n          <label for=\"dl-switch\" class=\"custom-control-label\">Dark</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio d-inline-block custom-control-inline transparent-layout\">\r\n          <input id=\"tl-switch\" type=\"radio\" name=\"layout-switch\" class=\"custom-control-input\">\r\n          <label for=\"tl-switch\" class=\"custom-control-label\">Transparent</label>\r\n          </div>\r\n      </div>\r\n      <hr>\r\n      <!-- Sidebar Options Starts-->\r\n      <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-options\">Sidebar Color Options</h6>\r\n      <div class=\"cz-bg-color sb-color-options\">\r\n          <div class=\"row p-1\">\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"pomegranate\" class=\"gradient-pomegranate d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"king-yna\" class=\"gradient-king-yna d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"ibiza-sunset\" class=\"gradient-ibiza-sunset d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"flickr\" class=\"gradient-flickr d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"purple-bliss\" class=\"gradient-purple-bliss d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"man-of-steel\" class=\"gradient-man-of-steel d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"purple-love\" class=\"gradient-purple-love d-block rounded-circle\"></span></div>\r\n          </div>\r\n          <div class=\"row p-1\">\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"black\" class=\"bg-black d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"white\" class=\"bg-grey d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"primary\" class=\"bg-primary d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"success\" class=\"bg-success d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"warning\" class=\"bg-warning d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"info\" class=\"bg-info d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"danger\" class=\"bg-danger d-block rounded-circle\"></span></div>\r\n          </div>\r\n      </div>\r\n      <!-- Sidebar Options Ends-->\r\n      <!-- Transparent Layout Bg color Options-->\r\n      <h6 class=\"text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none\">Background Colors</h6>\r\n      <div class=\"cz-tl-bg-color d-none\">\r\n          <div class=\"row p-1\">\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"hibiscus\" class=\"bg-hibiscus d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"bg-purple-pizzazz\" class=\"bg-purple-pizzazz d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"bg-blue-lagoon\" class=\"bg-blue-lagoon d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"bg-electric-viloet\" class=\"bg-electric-violet d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"bg-protage\" class=\"bg-portage d-block rounded-circle\"></span></div>\r\n          <div class=\"col\"><span style=\"width:20px; height:20px;\" data-bg-color=\"bg-tundora\" class=\"bg-tundora d-block rounded-circle\"></span></div>\r\n          </div>\r\n      </div>\r\n      <!-- Transparent Layout Bg color Ends-->\r\n      <hr>\r\n      <!-- Sidebar BG Image Starts-->\r\n      <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-bg-img\">Sidebar Bg Image</h6>\r\n      <div class=\"cz-bg-image row sb-bg-img\">\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/01.jpg\" width=\"90\" class=\"rounded sb-bg-01\"></div>\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/02.jpg\" width=\"90\" class=\"rounded sb-bg-02\"></div>\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/03.jpg\" width=\"90\" class=\"rounded sb-bg-03\"></div>\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/04.jpg\" width=\"90\" class=\"rounded sb-bg-04\"></div>\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/05.jpg\" width=\"90\" class=\"rounded sb-bg-05\"></div>\r\n          <div class=\"col-sm-2 mb-3\"><img src=\"assets/img/sidebar-bg/06.jpg\" width=\"90\" class=\"rounded sb-bg-06\"></div>\r\n      </div>\r\n      <!-- Transparent BG Image Ends-->\r\n      <div class=\"tl-bg-img d-none\">\r\n          <h6 class=\"text-center text-bold-500 text-uppercase\">Background Images</h6>\r\n          <div class=\"cz-tl-bg-image row\">\r\n          <div class=\"col-sm-3\"><img src=\"assets/img/gallery/bg-glass-1.jpg\" width=\"90\" class=\"rounded bg-glass-1 selected\"></div>\r\n          <div class=\"col-sm-3\"><img src=\"assets/img/gallery/bg-glass-2.jpg\" width=\"90\" class=\"rounded bg-glass-2\"></div>\r\n          <div class=\"col-sm-3\"><img src=\"assets/img/gallery/bg-glass-3.jpg\" width=\"90\" class=\"rounded bg-glass-3\"></div>\r\n          <div class=\"col-sm-3\"><img src=\"assets/img/gallery/bg-glass-4.jpg\" width=\"90\" class=\"rounded bg-glass-4\"></div>\r\n          </div>\r\n      </div>\r\n      <!-- Transparent BG Image Ends    -->\r\n      <hr>\r\n      <!-- Sidebar BG Image Toggle Starts-->\r\n      <div class=\"togglebutton toggle-sb-bg-img\">\r\n          <div class=\"switch\"><span>Sidebar Bg Image</span>\r\n          <div class=\"float-right\">\r\n              <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n              <input id=\"sidebar-bg-img\" type=\"checkbox\" checked class=\"custom-control-input cz-bg-image-display\">\r\n              <label for=\"sidebar-bg-img\" class=\"custom-control-label\"></label>\r\n              </div>\r\n          </div>\r\n          </div>\r\n          <hr>\r\n      </div>\r\n      <!-- Sidebar BG Image Toggle Ends-->\r\n      <!-- Compact Menu Starts-->\r\n      <div class=\"togglebutton\">\r\n          <div class=\"switch\"><span>Compact Menu</span>\r\n          <div class=\"float-right\">\r\n              <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n              <input id=\"cz-compact-menu\" type=\"checkbox\" class=\"custom-control-input cz-compact-menu\">\r\n              <label for=\"cz-compact-menu\" class=\"custom-control-label\"></label>\r\n              </div>\r\n          </div>\r\n          </div>\r\n      </div>\r\n      <!-- Compact Menu Ends-->\r\n      <hr>\r\n      <!-- Sidebar Width Starts-->\r\n      <div>\r\n          <label for=\"cz-sidebar-width\">Sidebar Width</label>\r\n          <select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\r\n          <option value=\"small\">Small</option>\r\n          <option value=\"medium\" selected=\"\">Medium</option>\r\n          <option value=\"large\">Large</option>\r\n          </select>\r\n      </div>\r\n      <!-- Sidebar Width Ends-->\r\n      </div>\r\n  </div>\r\n  <!-- Theme customizer Ends-->\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(Auth, router, Token) {
        this.Auth = Auth;
        this.router = router;
        this.Token = Token;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/fesm5/ng-snotify.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/pages/members/members.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/verification/verification.component */ "./src/app/pages/verification/verification.component.ts");
/* harmony import */ var _pages_association_association_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/association/association.component */ "./src/app/pages/association/association.component.ts");
/* harmony import */ var _pages_member_cat_member_cat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/member-cat/member-cat.component */ "./src/app/pages/member-cat/member-cat.component.ts");
/* harmony import */ var _pages_user_cat_user_cat_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/user-cat/user-cat.component */ "./src/app/pages/user-cat/user-cat.component.ts");
/* harmony import */ var _pages_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/admin-list/admin-list.component */ "./src/app/pages/admin-list/admin-list.component.ts");
/* harmony import */ var _system_setting_system_setting_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./system-setting/system-setting.component */ "./src/app/system-setting/system-setting.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/opportunities/opportunities.component */ "./src/app/pages/opportunities/opportunities.component.ts");
/* harmony import */ var _pages_event_programs_event_programs_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/event-programs/event-programs.component */ "./src/app/pages/event-programs/event-programs.component.ts");
/* harmony import */ var _pages_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/home-header/home-header.component */ "./src/app/pages/home-header/home-header.component.ts");



















// import { OwlModule } from 'ngx-owl-carousel';
// import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignupComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"],
                _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_24__["RequestResetComponent"],
                _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_25__["ResponseResetComponent"],
                _pages_members_members_component__WEBPACK_IMPORTED_MODULE_26__["MembersComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_28__["VerificationComponent"],
                _pages_association_association_component__WEBPACK_IMPORTED_MODULE_29__["AssociationComponent"],
                _pages_member_cat_member_cat_component__WEBPACK_IMPORTED_MODULE_30__["MemberCatComponent"],
                _pages_user_cat_user_cat_component__WEBPACK_IMPORTED_MODULE_31__["UserCatComponent"],
                _pages_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_32__["AdminListComponent"],
                _system_setting_system_setting_component__WEBPACK_IMPORTED_MODULE_33__["SystemSettingComponent"],
                _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_34__["AboutusComponent"],
                _pages_opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_35__["OpportunitiesComponent"],
                _pages_event_programs_event_programs_component__WEBPACK_IMPORTED_MODULE_36__["EventProgramsComponent"],
                _pages_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_37__["HomeHeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_18__["SnotifyModule"],
                // LazyLoadImageModule.forRoot({
                //   preset: scrollPreset 
                // }),
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            ],
            providers: [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_6__["JarwisService"], _services_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"], _services_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_18__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_18__["SnotifyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Login Here</div>\r\n    <div class=\"card-body\">\r\n      <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n          {{error}}\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"form.password\"\r\n              required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Sign in</button>\r\n\r\n            <a routerLink=\"/signup\" class=\"btn btn-info float-right\">Sign Up</a>\r\n\r\n          </div>\r\n        </div>\r\n        <small class=float-right>\r\n          <a routerLink=\"/request-password-reset\">Reset Password</a>\r\n        </small>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- ////////////////////////////////////////////////////////////////////////////-->\r\n<div>\r\n  <div class=\"main-panel\">\r\n    <!-- BEGIN : Main Content-->\r\n    <div class=\"main-content\">\r\n      <div class=\"content-wrapper\"><!--Login Page Starts-->\r\n<section id=\"login\">\r\n<div class=\"container-fluid\">\r\n<div class=\"row full-height-vh m-0\">\r\n  <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body login-img\">\r\n          <div class=\"row m-0\">\r\n            <div class=\"col-lg-6 d-lg-block d-none py-2 text-center align-middle\">\r\n              <img src=\"assets/img/gallery/login.png\" alt=\"\" class=\"img-fluid mt-5\" width=\"400\" height=\"230\">\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n              <h4 class=\"mb-2 card-title\">Login</h4>\r\n              <p class=\"card-text mb-3\">\r\n                Welcome back, please login to your account.\r\n              </p>\r\n              <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n                  {{error}}\r\n                </div>\r\n              <!-- <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Username\" />\r\n              <input type=\"password\" class=\"form-control mb-1\" placeholder=\"Password\" /> -->\r\n              <input type=\"email\" name=\"email\" class=\"form-control mb-3\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n              <input type=\"password\" name=\"password\" class=\"form-control mb-1\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"form.password\"\r\n              required>\r\n              <div class=\"d-flex justify-content-between mt-2\">\r\n                <div class=\"remember-me\">\r\n                  <div class=\"custom-control custom-checkbox custom-control-inline mb-3\">\r\n                    <input type=\"checkbox\" id=\"customCheckboxInline1\" name=\"customCheckboxInline1\" class=\"custom-control-input\" />\r\n                    <label class=\"custom-control-label\" for=\"customCheckboxInline1\">\r\n                      Remember Me\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"forgot-password-option\">\r\n                  <a href=\"forgot-password-page.html\" class=\"text-decoration-none text-primary\">Forgot Password\r\n                    ?</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"fg-actions d-flex justify-content-between\">\r\n                <div class=\"login-btn\">\r\n                  <button type=\"submit\" class=\"btn btn-outline-primary\">\r\n                    <a routerLink=\"/signup\" >Sign In</a>  \r\n                  </button>             \r\n                </div>\r\n                <div class=\"recover-pass\">\r\n                  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n                </div>\r\n              </div>\r\n              </form>\r\n              <hr class=\"m-0\">\r\n              <div class=\"d-flex justify-content-between mt-3\">\r\n                <div class=\"option-login\">\r\n                  <h6 class=\"text-decoration-none text-primary\">Or Login With</h6>\r\n                </div>\r\n                <div class=\"social-login-options\">\r\n                  <a class=\"btn btn-social-icon mr-2 btn-facebook\">\r\n                    <span class=\"fa fa-facebook\"></span>\r\n                  </a>\r\n                  <a class=\"btn btn-social-icon mr-2 btn-twitter\">\r\n                    <span class=\"fa fa-twitter\"></span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--Login Page Ends-->\r\n\r\n      </div>\r\n    </div>\r\n    <!-- END : End Main Content-->\r\n  </div>\r\n\r\n</div>\r\n<!-- ////////////////////////////////////////////////////////////////////////////-->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(Jarwis, Token, router, Auth) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.Auth = Auth;
        this.form = {
            email: null,
            password: null
        };
        this.error = null;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.handleError = function (error) {
        this.error = error.error.error;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-light bg-light justify-content-between\">\r\n  <a class=\"navbar-brand\">Navbar</a>\r\n  <div>\r\n    <a class=\"navbar-brand\" routerLink=\"login\" *ngIf=\"!loggedIn\">Login</a>\r\n    <a class=\"navbar-brand\" routerLink=\"#\" (click)=\"logout($event)\" *ngIf=\"loggedIn\">Logout</a>\r\n    <a class=\"navbar-brand\" routerLink=\"profile\" *ngIf=\"loggedIn\">Profile</a>\r\n  </div>\r\n\r\n</nav> -->\r\n\r\n <!-- main menu-->\r\n      <!--.main-menu(class=\"#{menuColor} #{menuOpenType}\", class=(menuShadow == true ? 'menu-shadow' : ''))-->\r\n      <div data-active-color=\"black\" data-background-color=\"white\" data-image=\"\" class=\"app-sidebar\">\r\n        <!-- main menu header-->\r\n        <!-- Sidebar Header starts-->\r\n        <div class=\"sidebar-header\">\r\n          <div class=\"logo clearfix\"><a routerLink=\"index.html\" class=\"logo-text float-left\">\r\n              <div class=\"logo-img\"><img style=\"width: 180px;\" src=\"assets/img/logo-dark.png\"/></div><span class=\"text align-middle\"></span></a><a id=\"sidebarToggle\" routerLink=\"javascript:;\" class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\"><i data-toggle=\"expanded\" class=\"toggle-icon ft-toggle-left\"></i></a><a id=\"sidebarClose\" routerLink=\"javascript:;\" class=\"nav-close d-block d-md-block d-lg-none d-xl-none\"><i class=\"ft-x\"></i></a></div>\r\n        </div>\r\n        <!-- Sidebar Header Ends-->\r\n        <!-- / main menu header-->\r\n        <!-- main menu content-->\r\n        <div class=\"sidebar-content\">\r\n          <div class=\"nav-container\">\r\n            <ul id=\"main-menu-navigation\" data-menu=\"menu-navigation\" data-scroll-to-active=\"true\" class=\"navigation navigation-main\">\r\n              <li class=\" nav-item\"><a routerLink=\"/home\"><i class=\"ft-home\"></i><span data-i18n=\"\" class=\"menu-title\">Dashboard</span></a>\r\n                \r\n              </li>\r\n              <li class=\"has-sub nav-item\"><a><i class=\"ft-droplet\"></i><span data-i18n=\"\" class=\"menu-title\">Members</span></a>\r\n                <ul class=\"menu-content\">\r\n                  <li class=\"active\"><a routerLink=\"/members\" class=\"menu-item\">Members List <span class=\"tag badge badge-pill badge-danger float-right mr-1 mt-1\">2</span></a>\r\n                  </li>\r\n                  <li><a routerLink=\"verification\" class=\"menu-item\">Verifications</a>\r\n                  </li>\r\n                  <li><a routerLink=\"m_cat\" class=\"menu-item\">Members Categories</a>\r\n                  </li>\r\n                  <li><a routerLink=\"association\" class=\"menu-item\">Association</a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"has-sub nav-item\"><a><i class=\"ft-droplet\"></i><span data-i18n=\"\" class=\"menu-title\">Admin</span></a>\r\n                <ul class=\"menu-content\">\r\n                  <li><a routerLink=\"signup\" class=\"menu-item\">Add Admin</a>\r\n                  </li>\r\n                  <li class=\"active\"><a routerLink=\"/admin_list\" class=\"menu-item\">Admin List<span class=\"tag badge badge-pill badge-danger float-right mr-1 mt-1\">2</span></a>\r\n                  </li>               \r\n                  <li><a routerLink=\"user_cat\" class=\"menu-item\">User Categories</a>\r\n                  </li>\r\n                </ul>\r\n              </li>            \r\n              <li class=\"has-sub nav-item\"><a ><i class=\"ft-aperture\"></i><span data-i18n=\"\" class=\"menu-title\">Components</span></a>\r\n                <ul class=\"menu-content\">\r\n                  <li><a routerLink=\"opportunities\" class=\"menu-item\">Opportunities</a>\r\n                  </li>\r\n                  <li><a routerLink=\"event_programs\" class=\"menu-item\">Event and Programs</a>\r\n                  </li>\r\n                  <li><a routerLink=\"news\" class=\"menu-item\">News</a>\r\n                  </li>\r\n                  <li><a routerLink=\"gallery\" class=\"menu-item\">Gallery</a>\r\n                  </li>           \r\n                </ul>\r\n              </li>\r\n             \r\n              <li class=\"has-sub nav-item\"><a ><i class=\"ft-edit\"></i><span data-i18n=\"\" class=\"menu-title\">Frontend</span></a>\r\n     \r\n                <ul class=\"menu-content\">\r\n                  <li><a routerLink=\"home_header\" class=\"menu-item\">Home Header</a>\r\n                  </li>\r\n                  <li><a routerLink=\"aboutservice\" class=\"menu-item\">Home Service</a>\r\n                  </li>\r\n                  <li><a routerLink=\"aboutus\" class=\"menu-item\">About Us</a>\r\n                  </li>\r\n                  <li><a routerLink=\"interview\" class=\"menu-item\">Interview</a>\r\n                  </li>\r\n                  <li><a routerLink=\"people_commitee\" class=\"menu-item\">People and Commitee</a>\r\n                  </li>\r\n                  <li><a routerLink=\"faq\" class=\"menu-item\">FAQ</a>\r\n                  </li>\r\n                  <li><a routerLink=\"legal\" class=\"menu-item\">Legal Page</a>\r\n                  </li>               \r\n                </ul>\r\n                  \r\n              </li>\r\n              <li class=\"has-sub nav-item\"><a ><i class=\"ft-grid\"></i><span data-i18n=\"\" class=\"menu-title\">Settings</span></a>\r\n                <ul class=\"menu-content\">\r\n                  <li><a routerLink=\"system_setting\" class=\"menu-item\">System Settings</a>\r\n                  </li>\r\n                  <li><a routerLink=\"system_cat\" class=\"menu-item\">System Category</a>\r\n                  </li>\r\n                  <li><a routerLink=\"email_sms\" class=\"menu-item\">Email & SMS</a>\r\n                  </li>               \r\n                </ul>\r\n              </li>  \r\n              <li class=\" nav-item\"><a routerLink=\"https://pixinvent.ticksy.com/\"><i class=\"ft-life-buoy\"></i><span data-i18n=\"\" class=\"menu-title\">Support</span></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- main menu content-->\r\n        <div class=\"sidebar-background\"></div>\r\n        <!-- main menu footer-->\r\n        <!-- include includes/menu-footer-->\r\n        <!-- main menu footer-->\r\n      </div>\r\n\r\n  <!-- Navbar (Header) Starts-->\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-faded header-navbar\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" data-toggle=\"collapse\" class=\"navbar-toggle d-lg-none float-left\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><span class=\"d-lg-none navbar-right navbar-collapse-toggle\"><a aria-controls=\"navbarSupportedContent\" routerLink=\"javascript:;\" class=\"open-navbar-container black\"><i class=\"ft-more-vertical\"></i></a></span>\r\n        <form role=\"search\" class=\"navbar-form navbar-right mt-1\">\r\n          <div class=\"position-relative has-icon-right\">\r\n            <input type=\"text\" placeholder=\"Search\" class=\"form-control round\"/>\r\n            <div class=\"form-control-position\"><i class=\"ft-search\"></i></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"navbar-container\">\r\n        <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item mr-2 d-none d-lg-block\"><a id=\"navbar-fullscreen\" routerLink=\"javascript:;\" class=\"nav-link apptogglefullscreen\"><i class=\"ft-maximize font-medium-3 blue-grey darken-4\"></i>\r\n                <p class=\"d-none\">fullscreen</p></a></li>\r\n            <li class=\"dropdown nav-item\"><a id=\"dropdownBasic3\" routerLink=\"#\" data-toggle=\"dropdown\" class=\"nav-link position-relative dropdown-toggle\"><i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i><span class=\"selected-language d-none\"></span></a>\r\n              <div class=\"dropdown-menu dropdown-menu-right text-left\"><a routerLink=\"javascript:;\" class=\"dropdown-item py-1\"><img src=\"assets/img/flags/us.png\" class=\"langimg\"/><span> English</span></a><a routerLink=\"javascript:;\" class=\"dropdown-item py-1\"><img src=\"assets/img/flags/es.png\" class=\"langimg\"/><span> Spanish</span></a><a routerLink=\"javascript:;\" class=\"dropdown-item py-1\"><img src=\"assets/img/flags/br.png\" class=\"langimg\"/><span> Portuguese</span></a><a routerLink=\"javascript:;\" class=\"dropdown-item\"><img src=\"assets/img/flags/de.png\" class=\"langimg\"/><span> French</span></a></div>\r\n            </li>\r\n            <li class=\"dropdown nav-item\"><a id=\"dropdownBasic2\" routerLink=\"#\" data-toggle=\"dropdown\" class=\"nav-link position-relative dropdown-toggle\"><i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i><span class=\"notification badge badge-pill badge-danger\">4</span>\r\n                <p class=\"d-none\">Notifications</p></a>\r\n              <div class=\"notification-dropdown dropdown-menu dropdown-menu-right\">\r\n                <div class=\"noti-list\"><a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\"><i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i><span class=\"noti-wrapper\"><span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span><span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span></span></a><a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\"><i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i><span class=\"noti-wrapper\"><span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span><span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span></span></a><a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\"><i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i><span class=\"noti-wrapper\"><span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span><span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span></span></a><a class=\"dropdown-item noti-container py-3\"><i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i><span class=\"noti-wrapper\"><span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span><span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span></span></a></div><a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\r\n              </div>\r\n            </li>\r\n            <li class=\"dropdown nav-item\"><a id=\"dropdownBasic3\" routerLink=\"#\" data-toggle=\"dropdown\" class=\"nav-link position-relative dropdown-toggle\"><i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                <p class=\"d-none\">User Settings</p></a>\r\n              <div ngbdropdownmenu=\"\" aria-labelledby=\"dropdownBasic3\" class=\"dropdown-menu text-left dropdown-menu-right\">\r\n                <a routerLink=\"../../../html/html/ltr/chat.html\" class=\"dropdown-item py-1\"><i class=\"ft-message-square mr-2\"></i><span>Chat</span></a>\r\n                <a routerLink=\"/profile\" class=\"dropdown-item py-1\"><i class=\"ft-edit mr-2\"></i><span>Edit Profile</span></a>\r\n                <a routerLink=\"../../../html/html/ltr/inbox.html\" class=\"dropdown-item py-1\"><i class=\"ft-mail mr-2\"></i><span>My Inbox</span></a>\r\n                <div class=\"dropdown-divider\"></div><a routerLink=\"#\" (click)=\"logout($event)\" *ngIf=\"loggedIn\" class=\"dropdown-item\"><i class=\"ft-power mr-2\"></i><span>Logout</span></a>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item d-none d-lg-block\"><a routerLink=\"javascript:;\" class=\"nav-link position-relative notification-sidebar-toggle\"><i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                <p class=\"d-none\">Notifications Sidebar</p></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar (Header) Ends-->\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(Auth, router, Token) {
        this.Auth = Auth;
        this.router = router;
        this.Token = Token;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    NavbarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVxdWVzdC1yZXNldC9yZXF1ZXN0LXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Send Email for Reset password</div>\r\n    <div class=\"card-body\">\r\n      <form #RequestResetForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!RequestResetForm.valid\">Send Password Reset Email</button>\r\n\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/fesm5/ng-snotify.js");




var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent(Jarvis, notify, Notfiy) {
        this.Jarvis = Jarvis;
        this.notify = notify;
        this.Notfiy = Notfiy;
        this.form = {
            email: null
        };
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Notfiy.info('Wait...', { timeout: 5000 });
        this.Jarvis.sendPasswordResetLink(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.notify.error(error.error.error); });
    };
    RequestResetComponent.prototype.handleResponse = function (res) {
        this.Notfiy.success(res.data, { timeout: 0 });
        this.form.email = null;
    };
    RequestResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/components/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/components/password/request-reset/request-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVzcG9uc2UtcmVzZXQvcmVzcG9uc2UtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Reset Password</div>\r\n    <div class=\"card-body\">\r\n      <form #ResetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n            <span class=\"text-danger\" [hidden]=\"!error.email\">{{error.email}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"form.password\"\r\n              required>\r\n              <span class=\"text-danger\" [hidden]=\"!error.password\">{{error.password}}</span>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword4\" class=\"col-sm-2 col-form-label\">Confirm Password</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" name=\"password_confirmation\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Confirm Password\" [(ngModel)]=\"form.password_confirmation\"\r\n              required>\r\n              <span class=\"text-danger\" [hidden]=\"!error.password_confirmation\">{{error.password_confirmation}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!ResetPasswordForm.valid\">Change Password</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/fesm5/ng-snotify.js");





var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent(route, Jarwis, router, Notify) {
        var _this = this;
        this.route = route;
        this.Jarwis = Jarwis;
        this.router = router;
        this.Notify = Notify;
        this.error = [];
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            resetToken: null
        };
        route.queryParams.subscribe(function (params) {
            _this.form.resetToken = params['token'];
        });
    }
    ResponseResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.changePassword(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    ResponseResetComponent.prototype.handleResponse = function (data) {
        var _this = this;
        var _router = this.router;
        this.Notify.confirm('Done!, Now login with new Password', {
            buttons: [
                { text: 'Okay',
                    action: function (toster) {
                        _router.navigateByUrl('/login'),
                            _this.Notify.remove(toster.id);
                    }
                },
            ]
        });
    };
    ResponseResetComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    ResponseResetComponent.prototype.ngOnInit = function () {
    };
    ResponseResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/components/password/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/components/password/response-reset/response-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_jarwis_service__WEBPACK_IMPORTED_MODULE_3__["JarwisService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--User Profile Starts-->\r\n<!--Basic User Details Starts-->\r\n<section id=\"user-profile\">\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"card profile-with-cover\">\r\n  <div class=\"card-img-top img-fluid bg-cover height-300\" style=\"background: url('assets/img/photos/14.jpg') 50%;\"></div>\r\n  <div class=\"media profil-cover-details row\">\r\n    <div class=\"col-5\">\r\n      <div class=\"align-self-start halfway-fab pl-3 pt-2\">\r\n        <div class=\"text-left\">\r\n          <h3 class=\"card-title white\">Jose Diaz</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <div class=\"align-self-center halfway-fab text-center\">\r\n        <a class=\"profile-image\">\r\n          <img src=\"assets/img/portrait/avatars/avatar-08.png\" class=\"rounded-circle img-border gradient-summer width-100\"\r\n            alt=\"Card image\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-5\">\r\n    </div>\r\n    <div class=\"profile-cover-buttons\">\r\n      <div class=\"media-body halfway-fab align-self-end\">\r\n        <div class=\"text-right d-none d-sm-none d-md-none d-lg-block\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i> Follow</button>\r\n          <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i> Message</button>\r\n        </div>\r\n        <div class=\"text-right d-block d-sm-block d-md-block d-lg-none\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"profile-section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-5 \">\r\n        <ul class=\"profile-menu no-list-style\">\r\n          <li>\r\n            <a href=\"#about\" class=\"primary font-medium-2 font-weight-600\">About</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#user\" class=\"primary font-medium-2 font-weight-600\">Timeline</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 text-center\">\r\n        <span class=\"font-medium-2 text-uppercase\">Jose Diaz</span>\r\n        <p class=\"grey font-small-2\">Ninja Developer</p>\r\n      </div>\r\n      <div class=\"col-lg-5 col-md-5\">\r\n        <ul class=\"profile-menu no-list-style\">\r\n          <li>\r\n            <a href=\"#friends\" class=\"primary font-medium-2 font-weight-600\">Friends</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#photos\" class=\"primary font-medium-2 font-weight-600\">Photos</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--Basic User Details Ends-->\r\n\r\n<!--About section starts-->\r\n<section id=\"about\">\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">About</div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h5>Personal Information</h5>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n      <div class=\"mb-3\">\r\n        <span class=\"text-bold-500 primary\">About Me:</span>\r\n        <span class=\"d-block overflow-hidden\">Hi, I’m Jose, I’m 29 and I work as a Ninja Developer for the\r\n          “PIXINVENT” Creative Studio. In my research, I follow the flow of early medieval slavery from viking\r\n          raids in the west, through the booming ports of the Scandinavian north, and out into the Islamic world.\r\n          Reading texts against the grain and seeing artifacts as traces of the past can make their lives once\r\n          again visible to us today. This website documents my efforts to do just that, and I hope it will prove\r\n          a resource and an inspiration for others in similar pursuits.\r\n        </span>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n          <ul class=\"no-list-style\">\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"icon-present font-small-3\"></i> Birthday:</a></span>\r\n              <span class=\"d-block overflow-hidden\">June 10th, 1988</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> Birthplace:</a></span>\r\n              <span class=\"d-block overflow-hidden\">New Jersey, USA</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Lives in:</a></span>\r\n              <span class=\"d-block overflow-hidden\">Denver, USA</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n          <ul class=\"no-list-style\">\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Gender:</a></span>\r\n              <span class=\"d-block overflow-hidden\">Male</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> Email:</a></span>\r\n              <a class=\"d-block overflow-hidden\">jose@yourmail.com</a>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> Website:</a></span>\r\n              <a class=\"d-block overflow-hidden\">pixinvent.com</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n          <ul class=\"no-list-style\">\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> Phone Number:</a></span>\r\n              <span class=\"d-block overflow-hidden\">(012) 345 - 678 - 9910</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> Occupation:</a></span>\r\n              <span class=\"d-block overflow-hidden\">Ninja Developer</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> Joined:</a></span>\r\n              <span class=\"d-block overflow-hidden\">April 1st, 2012</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"mt-3\">\r\n        <span class=\"text-bold-500 primary\">Hobbies:</span>\r\n        <span class=\"d-block overflow-hidden\">I like to ride the cycle to work, swimming, listning music and\r\n          working out. I also like reading magazines, go to museums, watching good movies and eat spicy food\r\n          while\r\n          it’s raining outside.Twin siblings Dipper and Mabel Pines spend the summer at their uncle's tourist\r\n          trap\r\n          in the enigmatic town of Gravity Falls.A mysterious Hollywood stuntman and mechanic moonlights as a\r\n          getaway driver.Scuba Diving, Skiing, Surfing, Photography, Long drive.\r\n        </span>\r\n      </div>\r\n      <div class=\"mt-2 overflow-hidden\">\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-plane danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Travelling</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-speedometer danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Driving</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-camera danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Photography</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-game-controller danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Gaming</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-music-tone-alt danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Music</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-monitor danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Surfing</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-pie-chart danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Foodie</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-tv danger font-large-2\"></i>\r\n          <div class=\"mt-2\">TV</div>\r\n        </span>\r\n        <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-basket-loaded danger font-large-2\"></i>\r\n          <div class=\"mt-2\">Shopping</div>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h5>Educational Information</h5>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n          <ul class=\"no-list-style\">\r\n            <li class=\"mb-2\">\r\n              <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Broklin Institute</a></span>\r\n              <span class=\"grey line-height-0 d-block mb-2 font-small-2\">2008 - 2009</span>\r\n              <span class=\"line-height-2 d-block overflow-hidden\">Professor: Leonardo Stagg. Six months of best\r\n                Developing tools course.</span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> The Ninja College </a></span>\r\n              <span class=\"grey line-height-0 d-block mb-2 font-small-2\">2012 - 2013</span>\r\n              <span class=\"line-height-2 d-block overflow-hidden\">Professor: Steve Ustreil. Gave me the best\r\n                educational information for Ninja.</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n          <ul class=\"no-list-style\">\r\n            <li class=\"mb-2\">\r\n              <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Ninja Developer</a></span>\r\n              <span class=\"grey line-height-0 d-block mb-2 font-small-2\">2009-2011</span>\r\n              <span class=\"line-height-2 d-block overflow-hidden\">Ninja Developer for the “PIXINVENT” creative\r\n                studio. </span>\r\n            </li>\r\n            <li class=\"mb-2\">\r\n              <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Senior Ninja Developer</a></span>\r\n              <span class=\"grey line-height-0 d-block mb-2 font-small-2\">2014-Now</span>\r\n              <span class=\"line-height-2 d-block overflow-hidden\">Senior Ninja Developer for the “PIXINVENT”\r\n                creative studio.</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--About section ends-->\r\n\r\n<!--User Timeline section starts-->\r\n<section id=\"user\">\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">User Timeline</div>\r\n</div>\r\n</div>\r\n<div id=\"timeline\" class=\"timeline-center timeline-wrapper\">\r\n<ul class=\"timeline\">\r\n<li class=\"timeline-line\"></li>\r\n<li class=\"timeline-group\">\r\n  <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> Today</a>\r\n</li>\r\n</ul>\r\n<ul class=\"timeline\">\r\n<li class=\"timeline-line\"></li>\r\n<li class=\"timeline-item\">\r\n  <div class=\"timeline-badge\">\r\n    <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i\r\n        class=\"fa fa-plane\"></i></span>\r\n  </div>\r\n  <div class=\"timeline-card card border-grey border-lighten-2\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"mb-0 card-title\"><a>Portfolio project work</a></h4>\r\n      <div class=\"card-subtitle text-muted mt-0\">\r\n        <span class=\"font-small-3\">5 hours ago</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <img class=\"img-fluid\" src=\"assets/img/photos/06.jpg\" alt=\"Timeline Image 1\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero\r\n            hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\r\n          <div class=\"list-inline mb-1\">\r\n            <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> Like</a></span>\r\n            <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Comment</a></span>\r\n            <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> Share</a></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer px-0 py-0\">\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\r\n              <div class=\"form-control-position\">\r\n                <i class=\"fa fa-dashcube\"></i>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"timeline-item mt-5\">\r\n  <div class=\"timeline-badge\">\r\n    <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img\r\n        src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\r\n  </div>\r\n  <div class=\"timeline-card card card-inverse\">\r\n    <img class=\"card-img img-fluid\" src=\"assets/img/photos/07.jpg\" alt=\"Card image\">\r\n    <div class=\"card-img-overlay bg-overlay\">\r\n      <h4 class=\"card-title\">Good Morning</h4>\r\n      <p class=\"card-text\"><small>15 hours ago</small></p>\r\n    </div>\r\n  </div>\r\n</li>\r\n</ul>\r\n\r\n<!-- 2016 -->\r\n<ul class=\"timeline\">\r\n<li class=\"timeline-line\"></li>\r\n<li class=\"timeline-group\">\r\n  <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 2016</a>\r\n</li>\r\n</ul>\r\n<ul class=\"timeline\">\r\n<li class=\"timeline-line\"></li><!-- /.timeline-line -->\r\n<li class=\"timeline-item\">\r\n  <div class=\"timeline-badge\">\r\n    <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Application API Support\"><i\r\n        class=\"fa fa-life-ring\"></i></span>\r\n  </div>\r\n  <div class=\"timeline-card card border-grey border-lighten-2\">\r\n    <div class=\"card-header\">\r\n      <div class=\"media\">\r\n        <div class=\"media-left\">\r\n          <a>\r\n            <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-11.png\"\r\n                alt=\"avatar\" width=\"50\"></span>\r\n            <i></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"media-body\">\r\n          <h4 class=\"mb-0 card-title\"><a>Application API Support</a></h4>\r\n          <div class=\"card-subtitle text-muted mt-0\">\r\n            <span class=\"font-small-3\">15 Oct, 2016 at 8.00 A.M</span>\r\n            <span class=\"tag tag-pill tag-default tag-warning float-right\">High</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <img class=\"img-fluid\" src=\"assets/img/photos/08.jpg\" alt=\"Timeline Image 1\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero\r\n            hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.</p>\r\n          <div class=\"list-inline mb-1\">\r\n            <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> Comment</a></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer px-0 py-0\">\r\n        <div class=\"card-body\">\r\n          <div class=\"media\">\r\n            <div class=\"media-left\">\r\n              <a>\r\n                <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-14.png\"\r\n                    alt=\"avatar\" width=\"50\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <p class=\"text-bold-600 mb-0\"><a>Crystal Lawson</a></p>\r\n              <p class=\"m-0\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\r\n                sollicitudin commodo.</p>\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                  <a>\r\n                    <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-16.png\"\r\n                        alt=\"avatar\" width=\"50\"></span>\r\n                  </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p class=\"text-bold-600 mb-0\"><a>Rafila Găitan</a></p>\r\n                  <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <form>\r\n            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Write comments...\">\r\n              <div class=\"form-control-position\">\r\n                <i class=\"fa fa-dashcube\"></i>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"timeline-item mt-5\">\r\n  <div class=\"timeline-badge\">\r\n    <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i\r\n        class=\"fa fa-smile-o\"></i></span>\r\n  </div>\r\n  <div class=\"timeline-card card border-grey border-lighten-2\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"mb-0 card-title\"><a>Quote of the day</a></h4>\r\n      <div class=\"card-subtitle text-muted mt-0\">\r\n        <span class=\"font-small-3\">03 March, 2016 at 5 P.M</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <img class=\"img-fluid\" src=\"assets/img/photos/09.jpg\" alt=\"Timeline Image 1\">\r\n      <div class=\"card-body\">\r\n        <blockquote class=\"card-bodyquote\">\r\n          <p class=\"card-text\">Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a\r\n            pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?</p>\r\n          <footer>Someone famous in <cite title=\"Source Title\"> - Source Title</cite></footer>\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n</ul>\r\n<!-- 2015 -->\r\n<ul class=\"timeline\">\r\n<li class=\"timeline-line\"></li>\r\n<li class=\"timeline-group\">\r\n  <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> Founded in 2015</a>\r\n</li>\r\n</ul>\r\n</div>\r\n</section>\r\n<!--User Timeline section ends-->\r\n\r\n<!--User's friend section starts-->\r\n<section id=\"friends\">\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Friends</div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-mint\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Brek Padio</h4>\r\n      <p class=\"category text-gray font-small-4\">CEO / Co-Founder</p>\r\n      <a class=\"btn btn-lg gradient-mint font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\"></i> <span>4.9</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>USA</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>21</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Jassi\" width=\"150\" class=\"rounded-circle gradient-pomegranate\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Jassi Lee</h4>\r\n      <p class=\"category text-gray font-small-4\">Ninja Developer</p>\r\n      <a class=\"btn btn-lg gradient-pomegranate font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\">star</i> <span>4.7</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>Canada</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>14</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-orange-amber\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Peter Steven</h4>\r\n      <p class=\"category text-gray font-small-4\">Android Developer</p>\r\n      <a class=\"btn btn-lg gradient-orange-amber font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\">star</i> <span>5.0</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>India</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>18</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Maitri\" width=\"150\" class=\"rounded-circle gradient-red-pink\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Maitri Rajput</h4>\r\n      <p class=\"category text-gray font-small-4\">UX Designer</p>\r\n      <a class=\"btn btn-lg gradient-red-pink font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\">star</i> <span>4.5</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>India</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>19</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Anibal\" width=\"150\" class=\"rounded-circle gradient-blackberry\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Anibal Santo</h4>\r\n      <p class=\"category text-gray font-small-4\">Project Developer</p>\r\n      <a class=\"btn btn-lg gradient-blackberry font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\">star</i> <span>4.8</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>London</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>20</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-12 col-md-6 col-lg-4\">\r\n<div class=\"card\">\r\n  <div class=\"card-header text-center\">\r\n    <img src=\"assets/img/portrait/small/avatar-s-12.png\" alt=\"Gini\" width=\"150\" class=\"rounded-circle gradient-back-to-earth\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body text-center\">\r\n      <h4 class=\"card-title\">Gini Fredre</h4>\r\n      <p class=\"category text-gray font-small-4\">HR</p>\r\n      <a class=\"btn btn-lg gradient-back-to-earth font-small-2 white p-2 mr-2\">Add as Friend</a>\r\n      <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">Message</a>\r\n      <hr class=\"grey\">\r\n      <div class=\"row grey\">\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-star mr-1\">star</i> <span>4.4</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-globe mr-1\"></i> <span>Korea</span></a>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <a><i class=\"ft-book mr-1\"></i> <span>15</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--User's friend section starts-->\r\n\r\n<!--User's uploaded photos section starts-->\r\n<section id=\"photos\">\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Photos</div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h5>Photos Uploaded</h5>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n      </div>\r\n      <div class=\"row\">\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n      </div>\r\n      <div class=\"row\">\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n      </div>\r\n      <div class=\"row\">\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/13.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/14.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/15.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n        <figure class=\"col-lg-3 col-md-6 col-12\">\r\n          <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/16.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n        </figure>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--User's uploaded photos section starts-->\r\n<!--User Profile Starts-->\r\n\r\n    </div>\r\n  </div>\r\n  <!-- END : End Main Content-->\r\n\r\n  <!-- BEGIN : Footer-->\r\n  <footer class=\"footer footer-static footer-light\">\r\n    <p class=\"clearfix text-muted text-sm-center px-2\"><span>Copyright  &copy; 2019 <a href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\" id=\"pixinventLink\" target=\"_blank\" class=\"text-bold-800 primary darken-2\">PIXINVENT </a>, All rights reserved. </span></p>\r\n  </footer>\r\n  <!-- End : Footer-->\r\n\r\n</div>\r\n<!-- ////////////////////////////////////////////////////////////////////////////-->"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Admin Register</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add </h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n          <form #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"inputName3\" class=\"col-sm-2 col-form-label\">Name</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"inputname3\" placeholder=\"Name\" [(ngModel)]=\"form.name\" required>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\r\n                  {{error.name}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"form-group row\">\r\n              <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.email\">\r\n                  {{error.email}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"form-group row\">\r\n              <label for=\"inputPasswordConfirmation3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPasswordConfirmation3\" placeholder=\" Password\"\r\n                  [(ngModel)]=\"form.password\" required>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!error.password\">\r\n                  {{error.password}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n    \r\n            <div class=\"form-group row\">\r\n              <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Confirm Password</label>\r\n              <div class=\"col-sm-10\">\r\n                <input type=\"password\" name=\"password_confirmation\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Confirm Password\" [(ngModel)]=\"form.password_confirmation\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"issueinput6\">User_Category</label>\r\n              <select id=\"issueinput6\" name=\"user_cat_id\" class=\"form-control\" [(ngModel)]=\"form.user_cat_id\" data-toggle=\"tooltip\" data-trigger=\"hover\"\r\n                data-placement=\"top\" data-title=\"Status\">\r\n                <option *ngFor=\"let u of usercat\" value=\"{{u.id}}\">{{u.cat_name}}</option>\r\n                \r\n              </select>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-10 offset-2\">\r\n    \r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\">Sign Up</button>\r\n    \r\n               \r\n    \r\n              </div>\r\n            </div>\r\n    \r\n          </form>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            email: null,
            name: null,
            password: null,
            password_confirmation: null,
            user_cat_id: null
        };
        this.error = [];
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    SignupComponent.prototype.handleResponse = function (data) {
        this.Token.handle(data.access_token);
        this.router.navigateByUrl('/profile');
    };
    SignupComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getusercat().subscribe(function (data) {
            _this.usercat = data;
            //  console.log(this.usercat)
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">About Us</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add About Us</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">About Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.about_name\" name=\"about_name\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Title</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.title\" name=\"title\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput2\">Content</label>\r\n                  <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\"  [(ngModel)]=\"form.content\" name=\"content\" required></textarea>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Year</label>\r\n                    <input type=\"month\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.year\" name=\"year\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Select Image</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"projectinput8\" (change)=\"uploadFile($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Save\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of about us</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Image</th>\r\n              <th>Name</th>\r\n              <th>Title </th>\r\n              <th>Status</th>\r\n              <!-- <th>Content</th> -->\r\n              <th>Year</th>\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!aboutus?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n           </tbody>\r\n           <tbody *ngIf=\"aboutus?.length\">\r\n             \r\n             <tr *ngFor=\"let u of aboutus | paginate: {itemsPerPage: 10, currentPage: p} ; let i=index\">               \r\n              <td>{{i + 1}}</td>\r\n               <td>\r\n                 <img >\r\n               </td>\r\n               <td>{{u.about_name}}</td>\r\n               <td>{{u.title}}</td>\r\n               <td>{{u.status}}</td>\r\n               <!-- <td>{{u.content}}</td> -->\r\n               <td>{{u.year}}</td>\r\n               <td>{{u.created_at}}</td>\r\n               <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\"> -->\r\n                  <!-- <i class=\"ft-user font-medium-3 mr-2\"></i> -->\r\n                <!-- </a> -->\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n         <div class=\"center\" *ngIf=\"aboutus?.length\">\r\n              <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n             \r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            about_name: null,
            title: null,
            content: null,
            year: null
        };
        this.error = [];
    }
    AboutusComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var files = event.target.files[0];
        var reader = new FileReader();
        var vm = this;
        reader.onloadend = function () {
            _this.image = reader.result;
        };
        reader.readAsDataURL(files);
    };
    AboutusComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addaboutus({ formdata: this.form, imag: this.image }).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    AboutusComponent.prototype.handleResponse = function (data) {
        this.form.about_name = "";
        this.form.title = "";
        this.form.year = "";
        this.form.content = "";
        this.ngOnInit();
    };
    AboutusComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    AboutusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getaboutus().subscribe(function (data) {
            _this.aboutus = data;
            //  console.log(this.usercat)
        });
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/pages/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/pages/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-list/admin-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin-list/admin-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLWxpc3QvYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin-list/admin-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-list/admin-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Admin</div>\r\n</div></div>\r\n\r\n\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of the Admin ({{count}})</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <!-- <th></th> -->\r\n              <th>Name</th>\r\n              <th>Gender</th>\r\n              <th>Email</th>\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!user?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr><tr></tr>\r\n           </tbody>\r\n           <tbody *ngIf=\"user?.length\">\r\n             \r\n             <tr *ngFor=\"let u of user | paginate: {itemsPerPage: 50, currentPage: p} ; let i=index\">               \r\n               <td>{{i + 1}}</td>\r\n              \r\n              <td>{{u.name}}</td>\r\n                <td>{{u.gender}}</td>\r\n                <td>{{u.email}}</td>\r\n                <td>{{u.created_at}}</td>\r\n                <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n        <div class=\"center\" *ngIf=\"user?.length\">\r\n          <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n         \r\n     </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/admin-list/admin-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin-list/admin-list.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");



var AdminListComponent = /** @class */ (function () {
    function AdminListComponent(Jarwis) {
        this.Jarwis = Jarwis;
    }
    AdminListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getadmin().subscribe(function (data) {
            _this.userdata = data;
            _this.user = _this.userdata.user;
            _this.count = _this.userdata.usercount;
            //  console.log(this.user)
        });
    };
    AdminListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-list',
            template: __webpack_require__(/*! ./admin-list.component.html */ "./src/app/pages/admin-list/admin-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-list.component.css */ "./src/app/pages/admin-list/admin-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]])
    ], AdminListComponent);
    return AdminListComponent;
}());



/***/ }),

/***/ "./src/app/pages/association/association.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/association/association.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-pagination{\r\n    font-size: 12px;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination .current{\r\n    background: green;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzb2NpYXRpb24vYXNzb2NpYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzb2NpYXRpb24vYXNzb2NpYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/association/association.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/association/association.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Association</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add Association</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Association Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" [(ngModel)]=\"form.asso_name\"  name=\"asso_name\" required>\r\n                  </div>\r\n\r\n                  \r\n   \r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\"  class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Save\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of the Association</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th></th>\r\n              <th>Association Name</th>\r\n              <th>Status</th>\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!asso?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n           </tbody>\r\n           <tbody *ngIf=\"asso?.length\">\r\n             \r\n             <tr *ngFor=\"let u of asso | paginate: {itemsPerPage: 10, currentPage: p} ; let i=index\">               \r\n              <td>{{i + 1}}</td>\r\n               <td>\r\n                 <div class=\"custom-control custom-checkbox m-0\">\r\n                   <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                   <label class=\"custom-control-label\" for=\"item1\"></label>\r\n                 </div>\r\n               </td>\r\n               <td>{{u.asso_name}}</td>\r\n               <td>{{u.status}}</td>\r\n               <td>{{u.created_at}}</td>\r\n               <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\"> -->\r\n                  <!-- <i class=\"ft-user font-medium-3 mr-2\"></i> -->\r\n                <!-- </a> -->\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            \r\n            \r\n          </tbody>\r\n        </table>\r\n        <div class=\"center\" *ngIf=\"asso?.length\">\r\n          <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n         \r\n     </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n"

/***/ }),

/***/ "./src/app/pages/association/association.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/association/association.component.ts ***!
  \************************************************************/
/*! exports provided: AssociationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationComponent", function() { return AssociationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AssociationComponent = /** @class */ (function () {
    function AssociationComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            asso_name: null,
        };
        this.error = [];
    }
    AssociationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addasso(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    AssociationComponent.prototype.handleResponse = function (data) {
        this.form.asso_name = "";
        this.ngOnInit();
    };
    AssociationComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    AssociationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getasso().subscribe(function (data) {
            _this.asso = data;
            //  console.log(this.asso)
        });
    };
    AssociationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-association',
            template: __webpack_require__(/*! ./association.component.html */ "./src/app/pages/association/association.component.html"),
            styles: [__webpack_require__(/*! ./association.component.css */ "./src/app/pages/association/association.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AssociationComponent);
    return AssociationComponent;
}());



/***/ }),

/***/ "./src/app/pages/event-programs/event-programs.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/event-programs/event-programs.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LXByb2dyYW1zL2V2ZW50LXByb2dyYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/event-programs/event-programs.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/event-programs/event-programs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Event and Program</div>\r\n</div></div>\r\n\r\n<div class=\"col-xl-12 col-lg-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">Event and Program</h4>\r\n      <p>You can also add icons to the tab name.</p>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body\">\r\n        <div class=\"nav-vertical\">\r\n          <ul class=\"nav nav-tabs nav-left\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"baseVerticalLeft2-tab1\" data-toggle=\"tab\" aria-controls=\"tabVerticalLeft21\"\r\n                href=\"#tabVerticalLeft21\" aria-expanded=\"true\"><i class=\"fa fa-align-justify\"></i> Event</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"baseVerticalLeft2-tab2\" data-toggle=\"tab\" aria-controls=\"tabVerticalLeft22\"\r\n                href=\"#tabVerticalLeft22\" aria-expanded=\"false\"><i class=\"fa fa-header\"></i> Event Schedule</a>\r\n            </li>\r\n            \r\n          </ul>\r\n          <div class=\"tab-content px-1\">\r\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"tabVerticalLeft21\" aria-expanded=\"true\"\r\n              aria-labelledby=\"baseVerticalLeft2-tab1\">\r\n        \r\n              <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add Event</h4>\r\n              <div class=\"px-3\">\r\n\r\n                <!-- <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit1()\">\r\n                  <div class=\"row justify-content-md-center\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-body\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Event Name</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.event_name\" name=\"event_name\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Subject</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.subject\" name=\"subject\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Address</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.address\" name=\"address\" required>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"projectinput1\">Start Time</label>\r\n                              <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"form.start_time\" name=\"start_time\" placeholder=\"e.g, 2:00:00 AM\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                            \r\n                              <div class=\"form-group\">\r\n                                <label for=\"projectinput1\">End Time</label>\r\n                                <input type=\"text\" id=\"projectinput1\" class=\"form-control\" [(ngModel)]=\"form.end_time\" name=\"end_time\" placeholder=\"e.g, 3:50:00 AM\">\r\n                             \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n      \r\n                        <div class=\"form-group\">\r\n                          <label for=\"projectinput2\">Start Date</label>\r\n                          <input type=\"text\" id=\"projectinput2\" class=\"form-control\" [(ngModel)]=\"form.start_date\" name=\"start_date\" placeholder=\"e.g, 27 February 2020\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"projectinput2\">End Date</label>\r\n                          <input type=\"text\" id=\"projectinput2\" class=\"form-control\" [(ngModel)]=\"form.end_date\" name=\"end_date\"  placeholder=\"e.g, 27 February 2020\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput2\">Content</label>\r\n                        <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\"  [(ngModel)]=\"form.content\" name=\"content\" required></textarea>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label>Select Image</label>\r\n                          <input type=\"file\" class=\"form-control-file\" id=\"projectinput8\" (change)=\"uploadFile($event)\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"form-actions center\">\r\n                    \r\n                    <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                      <i class=\"fa fa-check-square-o\"></i> Save\r\n                    </button>\r\n                  </div>\r\n                </form> -->\r\n      \r\n              </div>\r\n\r\n              \r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"tab-pane\" id=\"tabVerticalLeft22\" aria-labelledby=\"baseVerticalLeft2-tab2\">\r\n              \r\n              <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add Event Schedule</h4>\r\n              <div class=\"px-3\">\r\n<!-- \r\n                <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit2()\">\r\n                  <div class=\"row justify-content-md-center\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-body\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Schedule Name</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.component1\" name=\"component1\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Title</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.component2\" name=\"component2\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput1\">Speaker</label>\r\n                          <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.component2\" name=\"component2\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"eventInput2\">Content</label>\r\n                        <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\"  [(ngModel)]=\"form.component3\" name=\"component3\" required></textarea>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"projectinput1\">Start Time</label>\r\n                              <input type=\"text\" id=\"projectinput1\" class=\"form-control\" name=\"fname\" placeholder=\"e.g 10AM\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"projectinput2\">End Time</label>\r\n                              <input type=\"text\" id=\"projectinput2\" class=\"form-control\" name=\"lname\"  placeholder=\"e.g 2PM\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"form-actions center\">\r\n                    \r\n                    <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                      <i class=\"fa fa-check-square-o\"></i> Save\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n       -->\r\n              </div>\r\n\r\n\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/event-programs/event-programs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/event-programs/event-programs.component.ts ***!
  \******************************************************************/
/*! exports provided: EventProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventProgramsComponent", function() { return EventProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventProgramsComponent = /** @class */ (function () {
    function EventProgramsComponent() {
    }
    EventProgramsComponent.prototype.ngOnInit = function () {
    };
    EventProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-programs',
            template: __webpack_require__(/*! ./event-programs.component.html */ "./src/app/pages/event-programs/event-programs.component.html"),
            styles: [__webpack_require__(/*! ./event-programs.component.css */ "./src/app/pages/event-programs/event-programs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventProgramsComponent);
    return EventProgramsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-header/home-header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-header/home-header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtaGVhZGVyL2hvbWUtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home-header/home-header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/home-header/home-header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Home Header</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add Home Header</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Component 1</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.component1\" name=\"component1\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Component 2</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.component2\" name=\"component2\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput2\">Component 3</label>\r\n                  <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\"  [(ngModel)]=\"form.component3\" name=\"component3\" required></textarea>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Select Image</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"projectinput8\" (change)=\"uploadFile($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Save\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of the Home Header</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Home Image</th>\r\n              <th>Component 1</th>\r\n              <th>Component 2 </th>\r\n              <th>Component 3</th>\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!header?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n           </tbody>\r\n           <tbody *ngIf=\"header?.length\">\r\n             \r\n             <tr *ngFor=\"let u of header | paginate: {itemsPerPage: 10, currentPage: p} ; let i=index\">               \r\n              <td>{{i + 1}}</td>\r\n               <td>\r\n                 <img src=\"\">\r\n               </td>\r\n               <td>{{u.component1}}</td>\r\n               <td>{{u.component2}}</td>\r\n               <td>{{u.component3}}</td>\r\n               <td>{{u.created_at}}</td>\r\n               <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\"> -->\r\n                  <!-- <i class=\"ft-user font-medium-3 mr-2\"></i> -->\r\n                <!-- </a> -->\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n         <div class=\"center\" *ngIf=\"header?.length\">\r\n              <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n             \r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home-header/home-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/home-header/home-header.component.ts ***!
  \************************************************************/
/*! exports provided: HomeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function() { return HomeHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeHeaderComponent = /** @class */ (function () {
    function HomeHeaderComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            component1: null,
            component2: null,
            component3: null,
        };
        this.error = [];
    }
    HomeHeaderComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var files = event.target.files[0];
        var reader = new FileReader();
        var vm = this;
        reader.onloadend = function () {
            _this.image = reader.result;
        };
        reader.readAsDataURL(files);
    };
    HomeHeaderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addhomeheader({ formdata: this.form, image: this.image }).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    HomeHeaderComponent.prototype.handleResponse = function (data) {
        this.form.component1 = "";
        this.form.component2 = "";
        this.form.component3 = "";
        this.ngOnInit();
    };
    HomeHeaderComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    HomeHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.gethomeheader().subscribe(function (data) {
            _this.header = data;
            //  console.log(this.usercat)
        });
    };
    HomeHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-header',
            template: __webpack_require__(/*! ./home-header.component.html */ "./src/app/pages/home-header/home-header.component.html"),
            styles: [__webpack_require__(/*! ./home-header.component.css */ "./src/app/pages/home-header/home-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeHeaderComponent);
    return HomeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <!-- / main menu-->\r\n       <div class=\"main-panel mt-2\">\r\n         <!-- BEGIN : Main Content-->\r\n         <div class=\"main-content\">\r\n           <div class=\"content-wrapper\"><!--Statistics cards Starts-->\r\n <div class=\"row\">\r\n   <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n     <div class=\"card gradient-blackberry\">\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body pt-2 pb-0\">\r\n           <div class=\"media\">\r\n             <div class=\"media-body white text-left\">\r\n               <h3 class=\"font-large-1 mb-0\">$2156</h3>\r\n               <span>Total Tax</span>\r\n             </div>\r\n             <div class=\"media-right white text-right\">\r\n               <i class=\"icon-pie-chart font-large-1\"></i>\r\n             </div>\r\n           </div>\r\n         </div>\r\n         <div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n     <div class=\"card gradient-ibiza-sunset\">\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body pt-2 pb-0\">\r\n           <div class=\"media\">\r\n             <div class=\"media-body white text-left\">\r\n               <h3 class=\"font-large-1 mb-0\">$1567</h3>\r\n               <span>Total Cost</span>\r\n             </div>\r\n             <div class=\"media-right white text-right\">\r\n               <i class=\"icon-bulb font-large-1\"></i>\r\n             </div>\r\n           </div>\r\n         </div>\r\n         <div id=\"Widget-line-chart1\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n         </div>\r\n \r\n       </div>\r\n     </div>\r\n   </div>\r\n \r\n   <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n     <div class=\"card gradient-green-tea\">\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body pt-2 pb-0\">\r\n           <div class=\"media\">\r\n             <div class=\"media-body white text-left\">\r\n               <h3 class=\"font-large-1 mb-0\">$4566</h3>\r\n               <span>Total Sales</span>\r\n             </div>\r\n             <div class=\"media-right white text-right\">\r\n               <i class=\"icon-graph font-large-1\"></i>\r\n             </div>\r\n           </div>\r\n         </div>\r\n         <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n     <div class=\"card gradient-pomegranate\">\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body pt-2 pb-0\">\r\n           <div class=\"media\">\r\n             <div class=\"media-body white text-left\">\r\n               <h3 class=\"font-large-1 mb-0\">$8695</h3>\r\n               <span>Total Earning</span>\r\n             </div>\r\n             <div class=\"media-right white text-right\">\r\n               <i class=\"icon-wallet font-large-1\"></i>\r\n             </div>\r\n           </div>\r\n         </div>\r\n         <div id=\"Widget-line-chart3\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n <!--Statistics cards Ends-->\r\n \r\n <!--Line with Area Chart 1 Starts-->\r\n <div class=\"row\">\r\n   <div class=\"col-sm-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title\">PRODUCTS SALES</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body\">\r\n           <div class=\"chart-info mb-3 ml-3\">\r\n             <span class=\"gradient-blackberry d-inline-block rounded-circle mr-1\" style=\"width:15px; height:15px;\"></span>\r\n             Sales\r\n             <span class=\"gradient-mint d-inline-block rounded-circle mr-1 ml-2\" style=\"width:15px; height:15px;\"></span>\r\n             Visits\r\n           </div>\r\n           <div id=\"line-area\" class=\"height-350 lineArea\">\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n <!--Line with Area Chart 1 Ends-->\r\n \r\n <div class=\"row match-height\">\r\n   <div class=\"col-xl-4 col-lg-12 col-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title\">Statistics</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n \r\n         <p class=\"font-medium-2 text-muted text-center pb-2\">Last 6 Months Sales</p>\r\n         <div id=\"Stack-bar-chart\" class=\"height-300 Stackbarchart mb-2\">\r\n         </div>\r\n \r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-8 col-lg-12 col-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header pb-2\">\r\n         <h4 class=\"card-title\">Shopping Cart</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n         <table class=\"table table-responsive-sm text-center\">\r\n           <thead>\r\n             <tr>\r\n               <th>Image</th>\r\n               <th>Product</th>\r\n               <th>Quantity</th>\r\n               <th>Status</th>\r\n               <th>Amount</th>\r\n               <th>Delete</th>\r\n             </tr>\r\n           </thead>\r\n           <tbody>\r\n             <tr>\r\n               <td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/01.png\" alt=\"Generic placeholder image\" /></td>\r\n               <td>Ferrero Rocher</td>\r\n               <td>1</td>\r\n               <td>\r\n                 <a class=\"btn white btn-round btn-primary\">Active</a>\r\n               </td>\r\n               <td>$19.94</td>\r\n               <td>\r\n                 <a class=\"danger\" data-original-title=\"\" title=\"\">\r\n                   <i class=\"ft-x\"></i>\r\n                 </a>\r\n               </td>\r\n             </tr>\r\n             <tr>\r\n               <td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/07.png\" alt=\"Generic placeholder image\" /></td>\r\n               <td>Headphones</td>\r\n               <td>2</td>\r\n               <td>\r\n                 <a class=\"btn white btn-round btn-danger\">Disabled</a>\r\n               </td>\r\n               <td>$99.00</td>\r\n               <td>\r\n                 <a class=\"danger\" data-original-title=\"\" title=\"\">\r\n                   <i class=\"ft-x\"></i>\r\n                 </a>\r\n               </td>\r\n             </tr>\r\n             <tr>\r\n               <td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/11.png\" alt=\"Generic placeholder image\" /></td>\r\n               <td>Camera</td>\r\n               <td>1</td>\r\n               <td>\r\n                 <a class=\"btn white btn-round btn-info\">Paused</a>\r\n               </td>\r\n               <td>$299.00</td>\r\n               <td>\r\n                 <a class=\"danger\" data-original-title=\"\" title=\"\">\r\n                   <i class=\"ft-x\"></i>\r\n                 </a>\r\n               </td>\r\n             </tr>\r\n             <tr>\r\n               <td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/14.png\" alt=\"Generic placeholder image\" /></td>\r\n               <td>Beer</td>\r\n               <td>2</td>\r\n               <td>\r\n                 <a class=\"btn white btn-round btn-success\">Active</a>\r\n               </td>\r\n               <td>$24.51</td>\r\n               <td>\r\n                 <a class=\"danger\" data-original-title=\"\" title=\"\">\r\n                   <i class=\"ft-x\"></i>\r\n                 </a>\r\n               </td>\r\n             </tr>\r\n           </tbody>\r\n         </table>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n \r\n <div class=\"row match-height\">\r\n   <div class=\"col-xl-8 col-lg-12 col-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title mb-0\">Visit & Sales Statistics</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body\">\r\n           <div class=\"chart-info mb-2\">\r\n             <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n             <span class=\"text-uppercase\"><i class=\"fa fa-circle deep-purple font-small-2 mr-1\"></i> Visits</span>\r\n           </div>\r\n           <div id=\"line-area2\" class=\"height-400 lineAreaDashboard\">\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-4 col-lg-12 col-12\">\r\n     <div class=\"card gradient-blackberry\">\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body\">\r\n           <h4 class=\"card-title white\">Statistics</h4>\r\n           <div class=\"p-2 text-center\">\r\n             <a class=\"white font-medium-1\">Month</a>\r\n             <a class=\"btn btn-raised btn-round bg-white mx-3 px-3\">Week</a>\r\n             <a class=\"white font-medium-1\">Day</a>\r\n           </div>\r\n           <div class=\"my-3 text-center white\">\r\n             <a class=\"font-large-2 d-block mb-1\">$ 78.89 <span class=\"ft-arrow-up font-large-2\"></span></a>\r\n             <span class=\"font-medium-1\">Week2 +15.44</span>\r\n           </div>\r\n         </div>\r\n         <div id=\"lineChart\" class=\"height-250 lineChart lineChartShadow\">\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n \r\n <div class=\"row match-height\">\r\n   <div class=\"col-xl-4 col-lg-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title\">Statistics</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n \r\n         <p class=\"font-medium-2 text-muted text-center\">Hobbies</p>\r\n         <div id=\"bar-chart\" class=\"height-250 BarChartShadow BarChart\">\r\n         </div>\r\n \r\n         <div class=\"card-body\">\r\n           <div class=\"row\">\r\n             <div class=\"col text-center\">\r\n               <span class=\"gradient-pomegranate d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n               <span class=\"font-large-1 d-block mb-2\">48</span>\r\n               <span>Sport</span>\r\n             </div>\r\n             <div class=\"col text-center\">\r\n               <span class=\"gradient-green-tea d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n               <span class=\"font-large-1 d-block mb-2\">9</span>\r\n               <span>Music</span>\r\n             </div>\r\n             <div class=\"col text-center\">\r\n               <span class=\"gradient-blackberry d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n               <span class=\"font-large-1 d-block mb-2\">26</span>\r\n               <span>Travel</span>\r\n             </div>\r\n             <div class=\"col text-center\">\r\n               <span class=\"gradient-ibiza-sunset d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n               <span class=\"font-large-1 d-block mb-2\">17</span>\r\n               <span>News</span>\r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-4 col-lg-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title mb-0\">User List</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n         <div class=\"card-body\">\r\n           <div class=\"media mb-1\">\r\n             <a>\r\n               <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n             </a>\r\n             <div class=\"media-body\">\r\n               <h4 class=\"font-medium-1 mt-1 mb-0\">Jessica Rice</h4>\r\n               <p class=\"text-muted font-small-3\">UX Designer</p>\r\n             </div>\r\n             <div class=\"mt-1\">\r\n               <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                 <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customcheckbox1\">\r\n                 <label class=\"custom-control-label\" for=\"customcheckbox1\"></label>\r\n               </div>\r\n \r\n             </div>\r\n           </div>\r\n           <div class=\"media mb-1\">\r\n             <a>\r\n               <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n             </a>\r\n             <div class=\"media-body\">\r\n               <h4 class=\"font-medium-1 mt-1 mb-0\">Jacob Rios</h4>\r\n               <p class=\"text-muted font-small-3\">HTML Developer</p>\r\n             </div>\r\n             <div class=\"mt-1\">\r\n               <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                 <input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox2\">\r\n                 <label class=\"custom-control-label\" for=\"customcheckbox2\"></label>\r\n               </div>\r\n \r\n             </div>\r\n           </div>\r\n           <div class=\"media mb-1\">\r\n             <a>\r\n               <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n             </a>\r\n             <div class=\"media-body\">\r\n               <h4 class=\"font-medium-1 mt-1 mb-0\">Russell Delgado</h4>\r\n               <p class=\"text-muted font-small-3\">Database Designer</p>\r\n             </div>\r\n             <div class=\"mt-1\">\r\n               <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                 <input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox3\">\r\n                 <label class=\"custom-control-label\" for=\"customcheckbox3\"></label>\r\n               </div>\r\n \r\n             </div>\r\n           </div>\r\n           <div class=\"media mb-1\">\r\n             <a>\r\n               <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n             </a>\r\n             <div class=\"media-body\">\r\n               <h4 class=\"font-medium-1 mt-1 mb-0\">Sara McDonald</h4>\r\n               <p class=\"text-muted font-small-3\">Team Leader</p>\r\n             </div>\r\n             <div class=\"mt-1\">\r\n               <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                 <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customcheckbox4\">\r\n                 <label class=\"custom-control-label\" for=\"customcheckbox4\"></label>\r\n               </div>\r\n \r\n             </div>\r\n           </div>\r\n           <div class=\"media mb-1\">\r\n             <a>\r\n               <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n             </a>\r\n             <div class=\"media-body\">\r\n               <h4 class=\"font-medium-1 mt-1 mb-0\">Janet Lucas</h4>\r\n               <p class=\"text-muted font-small-3\">Project Manger</p>\r\n             </div>\r\n             <div class=\"mt-1\">\r\n               <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                 <input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox5\">\r\n                 <label class=\"custom-control-label\" for=\"customcheckbox5\"></label>\r\n               </div>\r\n \r\n             </div>\r\n           </div>\r\n           <div class=\"action-buttons mt-2 text-center\">\r\n             <a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">Add New</a>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"col-xl-4 col-lg-12\">\r\n     <div class=\"card\">\r\n       <div class=\"card-header\">\r\n         <h4 class=\"card-title\">Project Stats</h4>\r\n       </div>\r\n       <div class=\"card-content\">\r\n \r\n         <p class=\"font-medium-2 text-muted text-center\">Project Tasks</p>\r\n         <div id=\"donut-dashboard-chart\" class=\"height-250 donut\">\r\n         </div>\r\n \r\n         <div class=\"card-body\">\r\n           <div class=\"row mb-3\">\r\n             <div class=\"col\">\r\n               <span class=\"mb-1 text-muted d-block\">23% - Started</span>\r\n               <div class=\"progress\" style=\"height: 5px;\">\r\n                 <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 23%;\" aria-valuenow=\"23\"\r\n                   aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n               </div>\r\n             </div>\r\n             <div class=\"col\">\r\n               <span class=\"mb-1 text-muted d-block\">14% - In Progress</span>\r\n               <div class=\"progress\" style=\"height: 5px;\">\r\n                 <div class=\"progress-bar bg-amber\" role=\"progressbar\" style=\"width: 14%;\" aria-valuenow=\"14\"\r\n                   aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n               </div>\r\n             </div>\r\n           </div>\r\n           <div class=\"row mb-2\">\r\n             <div class=\"col\">\r\n               <span class=\"mb-1 text-muted d-block\">35% - Remaining</span>\r\n               <div class=\"progress\" style=\"height: 5px;\">\r\n                 <div class=\"progress-bar bg-deep-purple bg-lighten-1\" role=\"progressbar\" style=\"width: 35%;\"\r\n                   aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n               </div>\r\n             </div>\r\n             <div class=\"col\">\r\n               <span class=\"mb-1 text-muted d-block\">28% - Done</span>\r\n               <div class=\"progress\" style=\"height: 5px;\">\r\n                 <div class=\"progress-bar bg-blue\" role=\"progressbar\" style=\"width: 28%;\" aria-valuenow=\"28\"\r\n                   aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n               </div>\r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n \r\n           </div>\r\n         </div>\r\n         <!-- END : End Main Content-->\r\n \r\n         <!-- BEGIN : Footer-->\r\n         <footer class=\"footer footer-static footer-light\">\r\n           <p class=\"clearfix text-muted text-sm-center px-2\"><span>Copyright  &copy; 2019 <a href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\" id=\"pixinventLink\" target=\"_blank\" class=\"text-bold-800 primary darken-2\">PIXINVENT </a>, All rights reserved. </span></p>\r\n         </footer>\r\n         <!-- End : Footer-->\r\n \r\n       </div>\r\n     <!-- ////////////////////////////////////////////////////////////////////////////-->  "

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/member-cat/member-cat.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/member-cat/member-cat.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-pagination{\r\n    font-size: 12px;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination .current{\r\n    background: green;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVtYmVyLWNhdC9tZW1iZXItY2F0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbWJlci1jYXQvbWVtYmVyLWNhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBhZ2luYXRpb257XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/member-cat/member-cat.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/member-cat/member-cat.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Member Category</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add Member Category</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Member Category Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\"  [(ngModel)]=\"form.member_cat_name\" name=\"member_cat_name\" required>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput2\">About the Member</label>\r\n                  <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\"  [(ngModel)]=\"form.about\" name=\"about\" required></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Save\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of the Member Category</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th></th>\r\n              <th>Member Cat Name</th>\r\n              <th>About </th>\r\n              <th>Status</th>\r\n              <!-- <th>Created_by</th> -->\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!membercat?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n           </tbody>\r\n           <tbody *ngIf=\"membercat?.length\">\r\n             \r\n             <tr *ngFor=\"let u of membercat | paginate: {itemsPerPage: 10, currentPage: p} ; let i=index\">               \r\n              <td>{{i + 1}}</td>\r\n               <td>\r\n                 <div class=\"custom-control custom-checkbox m-0\">\r\n                   <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                   <label class=\"custom-control-label\" for=\"item1\"></label>\r\n                 </div>\r\n               </td>\r\n               <td>{{u.member_cat_name}}</td>\r\n               <td>{{u.about}}</td>\r\n               <td>{{u.status}}</td>\r\n               <!-- <td>{{u.}}</td> -->\r\n               <td>{{u.created_at}}</td>\r\n               <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\"> -->\r\n                  <!-- <i class=\"ft-user font-medium-3 mr-2\"></i> -->\r\n                <!-- </a> -->\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n         <div class=\"center\" *ngIf=\"membercat?.length\">\r\n              <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n             \r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/member-cat/member-cat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/member-cat/member-cat.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCatComponent", function() { return MemberCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MemberCatComponent = /** @class */ (function () {
    function MemberCatComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            member_cat_name: null,
            about: null,
        };
        this.error = [];
    }
    MemberCatComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addmembercat(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    MemberCatComponent.prototype.handleResponse = function (data) {
        this.form.about = "";
        this.form.member_cat_name = "";
        this.ngOnInit();
    };
    MemberCatComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    MemberCatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getmembercat().subscribe(function (data) {
            _this.membercat = data;
            //  console.log(this.usercat)
        });
    };
    MemberCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-cat',
            template: __webpack_require__(/*! ./member-cat.component.html */ "./src/app/pages/member-cat/member-cat.component.html"),
            styles: [__webpack_require__(/*! ./member-cat.component.css */ "./src/app/pages/member-cat/member-cat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MemberCatComponent);
    return MemberCatComponent;
}());



/***/ }),

/***/ "./src/app/pages/members/members.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/members/members.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/members/members.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/members/members.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Member</div>\r\n<p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\r\n</div>\r\n</div>\r\n<section id=\"extended\">\r\n<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h4 class=\"card-title\">Member List ({{count}})</h4>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body table-responsive\">\r\n      <table class=\"table text-center\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <!-- <th></th> -->\r\n            <th>Name</th>\r\n            <th>Matric</th>\r\n            <th>Department</th>\r\n            <th>Gender</th>\r\n            <th>Email</th>\r\n            <th>Created_at</th>\r\n            <th>Updated_at</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"!user?.length\">\r\n          <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n         </tbody>\r\n         <tbody *ngIf=\"user?.length\">\r\n           \r\n           <tr *ngFor=\"let u of user | paginate: {itemsPerPage: 50, currentPage: p} ; let i=index\">               \r\n             <td>{{i + 1}}</td>\r\n            \r\n            <td>{{u.name}}</td>\r\n              <td>{{u.matric_no}}</td>\r\n              <td>{{u.dept}}</td>\r\n              <td>{{u.gender}}</td>\r\n              <td>{{u.email}}</td>\r\n              <td>{{u.created_at}}</td>\r\n              <td>{{u.updated_at}}</td>\r\n            <td>\r\n              <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n              </a>\r\n              <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n              </a>\r\n              <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n         \r\n        </tbody>\r\n      </table>\r\n      <div class=\"center\" *ngIf=\"user?.length\">\r\n        <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n       \r\n   </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--Extended Table Ends-->\r\n\r\n    </div>\r\n  </div>\r\n  <!-- END : End Main Content-->\r\n\r\n  <!-- BEGIN : Footer-->\r\n  <footer class=\"footer footer-static footer-light\">\r\n    <p class=\"clearfix text-muted text-sm-center px-2\"><span>Copyright  &copy; 2019 <a href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\" id=\"pixinventLink\" target=\"_blank\" class=\"text-bold-800 primary darken-2\">PIXINVENT </a>, All rights reserved. </span></p>\r\n  </footer>\r\n  <!-- End : Footer-->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/members/members.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/members/members.component.ts ***!
  \****************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MembersComponent = /** @class */ (function () {
    function MembersComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            member_cat_name: null,
            about: null,
        };
        this.error = [];
    }
    MembersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addusercat(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    MembersComponent.prototype.handleResponse = function (data) {
        this.form.about = "";
        this.form.member_cat_name = "";
        this.ngOnInit();
    };
    MembersComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getmember().subscribe(function (data) {
            _this.userdata = data;
            _this.user = _this.userdata.user;
            _this.count = _this.userdata.usercount;
            //  console.log(this.user)
        });
    };
    MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/pages/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/pages/members/members.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wcG9ydHVuaXRpZXMvb3Bwb3J0dW5pdGllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  opportunities works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/opportunities/opportunities.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/opportunities/opportunities.component.ts ***!
  \****************************************************************/
/*! exports provided: OpportunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesComponent", function() { return OpportunitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent() {
    }
    OpportunitiesComponent.prototype.ngOnInit = function () {
    };
    OpportunitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunities',
            template: __webpack_require__(/*! ./opportunities.component.html */ "./src/app/pages/opportunities/opportunities.component.html"),
            styles: [__webpack_require__(/*! ./opportunities.component.css */ "./src/app/pages/opportunities/opportunities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-cat/user-cat.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/user-cat/user-cat.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-pagination{\r\n    font-size: 12px;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination .current{\r\n    background: green;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1jYXQvdXNlci1jYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1jYXQvdXNlci1jYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/user-cat/user-cat.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/user-cat/user-cat.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">User Category</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Add User Category</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" #signupForm=ngForm (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Category Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" [(ngModel)]=\"form.cat_name\"  name=\"cat_name\" required>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput2\">About the  Name</label>\r\n                  <textarea id=\"complaintinput5\" rows=\"5\" class=\"form-control round\" [(ngModel)]=\"form.about\"  name=\"about\" required></textarea>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"form-group\">\r\n                    <label for=\"eventInput3\">Company</label>\r\n                    <input type=\"text\" id=\"eventInput3\" class=\"form-control\" name=\"company\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput4\">Email</label>\r\n                    <input type=\"email\" id=\"eventInput4\" class=\"form-control\" name=\"email\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput5\">Contact Number</label>\r\n                    <input number id=\"eventInput5\" class=\"form-control\" name=\"contact\">\r\n                  </div> -->\r\n\r\n   \r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Save\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"extended\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4 class=\"card-title\">List of the User Category</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table text-center\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th></th>\r\n              <th>Cat Name</th>\r\n              <th>About</th>\r\n              <th>Status</th>\r\n              <th>Created_by</th>\r\n              <th>Created_at</th>\r\n              <th>Updated_at</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!usercat?.length\">\r\n            <tr ><td></td><td></td><td></td><td></td><h3>No Data Found.</h3></tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"usercat?.length\">\r\n            \r\n            <tr *ngFor=\"let u of usercat | paginate: {itemsPerPage: 10, currentPage: p} ; let i=index\">               \r\n              <td>{{i + 1}}</td>\r\n              <td>\r\n                <div class=\"custom-control custom-checkbox m-0\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\r\n                  <label class=\"custom-control-label\" for=\"item1\"></label>\r\n                </div>\r\n              </td>\r\n              <td>{{u.cat_name}}</td>\r\n              <td>{{u.about}}</td>\r\n              <td>{{u.status}}</td>\r\n              <td>{{u.name}}</td>\r\n              <td>{{u.created_at}}</td>\r\n              <td>{{u.updated_at}}</td>\r\n              <td>\r\n                <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\"> -->\r\n                  <!-- <i class=\"ft-user font-medium-3 mr-2\"></i> -->\r\n                <!-- </a> -->\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n                </a>\r\n                <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                  <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          \r\n          </tbody>\r\n        </table>\r\n         \r\n        <div class=\"center\" *ngIf=\"usercat?.length\">\r\n          <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n         \r\n     </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/user-cat/user-cat.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/user-cat/user-cat.component.ts ***!
  \******************************************************/
/*! exports provided: UserCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCatComponent", function() { return UserCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserCatComponent = /** @class */ (function () {
    function UserCatComponent(Jarwis, Token, router) {
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
            cat_name: null,
            about: null,
        };
        this.error = [];
    }
    UserCatComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addusercat(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    UserCatComponent.prototype.handleResponse = function (data) {
        // this.Token.handle(data.access_token);
        this.form.about = "";
        this.form.cat_name = "";
        this.router.navigateByUrl('/user_cat');
        this.ngOnInit();
    };
    UserCatComponent.prototype.handleError = function (error) {
        this.error = error.error.errors;
    };
    UserCatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getusercat().subscribe(function (data) {
            _this.usercat = data;
            //  console.log(this.usercat)
        });
    };
    UserCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-cat',
            template: __webpack_require__(/*! ./user-cat.component.html */ "./src/app/pages/user-cat/user-cat.component.html"),
            styles: [__webpack_require__(/*! ./user-cat.component.css */ "./src/app/pages/user-cat/user-cat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserCatComponent);
    return UserCatComponent;
}());



/***/ }),

/***/ "./src/app/pages/verification/verification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/verification/verification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">Auth</div>\r\n<p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\r\n</div>\r\n</div>\r\n<section id=\"extended\">\r\n<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h4 class=\"card-title\">Auth Data ({{count}})</h4>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body table-responsive\">\r\n      <table class=\"table text-center\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <!-- <th></th> -->\r\n            <th>Name</th>\r\n            <th>Department</th>\r\n            <th>Matric NO</th>\r\n            <!-- <th>Created_at</th> -->\r\n            <!-- <th>Updated_at</th> -->\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"!auth?.length\">\r\n          <tr ><td></td><td></td><h3>No Data Found.</h3></tr><tr></tr>\r\n         </tbody>\r\n         <tbody *ngIf=\"auth?.length\">\r\n           \r\n           <tr *ngFor=\"let u of auth | paginate: {itemsPerPage: 50, currentPage: p} ; let i=index\">               \r\n             <td>{{i + 1}}</td>\r\n            \r\n            <td>{{u.fullname}}</td>\r\n              <td>{{u.dept}}</td>\r\n              <td>{{u.matric_no}}</td>\r\n              <!-- <td>{{u.created_at}}</td> -->\r\n              <!-- <td>{{u.updated_at}}</td> -->\r\n            <td>\r\n              <!-- <a class=\"info p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-user font-medium-3 mr-2\"></i>\r\n              </a> -->\r\n              <a class=\"success p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\r\n              </a>\r\n              <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\r\n                <i class=\"ft-x font-medium-3 mr-2\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n         \r\n        </tbody>\r\n      </table>\r\n      <div class=\"center\" *ngIf=\"auth?.length\">\r\n        <pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination text-info\"></pagination-controls> \r\n       \r\n   </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n<!--Extended Table Ends-->\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <!-- END : End Main Content-->\r\n\r\n  <!-- BEGIN : Footer-->\r\n  <footer class=\"footer footer-static footer-light\">\r\n    <p class=\"clearfix text-muted text-sm-center px-2\"><span>Copyright  &copy; 2019 <a href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\" id=\"pixinventLink\" target=\"_blank\" class=\"text-bold-800 primary darken-2\">PIXINVENT </a>, All rights reserved. </span></p>\r\n  </footer>\r\n  <!-- End : Footer-->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/verification/verification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.ts ***!
  \**************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jarwis.service */ "./src/app/services/jarwis.service.ts");



var VerificationComponent = /** @class */ (function () {
    function VerificationComponent(Jarwis) {
        this.Jarwis = Jarwis;
    }
    VerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getauth().subscribe(function (data) {
            _this.authdata = data;
            _this.auth = _this.authdata.auth;
            _this.count = _this.authdata.authcount;
            //  console.log(this.user)
            //  console.log(this.auth)
        });
    };
    VerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/pages/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.css */ "./src/app/pages/verification/verification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");




var AuthService = /** @class */ (function () {
    function AuthService(Token) {
        this.Token = Token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.Token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token) {
        this.Token = Token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/jarwis.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/jarwis.service.ts ***!
  \********************************************/
/*! exports provided: JarwisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarwisService", function() { return JarwisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JarwisService = /** @class */ (function () {
    // private baseUrl = 'http://localhost:8000/api';
    // private baseUrl = environment.baseUrl 
    function JarwisService(http) {
        this.http = http;
    }
    JarwisService.prototype.signup = function (data) {
        return this.http.post(this.baseUrl + "/signup", data);
    };
    JarwisService.prototype.login = function (data) {
        return this.http.post(this.baseUrl + "/login", data);
    };
    JarwisService.prototype.sendPasswordResetLink = function (data) {
        return this.http.post(this.baseUrl + "/sendPasswordResetLink", data);
    };
    JarwisService.prototype.changePassword = function (data) {
        return this.http.post(this.baseUrl + "/resetPassword", data);
    };
    JarwisService.prototype.addusercat = function (data) {
        return this.http.post(this.baseUrl + "/addusercat", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.getusercat = function () {
        return this.http.get(this.baseUrl + "/getusercat");
    };
    JarwisService.prototype.addmembercat = function (data) {
        return this.http.post(this.baseUrl + "/addmembercat", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.getmembercat = function () {
        return this.http.get(this.baseUrl + "/getmembercat");
    };
    JarwisService.prototype.addasso = function (data) {
        return this.http.post(this.baseUrl + "/addasso", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.getasso = function () {
        return this.http.get(this.baseUrl + "/getasso");
    };
    JarwisService.prototype.getauth = function () {
        return this.http.get(this.baseUrl + "/getauth");
    };
    JarwisService.prototype.getmember = function () {
        return this.http.get(this.baseUrl + "/getmember");
    };
    JarwisService.prototype.getadmin = function () {
        return this.http.get(this.baseUrl + "/getadmin");
    };
    JarwisService.prototype.updateappsetting = function (data) {
        return this.http.post(this.baseUrl + "/updatesettingapp", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.getappsetting = function () {
        return this.http.get(this.baseUrl + "/getsettingapp");
    };
    JarwisService.prototype.addaboutus = function (data) {
        return this.http.post(this.baseUrl + "/addaboutus", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.getaboutus = function () {
        return this.http.get(this.baseUrl + "/getaboutus");
    };
    JarwisService.prototype.addhomeheader = function (data) {
        return this.http.post(this.baseUrl + "/addhomeheader", data, { headers: {
                Authorization: "Bearer " + localStorage.token
            } });
    };
    JarwisService.prototype.gethomeheader = function () {
        return this.http.get(this.baseUrl + "/gethomeheader");
    };
    JarwisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JarwisService);
    return JarwisService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.iss = {
            login: 'https://testenv.digittechnologies.org/lautech/platform/public/api/login',
            signup: 'https://testenv.digittechnologies.org/lautech/platform/public/api/signup'
            // login: 'http://localhost:8000/api/login',
            // signup: 'http://localhost:8000/api/signup'
            // login: environment.login,
            // signup: environment.signup,
        };
    }
    TokenService.prototype.handle = function (token) {
        this.set(token);
        // console.log(this.isValid());
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.isValid();
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/system-setting/system-setting.component.css":
/*!*************************************************************!*\
  !*** ./src/app/system-setting/system-setting.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1zZXR0aW5nL3N5c3RlbS1zZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/system-setting/system-setting.component.html":
/*!**************************************************************!*\
  !*** ./src/app/system-setting/system-setting.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 main-panel\">\r\n  <!-- BEGIN : Main Content-->\r\n  <div class=\"main-content\">\r\n    <div class=\"content-wrapper\"><!--Extended Table starts-->\r\n<div class=\"row\">\r\n<div class=\"col-12\">\r\n<div class=\"content-header\">System Setting</div>\r\n</div></div>\r\n\r\n\r\n\r\n<div class=\"row match-height\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" id=\"basic-layout-form-center\">Update</h4>\r\n        <p>This example shows a way to center your form in the card. Here we have used <code>.justify-content-md-center\r\n            .row</code> classe to center the form in a full width card. User can always change column classes\r\n          according to his requirements. This example also uses form action buttons in the center bottom position of\r\n          the card.</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"px-3\">\r\n\r\n          <form class=\"form\" [formGroup]=\"submitForm\">\r\n            \r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">App Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"app_name\" >\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Short Name</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"short_name\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Phone No</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"phone_number\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Email 1</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"email1\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Email 2</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"email2\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Address</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"address\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">facebook</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"facebook\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Instagram</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"instagram\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Youtube</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"youtube\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Linedin</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"linkedin\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"eventInput1\">Twitter</label>\r\n                    <input type=\"text\" id=\"eventInput1\" class=\"form-control\" formControlName=\"twitter\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Select logo</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"projectinput8\" (change)=\"uploadFile($event)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-actions center\">\r\n              \r\n              <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-raised btn-primary\">\r\n                <i class=\"fa fa-check-square-o\"></i> Update\r\n              </button>\r\n            </div>\r\n          </form>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/system-setting/system-setting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/system-setting/system-setting.component.ts ***!
  \************************************************************/
/*! exports provided: SystemSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSettingComponent", function() { return SystemSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/jarwis.service */ "./src/app/services/jarwis.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SystemSettingComponent = /** @class */ (function () {
    function SystemSettingComponent(formBuilder, Token, Jarwis, router) {
        this.formBuilder = formBuilder;
        this.Token = Token;
        this.Jarwis = Jarwis;
        this.router = router;
    }
    SystemSettingComponent.prototype.ngOnInit = function () {
        this.submitForm = this.formBuilder.group({
            app_name: [''],
            short_name: [''],
            email1: [''],
            email2: [''],
            facebook: [''],
            phone_number: [''],
            instagram: [''],
            youtube: [''],
            linkedin: [''],
            address: [''],
            twitter: [''],
            id: [''],
        });
        this.displayprofile();
    };
    SystemSettingComponent.prototype.displayprofile = function () {
        var _this = this;
        this.Jarwis.getappsetting().subscribe(function (data) {
            _this.response = data;
            console.log(_this.response);
            _this.submitForm = _this.formBuilder.group({
                app_name: [_this.response.app_name],
                short_name: [_this.response.short_name],
                email1: [_this.response.email1],
                email2: [_this.response.email2],
                facebook: [_this.response.facebook],
                middlename: [_this.response.middlename],
                phone_number: [_this.response.phone_number],
                instagram: [_this.response.instagram],
                youtube: [_this.response.youtube],
                linkedin: [_this.response.linkedin],
                address: [_this.response.address],
                twitter: [_this.response.twitter],
                id: [_this.response.id]
            });
            _this.image = _this.response.image;
        });
    };
    SystemSettingComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var files = event.target.files[0];
        var reader = new FileReader();
        var vm = this;
        reader.onloadend = function () {
            _this.image = reader.result;
        };
        reader.readAsDataURL(files);
    };
    SystemSettingComponent.prototype.onSubmit = function () {
        var _this = this;
        //  console.log(this.submitForm.value)
        this.Jarwis.updateappsetting({ formdata: this.submitForm.value, image: this.image }).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    SystemSettingComponent.prototype.handleError = function (error) {
        // this.disabled=false; 
        this.error = error.error.errors;
        console.log(this.error);
        // this.disabled=false;
        // this.sav= 'Update';
    };
    SystemSettingComponent.prototype.handleResponse = function (data) {
        // this.router.navigateByUrl('/User/(side:Profile)');
        // this.disabled=false;
        // this.sav= 'Updated';
        this.ngOnInit();
    };
    SystemSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-setting',
            template: __webpack_require__(/*! ./system-setting.component.html */ "./src/app/system-setting/system-setting.component.html"),
            styles: [__webpack_require__(/*! ./system-setting.component.css */ "./src/app/system-setting/system-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SystemSettingComponent);
    return SystemSettingComponent;
}());

// }


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    //Local Environment
    // baseUrl: 'http://localhost:8000/api',
    // login: 'http://localhost:8000/api/login',
    // signup: 'http://localhost:8000/api/signup'
    baseUrl: 'http://testenv.digittechnologies.org/lautech/platform/public/api',
    login: 'http://testenv.digittechnologies.org/lautech/platform/public/api/login',
    signup: 'http://testenv.digittechnologies.org/lautech/platform/public/api/signup'
    //PRODUCTION ENVIROMENT
    // baseUrl: 'https://web.preciousmetalstrade.ng/api', 
    // login: 'http://web.preciousmetalstrade.ng/api/entrust',
    // signup: 'http://web.preciousmetalstrade.ng/api/signup'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\lautech\fronts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map