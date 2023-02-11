(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_4___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");













/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  return FacetedSearch;
}();
/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);



var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_2___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2dQYWdlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvblRvZ2dsZUNsaWNrIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3Iiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJpZCIsImF0dHIiLCJoYXNNb3JlUmVzdWx0cyIsInRvZ2dsZUZhY2V0SXRlbXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJsZW5ndGgiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInVuYmluZEV2ZW50cyIsIm9uIiwiZG9jdW1lbnQiLCJob29rcyIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwidHJpZ2dlciIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQztBQUNwQjtBQUFBLElBRURBLFdBQVc7RUFBQTtFQUFBO0lBQUE7RUFBQTtFQUFBO0VBQUEsT0FDNUJDLGNBQWMsR0FBZCx3QkFBZUMsS0FBSyxFQUFFO0lBQ2xCLElBQU1DLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNqRCxJQUFNQyxXQUFXLEdBQUdDLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFhLENBQUMsQ0FBQ0MsU0FBUyxFQUFFLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFFakVWLEdBQUcsQ0FBQ1csS0FBSyxDQUFDTCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPTixHQUFHLENBQUNXLEtBQUssQ0FBQ0MsSUFBSTtJQUVyQmIsS0FBSyxDQUFDYyxjQUFj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LENBQUM2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2xHLElBQUksQ0FBQ2tHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLE1BQU07VUFDSDdELE1BQU0sQ0FBQzZELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM3RCxNQUFNLENBQUM2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hEO01BQ0osQ0FBQyxNQUFNO1FBQ0g3RCxNQUFNLENBQUM2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUM3QjtJQUNKO0lBRUEsT0FBTzdELE1BQU07RUFDakI7QUFDSixDQUFDO0FBRWN6RSx1RUFBUSxFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XHJcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3VybC11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vZm9ybS11dGlscyc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xyXG5cclxuLyoqXHJcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XHJcbiAqL1xyXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xyXG4gICAgICogICAgIH1cclxuICAgICAqIH07XHJcbiAgICAgKlxyXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICogfTtcclxuICAgICAqXHJcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxyXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXHJcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXHJcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxyXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxyXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcclxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcclxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcclxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcclxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXHJcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcclxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXHJcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcclxuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcclxuICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldygpIHtcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcclxuXHJcbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xyXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XHJcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcclxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcclxuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XHJcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBDbGVhbi11cFxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIERPTSBldmVudHNcclxuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XHJcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcclxuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBET00gZXZlbnRzXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xyXG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXHJcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFVSTFxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xyXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcclxuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcclxuXHJcbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XHJcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuXHJcbmNvbnN0IHVybFV0aWxzID0ge1xyXG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXHJcblxyXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xyXG4gICAgICAgIGxldCBwYXJhbTtcclxuXHJcbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcclxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG91dCA9ICcnO1xyXG4gICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9LFxyXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gcXVlcnlEYXRhW2ldLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1t0ZW1wWzBdXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gW3BhcmFtc1t0ZW1wWzBdXSwgdGVtcFsxXV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9