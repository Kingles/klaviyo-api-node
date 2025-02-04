"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _UnsubscriptionCreateJobCreateQueryAsSubResource = require("./UnsubscriptionCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnsubscriptionCreateJobCreateQuery model module.
 * @module model/UnsubscriptionCreateJobCreateQuery
 * @version 2022-10-17
 */
var UnsubscriptionCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsubscriptionCreateJobCreateQuery</code>.
   * @alias module:model/UnsubscriptionCreateJobCreateQuery
   * @class
   * @param data {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} 
   */
  function UnsubscriptionCreateJobCreateQuery(data) {
    _classCallCheck(this, UnsubscriptionCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>UnsubscriptionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscriptionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/UnsubscriptionCreateJobCreateQuery} The populated <code>UnsubscriptionCreateJobCreateQuery</code> instance.
   */
  _createClass(UnsubscriptionCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsubscriptionCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _UnsubscriptionCreateJobCreateQueryAsSubResource.UnsubscriptionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return UnsubscriptionCreateJobCreateQuery;
}();
/**
 * @member {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} data
 */
exports.UnsubscriptionCreateJobCreateQuery = UnsubscriptionCreateJobCreateQuery;
UnsubscriptionCreateJobCreateQuery.prototype.data = undefined;