(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'multiplatform-base64-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform-base64-js-legacy'.");
    }
    root['multiplatform-base64-js-legacy'] = factory(typeof this['multiplatform-base64-js-legacy'] === 'undefined' ? {} : this['multiplatform-base64-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var toChar = Kotlin.toChar;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function Base64Encoder() {
  }
  Base64Encoder.prototype.encodeToString_fqrh44$ = function (src) {
    var $receiver = StringBuilder_init(this.encode_fqrh44$(src).length);
    var $receiver_0 = this.encode_fqrh44$(src);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      $receiver.append_s8itvh$(toChar(element));
    }
    return $receiver.toString();
  };
  Base64Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Base64Encoder',
    interfaces: []
  };
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Base64Factory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Base64Factory',
    interfaces: []
  };
  var Base64Factory_instance = null;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance === null) {
      new Base64Factory();
    }
    return Base64Factory_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$panda = package$com.panda || (package$com.panda = {});
  var package$base64 = package$panda.base64 || (package$panda.base64 = {});
  package$base64.Base64Encoder = Base64Encoder;
  Object.defineProperty(package$base64, 'Base64Factory', {
    get: Base64Factory_getInstance
  });
  Kotlin.defineModule('multiplatform-base64-js-legacy', _);
  return _;
}));

//# sourceMappingURL=multiplatform-base64-js-legacy.js.map
