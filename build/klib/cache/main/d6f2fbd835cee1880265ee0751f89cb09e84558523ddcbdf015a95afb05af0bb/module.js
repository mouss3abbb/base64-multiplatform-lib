(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-base64-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'multiplatform-base64-js-ir'.");
    }
    root['multiplatform-base64-js-ir'] = factory(typeof this['multiplatform-base64-js-ir'] === 'undefined' ? {} : this['multiplatform-base64-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a;
  var numberToChar = kotlin_kotlin.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.i;
  var setMetadataFor = kotlin_kotlin.$_$.l;
  var NotImplementedError = kotlin_kotlin.$_$.o;
  var objectMeta = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  function encodeToString(src) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = this.encode_ub6m3x_k$(src).length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.panda.base64.Base64Encoder.encodeToString.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.encode_ub6m3x_k$(src);
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.panda.base64.Base64Encoder.encodeToString.<anonymous>.<anonymous>' call
      tmp0_apply.append_t8oh9e_k$(numberToChar(element));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  setMetadataFor(Base64Encoder, 'Base64Encoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Base64Factory, 'Base64Factory', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Base64Encoder() {
  }
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder_akj7gg_k$ = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  var Base64Factory_instance;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance == null)
      new Base64Factory();
    return Base64Factory_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Base64Factory_getInstance;
  //endregion
  return _;
}));
