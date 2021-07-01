(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n}\r\nlabel {\r\n  width: 100%;\r\n}\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n/* Overwrite default styles of hr */\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n/* Set a style for the submit/register button */\r\n.registerbtn {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n.registerbtn:hover {\r\n  opacity:1;\r\n}\r\n/* Add a blue text color to links */\r\na {\r\n  color: dodgerblue;\r\n}\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQSw2RUFBNkU7QUFDN0U7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5yZWdpc3RlcmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5yZWdpc3RlcmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuYSB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXHJcbi5zaWduaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Java\Project\git\market\web\src\main.ts */"zUnb");


/***/ }),

/***/ "1PcV":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n  max-width: 1024px;\r\n  margin: auto;\r\n}\r\n\r\n.item {\r\n  /* Add shadows to create the \"card\" effect */\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  margin-top: 10px;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n\r\n.item:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.card-body {\r\n  display: grid;\r\n  column-gap: 10px;\r\n  grid-template-columns: repeat(2, auto);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsdUNBQXVDOztBQUN2QztFQUNFLHdDQUF3QztBQUMxQzs7QUFFQSwrQ0FBK0M7O0FBQy9DO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEMiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTAyNHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4uaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







let RegisterComponent = class RegisterComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
    }
    registryUser(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.querySelector('#email').value;
        const password = target.querySelector('#psw').value;
        if (target.querySelector('#message').textContent !== 'matching') {
            return;
        }
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiHost + '/register/', {
            login: username,
            password: password
        }, {
            observe: "body",
            responseType: "text"
        }).subscribe(() => {
            this.router.navigate(['']);
        });
    }
    validatePassword(event) {
        const target = event.target;
        let password = target.closest('form').querySelector("#psw").value, confirmPassword = target.closest('form').querySelector("#psw-repeat").value, message = target.closest('form').querySelector('#message');
        if (password === confirmPassword) {
            message.style.color = 'green';
            message.innerHTML = 'matching';
        }
        else {
            message.style.color = 'red';
            message.innerHTML = 'not matching';
        }
    }
    checkLogin(event) {
        // console.log(event);
        const target = event.target;
        const login = target.value;
        let message = target.parentElement.querySelector('span');
        if (login === '') {
            message.innerHTML = '';
            return;
        }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiHost + '/register/' + login, {
            observe: "body",
            responseType: "text"
        }).subscribe((data) => {
            console.dir(message);
            if (login === data) {
                message.style.color = 'red';
                message.innerHTML = 'Login exist';
            }
            else {
                message.style.color = 'red';
                message.innerHTML = '';
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiHost + '/api/v1/products')
            .subscribe(data => {
            this.items = data;
            // console.log('items', this.items);
        });
    }
    onChangePage(pageOfItems) {
        // console.log('pageOfItems',pageOfItems);
        this.pageOfProduct = pageOfItems;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add a black background color to the top navigation */\r\n.topnav {\r\n  background-color: #333;\r\n  overflow: hidden;\r\n}\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n#cart{\r\n  float: right;\r\n}\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n/* Add a color to the active/current link */\r\n.topnav a.active {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n}\r\n/*@media screen and (max-width: 600px) {*/\r\n/*  .topnav a{*/\r\n/*    float: none;*/\r\n/*    display: block;*/\r\n/*    text-align: left;*/\r\n/*    width: 100%;*/\r\n/*    margin: 0;*/\r\n/*    padding: 14px;*/\r\n/*  }*/\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLHVDQUF1QztBQUN2QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUEseUNBQXlDO0FBQ3pDLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixNQUFNO0FBQ04sSUFBSSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbiNjYXJ0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4udG9wbmF2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLypAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgeyovXHJcbi8qICAudG9wbmF2IGF7Ki9cclxuLyogICAgZmxvYXQ6IG5vbmU7Ki9cclxuLyogICAgZGlzcGxheTogYmxvY2s7Ki9cclxuLyogICAgdGV4dC1hbGlnbjogbGVmdDsqL1xyXG4vKiAgICB3aWR0aDogMTAwJTsqL1xyXG4vKiAgICBtYXJnaW46IDA7Ki9cclxuLyogICAgcGFkZGluZzogMTRweDsqL1xyXG4vKiAgfSovXHJcbi8qfSovXHJcbiJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiHost: 'http://localhost:8080/market'
};


/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div id=\"buttons\">-->\r\n<!--  <a routerLink=\"/login\" class=\"button\">Login</a>-->\r\n<!--  <a routerLink=\"/admin\" class=\"button\">Go to admin</a>-->\r\n<!--</div>-->\r\n<div class=\"content\">\r\n  <div class=\"card m-3\">\r\n    <h3 class=\"card-header\">Товары</h3>\r\n    <div class=\"card-body\">\r\n      <div *ngFor=\"let item of pageOfProduct\">\r\n        <div class=\"item\" data-id=\"{{item.id}}\">\r\n<!--          <img src=\"img_avatar.png\" alt=\"Avatar\" style=\"width:100%\">-->\r\n          <div class=\"container\">\r\n            <h4><b>{{item.name}}</b></h4>\r\n            <p>Цена {{item.price}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer pb-0 pt-3\">\r\n      <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "M2Tr":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"card m-3\">\n    <h3 class=\"card-header\">Товары</h3>\n    <div class=\"card-body\">\n      <div *ngFor=\"let item of items\">\n        <div class=\"item\" data-id=\"{{item.id}}\">\n          <!--          <img src=\"img_avatar.png\" alt=\"Avatar\" style=\"width:100%\">-->\n          <div class=\"container\">\n            <h4><b>{{item.name}}</b></h4>\n            <p>Цена {{item.price}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"registryUser($event)\">\n  <div class=\"container\">\n    <h1>Register</h1>\n    <p>Please fill in this form to create an account.</p>\n    <hr>\n\n    <label for=\"email\"><b>Email</b>\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\"\n             (change)=\"checkLogin($event)\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2, 4}$\" required>\n      <span id='email-confirm'></span>\n    </label>\n\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\"\n           (keyup)=\"validatePassword($event)\" required>\n\n    <label for=\"psw-repeat\"><b>Repeat Password</b>\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" id=\"psw-repeat\"\n             (keyup)=\"validatePassword($event)\" required>\n      <span id='message'></span>\n    </label>\n\n    <hr>\n\n<!--    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>-->\n    <button type=\"submit\" class=\"registerbtn\" >Register</button>\n  </div>\n</form>\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    padding: 20px;\r\n    text-align: center;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n#buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 500px;\r\n}\r\n\r\n.button {\r\n    padding: 20px;\r\n    color: white;\r\n    font-size: 30px;\r\n    border-radius: 10px;\r\n    background: black;\r\n    border: 1px solid black;\r\n    text-decoration: none;\r\n    margin: 20px;\r\n}\r\n\r\n.button:hover {\r\n    background: white;\r\n    color: black;\r\n}\r\n\r\n.content {\r\n  max-width: 1024px;\r\n  margin: auto;\r\n}\r\n\r\n.item {\r\n  /* Add shadows to create the \"card\" effect */\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  margin-top: 10px;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n\r\n.item:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.card-body {\r\n  display: grid;\r\n  column-gap: 10px;\r\n  grid-template-columns: repeat(2, auto);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLHVDQUF1Qzs7QUFDdkM7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUEsK0NBQStDOztBQUMvQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuI2J1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbi5pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.token = {};
    }
    onNavClick(event) {
        let target = event.target;
        // @ts-ignore
        document.querySelector('.topnav')
            .querySelectorAll('a').forEach(a => {
            if (a.id === target.id)
                target.classList.add('active');
            else if (target.localName === 'a')
                a.classList.remove('active');
        });
    }
    ngOnInit() {
        let path = window.location.pathname.split('/'), endPoint = path[path.length - 1];
        // @ts-ignore
        // document.querySelector(`#${endPoint==="" ? 'home':endPoint}`)
        //   .classList.add('active');
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topnav\" (click)=\"onNavClick($event)\">\r\n  <a routerLink=\"\" id=\"home\">Главная</a>\r\n  <a routerLink=\"cart\" id=\"cart\">Корзина</a>\r\n<!--  <a routerLink=\"/login\" id=\"login\">Login</a>-->\r\n  <app-login></app-login>\r\n</div>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_9__["JwPaginationComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "M2Tr");
/* harmony import */ var _cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.css */ "1PcV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "ccyI");







let CartComponent = class CartComponent {
    constructor(http, Auth) {
        this.http = http;
        this.Auth = Auth;
    }
    ngOnInit() {
        let userInfo = this.Auth.userInfoLogin;
        // @ts-ignore
        if (userInfo.token !== undefined) {
            // @ts-ignore
            let token = userInfo.token;
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiHost + '/api/v1/cart', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).subscribe(data => {
                this.items = data;
            });
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartComponent);



/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "AytR");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    setLoggedIn(value) {
        this.loggedInStatus = value;
    }
    get isLoggedIn() {
        return this.loggedInStatus;
    }
    setUserInfo(data) {
        this.userInfo = data;
    }
    get userInfoLogin() {
        return this.userInfo;
    }
    getUserDetails(username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHost + '/auth', {
            username,
            password
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\">\r\n  <form (submit)=\"loginUser($event)\" *ngIf=\"Auth.isLoggedIn===false else login\">\r\n    <input type=\"text\" placeholder=\"Username\" name=\"username\" id=\"username\">\r\n    <input type=\"text\" placeholder=\"Password\" name=\"psw\" id=\"password\">\r\n    <a routerLink=\"register\">Регистрация</a>\r\n    <button type=\"submit\">Login</button>\r\n  </form>\r\n  <ng-template #login>\r\n    <span class=\"hello\">Hello, {{username}}</span>\r\n  </ng-template>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style the input container */\r\n.login-container {\r\n  float: right;\r\n}\r\n/* Style the button inside the input container */\r\n.login-container button {\r\n  float: right;\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\na {\r\n  float: right;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n.login-container button:hover {\r\n  background: #ccc;\r\n}\r\n/* Style the input field inside the navbar */\r\ninput[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n  width: 150px; /* adjust as needed (as long as it doesn't break the topnav) */\r\n}\r\n/* Add responsiveness - On small screens, display the navbar vertically instead of horizontally */\r\n@media screen and (max-width: 600px) {\r\n  .login-container {\r\n    float: none;\r\n  }\r\n  /*.topnav a, input[type=text], .login-container button {*/\r\n  /*  float: none;*/\r\n  /*  display: block;*/\r\n  /*  text-align: left;*/\r\n  /*  width: 100%;*/\r\n  /*  margin: 0;*/\r\n  /*  padding: 14px;*/\r\n  /*}*/\r\n  input[type=text] {\r\n    border: 1px solid #ccc;\r\n  }\r\n}\r\n.hello {\r\n  text-align: right;\r\n  color: #f2f2f2;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtBQUNkO0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVksRUFBRSw4REFBOEQ7QUFDOUU7QUFFQSxpR0FBaUc7QUFDakc7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBLHlEQUF5RDtFQUN6RCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixJQUFJO0VBQ0o7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSB0aGUgaW5wdXQgY29udGFpbmVyICovXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbiBpbnNpZGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xyXG4ubG9naW4tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaW5wdXQgZmllbGQgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCAoYXMgbG9uZyBhcyBpdCBkb2Vzbid0IGJyZWFrIHRoZSB0b3BuYXYpICovXHJcbn1cclxuXHJcbi8qIEFkZCByZXNwb25zaXZlbmVzcyAtIE9uIHNtYWxsIHNjcmVlbnMsIGRpc3BsYXkgdGhlIG5hdmJhciB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLyoudG9wbmF2IGEsIGlucHV0W3R5cGU9dGV4dF0sIC5sb2dpbi1jb250YWluZXIgYnV0dG9uIHsqL1xyXG4gIC8qICBmbG9hdDogbm9uZTsqL1xyXG4gIC8qICBkaXNwbGF5OiBibG9jazsqL1xyXG4gIC8qICB0ZXh0LWFsaWduOiBsZWZ0OyovXHJcbiAgLyogIHdpZHRoOiAxMDAlOyovXHJcbiAgLyogIG1hcmdpbjogMDsqL1xyXG4gIC8qICBwYWRkaW5nOiAxNHB4OyovXHJcbiAgLyp9Ki9cclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbi5oZWxsbyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");






const routes = [
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let LoginComponent = class LoginComponent {
    constructor(Auth, router) {
        this.Auth = Auth;
        this.router = router;
    }
    ngOnInit() {
    }
    loginUser(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.querySelector('#username').value;
        const password = target.querySelector('#password').value;
        this.username = username;
        this.Auth.getUserDetails(username, password)
            //{ token, userName, userLogin, role }
            .subscribe((data) => {
            console.log('token', data);
            // this.router.navigate(['login']);
            this.Auth.setLoggedIn(true);
            this.Auth.setUserInfo(data);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.66f040d5ed2783e498e7.js.map