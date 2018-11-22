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

module.exports = "<router-outlet></router-outlet>"

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

 // Added
var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'my-app';
        this._router.navigate(['/home']);
    }
    AppComponent.prototype.test = function () {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/test']);
        // console.log('test');
        // this._router.navigateByUrl('src/app/teste/test.html');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/server */ "./src/providers/server.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./madeByme/madeByme */ "./src/app/madeByme/madeByme.ts");
/* harmony import */ var _solved_solved__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solved/solved */ "./src/app/solved/solved.ts");
/* harmony import */ var _liked_liked__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liked/liked */ "./src/app/liked/liked.ts");
/* harmony import */ var _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ranking/ranking */ "./src/app/ranking/ranking.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post */ "./src/app/post/post.ts");
/* harmony import */ var _feed_feed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feed/feed */ "./src/app/feed/feed.ts");
/* harmony import */ var _ranking_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ranking/grd-filter.pipe */ "./src/app/ranking/grd-filter.pipe.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/shared/confirm-equal-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Router } from '@angular/router'; // Added
// import { RouterModule } from '@angular/router';






// Pages










var appRoutes = [
    // { path: 'home', component: AppComponent },
    { path: 'home', component: _home_home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'madeByme', component: _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__["MadeByMeComponent"] },
    { path: 'solved', component: _solved_solved__WEBPACK_IMPORTED_MODULE_11__["SolvedComponent"] },
    { path: 'liked', component: _liked_liked__WEBPACK_IMPORTED_MODULE_12__["LikedComponent"] },
    { path: 'ranking', component: _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__["RankingComponent"] },
    { path: 'post', component: _post_post__WEBPACK_IMPORTED_MODULE_14__["PostComponent"] },
    { path: 'feed', component: _feed_feed__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ranking_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["GrdFilterPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__["MadeByMeComponent"],
                _solved_solved__WEBPACK_IMPORTED_MODULE_11__["SolvedComponent"],
                _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__["RankingComponent"],
                _liked_liked__WEBPACK_IMPORTED_MODULE_12__["LikedComponent"],
                _post_post__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _feed_feed__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
                _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_17__["ConfirmEqualValidatorDirective"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]
            ],
            providers: [_providers_server__WEBPACK_IMPORTED_MODULE_3__["ServerProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.css":
/*!*******************************!*\
  !*** ./src/app/feed/feed.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n.search-results{\r\n  height: 100%;\r\n  overflow: scroll;\r\n}\r\na:link {\r\n    text-decoration: none;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n\r\n\r\n\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 14px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 14px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 330px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em\r\n  {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .col-sm-12 > .list-inline > .textleft > p{\r\n    font-size:2vw;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n   z-index: 1;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a\r\n{\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n      z-index: 1;\r\n\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a\r\n   {\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n  }\r\n.card .card-body img{\r\n    width:100%;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 2px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\ninput[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  color: #3366BB;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.borda2{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 0px;\r\n    background-color:#fff;\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 26px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n  text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textl{\r\n\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  font-family: arial;\r\n  font-size: 15px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n  background-color: rgb(242,244,247);\r\n  overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n.card-footer{\r\n  padding: 2px;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.card .card-header img{\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n.card-footer > .card-header p {\r\n  font-size: 2vw;\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\ntop: 2.3em;\r\n}\r\n\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n  z-index: 1;\r\n\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a\r\n{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover\r\n{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n.col-sm-12 > .list-inline > .textleft > p{\r\n  font-size:2vw;\r\n }\r\n}\r\n@media (min-width: 48em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n.col-sm-12 > .list-inline > .textleft > p{\r\n  font-size:1vw;\r\n }\r\n.card .card-header img{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n.card-footer > .card-header img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n.card-footer > .card-header p {\r\n  font-size: 1vw;\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n      z-index: 1;\r\n\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a {\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n{\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/feed/feed.html":
/*!********************************!*\
  !*** ./src/app/feed/feed.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/home\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li>\r\n              <a style=\"margin-bottom:0px\"><input [(ngModel)]=\"searchText\" type=\"text\" class= \"search-txt \" placeholder=\"Pesquisar no Feed\" style=\"border:none; font-weight: 400; margin:0px\"></a>\r\n        </li>\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n  <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content  modal-sm\" >\r\n        <div class=\"modal-header\" >\r\n            <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <div class=\"row\">\r\n            <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\" style=\"text-align: center;\">\r\n          <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"report(post)\">Sim</button>-->\r\n          <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/ Modal box-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Card-->\r\n <div class=\"s-layout__content\">\r\n  <div class=\"mar\">\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngFor=\"let post of posts \">\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n          <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n        </div>\r\n        <p style=\"padding-top:5px;\">\r\n          <a>  {{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b>\r\n          em<br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n          {{post?.local}}\r\n        </p>\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; ;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:100%\">\r\n        <p  style=\"text-align:left;\">\r\n        {{post?.description}}\r\n        </p>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left\">\r\n                  <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;color:#3366BB\"></i></a>\r\n                <a style=\"\r\n                font-size: 14px;color:#3366BB\">  {{post?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right\">\r\n                  <i class=\"fa fa-comments btn btn-link \" style=\"padding-right:13px;\"></i>\r\n                  <a class=\"btn btn-link \" style=\"padding:0;\" (click)=\"post.showcomments=!post.showcomments;\">\r\n                  {{post?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n    </div>\r\n      <div class=\"card-footer\" *ngIf=\"post.showcomments\">\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments;\">\r\n          <div class=\"col-xs-2\" style=\"width:auto;\">\r\n            <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n          </div>\r\n          <p class=\"borda\">\r\n            <a>  {{comment?.name}}</a>\r\n\r\n            <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\" (click)=\"delComment(post)\"></a>\r\n            <br>\r\n            {{comment?.comment}}\r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"textleft inputWithIcon\" >\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\" [(ngModel)]=\"comment\">\r\n      <a (click)=\"newComment(post, comment)\"><i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n </div>\r\n </div>\r\n </div>\r\n  <!--/Card-->\r\n  <script src=\"feed.ts\"></script>\r\n  <div class=\"search-results\"\r\n          infinite-scroll\r\n          [infiniteScrollDistance]=\"2\"\r\n          [infiniteScrollThrottle]=\"300\"\r\n          (scrolled)=\"onScroll()\">\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/feed/feed.ts":
/*!******************************!*\
  !*** ./src/app/feed/feed.ts ***!
  \******************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var FeedComponent = /** @class */ (function () {
    function FeedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.cont = 0;
        this.posts = [];
        this.likedPosts = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    FeedComponent.prototype.onScroll = function () {
        console.log('scrolled!!');
        this.getPosts();
    };
    FeedComponent.prototype.getPosts = function () {
        var _this = this;
        this.server.getFeedDemands({}, '', this.cont).then(function (response) {
            console.log(response);
            console.log(response.json());
            response = response.json();
            for (var i = 0; i < 5; i++) {
                _this.posts.push(response['dados'][i]);
            }
            _this.cont += 5;
        });
    };
    FeedComponent.prototype.like = function (post) {
        //Remove like
        parseInt("post.total_likes", 10);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes -= 1;
                post.gave_like = "false";
                console.log(post.gave_like);
            }).catch(function (error) {
                console.log(error);
            });
        }
        //Add like
        else {
            this.server.likeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes += 1;
                post.gave_like = "true";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    FeedComponent.prototype.newComment = function (post, comment) {
        //Add comment
        this.server.commentDemand(this.server.token, post.demand_id, comment).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    FeedComponent.prototype.delComment = function (post) {
        //Delete comment
        this.server.deleteComment(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    FeedComponent.prototype.report = function (post) {
        var _this = this;
        this.server.reportDemand(this.server.token, 1).then(function (response) {
            console.log(response);
            _this.closeModalDangerButton.nativeElement.click();
        }).catch(function (error) {
            console.log(error);
        });
    };
    FeedComponent.prototype.changeInfo = function (accessToken, image, email, password, pswconfirm) {
        var _this = this;
        this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(function (response) {
            console.log(response);
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDangerButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "closeModalDangerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "closeModalChangeButton", void 0);
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.html */ "./src/app/feed/feed.html"),
            styles: [__webpack_require__(/*! ./feed.css */ "./src/app/feed/feed.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/home/home.css":
/*!*******************************!*\
  !*** ./src/app/home/home.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*CSS PAGINA INICIAL*/\r\n\r\nbody {\r\n\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n\tmargin: 10px 5px;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n.banner{\r\n\tbackground: url('bg-banner.jpg') no-repeat center top;\r\n  background-size: cover;\r\n\tmin-height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.bg-color{\r\n\tbackground-color: RGBA(12, 11, 11, 0.60);\r\n\tmin-height: 100%;\r\n}\r\n\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n    margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n    color: #fff;\r\n\r\n}\r\n\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n.padleft-right{\r\n    padding-left: 5px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.big-text{\r\n    font-size: 35px;\r\n}\r\n\r\n.small-text{\r\n    font-size: 16px;\r\n}\r\n\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding: 20px\r\n    }\r\n  }\r\n\r\n/***********************************\r\nFeatures\r\n************************************/\r\n\r\nh2{\r\n\tfont-size: 28px;\r\n\tpadding-bottom: 15px;\r\n}\r\n\r\n.bottom-line{\r\n\twidth: 25px;\r\n\theight: 3px;\r\n\tbackground-color: rgb(99, 122, 145);\r\n}\r\n\r\n.fea{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.fea-img {\r\n  width: 20%;\r\n}\r\n\r\n.heading {\r\n    width: 80%;\r\n}\r\n\r\n.fea i {\r\n    font-size: 39px;\r\n    color: #5FCF80;\r\n    margin-top: 7px;\r\n}\r\n\r\n.heading h4 {\r\n    font-size: 17px;\r\n    line-height: 1.25;\r\n    font-weight: 700;\r\n    color: #000;\r\n    margin: 10px 0px;\r\n    text-align: left;\r\n}\r\n\r\n.heading p {\r\n  text-align: left;\r\n}\r\n\r\n/***********************************\r\n Organisations\r\n************************************/\r\n\r\n#organisations{\r\n    background-color: rgb(247, 247, 247);\r\n}\r\n\r\n/***********************************\r\nCourse\r\n************************************/\r\n\r\n[class*=\" imghvr-\"] figcaption, [class^=\"imghvr-\"] figcaption {\r\n    background-color: rgb(101, 191, 91);\r\n}\r\n\r\n[class*=\" imghvr-\"], [class^=\"imghvr-\"] {\r\n    background-color: rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n/***********************************\r\nFooter\r\n************************************/\r\n\r\n.footer {\r\n    padding: 10px 0 20px;\r\n    background: #0066cc;\r\n    color: #ccc;\r\n}\r\n\r\n.footer a {\r\n    color: #fff;\r\n}\r\n\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.html":
/*!********************************!*\
  !*** ./src/app/home/home.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navigation bar-->\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <!--<a class=\"navbar-brand\" href=\"index.html\">SoS<span>UnB</span></a>-->\r\n    <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n    <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n      <li><a href=\"home#feature\" target=\"_self\">Quem Somos</a></li>\r\n      <li><a href=\"home#organisations\" target=\"_self\">Como funciona</a></li>\r\n      <li><a href=\"home#courses\">Solucionados</a></li>\r\n      <li><a href=\"#\" data-target=\"#cadastro\" data-toggle=\"modal\" (click)=\"clearInputs()\">Cadastro</a></li>\r\n      <li><a href=\"#\" data-target=\"#login\" data-toggle=\"modal\" (click)=\"clearInputs()\">Login</a></li>\r\n      <!--<li><a href=\"#\" data-target=\"#login\" data-toggle=\"modal\">Prefeitura</a></li>-->\r\n    <!--  <li class=\"btn-trial\"><a href=\"#footer\">Free Trail</a></li>-->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!--/ Navigation bar-->\r\n<!--Modal box-->\r\n<div class=\"modal fade\" id=\"login\" role=\"dialog\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-sm\">\r\n\r\n  <!-- Modal content no 1-->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <button #closeModalLoginButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n    <!--<h4 style=\"text-align:center;\"><a href=\"index.html\"><img src=\"img/logo.png\" width=\"70\" height=\"70\" alt=\"\"></a></h4>-->\r\n      <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Login</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"login-box-body\">\r\n        <p class=\"login-box-msg\" style=\"color: grey;\">Entre na sua conta.</p>\r\n          <form #loginForm=\"ngForm\" >\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\" name=\"email\" required [(ngModel)]=\"email\"/>\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n              <label style=\"font-size: 1.3rem\">Senha</label>\r\n              <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\"/>\r\n              <span style=\"display:none;font-weight:bold; position:absolute;color: grey;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginpsw1\"></span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <div>\r\n                  <p style=\"text-align: center;\"><a style=\"color: grey;\"data-target=\"#senha\" data-toggle=\"modal\" data-dismiss=\"modal\">Esqueci minha senha.</a></p>\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                  <button style=\"margin-top: 20px;\" type=\"button\" [disabled]=\"loginForm.invalid || loginForm.pending\" class=\"btn btn-green btn-block btn-flat\" (click)=\"signin(email,password);\">Entrar</button>\r\n                </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!--/ Modal box-->\r\n<!--Modal box cadastro-->\r\n<div class=\"modal fade\" id=\"cadastro\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <button #closeModalCadastroButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <!--<h4 style=\"text-align:center;\"><a href=\"index.html\"><img src=\"img/logo.png\" width=\"70\" height=\"70\" alt=\"\"></a></h4>-->\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Cadastro</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"login-box-body\">\r\n          <form #cadastroForm=\"ngForm\">\r\n              <p class=\"login-box-msg\" style=\"color: grey;\">Preencha os campos</p>\r\n               <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n                <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">Nome completo</label>\r\n                <input class=\"form-control\" placeholder=\"Nome completo\" type=\"text\" name=\"name\" required=\"\" [(ngModel)]=\"user.name\" />\r\n\r\n              </div>\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n                <label style=\"font-size: 1.3rem\">Matricula</label>\r\n                <input class=\"form-control\" placeholder=\"Ex:12010000\" type=\"text\" name=\"registry\" required=\"\" [(ngModel)]=\"user.registry\"/>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">Número RG</label>\r\n                <input class=\"form-control\" placeholder=\"RG\" type=\"text\" name=\"identity\" required=\"\" [(ngModel)]=\"user.identity\"/>\r\n\r\n              </div>\r\n\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label style=\"font-size: 1.3rem\">Data de nascimento</label>\r\n              <input class=\"form-control\" placeholder=\"Data de nascimento\" type=\"text\" specialCharacters=\"['/']\" mask=\"00/00/0000\" name=\"date_birth\" required=\"\" [(ngModel)]=\"user.date_birth\"/>\r\n\r\n            </div>\r\n\r\n\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">E-mail</label>\r\n                <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\"/>\r\n\r\n              </div>\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Senha</label>\r\n                <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n                Digite uma senha\r\n                </span>\r\n\r\n              </div>\r\n              <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n                <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" signUpConfirmEqualValidator=\"password\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n                Confirme sua senha\r\n                </span>\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n                As senhas devem ser iguais\r\n                </span>\r\n\r\n                <button style=\"margin-top: 20px;\" type=\"button\" [disabled]=\"cadastroForm.invalid || cadastroForm.pending\" class=\"btn btn-green btn-block btn-flat\" (click)=\"confirm(user);\">Cadastrar</button>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n\r\n              </div>\r\n            </form>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n<!--/ Modal box cadastro-->\r\n<!--Modal esqueci senha-->\r\n<div class=\"modal fade\" id=\"senha\" role=\"dialog\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-sm\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <button #closeModalPswButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n    <!--<h4 style=\"text-align:center;\"><a href=\"index.html\"><img src=\"img/logo.png\" width=\"70\" height=\"70\" alt=\"\"></a></h4>-->\r\n      <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Esqueci minha senha</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"login-box-body\">\r\n        <p class=\"login-box-msg\" style=\"color: grey;\">Digite seu email de cadastro.</p>\r\n          <form method=\"post\" action=\"#\" id=\"formsenha\">\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\"/>\r\n            </div>\r\n                <button style=\"margin-top: 20px;\"type=\"button\" class=\"btn btn-green btn-block btn-flat\">Enviar</button>\r\n              <!--  <button style=\"margin-top: 20px;\"type=\"button\" class=\"btn btn-green btn-block btn-flat\" (click)=\"passForgot(email)\">Enviar</button>-->\r\n              </form>\r\n          </div>\r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n  </div>\r\n<!--/Modal esqueci senha-->\r\n<!--Banner-->\r\n<div class=\"banner\">\r\n<div class=\"bg-color\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"banner-text text-center\">\r\n        <div class=\"text-border\">\r\n          <h2 class=\"text-dec\">Baixe nosso App</h2>\r\n        </div>\r\n        <div class=\"intro-para text-center quote\">\r\n          <p class=\"big-text\" style=\"font-size:3vw\">E ajude a melhorar nossa universidade!</p>\r\n\r\n          <div>\r\n            <img src=\"./assets/img/celular.png\" style=\"width:25.5%;height:25.5%;position:relative;margin-top:-3%;\" alt=\"\">\r\n            <img src=\"./assets/img/celular2.png\" style=\"width:27%;height:27%;position:relative;margin-top:-3%;\" alt=\"\">\r\n          </div>\r\n          <div>\r\n            <a href=\"https://itunes.apple.com/br/app/apple-store/id375380948?mt=8\" target=\"_blank\"><img src=\"./assets/img/app-store.png\" style=\"width:13%;height:13%;position:relative;margin-top:-3%;\" alt=\"\"></a>\r\n            <a href=\"https://play.google.com/store/apps?hl=br\" target=\"_blank\"><img src=\"./assets/img/google.png\" style=\"width:15%;height:15%;position:relative;margin-top:-3%;margin-left: 11%;\" alt=\"\"></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#feature\" class=\"mouse-hover\">\r\n          <div class=\"mouse\"></div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<!--/ Banner-->\r\n<!--Feature-->\r\n<section id=\"feature\" class=\"section-padding\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"header-section text-center\">\r\n      <h2 style=\"color: #0066cc;\">Quem Somos</h2>\r\n      <p>O SOSUnB é um sistema colaborativo utilizado para reportar e ranquear\r\n\r\n    <br>demandas de infraestrutura na Universidade de Brasília – UnB. Seu principal objetivo é<br> dar visibilidade\r\n   aos problemas estruturais da UnB para a comunidade acadêmica,<br>\r\n      facilitando a formalização de reclamações e sugestões <br>\r\n      referentes à infraestrutura da universidade.\r\n    </p>\r\n      <hr class=\"bottom-line\">\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--/ feature-->\r\n<!--Organisations-->\r\n<section id=\"organisations\" class=\"section-padding\">\r\n<div class=\"container text-center\">\r\n  <h2 style=\"color: #0066cc;\">Como Funciona</h2>\r\n  <p>A plataforma WEB permite que qualquer cidadão possa visualizar as principais demandas já solucionadas.<br>\r\n      Você que é aluno, professor ou servidor da UnB, após cadastramento, poderá interagir com o SOSUnB,<br> seja pela plataforma WEB ou pelo aplicativo.\r\n      Após login no sistema<br> será possível apresentar sugestões ou reclamações e visualizar<br> todas as demandas e sugestões formuladas.\r\n  </p>\r\n  <hr class=\"bottom-line\">\r\n  <div class=\"row\">\r\n    <div class=\"feature-info\">\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Baixe o App</h4>\r\n            <p>Para sua maior comodidade, baixe o aplicativo SOSUnB no seu celular ou tablet. </p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\" class=\"fa fa-download\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Crie sua demanda</h4>\r\n            <p>Tire uma foto do problema identificado, faça sua descrição e publique sua demanda.</p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\"class=\"fa fa-edit\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Acompanhe</h4>\r\n            <p>Acompanhe sua publicação e de outros usuários. Curta quantas publicações quiser.</p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\"class=\"fa fa-search\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--/Organisations-->\r\n<!--Courses-->\r\n<section id=\"courses\" class=\"section-padding\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"header-section text-center\">\r\n      <h2 style=\"color: #0066cc;\">SOSUnB em Ação!</h2>\r\n      <p>Veja os problemas de infraestrutura que a SOSUnB já ajudou a resolver!</p>\r\n      <hr class=\"bottom-line\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/anf.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Mesas e cadeiras quebradas</h3>\r\n          <p>As mesas e cadeiras do Anf 0 foram consertadas.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/AC.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Tomada na sala de aula</h3>\r\n          <p>A tomada foi recolocada e agora o ar condicionado está ligado nela.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/janela.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Janela quebrada</h3>\r\n          <p>A janela do laboratório foi trocada.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/poste.jpeg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Poste com fio desencapado</h3>\r\n          <p>O poste foi arrumado. Não existem mais fios desencapados que possam causar um choque elétrico.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/pc.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Computador quebrado</h3>\r\n          <p>Todos os computadores do laboratório de redes foram trocados por modelos atuais e de melhor qualidade.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/porta.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Porta do banheiro quebrada</h3>\r\n          <p>A porta do banheiro do SG, que havia sido danificada, foi trocada.</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--Footer-->\r\n<footer style=\"margin-bottom: 0px;\" id=\"footer\" class=\"footer\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"fea\">\r\n            <div class=\"col-md-4\">\r\n                <h5 style=\"color: #fff;\">Termos de uso</h5>\r\n                <a href=\"#\"><i style=\"color: #fff; font-size: 25px;\"  class=\"fa fa-file\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"fea\">\r\n            <div class=\"col-md-4\">\r\n                <h5 style=\"color: #fff;\">Baixe o Aplicativo</h5>\r\n                <a href=\"https://itunes.apple.com/br/app/apple-store/id375380948?mt=8\" target=\"_blank\"><i style=\"color: #fff; font-size: 30px;\"  class=\"fa fa-apple\"></i></a>&nbsp;\r\n                <a href=\"https://play.google.com/store/apps?hl=br\" target=\"_blank\"><i style=\"color: #fff; font-size: 30px;\"  class=\"fa fa-android\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n            <div class=\"col-md-4\">\r\n                <h5 style=\"color: #fff;\">Universidade de Brasília</h5>\r\n                <a href=\"http://unb.br/\" target=\"_blank\"><img src=\"./assets/img/UnB.png\" width=\"40\" height=\"40\" alt=\"\"></a>&nbsp;\r\n                <a href=\"http://www.ene.unb.br/\" target=\"_blank\"><img src=\"./assets/img/ft.png\" width=\"110\" height=\"40\" alt=\"\"></a>\r\n            </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</footer>\r\n<!--/ Footer-->\r\n<script src=\"home.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/home/home.ts":
/*!******************************!*\
  !*** ./src/app/home/home.ts ***!
  \******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.user = {};
    }
    HomeComponent.prototype.confirm = function (user) {
        var _this = this;
        this.server.createUser(this.user).then(function (response) {
            console.log(response);
            console.log(response["_body"]);
            var body = JSON.parse(response['_body']);
            console.log(body.token);
            _this.closeModalCadastroButton.nativeElement.click();
            _this._router.navigate(['/feed']);
        }).catch(function (error) {
            console.log(error);
            var body = JSON.parse(error['_body']);
            switch (body.erro.cadastro) {
                case 8: {
                    alert("Dados incorretos");
                    break;
                }
                default: {
                    alert("Erro");
                    break;
                }
            }
        });
    };
    HomeComponent.prototype.signin = function (mail, pass) {
        var _this = this;
        this.server.loginUser(this.email, this.password).then(function (response) {
            console.log(response);
            console.log(response["_body"]);
            var body = JSON.parse(response['_body']);
            console.log(body.token);
            _this.server.token = body.token;
            _this.closeModalLoginButton.nativeElement.click();
            _this._router.navigate(['/feed']);
        }).catch(function (error) {
            console.log(error);
            var body = JSON.parse(error['_body']);
            switch (body.erro.login) {
                case 10: {
                    alert("Dados incorretos");
                    break;
                }
                default: {
                    alert("Erro");
                    break;
                }
            }
        });
    };
    HomeComponent.prototype.passForgot = function (email) {
        var _this = this;
        this.server.newPsw(this.email).then(function (response) {
            console.log(response);
            console.log(response["_body"]);
            _this.closeModalPswButton.nativeElement.click();
            alert("Nova senha enviada.");
        }).catch(function (error) {
            console.log(error);
            alert("Erro de dados.");
        });
    };
    HomeComponent.prototype.clearInputs = function () {
        this.user = {};
        this.email = "";
        this.password = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLoginButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalLoginButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalCadastroButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalCadastroButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalPswButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalPswButton", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/home/home.html"),
            styles: [__webpack_require__(/*! ./home.css */ "./src/app/home/home.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/liked/liked.css":
/*!*********************************!*\
  !*** ./src/app/liked/liked.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\ninput[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  color: #3366BB;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/liked/liked.html":
/*!**********************************!*\
  !*** ./src/app/liked/liked.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/home\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n  <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content  modal-sm\" >\r\n          <div class=\"modal-header\" >\r\n              <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <div class=\"row\">\r\n              <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"text-align: center;\">\r\n            <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"report(post)\">Sim</button>-->\r\n            <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <!--/ Modal box-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse in\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n   <!--Cabeçalho-->\r\n   <div class=\"s-layout__content\">\r\n      <div class=\"mar\">\r\n        <div class=\"card\" >\r\n          <div class=\"card-header textcenter\">\r\n            <h2 style=\"color:#0066cc;\">Demandas Curtidas/Comentadas</h2>\r\n          </div>\r\n        </div>\r\n    <!--/Cabeçalho-->\r\n      <!--Card-->\r\n  <div class=\"card\"  *ngFor=\"let post of posts;\">\r\n      <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\">\r\n        <div class=\"col-md-4 firstcol column\">\r\n          <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n        </div>\r\n        <div class=\"col-md-4 secndcol column\">\r\n          <div class=\"row \" >\r\n           <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"   (click)=\"post.collapsed=!post.collapsed\">{{post?.title}}</a>\r\n          </div>\r\n          <div class=\"row\">\r\n            <a class=\"text-muted\" style=\"font-size:13px;\"> {{post?.created_date}}</a>&nbsp;\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n            <a href=\"#\" style=\"color:black;font-size:15px;\">{{post?.local}}</a>\r\n          </div>\r\n          <div class=\"row\">\r\n            <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px;\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-thumbs-up\"></i>{{post?.total_likes}}</a>&nbsp;\r\n            <a href=\"#\" style=\"font-family:Arial;font-size:13px;\" class=\"text-muted\" (click)=\"post.collapsed=!post.collapsed; post.showcomment=!post.showcomment\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-comment\"></i>{{post?.comments?.length}} comentários</a>\r\n          </div>\r\n          </div>\r\n      </div>\r\n    <!--Expanded card1-->\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n      <div class=\"linha\"></div>\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n          <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n        </div>\r\n        <p style=\"padding-top:5px;\">\r\n          <a>  {{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b>\r\n          em<br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n          {{post?.local}}\r\n        </p>\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:100%\">\r\n        <p>\r\n        {{post?.description}}\r\n        </p>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n        <ul class=\"list-inline\">\r\n          <div class=\"pull-left\">\r\n              <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n              font-size: 15px;color:#3366BB\"></i></a>\r\n            <a style=\"\r\n            font-size: 14px;color:#3366BB\">  {{post?.total_likes}}</a>\r\n            </div>\r\n            <div class=\"textl pull-right\">\r\n              <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n              <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"post.showcomments=!post.showcomments;\">\r\n              {{post?.comments?.length}} comentários\r\n              </a>\r\n            </div>\r\n  \r\n        </ul>\r\n  \r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n      </div>\r\n      <div class=\"card-footer\" *ngIf = \"post.showcomments\">\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments;\">\r\n          <div class=\"col-xs-2\" style=\"width:auto;\">\r\n            <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n          </div>\r\n          <p class=\"borda\">\r\n            <a>  {{comment.name}}</a>\r\n  \r\n            <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n            <br>\r\n            {{comment.comment}}\r\n  \r\n  \r\n  \r\n  \r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"textleft inputWithIcon\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\" [(ngModel)]=\"comment\">\r\n        <a (click)=\"newComment(post, comment)\"><i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  <!--/Card-->\r\n\r\n      <!--Card-->\r\n      <div class=\"card\"  *ngFor=\"let sugestions of demands;\">\r\n          <div class=\"row\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n            <div class=\"col-md-4 firstcol column\">\r\n              <img [src]=\"sugestions?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n            </div>\r\n            <div class=\"col-md-4 secndcol column\">\r\n              <div class=\"row \" >\r\n               <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"   (click)=\"sugestions.collapsed=!sugestions.collapsed\">{{sugestions?.title}}</a>\r\n              </div>\r\n              <div class=\"row\">\r\n                <a class=\"text-muted\" style=\"font-size:13px;\"> {{sugestions?.created_date}}</a>&nbsp;\r\n                <br>\r\n                <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n                <a href=\"#\" style=\"color:black;font-size:15px;\">{{sugestions?.local}}</a>\r\n              </div>\r\n              <div class=\"row\">\r\n                <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px;\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-thumbs-up\"></i>{{sugestions?.total_likes}}</a>&nbsp;\r\n                <a href=\"#\" style=\"font-family:Arial;font-size:13px;\" class=\"text-muted\" (click)=\"sugestions.collapsed=!sugestions.collapsed; sugestions.showcomment=!sugestions.showcomment\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-comment\"></i>{{sugestions?.comments?.length}} comentários</a>\r\n              </div>\r\n              </div>\r\n          </div>\r\n        <!--Expanded card1-->\r\n        <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"sugestions.collapsed\">\r\n          <div class=\"linha\"></div>\r\n          <div class=\"pull-right\">\r\n            <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n              <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"card-header textleft\">\r\n            <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n              <img [src]=\"sugestions?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n            </div>\r\n            <p style=\"padding-top:5px;\">\r\n              <a>  {{sugestions?.name}}</a>\r\n              publicou\r\n              <b>{{sugestions?.title}}</b>\r\n              em<br>\r\n              <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n              {{sugestions?.local}}\r\n            </p>\r\n          </div>\r\n          <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n            <img [src]=\"sugestions?.image_demand\" style=\"width:100%\">\r\n            <p>\r\n            {{sugestions?.description}}\r\n            </p>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n            <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left\">\r\n                  <a (click)=\"like(sugestions)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;color:#3366BB\"></i></a>\r\n                <a style=\"\r\n                font-size: 14px;color:#3366BB\">  {{sugestions?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right\">\r\n                  <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n                  <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"sugestions.showcomments=!sugestions.showcomments;\">\r\n                  {{sugestions?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n      \r\n            </ul>\r\n      \r\n              </div>\r\n            </div>\r\n                <div class=\"linha2\"></div>\r\n          </div>\r\n          <div class=\"card-footer\" *ngIf = \"sugestions.showcomments\">\r\n            <div class=\"card-header textleft\" *ngFor=\"let comment of sugestions.comments;\">\r\n              <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n              </div>\r\n              <p class=\"borda\">\r\n                <a>  {{comment.name}}</a>\r\n      \r\n                <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n                <br>\r\n                {{comment.comment}}\r\n      \r\n      \r\n      \r\n      \r\n              </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"textleft inputWithIcon\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\" [(ngModel)]=\"comment\">\r\n            <a (click)=\"newComment(post, comment)\"><i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i></a>      \r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <!--/Card-->\r\n<script src=\"liked.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/liked/liked.ts":
/*!********************************!*\
  !*** ./src/app/liked/liked.ts ***!
  \********************************/
/*! exports provided: LikedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedComponent", function() { return LikedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var LikedComponent = /** @class */ (function () {
    function LikedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.demands = [];
    }
    LikedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSelectedDemands({}).then(function (response) {
            console.log(response);
            console.log(response.json());
            response = response.json();
            // this.posts = response['dados'];
            for (var i = 0; i < response['dados'].likes.length; i++) {
                response['dados'].likes[i].collapsed = false;
                _this.posts.push(response['dados'].likes[i]);
            }
            for (var i = 0; i < response['dados'].comentarios.length; i++) {
                response['dados'].comentarios[i].collapsed = false;
                _this.demands.push(response['dados'].comentarios[i]);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    LikedComponent.prototype.like = function (post) {
        //Remove like
        if (post.gave_like == "true") {
            this.server.unlikeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes -= 1;
                post.gave_like = "false";
                console.log(post.gave_like);
            }).catch(function (error) {
                console.log(error);
            });
        }
        //Add like
        else {
            this.server.likeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes += 1;
                post.gave_like = "true";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    LikedComponent.prototype.newComment = function (post, comment) {
        //Add comment
        this.server.commentDemand(this.server.token, post.demand_id, comment).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LikedComponent.prototype.delComment = function (post) {
        //Delete comment
        this.server.deleteComment(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LikedComponent.prototype.report = function (post) {
        this.server.reportDemand(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LikedComponent.prototype.changeInfo = function (accessToken, image, email, password, pswconfirm) {
        this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LikedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liked',
            template: __webpack_require__(/*! ./liked.html */ "./src/app/liked/liked.html"),
            styles: [__webpack_require__(/*! ./liked.css */ "./src/app/liked/liked.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], LikedComponent);
    return LikedComponent;
}());



/***/ }),

/***/ "./src/app/madeByme/madeByme.css":
/*!***************************************!*\
  !*** ./src/app/madeByme/madeByme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {text-decoration: none;}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\n/*CSS PERFIL*/\r\n\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  color: #3366BB;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\n\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\n\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n/******************\r\nSidebar\r\n******************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\n\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n\r\n/**********************\r\nFeed\r\n***********************/\r\n\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n\r\n.card .card-header{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  }\r\n\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/madeByme/madeByme.html":
/*!****************************************!*\
  !*** ./src/app/madeByme/madeByme.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/home\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n    <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content  modal-sm\" >\r\n            <div class=\"modal-header\" >\r\n                <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              <div class=\"row\">\r\n                <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"text-align: center;\">\r\n              <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n              <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--/ Modal box-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse in\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Cabeçalho-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header textcenter\">\r\n          <h2 style=\"color:#0066cc;\">Demandas/Sugestões Criadas</h2>\r\n        </div>\r\n      </div>\r\n  <!--/Cabeçalho-->\r\n  <!--Card-->\r\n  <div class=\"card\"  *ngFor=\"let post of posts;\">\r\n      <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\">\r\n        <div class=\"col-md-4 firstcol column\">\r\n          <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n        </div>\r\n        <div class=\"col-md-4 secndcol column\">\r\n          <div class=\"row \" >\r\n           <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"   (click)=\"post.collapsed=!post.collapsed\">{{post?.title}}</a>\r\n          </div>\r\n          <div class=\"row\">\r\n            <a class=\"text-muted\" style=\"font-size:13px;\"> {{post?.created_date}}</a>&nbsp;\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n            <a href=\"#\" style=\"color:black;font-size:15px;\">{{post?.local}}</a>\r\n          </div>\r\n          <div class=\"row\">\r\n            <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px;\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-thumbs-up\"></i>{{post?.total_likes}}</a>&nbsp;\r\n            <a href=\"#\" style=\"font-family:Arial;font-size:13px;\" class=\"text-muted\" (click)=\"post.collapsed=!post.collapsed; post.showcomment=!post.showcomment\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-comment\"></i>{{post?.comments?.length}} comentários</a>\r\n          </div>\r\n          </div>\r\n      </div>\r\n    <!--Expanded card1-->\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n      <div class=\"linha\"></div>\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n          <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n        </div>\r\n        <p style=\"padding-top:5px;\">\r\n          <a>  {{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b>\r\n          em<br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n          {{post?.local}}\r\n        </p>\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:100%\">\r\n        <p>\r\n        {{post?.description}}\r\n        </p>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n        <ul class=\"list-inline\">\r\n          <div class=\"pull-left\">\r\n              <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n              font-size: 15px;color:#3366BB\"></i></a>\r\n            <a style=\"\r\n            font-size: 14px;color:#3366BB\">  {{post?.total_likes}}</a>\r\n            </div>\r\n            <div class=\"textl pull-right\">\r\n              <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n              <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"post.showcomments=!post.showcomments;\">\r\n              {{post?.comments?.length}} comentários\r\n              </a>\r\n            </div>\r\n  \r\n        </ul>\r\n  \r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n      </div>\r\n      <div class=\"card-footer\" *ngIf = \"post.showcomments\">\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments;\">\r\n          <div class=\"col-xs-2\" style=\"width:auto;\">\r\n            <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n          </div>\r\n          <p class=\"borda\">\r\n            <a>  {{comment.name}}</a>\r\n  \r\n            <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n            <br>\r\n            {{comment.comment}}\r\n  \r\n  \r\n  \r\n  \r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"textleft inputWithIcon\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\" [(ngModel)]=\"comment\">\r\n        <a (click)=\"newComment(post, comment)\"><i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <!--/Card-->\r\n\r\n      <!--Card-->\r\n      <div class=\"card\"  *ngFor=\"let sugestions of demands;\">\r\n          <div class=\"row\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n            <div class=\"col-md-4 firstcol column\">\r\n              <img [src]=\"sugestions?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n            </div>\r\n            <div class=\"col-md-4 secndcol column\">\r\n              <div class=\"row \" >\r\n               <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"   (click)=\"sugestions.collapsed=!sugestions.collapsed\">{{sugestions?.title}}</a>\r\n              </div>\r\n              <div class=\"row\">\r\n                <a class=\"text-muted\" style=\"font-size:13px;\"> {{sugestions?.created_date}}</a>&nbsp;\r\n                <br>\r\n                <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n                <a href=\"#\" style=\"color:black;font-size:15px;\">{{sugestions?.local}}</a>\r\n              </div>\r\n              <div class=\"row\">\r\n                <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px;\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-thumbs-up\"></i>{{sugestions?.total_likes}}</a>&nbsp;\r\n                <a href=\"#\" style=\"font-family:Arial;font-size:13px;\" class=\"text-muted\" (click)=\"sugestions.collapsed=!sugestions.collapsed; sugestions.showcomment=!sugestions.showcomment\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-comment\"></i>{{sugestions?.comments?.length}} comentários</a>\r\n              </div>\r\n              </div>\r\n          </div>\r\n        <!--Expanded card1-->\r\n        <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"sugestions.collapsed\">\r\n          <div class=\"linha\"></div>\r\n          <div class=\"pull-right\">\r\n            <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n              <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"card-header textleft\">\r\n            <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n              <img [src]=\"sugestions?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n            </div>\r\n            <p style=\"padding-top:5px;\">\r\n              <a>  {{sugestions?.name}}</a>\r\n              publicou\r\n              <b>{{sugestions?.title}}</b>\r\n              em<br>\r\n              <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n              {{sugestions?.local}}\r\n            </p>\r\n          </div>\r\n          <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n            <img [src]=\"sugestions?.image_demand\" style=\"width:100%\">\r\n            <p>\r\n            {{sugestions?.description}}\r\n            </p>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n            <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left\">\r\n                  <a (click)=\"like(sugestions)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;color:#3366BB\"></i></a>\r\n                <a style=\"\r\n                font-size: 14px;color:#3366BB\">  {{sugestions?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right\">\r\n                  <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n                  <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"sugestions.showcomments=!sugestions.showcomments; comment(sugestions)\">\r\n                  {{sugestions?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n      \r\n            </ul>\r\n      \r\n              </div>\r\n            </div>\r\n                <div class=\"linha2\"></div>\r\n          </div>\r\n          <div class=\"card-footer\" *ngIf = \"sugestions.showcomments\">\r\n            <div class=\"card-header textleft\" *ngFor=\"let comment of sugestions.comments;\">\r\n              <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                <img [src]=\"sugestions?.comments?.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n              </div>\r\n              <p class=\"borda\">\r\n                <a>  {{sugestions?.comments?.name}}</a>\r\n      \r\n                <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n                <br>\r\n                {{sugestions?.comments?.comment}}\r\n      \r\n      \r\n      \r\n      \r\n              </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"textleft inputWithIcon\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\">\r\n          <i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <!--/Card-->\r\n    \r\n\r\n  \r\n<script src=\"madeByme.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/madeByme/madeByme.ts":
/*!**************************************!*\
  !*** ./src/app/madeByme/madeByme.ts ***!
  \**************************************/
/*! exports provided: MadeByMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadeByMeComponent", function() { return MadeByMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var MadeByMeComponent = /** @class */ (function () {
    function MadeByMeComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.demands = [];
    }
    MadeByMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSelectedDemands({}).then(function (response) {
            console.log(response);
            console.log(response.json());
            response = response.json();
            // this.posts = response['dados'];
            for (var i = 0; i < response['dados'].reclamacao.length; i++) {
                response['dados'].reclamacao[i].collapsed = false;
                _this.posts.push(response['dados'].reclamacao[i]);
            }
            for (var i = 0; i < response['dados'].sugestao.length; i++) {
                response['dados'].sugestao[i].collapsed = false;
                _this.demands.push(response['dados'].sugestao[i]);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    MadeByMeComponent.prototype.like = function (post) {
        //Remove like
        if (post.gave_like == "true") {
            this.server.unlikeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes -= 1;
                post.gave_like = "false";
                console.log(post.gave_like);
            }).catch(function (error) {
                console.log(error);
            });
        }
        //Add like
        else {
            this.server.likeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes += 1;
                post.gave_like = "true";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MadeByMeComponent.prototype.newComment = function (post, comment) {
        //Add comment
        this.server.commentDemand(this.server.token, post.demand_id, comment).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MadeByMeComponent.prototype.delComment = function (post) {
        //Delete comment
        this.server.deleteComment(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MadeByMeComponent.prototype.report = function (post) {
        this.server.reportDemand(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MadeByMeComponent.prototype.changeInfo = function (accessToken, image, email, password, pswconfirm) {
        this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MadeByMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-madeByme',
            template: __webpack_require__(/*! ./madeByme.html */ "./src/app/madeByme/madeByme.html"),
            styles: [__webpack_require__(/*! ./madeByme.css */ "./src/app/madeByme/madeByme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], MadeByMeComponent);
    return MadeByMeComponent;
}());



/***/ }),

/***/ "./src/app/post/post.css":
/*!*******************************!*\
  !*** ./src/app/post/post.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n\r\n/*CSS PERFIL*/\r\n\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n\r\n.rounded{\r\n\r\n  border-radius: 50%;\r\n width:70px;\r\nheight:70px;\r\n}\r\n\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n\r\ninput[type=\"text\"]:focus {\r\n    border-color: dodgerBlue;\r\n    box-shadow: 0 0 8px 0 dodgerBlue;\r\n  }\r\n\r\n.inputWithIcon input[type=\"text\"] {\r\n    padding-left: 40px;\r\n  }\r\n\r\n.inputWithIcon {\r\n    position: relative;\r\n  }\r\n\r\n.inputWithIcon i {\r\n    text-align: right;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0px;\r\n    padding: 9px 8px;\r\n    color: #3366BB;\r\n    transition: 0.3s;\r\n    border-radius: 50px;\r\n  }\r\n\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n    color: dodgerBlue;\r\n  }\r\n\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\n\r\n@media (max-width: 568px) {\r\n  .modal-sm{\r\n          width: 355px;\r\n          transition: all 0.3s;\r\n          padding-left: 0px;\r\n      }\r\n    }\r\n\r\n.seta-esquerda:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    width: 0;\r\n    height: 0;\r\n\r\n    border-top: 5px solid transparent;\r\n    border-bottom: 5px solid transparent;\r\n    border-right: 5px solid blue;\r\n  }\r\n\r\n.btn-search{\r\n    color:#28a745;\r\n    float:right;\r\n    border-radius:50%;\r\n    justify-content: center;\r\n    margin-left: 5px;\r\n    align-items: center;\r\n    display: flex;\r\n    width:35px;\r\n    height: 35px;\r\n        background-color:#fff;\r\n      }\r\n\r\n.search-txt{\r\n        border-radius:10px;\r\n        padding: 0;\r\n        color:green;\r\n        font-size: 16px;\r\n        transition:0.4s;\r\n        width:300px;\r\n        line-height: 30px;\r\n        }\r\n\r\n.modal-content {\r\n    display: block;\r\n  }\r\n\r\n.modal-body{\r\n    display: block;\r\n    overflow-y: hidden;\r\n  }\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n\tmargin: 10px 5px;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/******************\r\nSidebar\r\n******************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    }\r\n\r\nem {\r\n    font-style: normal;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    }\r\n\r\n.s-sidebar__nav .collapse.in a{\r\n      color: white;\r\n      font-size: 14px;\r\n    }\r\n\r\nem:hover,\r\n    a:hover {\r\n     color: rgb(101, 191, 91);\r\n    }\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.mar{\r\n      margin-top:80px;\r\n    }\r\n\r\n.linha {\r\n      margin-top: 2px;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #ced4da;\r\n    }\r\n\r\n.linha2 {\r\n      margin-bottom: 12px;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #ced4da;\r\n    }\r\n\r\n.borda{\r\n      border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n       /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n        border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n        padding: 5px;\r\n        background-color:rgb(242,244,247);\r\n        border-radius: 18px;\r\n    }\r\n\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n   position: fixed;\r\n   top: 0;\r\n   overflow: hidden;\r\n   transition: all .3s ease-in;\r\n   height: 100%;\r\n   z-index: 1;\r\n   background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n\r\n.s-sidebar__nav ul {\r\nposition: absolute;\r\nleft: 0;\r\nmargin: 0;\r\npadding: 0;\r\nwidth: 15em;\r\ntop: 4em;\r\n}\r\n\r\n.s-sidebar__nav ul li {\r\nwidth: 100%;\r\nmargin: 10px;\r\n\r\n}\r\n\r\n.s-sidebar__nav-link {\r\nposition: relative;\r\ndisplay: inline-block;\r\nwidth: 100%;\r\ncolor:white;\r\nmargin: 0;\r\n}\r\n\r\n.s-sidebar__nav-link em {\r\nposition: absolute;\r\nleft: 3.5em;\r\n-webkit-transform: translateY(-50%);\r\n        transform: translateY(-50%);\r\n}\r\n\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\nposition: absolute;\r\ntop: 0;\r\nwidth: 4em;\r\n}\r\n\r\n.s-sidebar__nav-link > i::before {\r\nposition: absolute;\r\ntop: 90%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n}\r\n\r\n.s-layout__content > .mar > .group >.card{\r\n  background-color:#fff;\r\n  margin-top:20px;\r\n  margin-bottom:15px;\r\n  border-radius: 10px;\r\n    padding-left: 5em ;\r\n    padding-right: 5em;\r\n    padding-bottom: 0.5em;\r\n    box-shadow: 10px 3px 81px 2px rgba(101,191,91,1);\r\n   }\r\n\r\n.modal-body > .mar >.card{\r\n    background-color:#fff;\r\n    margin-top:10px;\r\n    margin-bottom:15px;\r\n    border-radius: 10px;\r\n    }\r\n\r\n.card .card-header{\r\n      padding-top: 10px;\r\n      padding-bottom: 10px;\r\n      }\r\n\r\n.card .card-header img{\r\n        width: 40px;\r\n        height: 40px;\r\n      }\r\n\r\n.card .card-footer{\r\n        padding-top: 10px;\r\n        padding-bottom: 20px;\r\n          border-radius: 10px;\r\n        }\r\n\r\n.card-info{\r\n        margin-top:30px;\r\n        border-radius: 10%;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n\r\n      }\r\n\r\nselect {\r\n      width: 17em;\r\n      text-align: center;\r\n    }\r\n\r\n.modal h3{\r\n    color: #0066cc;\r\n    }\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n    margin-left: 4em;\r\n }\r\n\r\n.list-inline{\r\n\r\nfont-size: 12px;\r\n}\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n\r\nul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.modal-dialog{\r\n  max-width: 100%;\r\n  height: auto;\r\n  min-width: 260px;\r\n  margin-top: 15px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\np.borda{\r\n  font-size: 2vw;\r\n}\r\n    /*select {\r\n      width: 7em;\r\n    }*/\r\n}\r\n\r\n@media (min-width: 48em) {\r\n.s-layout__content {\r\n   padding-left: 15em;\r\n   padding-right: 15em;\r\n   margin-left: 15em;\r\n\r\n\r\n}\r\n.mar{\r\n  min-width: 400px;\r\n  height: 100%;\r\n\r\n\r\n}\r\n.card{\r\n  width: 550px;\r\n  height: auto;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 16px;\r\n}\r\n.card-header h4{\r\n  font-size: 33px;\r\n  font-weight: 700;\r\n  color:#0066cc;\r\n}\r\n.s-sidebar__nav {\r\n   width: 11em;\r\n}\r\n.list-inline{\r\n\r\n  font-size: 16px;\r\n}\r\n.s-sidebar__nav ul {\r\n   top: 1.3em;\r\n}\r\n.s-sidebar__nav-link em{\r\n color: white;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n\r\n .s-sidebar__nav-link em:hover,\r\n .s-sidebar__nav-link li:hover{\r\n     color: rgb(101, 191, 91);\r\n }\r\n ul > img{\r\n     width: 9em;\r\n     height:9em;\r\n     border-radius: 50%;\r\n     margin-left: 15px;\r\n     }\r\n     p.borda{\r\n      font-size: 1vw;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/post/post.html":
/*!********************************!*\
  !*** ./src/app/post/post.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/home\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n    <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content  modal-sm\" >\r\n            <div class=\"modal-header\" >\r\n                <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              <div class=\"row\">\r\n                <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"text-align: center;\">\r\n              <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"report(post)\">Sim</button>-->\r\n              <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--/ Modal box-->\r\n  <!--Modal demandas similares-->\r\n  <div class=\"modal fade\" id=\"Posts\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n          <div class=\"modal-dialog\" >\r\n            <div class=\"modal-content\" style=\"background-color:rgb(242,244,247)\">\r\n              <div class=\"modal-header \">\r\n                  <button #closeModalDemandsButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                  <h3 class=\"modal-title\" id=\"modalLabel\">Verifique se existe alguma demanda similar a sua!</h3>\r\n                  <h5>Caso não exista, continue criando sua demanda para que todos possam ter acesso!</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"mar rolavel\" style=\"margin-top:0px\">\r\n                  <div class=\"card\" style=\"padding-bottom:15px\" *ngFor=\"let post of postsSimilar \">\r\n\r\n                    <div class=\"card-header textleft\">\r\n                      <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n                        <img [src]=\"post?.user.profilePicture\" style=\"object-fit:cover; border-radius: 50%;\">\r\n                      </div>\r\n                      <p style=\"padding-top:5px;\">\r\n                        <a style=\"color:#0066cc\">  {{post?.user.name}}</a>\r\n                        publicou\r\n                        <b>{{post?.title}}</b>\r\n                        em<br>\r\n                        <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n                        {{post?.location}} {{post?.date}} às {{post?.hour}}\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"background-color:#fff;         border-radius: 10px;\">\r\n                      <img [src]=\"post?.image\" style=\"width:100%\">\r\n                      <p>\r\n                      {{post?.description}}\r\n                      </p>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                      <div class=\"linha\"></div>\r\n                      <ul class=\"list-inline\">\r\n                        <div class=\"pull-left\">\r\n                            <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 0px;\r\n                            font-size: 15px;color:#3366BB\"></i></a>\r\n                          <a style=\"\r\n                          font-size: 14px;color:#3366BB\">  {{post?.likes}}</a>\r\n                          </div>\r\n                              <div class=\" pull-right\"  >\r\n                                <i class=\"fa fa-comments btn btn-link \" style=\"padding-right:0; \"></i>\r\n                                <a class=\"btn btn-link \" style=\"padding:0;color: #0066cc; margin-right: 20px;\" (click)=\"post.showcomment=!post.showcomment\">\r\n                                {{post?.commentnum}} comentários\r\n                                </a>\r\n                              </div>\r\n\r\n\r\n                          </ul>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"card-footer\"  style=\"background-color:#fff;\" *ngIf=\"post.showcomment\">\r\n                        <div class=\"linha2\"></div>\r\n                      <div class=\"card-header textleft\">\r\n                        <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                          <img [src]=\"post?.comment.user.profilePicture\" style=\"object-fit:cover;border-radius: 50%;\">\r\n                        </div>\r\n                        <p class=\"borda\">\r\n                          <a style=\"color:#3366BB\">  {{post?.comment.user.name}}</a>\r\n                          <br>\r\n                          {{post?.comment.com}}\r\n                        </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"textleft inputWithIcon\" >\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\">\r\n                    <i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green\" data-dismiss=\"modal\" (click)=\"demand()\">Continuar demanda</button>\r\n            </div>\r\n          </div>\r\n                <!--/Card-->\r\n    </div>\r\n  </div>\r\n  <!--/Modal demandas similares-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"group\" *ngIf=\"card1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <p style=\"color:#0066cc\">Qual o tipo da sua demanda?</p>\r\n            <input type=\"radio\" name=\"tipo\" style=\"margin:10px;\" checked>Sugestão\r\n            <input type=\"radio\" name=\"tipo\" style=\"margin:10px;\">Problema\r\n            <br>\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\" id=\"local\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"campus\">\r\n              Selecione o Campus\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select id=\"campus\" name=\"campus\">\r\n              <option value=\"1\">Ceilândia</option>\r\n              <option value=\"2\" selected>Darcy Ribeiro</option>\r\n              <option value=\"3\">Gama</option>\r\n              <option value=\"4\">Planaltina</option>\r\n            </select>\r\n            <br>\r\n            <button style=\"margin-top: 20px;\" type=\"submit\" class=\"btn btn-green btn-block\" (click)=\"proxcard()\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"card2\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n              <p style=\"color:#0066cc\">Sua demanda está localizada\r\n              em um ambiente externo ou interno?</p>\r\n              <input type=\"radio\" name=\"space\" value=\"intern\" (click) = \"setradio('intern')\" style=\"margin:10px;\" ngModel>Interno\r\n                  <input type=\"radio\" name=\"space\" value=\"extern\" (click) = \"setradio('extern')\" style=\"margin:10px;\" ngModel>Externo\r\n                  <br>\r\n                  <br>\r\n            <i class=\"fa fa-sitemap\" aria-hidden=\"true\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"category\">\r\n              Selecione uma opção de categoria para sua demanda.\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select id=\"category\" name=\"category\">\r\n                <option value=\"1\">Elétrica</option>\r\n                <option value=\"2\">Estrutural</option>\r\n                <option value=\"3\">Hidráulica</option>\r\n                <option value=\"4\">Jardim</option>\r\n              </select>\r\n            <br>\r\n            <button style=\"margin-top: 20px;\" type=\"submit\" class=\"btn btn-green btn-block\" (click)=\"ambiente()\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"card3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\" id=\"local\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"predio\">\r\n              Selecione o local\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select *ngIf=\"predio\" name=\"predio\">\r\n            </select>\r\n            <br>\r\n            <button style=\"margin-bottom: 20px;\" type=\"button\" class=\"btn btn-green btn-block\" (click)=\"lastpart()\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"card4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n             <i class=\"fa fa-map-marker\" aria-hidden=\"true\" id=\"local\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"ambiente\">\r\n              Selecione agora uma opção de ambiente no qual sua demanda está localizada\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select *ngIf=\"ambienteIn\" name=\"ambiente\">\r\n                <option value=\"1\">Sala</option>\r\n                <option value=\"2\">Corredor</option>\r\n                <option value=\"3\">Gama</option>\r\n                <option value=\"4\">Planaltina</option>\r\n            </select>\r\n            <select *ngIf=\"ambienteOut\" name=\"ambiente\">\r\n                <option value=\"1\">Pista</option>\r\n                <option value=\"2\">Corredor</option>\r\n                <option value=\"3\">Gama</option>\r\n                <option value=\"4\">Planaltina</option>\r\n            </select>\r\n            <br>\r\n            <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green btn-block\" data-toggle=\"modal\" data-target=\"#Posts\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"posts\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header text-center\">\r\n              <h4>Vamos criar sua demanda!</h4>\r\n            </div>\r\n            <div class=\"card-body text-center\">\r\n                <label for=\"titleDemand\" style=\"color:#0066cc; font-size: 14px\">Dê um título à sua demanda</label>\r\n                <input type=\"text\" id=\"titleDemand\" required maxlength=\"25\" style=\"border-radius:10px\">\r\n                <br>\r\n                <br>\r\n                <label for=\"description\" style=\"color:#0066cc; font-size: 14px\">Faça uma breve descrição sobre a demanda e o local onde está localizada (ex: sala BT15/18)</label>\r\n                <textarea type=\"text\" id=\"description\" required maxlength=\"150\" style=\"width: 100%; height: 100px;\"></textarea>\r\n                <br>\r\n                <br>\r\n                <br>\r\n              <i class=\"fa fa-camera text-justify\" aria-hidden=\"true\" id=\"local\" style=\"font-size:48px\"></i>\r\n              <br>\r\n              <label>\r\n                Insira uma foto\r\n              </label>\r\n              <br>\r\n              <br>\r\n              <input class=\"text-justify\" type=\"file\" style=\"font-size: 14px;\">\r\n              <br>\r\n              <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green btn-block\">Publicar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      <!--Modal demandas similares-->\r\n      <div class=\"modal fade\" id=\"Posts\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n          <div class=\"modal-dialog\" >\r\n            <div class=\"modal-content\" style=\"background-color:rgb(242,244,247)\">\r\n              <div class=\"modal-header \">\r\n                  <button #closeModalDemandsButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                  <h3 class=\"modal-title\" id=\"modalLabel\">Verifique se existe alguma demanda similar a sua!</h3>\r\n                  <h5>Caso não exista, continue criando sua demanda para que todos possam ter acesso!</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"mar rolavel\" style=\"margin-top:0px\">\r\n                  <div class=\"card\" *ngFor=\"let post of postsSimilar \">\r\n\r\n                    <div class=\"card-header textleft\">\r\n                      <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n                        <img [src]=\"post?.user.profilePicture\" style=\"object-fit:cover; border-radius: 50%;\">\r\n                      </div>\r\n                      <p style=\"padding-top:5px;\">\r\n                        <a style=\"color:#0066cc\">  {{post?.user.name}}</a>\r\n                        publicou\r\n                        <b>{{post?.title}}</b>\r\n                        em<br>\r\n                        <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n                        {{post?.location}} {{post?.date}} às {{post?.hour}}\r\n                      </p>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"background-color:#fff;         border-radius: 10px;\">\r\n                      <img [src]=\"post?.image\" style=\"width:100%\">\r\n                      <p>\r\n                      {{post?.description}}\r\n                      </p>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                      <div class=\"linha\"></div>\r\n                      <ul class=\"list-inline\">\r\n                        <div class=\"pull-left\">\r\n                            <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 0px;\r\n                            font-size: 15px;color:#3366BB\"></i></a>\r\n                          <a style=\"\r\n                          font-size: 14px;color:#3366BB\">  {{post?.likes}}</a>\r\n                          </div>\r\n                          <div class=\"textl pull-right\">\r\n                            <i class=\"fa fa-comments btn btn-link \" style=\"padding-right:13px;\"></i>\r\n                            <a class=\"btn btn-link \" style=\"padding:0;\" (click)=\"post.showcomments=!post.showcomments\">\r\n                            {{post?.commentnum}} comentários\r\n                            </a>\r\n                          </div>\r\n\r\n                      </ul>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"card-footer\"  style=\"background-color:#fff;\" *ngIf=\"post.showcomment\">\r\n                        <div class=\"linha2\"></div>\r\n                      <div class=\"card-header textleft\">\r\n                        <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                          <img [src]=\"post?.comment.user.profilePicture\" style=\"object-fit:cover;border-radius: 50%;\">\r\n                        </div>\r\n                        <p class=\"borda\">\r\n                          <a style=\"color:#3366BB\">  {{post?.comment.user.name}}</a>\r\n                          <br>\r\n                          {{post?.comment.com}}\r\n                        </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green\" data-dismiss=\"modal\" (click)=\"demand()\">Continuar demanda</button>\r\n            </div>\r\n          </div>\r\n                <!--/Card-->\r\n    </div>\r\n  </div>\r\n        <!--/Modal demandas similares-->\r\n</div>\r\n<script src=\"post.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/post/post.ts":
/*!******************************!*\
  !*** ./src/app/post/post.ts ***!
  \******************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
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

 // Added
var PostComponent = /** @class */ (function () {
    function PostComponent(_router) {
        this._router = _router;
        this.card1 = true;
        this.card2 = false;
        this.card3 = false;
        this.card4 = false;
        this.predio = true;
        this.posts = false;
        this.ambienteIn = false;
        this.ambienteOut = false;
        this.selectedLink = " ";
        this.postsSimilar = [];
        this.postsSimilar.push({
            id: 0,
            title: 'Poste perigoso',
            image: './assets/img/poste.jpeg',
            location: 'ICC Norte',
            description: 'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
            likes: 11,
            commentnum: 2,
            ranking: 1,
            liked: true,
            date: '11/11/2018',
            hour: '16:11',
            showcomment: false,
            user: {
                name: 'Funaaa',
                profilePicture: './assets/img/avatar.png',
            },
            comment: {
                user: { name: 'Gabriela',
                    profilePicture: './assets/img/avatar.png',
                },
                com: 'hahahaha vish que coisa!',
            }
        }, {
            id: 1,
            title: 'Poste perigoso',
            image: './assets/img/poste.jpeg',
            location: 'ICC Norte',
            description: 'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
            likes: 11,
            commentnum: 2,
            ranking: 1,
            liked: true,
            date: '11/11/2018',
            hour: '16:11',
            showcomment: false,
            user: {
                name: 'Funaaa',
                profilePicture: './assets/img/avatar.png',
            },
            comment: {
                user: { name: 'Gabriela',
                    profilePicture: './assets/img/avatar.png',
                },
                com: 'hahahaha vish que coisa!',
            }
        });
    }
    PostComponent.prototype.proxcard = function () {
        this.card1 = !this.card1;
        this.card2 = !this.card2;
    };
    PostComponent.prototype.setradio = function (e) {
        this.selectedLink = e;
    };
    PostComponent.prototype.isSelected = function (name) {
        if (!this.selectedLink) {
            return false;
        }
        return (this.selectedLink === name);
    };
    PostComponent.prototype.ambiente = function () {
        if (this.selectedLink === "intern") {
            this.card2 = !this.card2;
            this.card3 = !this.card3;
        }
        else if (this.selectedLink == "extern") {
            this.card2 = !this.card2;
            this.card4 = !this.card4;
            this.ambienteOut = !this.ambienteOut;
        }
        else
            alert('Marque uma opção de espaço.');
    };
    PostComponent.prototype.lastpart = function () {
        this.card3 = !this.card3;
        this.card4 = !this.card4;
        this.ambienteIn = !this.ambienteIn;
    };
    PostComponent.prototype.demand = function () {
        this.card4 = !this.card4;
        this.posts = !this.posts;
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.html */ "./src/app/post/post.html"),
            styles: [__webpack_require__(/*! ./post.css */ "./src/app/post/post.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/ranking/grd-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/ranking/grd-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: GrdFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrdFilterPipe", function() { return GrdFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GrdFilterPipe = /** @class */ (function () {
    function GrdFilterPipe() {
    }
    GrdFilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    GrdFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'grdFilter'
        })
    ], GrdFilterPipe);
    return GrdFilterPipe;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.css":
/*!*************************************!*\
  !*** ./src/app/ranking/ranking.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 1%;\r\n}\r\n.icon-background {\r\n    color: #add8e6;\r\n}\r\n.icon-background1 {\r\n    color: #ffd700;\r\n}\r\n.icon-background2 {\r\n    color: #c0c0c0;\r\n}\r\n.icon-background3 {\r\n    color: #cd7f32;\r\n}\r\ninput[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  color:#3366BB;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n    width: 100%;\r\n    margin: 10px;\r\n\r\n    }\r\n.s-sidebar__nav-link {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    color:white;\r\n    margin: 0;\r\n    }\r\n.s-sidebar__nav-link em {\r\n      position: absolute;\r\n      left: 3.5em;\r\n      -webkit-transform: translateY(-50%);\r\n              transform: translateY(-50%);\r\n      }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n      position: absolute;\r\n      top: 0;\r\n      width: 4em;\r\n      }\r\n.s-sidebar__nav-link > i::before {\r\n      position: absolute;\r\n      top: 90%;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, -50%);\r\n              transform: translate(-50%, -50%);\r\n      }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover{\r\n      color: rgb(101, 191, 91);\r\n  }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  .s-sidebar__nav {\r\n     width: 4em;\r\n     left: 0;\r\n  }\r\n\r\n  .s-sidebar__nav ul{\r\n   top: 1.3em;\r\n  }\r\n  .s-sidebar__nav-link{\r\n    top: 2.3em;\r\n    }\r\n\r\n  .s-sidebar__nav:hover em,\r\n  .s-sidebar__nav:focus em,\r\n  .s-sidebar__nav:hover ,\r\n  .s-sidebar__trigger:hover + .s-sidebar__nav,\r\n  .s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n  {\r\n     width: 11em;\r\n     color: white;\r\n  }\r\n  .s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n  .s-sidebar__nav:hover img,\r\n  .s-sidebar__nav:focus img {\r\n   width: 9em;\r\n   height: 9em;\r\n   margin-left: 15px;\r\n  }\r\n  .s-sidebar__nav:hover ul,\r\n  .s-sidebar__nav:focus ul\r\n  {\r\n   top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\nul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n     width: 11em;\r\n  }\r\n  .list-inline{\r\n\r\n    font-size: 14px;\r\n  }\r\n  .s-sidebar__nav ul {\r\n     top: 1.3em;\r\n  }\r\n  .s-sidebar__nav em,\r\n  .s-sidebar__nav .collapse.in a{\r\n   color: white;\r\n   }\r\n   .s-sidebar__nav-link em:hover,\r\n   .s-sidebar__nav-link li:hover,\r\n   .s-sidebar__nav .collapse.in a:hover\r\n   {\r\n       color: rgb(101, 191, 91);\r\n   }\r\n   ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/ranking/ranking.html":
/*!**************************************!*\
  !*** ./src/app/ranking/ranking.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n      <li>\r\n      <a style=\"margin-bottom:0px\"><select class=\"search-txt \" [(ngModel)]=\"campus\" style=\"border:none; font-weight: 400;margin-left:10px\" name=\"campus\">\r\n      <option value=\"Geral\">Geral</option>>\r\n      <option value=\"Darcy Ribeiro\" value=\"1\">Darcy Ribeiro</option>\r\n      <option value=\"Ceilandia\" value=\"2\">Ceilandia</option>\r\n      <option value=\"Planaltina\" value=\"3\">Planaltina</option>\r\n      <option value=\"Gama\" value=\"4\">Gama</option>\r\n      </select></a></li>\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n  <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content  modal-sm\" >\r\n          <div class=\"modal-header\" >\r\n              <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <div class=\"row\">\r\n              <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"text-align: center;\">\r\n            <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"report(post)\">Sim</button>-->\r\n            <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <!--/ Modal box-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Cabeçalho-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header textcenter\">\r\n          <h2 style=\"color:#0066cc;\">Ranking</h2>\r\n        </div>\r\n      </div>\r\n  <!--/Cabeçalho-->\r\n  <!--Card-->\r\n\r\n  <div class=\"card\"  *ngFor=\"let post of posts; index as i\">\r\n    <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\">\r\n      <div class=\"col-md-4 firstcol column\">\r\n        <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n      </div>\r\n      <div class=\"col-md-4 secndcol column\">\r\n        <div class=\"row \" >\r\n         <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"   (click)=\"post.collapsed=!post.collapsed\">{{post?.title}}</a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <a class=\"text-muted\" style=\"font-size:13px;\"> {{post?.created_date}}</a>&nbsp;\r\n          <br>\r\n          <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n          <a href=\"#\" style=\"color:black;font-size:15px;\">{{post?.local}}</a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px;\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-thumbs-up\"></i>{{post?.total_likes}}</a>&nbsp;\r\n          <a href=\"#\" style=\"font-family:Arial;font-size:13px;\" class=\"text-muted\" (click)=\"post.collapsed=!post.collapsed; post.showcomment=!post.showcomment\"><i style=\"color:#0066cc;font-size:13px\" class=\"fa fa-comment\"></i>{{post?.comments?.length}} comentários</a>\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-4 thirdcol column\" >\r\n          <span class=\"fa-stack fa-lg\">\r\n            <i class=\"fa fa-circle fa-stack-2x icon-background\"></i>\r\n            <i class=\"fa fa-circle-thin fa-stack-2x\" style=\"color:blue\"></i>\r\n              <strong class=\"fa-stack-1x\" style=\"color:blue\">\r\n              {{i+1}}\r\n              </strong>\r\n          </span>\r\n        </div>\r\n    </div>\r\n  <!--Expanded card1-->\r\n  <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n    <div class=\"linha\"></div>\r\n    <div class=\"pull-right\">\r\n      <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n        <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-header textleft\">\r\n      <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n        <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%;\">\r\n      </div>\r\n      <p style=\"padding-top:5px;\">\r\n        <a>  {{post?.name}}</a>\r\n        publicou\r\n        <b>{{post?.title}}</b>\r\n        em<br>\r\n        <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n        {{post?.local}}\r\n      </p>\r\n    </div>\r\n    <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n      <img [src]=\"post?.image_demand\" style=\"width:100%\">\r\n      <p>\r\n      {{post?.description}}\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n      <div class=\"linha\"></div>\r\n      <ul class=\"list-inline\">\r\n        <div class=\"pull-left\">\r\n            <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n            font-size: 15px;color:#3366BB\"></i></a>\r\n          <a style=\"\r\n          font-size: 14px;color:#3366BB\">  {{post?.total_likes}}</a>\r\n          </div>\r\n          <div class=\"textl pull-right\">\r\n            <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n            <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"post.showcomments=!post.showcomments;\">\r\n            {{post?.comments?.length}} comentários\r\n            </a>\r\n          </div>\r\n\r\n      </ul>\r\n\r\n        </div>\r\n      </div>\r\n          <div class=\"linha2\"></div>\r\n    </div>\r\n    <div class=\"card-footer\" *ngIf = \"post.showcomments\">\r\n      <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments;\">\r\n        <div class=\"col-xs-2\" style=\"width:auto;\">\r\n          <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%;\">\r\n        </div>\r\n        <p class=\"borda\">\r\n          <a>  {{comment.name}}</a>\r\n\r\n          <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n          <br>\r\n          {{comment.comment}}\r\n\r\n\r\n\r\n\r\n        </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"textleft inputWithIcon\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\" [(ngModel)]=\"comment\">\r\n      <a (click)=\"newComment(post, comment)\"><i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i></a>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!--/Card-->\r\n\r\n<script src=\"ranking.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/ranking/ranking.ts":
/*!************************************!*\
  !*** ./src/app/ranking/ranking.ts ***!
  \************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var RankingComponent = /** @class */ (function () {
    function RankingComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        /*
        
        image_demand:"",
        image_profile:"",
        total_likes:"",
        demand_id:"",
        title:"",
        description:"",
        created_date:"",
        name:"",
        local:"",
        status:"",
        campus:"",
        type_demand:"",
        owner_demands:"",
        gave_like: "",
        comments: [],
        answers: []
    
        */
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getRankingDemands({}, '').then(function (response) {
            console.log(response);
            console.log(response.json());
            response = response.json();
            // this.posts = response['dados'];
            for (var i = 0; i < response['dados'].length; i++) {
                response['dados'][i].collapsed = false;
                _this.posts.push(response['dados'][i]);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    RankingComponent.prototype.like = function (post) {
        //Remove like
        if (post.gave_like == "true") {
            this.server.unlikeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes -= 1;
                post.gave_like = "false";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
        //Add like
        else {
            this.server.likeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes += 1;
                post.gave_like = "true";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    RankingComponent.prototype.newComment = function (post, comment) {
        //Add comment
        this.server.commentDemand(this.server.token, post.demand_id, comment).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RankingComponent.prototype.delComment = function (post) {
        //Delete comment
        this.server.deleteComment(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RankingComponent.prototype.report = function (post) {
        this.server.reportDemand(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RankingComponent.prototype.changeInfo = function (accessToken, image, email, password, pswconfirm) {
        this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.html */ "./src/app/ranking/ranking.html"),
            styles: [__webpack_require__(/*! ./ranking.css */ "./src/app/ranking/ranking.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/solved/solved.css":
/*!***********************************!*\
  !*** ./src/app/solved/solved.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\ninput[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  color: #3366BB;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n   border-radius: 50%;\r\n   width:70px;\r\n   height:70px;\r\n\r\n  }\r\n.rounded2{\r\n  border-radius: 50%;\r\n  width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/solved/solved.html":
/*!************************************!*\
  !*** ./src/app/solved/solved.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/home\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a routerLink=\"/home\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n           <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"login-box-body\">\r\n             <div>\r\n               <img src=\"./assets/img/avatar.png\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n             </div>\r\n             <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n             <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n             <input class=\"form-control\" id=\"perfilImg\" type=\"file\" name=\"perfilImg\" accept=\"image/*\" [(ngModel)]=\"image\"/>\r\n\r\n\r\n             <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n              <!----- username -------------->\r\n              <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n              <p style=\"font-size: 1.3rem\">Felipe Dias Pinheiro</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n              <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n              <p style=\"font-size: 1.3rem\">12/1234567</p>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n             <p style=\"font-size: 1.3rem\"> 1234567</p>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n            <p style=\"font-size: 1.3rem\"> 11/12/1994</p>\r\n          </div>\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\" />\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\" [class.has-error]=\"password1.touched && password1.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Nova senha</label>\r\n             <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\" #password1=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password1.touched && password1.errors?.required\">\r\n             Digite uma senha\r\n             </span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" [class.has-error]=\"password2.touched && password2.invalid\">                    <!----- password -------------->\r\n             <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n             <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"pswconfirm\" signUpConfirmEqualValidator=\"password\" required [(ngModel)]=\"pswconfirm\" #password2=\"ngModel\">\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.required\">\r\n             Confirme sua senha\r\n             </span>\r\n             <span style=\"color: red; font-size: 11px;\" *ngIf=\"password2.touched && password2.errors?.notEqual && !password2.errors?.required\">\r\n             As senhas devem ser iguais\r\n             </span>\r\n\r\n             <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n             <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n             <div id=\"excluir\" class=\"collapse\">\r\n\r\n               <label style=\"font-size: 1.3rem\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n               <div class=\"row\">\r\n\r\n               <div class=\"btncolumn1\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\">\r\n               </div>\r\n\r\n               <div class=\"btncolumn2\" style=\"color:white;\">\r\n               <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\">\r\n\r\n               </div>\r\n               </div>\r\n\r\n             </div>\r\n\r\n              <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\">\r\n\r\n            </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <!--/modal editar perfil-->\r\n    <div class=\"modal fade \" id=\"post01\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content  modal-sm\" >\r\n            <div class=\"modal-header\" >\r\n                <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n              <div class=\"row\">\r\n                <h4 style=\"color:red;text-align: center;\" class=\"modal-title\" id=\"modalLabel\">Denunciar publicação</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"text-align: center;\">\r\n              <p style=\"color:black;font-size:20px;\">Esta publicação será denunciada. Deseja continuar?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"report(post)\">Sim</button>-->\r\n              <button type=\"button\" class=\"btn btn-danger\">Sim</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">N&atilde;o</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!--/ Modal box-->\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul>\r\n        <img src=\"./assets/img/avatar.png\">\r\n        <br>\r\n        <em style=\"padding-left:10%;\">Felipe Dias Pinheiro</em>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse in\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\" routerLink=\"/solved\">Solucionadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Cabeçalho-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header textcenter\">\r\n          <h2 style=\"color:#0066cc;\">Demandas Solucionadas</h2>\r\n        </div>\r\n      </div>\r\n  <!--Cabeçalho-->\r\n  <!--Card-->\r\n  <div class=\"card\" *ngFor=\"let post of posts\">\r\n    <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\">\r\n      <div class=\"col-md-4 firstcol column\">\r\n        <img [src]=\"post?.image\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n      </div>\r\n      <div class=\"col-md-4 secndcol column\">\r\n        <div class=\"row \" >\r\n          <a style=\"font-size: 16px; text-decoration: none; color:#0066cc;\" (click)=\"post.collapsed=!post.collapsed\">{{post?.title}}</a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <a class=\"text-muted\"style=\"font-size:13px;\"> {{post?.date}} às {{post?.hour}}</a>&nbsp;\r\n            <br>\r\n          <i class=\"fa fa-map-marker\" style=\"color: rgb(184, 185, 186); font-size:15px;\"></i>\r\n          <a href=\"#\" style=\"color:black;font-size:15px\">{{post?.location}}</a>\r\n        </div>\r\n        <div class=\"row\">\r\n          <a href=\"#\" class=\"text-muted\" style=\"font-family:Arial;font-size:13px\"><i style=\"color:#0066cc;font-size:13px;\" class=\"fa fa-thumbs-up\" style=\"font-size:13px;color:#0066cc\"></i>{{post?.likes}}</a>&nbsp;\r\n          <a href=\"#\" style=\"font-family:Arial;font-size:13px\" class=\"text-muted\"><i style=\"color:#0066cc;font-size:13px;\" class=\"fa fa-comment\"style=\"font-size:13px;color:#0066cc\"></i>{{post?.commentnum}} comentários</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 thirdcol column\" >\r\n        <i class=\"fa fa-check-circle\" style=\"font-size:24px; color:rgb(101, 191, 91);\" title=\"Solucionado!\"></i>\r\n      </div>\r\n    </div>\r\n  <!--Expanded card1-->\r\n    <div class=\"card\"style=\"padding-bottom:15px;\"*ngIf=\"post.collapsed\">\r\n        <div class=\"linha2\"></div>\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#post01\"  aria-controls=\"post01\">\r\n          <i class=\"fa fa-exclamation\" style=\"font-size:30px; color:#dc3545\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.user.profilePicture\" style=\"object-fit:cover; border-radius: 50%;\">\r\n        </div>\r\n        <p style=\"padding-top:5px;\">\r\n          <a>  {{post?.user.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b>\r\n          em<br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray;\" name=\"pin\"></i>\r\n          {{post?.location}} {{post?.date}} às {{post?.hour}}\r\n        </p>\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n        <img [src]=\"post?.image\" style=\"width:100%\">\r\n        <p>\r\n        {{post?.description}}\r\n        </p>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n        <ul class=\"list-inline\">\r\n          <div class=\"pull-left\">\r\n              <a (click)=\"like(post)\"><i class=\"fa fa-thumbs-up btn btn-link\" style=\"  margin-left: 20px;\r\n              font-size: 15px;color:#3366BB\"></i></a>\r\n            <a style=\"\r\n            font-size: 14px;color:#3366BB\">  {{post?.total_likes}}</a>\r\n            </div>\r\n            <div class=\"textl pull-right\">\r\n              <a><i class=\"fa fa-comments btn btn-link \" style=\"padding-right:5px;font-size: 15px;color:#3366BB\"></i></a>\r\n              <a class=\"btn btn-link \" style=\"margin-right:20px;\" (click)=\"post.showcomments=!post.showcomments; comment(post)\">\r\n              {{post?.comments?.length}} comentários\r\n              </a>\r\n            </div>\r\n\r\n        </ul>\r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n      </div>\r\n      <div class=\"card-footer\" *ngIf=\"post.showcomments\">\r\n        <div class=\"card-header textleft\">\r\n          <div class=\"col-xs-2\" style=\"width:auto;\">\r\n            <img [src]=\"post?.comment.user.profilePicture\" style=\"object-fit:cover;border-radius: 50%;\">\r\n          </div>\r\n          <p class=\"borda\">\r\n            <a>  {{post?.comment.user.name}}</a>\r\n\r\n            <a class=\"btn btn-link fa fa-trash pull-right\" style=\"padding:0;\"></a>\r\n            <br>\r\n            {{post?.comment.com}}\r\n\r\n\r\n\r\n\r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"textleft inputWithIcon\" >\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;\">\r\n      <i  class=\"fa fa-mail-forward btn btn-link \" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n </div>\r\n</div>\r\n  </div>\r\n</div>\r\n<!--/Card-->\r\n\r\n  <!--/ wrapper-->\r\n  <script src=\"solved.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/solved/solved.ts":
/*!**********************************!*\
  !*** ./src/app/solved/solved.ts ***!
  \**********************************/
/*! exports provided: SolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolvedComponent", function() { return SolvedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var SolvedComponent = /** @class */ (function () {
    function SolvedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
    }
    SolvedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSelectedDemands({}).then(function (response) {
            console.log(response);
            console.log(response.json());
            response = response.json();
            _this.posts = response['dados'];
        }).catch(function (error) {
            console.log(error);
        });
    };
    SolvedComponent.prototype.like = function (post) {
        //Remove like
        if (post.gave_like == "true") {
            this.server.unlikeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes -= 1;
                post.gave_like = "false";
                console.log(post.gave_like);
            }).catch(function (error) {
                console.log(error);
            });
        }
        //Add like
        else {
            this.server.likeDemand(this.server.token, post.demand_id).then(function (response) {
                console.log(response);
                post.total_likes += 1;
                post.gave_like = "true";
                console.log(post.gave_like);
                console.log(post.total_likes);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    SolvedComponent.prototype.newComment = function (post, comment) {
        //Add comment
        this.server.commentDemand(this.server.token, post.demand_id, comment).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    SolvedComponent.prototype.delComment = function (post) {
        //Delete comment
        this.server.deleteComment(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    SolvedComponent.prototype.report = function (post) {
        this.server.reportDemand(this.server.token, 1).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    SolvedComponent.prototype.changeInfo = function (accessToken, image, email, password, pswconfirm) {
        this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    SolvedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solved',
            template: __webpack_require__(/*! ./solved.html */ "./src/app/solved/solved.html"),
            styles: [__webpack_require__(/*! ./solved.css */ "./src/app/solved/solved.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], SolvedComponent);
    return SolvedComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/providers/server.ts":
/*!*********************************!*\
  !*** ./src/providers/server.ts ***!
  \*********************************/
/*! exports provided: ServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerProvider", function() { return ServerProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';
var BASE_URL = "http://sosunb.000webhostapp.com/api";
//const BASE_URL = "http://homol.redes.unb.br/sos-unb/api";
var MY_TOKEN = "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zb3N1bmIuMDAwd2ViaG9zdGFwcC5jb21cL2FwaVwvIiwic3ViIjoiMSIsImV4cCI6MTU0MjM5MjgwNCwiaWF0IjoxNTQyMzA2NDA0LCJ1c2VyIjoiVXNlciAxIiwicHJvZmlsZV90eXBlX2lkIjoiMiJ9.4N6pBZEKl-YIF0kU4TjF3tZaLmz9m3poC62cS1JoR5w";
var ServerProvider = /** @class */ (function () {
    function ServerProvider(http) {
        this.http = http;
        this.hasCusId = false;
        this.user = {};
    }
    //FEED
    ServerProvider.prototype.getFeedDemands = function (accessToken, params, limit) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('status', params.hasOwnProperty('status') ? params.status : '');
        body.set('limit', limit);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/get-demands/feed', body.toString(), options).toPromise();
    };
    //RANKING
    ServerProvider.prototype.getRankingDemands = function (accessToken, params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('campus', params.hasOwnProperty('campus') ? params.campus : '');
        console.log(body.toString());
        return this.http.post(BASE_URL + '/get-demands/ranking', body.toString(), options).toPromise();
    };
    //DEMANDS
    ServerProvider.prototype.getSelectedDemands = function (accessToken) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/get-demands/profile', body.toString(), options).toPromise();
    };
    //HOME PAGE
    // Registration
    ServerProvider.prototype.createUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('name', user.name);
        body.set('email', user.email);
        body.set('registry', user.registry);
        body.set('identity', user.identity);
        body.set('password', user.password);
        body.set('conf_password', user.password);
        body.set('date_birth', user.date_birth);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/user/register', body.toString(), options).toPromise();
    };
    // Login
    ServerProvider.prototype.loginUser = function (email, password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('email', email);
        body.set('password', password);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/sessions/login', body.toString(), options).toPromise();
    };
    // Forgot password
    ServerProvider.prototype.newPsw = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('email', email);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/?', body.toString(), options).toPromise();
    };
    //POSTS FUNCTIONS
    // like demand
    ServerProvider.prototype.likeDemand = function (accessToken, params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('demands_id', params);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/like/add', body.toString(), options).toPromise();
    };
    ;
    // Unlike demand
    ServerProvider.prototype.unlikeDemand = function (accessToken, params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('demands_id', params);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/like/delete', body.toString(), options).toPromise();
    };
    ;
    // New comment
    ServerProvider.prototype.commentDemand = function (accessToken, params, comment) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('demands_id', params);
        body.set('comment', comment);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/coments/add', body.toString(), options).toPromise();
    };
    // Delete comment
    ServerProvider.prototype.deleteComment = function (accessToken, commentId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('comment_id', '1');
        console.log(body.toString());
        return this.http.post(BASE_URL + '/comments/delete', body.toString(), options).toPromise();
    };
    // Report demand
    ServerProvider.prototype.reportDemand = function (accessToken, demandId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('demands_id', '1');
        console.log(body.toString());
        return this.http.post(BASE_URL + '/?', body.toString(), options).toPromise();
    };
    //POST PAGE
    //PROFILE FUNCTIONS
    // Change infos
    ServerProvider.prototype.updateInfo = function (accessToken, photo, email, newPass, newPassConf) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('image', photo);
        body.set('email', email);
        body.set('newPass', newPass);
        body.set('newPassConf', newPassConf);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/?', body.toString(), options).toPromise();
    };
    // Delete account
    ServerProvider.prototype.deleteAccount = function (accessToken, email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', MY_TOKEN);
        body.set('email', email);
        console.log(body.toString());
        return this.http.post(BASE_URL + '/?', body.toString(), options).toPromise();
    };
    ServerProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServerProvider);
    return ServerProvider;
}());



/***/ }),

/***/ "./src/shared/confirm-equal-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/shared/confirm-equal-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.signUpConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "signUpConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[signUpConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mariana\Desktop\angular\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map