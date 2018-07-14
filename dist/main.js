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

module.exports = "<app-navbar></app-navbar>\n\n<p>\n  admin works!\n</p>\n"

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

module.exports = ".hidden{\n    display:none;\n}\n.show{\n    display:block;\n}\n#modal-container {\n    position:  fixed;\n    top: 300px;\n    left: 50%;\n    width: 375px;\n    background: white;\n    margin-left: -187.5px;\n    text-align: center;\n    box-shadow: 0px 0px 2px 1px black;\n    z-index: 100;\n}\n#overlay {\n    position: absolute;\n    top: 0px;\n    left:  0px;\n    z-index:  99;\n    background:  rgba(0,0,0,0.8);\n    width:  100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin\" id=\"fullPage\">\n  <app-header></app-header>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>  "

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
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
    },
    {
        path: 'share',
        component: _share_share_component__WEBPACK_IMPORTED_MODULE_23__["ShareComponent"]
    },
    {
        path: 'home',
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_22__["AuthguardGuard"]],
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    },
    {
        path: 'feed',
        component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_17__["FeedComponent"]
    },
    {
        path: 'map',
        component: _map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"]
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
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_17__["FeedComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_23__["ShareComponent"]
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
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"]
            ],
            entryComponents: [],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _authguard_guard__WEBPACK_IMPORTED_MODULE_22__["AuthguardGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user, db, router, http) {
        this.user = user;
        this.db = db;
        this.router = router;
        this.http = http;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('/userAuth').doc('VQ3Y5ufxgGSAChehiMhY').valueChanges().subscribe(function (results) {
                _this.users = results['authentication'];
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.user.username == _this.users[i].username) {
                        if (_this.user.password == _this.users[i].password) {
                            resolve(true);
                            return;
                        }
                    }
                }
                _this.router.navigate(['']);
                resolve(false);
            });
        });
    };
    AuthguardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthguardGuard);
    return AuthguardGuard;
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

module.exports = "<app-navbar></app-navbar>\n\n<p>\n  feed works!\n</p>\n"

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

