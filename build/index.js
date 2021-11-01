/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/column/edit.js":
/*!****************************!*\
  !*** ./src/column/edit.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/column/editor.scss");





function Edit(_ref) {
  let {
    clientId
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "sc-column"
  });
  const {
    hasChildBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlockOrder,
      getBlockRootClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const rootId = getBlockRootClientId(clientId);
    return {
      hasChildBlocks: getBlockOrder(clientId).length > 0,
      rootClientId: rootId,
      columnsIds: getBlockOrder(rootId)
    };
  }, [clientId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    renderAppender: () => {
      if (hasChildBlocks) return null;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null);
    }
  }));
}

/***/ }),

/***/ "./src/column/index.js":
/*!*****************************!*\
  !*** ./src/column/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/column/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/column/save.js");


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('simple-columns/column', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/column/save.js":
/*!****************************!*\
  !*** ./src/column/save.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "sc-column"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/columns/edit.js":
/*!*****************************!*\
  !*** ./src/columns/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/columns/editor.scss");










function Edit(_ref) {
  var _settings$colors$find;

  let {
    setAttributes,
    attributes
  } = _ref;
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').getEditorSettings(), []);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
    'scc': true,
    [`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,
    [`scc--items-${attributes.verticalAlignment}`]: !!attributes.verticalAlignment,
    [`scc--cols-${attributes.desktop.columnsAmount}`]: !!attributes.desktop.columnsAmount,
    [`scc--row-gap-${attributes.desktop.rowGap}`]: !!attributes.desktop.rowGap,
    [`scc--col-gap-${attributes.desktop.columnGap}`]: !!attributes.desktop.columnGap,
    [`laptop:scc--cols-${attributes.laptop.columnsAmount}`]: !!attributes.laptop.columnsAmount,
    [`laptop:scc--row-gap-${attributes.laptop.rowGap}`]: !!attributes.laptop.rowGap,
    [`laptop:scc--col-gap-${attributes.laptop.columnGap}`]: !!attributes.laptop.columnGap,
    [`tablet:scc--cols-${attributes.tablet.columnsAmount}`]: !!attributes.tablet.columnsAmount,
    [`tablet:scc--row-gap-${attributes.tablet.rowGap}`]: !!attributes.tablet.rowGap,
    [`tablet:scc--col-gap-${attributes.tablet.columnGap}`]: !!attributes.tablet.columnGap,
    [`phone:scc--cols-${attributes.phone.columnsAmount}`]: !!attributes.phone.columnsAmount,
    [`phone:scc--row-gap-${attributes.phone.rowGap}`]: !!attributes.phone.rowGap,
    [`phone:scc--col-gap-${attributes.phone.columnGap}`]: !!attributes.phone.columnGap
  });
  console.log(attributes, classes);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes
  });
  const template = [...new Array(attributes.desktop.columnsAmount)].map(() => ["simple-columns/column", {}]);
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseInnerBlocksProps)(blockProps, {
    allowedBlocks: ["simple-columns/column"],
    template: template,
    orientation: 'horizontal',
    renderAppender: false
  });
  const setResponsiveAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((type, key, value) => {
    setAttributes({
      [type]: { ...attributes[type],
        [key]: value
      }
    });
  }, [attributes]);
  const setBackgroundColorAttr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(hex => {
    const object = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorObjectByColorValue)(settings.colors, hex);
    const backgroundColorClass = object ? `${object.slug}` : undefined;
    setAttributes({
      backgroundColor: backgroundColorClass
    });
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockVerticalAlignmentToolbar, {
    onChange: val => setAttributes({
      verticalAlignment: val
    }),
    value: attributes.verticalAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "simple-columns"),
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background color", "simple-columns"),
      value: (_settings$colors$find = settings.colors.find(it => it.slug === attributes.backgroundColor)) === null || _settings$colors$find === void 0 ? void 0 : _settings$colors$find.color,
      onChange: val => setBackgroundColorAttr(val),
      disableCustomColors: true,
      clearable: true
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnsPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Desktop Settings (>=1024px)", "simple-columns"),
    type: "desktop",
    attributes: attributes,
    setResponsiveAttributes: setResponsiveAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnsPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Laptop Settings (>=768px)", "simple-columns"),
    type: "laptop",
    attributes: attributes,
    setResponsiveAttributes: setResponsiveAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnsPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tablet Settings (>=640px)", "simple-columns"),
    type: "tablet",
    attributes: attributes,
    setResponsiveAttributes: setResponsiveAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColumnsPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Phone Settings (<640px)", "simple-columns"),
    type: "phone",
    attributes: attributes,
    setResponsiveAttributes: setResponsiveAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

function ColumnsPanel(_ref2) {
  let {
    title,
    type,
    attributes,
    setResponsiveAttributes
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: title,
    initialOpen: type === "desktop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Columns amount", "simple-columns"),
    value: attributes[type].columnsAmount,
    onChange: val => setResponsiveAttributes(type, "columnsAmount", val),
    min: 1,
    max: 12,
    allowReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CustomSelectControl, {
    options: _constants__WEBPACK_IMPORTED_MODULE_6__.UTILITIES,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row gap size", "simple-columns"),
    value: _constants__WEBPACK_IMPORTED_MODULE_6__.UTILITIES.find(it => it.key === attributes[type].rowGap),
    onChange: _ref3 => {
      let {
        selectedItem
      } = _ref3;
      return setResponsiveAttributes(type, "rowGap", selectedItem.key);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CustomSelectControl, {
    options: _constants__WEBPACK_IMPORTED_MODULE_6__.UTILITIES,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column gap size", "simple-columns"),
    value: _constants__WEBPACK_IMPORTED_MODULE_6__.UTILITIES.find(it => it.key === attributes[type].columnGap),
    onChange: _ref4 => {
      let {
        selectedItem
      } = _ref4;
      return setResponsiveAttributes(type, "columnGap", selectedItem.key);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor')(Edit));

/***/ }),

