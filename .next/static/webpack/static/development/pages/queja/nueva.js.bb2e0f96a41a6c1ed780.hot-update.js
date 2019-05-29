webpackHotUpdate("static/development/pages/queja/nueva.js",{

/***/ "./pages/queja/nueva.js":
/*!******************************!*\
  !*** ./pages/queja/nueva.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _bc_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../bc/factory */ "./bc/factory.js");
/* harmony import */ var _bc_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../bc/web3 */ "./bc/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);















var options = [{
  key: 'm',
  text: 'Male',
  value: 'male'
}, {
  key: 'f',
  text: 'Female',
  value: 'female'
}, {
  key: 'o',
  text: 'Other',
  value: 'other'
}];

var RegistroNuevaQueja =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(RegistroNuevaQueja, _Component);

  function RegistroNuevaQueja() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegistroNuevaQueja);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegistroNuevaQueja)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      descripcion: '',
      nombre: '',
      correo: '',
      fecha: '0000-00-00',
      errorMessage: '',
      loading: false,
      quejaNro: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState.loading = {
                  loading: true,
                  errorMessage: ""
                };
                _context.prev = 2;

                _this.setState({
                  quejaNro: 'Procesando queja'
                });

                _context.next = 6;
                return _bc_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _bc_factory__WEBPACK_IMPORTED_MODULE_12__["default"].methods.registrarQueja(_this.state.descripcion, _this.state.nombre, _this.state.correo, _this.state.fecha).send({
                  from: accounts[0]
                }).on('receipt', function (receipt) {
                  console.log(receipt);
                });

              case 9:
                /*
                .then((receipt) => {
                    console.log(receipt);
                });
                */

                /*
                .on('receipt', function(receipt){
                    console.log(receipt.events);
                    console.log(receipt.events[0].raw.data);
                }).on('error', function(error){
                    console.log(error);
                });
                */
                _this.setState({
                  quejaNro: "Queja registrada bajo el numero..."
                }); //Router.pushRoute('/');


                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 15:
                _this.setState.loading = {
                  loading: false
                };

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (e, _ref2) {
      var value = _ref2.value;
      return _this.setState({
        value: value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegistroNuevaQueja, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Registro de Quejas"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Input, {
        fluid: true,
        label: "Nombre",
        placeholder: "Nombre",
        value: this.state.nombre,
        onChange: function onChange(event) {
          return _this2.setState({
            nombre: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Input, {
        fluid: true,
        label: "Correo-E",
        placeholder: "Correo-E",
        value: this.state.correo,
        onChange: function onChange(event) {
          return _this2.setState({
            correo: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Select, {
        fluid: true,
        label: "Tipo de Queja",
        options: options,
        placeholder: "Seleccione"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].TextArea, {
        label: "Queja",
        placeholder: "Describa la queja...",
        value: this.state.descripcion,
        onChange: function onChange(event) {
          return _this2.setState({
            descripcion: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Checkbox, {
        label: "Estoy de acuerdo con los Terminos y Condiciones"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        negative: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"].Header, null, "Oops! un error inesperado ocurrio..."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, this.state.errorMessage)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Button, {
        loading: this.state.loading,
        primary: true
      }, "Enviar"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        info: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"].Header, null, "Datos de la queja"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, this.state.quejaNro))));
    }
  }]);

  return RegistroNuevaQueja;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegistroNuevaQueja);

/***/ })

})
//# sourceMappingURL=nueva.js.bb2e0f96a41a6c1ed780.hot-update.js.map