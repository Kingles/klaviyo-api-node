"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemDeleteJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemDeleteJobCreateQueryAsSubResource = require("./CatalogItemDeleteJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemDeleteJobCreateQuery model module.
 * @module model/CatalogItemDeleteJobCreateQuery
 * @version 2022-10-17
 */
var CatalogItemDeleteJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQuery</code>.
   * @alias module:model/CatalogItemDeleteJobCreateQuery
   * @class
   * @param data {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} 
   */
  function CatalogItemDeleteJobCreateQuery(data) {
    _classCallCheck(this, CatalogItemDeleteJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQuery} The populated <code>CatalogItemDeleteJobCreateQuery</code> instance.
   */
  _createClass(CatalogItemDeleteJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemDeleteJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogItemDeleteJobCreateQueryAsSubResource.CatalogItemDeleteJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogItemDeleteJobCreateQuery;
}();
/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} data
 */
exports.CatalogItemDeleteJobCreateQuery = CatalogItemDeleteJobCreateQuery;
CatalogItemDeleteJobCreateQuery.prototype.data = undefined;