/***/ "./src/columns/index.js":
/*!******************************!*\
  !*** ./src/columns/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/columns/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/columns/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/columns/save.js");
 // import { select, subscribe } from '@wordpress/data';


/**
 * Internal dependencies
 */



const attributes = {
  columnsAmount: {
    type: "number"
  },
  rowGap: {
    type: "string"
  },
  columnGap: {
    type: "string"
  }
};
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('simple-columns/columns', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    backgroundColor: {
      type: "string"
    },
    verticalAlignment: {
      type: "string"
    },
    desktop: {
      type: 'object',
      default: {
        columnsAmount: 2,
        rowGap: "4",
        columnGap: "4"
      },
      ...attributes
    },
    laptop: {
      type: 'object',
      default: {
        columnsAmount: undefined,
        rowGap: undefined,
        columnGap: undefined
      },
      ...attributes
    },
    tablet: {
      type: 'object',
      default: {
        columnsAmount: undefined,
        rowGap: undefined,
        columnGap: undefined
      },
      ...attributes
    },
    phone: {
      type: 'object',
      default: {
        columnsAmount: undefined,
        rowGap: undefined,
        columnGap: undefined
      },
      ...attributes
    }
  }
}); // subscribe(() => {
// 	const editorFns = select('core/editor')
// 	if (!editorFns) {
// 		return;
// 	}
// 	const isSavingPost = editorFns.isSavingPost();
// 	const isAutosavingPost = editorFns.isAutosavingPost();
// 	if (isAutosavingPost) {
// 		return
// 	}
// 	if (!isSavingPost) {
// 		return;
// 	}
// 	console.log("Generate css");
// 	// Do action.
// });

/***/ }),

