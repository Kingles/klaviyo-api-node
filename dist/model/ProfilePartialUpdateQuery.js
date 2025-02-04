"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePartialUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfilePartialUpdateQueryAsSubResource = require("./ProfilePartialUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfilePartialUpdateQuery model module.
 * @module model/ProfilePartialUpdateQuery
 * @version 2022-10-17
 */
var ProfilePartialUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfilePartialUpdateQuery</code>.
   * @alias module:model/ProfilePartialUpdateQuery
   * @class
   * @param data {module:model/ProfilePartialUpdateQueryAsSubResource} 
   */
  function ProfilePartialUpdateQuery(data) {
    _classCallCheck(this, ProfilePartialUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>ProfilePartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/ProfilePartialUpdateQuery} The populated <code>ProfilePartialUpdateQuery</code> instance.
   */
  _createClass(ProfilePartialUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfilePartialUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _ProfilePartialUpdateQueryAsSubResource.ProfilePartialUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return ProfilePartialUpdateQuery;
}();
/**
 * @member {module:model/ProfilePartialUpdateQueryAsSubResource} data
 */
exports.ProfilePartialUpdateQuery = ProfilePartialUpdateQuery;
ProfilePartialUpdateQuery.prototype.data = undefined;