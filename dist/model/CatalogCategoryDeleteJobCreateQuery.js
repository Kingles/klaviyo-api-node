"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryDeleteJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryDeleteJobCreateQueryAsSubResource = require("./CatalogCategoryDeleteJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryDeleteJobCreateQuery model module.
 * @module model/CatalogCategoryDeleteJobCreateQuery
 * @version 2022-10-17
 */
var CatalogCategoryDeleteJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQuery</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} 
   */
  function CatalogCategoryDeleteJobCreateQuery(data) {
    _classCallCheck(this, CatalogCategoryDeleteJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQuery} The populated <code>CatalogCategoryDeleteJobCreateQuery</code> instance.
   */
  _createClass(CatalogCategoryDeleteJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryDeleteJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogCategoryDeleteJobCreateQueryAsSubResource.CatalogCategoryDeleteJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryDeleteJobCreateQuery;
}();
/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} data
 */
exports.CatalogCategoryDeleteJobCreateQuery = CatalogCategoryDeleteJobCreateQuery;
CatalogCategoryDeleteJobCreateQuery.prototype.data = undefined;