module.exports = ".center {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loggedIn\">        \n    <!-- Footer -->\n    <footer class=\"dark-footer\">\n\n            <!--Footer Links-->\n            <div class=\"footer-container green-footer\">\n        \n                <!-- Single Column footer -->\n                <div class=\"row single-col-footer\">\n                    <!--Grid column-->\n                    <div class=\"col-md-12 col-lg-12\">\n                        <p class=\"h6 footer-copyright text-center\">Copyright &copy; {{year}} Viasat,Inc.(v1.0.0)</p>\n                    </div>\n                    <!--Grid column-->\n                </div>\n                <!-- End Single Column footer -->\n        \n            </div>\n        \n            <div class=\"footer-container\">\n                <!-- Three Column Footer -->\n                <div class=\"row three-column-footer\">\n                    <!--Grid column-->\n                    <div class=\"col-md-12 col-md-3 col-lg-3\">\n                        <p class=\"h6 footer-copyright text-left\"><a routerLink='/home'>Home  </a>\n                            <a routerLink='/feed'>  Feed  </a><a routerLink='/map'>  Map  </a>\n                            <a routerLink='/admin'> Admin</a></p>\n                    </div>\n                    <!--Grid column-->\n                    <div class=\"col-md-12 col-md-6 col-lg-6\"></div> \n                    <!--Grid column-->\n                    <div class=\"col-md-12 col-md-3 col-lg-3\">\n                        <a data-track-content data-content-name=\"Footer-multi level\" data-content-piece=\"f_link_logo_1\" href=\"javascript:void(0);\"><img src=\"http://ux.viasat.io/wp-content/uploads/2017/12/logo_viasat_white.png\" class=\"footer-logo\" alt=\"Viasat Logo : Click to go back to homepage\"></a>\n                    </div>\n                    <!--Grid column-->\n        \n                </div>\n                <!-- End of Three Column Footer -->\n        \n            </div>\n        \n        </footer>\n        <!-- End of Footer -->\n</ng-container>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* FooterComponent is the footer element that displays at the bottom of each page
 * and has navigation links as well as styling.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loggedIn = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this.router.url == "/") {
                    _this.loggedIn = false;
                }
                else {
                    _this.loggedIn = true;
                }
            }
        });
        this.year = new Date().getFullYear();
        // this.router.events
        // .subscribe((event) => {
        //   if(event instanceof NavigationEnd ){
        //     debugger;
        //     if(this.router.url == "/"){
        //       this.loggedIn = false;
        //     } else {
        //       this.loggedIn = true;
        //       this.userService.getRole().then(res => {
        //         this.myRole = res['loggedInUserRole'];
        //         this.isAdmin = res['loggedInUserRole'] == "Admin";
        //         console.log(this.isAdmin);
        //       })
        //     }
        //   }
        // });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logowidth{\n\twidth: 95px;\n}\n\n.betaheader {\n\tcolor: red;\n\tfont-style: italic;\n}\n\nheader {\n\ttext-align: center;\n\tpadding: 20px 0px;\n\tfont-size: 30px;\n\tborder-bottom: 2px solid #eee;\n}\n\n.pushright{\n\tfloat: right !important;\n}\n\n.padmarzero {\n\tpadding: 0 !important;\n\tmargin: 0 !important;\n}\n\n.padzero {\n\tpadding: 0 !important;\n}\n\n.logout {\n\tcolor: black;\n}\n\nh2 {\n\tmargin-top: 15px;\n    margin-left: 5px;\n\tmargin-bottom: 0px;\n}\n\n.logout {\n\tfont-size: 1em;\n\ttext-align: left;\n}\n\n.page-logo { \n\tdisplay: block;\n    margin-left: auto;\n    margin-right: auto;\n\twidth: 50%;\n}\n\n.table th {\n\ttext-align: center;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!loggedIn\">\n  <div class=\"container padzero\">\n   <div class=\"row padmarzero\">\n    <div class=\"col-md-2 col-lg-2 col-sm-2 col-xs-2\">\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-sm-8 col-xs-8\">\n      <a routerLink=\"/home\">\n          <img class=\"img-responsive page-logo\" src=\"assets/viasat.png\"/>\n      </a>\n    </div>\n   <div class=\"col-md-2 col-lg-2 col-sm-2 col-xs-2\"></div>\n   </div>\n  </div>\n  </ng-container>\n  \n  <ng-container *ngIf=\"loggedIn\">\n    <div class=\"fw hdr\">\n      <!-- HEADER -->\n        <div class=\"hdr-bg\"></div>\n        <div class=\"hdr fw-vp\">\n          <div class=\"hdr-brand\">\n            <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logo_1\" href=\"#\"><img src=\"http://ux.viasat.io/wp-content/uploads/2017/11/viasat-grd-logo.png\" class=\"\" alt=\"Viasat Logo : Click to go back to homepage\"></a>\n          </div>\n          <div class=\"hdr-utility\">\n            <button data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_1\" type=\"search\" class=\"btn btn-hdr\" name=\"search\" value=\"Search\" data-toggle=\"modal\" data-target=\"#searchModal\">\n              <i class=\"material-icons md-icon\">search</i>\n            </button>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"btn btn-hdr avatar-container\"> \n                <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_user_1\" href=\"#\" class=\"avatar-icon\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"modal\" data-target=\"#profileModal\" aria-expanded=\"false\">{{ this.username }}<span class=\"nav-arrow\" role=\"drop down arrow\"></span></a> \n              </li> \n            </ul>\n            <button (click)=\"user.logOutCurrentUser()\" class=\"btn btn-hdr\">  \n              <b>Log Out  </b>\n              <i class=\"material-icons md-icon\">exit_to_app</i>\n            </button>\n          </div>\n          <!--<div class=\"placeholder-div text-center\"><span class=\"h3\">Header FPO</span></div>-->\n          <!-- Search Modal -->\n          <div class=\"modal fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n            <div class=\"modal-dialog search-modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                </div>\n                <div class=\"modal-body\">\n              <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-12\">\n                        <div id=\"imaginary_container\"> \n                            <div class=\"input-group stylish-input-group\">\n                                <input type=\"text\" class=\"form-control\"  placeholder=\"Search any keyword\" >\n                                <span class=\"input-group-addon\">\n                                    <button data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_sec_1\" type=\"submit\">\n                                        <i class=\"material-icons md-icon md-search-icon\">search</i>\n                                    </button>  \n                                </span>\n                            </div>\n                        </div>\n                    </div>\n              </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End of Search Modal -->\n          <!-- Profile Modal -->\n          <div class=\"modal fade\" id=\"profileModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n            <div class=\"modal-dialog profile-modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                </div>\n                <div class=\"modal-body\">\n                  <h1>{{ this.username }}</h1>\n                </div>\n                <div class=\"modal-footer\">\n                  <ul class=\"nav nav-tabs\">\n                    <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logout_1\"  data-toggle=\"tab\" href=\"#tab-three\">Log Out</a></li>\n                    <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_settings_1\"  data-toggle=\"tab\" href=\"#tab-two\">Settings</a></li> \n                <li tabindex=\"0\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_profile_sec_1\"  data-toggle=\"tab\" href=\"#tab-one\">Profile</a></li>       \n                </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End of Profile Modal -->\n        </div>\n        <!-- TOP NAVBAR -->\n        <div class=\"hdr-navbar hide-desktop\"> <!-- add dark class for 'dark\" nav-->\n          <div class=\"navbar yamm fw-vp\">\n            <div class=\"navbar-header\">\n              <div class=\"hdr-brand hide-desktop\"><a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logo_1\" href=\"#\"><img src=\"http://ux.viasat.io/wp-content/uploads/2017/11/viasat-grd-logo.png\" class=\"\" alt=\"Viasat Logo : Click to go back to homepage\"></a></div>\n              <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-grid\" class=\"navbar-toggle collapsed\" tabindex=\"0\" touchstart=\"\">\n                <div class=\"menu-text\">MENU</div>\n                <div class=\"menu-icon\">\n                  <span class=\"icon-bar top-bar\"></span>\n                  <span class=\"icon-bar middle-bar\"></span>\n                  <span class=\"icon-bar bottom-bar\"></span>\n                </div>\n              </button>\n            </div>\n            <div id=\"navbar-collapse-grid\" class=\"navbar-collapse collapse\">\n              <ul class=\"nav navbar-nav\" role=\"tablist\">\n                <li>\n                  <form class=\"navbar-form hide-desktop\"> \n                    <div class=\"form-group\"> \n                      <input class=\"form-control\" placeholder=\"Search keywords\">\n                      <i data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_search_2\" class=\"material-icons utility-nav-search-icon\">search</i>\n                    </div> \n                  </form>\n                </li>\n      \n                <!-- Navigation goes here -->\n      \n                <li class=\"hide-desktop\">\n                  <span class=\"utitlity-nav-divider\"></span>\n                </li>\n                <li class=\"hide-desktop\">\n                  <a href=\"#\" class=\"user-profile utility-nav-mobile\">\n                    <h3>{{ this.username }}</h3>\n                  </a>\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_profile_sec_1\" href=\"#\" class=\"utility-nav-mobile\">View profile <i class=\"material-icons utility-nav-profile-icon\">person_outline</i>\n                  </a>\n                </li>\n                <li class=\"hide-desktop\">\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_button_notif_1\" href=\"#\" class=\"utility-nav-mobile\">Notifications <i class=\"material-icons md-icon utility-nav-notification-icon\">notifications_none</i><span class=\"badge badge-notify\">3</span></a>\n                </li>\n                <li class=\"hide-desktop\">\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_settings_1\" href=\"#\" class=\"utility-nav-mobile utility-nav-settings\">Settings <i class=\"material-icons utility-nav-settings-icon\">settings</i></a>\n                </li>\n                <li class=\"hide-desktop\">\n                  <a data-track-content data-content-name=\"Header-utility\" data-content-piece=\"h_link_logout_1\" href=\"#\" class=\"utility-nav-mobile utility-nav-logout\">Logout</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <!-- ** TOP NAVBAR ** -->\n      </div>\n  \n  </ng-container>\n"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UserObject } from '../userobject';
