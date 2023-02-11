(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_8__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_11__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_10__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["creditCardType"])(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_12__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_12__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_13__["default"])({
            text: _this3.context.generic_error,
            type: 'error'
          });
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_9__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setEmailValidation(editValidator, emailSelector);
    }
    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_7__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_3___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");









/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    Object(_form_utils__WEBPACK_IMPORTED_MODULE_6__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwiY29udGV4dCIsIiRzdGF0ZSIsIiQiLCIkYm9keSIsIm9uUmVhZHkiLCIkZWRpdEFjY291bnRGb3JtIiwiY2xhc3NpZnlGb3JtIiwiJGFkZHJlc3NGb3JtIiwiJGluYm94Rm9ybSIsIiRhY2NvdW50UmV0dXJuRm9ybSIsIiRwYXltZW50TWV0aG9kRm9ybSIsIiRyZW9yZGVyRm9ybSIsIiRpbnZvaWNlQnV0dG9uIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJXaXNobGlzdCIsImxvYWQiLCJsZW5ndGgiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm9uIiwibGVmdCIsIndpbmRvdyIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwiZXZlbnQiLCJtZXNzYWdlIiwiY3VycmVudFRhcmdldCIsImNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZmluZCIsInJlbW92ZSIsImVhY2giLCJpbmRleCIsInByb2R1Y3RDaGVja2JveCIsInByb2R1Y3RJZCIsInZhbCIsIiRpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCJzd2FsIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJ2YWxpZGF0aW9uTW9kZWwiLCJ2YWxpZGF0aW9uIiwic3RhdGVTZWxlY3RvciIsIiRzdGF0ZUVsZW1lbnQiLCJhZGRyZXNzVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiYWRkIiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiVmFsaWRhdG9ycyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5Iiwic3BsaXQiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsInByb3AiLCJyZXQiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJpZCIsImNsYXNzIiwicmVwbGFjZVdpdGgiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJyZXF1aXJlZCIsInNob3ciLCJtYWtlU3RhdGVPcHRpb25hbCIsImhpZGUiLCJhZGRPcHRpb25zIiwic3RhdGVzQXJyYXkiLCIkc2VsZWN0RWxlbWVudCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJwdXNoIiwicHJlZml4Iiwic3RhdGVPYmoiLCJ1c2VJZEZvclN0YXRlcyIsImh0bWwiLCJqb2luIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsInV0aWxzIiwiYXBpIiwiZ2V0QnlOYW1lIiwicmVzcG9uc2UiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFFVjtBQUNHO0FBQ2dCO0FBQ0E7QUFDcUM7QUFDMkM7QUFDMUY7QUFBQSxJQUVuQkEsT0FBTztFQUFBO0VBQ3hCLGlCQUFZQyxPQUFPLEVBQUU7SUFBQTtJQUNqQixnQ0FBTUEsT0FBTyxDQUFDO0lBRWQsTUFBS0MsTUFBTSxHQUFHQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDNUMsTUFBS0MsS0FBSyxHQUFHRCxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQUM7RUFDM0I7RUFBQztFQUFBLE9BRURFLE9BQU8sR0FBUCxtQkFBVTtJQUNOLElBQU1DLGdCQUFnQixHQUFHQyx3RUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU1DLFlBQVksR0FBR0Qsd0VBQVksQ0FBQyx5QkFBeUIsQ0FBQztJQUM1RCxJQUFNRSxVQUFVLEdBQUdGLHdFQUFZLENBQUMsdUJBQXVCLENBQUM7SUFDeEQsSUFBTUcsa0JBQWtCLEdBQUdILHdFQUFZLENBQUMsNEJBQTRCLENBQUM7SUFDckUsSUFBTUksa0JBQWtCLEdBQUdKLHdFQUFZLENBQUMsZ0NBQWdDLENBQUM7SUFDekUsSUFBTUssWUFBWSxHQUFHTCx3RUFBWSxDQUFDLDZCQUE2QixDQUFDO0lBQ2hFLElBQU1NLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLHNCQUFzQixDQUFDOztJQUVoRDtJQUNBLElBQUksQ0FBQ1csb0JBQW9CLEdBQUcsSUFBSSxDQUFDYixPQUFPLENBQUNhLG9CQUFvQjs7SUFFN0Q7SUFDQUMsaURBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2YsT0FBTyxDQUFDO0lBRTNCLElBQUlLLGdCQUFnQixDQUFDVyxNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ1osZ0JBQWdCLENBQUM7TUFDcEQsSUFBSSxJQUFJLENBQUNKLE1BQU0sQ0FBQ2lCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6QkMsa0ZBQXNCLENBQUMsSUFBSSxDQUFDbEIsTUFBTSxDQUFDO01BQ3ZDO0lBQ0o7SUFFQSxJQUFJVyxjQUFjLENBQUNJLE1BQU0sRUFBRTtNQUN2QkosY0FBYyxDQUFDUSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDN0IsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHO1FBQy9DLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDQyxNQUFNLENBQUNHLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRztRQUMvQyxJQUFNQyxHQUFHLEdBQUdmLGNBQWMsQ0FBQ2dCLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0NOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDRixHQUFHLEVBQUUsY0FBYyxpQ0FBK0JOLElBQUksYUFBUUksR0FBRyxtQkFBZ0I7TUFDakcsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJbEIsWUFBWSxDQUFDUyxNQUFNLEVBQUU7TUFDckIsSUFBSSxDQUFDYyx5QkFBeUIsQ0FBQ3ZCLFlBQVksQ0FBQztNQUU1QyxJQUFJLElBQUksQ0FBQ04sTUFBTSxDQUFDaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3pCQyxrRkFBc0IsQ0FBQyxJQUFJLENBQUNsQixNQUFNLENBQUM7TUFDdkM7SUFDSjtJQUVBLElBQUlPLFVBQVUsQ0FBQ1EsTUFBTSxFQUFFO01BQ25CLElBQUksQ0FBQ2UsdUJBQXVCLENBQUN2QixVQUFVLENBQUM7SUFDNUM7SUFFQSxJQUFJQyxrQkFBa0IsQ0FBQ08sTUFBTSxFQUFFO01BQzNCLElBQUksQ0FBQ2dCLCtCQUErQixDQUFDdkIsa0JBQWtCLENBQUM7SUFDNUQ7SUFFQSxJQUFJQyxrQkFBa0IsQ0FBQ00sTUFBTSxFQUFFO01BQzNCLElBQUksQ0FBQ2lCLCtCQUErQixDQUFDdkIsa0JBQWtCLENBQUM7SUFDNUQ7SUFFQSxJQUFJQyxZQUFZLENBQUNLLE1BQU0sRUFBRTtNQUNyQixJQUFJLENBQUNrQixlQUFlLENBQUN2QixZQUFZLENBQUM7SUFDdEM7SUFFQSxJQUFJLENBQUN3QixpQkFBaUIsRUFBRTtJQUN4QixJQUFJLENBQUNDLHVCQUF1QixFQUFFO0VBQ2xDOztFQUVBO0FBQ0o7QUFDQSxLQUZJO0VBQUEsT0FHQUQsaUJBQWlCLEdBQWpCLDZCQUFvQjtJQUNoQmpDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO01BQzdDLElBQU1DLE9BQU8sR0FBR3BDLENBQUMsQ0FBQ21DLEtBQUssQ0FBQ0UsYUFBYSxDQUFDLENBQUNYLElBQUksQ0FBQyxlQUFlLENBQUM7TUFFNUQsSUFBSSxDQUFDTixNQUFNLENBQUNrQixPQUFPLENBQUNGLE9BQU8sQ0FBQyxFQUFFO1FBQzFCRCxLQUFLLENBQUNJLGNBQWMsRUFBRTtNQUMxQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVETCx1QkFBdUIsR0FBdkIsbUNBQTBCO0lBQ3RCbEMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNrQixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFpQixLQUFLLEVBQUk7TUFDcEQsSUFBTUMsT0FBTyxHQUFHcEMsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDRSxhQUFhLENBQUMsQ0FBQ1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDO01BRWxFLElBQUksQ0FBQ04sTUFBTSxDQUFDa0IsT0FBTyxDQUFDRixPQUFPLENBQUMsRUFBRTtRQUMxQkQsS0FBSyxDQUFDSSxjQUFjLEVBQUU7TUFDMUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FFRFAsZUFBZSxHQUFmLHlCQUFnQnZCLFlBQVksRUFBRTtJQUFBO0lBQzFCQSxZQUFZLENBQUNTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUMvQixJQUFNSyx5QkFBeUIsR0FBR3hDLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQztNQUMvRSxJQUFJeUMsVUFBVSxHQUFHLEtBQUs7TUFFdEJoQyxZQUFZLENBQUNpQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO01BRW5ESCx5QkFBeUIsQ0FBQ0ksSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsZUFBZSxFQUFLO1FBQ3ZELElBQU1DLFNBQVMsR0FBRy9DLENBQUMsQ0FBQzhDLGVBQWUsQ0FBQyxDQUFDRSxHQUFHLEVBQUU7UUFDMUMsSUFBTUMsTUFBTSxHQUFHakQsQ0FBQyxDQUFDLFNBQVMsRUFBRTtVQUN4QmtELElBQUksRUFBRSxRQUFRO1VBQ2RDLElBQUksbUJBQWlCSixTQUFTLE1BQUc7VUFDakNLLEtBQUssRUFBRTtRQUNYLENBQUMsQ0FBQztRQUVGWCxVQUFVLEdBQUcsSUFBSTtRQUVqQmhDLFlBQVksQ0FBQzRDLE1BQU0sQ0FBQ0osTUFBTSxDQUFDO01BQy9CLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ1IsVUFBVSxFQUFFO1FBQ2JOLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1FBQ3RCZSxvRUFBSSxDQUFDO1VBQ0RDLElBQUksRUFBRSxNQUFJLENBQUN6RCxPQUFPLENBQUMwRCxVQUFVO1VBQzdCTixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEdEIseUJBQXlCLEdBQXpCLG1DQUEwQnZCLFlBQVksRUFBRTtJQUNwQyxJQUFNb0QsZUFBZSxHQUFHQyx1RUFBVSxDQUFDckQsWUFBWSxDQUFDO0lBQ2hELElBQU1zRCxhQUFhLEdBQUcsbURBQW1EO0lBQ3pFLElBQU1DLGFBQWEsR0FBRzVELENBQUMsQ0FBQzJELGFBQWEsQ0FBQztJQUN0QyxJQUFNRSxnQkFBZ0IsR0FBR0MsMkRBQUcsQ0FBQztNQUN6QkMsTUFBTSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBRUZGLGdCQUFnQixDQUFDRyxHQUFHLENBQUNQLGVBQWUsQ0FBQztJQUVyQyxJQUFJRyxhQUFhLEVBQUU7TUFDZixJQUFJSyxLQUFLOztNQUVUO01BQ0FDLHNFQUFZLENBQUNOLGFBQWEsRUFBRSxJQUFJLENBQUM5RCxPQUFPLEVBQUUsVUFBQ3FFLEdBQUcsRUFBRUMsS0FBSyxFQUFLO1FBQ3RELElBQUlELEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSUUsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFDeEI7UUFFQSxJQUFNRyxNQUFNLEdBQUd0RSxDQUFDLENBQUNvRSxLQUFLLENBQUM7UUFFdkIsSUFBSVAsZ0JBQWdCLENBQUNVLFNBQVMsQ0FBQ1gsYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO1VBQzNEQyxnQkFBZ0IsQ0FBQ2xCLE1BQU0sQ0FBQ2lCLGFBQWEsQ0FBQztRQUMxQztRQUVBLElBQUlLLEtBQUssRUFBRTtVQUNQSixnQkFBZ0IsQ0FBQ2xCLE1BQU0sQ0FBQ3NCLEtBQUssQ0FBQztRQUNsQztRQUVBLElBQUlLLE1BQU0sQ0FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUNyQmlELEtBQUssR0FBR0csS0FBSztVQUNiSSw4REFBVSxDQUFDQyx5QkFBeUIsQ0FBQ1osZ0JBQWdCLEVBQUVPLEtBQUssQ0FBQztRQUNqRSxDQUFDLE1BQU07VUFDSEksOERBQVUsQ0FBQ0Usc0JBQXNCLENBQUNOLEtBQUssQ0FBQztRQUM1QztNQUNKLENBQUMsQ0FBQztJQUNOO0lBRUEvRCxZQUFZLENBQUNhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUMvQjBCLGdCQUFnQixDQUFDYyxZQUFZLEVBQUU7TUFFL0IsSUFBSWQsZ0JBQWdCLENBQUNlLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQztNQUNKO01BRUF6QyxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUMxQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FFRFQsK0JBQStCLEdBQS9CLHlDQUFnQ3ZCLGtCQUFrQixFQUFFO0lBQ2hELElBQU1zRSxZQUFZLEdBQUd0RSxrQkFBa0IsQ0FBQ21CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUV0RW5CLGtCQUFrQixDQUFDVyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFpQixLQUFLLEVBQUk7TUFDckMsSUFBSTJDLFVBQVUsR0FBRyxLQUFLOztNQUV0QjtNQUNBOUUsQ0FBQyxDQUFDLHNCQUFzQixFQUFFTyxrQkFBa0IsQ0FBQyxDQUFDcUMsSUFBSSxDQUFDLFVBQUNtQyxDQUFDLEVBQUVDLEdBQUcsRUFBSztRQUMzRCxJQUFJQyxRQUFRLENBQUNqRixDQUFDLENBQUNnRixHQUFHLENBQUMsQ0FBQ2hDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtVQUNsQzhCLFVBQVUsR0FBRyxJQUFJOztVQUVqQjtVQUNBLE9BQU8sSUFBSTtRQUNmO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSUEsVUFBVSxFQUFFO1FBQ1osT0FBTyxJQUFJO01BQ2Y7TUFFQXhCLG9FQUFJLENBQUM7UUFDREMsSUFBSSxFQUFFc0IsWUFBWTtRQUNsQjNCLElBQUksRUFBRTtNQUNWLENBQUMsQ0FBQztNQUVGLE9BQU9mLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO0lBQ2pDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEUiwrQkFBK0IsR0FBL0IseUNBQWdDdkIsa0JBQWtCLEVBQUU7SUFBQTtJQUNoRDtJQUNBQSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDcUYsY0FBYyxnREFBd0M7SUFDbEwzRSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDc0YsYUFBYSxnREFBd0M7SUFDaEw1RSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDdUYsWUFBWSxpREFBeUM7SUFDOUs3RSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDd0YsVUFBVSxpREFBeUM7SUFDMUs5RSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDeUYsYUFBYSxnREFBd0M7SUFDL0svRSxrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDMEYsYUFBYSxpREFBeUM7SUFDaExoRixrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDMkYsU0FBUyxnREFBd0M7SUFDdktqRixrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixrREFBeUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDNEYsWUFBWSwwQ0FBaUMsSUFBSSxDQUFDNUYsT0FBTyxDQUFDNkYsa0JBQWtCLFVBQU07SUFDN01uRixrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDOEYsVUFBVSxnREFBd0M7SUFDektwRixrQkFBa0IsQ0FBQ2tDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDK0YsZUFBZSxnREFBd0M7SUFFcEwsSUFBTXBDLGVBQWUsR0FBR0MsdUVBQVUsQ0FBQ2xELGtCQUFrQixDQUFDO0lBQ3RELElBQU1zRixxQkFBcUIsR0FBRyxnQ0FBZ0M7SUFDOUQsSUFBTUMsc0JBQXNCLEdBQUdqQywyREFBRyxDQUFDO01BQUVDLE1BQU0sRUFBSytCLHFCQUFxQjtJQUF3QixDQUFDLENBQUM7SUFDL0YsSUFBTWxDLGFBQWEsR0FBRzVELENBQUMsQ0FBSThGLHFCQUFxQixrQ0FBNkI7SUFFN0UsSUFBSTdCLEtBQUs7SUFDVDtJQUNBQyxzRUFBWSxDQUFDTixhQUFhLEVBQUUsSUFBSSxDQUFDOUQsT0FBTyxFQUFFLFVBQUNxRSxHQUFHLEVBQUVDLEtBQUssRUFBSztNQUN0RCxJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTUcsTUFBTSxHQUFHdEUsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDO01BRXZCLElBQUkyQixzQkFBc0IsQ0FBQ3hCLFNBQVMsQ0FBQ1gsYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQ2pFbUMsc0JBQXNCLENBQUNwRCxNQUFNLENBQUNpQixhQUFhLENBQUM7TUFDaEQ7TUFFQSxJQUFJSyxLQUFLLEVBQUU7UUFDUDhCLHNCQUFzQixDQUFDcEQsTUFBTSxDQUFDc0IsS0FBSyxDQUFDO01BQ3hDO01BRUEsSUFBSUssTUFBTSxDQUFDdEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JCaUQsS0FBSyxHQUFHRyxLQUFLO1FBQ2JJLDhEQUFVLENBQUNDLHlCQUF5QixDQUFDc0Isc0JBQXNCLEVBQUUzQixLQUFLLENBQUM7TUFDdkUsQ0FBQyxNQUFNO1FBQ0hJLDhEQUFVLENBQUNFLHNCQUFzQixDQUFDTixLQUFLLENBQUM7TUFDNUM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJNEIsUUFBUTtJQUNaaEcsQ0FBQyxDQUFJOEYscUJBQXFCLHlDQUFvQyxDQUFDNUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0I7TUFBQSxJQUFiK0UsTUFBTSxRQUFOQSxNQUFNO01BQ2hGRCxRQUFRLEdBQUdFLDhFQUFjLENBQUNELE1BQU0sQ0FBQzdDLEtBQUssQ0FBQztNQUN2QyxJQUFJNEMsUUFBUSxFQUFFO1FBQ1ZoRyxDQUFDLENBQUk4RixxQkFBcUIsbUJBQWFFLFFBQVEsU0FBSyxDQUFDRyxRQUFRLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7TUFDeEYsQ0FBQyxNQUFNO1FBQ0hwRyxDQUFDLENBQUk4RixxQkFBcUIsVUFBTyxDQUFDTSxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztNQUN6RDtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBQyxrRUFBWSxDQUFDQyw2QkFBNkIsQ0FBQ1Asc0JBQXNCLEVBQUtELHFCQUFxQiwwQ0FBcUMsSUFBSSxDQUFDaEcsT0FBTyxDQUFDeUcsZ0JBQWdCLENBQUM7SUFDOUpGLGtFQUFZLENBQUNHLHVCQUF1QixDQUFDVCxzQkFBc0IsRUFBS0QscUJBQXFCLGtDQUE2QixJQUFJLENBQUNoRyxPQUFPLENBQUMyRyxVQUFVLENBQUM7SUFDMUlKLGtFQUFZLENBQUNLLHVCQUF1QixDQUFDWCxzQkFBc0IsRUFBS0QscUJBQXFCLG9DQUErQixJQUFJLENBQUNoRyxPQUFPLENBQUM2RyxVQUFVLENBQUM7SUFDNUlOLGtFQUFZLENBQUNPLGdCQUFnQixDQUFDYixzQkFBc0IsRUFBS0QscUJBQXFCLDJCQUFzQixJQUFJLENBQUNoRyxPQUFPLENBQUMrRyxHQUFHLEVBQUU7TUFBQSxPQUFNYixRQUFRO0lBQUEsRUFBQzs7SUFFckk7SUFDQWMsa0VBQVksQ0FBQ0MseUJBQXlCLENBQUlqQixxQkFBcUIseUNBQW9DO0lBQ25HZ0Isa0VBQVksQ0FBQ0UsbUJBQW1CLENBQUlsQixxQkFBcUIsaUNBQTRCOztJQUVyRjtJQUNBQyxzQkFBc0IsQ0FBQy9CLEdBQUcsQ0FBQ1AsZUFBZSxDQUFDO0lBRTNDakQsa0JBQWtCLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUNyQ0EsS0FBSyxDQUFDSSxjQUFjLEVBQUU7TUFDdEI7TUFDQXdELHNCQUFzQixDQUFDcEIsWUFBWSxFQUFFO01BQ3JDLElBQUlvQixzQkFBc0IsQ0FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN4QztRQUNBLElBQU1sRCxJQUFJLEdBQUcscURBQVNsQixrQkFBa0IsQ0FBQ3lHLGNBQWMsRUFBRSxFQUFFLFVBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFLO1VBQ3RFLElBQU1DLE1BQU0sR0FBR0YsR0FBRztVQUNsQkUsTUFBTSxDQUFDRCxJQUFJLENBQUNoRSxJQUFJLENBQUMsR0FBR2dFLElBQUksQ0FBQy9ELEtBQUs7VUFDOUIsT0FBT2dFLE1BQU07UUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUVOO1FBQ0EsSUFBTUMsT0FBTyxHQUFHLG1EQUFPLE1BQUksQ0FBQ3ZILE9BQU8sQ0FBQ3dILFNBQVMsRUFBRTtVQUFBLElBQUdsRSxLQUFLLFNBQUxBLEtBQUs7VUFBQSxPQUFPQSxLQUFLLEtBQUsxQixJQUFJLENBQUMyRixPQUFPO1FBQUEsRUFBQztRQUNyRixJQUFNRSxLQUFLLEdBQUdGLE9BQU8sSUFBSSxtREFBT0EsT0FBTyxDQUFDRyxNQUFNLEVBQUU7VUFBQSxJQUFHcEUsS0FBSyxTQUFMQSxLQUFLO1VBQUEsT0FBT0EsS0FBSyxLQUFLMUIsSUFBSSxDQUFDNkYsS0FBSztRQUFBLEVBQUM7UUFDcEY3RixJQUFJLENBQUMrRixZQUFZLEdBQUdKLE9BQU8sR0FBR0EsT0FBTyxDQUFDSyxJQUFJLEdBQUdoRyxJQUFJLENBQUMyRixPQUFPO1FBQ3pEM0YsSUFBSSxDQUFDaUcsc0JBQXNCLEdBQUdKLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxJQUFJLEdBQUdoRyxJQUFJLENBQUM2RixLQUFLOztRQUU3RDtRQUNBN0YsSUFBSSxDQUFDa0csa0JBQWtCLEdBQUcsQ0FBQyxDQUFDbEcsSUFBSSxDQUFDa0csa0JBQWtCOztRQUVuRDtRQUNBQywrRUFBZSxDQUFDLE1BQUksQ0FBQy9ILE9BQU8sRUFBRTRCLElBQUksRUFBRSxZQUFNO1VBQ3RDTixNQUFNLENBQUMwRyxRQUFRLENBQUNDLElBQUksR0FBRyxNQUFJLENBQUNqSSxPQUFPLENBQUNrSSxpQkFBaUI7UUFDekQsQ0FBQyxFQUFFLFlBQU07VUFDTDFFLG9FQUFJLENBQUM7WUFDREMsSUFBSSxFQUFFLE1BQUksQ0FBQ3pELE9BQU8sQ0FBQ21JLGFBQWE7WUFDaEMvRSxJQUFJLEVBQUU7VUFDVixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEbkMsNkJBQTZCLEdBQTdCLHVDQUE4QlosZ0JBQWdCLEVBQUU7SUFDNUMsSUFBTXNELGVBQWUsR0FBR0MsdUVBQVUsQ0FBQ3ZELGdCQUFnQixDQUFDO0lBQ3BELElBQU0rSCxnQkFBZ0IsR0FBRyw4QkFBOEI7SUFDdkQsSUFBTUMsYUFBYSxHQUFHckUsMkRBQUcsQ0FBQztNQUN0QkMsTUFBTSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBQ0YsSUFBTXFFLGFBQWEsR0FBTUYsZ0JBQWdCLHdDQUFtQztJQUM1RSxJQUFNRyxhQUFhLEdBQUdySSxDQUFDLENBQUNvSSxhQUFhLENBQUM7SUFDdEMsSUFBTUUsZ0JBQWdCLEdBQU1KLGdCQUFnQixvQ0FBK0I7SUFDM0UsSUFBTUssZ0JBQWdCLEdBQUd2SSxDQUFDLENBQUNzSSxnQkFBZ0IsQ0FBQztJQUM1QyxJQUFNRSxpQkFBaUIsR0FBTU4sZ0JBQWdCLDJDQUFzQztJQUNuRixJQUFNTyxpQkFBaUIsR0FBR3pJLENBQUMsQ0FBQ3dJLGlCQUFpQixDQUFDO0lBQzlDLElBQU1FLHVCQUF1QixHQUFNUixnQkFBZ0IsMkNBQXNDO0lBQ3pGLElBQU1TLGdCQUFnQixHQUFHM0ksQ0FBQyxDQUFDMEksdUJBQXVCLENBQUM7O0lBRW5EO0lBQ0FQLGFBQWEsQ0FBQ25FLEdBQUcsQ0FBQ1AsZUFBZSxDQUFDO0lBRWxDLElBQUk0RSxhQUFhLEVBQUU7TUFDZkYsYUFBYSxDQUFDeEYsTUFBTSxDQUFDeUYsYUFBYSxDQUFDO01BQ25DNUQsOERBQVUsQ0FBQ29FLGtCQUFrQixDQUFDVCxhQUFhLEVBQUVDLGFBQWEsQ0FBQztJQUMvRDtJQUVBLElBQUlHLGdCQUFnQixJQUFJRSxpQkFBaUIsRUFBRTtNQUN2Q04sYUFBYSxDQUFDeEYsTUFBTSxDQUFDMkYsZ0JBQWdCLENBQUM7TUFDdENILGFBQWEsQ0FBQ3hGLE1BQU0sQ0FBQzZGLGlCQUFpQixDQUFDO01BQ3ZDaEUsOERBQVUsQ0FBQ3FFLHFCQUFxQixDQUM1QlYsYUFBYSxFQUNiRyxnQkFBZ0IsRUFDaEJFLGlCQUFpQixFQUNqQixJQUFJLENBQUM3SCxvQkFBb0IsRUFDekIsSUFBSSxDQUNQO0lBQ0w7SUFFQSxJQUFJZ0ksZ0JBQWdCLEVBQUU7TUFDbEJSLGFBQWEsQ0FBQ25FLEdBQUcsQ0FBQztRQUNkOEUsUUFBUSxFQUFFSix1QkFBdUI7UUFDakNLLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFaEcsR0FBRyxFQUFLO1VBQ25CLElBQUlpRyxNQUFNLEdBQUcsSUFBSTtVQUVqQixJQUFJakcsR0FBRyxLQUFLLEVBQUUsSUFBSXVGLGdCQUFnQixDQUFDdkYsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdDaUcsTUFBTSxHQUFHLEtBQUs7VUFDbEI7VUFFQUQsRUFBRSxDQUFDQyxNQUFNLENBQUM7UUFDZCxDQUFDO1FBQ0RwRSxZQUFZLEVBQUUsSUFBSSxDQUFDL0UsT0FBTyxDQUFDb0o7TUFDL0IsQ0FBQyxDQUFDO0lBQ047SUFFQWYsYUFBYSxDQUFDbkUsR0FBRyxDQUFDLENBQ2Q7TUFDSThFLFFBQVEsRUFBS1osZ0JBQWdCLHFDQUFrQztNQUMvRGEsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVoRyxHQUFHLEVBQUs7UUFDbkIsSUFBTWlHLE1BQU0sR0FBR2pHLEdBQUcsQ0FBQ2xDLE1BQU07UUFFekJrSSxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRHBFLFlBQVksRUFBRSxJQUFJLENBQUMvRSxPQUFPLENBQUNxSjtJQUMvQixDQUFDLEVBQ0Q7TUFDSUwsUUFBUSxFQUFLWixnQkFBZ0Isb0NBQWlDO01BQzlEYSxRQUFRLEVBQUUsa0JBQUNDLEVBQUUsRUFBRWhHLEdBQUcsRUFBSztRQUNuQixJQUFNaUcsTUFBTSxHQUFHakcsR0FBRyxDQUFDbEMsTUFBTTtRQUV6QmtJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNEcEUsWUFBWSxFQUFFLElBQUksQ0FBQy9FLE9BQU8sQ0FBQ3NKO0lBQy9CLENBQUMsQ0FDSixDQUFDO0lBRUZqSixnQkFBZ0IsQ0FBQ2UsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO01BQ25DZ0csYUFBYSxDQUFDeEQsWUFBWSxFQUFFO01BRTVCLElBQUl3RCxhQUFhLENBQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDL0I7TUFDSjtNQUVBekMsS0FBSyxDQUFDSSxjQUFjLEVBQUU7SUFDMUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BRURWLHVCQUF1QixHQUF2QixpQ0FBd0J2QixVQUFVLEVBQUU7SUFDaEMsSUFBTStJLGNBQWMsR0FBR3ZGLDJEQUFHLENBQUM7TUFDdkJDLE1BQU0sRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGc0YsY0FBYyxDQUFDckYsR0FBRyxDQUFDLENBQ2Y7TUFDSThFLFFBQVEsRUFBRSx1REFBdUQ7TUFDakVDLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFaEcsR0FBRyxFQUFLO1FBQ25CLElBQU1pRyxNQUFNLEdBQUdLLE1BQU0sQ0FBQ3RHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFaENnRyxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRHBFLFlBQVksRUFBRSxJQUFJLENBQUMvRSxPQUFPLENBQUN5SjtJQUMvQixDQUFDLEVBQ0Q7TUFDSVQsUUFBUSxFQUFFLHFEQUFxRDtNQUMvREMsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVoRyxHQUFHLEVBQUs7UUFDbkIsSUFBTWlHLE1BQU0sR0FBR2pHLEdBQUcsQ0FBQ2xDLE1BQU07UUFFekJrSSxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRHBFLFlBQVksRUFBRSxJQUFJLENBQUMvRSxPQUFPLENBQUMwSjtJQUMvQixDQUFDLEVBQ0Q7TUFDSVYsUUFBUSxFQUFFLHdEQUF3RDtNQUNsRUMsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVoRyxHQUFHLEVBQUs7UUFDbkIsSUFBTWlHLE1BQU0sR0FBR2pHLEdBQUcsQ0FBQ2xDLE1BQU07UUFFekJrSSxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRHBFLFlBQVksRUFBRSxJQUFJLENBQUMvRSxPQUFPLENBQUMySjtJQUMvQixDQUFDLENBQ0osQ0FBQztJQUVGbkosVUFBVSxDQUFDWSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFpQixLQUFLLEVBQUk7TUFDN0JrSCxjQUFjLENBQUMxRSxZQUFZLEVBQUU7TUFFN0IsSUFBSTBFLGNBQWMsQ0FBQ3pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNoQztNQUNKO01BRUF6QyxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUMxQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE7QUFBQSxFQTNhZ0NtSCxxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlY7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBR3pDLEdBQUcsRUFBSTtFQUMxQixJQUFNRSxNQUFNLEdBQUdGLEdBQUc7RUFFbEJsSCxDQUFDLENBQUM0QyxJQUFJLENBQUN3RSxNQUFNLEVBQUUsVUFBQ3dDLEdBQUcsRUFBRXhHLEtBQUssRUFBSztJQUMzQixJQUFJQSxLQUFLLEtBQUssSUFBSSxJQUFJQSxLQUFLLEtBQUssRUFBRSxFQUFFO01BQ2hDLE9BQU9nRSxNQUFNLENBQUN3QyxHQUFHLENBQUM7SUFDdEI7RUFDSixDQUFDLENBQUM7RUFFRixPQUFPeEMsTUFBTTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWxCLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxDQUFHOUMsS0FBSztFQUFBLE9BQUl5RyxrREFBVyxDQUFDQyxJQUFJLENBQUM1RyxJQUFJLENBQUMyRyxrREFBVyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQzNHLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztBQUFBOztBQUVqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU15RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsY0FpQ3pCbUMsSUFBSSxFQUFFQyxJQUFJLEVBQUs7RUFBQSxJQS9CZEMsV0FBVyxRQUFYQSxXQUFXO0lBQ1hDLFNBQVMsUUFBVEEsU0FBUztJQUNUQyxTQUFTLFFBQVRBLFNBQVM7SUFDVEMsVUFBVSxRQUFWQSxVQUFVO0VBQUEsSUFLVkMsV0FBVyxTQUFYQSxXQUFXO0lBQ1hDLGFBQWEsU0FBYkEsYUFBYTtJQUdiQyxrQkFBa0IsU0FBbEJBLGtCQUFrQjtJQUNsQi9ELFVBQVUsU0FBVkEsVUFBVTtJQUNWZ0UsWUFBWSxTQUFaQSxZQUFZO0lBQ1o1RCxHQUFHLFNBQUhBLEdBQUc7SUFDSGUsa0JBQWtCLFNBQWxCQSxrQkFBa0I7SUFHbEI4QyxRQUFRLFNBQVJBLFFBQVE7SUFDUkMsUUFBUSxTQUFSQSxRQUFRO0lBQ1JDLElBQUksU0FBSkEsSUFBSTtJQUNKQyxXQUFXLFNBQVhBLFdBQVc7SUFDWGxELHNCQUFzQixTQUF0QkEsc0JBQXNCO0lBQ3RCRixZQUFZLFNBQVpBLFlBQVk7SUFDWnFELE9BQU8sU0FBUEEsT0FBTztJQUNQQyxVQUFVLFNBQVZBLFVBQVU7SUFDVkMsU0FBUyxTQUFUQSxTQUFTO0lBQ1RDLEtBQUssU0FBTEEsS0FBSztJQUNMQyxLQUFLLFNBQUxBLEtBQUs7RUFHTCxJQUFNQyxNQUFNLEdBQUcxRSxVQUFVLENBQUMyRSxLQUFLLENBQUMsR0FBRyxDQUFDO0VBRXBDcEwsQ0FBQyxDQUFDcUwsSUFBSSxDQUFDO0lBQ0g1SixHQUFHLEVBQUt5SSxXQUFXLGdCQUFXRSxTQUFTLG1CQUFjRCxTQUFTLHdCQUFxQjtJQUNuRm1CLFFBQVEsRUFBRSxNQUFNO0lBQ2hCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxPQUFPLEVBQUU7TUFDTEMsYUFBYSxFQUFFckIsVUFBVTtNQUN6QnNCLE1BQU0sRUFBRSw0QkFBNEI7TUFDcEMsY0FBYyxFQUFFO0lBQ3BCLENBQUM7SUFDRGpLLElBQUksRUFBRWtLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO01BQ2pCQyxVQUFVLEVBQUU7UUFDUjVJLElBQUksRUFBRSxNQUFNO1FBQ1o2SSxlQUFlLEVBQUV0QixZQUFZO1FBQzdCdUIsTUFBTSxFQUFFbkMsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNTLGtCQUFrQixDQUFDO1FBQ2xEeUIsWUFBWSxFQUFFcEMsa0RBQVcsQ0FBQ3BELFVBQVUsQ0FBQ3lGLEtBQUssQ0FBQ25DLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRGdCLFdBQVcsRUFBRXRDLGtEQUFXLENBQUNwRCxVQUFVLENBQUMyRixJQUFJLENBQUNyQyxLQUFLLENBQUNvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQy9Ea0Isa0JBQWtCLEVBQUV4RjtNQUN4QixDQUFDO01BQ0R5RixlQUFlLEVBQUUzQyxjQUFjLENBQUM7UUFDNUJlLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxRQUFRLEVBQVJBLFFBQVE7UUFDUkMsSUFBSSxFQUFKQSxJQUFJO1FBQ0pDLFdBQVcsRUFBWEEsV0FBVztRQUNYbEQsc0JBQXNCLEVBQXRCQSxzQkFBc0I7UUFDdEJGLFlBQVksRUFBWkEsWUFBWTtRQUNacUQsT0FBTyxFQUFQQSxPQUFPO1FBQ1BDLFVBQVUsRUFBVkEsVUFBVTtRQUNWQyxTQUFTLEVBQVRBLFNBQVM7UUFDVEMsS0FBSyxFQUFMQSxLQUFLO1FBQ0xDLEtBQUssRUFBTEE7TUFDSixDQUFDLENBQUM7TUFDRlosV0FBVyxFQUFYQSxXQUFXO01BQ1gxQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtNQUNsQjJDLGFBQWEsRUFBYkE7SUFDSixDQUFDO0VBQ0wsQ0FBQyxDQUFDLENBQ0dQLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQ1ZDLElBQUksQ0FBQ0EsSUFBSSxDQUFDO0FBQ25CLENBQUM7QUFFTSxJQUFNc0MsVUFBVSxHQUFHO0VBQ3RCO0FBQ0o7QUFDQTtBQUNBO0VBQ0l4Rix5QkFBeUIsRUFBRSxtQ0FBQTNDLEtBQUssRUFBSTtJQUNoQyxJQUFJQSxLQUFLLEVBQUU7TUFDUHBFLENBQUMsQ0FBQ29FLEtBQUssQ0FBQyxDQUFDbEQsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBZ0I7UUFBQSxJQUFiK0UsTUFBTSxTQUFOQSxNQUFNO1FBQzFCLElBQU11RyxTQUFTLEdBQUd2RyxNQUFNO1FBQ3hCdUcsU0FBUyxDQUFDcEosS0FBSyxHQUFHeUcsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDMkMsTUFBTSxDQUFDNUMsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM5RCxNQUFNLENBQUM3QyxLQUFLLENBQUMsQ0FBQztNQUNuRixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJNEQsbUJBQW1CLEVBQUUsNkJBQUE1QyxLQUFLLEVBQUk7SUFDMUIsSUFBSUEsS0FBSyxFQUFFO01BQ1BwRSxDQUFDLENBQUNvRSxLQUFLLENBQUMsQ0FBQ2xELEVBQUUsQ0FBQyxPQUFPLEVBQUUsaUJBQXVCO1FBQUEsSUFBcEIrRSxNQUFNLFNBQU5BLE1BQU07VUFBRXlHLEtBQUssU0FBTEEsS0FBSztRQUNqQyxJQUFNRixTQUFTLEdBQUd2RyxNQUFNO1FBQ3hCLElBQUl5RyxLQUFLLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDMUcsTUFBTSxDQUFDN0MsS0FBSyxDQUFDLEVBQUU7VUFDN0NvSixTQUFTLENBQUNwSixLQUFLLEdBQUc2QyxNQUFNLENBQUM3QyxLQUFLLENBQUN3SixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsTUFBTSxJQUFJM0csTUFBTSxDQUFDN0MsS0FBSyxDQUFDdEMsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNoQzBMLFNBQVMsQ0FBQ3BKLEtBQUssR0FBRzZDLE1BQU0sQ0FBQzdDLEtBQUssQ0FBQ3dKLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsTUFBTSxJQUFJRixLQUFLLEtBQUssQ0FBQyxFQUFFO1VBQ3BCRixTQUFTLENBQUNwSixLQUFLLEdBQUc2QyxNQUFNLENBQUM3QyxLQUFLLENBQ3pCeUosT0FBTyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUNyQ0EsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUNwQ0EsT0FBTyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUN0Q0EsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUNoREEsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUNoQ0EsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUMvQkEsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7UUFDOUI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQztBQUVNLElBQU1ySSxVQUFVLEdBQUc7RUFDdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k4Qiw2QkFBNkIsRUFBRSx1Q0FBQ3dHLFNBQVMsRUFBRTFJLEtBQUssRUFBRVMsWUFBWSxFQUFLO0lBQy9ELElBQUlULEtBQUssRUFBRTtNQUNQMEksU0FBUyxDQUFDOUksR0FBRyxDQUFDO1FBQ1Y4RSxRQUFRLEVBQUUxRSxLQUFLO1FBQ2YyRSxRQUFRLEVBQUUsa0JBQUNDLEVBQUUsRUFBRWhHLEdBQUcsRUFBSztVQUNuQixJQUFNaUcsTUFBTSxHQUFHakcsR0FBRyxDQUFDbEMsTUFBTSxJQUFJK0ksa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDaUQsT0FBTyxDQUFDbEQsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMvRyxHQUFHLENBQUMsQ0FBQztVQUVsRmdHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2QsQ0FBQztRQUNEcEUsWUFBWSxFQUFaQTtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMkIsdUJBQXVCLEVBQUUsaUNBQUNzRyxTQUFTLEVBQUUxSSxLQUFLLEVBQUVTLFlBQVksRUFBSztJQUN6RCxJQUFJVCxLQUFLLEVBQUU7TUFDUDBJLFNBQVMsQ0FBQzlJLEdBQUcsQ0FBQztRQUNWOEUsUUFBUSxFQUFFMUUsS0FBSztRQUNmMkUsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVoRyxHQUFHLEVBQUs7VUFDbkIsSUFBTW1JLE1BQU0sR0FBR25JLEdBQUcsQ0FBQ29JLEtBQUssQ0FBQyxHQUFHLENBQUM7VUFDN0IsSUFBSW5DLE1BQU0sR0FBR2pHLEdBQUcsQ0FBQ2xDLE1BQU0sSUFBSSwrQkFBK0IsQ0FBQzZMLElBQUksQ0FBQzNKLEdBQUcsQ0FBQztVQUNwRWlHLE1BQU0sR0FBR0EsTUFBTSxJQUFJLENBQUNZLGtEQUFXLENBQUNwRCxVQUFVLENBQUN1RyxNQUFNLENBQUNuRCxrREFBVyxDQUFDcEQsVUFBVSxDQUFDeUYsS0FBSyxDQUFDbkMsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUV0QixrREFBVyxDQUFDcEQsVUFBVSxDQUFDMkYsSUFBSSxDQUFDckMsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1VBRXBKbkMsRUFBRSxDQUFDQyxNQUFNLENBQUM7UUFDZCxDQUFDO1FBQ0RwRSxZQUFZLEVBQVpBO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2Qix1QkFBdUIsRUFBRSxpQ0FBQ29HLFNBQVMsRUFBRTFJLEtBQUssRUFBRVMsWUFBWSxFQUFLO0lBQ3pELElBQUlULEtBQUssRUFBRTtNQUNQMEksU0FBUyxDQUFDOUksR0FBRyxDQUFDO1FBQ1Y4RSxRQUFRLEVBQUUxRSxLQUFLO1FBQ2YyRSxRQUFRLEVBQUUsa0JBQUNDLEVBQUUsRUFBRWhHLEdBQUcsRUFBSztVQUNuQixJQUFNaUcsTUFBTSxHQUFHLENBQUMsQ0FBQ2pHLEdBQUcsQ0FBQ2xDLE1BQU07VUFFM0JrSSxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRHBFLFlBQVksRUFBWkE7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0IsZ0JBQWdCLEVBQUUsMEJBQUNrRyxTQUFTLEVBQUUxSSxLQUFLLEVBQUVTLFlBQVksRUFBRW1CLFFBQVEsRUFBSztJQUM1RCxJQUFJNUIsS0FBSyxFQUFFO01BQ1AwSSxTQUFTLENBQUM5SSxHQUFHLENBQUM7UUFDVjhFLFFBQVEsRUFBRTFFLEtBQUs7UUFDZjJFLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFaEcsR0FBRyxFQUFLO1VBQ25CLElBQU1FLElBQUksR0FBRyxPQUFPOEMsUUFBUSxLQUFLLFVBQVUsR0FBR0EsUUFBUSxFQUFFLEdBQUdBLFFBQVE7VUFDbkUsSUFBTWlELE1BQU0sR0FBR2pHLEdBQUcsQ0FBQ2xDLE1BQU0sSUFBSStJLGtEQUFXLENBQUNvRCxHQUFHLENBQUNGLE9BQU8sQ0FBQy9KLEdBQUcsRUFBRUUsSUFBSSxDQUFDO1VBRS9EOEYsRUFBRSxDQUFDQyxNQUFNLENBQUM7UUFDZCxDQUFDO1FBQ0RwRSxZQUFZLEVBQVpBO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSjtBQUNKLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTzhDO0FBRU87QUFDTDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTcUksaUJBQWlCLENBQUNDLFlBQVksRUFBRXJOLE9BQU8sRUFBRTtFQUM5QyxJQUFNc04sS0FBSyxHQUFHLHdEQUFZRCxZQUFZLENBQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFDcEUsTUFBTSxFQUFFOUIsSUFBSSxFQUFLO0lBQ3pFLElBQU1tRyxHQUFHLEdBQUdyRSxNQUFNO0lBQ2xCcUUsR0FBRyxDQUFDbkcsSUFBSSxDQUFDaEUsSUFBSSxDQUFDLEdBQUdnRSxJQUFJLENBQUMvRCxLQUFLO0lBQzNCLE9BQU9rSyxHQUFHO0VBQ2QsQ0FBQyxDQUFDO0VBRUYsSUFBTUMscUJBQXFCLEdBQUc7SUFDMUJDLEVBQUUsRUFBRUosS0FBSyxDQUFDSSxFQUFFO0lBQ1osWUFBWSxFQUFFSixLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ2pDSyxLQUFLLEVBQUUsYUFBYTtJQUNwQnRLLElBQUksRUFBRWlLLEtBQUssQ0FBQ2pLLElBQUk7SUFDaEIsaUJBQWlCLEVBQUVpSyxLQUFLLENBQUMsaUJBQWlCO0VBQzlDLENBQUM7RUFFREQsWUFBWSxDQUFDTyxXQUFXLENBQUMxTixDQUFDLENBQUMsbUJBQW1CLEVBQUV1TixxQkFBcUIsQ0FBQyxDQUFDO0VBRXZFLElBQU1JLFdBQVcsR0FBRzNOLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztFQUNsRCxJQUFNNE4sWUFBWSxHQUFHNU4sQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0VBRW5ELElBQUk0TixZQUFZLENBQUM5TSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQzNCOE0sWUFBWSxDQUFDakwsTUFBTSxFQUFFO0VBQ3pCO0VBRUEsSUFBSWdMLFdBQVcsQ0FBQ0UsSUFBSSxFQUFFLENBQUNuTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM1QixNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQy9DO0lBQ0E2TSxXQUFXLENBQUNFLElBQUksRUFBRSxDQUFDeEssTUFBTSxhQUFXdkQsT0FBTyxDQUFDZ08sUUFBUSxjQUFXO0VBQ25FLENBQUMsTUFBTTtJQUNISCxXQUFXLENBQUNFLElBQUksRUFBRSxDQUFDbkwsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDcUwsSUFBSSxFQUFFO0VBQzNDO0VBRUEsT0FBT0osV0FBVztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNLLGlCQUFpQixDQUFDYixZQUFZLEVBQUU7RUFDckMsSUFBTUMsS0FBSyxHQUFHLHdEQUFZRCxZQUFZLENBQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFDcEUsTUFBTSxFQUFFOUIsSUFBSSxFQUFLO0lBQ3pFLElBQU1tRyxHQUFHLEdBQUdyRSxNQUFNO0lBQ2xCcUUsR0FBRyxDQUFDbkcsSUFBSSxDQUFDaEUsSUFBSSxDQUFDLEdBQUdnRSxJQUFJLENBQUMvRCxLQUFLO0lBRTNCLE9BQU9rSyxHQUFHO0VBQ2QsQ0FBQyxDQUFDO0VBRUYsSUFBTUMscUJBQXFCLEdBQUc7SUFDMUJySyxJQUFJLEVBQUUsTUFBTTtJQUNac0ssRUFBRSxFQUFFSixLQUFLLENBQUNJLEVBQUU7SUFDWixZQUFZLEVBQUVKLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakNLLEtBQUssRUFBRSxZQUFZO0lBQ25CdEssSUFBSSxFQUFFaUssS0FBSyxDQUFDakssSUFBSTtJQUNoQixpQkFBaUIsRUFBRWlLLEtBQUssQ0FBQyxpQkFBaUI7RUFDOUMsQ0FBQztFQUVERCxZQUFZLENBQUNPLFdBQVcsQ0FBQzFOLENBQUMsQ0FBQyxXQUFXLEVBQUV1TixxQkFBcUIsQ0FBQyxDQUFDO0VBRS9ELElBQU1JLFdBQVcsR0FBRzNOLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztFQUVsRCxJQUFJMk4sV0FBVyxDQUFDN00sTUFBTSxLQUFLLENBQUMsRUFBRTtJQUMxQkcsMEVBQXNCLENBQUMwTSxXQUFXLENBQUM7SUFDbkNBLFdBQVcsQ0FBQ0UsSUFBSSxFQUFFLENBQUNuTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUN1TCxJQUFJLEVBQUU7RUFDM0M7RUFFQSxPQUFPTixXQUFXO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNPLFVBQVUsQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sRUFBRTtFQUN0RCxJQUFNQyxTQUFTLEdBQUcsRUFBRTtFQUVwQkEsU0FBUyxDQUFDQyxJQUFJLHlCQUFxQkosV0FBVyxDQUFDSyxNQUFNLGVBQVk7RUFFakUsSUFBSSxDQUFDLHNEQUFVSixjQUFjLENBQUMsRUFBRTtJQUM1QixtREFBT0QsV0FBVyxDQUFDM0csTUFBTSxFQUFFLFVBQUNpSCxRQUFRLEVBQUs7TUFDckMsSUFBSUosT0FBTyxDQUFDSyxjQUFjLEVBQUU7UUFDeEJKLFNBQVMsQ0FBQ0MsSUFBSSxzQkFBbUJFLFFBQVEsQ0FBQ2pCLEVBQUUsV0FBS2lCLFFBQVEsQ0FBQ3RMLElBQUksZUFBWTtNQUM5RSxDQUFDLE1BQU07UUFDSG1MLFNBQVMsQ0FBQ0MsSUFBSSxzQkFBbUJFLFFBQVEsQ0FBQ3RMLElBQUksV0FBS3NMLFFBQVEsQ0FBQ3RMLElBQUksZUFBWTtNQUNoRjtJQUNKLENBQUMsQ0FBQztJQUVGaUwsY0FBYyxDQUFDTyxJQUFJLENBQUNMLFNBQVMsQ0FBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzVDO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx5RUFBVXpCLFlBQVksRUFBRXJOLE9BQU8sRUFBT3VPLE9BQU8sRUFBRVEsUUFBUSxFQUFFO0VBQUEsSUFBakMvTyxPQUFPO0lBQVBBLE9BQU8sR0FBRyxDQUFDLENBQUM7RUFBQTtFQUMvQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQUksT0FBT3VPLE9BQU8sS0FBSyxVQUFVLEVBQUU7SUFDL0I7SUFDQVEsUUFBUSxHQUFHUixPQUFPO0lBQ2xCQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ1o7RUFDSjs7RUFFQXJPLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO0lBQ3pELElBQU0yTSxXQUFXLEdBQUc5TyxDQUFDLENBQUNtQyxLQUFLLENBQUNFLGFBQWEsQ0FBQyxDQUFDVyxHQUFHLEVBQUU7SUFFaEQsSUFBSThMLFdBQVcsS0FBSyxFQUFFLEVBQUU7TUFDcEI7SUFDSjtJQUVBQyxrRUFBSyxDQUFDQyxHQUFHLENBQUMzSCxPQUFPLENBQUM0SCxTQUFTLENBQUNILFdBQVcsRUFBRSxVQUFDM0ssR0FBRyxFQUFFK0ssUUFBUSxFQUFLO01BQ3hELElBQUkvSyxHQUFHLEVBQUU7UUFDTGdMLG9FQUFjLENBQUNyUCxPQUFPLENBQUNzUCxXQUFXLENBQUM7UUFDbkMsT0FBT1AsUUFBUSxDQUFDMUssR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTWtMLGFBQWEsR0FBR3JQLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztNQUVwRCxJQUFJLENBQUMsc0RBQVVrUCxRQUFRLENBQUN4TixJQUFJLENBQUM4RixNQUFNLENBQUMsRUFBRTtRQUNsQztRQUNBLElBQU00RyxjQUFjLEdBQUdsQixpQkFBaUIsQ0FBQ21DLGFBQWEsRUFBRXZQLE9BQU8sQ0FBQztRQUVoRW9PLFVBQVUsQ0FBQ2dCLFFBQVEsQ0FBQ3hOLElBQUksRUFBRTBNLGNBQWMsRUFBRUMsT0FBTyxDQUFDO1FBQ2xEUSxRQUFRLENBQUMsSUFBSSxFQUFFVCxjQUFjLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0gsSUFBTWtCLFVBQVUsR0FBR3RCLGlCQUFpQixDQUFDcUIsYUFBYSxFQUFFdlAsT0FBTyxDQUFDO1FBRTVEK08sUUFBUSxDQUFDLElBQUksRUFBRVMsVUFBVSxDQUFDO01BQzlCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0sIFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCAkZWRpdEFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRhY2NvdW50UmV0dXJuRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZXR1cm4tZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGludm9pY2VCdXR0b24gPSAkKCdbZGF0YS1wcmludC1pbnZvaWNlXScpO1xyXG5cclxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcclxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXHJcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcclxuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXHJcbiAgICAgKi9cclxuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcclxuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCAkbGFzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oYWRkcmVzc1ZhbGlkYXRvciwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xyXG5cclxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcclxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcclxuICAgICAgICAvLyBJbmplY3QgdmFsaWRhdGlvbnMgaW50byBmb3JtIGZpZWxkcyBiZWZvcmUgdmFsaWRhdGlvbiBydW5zXHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvbXBhbnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvbXBhbnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MyLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMkxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7IHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCB9KTtcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xyXG5cclxuICAgICAgICBsZXQgJGxhc3Q7XHJcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXHJcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xyXG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xyXG5cclxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xyXG5cclxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxyXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcclxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XHJcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJyR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcclxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbmJveFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGluYm94Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmJveFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xyXG5cclxuLyoqXHJcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuY29uc3Qgb21pdE51bGxTdHJpbmcgPSBvYmogPT4ge1xyXG4gICAgY29uc3QgcmVmT2JqID0gb2JqO1xyXG5cclxuICAgICQuZWFjaChyZWZPYmosIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlZk9iajtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgY3JlZGl0IGNhcmQgdHlwZSBmcm9tIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVkaXRDYXJkVHlwZSA9IHZhbHVlID0+IGNyZWRpdGNhcmRzLmNhcmQudHlwZShjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbHVlKSwgdHJ1ZSk7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgYWpheCByZXF1ZXN0IHRvIHN0b3JlIGEgbmV3IGluc3RydW1lbnQgaW4gYmlncGF5XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgYm9keVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSBzdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0b3JlSW5zdHJ1bWVudCA9ICh7XHJcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cclxuICAgIHBheW1lbnRzVXJsLFxyXG4gICAgc2hvcHBlcklkLFxyXG4gICAgc3RvcmVIYXNoLFxyXG4gICAgdmF1bHRUb2tlbixcclxufSwge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIC8vIFByb3ZpZGVyIE5hbWVcclxuICAgIC8vIFByb3ZpZGVyIEluZm9cclxuICAgIHByb3ZpZGVyX2lkLFxyXG4gICAgY3VycmVuY3lfY29kZSxcclxuXHJcbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcclxuICAgIGNyZWRpdF9jYXJkX251bWJlcixcclxuICAgIGV4cGlyYXRpb24sXHJcbiAgICBuYW1lX29uX2NhcmQsXHJcbiAgICBjdnYsXHJcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXHJcblxyXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXHJcbiAgICBhZGRyZXNzMSxcclxuICAgIGFkZHJlc3MyLFxyXG4gICAgY2l0eSxcclxuICAgIHBvc3RhbF9jb2RlLFxyXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcclxuICAgIGNvdW50cnlfY29kZSxcclxuICAgIGNvbXBhbnksXHJcbiAgICBmaXJzdF9uYW1lLFxyXG4gICAgbGFzdF9uYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwaG9uZSxcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxufSwgZG9uZSwgZmFpbCkgPT4ge1xyXG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXHJcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxyXG4gICAgICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcclxuICAgICAgICAgICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG9uZSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxyXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAgIC5kb25lKGRvbmUpXHJcbiAgICAgICAgLmZhaWwoZmFpbCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqL1xyXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdDogZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0LCB3aGljaCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IDggJiYgLy4qKFxcLykkLy50ZXN0KHRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCA1KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2hpY2ggIT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzEtOV1cXC98WzItOV0pJC9nLCAnMCQxLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pJC9nLCAnJDEvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pKFswLTldezJ9KSQvZywgJyQxLyQyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzBdKylcXC98WzBdKyQvZywgJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmFsaWRhdG9ycyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jYXJkLmlzVmFsaWQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWwpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0RXhwaXJhdGlvblZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcnkgPSB2YWwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiAvXigwWzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLy50ZXN0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgbmFtZSBvbiBjYXJkXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAhIXZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gY2FyZFR5cGUgVGhlIGNyZWRpdCBjYXJkIG51bWJlciB0eXBlXHJcbiAgICAgKi9cclxuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYXJkVHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhcmRUeXBlKCkgOiBjYXJkVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuLyoqXHJcbiAqIElmIHRoZXJlIGFyZSBubyBvcHRpb25zIGZyb20gYmNhcHAsIGEgdGV4dCBmaWVsZCB3aWxsIGJlIHNlbnQuIFRoaXMgd2lsbCBjcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBob2xkIG9wdGlvbnMgYWZ0ZXIgdGhlIHJlbW90ZSByZXF1ZXN0LlxyXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVN0YXRlUmVxdWlyZWQoc3RhdGVFbGVtZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxyXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcclxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcclxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8c2VsZWN0Pjwvc2VsZWN0PicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xyXG5cclxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkKCdbbmFtZSo9XCJGb3JtRmllbGRJc1RleHRcIl0nKTtcclxuXHJcbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRoaWRkZW5JbnB1dC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXHJcbiAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc3dpdGNoIHRvIGFuIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSByZXF1aXJlZCBmaWVsZFxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBpZDogYXR0cnMuaWQsXHJcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxyXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXHJcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcclxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuXHJcbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkbmV3RWxlbWVudCk7XHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlc0FycmF5XHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKi9cclxuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xyXG5cclxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XHJcblxyXG4gICAgaWYgKCFfLmlzRW1wdHkoJHNlbGVjdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmouaWR9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGVFbGVtZW50LCBjb250ZXh0ID0ge30sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxyXG4gICAgICpcclxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxyXG4gICAgICpcclxuICAgICAqIHVzZUlkRm9yU3RhdGVzIHtCb29sfSAtIEdlbmVyYXRlcyBzdGF0ZXMgZHJvcGRvd24gdXNpbmcgaWQgZm9yIHZhbHVlcyBpbnN0ZWFkIG9mIHN0cmluZ3NcclxuICAgICAqL1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgIH1cclxuXHJcbiAgICAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeU5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9