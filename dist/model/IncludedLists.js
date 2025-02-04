"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedLists = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedListsAttributes = require("./IncludedListsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedLists model module.
 * @module model/IncludedLists
 * @version 2022-10-17
 */
var IncludedLists = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedLists</code>.
   * @alias module:model/IncludedLists
   * @class
   * @param type {module:model/IncludedLists.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedListsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedLists(type, id, attributes, links) {
    _classCallCheck(this, IncludedLists);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedLists} obj Optional instance to populate.
   * @return {module:model/IncludedLists} The populated <code>IncludedLists</code> instance.
   */
  _createClass(IncludedLists, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedLists();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedListsAttributes.IncludedListsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedLists;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.IncludedLists = IncludedLists;
IncludedLists.TypeEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list"
};
/**
 * @member {module:model/IncludedLists.TypeEnum} type
 */
IncludedLists.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedLists.prototype.id = undefined;

/**
 * @member {module:model/IncludedListsAttributes} attributes
 */
IncludedLists.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedLists.prototype.links = undefined;