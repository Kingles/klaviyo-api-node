"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse4XX = void 0;
var _ApiClient = require("../ApiClient.js");
var _InlineResponse4XXErrors = require("./InlineResponse4XXErrors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse4XX model module.
 * @module model/InlineResponse4XX
 * @version 2022-10-17
 */
var InlineResponse4XX = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4XX</code>.
   * @alias module:model/InlineResponse4XX
   * @class
   * @param errors {Array.<module:model/InlineResponse4XXErrors>} 
   */
  function InlineResponse4XX(errors) {
    _classCallCheck(this, InlineResponse4XX);
    this.errors = errors;
  }

  /**
   * Constructs a <code>InlineResponse4XX</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4XX} obj Optional instance to populate.
   * @return {module:model/InlineResponse4XX} The populated <code>InlineResponse4XX</code> instance.
   */
  _createClass(InlineResponse4XX, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4XX();
        if (data.hasOwnProperty('errors')) obj.errors = _ApiClient.ApiClient.convertToType(data['errors'], [_InlineResponse4XXErrors.InlineResponse4XXErrors]);
      }
      return obj;
    }
  }]);
  return InlineResponse4XX;
}();
/**
 * @member {Array.<module:model/InlineResponse4XXErrors>} errors
 */
exports.InlineResponse4XX = InlineResponse4XX;
InlineResponse4XX.prototype.errors = undefined;