/***/ "./src/columns/save.js":
/*!*****************************!*\
  !*** ./src/columns/save.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





function save(_ref) {
  let {
    attributes
  } = _ref;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    'scc': true,
    [`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,
    [`scc--items-${attributes.verticalAlignment}`]: !!attributes.verticalAlignment,
    [`scc--cols-${attributes.desktop.columnsAmount}`]: !!attributes.desktop.columnsAmount,
    [`scc--row-gap-${attributes.desktop.rowGap}`]: !!attributes.desktop.rowGap,
    [`scc--col-gap-${attributes.desktop.columnGap}`]: !!attributes.desktop.columnGap,
    [`laptop:scc--cols-${attributes.laptop.columnsAmount}`]: !!attributes.laptop.columnsAmount,
    [`laptop:scc--row-gap-${attributes.laptop.rowGap}`]: !!attributes.laptop.rowGap,
    [`laptop:scc--col-gap-${attributes.laptop.columnGap}`]: !!attributes.laptop.columnGap,
    [`tablet:scc--cols-${attributes.tablet.columnsAmount}`]: !!attributes.tablet.columnsAmount,
    [`tablet:scc--row-gap-${attributes.tablet.rowGap}`]: !!attributes.tablet.rowGap,
    [`tablet:scc--col-gap-${attributes.tablet.columnGap}`]: !!attributes.tablet.columnGap,
    [`phone:scc--cols-${attributes.phone.columnsAmount}`]: !!attributes.phone.columnsAmount,
    [`phone:scc--row-gap-${attributes.phone.rowGap}`]: !!attributes.phone.rowGap,
    [`phone:scc--col-gap-${attributes.phone.columnGap}`]: !!attributes.phone.columnGap
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UTILITIES": function() { return /* binding */ UTILITIES; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const UTILITIES = [{
  key: undefined,
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose one", "simple-columns")
}, {
  key: "0",
  name: "0px"
}, {
  key: "1",
  name: "0.25rem"
}, {
  key: "1.5",
  name: "0.375rem"
}, {
  key: "2",
  name: "0.5rem"
}, {
  key: "2.5",
  name: "0.625rem"
}, {
  key: "3",
  name: "0.75rem"
}, {
  key: "3.5",
  name: "0.875rem"
}, {
  key: "4",
  name: "1rem"
}, {
  key: "5",
  name: "1.25rem"
}, {
  key: "6",
  name: "1.5rem"
}, {
  key: "7",
  name: "1.75rem"
}, {
  key: "8",
  name: "2rem"
}, {
  key: "9",
  name: "2.25rem"
}, {
  key: "10",
  name: "2.5rem"
}, {
  key: "11",
  name: "2.75rem"
}, {
  key: "12",
  name: "3rem"
}, {
  key: "14",
  name: "3.5rem"
}, {
  key: "14",
  name: "3.5rem"
}, {
  key: "16",
  name: "4rem"
}, {
  key: "20",
  name: "5rem"
}, {
  key: "24",
  name: "6rem"
}, {
  key: "28",
  name: "6rem"
}, {
  key: "32",
  name: "8rem"
}, {
  key: "36",
  name: "9rem"
}, {
  key: "40",
  name: "10rem"
}, {
  key: "44",
  name: "11rem"
}, {
  key: "48",
  name: "12rem"
}, {
  key: "52",
  name: "13rem"
}, {
  key: "56",
  name: "14rem"
}, {
  key: "60",
  name: "15rem"
}, {
  key: "64",
  name: "16rem"
}, {
  key: "72",
  name: "18rem"
}, {
  key: "80",
  name: "20rem"
}, {
  key: "96",
  name: "24rem"
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _columns_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns/index */ "./src/columns/index.js");
/* harmony import */ var _column_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column/index */ "./src/column/index.js");



/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/column/editor.scss":
/*!********************************!*\
  !*** ./src/column/editor.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/column/style.scss":
/*!*******************************!*\
  !*** ./src/column/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/columns/editor.scss":
/*!*********************************!*\
  !*** ./src/columns/editor.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/columns/style.scss":
/*!********************************!*\
  !*** ./src/columns/style.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksimple_columns"] = self["webpackChunksimple_columns"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map