/* HeaderComponent is the header element that displays at the top of
 * each page and has log out functionality as well as search and a
 * logo that links back home.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loggedIn = false;
        // myUser : UserObject;
        this.username = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this.router.url == "/") {
                    _this.loggedIn = false;
                }
                else {
                    _this.loggedIn = true;
                }
            }
        });
        this.username = this.userService.username;
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "div.gallery {\n    margin: 30px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 300px;\n}\n\ndiv.gallery:hover {\n    border: 1px solid #777;\n}\n\ndiv.gallery img {\n    position: relative;\n    width:  300px;\n    height: 300px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid text-center\">\n  <ul>\n    <li *ngFor=\"let user of users | async\">\n        <pre>{{user.name}}</pre>\n    </li>\n  </ul>\n\n<div class=\"gallery\" *ngFor=\"let image of images\">\n  <a target=\"_blank\" href=\"/share\">\n    <img src=\"{{image.url}}\" alt=\"Cinque Terre\" width=\"300\" height=\"200\">\n  </a>\n  <div class=\"desc\">Posted by: {{image.username}}</div>\n</div>\n\n</body>\n</html>"

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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container centerpage\">\n\n  <!-- <div class=\"col-md-4 col-md-offset-4\"></div> -->\n\n  <div class=\"col-md-4 col-md-offset-4\">\n   <br>\n   <br>\n    <section>\n      <div class=\"panel panel-default\">\n        <h3 class=\"text-center\"><b>Sign In</b></h3>\n        <div class=\"panel-body\">\n          <form (submit)=\"authenticateCurrentUser($event)\">\n          <div class=\"input-group input-group-lg\">\n            <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" placeholder=\"Enter Username\" aria-describedby=\"sizing-addon1\" required>\n          </div>\n          <br>\n          <div class=\"input-group input-group-lg\">\n            <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\"></i></span>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Enter Password\" aria-describedby=\"sizing-addon1\" required>\n          </div>\n          <br>\n           <button type=\"submit\" class=\"btn btn-block myclass\">Sign in</button>\n          <br>\n          </form>\n        </div>\n      </div>\n    </section>\n  </div> \n\n  <!-- <div class=\"col-md-4 col-md-offset-4\"></div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* LoginFormComponent is the page where users authenticate
 * their credentials with the Viasat LDAP server. It acts as
 * the wall that users must get past to use PlanWizard.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, router, http) {
        this.user = user;
        this.router = router;
        this.http = http;
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authenticateCurrentUser = function (e) {
        e.preventDefault();
        this.user.setUser(e.target.elements[0].value);
        this.user.setPass(e.target.elements[1].value);
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<app-navbar></app-navbar>\n\n<p>\n  map works!\n</p>\n"

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

/***/ "./src/app/share/share.component.css":
/*!*******************************************!*\
  !*** ./src/app/share/share.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/share.component.html":
/*!********************************************!*\
  !*** ./src/app/share/share.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  share works!\n</p>"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
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

var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
        this.username = "";
        this.password = "";
        this.loggedIn = false;
    }
    UserService.prototype.setUser = function (user) {
        this.username = user;
    };
    UserService.prototype.setPass = function (pass) {
        this.password = pass;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/jmo/Documents/viaStory-console/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map