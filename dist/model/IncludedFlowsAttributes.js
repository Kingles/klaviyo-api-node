"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedFlowsAttributes model module.
 * @module model/IncludedFlowsAttributes
 * @version 2022-10-17
 */
var IncludedFlowsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowsAttributes</code>.
   * @alias module:model/IncludedFlowsAttributes
   * @class
   */
  function IncludedFlowsAttributes() {
    _classCallCheck(this, IncludedFlowsAttributes);
  }

  /**
   * Constructs a <code>IncludedFlowsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowsAttributes} The populated <code>IncludedFlowsAttributes</code> instance.
   */
  _createClass(IncludedFlowsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowsAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('archived')) obj.archived = _ApiClient.ApiClient.convertToType(data['archived'], 'Boolean');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
        if (data.hasOwnProperty('trigger_type')) obj.triggerType = _ApiClient.ApiClient.convertToType(data['trigger_type'], 'String');
      }
      return obj;
    }
  }]);
  return IncludedFlowsAttributes;
}();
/**
 * @member {String} name
 */
exports.IncludedFlowsAttributes = IncludedFlowsAttributes;
IncludedFlowsAttributes.prototype.name = undefined;

/**
 * @member {String} status
 */
IncludedFlowsAttributes.prototype.status = undefined;

/**
 * @member {Boolean} archived
 */
IncludedFlowsAttributes.prototype.archived = undefined;

/**
 * @member {Date} created
 */
IncludedFlowsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedFlowsAttributes.prototype.updated = undefined;

/**
 * @member {String} triggerType
 */
IncludedFlowsAttributes.prototype.triggerType = undefined;