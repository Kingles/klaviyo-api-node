"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfIncludedFlowMessagesAttributesContent = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfIncludedFlowMessagesAttributesContent model module.
 * @module model/OneOfIncludedFlowMessagesAttributesContent
 * @version 2022-10-17
 */
var OneOfIncludedFlowMessagesAttributesContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfIncludedFlowMessagesAttributesContent</code>.
   * @alias module:model/OneOfIncludedFlowMessagesAttributesContent
   * @class
   */
  function OneOfIncludedFlowMessagesAttributesContent() {
    _classCallCheck(this, OneOfIncludedFlowMessagesAttributesContent);
  }

  /**
   * Constructs a <code>OneOfIncludedFlowMessagesAttributesContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfIncludedFlowMessagesAttributesContent} obj Optional instance to populate.
   * @return {module:model/OneOfIncludedFlowMessagesAttributesContent} The populated <code>OneOfIncludedFlowMessagesAttributesContent</code> instance.
   */
  _createClass(OneOfIncludedFlowMessagesAttributesContent, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfIncludedFlowMessagesAttributesContent();
      }
      return obj;
    }
  }]);
  return OneOfIncludedFlowMessagesAttributesContent;
}();
exports.OneOfIncludedFlowMessagesAttributesContent = OneOfIncludedFlowMessagesAttributesContent;