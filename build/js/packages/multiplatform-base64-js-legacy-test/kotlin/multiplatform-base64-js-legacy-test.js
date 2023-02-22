(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'multiplatform-base64-js-legacy', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('multiplatform-base64-js-legacy'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'multiplatform-base64-js-legacy-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform-base64-js-legacy-test'.");
    }
    if (typeof this['multiplatform-base64-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-base64-js-legacy-test'. Its dependency 'multiplatform-base64-js-legacy' was not found. Please, check whether 'multiplatform-base64-js-legacy' is loaded prior to 'multiplatform-base64-js-legacy-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-base64-js-legacy-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'multiplatform-base64-js-legacy-test'.");
    }
    root['multiplatform-base64-js-legacy-test'] = factory(typeof this['multiplatform-base64-js-legacy-test'] === 'undefined' ? {} : this['multiplatform-base64-js-legacy-test'], kotlin, this['multiplatform-base64-js-legacy'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$multiplatform_base64_js_legacy, $module$kotlin_test) {
  'use strict';
  var base64 = $module$multiplatform_base64_js_legacy.com.panda.base64;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var toByte = Kotlin.toByte;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Rdayab', 'UmRheWFi');
  };
  Base64Test.prototype.testPaddedStrings = function () {
    this.checkEncodeToString_0('', '');
    this.checkEncodeToString_0('1', 'MQ==');
    this.checkEncodeToString_0('22', 'MjI=');
  };
  Base64Test.prototype.checkEncodeToString_0 = function (input, output) {
    assertEquals(output, base64.Base64Factory.createEncoder().encodeToString_fqrh44$(this.asciiToByteArray_0(input)));
  };
  Base64Test.prototype.asciiToByteArray_0 = function ($receiver) {
    var array = new Int8Array($receiver.length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = toByte($receiver.charCodeAt(i) | 0);
    }
    return array;
  };
  Base64Test.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base64Test',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$panda = package$com.panda || (package$com.panda = {});
  var package$base64 = package$panda.base64 || (package$panda.base64 = {});
  package$base64.Base64Test = Base64Test;
  suite('com.panda.base64', false, function () {
    suite('Base64Test', false, function () {
      test('testEncodeToString', false, function () {
        return (new Base64Test()).testEncodeToString();
      });
      test('testPaddedStrings', false, function () {
        return (new Base64Test()).testPaddedStrings();
      });
    });
  });
  Kotlin.defineModule('multiplatform-base64-js-legacy-test', _);
  return _;
}));

//# sourceMappingURL=multiplatform-base64-js-legacy-test.js.map
