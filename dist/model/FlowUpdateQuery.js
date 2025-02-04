"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _FlowUpdateQueryAsSubResource = require("./FlowUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FlowUpdateQuery model module.
 * @module model/FlowUpdateQuery
 * @version 2022-10-17
 */
var FlowUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FlowUpdateQuery</code>.
   * @alias module:model/FlowUpdateQuery
   * @class
   * @param data {module:model/FlowUpdateQueryAsSubResource} 
   */
  function FlowUpdateQuery(data) {
    _classCallCheck(this, FlowUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>FlowUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQuery} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQuery} The populated <code>FlowUpdateQuery</code> instance.
   */
  _createClass(FlowUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FlowUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _FlowUpdateQueryAsSubResource.FlowUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return FlowUpdateQuery;
}();
/**
 * @member {module:model/FlowUpdateQueryAsSubResource} data
 */
exports.FlowUpdateQuery = FlowUpdateQuery;
FlowUpdateQuery.prototype.data = undefined;