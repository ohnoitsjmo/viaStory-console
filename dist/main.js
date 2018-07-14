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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin\" id=\"fullPage\">\r\n  <app-header></app-header>\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  <div>\r\n  <app-footer></app-footer>\r\n</div>  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    },
    {
        path: 'feed',
        component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_18__["FeedComponent"]
    },
    {
        path: 'map',
        component: _map_map_component__WEBPACK_IMPORTED_MODULE_20__["MapComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_18__["FeedComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_20__["MapComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]
            ],
            entryComponents: [],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feed works!\n</p>\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-success\">\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  gallery works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logowidth{\r\n\twidth: 95px;\r\n}\r\n\r\n.betaheader {\r\n\tcolor: red;\r\n\tfont-style: italic;\r\n}\r\n\r\nheader {\r\n\ttext-align: center;\r\n\tpadding: 20px 0px;\r\n\tfont-size: 30px;\r\n\tborder-bottom: 2px solid #eee;\r\n}\r\n\r\n.pushright{\r\n\tfloat: right !important;\r\n}\r\n\r\n.padmarzero {\r\n\tpadding: 0 !important;\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.padzero {\r\n\tpadding: 0 !important;\r\n}\r\n\r\n.logout {\r\n\tcolor: black;\r\n}\r\n\r\nh2 {\r\n\tmargin-top: 15px;\r\n    margin-left: 5px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.logout {\r\n\tfont-size: 1em;\r\n\ttext-align: left;\r\n}\r\n\r\n.page-logo { \r\n\tdisplay: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\twidth: 50%;\r\n}\r\n\r\n.table th {\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!loggedIn\">\r\n  <div class=\"container padzero\">\r\n   <div class=\"row padmarzero\">\r\n    <div class=\"col-md-2 col-lg-2 col-sm-2 col-xs-2\">\r\n    </div>\r\n    <div class=\"col-md-8 col-lg-8 col-sm-8 col-xs-8\">\r\n      <a routerLink=\"/home\">\r\n          <img class=\"img-responsive page-logo\" src=\"assets/viasat.png\"/>\r\n      </a>\r\n    </div>\r\n   <div class=\"col-md-2 col-lg-2 col-sm-2 col-xs-2\"></div>\r\n   </div>\r\n  </div>\r\n  </ng-container>\r\n  \r\n  <ng-container *ngIf=\"loggedIn\">\r\n    <div class=\"fw hdr\">\r\n      <!-- HEADER -->\r\n        <div class=\"hdr-bg\"></div>\r\n        <div class=\"hdr fw-vp\">\r\n          <div class=\"hdr-brand\">\r\n            <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logo_1\" href=\"#\"><img src=\"http://ux.viasat.io/wp-content/uploads/2017/11/viasat-grd-logo.png\" class=\"\" alt=\"Viasat Logo : Click to go back to homepage\"></a>\r\n          </div>\r\n          <div class=\"hdr-utility\">\r\n            <button data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_1\" type=\"search\" class=\"btn btn-hdr\" name=\"search\" value=\"Search\" data-toggle=\"modal\" data-target=\"#searchModal\">\r\n              <i class=\"material-icons md-icon\">search</i>\r\n            </button>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n              <li class=\"btn btn-hdr avatar-container\"> \r\n                <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_user_1\" href=\"#\" class=\"avatar-icon\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"modal\" data-target=\"#profileModal\" aria-expanded=\"false\">{{ myUser.givenName }}<span class=\"nav-arrow\" role=\"drop down arrow\"></span></a> \r\n              </li> \r\n            </ul>\r\n            <button (click)=\"user.logOutCurrentUser()\" class=\"btn btn-hdr\">  \r\n              <b>Log Out  </b>\r\n              <i class=\"material-icons md-icon\">exit_to_app</i>\r\n            </button>\r\n          </div>\r\n          <!--<div class=\"placeholder-div text-center\"><span class=\"h3\">Header FPO</span></div>-->\r\n          <!-- Search Modal -->\r\n          <div class=\"modal fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n            <div class=\"modal-dialog search-modal-dialog\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-12\">\r\n                        <div id=\"imaginary_container\"> \r\n                            <div class=\"input-group stylish-input-group\">\r\n                                <input type=\"text\" class=\"form-control\"  placeholder=\"Search any keyword\" >\r\n                                <span class=\"input-group-addon\">\r\n                                    <button data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_sec_1\" type=\"submit\">\r\n                                        <i class=\"material-icons md-icon md-search-icon\">search</i>\r\n                                    </button>  \r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n              </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End of Search Modal -->\r\n          <!-- Profile Modal -->\r\n          <div class=\"modal fade\" id=\"profileModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n            <div class=\"modal-dialog profile-modal-dialog\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <h1>{{ myUser.displayName }}</h1>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <ul class=\"nav nav-tabs\">\r\n                    <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logout_1\"  data-toggle=\"tab\" href=\"#tab-three\">Log Out</a></li>\r\n                    <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_settings_1\"  data-toggle=\"tab\" href=\"#tab-two\">Settings</a></li> \r\n                <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_profile_sec_1\"  data-toggle=\"tab\" href=\"#tab-one\">Profile</a></li>       \r\n                </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End of Profile Modal -->\r\n        </div>\r\n        <!-- TOP NAVBAR -->\r\n        <div class=\"hdr-navbar hide-desktop\"> <!-- add dark class for 'dark\" nav-->\r\n          <div class=\"navbar yamm fw-vp\">\r\n            <div class=\"navbar-header\">\r\n              <div class=\"hdr-brand hide-desktop\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logo_1\" href=\"#\"><img src=\"http://ux.viasat.io/wp-content/uploads/2017/11/viasat-grd-logo.png\" class=\"\" alt=\"Viasat Logo : Click to go back to homepage\"></a></div>\r\n              <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-grid\" class=\"navbar-toggle collapsed\" tabindex=\"0\" touchstart=\"\">\r\n                <div class=\"menu-text\">MENU</div>\r\n                <div class=\"menu-icon\">\r\n                  <span class=\"icon-bar top-bar\"></span>\r\n                  <span class=\"icon-bar middle-bar\"></span>\r\n                  <span class=\"icon-bar bottom-bar\"></span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div id=\"navbar-collapse-grid\" class=\"navbar-collapse collapse\">\r\n              <ul class=\"nav navbar-nav\" role=\"tablist\">\r\n                <li>\r\n                  <form class=\"navbar-form hide-desktop\"> \r\n                    <div class=\"form-group\"> \r\n                      <input class=\"form-control\" placeholder=\"Search keywords\">\r\n                      <i data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_2\" class=\"material-icons utility-nav-search-icon\">search</i>\r\n                    </div> \r\n                  </form>\r\n                </li>\r\n      \r\n                <!-- Navigation goes here -->\r\n      \r\n                <li class=\"hide-desktop\">\r\n                  <span class=\"utitlity-nav-divider\"></span>\r\n                </li>\r\n                <li class=\"hide-desktop\">\r\n                  <a href=\"#\" class=\"user-profile utility-nav-mobile\">\r\n                    <!-- <h3>{{ myUser.displayName }}</h3> -->\r\n                    <h3>Mark</h3>\r\n                  </a>\r\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_profile_sec_1\" href=\"#\" class=\"utility-nav-mobile\">View profile <i class=\"material-icons utility-nav-profile-icon\">person_outline</i>\r\n                  </a>\r\n                </li>\r\n                <li class=\"hide-desktop\">\r\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_notif_1\" href=\"#\" class=\"utility-nav-mobile\">Notifications <i class=\"material-icons md-icon utility-nav-notification-icon\">notifications_none</i><span class=\"badge badge-notify\">3</span></a>\r\n                </li>\r\n                <li class=\"hide-desktop\">\r\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_settings_1\" href=\"#\" class=\"utility-nav-mobile utility-nav-settings\">Settings <i class=\"material-icons utility-nav-settings-icon\">settings</i></a>\r\n                </li>\r\n                <li class=\"hide-desktop\">\r\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logout_1\" href=\"#\" class=\"utility-nav-mobile utility-nav-logout\">Logout</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- ** TOP NAVBAR ** -->\r\n      </div>\r\n  \r\n  </ng-container>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserService } from '../user.service';
// import { UserObject } from '../userobject';
/* HeaderComponent is the header element that displays at the top of
 * each page and has log out functionality as well as search and a
 * logo that links back home.
 */
var HeaderComponent = /** @class */ (function () {
    // myUser : UserObject;
    function HeaderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.loggedIn = false;
    } //,private user:UserService) { }
    HeaderComponent.prototype.ngOnInit = function () {
        this.loggedIn = true;
        //   this.router.events
        //   .subscribe((event) => {
        //     if(event instanceof NavigationEnd ){
        //       debugger;
        //       if(this.router.url == "/"){
        //         this.loggedIn = false;
        //       } else {
        //         this.loggedIn = true;
        //       }
        //     }
        //     this.user.getUser().subscribe((res) => {
        //       if(res['isAuthenticated'] == true) {
        //         this.myUser = this.user.createUserObject(res['username'], res['email'], res['givenName'], res['displayName']);
        //       }
        //     });
        //   })
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid text-center\">\r\n  <ul>\r\n    <li *ngFor=\"let user of users | async\">\r\n        <pre>{{user.name}}</pre>\r\n    </li>\r\n  </ul>\r\n\r\n  <div *ngFor=\"let image of images\">\r\n    <img src=\"{{image.url}}\"/>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        var _this = this;
        this.db = db;
        this.users = db.collection('/users').valueChanges();
        db.collection('/posts').doc('Image').valueChanges().subscribe(function (results) {
            _this.images = results['images'];
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fw\">\n    <!-- TOP NAVBAR -->\n      <div class=\"hdr-bg hide-desktop\"></div>\n    <div class=\"hdr-navbar\"> <!-- add dark class for 'dark\" nav-->\n      <div class=\"navbar yamm fw-vp\">\n        <div class=\"navbar-header\">\n          <div class=\"hdr-brand hide-desktop\"><a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"h_link_logo_1\" href=\"#\"><img src=\"http://10.60.94.73/wp-content/uploads/2017/11/viasat-grd-logo.png\" class=\"\" alt=\"Viasat Logo : Click to go back to homepage\"></a></div>\n          <button data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_button_hammenu_1\" cc=\"nav_button_hammenu_1\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-grid\" class=\"navbar-toggle collapsed\" tabindex=\"0\" touchstart=\"\">\n            <div class=\"menu-text\">MENU</div>\n            <div class=\"menu-icon\">\n              <span class=\"icon-bar top-bar\"></span>\n              <span class=\"icon-bar middle-bar\"></span>\n              <span class=\"icon-bar bottom-bar\"></span>\n            </div>\n          </button>\n        </div>\n        <div id='overlay'></div>\n        <div id=\"navbar-collapse-grid\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\" role=\"tablist\">\n\n            <!-- <li class=\"dropdown yamm classic\">\n              <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_home\" cc=\"primary_link_home\" href=\"/home\" aria-expanded=\"false\" touchstart=\"\">Home</a>\n            </li>\n\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_create\" cc=\"primary_link_create\" href=\"/create\" aria-expanded=\"false\" touchstart=\"\">Create</a>\n            </li>\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_admin\" cc=\"primary_link_admin\" href=\"/build\" aria-expanded=\"false\" touchstart=\"\">Build</a>\n            </li>\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_admin\" cc=\"primary_link_admin\" href=\"/admin\" aria-expanded=\"false\" touchstart=\"\">Admin</a>\n            </li> -->\n  \n            <!-- Utility Nav Mobile Search <li> goes here -->\n<!--   \n            <li class=\"dropdown yamm classic active\"><a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_1\" cc=\"primary_link_1\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\" aria-expanded=\"false\" touchstart=\"\">Primary one <span class=\"nav-arrow\" role=\"drop down arrow\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <div>\n                    <ul>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_1_1\" cc=\"nav_link_sec_1_1 active_link\" class=\"active\" tabindex=\"0\" touchstart=\"\">Secondary item one</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_1_2\" cc=\"nav_link_sec_1_2\" tabindex=\"0\" touchstart=\"\">Secondary item two</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_1_3\" cc=\"nav_link_sec_1_3\" tabindex=\"0\" touchstart=\"\">Secondary item three</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_1_4\" cc=\"nav_link_sec_1_4\" tabindex=\"0\" touchstart=\"\">Secondary item four</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_1_5\" cc=\"nav_link_sec_1_5\" tabindex=\"0\" touchstart=\"\">Secondary item five</li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n  \n            <li class=\"dropdown yamm classic\"><a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_2\" cc=\"primary_link_2\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\" aria-expanded=\"false\" touchstart=\"\">Primary two <span class=\"nav-arrow\" role=\"drop down arrow\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <div>\n                    <ul>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_2_1\" cc=\"nav_link_sec_2_1\" tabindex=\"0\" touchstart=\"\">Secondary item one</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_2_2\" cc=\"nav_link_sec_2_2\" tabindex=\"0\" touchstart=\"\">Secondary item two</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_2_3\" cc=\"nav_link_sec_2_3\" tabindex=\"0\" touchstart=\"\">Secondary item three</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_2_4\" cc=\"nav_link_sec_2_4\" tabindex=\"0\" touchstart=\"\">Secondary item four</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_2_5\" cc=\"nav_link_sec_2_5\" tabindex=\"0\" touchstart=\"\">Secondary item five</li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            \n            <li class=\"dropdown yamm classic\"><a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_3\" cc=\"primary_link_3\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\" aria-expanded=\"false\" touchstart=\"\">Primary three <span class=\"nav-arrow\" role=\"drop down arrow\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <div>\n                    <ul>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_3_1\" cc=\"nav_link_sec_3_1\" tabindex=\"0\" touchstart=\"\">Secondary item one</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_3_2\" cc=\"nav_link_sec_3_2\" tabindex=\"0\" touchstart=\"\">Secondary item two</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_3_3\" cc=\"nav_link_sec_3_3\" tabindex=\"0\" touchstart=\"\">Secondary item three</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_3_4\" cc=\"nav_link_sec_3_4\" tabindex=\"0\" touchstart=\"\">Secondary item four</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_3_5\" cc=\"nav_link_sec_3_5\" tabindex=\"0\" touchstart=\"\">Secondary item five</li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            \n            <li class=\"dropdown yamm classic\"><a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_4\" cc=\"primary_link_4\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\" aria-expanded=\"false\" touchstart=\"\">Primary four <span class=\"nav-arrow\" role=\"drop down arrow\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <div>\n                    <ul>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_4_1\" cc=\"nav_link_sec_4_1\" tabindex=\"0\" touchstart=\"\">Secondary item one</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_4_2\" cc=\"nav_link_sec_4_2\" tabindex=\"0\" touchstart=\"\">Secondary item two</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_4_3\" cc=\"nav_link_sec_4_3\" tabindex=\"0\" touchstart=\"\">Secondary item three</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_4_4\" cc=\"nav_link_sec_4_4\" tabindex=\"0\" touchstart=\"\">Secondary item four</li>\n                      <li data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"nav_link_sec_4_5\" cc=\"nav_link_sec_4_5\" tabindex=\"0\" touchstart=\"\">Secondary item five</li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li> -->\n  \n            <!-- Classic -->\n            <li class=\"dropdown yamm classic\">\n              <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_home\" cc=\"primary_link_home\" routerLink=\"/home\" aria-expanded=\"false\" touchstart=\"\">Home</a>\n            </li>\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_create\" cc=\"primary_link_feed\" routerLink=\"/feed\" aria-expanded=\"false\" touchstart=\"\">Feed</a>\n            </li>\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_admin\" cc=\"primary_link_map\" routerLink=\"/map\" aria-expanded=\"false\" touchstart=\"\">Map</a>\n            </li>\n            <li class=\"dropdown yamm classic\">\n                <a data-track-content data-content-name=\"Navigation-global-horizontal\" data-content-piece=\"primary_link_admin\" cc=\"primary_link_admin\" routerLink=\"/admin\" aria-expanded=\"false\" touchstart=\"\">Admin</a>\n            </li>\n  \n            <!-- Utility Nav Mobile Profile, Notifications, Settings and Logout <li> goes here -->\n  \n          </ul>\n        </div>\n      <!-- ** TOP NAVBAR ** -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { UserService } from '../user.service';
/* NavbarComponent is the navigation bar element that controls
 * routing throughout PlanWizard. It conditionally shows pages
 * a user can access based on their user role.
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.userService.getRole().then(res => {
        //   this.myRole = res['role'];
        //   this.isAdmin = res['role'] == "admin";
        // })
        // this.userService.getRole().then(res => {
        //   console.log(res);
        //   this.myRole = res['loggedInUserRole'];
        //   this.isAdmin = res['loggedInUserRole'] == "Admin";
        // })
        this.myRole = "Admin";
        this.isAdmin = true;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDNF_ZIslqSFgu_B4E06ekQ1BSStxmWcOk",
        authDomain: "viastory-bddea.firebaseapp.com",
        databaseURL: "https://viastory-bddea.firebaseio.com",
        projectId: "viastory-bddea",
        storageBucket: "viastory-bddea.appspot.com",
        messagingSenderId: "620967419983"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pangj\Documents\Viasat-Hackathon\viaStory-console\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map