webpackHotUpdate("static/development/pages/queja/nueva.js",{

/***/ "./bc/web3.js":
/*!********************!*\
  !*** ./bc/web3.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/*
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export default web3;
*/

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
  window.web3.currentProvider.enable();
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/45920110e9614f5d9845a12d7cc1e6b4');
  /*
  const provider = new Web3.providers.HttpProvider(
    'HTTP://192.168.43.247:7545'
  );
  */

  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=nueva.js.b6eef567339fd65049a6.hot-update.js.map