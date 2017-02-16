(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["js-bigchaindb-quickstart"] = factory();
	else
		root["js-bigchaindb-quickstart"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(15)
var ieee754 = __webpack_require__(46)
var isArray = __webpack_require__(47)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7)
  , defined = __webpack_require__(6);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bs58__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bs58___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bs58__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clone__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_five_bells_condition__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_five_bells_condition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_five_bells_condition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tweetnacl__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tweetnacl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tweetnacl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_sha3__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_json_stable_stringify__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_json_stable_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_json_stable_stringify__);
/* harmony export (immutable) */ __webpack_exports__["Ed25519Keypair"] = Ed25519Keypair;
/* harmony export (immutable) */ __webpack_exports__["makeEd25519Condition"] = makeEd25519Condition;
/* harmony export (immutable) */ __webpack_exports__["makeOutput"] = makeOutput;
/* harmony export (immutable) */ __webpack_exports__["makeCreateTransaction"] = makeCreateTransaction;
/* harmony export (immutable) */ __webpack_exports__["makeTransferTransaction"] = makeTransferTransaction;
/* harmony export (immutable) */ __webpack_exports__["signTransaction"] = signTransaction;










/**
 * @class Keypair Ed25519 keypair in base58 (as BigchainDB expects base58 keys)
 * @type {Object}
 * @property {string} publicKey
 * @property {string} privateKey
 */
function Ed25519Keypair() {
    var keyPair = __WEBPACK_IMPORTED_MODULE_5_tweetnacl___default.a.sign.keyPair();
    this.publicKey = __WEBPACK_IMPORTED_MODULE_2_bs58___default.a.encode(keyPair.publicKey);

    // tweetnacl's generated secret key is the secret key + public key (resulting in a 64-byte buffer)
    this.privateKey = __WEBPACK_IMPORTED_MODULE_2_bs58___default.a.encode(keyPair.secretKey.slice(0, 32));
}

/**
 * Create an Ed25519 Cryptocondition from an Ed25519 public key to put into an Output of a Transaction
 * @param {string} publicKey base58 encoded Ed25519 public key for the recipient of the Transaction
 * @returns {object} Ed25519 Condition (that will need to wrapped in an Output)
 */
function makeEd25519Condition(publicKey) {
    var publicKeyBuffer = new __WEBPACK_IMPORTED_MODULE_1_buffer__["Buffer"](__WEBPACK_IMPORTED_MODULE_2_bs58___default.a.decode(publicKey));

    var ed25519Fulfillment = new __WEBPACK_IMPORTED_MODULE_4_five_bells_condition___default.a.Ed25519();
    ed25519Fulfillment.setPublicKey(publicKeyBuffer);
    var conditionUri = ed25519Fulfillment.getConditionUri();

    return {
        'details': {
            'signature': null,
            'type_id': 4,
            'type': 'fulfillment',
            'bitmask': 32,
            'public_key': publicKey
        },
        'uri': conditionUri
    };
}

/**
 * Create an Output from a Condition.
 * Note: Assumes the given Condition was generated from a single public key (e.g. a Ed25519 Condition)
 * @param {object} condition Condition (e.g. a Ed25519 Condition from `makeEd25519Condition()`)
 * @param {number} amount Amount of the output
 * @returns {object} An Output usable in a Transaction
 */
function makeOutput(condition) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return {
        amount: amount,
        condition: condition,
        'public_keys': [condition.details.public_key]
    };
}

/**
 * Generate a `CREATE` transaction holding the `asset`, `metadata`, and `outputs`, to be signed by
 * the `issuers`.
 * @param {object} asset Created asset's data
 * @param {object} metadata Metadata for the Transaction
 * @param {object[]} outputs Array of Output objects to add to the Transaction.
 *                           Think of these as the recipients of the asset after the transaction.
 *                           For `CREATE` Transactions, this should usually just be a list of
 *                           Outputs wrapping Ed25519 Conditions generated from the issuers' public
 *                           keys (so that the issuers are the recipients of the created asset).
 * @param {...string[]} issuers Public key of one or more issuers to the asset being created by this
 *                              Transaction.
 *                              Note: Each of the private keys corresponding to the given public
 *                              keys MUST be used later (and in the same order) when signing the
 *                              Transaction (`signTransaction()`).
 * @returns {object} Unsigned transaction -- make sure to call signTransaction() on it before
 *                   sending it off!
 */
function makeCreateTransaction(asset, metadata, outputs) {
    var assetDefinition = {
        'data': asset || null
    };

    for (var _len = arguments.length, issuers = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        issuers[_key - 3] = arguments[_key];
    }

    var inputs = issuers.map(function (issuer) {
        return makeInputTemplate([issuer]);
    });

    return makeTransaction('CREATE', assetDefinition, metadata, outputs, inputs);
}

/**
 * Generate a `TRANSFER` transaction holding the `asset`, `metadata`, and `outputs`, that fulfills
 * the `fulfilledOutputs` of `unspentTransaction`.
 * @param {object} unspentTransaction Previous Transaction you have control over (i.e. can fulfill
 *                                    its Output Condition)
 * @param {object} metadata Metadata for the Transaction
 * @param {object[]} outputs Array of Output objects to add to the Transaction.
 *                           Think of these as the recipients of the asset after the transaction.
 *                           For `TRANSFER` Transactions, this should usually just be a list of
 *                           Outputs wrapping Ed25519 Conditions generated from the public keys of
 *                           the recipients.
 * @param {...number} fulfilledOutputs Indices of the Outputs in `unspentTransaction` that this
 *                                     Transaction fulfills.
 *                                     Note that the public keys listed in the fulfilled Outputs
 *                                     must be used (and in the same order) to sign the Transaction
 *                                     (`signTransaction()`).
 * @returns {object} Unsigned transaction -- make sure to call signTransaction() on it before
 *                   sending it off!
 */
function makeTransferTransaction(unspentTransaction, metadata, outputs) {
    for (var _len2 = arguments.length, fulfilledOutputs = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        fulfilledOutputs[_key2 - 3] = arguments[_key2];
    }

    var inputs = fulfilledOutputs.map(function (outputIndex) {
        var fulfilledOutput = unspentTransaction.outputs[outputIndex];
        var transactionLink = {
            'output': outputIndex,
            'txid': unspentTransaction.id
        };

        return makeInputTemplate(fulfilledOutput.public_keys, transactionLink);
    });

    var assetLink = {
        'id': unspentTransaction.operation === 'CREATE' ? unspentTransaction.id : unspentTransaction.asset.id
    };

    return makeTransaction('TRANSFER', assetLink, metadata, outputs, inputs);
}

/**
 * Sign the given `transaction` with the given `privateKey`s, returning a new copy of `transaction`
 * that's been signed.
 * Note: Only generates Ed25519 Fulfillments. Thresholds and other types of Fulfillments are left as
 * an exercise for the user.
 * @param {object} transaction Transaction to sign. `transaction` is not modified.
 * @param {...string} privateKeys Private keys associated with the issuers of the `transaction`.
 *                                Looped through to iteratively sign any Input Fulfillments found in
 *                                the `transaction`.
 * @returns {object} The signed version of `transaction`.
 */
function signTransaction(transaction) {
    for (var _len3 = arguments.length, privateKeys = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        privateKeys[_key3 - 1] = arguments[_key3];
    }

    var signedTx = __WEBPACK_IMPORTED_MODULE_3_clone___default()(transaction);
    signedTx.inputs.forEach(function (input, index) {
        var privateKey = privateKeys[index];
        var privateKeyBuffer = new __WEBPACK_IMPORTED_MODULE_1_buffer__["Buffer"](__WEBPACK_IMPORTED_MODULE_2_bs58___default.a.decode(privateKey));
        var serializedTransaction = serializeTransactionIntoCanonicalString(transaction);

        var ed25519Fulfillment = new __WEBPACK_IMPORTED_MODULE_4_five_bells_condition___default.a.Ed25519();
        ed25519Fulfillment.sign(new __WEBPACK_IMPORTED_MODULE_1_buffer__["Buffer"](serializedTransaction), privateKeyBuffer);
        var fulfillmentUri = ed25519Fulfillment.serializeUri();

        input.fulfillment = fulfillmentUri;
    });

    return signedTx;
}

/*********************
 * Transaction utils *
 *********************/

function makeTransactionTemplate() {
    return {
        'id': null,
        'operation': null,
        'outputs': [],
        'inputs': [],
        'metadata': null,
        'asset': null,
        'version': '0.9'
    };
}

function makeInputTemplate() {
    var publicKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var fulfills = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fulfillment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    return {
        fulfillment: fulfillment,
        fulfills: fulfills,
        'owners_before': publicKeys
    };
}

function makeTransaction(operation, asset) {
    var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var outputs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var inputs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    var tx = makeTransactionTemplate();
    tx.operation = operation;
    tx.asset = asset;
    tx.metadata = metadata;
    tx.inputs = inputs;
    tx.outputs = outputs;

    // Hashing must be done after, as the hash is of the Transaction (up to now)
    tx.id = hashTransaction(tx);
    return tx;
}

/****************
 * Crypto utils *
 ****************/

function hashTransaction(transaction) {
    // Safely remove any tx id from the given transaction for hashing
    var tx = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, transaction);
    delete tx.id;

    return sha256Hash(serializeTransactionIntoCanonicalString(tx));
}

function sha256Hash(data) {
    return __WEBPACK_IMPORTED_MODULE_6_js_sha3___default.a.sha3_256.create().update(data).hex();
}

function serializeTransactionIntoCanonicalString(transaction) {
    // BigchainDB signs fulfillments by serializing transactions into a "canonical" format where
    // each fulfillment URI is removed before sorting the remaining keys
    var tx = __WEBPACK_IMPORTED_MODULE_3_clone___default()(transaction);
    tx.inputs.forEach(function (input) {
        input.fulfillment = null;
    });

    // Sort the keys
    return __WEBPACK_IMPORTED_MODULE_7_json_stable_stringify___default()(tx, function (a, b) {
        return a.key > b.key ? 1 : -1;
    });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// base-x encoding
// Forked from https://github.com/cryptocoinjs/bs58
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc

module.exports = function base (ALPHABET) {
  var ALPHABET_MAP = {}
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)

  // pre-compute lookup table
  for (var z = 0; z < ALPHABET.length; z++) {
    var x = ALPHABET.charAt(z)

    if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')
    ALPHABET_MAP[x] = z
  }

  function encode (source) {
    if (source.length === 0) return ''

    var digits = [0]
    for (var i = 0; i < source.length; ++i) {
      for (var j = 0, carry = source[i]; j < digits.length; ++j) {
        carry += digits[j] << 8
        digits[j] = carry % BASE
        carry = (carry / BASE) | 0
      }

      while (carry > 0) {
        digits.push(carry % BASE)
        carry = (carry / BASE) | 0
      }
    }

    var string = ''

    // deal with leading zeros
    for (var k = 0; source[k] === 0 && k < source.length - 1; ++k) string += ALPHABET[0]
    // convert digits to a string
    for (var q = digits.length - 1; q >= 0; --q) string += ALPHABET[digits[q]]

    return string
  }

  function decodeUnsafe (string) {
    if (string.length === 0) return Buffer.allocUnsafe(0)

    var bytes = [0]
    for (var i = 0; i < string.length; i++) {
      var value = ALPHABET_MAP[string[i]]
      if (value === undefined) return

      for (var j = 0, carry = value; j < bytes.length; ++j) {
        carry += bytes[j] * BASE
        bytes[j] = carry & 0xff
        carry >>= 8
      }

      while (carry > 0) {
        bytes.push(carry & 0xff)
        carry >>= 8
      }
    }

    // deal with leading zeros
    for (var k = 0; string[k] === LEADER && k < string.length - 1; ++k) {
      bytes.push(0)
    }

    return Buffer.from(bytes.reverse())
  }

  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) return buffer

    throw new Error('Non-base' + BASE + ' character')
  }

  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var basex = __webpack_require__(14)
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (parent instanceof nativeMap) {
      child = new nativeMap();
    } else if (parent instanceof nativeSet) {
      child = new nativeSet();
    } else if (parent instanceof nativePromise) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else if (parent instanceof Error) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (parent instanceof nativeMap) {
      var keyIterator = parent.keys();
      while(true) {
        var next = keyIterator.next();
        if (next.done) {
          break;
        }
        var keyChild = _clone(next.value, depth - 1);
        var valueChild = _clone(parent.get(next.value), depth - 1);
        child.set(keyChild, valueChild);
      }
    }
    if (parent instanceof nativeSet) {
      var iterator = parent.keys();
      while(true) {
        var next = iterator.next();
        if (next.done) {
          break;
        }
        var entryChild = _clone(next.value, depth - 1);
        child.add(entryChild);
      }
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(5).Object.assign;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9)
  , toLength  = __webpack_require__(40)
  , toIndex   = __webpack_require__(39);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(28)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(31)
  , createDesc = __webpack_require__(36);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(1)(function(){
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(34)
  , gOPS     = __webpack_require__(32)
  , pIE      = __webpack_require__(35)
  , toObject = __webpack_require__(41)
  , IObject  = __webpack_require__(7)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(20)
  , IE8_DOM_DEFINE = __webpack_require__(29)
  , toPrimitive    = __webpack_require__(42)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(27)
  , toIObject    = __webpack_require__(9)
  , arrayIndexOf = __webpack_require__(21)(false)
  , IE_PROTO     = __webpack_require__(37)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(33)
  , enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys')
  , uid    = __webpack_require__(43);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(26);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(30)});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("FiveBellsCondition",[],e):"object"==typeof exports?exports.FiveBellsCondition=e():t.FiveBellsCondition=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,e,r){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=613)}([function(t,e,r){var n=r(4),i=r(32),o=r(14),a=r(15),f=r(33),s="prototype",u=function(t,e,r){var h,c,d,l,p=t&u.F,b=t&u.G,v=t&u.S,y=t&u.P,m=t&u.B,g=b?n:v?n[e]||(n[e]={}):(n[e]||{})[s],w=b?i:i[e]||(i[e]={}),_=w[s]||(w[s]={});b&&(r=e);for(h in r)c=!p&&g&&void 0!==g[h],d=(c?g:r)[h],l=m&&c?f(d,n):y&&"function"==typeof d?f(Function.call,d):d,g&&a(g,h,d,t&u.U),w[h]!=d&&o(w,h,l),y&&_[h]!=d&&(_[h]=d)};n.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,r){"use strict";(function(t,n){function i(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function o(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,r){if(o()<r)throw new RangeError("Invalid typed array length");return t.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(r),e.__proto__=t.prototype):(null===e&&(e=new t(r)),e.length=r),e}function t(e,r,n){if(!(t.TYPED_ARRAY_SUPPORT||this instanceof t))return new t(e,r,n);if("number"==typeof e){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return h(this,e)}return f(this,e,r,n)}function f(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?c(t,e,r):p(t,e)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e,r,n){return s(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}function h(e,r){if(s(r),e=a(e,r<0?0:0|b(r)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)e[n]=0;return e}function c(e,r,n){if("string"==typeof n&&""!==n||(n="utf8"),!t.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|y(r,n);e=a(e,i);var o=e.write(r,n);return o!==i&&(e=e.slice(0,o)),e}function d(t,e){var r=e.length<0?0:0|b(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(e,r,n,i){if(r.byteLength,n<0||r.byteLength<n)throw new RangeError("'offset' is out of bounds");if(r.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");return r=void 0===n&&void 0===i?new Uint8Array(r):void 0===i?new Uint8Array(r,n):new Uint8Array(r,n,i),t.TYPED_ARRAY_SUPPORT?(e=r,e.__proto__=t.prototype):e=d(e,r),e}function p(e,r){if(t.isBuffer(r)){var n=0|b(r.length);return e=a(e,n),0===e.length?e:(r.copy(e,0,0,n),e)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Z(r.length)?a(e,0):d(e,r);if("Buffer"===r.type&&Q(r.data))return d(e,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function b(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function v(e){return+e!=e&&(e=0),t.alloc(+e)}function y(e,r){if(t.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(e).length;default:if(i)return V(e).length;r=(""+r).toLowerCase(),i=!0}}function m(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return R(this,e,r);case"latin1":case"binary":return P(this,e,r);case"base64":return I(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(e,r,n,i,o){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof r&&(r=t.from(r,i)),t.isBuffer(r))return 0===r.length?-1:_(e,r,n,i,o);if("number"==typeof r)return r&=255,t.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,r,n):Uint8Array.prototype.lastIndexOf.call(e,r,n):_(e,[r],n,i,o);throw new TypeError("val must be string, number or Buffer")}function _(t,e,r,n,i){function o(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}var a=1,f=t.length,s=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;a=2,f/=2,s/=2,r/=2}var u;if(i){var h=-1;for(u=r;u<f;u++)if(o(t,u)===o(e,h===-1?0:u-h)){if(h===-1&&(h=u),u-h+1===s)return h*a}else h!==-1&&(u-=u-h),h=-1}else for(r+s>f&&(r=f-s),u=r;u>=0;u--){for(var c=!0,d=0;d<s;d++)if(o(t,u+d)!==o(e,d)){c=!1;break}if(c)return u}return-1}function M(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var f=parseInt(e.substr(2*a,2),16);if(isNaN(f))return a;t[r+a]=f}return a}function S(t,e,r,n){return W(V(e,t.length-r),t,r,n)}function E(t,e,r,n){return W(H(e),t,r,n)}function A(t,e,r,n){return E(t,e,r,n)}function k(t,e,r,n){return W(Y(e),t,r,n)}function x(t,e,r,n){return W(X(e,t.length-r),t,r,n)}function I(t,e,r){return 0===e&&r===t.length?J.fromByteArray(t):J.fromByteArray(t.slice(e,r))}function B(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o=t[i],a=null,f=o>239?4:o>223?3:o>191?2:1;if(i+f<=r){var s,u,h,c;switch(f){case 1:o<128&&(a=o);break;case 2:s=t[i+1],128===(192&s)&&(c=(31&o)<<6|63&s,c>127&&(a=c));break;case 3:s=t[i+1],u=t[i+2],128===(192&s)&&128===(192&u)&&(c=(15&o)<<12|(63&s)<<6|63&u,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:s=t[i+1],u=t[i+2],h=t[i+3],128===(192&s)&&128===(192&u)&&128===(192&h)&&(c=(15&o)<<18|(63&s)<<12|(63&u)<<6|63&h,c>65535&&c<1114112&&(a=c))}}null===a?(a=65533,f=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=f}return O(n)}function O(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return r}function R(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function T(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=G(t[o]);return i}function j(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function N(e,r,n,i,o,a){if(!t.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<a)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function L(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function U(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function z(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,i){return i||z(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),$.write(t,e,r,n,23,4),r+4}function q(t,e,r,n,i){return i||z(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),$.write(t,e,r,n,52,8),r+8}function F(t){if(t=K(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function K(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function G(t){return t<16?"0"+t.toString(16):t.toString(16)}function V(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],a=0;a<n;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function H(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function X(t,e){for(var r,n,i,o=[],a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function Y(t){return J.toByteArray(F(t))}function W(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function Z(t){return t!==t}var J=r(490),$=r(491),Q=r(492);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:i(),e.kMaxLength=o(),t.poolSize=8192,t._augment=function(e){return e.__proto__=t.prototype,e},t.from=function(t,e,r){return f(null,t,e,r)},t.TYPED_ARRAY_SUPPORT&&(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&t[Symbol.species]===t&&Object.defineProperty(t,Symbol.species,{value:null,configurable:!0})),t.alloc=function(t,e,r){return u(null,t,e,r)},t.allocUnsafe=function(t){return h(null,t)},t.allocUnsafeSlow=function(t){return h(null,t)},t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,r){if(!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(e===r)return 0;for(var n=e.length,i=r.length,o=0,a=Math.min(n,i);o<a;++o)if(e[o]!==r[o]){n=e[o],i=r[o];break}return n<i?-1:i<n?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!Q(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return t.alloc(0);var n;if(void 0===r)for(r=0,n=0;n<e.length;++n)r+=e[n].length;var i=t.allocUnsafe(r),o=0;for(n=0;n<e.length;++n){var a=e[n];if(!t.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,o),o+=a.length}return i},t.byteLength=y,t.prototype._isBuffer=!0,t.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},t.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},t.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?B(this,0,t):m.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===t.compare(this,e)},t.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e,r,n,i,o){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),r<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(r>>>=0,n>>>=0,i>>>=0,o>>>=0,this===e)return 0;for(var a=o-i,f=n-r,s=Math.min(a,f),u=this.slice(i,o),h=e.slice(r,n),c=0;c<s;++c)if(u[c]!==h[c]){a=u[c],f=h[c];break}return a<f?-1:f<a?1:0},t.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},t.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},t.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},t.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return M(this,t,e,r);case"utf8":case"utf-8":return S(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return k(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;t.prototype.slice=function(e,r){var n=this.length;e=~~e,r=void 0===r?n:~~r,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<e&&(r=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=this.subarray(e,r),i.__proto__=t.prototype;else{var o=r-e;i=new t(o,void 0);for(var a=0;a<o;++a)i[a]=this[a+e]}return i},t.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||C(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},t.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||C(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},t.prototype.readUInt8=function(t,e){return e||C(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||C(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||C(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||C(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},t.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||C(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},t.prototype.readInt8=function(t,e){return e||C(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},t.prototype.readInt16LE=function(t,e){e||C(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(t,e){e||C(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(t,e){return e||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||C(t,4,this.length),$.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||C(t,4,this.length),$.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||C(t,8,this.length),$.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||C(t,8,this.length),$.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;N(this,t,e,r,i,0)}var o=1,a=0;for(this[e]=255&t;++a<r&&(o*=256);)this[e+a]=t/o&255;return e+r},t.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;N(this,t,e,r,i,0)}var o=r-1,a=1;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=t/a&255;return e+r},t.prototype.writeUInt8=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[r]=255&e,r+1},t.prototype.writeUInt16LE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):L(this,e,r,!0),r+2},t.prototype.writeUInt16BE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):L(this,e,r,!1),r+2},t.prototype.writeUInt32LE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e):U(this,e,r,!0),r+4},t.prototype.writeUInt32BE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):U(this,e,r,!1),r+4},t.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);N(this,t,e,r,i-1,-i)}var o=0,a=1,f=0;for(this[e]=255&t;++o<r&&(a*=256);)t<0&&0===f&&0!==this[e+o-1]&&(f=1),this[e+o]=(t/a>>0)-f&255;return e+r},t.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);N(this,t,e,r,i-1,-i)}var o=r-1,a=1,f=0;for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===f&&0!==this[e+o+1]&&(f=1),this[e+o]=(t/a>>0)-f&255;return e+r},t.prototype.writeInt8=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[r]=255&e,r+1},t.prototype.writeInt16LE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):L(this,e,r,!0),r+2},t.prototype.writeInt16BE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):L(this,e,r,!1),r+2},t.prototype.writeInt32LE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24):U(this,e,r,!0),r+4},t.prototype.writeInt32BE=function(e,r,n){return e=+e,r|=0,n||N(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):U(this,e,r,!1),r+4},t.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},t.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},t.prototype.writeDoubleLE=function(t,e,r){return q(this,t,e,!0,r)},t.prototype.writeDoubleBE=function(t,e,r){return q(this,t,e,!1,r)},t.prototype.copy=function(e,r,n,i){if(n||(n=0),i||0===i||(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);var o,a=i-n;if(this===e&&n<r&&r<i)for(o=a-1;o>=0;--o)e[o+r]=this[o+n];else if(a<1e3||!t.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)e[o+r]=this[o+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+a),r);return a},t.prototype.fill=function(e,r,n,i){if("string"==typeof e){if("string"==typeof r?(i=r,r=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!t.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof e&&(e&=255);if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0);var a;if("number"==typeof e)for(a=r;a<n;++a)this[a]=e;else{var f=t.isBuffer(e)?e:V(new t(e,i).toString()),s=f.length;for(a=0;a<n-r;++a)this[a+r]=f[a%s]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,r(1).Buffer,r(39))},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){var n=r(6);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(87)("wks"),i=r(48),o=r(4).Symbol,a="function"==typeof o,f=t.exports=function(t){return n[t]||(n[t]=a&&o[t]||(a?o:i)("Symbol."+t))};f.store=n},function(t,e,r){t.exports=!r(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(3),i=r(174),o=r(29),a=Object.defineProperty;e.f=r(8)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(38),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){var n=r(24);t.exports=function(t){return Object(n(t))}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(9),i=r(37);t.exports=r(8)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(4),i=r(14),o=r(12),a=r(48)("src"),f="toString",s=Function[f],u=(""+s).split(f);r(32).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,r,f){var s="function"==typeof r;s&&(o(r,"name")||i(r,"name",e)),t[e]!==r&&(s&&(o(r,a)||i(r,a,t[e]?""+t[e]:u.join(String(e)))),t===n?t[e]=r:f?t[e]?t[e]=r:i(t,e,r):(delete t[e],i(t,e,r)))})(Function.prototype,f,function(){return"function"==typeof this&&this[a]||s.call(this)})},function(t,e,r){var n=r(0),i=r(5),o=r(24),a=/"/g,f=function(t,e,r,n){var i=String(o(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),f+">"+i+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(f),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},function(t,e,r){var n=r(65),i=r(24);t.exports=function(t){return n(i(t))}},function(t,e,r){(function(t){!function(t,e){"use strict";function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){return o.isBN(t)?t:(this.negative=0,this.words=null,this.length=0,this.red=null,void(null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))))}function a(t,e,r){for(var n=0,i=Math.min(t.length,r),o=e;o<i;o++){var a=t.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function f(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var f=t.charCodeAt(a)-48;i*=n,i+=f>=49?f-49+10:f>=17?f-17+10:f}return i}function s(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26;e[r]=(t.words[n]&1<<i)>>>i}return e}function u(t,e,r){r.negative=e.negative^t.negative;var n=t.length+e.length|0;r.length=n,n=n-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,f=67108863&a,s=a/67108864|0;r.words[0]=f;for(var u=1;u<n;u++){for(var h=s>>>26,c=67108863&s,d=Math.min(u,e.length-1),l=Math.max(0,u-t.length+1);l<=d;l++){var p=u-l|0;i=0|t.words[p],o=0|e.words[l],a=i*o+c,h+=a/67108864|0,c=67108863&a}r.words[u]=0|c,s=0|h}return 0!==s?r.words[u]=0|s:r.length--,r.strip()}function h(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var f=67108863&n,s=Math.min(o,e.length-1),u=Math.max(0,o-t.length+1);u<=s;u++){var h=o-u,c=0|t.words[h],d=0|e.words[u],l=c*d,p=67108863&l;a=a+(l/67108864|0)|0,p=p+f|0,f=67108863&p,a=a+(p>>>26)|0,i+=a>>>26,a&=67108863}r.words[o]=f,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}function c(t,e,r){var n=new d;return n.mulp(t,e,r)}function d(t,e){this.x=t,this.y=e}function l(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){l.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){l.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){l.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function y(){l.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function m(t){if("string"==typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function g(t){m.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;var w;try{w=r(1).Buffer}catch(t){}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r);if("object"==typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36),t=t.toString().replace(/\s+/g,"");var i=0;"-"===t[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,f=0;if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=t.length-6,n=0;r>=e;r-=6)i=a(t,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,o+=24,o>=26&&(o-=26,n++);r+6!==e&&(i=a(t,e,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=e)n++;n--,i=i/e|0;for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,h=r;h<s;h+=n)u=f(t,h,h+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==a){var c=1;for(u=f(t,h,t.length,e),h=0;h<a;h++)c*=e;this.imuln(c),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var _=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],M=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],S=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(t,e){t=t||10,e=0|e||1;var r;if(16===t||"hex"===t){r="";for(var i=0,o=0,a=0;a<this.length;a++){var f=this.words[a],s=(16777215&(f<<i|o)).toString(16);o=f>>>24-i&16777215,r=0!==o||a!==this.length-1?_[6-s.length]+s+r:s+r,i+=2,i>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var u=M[t],h=S[t];r="";var c=this.clone();for(c.negative=0;!c.isZero();){var d=c.modn(h).toString(t);c=c.idivn(h),r=c.isZero()?d+r:_[u-d.length]+d+r}for(this.isZero()&&(r="0"+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n("undefined"!=typeof w),this.toArrayLike(w,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,f,s="le"===e,u=new t(o),h=this.clone();if(s){for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[f]=a;for(;f<o;f++)u[f]=0}else{for(f=0;f<o-i;f++)u[f]=0;for(f=0;!h.isZero();f++)a=h.andln(255),
h.iushrn(8),u[o-f-1]=a}return u},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0;return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,r=0;return 0===(8191&e)&&(r+=13,e>>>=13),0===(127&e)&&(r+=7,e>>>=7),0===(15&e)&&(r+=4,e>>>=4),0===(3&e)&&(r+=2,e>>>=2),0===(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e]);if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return n(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r;this.length>t.length?(e=this,r=t):(e=t,r=this);for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n];if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0);var r=t/26|0,i=t%26;return this._expand(r+1),e?this.words[r]=this.words[r]|1<<i:this.words[r]=this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();var r,n;this.length>t.length?(r=this,n=t):(r=t,n=this);for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var r=this.cmp(t);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=t):(n=t,i=this);for(var o=0,a=0;a<i.length;a++)e=(0|n.words[a])-(0|i.words[a])+o,o=e>>26,this.words[a]=67108863&e;for(;0!==o&&a<n.length;a++)e=(0|n.words[a])+o,o=e>>26,this.words[a]=67108863&e;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var E=function(t,e,r){var n,i,o,a=t.words,f=e.words,s=r.words,u=0,h=0|a[0],c=8191&h,d=h>>>13,l=0|a[1],p=8191&l,b=l>>>13,v=0|a[2],y=8191&v,m=v>>>13,g=0|a[3],w=8191&g,_=g>>>13,M=0|a[4],S=8191&M,E=M>>>13,A=0|a[5],k=8191&A,x=A>>>13,I=0|a[6],B=8191&I,O=I>>>13,R=0|a[7],P=8191&R,T=R>>>13,j=0|a[8],C=8191&j,N=j>>>13,L=0|a[9],U=8191&L,z=L>>>13,D=0|f[0],q=8191&D,F=D>>>13,K=0|f[1],G=8191&K,V=K>>>13,H=0|f[2],X=8191&H,Y=H>>>13,W=0|f[3],Z=8191&W,J=W>>>13,$=0|f[4],Q=8191&$,tt=$>>>13,et=0|f[5],rt=8191&et,nt=et>>>13,it=0|f[6],ot=8191&it,at=it>>>13,ft=0|f[7],st=8191&ft,ut=ft>>>13,ht=0|f[8],ct=8191&ht,dt=ht>>>13,lt=0|f[9],pt=8191&lt,bt=lt>>>13;r.negative=t.negative^e.negative,r.length=19,n=Math.imul(c,q),i=Math.imul(c,F),i=i+Math.imul(d,q)|0,o=Math.imul(d,F);var vt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(p,q),i=Math.imul(p,F),i=i+Math.imul(b,q)|0,o=Math.imul(b,F),n=n+Math.imul(c,G)|0,i=i+Math.imul(c,V)|0,i=i+Math.imul(d,G)|0,o=o+Math.imul(d,V)|0;var yt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(y,q),i=Math.imul(y,F),i=i+Math.imul(m,q)|0,o=Math.imul(m,F),n=n+Math.imul(p,G)|0,i=i+Math.imul(p,V)|0,i=i+Math.imul(b,G)|0,o=o+Math.imul(b,V)|0,n=n+Math.imul(c,X)|0,i=i+Math.imul(c,Y)|0,i=i+Math.imul(d,X)|0,o=o+Math.imul(d,Y)|0;var mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(w,q),i=Math.imul(w,F),i=i+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(y,G)|0,i=i+Math.imul(y,V)|0,i=i+Math.imul(m,G)|0,o=o+Math.imul(m,V)|0,n=n+Math.imul(p,X)|0,i=i+Math.imul(p,Y)|0,i=i+Math.imul(b,X)|0,o=o+Math.imul(b,Y)|0,n=n+Math.imul(c,Z)|0,i=i+Math.imul(c,J)|0,i=i+Math.imul(d,Z)|0,o=o+Math.imul(d,J)|0;var gt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(S,q),i=Math.imul(S,F),i=i+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,G)|0,i=i+Math.imul(w,V)|0,i=i+Math.imul(_,G)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(y,X)|0,i=i+Math.imul(y,Y)|0,i=i+Math.imul(m,X)|0,o=o+Math.imul(m,Y)|0,n=n+Math.imul(p,Z)|0,i=i+Math.imul(p,J)|0,i=i+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0,n=n+Math.imul(c,Q)|0,i=i+Math.imul(c,tt)|0,i=i+Math.imul(d,Q)|0,o=o+Math.imul(d,tt)|0;var wt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(k,q),i=Math.imul(k,F),i=i+Math.imul(x,q)|0,o=Math.imul(x,F),n=n+Math.imul(S,G)|0,i=i+Math.imul(S,V)|0,i=i+Math.imul(E,G)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,X)|0,i=i+Math.imul(w,Y)|0,i=i+Math.imul(_,X)|0,o=o+Math.imul(_,Y)|0,n=n+Math.imul(y,Z)|0,i=i+Math.imul(y,J)|0,i=i+Math.imul(m,Z)|0,o=o+Math.imul(m,J)|0,n=n+Math.imul(p,Q)|0,i=i+Math.imul(p,tt)|0,i=i+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0,n=n+Math.imul(c,rt)|0,i=i+Math.imul(c,nt)|0,i=i+Math.imul(d,rt)|0,o=o+Math.imul(d,nt)|0;var _t=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(B,q),i=Math.imul(B,F),i=i+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(k,G)|0,i=i+Math.imul(k,V)|0,i=i+Math.imul(x,G)|0,o=o+Math.imul(x,V)|0,n=n+Math.imul(S,X)|0,i=i+Math.imul(S,Y)|0,i=i+Math.imul(E,X)|0,o=o+Math.imul(E,Y)|0,n=n+Math.imul(w,Z)|0,i=i+Math.imul(w,J)|0,i=i+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(y,Q)|0,i=i+Math.imul(y,tt)|0,i=i+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0,n=n+Math.imul(p,rt)|0,i=i+Math.imul(p,nt)|0,i=i+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0,n=n+Math.imul(c,ot)|0,i=i+Math.imul(c,at)|0,i=i+Math.imul(d,ot)|0,o=o+Math.imul(d,at)|0;var Mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(P,q),i=Math.imul(P,F),i=i+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(B,G)|0,i=i+Math.imul(B,V)|0,i=i+Math.imul(O,G)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(k,X)|0,i=i+Math.imul(k,Y)|0,i=i+Math.imul(x,X)|0,o=o+Math.imul(x,Y)|0,n=n+Math.imul(S,Z)|0,i=i+Math.imul(S,J)|0,i=i+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=i+Math.imul(w,tt)|0,i=i+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(y,rt)|0,i=i+Math.imul(y,nt)|0,i=i+Math.imul(m,rt)|0,o=o+Math.imul(m,nt)|0,n=n+Math.imul(p,ot)|0,i=i+Math.imul(p,at)|0,i=i+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0,n=n+Math.imul(c,st)|0,i=i+Math.imul(c,ut)|0,i=i+Math.imul(d,st)|0,o=o+Math.imul(d,ut)|0;var St=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(C,q),i=Math.imul(C,F),i=i+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(P,G)|0,i=i+Math.imul(P,V)|0,i=i+Math.imul(T,G)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(B,X)|0,i=i+Math.imul(B,Y)|0,i=i+Math.imul(O,X)|0,o=o+Math.imul(O,Y)|0,n=n+Math.imul(k,Z)|0,i=i+Math.imul(k,J)|0,i=i+Math.imul(x,Z)|0,o=o+Math.imul(x,J)|0,n=n+Math.imul(S,Q)|0,i=i+Math.imul(S,tt)|0,i=i+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=i+Math.imul(w,nt)|0,i=i+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(y,ot)|0,i=i+Math.imul(y,at)|0,i=i+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0,n=n+Math.imul(p,st)|0,i=i+Math.imul(p,ut)|0,i=i+Math.imul(b,st)|0,o=o+Math.imul(b,ut)|0,n=n+Math.imul(c,ct)|0,i=i+Math.imul(c,dt)|0,i=i+Math.imul(d,ct)|0,o=o+Math.imul(d,dt)|0;var Et=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(U,q),i=Math.imul(U,F),i=i+Math.imul(z,q)|0,o=Math.imul(z,F),n=n+Math.imul(C,G)|0,i=i+Math.imul(C,V)|0,i=i+Math.imul(N,G)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(P,X)|0,i=i+Math.imul(P,Y)|0,i=i+Math.imul(T,X)|0,o=o+Math.imul(T,Y)|0,n=n+Math.imul(B,Z)|0,i=i+Math.imul(B,J)|0,i=i+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(k,Q)|0,i=i+Math.imul(k,tt)|0,i=i+Math.imul(x,Q)|0,o=o+Math.imul(x,tt)|0,n=n+Math.imul(S,rt)|0,i=i+Math.imul(S,nt)|0,i=i+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=i+Math.imul(w,at)|0,i=i+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(y,st)|0,i=i+Math.imul(y,ut)|0,i=i+Math.imul(m,st)|0,o=o+Math.imul(m,ut)|0,n=n+Math.imul(p,ct)|0,i=i+Math.imul(p,dt)|0,i=i+Math.imul(b,ct)|0,o=o+Math.imul(b,dt)|0,n=n+Math.imul(c,pt)|0,i=i+Math.imul(c,bt)|0,i=i+Math.imul(d,pt)|0,o=o+Math.imul(d,bt)|0;var At=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(U,G),i=Math.imul(U,V),i=i+Math.imul(z,G)|0,o=Math.imul(z,V),n=n+Math.imul(C,X)|0,i=i+Math.imul(C,Y)|0,i=i+Math.imul(N,X)|0,o=o+Math.imul(N,Y)|0,n=n+Math.imul(P,Z)|0,i=i+Math.imul(P,J)|0,i=i+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(B,Q)|0,i=i+Math.imul(B,tt)|0,i=i+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(k,rt)|0,i=i+Math.imul(k,nt)|0,i=i+Math.imul(x,rt)|0,o=o+Math.imul(x,nt)|0,n=n+Math.imul(S,ot)|0,i=i+Math.imul(S,at)|0,i=i+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,st)|0,i=i+Math.imul(w,ut)|0,i=i+Math.imul(_,st)|0,o=o+Math.imul(_,ut)|0,n=n+Math.imul(y,ct)|0,i=i+Math.imul(y,dt)|0,i=i+Math.imul(m,ct)|0,o=o+Math.imul(m,dt)|0,n=n+Math.imul(p,pt)|0,i=i+Math.imul(p,bt)|0,i=i+Math.imul(b,pt)|0,o=o+Math.imul(b,bt)|0;var kt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(U,X),i=Math.imul(U,Y),i=i+Math.imul(z,X)|0,o=Math.imul(z,Y),n=n+Math.imul(C,Z)|0,i=i+Math.imul(C,J)|0,i=i+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(P,Q)|0,i=i+Math.imul(P,tt)|0,i=i+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(B,rt)|0,i=i+Math.imul(B,nt)|0,i=i+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(k,ot)|0,i=i+Math.imul(k,at)|0,i=i+Math.imul(x,ot)|0,o=o+Math.imul(x,at)|0,n=n+Math.imul(S,st)|0,i=i+Math.imul(S,ut)|0,i=i+Math.imul(E,st)|0,o=o+Math.imul(E,ut)|0,n=n+Math.imul(w,ct)|0,i=i+Math.imul(w,dt)|0,i=i+Math.imul(_,ct)|0,o=o+Math.imul(_,dt)|0,n=n+Math.imul(y,pt)|0,i=i+Math.imul(y,bt)|0,i=i+Math.imul(m,pt)|0,o=o+Math.imul(m,bt)|0;var xt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(U,Z),i=Math.imul(U,J),i=i+Math.imul(z,Z)|0,o=Math.imul(z,J),n=n+Math.imul(C,Q)|0,i=i+Math.imul(C,tt)|0,i=i+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(P,rt)|0,i=i+Math.imul(P,nt)|0,i=i+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(B,ot)|0,i=i+Math.imul(B,at)|0,i=i+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(k,st)|0,i=i+Math.imul(k,ut)|0,i=i+Math.imul(x,st)|0,o=o+Math.imul(x,ut)|0,n=n+Math.imul(S,ct)|0,i=i+Math.imul(S,dt)|0,i=i+Math.imul(E,ct)|0,o=o+Math.imul(E,dt)|0,n=n+Math.imul(w,pt)|0,i=i+Math.imul(w,bt)|0,i=i+Math.imul(_,pt)|0,o=o+Math.imul(_,bt)|0;var It=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(U,Q),i=Math.imul(U,tt),i=i+Math.imul(z,Q)|0,o=Math.imul(z,tt),n=n+Math.imul(C,rt)|0,i=i+Math.imul(C,nt)|0,i=i+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(P,ot)|0,i=i+Math.imul(P,at)|0,i=i+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(B,st)|0,i=i+Math.imul(B,ut)|0,i=i+Math.imul(O,st)|0,o=o+Math.imul(O,ut)|0,n=n+Math.imul(k,ct)|0,i=i+Math.imul(k,dt)|0,i=i+Math.imul(x,ct)|0,o=o+Math.imul(x,dt)|0,n=n+Math.imul(S,pt)|0,i=i+Math.imul(S,bt)|0,i=i+Math.imul(E,pt)|0,o=o+Math.imul(E,bt)|0;var Bt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(U,rt),i=Math.imul(U,nt),i=i+Math.imul(z,rt)|0,o=Math.imul(z,nt),n=n+Math.imul(C,ot)|0,i=i+Math.imul(C,at)|0,i=i+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(P,st)|0,i=i+Math.imul(P,ut)|0,i=i+Math.imul(T,st)|0,o=o+Math.imul(T,ut)|0,n=n+Math.imul(B,ct)|0,i=i+Math.imul(B,dt)|0,i=i+Math.imul(O,ct)|0,o=o+Math.imul(O,dt)|0,n=n+Math.imul(k,pt)|0,i=i+Math.imul(k,bt)|0,i=i+Math.imul(x,pt)|0,o=o+Math.imul(x,bt)|0;var Ot=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,n=Math.imul(U,ot),i=Math.imul(U,at),i=i+Math.imul(z,ot)|0,o=Math.imul(z,at),n=n+Math.imul(C,st)|0,i=i+Math.imul(C,ut)|0,i=i+Math.imul(N,st)|0,o=o+Math.imul(N,ut)|0,n=n+Math.imul(P,ct)|0,i=i+Math.imul(P,dt)|0,i=i+Math.imul(T,ct)|0,o=o+Math.imul(T,dt)|0,n=n+Math.imul(B,pt)|0,i=i+Math.imul(B,bt)|0,i=i+Math.imul(O,pt)|0,o=o+Math.imul(O,bt)|0;var Rt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(U,st),i=Math.imul(U,ut),i=i+Math.imul(z,st)|0,o=Math.imul(z,ut),n=n+Math.imul(C,ct)|0,i=i+Math.imul(C,dt)|0,i=i+Math.imul(N,ct)|0,o=o+Math.imul(N,dt)|0,n=n+Math.imul(P,pt)|0,i=i+Math.imul(P,bt)|0,i=i+Math.imul(T,pt)|0,o=o+Math.imul(T,bt)|0;var Pt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,n=Math.imul(U,ct),i=Math.imul(U,dt),i=i+Math.imul(z,ct)|0,o=Math.imul(z,dt),n=n+Math.imul(C,pt)|0,i=i+Math.imul(C,bt)|0,i=i+Math.imul(N,pt)|0,o=o+Math.imul(N,bt)|0;var Tt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(U,pt),i=Math.imul(U,bt),i=i+Math.imul(z,pt)|0,o=Math.imul(z,bt);var jt=(u+n|0)+((8191&i)<<13)|0;return u=(o+(i>>>13)|0)+(jt>>>26)|0,jt&=67108863,s[0]=vt,s[1]=yt,s[2]=mt,s[3]=gt,s[4]=wt,s[5]=_t,s[6]=Mt,s[7]=St,s[8]=Et,s[9]=At,s[10]=kt,s[11]=xt,s[12]=It,s[13]=Bt,s[14]=Ot,s[15]=Rt,s[16]=Pt,s[17]=Tt,s[18]=jt,0!==u&&(s[19]=u,r.length++),r};Math.imul||(E=u),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length;return r=10===this.length&&10===t.length?E(this,t,e):n<63?u(this,t,e):n<1024?h(this,t,e):c(this,t,e)},d.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t);return e},d.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t;for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1;return n},d.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},d.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i);for(var a=1;a<i;a<<=1)for(var f=a<<1,s=Math.cos(2*Math.PI/f),u=Math.sin(2*Math.PI/f),h=0;h<i;h+=f)for(var c=s,d=u,l=0;l<a;l++){var p=r[h+l],b=n[h+l],v=r[h+l+a],y=n[h+l+a],m=c*v-d*y;y=c*y+d*v,v=m,r[h+l]=p+v,n[h+l]=b+y,r[h+l+a]=p-v,n[h+l+a]=b-y,l!==f&&(m=s*c-u*d,d=s*d+u*c,c=m)}},d.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},d.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n];t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},d.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r;t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},d.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)r[a]=0;n(0===o),n(0===(o&-8192))},d.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e},d.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),f=new Array(n),s=new Array(n),u=new Array(n),h=new Array(n),c=new Array(n),d=r.words;d.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,u,n),this.transform(a,o,f,s,n,i),this.transform(u,o,h,c,n,i);for(var l=0;l<n;l++){var p=f[l]*h[l]-s[l]*c[l];s[l]=f[l]*c[l]+s[l]*h[l],f[l]=p}return this.conjugate(f,s,n),this.transform(f,s,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),c(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"==typeof t),n(t<67108864);for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=s(t);if(0===e.length)return new o(1);for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0);var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(e=0;e<this.length;e++){var f=this.words[e]&o,s=(0|this.words[e])-f<<r;this.words[e]=s|a,a=f>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){n("number"==typeof t&&t>=0);var i;i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),f=67108863^67108863>>>o<<o,s=r;if(i-=a,i=Math.max(0,i),s){for(var u=0;u<a;u++)s.words[u]=this.words[u];s.length=a}if(0===a);else if(this.length>a)for(this.length-=a,u=0;u<this.length;u++)this.words[u]=this.words[u+a];else this.words[0]=0,this.length=1;var h=0;for(u=this.length-1;u>=0&&(0!==h||u>=i);u--){var c=0|this.words[u];this.words[u]=h<<26-o|c>>>o,h=c&f}return s&&0!==h&&(s.words[s.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return!1;var o=this.words[r];return!!(o&i)},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o=t.length+r;this._expand(o);var a,f=0;for(i=0;i<t.length;i++){a=(0|this.words[i+r])+f;var s=(0|t.words[i])*e;a-=67108863&s,f=(a>>26)-(s/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+f,f=a>>26,this.words[i+r]=67108863&a;if(0===f)return this.strip();for(n(f===-1),f=0,i=0;i<this.length;i++)a=-(0|this.words[i])+f,f=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=this.length-t.length,n=this.clone(),i=t,a=0|i.words[i.length-1],f=this._countBits(a);r=26-f,0!==r&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,u=n.length-i.length;if("mod"!==e){s=new o(null),s.length=u+1,s.words=new Array(s.length);for(var h=0;h<s.length;h++)s.words[h]=0}var c=n.clone()._ishlnsubmul(i,1,u);0===c.negative&&(n=c,s&&(s.words[u]=1));for(var d=u-1;d>=0;d--){var l=67108864*(0|n.words[i.length+d])+(0|n.words[i.length+d-1]);for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,d);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,d),n.isZero()||(n.negative^=1);s&&(s.words[d]=l)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){if(n(!t.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var i,a,f;return 0!==this.negative&&0===t.negative?(f=this.neg().divmod(t,e),"mod"!==e&&(i=f.div.neg()),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(f=this.divmod(t.neg(),e),"mod"!==e&&(i=f.div.neg()),{div:i,mod:f.mod}):0!==(this.negative&t.negative)?(f=this.neg().divmod(t.neg(),e),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:f.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863);for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t;return r},o.prototype.idivn=function(t){n(t<=67108863);for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e;this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=new o(0),s=new o(1),u=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++u;for(var h=r.clone(),c=e.clone();!e.isZero();){for(var d=0,l=1;0===(e.words[0]&l)&&d<26;++d,l<<=1);if(d>0)for(e.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(h),a.isub(c)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0===(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(f.isOdd()||s.isOdd())&&(f.iadd(h),s.isub(c)),f.iushrn(1),s.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(f),a.isub(s)):(r.isub(e),f.isub(i),s.isub(a))}return{a:f,b:s,gcd:r.iushln(u)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var s=0,u=1;0===(e.words[0]&u)&&s<26;++s,u<<=1);if(s>0)for(e.iushrn(s);s-- >0;)i.isOdd()&&i.iadd(f),i.iushrn(1);for(var h=0,c=1;0===(r.words[0]&c)&&h<26;++h,c<<=1);if(h>0)for(r.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(f),a.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(a)):(r.isub(e),a.isub(i))}var d;return d=0===e.cmpn(1)?i:a,d.cmpn(0)<0&&d.iadd(t),d},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),r=t.clone();e.negative=0,r.negative=0;for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=e.cmp(r);if(i<0){var o=e;e=r,r=o}else if(0===i||0===r.cmpn(1))break;e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var f=0|this.words[a];f+=o,o=f>>>26,f&=67108863,this.words[a]=f}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e=t<0;if(0!==this.negative&&!e)return-1;if(0===this.negative&&e)return 1;this.strip();var r;if(this.length>1)r=1;else{e&&(t=-t),n(t<=67108863,"Number is too big");var i=0|this.words[0];r=i===t?0:i<t?-1:1}return 0!==this.negative?0|-r:r},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r];if(n!==i){n<i?e=-1:n>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return this.cmpn(t)===-1},o.prototype.lt=function(t){return this.cmp(t)===-1},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new m(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var A={k256:null,p224:null,p192:null,p25519:null};l.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},l.prototype.ireduce=function(t){var e,r=t;do this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),e=r.bitLength();while(e>this.n);var n=e<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},l.prototype.split=function(t,e){t.iushrn(this.n,0,e)},l.prototype.imulK=function(t){return t.imul(this.k)},i(p,l),p.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i];if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},p.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r];e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(b,l),i(v,l),i(y,l),y.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n;n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function t(e){if(A[e])return A[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new v;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new y}return A[e]=t,t},m.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},m.prototype._verify2=function(t,e){n(0===(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},m.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},m.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},m.prototype.add=function(t,e){this._verify2(t,e);var r=t.add(e);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},m.prototype.iadd=function(t,e){this._verify2(t,e);var r=t.iadd(e);
return r.cmp(this.m)>=0&&r.isub(this.m),r},m.prototype.sub=function(t,e){this._verify2(t,e);var r=t.sub(e);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},m.prototype.isub=function(t,e){this._verify2(t,e);var r=t.isub(e);return r.cmpn(0)<0&&r.iadd(this.m),r},m.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},m.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},m.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},m.prototype.isqr=function(t){return this.imul(t,t.clone())},m.prototype.sqr=function(t){return this.mul(t,t)},m.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(n(e%2===1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var f=new o(1).toRed(this),s=f.redNeg(),u=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new o(2*h*h).toRed(this);0!==this.pow(h,u).cmp(s);)h.redIAdd(s);for(var c=this.pow(h,i),d=this.pow(t,i.addn(1).iushrn(1)),l=this.pow(t,i),p=a;0!==l.cmp(f);){for(var b=l,v=0;0!==b.cmp(f);v++)b=b.redSqr();n(v<p);var y=this.pow(c,new o(1).iushln(p-v-1));d=d.redMul(y),c=y.redSqr(),l=l.redMul(c),p=v}return d},m.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},m.prototype.pow=function(t,e){if(e.isZero())return new o(1);if(0===e.cmpn(1))return t.clone();var r=4,n=new Array(1<<r);n[0]=new o(1).toRed(this),n[1]=t;for(var i=2;i<n.length;i++)n[i]=this.mul(n[i-1],t);var a=n[0],f=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),i=e.length-1;i>=0;i--){for(var h=e.words[i],c=u-1;c>=0;c--){var d=h>>c&1;a!==n[0]&&(a=this.sqr(a)),0!==d||0!==f?(f<<=1,f|=d,s++,(s===r||0===i&&0===c)&&(a=this.mul(a,n[f]),s=0,f=0)):s=0}u=26}return a},m.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},m.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new g(t)},i(g,m),g.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},g.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},g.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},g.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},g.prototype.invm=function(t){var e=this.imod(t._invmp(this.m).mul(this.r2));return e._forceRed(this)}}("undefined"==typeof t||t,this)}).call(e,r(92)(t))},function(t,e,r){"use strict";var n=e;n.version=r(465).version,n.utils=r(521),n.rand=r(522),n.hmacDRBG=r(519),n.curve=r(99),n.curves=r(512),n.ec=r(513),n.eddsa=r(516)},function(t,e,r){var n=r(66),i=r(37),o=r(17),a=r(29),f=r(12),s=r(174),u=Object.getOwnPropertyDescriptor;e.f=r(8)?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(t){}if(f(t,e))return i(!n.f.call(t,e),t[e])}},function(t,e,r){var n=r(12),i=r(11),o=r(133)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,r){"use strict";var n=e;n.version=r(467).version,n.utils=r(558),n.rand=r(559),n.hmacDRBG=r(556),n.curve=r(104),n.curves=r(549),n.ec=r(550),n.eddsa=r(553)},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(5);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function o(t){if(c===clearTimeout)return clearTimeout(t);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function a(){b&&l&&(b=!1,l.length?p=l.concat(p):v=-1,p.length&&f())}function f(){if(!b){var t=i(a);b=!0;for(var e=p.length;e;){for(l=p,p=[];++v<e;)l&&l[v].run();v=-1,e=p.length}l=null,b=!1,o(t)}}function s(t,e){this.fun=t,this.array=e}function u(){}var h,c,d=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(t){c=n}}();var l,p=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new s(t,e)),1!==p.length||b||i(f)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,r){var n=r(33),i=r(65),o=r(11),a=r(10),f=r(283);t.exports=function(t,e){var r=1==t,s=2==t,u=3==t,h=4==t,c=6==t,d=5==t||c,l=e||f;return function(e,f,p){for(var b,v,y=o(e),m=i(y),g=n(f,p,3),w=a(m.length),_=0,M=r?l(e,w):s?l(e,0):void 0;w>_;_++)if((d||_ in m)&&(b=m[_],v=g(b,_,y),t))if(r)M[_]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:M.push(b)}else if(h)return!1;return c?-1:u||h?h:M}}},function(t,e,r){var n=r(0),i=r(32),o=r(5);t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},function(t,e,r){var n=r(6);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){(function(t){!function(t,e){"use strict";function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){return o.isBN(t)?t:(this.negative=0,this.words=null,this.length=0,this.red=null,void(null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))))}function a(t,e,r){for(var n=0,i=Math.min(t.length,r),o=e;o<i;o++){var a=t.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function f(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var f=t.charCodeAt(a)-48;i*=n,i+=f>=49?f-49+10:f>=17?f-17+10:f}return i}function s(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26;e[r]=(t.words[n]&1<<i)>>>i}return e}function u(t,e,r){r.negative=e.negative^t.negative;var n=t.length+e.length|0;r.length=n,n=n-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,f=67108863&a,s=a/67108864|0;r.words[0]=f;for(var u=1;u<n;u++){for(var h=s>>>26,c=67108863&s,d=Math.min(u,e.length-1),l=Math.max(0,u-t.length+1);l<=d;l++){var p=u-l|0;i=0|t.words[p],o=0|e.words[l],a=i*o+c,h+=a/67108864|0,c=67108863&a}r.words[u]=0|c,s=0|h}return 0!==s?r.words[u]=0|s:r.length--,r.strip()}function h(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var f=67108863&n,s=Math.min(o,e.length-1),u=Math.max(0,o-t.length+1);u<=s;u++){var h=o-u,c=0|t.words[h],d=0|e.words[u],l=c*d,p=67108863&l;a=a+(l/67108864|0)|0,p=p+f|0,f=67108863&p,a=a+(p>>>26)|0,i+=a>>>26,a&=67108863}r.words[o]=f,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}function c(t,e,r){var n=new d;return n.mulp(t,e,r)}function d(t,e){this.x=t,this.y=e}function l(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){l.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){l.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){l.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function y(){l.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function m(t){if("string"==typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function g(t){m.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;var w;try{w=r(1).Buffer}catch(t){}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r);if("object"==typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36),t=t.toString().replace(/\s+/g,"");var i=0;"-"===t[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,f=0;if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=t.length-6,n=0;r>=e;r-=6)i=a(t,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,o+=24,o>=26&&(o-=26,n++);r+6!==e&&(i=a(t,e,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=e)n++;n--,i=i/e|0;for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,h=r;h<s;h+=n)u=f(t,h,h+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==a){var c=1;for(u=f(t,h,t.length,e),h=0;h<a;h++)c*=e;this.imuln(c),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var _=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],M=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],S=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(t,e){t=t||10,e=0|e||1;var r;if(16===t||"hex"===t){r="";for(var i=0,o=0,a=0;a<this.length;a++){var f=this.words[a],s=(16777215&(f<<i|o)).toString(16);o=f>>>24-i&16777215,r=0!==o||a!==this.length-1?_[6-s.length]+s+r:s+r,i+=2,i>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var u=M[t],h=S[t];r="";var c=this.clone();for(c.negative=0;!c.isZero();){var d=c.modn(h).toString(t);c=c.idivn(h),r=c.isZero()?d+r:_[u-d.length]+d+r}for(this.isZero()&&(r="0"+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n("undefined"!=typeof w),this.toArrayLike(w,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,f,s="le"===e,u=new t(o),h=this.clone();if(s){for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[f]=a;for(;f<o;f++)u[f]=0}else{for(f=0;f<o-i;f++)u[f]=0;for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[o-f-1]=a}return u},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0;return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,r=0;return 0===(8191&e)&&(r+=13,e>>>=13),0===(127&e)&&(r+=7,e>>>=7),0===(15&e)&&(r+=4,e>>>=4),0===(3&e)&&(r+=2,e>>>=2),0===(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e]);if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return n(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r;this.length>t.length?(e=this,r=t):(e=t,r=this);for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n];if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0);var r=t/26|0,i=t%26;return this._expand(r+1),e?this.words[r]=this.words[r]|1<<i:this.words[r]=this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();var r,n;this.length>t.length?(r=this,n=t):(r=t,n=this);for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var r=this.cmp(t);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=t):(n=t,i=this);for(var o=0,a=0;a<i.length;a++)e=(0|n.words[a])-(0|i.words[a])+o,o=e>>26,this.words[a]=67108863&e;for(;0!==o&&a<n.length;a++)e=(0|n.words[a])+o,o=e>>26,this.words[a]=67108863&e;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var E=function(t,e,r){var n,i,o,a=t.words,f=e.words,s=r.words,u=0,h=0|a[0],c=8191&h,d=h>>>13,l=0|a[1],p=8191&l,b=l>>>13,v=0|a[2],y=8191&v,m=v>>>13,g=0|a[3],w=8191&g,_=g>>>13,M=0|a[4],S=8191&M,E=M>>>13,A=0|a[5],k=8191&A,x=A>>>13,I=0|a[6],B=8191&I,O=I>>>13,R=0|a[7],P=8191&R,T=R>>>13,j=0|a[8],C=8191&j,N=j>>>13,L=0|a[9],U=8191&L,z=L>>>13,D=0|f[0],q=8191&D,F=D>>>13,K=0|f[1],G=8191&K,V=K>>>13,H=0|f[2],X=8191&H,Y=H>>>13,W=0|f[3],Z=8191&W,J=W>>>13,$=0|f[4],Q=8191&$,tt=$>>>13,et=0|f[5],rt=8191&et,nt=et>>>13,it=0|f[6],ot=8191&it,at=it>>>13,ft=0|f[7],st=8191&ft,ut=ft>>>13,ht=0|f[8],ct=8191&ht,dt=ht>>>13,lt=0|f[9],pt=8191&lt,bt=lt>>>13;r.negative=t.negative^e.negative,r.length=19,n=Math.imul(c,q),i=Math.imul(c,F),i=i+Math.imul(d,q)|0,o=Math.imul(d,F);var vt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(p,q),i=Math.imul(p,F),i=i+Math.imul(b,q)|0,o=Math.imul(b,F),n=n+Math.imul(c,G)|0,i=i+Math.imul(c,V)|0,i=i+Math.imul(d,G)|0,o=o+Math.imul(d,V)|0;var yt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(y,q),i=Math.imul(y,F),i=i+Math.imul(m,q)|0,o=Math.imul(m,F),n=n+Math.imul(p,G)|0,i=i+Math.imul(p,V)|0,i=i+Math.imul(b,G)|0,o=o+Math.imul(b,V)|0,n=n+Math.imul(c,X)|0,i=i+Math.imul(c,Y)|0,i=i+Math.imul(d,X)|0,o=o+Math.imul(d,Y)|0;var mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(w,q),i=Math.imul(w,F),i=i+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(y,G)|0,i=i+Math.imul(y,V)|0,i=i+Math.imul(m,G)|0,o=o+Math.imul(m,V)|0,n=n+Math.imul(p,X)|0,i=i+Math.imul(p,Y)|0,i=i+Math.imul(b,X)|0,o=o+Math.imul(b,Y)|0,n=n+Math.imul(c,Z)|0,i=i+Math.imul(c,J)|0,i=i+Math.imul(d,Z)|0,o=o+Math.imul(d,J)|0;var gt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(S,q),i=Math.imul(S,F),i=i+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,G)|0,i=i+Math.imul(w,V)|0,i=i+Math.imul(_,G)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(y,X)|0,i=i+Math.imul(y,Y)|0,i=i+Math.imul(m,X)|0,o=o+Math.imul(m,Y)|0,n=n+Math.imul(p,Z)|0,i=i+Math.imul(p,J)|0,i=i+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0,n=n+Math.imul(c,Q)|0,i=i+Math.imul(c,tt)|0,i=i+Math.imul(d,Q)|0,o=o+Math.imul(d,tt)|0;var wt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(k,q),i=Math.imul(k,F),i=i+Math.imul(x,q)|0,o=Math.imul(x,F),n=n+Math.imul(S,G)|0,i=i+Math.imul(S,V)|0,i=i+Math.imul(E,G)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,X)|0,i=i+Math.imul(w,Y)|0,i=i+Math.imul(_,X)|0,o=o+Math.imul(_,Y)|0,n=n+Math.imul(y,Z)|0,i=i+Math.imul(y,J)|0,i=i+Math.imul(m,Z)|0,o=o+Math.imul(m,J)|0,n=n+Math.imul(p,Q)|0,i=i+Math.imul(p,tt)|0,i=i+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0,n=n+Math.imul(c,rt)|0,i=i+Math.imul(c,nt)|0,i=i+Math.imul(d,rt)|0,o=o+Math.imul(d,nt)|0;var _t=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(B,q),i=Math.imul(B,F),i=i+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(k,G)|0,i=i+Math.imul(k,V)|0,i=i+Math.imul(x,G)|0,o=o+Math.imul(x,V)|0,n=n+Math.imul(S,X)|0,i=i+Math.imul(S,Y)|0,i=i+Math.imul(E,X)|0,o=o+Math.imul(E,Y)|0,n=n+Math.imul(w,Z)|0,i=i+Math.imul(w,J)|0,i=i+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(y,Q)|0,i=i+Math.imul(y,tt)|0,i=i+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0,n=n+Math.imul(p,rt)|0,i=i+Math.imul(p,nt)|0,i=i+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0,n=n+Math.imul(c,ot)|0,i=i+Math.imul(c,at)|0,i=i+Math.imul(d,ot)|0,o=o+Math.imul(d,at)|0;var Mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(P,q),i=Math.imul(P,F),i=i+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(B,G)|0,i=i+Math.imul(B,V)|0,i=i+Math.imul(O,G)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(k,X)|0,i=i+Math.imul(k,Y)|0,i=i+Math.imul(x,X)|0,o=o+Math.imul(x,Y)|0,n=n+Math.imul(S,Z)|0,i=i+Math.imul(S,J)|0,i=i+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=i+Math.imul(w,tt)|0,i=i+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(y,rt)|0,i=i+Math.imul(y,nt)|0,i=i+Math.imul(m,rt)|0,o=o+Math.imul(m,nt)|0,n=n+Math.imul(p,ot)|0,i=i+Math.imul(p,at)|0,i=i+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0,n=n+Math.imul(c,st)|0,i=i+Math.imul(c,ut)|0,i=i+Math.imul(d,st)|0,o=o+Math.imul(d,ut)|0;var St=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(C,q),i=Math.imul(C,F),i=i+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(P,G)|0,i=i+Math.imul(P,V)|0,i=i+Math.imul(T,G)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(B,X)|0,i=i+Math.imul(B,Y)|0,i=i+Math.imul(O,X)|0,o=o+Math.imul(O,Y)|0,n=n+Math.imul(k,Z)|0,i=i+Math.imul(k,J)|0,i=i+Math.imul(x,Z)|0,o=o+Math.imul(x,J)|0,n=n+Math.imul(S,Q)|0,i=i+Math.imul(S,tt)|0,i=i+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=i+Math.imul(w,nt)|0,i=i+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(y,ot)|0,i=i+Math.imul(y,at)|0,i=i+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0,n=n+Math.imul(p,st)|0,i=i+Math.imul(p,ut)|0,i=i+Math.imul(b,st)|0,o=o+Math.imul(b,ut)|0,n=n+Math.imul(c,ct)|0,i=i+Math.imul(c,dt)|0,i=i+Math.imul(d,ct)|0,o=o+Math.imul(d,dt)|0;var Et=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(U,q),i=Math.imul(U,F),i=i+Math.imul(z,q)|0,o=Math.imul(z,F),n=n+Math.imul(C,G)|0,i=i+Math.imul(C,V)|0,i=i+Math.imul(N,G)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(P,X)|0,i=i+Math.imul(P,Y)|0,i=i+Math.imul(T,X)|0,o=o+Math.imul(T,Y)|0,n=n+Math.imul(B,Z)|0,i=i+Math.imul(B,J)|0,i=i+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(k,Q)|0,i=i+Math.imul(k,tt)|0,i=i+Math.imul(x,Q)|0,o=o+Math.imul(x,tt)|0,n=n+Math.imul(S,rt)|0,i=i+Math.imul(S,nt)|0,i=i+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=i+Math.imul(w,at)|0,i=i+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(y,st)|0,i=i+Math.imul(y,ut)|0,i=i+Math.imul(m,st)|0,o=o+Math.imul(m,ut)|0,n=n+Math.imul(p,ct)|0,i=i+Math.imul(p,dt)|0,i=i+Math.imul(b,ct)|0,o=o+Math.imul(b,dt)|0,n=n+Math.imul(c,pt)|0,i=i+Math.imul(c,bt)|0,i=i+Math.imul(d,pt)|0,o=o+Math.imul(d,bt)|0;var At=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(U,G),i=Math.imul(U,V),i=i+Math.imul(z,G)|0,o=Math.imul(z,V),n=n+Math.imul(C,X)|0,i=i+Math.imul(C,Y)|0,i=i+Math.imul(N,X)|0,o=o+Math.imul(N,Y)|0,n=n+Math.imul(P,Z)|0,i=i+Math.imul(P,J)|0,i=i+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(B,Q)|0,i=i+Math.imul(B,tt)|0,i=i+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(k,rt)|0,i=i+Math.imul(k,nt)|0,i=i+Math.imul(x,rt)|0,o=o+Math.imul(x,nt)|0,n=n+Math.imul(S,ot)|0,i=i+Math.imul(S,at)|0,i=i+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,st)|0,i=i+Math.imul(w,ut)|0,i=i+Math.imul(_,st)|0,o=o+Math.imul(_,ut)|0,n=n+Math.imul(y,ct)|0,i=i+Math.imul(y,dt)|0,i=i+Math.imul(m,ct)|0,o=o+Math.imul(m,dt)|0,n=n+Math.imul(p,pt)|0,i=i+Math.imul(p,bt)|0,i=i+Math.imul(b,pt)|0,o=o+Math.imul(b,bt)|0;var kt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(U,X),i=Math.imul(U,Y),i=i+Math.imul(z,X)|0,o=Math.imul(z,Y),n=n+Math.imul(C,Z)|0,i=i+Math.imul(C,J)|0,i=i+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(P,Q)|0,i=i+Math.imul(P,tt)|0,i=i+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(B,rt)|0,i=i+Math.imul(B,nt)|0,i=i+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(k,ot)|0,i=i+Math.imul(k,at)|0,i=i+Math.imul(x,ot)|0,o=o+Math.imul(x,at)|0,n=n+Math.imul(S,st)|0,i=i+Math.imul(S,ut)|0,i=i+Math.imul(E,st)|0,o=o+Math.imul(E,ut)|0,n=n+Math.imul(w,ct)|0,i=i+Math.imul(w,dt)|0,i=i+Math.imul(_,ct)|0,o=o+Math.imul(_,dt)|0,n=n+Math.imul(y,pt)|0,i=i+Math.imul(y,bt)|0,i=i+Math.imul(m,pt)|0,o=o+Math.imul(m,bt)|0;var xt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(U,Z),i=Math.imul(U,J),i=i+Math.imul(z,Z)|0,o=Math.imul(z,J),n=n+Math.imul(C,Q)|0,i=i+Math.imul(C,tt)|0,i=i+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(P,rt)|0,i=i+Math.imul(P,nt)|0,i=i+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(B,ot)|0,i=i+Math.imul(B,at)|0,i=i+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(k,st)|0,i=i+Math.imul(k,ut)|0,i=i+Math.imul(x,st)|0,o=o+Math.imul(x,ut)|0,n=n+Math.imul(S,ct)|0,i=i+Math.imul(S,dt)|0,i=i+Math.imul(E,ct)|0,o=o+Math.imul(E,dt)|0,n=n+Math.imul(w,pt)|0,i=i+Math.imul(w,bt)|0,i=i+Math.imul(_,pt)|0,o=o+Math.imul(_,bt)|0;var It=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(U,Q),i=Math.imul(U,tt),i=i+Math.imul(z,Q)|0,o=Math.imul(z,tt),n=n+Math.imul(C,rt)|0,i=i+Math.imul(C,nt)|0,i=i+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(P,ot)|0,i=i+Math.imul(P,at)|0,i=i+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(B,st)|0,i=i+Math.imul(B,ut)|0,i=i+Math.imul(O,st)|0,o=o+Math.imul(O,ut)|0,n=n+Math.imul(k,ct)|0,i=i+Math.imul(k,dt)|0,i=i+Math.imul(x,ct)|0,o=o+Math.imul(x,dt)|0,n=n+Math.imul(S,pt)|0,i=i+Math.imul(S,bt)|0,i=i+Math.imul(E,pt)|0,o=o+Math.imul(E,bt)|0;var Bt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(U,rt),i=Math.imul(U,nt),i=i+Math.imul(z,rt)|0,o=Math.imul(z,nt),n=n+Math.imul(C,ot)|0,i=i+Math.imul(C,at)|0,i=i+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(P,st)|0,i=i+Math.imul(P,ut)|0,i=i+Math.imul(T,st)|0,o=o+Math.imul(T,ut)|0,n=n+Math.imul(B,ct)|0,i=i+Math.imul(B,dt)|0,i=i+Math.imul(O,ct)|0,o=o+Math.imul(O,dt)|0,n=n+Math.imul(k,pt)|0,i=i+Math.imul(k,bt)|0,i=i+Math.imul(x,pt)|0,o=o+Math.imul(x,bt)|0;var Ot=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,n=Math.imul(U,ot),i=Math.imul(U,at),i=i+Math.imul(z,ot)|0,o=Math.imul(z,at),n=n+Math.imul(C,st)|0,i=i+Math.imul(C,ut)|0,i=i+Math.imul(N,st)|0,o=o+Math.imul(N,ut)|0,n=n+Math.imul(P,ct)|0,i=i+Math.imul(P,dt)|0,i=i+Math.imul(T,ct)|0,o=o+Math.imul(T,dt)|0,n=n+Math.imul(B,pt)|0,i=i+Math.imul(B,bt)|0,i=i+Math.imul(O,pt)|0,o=o+Math.imul(O,bt)|0;var Rt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(U,st),i=Math.imul(U,ut),i=i+Math.imul(z,st)|0,o=Math.imul(z,ut),n=n+Math.imul(C,ct)|0,i=i+Math.imul(C,dt)|0,i=i+Math.imul(N,ct)|0,o=o+Math.imul(N,dt)|0,n=n+Math.imul(P,pt)|0,i=i+Math.imul(P,bt)|0,i=i+Math.imul(T,pt)|0,o=o+Math.imul(T,bt)|0;var Pt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,n=Math.imul(U,ct),i=Math.imul(U,dt),i=i+Math.imul(z,ct)|0,o=Math.imul(z,dt),n=n+Math.imul(C,pt)|0,i=i+Math.imul(C,bt)|0,i=i+Math.imul(N,pt)|0,o=o+Math.imul(N,bt)|0;var Tt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(U,pt),i=Math.imul(U,bt),i=i+Math.imul(z,pt)|0,o=Math.imul(z,bt);var jt=(u+n|0)+((8191&i)<<13)|0;return u=(o+(i>>>13)|0)+(jt>>>26)|0,jt&=67108863,s[0]=vt,s[1]=yt,s[2]=mt,s[3]=gt,s[4]=wt,s[5]=_t,s[6]=Mt,s[7]=St,s[8]=Et,s[9]=At,s[10]=kt,s[11]=xt,s[12]=It,s[13]=Bt,s[14]=Ot,s[15]=Rt,s[16]=Pt,s[17]=Tt,s[18]=jt,0!==u&&(s[19]=u,r.length++),r};Math.imul||(E=u),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length;return r=10===this.length&&10===t.length?E(this,t,e):n<63?u(this,t,e):n<1024?h(this,t,e):c(this,t,e)},d.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t);return e},d.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t;for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1;return n},d.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},d.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i);for(var a=1;a<i;a<<=1)for(var f=a<<1,s=Math.cos(2*Math.PI/f),u=Math.sin(2*Math.PI/f),h=0;h<i;h+=f)for(var c=s,d=u,l=0;l<a;l++){var p=r[h+l],b=n[h+l],v=r[h+l+a],y=n[h+l+a],m=c*v-d*y;y=c*y+d*v,v=m,r[h+l]=p+v,n[h+l]=b+y,r[h+l+a]=p-v,n[h+l+a]=b-y,l!==f&&(m=s*c-u*d,d=s*d+u*c,c=m)}},d.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},d.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n];t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},d.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r;t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},d.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)r[a]=0;n(0===o),n(0===(o&-8192))},d.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e},d.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),f=new Array(n),s=new Array(n),u=new Array(n),h=new Array(n),c=new Array(n),d=r.words;d.length=n,this.convert13b(t.words,t.length,a,n),
this.convert13b(e.words,e.length,u,n),this.transform(a,o,f,s,n,i),this.transform(u,o,h,c,n,i);for(var l=0;l<n;l++){var p=f[l]*h[l]-s[l]*c[l];s[l]=f[l]*c[l]+s[l]*h[l],f[l]=p}return this.conjugate(f,s,n),this.transform(f,s,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),c(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"==typeof t),n(t<67108864);for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=s(t);if(0===e.length)return new o(1);for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0);var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(e=0;e<this.length;e++){var f=this.words[e]&o,s=(0|this.words[e])-f<<r;this.words[e]=s|a,a=f>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){n("number"==typeof t&&t>=0);var i;i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),f=67108863^67108863>>>o<<o,s=r;if(i-=a,i=Math.max(0,i),s){for(var u=0;u<a;u++)s.words[u]=this.words[u];s.length=a}if(0===a);else if(this.length>a)for(this.length-=a,u=0;u<this.length;u++)this.words[u]=this.words[u+a];else this.words[0]=0,this.length=1;var h=0;for(u=this.length-1;u>=0&&(0!==h||u>=i);u--){var c=0|this.words[u];this.words[u]=h<<26-o|c>>>o,h=c&f}return s&&0!==h&&(s.words[s.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return!1;var o=this.words[r];return!!(o&i)},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o=t.length+r;this._expand(o);var a,f=0;for(i=0;i<t.length;i++){a=(0|this.words[i+r])+f;var s=(0|t.words[i])*e;a-=67108863&s,f=(a>>26)-(s/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+f,f=a>>26,this.words[i+r]=67108863&a;if(0===f)return this.strip();for(n(f===-1),f=0,i=0;i<this.length;i++)a=-(0|this.words[i])+f,f=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=this.length-t.length,n=this.clone(),i=t,a=0|i.words[i.length-1],f=this._countBits(a);r=26-f,0!==r&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,u=n.length-i.length;if("mod"!==e){s=new o(null),s.length=u+1,s.words=new Array(s.length);for(var h=0;h<s.length;h++)s.words[h]=0}var c=n.clone()._ishlnsubmul(i,1,u);0===c.negative&&(n=c,s&&(s.words[u]=1));for(var d=u-1;d>=0;d--){var l=67108864*(0|n.words[i.length+d])+(0|n.words[i.length+d-1]);for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,d);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,d),n.isZero()||(n.negative^=1);s&&(s.words[d]=l)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){if(n(!t.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var i,a,f;return 0!==this.negative&&0===t.negative?(f=this.neg().divmod(t,e),"mod"!==e&&(i=f.div.neg()),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(f=this.divmod(t.neg(),e),"mod"!==e&&(i=f.div.neg()),{div:i,mod:f.mod}):0!==(this.negative&t.negative)?(f=this.neg().divmod(t.neg(),e),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:f.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863);for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t;return r},o.prototype.idivn=function(t){n(t<=67108863);for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e;this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=new o(0),s=new o(1),u=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++u;for(var h=r.clone(),c=e.clone();!e.isZero();){for(var d=0,l=1;0===(e.words[0]&l)&&d<26;++d,l<<=1);if(d>0)for(e.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(h),a.isub(c)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0===(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(f.isOdd()||s.isOdd())&&(f.iadd(h),s.isub(c)),f.iushrn(1),s.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(f),a.isub(s)):(r.isub(e),f.isub(i),s.isub(a))}return{a:f,b:s,gcd:r.iushln(u)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var s=0,u=1;0===(e.words[0]&u)&&s<26;++s,u<<=1);if(s>0)for(e.iushrn(s);s-- >0;)i.isOdd()&&i.iadd(f),i.iushrn(1);for(var h=0,c=1;0===(r.words[0]&c)&&h<26;++h,c<<=1);if(h>0)for(r.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(f),a.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(a)):(r.isub(e),a.isub(i))}var d;return d=0===e.cmpn(1)?i:a,d.cmpn(0)<0&&d.iadd(t),d},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),r=t.clone();e.negative=0,r.negative=0;for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=e.cmp(r);if(i<0){var o=e;e=r,r=o}else if(0===i||0===r.cmpn(1))break;e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var f=0|this.words[a];f+=o,o=f>>>26,f&=67108863,this.words[a]=f}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e=t<0;if(0!==this.negative&&!e)return-1;if(0===this.negative&&e)return 1;this.strip();var r;if(this.length>1)r=1;else{e&&(t=-t),n(t<=67108863,"Number is too big");var i=0|this.words[0];r=i===t?0:i<t?-1:1}return 0!==this.negative?0|-r:r},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r];if(n!==i){n<i?e=-1:n>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return this.cmpn(t)===-1},o.prototype.lt=function(t){return this.cmp(t)===-1},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new m(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var A={k256:null,p224:null,p192:null,p25519:null};l.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},l.prototype.ireduce=function(t){var e,r=t;do this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),e=r.bitLength();while(e>this.n);var n=e<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},l.prototype.split=function(t,e){t.iushrn(this.n,0,e)},l.prototype.imulK=function(t){return t.imul(this.k)},i(p,l),p.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i];if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},p.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r];e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(b,l),i(v,l),i(y,l),y.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n;n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function t(e){if(A[e])return A[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new v;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new y}return A[e]=t,t},m.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},m.prototype._verify2=function(t,e){n(0===(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},m.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},m.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},m.prototype.add=function(t,e){this._verify2(t,e);var r=t.add(e);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},m.prototype.iadd=function(t,e){this._verify2(t,e);var r=t.iadd(e);return r.cmp(this.m)>=0&&r.isub(this.m),r},m.prototype.sub=function(t,e){this._verify2(t,e);var r=t.sub(e);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},m.prototype.isub=function(t,e){this._verify2(t,e);var r=t.isub(e);return r.cmpn(0)<0&&r.iadd(this.m),r},m.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},m.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},m.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},m.prototype.isqr=function(t){return this.imul(t,t.clone())},m.prototype.sqr=function(t){return this.mul(t,t)},m.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(n(e%2===1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var f=new o(1).toRed(this),s=f.redNeg(),u=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new o(2*h*h).toRed(this);0!==this.pow(h,u).cmp(s);)h.redIAdd(s);for(var c=this.pow(h,i),d=this.pow(t,i.addn(1).iushrn(1)),l=this.pow(t,i),p=a;0!==l.cmp(f);){for(var b=l,v=0;0!==b.cmp(f);v++)b=b.redSqr();n(v<p);var y=this.pow(c,new o(1).iushln(p-v-1));d=d.redMul(y),c=y.redSqr(),l=l.redMul(c),p=v}return d},m.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},m.prototype.pow=function(t,e){if(e.isZero())return new o(1);if(0===e.cmpn(1))return t.clone();var r=4,n=new Array(1<<r);n[0]=new o(1).toRed(this),n[1]=t;for(var i=2;i<n.length;i++)n[i]=this.mul(n[i-1],t);var a=n[0],f=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),i=e.length-1;i>=0;i--){for(var h=e.words[i],c=u-1;c>=0;c--){var d=h>>c&1;a!==n[0]&&(a=this.sqr(a)),0!==d||0!==f?(f<<=1,f|=d,s++,(s===r||0===i&&0===c)&&(a=this.mul(a,n[f]),s=0,f=0)):s=0}u=26}return a},m.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},m.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new g(t)},i(g,m),g.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},g.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},g.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},g.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},g.prototype.invm=function(t){var e=this.imod(t._invmp(this.m).mul(this.r2));return e._forceRed(this)}}("undefined"==typeof t||t,this)}).call(e,r(92)(t))},function(t,e,r){function n(){i.call(this)}t.exports=n;var i=r(110).EventEmitter,o=r(603);o(n,i),n.Readable=r(600),n.Writable=r(602),n.Duplex=r(595),n.Transform=r(601),n.PassThrough=r(599),n.Stream=n,n.prototype.pipe=function(t,e){function r(e){t.writable&&!1===t.write(e)&&u.pause&&u.pause()}function n(){u.readable&&u.resume&&u.resume()}function o(){h||(h=!0,t.end())}function a(){h||(h=!0,"function"==typeof t.destroy&&t.destroy())}function f(t){if(s(),0===i.listenerCount(this,"error"))throw t}function s(){u.removeListener("data",r),t.removeListener("drain",n),u.removeListener("end",o),u.removeListener("close",a),u.removeListener("error",f),t.removeListener("error",f),u.removeListener("end",s),u.removeListener("close",s),t.removeListener("close",s)}var u=this;u.on("data",r),t.on("drain",n),t._isStdio||e&&e.end===!1||(u.on("end",o),u.on("close",a));var h=!1;return u.on("error",f),t.on("error",f),u.on("end",s),u.on("close",s),t.on("close",s),t.emit("pipe",u),t}},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(13);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(190),i=r(0),o=r(87)("metadata"),a=o.store||(o.store=new(r(193))),f=function(t,e,r){var i=a.get(t);if(!i){if(!r)return;a.set(t,i=new n)}var o=i.get(e);if(!o){if(!r)return;i.set(e,o=new n)}return o},s=function(t,e,r){var n=f(e,r,!1);return void 0!==n&&n.has(t)},u=function(t,e,r){var n=f(e,r,!1);return void 0===n?void 0:n.get(t)},h=function(t,e,r,n){f(r,n,!0).set(t,e)},c=function(t,e){var r=f(t,e,!1),n=[];return r&&r.forEach(function(t,e){n.push(e)}),n},d=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},l=function(t){i(i.S,"Reflect",t)};t.exports={store:a,map:f,has:s,get:u,set:h,keys:c,key:d,exp:l}},function(t,e,r){"use strict";if(r(8)){var n=r(41),i=r(4),o=r(5),a=r(0),f=r(88),s=r(140),u=r(33),h=r(40),c=r(37),d=r(14),l=r(45),p=r(38),b=r(10),v=r(47),y=r(29),m=r(12),g=r(187),w=r(64),_=r(6),M=r(11),S=r(125),E=r(42),A=r(21),k=r(43).f,x=r(142),I=r(48),B=r(7),O=r(27),R=r(78),P=r(134),T=r(143),j=r(56),C=r(84),N=r(46),L=r(118),U=r(167),z=r(9),D=r(20),q=z.f,F=D.f,K=i.RangeError,G=i.TypeError,V=i.Uint8Array,H="ArrayBuffer",X="Shared"+H,Y="BYTES_PER_ELEMENT",W="prototype",Z=Array[W],J=s.ArrayBuffer,$=s.DataView,Q=O(0),tt=O(2),et=O(3),rt=O(4),nt=O(5),it=O(6),ot=R(!0),at=R(!1),ft=T.values,st=T.keys,ut=T.entries,ht=Z.lastIndexOf,ct=Z.reduce,dt=Z.reduceRight,lt=Z.join,pt=Z.sort,bt=Z.slice,vt=Z.toString,yt=Z.toLocaleString,mt=B("iterator"),gt=B("toStringTag"),wt=I("typed_constructor"),_t=I("def_constructor"),Mt=f.CONSTR,St=f.TYPED,Et=f.VIEW,At="Wrong length!",kt=O(1,function(t,e){return Pt(P(t,t[_t]),e)}),xt=o(function(){return 1===new V(new Uint16Array([1]).buffer)[0]}),It=!!V&&!!V[W].set&&o(function(){new V(1).set({})}),Bt=function(t,e){if(void 0===t)throw G(At);var r=+t,n=b(t);if(e&&!g(r,n))throw K(At);return n},Ot=function(t,e){var r=p(t);if(r<0||r%e)throw K("Wrong offset!");return r},Rt=function(t){if(_(t)&&St in t)return t;throw G(t+" is not a typed array!")},Pt=function(t,e){if(!(_(t)&&wt in t))throw G("It is not a typed array constructor!");return new t(e)},Tt=function(t,e){return jt(P(t,t[_t]),e)},jt=function(t,e){for(var r=0,n=e.length,i=Pt(t,n);n>r;)i[r]=e[r++];return i},Ct=function(t,e,r){q(t,e,{get:function(){return this._d[r]}})},Nt=function(t){var e,r,n,i,o,a,f=M(t),s=arguments.length,h=s>1?arguments[1]:void 0,c=void 0!==h,d=x(f);if(void 0!=d&&!S(d)){for(a=d.call(f),n=[],e=0;!(o=a.next()).done;e++)n.push(o.value);f=n}for(c&&s>2&&(h=u(h,arguments[2],2)),e=0,r=b(f.length),i=Pt(this,r);r>e;e++)i[e]=c?h(f[e],e):f[e];return i},Lt=function(){for(var t=0,e=arguments.length,r=Pt(this,e);e>t;)r[t]=arguments[t++];return r},Ut=!!V&&o(function(){yt.call(new V(1))}),zt=function(){return yt.apply(Ut?bt.call(Rt(this)):Rt(this),arguments)},Dt={copyWithin:function(t,e){return U.call(Rt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return rt(Rt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return L.apply(Rt(this),arguments)},filter:function(t){return Tt(this,tt(Rt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return nt(Rt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(Rt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Q(Rt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return at(Rt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(Rt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return lt.apply(Rt(this),arguments)},lastIndexOf:function(t){return ht.apply(Rt(this),arguments)},map:function(t){return kt(Rt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Rt(this),arguments)},reduceRight:function(t){return dt.apply(Rt(this),arguments)},reverse:function(){for(var t,e=this,r=Rt(e).length,n=Math.floor(r/2),i=0;i<n;)t=e[i],e[i++]=e[--r],e[r]=t;return e},some:function(t){return et(Rt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(Rt(this),t)},subarray:function(t,e){var r=Rt(this),n=r.length,i=v(t,n);return new(P(r,r[_t]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,b((void 0===e?n:v(e,n))-i))}},qt=function(t,e){return Tt(this,bt.call(Rt(this),t,e))},Ft=function(t){Rt(this);var e=Ot(arguments[1],1),r=this.length,n=M(t),i=b(n.length),o=0;if(i+e>r)throw K(At);for(;o<i;)this[e+o]=n[o++]},Kt={entries:function(){return ut.call(Rt(this))},keys:function(){return st.call(Rt(this))},values:function(){return ft.call(Rt(this))}},Gt=function(t,e){return _(t)&&t[St]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Vt=function(t,e){return Gt(t,e=y(e,!0))?c(2,t[e]):F(t,e)},Ht=function(t,e,r){return!(Gt(t,e=y(e,!0))&&_(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?q(t,e,r):(t[e]=r.value,t)};Mt||(D.f=Vt,z.f=Ht),a(a.S+a.F*!Mt,"Object",{getOwnPropertyDescriptor:Vt,defineProperty:Ht}),o(function(){vt.call({})})&&(vt=yt=function(){return lt.call(this)});var Xt=l({},Dt);l(Xt,Kt),d(Xt,mt,Kt.values),l(Xt,{slice:qt,set:Ft,constructor:function(){},toString:vt,toLocaleString:zt}),Ct(Xt,"buffer","b"),Ct(Xt,"byteOffset","o"),Ct(Xt,"byteLength","l"),Ct(Xt,"length","e"),q(Xt,gt,{get:function(){return this[St]}}),t.exports=function(t,e,r,s){s=!!s;var u=t+(s?"Clamped":"")+"Array",c="Uint8Array"!=u,l="get"+t,p="set"+t,v=i[u],y=v||{},m=v&&A(v),g=!v||!f.ABV,M={},S=v&&v[W],x=function(t,r){var n=t._d;return n.v[l](r*e+n.o,xt)},I=function(t,r,n){var i=t._d;s&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),i.v[p](r*e+i.o,n,xt)},B=function(t,e){q(t,e,{get:function(){return x(this,e)},set:function(t){return I(this,e,t)},enumerable:!0})};g?(v=r(function(t,r,n,i){h(t,v,u,"_d");var o,a,f,s,c=0,l=0;if(_(r)){if(!(r instanceof J||(s=w(r))==H||s==X))return St in r?jt(v,r):Nt.call(v,r);o=r,l=Ot(n,e);var p=r.byteLength;if(void 0===i){if(p%e)throw K(At);if(a=p-l,a<0)throw K(At)}else if(a=b(i)*e,a+l>p)throw K(At);f=a/e}else f=Bt(r,!0),a=f*e,o=new J(a);for(d(t,"_d",{b:o,o:l,l:a,e:f,v:new $(o)});c<f;)B(t,c++)}),S=v[W]=E(Xt),d(S,"constructor",v)):C(function(t){new v(null),new v(t)},!0)||(v=r(function(t,r,n,i){h(t,v,u);var o;return _(r)?r instanceof J||(o=w(r))==H||o==X?void 0!==i?new y(r,Ot(n,e),i):void 0!==n?new y(r,Ot(n,e)):new y(r):St in r?jt(v,r):Nt.call(v,r):new y(Bt(r,c))}),Q(m!==Function.prototype?k(y).concat(k(m)):k(y),function(t){t in v||d(v,t,y[t])}),v[W]=S,n||(S.constructor=v));var O=S[mt],R=!!O&&("values"==O.name||void 0==O.name),P=Kt.values;d(v,wt,!0),d(S,St,u),d(S,Et,!0),d(S,_t,v),(s?new v(1)[gt]==u:gt in S)||q(S,gt,{get:function(){return u}}),M[u]=v,a(a.G+a.W+a.F*(v!=y),M),a(a.S,u,{BYTES_PER_ELEMENT:e,from:Nt,of:Lt}),Y in S||d(S,Y,e),a(a.P,u,Dt),N(u),a(a.P+a.F*It,u,{set:Ft}),a(a.P+a.F*!R,u,Kt),a(a.P+a.F*(S.toString!=vt),u,{toString:vt}),a(a.P+a.F*o(function(){new v(1).slice()}),u,{slice:qt}),a(a.P+a.F*(o(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!o(function(){S.toLocaleString.call([1,2])})),u,{toLocaleString:zt}),j[u]=R?O:P,n||R||d(S,mt,P)}}else t.exports=function(){}},function(t,e,r){var n=r(48)("meta"),i=r(6),o=r(12),a=r(9).f,f=0,s=Object.isExtensible||function(){return!0},u=!r(5)(function(){return s(Object.preventExtensions({}))}),h=function(t){a(t,n,{value:{i:"O"+ ++f,w:{}}})},c=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!s(t))return"F";if(!e)return"E";h(t)}return t[n].i},d=function(t,e){if(!o(t,n)){if(!s(t))return!0;if(!e)return!1;h(t)}return t[n].w},l=function(t){return u&&p.NEED&&s(t)&&!o(t,n)&&h(t),t},p=t.exports={KEY:n,NEED:!1,fastKey:c,getWeak:d,onFreeze:l}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e){t.exports=!1},function(t,e,r){var n=r(3),i=r(180),o=r(121),a=r(133)("IE_PROTO"),f=function(){},s="prototype",u=function(){var t,e=r(120)("iframe"),n=o.length,i="<",a=">";for(e.style.display="none",r(123).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),u=t.F;n--;)delete u[s][o[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(f[s]=n(t),r=new f,f[s]=null,r[a]=t):r=u(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(182),i=r(121).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},function(t,e,r){var n=r(182),i=r(121);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){var n=r(15);t.exports=function(t,e,r){for(var i in e)n(t,i,e[i],r);return t}},function(t,e,r){"use strict";var n=r(4),i=r(9),o=r(8),a=r(7)("species");t.exports=function(t){var e=n[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(38),i=Math.max,o=Math.min;t.exports=function(t,e){return t=n(t),t<0?i(t+e,0):o(t,e)}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=e;n.utils=r(527),n.common=r(523),n.sha=r(526),n.ripemd=r(525),n.hmac=r(524),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},function(t,e,r){var n=e;n.utils=r(564),n.common=r(560),n.sha=r(563),n.ripemd=r(562),n.hmac=r(561),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},function(t,e,r){"use strict";function n(t){return this instanceof n?(u.call(this,t),h.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new n(t)}function i(){this.allowHalfOpen||this._writableState.ended||f(o,this)}function o(t){t.end()}var a=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};t.exports=n;var f=r(157),s=r(73);s.inherits=r(74);var u=r(250),h=r(155);s.inherits(n,u);for(var c=a(h.prototype),d=0;d<c.length;d++){var l=c[d];n.prototype[l]||(n.prototype[l]=h.prototype[l])}},function(t,e,r){function n(t){if(t&&!s(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function a(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}var f=r(1).Buffer,s=f.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},u=e.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),n(t),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new f(6),this.charReceived=0,this.charLength=0};u.prototype.write=function(t){for(var e="";this.charLength;){var r=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length;if(t.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";t=t.slice(r,t.length),e=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var n=e.charCodeAt(e.length-1);if(!(n>=55296&&n<=56319)){if(this.charReceived=this.charLength=0,0===t.length)return e;break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t);var i=t.length;this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),e+=t.toString(this.encoding,0,i);var i=e.length-1,n=e.charCodeAt(i);if(n>=55296&&n<=56319){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},u.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var r=t[t.length-e];if(1==e&&r>>5==6){this.charLength=2;break}if(e<=2&&r>>4==14){this.charLength=3;break}if(e<=3&&r>>3==30){this.charLength=4;break}}this.charReceived=e},u.prototype.end=function(t){var e="";if(t&&t.length&&(e=this.write(t)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;e+=n.slice(0,r).toString(i)}return e}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(62),f=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){var n=r(7)("unscopables"),i=Array.prototype;void 0==i[n]&&r(14)(i,n,{}),t.exports=function(t){i[n][t]=!0}},function(t,e,r){var n=r(33),i=r(176),o=r(125),a=r(3),f=r(10),s=r(142),u={},h={},e=t.exports=function(t,e,r,c,d){var l,p,b,v,y=d?function(){return t}:s(t),m=n(r,c,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(l=f(t.length);l>g;g++)if(v=e?m(a(p=t[g])[0],p[1]):m(t[g]),v===u||v===h)return v}else for(b=y.call(t);!(p=b.next()).done;)if(v=i(b,m,p.value,e),v===u||v===h)return v};e.BREAK=u,e.RETURN=h},function(t,e){t.exports={}},function(t,e,r){var n=r(9).f,i=r(12),o=r(7)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){var n=r(0),i=r(24),o=r(5),a=r(138),f="["+a+"]",s="​",u=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),c=function(t,e,r){var i={},f=o(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=f?e(d):a[t];r&&(i[r]=u),n(n.P+n.F*f,"String",i)},d=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(h,"")),t};t.exports=c},function(t,e,r){"use strict";(function(e){function n(t){u.call(this,"digest"),this._hash=t,this.buffers=[]}function i(t){u.call(this,"digest"),this._hash=t}var o=r(2),a=r(105),f=r(567),s=r(568),u=r(566);o(n,u),n.prototype._update=function(t){this.buffers.push(t)},n.prototype._final=function(){var t=e.concat(this.buffers),r=this._hash(t);return this.buffers=null,r},o(i,u),i.prototype._update=function(t){this._hash.update(t)},i.prototype._final=function(){return this._hash.digest()},t.exports=function(t){return t=t.toLowerCase(),"md5"===t?new n(a):"rmd160"===t||"ripemd160"===t?new n(f):new i(s(t))}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function r(t,r){this._block=new e(t),this._finalSize=r,this._blockSize=t,this._len=0,this._s=0}r.prototype.update=function(t,r){"string"==typeof t&&(r=r||"utf8",t=new e(t,r));for(var n=this._len+=t.length,i=this._s||0,o=0,a=this._block;i<n;){for(var f=Math.min(t.length,o+this._blockSize-i%this._blockSize),s=f-o,u=0;u<s;u++)a[i%this._blockSize+u]=t[u+o];i+=s,o+=s,i%this._blockSize===0&&this._update(a)}return this._s=i,this},r.prototype.digest=function(t){var e=8*this._len;this._block[this._len%this._blockSize]=128,this._block.fill(0,this._len%this._blockSize+1),e%(8*this._blockSize)>=8*this._finalSize&&(this._update(this._block),this._block.fill(0)),this._block.writeInt32BE(e,this._blockSize-4);var r=this._update(this._block)||this._hash();return t?r.toString(t):r},r.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=r}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e,r,n){function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}function o(t,i){if(t>65536)throw new Error("requested too many random bytes");var o=new e.Uint8Array(t);t>0&&a.getRandomValues(o);var f=new r(o.buffer);return"function"==typeof i?n.nextTick(function(){i(null,f)}):f}var a=e.crypto||e.msCrypto;a&&a.getRandomValues?t.exports=o:t.exports=i}).call(e,r(39),r(1).Buffer,r(26))},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(t){function e(t){r(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return Object.defineProperty(i,"message",{configurable:!0,enumerable:!1,value:void 0!==t?String(t):""}),Object.defineProperty(i,"name",{configurable:!0,enumerable:!1,value:i.constructor.name}),Error.captureStackTrace&&Error.captureStackTrace(i,i.constructor),i}return i(e,t),e}(Error);t.exports=o},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(115),a=r(75),f=r(90),s=r(91),u=r(201),h=r(116),c=r(159),d=r(113),l=/^cf:([1-9a-f][0-9a-f]{0,3}|0):[a-zA-Z0-9_-]*$/,p=function(){function t(){n(this,t)}return i(t,[{key:"getTypeId",value:function(){return this.constructor.TYPE_ID}},{key:"getBitmask",value:function(){return this.constructor.FEATURE_BITMASK}},{key:"getCondition",value:function(){var t=new a;return t.setTypeId(this.getTypeId()),t.setBitmask(this.getBitmask()),t.setHash(this.generateHash()),t.setMaxFulfillmentLength(this.calculateMaxFulfillmentLength()),t}},{key:"getConditionUri",value:function(){return this.getCondition().serializeUri()}},{key:"getConditionBinary",value:function(){return this.getCondition().serializeBinary()}},{key:"generateHash",value:function(){throw new Error("This method should be implemented by a subclass")}},{key:"calculateMaxFulfillmentLength",value:function(){var t=new f;return this.writePayload(t),t.getSize()}},{key:"serializeUri",value:function(){return"cf:"+this.getTypeId().toString(16)+":"+h.encode(this.serializePayload())}},{key:"serializeBinary",value:function(){var t=new s;return t.writeUInt16(this.getTypeId()),t.writeVarOctetString(this.serializePayload()),t.getBuffer()}},{key:"serializePayload",value:function(){var t=new s;return this.writePayload(t),t.getBuffer()}},{key:"validate",value:function(){throw new Error("Not implemented")}}],[{key:"fromUri",value:function(e){if(e instanceof t)return e;if("string"!=typeof e)throw new Error("Serialized fulfillment must be a string");var r=e.split(":");if("cf"!==r[0])throw new c('Serialized fulfillment must start with "cf:"');if(!t.REGEX.exec(e))throw new d("Invalid fulfillment format");var n=parseInt(r[1],16),i=h.decode(r[2]),a=o.getClassFromTypeId(n),f=new a;return f.parsePayload(u.from(i),i.length),f}},{key:"fromBinary",value:function(t){t=u.from(t);var e=o.getClassFromTypeId(t.readUInt16()),r=new e,n=t.readLengthPrefix();return r.parsePayload(t,n),r}}]),t}();p.REGEX=l,t.exports=p},function(t,e,r){var n=r(23),i=r(7)("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(e=Object(t),i))?r:o?n(e):"Object"==(f=n(e))&&"function"==typeof e.callee?"Arguments":f}},function(t,e,r){var n=r(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){(function(e){t.exports=function(t,r){for(var n=Math.min(t.length,r.length),i=new e(n),o=0;o<n;++o)i[o]=t[o]^r[o];return i}}).call(e,r(1).Buffer)},function(t,e,r){var n=e;n.Reporter=r(532).Reporter,n.DecoderBuffer=r(214).DecoderBuffer,n.EncoderBuffer=r(214).EncoderBuffer,n.Node=r(531)},function(t,e,r){(function(e){t.exports=function(t,r){for(var n=Math.min(t.length,r.length),i=new e(n),o=0;o<n;++o)i[o]=t[o]^r[o];return i}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){!function(t,e){"use strict";function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){return o.isBN(t)?t:(this.negative=0,this.words=null,this.length=0,this.red=null,void(null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))))}function a(t,e,r){for(var n=0,i=Math.min(t.length,r),o=e;o<i;o++){var a=t.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function f(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var f=t.charCodeAt(a)-48;i*=n,i+=f>=49?f-49+10:f>=17?f-17+10:f}return i}function s(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26;e[r]=(t.words[n]&1<<i)>>>i}return e}function u(t,e,r){r.negative=e.negative^t.negative;var n=t.length+e.length|0;r.length=n,n=n-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,f=67108863&a,s=a/67108864|0;r.words[0]=f;for(var u=1;u<n;u++){for(var h=s>>>26,c=67108863&s,d=Math.min(u,e.length-1),l=Math.max(0,u-t.length+1);l<=d;l++){var p=u-l|0;i=0|t.words[p],o=0|e.words[l],a=i*o+c,h+=a/67108864|0,c=67108863&a}r.words[u]=0|c,s=0|h}return 0!==s?r.words[u]=0|s:r.length--,r.strip()}function h(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var f=67108863&n,s=Math.min(o,e.length-1),u=Math.max(0,o-t.length+1);u<=s;u++){var h=o-u,c=0|t.words[h],d=0|e.words[u],l=c*d,p=67108863&l;a=a+(l/67108864|0)|0,p=p+f|0,f=67108863&p,a=a+(p>>>26)|0,i+=a>>>26,a&=67108863}r.words[o]=f,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}function c(t,e,r){var n=new d;return n.mulp(t,e,r)}function d(t,e){this.x=t,this.y=e}function l(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){l.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){l.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){l.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function y(){l.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function m(t){if("string"==typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function g(t){m.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;var w;try{w=r(1).Buffer}catch(t){}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r);if("object"==typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36),t=t.toString().replace(/\s+/g,"");var i=0;"-"===t[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,f=0;if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=t.length-6,n=0;r>=e;r-=6)i=a(t,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,o+=24,o>=26&&(o-=26,n++);r+6!==e&&(i=a(t,e,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=e)n++;n--,i=i/e|0;for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,h=r;h<s;h+=n)u=f(t,h,h+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==a){var c=1;for(u=f(t,h,t.length,e),h=0;h<a;h++)c*=e;this.imuln(c),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var _=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],M=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],S=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(t,e){t=t||10,e=0|e||1;var r;if(16===t||"hex"===t){r="";for(var i=0,o=0,a=0;a<this.length;a++){var f=this.words[a],s=(16777215&(f<<i|o)).toString(16);o=f>>>24-i&16777215,r=0!==o||a!==this.length-1?_[6-s.length]+s+r:s+r,i+=2,i>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var u=M[t],h=S[t];r="";var c=this.clone();for(c.negative=0;!c.isZero();){var d=c.modn(h).toString(t);c=c.idivn(h),r=c.isZero()?d+r:_[u-d.length]+d+r}for(this.isZero()&&(r="0"+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n("undefined"!=typeof w),this.toArrayLike(w,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,f,s="le"===e,u=new t(o),h=this.clone();if(s){for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[f]=a;for(;f<o;f++)u[f]=0}else{for(f=0;f<o-i;f++)u[f]=0;for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[o-f-1]=a}return u},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0;return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,r=0;return 0===(8191&e)&&(r+=13,e>>>=13),0===(127&e)&&(r+=7,e>>>=7),0===(15&e)&&(r+=4,e>>>=4),0===(3&e)&&(r+=2,e>>>=2),0===(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e]);if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return n(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r;this.length>t.length?(e=this,r=t):(e=t,r=this);for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n];if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0);var r=t/26|0,i=t%26;return this._expand(r+1),e?this.words[r]=this.words[r]|1<<i:this.words[r]=this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();var r,n;this.length>t.length?(r=this,n=t):(r=t,n=this);for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var r=this.cmp(t);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=t):(n=t,i=this);for(var o=0,a=0;a<i.length;a++)e=(0|n.words[a])-(0|i.words[a])+o,o=e>>26,this.words[a]=67108863&e;for(;0!==o&&a<n.length;a++)e=(0|n.words[a])+o,o=e>>26,this.words[a]=67108863&e;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var E=function(t,e,r){var n,i,o,a=t.words,f=e.words,s=r.words,u=0,h=0|a[0],c=8191&h,d=h>>>13,l=0|a[1],p=8191&l,b=l>>>13,v=0|a[2],y=8191&v,m=v>>>13,g=0|a[3],w=8191&g,_=g>>>13,M=0|a[4],S=8191&M,E=M>>>13,A=0|a[5],k=8191&A,x=A>>>13,I=0|a[6],B=8191&I,O=I>>>13,R=0|a[7],P=8191&R,T=R>>>13,j=0|a[8],C=8191&j,N=j>>>13,L=0|a[9],U=8191&L,z=L>>>13,D=0|f[0],q=8191&D,F=D>>>13,K=0|f[1],G=8191&K,V=K>>>13,H=0|f[2],X=8191&H,Y=H>>>13,W=0|f[3],Z=8191&W,J=W>>>13,$=0|f[4],Q=8191&$,tt=$>>>13,et=0|f[5],rt=8191&et,nt=et>>>13,it=0|f[6],ot=8191&it,at=it>>>13,ft=0|f[7],st=8191&ft,ut=ft>>>13,ht=0|f[8],ct=8191&ht,dt=ht>>>13,lt=0|f[9],pt=8191&lt,bt=lt>>>13;r.negative=t.negative^e.negative,r.length=19,n=Math.imul(c,q),i=Math.imul(c,F),i=i+Math.imul(d,q)|0,o=Math.imul(d,F);var vt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(p,q),i=Math.imul(p,F),i=i+Math.imul(b,q)|0,o=Math.imul(b,F),n=n+Math.imul(c,G)|0,i=i+Math.imul(c,V)|0,i=i+Math.imul(d,G)|0,o=o+Math.imul(d,V)|0;var yt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(y,q),i=Math.imul(y,F),i=i+Math.imul(m,q)|0,o=Math.imul(m,F),n=n+Math.imul(p,G)|0,i=i+Math.imul(p,V)|0,i=i+Math.imul(b,G)|0,o=o+Math.imul(b,V)|0,n=n+Math.imul(c,X)|0,i=i+Math.imul(c,Y)|0,i=i+Math.imul(d,X)|0,o=o+Math.imul(d,Y)|0;var mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(w,q),i=Math.imul(w,F),i=i+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(y,G)|0,i=i+Math.imul(y,V)|0,i=i+Math.imul(m,G)|0,o=o+Math.imul(m,V)|0,n=n+Math.imul(p,X)|0,i=i+Math.imul(p,Y)|0,i=i+Math.imul(b,X)|0,o=o+Math.imul(b,Y)|0,n=n+Math.imul(c,Z)|0,i=i+Math.imul(c,J)|0,i=i+Math.imul(d,Z)|0,o=o+Math.imul(d,J)|0;var gt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(S,q),i=Math.imul(S,F),i=i+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,G)|0,i=i+Math.imul(w,V)|0,i=i+Math.imul(_,G)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(y,X)|0,i=i+Math.imul(y,Y)|0,i=i+Math.imul(m,X)|0,o=o+Math.imul(m,Y)|0,n=n+Math.imul(p,Z)|0,i=i+Math.imul(p,J)|0,i=i+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0,n=n+Math.imul(c,Q)|0,i=i+Math.imul(c,tt)|0,i=i+Math.imul(d,Q)|0,o=o+Math.imul(d,tt)|0;var wt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(k,q),i=Math.imul(k,F),i=i+Math.imul(x,q)|0,o=Math.imul(x,F),n=n+Math.imul(S,G)|0,i=i+Math.imul(S,V)|0,i=i+Math.imul(E,G)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,X)|0,i=i+Math.imul(w,Y)|0,i=i+Math.imul(_,X)|0,o=o+Math.imul(_,Y)|0,n=n+Math.imul(y,Z)|0,i=i+Math.imul(y,J)|0,i=i+Math.imul(m,Z)|0,o=o+Math.imul(m,J)|0,n=n+Math.imul(p,Q)|0,i=i+Math.imul(p,tt)|0,i=i+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0,n=n+Math.imul(c,rt)|0,i=i+Math.imul(c,nt)|0,i=i+Math.imul(d,rt)|0,o=o+Math.imul(d,nt)|0;var _t=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(B,q),i=Math.imul(B,F),i=i+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(k,G)|0,i=i+Math.imul(k,V)|0,i=i+Math.imul(x,G)|0,o=o+Math.imul(x,V)|0,n=n+Math.imul(S,X)|0,i=i+Math.imul(S,Y)|0,i=i+Math.imul(E,X)|0,o=o+Math.imul(E,Y)|0,n=n+Math.imul(w,Z)|0,i=i+Math.imul(w,J)|0,i=i+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(y,Q)|0,i=i+Math.imul(y,tt)|0,i=i+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0,n=n+Math.imul(p,rt)|0,i=i+Math.imul(p,nt)|0,i=i+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0,n=n+Math.imul(c,ot)|0,i=i+Math.imul(c,at)|0,i=i+Math.imul(d,ot)|0,o=o+Math.imul(d,at)|0;var Mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(P,q),i=Math.imul(P,F),i=i+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(B,G)|0,i=i+Math.imul(B,V)|0,i=i+Math.imul(O,G)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(k,X)|0,i=i+Math.imul(k,Y)|0,i=i+Math.imul(x,X)|0,o=o+Math.imul(x,Y)|0,n=n+Math.imul(S,Z)|0,i=i+Math.imul(S,J)|0,i=i+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=i+Math.imul(w,tt)|0,i=i+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(y,rt)|0,i=i+Math.imul(y,nt)|0,i=i+Math.imul(m,rt)|0,o=o+Math.imul(m,nt)|0,n=n+Math.imul(p,ot)|0,i=i+Math.imul(p,at)|0,i=i+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0,n=n+Math.imul(c,st)|0,i=i+Math.imul(c,ut)|0,i=i+Math.imul(d,st)|0,o=o+Math.imul(d,ut)|0;var St=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(C,q),i=Math.imul(C,F),i=i+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(P,G)|0,i=i+Math.imul(P,V)|0,i=i+Math.imul(T,G)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(B,X)|0,i=i+Math.imul(B,Y)|0,i=i+Math.imul(O,X)|0,o=o+Math.imul(O,Y)|0,n=n+Math.imul(k,Z)|0,i=i+Math.imul(k,J)|0,i=i+Math.imul(x,Z)|0,o=o+Math.imul(x,J)|0,n=n+Math.imul(S,Q)|0,i=i+Math.imul(S,tt)|0,i=i+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=i+Math.imul(w,nt)|0,i=i+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(y,ot)|0,i=i+Math.imul(y,at)|0,i=i+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0,n=n+Math.imul(p,st)|0,i=i+Math.imul(p,ut)|0,i=i+Math.imul(b,st)|0,o=o+Math.imul(b,ut)|0,n=n+Math.imul(c,ct)|0,i=i+Math.imul(c,dt)|0,i=i+Math.imul(d,ct)|0,o=o+Math.imul(d,dt)|0;var Et=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(U,q),i=Math.imul(U,F),i=i+Math.imul(z,q)|0,o=Math.imul(z,F),n=n+Math.imul(C,G)|0,i=i+Math.imul(C,V)|0,i=i+Math.imul(N,G)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(P,X)|0,i=i+Math.imul(P,Y)|0,i=i+Math.imul(T,X)|0,o=o+Math.imul(T,Y)|0,n=n+Math.imul(B,Z)|0,i=i+Math.imul(B,J)|0,i=i+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(k,Q)|0,i=i+Math.imul(k,tt)|0,i=i+Math.imul(x,Q)|0,o=o+Math.imul(x,tt)|0,n=n+Math.imul(S,rt)|0,i=i+Math.imul(S,nt)|0,i=i+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=i+Math.imul(w,at)|0,i=i+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(y,st)|0,i=i+Math.imul(y,ut)|0,i=i+Math.imul(m,st)|0,o=o+Math.imul(m,ut)|0,n=n+Math.imul(p,ct)|0,i=i+Math.imul(p,dt)|0,i=i+Math.imul(b,ct)|0,o=o+Math.imul(b,dt)|0,n=n+Math.imul(c,pt)|0,i=i+Math.imul(c,bt)|0,i=i+Math.imul(d,pt)|0,o=o+Math.imul(d,bt)|0;var At=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(U,G),i=Math.imul(U,V),i=i+Math.imul(z,G)|0,o=Math.imul(z,V),n=n+Math.imul(C,X)|0,i=i+Math.imul(C,Y)|0,i=i+Math.imul(N,X)|0,o=o+Math.imul(N,Y)|0,n=n+Math.imul(P,Z)|0,i=i+Math.imul(P,J)|0,i=i+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(B,Q)|0,i=i+Math.imul(B,tt)|0,i=i+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(k,rt)|0,i=i+Math.imul(k,nt)|0,i=i+Math.imul(x,rt)|0,o=o+Math.imul(x,nt)|0,n=n+Math.imul(S,ot)|0,i=i+Math.imul(S,at)|0,i=i+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,st)|0,i=i+Math.imul(w,ut)|0,i=i+Math.imul(_,st)|0,o=o+Math.imul(_,ut)|0,n=n+Math.imul(y,ct)|0,i=i+Math.imul(y,dt)|0,i=i+Math.imul(m,ct)|0,o=o+Math.imul(m,dt)|0,n=n+Math.imul(p,pt)|0,i=i+Math.imul(p,bt)|0,i=i+Math.imul(b,pt)|0,o=o+Math.imul(b,bt)|0;var kt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(U,X),i=Math.imul(U,Y),i=i+Math.imul(z,X)|0,o=Math.imul(z,Y),n=n+Math.imul(C,Z)|0,i=i+Math.imul(C,J)|0,i=i+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(P,Q)|0,i=i+Math.imul(P,tt)|0,i=i+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(B,rt)|0,i=i+Math.imul(B,nt)|0,i=i+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(k,ot)|0,i=i+Math.imul(k,at)|0,i=i+Math.imul(x,ot)|0,o=o+Math.imul(x,at)|0,n=n+Math.imul(S,st)|0,i=i+Math.imul(S,ut)|0,i=i+Math.imul(E,st)|0,o=o+Math.imul(E,ut)|0,n=n+Math.imul(w,ct)|0,i=i+Math.imul(w,dt)|0,i=i+Math.imul(_,ct)|0,o=o+Math.imul(_,dt)|0,n=n+Math.imul(y,pt)|0,i=i+Math.imul(y,bt)|0,i=i+Math.imul(m,pt)|0,o=o+Math.imul(m,bt)|0;var xt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(U,Z),i=Math.imul(U,J),i=i+Math.imul(z,Z)|0,o=Math.imul(z,J),n=n+Math.imul(C,Q)|0,i=i+Math.imul(C,tt)|0,i=i+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(P,rt)|0,i=i+Math.imul(P,nt)|0,i=i+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(B,ot)|0,i=i+Math.imul(B,at)|0,i=i+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(k,st)|0,i=i+Math.imul(k,ut)|0,i=i+Math.imul(x,st)|0,o=o+Math.imul(x,ut)|0,n=n+Math.imul(S,ct)|0,i=i+Math.imul(S,dt)|0,i=i+Math.imul(E,ct)|0,o=o+Math.imul(E,dt)|0,n=n+Math.imul(w,pt)|0,i=i+Math.imul(w,bt)|0,i=i+Math.imul(_,pt)|0,o=o+Math.imul(_,bt)|0;var It=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(U,Q),i=Math.imul(U,tt),i=i+Math.imul(z,Q)|0,o=Math.imul(z,tt),n=n+Math.imul(C,rt)|0,i=i+Math.imul(C,nt)|0,i=i+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(P,ot)|0,i=i+Math.imul(P,at)|0,i=i+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(B,st)|0,i=i+Math.imul(B,ut)|0,i=i+Math.imul(O,st)|0,o=o+Math.imul(O,ut)|0,n=n+Math.imul(k,ct)|0,i=i+Math.imul(k,dt)|0,i=i+Math.imul(x,ct)|0,o=o+Math.imul(x,dt)|0,n=n+Math.imul(S,pt)|0,i=i+Math.imul(S,bt)|0,i=i+Math.imul(E,pt)|0,o=o+Math.imul(E,bt)|0;var Bt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(U,rt),i=Math.imul(U,nt),i=i+Math.imul(z,rt)|0,o=Math.imul(z,nt),n=n+Math.imul(C,ot)|0,i=i+Math.imul(C,at)|0,i=i+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(P,st)|0,i=i+Math.imul(P,ut)|0,i=i+Math.imul(T,st)|0,o=o+Math.imul(T,ut)|0,n=n+Math.imul(B,ct)|0,i=i+Math.imul(B,dt)|0,i=i+Math.imul(O,ct)|0,o=o+Math.imul(O,dt)|0,n=n+Math.imul(k,pt)|0,i=i+Math.imul(k,bt)|0,i=i+Math.imul(x,pt)|0,o=o+Math.imul(x,bt)|0;var Ot=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,n=Math.imul(U,ot),i=Math.imul(U,at),i=i+Math.imul(z,ot)|0,o=Math.imul(z,at),n=n+Math.imul(C,st)|0,i=i+Math.imul(C,ut)|0,i=i+Math.imul(N,st)|0,o=o+Math.imul(N,ut)|0,n=n+Math.imul(P,ct)|0,i=i+Math.imul(P,dt)|0,i=i+Math.imul(T,ct)|0,o=o+Math.imul(T,dt)|0,n=n+Math.imul(B,pt)|0,i=i+Math.imul(B,bt)|0,i=i+Math.imul(O,pt)|0,o=o+Math.imul(O,bt)|0;var Rt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(U,st),i=Math.imul(U,ut),i=i+Math.imul(z,st)|0,o=Math.imul(z,ut),n=n+Math.imul(C,ct)|0,i=i+Math.imul(C,dt)|0,i=i+Math.imul(N,ct)|0,o=o+Math.imul(N,dt)|0,n=n+Math.imul(P,pt)|0,i=i+Math.imul(P,bt)|0,i=i+Math.imul(T,pt)|0,o=o+Math.imul(T,bt)|0;var Pt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,n=Math.imul(U,ct),i=Math.imul(U,dt),i=i+Math.imul(z,ct)|0,o=Math.imul(z,dt),n=n+Math.imul(C,pt)|0,i=i+Math.imul(C,bt)|0,i=i+Math.imul(N,pt)|0,o=o+Math.imul(N,bt)|0;var Tt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(U,pt),i=Math.imul(U,bt),i=i+Math.imul(z,pt)|0,o=Math.imul(z,bt);var jt=(u+n|0)+((8191&i)<<13)|0;return u=(o+(i>>>13)|0)+(jt>>>26)|0,jt&=67108863,s[0]=vt,s[1]=yt,s[2]=mt,s[3]=gt,s[4]=wt,s[5]=_t,s[6]=Mt,s[7]=St,s[8]=Et,s[9]=At,s[10]=kt,s[11]=xt,s[12]=It,s[13]=Bt,s[14]=Ot,s[15]=Rt,s[16]=Pt,s[17]=Tt,s[18]=jt,0!==u&&(s[19]=u,r.length++),r};Math.imul||(E=u),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length;return r=10===this.length&&10===t.length?E(this,t,e):n<63?u(this,t,e):n<1024?h(this,t,e):c(this,t,e)},d.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t);return e},d.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t;for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1;return n},
d.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},d.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i);for(var a=1;a<i;a<<=1)for(var f=a<<1,s=Math.cos(2*Math.PI/f),u=Math.sin(2*Math.PI/f),h=0;h<i;h+=f)for(var c=s,d=u,l=0;l<a;l++){var p=r[h+l],b=n[h+l],v=r[h+l+a],y=n[h+l+a],m=c*v-d*y;y=c*y+d*v,v=m,r[h+l]=p+v,n[h+l]=b+y,r[h+l+a]=p-v,n[h+l+a]=b-y,l!==f&&(m=s*c-u*d,d=s*d+u*c,c=m)}},d.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},d.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n];t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},d.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r;t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},d.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)r[a]=0;n(0===o),n(0===(o&-8192))},d.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e},d.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),f=new Array(n),s=new Array(n),u=new Array(n),h=new Array(n),c=new Array(n),d=r.words;d.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,u,n),this.transform(a,o,f,s,n,i),this.transform(u,o,h,c,n,i);for(var l=0;l<n;l++){var p=f[l]*h[l]-s[l]*c[l];s[l]=f[l]*c[l]+s[l]*h[l],f[l]=p}return this.conjugate(f,s,n),this.transform(f,s,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),c(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"==typeof t),n(t<67108864);for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=s(t);if(0===e.length)return new o(1);for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0);var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(e=0;e<this.length;e++){var f=this.words[e]&o,s=(0|this.words[e])-f<<r;this.words[e]=s|a,a=f>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){n("number"==typeof t&&t>=0);var i;i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),f=67108863^67108863>>>o<<o,s=r;if(i-=a,i=Math.max(0,i),s){for(var u=0;u<a;u++)s.words[u]=this.words[u];s.length=a}if(0===a);else if(this.length>a)for(this.length-=a,u=0;u<this.length;u++)this.words[u]=this.words[u+a];else this.words[0]=0,this.length=1;var h=0;for(u=this.length-1;u>=0&&(0!==h||u>=i);u--){var c=0|this.words[u];this.words[u]=h<<26-o|c>>>o,h=c&f}return s&&0!==h&&(s.words[s.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return!1;var o=this.words[r];return!!(o&i)},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o=t.length+r;this._expand(o);var a,f=0;for(i=0;i<t.length;i++){a=(0|this.words[i+r])+f;var s=(0|t.words[i])*e;a-=67108863&s,f=(a>>26)-(s/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+f,f=a>>26,this.words[i+r]=67108863&a;if(0===f)return this.strip();for(n(f===-1),f=0,i=0;i<this.length;i++)a=-(0|this.words[i])+f,f=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=this.length-t.length,n=this.clone(),i=t,a=0|i.words[i.length-1],f=this._countBits(a);r=26-f,0!==r&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,u=n.length-i.length;if("mod"!==e){s=new o(null),s.length=u+1,s.words=new Array(s.length);for(var h=0;h<s.length;h++)s.words[h]=0}var c=n.clone()._ishlnsubmul(i,1,u);0===c.negative&&(n=c,s&&(s.words[u]=1));for(var d=u-1;d>=0;d--){var l=67108864*(0|n.words[i.length+d])+(0|n.words[i.length+d-1]);for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,d);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,d),n.isZero()||(n.negative^=1);s&&(s.words[d]=l)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){if(n(!t.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var i,a,f;return 0!==this.negative&&0===t.negative?(f=this.neg().divmod(t,e),"mod"!==e&&(i=f.div.neg()),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(f=this.divmod(t.neg(),e),"mod"!==e&&(i=f.div.neg()),{div:i,mod:f.mod}):0!==(this.negative&t.negative)?(f=this.neg().divmod(t.neg(),e),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:f.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863);for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t;return r},o.prototype.idivn=function(t){n(t<=67108863);for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e;this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=new o(0),s=new o(1),u=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++u;for(var h=r.clone(),c=e.clone();!e.isZero();){for(var d=0,l=1;0===(e.words[0]&l)&&d<26;++d,l<<=1);if(d>0)for(e.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(h),a.isub(c)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0===(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(f.isOdd()||s.isOdd())&&(f.iadd(h),s.isub(c)),f.iushrn(1),s.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(f),a.isub(s)):(r.isub(e),f.isub(i),s.isub(a))}return{a:f,b:s,gcd:r.iushln(u)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var s=0,u=1;0===(e.words[0]&u)&&s<26;++s,u<<=1);if(s>0)for(e.iushrn(s);s-- >0;)i.isOdd()&&i.iadd(f),i.iushrn(1);for(var h=0,c=1;0===(r.words[0]&c)&&h<26;++h,c<<=1);if(h>0)for(r.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(f),a.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(a)):(r.isub(e),a.isub(i))}var d;return d=0===e.cmpn(1)?i:a,d.cmpn(0)<0&&d.iadd(t),d},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),r=t.clone();e.negative=0,r.negative=0;for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=e.cmp(r);if(i<0){var o=e;e=r,r=o}else if(0===i||0===r.cmpn(1))break;e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var f=0|this.words[a];f+=o,o=f>>>26,f&=67108863,this.words[a]=f}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e=t<0;if(0!==this.negative&&!e)return-1;if(0===this.negative&&e)return 1;this.strip();var r;if(this.length>1)r=1;else{e&&(t=-t),n(t<=67108863,"Number is too big");var i=0|this.words[0];r=i===t?0:i<t?-1:1}return 0!==this.negative?0|-r:r},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r];if(n!==i){n<i?e=-1:n>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return this.cmpn(t)===-1},o.prototype.lt=function(t){return this.cmp(t)===-1},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new m(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var A={k256:null,p224:null,p192:null,p25519:null};l.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},l.prototype.ireduce=function(t){var e,r=t;do this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),e=r.bitLength();while(e>this.n);var n=e<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},l.prototype.split=function(t,e){t.iushrn(this.n,0,e)},l.prototype.imulK=function(t){return t.imul(this.k)},i(p,l),p.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i];if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},p.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r];e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(b,l),i(v,l),i(y,l),y.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n;n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function t(e){if(A[e])return A[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new v;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new y}return A[e]=t,t},m.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},m.prototype._verify2=function(t,e){n(0===(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},m.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},m.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},m.prototype.add=function(t,e){this._verify2(t,e);var r=t.add(e);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},m.prototype.iadd=function(t,e){this._verify2(t,e);var r=t.iadd(e);return r.cmp(this.m)>=0&&r.isub(this.m),r},m.prototype.sub=function(t,e){this._verify2(t,e);var r=t.sub(e);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},m.prototype.isub=function(t,e){this._verify2(t,e);var r=t.isub(e);return r.cmpn(0)<0&&r.iadd(this.m),r},m.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},m.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},m.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},m.prototype.isqr=function(t){return this.imul(t,t.clone())},m.prototype.sqr=function(t){return this.mul(t,t)},m.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(n(e%2===1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var f=new o(1).toRed(this),s=f.redNeg(),u=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new o(2*h*h).toRed(this);0!==this.pow(h,u).cmp(s);)h.redIAdd(s);for(var c=this.pow(h,i),d=this.pow(t,i.addn(1).iushrn(1)),l=this.pow(t,i),p=a;0!==l.cmp(f);){for(var b=l,v=0;0!==b.cmp(f);v++)b=b.redSqr();n(v<p);var y=this.pow(c,new o(1).iushln(p-v-1));d=d.redMul(y),c=y.redSqr(),l=l.redMul(c),p=v}return d},m.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},m.prototype.pow=function(t,e){if(e.isZero())return new o(1);if(0===e.cmpn(1))return t.clone();var r=4,n=new Array(1<<r);n[0]=new o(1).toRed(this),n[1]=t;for(var i=2;i<n.length;i++)n[i]=this.mul(n[i-1],t);var a=n[0],f=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),i=e.length-1;i>=0;i--){for(var h=e.words[i],c=u-1;c>=0;c--){var d=h>>c&1;a!==n[0]&&(a=this.sqr(a)),0!==d||0!==f?(f<<=1,f|=d,s++,(s===r||0===i&&0===c)&&(a=this.mul(a,n[f]),s=0,f=0)):s=0}u=26}return a},m.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},m.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new g(t)},i(g,m),g.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},g.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},g.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},g.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},g.prototype.invm=function(t){var e=this.imod(t._invmp(this.m).mul(this.r2));return e._forceRed(this)}}("undefined"==typeof t||t,this)}).call(e,r(92)(t))},function(t,e,r){var n=e;n.Reporter=r(582).Reporter,n.DecoderBuffer=r(234).DecoderBuffer,n.EncoderBuffer=r(234).EncoderBuffer,n.Node=r(581)},function(t,e,r){(function(e){t.exports=function(t,r){for(var n=Math.min(t.length,r.length),i=new e(n),o=0;o<n;++o)i[o]=t[o]^r[o];return i}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(t){return Array.isArray?Array.isArray(t):"[object Array]"===v(t)}function n(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"==typeof t}function f(t){return"string"==typeof t}function s(t){return"symbol"==typeof t}function u(t){return void 0===t}function h(t){return"[object RegExp]"===v(t)}function c(t){return"object"==typeof t&&null!==t}function d(t){return"[object Date]"===v(t)}function l(t){return"[object Error]"===v(t)||t instanceof Error}function p(t){return"function"==typeof t}function b(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function v(t){return Object.prototype.toString.call(t)}e.isArray=r,e.isBoolean=n,e.isNull=i,e.isNullOrUndefined=o,e.isNumber=a,e.isString=f,e.isSymbol=s,e.isUndefined=u,e.isRegExp=h,e.isObject=c,e.isDate=d,e.isError=l,e.isFunction=p,e.isPrimitive=b,e.isBuffer=t.isBuffer}).call(e,r(1).Buffer)},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(115),a=r(159),f=r(113),s=r(53),u=r(116),h=r(201),c=r(91),d=r(162),l=/^cc:([1-9a-f][0-9a-f]{0,3}|0):[1-9a-f][0-9a-f]{0,15}:[a-zA-Z0-9_-]{0,86}:([1-9][0-9]{0,17}|0)$/,p=/^cc:([1-9a-f][0-9a-f]{0,3}|0):[1-9a-f][0-9a-f]{0,7}:[a-zA-Z0-9_-]{0,86}:([1-9][0-9]{0,17}|0)$/,b=function(){function t(){n(this,t)}return i(t,[{key:"getTypeId",value:function(){return this.type}},{key:"setTypeId",value:function(t){this.type=t}},{key:"getBitmask",value:function(){return this.bitmask}},{key:"setBitmask",value:function(t){this.bitmask=t}},{key:"getHash",value:function(){if(!this.hash)throw new s("Hash not set");return this.hash}},{key:"setHash",value:function(t){if(!e.isBuffer(t))throw new TypeError("Hash must be a Buffer");this.hash=t}},{key:"getMaxFulfillmentLength",value:function(){if("number"!=typeof this.maxFulfillmentLength)throw new s("Maximum fulfillment length not set");return this.maxFulfillmentLength}},{key:"setMaxFulfillmentLength",value:function(t){if(!d(t))throw new TypeError("Fulfillment length must be an integer");if(t<0)throw new TypeError("Fulfillment length must be positive or zero");this.maxFulfillmentLength=t}},{key:"serializeUri",value:function(){return"cc:"+this.getTypeId().toString(16)+":"+this.getBitmask().toString(16)+":"+u.encode(this.getHash())+":"+this.getMaxFulfillmentLength()}},{key:"serializeBinary",value:function(){var t=new c;return t.writeUInt16(this.getTypeId()),t.writeVarUInt(this.getBitmask()),t.writeVarOctetString(this.getHash()),t.writeVarUInt(this.getMaxFulfillmentLength()),t.getBuffer()}},{key:"parseBinary",value:function(t){this.setTypeId(t.readUInt16()),this.setBitmask(t.readVarUInt()),this.setHash(t.readVarOctetString()),this.setMaxFulfillmentLength(t.readVarUInt())}},{key:"validate",value:function(){if(o.getClassFromTypeId(this.getTypeId()),this.getBitmask()>t.MAX_SAFE_BITMASK)throw new Error("Bitmask too large to be safely represented");if(this.getBitmask()&~t.SUPPORTED_BITMASK)throw new Error("Condition requested unsupported feature suites");if(this.getMaxFulfillmentLength()>t.MAX_FULFILLMENT_LENGTH)throw new Error("Condition requested too large of a max fulfillment size");return!0}}],[{key:"fromUri",value:function(e){if(e instanceof t)return e;if("string"!=typeof e)throw new Error("Serialized condition must be a string");var r=e.split(":");if("cc"!==r[0])throw new a('Serialized condition must start with "cc:"');if(!t.REGEX_STRICT.exec(e))throw new f("Invalid condition format");var n=new t;return n.setTypeId(parseInt(r[1],16)),n.setBitmask(parseInt(r[2],16)),n.setHash(u.decode(r[3])),n.setMaxFulfillmentLength(parseInt(r[4],10)),n}},{key:"fromBinary",value:function(e){e=h.from(e);var r=new t;return r.parseBinary(e),r}}]),t}();b.MAX_SAFE_BITMASK=4294967295,b.SUPPORTED_BITMASK=63,b.MAX_FULFILLMENT_LENGTH=65535,b.REGEX=l,b.REGEX_STRICT=p,t.exports=b}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(63),s=r(114),u=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),a(e,[{key:"generateHash",value:function(){var t=new s("sha256");return this.writeHashPayload(t),t.getDigest()}}]),e}(f);t.exports=u},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(17),i=r(10),o=r(47);t.exports=function(t){return function(e,r,a){var f,s=n(e),u=i(s.length),h=o(a,u);if(t&&r!=r){for(;u>h;)if(f=s[h++],f!=f)return!0}else for(;u>h;h++)if((t||h in s)&&s[h]===r)return t||h||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(4),i=r(0),o=r(15),a=r(45),f=r(36),s=r(55),u=r(40),h=r(6),c=r(5),d=r(84),l=r(57),p=r(124);t.exports=function(t,e,r,b,v,y){var m=n[t],g=m,w=v?"set":"add",_=g&&g.prototype,M={},S=function(t){var e=_[t];o(_,t,"delete"==t?function(t){return!(y&&!h(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!h(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,r){return e.call(this,0===t?0:t,r),this})};if("function"==typeof g&&(y||_.forEach&&!c(function(){(new g).entries().next()}))){var E=new g,A=E[w](y?{}:-0,1)!=E,k=c(function(){E.has(1)}),x=d(function(t){new g(t)}),I=!y&&c(function(){for(var t=new g,e=5;e--;)t[w](e,e);return!t.has(-0)});x||(g=e(function(e,r){u(e,g,t);var n=p(new m,e,g);return void 0!=r&&s(r,v,n[w],n),n}),g.prototype=_,_.constructor=g),(k||I)&&(S("delete"),S("has"),v&&S("get")),(I||A)&&S(w),y&&_.clear&&delete _.clear}else g=b.getConstructor(e,t,v,w),a(g.prototype,r),f.NEED=!0;return l(g,t),M[t]=g,i(i.G+i.W+i.F*(g!=m),M),y||b.setStrong(g,t,v),g}},function(t,e,r){"use strict";var n=r(14),i=r(15),o=r(5),a=r(24),f=r(7);t.exports=function(t,e,r){var s=f(t),u=r(a,s,""[t]),h=u[0],c=u[1];o(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,h),n(RegExp.prototype,s,2==e?function(t,e){return c.call(t,this,e)}:function(t){return c.call(t,this)}))}},function(t,e,r){"use strict";var n=r(3);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){var n=r(6),i=r(23),o=r(7)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,r){var n=r(7)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],a=o[n]();a.next=function(){return{done:r=!0}},o[n]=function(){return a},t(o)}catch(t){}return r}},function(t,e,r){t.exports=r(41)||!r(5)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(4)[t]})},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(4),i="__core-js_shared__",o=n[i]||(n[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,r){for(var n,i=r(4),o=r(14),a=r(48),f=a("typed_array"),s=a("view"),u=!(!i.ArrayBuffer||!i.DataView),h=u,c=0,d=9,l="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");c<d;)(n=i[l[c++]])?(o(n.prototype,f,!0),o(n.prototype,s,!0)):h=!1;t.exports={ABV:u,CONSTR:h,TYPED:f,VIEW:s}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=r(472)},function(t,e,r){"use strict";t.exports=r(474)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,configurable:!1,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,configurable:!1,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";e.randomBytes=e.rng=e.pseudoRandomBytes=e.prng=r(61),e.createHash=e.Hash=r(59),e.createHmac=e.Hmac=r(149);var n=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(Object.keys(r(211)));e.getHashes=function(){return n};var i=r(151);e.pbkdf2=i.pbkdf2,e.pbkdf2Sync=i.pbkdf2Sync;var o=r(493);["Cipher","createCipher","Cipheriv","createCipheriv","Decipher","createDecipher","Decipheriv","createDecipheriv","getCiphers","listCiphers"].forEach(function(t){e[t]=o[t]});var a=r(573);["DiffieHellmanGroup","createDiffieHellmanGroup","getDiffieHellman","createDiffieHellman","DiffieHellman"].forEach(function(t){e[t]=a[t]});var f=r(506);["createSign","Sign","createVerify","Verify"].forEach(function(t){e[t]=f[t]}),e.createECDH=r(544);var s=r(577);["publicEncrypt","privateEncrypt","publicDecrypt","privateDecrypt"].forEach(function(t){e[t]=s[t]}),["createCredentials"].forEach(function(t){e[t]=function(){throw new Error(["sorry, "+t+" is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))}})},function(t,e,r){(function(t){function r(t){var e,r;return e=t>f||t<0?(r=Math.abs(t)%f,t<0?f-r:r):t}function n(t){for(var e=0;e<t.length;t++)t[e]=0;return!1}function i(){this.SBOX=[],this.INV_SBOX=[],this.SUB_MIX=[[],[],[],[]],this.INV_SUB_MIX=[[],[],[],[]],this.init(),this.RCON=[0,1,2,4,8,16,32,64,128,27,54]}function o(t){for(var e=t.length/4,r=new Array(e),n=-1;++n<e;)r[n]=t.readUInt32BE(4*n);return r}function a(t){this._key=o(t),this._doReset()}var f=Math.pow(2,32);i.prototype.init=function(){var t,e,r,n,i,o,a,f,s,u;for(t=function(){var t,r;for(r=[],e=t=0;t<256;e=++t)e<128?r.push(e<<1):r.push(e<<1^283);return r}(),i=0,s=0,e=u=0;u<256;e=++u)r=s^s<<1^s<<2^s<<3^s<<4,r=r>>>8^255&r^99,this.SBOX[i]=r,this.INV_SBOX[r]=i,o=t[i],a=t[o],f=t[a],n=257*t[r]^16843008*r,this.SUB_MIX[0][i]=n<<24|n>>>8,this.SUB_MIX[1][i]=n<<16|n>>>16,this.SUB_MIX[2][i]=n<<8|n>>>24,this.SUB_MIX[3][i]=n,n=16843009*f^65537*a^257*o^16843008*i,this.INV_SUB_MIX[0][r]=n<<24|n>>>8,this.INV_SUB_MIX[1][r]=n<<16|n>>>16,this.INV_SUB_MIX[2][r]=n<<8|n>>>24,this.INV_SUB_MIX[3][r]=n,0===i?i=s=1:(i=o^t[t[t[f^o]]],s^=t[t[s]]);return!0};var s=new i;a.blockSize=16,a.prototype.blockSize=a.blockSize,a.keySize=32,a.prototype.keySize=a.keySize,a.prototype._doReset=function(){var t,e,r,n,i,o;for(r=this._key,e=r.length,this._nRounds=e+6,i=4*(this._nRounds+1),this._keySchedule=[],n=0;n<i;n++)this._keySchedule[n]=n<e?r[n]:(o=this._keySchedule[n-1],n%e===0?(o=o<<8|o>>>24,o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o],o^=s.RCON[n/e|0]<<24):e>6&&n%e===4?o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o]:void 0,this._keySchedule[n-e]^o);for(this._invKeySchedule=[],t=0;t<i;t++)n=i-t,o=this._keySchedule[n-(t%4?0:4)],this._invKeySchedule[t]=t<4||n<=4?o:s.INV_SUB_MIX[0][s.SBOX[o>>>24]]^s.INV_SUB_MIX[1][s.SBOX[o>>>16&255]]^s.INV_SUB_MIX[2][s.SBOX[o>>>8&255]]^s.INV_SUB_MIX[3][s.SBOX[255&o]];
return!0},a.prototype.encryptBlock=function(e){e=o(new t(e));var r=this._doCryptBlock(e,this._keySchedule,s.SUB_MIX,s.SBOX),n=new t(16);return n.writeUInt32BE(r[0],0),n.writeUInt32BE(r[1],4),n.writeUInt32BE(r[2],8),n.writeUInt32BE(r[3],12),n},a.prototype.decryptBlock=function(e){e=o(new t(e));var r=[e[3],e[1]];e[1]=r[0],e[3]=r[1];var n=this._doCryptBlock(e,this._invKeySchedule,s.INV_SUB_MIX,s.INV_SBOX),i=new t(16);return i.writeUInt32BE(n[0],0),i.writeUInt32BE(n[3],4),i.writeUInt32BE(n[2],8),i.writeUInt32BE(n[1],12),i},a.prototype.scrub=function(){n(this._keySchedule),n(this._invKeySchedule),n(this._key)},a.prototype._doCryptBlock=function(t,e,n,i){var o,a,f,s,u,h,c,d,l;a=t[0]^e[0],f=t[1]^e[1],s=t[2]^e[2],u=t[3]^e[3],o=4;for(var p=1;p<this._nRounds;p++)h=n[0][a>>>24]^n[1][f>>>16&255]^n[2][s>>>8&255]^n[3][255&u]^e[o++],c=n[0][f>>>24]^n[1][s>>>16&255]^n[2][u>>>8&255]^n[3][255&a]^e[o++],d=n[0][s>>>24]^n[1][u>>>16&255]^n[2][a>>>8&255]^n[3][255&f]^e[o++],l=n[0][u>>>24]^n[1][a>>>16&255]^n[2][f>>>8&255]^n[3][255&s]^e[o++],a=h,f=c,s=d,u=l;return h=(i[a>>>24]<<24|i[f>>>16&255]<<16|i[s>>>8&255]<<8|i[255&u])^e[o++],c=(i[f>>>24]<<24|i[s>>>16&255]<<16|i[u>>>8&255]<<8|i[255&a])^e[o++],d=(i[s>>>24]<<24|i[u>>>16&255]<<16|i[a>>>8&255]<<8|i[255&f])^e[o++],l=(i[u>>>24]<<24|i[a>>>16&255]<<16|i[f>>>8&255]<<8|i[255&s])^e[o++],[r(h),r(c),r(d),r(l)]},e.AES=a}).call(e,r(1).Buffer)},function(t,e){e["aes-128-ecb"]={cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},e["aes-192-ecb"]={cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},e["aes-256-ecb"]={cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},e["aes-128-cbc"]={cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},e["aes-192-cbc"]={cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},e["aes-256-cbc"]={cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},e.aes128=e["aes-128-cbc"],e.aes192=e["aes-192-cbc"],e.aes256=e["aes-256-cbc"],e["aes-128-cfb"]={cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},e["aes-192-cfb"]={cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},e["aes-256-cfb"]={cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},e["aes-128-cfb8"]={cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},e["aes-192-cfb8"]={cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},e["aes-256-cfb8"]={cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},e["aes-128-cfb1"]={cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},e["aes-192-cfb1"]={cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},e["aes-256-cfb1"]={cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},e["aes-128-ofb"]={cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},e["aes-192-ofb"]={cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},e["aes-256-ofb"]={cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},e["aes-128-ctr"]={cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},e["aes-192-ctr"]={cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},e["aes-256-ctr"]={cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},e["aes-128-gcm"]={cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},e["aes-192-gcm"]={cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},e["aes-256-gcm"]={cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}},function(t,e,r){(function(t){function n(t){for(var e,r=t.length;r--;){if(e=t.readUInt8(r),255!==e){e++,t.writeUInt8(e,r);break}t.writeUInt8(0,r)}}function i(t){var e=t._cipher.encryptBlock(t._prev);return n(t._prev),e}var o=r(67);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,i(e)]);var n=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),o(r,n)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._decoder=null,this._encoding=null}var i=r(31).Transform,o=r(2),a=r(52).StringDecoder;t.exports=n,o(n,i),n.prototype.update=function(t,r,n){"string"==typeof t&&(t=new e(t,r));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},n.prototype._flush=function(t){var e;try{this.push(this._final())}catch(t){e=t}finally{t(e)}},n.prototype._finalOrDigest=function(t){var r=this._final()||new e("");return t&&(r=this._toString(r,t,!0)),r},n.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new a(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n}}).call(e,r(1).Buffer)},function(t,e){function r(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=r,r.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)}},function(t,e,r){"use strict";var n=e;n.base=r(508),n.short=r(511),n.mont=r(510),n.edwards=r(509)},function(t,e,r){var n=e;n.bignum=r(18),n.define=r(530).define,n.base=r(68),n.constants=r(215),n.decoders=r(534),n.encoders=r(536)},function(t,e,r){(function(t){function r(t){var e,r;return e=t>f||t<0?(r=Math.abs(t)%f,t<0?f-r:r):t}function n(t){for(var e=0;e<t.length;t++)t[e]=0;return!1}function i(){this.SBOX=[],this.INV_SBOX=[],this.SUB_MIX=[[],[],[],[]],this.INV_SUB_MIX=[[],[],[],[]],this.init(),this.RCON=[0,1,2,4,8,16,32,64,128,27,54]}function o(t){for(var e=t.length/4,r=new Array(e),n=-1;++n<e;)r[n]=t.readUInt32BE(4*n);return r}function a(t){this._key=o(t),this._doReset()}var f=Math.pow(2,32);i.prototype.init=function(){var t,e,r,n,i,o,a,f,s,u;for(t=function(){var t,r;for(r=[],e=t=0;t<256;e=++t)e<128?r.push(e<<1):r.push(e<<1^283);return r}(),i=0,s=0,e=u=0;u<256;e=++u)r=s^s<<1^s<<2^s<<3^s<<4,r=r>>>8^255&r^99,this.SBOX[i]=r,this.INV_SBOX[r]=i,o=t[i],a=t[o],f=t[a],n=257*t[r]^16843008*r,this.SUB_MIX[0][i]=n<<24|n>>>8,this.SUB_MIX[1][i]=n<<16|n>>>16,this.SUB_MIX[2][i]=n<<8|n>>>24,this.SUB_MIX[3][i]=n,n=16843009*f^65537*a^257*o^16843008*i,this.INV_SUB_MIX[0][r]=n<<24|n>>>8,this.INV_SUB_MIX[1][r]=n<<16|n>>>16,this.INV_SUB_MIX[2][r]=n<<8|n>>>24,this.INV_SUB_MIX[3][r]=n,0===i?i=s=1:(i=o^t[t[t[f^o]]],s^=t[t[s]]);return!0};var s=new i;a.blockSize=16,a.prototype.blockSize=a.blockSize,a.keySize=32,a.prototype.keySize=a.keySize,a.prototype._doReset=function(){var t,e,r,n,i,o;for(r=this._key,e=r.length,this._nRounds=e+6,i=4*(this._nRounds+1),this._keySchedule=[],n=0;n<i;n++)this._keySchedule[n]=n<e?r[n]:(o=this._keySchedule[n-1],n%e===0?(o=o<<8|o>>>24,o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o],o^=s.RCON[n/e|0]<<24):e>6&&n%e===4?o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o]:void 0,this._keySchedule[n-e]^o);for(this._invKeySchedule=[],t=0;t<i;t++)n=i-t,o=this._keySchedule[n-(t%4?0:4)],this._invKeySchedule[t]=t<4||n<=4?o:s.INV_SUB_MIX[0][s.SBOX[o>>>24]]^s.INV_SUB_MIX[1][s.SBOX[o>>>16&255]]^s.INV_SUB_MIX[2][s.SBOX[o>>>8&255]]^s.INV_SUB_MIX[3][s.SBOX[255&o]];return!0},a.prototype.encryptBlock=function(e){e=o(new t(e));var r=this._doCryptBlock(e,this._keySchedule,s.SUB_MIX,s.SBOX),n=new t(16);return n.writeUInt32BE(r[0],0),n.writeUInt32BE(r[1],4),n.writeUInt32BE(r[2],8),n.writeUInt32BE(r[3],12),n},a.prototype.decryptBlock=function(e){e=o(new t(e));var r=[e[3],e[1]];e[1]=r[0],e[3]=r[1];var n=this._doCryptBlock(e,this._invKeySchedule,s.INV_SUB_MIX,s.INV_SBOX),i=new t(16);return i.writeUInt32BE(n[0],0),i.writeUInt32BE(n[3],4),i.writeUInt32BE(n[2],8),i.writeUInt32BE(n[1],12),i},a.prototype.scrub=function(){n(this._keySchedule),n(this._invKeySchedule),n(this._key)},a.prototype._doCryptBlock=function(t,e,n,i){var o,a,f,s,u,h,c,d,l;a=t[0]^e[0],f=t[1]^e[1],s=t[2]^e[2],u=t[3]^e[3],o=4;for(var p=1;p<this._nRounds;p++)h=n[0][a>>>24]^n[1][f>>>16&255]^n[2][s>>>8&255]^n[3][255&u]^e[o++],c=n[0][f>>>24]^n[1][s>>>16&255]^n[2][u>>>8&255]^n[3][255&a]^e[o++],d=n[0][s>>>24]^n[1][u>>>16&255]^n[2][a>>>8&255]^n[3][255&f]^e[o++],l=n[0][u>>>24]^n[1][a>>>16&255]^n[2][f>>>8&255]^n[3][255&s]^e[o++],a=h,f=c,s=d,u=l;return h=(i[a>>>24]<<24|i[f>>>16&255]<<16|i[s>>>8&255]<<8|i[255&u])^e[o++],c=(i[f>>>24]<<24|i[s>>>16&255]<<16|i[u>>>8&255]<<8|i[255&a])^e[o++],d=(i[s>>>24]<<24|i[u>>>16&255]<<16|i[a>>>8&255]<<8|i[255&f])^e[o++],l=(i[u>>>24]<<24|i[a>>>16&255]<<16|i[f>>>8&255]<<8|i[255&s])^e[o++],[r(h),r(c),r(d),r(l)]},e.AES=a}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(t){for(var e,r=t.length;r--;){if(e=t.readUInt8(r),255!==e){e++,t.writeUInt8(e,r);break}t.writeUInt8(0,r)}}function i(t){var e=t._cipher.encryptBlock(t._prev);return n(t._prev),e}var o=r(69);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,i(e)]);var n=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),o(r,n)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._decoder=null,this._encoding=null}var i=r(31).Transform,o=r(2),a=r(52).StringDecoder;t.exports=n,o(n,i),n.prototype.update=function(t,r,n){"string"==typeof t&&(t=new e(t,r));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},n.prototype._flush=function(t){var e;try{this.push(this._final())}catch(t){e=t}finally{t(e)}},n.prototype._finalOrDigest=function(t){var r=this._final()||new e("");return t&&(r=this._toString(r,t,!0)),r},n.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new a(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n}}).call(e,r(1).Buffer)},function(t,e,r){"use strict";var n=e;n.base=r(545),n.short=r(548),n.mont=r(547),n.edwards=r(546)},function(t,e,r){"use strict";function n(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;for(var r=1732584193,n=-271733879,i=-1732584194,h=271733878,c=0;c<t.length;c+=16){var d=r,l=n,p=i,b=h;r=o(r,n,i,h,t[c+0],7,-680876936),h=o(h,r,n,i,t[c+1],12,-389564586),i=o(i,h,r,n,t[c+2],17,606105819),n=o(n,i,h,r,t[c+3],22,-1044525330),r=o(r,n,i,h,t[c+4],7,-176418897),h=o(h,r,n,i,t[c+5],12,1200080426),i=o(i,h,r,n,t[c+6],17,-1473231341),n=o(n,i,h,r,t[c+7],22,-45705983),r=o(r,n,i,h,t[c+8],7,1770035416),h=o(h,r,n,i,t[c+9],12,-1958414417),i=o(i,h,r,n,t[c+10],17,-42063),n=o(n,i,h,r,t[c+11],22,-1990404162),r=o(r,n,i,h,t[c+12],7,1804603682),h=o(h,r,n,i,t[c+13],12,-40341101),i=o(i,h,r,n,t[c+14],17,-1502002290),n=o(n,i,h,r,t[c+15],22,1236535329),r=a(r,n,i,h,t[c+1],5,-165796510),h=a(h,r,n,i,t[c+6],9,-1069501632),i=a(i,h,r,n,t[c+11],14,643717713),n=a(n,i,h,r,t[c+0],20,-373897302),r=a(r,n,i,h,t[c+5],5,-701558691),h=a(h,r,n,i,t[c+10],9,38016083),i=a(i,h,r,n,t[c+15],14,-660478335),n=a(n,i,h,r,t[c+4],20,-405537848),r=a(r,n,i,h,t[c+9],5,568446438),h=a(h,r,n,i,t[c+14],9,-1019803690),i=a(i,h,r,n,t[c+3],14,-187363961),n=a(n,i,h,r,t[c+8],20,1163531501),r=a(r,n,i,h,t[c+13],5,-1444681467),h=a(h,r,n,i,t[c+2],9,-51403784),i=a(i,h,r,n,t[c+7],14,1735328473),n=a(n,i,h,r,t[c+12],20,-1926607734),r=f(r,n,i,h,t[c+5],4,-378558),h=f(h,r,n,i,t[c+8],11,-2022574463),i=f(i,h,r,n,t[c+11],16,1839030562),n=f(n,i,h,r,t[c+14],23,-35309556),r=f(r,n,i,h,t[c+1],4,-1530992060),h=f(h,r,n,i,t[c+4],11,1272893353),i=f(i,h,r,n,t[c+7],16,-155497632),n=f(n,i,h,r,t[c+10],23,-1094730640),r=f(r,n,i,h,t[c+13],4,681279174),h=f(h,r,n,i,t[c+0],11,-358537222),i=f(i,h,r,n,t[c+3],16,-722521979),n=f(n,i,h,r,t[c+6],23,76029189),r=f(r,n,i,h,t[c+9],4,-640364487),h=f(h,r,n,i,t[c+12],11,-421815835),i=f(i,h,r,n,t[c+15],16,530742520),n=f(n,i,h,r,t[c+2],23,-995338651),r=s(r,n,i,h,t[c+0],6,-198630844),h=s(h,r,n,i,t[c+7],10,1126891415),i=s(i,h,r,n,t[c+14],15,-1416354905),n=s(n,i,h,r,t[c+5],21,-57434055),r=s(r,n,i,h,t[c+12],6,1700485571),h=s(h,r,n,i,t[c+3],10,-1894986606),i=s(i,h,r,n,t[c+10],15,-1051523),n=s(n,i,h,r,t[c+1],21,-2054922799),r=s(r,n,i,h,t[c+8],6,1873313359),h=s(h,r,n,i,t[c+15],10,-30611744),i=s(i,h,r,n,t[c+6],15,-1560198380),n=s(n,i,h,r,t[c+13],21,1309151649),r=s(r,n,i,h,t[c+4],6,-145523070),h=s(h,r,n,i,t[c+11],10,-1120210379),i=s(i,h,r,n,t[c+2],15,718787259),n=s(n,i,h,r,t[c+9],21,-343485551),r=u(r,d),n=u(n,l),i=u(i,p),h=u(h,b)}return Array(r,n,i,h)}function i(t,e,r,n,i,o){return u(h(u(u(e,t),u(n,o)),i),r)}function o(t,e,r,n,o,a,f){return i(e&r|~e&n,t,e,o,a,f)}function a(t,e,r,n,o,a,f){return i(e&n|r&~n,t,e,o,a,f)}function f(t,e,r,n,o,a,f){return i(e^r^n,t,e,o,a,f)}function s(t,e,r,n,o,a,f){return i(r^(e|~n),t,e,o,a,f)}function u(t,e){var r=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(r>>16);return n<<16|65535&r}function h(t,e){return t<<e|t>>>32-e}var c=r(565);t.exports=function(t){return c.hash(t,n,16)}},function(t,e,r){var n=e;n.bignum=r(70),n.define=r(580).define,n.base=r(71),n.constants=r(235),n.decoders=r(584),n.encoders=r(586)},function(t,e,r){(function(t){function r(t){var e,r;return e=t>f||t<0?(r=Math.abs(t)%f,t<0?f-r:r):t}function n(t){for(var e=0;e<t.length;t++)t[e]=0;return!1}function i(){this.SBOX=[],this.INV_SBOX=[],this.SUB_MIX=[[],[],[],[]],this.INV_SUB_MIX=[[],[],[],[]],this.init(),this.RCON=[0,1,2,4,8,16,32,64,128,27,54]}function o(t){for(var e=t.length/4,r=new Array(e),n=-1;++n<e;)r[n]=t.readUInt32BE(4*n);return r}function a(t){this._key=o(t),this._doReset()}var f=Math.pow(2,32);i.prototype.init=function(){var t,e,r,n,i,o,a,f,s,u;for(t=function(){var t,r;for(r=[],e=t=0;t<256;e=++t)e<128?r.push(e<<1):r.push(e<<1^283);return r}(),i=0,s=0,e=u=0;u<256;e=++u)r=s^s<<1^s<<2^s<<3^s<<4,r=r>>>8^255&r^99,this.SBOX[i]=r,this.INV_SBOX[r]=i,o=t[i],a=t[o],f=t[a],n=257*t[r]^16843008*r,this.SUB_MIX[0][i]=n<<24|n>>>8,this.SUB_MIX[1][i]=n<<16|n>>>16,this.SUB_MIX[2][i]=n<<8|n>>>24,this.SUB_MIX[3][i]=n,n=16843009*f^65537*a^257*o^16843008*i,this.INV_SUB_MIX[0][r]=n<<24|n>>>8,this.INV_SUB_MIX[1][r]=n<<16|n>>>16,this.INV_SUB_MIX[2][r]=n<<8|n>>>24,this.INV_SUB_MIX[3][r]=n,0===i?i=s=1:(i=o^t[t[t[f^o]]],s^=t[t[s]]);return!0};var s=new i;a.blockSize=16,a.prototype.blockSize=a.blockSize,a.keySize=32,a.prototype.keySize=a.keySize,a.prototype._doReset=function(){var t,e,r,n,i,o;for(r=this._key,e=r.length,this._nRounds=e+6,i=4*(this._nRounds+1),this._keySchedule=[],n=0;n<i;n++)this._keySchedule[n]=n<e?r[n]:(o=this._keySchedule[n-1],n%e===0?(o=o<<8|o>>>24,o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o],o^=s.RCON[n/e|0]<<24):e>6&&n%e===4?o=s.SBOX[o>>>24]<<24|s.SBOX[o>>>16&255]<<16|s.SBOX[o>>>8&255]<<8|s.SBOX[255&o]:void 0,this._keySchedule[n-e]^o);for(this._invKeySchedule=[],t=0;t<i;t++)n=i-t,o=this._keySchedule[n-(t%4?0:4)],this._invKeySchedule[t]=t<4||n<=4?o:s.INV_SUB_MIX[0][s.SBOX[o>>>24]]^s.INV_SUB_MIX[1][s.SBOX[o>>>16&255]]^s.INV_SUB_MIX[2][s.SBOX[o>>>8&255]]^s.INV_SUB_MIX[3][s.SBOX[255&o]];return!0},a.prototype.encryptBlock=function(e){e=o(new t(e));var r=this._doCryptBlock(e,this._keySchedule,s.SUB_MIX,s.SBOX),n=new t(16);return n.writeUInt32BE(r[0],0),n.writeUInt32BE(r[1],4),n.writeUInt32BE(r[2],8),n.writeUInt32BE(r[3],12),n},a.prototype.decryptBlock=function(e){e=o(new t(e));var r=[e[3],e[1]];e[1]=r[0],e[3]=r[1];var n=this._doCryptBlock(e,this._invKeySchedule,s.INV_SUB_MIX,s.INV_SBOX),i=new t(16);return i.writeUInt32BE(n[0],0),i.writeUInt32BE(n[3],4),i.writeUInt32BE(n[2],8),i.writeUInt32BE(n[1],12),i},a.prototype.scrub=function(){n(this._keySchedule),n(this._invKeySchedule),n(this._key)},a.prototype._doCryptBlock=function(t,e,n,i){var o,a,f,s,u,h,c,d,l;a=t[0]^e[0],f=t[1]^e[1],s=t[2]^e[2],u=t[3]^e[3],o=4;for(var p=1;p<this._nRounds;p++)h=n[0][a>>>24]^n[1][f>>>16&255]^n[2][s>>>8&255]^n[3][255&u]^e[o++],c=n[0][f>>>24]^n[1][s>>>16&255]^n[2][u>>>8&255]^n[3][255&a]^e[o++],d=n[0][s>>>24]^n[1][u>>>16&255]^n[2][a>>>8&255]^n[3][255&f]^e[o++],l=n[0][u>>>24]^n[1][a>>>16&255]^n[2][f>>>8&255]^n[3][255&s]^e[o++],a=h,f=c,s=d,u=l;return h=(i[a>>>24]<<24|i[f>>>16&255]<<16|i[s>>>8&255]<<8|i[255&u])^e[o++],c=(i[f>>>24]<<24|i[s>>>16&255]<<16|i[u>>>8&255]<<8|i[255&a])^e[o++],d=(i[s>>>24]<<24|i[u>>>16&255]<<16|i[a>>>8&255]<<8|i[255&f])^e[o++],l=(i[u>>>24]<<24|i[a>>>16&255]<<16|i[f>>>8&255]<<8|i[255&s])^e[o++],[r(h),r(c),r(d),r(l)]},e.AES=a}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(t){for(var e,r=t.length;r--;){if(e=t.readUInt8(r),255!==e){e++,t.writeUInt8(e,r);break}t.writeUInt8(0,r)}}function i(t){var e=t._cipher.encryptBlock(t._prev);return n(t._prev),e}var o=r(72);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,i(e)]);var n=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),o(r,n)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._decoder=null,this._encoding=null}var i=r(31).Transform,o=r(2),a=r(52).StringDecoder;t.exports=n,o(n,i),n.prototype.update=function(t,r,n){"string"==typeof t&&(t=new e(t,r));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},n.prototype._flush=function(t){var e;try{this.push(this._final())}catch(t){e=t}finally{t(e)}},n.prototype._finalOrDigest=function(t){var r=this._final()||new e("");return t&&(r=this._toString(r,t,!0)),r},n.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new a(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n}}).call(e,r(1).Buffer)},function(t,e){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!i(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,r,i,f,s,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var h=new Error('Uncaught, unspecified "error" event. ('+e+")");throw h.context=e,h}if(r=this._events[t],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:f=Array.prototype.slice.call(arguments,1),r.apply(this,f)}else if(o(r))for(f=Array.prototype.slice.call(arguments,1),u=r.slice(),i=u.length,s=0;s<i;s++)u[s].apply(this,f);return!0},r.prototype.addListener=function(t,e){var i;if(!n(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,n(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(i=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function r(){this.removeListener(t,r),i||(i=!0,e.apply(this,arguments))}if(!n(e))throw TypeError("listener must be a function");var i=!1;return r.listener=e,this.on(t,r),this},r.prototype.removeListener=function(t,e){var r,i,a,f;if(!n(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],a=r.length,i=-1,r===e||n(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(r)){for(f=a;f-- >0;)if(r[f]===e||r[f].listener&&r[f].listener===e){i=f;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],n(r))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?n(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(n(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e){t.exports={newInvalidAsn1Error:function(t){var e=new Error;return e.name="InvalidAsn1Error",e.message=t||"",e}}},function(t,e){t.exports={EOC:0,Boolean:1,Integer:2,BitString:3,OctetString:4,Null:5,OID:6,ObjectDescriptor:7,External:8,Real:9,Enumeration:10,PDV:11,Utf8String:12,RelativeOID:13,Sequence:16,Set:17,NumericString:18,PrintableString:19,T61String:20,VideotexString:21,IA5String:22,UTCTime:23,GeneralizedTime:24,GraphicString:25,VisibleString:26,GeneralString:28,UniversalString:29,CharacterString:30,BMPString:31,Constructor:32,Context:128}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(62),f=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(93),s=r(91),u=function(t){function e(t){n(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.hash=f.createHash(t),r}return o(e,t),a(e,[{key:"write",value:function(t){this.hash.update(t)}},{key:"getDigest",value:function(){return this.hash.digest()}}],[{key:"getLength",value:function(t){return f.createHash(t).digest().length}}]),e}(s);t.exports=u},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(261),a=function(){function t(){n(this,t)}return i(t,null,[{key:"getClassFromTypeId",value:function(e){if(e>Number.MAX_SAFE_INTEGER)throw new o("Type "+e+" is not supported");var r=!0,n=!1,i=void 0;try{for(var a,f=t.registeredTypes[Symbol.iterator]();!(r=(a=f.next()).done);r=!0){var s=a.value;if(e===s.typeId)return s.Class}}catch(t){n=!0,i=t}finally{try{!r&&f.return&&f.return()}finally{if(n)throw i}}throw new o("Type "+e+" is not supported")}},{key:"registerType",value:function(e){t.registeredTypes.push({typeId:e.TYPE_ID,Class:e})}}]),t}();a.registeredTypes=[],t.exports=a},function(t,e,r){"use strict";(function(e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(){r(this,t)}return n(t,null,[{key:"decode",value:function(t){var r=t.replace(/\-/g,"+").replace(/_/g,"/");return new e(r,"base64")}},{key:"encode",value:function(t){return t.toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}}]),t}();t.exports=i}).call(e,r(1).Buffer)},function(t,e,r){t.exports=!r(164)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(11),i=r(47),o=r(10);t.exports=function(t){for(var e=n(this),r=o(e.length),a=arguments.length,f=i(a>1?arguments[1]:void 0,r),s=a>2?arguments[2]:void 0,u=void 0===s?r:i(s,r);u>f;)e[f++]=t;return e}},function(t,e,r){"use strict";var n=r(9),i=r(37);t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},function(t,e,r){var n=r(6),i=r(4).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(7)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,r){t.exports=r(4).document&&document.documentElement},function(t,e,r){var n=r(6),i=r(132).set;t.exports=function(t,e,r){var o,a=e.constructor;return a!==r&&"function"==typeof a&&(o=a.prototype)!==r.prototype&&n(o)&&i&&i(t,o),t}},function(t,e,r){var n=r(56),i=r(7)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},function(t,e,r){var n=r(23);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){"use strict";var n=r(42),i=r(37),o=r(57),a={};r(14)(a,r(7)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(a,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(41),i=r(0),o=r(15),a=r(14),f=r(12),s=r(56),u=r(127),h=r(57),c=r(21),d=r(7)("iterator"),l=!([].keys&&"next"in[].keys()),p="@@iterator",b="keys",v="values",y=function(){return this};t.exports=function(t,e,r,m,g,w,_){u(r,e,m);var M,S,E,A=function(t){if(!l&&t in B)return B[t];switch(t){case b:return function(){return new r(this,t)};case v:return function(){return new r(this,t)}}return function(){return new r(this,t)}},k=e+" Iterator",x=g==v,I=!1,B=t.prototype,O=B[d]||B[p]||g&&B[g],R=O||A(g),P=g?x?A("entries"):R:void 0,T="Array"==e?B.entries||O:O;if(T&&(E=c(T.call(new t)),E!==Object.prototype&&(h(E,k,!0),n||f(E,d)||a(E,d,y))),x&&O&&O.name!==v&&(I=!0,R=function(){return O.call(this)}),n&&!_||!l&&!I&&B[d]||a(B,d,R),s[e]=R,s[k]=y,g)if(M={values:x?R:A(v),keys:w?R:A(b),entries:P},_)for(S in M)S in B||o(B,S,M[S]);else i(i.P+i.F*(l||I),e,M);return M}},function(t,e){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||r(-2e-17)!=-2e-17?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,r){var n=r(4),i=r(139).set,o=n.MutationObserver||n.WebKitMutationObserver,a=n.process,f=n.Promise,s="process"==r(23)(a);t.exports=function(){var t,e,r,u=function(){var n,i;for(s&&(n=a.domain)&&n.exit();t;){i=t.fn,t=t.next;try{i()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(s)r=function(){a.nextTick(u)};else if(o){var h=!0,c=document.createTextNode("");new o(u).observe(c,{characterData:!0}),r=function(){c.data=h=!h}}else if(f&&f.resolve){var d=f.resolve();r=function(){d.then(u)}}else r=function(){i.call(n,u)};return function(n){var i={fn:n,next:void 0};e&&(e.next=i),t||(t=i,r()),e=i}}},function(t,e,r){var n=r(6),i=r(3),o=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r(33)(Function.call,r(20).f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},function(t,e,r){var n=r(87)("keys"),i=r(48);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){var n=r(3),i=r(13),o=r(7)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||void 0==(r=n(a)[o])?e:i(r)}},function(t,e,r){var n=r(38),i=r(24);t.exports=function(t){return function(e,r){var o,a,f=String(i(e)),s=n(r),u=f.length;return s<0||s>=u?t?"":void 0:(o=f.charCodeAt(s),o<55296||o>56319||s+1===u||(a=f.charCodeAt(s+1))<56320||a>57343?t?f.charAt(s):o:t?f.slice(s,s+2):(o-55296<<10)+(a-56320)+65536)}}},function(t,e,r){var n=r(83),i=r(24);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,e,r){"use strict";var n=r(38),i=r(24);t.exports=function(t){var e=String(i(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,r){var n,i,o,a=r(33),f=r(82),s=r(123),u=r(120),h=r(4),c=h.process,d=h.setImmediate,l=h.clearImmediate,p=h.MessageChannel,b=0,v={},y="onreadystatechange",m=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},g=function(t){m.call(t.data)};d&&l||(d=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return v[++b]=function(){f("function"==typeof t?t:Function(t),e)},n(b),b},l=function(t){delete v[t]},"process"==r(23)(c)?n=function(t){c.nextTick(a(m,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=g,n=a(o.postMessage,o,1)):h.addEventListener&&"function"==typeof postMessage&&!h.importScripts?(n=function(t){h.postMessage(t+"","*")},h.addEventListener("message",g,!1)):n=y in u("script")?function(t){s.appendChild(u("script"))[y]=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:d,clear:l}},function(t,e,r){"use strict";var n=r(4),i=r(8),o=r(41),a=r(88),f=r(14),s=r(45),u=r(5),h=r(40),c=r(38),d=r(10),l=r(43).f,p=r(9).f,b=r(118),v=r(57),y="ArrayBuffer",m="DataView",g="prototype",w="Wrong length!",_="Wrong index!",M=n[y],S=n[m],E=n.Math,A=n.RangeError,k=n.Infinity,x=M,I=E.abs,B=E.pow,O=E.floor,R=E.log,P=E.LN2,T="buffer",j="byteLength",C="byteOffset",N=i?"_b":T,L=i?"_l":j,U=i?"_o":C,z=function(t,e,r){
var n,i,o,a=Array(r),f=8*r-e-1,s=(1<<f)-1,u=s>>1,h=23===e?B(2,-24)-B(2,-77):0,c=0,d=t<0||0===t&&1/t<0?1:0;for(t=I(t),t!=t||t===k?(i=t!=t?1:0,n=s):(n=O(R(t)/P),t*(o=B(2,-n))<1&&(n--,o*=2),t+=n+u>=1?h/o:h*B(2,1-u),t*o>=2&&(n++,o/=2),n+u>=s?(i=0,n=s):n+u>=1?(i=(t*o-1)*B(2,e),n+=u):(i=t*B(2,u-1)*B(2,e),n=0));e>=8;a[c++]=255&i,i/=256,e-=8);for(n=n<<e|i,f+=e;f>0;a[c++]=255&n,n/=256,f-=8);return a[--c]|=128*d,a},D=function(t,e,r){var n,i=8*r-e-1,o=(1<<i)-1,a=o>>1,f=i-7,s=r-1,u=t[s--],h=127&u;for(u>>=7;f>0;h=256*h+t[s],s--,f-=8);for(n=h&(1<<-f)-1,h>>=-f,f+=e;f>0;n=256*n+t[s],s--,f-=8);if(0===h)h=1-a;else{if(h===o)return n?NaN:u?-k:k;n+=B(2,e),h-=a}return(u?-1:1)*n*B(2,h-e)},q=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},F=function(t){return[255&t]},K=function(t){return[255&t,t>>8&255]},G=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},V=function(t){return z(t,52,8)},H=function(t){return z(t,23,4)},X=function(t,e,r){p(t[g],e,{get:function(){return this[r]}})},Y=function(t,e,r,n){var i=+r,o=c(i);if(i!=o||o<0||o+e>t[L])throw A(_);var a=t[N]._b,f=o+t[U],s=a.slice(f,f+e);return n?s:s.reverse()},W=function(t,e,r,n,i,o){var a=+r,f=c(a);if(a!=f||f<0||f+e>t[L])throw A(_);for(var s=t[N]._b,u=f+t[U],h=n(+i),d=0;d<e;d++)s[u+d]=h[o?d:e-d-1]},Z=function(t,e){h(t,M,y);var r=+e,n=d(r);if(r!=n)throw A(w);return n};if(a.ABV){if(!u(function(){new M})||!u(function(){new M(.5)})){M=function(t){return new x(Z(this,t))};for(var J,$=M[g]=x[g],Q=l(x),tt=0;Q.length>tt;)(J=Q[tt++])in M||f(M,J,x[J]);o||($.constructor=M)}var et=new S(new M(2)),rt=S[g].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||s(S[g],{setInt8:function(t,e){rt.call(this,t,e<<24>>24)},setUint8:function(t,e){rt.call(this,t,e<<24>>24)}},!0)}else M=function(t){var e=Z(this,t);this._b=b.call(Array(e),0),this[L]=e},S=function(t,e,r){h(this,S,m),h(t,M,m);var n=t[L],i=c(e);if(i<0||i>n)throw A("Wrong offset!");if(r=void 0===r?n-i:d(r),i+r>n)throw A(w);this[N]=t,this[U]=i,this[L]=r},i&&(X(M,j,"_l"),X(S,T,"_b"),X(S,j,"_l"),X(S,C,"_o")),s(S[g],{getInt8:function(t){return Y(this,1,t)[0]<<24>>24},getUint8:function(t){return Y(this,1,t)[0]},getInt16:function(t){var e=Y(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=Y(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return q(Y(this,4,t,arguments[1]))},getUint32:function(t){return q(Y(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return D(Y(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return D(Y(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){W(this,1,t,F,e)},setUint8:function(t,e){W(this,1,t,F,e)},setInt16:function(t,e){W(this,2,t,K,e,arguments[2])},setUint16:function(t,e){W(this,2,t,K,e,arguments[2])},setInt32:function(t,e){W(this,4,t,G,e,arguments[2])},setUint32:function(t,e){W(this,4,t,G,e,arguments[2])},setFloat32:function(t,e){W(this,4,t,H,e,arguments[2])},setFloat64:function(t,e){W(this,8,t,V,e,arguments[2])}});v(M,y),v(S,m),f(S[g],a.VIEW,!0),e[y]=M,e[m]=S},function(t,e,r){var n=r(4),i=r(32),o=r(41),a=r(189),f=r(9).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:a.f(t)})}},function(t,e,r){var n=r(64),i=r(7)("iterator"),o=r(56);t.exports=r(32).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){"use strict";var n=r(54),i=r(177),o=r(56),a=r(17);t.exports=r(128)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,r):"values"==e?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){t.exports=!r(199)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";e.utils=r(505),e.Cipher=r(502),e.DES=r(503),e.CBC=r(501),e.EDE=r(504)},function(t,e,r){(function(e){function n(t,r,n,o){e.isBuffer(t)||(t=new e(t,"binary")),r&&!e.isBuffer(r)&&(r=new e(r,"binary")),n/=8,o=o||0;for(var a,f,s=0,u=0,h=new e(n),c=new e(o),d=0,l=[];;){if(d++>0&&l.push(a),l.push(t),r&&l.push(r),a=i(e.concat(l)),l=[],f=0,n>0)for(;;){if(0===n)break;if(f===a.length)break;h[s++]=a[f],n--,f++}if(o>0&&f!==a.length)for(;;){if(0===o)break;if(f===a.length)break;c[u++]=a[f],o--,f++}if(0===n&&0===o)break}for(f=0;f<a.length;f++)a[f]=0;return{key:h,iv:c}}var i=r(105);t.exports=n}).call(e,r(1).Buffer)},function(t,e){e["aes-128-ecb"]={cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},e["aes-192-ecb"]={cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},e["aes-256-ecb"]={cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},e["aes-128-cbc"]={cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},e["aes-192-cbc"]={cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},e["aes-256-cbc"]={cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},e.aes128=e["aes-128-cbc"],e.aes192=e["aes-192-cbc"],e.aes256=e["aes-256-cbc"],e["aes-128-cfb"]={cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},e["aes-192-cfb"]={cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},e["aes-256-cfb"]={cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},e["aes-128-cfb8"]={cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},e["aes-192-cfb8"]={cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},e["aes-256-cfb8"]={cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},e["aes-128-cfb1"]={cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},e["aes-192-cfb1"]={cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},e["aes-256-cfb1"]={cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},e["aes-128-ofb"]={cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},e["aes-192-ofb"]={cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},e["aes-256-ofb"]={cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},e["aes-128-ctr"]={cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},e["aes-192-ctr"]={cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},e["aes-256-ctr"]={cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},e["aes-128-gcm"]={cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},e["aes-192-gcm"]={cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},e["aes-256-gcm"]={cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}},function(t,e,r){(function(e){function n(t,r,n,o){e.isBuffer(t)||(t=new e(t,"binary")),r&&!e.isBuffer(r)&&(r=new e(r,"binary")),n/=8,o=o||0;for(var a,f,s=0,u=0,h=new e(n),c=new e(o),d=0,l=[];;){if(d++>0&&l.push(a),l.push(t),r&&l.push(r),a=i(e.concat(l)),l=[],f=0,n>0)for(;;){if(0===n)break;if(f===a.length)break;h[s++]=a[f],n--,f++}if(o>0&&f!==a.length)for(;;){if(0===o)break;if(f===a.length)break;c[u++]=a[f],o--,f++}if(0===n&&0===o)break}for(f=0;f<a.length;f++)a[f]=0;return{key:h,iv:c}}var i=r(105);t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,r){a.call(this),t=t.toLowerCase(),"string"==typeof r&&(r=new e(r));var n="sha512"===t||"sha384"===t?128:64;this._alg=t,this._key=r,r.length>n?r=i(t).update(r).digest():r.length<n&&(r=e.concat([r,f],n));for(var o=this._ipad=new e(n),s=this._opad=new e(n),u=0;u<n;u++)o[u]=54^r[u],s[u]=92^r[u];this._hash=i(t).update(o)}var i=r(59),o=r(2),a=r(31).Transform,f=new e(128);f.fill(0),o(n,a),n.prototype.update=function(t,e){return this._hash.update(t,e),this},n.prototype._transform=function(t,e,r){this._hash.update(t),r()},n.prototype._flush=function(t){this.push(this.digest()),t()},n.prototype.digest=function(t){var e=this._hash.digest();return i(this._alg).update(this._opad).update(e).digest(t)},t.exports=function(t,e){return new n(t,e)}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){!function(t,e){"use strict";function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){return o.isBN(t)?t:(this.negative=0,this.words=null,this.length=0,this.red=null,void(null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))))}function a(t,e,r){for(var n=0,i=Math.min(t.length,r),o=e;o<i;o++){var a=t.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function f(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var f=t.charCodeAt(a)-48;i*=n,i+=f>=49?f-49+10:f>=17?f-17+10:f}return i}function s(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26;e[r]=(t.words[n]&1<<i)>>>i}return e}function u(t,e,r){r.negative=e.negative^t.negative;var n=t.length+e.length|0;r.length=n,n=n-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,f=67108863&a,s=a/67108864|0;r.words[0]=f;for(var u=1;u<n;u++){for(var h=s>>>26,c=67108863&s,d=Math.min(u,e.length-1),l=Math.max(0,u-t.length+1);l<=d;l++){var p=u-l|0;i=0|t.words[p],o=0|e.words[l],a=i*o+c,h+=a/67108864|0,c=67108863&a}r.words[u]=0|c,s=0|h}return 0!==s?r.words[u]=0|s:r.length--,r.strip()}function h(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var f=67108863&n,s=Math.min(o,e.length-1),u=Math.max(0,o-t.length+1);u<=s;u++){var h=o-u,c=0|t.words[h],d=0|e.words[u],l=c*d,p=67108863&l;a=a+(l/67108864|0)|0,p=p+f|0,f=67108863&p,a=a+(p>>>26)|0,i+=a>>>26,a&=67108863}r.words[o]=f,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}function c(t,e,r){var n=new d;return n.mulp(t,e,r)}function d(t,e){this.x=t,this.y=e}function l(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function p(){l.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){l.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){l.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function y(){l.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function m(t){if("string"==typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function g(t){m.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;var w;try{w=r(1).Buffer}catch(t){}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r);if("object"==typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36),t=t.toString().replace(/\s+/g,"");var i=0;"-"===t[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,f=0;if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<f&67108863,this.words[o+1]=a>>>26-f&67108863,f+=24,f>=26&&(f-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=t.length-6,n=0;r>=e;r-=6)i=a(t,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,o+=24,o>=26&&(o-=26,n++);r+6!==e&&(i=a(t,e,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=e)n++;n--,i=i/e|0;for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,h=r;h<s;h+=n)u=f(t,h,h+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==a){var c=1;for(u=f(t,h,t.length,e),h=0;h<a;h++)c*=e;this.imuln(c),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var _=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],M=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],S=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(t,e){t=t||10,e=0|e||1;var r;if(16===t||"hex"===t){r="";for(var i=0,o=0,a=0;a<this.length;a++){var f=this.words[a],s=(16777215&(f<<i|o)).toString(16);o=f>>>24-i&16777215,r=0!==o||a!==this.length-1?_[6-s.length]+s+r:s+r,i+=2,i>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var u=M[t],h=S[t];r="";var c=this.clone();for(c.negative=0;!c.isZero();){var d=c.modn(h).toString(t);c=c.idivn(h),r=c.isZero()?d+r:_[u-d.length]+d+r}for(this.isZero()&&(r="0"+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n("undefined"!=typeof w),this.toArrayLike(w,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,f,s="le"===e,u=new t(o),h=this.clone();if(s){for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[f]=a;for(;f<o;f++)u[f]=0}else{for(f=0;f<o-i;f++)u[f]=0;for(f=0;!h.isZero();f++)a=h.andln(255),h.iushrn(8),u[o-f-1]=a}return u},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0;return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,r=0;return 0===(8191&e)&&(r+=13,e>>>=13),0===(127&e)&&(r+=7,e>>>=7),0===(15&e)&&(r+=4,e>>>=4),0===(3&e)&&(r+=2,e>>>=2),0===(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e]);if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return n(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r;this.length>t.length?(e=this,r=t):(e=t,r=this);for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n];if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0);var r=t/26|0,i=t%26;return this._expand(r+1),e?this.words[r]=this.words[r]|1<<i:this.words[r]=this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();var r,n;this.length>t.length?(r=this,n=t):(r=t,n=this);for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var r=this.cmp(t);if(0===r)return this.negative=0,this.length=1,this.words[0]=0,this;var n,i;r>0?(n=this,i=t):(n=t,i=this);for(var o=0,a=0;a<i.length;a++)e=(0|n.words[a])-(0|i.words[a])+o,o=e>>26,this.words[a]=67108863&e;for(;0!==o&&a<n.length;a++)e=(0|n.words[a])+o,o=e>>26,this.words[a]=67108863&e;if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var E=function(t,e,r){var n,i,o,a=t.words,f=e.words,s=r.words,u=0,h=0|a[0],c=8191&h,d=h>>>13,l=0|a[1],p=8191&l,b=l>>>13,v=0|a[2],y=8191&v,m=v>>>13,g=0|a[3],w=8191&g,_=g>>>13,M=0|a[4],S=8191&M,E=M>>>13,A=0|a[5],k=8191&A,x=A>>>13,I=0|a[6],B=8191&I,O=I>>>13,R=0|a[7],P=8191&R,T=R>>>13,j=0|a[8],C=8191&j,N=j>>>13,L=0|a[9],U=8191&L,z=L>>>13,D=0|f[0],q=8191&D,F=D>>>13,K=0|f[1],G=8191&K,V=K>>>13,H=0|f[2],X=8191&H,Y=H>>>13,W=0|f[3],Z=8191&W,J=W>>>13,$=0|f[4],Q=8191&$,tt=$>>>13,et=0|f[5],rt=8191&et,nt=et>>>13,it=0|f[6],ot=8191&it,at=it>>>13,ft=0|f[7],st=8191&ft,ut=ft>>>13,ht=0|f[8],ct=8191&ht,dt=ht>>>13,lt=0|f[9],pt=8191&lt,bt=lt>>>13;r.negative=t.negative^e.negative,r.length=19,n=Math.imul(c,q),i=Math.imul(c,F),i=i+Math.imul(d,q)|0,o=Math.imul(d,F);var vt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(p,q),i=Math.imul(p,F),i=i+Math.imul(b,q)|0,o=Math.imul(b,F),n=n+Math.imul(c,G)|0,i=i+Math.imul(c,V)|0,i=i+Math.imul(d,G)|0,o=o+Math.imul(d,V)|0;var yt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(y,q),i=Math.imul(y,F),i=i+Math.imul(m,q)|0,o=Math.imul(m,F),n=n+Math.imul(p,G)|0,i=i+Math.imul(p,V)|0,i=i+Math.imul(b,G)|0,o=o+Math.imul(b,V)|0,n=n+Math.imul(c,X)|0,i=i+Math.imul(c,Y)|0,i=i+Math.imul(d,X)|0,o=o+Math.imul(d,Y)|0;var mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(w,q),i=Math.imul(w,F),i=i+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(y,G)|0,i=i+Math.imul(y,V)|0,i=i+Math.imul(m,G)|0,o=o+Math.imul(m,V)|0,n=n+Math.imul(p,X)|0,i=i+Math.imul(p,Y)|0,i=i+Math.imul(b,X)|0,o=o+Math.imul(b,Y)|0,n=n+Math.imul(c,Z)|0,i=i+Math.imul(c,J)|0,i=i+Math.imul(d,Z)|0,o=o+Math.imul(d,J)|0;var gt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(S,q),i=Math.imul(S,F),i=i+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,G)|0,i=i+Math.imul(w,V)|0,i=i+Math.imul(_,G)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(y,X)|0,i=i+Math.imul(y,Y)|0,i=i+Math.imul(m,X)|0,o=o+Math.imul(m,Y)|0,n=n+Math.imul(p,Z)|0,i=i+Math.imul(p,J)|0,i=i+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0,n=n+Math.imul(c,Q)|0,i=i+Math.imul(c,tt)|0,i=i+Math.imul(d,Q)|0,o=o+Math.imul(d,tt)|0;var wt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(k,q),i=Math.imul(k,F),i=i+Math.imul(x,q)|0,o=Math.imul(x,F),n=n+Math.imul(S,G)|0,i=i+Math.imul(S,V)|0,i=i+Math.imul(E,G)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,X)|0,i=i+Math.imul(w,Y)|0,i=i+Math.imul(_,X)|0,o=o+Math.imul(_,Y)|0,n=n+Math.imul(y,Z)|0,i=i+Math.imul(y,J)|0,i=i+Math.imul(m,Z)|0,o=o+Math.imul(m,J)|0,n=n+Math.imul(p,Q)|0,i=i+Math.imul(p,tt)|0,i=i+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0,n=n+Math.imul(c,rt)|0,i=i+Math.imul(c,nt)|0,i=i+Math.imul(d,rt)|0,o=o+Math.imul(d,nt)|0;var _t=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(B,q),i=Math.imul(B,F),i=i+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(k,G)|0,i=i+Math.imul(k,V)|0,i=i+Math.imul(x,G)|0,o=o+Math.imul(x,V)|0,n=n+Math.imul(S,X)|0,i=i+Math.imul(S,Y)|0,i=i+Math.imul(E,X)|0,o=o+Math.imul(E,Y)|0,n=n+Math.imul(w,Z)|0,i=i+Math.imul(w,J)|0,i=i+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(y,Q)|0,i=i+Math.imul(y,tt)|0,i=i+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0,n=n+Math.imul(p,rt)|0,i=i+Math.imul(p,nt)|0,i=i+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0,n=n+Math.imul(c,ot)|0,i=i+Math.imul(c,at)|0,i=i+Math.imul(d,ot)|0,o=o+Math.imul(d,at)|0;var Mt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(P,q),i=Math.imul(P,F),i=i+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(B,G)|0,i=i+Math.imul(B,V)|0,i=i+Math.imul(O,G)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(k,X)|0,i=i+Math.imul(k,Y)|0,i=i+Math.imul(x,X)|0,o=o+Math.imul(x,Y)|0,n=n+Math.imul(S,Z)|0,i=i+Math.imul(S,J)|0,i=i+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=i+Math.imul(w,tt)|0,i=i+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(y,rt)|0,i=i+Math.imul(y,nt)|0,i=i+Math.imul(m,rt)|0,o=o+Math.imul(m,nt)|0,n=n+Math.imul(p,ot)|0,i=i+Math.imul(p,at)|0,i=i+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0,n=n+Math.imul(c,st)|0,i=i+Math.imul(c,ut)|0,i=i+Math.imul(d,st)|0,o=o+Math.imul(d,ut)|0;var St=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(C,q),i=Math.imul(C,F),i=i+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(P,G)|0,i=i+Math.imul(P,V)|0,i=i+Math.imul(T,G)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(B,X)|0,i=i+Math.imul(B,Y)|0,i=i+Math.imul(O,X)|0,o=o+Math.imul(O,Y)|0,n=n+Math.imul(k,Z)|0,i=i+Math.imul(k,J)|0,i=i+Math.imul(x,Z)|0,o=o+Math.imul(x,J)|0,n=n+Math.imul(S,Q)|0,i=i+Math.imul(S,tt)|0,i=i+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=i+Math.imul(w,nt)|0,i=i+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(y,ot)|0,i=i+Math.imul(y,at)|0,i=i+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0,n=n+Math.imul(p,st)|0,i=i+Math.imul(p,ut)|0,i=i+Math.imul(b,st)|0,o=o+Math.imul(b,ut)|0,n=n+Math.imul(c,ct)|0,i=i+Math.imul(c,dt)|0,i=i+Math.imul(d,ct)|0,o=o+Math.imul(d,dt)|0;var Et=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(U,q),i=Math.imul(U,F),i=i+Math.imul(z,q)|0,o=Math.imul(z,F),n=n+Math.imul(C,G)|0,i=i+Math.imul(C,V)|0,i=i+Math.imul(N,G)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(P,X)|0,i=i+Math.imul(P,Y)|0,i=i+Math.imul(T,X)|0,o=o+Math.imul(T,Y)|0,n=n+Math.imul(B,Z)|0,i=i+Math.imul(B,J)|0,i=i+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(k,Q)|0,i=i+Math.imul(k,tt)|0,i=i+Math.imul(x,Q)|0,o=o+Math.imul(x,tt)|0,n=n+Math.imul(S,rt)|0,i=i+Math.imul(S,nt)|0,i=i+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=i+Math.imul(w,at)|0,i=i+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(y,st)|0,i=i+Math.imul(y,ut)|0,i=i+Math.imul(m,st)|0,o=o+Math.imul(m,ut)|0,n=n+Math.imul(p,ct)|0,i=i+Math.imul(p,dt)|0,i=i+Math.imul(b,ct)|0,o=o+Math.imul(b,dt)|0,n=n+Math.imul(c,pt)|0,i=i+Math.imul(c,bt)|0,i=i+Math.imul(d,pt)|0,o=o+Math.imul(d,bt)|0;var At=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(U,G),i=Math.imul(U,V),i=i+Math.imul(z,G)|0,o=Math.imul(z,V),n=n+Math.imul(C,X)|0,i=i+Math.imul(C,Y)|0,i=i+Math.imul(N,X)|0,o=o+Math.imul(N,Y)|0,n=n+Math.imul(P,Z)|0,i=i+Math.imul(P,J)|0,i=i+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(B,Q)|0,i=i+Math.imul(B,tt)|0,i=i+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(k,rt)|0,i=i+Math.imul(k,nt)|0,i=i+Math.imul(x,rt)|0,o=o+Math.imul(x,nt)|0,n=n+Math.imul(S,ot)|0,i=i+Math.imul(S,at)|0,i=i+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,st)|0,i=i+Math.imul(w,ut)|0,i=i+Math.imul(_,st)|0,o=o+Math.imul(_,ut)|0,n=n+Math.imul(y,ct)|0,i=i+Math.imul(y,dt)|0,i=i+Math.imul(m,ct)|0,o=o+Math.imul(m,dt)|0,n=n+Math.imul(p,pt)|0,i=i+Math.imul(p,bt)|0,i=i+Math.imul(b,pt)|0,o=o+Math.imul(b,bt)|0;var kt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(U,X),i=Math.imul(U,Y),i=i+Math.imul(z,X)|0,o=Math.imul(z,Y),n=n+Math.imul(C,Z)|0,i=i+Math.imul(C,J)|0,i=i+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(P,Q)|0,i=i+Math.imul(P,tt)|0,i=i+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(B,rt)|0,i=i+Math.imul(B,nt)|0,i=i+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(k,ot)|0,i=i+Math.imul(k,at)|0,i=i+Math.imul(x,ot)|0,o=o+Math.imul(x,at)|0,n=n+Math.imul(S,st)|0,i=i+Math.imul(S,ut)|0,i=i+Math.imul(E,st)|0,o=o+Math.imul(E,ut)|0,n=n+Math.imul(w,ct)|0,i=i+Math.imul(w,dt)|0,i=i+Math.imul(_,ct)|0,o=o+Math.imul(_,dt)|0,n=n+Math.imul(y,pt)|0,i=i+Math.imul(y,bt)|0,i=i+Math.imul(m,pt)|0,o=o+Math.imul(m,bt)|0;var xt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(U,Z),i=Math.imul(U,J),i=i+Math.imul(z,Z)|0,o=Math.imul(z,J),n=n+Math.imul(C,Q)|0,i=i+Math.imul(C,tt)|0,i=i+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(P,rt)|0,i=i+Math.imul(P,nt)|0,i=i+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(B,ot)|0,i=i+Math.imul(B,at)|0,i=i+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(k,st)|0,i=i+Math.imul(k,ut)|0,i=i+Math.imul(x,st)|0,o=o+Math.imul(x,ut)|0,n=n+Math.imul(S,ct)|0,i=i+Math.imul(S,dt)|0,i=i+Math.imul(E,ct)|0,o=o+Math.imul(E,dt)|0,n=n+Math.imul(w,pt)|0,i=i+Math.imul(w,bt)|0,i=i+Math.imul(_,pt)|0,o=o+Math.imul(_,bt)|0;var It=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(U,Q),i=Math.imul(U,tt),i=i+Math.imul(z,Q)|0,o=Math.imul(z,tt),n=n+Math.imul(C,rt)|0,i=i+Math.imul(C,nt)|0,i=i+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(P,ot)|0,i=i+Math.imul(P,at)|0,i=i+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(B,st)|0,i=i+Math.imul(B,ut)|0,i=i+Math.imul(O,st)|0,o=o+Math.imul(O,ut)|0,n=n+Math.imul(k,ct)|0,i=i+Math.imul(k,dt)|0,i=i+Math.imul(x,ct)|0,o=o+Math.imul(x,dt)|0,n=n+Math.imul(S,pt)|0,i=i+Math.imul(S,bt)|0,i=i+Math.imul(E,pt)|0,o=o+Math.imul(E,bt)|0;var Bt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(U,rt),i=Math.imul(U,nt),i=i+Math.imul(z,rt)|0,o=Math.imul(z,nt),n=n+Math.imul(C,ot)|0,i=i+Math.imul(C,at)|0,i=i+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(P,st)|0,i=i+Math.imul(P,ut)|0,i=i+Math.imul(T,st)|0,o=o+Math.imul(T,ut)|0,n=n+Math.imul(B,ct)|0,i=i+Math.imul(B,dt)|0,i=i+Math.imul(O,ct)|0,o=o+Math.imul(O,dt)|0,n=n+Math.imul(k,pt)|0,i=i+Math.imul(k,bt)|0,i=i+Math.imul(x,pt)|0,o=o+Math.imul(x,bt)|0;var Ot=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,n=Math.imul(U,ot),i=Math.imul(U,at),i=i+Math.imul(z,ot)|0,o=Math.imul(z,at),n=n+Math.imul(C,st)|0,i=i+Math.imul(C,ut)|0,i=i+Math.imul(N,st)|0,o=o+Math.imul(N,ut)|0,n=n+Math.imul(P,ct)|0,i=i+Math.imul(P,dt)|0,i=i+Math.imul(T,ct)|0,o=o+Math.imul(T,dt)|0,n=n+Math.imul(B,pt)|0,i=i+Math.imul(B,bt)|0,i=i+Math.imul(O,pt)|0,o=o+Math.imul(O,bt)|0;var Rt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(U,st),i=Math.imul(U,ut),i=i+Math.imul(z,st)|0,o=Math.imul(z,ut),n=n+Math.imul(C,ct)|0,i=i+Math.imul(C,dt)|0,i=i+Math.imul(N,ct)|0,o=o+Math.imul(N,dt)|0,n=n+Math.imul(P,pt)|0,i=i+Math.imul(P,bt)|0,i=i+Math.imul(T,pt)|0,o=o+Math.imul(T,bt)|0;var Pt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,n=Math.imul(U,ct),i=Math.imul(U,dt),i=i+Math.imul(z,ct)|0,o=Math.imul(z,dt),n=n+Math.imul(C,pt)|0,i=i+Math.imul(C,bt)|0,i=i+Math.imul(N,pt)|0,o=o+Math.imul(N,bt)|0;var Tt=(u+n|0)+((8191&i)<<13)|0;u=(o+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(U,pt),i=Math.imul(U,bt),i=i+Math.imul(z,pt)|0,o=Math.imul(z,bt);var jt=(u+n|0)+((8191&i)<<13)|0;return u=(o+(i>>>13)|0)+(jt>>>26)|0,jt&=67108863,s[0]=vt,s[1]=yt,s[2]=mt,s[3]=gt,s[4]=wt,s[5]=_t,s[6]=Mt,s[7]=St,s[8]=Et,s[9]=At,s[10]=kt,s[11]=xt,s[12]=It,s[13]=Bt,s[14]=Ot,s[15]=Rt,s[16]=Pt,s[17]=Tt,s[18]=jt,0!==u&&(s[19]=u,r.length++),r};Math.imul||(E=u),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length;return r=10===this.length&&10===t.length?E(this,t,e):n<63?u(this,t,e):n<1024?h(this,t,e):c(this,t,e)},d.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t);return e},d.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t;for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1;return n},d.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},d.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i);for(var a=1;a<i;a<<=1)for(var f=a<<1,s=Math.cos(2*Math.PI/f),u=Math.sin(2*Math.PI/f),h=0;h<i;h+=f)for(var c=s,d=u,l=0;l<a;l++){var p=r[h+l],b=n[h+l],v=r[h+l+a],y=n[h+l+a],m=c*v-d*y;y=c*y+d*v,v=m,r[h+l]=p+v,n[h+l]=b+y,r[h+l+a]=p-v,n[h+l+a]=b-y,
l!==f&&(m=s*c-u*d,d=s*d+u*c,c=m)}},d.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},d.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n];t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},d.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r;t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},d.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)r[a]=0;n(0===o),n(0===(o&-8192))},d.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e},d.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),f=new Array(n),s=new Array(n),u=new Array(n),h=new Array(n),c=new Array(n),d=r.words;d.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,u,n),this.transform(a,o,f,s,n,i),this.transform(u,o,h,c,n,i);for(var l=0;l<n;l++){var p=f[l]*h[l]-s[l]*c[l];s[l]=f[l]*c[l]+s[l]*h[l],f[l]=p}return this.conjugate(f,s,n),this.transform(f,s,d,o,n,i),this.conjugate(d,o,n),this.normalize13b(d,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),c(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"==typeof t),n(t<67108864);for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=s(t);if(0===e.length)return new o(1);for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0);var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(e=0;e<this.length;e++){var f=this.words[e]&o,s=(0|this.words[e])-f<<r;this.words[e]=s|a,a=f>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){n("number"==typeof t&&t>=0);var i;i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),f=67108863^67108863>>>o<<o,s=r;if(i-=a,i=Math.max(0,i),s){for(var u=0;u<a;u++)s.words[u]=this.words[u];s.length=a}if(0===a);else if(this.length>a)for(this.length-=a,u=0;u<this.length;u++)this.words[u]=this.words[u+a];else this.words[0]=0,this.length=1;var h=0;for(u=this.length-1;u>=0&&(0!==h||u>=i);u--){var c=0|this.words[u];this.words[u]=h<<26-o|c>>>o,h=c&f}return s&&0!==h&&(s.words[s.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return!1;var o=this.words[r];return!!(o&i)},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0);var e=t%26,r=(t-e)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o=t.length+r;this._expand(o);var a,f=0;for(i=0;i<t.length;i++){a=(0|this.words[i+r])+f;var s=(0|t.words[i])*e;a-=67108863&s,f=(a>>26)-(s/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+f,f=a>>26,this.words[i+r]=67108863&a;if(0===f)return this.strip();for(n(f===-1),f=0,i=0;i<this.length;i++)a=-(0|this.words[i])+f,f=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=this.length-t.length,n=this.clone(),i=t,a=0|i.words[i.length-1],f=this._countBits(a);r=26-f,0!==r&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,u=n.length-i.length;if("mod"!==e){s=new o(null),s.length=u+1,s.words=new Array(s.length);for(var h=0;h<s.length;h++)s.words[h]=0}var c=n.clone()._ishlnsubmul(i,1,u);0===c.negative&&(n=c,s&&(s.words[u]=1));for(var d=u-1;d>=0;d--){var l=67108864*(0|n.words[i.length+d])+(0|n.words[i.length+d-1]);for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,d);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,d),n.isZero()||(n.negative^=1);s&&(s.words[d]=l)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){if(n(!t.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var i,a,f;return 0!==this.negative&&0===t.negative?(f=this.neg().divmod(t,e),"mod"!==e&&(i=f.div.neg()),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(f=this.divmod(t.neg(),e),"mod"!==e&&(i=f.div.neg()),{div:i,mod:f.mod}):0!==(this.negative&t.negative)?(f=this.neg().divmod(t.neg(),e),"div"!==e&&(a=f.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:f.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863);for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t;return r},o.prototype.idivn=function(t){n(t<=67108863);for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e;this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=new o(0),s=new o(1),u=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++u;for(var h=r.clone(),c=e.clone();!e.isZero();){for(var d=0,l=1;0===(e.words[0]&l)&&d<26;++d,l<<=1);if(d>0)for(e.iushrn(d);d-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(h),a.isub(c)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0===(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(f.isOdd()||s.isOdd())&&(f.iadd(h),s.isub(c)),f.iushrn(1),s.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(f),a.isub(s)):(r.isub(e),f.isub(i),s.isub(a))}return{a:f,b:s,gcd:r.iushln(u)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),f=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var s=0,u=1;0===(e.words[0]&u)&&s<26;++s,u<<=1);if(s>0)for(e.iushrn(s);s-- >0;)i.isOdd()&&i.iadd(f),i.iushrn(1);for(var h=0,c=1;0===(r.words[0]&c)&&h<26;++h,c<<=1);if(h>0)for(r.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(f),a.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(a)):(r.isub(e),a.isub(i))}var d;return d=0===e.cmpn(1)?i:a,d.cmpn(0)<0&&d.iadd(t),d},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),r=t.clone();e.negative=0,r.negative=0;for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=e.cmp(r);if(i<0){var o=e;e=r,r=o}else if(0===i||0===r.cmpn(1))break;e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var f=0|this.words[a];f+=o,o=f>>>26,f&=67108863,this.words[a]=f}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e=t<0;if(0!==this.negative&&!e)return-1;if(0===this.negative&&e)return 1;this.strip();var r;if(this.length>1)r=1;else{e&&(t=-t),n(t<=67108863,"Number is too big");var i=0|this.words[0];r=i===t?0:i<t?-1:1}return 0!==this.negative?0|-r:r},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r];if(n!==i){n<i?e=-1:n>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return this.cmpn(t)===-1},o.prototype.lt=function(t){return this.cmp(t)===-1},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new m(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var A={k256:null,p224:null,p192:null,p25519:null};l.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},l.prototype.ireduce=function(t){var e,r=t;do this.split(r,this.tmp),r=this.imulK(r),r=r.iadd(this.tmp),e=r.bitLength();while(e>this.n);var n=e<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},l.prototype.split=function(t,e){t.iushrn(this.n,0,e)},l.prototype.imulK=function(t){return t.imul(this.k)},i(p,l),p.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i];if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},p.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r];e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(b,l),i(v,l),i(y,l),y.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n;n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function t(e){if(A[e])return A[e];var t;if("k256"===e)t=new p;else if("p224"===e)t=new b;else if("p192"===e)t=new v;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new y}return A[e]=t,t},m.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},m.prototype._verify2=function(t,e){n(0===(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},m.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},m.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},m.prototype.add=function(t,e){this._verify2(t,e);var r=t.add(e);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},m.prototype.iadd=function(t,e){this._verify2(t,e);var r=t.iadd(e);return r.cmp(this.m)>=0&&r.isub(this.m),r},m.prototype.sub=function(t,e){this._verify2(t,e);var r=t.sub(e);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},m.prototype.isub=function(t,e){this._verify2(t,e);var r=t.isub(e);return r.cmpn(0)<0&&r.iadd(this.m),r},m.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},m.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},m.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},m.prototype.isqr=function(t){return this.imul(t,t.clone())},m.prototype.sqr=function(t){return this.mul(t,t)},m.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(n(e%2===1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var f=new o(1).toRed(this),s=f.redNeg(),u=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new o(2*h*h).toRed(this);0!==this.pow(h,u).cmp(s);)h.redIAdd(s);for(var c=this.pow(h,i),d=this.pow(t,i.addn(1).iushrn(1)),l=this.pow(t,i),p=a;0!==l.cmp(f);){for(var b=l,v=0;0!==b.cmp(f);v++)b=b.redSqr();n(v<p);var y=this.pow(c,new o(1).iushln(p-v-1));d=d.redMul(y),c=y.redSqr(),l=l.redMul(c),p=v}return d},m.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},m.prototype.pow=function(t,e){if(e.isZero())return new o(1);if(0===e.cmpn(1))return t.clone();var r=4,n=new Array(1<<r);n[0]=new o(1).toRed(this),n[1]=t;for(var i=2;i<n.length;i++)n[i]=this.mul(n[i-1],t);var a=n[0],f=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),i=e.length-1;i>=0;i--){for(var h=e.words[i],c=u-1;c>=0;c--){var d=h>>c&1;a!==n[0]&&(a=this.sqr(a)),0!==d||0!==f?(f<<=1,f|=d,s++,(s===r||0===i&&0===c)&&(a=this.mul(a,n[f]),s=0,f=0)):s=0}u=26}return a},m.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},m.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new g(t)},i(g,m),g.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},g.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},g.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},g.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},g.prototype.invm=function(t){var e=this.imod(t._invmp(this.m).mul(this.r2));return e._forceRed(this)}}("undefined"==typeof t||t,this)}).call(e,r(92)(t))},function(t,e,r){(function(t,n){var i=r(149),o=r(576);e.pbkdf2=function(t,r,n,i,a,f){if("function"==typeof a&&(f=a,a=void 0),o(n,i),"function"!=typeof f)throw new Error("No callback provided to pbkdf2");setTimeout(function(){f(null,e.pbkdf2Sync(t,r,n,i,a))})};var a;if(t.browser)a="utf-8";else{var f=parseInt(t.version.split(".")[0].slice(1),10);a=f>=6?"utf-8":"binary"}e.pbkdf2Sync=function(t,e,r,f,s){n.isBuffer(t)||(t=new n(t,a)),n.isBuffer(e)||(e=new n(e,a)),o(r,f),s=s||"sha1";var u,h=1,c=new n(f),d=new n(e.length+4);e.copy(d,0,0,e.length);for(var l,p,b=1;b<=h;b++){d.writeUInt32BE(b,e.length);var v=i(s,t).update(d).digest();u||(u=v.length,p=new n(u),h=Math.ceil(f/u),l=f-(h-1)*u),v.copy(p,0,0,u);for(var y=1;y<r;y++){v=i(s,t).update(v).digest();for(var m=0;m<u;m++)p[m]^=v[m]}var g=(b-1)*u,w=b===h?l:u;p.copy(c,g,0,w)}return c}}).call(e,r(26),r(1).Buffer)},function(t,e){e["aes-128-ecb"]={cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},e["aes-192-ecb"]={cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},e["aes-256-ecb"]={cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},e["aes-128-cbc"]={cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},e["aes-192-cbc"]={cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},e["aes-256-cbc"]={cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},e.aes128=e["aes-128-cbc"],e.aes192=e["aes-192-cbc"],e.aes256=e["aes-256-cbc"],e["aes-128-cfb"]={cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},e["aes-192-cfb"]={cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},e["aes-256-cfb"]={cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},e["aes-128-cfb8"]={cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},e["aes-192-cfb8"]={cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},e["aes-256-cfb8"]={cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},e["aes-128-cfb1"]={cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},e["aes-192-cfb1"]={cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},e["aes-256-cfb1"]={cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},e["aes-128-ofb"]={cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},e["aes-192-ofb"]={cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},e["aes-256-ofb"]={cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},e["aes-128-ctr"]={cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},e["aes-192-ctr"]={cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},e["aes-256-ctr"]={cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},e["aes-128-gcm"]={cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},e["aes-192-gcm"]={cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},e["aes-256-gcm"]={cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}},function(t,e,r){(function(e){function n(t,r,n,o){e.isBuffer(t)||(t=new e(t,"binary")),r&&!e.isBuffer(r)&&(r=new e(r,"binary")),n/=8,o=o||0;for(var a,f,s=0,u=0,h=new e(n),c=new e(o),d=0,l=[];;){if(d++>0&&l.push(a),l.push(t),r&&l.push(r),a=i(e.concat(l)),l=[],f=0,n>0)for(;;){if(0===n)break;if(f===a.length)break;h[s++]=a[f],n--,f++}if(o>0&&f!==a.length)for(;;){if(0===o)break;if(f===a.length)break;c[u++]=a[f],o--,f++}if(0===n&&0===o)break}for(f=0;f<a.length;f++)a[f]=0;return{key:h,iv:c}}var i=r(105);t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t){this.afterTransform=function(e,r){return i(t,e,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(t,e,r){var n=t._transformState;n.transforming=!1;var i=n.writecb;if(!i)return t.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&t.push(r),i(e);var o=t._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function o(t){if(!(this instanceof o))return new o(t);f.call(this,t),this._transformState=new n(this);var e=this;this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(t){a(e,t)}):a(e)})}function a(t,e){if(e)return t.emit("error",e);var r=t._writableState,n=t._transformState;if(r.length)throw new Error("Calling transform done when ws.length != 0");if(n.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}t.exports=o;var f=r(51),s=r(73);s.inherits=r(74),s.inherits(o,f),o.prototype.push=function(t,e){return this._transformState.needTransform=!1,f.prototype.push.call(this,t,e)},o.prototype._transform=function(t,e,r){throw new Error("Not implemented")},o.prototype._write=function(t,e,r){var n=this._transformState;if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}},function(t,e,r){"use strict";(function(e,n){function i(){}function o(t,e,r){this.chunk=t,this.encoding=e,this.callback=r,this.next=null}function a(t,e){R=R||r(51),t=t||{},this.objectMode=!!t.objectMode,e instanceof R&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var n=t.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var o=t.decodeStrings===!1;this.decodeStrings=!o,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){b(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new S(this)}function f(t){return R=R||r(51),this instanceof f||this instanceof R?(this._writableState=new a(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev)),void x.call(this)):new f(t)}function s(t,e){var r=new Error("write after end");t.emit("error",r),E(e,r)}function u(t,e,r,n){var i=!0,o=!1;return null===r?o=new TypeError("May not write null values to stream"):B.isBuffer(r)||"string"==typeof r||void 0===r||e.objectMode||(o=new TypeError("Invalid non-string/buffer chunk")),o&&(t.emit("error",o),E(n,o),i=!1),i}function h(t,e,r){return t.objectMode||t.decodeStrings===!1||"string"!=typeof e||(e=O.from(e,r)),e}function c(t,e,r,n,i){r=h(e,r,n),B.isBuffer(r)&&(n="buffer");var a=e.objectMode?1:r.length;e.length+=a;var f=e.length<e.highWaterMark;if(f||(e.needDrain=!0),e.writing||e.corked){var s=e.lastBufferedRequest;e.lastBufferedRequest=new o(r,n,i),s?s.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else d(t,e,!1,a,r,n,i);return f}function d(t,e,r,n,i,o,a){e.writelen=n,e.writecb=a,e.writing=!0,e.sync=!0,r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function l(t,e,r,n,i){--e.pendingcb,r?E(i,n):i(n),t._writableState.errorEmitted=!0,t.emit("error",n)}function p(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function b(t,e){var r=t._writableState,n=r.sync,i=r.writecb;if(p(r),e)l(t,r,n,e,i);else{var o=g(r);o||r.corked||r.bufferProcessing||!r.bufferedRequest||m(t,r),n?A(v,t,r,o,i):v(t,r,o,i)}}function v(t,e,r,n){r||y(t,e),e.pendingcb--,n(),_(t,e)}function y(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function m(t,e){e.bufferProcessing=!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var n=e.bufferedRequestCount,i=new Array(n),o=e.corkedRequestsFree;o.entry=r;for(var a=0;r;)i[a]=r,r=r.next,a+=1;d(t,e,!0,e.length,i,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new S(e)}else{for(;r;){var f=r.chunk,s=r.encoding,u=r.callback,h=e.objectMode?1:f.length;if(d(t,e,!1,h,f,s,u),r=r.next,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequestCount=0,e.bufferedRequest=r,e.bufferProcessing=!1}function g(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function w(t,e){e.prefinished||(e.prefinished=!0,t.emit("prefinish"))}function _(t,e){var r=g(e);return r&&(0===e.pendingcb?(w(t,e),e.finished=!0,t.emit("finish")):w(t,e)),r}function M(t,e,r){e.ending=!0,_(t,e),r&&(e.finished?E(r):t.once("finish",r)),e.ended=!0,t.writable=!1}function S(t){var e=this;this.next=null,this.entry=null,this.finish=function(r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}}t.exports=f;var E=r(157),A=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?n:E;f.WritableState=a;var k=r(73);k.inherits=r(74);var x,I={deprecate:r(598)};!function(){try{x=r(31)}catch(t){}finally{x||(x=r(110).EventEmitter)}}();var B=r(1).Buffer,O=r(156);k.inherits(f,x);var R;a.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(a.prototype,"buffer",{get:I.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(t){}}();var R;f.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},f.prototype.write=function(t,e,r){var n=this._writableState,o=!1;return"function"==typeof e&&(r=e,e=null),B.isBuffer(t)?e="buffer":e||(e=n.defaultEncoding),"function"!=typeof r&&(r=i),n.ended?s(this,r):u(this,n,t,r)&&(n.pendingcb++,o=c(this,n,t,e,r)),o},f.prototype.cork=function(){var t=this._writableState;t.corked++},f.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||m(this,t))},f.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},f.prototype._write=function(t,e,r){r(new Error("not implemented"))},f.prototype._writev=null,f.prototype.end=function(t,e,r){var n=this._writableState;"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!==t&&void 0!==t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||M(this,n,r)}}).call(e,r(26),r(158).setImmediate)},function(t,e,r){"use strict";(function(t){var n=r(1),i=n.Buffer,o=n.SlowBuffer,a=n.kMaxLength||2147483647;e.alloc=function(t,e,r){if("function"==typeof i.alloc)return i.alloc(t,e,r);if("number"==typeof r)throw new TypeError("encoding must not be number");if("number"!=typeof t)throw new TypeError("size must be a number");if(t>a)throw new RangeError("size is too large");var n=r,o=e;void 0===o&&(n=void 0,o=0);var f=new i(t);if("string"==typeof o)for(var s=new i(o,n),u=s.length,h=-1;++h<t;)f[h]=s[h%u];else f.fill(o);return f},e.allocUnsafe=function(t){if("function"==typeof i.allocUnsafe)return i.allocUnsafe(t);if("number"!=typeof t)throw new TypeError("size must be a number");if(t>a)throw new RangeError("size is too large");return new i(t)},e.from=function(e,r,n){if("function"==typeof i.from&&(!t.Uint8Array||Uint8Array.from!==i.from))return i.from(e,r,n);if("number"==typeof e)throw new TypeError('"value" argument must not be a number');if("string"==typeof e)return new i(e,r);if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer){var o=r;if(1===arguments.length)return new i(e);"undefined"==typeof o&&(o=0);var a=n;if("undefined"==typeof a&&(a=e.byteLength-o),o>=e.byteLength)throw new RangeError("'offset' is out of bounds");if(a>e.byteLength-o)throw new RangeError("'length' is out of bounds");return new i(e.slice(o,o+a))}if(i.isBuffer(e)){var f=new i(e.length);return e.copy(f,0,0,e.length),f}if(e){if(Array.isArray(e)||"undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return new i(e);if("Buffer"===e.type&&Array.isArray(e.data))return new i(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")},e.allocUnsafeSlow=function(t){if("function"==typeof i.allocUnsafeSlow)return i.allocUnsafeSlow(t);if("number"!=typeof t)throw new TypeError("size must be a number");if(t>=a)throw new RangeError("size is too large");return new o(t)}}).call(e,r(39))},function(t,e,r){"use strict";(function(e){function r(t,r,n,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function');var o,a,f=arguments.length;switch(f){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick(function(){t.call(null,r)});case 3:return e.nextTick(function(){t.call(null,r,n)});case 4:return e.nextTick(function(){t.call(null,r,n,i)});default:for(o=new Array(f-1),a=0;a<o.length;)o[a++]=arguments[a];return e.nextTick(function(){t.apply(null,o)})}}!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports=r:t.exports=e.nextTick;
}).call(e,r(26))},function(t,e,r){(function(t,n){function i(t,e){this._id=t,this._clearFn=e}var o=r(26).nextTick,a=Function.prototype.apply,f=Array.prototype.slice,s={},u=0;e.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var r=u++,n=!(arguments.length<2)&&f.call(arguments,1);return s[r]=!0,o(function(){s[r]&&(n?t.apply(null,n):t.call(null),e.clearImmediate(r))}),r},e.clearImmediate="function"==typeof n?n:function(t){delete s[t]}}).call(e,r(158).setImmediate,r(158).clearImmediate)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(62),f=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(62),f=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(257).Ber,a=65537,f=function(){function t(){n(this,t)}return i(t,null,[{key:"modulusToPem",value:function(t){if(0===t[0])throw new Error("Modulus may not start with zero");128&t[0]&&(t=e.concat([new e([0]),t]));var r=new o.Writer;return r.startSequence(),r.writeBuffer(t,2),r.writeInt(a),r.endSequence(),"-----BEGIN RSA PUBLIC KEY-----\n"+r.buffer.toString("base64").match(/.{1,64}/g).join("\n")+"\n-----END RSA PUBLIC KEY-----\n"}},{key:"modulusFromPrivateKey",value:function(t){var r=t.replace("-----BEGIN RSA PRIVATE KEY-----","").replace("-----END RSA PRIVATE KEY-----","").replace(/\s+|\n\r|\n|\r$/gm,""),n=new e(r,"base64"),i=new o.Reader(n);i.readSequence(),i.readString(2,!0);var a=i.readString(2,!0);return 0===a[0]?a.slice(1):a}}]),t}();t.exports=f}).call(e,r(1).Buffer)},function(t,e,r){r(281),t.exports=r(163).Number.isInteger},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(23);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=n(t))throw TypeError(e);return+t}},function(t,e,r){"use strict";var n=r(11),i=r(47),o=r(10);t.exports=[].copyWithin||function(t,e){var r=n(this),a=o(r.length),f=i(t,a),s=i(e,a),u=arguments.length>2?arguments[2]:void 0,h=Math.min((void 0===u?a:i(u,a))-s,a-f),c=1;for(s<f&&f<s+h&&(c=-1,s+=h-1,f+=h-1);h-- >0;)s in r?r[f]=r[s]:delete r[f],f+=c,s+=c;return r}},function(t,e,r){var n=r(55);t.exports=function(t,e){var r=[];return n(t,!1,r.push,r,e),r}},function(t,e,r){var n=r(13),i=r(11),o=r(65),a=r(10);t.exports=function(t,e,r,f,s){n(e);var u=i(t),h=o(u),c=a(u.length),d=s?c-1:0,l=s?-1:1;if(r<2)for(;;){if(d in h){f=h[d],d+=l;break}if(d+=l,s?d<0:c<=d)throw TypeError("Reduce of empty array with no initial value")}for(;s?d>=0:c>d;d+=l)d in h&&(f=e(f,h[d],d,u));return f}},function(t,e,r){"use strict";var n=r(13),i=r(6),o=r(82),a=[].slice,f={},s=function(t,e,r){if(!(e in f)){for(var n=[],i=0;i<e;i++)n[i]="a["+i+"]";f[e]=Function("F,a","return new F("+n.join(",")+")")}return f[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=a.call(arguments,1),f=function(){var n=r.concat(a.call(arguments));return this instanceof f?s(e,n.length,n):o(e,n,t)};return i(e.prototype)&&(f.prototype=e.prototype),f}},function(t,e,r){"use strict";var n=r(9).f,i=r(42),o=r(45),a=r(33),f=r(40),s=r(24),u=r(55),h=r(128),c=r(177),d=r(46),l=r(8),p=r(36).fastKey,b=l?"_s":"size",v=function(t,e){var r,n=p(e);if("F"!==n)return t._i[n];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,h){var c=t(function(t,n){f(t,c,e,"_i"),t._i=i(null),t._f=void 0,t._l=void 0,t[b]=0,void 0!=n&&u(n,r,t[h],t)});return o(c.prototype,{clear:function(){for(var t=this,e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[b]=0},delete:function(t){var e=this,r=v(e,t);if(r){var n=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=n),n&&(n.p=i),e._f==r&&(e._f=n),e._l==r&&(e._l=i),e[b]--}return!!r},forEach:function(t){f(this,c,"forEach");for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!v(this,t)}}),l&&n(c.prototype,"size",{get:function(){return s(this[b])}}),c},def:function(t,e,r){var n,i,o=v(t,e);return o?o.v=r:(t._l=o={i:i=p(e,!0),k:e,v:r,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[b]++,"F"!==i&&(t._i[i]=o)),t},getEntry:v,setStrong:function(t,e,r){h(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==e?c(0,r.k):"values"==e?c(0,r.v):c(0,[r.k,r.v]):(t._t=void 0,c(1))},r?"entries":"values",!r,!0),d(e)}}},function(t,e,r){var n=r(64),i=r(168);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,r){"use strict";var n=r(45),i=r(36).getWeak,o=r(3),a=r(6),f=r(40),s=r(55),u=r(27),h=r(12),c=u(5),d=u(6),l=0,p=function(t){return t._l||(t._l=new b)},b=function(){this.a=[]},v=function(t,e){return c(t.a,function(t){return t[0]===e})};b.prototype={get:function(t){var e=v(this,t);if(e)return e[1]},has:function(t){return!!v(this,t)},set:function(t,e){var r=v(this,t);r?r[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,o){var u=t(function(t,n){f(t,u,e,"_i"),t._i=l++,t._l=void 0,void 0!=n&&s(n,r,t[o],t)});return n(u.prototype,{delete:function(t){if(!a(t))return!1;var e=i(t);return e===!0?p(this).delete(t):e&&h(e,this._i)&&delete e[this._i]},has:function(t){if(!a(t))return!1;var e=i(t);return e===!0?p(this).has(t):e&&h(e,this._i)}}),u},def:function(t,e,r){var n=i(o(e),!0);return n===!0?p(t).set(e,r):n[t._i]=r,t},ufstore:p}},function(t,e,r){t.exports=!r(8)&&!r(5)(function(){return 7!=Object.defineProperty(r(120)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(6),i=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&i(t)===t}},function(t,e,r){var n=r(3);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,r){"use strict";var n=r(44),i=r(86),o=r(66),a=r(11),f=r(65),s=Object.assign;t.exports=!s||r(5)(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=s({},t)[r]||Object.keys(s({},e)).join("")!=n})?function(t,e){for(var r=a(t),s=arguments.length,u=1,h=i.f,c=o.f;s>u;)for(var d,l=f(arguments[u++]),p=h?n(l).concat(h(l)):n(l),b=p.length,v=0;b>v;)c.call(l,d=p[v++])&&(r[d]=l[d]);return r}:s},function(t,e,r){var n=r(9),i=r(3),o=r(44);t.exports=r(8)?Object.defineProperties:function(t,e){i(t);for(var r,a=o(e),f=a.length,s=0;f>s;)n.f(t,r=a[s++],e[r]);return t}},function(t,e,r){var n=r(17),i=r(43).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return i(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?f(t):i(n(t))}},function(t,e,r){var n=r(12),i=r(17),o=r(78)(!1),a=r(133)("IE_PROTO");t.exports=function(t,e){var r,f=i(t),s=0,u=[];for(r in f)r!=a&&n(f,r)&&u.push(r);for(;e.length>s;)n(f,r=e[s++])&&(~o(u,r)||u.push(r));return u}},function(t,e,r){var n=r(44),i=r(17),o=r(66).f;t.exports=function(t){return function(e){for(var r,a=i(e),f=n(a),s=f.length,u=0,h=[];s>u;)o.call(a,r=f[u++])&&h.push(t?[r,a[r]]:a[r]);return h}}},function(t,e,r){var n=r(43),i=r(86),o=r(3),a=r(4).Reflect;t.exports=a&&a.ownKeys||function(t){var e=n.f(o(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(4).parseFloat,i=r(58).trim;t.exports=1/n(r(138)+"-0")!==-(1/0)?function(t){var e=i(String(t),3),r=n(e);return 0===r&&"-"==e.charAt(0)?-0:r}:n},function(t,e,r){var n=r(4).parseInt,i=r(58).trim,o=r(138),a=/^[\-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=i(String(t),3);return n(r,e>>>0||(a.test(r)?16:10))}:n},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,r){var n=r(10),i=r(137),o=r(24);t.exports=function(t,e,r,a){var f=String(o(t)),s=f.length,u=void 0===r?" ":String(r),h=n(e);if(h<=s||""==u)return f;var c=h-s,d=i.call(u,Math.ceil(c/u.length));return d.length>c&&(d=d.slice(0,c)),a?d+f:f+d}},function(t,e,r){e.f=r(7)},function(t,e,r){"use strict";var n=r(171);t.exports=r(79)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=n.getEntry(this,t);return e&&e.v},set:function(t,e){return n.def(this,0===t?0:t,e)}},n,!0)},function(t,e,r){r(8)&&"g"!=/./g.flags&&r(9).f(RegExp.prototype,"flags",{configurable:!0,get:r(81)})},function(t,e,r){"use strict";var n=r(171);t.exports=r(79)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(this,t=0===t?0:t,t)}},n)},function(t,e,r){"use strict";var n,i=r(27)(0),o=r(15),a=r(36),f=r(179),s=r(173),u=r(6),h=a.getWeak,c=Object.isExtensible,d=s.ufstore,l={},p=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return e===!0?d(this).get(t):e?e[this._i]:void 0}},set:function(t,e){return s.def(this,t,e)}},v=t.exports=r(79)("WeakMap",p,b,s,!0,!0);7!=(new v).set((Object.freeze||Object)(l),7).get(l)&&(n=s.getConstructor(p),f(n.prototype,b),a.NEED=!0,i(["delete","has","get","set"],function(t){var e=v.prototype,r=e[t];o(e,t,function(e,i){if(u(e)&&!c(e)){this._f||(this._f=new n);var o=this._f[t](e,i);return"set"==t?this:o}return r.call(this,e,i)})}))},function(t,e){function r(t){throw new Error("Cannot find module '"+t+"'.")}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=194},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(t){function e(t){r(this,e);var i=n(this,Object.getPrototypeOf(e).call(this));return Object.defineProperty(i,"message",{configurable:!0,enumerable:!1,value:void 0!==t?String(t):""}),Object.defineProperty(i,"name",{configurable:!0,enumerable:!1,value:i.constructor.name}),Error.captureStackTrace&&Error.captureStackTrace(i,i.constructor),i}return i(e,t),e}(Error);t.exports=o},function(t,e,r){r(486),t.exports=r(197).Number.isInteger},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(200),i=r(197),o=r(478),a=r(480),f="prototype",s=function(t,e,r){var u,h,c,d=t&s.F,l=t&s.G,p=t&s.S,b=t&s.P,v=t&s.B,y=t&s.W,m=l?i:i[e]||(i[e]={}),g=m[f],w=l?n:p?n[e]:(n[e]||{})[f];l&&(r=e);for(u in r)h=!d&&w&&void 0!==w[u],h&&u in m||(c=h?w[u]:r[u],m[u]=l&&"function"!=typeof w[u]?r[u]:v&&h?o(c,n):y&&w[u]==c?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[f]=t[f],e}(c):b&&"function"==typeof c?o(Function.call,c):c,b&&((m.virtual||(m.virtual={}))[u]=c,t&s.R&&g&&!g[u]&&a(g,u,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){"use strict";t.exports=r(473)},function(t,e,r){"use strict";(function(e){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function n(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function o(t){return Object.prototype.toString.call(t)}function a(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function f(t){if(w.isFunction(t)){if(S)return t.name;var e=t.toString(),r=e.match(A);return r&&r[1]}}function s(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function u(t){if(S||!w.isFunction(t))return w.inspect(t);var e=f(t),r=e?": "+e:"";return"[Function"+r+"]"}function h(t){return s(u(t.actual),128)+" "+t.operator+" "+s(u(t.expected),128)}function c(t,e,r,n,i){throw new E.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function d(t,e){t||c(t,!0,e,"==",E.ok)}function l(t,e,r,f){if(t===e)return!0;if(i(t)&&i(e))return 0===n(t,e);if(w.isDate(t)&&w.isDate(e))return t.getTime()===e.getTime();if(w.isRegExp(t)&&w.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(a(t)&&a(e)&&o(t)===o(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===n(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;f=f||{actual:[],expected:[]};var s=f.actual.indexOf(t);return s!==-1&&s===f.expected.indexOf(e)||(f.actual.push(t),f.expected.push(e),b(t,e,r,f))}return r?t===e:t==e}function p(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function b(t,e,r,n){if(null===t||void 0===t||null===e||void 0===e)return!1;if(w.isPrimitive(t)||w.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=p(t),o=p(e);if(i&&!o||!i&&o)return!1;if(i)return t=M.call(t),e=M.call(e),l(t,e,r);var a,f,s=k(t),u=k(e);if(s.length!==u.length)return!1;for(s.sort(),u.sort(),f=s.length-1;f>=0;f--)if(s[f]!==u[f])return!1;for(f=s.length-1;f>=0;f--)if(a=s[f],!l(t[a],e[a],r,n))return!1;return!0}function v(t,e,r){l(t,e,!0)&&c(t,e,r,"notDeepStrictEqual",v)}function y(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&e.call({},t)===!0}function m(t){var e;try{t()}catch(t){e=t}return e}function g(t,e,r,n){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=m(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&c(i,r,"Missing expected exception"+n);var o="string"==typeof n,a=!t&&w.isError(i),f=!t&&i&&!r;if((a&&o&&y(i,r)||f)&&c(i,r,"Got unwanted exception"+n),t&&i&&r&&!y(i,r)||!t&&i)throw i}var w=r(606),_=Object.prototype.hasOwnProperty,M=Array.prototype.slice,S=function(){return"foo"===function(){}.name}(),E=t.exports=d,A=/\s*function\s+([^\(\s]*)\s*/;E.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=h(this),this.generatedMessage=!0);var e=t.stackStartFunction||c;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=f(e),o=n.indexOf("\n"+i);if(o>=0){var a=n.indexOf("\n",o+1);n=n.substring(a+1)}this.stack=n}}},w.inherits(E.AssertionError,Error),E.fail=c,E.ok=d,E.equal=function(t,e,r){t!=e&&c(t,e,r,"==",E.equal)},E.notEqual=function(t,e,r){t==e&&c(t,e,r,"!=",E.notEqual)},E.deepEqual=function(t,e,r){l(t,e,!1)||c(t,e,r,"deepEqual",E.deepEqual)},E.deepStrictEqual=function(t,e,r){l(t,e,!0)||c(t,e,r,"deepStrictEqual",E.deepStrictEqual)},E.notDeepEqual=function(t,e,r){l(t,e,!1)&&c(t,e,r,"notDeepEqual",E.notDeepEqual)},E.notDeepStrictEqual=v,E.strictEqual=function(t,e,r){t!==e&&c(t,e,r,"===",E.strictEqual)},E.notStrictEqual=function(t,e,r){t===e&&c(t,e,r,"!==",E.notStrictEqual)},E.throws=function(t,e,r){g(!0,t,e,r)},E.doesNotThrow=function(t,e,r){g(!1,t,e,r)},E.ifError=function(t){if(t)throw t};var k=Object.keys||function(t){var e=[];for(var r in t)_.call(t,r)&&e.push(r);return e}}).call(e,r(39))},function(t,e,r){(function(e){function n(t,r,i,f){if(!(this instanceof n))return new n(t,r,i);a.call(this),this._finID=e.concat([i,new e([0,0,0,1])]),i=e.concat([i,new e([0,0,0,2])]),this._cipher=new o.AES(r),this._prev=new e(i.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,this._alen=0,this._len=0,i.copy(this._prev),this._mode=t;var u=new e(4);u.fill(0),this._ghash=new s(this._cipher.encryptBlock(u)),this._authTag=null,this._called=!1}function i(t,e){var r=0;t.length!==e.length&&r++;for(var n=Math.min(t.length,e.length),i=-1;++i<n;)r+=t[i]^e[i];return r}var o=r(94),a=r(97),f=r(2),s=r(497),u=r(67);f(n,a),t.exports=n,n.prototype._update=function(t){if(!this._called&&this._alen){var r=16-this._alen%16;r<16&&(r=new e(r),r.fill(0),this._ghash.update(r))}this._called=!0;var n=this._mode.encrypt(this,t);return this._decrypt?this._ghash.update(t):this._ghash.update(n),this._len+=t.length,n},n.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var t=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt){if(i(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data")}else this._authTag=t;this._cipher.scrub()},n.prototype.getAuthTag=function(){if(!this._decrypt&&e.isBuffer(this._authTag))return this._authTag;throw new Error("Attempting to get auth tag in unsupported state")},n.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=t},n.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(t),this._alen+=t.length}}).call(e,r(1).Buffer)},function(t,e,r){var n=r(67);e.encrypt=function(t,e){var r=n(e,t._prev);return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return n(i,r)}},function(t,e,r){(function(t){function n(e,r,n){var o=r.length,a=i(r,e._cache);return e._cache=e._cache.slice(o),e._prev=t.concat([e._prev,n?r:a]),a}var i=r(67);e.encrypt=function(e,r,i){for(var o,a=new t("");r.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=new t("")),!(e._cache.length<=r.length)){a=t.concat([a,n(e,r,i)]);break}o=e._cache.length,a=t.concat([a,n(e,r.slice(0,o),i)]),r=r.slice(o)}return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(t,e,r){for(var i,o,a,f=-1,s=8,u=0;++f<s;)i=t._cipher.encryptBlock(t._prev),o=e&1<<7-f?128:0,a=i[0]^o,u+=(128&a)>>f%8,t._prev=n(t._prev,r?o:a);return u}function n(e,r){var n=e.length,i=-1,o=new t(e.length);for(e=t.concat([e,new t([r])]);++i<n;)o[i]=e[i]<<1|e[i+1]>>7;return o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(e,r,n){var i=e._cipher.encryptBlock(e._prev),o=i[0]^r;return e._prev=t.concat([e._prev.slice(1),new t([n?r:o])]),o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e){e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},function(t,e,r){(function(t){function n(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}var i=r(67);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,n(e)]);var o=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),i(r,o)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r,a,f){return this instanceof n?(o.call(this),this._cipher=new i.AES(r),this._prev=new e(a.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,a.copy(this._prev),void(this._mode=t)):new n(t,r,a)}var i=r(94),o=r(97),a=r(2);a(n,o),t.exports=n,n.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},n.prototype._final=function(){this._cipher.scrub()}}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(t){e["RSA-SHA224"]=e.sha224WithRSAEncryption={sign:"rsa",hash:"sha224",id:new t("302d300d06096086480165030402040500041c","hex")},e["RSA-SHA256"]=e.sha256WithRSAEncryption={sign:"rsa",hash:"sha256",id:new t("3031300d060960864801650304020105000420","hex")},e["RSA-SHA384"]=e.sha384WithRSAEncryption={sign:"rsa",hash:"sha384",id:new t("3041300d060960864801650304020205000430","hex")},e["RSA-SHA512"]=e.sha512WithRSAEncryption={sign:"rsa",hash:"sha512",id:new t("3051300d060960864801650304020305000440","hex")},e["RSA-SHA1"]={sign:"rsa",hash:"sha1",id:new t("3021300906052b0e03021a05000414","hex")},e["ecdsa-with-SHA1"]={sign:"ecdsa",hash:"sha1",id:new t("","hex")},e.DSA=e["DSA-SHA1"]=e["DSA-SHA"]={sign:"dsa",hash:"sha1",id:new t("","hex")},e["DSA-SHA224"]=e["DSA-WITH-SHA224"]={sign:"dsa",hash:"sha224",id:new t("","hex")},e["DSA-SHA256"]=e["DSA-WITH-SHA256"]={sign:"dsa",hash:"sha256",id:new t("","hex")},e["DSA-SHA384"]=e["DSA-WITH-SHA384"]={sign:"dsa",hash:"sha384",id:new t("","hex")},e["DSA-SHA512"]=e["DSA-WITH-SHA512"]={sign:"dsa",hash:"sha512",id:new t("","hex")},e["DSA-RIPEMD160"]={sign:"dsa",hash:"rmd160",id:new t("","hex")},e["RSA-RIPEMD160"]=e.ripemd160WithRSA={sign:"rsa",hash:"rmd160",id:new t("3021300906052b2403020105000414","hex")},e["RSA-MD5"]=e.md5WithRSAEncryption={sign:"rsa",hash:"md5",id:new t("3020300c06082a864886f70d020505000410","hex")}}).call(e,r(1).Buffer)},function(t,e){"use strict";e["1.3.132.0.10"]="secp256k1",e["1.3.132.0.33"]="p224",e["1.2.840.10045.3.1.1"]="p192",e["1.2.840.10045.3.1.7"]="p256",e["1.3.132.0.34"]="p384",e["1.3.132.0.35"]="p521"},function(t,e,r){(function(e){function n(t){var r;"object"!=typeof t||e.isBuffer(t)||(r=t.passphrase,t=t.key),"string"==typeof t&&(t=new e(t));var n,a,s=f(t,r),u=s.tag,h=s.data;switch(u){case"PUBLIC KEY":switch(a=o.PublicKey.decode(h,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPublicKey.decode(a.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return a.subjectPrivateKey=a.subjectPublicKey,{type:"ec",data:a};case"1.2.840.10040.4.1":return a.algorithm.params.pub_key=o.DSAparam.decode(a.subjectPublicKey.data,"der"),{type:"dsa",data:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+u);case"ENCRYPTED PRIVATE KEY":h=o.EncryptedPrivateKey.decode(h,"der"),h=i(h,r);case"PRIVATE KEY":switch(a=o.PrivateKey.decode(h,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPrivateKey.decode(a.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:a.algorithm.curve,privateKey:o.ECPrivateKey.decode(a.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return a.algorithm.params.priv_key=o.DSAparam.decode(a.subjectPrivateKey,"der"),{type:"dsa",params:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+u);case"RSA PUBLIC KEY":return o.RSAPublicKey.decode(h,"der");case"RSA PRIVATE KEY":return o.RSAPrivateKey.decode(h,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:o.DSAPrivateKey.decode(h,"der")};case"EC PRIVATE KEY":return h=o.ECPrivateKey.decode(h,"der"),{curve:h.parameters.value,privateKey:h.privateKey};default:throw new Error("unknown key type "+u)}}function i(t,r){var n=t.algorithm.decrypt.kde.kdeparams.salt,i=parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=a[t.algorithm.decrypt.cipher.algo.join(".")],f=t.algorithm.decrypt.cipher.iv,h=t.subjectPrivateKey,c=parseInt(o.split("-")[1],10)/8,d=u.pbkdf2Sync(r,n,i,c),l=s.createDecipheriv(o,d,f),p=[];return p.push(l.update(h)),p.push(l.final()),e.concat(p)}var o=r(528),a=r(466),f=r(529),s=r(219),u=r(151);t.exports=n,n.signature=o.signature}).call(e,r(1).Buffer)},function(t,e,r){function n(t,e){return a.call(this,e),f.isBuffer(t)?(this.base=t,this.offset=0,void(this.length=t.length)):void this.error("Input not Buffer")}function i(t,e){if(Array.isArray(t))this.length=0,this.value=t.map(function(t){return t instanceof i||(t=new i(t,e)),this.length+=t.length,t},this);else if("number"==typeof t){if(!(0<=t&&t<=255))return e.error("non-byte EncoderBuffer value");this.value=t,this.length=1}else if("string"==typeof t)this.value=t,this.length=f.byteLength(t);else{if(!f.isBuffer(t))return e.error("Unsupported type: "+typeof t);this.value=t,this.length=t.length}}var o=r(2),a=r(68).Reporter,f=r(1).Buffer;o(n,a),e.DecoderBuffer=n,n.prototype.save=function(){return{offset:this.offset,reporter:a.prototype.save.call(this)}},n.prototype.restore=function(t){var e=new n(this.base);return e.offset=t.offset,e.length=this.offset,this.offset=t.offset,a.prototype.restore.call(this,t.reporter),e},n.prototype.isEmpty=function(){return this.offset===this.length},n.prototype.readUInt8=function(t){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(t||"DecoderBuffer overrun")},n.prototype.skip=function(t,e){if(!(this.offset+t<=this.length))return this.error(e||"DecoderBuffer overrun");var r=new n(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+t,this.offset+=t,r},n.prototype.raw=function(t){return this.base.slice(t?t.offset:this.offset,this.length)},e.EncoderBuffer=i,i.prototype.join=function(t,e){return t||(t=new f(this.length)),e||(e=0),0===this.length?t:(Array.isArray(this.value)?this.value.forEach(function(r){r.join(t,e),e+=r.length}):("number"==typeof this.value?t[e]=this.value:"string"==typeof this.value?t.write(this.value,e):f.isBuffer(this.value)&&this.value.copy(t,e),e+=this.length),t)}},function(t,e,r){var n=e;n._reverse=function(t){var e={};return Object.keys(t).forEach(function(r){(0|r)==r&&(r|=0);var n=t[r];e[n]=r}),e},n.der=r(533)},function(t,e,r){function n(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new i,this.tree._init(t.body)}function i(t){u.Node.call(this,"der",t)}function o(t,e){var r=t.readUInt8(e);if(t.isError(r))return r;var n=c.tagClass[r>>6],i=0===(32&r);if(31===(31&r)){var o=r;for(r=0;128===(128&o);){if(o=t.readUInt8(e),t.isError(o))return o;r<<=7,r|=127&o}}else r&=31;var a=c.tag[r];return{cls:n,primitive:i,tag:r,tagStr:a}}function a(t,e,r){var n=t.readUInt8(r);if(t.isError(n))return n;if(!e&&128===n)return null;if(0===(128&n))return n;var i=127&n;if(i>=4)return t.error("length octect is too long");n=0;for(var o=0;o<i;o++){n<<=8;var a=t.readUInt8(r);if(t.isError(a))return a;n|=a}return n}var f=r(2),s=r(100),u=s.base,h=s.bignum,c=s.constants.der;t.exports=n,n.prototype.decode=function(t,e){return t instanceof u.DecoderBuffer||(t=new u.DecoderBuffer(t,e)),this.tree._decode(t,e)},f(i,u.Node),i.prototype._peekTag=function(t,e,r){if(t.isEmpty())return!1;var n=t.save(),i=o(t,'Failed to peek tag: "'+e+'"');return t.isError(i)?i:(t.restore(n),i.tag===e||i.tagStr===e||i.tagStr+"of"===e||r)},i.prototype._decodeTag=function(t,e,r){var n=o(t,'Failed to decode tag of "'+e+'"');if(t.isError(n))return n;var i=a(t,n.primitive,'Failed to get length of "'+e+'"');if(t.isError(i))return i;if(!r&&n.tag!==e&&n.tagStr!==e&&n.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"');if(n.primitive||null!==i)return t.skip(i,'Failed to match body of: "'+e+'"');var f=t.save(),s=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"');return t.isError(s)?s:(i=t.offset-f.offset,t.restore(f),t.skip(i,'Failed to match body of: "'+e+'"'))},i.prototype._skipUntilEnd=function(t,e){for(;;){var r=o(t,e);if(t.isError(r))return r;var n=a(t,r.primitive,e);if(t.isError(n))return n;var i;if(i=r.primitive||null!==n?t.skip(n):this._skipUntilEnd(t,e),t.isError(i))return i;if("end"===r.tagStr)break}},i.prototype._decodeList=function(t,e,r,n){for(var i=[];!t.isEmpty();){var o=this._peekTag(t,"end");if(t.isError(o))return o;var a=r.decode(t,"der",n);if(t.isError(a)&&o)break;i.push(a)}return i},i.prototype._decodeStr=function(t,e){if("bitstr"===e){var r=t.readUInt8();return t.isError(r)?r:{unused:r,data:t.raw()}}if("bmpstr"===e){var n=t.raw();if(n.length%2===1)return t.error("Decoding of string type: bmpstr length mismatch");for(var i="",o=0;o<n.length/2;o++)i+=String.fromCharCode(n.readUInt16BE(2*o));return i}if("numstr"===e){var a=t.raw().toString("ascii");return this._isNumstr(a)?a:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw();if("printstr"===e){var f=t.raw().toString("ascii");return this._isPrintstr(f)?f:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},i.prototype._decodeObjid=function(t,e,r){for(var n,i=[],o=0;!t.isEmpty();){var a=t.readUInt8();o<<=7,o|=127&a,0===(128&a)&&(i.push(o),o=0)}128&a&&i.push(o);var f=i[0]/40|0,s=i[0]%40;if(n=r?i:[f,s].concat(i.slice(1)),e){var u=e[n.join(" ")];void 0===u&&(u=e[n.join(".")]),void 0!==u&&(n=u)}return n},i.prototype._decodeTime=function(t,e){var r=t.raw().toString();if("gentime"===e)var n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),a=0|r.slice(8,10),f=0|r.slice(10,12),s=0|r.slice(12,14);else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet");var n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),a=0|r.slice(6,8),f=0|r.slice(8,10),s=0|r.slice(10,12);n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,a,f,s,0)},i.prototype._decodeNull=function(t){return null},i.prototype._decodeBool=function(t){var e=t.readUInt8();return t.isError(e)?e:0!==e},i.prototype._decodeInt=function(t,e){var r=t.raw(),n=new h(r);return e&&(n=e[n.toString(10)]||n),n},i.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getDecoder("der").tree}},function(t,e,r){function n(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new i,this.tree._init(t.body)}function i(t){h.Node.call(this,"der",t)}function o(t){return t<10?"0"+t:t}function a(t,e,r,n){var i;if("seqof"===t?t="seq":"setof"===t&&(t="set"),c.tagByName.hasOwnProperty(t))i=c.tagByName[t];else{if("number"!=typeof t||(0|t)!==t)return n.error("Unknown tag: "+t);i=t}return i>=31?n.error("Multi-octet tag encoding unsupported"):(e||(i|=32),i|=c.tagClassByName[r||"universal"]<<6)}var f=r(2),s=r(1).Buffer,u=r(100),h=u.base,c=u.constants.der;t.exports=n,n.prototype.encode=function(t,e){return this.tree._encode(t,e).join()},f(i,h.Node),i.prototype._encodeComposite=function(t,e,r,n){var i=a(t,e,r,this.reporter);if(n.length<128){var o=new s(2);return o[0]=i,o[1]=n.length,this._createEncoderBuffer([o,n])}for(var f=1,u=n.length;u>=256;u>>=8)f++;var o=new s(2+f);o[0]=i,o[1]=128|f;for(var u=1+f,h=n.length;h>0;u--,h>>=8)o[u]=255&h;return this._createEncoderBuffer([o,n])},i.prototype._encodeStr=function(t,e){if("bitstr"===e)return this._createEncoderBuffer([0|t.unused,t.data]);if("bmpstr"===e){for(var r=new s(2*t.length),n=0;n<t.length;n++)r.writeUInt16BE(t.charCodeAt(n),2*n);return this._createEncoderBuffer(r)}return"numstr"===e?this._isNumstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===e?this._isPrintstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: "+e+" unsupported")},i.prototype._encodeObjid=function(t,e,r){if("string"==typeof t){if(!e)return this.reporter.error("string objid given, but no values map found");if(!e.hasOwnProperty(t))return this.reporter.error("objid not found in values map");t=e[t].split(/[\s\.]+/g);for(var n=0;n<t.length;n++)t[n]|=0}else if(Array.isArray(t)){t=t.slice();for(var n=0;n<t.length;n++)t[n]|=0}if(!Array.isArray(t))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(t));if(!r){if(t[1]>=40)return this.reporter.error("Second objid identifier OOB");t.splice(0,2,40*t[0]+t[1])}for(var i=0,n=0;n<t.length;n++){var o=t[n];for(i++;o>=128;o>>=7)i++}for(var a=new s(i),f=a.length-1,n=t.length-1;n>=0;n--){var o=t[n];for(a[f--]=127&o;(o>>=7)>0;)a[f--]=128|127&o}return this._createEncoderBuffer(a)},i.prototype._encodeTime=function(t,e){var r,n=new Date(t);return"gentime"===e?r=[o(n.getFullYear()),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):"utctime"===e?r=[o(n.getFullYear()%100),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+e+" time is not supported yet"),this._encodeStr(r,"octstr")},i.prototype._encodeNull=function(){return this._createEncoderBuffer("")},i.prototype._encodeInt=function(t,e){if("string"==typeof t){if(!e)return this.reporter.error("String int or enum given, but no values map");if(!e.hasOwnProperty(t))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(t));t=e[t]}if("number"!=typeof t&&!s.isBuffer(t)){var r=t.toArray();!t.sign&&128&r[0]&&r.unshift(0),t=new s(r)}if(s.isBuffer(t)){var n=t.length;0===t.length&&n++;var i=new s(n);return t.copy(i),0===t.length&&(i[0]=0),this._createEncoderBuffer(i)}if(t<128)return this._createEncoderBuffer(t);if(t<256)return this._createEncoderBuffer([0,t]);for(var n=1,o=t;o>=256;o>>=8)n++;for(var i=new Array(n),o=i.length-1;o>=0;o--)i[o]=255&t,t>>=8;return 128&i[0]&&i.unshift(0),this._createEncoderBuffer(new s(i))},i.prototype._encodeBool=function(t){return this._createEncoderBuffer(t?255:0)},i.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getEncoder("der").tree},i.prototype._skipDefault=function(t,e,r){var n,i=this._baseState;if(null===i.default)return!1;var o=t.join();if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,e,r).join()),o.length!==i.defaultBuffer.length)return!1;for(n=0;n<o.length;n++)if(o[n]!==i.defaultBuffer[n])return!1;return!0}},function(t,e,r){(function(e){function n(t,r,i,f){if(!(this instanceof n))return new n(t,r,i);a.call(this),this._finID=e.concat([i,new e([0,0,0,1])]),i=e.concat([i,new e([0,0,0,2])]),this._cipher=new o.AES(r),this._prev=new e(i.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,this._alen=0,this._len=0,i.copy(this._prev),this._mode=t;var u=new e(4);u.fill(0),this._ghash=new s(this._cipher.encryptBlock(u)),this._authTag=null,this._called=!1}function i(t,e){var r=0;t.length!==e.length&&r++;for(var n=Math.min(t.length,e.length),i=-1;++i<n;)r+=t[i]^e[i];return r}var o=r(101),a=r(103),f=r(2),s=r(541),u=r(69);f(n,a),t.exports=n,n.prototype._update=function(t){if(!this._called&&this._alen){var r=16-this._alen%16;r<16&&(r=new e(r),r.fill(0),this._ghash.update(r))}this._called=!0;var n=this._mode.encrypt(this,t);return this._decrypt?this._ghash.update(t):this._ghash.update(n),this._len+=t.length,n},n.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var t=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt){if(i(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data")}else this._authTag=t;this._cipher.scrub()},n.prototype.getAuthTag=function(){if(!this._decrypt&&e.isBuffer(this._authTag))return this._authTag;throw new Error("Attempting to get auth tag in unsupported state")},n.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=t},n.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(t),this._alen+=t.length}}).call(e,r(1).Buffer)},function(t,e,r){function n(){return Object.keys(a)}var i=r(540);e.createCipher=e.Cipher=i.createCipher,e.createCipheriv=e.Cipheriv=i.createCipheriv;var o=r(539);e.createDecipher=e.Decipher=o.createDecipher,e.createDecipheriv=e.Decipheriv=o.createDecipheriv;var a=r(147);e.listCiphers=e.getCiphers=n},function(t,e,r){var n=r(69);e.encrypt=function(t,e){var r=n(e,t._prev);return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return n(i,r)}},function(t,e,r){(function(t){function n(e,r,n){var o=r.length,a=i(r,e._cache);return e._cache=e._cache.slice(o),e._prev=t.concat([e._prev,n?r:a]),a}var i=r(69);e.encrypt=function(e,r,i){for(var o,a=new t("");r.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=new t("")),!(e._cache.length<=r.length)){a=t.concat([a,n(e,r,i)]);break}o=e._cache.length,a=t.concat([a,n(e,r.slice(0,o),i)]),r=r.slice(o)}return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(t,e,r){for(var i,o,a,f=-1,s=8,u=0;++f<s;)i=t._cipher.encryptBlock(t._prev),o=e&1<<7-f?128:0,a=i[0]^o,u+=(128&a)>>f%8,t._prev=n(t._prev,r?o:a);return u}function n(e,r){var n=e.length,i=-1,o=new t(e.length);for(e=t.concat([e,new t([r])]);++i<n;)o[i]=e[i]<<1|e[i+1]>>7;return o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(e,r,n){var i=e._cipher.encryptBlock(e._prev),o=i[0]^r;return e._prev=t.concat([e._prev.slice(1),new t([n?r:o])]),o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e){e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},function(t,e,r){(function(t){function n(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}var i=r(69);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,n(e)]);var o=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),i(r,o)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r,a,f){return this instanceof n?(o.call(this),this._cipher=new i.AES(r),this._prev=new e(a.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,a.copy(this._prev),void(this._mode=t)):new n(t,r,a)}var i=r(101),o=r(103),a=r(2);a(n,o),t.exports=n,n.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},n.prototype._final=function(){this._cipher.scrub()}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(){this.init(),this._w=l,c.call(this,64,56)}function i(t,e,r){return r^t&(e^r)}function o(t,e,r){return t&e|r&(t|e)}function a(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function f(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function s(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function u(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}var h=r(2),c=r(60),d=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=new Array(64);h(n,c),n.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},n.prototype._update=function(t){for(var e=this._w,r=0|this._a,n=0|this._b,h=0|this._c,c=0|this._d,l=0|this._e,p=0|this._f,b=0|this._g,v=0|this._h,y=0;y<16;++y)e[y]=t.readInt32BE(4*y);for(;y<64;++y)e[y]=u(e[y-2])+e[y-7]+s(e[y-15])+e[y-16]|0;for(var m=0;m<64;++m){var g=v+f(l)+i(l,p,b)+d[m]+e[m]|0,w=a(r)+o(r,n,h)|0;v=b,b=p,p=l,l=c+g|0,c=h,h=n,n=r,r=g+w|0}this._a=r+this._a|0,this._b=n+this._b|0,this._c=h+this._c|0,this._d=c+this._d|0,this._e=l+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=v+this._h|0},n.prototype._hash=function(){var t=new e(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(){this.init(),this._w=v,p.call(this,128,112)}function i(t,e,r){return r^t&(e^r)}function o(t,e,r){return t&e|r&(t|e)}function a(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function f(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function s(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function u(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function h(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function c(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function d(t,e){return t>>>0<e>>>0?1:0}var l=r(2),p=r(60),b=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],v=new Array(160);l(n,p),n.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},n.prototype._update=function(t){for(var e=this._w,r=0|this._ah,n=0|this._bh,l=0|this._ch,p=0|this._dh,v=0|this._eh,y=0|this._fh,m=0|this._gh,g=0|this._hh,w=0|this._al,_=0|this._bl,M=0|this._cl,S=0|this._dl,E=0|this._el,A=0|this._fl,k=0|this._gl,x=0|this._hl,I=0;I<32;I+=2)e[I]=t.readInt32BE(4*I),e[I+1]=t.readInt32BE(4*I+4);for(;I<160;I+=2){var B=e[I-30],O=e[I-30+1],R=s(B,O),P=u(O,B);
B=e[I-4],O=e[I-4+1];var T=h(B,O),j=c(O,B),C=e[I-14],N=e[I-14+1],L=e[I-32],U=e[I-32+1],z=P+N|0,D=R+C+d(z,P)|0;z=z+j|0,D=D+T+d(z,j)|0,z=z+U|0,D=D+L+d(z,U)|0,e[I]=D,e[I+1]=z}for(var q=0;q<160;q+=2){D=e[q],z=e[q+1];var F=o(r,n,l),K=o(w,_,M),G=a(r,w),V=a(w,r),H=f(v,E),X=f(E,v),Y=b[q],W=b[q+1],Z=i(v,y,m),J=i(E,A,k),$=x+X|0,Q=g+H+d($,x)|0;$=$+J|0,Q=Q+Z+d($,J)|0,$=$+W|0,Q=Q+Y+d($,W)|0,$=$+z|0,Q=Q+D+d($,z)|0;var tt=V+K|0,et=G+F+d(tt,V)|0;g=m,x=k,m=y,k=A,y=v,A=E,E=S+$|0,v=p+Q+d(E,S)|0,p=l,S=M,l=n,M=_,n=r,_=w,w=$+tt|0,r=Q+et+d(w,$)|0}this._al=this._al+w|0,this._bl=this._bl+_|0,this._cl=this._cl+M|0,this._dl=this._dl+S|0,this._el=this._el+E|0,this._fl=this._fl+A|0,this._gl=this._gl+k|0,this._hl=this._hl+x|0,this._ah=this._ah+r+d(this._al,w)|0,this._bh=this._bh+n+d(this._bl,_)|0,this._ch=this._ch+l+d(this._cl,M)|0,this._dh=this._dh+p+d(this._dl,S)|0,this._eh=this._eh+v+d(this._el,E)|0,this._fh=this._fh+y+d(this._fl,A)|0,this._gh=this._gh+m+d(this._gl,k)|0,this._hh=this._hh+g+d(this._hl,x)|0},n.prototype._hash=function(){function t(t,e,n){r.writeInt32BE(t,n),r.writeInt32BE(e,n+4)}var r=new e(64);return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),t(this._gh,this._gl,48),t(this._hh,this._hl,56),r},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){function n(){if(null!==g)return g;var t=1048576,e=[];e[0]=2;for(var r=1,n=3;n<t;n+=2){for(var i=Math.ceil(Math.sqrt(n)),o=0;o<r&&e[o]<=i&&n%e[o]!==0;o++);r!==o&&e[o]<=i||(e[r++]=n)}return g=e,e}function i(t){for(var e=n(),r=0;r<e.length;r++)if(0===t.modn(e[r]))return 0===t.cmpn(e[r]);return!0}function o(t){var e=s.mont(t);return 0===l.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)}function a(t,e){if(t<16)return new s(2===e||5===e?[140,123]:[140,39]);e=new s(e);for(var r,n;;){for(r=new s(f(Math.ceil(t/8)));r.bitLength()>t;)r.ishrn(1);if(r.isEven()&&r.iadd(d),r.testn(1)||r.iadd(l),e.cmp(l)){if(!e.cmp(p))for(;r.mod(b).cmp(v);)r.iadd(m)}else for(;r.mod(u).cmp(y);)r.iadd(m);if(n=r.shrn(1),i(n)&&i(r)&&o(n)&&o(r)&&c.test(n)&&c.test(r))return r}}var f=r(61);t.exports=a,a.simpleSieve=i,a.fermatTest=o;var s=r(150),u=new s(24),h=r(230),c=new h,d=new s(1),l=new s(2),p=new s(5),b=(new s(16),new s(8),new s(10)),v=new s(3),y=(new s(7),new s(11)),m=new s(4),g=(new s(12),null)},function(t,e,r){function n(t){this.rand=t||new o.Rand}var i=r(150),o=r(575);t.exports=n,n.create=function(t){return new n(t)},n.prototype._rand=function(t){var e=t.bitLength(),r=this.rand.generate(Math.ceil(e/8));r[0]|=3;var n=7&e;return 0!==n&&(r[r.length-1]>>=7-n),new i(r)},n.prototype.test=function(t,e,r){var n=t.bitLength(),o=i.mont(t),a=new i(1).toRed(o);e||(e=Math.max(1,n/48|0));for(var f=t.subn(1),s=f.subn(1),u=0;!f.testn(u);u++);for(var h=t.shrn(u),c=f.toRed(o),d=!0;e>0;e--){var l=this._rand(s);r&&r(l);var p=l.toRed(o).redPow(h);if(0!==p.cmp(a)&&0!==p.cmp(c)){for(var b=1;b<u;b++){if(p=p.redSqr(),0===p.cmp(a))return!1;if(0===p.cmp(c))break}if(b===u)return!1}}return d},n.prototype.getDivisor=function(t,e){var r=t.bitLength(),n=i.mont(t),o=new i(1).toRed(n);e||(e=Math.max(1,r/48|0));for(var a=t.subn(1),f=a.subn(1),s=0;!a.testn(s);s++);for(var u=t.shrn(s),h=a.toRed(n);e>0;e--){var c=this._rand(f),d=t.gcd(c);if(0!==d.cmpn(1))return d;var l=c.toRed(n).redPow(u);if(0!==l.cmp(o)&&0!==l.cmp(h)){for(var p=1;p<s;p++){if(l=l.redSqr(),0===l.cmp(o))return l.fromRed().subn(1).gcd(t);if(0===l.cmp(h))break}if(p===s)return l=l.redSqr(),l.fromRed().subn(1).gcd(t)}}return!1}},function(t,e,r){(function(e){function n(t){var r=new e(4);return r.writeUInt32BE(t,0),r}var i=r(59);t.exports=function(t,r){for(var o,a=new e(""),f=0;a.length<r;)o=n(f++),a=e.concat([a,i("sha1").update(t).update(o).digest()]);return a.slice(0,r)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){var e=o(t),r=e.toRed(a.mont(t.modulus)).redPow(new a(t.publicExponent)).fromRed();return{blinder:r,unblinder:e.invm(t.modulus)}}function i(t,r){var i=n(r),o=r.modulus.byteLength(),f=(a.mont(r.modulus),new a(t).mul(i.blinder).umod(r.modulus)),s=f.toRed(a.mont(r.prime1)),u=f.toRed(a.mont(r.prime2)),h=r.coefficient,c=r.prime1,d=r.prime2,l=s.redPow(r.exponent1),p=u.redPow(r.exponent2);l=l.fromRed(),p=p.fromRed();var b=l.isub(p).imul(h).umod(c);return b.imul(d),p.iadd(b),new e(p.imul(i.unblinder).umod(r.modulus).toArray(!1,o))}function o(t){for(var e=t.modulus.byteLength(),r=new a(f(e));r.cmp(t.modulus)>=0||!r.umod(t.prime1)||!r.umod(t.prime2);)r=new a(f(e));return r}var a=r(70),f=r(61);t.exports=i,i.getr=o}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){var r;"object"!=typeof t||e.isBuffer(t)||(r=t.passphrase,t=t.key),"string"==typeof t&&(t=new e(t));var n,a,s=f(t,r),u=s.tag,h=s.data;switch(u){case"PUBLIC KEY":switch(a=o.PublicKey.decode(h,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPublicKey.decode(a.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return a.subjectPrivateKey=a.subjectPublicKey,{type:"ec",data:a};case"1.2.840.10040.4.1":return a.algorithm.params.pub_key=o.DSAparam.decode(a.subjectPublicKey.data,"der"),{type:"dsa",data:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+u);case"ENCRYPTED PRIVATE KEY":h=o.EncryptedPrivateKey.decode(h,"der"),h=i(h,r);case"PRIVATE KEY":switch(a=o.PrivateKey.decode(h,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return o.RSAPrivateKey.decode(a.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:a.algorithm.curve,privateKey:o.ECPrivateKey.decode(a.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return a.algorithm.params.priv_key=o.DSAparam.decode(a.subjectPrivateKey,"der"),{type:"dsa",params:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+u);case"RSA PUBLIC KEY":return o.RSAPublicKey.decode(h,"der");case"RSA PRIVATE KEY":return o.RSAPrivateKey.decode(h,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:o.DSAPrivateKey.decode(h,"der")};case"EC PRIVATE KEY":return h=o.ECPrivateKey.decode(h,"der"),{curve:h.parameters.value,privateKey:h.privateKey};default:throw new Error("unknown key type "+u)}}function i(t,r){var n=t.algorithm.decrypt.kde.kdeparams.salt,i=parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=a[t.algorithm.decrypt.cipher.algo.join(".")],f=t.algorithm.decrypt.cipher.iv,h=t.subjectPrivateKey,c=parseInt(o.split("-")[1],10)/8,d=u.pbkdf2Sync(r,n,i,c),l=s.createDecipheriv(o,d,f),p=[];return p.push(l.update(h)),p.push(l.final()),e.concat(p)}var o=r(578),a=r(469),f=r(579),s=r(239),u=r(151);t.exports=n,n.signature=o.signature}).call(e,r(1).Buffer)},function(t,e,r){function n(t,e){return a.call(this,e),f.isBuffer(t)?(this.base=t,this.offset=0,void(this.length=t.length)):void this.error("Input not Buffer")}function i(t,e){if(Array.isArray(t))this.length=0,this.value=t.map(function(t){return t instanceof i||(t=new i(t,e)),this.length+=t.length,t},this);else if("number"==typeof t){if(!(0<=t&&t<=255))return e.error("non-byte EncoderBuffer value");this.value=t,this.length=1}else if("string"==typeof t)this.value=t,this.length=f.byteLength(t);else{if(!f.isBuffer(t))return e.error("Unsupported type: "+typeof t);this.value=t,this.length=t.length}}var o=r(2),a=r(71).Reporter,f=r(1).Buffer;o(n,a),e.DecoderBuffer=n,n.prototype.save=function(){return{offset:this.offset,reporter:a.prototype.save.call(this)}},n.prototype.restore=function(t){var e=new n(this.base);return e.offset=t.offset,e.length=this.offset,this.offset=t.offset,a.prototype.restore.call(this,t.reporter),e},n.prototype.isEmpty=function(){return this.offset===this.length},n.prototype.readUInt8=function(t){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(t||"DecoderBuffer overrun")},n.prototype.skip=function(t,e){if(!(this.offset+t<=this.length))return this.error(e||"DecoderBuffer overrun");var r=new n(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+t,this.offset+=t,r},n.prototype.raw=function(t){return this.base.slice(t?t.offset:this.offset,this.length)},e.EncoderBuffer=i,i.prototype.join=function(t,e){return t||(t=new f(this.length)),e||(e=0),0===this.length?t:(Array.isArray(this.value)?this.value.forEach(function(r){r.join(t,e),e+=r.length}):("number"==typeof this.value?t[e]=this.value:"string"==typeof this.value?t.write(this.value,e):f.isBuffer(this.value)&&this.value.copy(t,e),e+=this.length),t)}},function(t,e,r){var n=e;n._reverse=function(t){var e={};return Object.keys(t).forEach(function(r){(0|r)==r&&(r|=0);var n=t[r];e[n]=r}),e},n.der=r(583)},function(t,e,r){function n(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new i,this.tree._init(t.body)}function i(t){u.Node.call(this,"der",t)}function o(t,e){var r=t.readUInt8(e);if(t.isError(r))return r;var n=c.tagClass[r>>6],i=0===(32&r);if(31===(31&r)){var o=r;for(r=0;128===(128&o);){if(o=t.readUInt8(e),t.isError(o))return o;r<<=7,r|=127&o}}else r&=31;var a=c.tag[r];return{cls:n,primitive:i,tag:r,tagStr:a}}function a(t,e,r){var n=t.readUInt8(r);if(t.isError(n))return n;if(!e&&128===n)return null;if(0===(128&n))return n;var i=127&n;if(i>=4)return t.error("length octect is too long");n=0;for(var o=0;o<i;o++){n<<=8;var a=t.readUInt8(r);if(t.isError(a))return a;n|=a}return n}var f=r(2),s=r(106),u=s.base,h=s.bignum,c=s.constants.der;t.exports=n,n.prototype.decode=function(t,e){return t instanceof u.DecoderBuffer||(t=new u.DecoderBuffer(t,e)),this.tree._decode(t,e)},f(i,u.Node),i.prototype._peekTag=function(t,e,r){if(t.isEmpty())return!1;var n=t.save(),i=o(t,'Failed to peek tag: "'+e+'"');return t.isError(i)?i:(t.restore(n),i.tag===e||i.tagStr===e||i.tagStr+"of"===e||r)},i.prototype._decodeTag=function(t,e,r){var n=o(t,'Failed to decode tag of "'+e+'"');if(t.isError(n))return n;var i=a(t,n.primitive,'Failed to get length of "'+e+'"');if(t.isError(i))return i;if(!r&&n.tag!==e&&n.tagStr!==e&&n.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"');if(n.primitive||null!==i)return t.skip(i,'Failed to match body of: "'+e+'"');var f=t.save(),s=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"');return t.isError(s)?s:(i=t.offset-f.offset,t.restore(f),t.skip(i,'Failed to match body of: "'+e+'"'))},i.prototype._skipUntilEnd=function(t,e){for(;;){var r=o(t,e);if(t.isError(r))return r;var n=a(t,r.primitive,e);if(t.isError(n))return n;var i;if(i=r.primitive||null!==n?t.skip(n):this._skipUntilEnd(t,e),t.isError(i))return i;if("end"===r.tagStr)break}},i.prototype._decodeList=function(t,e,r,n){for(var i=[];!t.isEmpty();){var o=this._peekTag(t,"end");if(t.isError(o))return o;var a=r.decode(t,"der",n);if(t.isError(a)&&o)break;i.push(a)}return i},i.prototype._decodeStr=function(t,e){if("bitstr"===e){var r=t.readUInt8();return t.isError(r)?r:{unused:r,data:t.raw()}}if("bmpstr"===e){var n=t.raw();if(n.length%2===1)return t.error("Decoding of string type: bmpstr length mismatch");for(var i="",o=0;o<n.length/2;o++)i+=String.fromCharCode(n.readUInt16BE(2*o));return i}if("numstr"===e){var a=t.raw().toString("ascii");return this._isNumstr(a)?a:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw();if("printstr"===e){var f=t.raw().toString("ascii");return this._isPrintstr(f)?f:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},i.prototype._decodeObjid=function(t,e,r){for(var n,i=[],o=0;!t.isEmpty();){var a=t.readUInt8();o<<=7,o|=127&a,0===(128&a)&&(i.push(o),o=0)}128&a&&i.push(o);var f=i[0]/40|0,s=i[0]%40;if(n=r?i:[f,s].concat(i.slice(1)),e){var u=e[n.join(" ")];void 0===u&&(u=e[n.join(".")]),void 0!==u&&(n=u)}return n},i.prototype._decodeTime=function(t,e){var r=t.raw().toString();if("gentime"===e)var n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),a=0|r.slice(8,10),f=0|r.slice(10,12),s=0|r.slice(12,14);else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet");var n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),a=0|r.slice(6,8),f=0|r.slice(8,10),s=0|r.slice(10,12);n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,a,f,s,0)},i.prototype._decodeNull=function(t){return null},i.prototype._decodeBool=function(t){var e=t.readUInt8();return t.isError(e)?e:0!==e},i.prototype._decodeInt=function(t,e){var r=t.raw(),n=new h(r);return e&&(n=e[n.toString(10)]||n),n},i.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getDecoder("der").tree}},function(t,e,r){function n(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new i,this.tree._init(t.body)}function i(t){h.Node.call(this,"der",t)}function o(t){return t<10?"0"+t:t}function a(t,e,r,n){var i;if("seqof"===t?t="seq":"setof"===t&&(t="set"),c.tagByName.hasOwnProperty(t))i=c.tagByName[t];else{if("number"!=typeof t||(0|t)!==t)return n.error("Unknown tag: "+t);i=t}return i>=31?n.error("Multi-octet tag encoding unsupported"):(e||(i|=32),i|=c.tagClassByName[r||"universal"]<<6)}var f=r(2),s=r(1).Buffer,u=r(106),h=u.base,c=u.constants.der;t.exports=n,n.prototype.encode=function(t,e){return this.tree._encode(t,e).join()},f(i,h.Node),i.prototype._encodeComposite=function(t,e,r,n){var i=a(t,e,r,this.reporter);if(n.length<128){var o=new s(2);return o[0]=i,o[1]=n.length,this._createEncoderBuffer([o,n])}for(var f=1,u=n.length;u>=256;u>>=8)f++;var o=new s(2+f);o[0]=i,o[1]=128|f;for(var u=1+f,h=n.length;h>0;u--,h>>=8)o[u]=255&h;return this._createEncoderBuffer([o,n])},i.prototype._encodeStr=function(t,e){if("bitstr"===e)return this._createEncoderBuffer([0|t.unused,t.data]);if("bmpstr"===e){for(var r=new s(2*t.length),n=0;n<t.length;n++)r.writeUInt16BE(t.charCodeAt(n),2*n);return this._createEncoderBuffer(r)}return"numstr"===e?this._isNumstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===e?this._isPrintstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: "+e+" unsupported")},i.prototype._encodeObjid=function(t,e,r){if("string"==typeof t){if(!e)return this.reporter.error("string objid given, but no values map found");if(!e.hasOwnProperty(t))return this.reporter.error("objid not found in values map");t=e[t].split(/[\s\.]+/g);for(var n=0;n<t.length;n++)t[n]|=0}else if(Array.isArray(t)){t=t.slice();for(var n=0;n<t.length;n++)t[n]|=0}if(!Array.isArray(t))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(t));if(!r){if(t[1]>=40)return this.reporter.error("Second objid identifier OOB");t.splice(0,2,40*t[0]+t[1])}for(var i=0,n=0;n<t.length;n++){var o=t[n];for(i++;o>=128;o>>=7)i++}for(var a=new s(i),f=a.length-1,n=t.length-1;n>=0;n--){var o=t[n];for(a[f--]=127&o;(o>>=7)>0;)a[f--]=128|127&o}return this._createEncoderBuffer(a)},i.prototype._encodeTime=function(t,e){var r,n=new Date(t);return"gentime"===e?r=[o(n.getFullYear()),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):"utctime"===e?r=[o(n.getFullYear()%100),o(n.getUTCMonth()+1),o(n.getUTCDate()),o(n.getUTCHours()),o(n.getUTCMinutes()),o(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+e+" time is not supported yet"),this._encodeStr(r,"octstr")},i.prototype._encodeNull=function(){return this._createEncoderBuffer("")},i.prototype._encodeInt=function(t,e){if("string"==typeof t){if(!e)return this.reporter.error("String int or enum given, but no values map");if(!e.hasOwnProperty(t))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(t));t=e[t]}if("number"!=typeof t&&!s.isBuffer(t)){var r=t.toArray();!t.sign&&128&r[0]&&r.unshift(0),t=new s(r)}if(s.isBuffer(t)){var n=t.length;0===t.length&&n++;var i=new s(n);return t.copy(i),0===t.length&&(i[0]=0),this._createEncoderBuffer(i)}if(t<128)return this._createEncoderBuffer(t);if(t<256)return this._createEncoderBuffer([0,t]);for(var n=1,o=t;o>=256;o>>=8)n++;for(var i=new Array(n),o=i.length-1;o>=0;o--)i[o]=255&t,t>>=8;return 128&i[0]&&i.unshift(0),this._createEncoderBuffer(new s(i))},i.prototype._encodeBool=function(t){return this._createEncoderBuffer(t?255:0)},i.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getEncoder("der").tree},i.prototype._skipDefault=function(t,e,r){var n,i=this._baseState;if(null===i.default)return!1;var o=t.join();if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,e,r).join()),o.length!==i.defaultBuffer.length)return!1;for(n=0;n<o.length;n++)if(o[n]!==i.defaultBuffer[n])return!1;return!0}},function(t,e,r){(function(e){function n(t,r,i,f){if(!(this instanceof n))return new n(t,r,i);a.call(this),this._finID=e.concat([i,new e([0,0,0,1])]),i=e.concat([i,new e([0,0,0,2])]),this._cipher=new o.AES(r),this._prev=new e(i.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,this._alen=0,this._len=0,i.copy(this._prev),this._mode=t;var u=new e(4);u.fill(0),this._ghash=new s(this._cipher.encryptBlock(u)),this._authTag=null,this._called=!1}function i(t,e){var r=0;t.length!==e.length&&r++;for(var n=Math.min(t.length,e.length),i=-1;++i<n;)r+=t[i]^e[i];return r}var o=r(107),a=r(109),f=r(2),s=r(591),u=r(72);f(n,a),t.exports=n,n.prototype._update=function(t){if(!this._called&&this._alen){var r=16-this._alen%16;r<16&&(r=new e(r),r.fill(0),this._ghash.update(r))}this._called=!0;var n=this._mode.encrypt(this,t);return this._decrypt?this._ghash.update(t):this._ghash.update(n),this._len+=t.length,n},n.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var t=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt){if(i(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data")}else this._authTag=t;this._cipher.scrub()},n.prototype.getAuthTag=function(){if(!this._decrypt&&e.isBuffer(this._authTag))return this._authTag;throw new Error("Attempting to get auth tag in unsupported state")},n.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=t},n.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(t),this._alen+=t.length}}).call(e,r(1).Buffer)},function(t,e,r){function n(){return Object.keys(a)}var i=r(590);e.createCipher=e.Cipher=i.createCipher,e.createCipheriv=e.Cipheriv=i.createCipheriv;var o=r(589);e.createDecipher=e.Decipher=o.createDecipher,e.createDecipheriv=e.Decipheriv=o.createDecipheriv;var a=r(152);e.listCiphers=e.getCiphers=n},function(t,e,r){var n=r(72);e.encrypt=function(t,e){var r=n(e,t._prev);return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return n(i,r)}},function(t,e,r){(function(t){function n(e,r,n){var o=r.length,a=i(r,e._cache);return e._cache=e._cache.slice(o),e._prev=t.concat([e._prev,n?r:a]),a}var i=r(72);e.encrypt=function(e,r,i){for(var o,a=new t("");r.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=new t("")),!(e._cache.length<=r.length)){a=t.concat([a,n(e,r,i)]);break}o=e._cache.length,a=t.concat([a,n(e,r.slice(0,o),i)]),r=r.slice(o)}return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(t,e,r){for(var i,o,a,f=-1,s=8,u=0;++f<s;)i=t._cipher.encryptBlock(t._prev),o=e&1<<7-f?128:0,a=i[0]^o,u+=(128&a)>>f%8,t._prev=n(t._prev,r?o:a);return u}function n(e,r){var n=e.length,i=-1,o=new t(e.length);for(e=t.concat([e,new t([r])]);++i<n;)o[i]=e[i]<<1|e[i+1]>>7;return o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(e,r,n){var i=e._cipher.encryptBlock(e._prev),o=i[0]^r;return e._prev=t.concat([e._prev.slice(1),new t([n?r:o])]),o}e.encrypt=function(e,n,i){for(var o=n.length,a=new t(o),f=-1;++f<o;)a[f]=r(e,n[f],i);return a}}).call(e,r(1).Buffer)},function(t,e){e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},function(t,e,r){(function(t){function n(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}var i=r(72);e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,n(e)]);var o=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),i(r,o)}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r,a,f){return this instanceof n?(o.call(this),this._cipher=new i.AES(r),this._prev=new e(a.length),this._cache=new e(""),this._secCache=new e(""),this._decrypt=f,a.copy(this._prev),void(this._mode=t)):new n(t,r,a)}var i=r(107),o=r(109),a=r(2);a(n,o),t.exports=n,n.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},n.prototype._final=function(){this._cipher.scrub()}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r){return new e(t.toRed(i.mont(r.modulus)).redPow(new i(r.publicExponent)).fromRed().toArray())}var i=r(70);t.exports=n}).call(e,r(1).Buffer)},function(t,e){t.exports=function(t,e){for(var r=t.length,n=-1;++n<r;)t[n]^=e[n];return t}},function(t,e,r){"use strict";function n(t){return this instanceof n?void i.call(this,t):new n(t)}t.exports=n;var i=r(154),o=r(73);o.inherits=r(74),o.inherits(n,i),n.prototype._transform=function(t,e,r){r(null,t)}},function(t,e,r){"use strict";(function(e){function n(t,e,r){return"function"==typeof t.prependListener?t.prependListener(e,r):void(t._events&&t._events[e]?O(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r))}function i(t,e){D=D||r(51),t=t||{},this.objectMode=!!t.objectMode,e instanceof D&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var n=t.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=~~this.highWaterMark,this.buffer=new z,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(U||(U=r(52).StringDecoder),this.decoder=new U(t.encoding),this.encoding=t.encoding)}function o(t){return D=D||r(51),this instanceof o?(this._readableState=new i(t,this),this.readable=!0,t&&"function"==typeof t.read&&(this._read=t.read),void R.call(this)):new o(t)}function a(t,e,r,n,i){var o=h(e,r);if(o)t.emit("error",o);else if(null===r)e.reading=!1,c(t,e);else if(e.objectMode||r&&r.length>0)if(e.ended&&!i){var a=new Error("stream.push() after EOF");t.emit("error",a)}else if(e.endEmitted&&i){var s=new Error("stream.unshift() after end event");t.emit("error",s)}else{var u;!e.decoder||i||n||(r=e.decoder.write(r),u=!e.objectMode&&0===r.length),i||(e.reading=!1),u||(e.flowing&&0===e.length&&!e.sync?(t.emit("data",r),t.read(0)):(e.length+=e.objectMode?1:r.length,i?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&d(t))),p(t,e)}else i||(e.reading=!1);return f(e)}function f(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function s(t){return t>=q?t=q:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}function u(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!==t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=s(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function h(t,e){var r=null;return T.isBuffer(e)||"string"==typeof e||null===e||void 0===e||t.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function c(t,e){if(!e.ended){if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,d(t)}}function d(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(L("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?B(l,t):l(t))}function l(t){L("emit readable"),t.emit("readable"),w(t)}function p(t,e){e.readingMore||(e.readingMore=!0,B(b,t,e))}function b(t,e){for(var r=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(L("maybeReadMore read 0"),t.read(0),r!==e.length);)r=e.length;e.readingMore=!1}function v(t){return function(){var e=t._readableState;L("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&P(t,"data")&&(e.flowing=!0,w(t))}}function y(t){L("readable nexttick read 0"),t.read(0)}function m(t,e){e.resumeScheduled||(e.resumeScheduled=!0,B(g,t,e))}function g(t,e){e.reading||(L("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),w(t),e.flowing&&!e.reading&&t.read(0)}function w(t){var e=t._readableState;for(L("flow",e.flowing);e.flowing&&null!==t.read(););}function _(t,e){if(0===e.length)return null;var r;return e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):r=M(t,e.buffer,e.decoder),r}function M(t,e,r){var n;return t<e.head.data.length?(n=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):n=t===e.head.data.length?e.shift():r?S(t,e):E(t,e),n}function S(t,e){var r=e.head,n=1,i=r.data;for(t-=i.length;r=r.next;){var o=r.data,a=t>o.length?o.length:t;if(i+=a===o.length?o:o.slice(0,t),t-=a,0===t){a===o.length?(++n,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(a));break}++n}return e.length-=n,i}function E(t,e){var r=j.allocUnsafe(t),n=e.head,i=1;for(n.data.copy(r),t-=n.data.length;n=n.next;){var o=n.data,a=t>o.length?o.length:t;if(o.copy(r,r.length-t,0,a),t-=a,0===t){a===o.length?(++i,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(a));break}++i}return e.length-=i,r}function A(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,B(k,e,t))}function k(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function x(t,e){for(var r=0,n=t.length;r<n;r++)e(t[r],r)}function I(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}t.exports=o;var B=r(157),O=r(597);o.ReadableState=i;var R,P=(r(110).EventEmitter,function(t,e){return t.listeners(e).length});!function(){try{R=r(31)}catch(t){}finally{R||(R=r(110).EventEmitter)}}();var T=r(1).Buffer,j=r(156),C=r(73);C.inherits=r(74);var N=r(612),L=void 0;L=N&&N.debuglog?N.debuglog("stream"):function(){};var U,z=r(596);C.inherits(o,R);var D,D;o.prototype.push=function(t,e){var r=this._readableState;return r.objectMode||"string"!=typeof t||(e=e||r.defaultEncoding,e!==r.encoding&&(t=j.from(t,e),e="")),a(this,r,t,e,!1)},o.prototype.unshift=function(t){var e=this._readableState;return a(this,e,t,"",!0)},o.prototype.isPaused=function(){return this._readableState.flowing===!1},o.prototype.setEncoding=function(t){return U||(U=r(52).StringDecoder),this._readableState.decoder=new U(t),this._readableState.encoding=t,this};var q=8388608;o.prototype.read=function(t){L("read",t),t=parseInt(t,10);var e=this._readableState,r=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return L("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?A(this):d(this),null;if(t=u(t,e),0===t&&e.ended)return 0===e.length&&A(this),null;var n=e.needReadable;L("need readable",n),(0===e.length||e.length-t<e.highWaterMark)&&(n=!0,L("length less than watermark",n)),e.ended||e.reading?(n=!1,L("reading or ended",n)):n&&(L("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=u(r,e)));var i;return i=t>0?_(t,e):null,null===i?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&A(this)),null!==i&&this.emit("data",i),i},o.prototype._read=function(t){this.emit("error",new Error("not implemented"))},o.prototype.pipe=function(t,r){function i(t){L("onunpipe"),t===d&&a()}function o(){L("onend"),t.end()}function a(){L("cleanup"),t.removeListener("close",u),t.removeListener("finish",h),t.removeListener("drain",y),t.removeListener("error",s),t.removeListener("unpipe",i),d.removeListener("end",o),d.removeListener("end",a),d.removeListener("data",f),m=!0,!l.awaitDrain||t._writableState&&!t._writableState.needDrain||y()}function f(e){L("ondata"),g=!1;var r=t.write(e);!1!==r||g||((1===l.pipesCount&&l.pipes===t||l.pipesCount>1&&I(l.pipes,t)!==-1)&&!m&&(L("false write response, pause",d._readableState.awaitDrain),d._readableState.awaitDrain++,g=!0),d.pause())}function s(e){L("onerror",e),c(),t.removeListener("error",s),0===P(t,"error")&&t.emit("error",e)}function u(){t.removeListener("finish",h),c()}function h(){L("onfinish"),t.removeListener("close",u),c()}function c(){L("unpipe"),d.unpipe(t)}var d=this,l=this._readableState;switch(l.pipesCount){case 0:l.pipes=t;break;case 1:l.pipes=[l.pipes,t];break;default:l.pipes.push(t)}l.pipesCount+=1,L("pipe count=%d opts=%j",l.pipesCount,r);var p=(!r||r.end!==!1)&&t!==e.stdout&&t!==e.stderr,b=p?o:a;l.endEmitted?B(b):d.once("end",b),t.on("unpipe",i);var y=v(d);t.on("drain",y);var m=!1,g=!1;return d.on("data",f),n(t,"error",s),t.once("close",u),t.once("finish",h),t.emit("pipe",d),l.flowing||(L("pipe resume"),d.resume()),t},o.prototype.unpipe=function(t){var e=this._readableState;if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this),this);if(!t){var r=e.pipes,n=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var i=0;i<n;i++)r[i].emit("unpipe",this);return this}var o=I(e.pipes,t);return o===-1?this:(e.pipes.splice(o,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},o.prototype.on=function(t,e){var r=R.prototype.on.call(this,t,e);if("data"===t)this._readableState.flowing!==!1&&this.resume();else if("readable"===t){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&d(this,n):B(y,this))}return r},o.prototype.addListener=o.prototype.on,o.prototype.resume=function(){var t=this._readableState;return t.flowing||(L("resume"),t.flowing=!0,m(this,t)),this},o.prototype.pause=function(){return L("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(L("pause"),this._readableState.flowing=!1,this.emit("pause")),this},o.prototype.wrap=function(t){var e=this._readableState,r=!1,n=this;t.on("end",function(){if(L("wrapped end"),e.decoder&&!e.ended){var t=e.decoder.end();t&&t.length&&n.push(t)}n.push(null)}),t.on("data",function(i){if(L("wrapped data"),e.decoder&&(i=e.decoder.write(i)),(!e.objectMode||null!==i&&void 0!==i)&&(e.objectMode||i&&i.length)){var o=n.push(i);o||(r=!0,t.pause())}});for(var i in t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));var o=["error","close","destroy","pause","resume"];return x(o,function(e){t.on(e,n.emit.bind(n,e))}),n._read=function(e){L("wrapped _read",e),r&&(r=!1,t.resume())},n},o._fromList=_}).call(e,r(26))},function(module,exports,__webpack_require__){function Context(){}var indexOf=__webpack_require__(607),Object_keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)e.push(r);return e},forEach=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r++)e(t[r],r,t)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(t,e,r){Object.defineProperty(t,e,{writable:!0,enumerable:!1,
configurable:!0,value:r})}}catch(t){return function(t,e,r){t[e]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];Context.prototype={};var Script=exports.Script=function(t){return this instanceof Script?void(this.code=t):new Script(t)};Script.prototype.runInContext=function(t){if(!(t instanceof Context))throw new TypeError("needs a 'context' argument.");var e=document.createElement("iframe");e.style||(e.style={}),e.style.display="none",document.body.appendChild(e);var r=e.contentWindow,n=r.eval,i=r.execScript;!n&&i&&(i.call(r,"null"),n=r.eval),forEach(Object_keys(t),function(e){r[e]=t[e]}),forEach(globals,function(e){t[e]&&(r[e]=t[e])});var o=Object_keys(r),a=n.call(r,this.code);return forEach(Object_keys(r),function(e){(e in t||indexOf(o,e)===-1)&&(t[e]=r[e])}),forEach(globals,function(e){e in t||defineProp(t,e,r[e])}),document.body.removeChild(e),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(t){var e=Script.createContext(t),r=this.runInContext(e);return forEach(Object_keys(e),function(r){t[r]=e[r]}),r},forEach(Object_keys(Script.prototype),function(t){exports[t]=Script[t]=function(e){var r=Script(e);return r[t].apply(r,[].slice.call(arguments,1))}}),exports.createScript=function(t){return exports.Script(t)},exports.createContext=Script.createContext=function(t){var e=new Context;return"object"==typeof t&&forEach(Object_keys(t),function(r){e[r]=t[r]}),e}},function(t,e,r){"use strict";(function(e){var n=r(75),i=r(63),o=r(115),a=r(264),f=r(263),s=r(266),u=r(265),h=r(262),c=r(116),d=new e(0),l=function(t){var e=n.fromUri(t);return e.validate()},p=function(t,r,n){if("undefined"==typeof n&&(n=d),!e.isBuffer(n))throw new Error("Message must be provided as a Buffer");var o=i.fromUri(t),a=o.getConditionUri();if(a!==r)throw new Error("Fulfillment does not match condition (expected: "+r+", actual: "+a+")");return o.validate(n)},b=function(t){var e=i.fromUri(t);return e.getConditionUri()};o.registerType(a),o.registerType(f),o.registerType(s),o.registerType(u),o.registerType(h),t.exports={Condition:n,Fulfillment:i,TypeRegistry:o,PreimageSha256:a,RsaSha256:u,PrefixSha256:f,ThresholdSha256:s,Ed25519:h,validateCondition:l,validateFulfillment:p,fulfillmentToCondition:b,base64url:c,fromConditionUri:n.fromUri.bind(n),fromConditionBinary:n.fromBinary.bind(n),fromFulfillmentUri:i.fromUri.bind(i),fromFulfillmentBinary:i.fromBinary.bind(i)}}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(t){function e(t,e,r){t[e]||Object[n](t,e,{writable:!0,configurable:!0,value:r})}if(r(461),r(268),r(269),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(e,r(39))},function(t,e,r){var n=r(111),i=r(112),o=r(255),a=r(256);t.exports={Reader:o,Writer:a};for(var f in i)i.hasOwnProperty(f)&&(t.exports[f]=i[f]);for(var s in n)n.hasOwnProperty(s)&&(t.exports[s]=n[s])},function(t,e,r){(function(e){function n(t){if(!t||!e.isBuffer(t))throw new TypeError("data must be a node Buffer");this._buf=t,this._size=t.length,this._len=0,this._offset=0}var i=r(202),o=r(112),a=r(111),f=a.newInvalidAsn1Error;Object.defineProperty(n.prototype,"length",{enumerable:!0,get:function(){return this._len}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){return this._offset}}),Object.defineProperty(n.prototype,"remain",{get:function(){return this._size-this._offset}}),Object.defineProperty(n.prototype,"buffer",{get:function(){return this._buf.slice(this._offset)}}),n.prototype.readByte=function(t){if(this._size-this._offset<1)return null;var e=255&this._buf[this._offset];return t||(this._offset+=1),e},n.prototype.peek=function(){return this.readByte(!0)},n.prototype.readLength=function(t){if(void 0===t&&(t=this._offset),t>=this._size)return null;var e=255&this._buf[t++];if(null===e)return null;if(128==(128&e)){if(e&=127,0==e)throw f("Indefinite length not supported");if(e>4)throw f("encoding too long");if(this._size-t<e)return null;this._len=0;for(var r=0;r<e;r++)this._len=(this._len<<8)+(255&this._buf[t++])}else this._len=e;return t},n.prototype.readSequence=function(t){var e=this.peek();if(null===e)return null;if(void 0!==t&&t!==e)throw f("Expected 0x"+t.toString(16)+": got 0x"+e.toString(16));var r=this.readLength(this._offset+1);return null===r?null:(this._offset=r,e)},n.prototype.readInt=function(){return this._readTag(o.Integer)},n.prototype.readBoolean=function(){return 0!==this._readTag(o.Boolean)},n.prototype.readEnumeration=function(){return this._readTag(o.Enumeration)},n.prototype.readString=function(t,r){t||(t=o.OctetString);var n=this.peek();if(null===n)return null;if(n!==t)throw f("Expected 0x"+t.toString(16)+": got 0x"+n.toString(16));var i=this.readLength(this._offset+1);if(null===i)return null;if(this.length>this._size-i)return null;if(this._offset=i,0===this.length)return r?new e(0):"";var a=this._buf.slice(this._offset,this._offset+this.length);return this._offset+=this.length,r?a:a.toString("utf8")},n.prototype.readOID=function(t){t||(t=o.OID);var e=this.readString(t,!0);if(null===e)return null;for(var r=[],n=0,i=0;i<e.length;i++){var a=255&e[i];n<<=7,n+=127&a,0==(128&a)&&(r.push(n),n=0)}return n=r.shift(),r.unshift(n%40),r.unshift(n/40>>0),r.join(".")},n.prototype._readTag=function(t){i.ok(void 0!==t);var e=this.peek();if(null===e)return null;if(e!==t)throw f("Expected 0x"+t.toString(16)+": got 0x"+e.toString(16));var r=this.readLength(this._offset+1);if(null===r)return null;if(this.length>4)throw f("Integer too long: "+this.length);if(this.length>this._size-r)return null;this._offset=r;for(var n=this._buf[this._offset],o=0,a=0;a<this.length;a++)o<<=8,o|=255&this._buf[this._offset++];return 128==(128&n)&&4!==a&&(o-=1<<8*a),o>>0},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,e){o.ok(t),o.equal(typeof t,"object"),o.ok(e),o.equal(typeof e,"object");var r=Object.getOwnPropertyNames(t);return r.forEach(function(r){if(!e[r]){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n)}}),e}function i(t){t=n(s,t||{}),this._buf=new e(t.size||1024),this._size=this._buf.length,this._offset=0,this._options=t,this._seq=[]}var o=r(202),a=r(112),f=r(111),s=(f.newInvalidAsn1Error,{size:1024,growthFactor:8});Object.defineProperty(i.prototype,"buffer",{get:function(){if(this._seq.length)throw new InvalidAsn1Error(this._seq.length+" unended sequence(s)");return this._buf.slice(0,this._offset)}}),i.prototype.writeByte=function(t){if("number"!=typeof t)throw new TypeError("argument must be a Number");this._ensure(1),this._buf[this._offset++]=t},i.prototype.writeInt=function(t,e){if("number"!=typeof t)throw new TypeError("argument must be a Number");"number"!=typeof e&&(e=a.Integer);for(var r=4;(0===(4286578688&t)||(4286578688&t)===-8388608)&&r>1;)r--,t<<=8;if(r>4)throw new InvalidAsn1Error("BER ints cannot be > 0xffffffff");for(this._ensure(2+r),this._buf[this._offset++]=e,this._buf[this._offset++]=r;r-- >0;)this._buf[this._offset++]=(4278190080&t)>>>24,t<<=8},i.prototype.writeNull=function(){this.writeByte(a.Null),this.writeByte(0)},i.prototype.writeEnumeration=function(t,e){if("number"!=typeof t)throw new TypeError("argument must be a Number");return"number"!=typeof e&&(e=a.Enumeration),this.writeInt(t,e)},i.prototype.writeBoolean=function(t,e){if("boolean"!=typeof t)throw new TypeError("argument must be a Boolean");"number"!=typeof e&&(e=a.Boolean),this._ensure(3),this._buf[this._offset++]=e,this._buf[this._offset++]=1,this._buf[this._offset++]=t?255:0},i.prototype.writeString=function(t,r){if("string"!=typeof t)throw new TypeError("argument must be a string (was: "+typeof t+")");"number"!=typeof r&&(r=a.OctetString);var n=e.byteLength(t);this.writeByte(r),this.writeLength(n),n&&(this._ensure(n),this._buf.write(t,this._offset),this._offset+=n)},i.prototype.writeBuffer=function(t,r){if("number"!=typeof r)throw new TypeError("tag must be a number");if(!e.isBuffer(t))throw new TypeError("argument must be a buffer");this.writeByte(r),this.writeLength(t.length),this._ensure(t.length),t.copy(this._buf,this._offset,0,t.length),this._offset+=t.length},i.prototype.writeStringArray=function(t){if(!t instanceof Array)throw new TypeError("argument must be an Array[String]");var e=this;t.forEach(function(t){e.writeString(t)})},i.prototype.writeOID=function(t,e){function r(t,e){e<128?t.push(e):e<16384?(t.push(e>>>7|128),t.push(127&e)):e<2097152?(t.push(e>>>14|128),t.push(255&(e>>>7|128)),t.push(127&e)):e<268435456?(t.push(e>>>21|128),t.push(255&(e>>>14|128)),t.push(255&(e>>>7|128)),t.push(127&e)):(t.push(255&(e>>>28|128)),t.push(255&(e>>>21|128)),t.push(255&(e>>>14|128)),t.push(255&(e>>>7|128)),t.push(127&e))}if("string"!=typeof t)throw new TypeError("argument must be a string");if("number"!=typeof e&&(e=a.OID),!/^([0-9]+\.){3,}[0-9]+$/.test(t))throw new Error("argument is not a valid OID string");var n=t.split("."),i=[];i.push(40*parseInt(n[0],10)+parseInt(n[1],10)),n.slice(2).forEach(function(t){r(i,parseInt(t,10))});var o=this;this._ensure(2+i.length),this.writeByte(e),this.writeLength(i.length),i.forEach(function(t){o.writeByte(t)})},i.prototype.writeLength=function(t){if("number"!=typeof t)throw new TypeError("argument must be a Number");if(this._ensure(4),t<=127)this._buf[this._offset++]=t;else if(t<=255)this._buf[this._offset++]=129,this._buf[this._offset++]=t;else if(t<=65535)this._buf[this._offset++]=130,this._buf[this._offset++]=t>>8,this._buf[this._offset++]=t;else{if(!(t<=16777215))throw new InvalidAsn1ERror("Length too long (> 4 bytes)");this._buf[this._offset++]=131,this._buf[this._offset++]=t>>16,this._buf[this._offset++]=t>>8,this._buf[this._offset++]=t}},i.prototype.startSequence=function(t){"number"!=typeof t&&(t=a.Sequence|a.Constructor),this.writeByte(t),this._seq.push(this._offset),this._ensure(3),this._offset+=3},i.prototype.endSequence=function(){var t=this._seq.pop(),e=t+3,r=this._offset-e;if(r<=127)this._shift(e,r,-2),this._buf[t]=r;else if(r<=255)this._shift(e,r,-1),this._buf[t]=129,this._buf[t+1]=r;else if(r<=65535)this._buf[t]=130,this._buf[t+1]=r>>8,this._buf[t+2]=r;else{if(!(r<=16777215))throw new InvalidAsn1Error("Sequence too long");this._shift(e,r,1),this._buf[t]=131,this._buf[t+1]=r>>16,this._buf[t+2]=r>>8,this._buf[t+3]=r}},i.prototype._shift=function(t,e,r){o.ok(void 0!==t),o.ok(void 0!==e),o.ok(r),this._buf.copy(this._buf,t+r,t,t+e),this._offset+=r},i.prototype._ensure=function(t){if(o.ok(t),this._size-this._offset<t){var r=this._size*this._options.growthFactor;r-this._offset<t&&(r+=t);var n=new e(r);this._buf.copy(n,0,0,this._offset),this._buf=n,this._size=r}},t.exports=i}).call(e,r(1).Buffer)},function(t,e,r){var n=r(254);t.exports={Ber:n,BerReader:n.Reader,BerWriter:n.Writer}},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(93),a=r(114),f=function(){function t(e){n(this,t),e=e||{},this.hashAlgorithm=e.hashAlgorithm||"sha256",this.hashLength=a.getLength(this.hashAlgorithm),this.saltLength=this.hashLength}return i(t,[{key:"generate",value:function(t,r){for(var n=new e(r),i=Math.ceil(r/this.hashLength),a=0;a<i;a++){var f=new e(4);f.writeInt32BE(a,0);var s=o.createHash(this.hashAlgorithm).update(t).update(f).digest();s.copy(n,a*this.hashLength)}return n}}]),t}();t.exports=f}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(93),a=r(258),f=r(267),s=r(114),u=function(){function t(e){n(this,t),e=e||{},this.hashAlgorithm=e.hashAlgorithm||"sha256",this.hashLength=s.getLength(this.hashAlgorithm),this.saltLength=this.hashLength}return i(t,[{key:"encode",value:function(t,r){var n=Math.ceil(r/8),i=o.createHash(this.hashAlgorithm).update(t).digest();if(n<this.hashLength+this.saltLength+2)throw new Error("Encoding error: RSA modulus is too small for "+this.hashAlgorithm);var s=o.randomBytes(this.saltLength),u=o.createHash(this.hashAlgorithm).update(new e(8).fill(0)).update(i).update(s).digest(),h=e.concat([new e(n-this.saltLength-this.hashLength-2).fill(0),new e([1]),s]),c=new a({hashAlgorithm:this.hashAlgorithm}),d=c.generate(u,n-this.hashLength-1),l=f(h,d);return l[0]&=255>>>8*n-r,e.concat([l,u,new e([188])])}},{key:"verify",value:function(t,r,n){var i=Math.ceil(n/8),s=o.createHash(this.hashAlgorithm).update(t).digest();if(i<this.hashLength+this.saltLength+2)return!1;if(188!==r[r.length-1])return!1;var u=i-this.hashLength-1,h=r.slice(0,u),c=r.slice(u,u+this.hashLength),d=255>>>8*i-n;if(h[0]&~d)return!1;var l=new a({hashAlgorithm:this.hashAlgorithm}),p=l.generate(c,i-this.hashLength-1),b=f(h,p);b[0]&=d;for(var v=i-this.hashLength-this.saltLength-2,y=0;y<v;y++)if(0!==b[y])return!1;if(1!==b[v])return!1;var m=b.slice(b.length-this.saltLength),g=o.createHash(this.hashAlgorithm).update(new e(8).fill(0)).update(s).update(m).digest();return 0===e.compare(c,g)}}]),t}();u.EMPTY_BUFFER=new e(0),t.exports=u}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(93),a=r(464),f=r(259),s=r(161),u=function(){function t(e){n(this,t),e=e||{},this.hashAlgorithm=e.hashAlgorithm||"sha256",this.pss=new f({hashAlgorithm:this.hashAlgorithm})}return i(t,[{key:"sign",value:function(r,n){var i=s.modulusFromPrivateKey(r),f=i[0].toString(2).length,u=8*(i.length-1)+f,h=this.pss.encode(n,u-1),c=h.length<i.length?e.concat([t.ZERO_BYTE,h]):h;return o.privateEncrypt({key:r,padding:a.RSA_NO_PADDING},c)}},{key:"verify",value:function(t,e,r){var n=s.modulusToPem(t),i=o.publicDecrypt({key:n,padding:a.RSA_NO_PADDING},r),f=t[0].toString(2).length,u=8*(t.length-1)+f,h=u%8===1?i.slice(1):i;return this.pss.verify(e,h,u-1)}}]),t}();u.ZERO_BYTE=new e([0]),t.exports=u}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(62),f=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(488),s=r(63),u=r(53),h=r(160),c=void 0;try{c=r(462)}catch(t){}var d=function(t){function r(){n(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.publicKey=null,t.signature=null,t}return o(r,t),a(r,[{key:"setPublicKey",value:function(t){if(!e.isBuffer(t))throw new TypeError("Public key must be a Buffer, was: "+t);if(32!==t.length)throw new Error("Public key must be 32 bytes, was: "+t.length);this.publicKey=t}},{key:"setSignature",value:function(t){if(!e.isBuffer(t))throw new TypeError("Signature must be a Buffer, was: "+t);if(64!==t.length)throw new Error("Signature must be 64 bytes, was: "+t.length);this.signature=t}},{key:"sign",value:function(t,r){if(!e.isBuffer(t))throw new u("Message must be a Buffer");if(!e.isBuffer(r))throw new TypeError("Private key must be a Buffer, was: "+r);if(32!==r.length)throw new Error("Private key must be 32 bytes, was: "+r.length);if(c){var n=c.MakeKeypair(r);this.setPublicKey(n.publicKey),this.signature=c.Sign(t,n)}else{var i=f.sign.keyPair.fromSeed(r);this.setPublicKey(new e(i.publicKey)),this.signature=new e(f.sign.detached(t,i.secretKey))}}},{key:"generateHash",value:function(){if(!this.publicKey)throw new u("Requires a public key");return this.publicKey}},{key:"parsePayload",value:function(t){this.setPublicKey(t.readOctetString(r.PUBKEY_LENGTH)),this.setSignature(t.readOctetString(r.SIGNATURE_LENGTH))}},{key:"writePayload",value:function(t){t.writeOctetString(this.publicKey,r.PUBKEY_LENGTH),t.writeOctetString(this.signature,r.SIGNATURE_LENGTH)}},{key:"calculateMaxFulfillmentLength",value:function(){return r.FULFILLMENT_LENGTH}},{key:"validate",value:function(t){if(!e.isBuffer(t))throw new TypeError("Message must be a Buffer");var r=void 0;if(r=c?c.Verify(t,this.signature,this.publicKey):f.sign.detached.verify(t,this.signature,this.publicKey),r!==!0)throw new h("Invalid ed25519 signature");return!0}}]),r}(s);d.TYPE_ID=4,d.FEATURE_BITMASK=32,d.PUBKEY_LENGTH=32,d.SIGNATURE_LENGTH=64,d.FULFILLMENT_LENGTH=d.PUBKEY_LENGTH+d.SIGNATURE_LENGTH,t.exports=d}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},s=r(75),u=r(63),h=r(76),c=r(90),d=r(53),l=function(t){function r(){n(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.subcondition=null,t}return o(r,t),a(r,[{key:"setSubcondition",value:function(t){if("string"==typeof t)t=s.fromUri(t);else if(!(t instanceof s))throw new Error("Subconditions must be URIs or objects of type Condition");this.subcondition=t}},{key:"setSubfulfillment",value:function(t){if("string"==typeof t)t=u.fromUri(t);else if(!(t instanceof u))throw new Error("Subfulfillments must be objects of type Fulfillment");this.subcondition=t}},{key:"setPrefix",value:function(t){if(!e.isBuffer(t))throw new TypeError("Prefix must be a Buffer, was: "+t);this.prefix=t}},{key:"getBitmask",value:function(){return f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"getBitmask",this).call(this)|this.subcondition.getBitmask()}},{key:"writeHashPayload",value:function(t){if(!this.subcondition)throw new d("Requires subcondition");t.writeVarOctetString(this.prefix),t.write(this.subcondition instanceof s?this.subcondition.serializeBinary():this.subcondition.getConditionBinary())}},{key:"calculateMaxFulfillmentLength",value:function(){var t=this.subcondition instanceof s?this.subcondition.getMaxFulfillmentLength():this.subcondition.getCondition().getMaxFulfillmentLength(),e=new c;return e.writeVarOctetString(this.prefix),e.skip(t),e.getSize()}},{key:"parsePayload",value:function(t){this.setPrefix(t.readVarOctetString()),this.setSubfulfillment(u.fromBinary(t))}},{key:"writePayload",value:function(t){if(!(this.subcondition instanceof u))throw new Error("Subcondition must be fulfilled");t.writeVarOctetString(this.prefix),t.write(this.subcondition.serializeBinary())}},{key:"validate",value:function(t){if(!(this.subcondition instanceof u))throw new Error("Subcondition is not a fulfillment");if(!e.isBuffer(t))throw new Error("Message must be provided as a Buffer, was: "+t);return this.subcondition.validate(e.concat([this.prefix,t]))}}]),r}(h);l.TYPE_ID=1,l.FEATURE_BITMASK=5,l.prototype.setSubconditionUri=l.prototype.setSubcondition,l.prototype.setSubfulfillmentUri=l.prototype.setSubfulfillment,t.exports=l}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(76),s=r(53),u=function(t){function r(){return n(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),a(r,[{key:"writeHashPayload",value:function(t){if(!this.preimage)throw new s("Could not calculate hash, no preimage provided");t.write(this.preimage)}},{key:"setPreimage",value:function(t){if(!e.isBuffer(t))throw new TypeError("Preimage must be a buffer, was: "+t);this.preimage=t}},{key:"parsePayload",value:function(t,e){this.setPreimage(t.read(e))}},{key:"writePayload",value:function(t){if(!this.preimage)throw new s("Preimage must be specified");t.write(this.preimage)}},{key:"validate",value:function(t){return!0}}]),r}(f);u.TYPE_ID=0,u.FEATURE_BITMASK=3,t.exports=u}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r(260),s=r(161),u=r(76),h=r(90),c=r(53),d=r(160),l=new f,p=function(t){function r(){n(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.modulus=null,t.signature=null,t}return o(r,t),a(r,[{key:"writeCommonHeader",value:function(t){if(!this.modulus)throw new c("Requires a public modulus");t.writeVarOctetString(this.modulus)}},{key:"setPublicModulus",value:function(t){if(!e.isBuffer(t))throw new TypeError("Modulus must be a buffer, was: "+t);if(0===t[0])throw new Error("Modulus may not contain leading zeros");if(t.length>512||t.length<128)throw new Error("Modulus must be between 128 bytes (1017 bits) and 512 bytes (4096 bits), was: "+t.length+" bytes");this.modulus=t}},{key:"setSignature",value:function(t){if(!e.isBuffer(t))throw new TypeError("Signature must be a buffer, was: "+t);this.signature=t}},{key:"sign",value:function(t,e){this.modulus||this.setPublicModulus(s.modulusFromPrivateKey(e)),this.signature=l.sign(e,t)}},{key:"writeHashPayload",value:function(t){this.writeCommonHeader(t)}},{key:"parsePayload",value:function(t){this.setPublicModulus(t.readVarOctetString()),this.setSignature(t.readVarOctetString())}},{key:"writePayload",value:function(t){if(!this.signature)throw new c("Requires a signature");this.writeCommonHeader(t),t.writeVarOctetString(this.signature)}},{key:"calculateMaxFulfillmentLength",value:function(){var t=new h;if(!this.modulus)throw new c("Requires a public modulus");return this.writeCommonHeader(t),t.writeVarOctetString(this.modulus),t.getSize()}},{key:"validate",value:function(t){if(!e.isBuffer(t))throw new Error("Message must be provided as a Buffer, was: "+t);var r=l.verify(this.modulus,t,this.signature);if(!r)throw new d("Invalid RSA signature");return!0}}]),r}(u);p.TYPE_ID=3,p.FEATURE_BITMASK=17,t.exports=p}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},s=r(75),u=r(63),h=r(76),c=r(90),d=r(91),l=r(53),p=r(113),b=r(162),v=new e(0),y="condition",m="fulfillment",g=function(t){function r(){n(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.threshold=null,t.subconditions=[],t}return o(r,t),a(r,[{key:"addSubcondition",value:function(t,e){if("string"==typeof t)t=s.fromUri(t);else if(!(t instanceof s))throw new Error("Subconditions must be URIs or objects of type Condition");if("undefined"==typeof e)e=1;else if(!b(e)||e<1)throw new TypeError("Invalid weight, not an integer: "+e);this.subconditions.push({type:y,body:t,weight:e})}},{key:"addSubfulfillment",value:function(t,e){if("string"==typeof t)t=u.fromUri(t);else if(!(t instanceof u))throw new Error("Subfulfillments must be URIs or objects of type Fulfillment");if("undefined"==typeof e)e=1;else if(!b(e))throw new Error("Invalid weight, not an integer: "+e);this.subconditions.push({type:m,body:t,weight:e})}},{key:"setThreshold",value:function(t){if(!b(t)||t<1)throw new TypeError("Threshold must be a integer greater than zero, was: "+t);this.threshold=t}},{key:"getBitmask",value:function(){var t=f(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"getBitmask",this).call(this),e=!0,n=!1,i=void 0;try{for(var o,a=this.subconditions[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;t|=s.body.getBitmask()}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}return t}},{key:"writeHashPayload",value:function(t){if(!this.subconditions.length)throw new l("Requires subconditions");var e=this.subconditions.map(function(t){var e=new d;return e.writeVarUInt(t.weight),e.write(t.type===m?t.body.getConditionBinary():t.body.serializeBinary()),e.getBuffer()}),r=this.constructor.sortBuffers(e);t.writeUInt32(this.threshold),t.writeVarUInt(r.length),r.forEach(function(e){return t.write(e)})}},{key:"calculateMaxFulfillmentLength",value:function(){var t=this,e=0,r=this.subconditions.map(function(r){var n=t.constructor.predictSubconditionLength(r),i=t.constructor.predictSubfulfillmentLength(r);return e+=n,{weight:r.weight,size:i-n}}).sort(function(t,e){return e.weight-t.weight}),n=e+this.constructor.calculateWorstCaseLength(this.threshold,r);if(n===-(1/0))throw new l("Insufficient subconditions/weights to meet the threshold");var i=new c;return i.writeUInt32(this.threshold),i.writeVarUInt(this.subconditions.length),this.subconditions.forEach(function(t){i.writeUInt8(),1!==t.weight&&i.writeUInt32(t.weight)}),i.skip(n),i.getSize()}},{key:"parsePayload",value:function(t){this.setThreshold(t.readVarUInt());for(var e=t.readVarUInt(),r=0;r<e;r++){var n=t.readVarUInt(),i=t.readVarOctetString(),o=t.readVarOctetString();if(i.length&&o.length)throw new p("Subconditions may not provide both subcondition and fulfillment.");if(i.length)this.addSubfulfillment(u.fromBinary(i),n);else{if(!o.length)throw new p("Subconditions must provide either subcondition or fulfillment.");this.addSubcondition(s.fromBinary(o),n)}}}},{key:"writePayload",value:function(t){var e=this.subconditions.map(function(t,e){return t.type===m?Object.assign({},t,{index:e,size:t.body.serializeBinary().length,omitSize:t.body.getConditionBinary().length}):null}).filter(Boolean),r=this.constructor.calculateSmallestValidFulfillmentSet(this.threshold,e).set,n=this.subconditions.map(function(t,e){return t.type===m&&r.indexOf(e)===-1?Object.assign({},t,{type:y,body:t.body.getCondition()}):t}),i=n.map(function(t){var e=new d;return e.writeVarUInt(t.weight),e.writeVarOctetString(t.type===m?t.body.serializeBinary():v),e.writeVarOctetString(t.type===y?t.body.serializeBinary():v),e.getBuffer()}),o=this.constructor.sortBuffers(i);t.writeVarUInt(this.threshold),t.writeVarUInt(o.length),o.forEach(t.write.bind(t))}},{key:"validate",value:function(t){var e=this.subconditions.filter(function(t){return t.type===m}),r=1/0,n=e.reduce(function(t,e){return r=Math.min(r,e.weight),t+e.weight},0);if(n<this.threshold)throw new Error("Threshold not met");if(this.threshold+r<=n)throw new Error("Fulfillment is not minimal");return e.every(function(e){return e.body.validate(t)})}}],[{key:"predictSubconditionLength",value:function(t){return t.type===m?t.body.getConditionBinary().length:t.body.serializeBinary().length}},{key:"predictSubfulfillmentLength",
value:function(t){var e=t.type===m?t.body.getCondition().getMaxFulfillmentLength():t.body.getMaxFulfillmentLength(),r=new c;return r.writeUInt16(),r.writeVarOctetString({length:e}),r.getSize()}},{key:"calculateWorstCaseLength",value:function(t,e,r){if(r=r||0,t<=0)return 0;if(r<e.length){var n=e[r];return Math.max(n.size+this.calculateWorstCaseLength(t-n.weight,e,r+1),this.calculateWorstCaseLength(t,e,r+1))}return-(1/0)}},{key:"calculateSmallestValidFulfillmentSet",value:function(t,e,r){if(r=r||{index:0,size:0,set:[]},t<=0)return{size:r.size,set:r.set};if(r.index<e.length){var n=e[r.index],i=this.calculateSmallestValidFulfillmentSet(t-n.weight,e,{size:r.size+n.size,index:r.index+1,set:r.set.concat(n.index)}),o=this.calculateSmallestValidFulfillmentSet(t,e,{size:r.size+n.omitSize,index:r.index+1,set:r.set});return i.size<o.size?i:o}return{size:1/0}}},{key:"sortBuffers",value:function(t){return t.slice().sort(function(t,r){return t.length!==r.length?t.length-r.length:e.compare(t,r)})}}]),r}(h);g.TYPE_ID=2,g.FEATURE_BITMASK=9,g.prototype.addSubconditionUri=g.prototype.addSubcondition,g.prototype.addSubfulfillmentUri=g.prototype.addSubfulfillment,t.exports=g}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function r(t,r){if(!e.isBuffer(t)||!e.isBuffer(r))throw new Error("Arguments must be buffers");if(t.length!==r.length)throw new Error("Buffers must be the same length");for(var n=new e(t.length),i=0;i<t.length;i++)n[i]=t[i]^r[i];return n}t.exports=r}).call(e,r(1).Buffer)},function(t,e,r){(function(e,r){!function(e){"use strict";function n(t,e,r,n){var i=Object.create((e||o).prototype),a=new p(n||[]);return i._invoke=c(t,r,a),i}function i(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function f(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){this.arg=t}function h(t){function e(r,n,o,a){var f=i(t[r],t,n);if("throw"!==f.type){var s=f.arg,h=s.value;return h instanceof u?Promise.resolve(h.arg).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(h).then(function(t){s.value=t,o(s)},a)}a(f.arg)}function n(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return o=o?o.then(n,n):n()}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var o;this._invoke=n}function c(t,e,r){var n=E;return function(o,a){if(n===k)throw new Error("Generator is already running");if(n===x){if("throw"===o)throw a;return v()}for(;;){var f=r.delegate;if(f){if("return"===o||"throw"===o&&f.iterator[o]===y){r.delegate=null;var s=f.iterator.return;if(s){var u=i(s,f.iterator,a);if("throw"===u.type){o="throw",a=u.arg;continue}}if("return"===o)continue}var u=i(f.iterator[o],f.iterator,a);if("throw"===u.type){r.delegate=null,o="throw",a=u.arg;continue}o="next",a=y;var h=u.arg;if(!h.done)return n=A,h;r[f.resultName]=h.value,r.next=f.nextLoc,r.delegate=null}if("next"===o)r.sent=r._sent=a;else if("throw"===o){if(n===E)throw n=x,a;r.dispatchException(a)&&(o="next",a=y)}else"return"===o&&r.abrupt("return",a);n=k;var u=i(t,e,r);if("normal"===u.type){n=r.done?x:A;var h={value:u.arg,done:r.done};if(u.arg!==I)return h;r.delegate&&"next"===o&&(a=y)}else"throw"===u.type&&(n=x,o="throw",a=u.arg)}}}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function l(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function b(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",_=g.toStringTag||"@@toStringTag",M="object"==typeof t,S=e.regeneratorRuntime;if(S)return void(M&&(t.exports=S));S=e.regeneratorRuntime=M?t.exports:{},S.wrap=n;var E="suspendedStart",A="suspendedYield",k="executing",x="completed",I={},B=f.prototype=o.prototype;a.prototype=B.constructor=f,f.constructor=a,f[_]=a.displayName="GeneratorFunction",S.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},S.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(B),t},S.awrap=function(t){return new u(t)},s(h.prototype),S.async=function(t,e,r,i){var o=new h(n(t,e,r,i));return S.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(B),B[w]=function(){return this},B[_]="Generator",B.toString=function(){return"[object Generator]"},S.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},S.values=b,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=m.call(i,"catchLoc"),f=m.call(i,"finallyLoc");if(a&&f){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?this.next=i.finallyLoc:this.complete(o),I},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),I}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;l(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},I}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(39),r(26))},function(t,e,r){r(290),t.exports=r(32).RegExp.escape},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(77);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(270);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(77),i=r(165).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){var n=r(165),i=r(163),o=r(272),a=r(275),f="prototype",s=function(t,e,r){var u,h,c,d=t&s.F,l=t&s.G,p=t&s.S,b=t&s.P,v=t&s.B,y=t&s.W,m=l?i:i[e]||(i[e]={}),g=m[f],w=l?n:p?n[e]:(n[e]||{})[f];l&&(r=e);for(u in r)h=!d&&w&&void 0!==w[u],h&&u in m||(c=h?w[u]:r[u],m[u]=l&&"function"!=typeof w[u]?r[u]:v&&h?o(c,n):y&&w[u]==c?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[f]=t[f],e}(c):b&&"function"==typeof c?o(Function.call,c):c,b&&((m.virtual||(m.virtual={}))[u]=c,t&s.R&&g&&!g[u]&&a(g,u,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(278),i=r(279);t.exports=r(117)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){t.exports=!r(117)&&!r(164)(function(){return 7!=Object.defineProperty(r(273)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(77),i=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&i(t)===t}},function(t,e,r){var n=r(271),i=r(276),o=r(280),a=Object.defineProperty;e.f=r(117)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(77);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(274);n(n.S,"Number",{isInteger:r(277)})},function(t,e,r){var n=r(6),i=r(126),o=r(7)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},function(t,e,r){var n=r(282);t.exports=function(t,e){return new(n(t))(e)}},function(t,e,r){"use strict";var n=r(3),i=r(29),o="number";t.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(n(this),t!=o)}},function(t,e,r){var n=r(44),i=r(86),o=r(66);t.exports=function(t){var e=n(t),r=i.f;if(r)for(var a,f=r(t),s=o.f,u=0;f.length>u;)s.call(t,a=f[u++])&&e.push(a);return e}},function(t,e,r){var n=r(44),i=r(17);t.exports=function(t,e){for(var r,o=i(t),a=n(o),f=a.length,s=0;f>s;)if(o[r=a[s++]]===e)return r}},function(t,e,r){"use strict";var n=r(288),i=r(82),o=r(13);t.exports=function(){for(var t=o(this),e=arguments.length,r=Array(e),a=0,f=n._,s=!1;e>a;)(r[a]=arguments[a++])===f&&(s=!0);return function(){var n,o=this,a=arguments.length,u=0,h=0;if(!s&&!a)return i(t,r,o);if(n=r.slice(),s)for(;e>u;u++)n[u]===f&&(n[u]=arguments[h++]);for(;a>h;)n.push(arguments[h++]);return i(t,n,o)}}},function(t,e,r){t.exports=r(4)},function(t,e){t.exports=function(t,e){var r=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,r)}}},function(t,e,r){var n=r(0),i=r(289)(/[\\^$*+?.()|[\]{}]/g,"\\$&");n(n.S,"RegExp",{escape:function(t){return i(t)}})},function(t,e,r){var n=r(0);n(n.P,"Array",{copyWithin:r(167)}),r(54)("copyWithin")},function(t,e,r){"use strict";var n=r(0),i=r(27)(4);n(n.P+n.F*!r(25)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,r){var n=r(0);n(n.P,"Array",{fill:r(118)}),r(54)("fill")},function(t,e,r){"use strict";var n=r(0),i=r(27)(2);n(n.P+n.F*!r(25)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,r){"use strict";var n=r(0),i=r(27)(6),o="findIndex",a=!0;o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(54)(o)},function(t,e,r){"use strict";var n=r(0),i=r(27)(5),o="find",a=!0;o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(54)(o)},function(t,e,r){"use strict";var n=r(0),i=r(27)(0),o=r(25)([].forEach,!0);n(n.P+n.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,r){"use strict";var n=r(33),i=r(0),o=r(11),a=r(176),f=r(125),s=r(10),u=r(119),h=r(142);i(i.S+i.F*!r(84)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,i,c,d=o(t),l="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,v=void 0!==b,y=0,m=h(d);if(v&&(b=n(b,p>2?arguments[2]:void 0,2)),void 0==m||l==Array&&f(m))for(e=s(d.length),r=new l(e);e>y;y++)u(r,y,v?b(d[y],y):d[y]);else for(c=m.call(d),r=new l;!(i=c.next()).done;y++)u(r,y,v?a(c,b,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,e,r){"use strict";var n=r(0),i=r(78)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(a||!r(25)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,r){var n=r(0);n(n.S,"Array",{isArray:r(126)})},function(t,e,r){"use strict";var n=r(0),i=r(17),o=[].join;n(n.P+n.F*(r(65)!=Object||!r(25)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,e,r){"use strict";var n=r(0),i=r(17),o=r(38),a=r(10),f=[].lastIndexOf,s=!!f&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(s||!r(25)(f)),"Array",{lastIndexOf:function(t){if(s)return f.apply(this,arguments)||0;var e=i(this),r=a(e.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,o(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return-1}})},function(t,e,r){"use strict";var n=r(0),i=r(27)(1);n(n.P+n.F*!r(25)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,r){"use strict";var n=r(0),i=r(119);n(n.S+n.F*r(5)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);e>t;)i(r,t,arguments[t++]);return r.length=e,r}})},function(t,e,r){"use strict";var n=r(0),i=r(169);n(n.P+n.F*!r(25)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,r){"use strict";var n=r(0),i=r(169);n(n.P+n.F*!r(25)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,r){"use strict";var n=r(0),i=r(123),o=r(23),a=r(47),f=r(10),s=[].slice;n(n.P+n.F*r(5)(function(){i&&s.call(i)}),"Array",{slice:function(t,e){var r=f(this.length),n=o(this);if(e=void 0===e?r:e,"Array"==n)return s.call(this,t,e);for(var i=a(t,r),u=a(e,r),h=f(u-i),c=Array(h),d=0;d<h;d++)c[d]="String"==n?this.charAt(i+d):this[i+d];return c}})},function(t,e,r){"use strict";var n=r(0),i=r(27)(3);n(n.P+n.F*!r(25)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,r){"use strict";var n=r(0),i=r(13),o=r(11),a=r(5),f=[].sort,s=[1,2,3];n(n.P+n.F*(a(function(){s.sort(void 0)})||!a(function(){s.sort(null)})||!r(25)(f)),"Array",{sort:function(t){return void 0===t?f.call(o(this)):f.call(o(this),i(t))}})},function(t,e,r){r(46)("Array")},function(t,e,r){var n=r(0);n(n.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,r){"use strict";var n=r(0),i=r(5),o=Date.prototype.getTime,a=function(t){return t>9?t:"0"+t};n(n.P+n.F*(i(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!i(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),r=t.getUTCMilliseconds(),n=e<0?"-":e>9999?"+":"";return n+("00000"+Math.abs(e)).slice(n?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(r>99?r:"0"+a(r))+"Z"}})},function(t,e,r){"use strict";var n=r(0),i=r(11),o=r(29);n(n.P+n.F*r(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=i(this),r=o(e);return"number"!=typeof r||isFinite(r)?e.toISOString():null}})},function(t,e,r){var n=r(7)("toPrimitive"),i=Date.prototype;n in i||r(14)(i,n,r(284))},function(t,e,r){var n=Date.prototype,i="Invalid Date",o="toString",a=n[o],f=n.getTime;new Date(NaN)+""!=i&&r(15)(n,o,function(){var t=f.call(this);return t===t?a.call(this):i})},function(t,e,r){var n=r(0);n(n.P,"Function",{bind:r(170)})},function(t,e,r){"use strict";var n=r(6),i=r(21),o=r(7)("hasInstance"),a=Function.prototype;o in a||r(9).f(a,o,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,r){var n=r(9).f,i=r(37),o=r(12),a=Function.prototype,f=/^\s*function ([^ (]*)/,s="name",u=Object.isExtensible||function(){return!0};s in a||r(8)&&n(a,s,{configurable:!0,get:function(){try{var t=this,e=(""+t).match(f)[1];return o(t,s)||!u(t)||n(t,s,i(5,e)),e}catch(t){return""}}})},function(t,e,r){var n=r(0),i=r(178),o=Math.sqrt,a=Math.acosh;n(n.S+n.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,e,r){function n(t){return isFinite(t=+t)&&0!=t?t<0?-n(-t):Math.log(t+Math.sqrt(t*t+1)):t}var i=r(0),o=Math.asinh;i(i.S+i.F*!(o&&1/o(0)>0),"Math",{asinh:n})},function(t,e,r){var n=r(0),i=Math.atanh;n(n.S+n.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,r){var n=r(0),i=r(130);n(n.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,r){var n=r(0);n(n.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,r){var n=r(0),i=Math.exp;n(n.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,r){var n=r(0),i=r(129);n(n.S+n.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e,r){var n=r(0),i=r(130),o=Math.pow,a=o(2,-52),f=o(2,-23),s=o(2,127)*(2-f),u=o(2,-126),h=function(t){return t+1/a-1/a};n(n.S,"Math",{fround:function(t){var e,r,n=Math.abs(t),o=i(t);return n<u?o*h(n/u/f)*u*f:(e=(1+f/a)*n,r=e-(e-n),r>s||r!=r?o*(1/0):o*r)}})},function(t,e,r){var n=r(0),i=Math.abs;n(n.S,"Math",{hypot:function(t,e){for(var r,n,o=0,a=0,f=arguments.length,s=0;a<f;)r=i(arguments[a++]),s<r?(n=s/r,o=o*n*n+1,s=r):r>0?(n=r/s,o+=n*n):o+=r;return s===1/0?1/0:s*Math.sqrt(o)}})},function(t,e,r){var n=r(0),i=Math.imul;n(n.S+n.F*r(5)(function(){return i(4294967295,5)!=-5||2!=i.length}),"Math",{imul:function(t,e){var r=65535,n=+t,i=+e,o=r&n,a=r&i;return 0|o*a+((r&n>>>16)*a+o*(r&i>>>16)<<16>>>0)}})},function(t,e,r){var n=r(0);n(n.S,"Math",{log10:function(t){return Math.log(t)/Math.LN10}})},function(t,e,r){var n=r(0);n(n.S,"Math",{log1p:r(178)})},function(t,e,r){var n=r(0);n(n.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,r){var n=r(0);n(n.S,"Math",{sign:r(130)})},function(t,e,r){var n=r(0),i=r(129),o=Math.exp;n(n.S+n.F*r(5)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,e,r){var n=r(0),i=r(129),o=Math.exp;n(n.S,"Math",{tanh:function(t){var e=i(t=+t),r=i(-t);return e==1/0?1:r==1/0?-1:(e-r)/(o(t)+o(-t))}})},function(t,e,r){var n=r(0);n(n.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,r){"use strict";var n=r(4),i=r(12),o=r(23),a=r(124),f=r(29),s=r(5),u=r(43).f,h=r(20).f,c=r(9).f,d=r(58).trim,l="Number",p=n[l],b=p,v=p.prototype,y=o(r(42)(v))==l,m="trim"in String.prototype,g=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var r,n,i,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var a,s=e.slice(2),u=0,h=s.length;u<h;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(y?s(function(){v.valueOf.call(r)}):o(r)!=l)?a(new b(g(e)),r,p):g(e)};for(var w,_=r(8)?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;_.length>M;M++)i(b,w=_[M])&&!i(p,w)&&c(p,w,h(b,w));p.prototype=v,v.constructor=p,r(15)(n,l,p)}},function(t,e,r){var n=r(0);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,r){var n=r(0),i=r(4).isFinite;n(n.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,r){var n=r(0);n(n.S,"Number",{isInteger:r(175)})},function(t,e,r){var n=r(0);n(n.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,r){var n=r(0),i=r(175),o=Math.abs;n(n.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,e,r){var n=r(0);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,r){var n=r(0);n(n.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,r){var n=r(0),i=r(185);n(n.S+n.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,r){var n=r(0),i=r(186);n(n.S+n.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,r){"use strict";var n=r(0),i=r(38),o=r(166),a=r(137),f=1..toFixed,s=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",c="0",d=function(t,e){for(var r=-1,n=e;++r<6;)n+=t*u[r],u[r]=n%1e7,n=s(n/1e7)},l=function(t){for(var e=6,r=0;--e>=0;)r+=u[e],u[e]=s(r/t),r=r%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==u[t]){var r=String(u[t]);e=""===e?r:e+a.call(c,7-r.length)+r}return e},b=function(t,e,r){return 0===e?r:e%2===1?b(t,e-1,r*t):b(t*t,e/2,r)},v=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e};n(n.P+n.F*(!!f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(5)(function(){f.call({})})),"Number",{toFixed:function(t){var e,r,n,f,s=o(this,h),u=i(t),y="",m=c;if(u<0||u>20)throw RangeError(h);if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(y="-",s=-s),s>1e-21)if(e=v(s*b(2,69,1))-69,r=e<0?s*b(2,-e,1):s/b(2,e,1),r*=4503599627370496,e=52-e,e>0){for(d(0,r),n=u;n>=7;)d(1e7,0),n-=7;for(d(b(10,n,1),0),n=e-1;n>=23;)l(1<<23),n-=23;l(1<<n),d(1,1),l(2),m=p()}else d(0,r),d(1<<-e,0),m=p()+a.call(c,u);return u>0?(f=m.length,m=y+(f<=u?"0."+a.call(c,u-f)+m:m.slice(0,f-u)+"."+m.slice(f-u))):m=y+m,m}})},function(t,e,r){"use strict";var n=r(0),i=r(5),o=r(166),a=1..toPrecision;n(n.P+n.F*(i(function(){return"1"!==a.call(1,void 0)})||!i(function(){a.call({})})),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,r){var n=r(0);n(n.S+n.F,"Object",{assign:r(179)})},function(t,e,r){var n=r(0);n(n.S,"Object",{create:r(42)})},function(t,e,r){var n=r(0);n(n.S+n.F*!r(8),"Object",{defineProperties:r(180)})},function(t,e,r){var n=r(0);n(n.S+n.F*!r(8),"Object",{defineProperty:r(9).f})},function(t,e,r){var n=r(6),i=r(36).onFreeze;r(28)("freeze",function(t){return function(e){return t&&n(e)?t(i(e)):e}})},function(t,e,r){var n=r(17),i=r(20).f;r(28)("getOwnPropertyDescriptor",function(){return function(t,e){return i(n(t),e)}})},function(t,e,r){r(28)("getOwnPropertyNames",function(){return r(181).f})},function(t,e,r){var n=r(11),i=r(21);r(28)("getPrototypeOf",function(){return function(t){return i(n(t))}})},function(t,e,r){var n=r(6);r(28)("isExtensible",function(t){return function(e){return!!n(e)&&(!t||t(e))}})},function(t,e,r){var n=r(6);r(28)("isFrozen",function(t){return function(e){return!n(e)||!!t&&t(e)}})},function(t,e,r){var n=r(6);r(28)("isSealed",function(t){return function(e){return!n(e)||!!t&&t(e)}})},function(t,e,r){var n=r(0);n(n.S,"Object",{is:r(187)})},function(t,e,r){var n=r(11),i=r(44);r(28)("keys",function(){return function(t){return i(n(t))}})},function(t,e,r){var n=r(6),i=r(36).onFreeze;r(28)("preventExtensions",function(t){return function(e){return t&&n(e)?t(i(e)):e}})},function(t,e,r){var n=r(6),i=r(36).onFreeze;r(28)("seal",function(t){return function(e){return t&&n(e)?t(i(e)):e}})},function(t,e,r){var n=r(0);n(n.S,"Object",{setPrototypeOf:r(132).set})},function(t,e,r){"use strict";var n=r(64),i={};i[r(7)("toStringTag")]="z",i+""!="[object z]"&&r(15)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(t,e,r){var n=r(0),i=r(185);n(n.G+n.F*(parseFloat!=i),{parseFloat:i})},function(t,e,r){var n=r(0),i=r(186);n(n.G+n.F*(parseInt!=i),{parseInt:i})},function(t,e,r){"use strict";var n,i,o,a=r(41),f=r(4),s=r(33),u=r(64),h=r(0),c=r(6),d=r(13),l=r(40),p=r(55),b=r(134),v=r(139).set,y=r(131)(),m="Promise",g=f.TypeError,w=f.process,_=f[m],w=f.process,M="process"==u(w),S=function(){},E=!!function(){try{var t=_.resolve(1),e=(t.constructor={})[r(7)("species")]=function(t){t(S,S)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e}catch(t){}}(),A=function(t,e){return t===e||t===_&&e===o},k=function(t){var e;return!(!c(t)||"function"!=typeof(e=t.then))&&e},x=function(t){return A(_,t)?new I(t):new i(t)},I=i=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw g("Bad Promise constructor");e=t,r=n}),this.resolve=d(e),this.reject=d(r)},B=function(t){try{t()}catch(t){return{error:t}}},O=function(t,e){if(!t._n){t._n=!0;var r=t._c;y(function(){for(var n=t._v,i=1==t._s,o=0,a=function(e){var r,o,a=i?e.ok:e.fail,f=e.resolve,s=e.reject,u=e.domain;try{a?(i||(2==t._h&&T(t),t._h=1),a===!0?r=n:(u&&u.enter(),r=a(n),u&&u.exit()),r===e.promise?s(g("Promise-chain cycle")):(o=k(r))?o.call(r,f,s):f(r)):s(n)}catch(t){s(t)}};r.length>o;)a(r[o++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){v.call(f,function(){var e,r,n,i=t._v;if(P(t)&&(e=B(function(){M?w.emit("unhandledRejection",i,t):(r=f.onunhandledrejection)?r({promise:t,reason:i}):(n=f.console)&&n.error&&n.error("Unhandled promise rejection",i)}),t._h=M||P(t)?2:1),t._a=void 0,e)throw e.error})},P=function(t){if(1==t._h)return!1;for(var e,r=t._a||t._c,n=0;r.length>n;)if(e=r[n++],e.fail||!P(e.promise))return!1;return!0},T=function(t){v.call(f,function(){var e;M?w.emit("rejectionHandled",t):(e=f.onrejectionhandled)&&e({promise:t,reason:t._v})})},j=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),O(e,!0))},C=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw g("Promise can't be resolved itself");(e=k(t))?y(function(){var n={_w:r,_d:!1};try{e.call(t,s(C,n,1),s(j,n,1))}catch(t){j.call(n,t)}}):(r._v=t,r._s=1,O(r,!1))}catch(t){j.call({_w:r,_d:!1},t)}}};E||(_=function(t){l(this,_,m,"_h"),d(t),n.call(this);try{t(s(C,this,1),s(j,this,1))}catch(t){j.call(this,t)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=r(45)(_.prototype,{then:function(t,e){var r=x(b(this,_));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=M?w.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&O(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),I=function(){var t=new n;this.promise=t,this.resolve=s(C,t,1),this.reject=s(j,t,1)}),h(h.G+h.W+h.F*!E,{Promise:_}),r(57)(_,m),r(46)(m),o=r(32)[m],h(h.S+h.F*!E,m,{reject:function(t){var e=x(this),r=e.reject;return r(t),e.promise}}),h(h.S+h.F*(a||!E),m,{resolve:function(t){if(t instanceof _&&A(t.constructor,this))return t;var e=x(this),r=e.resolve;return r(t),e.promise}}),h(h.S+h.F*!(E&&r(84)(function(t){_.all(t).catch(S)})),m,{all:function(t){var e=this,r=x(e),n=r.resolve,i=r.reject,o=B(function(){var r=[],o=0,a=1;p(t,!1,function(t){var f=o++,s=!1;r.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,r[f]=t,--a||n(r))},i)}),--a||n(r)});return o&&i(o.error),r.promise},race:function(t){var e=this,r=x(e),n=r.reject,i=B(function(){p(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return i&&n(i.error),r.promise}})},function(t,e,r){var n=r(0),i=r(13),o=r(3),a=(r(4).Reflect||{}).apply,f=Function.apply;n(n.S+n.F*!r(5)(function(){a(function(){})}),"Reflect",{apply:function(t,e,r){var n=i(t),s=o(r);return a?a(n,e,s):f.call(n,e,s)}})},function(t,e,r){var n=r(0),i=r(42),o=r(13),a=r(3),f=r(6),s=r(5),u=r(170),h=(r(4).Reflect||{}).construct,c=s(function(){function t(){}return!(h(function(){},[],t)instanceof t)}),d=!s(function(){h(function(){})});n(n.S+n.F*(c||d),"Reflect",{construct:function(t,e){o(t),a(e);var r=arguments.length<3?t:o(arguments[2]);if(d&&!c)return h(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(u.apply(t,n))}var s=r.prototype,l=i(f(s)?s:Object.prototype),p=Function.apply.call(t,l,e);return f(p)?p:l}})},function(t,e,r){var n=r(9),i=r(0),o=r(3),a=r(29);i(i.S+i.F*r(5)(function(){Reflect.defineProperty(n.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,r){o(t),e=a(e,!0),o(r);try{return n.f(t,e,r),!0}catch(t){return!1}}})},function(t,e,r){var n=r(0),i=r(20).f,o=r(3);n(n.S,"Reflect",{deleteProperty:function(t,e){var r=i(o(t),e);return!(r&&!r.configurable)&&delete t[e]}})},function(t,e,r){"use strict";var n=r(0),i=r(3),o=function(t){this._t=i(t),this._i=0;var e,r=this._k=[];for(e in t)r.push(e)};r(127)(o,"Object",function(){var t,e=this,r=e._k;do if(e._i>=r.length)return{value:void 0,done:!0};while(!((t=r[e._i++])in e._t));return{value:t,done:!1}}),n(n.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,r){var n=r(20),i=r(0),o=r(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return n.f(o(t),e)}})},function(t,e,r){var n=r(0),i=r(21),o=r(3);n(n.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,r){function n(t,e){var r,f,h=arguments.length<3?t:arguments[2];return u(t)===h?t[e]:(r=i.f(t,e))?a(r,"value")?r.value:void 0!==r.get?r.get.call(h):void 0:s(f=o(t))?n(f,e,h):void 0}var i=r(20),o=r(21),a=r(12),f=r(0),s=r(6),u=r(3);f(f.S,"Reflect",{get:n})},function(t,e,r){var n=r(0);n(n.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,r){var n=r(0),i=r(3),o=Object.isExtensible;n(n.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,r){var n=r(0);n(n.S,"Reflect",{ownKeys:r(184)})},function(t,e,r){var n=r(0),i=r(3),o=Object.preventExtensions;n(n.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,r){var n=r(0),i=r(132);i&&n(n.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,r){function n(t,e,r){var s,d,l=arguments.length<4?t:arguments[3],p=o.f(h(t),e);if(!p){if(c(d=a(t)))return n(d,e,r,l);p=u(0)}return f(p,"value")?!(p.writable===!1||!c(l))&&(s=o.f(l,e)||u(0),s.value=r,i.f(l,e,s),!0):void 0!==p.set&&(p.set.call(l,r),!0)}var i=r(9),o=r(20),a=r(21),f=r(12),s=r(0),u=r(37),h=r(3),c=r(6);s(s.S,"Reflect",{set:n})},function(t,e,r){var n=r(4),i=r(124),o=r(9).f,a=r(43).f,f=r(83),s=r(81),u=n.RegExp,h=u,c=u.prototype,d=/a/g,l=/a/g,p=new u(d)!==d;if(r(8)&&(!p||r(5)(function(){return l[r(7)("match")]=!1,u(d)!=d||u(l)==l||"/a/i"!=u(d,"i")}))){u=function(t,e){var r=this instanceof u,n=f(t),o=void 0===e;return!r&&n&&t.constructor===u&&o?t:i(p?new h(n&&!o?t.source:t,e):h((n=t instanceof u)?t.source:t,n&&o?s.call(t):e),r?this:c,u)};for(var b=(function(t){t in u||o(u,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})}),v=a(h),y=0;v.length>y;)b(v[y++]);c.constructor=u,u.prototype=c,r(15)(n,"RegExp",u)}r(46)("RegExp")},function(t,e,r){r(80)("match",1,function(t,e,r){return[function(r){"use strict";var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n):new RegExp(r)[e](String(n))},r]})},function(t,e,r){
r(80)("replace",2,function(t,e,r){return[function(n,i){"use strict";var o=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,o,i):r.call(String(o),n,i)},r]})},function(t,e,r){r(80)("search",1,function(t,e,r){return[function(r){"use strict";var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n):new RegExp(r)[e](String(n))},r]})},function(t,e,r){r(80)("split",2,function(t,e,n){"use strict";var i=r(83),o=n,a=[].push,f="split",s="length",u="lastIndex";if("c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[s]||2!="ab"[f](/(?:ab)*/)[s]||4!="."[f](/(.?)(.?)/)[s]||"."[f](/()()/)[s]>1||""[f](/.?/)[s]){var h=void 0===/()??/.exec("")[1];n=function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return o.call(r,t,e);var n,f,c,d,l,p=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,y=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,b+"g");for(h||(n=new RegExp("^"+m.source+"$(?!\\s)",b));(f=m.exec(r))&&(c=f.index+f[0][s],!(c>v&&(p.push(r.slice(v,f.index)),!h&&f[s]>1&&f[0].replace(n,function(){for(l=1;l<arguments[s]-2;l++)void 0===arguments[l]&&(f[l]=void 0)}),f[s]>1&&f.index<r[s]&&a.apply(p,f.slice(1)),d=f[0][s],v=c,p[s]>=y)));)m[u]===f.index&&m[u]++;return v===r[s]?!d&&m.test("")||p.push(""):p.push(r.slice(v)),p[s]>y?p.slice(0,y):p}}else"0"[f](void 0,0)[s]&&(n=function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)});return[function(r,i){var o=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},n]})},function(t,e,r){"use strict";r(191);var n=r(3),i=r(81),o=r(8),a="toString",f=/./[a],s=function(t){r(15)(RegExp.prototype,a,t,!0)};r(5)(function(){return"/a/b"!=f.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):f.name!=a&&s(function(){return f.call(this)})},function(t,e,r){"use strict";r(16)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},function(t,e,r){"use strict";r(16)("big",function(t){return function(){return t(this,"big","","")}})},function(t,e,r){"use strict";r(16)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,e,r){"use strict";r(16)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,e,r){"use strict";var n=r(0),i=r(135)(!1);n(n.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,r){"use strict";var n=r(0),i=r(10),o=r(136),a="endsWith",f=""[a];n(n.P+n.F*r(122)(a),"String",{endsWith:function(t){var e=o(this,t,a),r=arguments.length>1?arguments[1]:void 0,n=i(e.length),s=void 0===r?n:Math.min(i(r),n),u=String(t);return f?f.call(e,u,s):e.slice(s-u.length,s)===u}})},function(t,e,r){"use strict";r(16)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,e,r){"use strict";r(16)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},function(t,e,r){"use strict";r(16)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},function(t,e,r){var n=r(0),i=r(47),o=String.fromCharCode,a=String.fromCodePoint;n(n.S+n.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,r=[],n=arguments.length,a=0;n>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?o(e):o(((e-=65536)>>10)+55296,e%1024+56320))}return r.join("")}})},function(t,e,r){"use strict";var n=r(0),i=r(136),o="includes";n(n.P+n.F*r(122)(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";r(16)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,e,r){"use strict";var n=r(135)(!0);r(128)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";r(16)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,r){var n=r(0),i=r(17),o=r(10);n(n.S,"String",{raw:function(t){for(var e=i(t.raw),r=o(e.length),n=arguments.length,a=[],f=0;r>f;)a.push(String(e[f++])),f<n&&a.push(String(arguments[f]));return a.join("")}})},function(t,e,r){var n=r(0);n(n.P,"String",{repeat:r(137)})},function(t,e,r){"use strict";r(16)("small",function(t){return function(){return t(this,"small","","")}})},function(t,e,r){"use strict";var n=r(0),i=r(10),o=r(136),a="startsWith",f=""[a];n(n.P+n.F*r(122)(a),"String",{startsWith:function(t){var e=o(this,t,a),r=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return f?f.call(e,n,r):e.slice(r,r+n.length)===n}})},function(t,e,r){"use strict";r(16)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,e,r){"use strict";r(16)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,e,r){"use strict";r(16)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,e,r){"use strict";r(58)("trim",function(t){return function(){return t(this,3)}})},function(t,e,r){"use strict";var n=r(4),i=r(12),o=r(8),a=r(0),f=r(15),s=r(36).KEY,u=r(5),h=r(87),c=r(57),d=r(48),l=r(7),p=r(189),b=r(141),v=r(286),y=r(285),m=r(126),g=r(3),w=r(17),_=r(29),M=r(37),S=r(42),E=r(181),A=r(20),k=r(9),x=r(44),I=A.f,B=k.f,O=E.f,R=n.Symbol,P=n.JSON,T=P&&P.stringify,j="prototype",C=l("_hidden"),N=l("toPrimitive"),L={}.propertyIsEnumerable,U=h("symbol-registry"),z=h("symbols"),D=h("op-symbols"),q=Object[j],F="function"==typeof R,K=n.QObject,G=!K||!K[j]||!K[j].findChild,V=o&&u(function(){return 7!=S(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=I(q,e);n&&delete q[e],B(t,e,r),n&&t!==q&&B(q,e,n)}:B,H=function(t){var e=z[t]=S(R[j]);return e._k=t,e},X=F&&"symbol"==typeof R.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof R},Y=function(t,e,r){return t===q&&Y(D,e,r),g(t),e=_(e,!0),g(r),i(z,e)?(r.enumerable?(i(t,C)&&t[C][e]&&(t[C][e]=!1),r=S(r,{enumerable:M(0,!1)})):(i(t,C)||B(t,C,M(1,{})),t[C][e]=!0),V(t,e,r)):B(t,e,r)},W=function(t,e){g(t);for(var r,n=y(e=w(e)),i=0,o=n.length;o>i;)Y(t,r=n[i++],e[r]);return t},Z=function(t,e){return void 0===e?S(t):W(S(t),e)},J=function(t){var e=L.call(this,t=_(t,!0));return!(this===q&&i(z,t)&&!i(D,t))&&(!(e||!i(this,t)||!i(z,t)||i(this,C)&&this[C][t])||e)},$=function(t,e){if(t=w(t),e=_(e,!0),t!==q||!i(z,e)||i(D,e)){var r=I(t,e);return!r||!i(z,e)||i(t,C)&&t[C][e]||(r.enumerable=!0),r}},Q=function(t){for(var e,r=O(w(t)),n=[],o=0;r.length>o;)i(z,e=r[o++])||e==C||e==s||n.push(e);return n},tt=function(t){for(var e,r=t===q,n=O(r?D:w(t)),o=[],a=0;n.length>a;)!i(z,e=n[a++])||r&&!i(q,e)||o.push(z[e]);return o};F||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===q&&e.call(D,r),i(this,C)&&i(this[C],t)&&(this[C][t]=!1),V(this,t,M(1,r))};return o&&G&&V(q,t,{configurable:!0,set:e}),H(t)},f(R[j],"toString",function(){return this._k}),A.f=$,k.f=Y,r(43).f=E.f=Q,r(66).f=J,r(86).f=tt,o&&!r(41)&&f(q,"propertyIsEnumerable",J,!0),p.f=function(t){return H(l(t))}),a(a.G+a.W+a.F*!F,{Symbol:R});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)l(et[rt++]);for(var et=x(l.store),rt=0;et.length>rt;)b(et[rt++]);a(a.S+a.F*!F,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=R(t)},keyFor:function(t){if(X(t))return v(U,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!F,"Object",{create:Z,defineProperty:Y,defineProperties:W,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),P&&a(a.S+a.F*(!F||u(function(){var t=R();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!X(t)){for(var e,r,n=[t],i=1;arguments.length>i;)n.push(arguments[i++]);return e=n[1],"function"==typeof e&&(r=e),!r&&m(e)||(e=function(t,e){if(r&&(e=r.call(this,t,e)),!X(e))return e}),n[1]=e,T.apply(P,n)}}}),R[j][N]||r(14)(R[j],N,R[j].valueOf),c(R,"Symbol"),c(Math,"Math",!0),c(n.JSON,"JSON",!0)},function(t,e,r){"use strict";var n=r(0),i=r(88),o=r(140),a=r(3),f=r(47),s=r(10),u=r(6),h=r(4).ArrayBuffer,c=r(134),d=o.ArrayBuffer,l=o.DataView,p=i.ABV&&h.isView,b=d.prototype.slice,v=i.VIEW,y="ArrayBuffer";n(n.G+n.W+n.F*(h!==d),{ArrayBuffer:d}),n(n.S+n.F*!i.CONSTR,y,{isView:function(t){return p&&p(t)||u(t)&&v in t}}),n(n.P+n.U+n.F*r(5)(function(){return!new d(2).slice(1,void 0).byteLength}),y,{slice:function(t,e){if(void 0!==b&&void 0===e)return b.call(a(this),t);for(var r=a(this).byteLength,n=f(t,r),i=f(void 0===e?r:e,r),o=new(c(this,d))(s(i-n)),u=new l(this),h=new l(o),p=0;n<i;)h.setUint8(p++,u.getUint8(n++));return o}}),r(46)(y)},function(t,e,r){var n=r(0);n(n.G+n.W+n.F*!r(88).ABV,{DataView:r(140).DataView})},function(t,e,r){r(35)("Float32",4,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Float64",8,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Int16",2,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Int32",4,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Int8",1,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Uint16",2,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Uint32",4,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Uint8",1,function(t){return function(e,r,n){return t(this,e,r,n)}})},function(t,e,r){r(35)("Uint8",1,function(t){return function(e,r,n){return t(this,e,r,n)}},!0)},function(t,e,r){"use strict";var n=r(173);r(79)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(this,t,!0)}},n,!1,!0)},function(t,e,r){"use strict";var n=r(0),i=r(78)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(54)("includes")},function(t,e,r){var n=r(0),i=r(131)(),o=r(4).process,a="process"==r(23)(o);n(n.G,{asap:function(t){var e=a&&o.domain;i(e?e.bind(t):t)}})},function(t,e,r){var n=r(0),i=r(23);n(n.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,e,r){var n=r(0);n(n.P+n.R,"Map",{toJSON:r(172)("Map")})},function(t,e,r){var n=r(0);n(n.S,"Math",{iaddh:function(t,e,r,n){var i=t>>>0,o=e>>>0,a=r>>>0;return o+(n>>>0)+((i&a|(i|a)&~(i+a>>>0))>>>31)|0}})},function(t,e,r){var n=r(0);n(n.S,"Math",{imulh:function(t,e){var r=65535,n=+t,i=+e,o=n&r,a=i&r,f=n>>16,s=i>>16,u=(f*a>>>0)+(o*a>>>16);return f*s+(u>>16)+((o*s>>>0)+(u&r)>>16)}})},function(t,e,r){var n=r(0);n(n.S,"Math",{isubh:function(t,e,r,n){var i=t>>>0,o=e>>>0,a=r>>>0;return o-(n>>>0)-((~i&a|~(i^a)&i-a>>>0)>>>31)|0}})},function(t,e,r){var n=r(0);n(n.S,"Math",{umulh:function(t,e){var r=65535,n=+t,i=+e,o=n&r,a=i&r,f=n>>>16,s=i>>>16,u=(f*a>>>0)+(o*a>>>16);return f*s+(u>>>16)+((o*s>>>0)+(u&r)>>>16)}})},function(t,e,r){"use strict";var n=r(0),i=r(11),o=r(13),a=r(9);r(8)&&n(n.P+r(85),"Object",{__defineGetter__:function(t,e){a.f(i(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},function(t,e,r){"use strict";var n=r(0),i=r(11),o=r(13),a=r(9);r(8)&&n(n.P+r(85),"Object",{__defineSetter__:function(t,e){a.f(i(this),t,{set:o(e),enumerable:!0,configurable:!0})}})},function(t,e,r){var n=r(0),i=r(183)(!0);n(n.S,"Object",{entries:function(t){return i(t)}})},function(t,e,r){var n=r(0),i=r(184),o=r(17),a=r(20),f=r(119);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,r=o(t),n=a.f,s=i(r),u={},h=0;s.length>h;)f(u,e=s[h++],n(r,e));return u}})},function(t,e,r){"use strict";var n=r(0),i=r(11),o=r(29),a=r(21),f=r(20).f;r(8)&&n(n.P+r(85),"Object",{__lookupGetter__:function(t){var e,r=i(this),n=o(t,!0);do if(e=f(r,n))return e.get;while(r=a(r))}})},function(t,e,r){"use strict";var n=r(0),i=r(11),o=r(29),a=r(21),f=r(20).f;r(8)&&n(n.P+r(85),"Object",{__lookupSetter__:function(t){var e,r=i(this),n=o(t,!0);do if(e=f(r,n))return e.set;while(r=a(r))}})},function(t,e,r){var n=r(0),i=r(183)(!1);n(n.S,"Object",{values:function(t){return i(t)}})},function(t,e,r){"use strict";var n=r(0),i=r(4),o=r(32),a=r(131)(),f=r(7)("observable"),s=r(13),u=r(3),h=r(40),c=r(45),d=r(14),l=r(55),p=l.RETURN,b=function(t){return null==t?void 0:s(t)},v=function(t){var e=t._c;e&&(t._c=void 0,e())},y=function(t){return void 0===t._o},m=function(t){y(t)||(t._o=void 0,v(t))},g=function(t,e){u(t),this._c=void 0,this._o=t,t=new w(this);try{var r=e(t),n=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){n.unsubscribe()}:s(r),this._c=r)}catch(e){return void t.error(e)}y(this)&&v(this)};g.prototype=c({},{unsubscribe:function(){m(this)}});var w=function(t){this._s=t};w.prototype=c({},{next:function(t){var e=this._s;if(!y(e)){var r=e._o;try{var n=b(r.next);if(n)return n.call(r,t)}catch(t){try{m(e)}finally{throw t}}}},error:function(t){var e=this._s;if(y(e))throw t;var r=e._o;e._o=void 0;try{var n=b(r.error);if(!n)throw t;t=n.call(r,t)}catch(t){try{v(e)}finally{throw t}}return v(e),t},complete:function(t){var e=this._s;if(!y(e)){var r=e._o;e._o=void 0;try{var n=b(r.complete);t=n?n.call(r,t):void 0}catch(t){try{v(e)}finally{throw t}}return v(e),t}}});var _=function(t){h(this,_,"Observable","_f")._f=s(t)};c(_.prototype,{subscribe:function(t){return new g(t,this._f)},forEach:function(t){var e=this;return new(o.Promise||i.Promise)(function(r,n){s(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){n(t),i.unsubscribe()}},error:n,complete:r})})}}),c(_,{from:function(t){var e="function"==typeof this?this:_,r=b(u(t)[f]);if(r){var n=u(r.call(t));return n.constructor===e?n:new e(function(t){return n.subscribe(t)})}return new e(function(e){var r=!1;return a(function(){if(!r){try{if(l(t,!1,function(t){if(e.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void e.error(t)}e.complete()}}),function(){r=!0}})},of:function(){for(var t=0,e=arguments.length,r=Array(e);t<e;)r[t]=arguments[t++];return new("function"==typeof this?this:_)(function(t){var e=!1;return a(function(){if(!e){for(var n=0;n<r.length;++n)if(t.next(r[n]),e)return;t.complete()}}),function(){e=!0}})}}),d(_.prototype,f,function(){return this}),n(n.G,{Observable:_}),r(46)("Observable")},function(t,e,r){var n=r(34),i=r(3),o=n.key,a=n.set;n.exp({defineMetadata:function(t,e,r,n){a(t,e,i(r),o(n))}})},function(t,e,r){var n=r(34),i=r(3),o=n.key,a=n.map,f=n.store;n.exp({deleteMetadata:function(t,e){var r=arguments.length<3?void 0:o(arguments[2]),n=a(i(e),r,!1);if(void 0===n||!n.delete(t))return!1;if(n.size)return!0;var s=f.get(e);return s.delete(r),!!s.size||f.delete(e)}})},function(t,e,r){var n=r(192),i=r(168),o=r(34),a=r(3),f=r(21),s=o.keys,u=o.key,h=function(t,e){var r=s(t,e),o=f(t);if(null===o)return r;var a=h(o,e);return a.length?r.length?i(new n(r.concat(a))):a:r};o.exp({getMetadataKeys:function(t){return h(a(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,e,r){var n=r(34),i=r(3),o=r(21),a=n.has,f=n.get,s=n.key,u=function(t,e,r){var n=a(t,e,r);if(n)return f(t,e,r);var i=o(e);return null!==i?u(t,i,r):void 0};n.exp({getMetadata:function(t,e){return u(t,i(e),arguments.length<3?void 0:s(arguments[2]))}})},function(t,e,r){var n=r(34),i=r(3),o=n.keys,a=n.key;n.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:a(arguments[1]))}})},function(t,e,r){var n=r(34),i=r(3),o=n.get,a=n.key;n.exp({getOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,r){var n=r(34),i=r(3),o=r(21),a=n.has,f=n.key,s=function(t,e,r){var n=a(t,e,r);if(n)return!0;var i=o(e);return null!==i&&s(t,i,r)};n.exp({hasMetadata:function(t,e){return s(t,i(e),arguments.length<3?void 0:f(arguments[2]))}})},function(t,e,r){var n=r(34),i=r(3),o=n.has,a=n.key;n.exp({hasOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,r){var n=r(34),i=r(3),o=r(13),a=n.key,f=n.set;n.exp({metadata:function(t,e){return function(r,n){f(t,e,(void 0!==n?i:o)(r),a(n))}}})},function(t,e,r){var n=r(0);n(n.P+n.R,"Set",{toJSON:r(172)("Set")})},function(t,e,r){"use strict";var n=r(0),i=r(135)(!0);n(n.P,"String",{at:function(t){return i(this,t)}})},function(t,e,r){"use strict";var n=r(0),i=r(24),o=r(10),a=r(83),f=r(81),s=RegExp.prototype,u=function(t,e){this._r=t,this._s=e};r(127)(u,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),n(n.P,"String",{matchAll:function(t){if(i(this),!a(t))throw TypeError(t+" is not a regexp!");var e=String(this),r="flags"in s?String(t.flags):f.call(t),n=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return n.lastIndex=o(t.lastIndex),new u(n,e)}})},function(t,e,r){"use strict";var n=r(0),i=r(188);n(n.P,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,r){"use strict";var n=r(0),i=r(188);n(n.P,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,r){"use strict";r(58)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,e,r){"use strict";r(58)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,e,r){r(141)("asyncIterator")},function(t,e,r){r(141)("observable")},function(t,e,r){var n=r(0);n(n.S,"System",{global:r(4)})},function(t,e,r){for(var n=r(143),i=r(15),o=r(4),a=r(14),f=r(56),s=r(7),u=s("iterator"),h=s("toStringTag"),c=f.Array,d=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;l<5;l++){var p,b=d[l],v=o[b],y=v&&v.prototype;if(y){y[u]||a(y,u,c),y[h]||a(y,h,b),f[b]=c;for(p in n)y[p]||i(y,p,n[p],!0)}}},function(t,e,r){var n=r(0),i=r(139);n(n.G+n.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,r){var n=r(4),i=r(0),o=r(82),a=r(287),f=n.navigator,s=!!f&&/MSIE .\./.test(f.userAgent),u=function(t){return s?function(e,r){return t(o(a,[].slice.call(arguments,2),"function"==typeof e?e:Function(e)),r)}:t};i(i.G+i.B+i.F*s,{setTimeout:u(n.setTimeout),setInterval:u(n.setInterval)})},function(t,e,r){r(410),r(349),r(351),r(350),r(353),r(355),r(360),r(354),r(352),r(362),r(361),r(357),r(358),r(356),r(348),r(359),r(363),r(364),r(316),r(318),r(317),r(366),r(365),r(336),r(346),r(347),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(397),r(402),r(409),r(400),r(392),r(393),r(398),r(403),r(405),r(388),r(389),r(390),r(391),r(394),r(395),r(396),r(399),r(401),r(404),r(406),r(407),r(408),r(311),r(313),r(312),r(315),r(314),r(300),r(298),r(304),r(301),r(307),r(309),r(297),r(303),r(294),r(308),r(292),r(306),r(305),r(299),r(302),r(291),r(293),r(296),r(295),r(310),r(143),r(382),r(387),r(191),r(383),r(384),r(385),r(386),r(367),r(190),r(192),r(193),r(422),r(411),r(412),r(417),r(420),r(421),r(415),r(418),r(416),r(419),r(413),r(414),r(368),r(369),r(370),r(371),r(372),r(375),r(373),r(374),r(376),r(377),r(378),r(379),r(381),r(380),r(423),r(449),r(452),r(451),r(453),r(454),r(450),r(455),r(456),r(434),r(437),r(433),r(431),r(432),r(435),r(436),r(426),r(448),r(457),r(425),r(427),r(429),r(428),r(430),r(439),r(440),r(442),r(441),r(444),r(443),r(445),r(446),r(447),r(424),r(438),r(460),r(459),r(458),t.exports=r(32)},function(t,e,r){t.exports=r(463)("ed25519")},function(t,e,r){(function(n,i){function o(t){"string"==typeof t?t={bindings:t}:t||(t={}),t.__proto__=c,t.module_root||(t.module_root=e.getRoot(e.getFileName())),".node"!=f.extname(t.bindings)&&(t.bindings+=".node");for(var r,n,i,o=[],a=0,u=t.try.length;a<u;a++){r=s.apply(null,t.try[a].map(function(e){return t[e]||e})),o.push(r);try{return n=t.path?!function(){var t=new Error('Cannot find module "."');throw t.code="MODULE_NOT_FOUND",t}():!function(){var t=new Error('Cannot find module "."');throw t.code="MODULE_NOT_FOUND",t}(),t.path||(n.path=r),n}catch(t){if(!/not find/i.test(t.message))throw t}}throw i=new Error("Could not locate the bindings file. Tried:\n"+o.map(function(e){return t.arrow+e}).join("\n")),i.tries=o,i}var a=r(489),f=r(594),s=f.join,u=f.dirname,h=a.existsSync||f.existsSync,c={arrow:n.env.NODE_BINDINGS_ARROW||" → ",compiled:n.env.NODE_BINDINGS_COMPILED_DIR||"compiled",platform:n.platform,arch:n.arch,version:n.versions.node,bindings:"bindings.node",try:[["module_root","build","bindings"],["module_root","build","Debug","bindings"],["module_root","build","Release","bindings"],["module_root","out","Debug","bindings"],["module_root","Debug","bindings"],["module_root","out","Release","bindings"],["module_root","Release","bindings"],["module_root","build","default","bindings"],["module_root","compiled","version","platform","arch","bindings"]]};t.exports=e=o,e.getFileName=function(t){var e,r=Error.prepareStackTrace,n=Error.stackTraceLimit,o={};return Error.stackTraceLimit=10,Error.prepareStackTrace=function(r,n){for(var o=0,a=n.length;o<a;o++)if(e=n[o].getFileName(),e!==i){if(!t)return;if(e!==t)return}},Error.captureStackTrace(o),o.stack,Error.prepareStackTrace=r,Error.stackTraceLimit=n,e},e.getRoot=function(t){for(var e,r=u(t);;){if("."===r&&(r=n.cwd()),h(s(r,"package.json"))||h(s(r,"node_modules")))return r;if(e===r)throw new Error('Could not find module root given file: "'+t+'". Do you have a `package.json` file? ');e=r,r=s(r,"..")}}}).call(e,r(26),"/index.js")},function(t,e){t.exports={O_RDONLY:0,O_WRONLY:1,O_RDWR:2,S_IFMT:61440,S_IFREG:32768,S_IFDIR:16384,S_IFCHR:8192,S_IFBLK:24576,S_IFIFO:4096,S_IFLNK:40960,S_IFSOCK:49152,O_CREAT:512,O_EXCL:2048,O_NOCTTY:131072,O_TRUNC:1024,O_APPEND:8,O_DIRECTORY:1048576,O_NOFOLLOW:256,O_SYNC:128,O_SYMLINK:2097152,O_NONBLOCK:4,S_IRWXU:448,S_IRUSR:256,S_IWUSR:128,S_IXUSR:64,S_IRWXG:56,S_IRGRP:32,S_IWGRP:16,S_IXGRP:8,S_IRWXO:7,S_IROTH:4,S_IWOTH:2,S_IXOTH:1,E2BIG:7,EACCES:13,EADDRINUSE:48,EADDRNOTAVAIL:49,EAFNOSUPPORT:47,EAGAIN:35,EALREADY:37,EBADF:9,EBADMSG:94,EBUSY:16,ECANCELED:89,ECHILD:10,ECONNABORTED:53,ECONNREFUSED:61,ECONNRESET:54,EDEADLK:11,EDESTADDRREQ:39,EDOM:33,EDQUOT:69,EEXIST:17,EFAULT:14,EFBIG:27,EHOSTUNREACH:65,EIDRM:90,EILSEQ:92,EINPROGRESS:36,EINTR:4,EINVAL:22,EIO:5,EISCONN:56,EISDIR:21,ELOOP:62,EMFILE:24,EMLINK:31,EMSGSIZE:40,EMULTIHOP:95,ENAMETOOLONG:63,ENETDOWN:50,ENETRESET:52,ENETUNREACH:51,ENFILE:23,ENOBUFS:55,ENODATA:96,ENODEV:19,ENOENT:2,ENOEXEC:8,ENOLCK:77,ENOLINK:97,ENOMEM:12,ENOMSG:91,ENOPROTOOPT:42,ENOSPC:28,ENOSR:98,ENOSTR:99,ENOSYS:78,ENOTCONN:57,ENOTDIR:20,ENOTEMPTY:66,ENOTSOCK:38,ENOTSUP:45,ENOTTY:25,ENXIO:6,EOPNOTSUPP:102,EOVERFLOW:84,EPERM:1,EPIPE:32,EPROTO:100,EPROTONOSUPPORT:43,EPROTOTYPE:41,ERANGE:34,EROFS:30,ESPIPE:29,ESRCH:3,ESTALE:70,ETIME:101,ETIMEDOUT:60,ETXTBSY:26,EWOULDBLOCK:35,EXDEV:18,SIGHUP:1,SIGINT:2,SIGQUIT:3,SIGILL:4,SIGTRAP:5,SIGABRT:6,SIGIOT:6,SIGBUS:10,SIGFPE:8,SIGKILL:9,SIGUSR1:30,SIGSEGV:11,SIGUSR2:31,SIGPIPE:13,SIGALRM:14,SIGTERM:15,SIGCHLD:20,SIGCONT:19,SIGSTOP:17,SIGTSTP:18,SIGTTIN:21,SIGTTOU:22,SIGURG:16,SIGXCPU:24,SIGXFSZ:25,SIGVTALRM:26,SIGPROF:27,SIGWINCH:28,SIGIO:23,SIGSYS:12,SSL_OP_ALL:2147486719,SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION:262144,SSL_OP_CIPHER_SERVER_PREFERENCE:4194304,SSL_OP_CISCO_ANYCONNECT:32768,SSL_OP_COOKIE_EXCHANGE:8192,SSL_OP_CRYPTOPRO_TLSEXT_BUG:2147483648,SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS:2048,SSL_OP_EPHEMERAL_RSA:0,SSL_OP_LEGACY_SERVER_CONNECT:4,SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER:32,SSL_OP_MICROSOFT_SESS_ID_BUG:1,SSL_OP_MSIE_SSLV2_RSA_PADDING:0,SSL_OP_NETSCAPE_CA_DN_BUG:536870912,SSL_OP_NETSCAPE_CHALLENGE_BUG:2,SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG:1073741824,SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG:8,SSL_OP_NO_COMPRESSION:131072,SSL_OP_NO_QUERY_MTU:4096,SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION:65536,SSL_OP_NO_SSLv2:16777216,SSL_OP_NO_SSLv3:33554432,SSL_OP_NO_TICKET:16384,SSL_OP_NO_TLSv1:67108864,SSL_OP_NO_TLSv1_1:268435456,SSL_OP_NO_TLSv1_2:134217728,SSL_OP_PKCS1_CHECK_1:0,SSL_OP_PKCS1_CHECK_2:0,SSL_OP_SINGLE_DH_USE:1048576,SSL_OP_SINGLE_ECDH_USE:524288,SSL_OP_SSLEAY_080_CLIENT_DH_BUG:128,SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG:0,SSL_OP_TLS_BLOCK_PADDING_BUG:512,SSL_OP_TLS_D5_BUG:256,SSL_OP_TLS_ROLLBACK_BUG:8388608,ENGINE_METHOD_DSA:2,ENGINE_METHOD_DH:4,ENGINE_METHOD_RAND:8,ENGINE_METHOD_ECDH:16,ENGINE_METHOD_ECDSA:32,ENGINE_METHOD_CIPHERS:64,ENGINE_METHOD_DIGESTS:128,ENGINE_METHOD_STORE:256,ENGINE_METHOD_PKEY_METHS:512,ENGINE_METHOD_PKEY_ASN1_METHS:1024,ENGINE_METHOD_ALL:65535,ENGINE_METHOD_NONE:0,DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6,F_OK:0,R_OK:4,W_OK:2,X_OK:1,UV_UDP_REUSEADDR:4}},function(t,e){t.exports={name:"elliptic",version:"6.3.2",description:"EC cryptography",main:"lib/elliptic.js",files:["lib"],scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",unit:"istanbul test _mocha --reporter=spec test/index.js",test:"npm run lint && npm run unit",version:"grunt dist && git add dist/"},repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},keywords:["EC","Elliptic","curve","Cryptography"],author:{name:"Fedor Indutny",email:"fedor@indutny.com"},license:"MIT",bugs:{url:"https://github.com/indutny/elliptic/issues"},homepage:"https://github.com/indutny/elliptic",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0",inherits:"^2.0.1"},gitHead:"cbace4683a4a548dc0306ef36756151a20299cd5",_id:"elliptic@6.3.2",_shasum:"e4c81e0829cf0a65ab70e998b8232723b5c1bc48",_from:"elliptic@>=6.0.0 <7.0.0",_npmVersion:"3.10.3",_nodeVersion:"6.3.0",_npmUser:{name:"indutny",email:"fedor@indutny.com"},dist:{shasum:"e4c81e0829cf0a65ab70e998b8232723b5c1bc48",tarball:"https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz"},maintainers:[{name:"indutny",email:"fedor@indutny.com"}],_npmOperationalInternal:{host:"packages-16-east.internal.npmjs.com",tmp:"tmp/elliptic-6.3.2.tgz_1473938837205_0.3108903462998569"},directories:{},_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz"}},function(t,e){t.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(t,e){t.exports={name:"elliptic",version:"6.3.2",description:"EC cryptography",main:"lib/elliptic.js",files:["lib"],scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",unit:"istanbul test _mocha --reporter=spec test/index.js",test:"npm run lint && npm run unit",version:"grunt dist && git add dist/"},repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},keywords:["EC","Elliptic","curve","Cryptography"],author:{name:"Fedor Indutny",email:"fedor@indutny.com"},license:"MIT",bugs:{url:"https://github.com/indutny/elliptic/issues"},homepage:"https://github.com/indutny/elliptic",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0",inherits:"^2.0.1"},gitHead:"cbace4683a4a548dc0306ef36756151a20299cd5",_id:"elliptic@6.3.2",_shasum:"e4c81e0829cf0a65ab70e998b8232723b5c1bc48",_from:"elliptic@>=6.0.0 <7.0.0",_npmVersion:"3.10.3",_nodeVersion:"6.3.0",_npmUser:{name:"indutny",email:"fedor@indutny.com"},dist:{shasum:"e4c81e0829cf0a65ab70e998b8232723b5c1bc48",tarball:"https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz"},maintainers:[{name:"indutny",email:"fedor@indutny.com"}],_npmOperationalInternal:{host:"packages-16-east.internal.npmjs.com",tmp:"tmp/elliptic-6.3.2.tgz_1473938837205_0.3108903462998569"},directories:{},_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz"}},function(t,e){t.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},function(t,e){t.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(195),f=function(t){function e(){return n(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(195),f=function(t){function e(){return n(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return o(e,t),e}(a);t.exports=f},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(196),a=function(){function t(){n(this,t),this.size=0}return i(t,[{key:"writeUInt",value:function(t,e){this.size+=e}},{key:"writeVarUInt",value:function(t){if(e.isBuffer(t))return void this.writeVarOctetString(t);if(!o(t))throw new Error("UInt must be an integer");if(t<0)throw new Error("UInt must be positive");var r=Math.ceil(t.toString(2).length/8);this.writeVarOctetString({length:r})}},{key:"writeOctetString",value:function(t,e){this.skip(e)}},{key:"writeVarOctetString",value:function(t){if(this.skip(1),t.length>127){var e=Math.ceil(t.length.toString(2).length/8);this.skip(e)}this.skip(t.length)}},{key:"write",value:function(t){this.size+=t.length}},{key:"skip",value:function(t){this.size+=t}},{key:"getSize",value:function(){return this.size}}]),t}();[1,2,4,8].forEach(function(t){a.prototype["writeUInt"+8*t]=function(e){return this.writeUInt(e,t)}}),t.exports=a}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(471),a=r(470),f=function(){function t(e){n(this,t),this.buffer=e,this.cursor=0,this.bookmarks=[]}return i(t,[{key:"bookmark",value:function(){this.bookmarks.push(this.cursor)}},{key:"restore",value:function(){this.cursor=this.bookmarks.pop()}},{key:"ensureAvailable",value:function(t){if(this.buffer.length<this.cursor+t)throw new o("Tried to read "+t+" bytes, but only "+(this.buffer.length-this.cursor)+" bytes available")}},{key:"readUInt",value:function(t){var e=this.peekUInt(t);return this.cursor+=t,e}},{key:"peekUInt",value:function(e){if(0===e)return 0;if(e<0)throw new Error("Tried to read integer with negative length (provided: "+e+")");if(e>t.MAX_INT_BYTES)throw new Error("Tried to read too large integer (requested: "+e+", max: "+t.MAX_INT_BYTES+")");this.ensureAvailable(e);var r=this.buffer.readUIntBE(this.cursor,e);return r}},{key:"skipUInt",value:function(t){this.skip(t)}},{key:"readUInt64",value:function(){return[this.readUInt32(),this.readUInt32()]}},{key:"peekUInt64",value:function(){this.bookmark();var t=this.readUInt64();return this.restore(),t}},{key:"skipUInt64",value:function(){this.skip(8)}},{key:"readVarUInt",value:function(){var e=this.readVarOctetString();if(e.length>t.MAX_INT_BYTES)throw new a("UInt of length "+e.length+" too large to parse as integer (max: "+t.MAX_INT_BYTES+")");if(0===e.length)throw new a("UInt of length 0 is invalid");return e.readUIntBE(0,e.length)}},{key:"peekVarUInt",value:function(){this.bookmark();var t=this.readVarUInt();return this.restore(),t}},{key:"skipVarUInt",value:function(){this.skipVarOctetString()}},{key:"readOctetString",value:function(t){return this.read(t)}},{key:"peekOctetString",value:function(t){return this.peek(t)}},{key:"skipOctetString",value:function(t){return this.skip(t)}},{key:"readLengthPrefix",value:function(){var e=this.readUInt8();if(e&t.HIGH_BIT){var r=e&t.LOWER_SEVEN_BITS,n=this.readUInt(r),i=Math.max(128,1<<8*(r-1));if(n<i)throw new a("Length prefix encoding is not canonical: "+n+" encoded in "+r+" bytes");return n}return e}},{key:"readVarOctetString",value:function(){var t=this.readLengthPrefix();return this.read(t)}},{key:"peekVarOctetString",value:function(){this.bookmark();var t=this.readVarOctetString();return this.restore(),t}},{key:"skipVarOctetString",value:function(){var t=this.readLengthPrefix();return this.skip(t)}},{key:"read",value:function(t){this.ensureAvailable(t);var e=this.buffer.slice(this.cursor,this.cursor+t);return this.cursor+=t,e}},{key:"peek",value:function(t){return this.ensureAvailable(t),this.buffer.slice(this.cursor,this.cursor+t)}},{key:"skip",value:function(t){this.ensureAvailable(t),this.cursor+=t}}],[{key:"from",value:function(r){if(e.isBuffer(r))return new t(r);if(r instanceof t)return new t(r.buffer.slice(r.cursor));throw new Error("Reader must be given a Buffer")}}]),t}();f.HIGH_BIT=128,f.LOWER_SEVEN_BITS=127,f.MAX_INT_BYTES=6,["read","peek","skip"].forEach(function(t){[1,2,4].forEach(function(e){f.prototype[t+"UInt"+8*e]=function(){return this[t+"UInt"](e)}})}),t.exports=f}).call(e,r(1).Buffer)},function(t,e,r){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(196),a=function(){function t(){n(this,t),this.components=[]}return i(t,[{key:"writeUInt",value:function(t,r){if(!o(t))throw new Error("UInt must be an integer");if(t<0)throw new Error("UInt must be positive");if(r<=0)throw new Error("UInt length must be greater than zero");if(t.toString(2).length>8*r)throw new Error("UInt "+t+" does not fit in "+r+" bytes");var n=new e(r);n.writeUIntBE(t,0,r),this.write(n)}},{key:"writeVarUInt",value:function(r){if(e.isBuffer(r))return void this.writeVarOctetString(r);if(!o(r))throw new Error("UInt must be an integer");if(r<0)throw new Error("UInt must be positive");if(r>t.MAX_SAFE_INTEGER)throw new Error("UInt is too large");var n=Math.ceil(r.toString(2).length/8),i=new e(n);i.writeUIntBE(r,0,n),this.writeVarOctetString(i)}},{key:"writeUInt64",value:function(e){if(o(e)&&e<=t.MAX_SAFE_INTEGER)return this.writeUInt32(Math.floor(e/4294967296)),void this.writeUInt32(4294967295&e);if(!Array.isArray(e)||2!==e.length||!o(e[0])||!o(e[1]))throw new TypeError("Expected 64-bit integer as an array of two 32-bit words");this.writeUInt32(e[0]),this.writeUInt32(e[1])}},{key:"writeOctetString",value:function(t,e){if(t.length!==e)throw new Error("Incorrect length for octet string (actual: "+t.length+", expected: "+e+")");this.write(t)}},{key:"writeVarOctetString",value:function(t){if(!e.isBuffer(t))throw new TypeError("Expects a buffer");var r=128;if(t.length<=127)this.writeUInt8(t.length);else{var n=Math.ceil(t.length.toString(2).length/8);this.writeUInt8(r|n),this.writeUInt(t.length,n)}this.write(t)}},{key:"write",value:function(t){this.components.push(t)}},{key:"getBuffer",value:function(){return e.concat(this.components)}}]),t}();a.MAX_SAFE_INTEGER=r(475),[1,2,4].forEach(function(t){a.prototype["writeUInt"+8*t]=function(e){this.writeUInt(e,t)}}),t.exports=a}).call(e,r(1).Buffer)},function(t,e,r){r(487),t.exports=9007199254740991},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(89);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(476);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(89),i=r(200).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){var n=r(483),i=r(484);t.exports=r(144)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){t.exports=!r(144)&&!r(199)(function(){return 7!=Object.defineProperty(r(479)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(89),i=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&i(t)===t}},function(t,e,r){var n=r(477),i=r(481),o=r(485),a=Object.defineProperty;e.f=r(144)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(89);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(198);n(n.S,"Number",{isInteger:r(482)})},function(t,e,r){var n=r(198);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,r){!function(t){"use strict";function e(t,e,r,n){t[e]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r,t[e+4]=n>>24&255,t[e+5]=n>>16&255,t[e+6]=n>>8&255,t[e+7]=255&n}function n(t,e,r,n,i){var o,a=0;for(o=0;o<i;o++)a|=t[e+o]^r[n+o];return(1&a-1>>>8)-1}function i(t,e,r,i){return n(t,e,r,i,16)}function o(t,e,r,i){return n(t,e,r,i,32)}function a(t,e,r,n){for(var i,o=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,s=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,d=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,l=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,v=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,y=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,m=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,g=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,_=o,M=a,S=f,E=s,A=u,k=h,x=c,I=d,B=l,O=p,R=b,P=v,T=y,j=m,C=g,N=w,L=0;L<20;L+=2)i=_+T|0,A^=i<<7|i>>>25,i=A+_|0,B^=i<<9|i>>>23,i=B+A|0,T^=i<<13|i>>>19,i=T+B|0,_^=i<<18|i>>>14,i=k+M|0,O^=i<<7|i>>>25,i=O+k|0,j^=i<<9|i>>>23,i=j+O|0,M^=i<<13|i>>>19,i=M+j|0,k^=i<<18|i>>>14,i=R+x|0,C^=i<<7|i>>>25,i=C+R|0,S^=i<<9|i>>>23,i=S+C|0,x^=i<<13|i>>>19,i=x+S|0,R^=i<<18|i>>>14,i=N+P|0,E^=i<<7|i>>>25,i=E+N|0,I^=i<<9|i>>>23,i=I+E|0,P^=i<<13|i>>>19,i=P+I|0,N^=i<<18|i>>>14,i=_+E|0,M^=i<<7|i>>>25,i=M+_|0,S^=i<<9|i>>>23,i=S+M|0,E^=i<<13|i>>>19,i=E+S|0,_^=i<<18|i>>>14,i=k+A|0,x^=i<<7|i>>>25,i=x+k|0,I^=i<<9|i>>>23,i=I+x|0,A^=i<<13|i>>>19,i=A+I|0,k^=i<<18|i>>>14,i=R+O|0,P^=i<<7|i>>>25,i=P+R|0,B^=i<<9|i>>>23,i=B+P|0,O^=i<<13|i>>>19,i=O+B|0,R^=i<<18|i>>>14,i=N+C|0,T^=i<<7|i>>>25,i=T+N|0,j^=i<<9|i>>>23,i=j+T|0,C^=i<<13|i>>>19,i=C+j|0,N^=i<<18|i>>>14;_=_+o|0,M=M+a|0,S=S+f|0,E=E+s|0,A=A+u|0,k=k+h|0,x=x+c|0,I=I+d|0,B=B+l|0,O=O+p|0,R=R+b|0,P=P+v|0,T=T+y|0,j=j+m|0,C=C+g|0,N=N+w|0,t[0]=_>>>0&255,t[1]=_>>>8&255,t[2]=_>>>16&255,t[3]=_>>>24&255,t[4]=M>>>0&255,t[5]=M>>>8&255,t[6]=M>>>16&255,t[7]=M>>>24&255,t[8]=S>>>0&255,t[9]=S>>>8&255,t[10]=S>>>16&255,t[11]=S>>>24&255,t[12]=E>>>0&255,t[13]=E>>>8&255,t[14]=E>>>16&255,t[15]=E>>>24&255,t[16]=A>>>0&255,t[17]=A>>>8&255,t[18]=A>>>16&255,t[19]=A>>>24&255,t[20]=k>>>0&255,t[21]=k>>>8&255,t[22]=k>>>16&255,t[23]=k>>>24&255,t[24]=x>>>0&255,t[25]=x>>>8&255,t[26]=x>>>16&255,t[27]=x>>>24&255,t[28]=I>>>0&255,t[29]=I>>>8&255,t[30]=I>>>16&255,t[31]=I>>>24&255,t[32]=B>>>0&255,t[33]=B>>>8&255,t[34]=B>>>16&255,t[35]=B>>>24&255,t[36]=O>>>0&255,t[37]=O>>>8&255,t[38]=O>>>16&255,t[39]=O>>>24&255,t[40]=R>>>0&255,t[41]=R>>>8&255,t[42]=R>>>16&255,t[43]=R>>>24&255,t[44]=P>>>0&255,t[45]=P>>>8&255,t[46]=P>>>16&255,t[47]=P>>>24&255,t[48]=T>>>0&255,t[49]=T>>>8&255,t[50]=T>>>16&255,t[51]=T>>>24&255,t[52]=j>>>0&255,t[53]=j>>>8&255,t[54]=j>>>16&255,t[55]=j>>>24&255,t[56]=C>>>0&255,t[57]=C>>>8&255,t[58]=C>>>16&255,t[59]=C>>>24&255,t[60]=N>>>0&255,t[61]=N>>>8&255,t[62]=N>>>16&255,t[63]=N>>>24&255}function f(t,e,r,n){for(var i,o=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,f=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,s=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,d=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,l=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,v=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,y=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,m=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,g=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,_=o,M=a,S=f,E=s,A=u,k=h,x=c,I=d,B=l,O=p,R=b,P=v,T=y,j=m,C=g,N=w,L=0;L<20;L+=2)i=_+T|0,A^=i<<7|i>>>25,i=A+_|0,B^=i<<9|i>>>23,i=B+A|0,T^=i<<13|i>>>19,i=T+B|0,_^=i<<18|i>>>14,i=k+M|0,O^=i<<7|i>>>25,i=O+k|0,j^=i<<9|i>>>23,i=j+O|0,M^=i<<13|i>>>19,i=M+j|0,k^=i<<18|i>>>14,i=R+x|0,C^=i<<7|i>>>25,i=C+R|0,S^=i<<9|i>>>23,i=S+C|0,x^=i<<13|i>>>19,i=x+S|0,R^=i<<18|i>>>14,i=N+P|0,E^=i<<7|i>>>25,i=E+N|0,I^=i<<9|i>>>23,i=I+E|0,P^=i<<13|i>>>19,i=P+I|0,N^=i<<18|i>>>14,i=_+E|0,M^=i<<7|i>>>25,i=M+_|0,S^=i<<9|i>>>23,i=S+M|0,E^=i<<13|i>>>19,i=E+S|0,_^=i<<18|i>>>14,i=k+A|0,x^=i<<7|i>>>25,i=x+k|0,I^=i<<9|i>>>23,i=I+x|0,A^=i<<13|i>>>19,i=A+I|0,k^=i<<18|i>>>14,i=R+O|0,P^=i<<7|i>>>25,i=P+R|0,B^=i<<9|i>>>23,i=B+P|0,O^=i<<13|i>>>19,i=O+B|0,R^=i<<18|i>>>14,i=N+C|0,T^=i<<7|i>>>25,i=T+N|0,j^=i<<9|i>>>23,i=j+T|0,C^=i<<13|i>>>19,i=C+j|0,N^=i<<18|i>>>14;t[0]=_>>>0&255,t[1]=_>>>8&255,t[2]=_>>>16&255,t[3]=_>>>24&255,t[4]=k>>>0&255,t[5]=k>>>8&255,t[6]=k>>>16&255,t[7]=k>>>24&255,t[8]=R>>>0&255,t[9]=R>>>8&255,t[10]=R>>>16&255,t[11]=R>>>24&255,t[12]=N>>>0&255,t[13]=N>>>8&255,t[14]=N>>>16&255,t[15]=N>>>24&255,t[16]=x>>>0&255,t[17]=x>>>8&255,t[18]=x>>>16&255,t[19]=x>>>24&255,t[20]=I>>>0&255,t[21]=I>>>8&255,t[22]=I>>>16&255,t[23]=I>>>24&255,t[24]=B>>>0&255,t[25]=B>>>8&255,t[26]=B>>>16&255,t[27]=B>>>24&255,t[28]=O>>>0&255,t[29]=O>>>8&255,t[30]=O>>>16&255,t[31]=O>>>24&255}function s(t,e,r,n){a(t,e,r,n)}function u(t,e,r,n){f(t,e,r,n)}function h(t,e,r,n,i,o,a){var f,u,h=new Uint8Array(16),c=new Uint8Array(64);for(u=0;u<16;u++)h[u]=0;for(u=0;u<8;u++)h[u]=o[u];for(;i>=64;){for(s(c,h,a,dt),u=0;u<64;u++)t[e+u]=r[n+u]^c[u];for(f=1,u=8;u<16;u++)f=f+(255&h[u])|0,h[u]=255&f,f>>>=8;i-=64,e+=64,n+=64}if(i>0)for(s(c,h,a,dt),u=0;u<i;u++)t[e+u]=r[n+u]^c[u];return 0}function c(t,e,r,n,i){var o,a,f=new Uint8Array(16),u=new Uint8Array(64);for(a=0;a<16;a++)f[a]=0;for(a=0;a<8;a++)f[a]=n[a];for(;r>=64;){for(s(u,f,i,dt),a=0;a<64;a++)t[e+a]=u[a];for(o=1,a=8;a<16;a++)o=o+(255&f[a])|0,f[a]=255&o,o>>>=8;r-=64,e+=64}if(r>0)for(s(u,f,i,dt),a=0;a<r;a++)t[e+a]=u[a];return 0}function d(t,e,r,n,i){var o=new Uint8Array(32);u(o,n,i,dt);for(var a=new Uint8Array(8),f=0;f<8;f++)a[f]=n[f+16];return c(t,e,r,a,o)}function l(t,e,r,n,i,o,a){var f=new Uint8Array(32);u(f,o,a,dt);for(var s=new Uint8Array(8),c=0;c<8;c++)s[c]=o[c+16];return h(t,e,r,n,i,s,f)}function p(t,e,r,n,i,o){var a=new lt(o);return a.update(r,n,i),a.finish(t,e),0}function b(t,e,r,n,o,a){var f=new Uint8Array(16);return p(f,0,r,n,o,a),i(t,e,f,0)}function v(t,e,r,n,i){var o;if(r<32)return-1;for(l(t,0,e,0,r,n,i),p(t,16,t,32,r-32,t),o=0;o<16;o++)t[o]=0;return 0}function y(t,e,r,n,i){var o,a=new Uint8Array(32);if(r<32)return-1;if(d(a,0,32,n,i),0!==b(e,16,e,32,r-32,a))return-1;for(l(t,0,e,0,r,n,i),o=0;o<32;o++)t[o]=0;return 0}function m(t,e){var r;for(r=0;r<16;r++)t[r]=0|e[r]}function g(t){var e,r,n=1;for(e=0;e<16;e++)r=t[e]+n+65535,n=Math.floor(r/65536),t[e]=r-65536*n;t[0]+=n-1+37*(n-1)}function w(t,e,r){for(var n,i=~(r-1),o=0;o<16;o++)n=i&(t[o]^e[o]),t[o]^=n,e[o]^=n}function _(t,e){var r,n,i,o=tt(),a=tt();for(r=0;r<16;r++)a[r]=e[r];for(g(a),g(a),g(a),n=0;n<2;n++){for(o[0]=a[0]-65517,r=1;r<15;r++)o[r]=a[r]-65535-(o[r-1]>>16&1),o[r-1]&=65535;o[15]=a[15]-32767-(o[14]>>16&1),i=o[15]>>16&1,o[14]&=65535,w(a,o,1-i)}for(r=0;r<16;r++)t[2*r]=255&a[r],t[2*r+1]=a[r]>>8}function M(t,e){var r=new Uint8Array(32),n=new Uint8Array(32);return _(r,t),_(n,e),o(r,0,n,0)}function S(t){var e=new Uint8Array(32);return _(e,t),1&e[0]}function E(t,e){var r;for(r=0;r<16;r++)t[r]=e[2*r]+(e[2*r+1]<<8);t[15]&=32767}function A(t,e,r){for(var n=0;n<16;n++)t[n]=e[n]+r[n]}function k(t,e,r){for(var n=0;n<16;n++)t[n]=e[n]-r[n]}function x(t,e,r){var n,i,o=0,a=0,f=0,s=0,u=0,h=0,c=0,d=0,l=0,p=0,b=0,v=0,y=0,m=0,g=0,w=0,_=0,M=0,S=0,E=0,A=0,k=0,x=0,I=0,B=0,O=0,R=0,P=0,T=0,j=0,C=0,N=r[0],L=r[1],U=r[2],z=r[3],D=r[4],q=r[5],F=r[6],K=r[7],G=r[8],V=r[9],H=r[10],X=r[11],Y=r[12],W=r[13],Z=r[14],J=r[15];n=e[0],o+=n*N,a+=n*L,f+=n*U,s+=n*z,u+=n*D,h+=n*q,c+=n*F,d+=n*K,l+=n*G,p+=n*V,b+=n*H,v+=n*X,y+=n*Y,m+=n*W,g+=n*Z,w+=n*J,n=e[1],a+=n*N,f+=n*L,s+=n*U,u+=n*z,h+=n*D,c+=n*q,d+=n*F,l+=n*K,p+=n*G,b+=n*V,v+=n*H,y+=n*X,m+=n*Y,g+=n*W,w+=n*Z,_+=n*J,n=e[2],f+=n*N,s+=n*L,u+=n*U,h+=n*z,c+=n*D,d+=n*q,l+=n*F,p+=n*K,b+=n*G,v+=n*V,y+=n*H,m+=n*X,g+=n*Y,w+=n*W,_+=n*Z,M+=n*J,n=e[3],s+=n*N,u+=n*L,h+=n*U,c+=n*z,d+=n*D,l+=n*q,p+=n*F,b+=n*K,v+=n*G,y+=n*V,m+=n*H,g+=n*X,w+=n*Y,_+=n*W,M+=n*Z,S+=n*J,n=e[4],u+=n*N,h+=n*L,c+=n*U,d+=n*z,l+=n*D,p+=n*q,b+=n*F,v+=n*K,y+=n*G,m+=n*V,g+=n*H,w+=n*X,_+=n*Y,M+=n*W,S+=n*Z,E+=n*J,n=e[5],h+=n*N,c+=n*L,d+=n*U,l+=n*z,p+=n*D,b+=n*q,v+=n*F,y+=n*K,m+=n*G,g+=n*V,w+=n*H,_+=n*X,M+=n*Y,S+=n*W,E+=n*Z,A+=n*J,n=e[6],c+=n*N,d+=n*L,l+=n*U,p+=n*z,b+=n*D,v+=n*q,y+=n*F,m+=n*K,g+=n*G,w+=n*V,_+=n*H,M+=n*X,S+=n*Y,E+=n*W,A+=n*Z,k+=n*J,n=e[7],d+=n*N,l+=n*L,p+=n*U,b+=n*z,v+=n*D,y+=n*q,m+=n*F,g+=n*K,w+=n*G,_+=n*V,M+=n*H,S+=n*X,E+=n*Y,A+=n*W,k+=n*Z,x+=n*J,n=e[8],l+=n*N,p+=n*L,b+=n*U,v+=n*z,y+=n*D,m+=n*q,g+=n*F,w+=n*K,_+=n*G,M+=n*V,S+=n*H,E+=n*X,A+=n*Y,k+=n*W,x+=n*Z,I+=n*J,n=e[9],p+=n*N,b+=n*L,v+=n*U,y+=n*z,m+=n*D,g+=n*q,w+=n*F,_+=n*K,M+=n*G,S+=n*V,E+=n*H,A+=n*X,k+=n*Y,x+=n*W,I+=n*Z,B+=n*J,n=e[10],b+=n*N,v+=n*L,y+=n*U,m+=n*z,g+=n*D,w+=n*q,_+=n*F,M+=n*K,S+=n*G,E+=n*V,A+=n*H,k+=n*X,x+=n*Y,I+=n*W,B+=n*Z,O+=n*J,n=e[11],v+=n*N,y+=n*L,m+=n*U,g+=n*z,w+=n*D,_+=n*q,M+=n*F,S+=n*K,E+=n*G,A+=n*V,k+=n*H,x+=n*X;I+=n*Y;B+=n*W,O+=n*Z,R+=n*J,n=e[12],y+=n*N,m+=n*L,g+=n*U,w+=n*z,_+=n*D,M+=n*q,S+=n*F,E+=n*K,A+=n*G,k+=n*V,x+=n*H,I+=n*X,B+=n*Y,O+=n*W,R+=n*Z,P+=n*J,n=e[13],m+=n*N,g+=n*L,w+=n*U,_+=n*z,M+=n*D,S+=n*q,E+=n*F,A+=n*K,k+=n*G,x+=n*V,I+=n*H,B+=n*X,O+=n*Y,R+=n*W,P+=n*Z,T+=n*J,n=e[14],g+=n*N,w+=n*L,_+=n*U,M+=n*z,S+=n*D,E+=n*q,A+=n*F,k+=n*K,x+=n*G,I+=n*V,B+=n*H,O+=n*X,R+=n*Y,P+=n*W,T+=n*Z,j+=n*J,n=e[15],w+=n*N,_+=n*L,M+=n*U,S+=n*z,E+=n*D,A+=n*q,k+=n*F,x+=n*K,I+=n*G,B+=n*V,O+=n*H,R+=n*X,P+=n*Y,T+=n*W,j+=n*Z,C+=n*J,o+=38*_,a+=38*M,f+=38*S,s+=38*E,u+=38*A,h+=38*k,c+=38*x,d+=38*I,l+=38*B,p+=38*O,b+=38*R,v+=38*P,y+=38*T,m+=38*j,g+=38*C,i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),i=1,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=u+i+65535,i=Math.floor(n/65536),u=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=w+i+65535,i=Math.floor(n/65536),w=n-65536*i,o+=i-1+37*(i-1),t[0]=o,t[1]=a,t[2]=f,t[3]=s,t[4]=u,t[5]=h,t[6]=c,t[7]=d,t[8]=l,t[9]=p,t[10]=b,t[11]=v,t[12]=y,t[13]=m;t[14]=g;t[15]=w}function I(t,e){x(t,e,e)}function B(t,e){var r,n=tt();for(r=0;r<16;r++)n[r]=e[r];for(r=253;r>=0;r--)I(n,n),2!==r&&4!==r&&x(n,n,e);for(r=0;r<16;r++)t[r]=n[r]}function O(t,e){var r,n=tt();for(r=0;r<16;r++)n[r]=e[r];for(r=250;r>=0;r--)I(n,n),1!==r&&x(n,n,e);for(r=0;r<16;r++)t[r]=n[r]}function R(t,e,r){var n,i,o=new Uint8Array(32),a=new Float64Array(80),f=tt(),s=tt(),u=tt(),h=tt(),c=tt(),d=tt();for(i=0;i<31;i++)o[i]=e[i];for(o[31]=127&e[31]|64,o[0]&=248,E(a,r),i=0;i<16;i++)s[i]=a[i],h[i]=f[i]=u[i]=0;for(f[0]=h[0]=1,i=254;i>=0;--i)n=o[i>>>3]>>>(7&i)&1,w(f,s,n),w(u,h,n),A(c,f,u),k(f,f,u),A(u,s,h),k(s,s,h),I(h,c),I(d,f),x(f,u,f),x(u,s,c),A(c,f,u),k(f,f,u),I(s,f),k(u,h,d),x(f,u,at),A(f,f,h),x(u,u,f),x(f,h,d),x(h,s,a),I(s,c),w(f,s,n),w(u,h,n);for(i=0;i<16;i++)a[i+16]=f[i],a[i+32]=u[i],a[i+48]=s[i],a[i+64]=h[i];var l=a.subarray(32),p=a.subarray(16);return B(l,l),x(p,p,l),_(t,p),0}function P(t,e){return R(t,e,nt)}function T(t,e){return et(e,32),P(t,e)}function j(t,e,r){var n=new Uint8Array(32);return R(n,r,e),u(t,rt,n,dt)}function C(t,e,r,n,i,o){var a=new Uint8Array(32);return j(a,i,o),pt(t,e,r,n,a)}function N(t,e,r,n,i,o){var a=new Uint8Array(32);return j(a,i,o),bt(t,e,r,n,a)}function L(t,e,r,n){for(var i,o,a,f,s,u,h,c,d,l,p,b,v,y,m,g,w,_,M,S,E,A,k,x,I,B,O=new Int32Array(16),R=new Int32Array(16),P=t[0],T=t[1],j=t[2],C=t[3],N=t[4],L=t[5],U=t[6],z=t[7],D=e[0],q=e[1],F=e[2],K=e[3],G=e[4],V=e[5],H=e[6],X=e[7],Y=0;n>=128;){for(M=0;M<16;M++)S=8*M+Y,O[M]=r[S+0]<<24|r[S+1]<<16|r[S+2]<<8|r[S+3],R[M]=r[S+4]<<24|r[S+5]<<16|r[S+6]<<8|r[S+7];for(M=0;M<80;M++)if(i=P,o=T,a=j,f=C,s=N,u=L,h=U,c=z,d=D,l=q,p=F,b=K,v=G,y=V,m=H,g=X,E=z,A=X,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=(N>>>14|G<<18)^(N>>>18|G<<14)^(G>>>9|N<<23),A=(G>>>14|N<<18)^(G>>>18|N<<14)^(N>>>9|G<<23),k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,E=N&L^~N&U,A=G&V^~G&H,k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,E=vt[2*M],A=vt[2*M+1],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,E=O[M%16],A=R[M%16],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,w=65535&I|B<<16,_=65535&k|x<<16,E=w,A=_,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=(P>>>28|D<<4)^(D>>>2|P<<30)^(D>>>7|P<<25),A=(D>>>28|P<<4)^(P>>>2|D<<30)^(P>>>7|D<<25),k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,E=P&T^P&j^T&j,A=D&q^D&F^q&F,k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,c=65535&I|B<<16,g=65535&k|x<<16,E=f,A=b,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=w,A=_,k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,f=65535&I|B<<16,b=65535&k|x<<16,T=i,j=o,C=a,N=f,L=s,U=u,z=h,P=c,q=d,F=l,K=p,G=b,V=v,H=y,X=m,D=g,M%16===15)for(S=0;S<16;S++)E=O[S],A=R[S],k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=O[(S+9)%16],A=R[(S+9)%16],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,w=O[(S+1)%16],_=R[(S+1)%16],E=(w>>>1|_<<31)^(w>>>8|_<<24)^w>>>7,A=(_>>>1|w<<31)^(_>>>8|w<<24)^(_>>>7|w<<25),k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,w=O[(S+14)%16],_=R[(S+14)%16],E=(w>>>19|_<<13)^(_>>>29|w<<3)^w>>>6,A=(_>>>19|w<<13)^(w>>>29|_<<3)^(_>>>6|w<<26),k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,O[S]=65535&I|B<<16,R[S]=65535&k|x<<16;E=P,A=D,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[0],A=e[0],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[0]=P=65535&I|B<<16,e[0]=D=65535&k|x<<16,E=T,A=q,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[1],A=e[1],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[1]=T=65535&I|B<<16,e[1]=q=65535&k|x<<16,E=j,A=F,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[2],A=e[2],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[2]=j=65535&I|B<<16,e[2]=F=65535&k|x<<16,E=C,A=K,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[3],A=e[3],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[3]=C=65535&I|B<<16,e[3]=K=65535&k|x<<16,E=N,A=G,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[4],A=e[4],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[4]=N=65535&I|B<<16,e[4]=G=65535&k|x<<16,E=L,A=V,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[5],A=e[5],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[5]=L=65535&I|B<<16,e[5]=V=65535&k|x<<16,E=U,A=H,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[6],A=e[6],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[6]=U=65535&I|B<<16,e[6]=H=65535&k|x<<16,E=z,A=X,k=65535&A,x=A>>>16,I=65535&E,B=E>>>16,E=t[7],A=e[7],k+=65535&A,x+=A>>>16,I+=65535&E,B+=E>>>16,x+=k>>>16,I+=x>>>16,B+=I>>>16,t[7]=z=65535&I|B<<16,e[7]=X=65535&k|x<<16,Y+=128,n-=128}return n}function U(t,r,n){var i,o=new Int32Array(8),a=new Int32Array(8),f=new Uint8Array(256),s=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,a[0]=4089235720,a[1]=2227873595,a[2]=4271175723,a[3]=1595750129,a[4]=2917565137,a[5]=725511199,a[6]=4215389547,a[7]=327033209,L(o,a,r,n),n%=128,i=0;i<n;i++)f[i]=r[s-n+i];for(f[n]=128,n=256-128*(n<112?1:0),f[n-9]=0,e(f,n-8,s/536870912|0,s<<3),L(o,a,f,n),i=0;i<8;i++)e(t,8*i,o[i],a[i]);return 0}function z(t,e){var r=tt(),n=tt(),i=tt(),o=tt(),a=tt(),f=tt(),s=tt(),u=tt(),h=tt();k(r,t[1],t[0]),k(h,e[1],e[0]),x(r,r,h),A(n,t[0],t[1]),A(h,e[0],e[1]),x(n,n,h),x(i,t[3],e[3]),x(i,i,st),x(o,t[2],e[2]),A(o,o,o),k(a,n,r),k(f,o,i),A(s,o,i),A(u,n,r),x(t[0],a,f),x(t[1],u,s),x(t[2],s,f),x(t[3],a,u)}function D(t,e,r){var n;for(n=0;n<4;n++)w(t[n],e[n],r)}function q(t,e){var r=tt(),n=tt(),i=tt();B(i,e[2]),x(r,e[0],i),x(n,e[1],i),_(t,n),t[31]^=S(r)<<7}function F(t,e,r){var n,i;for(m(t[0],it),m(t[1],ot),m(t[2],ot),m(t[3],it),i=255;i>=0;--i)n=r[i/8|0]>>(7&i)&1,D(t,e,n),z(e,t),z(t,t),D(t,e,n)}function K(t,e){var r=[tt(),tt(),tt(),tt()];
m(r[0],ut),m(r[1],ht),m(r[2],ot),x(r[3],ut,ht),F(t,r,e)}function G(t,e,r){var n,i=new Uint8Array(64),o=[tt(),tt(),tt(),tt()];for(r||et(e,32),U(i,e,32),i[0]&=248,i[31]&=127,i[31]|=64,K(o,i),q(t,o),n=0;n<32;n++)e[n+32]=t[n];return 0}function V(t,e){var r,n,i,o;for(n=63;n>=32;--n){for(r=0,i=n-32,o=n-12;i<o;++i)e[i]+=r-16*e[n]*yt[i-(n-32)],r=e[i]+128>>8,e[i]-=256*r;e[i]+=r,e[n]=0}for(r=0,i=0;i<32;i++)e[i]+=r-(e[31]>>4)*yt[i],r=e[i]>>8,e[i]&=255;for(i=0;i<32;i++)e[i]-=r*yt[i];for(n=0;n<32;n++)e[n+1]+=e[n]>>8,t[n]=255&e[n]}function H(t){var e,r=new Float64Array(64);for(e=0;e<64;e++)r[e]=t[e];for(e=0;e<64;e++)t[e]=0;V(t,r)}function X(t,e,r,n){var i,o,a=new Uint8Array(64),f=new Uint8Array(64),s=new Uint8Array(64),u=new Float64Array(64),h=[tt(),tt(),tt(),tt()];U(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64;var c=r+64;for(i=0;i<r;i++)t[64+i]=e[i];for(i=0;i<32;i++)t[32+i]=a[32+i];for(U(s,t.subarray(32),r+32),H(s),K(h,s),q(t,h),i=32;i<64;i++)t[i]=n[i];for(U(f,t,r+64),H(f),i=0;i<64;i++)u[i]=0;for(i=0;i<32;i++)u[i]=s[i];for(i=0;i<32;i++)for(o=0;o<32;o++)u[i+o]+=f[i]*a[o];return V(t.subarray(32),u),c}function Y(t,e){var r=tt(),n=tt(),i=tt(),o=tt(),a=tt(),f=tt(),s=tt();return m(t[2],ot),E(t[1],e),I(i,t[1]),x(o,i,ft),k(i,i,t[2]),A(o,t[2],o),I(a,o),I(f,a),x(s,f,a),x(r,s,i),x(r,r,o),O(r,r),x(r,r,i),x(r,r,o),x(r,r,o),x(t[0],r,o),I(n,t[0]),x(n,n,o),M(n,i)&&x(t[0],t[0],ct),I(n,t[0]),x(n,n,o),M(n,i)?-1:(S(t[0])===e[31]>>7&&k(t[0],it,t[0]),x(t[3],t[0],t[1]),0)}function W(t,e,r,n){var i,a,f=new Uint8Array(32),s=new Uint8Array(64),u=[tt(),tt(),tt(),tt()],h=[tt(),tt(),tt(),tt()];if(a=-1,r<64)return-1;if(Y(h,n))return-1;for(i=0;i<r;i++)t[i]=e[i];for(i=0;i<32;i++)t[i+32]=n[i];if(U(s,t,r),H(s),F(u,h,s),K(h,e.subarray(32)),z(u,h),q(f,u),r-=64,o(e,0,f,0)){for(i=0;i<r;i++)t[i]=0;return-1}for(i=0;i<r;i++)t[i]=e[i+64];return a=r}function Z(t,e){if(t.length!==mt)throw new Error("bad key size");if(e.length!==gt)throw new Error("bad nonce size")}function J(t,e){if(t.length!==Et)throw new Error("bad public key size");if(e.length!==At)throw new Error("bad secret key size")}function $(){var t,e;for(e=0;e<arguments.length;e++)if("[object Uint8Array]"!==(t=Object.prototype.toString.call(arguments[e])))throw new TypeError("unexpected type "+t+", use Uint8Array")}function Q(t){for(var e=0;e<t.length;e++)t[e]=0}var tt=function(t){var e,r=new Float64Array(16);if(t)for(e=0;e<t.length;e++)r[e]=t[e];return r},et=function(){throw new Error("no PRNG")},rt=new Uint8Array(16),nt=new Uint8Array(32);nt[0]=9;var it=tt(),ot=tt([1]),at=tt([56129,1]),ft=tt([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),st=tt([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),ut=tt([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),ht=tt([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ct=tt([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),dt=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),lt=function(t){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var e,r,n,i,o,a,f,s;e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,r=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|r<<3),n=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(r>>>10|n<<6),i=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(n>>>7|i<<9),o=255&t[8]|(255&t[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,a=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(o>>>14|a<<2),f=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(a>>>11|f<<5),s=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(f>>>8|s<<8),this.r[9]=s>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8};lt.prototype.blocks=function(t,e,r){for(var n,i,o,a,f,s,u,h,c,d,l,p,b,v,y,m,g,w,_,M=this.fin?0:2048,S=this.h[0],E=this.h[1],A=this.h[2],k=this.h[3],x=this.h[4],I=this.h[5],B=this.h[6],O=this.h[7],R=this.h[8],P=this.h[9],T=this.r[0],j=this.r[1],C=this.r[2],N=this.r[3],L=this.r[4],U=this.r[5],z=this.r[6],D=this.r[7],q=this.r[8],F=this.r[9];r>=16;)n=255&t[e+0]|(255&t[e+1])<<8,S+=8191&n,i=255&t[e+2]|(255&t[e+3])<<8,E+=8191&(n>>>13|i<<3),o=255&t[e+4]|(255&t[e+5])<<8,A+=8191&(i>>>10|o<<6),a=255&t[e+6]|(255&t[e+7])<<8,k+=8191&(o>>>7|a<<9),f=255&t[e+8]|(255&t[e+9])<<8,x+=8191&(a>>>4|f<<12),I+=f>>>1&8191,s=255&t[e+10]|(255&t[e+11])<<8,B+=8191&(f>>>14|s<<2),u=255&t[e+12]|(255&t[e+13])<<8,O+=8191&(s>>>11|u<<5),h=255&t[e+14]|(255&t[e+15])<<8,R+=8191&(u>>>8|h<<8),P+=h>>>5|M,c=0,d=c,d+=S*T,d+=E*(5*F),d+=A*(5*q),d+=k*(5*D),d+=x*(5*z),c=d>>>13,d&=8191,d+=I*(5*U),d+=B*(5*L),d+=O*(5*N),d+=R*(5*C),d+=P*(5*j),c+=d>>>13,d&=8191,l=c,l+=S*j,l+=E*T,l+=A*(5*F),l+=k*(5*q),l+=x*(5*D),c=l>>>13,l&=8191,l+=I*(5*z),l+=B*(5*U),l+=O*(5*L),l+=R*(5*N),l+=P*(5*C),c+=l>>>13,l&=8191,p=c,p+=S*C,p+=E*j,p+=A*T,p+=k*(5*F),p+=x*(5*q),c=p>>>13,p&=8191,p+=I*(5*D),p+=B*(5*z),p+=O*(5*U),p+=R*(5*L),p+=P*(5*N),c+=p>>>13,p&=8191,b=c,b+=S*N,b+=E*C,b+=A*j,b+=k*T,b+=x*(5*F),c=b>>>13,b&=8191,b+=I*(5*q),b+=B*(5*D),b+=O*(5*z),b+=R*(5*U),b+=P*(5*L),c+=b>>>13,b&=8191,v=c,v+=S*L,v+=E*N,v+=A*C,v+=k*j,v+=x*T,c=v>>>13,v&=8191,v+=I*(5*F),v+=B*(5*q),v+=O*(5*D),v+=R*(5*z),v+=P*(5*U),c+=v>>>13,v&=8191,y=c,y+=S*U,y+=E*L,y+=A*N,y+=k*C,y+=x*j,c=y>>>13,y&=8191,y+=I*T,y+=B*(5*F),y+=O*(5*q),y+=R*(5*D),y+=P*(5*z),c+=y>>>13,y&=8191,m=c,m+=S*z,m+=E*U,m+=A*L,m+=k*N,m+=x*C,c=m>>>13,m&=8191,m+=I*j,m+=B*T,m+=O*(5*F),m+=R*(5*q),m+=P*(5*D),c+=m>>>13,m&=8191,g=c,g+=S*D,g+=E*z,g+=A*U,g+=k*L,g+=x*N,c=g>>>13,g&=8191,g+=I*C,g+=B*j,g+=O*T,g+=R*(5*F),g+=P*(5*q),c+=g>>>13,g&=8191,w=c,w+=S*q,w+=E*D,w+=A*z,w+=k*U,w+=x*L,c=w>>>13,w&=8191,w+=I*N,w+=B*C,w+=O*j,w+=R*T,w+=P*(5*F),c+=w>>>13,w&=8191,_=c,_+=S*F,_+=E*q,_+=A*D,_+=k*z,_+=x*U,c=_>>>13,_&=8191,_+=I*L,_+=B*N,_+=O*C,_+=R*j,_+=P*T,c+=_>>>13,_&=8191,c=(c<<2)+c|0,c=c+d|0,d=8191&c,c>>>=13,l+=c,S=d,E=l,A=p,k=b,x=v,I=y,B=m,O=g,R=w,P=_,e+=16,r-=16;this.h[0]=S,this.h[1]=E,this.h[2]=A,this.h[3]=k,this.h[4]=x,this.h[5]=I,this.h[6]=B,this.h[7]=O,this.h[8]=R,this.h[9]=P},lt.prototype.finish=function(t,e){var r,n,i,o,a=new Uint16Array(10);if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=r,r=this.h[o]>>>13,this.h[o]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,a[0]=this.h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this.h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,n=(1^r)-1,o=0;o<10;o++)a[o]&=n;for(n=~n,o=0;o<10;o++)this.h[o]=this.h[o]&n|a[o];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i;t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},lt.prototype.update=function(t,e,r){var n,i;if(this.leftover){for(i=16-this.leftover,i>r&&(i=r),n=0;n<i;n++)this.buffer[this.leftover+n]=t[e+n];if(r-=i,e+=i,this.leftover+=i,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(i=r-r%16,this.blocks(t,e,i),e+=i,r-=i),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=t[e+n];this.leftover+=r}};var pt=v,bt=y,vt=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],yt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),mt=32,gt=24,wt=32,_t=16,Mt=32,St=32,Et=32,At=32,kt=32,xt=gt,It=wt,Bt=_t,Ot=64,Rt=32,Pt=64,Tt=32,jt=64;t.lowlevel={crypto_core_hsalsa20:u,crypto_stream_xor:l,crypto_stream:d,crypto_stream_salsa20_xor:h,crypto_stream_salsa20:c,crypto_onetimeauth:p,crypto_onetimeauth_verify:b,crypto_verify_16:i,crypto_verify_32:o,crypto_secretbox:v,crypto_secretbox_open:y,crypto_scalarmult:R,crypto_scalarmult_base:P,crypto_box_beforenm:j,crypto_box_afternm:pt,crypto_box:C,crypto_box_open:N,crypto_box_keypair:T,crypto_hash:U,crypto_sign:X,crypto_sign_keypair:G,crypto_sign_open:W,crypto_secretbox_KEYBYTES:mt,crypto_secretbox_NONCEBYTES:gt,crypto_secretbox_ZEROBYTES:wt,crypto_secretbox_BOXZEROBYTES:_t,crypto_scalarmult_BYTES:Mt,crypto_scalarmult_SCALARBYTES:St,crypto_box_PUBLICKEYBYTES:Et,crypto_box_SECRETKEYBYTES:At,crypto_box_BEFORENMBYTES:kt,crypto_box_NONCEBYTES:xt,crypto_box_ZEROBYTES:It,crypto_box_BOXZEROBYTES:Bt,crypto_sign_BYTES:Ot,crypto_sign_PUBLICKEYBYTES:Rt,crypto_sign_SECRETKEYBYTES:Pt,crypto_sign_SEEDBYTES:Tt,crypto_hash_BYTES:jt},t.util||(t.util={},t.util.decodeUTF8=t.util.encodeUTF8=t.util.encodeBase64=t.util.decodeBase64=function(){throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js")}),t.randomBytes=function(t){var e=new Uint8Array(t);return et(e,t),e},t.secretbox=function(t,e,r){$(t,e,r),Z(r,e);for(var n=new Uint8Array(wt+t.length),i=new Uint8Array(n.length),o=0;o<t.length;o++)n[o+wt]=t[o];return v(i,n,n.length,e,r),i.subarray(_t)},t.secretbox.open=function(t,e,r){$(t,e,r),Z(r,e);for(var n=new Uint8Array(_t+t.length),i=new Uint8Array(n.length),o=0;o<t.length;o++)n[o+_t]=t[o];return!(n.length<32)&&(0===y(i,n,n.length,e,r)&&i.subarray(wt))},t.secretbox.keyLength=mt,t.secretbox.nonceLength=gt,t.secretbox.overheadLength=_t,t.scalarMult=function(t,e){if($(t,e),t.length!==St)throw new Error("bad n size");if(e.length!==Mt)throw new Error("bad p size");var r=new Uint8Array(Mt);return R(r,t,e),r},t.scalarMult.base=function(t){if($(t),t.length!==St)throw new Error("bad n size");var e=new Uint8Array(Mt);return P(e,t),e},t.scalarMult.scalarLength=St,t.scalarMult.groupElementLength=Mt,t.box=function(e,r,n,i){var o=t.box.before(n,i);return t.secretbox(e,r,o)},t.box.before=function(t,e){$(t,e),J(t,e);var r=new Uint8Array(kt);return j(r,t,e),r},t.box.after=t.secretbox,t.box.open=function(e,r,n,i){var o=t.box.before(n,i);return t.secretbox.open(e,r,o)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(Et),e=new Uint8Array(At);return T(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if($(t),t.length!==At)throw new Error("bad secret key size");var e=new Uint8Array(Et);return P(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=Et,t.box.secretKeyLength=At,t.box.sharedKeyLength=kt,t.box.nonceLength=xt,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if($(t,e),e.length!==Pt)throw new Error("bad secret key size");var r=new Uint8Array(Ot+t.length);return X(r,t,t.length,e),r},t.sign.open=function(t,e){if(2!==arguments.length)throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");if($(t,e),e.length!==Rt)throw new Error("bad public key size");var r=new Uint8Array(t.length),n=W(r,t,t.length,e);if(n<0)return null;for(var i=new Uint8Array(n),o=0;o<i.length;o++)i[o]=r[o];return i},t.sign.detached=function(e,r){for(var n=t.sign(e,r),i=new Uint8Array(Ot),o=0;o<i.length;o++)i[o]=n[o];return i},t.sign.detached.verify=function(t,e,r){if($(t,e,r),e.length!==Ot)throw new Error("bad signature size");if(r.length!==Rt)throw new Error("bad public key size");var n,i=new Uint8Array(Ot+t.length),o=new Uint8Array(Ot+t.length);for(n=0;n<Ot;n++)i[n]=e[n];for(n=0;n<t.length;n++)i[n+Ot]=t[n];return W(o,i,i.length,r)>=0},t.sign.keyPair=function(){var t=new Uint8Array(Rt),e=new Uint8Array(Pt);return G(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if($(t),t.length!==Pt)throw new Error("bad secret key size");for(var e=new Uint8Array(Rt),r=0;r<e.length;r++)e[r]=t[32+r];return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if($(t),t.length!==Tt)throw new Error("bad seed size");for(var e=new Uint8Array(Rt),r=new Uint8Array(Pt),n=0;n<32;n++)r[n]=t[n];return G(e,r,!0),{publicKey:e,secretKey:r}},t.sign.publicKeyLength=Rt,t.sign.secretKeyLength=Pt,t.sign.seedLength=Tt,t.sign.signatureLength=Ot,t.hash=function(t){$(t);var e=new Uint8Array(jt);return U(e,t,t.length),e},t.hash.hashLength=jt,t.verify=function(t,e){return $(t,e),0!==t.length&&0!==e.length&&(t.length===e.length&&0===n(t,0,e,0,t.length))},t.setPRNG=function(t){et=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(e&&e.getRandomValues){var n=65536;t.setPRNG(function(t,r){var i,o=new Uint8Array(r);for(i=0;i<r;i+=n)e.getRandomValues(o.subarray(i,i+Math.min(r-i,n)));for(i=0;i<r;i++)t[i]=o[i];Q(o)})}else e=r(608),e&&e.randomBytes&&t.setPRNG(function(t,r){var n,i=e.randomBytes(r);for(n=0;n<r;n++)t[n]=i[n];Q(i)})}()}("undefined"!=typeof t&&t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){},function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return 3*t.length/4-r(t)}function i(t){var e,n,i,o,a,f,s=t.length;a=r(t),f=new h(3*s/4-a),i=a>0?s-4:s;var c=0;for(e=0,n=0;e<i;e+=4,n+=3)o=u[t.charCodeAt(e)]<<18|u[t.charCodeAt(e+1)]<<12|u[t.charCodeAt(e+2)]<<6|u[t.charCodeAt(e+3)],f[c++]=o>>16&255,f[c++]=o>>8&255,f[c++]=255&o;return 2===a?(o=u[t.charCodeAt(e)]<<2|u[t.charCodeAt(e+1)]>>4,f[c++]=255&o):1===a&&(o=u[t.charCodeAt(e)]<<10|u[t.charCodeAt(e+1)]<<4|u[t.charCodeAt(e+2)]>>2,f[c++]=o>>8&255,f[c++]=255&o),f}function o(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function a(t,e,r){for(var n,i=[],a=e;a<r;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],i.push(o(n));return i.join("")}function f(t){for(var e,r=t.length,n=r%3,i="",o=[],f=16383,u=0,h=r-n;u<h;u+=f)o.push(a(t,u,u+f>h?h:u+f));return 1===n?(e=t[r-1],i+=s[e>>2],i+=s[e<<4&63],i+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],i+=s[e>>10],i+=s[e>>4&63],i+=s[e<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=n,e.toByteArray=i,e.fromByteArray=f;for(var s=[],u=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,l=c.length;d<l;++d)s[d]=c[d],u[c.charCodeAt(d)]=d;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,i){var o,a,f=8*i-n-1,s=(1<<f)-1,u=s>>1,h=-7,c=r?i-1:0,d=r?-1:1,l=t[e+c];for(c+=d,o=l&(1<<-h)-1,l>>=-h,h+=f;h>0;o=256*o+t[e+c],c+=d,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[e+c],c+=d,h-=8);if(0===o)o=1-u;else{if(o===s)return a?NaN:(l?-1:1)*(1/0);a+=Math.pow(2,n),o-=u}return(l?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,f,s,u=8*o-i-1,h=(1<<u)-1,c=h>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,p=n?1:-1,b=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-a))<1&&(a--,s*=2),e+=a+c>=1?d/s:d*Math.pow(2,1-c),e*s>=2&&(a++,s/=2),a+c>=h?(f=0,a=h):a+c>=1?(f=(e*s-1)*Math.pow(2,i),a+=c):(f=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[r+l]=255&f,l+=p,f/=256,i-=8);for(a=a<<i|f,u+=i;u>0;t[r+l]=255&a,l+=p,a/=256,u-=8);t[r+l-p]|=128*b}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){function n(t,e){var r,n;if(t=t.toLowerCase(),d[t])r=d[t].key,n=d[t].iv;else{if(!c[t])throw new TypeError("invalid suite type");r=8*c[t].key,n=c[t].iv}var i=s(e,!1,r,n);return o(t,i.key,i.iv)}function i(t,e){var r,n;if(t=t.toLowerCase(),d[t])r=d[t].key,n=d[t].iv;else{if(!c[t])throw new TypeError("invalid suite type");r=8*c[t].key,n=c[t].iv}var i=s(e,!1,r,n);return a(t,i.key,i.iv)}function o(t,e,r){if(t=t.toLowerCase(),d[t])return u.createCipheriv(t,e,r);if(c[t])return new h({key:e,iv:r,mode:t});throw new TypeError("invalid suite type")}function a(t,e,r){if(t=t.toLowerCase(),d[t])return u.createDecipheriv(t,e,r);if(c[t])return new h({key:e,iv:r,mode:t,decrypt:!0});throw new TypeError("invalid suite type")}function f(){return Object.keys(c).concat(u.getCiphers())}var s=r(146),u=r(494),h=r(498),c=r(499),d=r(95);e.createCipher=e.Cipher=n,e.createCipheriv=e.Cipheriv=o,e.createDecipher=e.Decipher=i,e.createDecipheriv=e.Decipheriv=a,e.listCiphers=e.getCiphers=f},function(t,e,r){function n(){return Object.keys(a)}var i=r(496);e.createCipher=e.Cipher=i.createCipher,e.createCipheriv=e.Cipheriv=i.createCipheriv;var o=r(495);e.createDecipher=e.Decipher=o.createDecipher,e.createDecipheriv=e.Decipheriv=o.createDecipheriv;var a=r(95);e.listCiphers=e.getCiphers=n},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(u.call(this),this._cache=new i,this._last=void 0,this._cipher=new s.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(t){for(var e=t[15],r=-1;++r<e;)if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data");if(16!==e)return t.slice(0,16-e)}function a(e,r,i){var o=c[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(b[o.mode],r,i,!0):"auth"===o.type?new l(b[o.mode],r,i,!0):new n(b[o.mode],r,i)}function f(t,e){var r=c[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=p(e,!1,r.key,r.iv);return a(t,n.key,n.iv)}var s=r(94),u=r(97),h=r(2),c=r(95),d=r(210),l=r(203),p=r(146);h(n,u),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get(this._autopadding);)n=this._mode.decrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return o(this._mode.decrypt(this,t));if(t)throw new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(t){var e;if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e;return null},i.prototype.flush=function(){if(this.cache.length)return this.cache};var b={ECB:r(208),CBC:r(204),CFB:r(205),CFB8:r(207),CFB1:r(206),OFB:r(209),CTR:r(96),GCM:r(96)};e.createDecipher=f,e.createDecipheriv=a}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(s.call(this),this._cache=new i,this._cipher=new f.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(e,r,i){var o=h[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(p[o.mode],r,i):"auth"===o.type?new l(p[o.mode],r,i):new n(p[o.mode],r,i)}function a(t,e){var r=h[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=c(e,!1,r.key,r.iv);return o(t,n.key,n.iv)}var f=r(94),s=r(97),u=r(2),h=r(95),c=r(146),d=r(210),l=r(203);u(n,s),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get();)n=this._mode.encrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t;if("10101010101010101010101010101010"!==t.toString("hex"))throw this._cipher.scrub(),new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16);return this.cache=this.cache.slice(16),t}return null},i.prototype.flush=function(){for(var e=16-this.cache.length,r=new t(e),n=-1;++n<e;)r.writeUInt8(e,n);var i=t.concat([this.cache,r]);return i};var p={ECB:r(208),CBC:r(204),CFB:r(205),CFB8:r(207),CFB1:r(206),OFB:r(209),CTR:r(96),GCM:r(96)};e.createCipheriv=o,e.createCipher=a}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function r(t){this.h=t,this.state=new e(16),this.state.fill(0),this.cache=new e("")}function n(t){return[t.readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)]}function i(t){t=t.map(o);var r=new e(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r}function o(t){var e,r;return e=t>s||t<0?(r=Math.abs(t)%s,t<0?s-r:r):t}function a(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}var f=new e(16);f.fill(0),t.exports=r,r.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e];this._multiply()},r.prototype._multiply=function(){for(var t,e,r,o=n(this.h),f=[0,0,0,0],s=-1;++s<128;){for(e=0!==(this.state[~~(s/8)]&1<<7-s%8),e&&(f=a(f,o)),r=0!==(1&o[3]),t=3;t>0;t--)o[t]=o[t]>>>1|(1&o[t-1])<<31;o[0]=o[0]>>>1,r&&(o[0]=o[0]^225<<24)}this.state=i(f)},r.prototype.update=function(t){this.cache=e.concat([this.cache,t]);for(var r;this.cache.length>=16;)r=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(r)},r.prototype.final=function(t,r){return this.cache.length&&this.ghash(e.concat([this.cache,f],16)),this.ghash(i([0,t,0,r])),this.state};var s=Math.pow(2,32)}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){i.call(this);var r,n=t.mode.toLowerCase(),o=f[n];r=t.decrypt?"decrypt":"encrypt";var a=t.key;"des-ede"!==n&&"des-ede-cbc"!==n||(a=e.concat([a,a.slice(0,8)]));var s=t.iv;this._des=o.create({key:a,iv:s,type:r})}var i=r(500),o=r(145),a=r(2),f={"des-ede3-cbc":o.CBC.instantiate(o.EDE),"des-ede3":o.EDE,"des-ede-cbc":o.CBC.instantiate(o.EDE),"des-ede":o.EDE,"des-cbc":o.CBC.instantiate(o.DES),"des-ecb":o.DES};f.des=f["des-cbc"],f.des3=f["des-ede3-cbc"],t.exports=n,a(n,i),n.prototype._update=function(t){return new e(this._des.update(t))},n.prototype._final=function(){return new e(this._des.final())}}).call(e,r(1).Buffer)},function(t,e){e["des-ecb"]={key:8,iv:0},e["des-cbc"]=e.des={key:8,iv:8},e["des-ede3-cbc"]=e.des3={key:24,iv:8},e["des-ede3"]={key:24,iv:0},e["des-ede-cbc"]={key:16,iv:8},e["des-ede"]={key:16,iv:0}},function(t,e,r){(function(e){function n(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._decoder=null,this._encoding=null}var i=r(31).Transform,o=r(2),a=r(52).StringDecoder;t.exports=n,o(n,i),n.prototype.update=function(t,r,n){"string"==typeof t&&(t=new e(t,r));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},n.prototype._flush=function(t){var e;try{this.push(this._final())}catch(t){e=t}finally{t(e)}},n.prototype._finalOrDigest=function(t){var r=this._final()||new e("");return t&&(r=this._toString(r,t,!0)),r},n.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new a(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n}}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t){o.equal(t.length,8,"Invalid IV length"),this.iv=new Array(8);for(var e=0;e<this.iv.length;e++)this.iv[e]=t[e]}function i(t){function e(e){t.call(this,e),this._cbcInit()}a(e,t);for(var r=Object.keys(f),n=0;n<r.length;n++){var i=r[n];e.prototype[i]=f[i]}return e.create=function(t){return new e(t)},e}var o=r(98),a=r(2),f={};e.instantiate=i,f._cbcInit=function(){var t=new n(this.options.iv);this._cbcState=t},f._update=function(t,e,r,n){var i=this._cbcState,o=this.constructor.super_.prototype,a=i.iv;if("encrypt"===this.type){for(var f=0;f<this.blockSize;f++)a[f]^=t[e+f];o._update.call(this,a,0,r,n);for(var f=0;f<this.blockSize;f++)a[f]=r[n+f]}else{o._update.call(this,t,e,r,n);for(var f=0;f<this.blockSize;f++)r[n+f]^=a[f];for(var f=0;f<this.blockSize;f++)a[f]=t[e+f]}}},function(t,e,r){"use strict";function n(t){this.options=t,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}var i=r(98);t.exports=n,n.prototype._init=function(){},n.prototype.update=function(t){return 0===t.length?[]:"decrypt"===this.type?this._updateDecrypt(t):this._updateEncrypt(t)},n.prototype._buffer=function(t,e){for(var r=Math.min(this.buffer.length-this.bufferOff,t.length-e),n=0;n<r;n++)this.buffer[this.bufferOff+n]=t[e+n];return this.bufferOff+=r,r},n.prototype._flushBuffer=function(t,e){return this._update(this.buffer,0,t,e),this.bufferOff=0,this.blockSize},n.prototype._updateEncrypt=function(t){var e=0,r=0,n=(this.bufferOff+t.length)/this.blockSize|0,i=new Array(n*this.blockSize);0!==this.bufferOff&&(e+=this._buffer(t,e),this.bufferOff===this.buffer.length&&(r+=this._flushBuffer(i,r)));for(var o=t.length-(t.length-e)%this.blockSize;e<o;e+=this.blockSize)this._update(t,e,i,r),r+=this.blockSize;for(;e<t.length;e++,this.bufferOff++)this.buffer[this.bufferOff]=t[e];return i},n.prototype._updateDecrypt=function(t){for(var e=0,r=0,n=Math.ceil((this.bufferOff+t.length)/this.blockSize)-1,i=new Array(n*this.blockSize);n>0;n--)e+=this._buffer(t,e),r+=this._flushBuffer(i,r);return e+=this._buffer(t,e),i},n.prototype.final=function(t){var e;t&&(e=this.update(t));var r;return r="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),e?e.concat(r):r},n.prototype._pad=function(t,e){if(0===e)return!1;for(;e<t.length;)t[e++]=0;return!0},n.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[];var t=new Array(this.blockSize);return this._update(this.buffer,0,t,0),t},n.prototype._unpad=function(t){return t},n.prototype._finalDecrypt=function(){i.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt");var t=new Array(this.blockSize);return this._flushBuffer(t,0),this._unpad(t)}},function(t,e,r){"use strict";function n(){this.tmp=new Array(2),this.keys=null}function i(t){u.call(this,t);var e=new n;this._desState=e,this.deriveKeys(e,t.key)}var o=r(98),a=r(2),f=r(145),s=f.utils,u=f.Cipher;a(i,u),t.exports=i,i.create=function(t){return new i(t)};var h=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];i.prototype.deriveKeys=function(t,e){t.keys=new Array(32),o.equal(e.length,this.blockSize,"Invalid key length");var r=s.readUInt32BE(e,0),n=s.readUInt32BE(e,4);s.pc1(r,n,t.tmp,0),r=t.tmp[0],n=t.tmp[1];for(var i=0;i<t.keys.length;i+=2){var a=h[i>>>1];r=s.r28shl(r,a),n=s.r28shl(n,a),s.pc2(r,n,t.keys,i)}},i.prototype._update=function(t,e,r,n){var i=this._desState,o=s.readUInt32BE(t,e),a=s.readUInt32BE(t,e+4);s.ip(o,a,i.tmp,0),o=i.tmp[0],a=i.tmp[1],"encrypt"===this.type?this._encrypt(i,o,a,i.tmp,0):this._decrypt(i,o,a,i.tmp,0),o=i.tmp[0],a=i.tmp[1],s.writeUInt32BE(r,o,n),s.writeUInt32BE(r,a,n+4)},i.prototype._pad=function(t,e){for(var r=t.length-e,n=e;n<t.length;n++)t[n]=r;return!0},i.prototype._unpad=function(t){for(var e=t[t.length-1],r=t.length-e;r<t.length;r++)o.equal(t[r],e);return t.slice(0,t.length-e)},i.prototype._encrypt=function(t,e,r,n,i){for(var o=e,a=r,f=0;f<t.keys.length;f+=2){var u=t.keys[f],h=t.keys[f+1];s.expand(a,t.tmp,0),u^=t.tmp[0],h^=t.tmp[1];var c=s.substitute(u,h),d=s.permute(c),l=a;a=(o^d)>>>0,o=l}s.rip(a,o,n,i)},i.prototype._decrypt=function(t,e,r,n,i){for(var o=r,a=e,f=t.keys.length-2;f>=0;f-=2){var u=t.keys[f],h=t.keys[f+1];s.expand(o,t.tmp,0),u^=t.tmp[0],h^=t.tmp[1];var c=s.substitute(u,h),d=s.permute(c),l=o;o=(a^d)>>>0,a=l}s.rip(o,a,n,i)}},function(t,e,r){"use strict";function n(t,e){o.equal(e.length,24,"Invalid key length");var r=e.slice(0,8),n=e.slice(8,16),i=e.slice(16,24);"encrypt"===t?this.ciphers=[u.create({type:"encrypt",key:r}),u.create({type:"decrypt",key:n}),u.create({type:"encrypt",key:i})]:this.ciphers=[u.create({type:"decrypt",key:i}),u.create({type:"encrypt",key:n}),u.create({type:"decrypt",key:r})]}function i(t){s.call(this,t);var e=new n(this.type,this.options.key);this._edeState=e}var o=r(98),a=r(2),f=r(145),s=f.Cipher,u=f.DES;a(i,s),t.exports=i,i.create=function(t){return new i(t)},i.prototype._update=function(t,e,r,n){var i=this._edeState;i.ciphers[0]._update(t,e,r,n),i.ciphers[1]._update(r,n,r,n),i.ciphers[2]._update(r,n,r,n)},i.prototype._pad=u.prototype._pad,i.prototype._unpad=u.prototype._unpad},function(t,e){"use strict";e.readUInt32BE=function(t,e){var r=t[0+e]<<24|t[1+e]<<16|t[2+e]<<8|t[3+e];return r>>>0},e.writeUInt32BE=function(t,e,r){t[0+r]=e>>>24,t[1+r]=e>>>16&255,t[2+r]=e>>>8&255,t[3+r]=255&e},e.ip=function(t,e,r,n){for(var i=0,o=0,a=6;a>=0;a-=2){for(var f=0;f<=24;f+=8)i<<=1,i|=e>>>f+a&1;for(var f=0;f<=24;f+=8)i<<=1,i|=t>>>f+a&1}for(var a=6;a>=0;a-=2){for(var f=1;f<=25;f+=8)o<<=1,o|=e>>>f+a&1;for(var f=1;f<=25;f+=8)o<<=1,o|=t>>>f+a&1}r[n+0]=i>>>0,r[n+1]=o>>>0},e.rip=function(t,e,r,n){for(var i=0,o=0,a=0;a<4;a++)for(var f=24;f>=0;f-=8)i<<=1,i|=e>>>f+a&1,i<<=1,i|=t>>>f+a&1;for(var a=4;a<8;a++)for(var f=24;f>=0;f-=8)o<<=1,o|=e>>>f+a&1,o<<=1,o|=t>>>f+a&1;r[n+0]=i>>>0,r[n+1]=o>>>0},e.pc1=function(t,e,r,n){for(var i=0,o=0,a=7;a>=5;a--){
for(var f=0;f<=24;f+=8)i<<=1,i|=e>>f+a&1;for(var f=0;f<=24;f+=8)i<<=1,i|=t>>f+a&1}for(var f=0;f<=24;f+=8)i<<=1,i|=e>>f+a&1;for(var a=1;a<=3;a++){for(var f=0;f<=24;f+=8)o<<=1,o|=e>>f+a&1;for(var f=0;f<=24;f+=8)o<<=1,o|=t>>f+a&1}for(var f=0;f<=24;f+=8)o<<=1,o|=t>>f+a&1;r[n+0]=i>>>0,r[n+1]=o>>>0},e.r28shl=function(t,e){return t<<e&268435455|t>>>28-e};var r=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];e.pc2=function(t,e,n,i){for(var o=0,a=0,f=r.length>>>1,s=0;s<f;s++)o<<=1,o|=t>>>r[s]&1;for(var s=f;s<r.length;s++)a<<=1,a|=e>>>r[s]&1;n[i+0]=o>>>0,n[i+1]=a>>>0},e.expand=function(t,e,r){var n=0,i=0;n=(1&t)<<5|t>>>27;for(var o=23;o>=15;o-=4)n<<=6,n|=t>>>o&63;for(var o=11;o>=3;o-=4)i|=t>>>o&63,i<<=6;i|=(31&t)<<1|t>>>31,e[r+0]=n>>>0,e[r+1]=i>>>0};var n=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];e.substitute=function(t,e){for(var r=0,i=0;i<4;i++){var o=t>>>18-6*i&63,a=n[64*i+o];r<<=4,r|=a}for(var i=0;i<4;i++){var o=e>>>18-6*i&63,a=n[256+64*i+o];r<<=4,r|=a}return r>>>0};var i=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];e.permute=function(t){for(var e=0,r=0;r<i.length;r++)e<<=1,e|=t>>>i[r]&1;return e>>>0},e.padSplit=function(t,e,r){for(var n=t.toString(2);n.length<e;)n="0"+n;for(var i=[],o=0;o<e;o+=r)i.push(n.slice(o,o+r));return i.join(" ")}},function(t,e,r){(function(e){function n(t){c.Writable.call(this);var e=l[t];if(!e)throw new Error("Unknown message digest");this._hashType=e.hash,this._hash=s(e.hash),this._tag=e.id,this._signType=e.sign}function i(t){c.Writable.call(this);var e=l[t];if(!e)throw new Error("Unknown message digest");this._hash=s(e.hash),this._tag=e.id,this._signType=e.sign}function o(t){return new n(t)}function a(t){return new i(t)}var f=r(211),s=r(59),u=r(2),h=r(542),c=r(31),d=r(543),l={};Object.keys(f).forEach(function(t){l[t]=l[t.toLowerCase()]=f[t]}),u(n,c.Writable),n.prototype._write=function(t,e,r){this._hash.update(t),r()},n.prototype.update=function(t,r){return"string"==typeof t&&(t=new e(t,r)),this._hash.update(t),this},n.prototype.sign=function(t,r){this.end();var n=this._hash.digest(),i=h(e.concat([this._tag,n]),t,this._hashType,this._signType);return r?i.toString(r):i},u(i,c.Writable),i.prototype._write=function(t,e,r){this._hash.update(t),r()},i.prototype.update=function(t,r){return"string"==typeof t&&(t=new e(t,r)),this._hash.update(t),this},i.prototype.verify=function(t,r,n){"string"==typeof r&&(r=new e(r,n)),this.end();var i=this._hash.digest();return d(r,e.concat([this._tag,i]),t,this._signType)},t.exports={Sign:o,Verify:a,createSign:o,createVerify:a}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){var e=o(t),r=e.toRed(a.mont(t.modulus)).redPow(new a(t.publicExponent)).fromRed();return{blinder:r,unblinder:e.invm(t.modulus)}}function i(t,r){var i=n(r),o=r.modulus.byteLength(),f=(a.mont(r.modulus),new a(t).mul(i.blinder).umod(r.modulus)),s=f.toRed(a.mont(r.prime1)),u=f.toRed(a.mont(r.prime2)),h=r.coefficient,c=r.prime1,d=r.prime2,l=s.redPow(r.exponent1),p=u.redPow(r.exponent2);l=l.fromRed(),p=p.fromRed();var b=l.isub(p).imul(h).umod(c);return b.imul(d),p.iadd(b),new e(p.imul(i.unblinder).umod(r.modulus).toArray(!1,o))}function o(t){for(var e=t.modulus.byteLength(),r=new a(f(e));r.cmp(t.modulus)>=0||!r.umod(t.prime1)||!r.umod(t.prime2);)r=new a(f(e));return r}var a=r(18),f=r(61);t.exports=i,i.getr=o}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t,e){this.type=t,this.p=new o(e.p,16),this.red=e.prime?o.red(e.prime):o.mont(this.p),this.zero=new o(0).toRed(this.red),this.one=new o(1).toRed(this.red),this.two=new o(2).toRed(this.red),this.n=e.n&&new o(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function i(t,e){this.curve=t,this.type=e,this.precomputed=null}var o=r(18),a=r(19),f=a.utils,s=f.getNAF,u=f.getJSF,h=f.assert;t.exports=n,n.prototype.point=function(){throw new Error("Not implemented")},n.prototype.validate=function(){throw new Error("Not implemented")},n.prototype._fixedNafMul=function(t,e){h(t.precomputed);var r=t._getDoubles(),n=s(e,1),i=(1<<r.step+1)-(r.step%2===0?2:1);i/=3;for(var o=[],a=0;a<n.length;a+=r.step){for(var f=0,e=a+r.step-1;e>=a;e--)f=(f<<1)+n[e];o.push(f)}for(var u=this.jpoint(null,null,null),c=this.jpoint(null,null,null),d=i;d>0;d--){for(var a=0;a<o.length;a++){var f=o[a];f===d?c=c.mixedAdd(r.points[a]):f===-d&&(c=c.mixedAdd(r.points[a].neg()))}u=u.add(c)}return u.toP()},n.prototype._wnafMul=function(t,e){var r=4,n=t._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=s(e,r),a=this.jpoint(null,null,null),f=o.length-1;f>=0;f--){for(var e=0;f>=0&&0===o[f];f--)e++;if(f>=0&&e++,a=a.dblp(e),f<0)break;var u=o[f];h(0!==u),a="affine"===t.type?u>0?a.mixedAdd(i[u-1>>1]):a.mixedAdd(i[-u-1>>1].neg()):u>0?a.add(i[u-1>>1]):a.add(i[-u-1>>1].neg())}return"affine"===t.type?a.toP():a},n.prototype._wnafMulAdd=function(t,e,r,n,i){for(var o=this._wnafT1,a=this._wnafT2,f=this._wnafT3,h=0,c=0;c<n;c++){var d=e[c],l=d._getNAFPoints(t);o[c]=l.wnd,a[c]=l.points}for(var c=n-1;c>=1;c-=2){var p=c-1,b=c;if(1===o[p]&&1===o[b]){var v=[e[p],null,null,e[b]];0===e[p].y.cmp(e[b].y)?(v[1]=e[p].add(e[b]),v[2]=e[p].toJ().mixedAdd(e[b].neg())):0===e[p].y.cmp(e[b].y.redNeg())?(v[1]=e[p].toJ().mixedAdd(e[b]),v[2]=e[p].add(e[b].neg())):(v[1]=e[p].toJ().mixedAdd(e[b]),v[2]=e[p].toJ().mixedAdd(e[b].neg()));var y=[-3,-1,-5,-7,0,7,5,1,3],m=u(r[p],r[b]);h=Math.max(m[0].length,h),f[p]=new Array(h),f[b]=new Array(h);for(var g=0;g<h;g++){var w=0|m[0][g],_=0|m[1][g];f[p][g]=y[3*(w+1)+(_+1)],f[b][g]=0,a[p]=v}}else f[p]=s(r[p],o[p]),f[b]=s(r[b],o[b]),h=Math.max(f[p].length,h),h=Math.max(f[b].length,h)}for(var M=this.jpoint(null,null,null),S=this._wnafT4,c=h;c>=0;c--){for(var E=0;c>=0;){for(var A=!0,g=0;g<n;g++)S[g]=0|f[g][c],0!==S[g]&&(A=!1);if(!A)break;E++,c--}if(c>=0&&E++,M=M.dblp(E),c<0)break;for(var g=0;g<n;g++){var d,k=S[g];0!==k&&(k>0?d=a[g][k-1>>1]:k<0&&(d=a[g][-k-1>>1].neg()),M="affine"===d.type?M.mixedAdd(d):M.add(d))}}for(var c=0;c<n;c++)a[c]=null;return i?M:M.toP()},n.BasePoint=i,i.prototype.eq=function(){throw new Error("Not implemented")},i.prototype.validate=function(){return this.curve.validate(this)},n.prototype.decodePoint=function(t,e){t=f.toArray(t,e);var r=this.p.byteLength();if((4===t[0]||6===t[0]||7===t[0])&&t.length-1===2*r){6===t[0]?h(t[t.length-1]%2===0):7===t[0]&&h(t[t.length-1]%2===1);var n=this.point(t.slice(1,1+r),t.slice(1+r,1+2*r));return n}if((2===t[0]||3===t[0])&&t.length-1===r)return this.pointFromX(t.slice(1,1+r),3===t[0]);throw new Error("Unknown point format")},i.prototype.encodeCompressed=function(t){return this.encode(t,!0)},i.prototype._encode=function(t){var e=this.curve.p.byteLength(),r=this.getX().toArray("be",e);return t?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",e))},i.prototype.encode=function(t,e){return f.encode(this._encode(e),t)},i.prototype.precompute=function(t){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},i.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},i.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<e;i+=t){for(var o=0;o<t;o++)n=n.dbl();r.push(n)}return{step:t,points:r}},i.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],r=(1<<t)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)e[i]=e[i-1].add(n);return{wnd:t,points:e}},i.prototype._getBeta=function(){return null},i.prototype.dblp=function(t){for(var e=this,r=0;r<t;r++)e=e.dbl();return e}},function(t,e,r){"use strict";function n(t){this.twisted=1!==(0|t.a),this.mOneA=this.twisted&&(0|t.a)===-1,this.extended=this.mOneA,u.call(this,"edwards",t),this.a=new f(t.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new f(t.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new f(t.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),h(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1===(0|t.c)}function i(t,e,r,n,i){u.BasePoint.call(this,t,"projective"),null===e&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new f(e,16),this.y=new f(r,16),this.z=n?new f(n,16):this.curve.one,this.t=i&&new f(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}var o=r(99),a=r(19),f=r(18),s=r(2),u=o.base,h=a.utils.assert;s(n,u),t.exports=n,n.prototype._mulA=function(t){return this.mOneA?t.redNeg():this.a.redMul(t)},n.prototype._mulC=function(t){return this.oneC?t:this.c.redMul(t)},n.prototype.jpoint=function(t,e,r,n){return this.point(t,e,r,n)},n.prototype.pointFromX=function(t,e){t=new f(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr(),n=this.c2.redSub(this.a.redMul(r)),i=this.one.redSub(this.c2.redMul(this.d).redMul(r)),o=n.redMul(i.redInvm()),a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");var s=a.fromRed().isOdd();return(e&&!s||!e&&s)&&(a=a.redNeg()),this.point(t,a)},n.prototype.pointFromY=function(t,e){t=new f(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr(),n=r.redSub(this.one),i=r.redMul(this.d).redAdd(this.one),o=n.redMul(i.redInvm());if(0===o.cmp(this.zero)){if(e)throw new Error("invalid point");return this.point(this.zero,t)}var a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");return a.isOdd()!==e&&(a=a.redNeg()),this.point(a,t)},n.prototype.validate=function(t){if(t.isInfinity())return!0;t.normalize();var e=t.x.redSqr(),r=t.y.redSqr(),n=e.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));return 0===n.cmp(i)},s(i,u.BasePoint),n.prototype.pointFromJSON=function(t){return i.fromJSON(this,t)},n.prototype.point=function(t,e,r,n){return new i(this,t,e,r,n)},i.fromJSON=function(t,e){return new i(t,e[0],e[1],e[2])},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&0===this.y.cmp(this.z)},i.prototype._extDbl=function(){var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(t),i=this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),o=n.redAdd(e),a=o.redSub(r),f=n.redSub(e),s=i.redMul(a),u=o.redMul(f),h=i.redMul(f),c=a.redMul(o);return this.curve.point(s,u,c,h)},i.prototype._projDbl=function(){var t,e,r,n=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),o=this.y.redSqr();if(this.curve.twisted){var a=this.curve._mulA(i),f=a.redAdd(o);if(this.zOne)t=n.redSub(i).redSub(o).redMul(f.redSub(this.curve.two)),e=f.redMul(a.redSub(o)),r=f.redSqr().redSub(f).redSub(f);else{var s=this.z.redSqr(),u=f.redSub(s).redISub(s);t=n.redSub(i).redISub(o).redMul(u),e=f.redMul(a.redSub(o)),r=f.redMul(u)}}else{var a=i.redAdd(o),s=this.curve._mulC(this.c.redMul(this.z)).redSqr(),u=a.redSub(s).redSub(s);t=this.curve._mulC(n.redISub(a)).redMul(u),e=this.curve._mulC(a).redMul(i.redISub(o)),r=a.redMul(u)}return this.curve.point(t,e,r)},i.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},i.prototype._extAdd=function(t){var e=this.y.redSub(this.x).redMul(t.y.redSub(t.x)),r=this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),n=this.t.redMul(this.curve.dd).redMul(t.t),i=this.z.redMul(t.z.redAdd(t.z)),o=r.redSub(e),a=i.redSub(n),f=i.redAdd(n),s=r.redAdd(e),u=o.redMul(a),h=f.redMul(s),c=o.redMul(s),d=a.redMul(f);return this.curve.point(u,h,d,c)},i.prototype._projAdd=function(t){var e,r,n=this.z.redMul(t.z),i=n.redSqr(),o=this.x.redMul(t.x),a=this.y.redMul(t.y),f=this.curve.d.redMul(o).redMul(a),s=i.redSub(f),u=i.redAdd(f),h=this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),c=n.redMul(s).redMul(h);return this.curve.twisted?(e=n.redMul(u).redMul(a.redSub(this.curve._mulA(o))),r=s.redMul(u)):(e=n.redMul(u).redMul(a.redSub(o)),r=this.curve._mulC(s).redMul(u)),this.curve.point(c,e,r)},i.prototype.add=function(t){return this.isInfinity()?t:t.isInfinity()?this:this.curve.extended?this._extAdd(t):this._projAdd(t)},i.prototype.mul=function(t){return this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve._wnafMul(this,t)},i.prototype.mulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!1)},i.prototype.jmulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!0)},i.prototype.normalize=function(){if(this.zOne)return this;var t=this.z.redInvm();return this.x=this.x.redMul(t),this.y=this.y.redMul(t),this.t&&(this.t=this.t.redMul(t)),this.z=this.curve.one,this.zOne=!0,this},i.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()},i.prototype.getY=function(){return this.normalize(),this.y.fromRed()},i.prototype.eq=function(t){return this===t||0===this.getX().cmp(t.getX())&&0===this.getY().cmp(t.getY())},i.prototype.eqXToP=function(t){var e=t.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(e))return!0;for(var r=t.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(e.redIAdd(n),0===this.x.cmp(e))return!0}return!1},i.prototype.toP=i.prototype.normalize,i.prototype.mixedAdd=i.prototype.add},function(t,e,r){"use strict";function n(t){s.call(this,"mont",t),this.a=new a(t.a,16).toRed(this.red),this.b=new a(t.b,16).toRed(this.red),this.i4=new a(4).toRed(this.red).redInvm(),this.two=new a(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function i(t,e,r){s.BasePoint.call(this,t,"projective"),null===e&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new a(e,16),this.z=new a(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}var o=r(99),a=r(18),f=r(2),s=o.base,u=r(19),h=u.utils;f(n,s),t.exports=n,n.prototype.validate=function(t){var e=t.normalize().x,r=e.redSqr(),n=r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e),i=n.redSqrt();return 0===i.redSqr().cmp(n)},f(i,s.BasePoint),n.prototype.decodePoint=function(t,e){return this.point(h.toArray(t,e),1)},n.prototype.point=function(t,e){return new i(this,t,e)},n.prototype.pointFromJSON=function(t){return i.fromJSON(this,t)},i.prototype.precompute=function(){},i.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},i.fromJSON=function(t,e){return new i(t,e[0],e[1]||t.one)},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},i.prototype.dbl=function(){var t=this.x.redAdd(this.z),e=t.redSqr(),r=this.x.redSub(this.z),n=r.redSqr(),i=e.redSub(n),o=e.redMul(n),a=i.redMul(n.redAdd(this.curve.a24.redMul(i)));return this.curve.point(o,a)},i.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.diffAdd=function(t,e){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=t.x.redAdd(t.z),o=t.x.redSub(t.z),a=o.redMul(r),f=i.redMul(n),s=e.z.redMul(a.redAdd(f).redSqr()),u=e.x.redMul(a.redISub(f).redSqr());return this.curve.point(s,u)},i.prototype.mul=function(t){for(var e=t.clone(),r=this,n=this.curve.point(null,null),i=this,o=[];0!==e.cmpn(0);e.iushrn(1))o.push(e.andln(1));for(var a=o.length-1;a>=0;a--)0===o[a]?(r=r.diffAdd(n,i),n=n.dbl()):(n=r.diffAdd(n,i),r=r.dbl());return n},i.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.eq=function(t){return 0===this.getX().cmp(t.getX())},i.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(t,e,r){"use strict";function n(t){h.call(this,"short",t),this.a=new s(t.a,16).toRed(this.red),this.b=new s(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function i(t,e,r,n){h.BasePoint.call(this,t,"affine"),null===e&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new s(e,16),this.y=new s(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function o(t,e,r,n){h.BasePoint.call(this,t,"jacobian"),null===e&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new s(0)):(this.x=new s(e,16),this.y=new s(r,16),this.z=new s(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}var a=r(99),f=r(19),s=r(18),u=r(2),h=a.base,c=f.utils.assert;u(n,h),t.exports=n,n.prototype._getEndomorphism=function(t){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var e,r;if(t.beta)e=new s(t.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);e=n[0].cmp(n[1])<0?n[0]:n[1],e=e.toRed(this.red)}if(t.lambda)r=new s(t.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))?r=i[0]:(r=i[1],c(0===this.g.mul(r).x.cmp(this.g.x.redMul(e))))}var o;return o=t.basis?t.basis.map(function(t){return{a:new s(t.a,16),b:new s(t.b,16)}}):this._getEndoBasis(r),{beta:e,lambda:r,basis:o}}},n.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:s.mont(t),r=new s(2).toRed(e).redInvm(),n=r.redNeg(),i=new s(3).toRed(e).redNeg().redSqrt().redMul(r),o=n.redAdd(i).fromRed(),a=n.redSub(i).fromRed();return[o,a]},n.prototype._getEndoBasis=function(t){for(var e,r,n,i,o,a,f,u,h,c=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=t,l=this.n.clone(),p=new s(1),b=new s(0),v=new s(0),y=new s(1),m=0;0!==d.cmpn(0);){var g=l.div(d);u=l.sub(g.mul(d)),h=v.sub(g.mul(p));var w=y.sub(g.mul(b));if(!n&&u.cmp(c)<0)e=f.neg(),r=p,n=u.neg(),i=h;else if(n&&2===++m)break;f=u,l=d,d=u,v=p,p=h,y=b,b=w}o=u.neg(),a=h;var _=n.sqr().add(i.sqr()),M=o.sqr().add(a.sqr());return M.cmp(_)>=0&&(o=e,a=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),a=a.neg()),[{a:n,b:i},{a:o,b:a}]},n.prototype._endoSplit=function(t){var e=this.endo.basis,r=e[0],n=e[1],i=n.b.mul(t).divRound(this.n),o=r.b.neg().mul(t).divRound(this.n),a=i.mul(r.a),f=o.mul(n.a),s=i.mul(r.b),u=o.mul(n.b),h=t.sub(a).sub(f),c=s.add(u).neg();return{k1:h,k2:c}},n.prototype.pointFromX=function(t,e){t=new s(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(e&&!i||!e&&i)&&(n=n.redNeg()),this.point(t,n)},n.prototype.validate=function(t){if(t.inf)return!0;var e=t.x,r=t.y,n=this.a.redMul(e),i=e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},n.prototype._endoWnafMulAdd=function(t,e,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<t.length;o++){var a=this._endoSplit(e[o]),f=t[o],s=f._getBeta();a.k1.negative&&(a.k1.ineg(),f=f.neg(!0)),a.k2.negative&&(a.k2.ineg(),s=s.neg(!0)),n[2*o]=f,n[2*o+1]=s,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var u=this._wnafMulAdd(1,n,i,2*o,r),h=0;h<2*o;h++)n[h]=null,i[h]=null;return u},u(i,h.BasePoint),n.prototype.point=function(t,e,r){return new i(this,t,e,r)},n.prototype.pointFromJSON=function(t,e){return i.fromJSON(this,t,e)},i.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var r=this.curve,n=function(t){return r.point(t.x.redMul(r.endo.beta),t.y)};t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}}}return e}},i.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},i.fromJSON=function(t,e,r){function n(e){return t.point(e[0],e[1],r)}"string"==typeof e&&(e=JSON.parse(e));var i=t.point(e[0],e[1],r);if(!e[2])return i;var o=e[2];return i.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[i].concat(o.doubles.points.map(n))},naf:o.naf&&{wnd:o.naf.wnd,points:[i].concat(o.naf.points.map(n))}},i},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return this.inf},i.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(0===this.x.cmp(t.x))return this.curve.point(null,null);var e=this.y.redSub(t.y);0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()));var r=e.redSqr().redISub(this.x).redISub(t.x),n=e.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},i.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(0===t.cmpn(0))return this.curve.point(null,null);var e=this.curve.a,r=this.x.redSqr(),n=t.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,a)},i.prototype.getX=function(){return this.x.fromRed()},i.prototype.getY=function(){return this.y.fromRed()},i.prototype.mul=function(t){return t=new s(t,16),this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},i.prototype.mulAdd=function(t,e,r){var n=[this,e],i=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},i.prototype.jmulAdd=function(t,e,r){var n=[this,e],i=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},i.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))},i.prototype.neg=function(t){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var r=this.precomputed,n=function(t){return t.neg()};e.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return e},i.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t},u(o,h.BasePoint),n.prototype.jpoint=function(t,e,r){return new o(this,t,e,r)},o.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),e=t.redSqr(),r=this.x.redMul(e),n=this.y.redMul(e).redMul(t);return this.curve.point(r,n)},o.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},o.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(e),i=t.x.redMul(r),o=this.y.redMul(e.redMul(t.z)),a=t.y.redMul(r.redMul(this.z)),f=n.redSub(i),s=o.redSub(a);if(0===f.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=f.redSqr(),h=u.redMul(f),c=n.redMul(u),d=s.redSqr().redIAdd(h).redISub(c).redISub(c),l=s.redMul(c.redISub(d)).redISub(o.redMul(h)),p=this.z.redMul(t.z).redMul(f);return this.curve.jpoint(d,l,p)},o.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var e=this.z.redSqr(),r=this.x,n=t.x.redMul(e),i=this.y,o=t.y.redMul(e).redMul(this.z),a=r.redSub(n),f=i.redSub(o);if(0===a.cmpn(0))return 0!==f.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var s=a.redSqr(),u=s.redMul(a),h=r.redMul(s),c=f.redSqr().redIAdd(u).redISub(h).redISub(h),d=f.redMul(h.redISub(c)).redISub(i.redMul(u)),l=this.z.redMul(a);return this.curve.jpoint(c,d,l)},o.prototype.dblp=function(t){if(0===t)return this;if(this.isInfinity())return this;if(!t)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var e=this,r=0;r<t;r++)e=e.dbl();return e}for(var n=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,f=this.z,s=f.redSqr().redSqr(),u=a.redAdd(a),r=0;r<t;r++){var h=o.redSqr(),c=u.redSqr(),d=c.redSqr(),l=h.redAdd(h).redIAdd(h).redIAdd(n.redMul(s)),p=o.redMul(c),b=l.redSqr().redISub(p.redAdd(p)),v=p.redISub(b),y=l.redMul(v);y=y.redIAdd(y).redISub(d);var m=u.redMul(f);r+1<t&&(s=s.redMul(d)),o=b,f=m,u=y}return this.curve.jpoint(o,u.redMul(i),f)},o.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},o.prototype._zeroDbl=function(){var t,e,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n),s=f.redSqr().redISub(a).redISub(a),u=o.redIAdd(o);u=u.redIAdd(u),u=u.redIAdd(u),t=s,e=f.redMul(a.redISub(s)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.x.redSqr(),c=this.y.redSqr(),d=c.redSqr(),l=this.x.redAdd(c).redSqr().redISub(h).redISub(d);l=l.redIAdd(l);var p=h.redAdd(h).redIAdd(h),b=p.redSqr(),v=d.redIAdd(d);v=v.redIAdd(v),v=v.redIAdd(v),t=b.redISub(l).redISub(l),e=p.redMul(l.redISub(t)).redISub(v),r=this.y.redMul(this.z),r=r.redIAdd(r)}return this.curve.jpoint(t,e,r)},o.prototype._threeDbl=function(){var t,e,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),s=f.redSqr().redISub(a).redISub(a);t=s;var u=o.redIAdd(o);u=u.redIAdd(u),u=u.redIAdd(u),e=f.redMul(a.redISub(s)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.z.redSqr(),c=this.y.redSqr(),d=this.x.redMul(c),l=this.x.redSub(h).redMul(this.x.redAdd(h));l=l.redAdd(l).redIAdd(l);var p=d.redIAdd(d);p=p.redIAdd(p);var b=p.redAdd(p);t=l.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(c).redISub(h);var v=c.redSqr();v=v.redIAdd(v),v=v.redIAdd(v),v=v.redIAdd(v),e=l.redMul(p.redISub(t)).redISub(v)}return this.curve.jpoint(t,e,r)},o.prototype._dbl=function(){var t=this.curve.a,e=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=e.redSqr(),a=r.redSqr(),f=o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),s=e.redAdd(e);s=s.redIAdd(s);var u=s.redMul(a),h=f.redSqr().redISub(u.redAdd(u)),c=u.redISub(h),d=a.redSqr();d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=f.redMul(c).redISub(d),p=r.redAdd(r).redMul(n);return this.curve.jpoint(h,l,p)},o.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),n=e.redSqr(),i=t.redAdd(t).redIAdd(t),o=i.redSqr(),a=this.x.redAdd(e).redSqr().redISub(t).redISub(n);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(o);var f=a.redSqr(),s=n.redIAdd(n);s=s.redIAdd(s),s=s.redIAdd(s),s=s.redIAdd(s);var u=i.redIAdd(a).redSqr().redISub(o).redISub(f).redISub(s),h=e.redMul(u);h=h.redIAdd(h),h=h.redIAdd(h);var c=this.x.redMul(f).redISub(h);c=c.redIAdd(c),c=c.redIAdd(c);var d=this.y.redMul(u.redMul(s.redISub(u)).redISub(a.redMul(f)));d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=this.z.redAdd(a).redSqr().redISub(r).redISub(f);return this.curve.jpoint(c,d,l)},o.prototype.mul=function(t,e){return t=new s(t,e),this.curve._wnafMul(this,t)},o.prototype.eq=function(t){if("affine"===t.type)return this.eq(t.toJ());if(this===t)return!0;var e=this.z.redSqr(),r=t.z.redSqr();if(0!==this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))return!1;var n=e.redMul(this.z),i=r.redMul(t.z);return 0===this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)},o.prototype.eqXToP=function(t){var e=this.z.redSqr(),r=t.toRed(this.curve.red).redMul(e);if(0===this.x.cmp(r))return!0;for(var n=t.clone(),i=this.curve.redN.redMul(e);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}return!1},o.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},o.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(t,e,r){"use strict";function n(t){"short"===t.type?this.curve=new f.curve.short(t):"edwards"===t.type?this.curve=new f.curve.edwards(t):this.curve=new f.curve.mont(t),this.g=this.curve.g,this.n=this.curve.n,this.hash=t.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function i(t,e){Object.defineProperty(o,t,{configurable:!0,enumerable:!0,get:function(){var r=new n(e);return Object.defineProperty(o,t,{configurable:!0,enumerable:!0,value:r}),r}})}var o=e,a=r(49),f=r(19),s=f.utils.assert;o.PresetCurve=n,i("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:a.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),i("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:a.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),i("p256",{
type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:a.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),i("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:a.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),i("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:a.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),i("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"0",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["9"]}),i("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var u;try{u=r(520)}catch(t){u=void 0}i("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:a.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",u]})},function(t,e,r){"use strict";function n(t){return this instanceof n?("string"==typeof t&&(f(o.curves.hasOwnProperty(t),"Unknown curve "+t),t=o.curves[t]),t instanceof o.curves.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),void(this.hash=t.hash||t.curve.hash)):new n(t)}var i=r(18),o=r(19),a=o.utils,f=a.assert,s=r(514),u=r(515);t.exports=n,n.prototype.keyPair=function(t){return new s(this,t)},n.prototype.keyFromPrivate=function(t,e){return s.fromPrivate(this,t,e)},n.prototype.keyFromPublic=function(t,e){return s.fromPublic(this,t,e)},n.prototype.genKeyPair=function(t){t||(t={});for(var e=new o.hmacDRBG({hash:this.hash,pers:t.pers,entropy:t.entropy||o.rand(this.hash.hmacStrength),nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new i(2));;){var a=new i(e.generate(r));if(!(a.cmp(n)>0))return a.iaddn(1),this.keyFromPrivate(a)}},n.prototype._truncateToN=function(t,e){var r=8*t.byteLength()-this.n.bitLength();return r>0&&(t=t.ushrn(r)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},n.prototype.sign=function(t,e,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),e=this.keyFromPrivate(e,r),t=this._truncateToN(new i(t,16));for(var a=this.n.byteLength(),f=e.getPrivate().toArray("be",a),s=t.toArray("be",a),h=new o.hmacDRBG({hash:this.hash,entropy:f,nonce:s,pers:n.pers,persEnc:n.persEnc}),c=this.n.sub(new i(1)),d=0;!0;d++){var l=n.k?n.k(d):new i(h.generate(this.n.byteLength()));if(l=this._truncateToN(l,!0),!(l.cmpn(1)<=0||l.cmp(c)>=0)){var p=this.g.mul(l);if(!p.isInfinity()){var b=p.getX(),v=b.umod(this.n);if(0!==v.cmpn(0)){var y=l.invm(this.n).mul(v.mul(e.getPrivate()).iadd(t));if(y=y.umod(this.n),0!==y.cmpn(0)){var m=(p.getY().isOdd()?1:0)|(0!==b.cmp(v)?2:0);return n.canonical&&y.cmp(this.nh)>0&&(y=this.n.sub(y),m^=1),new u({r:v,s:y,recoveryParam:m})}}}}}},n.prototype.verify=function(t,e,r,n){t=this._truncateToN(new i(t,16)),r=this.keyFromPublic(r,n),e=new u(e,"hex");var o=e.r,a=e.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var f=a.invm(this.n),s=f.mul(t).umod(this.n),h=f.mul(o).umod(this.n);if(!this.curve._maxwellTrick){var c=this.g.mulAdd(s,r.getPublic(),h);return!c.isInfinity()&&0===c.getX().umod(this.n).cmp(o)}var c=this.g.jmulAdd(s,r.getPublic(),h);return!c.isInfinity()&&c.eqXToP(o)},n.prototype.recoverPubKey=function(t,e,r,n){f((3&r)===r,"The recovery param is more than two bits"),e=new u(e,n);var o=this.n,a=new i(t),s=e.r,h=e.s,c=1&r,d=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&d)throw new Error("Unable to find sencond key candinate");s=d?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var l=e.r.invm(o),p=o.sub(a).mul(l).umod(o),b=h.mul(l).umod(o);return this.g.mulAdd(p,s,b)},n.prototype.getKeyRecoveryParam=function(t,e,r,n){if(e=new u(e,n),null!==e.recoveryParam)return e.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(t,e,i)}catch(t){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},function(t,e,r){"use strict";function n(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}var i=r(18);t.exports=n,n.fromPublic=function(t,e,r){return e instanceof n?e:new n(t,{pub:e,pubEnc:r})},n.fromPrivate=function(t,e,r){return e instanceof n?e:new n(t,{priv:e,privEnc:r})},n.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},n.prototype.getPublic=function(t,e){return"string"==typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},n.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},n.prototype._importPrivate=function(t,e){this.priv=new i(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},n.prototype._importPublic=function(t,e){return t.x||t.y?void(this.pub=this.ec.curve.point(t.x,t.y)):void(this.pub=this.ec.curve.decodePoint(t,e))},n.prototype.derive=function(t){return t.mul(this.priv).getX()},n.prototype.sign=function(t,e,r){return this.ec.sign(t,this,e,r)},n.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},n.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(t,e,r){"use strict";function n(t,e){return t instanceof n?t:void(this._importDER(t,e)||(c(t.r&&t.s,"Signature without r or s"),this.r=new s(t.r,16),this.s=new s(t.s,16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam))}function i(){this.place=0}function o(t,e){var r=t[e.place++];if(!(128&r))return r;for(var n=15&r,i=0,o=0,a=e.place;o<n;o++,a++)i<<=8,i|=t[a];return e.place=a,i}function a(t){for(var e=0,r=t.length-1;!t[e]&&!(128&t[e+1])&&e<r;)e++;return 0===e?t:t.slice(e)}function f(t,e){if(e<128)return void t.push(e);var r=1+(Math.log(e)/Math.LN2>>>3);for(t.push(128|r);--r;)t.push(e>>>(r<<3)&255);t.push(e)}var s=r(18),u=r(19),h=u.utils,c=h.assert;t.exports=n,n.prototype._importDER=function(t,e){t=h.toArray(t,e);var r=new i;if(48!==t[r.place++])return!1;var n=o(t,r);if(n+r.place!==t.length)return!1;if(2!==t[r.place++])return!1;var a=o(t,r),f=t.slice(r.place,a+r.place);if(r.place+=a,2!==t[r.place++])return!1;var u=o(t,r);if(t.length!==u+r.place)return!1;var c=t.slice(r.place,u+r.place);return 0===f[0]&&128&f[1]&&(f=f.slice(1)),0===c[0]&&128&c[1]&&(c=c.slice(1)),this.r=new s(f),this.s=new s(c),this.recoveryParam=null,!0},n.prototype.toDER=function(t){var e=this.r.toArray(),r=this.s.toArray();for(128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r)),e=a(e),r=a(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];f(n,e.length),n=n.concat(e),n.push(2),f(n,r.length);var i=n.concat(r),o=[48];return f(o,i.length),o=o.concat(i),h.encode(o,t)}},function(t,e,r){"use strict";function n(t){if(f("ed25519"===t,"only tested with ed25519 so far"),!(this instanceof n))return new n(t);var t=o.curves[t].curve;this.curve=t,this.g=t.g,this.g.precompute(t.n.bitLength()+1),this.pointClass=t.point().constructor,this.encodingLength=Math.ceil(t.n.bitLength()/8),this.hash=i.sha512}var i=r(49),o=r(19),a=o.utils,f=a.assert,s=a.parseBytes,u=r(517),h=r(518);t.exports=n,n.prototype.sign=function(t,e){t=s(t);var r=this.keyFromSecret(e),n=this.hashInt(r.messagePrefix(),t),i=this.g.mul(n),o=this.encodePoint(i),a=this.hashInt(o,r.pubBytes(),t).mul(r.priv()),f=n.add(a).umod(this.curve.n);return this.makeSignature({R:i,S:f,Rencoded:o})},n.prototype.verify=function(t,e,r){t=s(t),e=this.makeSignature(e);var n=this.keyFromPublic(r),i=this.hashInt(e.Rencoded(),n.pubBytes(),t),o=this.g.mul(e.S()),a=e.R().add(n.pub().mul(i));return a.eq(o)},n.prototype.hashInt=function(){for(var t=this.hash(),e=0;e<arguments.length;e++)t.update(arguments[e]);return a.intFromLE(t.digest()).umod(this.curve.n)},n.prototype.keyFromPublic=function(t){return u.fromPublic(this,t)},n.prototype.keyFromSecret=function(t){return u.fromSecret(this,t)},n.prototype.makeSignature=function(t){return t instanceof h?t:new h(this,t)},n.prototype.encodePoint=function(t){var e=t.getY().toArray("le",this.encodingLength);return e[this.encodingLength-1]|=t.getX().isOdd()?128:0,e},n.prototype.decodePoint=function(t){t=a.parseBytes(t);var e=t.length-1,r=t.slice(0,e).concat(t[e]&-129),n=0!==(128&t[e]),i=a.intFromLE(r);return this.curve.pointFromY(i,n)},n.prototype.encodeInt=function(t){return t.toArray("le",this.encodingLength)},n.prototype.decodeInt=function(t){return a.intFromLE(t)},n.prototype.isPoint=function(t){return t instanceof this.pointClass}},function(t,e,r){"use strict";function n(t,e){this.eddsa=t,this._secret=f(e.secret),t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=f(e.pub)}var i=r(19),o=i.utils,a=o.assert,f=o.parseBytes,s=o.cachedProperty;n.fromPublic=function(t,e){return e instanceof n?e:new n(t,{pub:e})},n.fromSecret=function(t,e){return e instanceof n?e:new n(t,{secret:e})},n.prototype.secret=function(){return this._secret},s(n,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),s(n,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),s(n,"privBytes",function(){var t=this.eddsa,e=this.hash(),r=t.encodingLength-1,n=e.slice(0,t.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n}),s(n,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),s(n,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),s(n,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),n.prototype.sign=function(t){return a(this._secret,"KeyPair can only verify"),this.eddsa.sign(t,this)},n.prototype.verify=function(t,e){return this.eddsa.verify(t,e,this)},n.prototype.getSecret=function(t){return a(this._secret,"KeyPair is public only"),o.encode(this.secret(),t)},n.prototype.getPublic=function(t){return o.encode(this.pubBytes(),t)},t.exports=n},function(t,e,r){"use strict";function n(t,e){this.eddsa=t,"object"!=typeof e&&(e=u(e)),Array.isArray(e)&&(e={R:e.slice(0,t.encodingLength),S:e.slice(t.encodingLength)}),f(e.R&&e.S,"Signature without R or S"),t.isPoint(e.R)&&(this._R=e.R),e.S instanceof i&&(this._S=e.S),this._Rencoded=Array.isArray(e.R)?e.R:e.Rencoded,this._Sencoded=Array.isArray(e.S)?e.S:e.Sencoded}var i=r(18),o=r(19),a=o.utils,f=a.assert,s=a.cachedProperty,u=a.parseBytes;s(n,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),s(n,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),s(n,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),s(n,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),n.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},n.prototype.toHex=function(){return a.encode(this.toBytes(),"hex").toUpperCase()},t.exports=n},function(t,e,r){"use strict";function n(t){if(!(this instanceof n))return new n(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this.reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=a.toArray(t.entropy,t.entropyEnc),r=a.toArray(t.nonce,t.nonceEnc),i=a.toArray(t.pers,t.persEnc);f(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,r,i)}var i=r(49),o=r(19),a=o.utils,f=a.assert;t.exports=n,n.prototype._init=function(t,e,r){var n=t.concat(e).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this.reseed=1,this.reseedInterval=281474976710656},n.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},n.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},n.prototype.reseed=function(t,e,r,n){"string"!=typeof e&&(n=r,r=e,e=null),t=a.toBuffer(t,e),r=a.toBuffer(r,n),f(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(r||[])),this.reseed=1},n.prototype.generate=function(t,e,r,n){if(this.reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof e&&(n=r,r=e,e=null),r&&(r=a.toArray(r,n),this._update(r));for(var i=[];i.length<t;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,t);return this._update(r),this.reseed++,a.encode(o,e)}},function(t,e){t.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
}}},function(t,e,r){"use strict";function n(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if("string"!=typeof t){for(var n=0;n<t.length;n++)r[n]=0|t[n];return r}if(e){if("hex"===e){t=t.replace(/[^a-z0-9]+/gi,""),t.length%2!==0&&(t="0"+t);for(var n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))}}else for(var n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}return r}function i(t){return 1===t.length?"0"+t:t}function o(t){for(var e="",r=0;r<t.length;r++)e+=i(t[r].toString(16));return e}function a(t,e){for(var r=[],n=1<<e+1,i=t.clone();i.cmpn(1)>=0;){var o;if(i.isOdd()){var a=i.andln(n-1);o=a>(n>>1)-1?(n>>1)-a:a,i.isubn(o)}else o=0;r.push(o);for(var f=0!==i.cmpn(0)&&0===i.andln(n-1)?e+1:1,s=1;s<f;s++)r.push(0);i.iushrn(f)}return r}function f(t,e){var r=[[],[]];t=t.clone(),e=e.clone();for(var n=0,i=0;t.cmpn(-n)>0||e.cmpn(-i)>0;){var o=t.andln(3)+n&3,a=e.andln(3)+i&3;3===o&&(o=-1),3===a&&(a=-1);var f;if(0===(1&o))f=0;else{var s=t.andln(7)+n&7;f=3!==s&&5!==s||2!==a?o:-o}r[0].push(f);var u;if(0===(1&a))u=0;else{var s=e.andln(7)+i&7;u=3!==s&&5!==s||2!==o?a:-a}r[1].push(u),2*n===f+1&&(n=1-n),2*i===u+1&&(i=1-i),t.iushrn(1),e.iushrn(1)}return r}function s(t,e,r){var n="_"+e;t.prototype[e]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}}function u(t){return"string"==typeof t?c.toArray(t,"hex"):t}function h(t){return new d(t,"hex","le")}var c=e,d=r(18);c.assert=function(t,e){if(!t)throw new Error(e||"Assertion failed")},c.toArray=n,c.zero2=i,c.toHex=o,c.encode=function(t,e){return"hex"===e?o(t):t},c.getNAF=a,c.getJSF=f,c.cachedProperty=s,c.parseBytes=u,c.intFromLE=h},function(t,e,r){function n(t){this.rand=t}var i;if(t.exports=function(t){return i||(i=new n(null)),i.generate(t)},t.exports.Rand=n,n.prototype.generate=function(t){return this._rand(t)},"object"==typeof window)window.crypto&&window.crypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.crypto.getRandomValues(e),e}:window.msCrypto&&window.msCrypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.msCrypto.getRandomValues(e),e}:n.prototype._rand=function(){throw new Error("Not implemented yet")};else try{var o=r(609);n.prototype._rand=function(t){return o.randomBytes(t)}}catch(t){n.prototype._rand=function(t){for(var e=new Uint8Array(t),r=0;r<e.length;r++)e[r]=this.rand.getByte();return e}}},function(t,e,r){function n(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var i=r(49),o=i.utils,a=o.assert;e.BlockHash=n,n.prototype.update=function(t,e){if(t=o.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var r=t.length%this._delta8;this.pending=t.slice(t.length-r,t.length),0===this.pending.length&&(this.pending=null),t=o.join32(t,0,t.length-r,this.endian);for(var n=0;n<t.length;n+=this._delta32)this._update(t,n,n+this._delta32)}return this},n.prototype.digest=function(t){return this.update(this._pad()),a(null===this.pending),this._digest(t)},n.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,r=e-(t+this.padLength)%e,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(t<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=t>>>24&255,n[i++]=t>>>16&255,n[i++]=t>>>8&255,n[i++]=255&t}else{n[i++]=255&t,n[i++]=t>>>8&255,n[i++]=t>>>16&255,n[i++]=t>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0;for(var o=8;o<this.padLength;o++)n[i++]=0}return n}},function(t,e,r){function n(t,e,r){return this instanceof n?(this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,void this._init(o.toArray(e,r))):new n(t,e,r)}var i=r(49),o=i.utils,a=o.assert;t.exports=n,n.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),a(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(var e=0;e<t.length;e++)t[e]^=54;this.inner=(new this.Hash).update(t);for(var e=0;e<t.length;e++)t[e]^=106;this.outer=(new this.Hash).update(t)},n.prototype.update=function(t,e){return this.inner.update(t,e),this},n.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},function(t,e,r){function n(){return this instanceof n?(l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],void(this.endian="little")):new n}function i(t,e,r,n){return t<=15?e^r^n:t<=31?e&r|~e&n:t<=47?(e|~r)^n:t<=63?e&n|r&~n:e^(r|~n)}function o(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function a(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}var f=r(49),s=f.utils,u=s.rotl32,h=s.sum32,c=s.sum32_3,d=s.sum32_4,l=f.common.BlockHash;s.inherits(n,l),e.ripemd160=n,n.blockSize=512,n.outSize=160,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(t,e){for(var r=this.h[0],n=this.h[1],f=this.h[2],s=this.h[3],l=this.h[4],m=r,g=n,w=f,_=s,M=l,S=0;S<80;S++){var E=h(u(d(r,i(S,n,f,s),t[p[S]+e],o(S)),v[S]),l);r=l,l=s,s=u(f,10),f=n,n=E,E=h(u(d(m,i(79-S,g,w,_),t[b[S]+e],a(S)),y[S]),M),m=M,M=_,_=u(w,10),w=g,g=E}E=c(this.h[1],f,_),this.h[1]=c(this.h[2],s,M),this.h[2]=c(this.h[3],l,m),this.h[3]=c(this.h[4],r,g),this.h[4]=c(this.h[0],n,w),this.h[0]=E},n.prototype._digest=function(t){return"hex"===t?s.toHex32(this.h,"little"):s.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],v=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],y=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(t,e,r){function n(){return this instanceof n?(X.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Y,void(this.W=new Array(64))):new n}function i(){return this instanceof i?(n.call(this),void(this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])):new i}function o(){return this instanceof o?(X.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=W,void(this.W=new Array(160))):new o}function a(){return this instanceof a?(o.call(this),void(this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428])):new a}function f(){return this instanceof f?(X.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],void(this.W=new Array(80))):new f}function s(t,e,r){return t&e^~t&r}function u(t,e,r){return t&e^t&r^e&r}function h(t,e,r){return t^e^r}function c(t){return R(t,2)^R(t,13)^R(t,22)}function d(t){return R(t,6)^R(t,11)^R(t,25)}function l(t){return R(t,7)^R(t,18)^t>>>3}function p(t){return R(t,17)^R(t,19)^t>>>10}function b(t,e,r,n){return 0===t?s(e,r,n):1===t||3===t?h(e,r,n):2===t?u(e,r,n):void 0}function v(t,e,r,n,i,o){var a=t&r^~t&i;return a<0&&(a+=4294967296),a}function y(t,e,r,n,i,o){var a=e&n^~e&o;return a<0&&(a+=4294967296),a}function m(t,e,r,n,i,o){var a=t&r^t&i^r&i;return a<0&&(a+=4294967296),a}function g(t,e,r,n,i,o){var a=e&n^e&o^n&o;return a<0&&(a+=4294967296),a}function w(t,e){var r=N(t,e,28),n=N(e,t,2),i=N(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function _(t,e){var r=L(t,e,28),n=L(e,t,2),i=L(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function M(t,e){var r=N(t,e,14),n=N(t,e,18),i=N(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function S(t,e){var r=L(t,e,14),n=L(t,e,18),i=L(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function E(t,e){var r=N(t,e,1),n=N(t,e,8),i=U(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function A(t,e){var r=L(t,e,1),n=L(t,e,8),i=z(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function k(t,e){var r=N(t,e,19),n=N(e,t,29),i=U(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}function x(t,e){var r=L(t,e,19),n=L(e,t,29),i=z(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}var I=r(49),B=I.utils,O=B.assert,R=B.rotr32,P=B.rotl32,T=B.sum32,j=B.sum32_4,C=B.sum32_5,N=B.rotr64_hi,L=B.rotr64_lo,U=B.shr64_hi,z=B.shr64_lo,D=B.sum64,q=B.sum64_hi,F=B.sum64_lo,K=B.sum64_4_hi,G=B.sum64_4_lo,V=B.sum64_5_hi,H=B.sum64_5_lo,X=I.common.BlockHash,Y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],W=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],Z=[1518500249,1859775393,2400959708,3395469782];B.inherits(n,X),e.sha256=n,n.blockSize=512,n.outSize=256,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n];for(;n<r.length;n++)r[n]=j(p(r[n-2]),r[n-7],l(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],a=this.h[2],f=this.h[3],h=this.h[4],b=this.h[5],v=this.h[6],y=this.h[7];O(this.k.length===r.length);for(var n=0;n<r.length;n++){var m=C(y,d(h),s(h,b,v),this.k[n],r[n]),g=T(c(i),u(i,o,a));y=v,v=b,b=h,h=T(f,m),f=a,a=o,o=i,i=T(m,g)}this.h[0]=T(this.h[0],i),this.h[1]=T(this.h[1],o),this.h[2]=T(this.h[2],a),this.h[3]=T(this.h[3],f),this.h[4]=T(this.h[4],h),this.h[5]=T(this.h[5],b),this.h[6]=T(this.h[6],v),this.h[7]=T(this.h[7],y)},n.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")},B.inherits(i,n),e.sha224=i,i.blockSize=512,i.outSize=224,i.hmacStrength=192,i.padLength=64,i.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h.slice(0,7),"big"):B.split32(this.h.slice(0,7),"big")},B.inherits(o,X),e.sha512=o,o.blockSize=1024,o.outSize=512,o.hmacStrength=192,o.padLength=128,o.prototype._prepareBlock=function(t,e){for(var r=this.W,n=0;n<32;n++)r[n]=t[e+n];for(;n<r.length;n+=2){var i=k(r[n-4],r[n-3]),o=x(r[n-4],r[n-3]),a=r[n-14],f=r[n-13],s=E(r[n-30],r[n-29]),u=A(r[n-30],r[n-29]),h=r[n-32],c=r[n-31];r[n]=K(i,o,a,f,s,u,h,c),r[n+1]=G(i,o,a,f,s,u,h,c)}},o.prototype._update=function(t,e){this._prepareBlock(t,e);var r=this.W,n=this.h[0],i=this.h[1],o=this.h[2],a=this.h[3],f=this.h[4],s=this.h[5],u=this.h[6],h=this.h[7],c=this.h[8],d=this.h[9],l=this.h[10],p=this.h[11],b=this.h[12],E=this.h[13],A=this.h[14],k=this.h[15];O(this.k.length===r.length);for(var x=0;x<r.length;x+=2){var I=A,B=k,R=M(c,d),P=S(c,d),T=v(c,d,l,p,b,E),j=y(c,d,l,p,b,E),C=this.k[x],N=this.k[x+1],L=r[x],U=r[x+1],z=V(I,B,R,P,T,j,C,N,L,U),K=H(I,B,R,P,T,j,C,N,L,U),I=w(n,i),B=_(n,i),R=m(n,i,o,a,f,s),P=g(n,i,o,a,f,s),G=q(I,B,R,P),X=F(I,B,R,P);A=b,k=E,b=l,E=p,l=c,p=d,c=q(u,h,z,K),d=F(h,h,z,K),u=f,h=s,f=o,s=a,o=n,a=i,n=q(z,K,G,X),i=F(z,K,G,X)}D(this.h,0,n,i),D(this.h,2,o,a),D(this.h,4,f,s),D(this.h,6,u,h),D(this.h,8,c,d),D(this.h,10,l,p),D(this.h,12,b,E),D(this.h,14,A,k)},o.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")},B.inherits(a,o),e.sha384=a,a.blockSize=1024,a.outSize=384,a.hmacStrength=192,a.padLength=128,a.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h.slice(0,12),"big"):B.split32(this.h.slice(0,12),"big")},B.inherits(f,X),e.sha1=f,f.blockSize=512,f.outSize=160,f.hmacStrength=80,f.padLength=64,f.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n];for(;n<r.length;n++)r[n]=P(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);for(var i=this.h[0],o=this.h[1],a=this.h[2],f=this.h[3],s=this.h[4],n=0;n<r.length;n++){var u=~~(n/20),h=C(P(i,5),b(u,o,a,f),s,r[n],Z[u]);s=f,f=a,a=P(o,30),o=i,i=h}this.h[0]=T(this.h[0],i),this.h[1]=T(this.h[1],o),this.h[2]=T(this.h[2],a),this.h[3]=T(this.h[3],f),this.h[4]=T(this.h[4],s)},f.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")}},function(t,e,r){function n(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if("string"==typeof t)if(e){if("hex"===e){t=t.replace(/[^a-z0-9]+/gi,""),t.length%2!==0&&(t="0"+t);for(var n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))}}else for(var n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}else for(var n=0;n<t.length;n++)r[n]=0|t[n];return r}function i(t){for(var e="",r=0;r<t.length;r++)e+=f(t[r].toString(16));return e}function o(t){var e=t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24;return e>>>0}function a(t,e){for(var r="",n=0;n<t.length;n++){var i=t[n];"little"===e&&(i=o(i)),r+=s(i.toString(16))}return r}function f(t){return 1===t.length?"0"+t:t}function s(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}function u(t,e,r,n){var i=r-e;y(i%4===0);for(var o=new Array(i/4),a=0,f=e;a<o.length;a++,f+=4){var s;s="big"===n?t[f]<<24|t[f+1]<<16|t[f+2]<<8|t[f+3]:t[f+3]<<24|t[f+2]<<16|t[f+1]<<8|t[f],o[a]=s>>>0}return o}function h(t,e){for(var r=new Array(4*t.length),n=0,i=0;n<t.length;n++,i+=4){var o=t[n];"big"===e?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r}function c(t,e){return t>>>e|t<<32-e}function d(t,e){return t<<e|t>>>32-e}function l(t,e){return t+e>>>0}function p(t,e,r){return t+e+r>>>0}function b(t,e,r,n){return t+e+r+n>>>0}function v(t,e,r,n,i){return t+e+r+n+i>>>0}function y(t,e){if(!t)throw new Error(e||"Assertion failed")}function m(t,e,r,n){var i=t[e],o=t[e+1],a=n+o>>>0,f=(a<n?1:0)+r+i;t[e]=f>>>0,t[e+1]=a}function g(t,e,r,n){var i=e+n>>>0,o=(i<e?1:0)+t+r;return o>>>0}function w(t,e,r,n){var i=e+n;return i>>>0}function _(t,e,r,n,i,o,a,f){var s=0,u=e;u=u+n>>>0,s+=u<e?1:0,u=u+o>>>0,s+=u<o?1:0,u=u+f>>>0,s+=u<f?1:0;var h=t+r+i+a+s;return h>>>0}function M(t,e,r,n,i,o,a,f){var s=e+n+o+f;return s>>>0}function S(t,e,r,n,i,o,a,f,s,u){var h=0,c=e;c=c+n>>>0,h+=c<e?1:0,c=c+o>>>0,h+=c<o?1:0,c=c+f>>>0,h+=c<f?1:0,c=c+u>>>0,h+=c<u?1:0;var d=t+r+i+a+s+h;return d>>>0}function E(t,e,r,n,i,o,a,f,s,u){var h=e+n+o+f+u;return h>>>0}function A(t,e,r){var n=e<<32-r|t>>>r;return n>>>0}function k(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}function x(t,e,r){return t>>>r}function I(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}var B=e,O=r(2);B.toArray=n,B.toHex=i,B.htonl=o,B.toHex32=a,B.zero2=f,B.zero8=s,B.join32=u,B.split32=h,B.rotr32=c,B.rotl32=d,B.sum32=l,B.sum32_3=p,B.sum32_4=b,B.sum32_5=v,B.assert=y,B.inherits=O,e.sum64=m,e.sum64_hi=g,e.sum64_lo=w,e.sum64_4_hi=_,e.sum64_4_lo=M,e.sum64_5_hi=S,e.sum64_5_lo=E,e.rotr64_hi=A,e.rotr64_lo=k,e.shr64_hi=x,e.shr64_lo=I},function(t,e,r){var n=r(100),i=n.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())});e.RSAPrivateKey=i;var o=n.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())});e.RSAPublicKey=o;var a=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(f),this.key("subjectPublicKey").bitstr())});e.PublicKey=a;var f=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),s=n.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(f),this.key("subjectPrivateKey").octstr())});e.PrivateKey=s;var u=n.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())});e.EncryptedPrivateKey=u;var h=n.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())});e.DSAPrivateKey=h,e.DSAparam=n.define("DSAparam",function(){this.int()});var c=n.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(d),this.key("publicKey").optional().explicit(1).bitstr())});e.ECPrivateKey=c;var d=n.define("ECParameters",function(){this.choice({namedCurve:this.objid()})});e.signature=n.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(t,e,r){(function(e){var n=/Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m,i=/^-----BEGIN (.*) KEY-----\r?\n/m,o=/^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m,a=r(148),f=r(219);t.exports=function(t,r){var s,u=t.toString(),h=u.match(n);if(h){var c="aes"+h[1],d=new e(h[2],"hex"),l=new e(h[3].replace(/\r?\n/g,""),"base64"),p=a(r,d.slice(0,8),parseInt(h[1],10)).key,b=[],v=f.createDecipheriv(c,p,d);b.push(v.update(l)),b.push(v.final()),s=e.concat(b)}else{var y=u.match(o);s=new e(y[2].replace(/\r?\n/g,""),"base64")}var m=u.match(i)[1]+" KEY";return{tag:m,data:s}}}).call(e,r(1).Buffer)},function(t,e,r){function n(t,e){this.name=t,this.body=e,this.decoders={},this.encoders={}}var i=r(100),o=r(2),a=e;a.define=function(t,e){return new n(t,e)},n.prototype._createNamed=function(t){var e;try{e=r(251).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(t){e=function(t){this._initNamed(t)}}return o(e,t),e.prototype._initNamed=function(e){t.call(this,e)},new e(this)},n.prototype._getDecoder=function(t){return t=t||"der",this.decoders.hasOwnProperty(t)||(this.decoders[t]=this._createNamed(i.decoders[t])),this.decoders[t]},n.prototype.decode=function(t,e,r){return this._getDecoder(e).decode(t,r)},n.prototype._getEncoder=function(t){return t=t||"der",this.encoders.hasOwnProperty(t)||(this.encoders[t]=this._createNamed(i.encoders[t])),this.encoders[t]},n.prototype.encode=function(t,e,r){return this._getEncoder(e).encode(t,r)}},function(t,e,r){function n(t,e){var r={};this._baseState=r,r.enc=t,r.parent=e||null,r.children=null,r.tag=null,r.args=null,r.reverseArgs=null,r.choice=null,r.optional=!1,r.any=!1,r.obj=!1,r.use=null,r.useDecoder=null,r.key=null,r.default=null,r.explicit=null,r.implicit=null,r.contains=null,r.parent||(r.children=[],this._wrap())}var i=r(68).Reporter,o=r(68).EncoderBuffer,a=r(68).DecoderBuffer,f=r(538),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],u=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s),h=["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"];t.exports=n;var c=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];n.prototype.clone=function(){var t=this._baseState,e={};c.forEach(function(r){e[r]=t[r]});var r=new this.constructor(e.parent);return r._baseState=e,r},n.prototype._wrap=function(){var t=this._baseState;u.forEach(function(e){this[e]=function(){var r=new this.constructor(this);return t.children.push(r),r[e].apply(r,arguments)}},this)},n.prototype._init=function(t){var e=this._baseState;f(null===e.parent),t.call(this),e.children=e.children.filter(function(t){return t._baseState.parent===this},this),f.equal(e.children.length,1,"Root node can have only one child")},n.prototype._useArgs=function(t){var e=this._baseState,r=t.filter(function(t){return t instanceof this.constructor},this);t=t.filter(function(t){return!(t instanceof this.constructor)},this),0!==r.length&&(f(null===e.children),e.children=r,r.forEach(function(t){t._baseState.parent=this},this)),0!==t.length&&(f(null===e.args),e.args=t,e.reverseArgs=t.map(function(t){if("object"!=typeof t||t.constructor!==Object)return t;var e={};return Object.keys(t).forEach(function(r){r==(0|r)&&(r|=0);var n=t[r];e[n]=r}),e}))},h.forEach(function(t){n.prototype[t]=function(){var e=this._baseState;throw new Error(t+" not implemented for encoding: "+e.enc)}}),s.forEach(function(t){n.prototype[t]=function(){var e=this._baseState,r=Array.prototype.slice.call(arguments);return f(null===e.tag),e.tag=t,this._useArgs(r),this}}),n.prototype.use=function(t){var e=this._baseState;return f(null===e.use),e.use=t,this},n.prototype.optional=function(){var t=this._baseState;return t.optional=!0,this},n.prototype.def=function(t){var e=this._baseState;return f(null===e.default),e.default=t,e.optional=!0,this},n.prototype.explicit=function(t){var e=this._baseState;return f(null===e.explicit&&null===e.implicit),e.explicit=t,this},n.prototype.implicit=function(t){var e=this._baseState;return f(null===e.explicit&&null===e.implicit),e.implicit=t,this},n.prototype.obj=function(){var t=this._baseState,e=Array.prototype.slice.call(arguments);return t.obj=!0,0!==e.length&&this._useArgs(e),this},n.prototype.key=function(t){var e=this._baseState;return f(null===e.key),e.key=t,this},n.prototype.any=function(){var t=this._baseState;return t.any=!0,this},n.prototype.choice=function(t){var e=this._baseState;return f(null===e.choice),e.choice=t,this._useArgs(Object.keys(t).map(function(e){return t[e]})),this},n.prototype.contains=function(t){var e=this._baseState;return f(null===e.use),e.contains=t,this},n.prototype._decode=function(t,e){var r=this._baseState;if(null===r.parent)return t.wrapResult(r.children[0]._decode(t,e));var n=r.default,i=!0,o=null;if(null!==r.key&&(o=t.enterKey(r.key)),r.optional){var f=null;if(null!==r.explicit?f=r.explicit:null!==r.implicit?f=r.implicit:null!==r.tag&&(f=r.tag),null!==f||r.any){if(i=this._peekTag(t,f,r.any),t.isError(i))return i}else{var s=t.save();try{null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e),i=!0}catch(t){i=!1}t.restore(s)}}var u;if(r.obj&&i&&(u=t.enterObject()),i){if(null!==r.explicit){var h=this._decodeTag(t,r.explicit);if(t.isError(h))return h;t=h}var c=t.offset;if(null===r.use&&null===r.choice){if(r.any)var s=t.save();var d=this._decodeTag(t,null!==r.implicit?r.implicit:r.tag,r.any);if(t.isError(d))return d;r.any?n=t.raw(s):t=d}if(e&&e.track&&null!==r.tag&&e.track(t.path(),c,t.length,"tagged"),e&&e.track&&null!==r.tag&&e.track(t.path(),t.offset,t.length,"content"),n=r.any?n:null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e),t.isError(n))return n;if(r.any||null!==r.choice||null===r.children||r.children.forEach(function(r){r._decode(t,e)}),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){var l=new a(n);n=this._getUse(r.contains,t._reporterState.obj)._decode(l,e)}}return r.obj&&i&&(n=t.leaveObject(u)),null===r.key||null===n&&i!==!0?null!==o&&t.exitKey(o):t.leaveKey(o,r.key,n),n},n.prototype._decodeGeneric=function(t,e,r){var n=this._baseState;return"seq"===t||"set"===t?null:"seqof"===t||"setof"===t?this._decodeList(e,t,n.args[0],r):/str$/.test(t)?this._decodeStr(e,t,r):"objid"===t&&n.args?this._decodeObjid(e,n.args[0],n.args[1],r):"objid"===t?this._decodeObjid(e,null,null,r):"gentime"===t||"utctime"===t?this._decodeTime(e,t,r):"null_"===t?this._decodeNull(e,r):"bool"===t?this._decodeBool(e,r):"int"===t||"enum"===t?this._decodeInt(e,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,e._reporterState.obj)._decode(e,r):e.error("unknown tag: "+t)},n.prototype._getUse=function(t,e){var r=this._baseState;return r.useDecoder=this._use(t,e),f(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},n.prototype._decodeChoice=function(t,e){var r=this._baseState,n=null,i=!1;return Object.keys(r.choice).some(function(o){var a=t.save(),f=r.choice[o];try{var s=f._decode(t,e);if(t.isError(s))return!1;n={type:o,value:s},i=!0}catch(e){return t.restore(a),!1}return!0},this),i?n:t.error("Choice not matched")},n.prototype._createEncoderBuffer=function(t){return new o(t,this.reporter)},n.prototype._encode=function(t,e,r){var n=this._baseState;if(null===n.default||n.default!==t){var i=this._encodeValue(t,e,r);if(void 0!==i&&!this._skipDefault(i,e,r))return i}},n.prototype._encodeValue=function(t,e,r){var n=this._baseState;if(null===n.parent)return n.children[0]._encode(t,e||new i);var o=null;if(this.reporter=e,n.optional&&void 0===t){if(null===n.default)return;t=n.default}var a=null,f=!1;if(n.any)o=this._createEncoderBuffer(t);else if(n.choice)o=this._encodeChoice(t,e);else if(n.contains)a=this._getUse(n.contains,r)._encode(t,e),f=!0;else if(n.children)a=n.children.map(function(r){if("null_"===r._baseState.tag)return r._encode(null,e,t);if(null===r._baseState.key)return e.error("Child should have a key");var n=e.enterKey(r._baseState.key);if("object"!=typeof t)return e.error("Child expected, but input is not object");var i=r._encode(t[r._baseState.key],e,t);return e.leaveKey(n),i},this).filter(function(t){return t}),a=this._createEncoderBuffer(a);else if("seqof"===n.tag||"setof"===n.tag){if(!n.args||1!==n.args.length)return e.error("Too many args for : "+n.tag);if(!Array.isArray(t))return e.error("seqof/setof, but data is not Array");var s=this.clone();s._baseState.implicit=null,a=this._createEncoderBuffer(t.map(function(r){var n=this._baseState;return this._getUse(n.args[0],t)._encode(r,e)},s))}else null!==n.use?o=this._getUse(n.use,r)._encode(t,e):(a=this._encodePrimitive(n.tag,t),f=!0);var o;if(!n.any&&null===n.choice){var u=null!==n.implicit?n.implicit:n.tag,h=null===n.implicit?"universal":"context";null===u?null===n.use&&e.error("Tag could be ommited only for .use()"):null===n.use&&(o=this._encodeComposite(u,f,h,a))}return null!==n.explicit&&(o=this._encodeComposite(n.explicit,!1,"context",o)),o},n.prototype._encodeChoice=function(t,e){var r=this._baseState,n=r.choice[t.type];return n||f(!1,t.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(t.value,e)},n.prototype._encodePrimitive=function(t,e){var r=this._baseState;if(/str$/.test(t))return this._encodeStr(e,t);if("objid"===t&&r.args)return this._encodeObjid(e,r.reverseArgs[0],r.args[1]);if("objid"===t)return this._encodeObjid(e,null,null);if("gentime"===t||"utctime"===t)return this._encodeTime(e,t);if("null_"===t)return this._encodeNull();if("int"===t||"enum"===t)return this._encodeInt(e,r.args&&r.reverseArgs[0]);if("bool"===t)return this._encodeBool(e);throw new Error("Unsupported tag: "+t)},n.prototype._isNumstr=function(t){return/^[0-9 ]*$/.test(t)},n.prototype._isPrintstr=function(t){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)}},function(t,e,r){function n(t){this._reporterState={obj:null,path:[],options:t||{},errors:[]}}function i(t,e){this.path=t,this.rethrow(e)}var o=r(2);e.Reporter=n,n.prototype.isError=function(t){return t instanceof i},n.prototype.save=function(){var t=this._reporterState;return{obj:t.obj,pathLen:t.path.length}},n.prototype.restore=function(t){var e=this._reporterState;e.obj=t.obj,e.path=e.path.slice(0,t.pathLen)},n.prototype.enterKey=function(t){return this._reporterState.path.push(t)},n.prototype.exitKey=function(t){var e=this._reporterState;e.path=e.path.slice(0,t-1)},n.prototype.leaveKey=function(t,e,r){var n=this._reporterState;this.exitKey(t),null!==n.obj&&(n.obj[e]=r)},n.prototype.path=function(){return this._reporterState.path.join("/")},n.prototype.enterObject=function(){var t=this._reporterState,e=t.obj;return t.obj={},e},n.prototype.leaveObject=function(t){var e=this._reporterState,r=e.obj;return e.obj=t,r},n.prototype.error=function(t){var e,r=this._reporterState,n=t instanceof i;if(e=n?t:new i(r.path.map(function(t){return"["+JSON.stringify(t)+"]"}).join(""),t.message||t,t.stack),!r.options.partial)throw e;return n||r.errors.push(e),e},n.prototype.wrapResult=function(t){var e=this._reporterState;return e.options.partial?{result:this.isError(t)?null:t,errors:e.errors}:t},o(i,Error),i.prototype.rethrow=function(t){if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,i),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},function(t,e,r){var n=r(215);e.tagClass={0:"universal",1:"application",2:"context",3:"private"},e.tagClassByName=n._reverse(e.tagClass),e.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",
21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},e.tagByName=n._reverse(e.tag)},function(t,e,r){var n=e;n.der=r(216),n.pem=r(535)},function(t,e,r){function n(t){a.call(this,t),this.enc="pem"}var i=r(2),o=r(1).Buffer,a=r(216);i(n,a),t.exports=n,n.prototype.decode=function(t,e){for(var r=t.toString().split(/[\r\n]+/g),n=e.label.toUpperCase(),i=/^-----(BEGIN|END) ([^-]+)-----$/,f=-1,s=-1,u=0;u<r.length;u++){var h=r[u].match(i);if(null!==h&&h[2]===n){if(f!==-1){if("END"!==h[1])break;s=u;break}if("BEGIN"!==h[1])break;f=u}}if(f===-1||s===-1)throw new Error("PEM section not found for: "+n);var c=r.slice(f+1,s).join("");c.replace(/[^a-z0-9\+\/=]+/gi,"");var d=new o(c,"base64");return a.prototype.decode.call(this,d,e)}},function(t,e,r){var n=e;n.der=r(217),n.pem=r(537)},function(t,e,r){function n(t){o.call(this,t),this.enc="pem"}var i=r(2),o=r(217);i(n,o),t.exports=n,n.prototype.encode=function(t,e){for(var r=o.prototype.encode.call(this,t),n=r.toString("base64"),i=["-----BEGIN "+e.label+"-----"],a=0;a<n.length;a+=64)i.push(n.slice(a,a+64));return i.push("-----END "+e.label+"-----"),i.join("\n")}},function(t,e){function r(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=r,r.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)}},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(u.call(this),this._cache=new i,this._last=void 0,this._cipher=new s.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(t){for(var e=t[15],r=-1;++r<e;)if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data");if(16!==e)return t.slice(0,16-e)}function a(e,r,i){var o=c[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(b[o.mode],r,i,!0):"auth"===o.type?new l(b[o.mode],r,i,!0):new n(b[o.mode],r,i)}function f(t,e){var r=c[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=p(e,!1,r.key,r.iv);return a(t,n.key,n.iv)}var s=r(101),u=r(103),h=r(2),c=r(147),d=r(226),l=r(218),p=r(148);h(n,u),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get(this._autopadding);)n=this._mode.decrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return o(this._mode.decrypt(this,t));if(t)throw new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(t){var e;if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e;return null},i.prototype.flush=function(){if(this.cache.length)return this.cache};var b={ECB:r(224),CBC:r(220),CFB:r(221),CFB8:r(223),CFB1:r(222),OFB:r(225),CTR:r(102),GCM:r(102)};e.createDecipher=f,e.createDecipheriv=a}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(s.call(this),this._cache=new i,this._cipher=new f.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(e,r,i){var o=h[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(p[o.mode],r,i):"auth"===o.type?new l(p[o.mode],r,i):new n(p[o.mode],r,i)}function a(t,e){var r=h[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=c(e,!1,r.key,r.iv);return o(t,n.key,n.iv)}var f=r(101),s=r(103),u=r(2),h=r(147),c=r(148),d=r(226),l=r(218);u(n,s),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get();)n=this._mode.encrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t;if("10101010101010101010101010101010"!==t.toString("hex"))throw this._cipher.scrub(),new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16);return this.cache=this.cache.slice(16),t}return null},i.prototype.flush=function(){for(var e=16-this.cache.length,r=new t(e),n=-1;++n<e;)r.writeUInt8(e,n);var i=t.concat([this.cache,r]);return i};var p={ECB:r(224),CBC:r(220),CFB:r(221),CFB8:r(223),CFB1:r(222),OFB:r(225),CTR:r(102),GCM:r(102)};e.createCipheriv=o,e.createCipher=a}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function r(t){this.h=t,this.state=new e(16),this.state.fill(0),this.cache=new e("")}function n(t){return[t.readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)]}function i(t){t=t.map(o);var r=new e(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r}function o(t){var e,r;return e=t>s||t<0?(r=Math.abs(t)%s,t<0?s-r:r):t}function a(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}var f=new e(16);f.fill(0),t.exports=r,r.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e];this._multiply()},r.prototype._multiply=function(){for(var t,e,r,o=n(this.h),f=[0,0,0,0],s=-1;++s<128;){for(e=0!==(this.state[~~(s/8)]&1<<7-s%8),e&&(f=a(f,o)),r=0!==(1&o[3]),t=3;t>0;t--)o[t]=o[t]>>>1|(1&o[t-1])<<31;o[0]=o[0]>>>1,r&&(o[0]=o[0]^225<<24)}this.state=i(f)},r.prototype.update=function(t){this.cache=e.concat([this.cache,t]);for(var r;this.cache.length>=16;)r=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(r)},r.prototype.final=function(t,r){return this.cache.length&&this.ghash(e.concat([this.cache,f],16)),this.ghash(i([0,t,0,r])),this.state};var s=Math.pow(2,32)}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,e,r,n){var a=v(e);if(a.curve){if("ecdsa"!==n)throw new Error("wrong private key type");return i(t,a)}if("dsa"===a.type){if("dsa"!==n)throw new Error("wrong private key type");return o(t,a,r)}if("rsa"!==n)throw new Error("wrong private key type");for(var f=a.modulus.byteLength(),s=[0,1];t.length+s.length+1<f;)s.push(255);s.push(0);for(var u=-1;++u<t.length;)s.push(t[u]);var h=l(s,a);return h}function i(t,r){var n=p[r.curve.join(".")];if(!n)throw new Error("unknown curve "+r.curve.join("."));var i=new m(n),o=i.genKeyPair();o._importPrivate(r.privateKey);var a=o.sign(t);return new e(a.toDER())}function o(t,e,r){for(var n,i=e.params.priv_key,o=e.params.p,u=e.params.q,d=e.params.g,l=new y(0),p=s(t,u).mod(u),b=!1,v=f(i,u,t,r);b===!1;)n=h(u,v,r),l=c(d,n,o,u),b=n.invm(u).imul(p.add(i.mul(l))).mod(u),b.cmpn(0)||(b=!1,l=new y(0));return a(l,b)}function a(t,r){t=t.toArray(),r=r.toArray(),128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r));var n=t.length+r.length+4,i=[48,n,2,t.length];return i=i.concat(t,[2,r.length],r),new e(i)}function f(t,r,n,i){if(t=new e(t.toArray()),t.length<r.byteLength()){var o=new e(r.byteLength()-t.length);o.fill(0),t=e.concat([o,t])}var a=n.length,f=u(n,r),s=new e(a);s.fill(1);var h=new e(a);return h.fill(0),h=d(i,h).update(s).update(new e([0])).update(t).update(f).digest(),s=d(i,h).update(s).digest(),h=d(i,h).update(s).update(new e([1])).update(t).update(f).digest(),s=d(i,h).update(s).digest(),{k:h,v:s}}function s(t,e){var r=new y(t),n=(t.length<<3)-e.bitLength();return n>0&&r.ishrn(n),r}function u(t,r){t=s(t,r),t=t.mod(r);var n=new e(t.toArray());if(n.length<r.byteLength()){var i=new e(r.byteLength()-n.length);i.fill(0),n=e.concat([i,n])}return n}function h(t,r,n){var i,o;do{for(i=new e("");8*i.length<t.bitLength();)r.v=d(n,r.k).update(r.v).digest(),i=e.concat([i,r.v]);o=s(i,t),r.k=d(n,r.k).update(r.v).update(new e([0])).digest(),r.v=d(n,r.k).update(r.v).digest()}while(o.cmp(t)!==-1);return o}function c(t,e,r,n){return t.toRed(y.mont(r)).redPow(e).fromRed().mod(n)}var d=r(149),l=r(507),p=r(212),b=r(19),v=r(213),y=r(18),m=b.ec;t.exports=n,t.exports.getKey=f,t.exports.makeKey=h}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r,n,a){var f=u(n);if("ec"===f.type){if("ecdsa"!==a)throw new Error("wrong public key type");return i(t,r,f)}if("dsa"===f.type){if("dsa"!==a)throw new Error("wrong public key type");return o(t,r,f)}if("rsa"!==a)throw new Error("wrong public key type");for(var s=f.modulus.byteLength(),c=[1],d=0;r.length+c.length+2<s;)c.push(255),d++;c.push(0);for(var l=-1;++l<r.length;)c.push(r[l]);c=new e(c);var p=h.mont(f.modulus);t=new h(t).toRed(p),t=t.redPow(new h(f.publicExponent)),t=new e(t.fromRed().toArray());var b=0;for(d<8&&(b=1),s=Math.min(t.length,c.length),t.length!==c.length&&(b=1),l=-1;++l<s;)b|=t[l]^c[l];return 0===b}function i(t,e,r){var n=f[r.data.algorithm.curve.join(".")];if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."));var i=new c(n),o=r.data.subjectPrivateKey.data;return i.verify(e,t,o)}function o(t,e,r){var n=r.data.p,i=r.data.q,o=r.data.g,f=r.data.pub_key,s=u.signature.decode(t,"der"),c=s.s,d=s.r;a(c,i),a(d,i);var l=h.mont(n),p=c.invm(i),b=o.toRed(l).redPow(new h(e).mul(p).mod(i)).fromRed().mul(f.toRed(l).redPow(d.mul(p).mod(i)).fromRed()).mod(n).mod(i);return!b.cmp(d)}function a(t,e){if(t.cmpn(0)<=0)throw new Error("invalid sig");if(t.cmp(e)>=e)throw new Error("invalid sig")}var f=r(212),s=r(19),u=r(213),h=r(18),c=s.ec;t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){this.curveType=f[t],this.curveType||(this.curveType={name:t}),this.curve=new o.ec(this.curveType.name),this.keys=void 0}function i(t,r,n){Array.isArray(t)||(t=t.toArray());var i=new e(t);if(n&&i.length<n){var o=new e(n-i.length);o.fill(0),i=e.concat([o,i])}return r?i.toString(r):i}var o=r(22),a=r(30);t.exports=function(t){return new n(t)};var f={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}};f.p224=f.secp224r1,f.p256=f.secp256r1=f.prime256v1,f.p192=f.secp192r1=f.prime192v1,f.p384=f.secp384r1,f.p521=f.secp521r1,n.prototype.generateKeys=function(t,e){return this.keys=this.curve.genKeyPair(),this.getPublicKey(t,e)},n.prototype.computeSecret=function(t,r,n){r=r||"utf8",e.isBuffer(t)||(t=new e(t,r));var o=this.curve.keyFromPublic(t).getPublic(),a=o.mul(this.keys.getPrivate()).getX();return i(a,n,this.curveType.byteLength)},n.prototype.getPublicKey=function(t,e){var r=this.keys.getPublic("compressed"===e,!0);return"hybrid"===e&&(r[r.length-1]%2?r[0]=7:r[0]=6),i(r,t)},n.prototype.getPrivateKey=function(t){return i(this.keys.getPrivate(),t)},n.prototype.setPublicKey=function(t,r){return r=r||"utf8",e.isBuffer(t)||(t=new e(t,r)),this.keys._importPublic(t),this},n.prototype.setPrivateKey=function(t,r){r=r||"utf8",e.isBuffer(t)||(t=new e(t,r));var n=new a(t);return n=n.toString(16),this.keys._importPrivate(n),this}}).call(e,r(1).Buffer)},function(t,e,r){"use strict";function n(t,e){this.type=t,this.p=new o(e.p,16),this.red=e.prime?o.red(e.prime):o.mont(this.p),this.zero=new o(0).toRed(this.red),this.one=new o(1).toRed(this.red),this.two=new o(2).toRed(this.red),this.n=e.n&&new o(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function i(t,e){this.curve=t,this.type=e,this.precomputed=null}var o=r(30),a=r(22),f=a.utils,s=f.getNAF,u=f.getJSF,h=f.assert;t.exports=n,n.prototype.point=function(){throw new Error("Not implemented")},n.prototype.validate=function(){throw new Error("Not implemented")},n.prototype._fixedNafMul=function(t,e){h(t.precomputed);var r=t._getDoubles(),n=s(e,1),i=(1<<r.step+1)-(r.step%2===0?2:1);i/=3;for(var o=[],a=0;a<n.length;a+=r.step){for(var f=0,e=a+r.step-1;e>=a;e--)f=(f<<1)+n[e];o.push(f)}for(var u=this.jpoint(null,null,null),c=this.jpoint(null,null,null),d=i;d>0;d--){for(var a=0;a<o.length;a++){var f=o[a];f===d?c=c.mixedAdd(r.points[a]):f===-d&&(c=c.mixedAdd(r.points[a].neg()))}u=u.add(c)}return u.toP()},n.prototype._wnafMul=function(t,e){var r=4,n=t._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=s(e,r),a=this.jpoint(null,null,null),f=o.length-1;f>=0;f--){for(var e=0;f>=0&&0===o[f];f--)e++;if(f>=0&&e++,a=a.dblp(e),f<0)break;var u=o[f];h(0!==u),a="affine"===t.type?u>0?a.mixedAdd(i[u-1>>1]):a.mixedAdd(i[-u-1>>1].neg()):u>0?a.add(i[u-1>>1]):a.add(i[-u-1>>1].neg())}return"affine"===t.type?a.toP():a},n.prototype._wnafMulAdd=function(t,e,r,n,i){for(var o=this._wnafT1,a=this._wnafT2,f=this._wnafT3,h=0,c=0;c<n;c++){var d=e[c],l=d._getNAFPoints(t);o[c]=l.wnd,a[c]=l.points}for(var c=n-1;c>=1;c-=2){var p=c-1,b=c;if(1===o[p]&&1===o[b]){var v=[e[p],null,null,e[b]];0===e[p].y.cmp(e[b].y)?(v[1]=e[p].add(e[b]),v[2]=e[p].toJ().mixedAdd(e[b].neg())):0===e[p].y.cmp(e[b].y.redNeg())?(v[1]=e[p].toJ().mixedAdd(e[b]),v[2]=e[p].add(e[b].neg())):(v[1]=e[p].toJ().mixedAdd(e[b]),v[2]=e[p].toJ().mixedAdd(e[b].neg()));var y=[-3,-1,-5,-7,0,7,5,1,3],m=u(r[p],r[b]);h=Math.max(m[0].length,h),f[p]=new Array(h),f[b]=new Array(h);for(var g=0;g<h;g++){var w=0|m[0][g],_=0|m[1][g];f[p][g]=y[3*(w+1)+(_+1)],f[b][g]=0,a[p]=v}}else f[p]=s(r[p],o[p]),f[b]=s(r[b],o[b]),h=Math.max(f[p].length,h),h=Math.max(f[b].length,h)}for(var M=this.jpoint(null,null,null),S=this._wnafT4,c=h;c>=0;c--){for(var E=0;c>=0;){for(var A=!0,g=0;g<n;g++)S[g]=0|f[g][c],0!==S[g]&&(A=!1);if(!A)break;E++,c--}if(c>=0&&E++,M=M.dblp(E),c<0)break;for(var g=0;g<n;g++){var d,k=S[g];0!==k&&(k>0?d=a[g][k-1>>1]:k<0&&(d=a[g][-k-1>>1].neg()),M="affine"===d.type?M.mixedAdd(d):M.add(d))}}for(var c=0;c<n;c++)a[c]=null;return i?M:M.toP()},n.BasePoint=i,i.prototype.eq=function(){throw new Error("Not implemented")},i.prototype.validate=function(){return this.curve.validate(this)},n.prototype.decodePoint=function(t,e){t=f.toArray(t,e);var r=this.p.byteLength();if((4===t[0]||6===t[0]||7===t[0])&&t.length-1===2*r){6===t[0]?h(t[t.length-1]%2===0):7===t[0]&&h(t[t.length-1]%2===1);var n=this.point(t.slice(1,1+r),t.slice(1+r,1+2*r));return n}if((2===t[0]||3===t[0])&&t.length-1===r)return this.pointFromX(t.slice(1,1+r),3===t[0]);throw new Error("Unknown point format")},i.prototype.encodeCompressed=function(t){return this.encode(t,!0)},i.prototype._encode=function(t){var e=this.curve.p.byteLength(),r=this.getX().toArray("be",e);return t?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",e))},i.prototype.encode=function(t,e){return f.encode(this._encode(e),t)},i.prototype.precompute=function(t){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},i.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},i.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<e;i+=t){for(var o=0;o<t;o++)n=n.dbl();r.push(n)}return{step:t,points:r}},i.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],r=(1<<t)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)e[i]=e[i-1].add(n);return{wnd:t,points:e}},i.prototype._getBeta=function(){return null},i.prototype.dblp=function(t){for(var e=this,r=0;r<t;r++)e=e.dbl();return e}},function(t,e,r){"use strict";function n(t){this.twisted=1!==(0|t.a),this.mOneA=this.twisted&&(0|t.a)===-1,this.extended=this.mOneA,u.call(this,"edwards",t),this.a=new f(t.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new f(t.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new f(t.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),h(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1===(0|t.c)}function i(t,e,r,n,i){u.BasePoint.call(this,t,"projective"),null===e&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new f(e,16),this.y=new f(r,16),this.z=n?new f(n,16):this.curve.one,this.t=i&&new f(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}var o=r(104),a=r(22),f=r(30),s=r(2),u=o.base,h=a.utils.assert;s(n,u),t.exports=n,n.prototype._mulA=function(t){return this.mOneA?t.redNeg():this.a.redMul(t)},n.prototype._mulC=function(t){return this.oneC?t:this.c.redMul(t)},n.prototype.jpoint=function(t,e,r,n){return this.point(t,e,r,n)},n.prototype.pointFromX=function(t,e){t=new f(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr(),n=this.c2.redSub(this.a.redMul(r)),i=this.one.redSub(this.c2.redMul(this.d).redMul(r)),o=n.redMul(i.redInvm()),a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");var s=a.fromRed().isOdd();return(e&&!s||!e&&s)&&(a=a.redNeg()),this.point(t,a)},n.prototype.pointFromY=function(t,e){t=new f(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr(),n=r.redSub(this.one),i=r.redMul(this.d).redAdd(this.one),o=n.redMul(i.redInvm());if(0===o.cmp(this.zero)){if(e)throw new Error("invalid point");return this.point(this.zero,t)}var a=o.redSqrt();if(0!==a.redSqr().redSub(o).cmp(this.zero))throw new Error("invalid point");return a.isOdd()!==e&&(a=a.redNeg()),this.point(a,t)},n.prototype.validate=function(t){if(t.isInfinity())return!0;t.normalize();var e=t.x.redSqr(),r=t.y.redSqr(),n=e.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));return 0===n.cmp(i)},s(i,u.BasePoint),n.prototype.pointFromJSON=function(t){return i.fromJSON(this,t)},n.prototype.point=function(t,e,r,n){return new i(this,t,e,r,n)},i.fromJSON=function(t,e){return new i(t,e[0],e[1],e[2])},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&0===this.y.cmp(this.z)},i.prototype._extDbl=function(){var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(t),i=this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),o=n.redAdd(e),a=o.redSub(r),f=n.redSub(e),s=i.redMul(a),u=o.redMul(f),h=i.redMul(f),c=a.redMul(o);return this.curve.point(s,u,c,h)},i.prototype._projDbl=function(){var t,e,r,n=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),o=this.y.redSqr();if(this.curve.twisted){var a=this.curve._mulA(i),f=a.redAdd(o);if(this.zOne)t=n.redSub(i).redSub(o).redMul(f.redSub(this.curve.two)),e=f.redMul(a.redSub(o)),r=f.redSqr().redSub(f).redSub(f);else{var s=this.z.redSqr(),u=f.redSub(s).redISub(s);t=n.redSub(i).redISub(o).redMul(u),e=f.redMul(a.redSub(o)),r=f.redMul(u)}}else{var a=i.redAdd(o),s=this.curve._mulC(this.c.redMul(this.z)).redSqr(),u=a.redSub(s).redSub(s);t=this.curve._mulC(n.redISub(a)).redMul(u),e=this.curve._mulC(a).redMul(i.redISub(o)),r=a.redMul(u)}return this.curve.point(t,e,r)},i.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},i.prototype._extAdd=function(t){var e=this.y.redSub(this.x).redMul(t.y.redSub(t.x)),r=this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),n=this.t.redMul(this.curve.dd).redMul(t.t),i=this.z.redMul(t.z.redAdd(t.z)),o=r.redSub(e),a=i.redSub(n),f=i.redAdd(n),s=r.redAdd(e),u=o.redMul(a),h=f.redMul(s),c=o.redMul(s),d=a.redMul(f);return this.curve.point(u,h,d,c)},i.prototype._projAdd=function(t){var e,r,n=this.z.redMul(t.z),i=n.redSqr(),o=this.x.redMul(t.x),a=this.y.redMul(t.y),f=this.curve.d.redMul(o).redMul(a),s=i.redSub(f),u=i.redAdd(f),h=this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),c=n.redMul(s).redMul(h);return this.curve.twisted?(e=n.redMul(u).redMul(a.redSub(this.curve._mulA(o))),r=s.redMul(u)):(e=n.redMul(u).redMul(a.redSub(o)),r=this.curve._mulC(s).redMul(u)),this.curve.point(c,e,r)},i.prototype.add=function(t){return this.isInfinity()?t:t.isInfinity()?this:this.curve.extended?this._extAdd(t):this._projAdd(t)},i.prototype.mul=function(t){return this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve._wnafMul(this,t)},i.prototype.mulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!1)},i.prototype.jmulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!0)},i.prototype.normalize=function(){if(this.zOne)return this;var t=this.z.redInvm();return this.x=this.x.redMul(t),this.y=this.y.redMul(t),this.t&&(this.t=this.t.redMul(t)),this.z=this.curve.one,this.zOne=!0,this},i.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()},i.prototype.getY=function(){return this.normalize(),this.y.fromRed()},i.prototype.eq=function(t){return this===t||0===this.getX().cmp(t.getX())&&0===this.getY().cmp(t.getY())},i.prototype.eqXToP=function(t){var e=t.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(e))return!0;for(var r=t.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(e.redIAdd(n),0===this.x.cmp(e))return!0}return!1},i.prototype.toP=i.prototype.normalize,i.prototype.mixedAdd=i.prototype.add},function(t,e,r){"use strict";function n(t){s.call(this,"mont",t),this.a=new a(t.a,16).toRed(this.red),this.b=new a(t.b,16).toRed(this.red),this.i4=new a(4).toRed(this.red).redInvm(),this.two=new a(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function i(t,e,r){s.BasePoint.call(this,t,"projective"),null===e&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new a(e,16),this.z=new a(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}var o=r(104),a=r(30),f=r(2),s=o.base,u=r(22),h=u.utils;f(n,s),t.exports=n,n.prototype.validate=function(t){var e=t.normalize().x,r=e.redSqr(),n=r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e),i=n.redSqrt();return 0===i.redSqr().cmp(n)},f(i,s.BasePoint),n.prototype.decodePoint=function(t,e){return this.point(h.toArray(t,e),1)},n.prototype.point=function(t,e){return new i(this,t,e)},n.prototype.pointFromJSON=function(t){return i.fromJSON(this,t)},i.prototype.precompute=function(){},i.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},i.fromJSON=function(t,e){return new i(t,e[0],e[1]||t.one)},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},i.prototype.dbl=function(){var t=this.x.redAdd(this.z),e=t.redSqr(),r=this.x.redSub(this.z),n=r.redSqr(),i=e.redSub(n),o=e.redMul(n),a=i.redMul(n.redAdd(this.curve.a24.redMul(i)));return this.curve.point(o,a)},i.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.diffAdd=function(t,e){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=t.x.redAdd(t.z),o=t.x.redSub(t.z),a=o.redMul(r),f=i.redMul(n),s=e.z.redMul(a.redAdd(f).redSqr()),u=e.x.redMul(a.redISub(f).redSqr());return this.curve.point(s,u)},i.prototype.mul=function(t){for(var e=t.clone(),r=this,n=this.curve.point(null,null),i=this,o=[];0!==e.cmpn(0);e.iushrn(1))o.push(e.andln(1));for(var a=o.length-1;a>=0;a--)0===o[a]?(r=r.diffAdd(n,i),n=n.dbl()):(n=r.diffAdd(n,i),r=r.dbl());return n},i.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.eq=function(t){return 0===this.getX().cmp(t.getX())},i.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(t,e,r){"use strict";function n(t){h.call(this,"short",t),this.a=new s(t.a,16).toRed(this.red),this.b=new s(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function i(t,e,r,n){h.BasePoint.call(this,t,"affine"),null===e&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new s(e,16),this.y=new s(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function o(t,e,r,n){h.BasePoint.call(this,t,"jacobian"),null===e&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new s(0)):(this.x=new s(e,16),this.y=new s(r,16),this.z=new s(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}var a=r(104),f=r(22),s=r(30),u=r(2),h=a.base,c=f.utils.assert;u(n,h),t.exports=n,n.prototype._getEndomorphism=function(t){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var e,r;if(t.beta)e=new s(t.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);e=n[0].cmp(n[1])<0?n[0]:n[1],e=e.toRed(this.red)}if(t.lambda)r=new s(t.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))?r=i[0]:(r=i[1],c(0===this.g.mul(r).x.cmp(this.g.x.redMul(e))))}var o;return o=t.basis?t.basis.map(function(t){return{a:new s(t.a,16),b:new s(t.b,16)}}):this._getEndoBasis(r),{beta:e,lambda:r,basis:o}}},n.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:s.mont(t),r=new s(2).toRed(e).redInvm(),n=r.redNeg(),i=new s(3).toRed(e).redNeg().redSqrt().redMul(r),o=n.redAdd(i).fromRed(),a=n.redSub(i).fromRed();return[o,a]},n.prototype._getEndoBasis=function(t){for(var e,r,n,i,o,a,f,u,h,c=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=t,l=this.n.clone(),p=new s(1),b=new s(0),v=new s(0),y=new s(1),m=0;0!==d.cmpn(0);){var g=l.div(d);u=l.sub(g.mul(d)),h=v.sub(g.mul(p));var w=y.sub(g.mul(b));if(!n&&u.cmp(c)<0)e=f.neg(),r=p,n=u.neg(),i=h;else if(n&&2===++m)break;f=u,l=d,d=u,v=p,p=h,y=b,b=w}o=u.neg(),a=h;var _=n.sqr().add(i.sqr()),M=o.sqr().add(a.sqr());return M.cmp(_)>=0&&(o=e,a=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),a=a.neg()),[{a:n,b:i},{a:o,b:a}]},n.prototype._endoSplit=function(t){var e=this.endo.basis,r=e[0],n=e[1],i=n.b.mul(t).divRound(this.n),o=r.b.neg().mul(t).divRound(this.n),a=i.mul(r.a),f=o.mul(n.a),s=i.mul(r.b),u=o.mul(n.b),h=t.sub(a).sub(f),c=s.add(u).neg();return{k1:h,k2:c}},n.prototype.pointFromX=function(t,e){t=new s(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(e&&!i||!e&&i)&&(n=n.redNeg()),this.point(t,n)},n.prototype.validate=function(t){if(t.inf)return!0;var e=t.x,r=t.y,n=this.a.redMul(e),i=e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},n.prototype._endoWnafMulAdd=function(t,e,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<t.length;o++){var a=this._endoSplit(e[o]),f=t[o],s=f._getBeta();a.k1.negative&&(a.k1.ineg(),f=f.neg(!0)),a.k2.negative&&(a.k2.ineg(),s=s.neg(!0)),n[2*o]=f,n[2*o+1]=s,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var u=this._wnafMulAdd(1,n,i,2*o,r),h=0;h<2*o;h++)n[h]=null,i[h]=null;return u},u(i,h.BasePoint),n.prototype.point=function(t,e,r){return new i(this,t,e,r)},n.prototype.pointFromJSON=function(t,e){return i.fromJSON(this,t,e)},i.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var r=this.curve,n=function(t){return r.point(t.x.redMul(r.endo.beta),t.y)};t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}}}return e}},i.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},i.fromJSON=function(t,e,r){function n(e){return t.point(e[0],e[1],r)}"string"==typeof e&&(e=JSON.parse(e));var i=t.point(e[0],e[1],r);if(!e[2])return i;var o=e[2];return i.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[i].concat(o.doubles.points.map(n))},naf:o.naf&&{wnd:o.naf.wnd,points:[i].concat(o.naf.points.map(n))}},i},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return this.inf},i.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(0===this.x.cmp(t.x))return this.curve.point(null,null);var e=this.y.redSub(t.y);0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()));var r=e.redSqr().redISub(this.x).redISub(t.x),n=e.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},i.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(0===t.cmpn(0))return this.curve.point(null,null);var e=this.curve.a,r=this.x.redSqr(),n=t.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,a)},i.prototype.getX=function(){return this.x.fromRed()},i.prototype.getY=function(){return this.y.fromRed()},i.prototype.mul=function(t){return t=new s(t,16),this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},i.prototype.mulAdd=function(t,e,r){var n=[this,e],i=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},i.prototype.jmulAdd=function(t,e,r){var n=[this,e],i=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},i.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))},i.prototype.neg=function(t){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var r=this.precomputed,n=function(t){return t.neg()};e.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return e},i.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t},
u(o,h.BasePoint),n.prototype.jpoint=function(t,e,r){return new o(this,t,e,r)},o.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),e=t.redSqr(),r=this.x.redMul(e),n=this.y.redMul(e).redMul(t);return this.curve.point(r,n)},o.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},o.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(e),i=t.x.redMul(r),o=this.y.redMul(e.redMul(t.z)),a=t.y.redMul(r.redMul(this.z)),f=n.redSub(i),s=o.redSub(a);if(0===f.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=f.redSqr(),h=u.redMul(f),c=n.redMul(u),d=s.redSqr().redIAdd(h).redISub(c).redISub(c),l=s.redMul(c.redISub(d)).redISub(o.redMul(h)),p=this.z.redMul(t.z).redMul(f);return this.curve.jpoint(d,l,p)},o.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var e=this.z.redSqr(),r=this.x,n=t.x.redMul(e),i=this.y,o=t.y.redMul(e).redMul(this.z),a=r.redSub(n),f=i.redSub(o);if(0===a.cmpn(0))return 0!==f.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var s=a.redSqr(),u=s.redMul(a),h=r.redMul(s),c=f.redSqr().redIAdd(u).redISub(h).redISub(h),d=f.redMul(h.redISub(c)).redISub(i.redMul(u)),l=this.z.redMul(a);return this.curve.jpoint(c,d,l)},o.prototype.dblp=function(t){if(0===t)return this;if(this.isInfinity())return this;if(!t)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var e=this,r=0;r<t;r++)e=e.dbl();return e}for(var n=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,f=this.z,s=f.redSqr().redSqr(),u=a.redAdd(a),r=0;r<t;r++){var h=o.redSqr(),c=u.redSqr(),d=c.redSqr(),l=h.redAdd(h).redIAdd(h).redIAdd(n.redMul(s)),p=o.redMul(c),b=l.redSqr().redISub(p.redAdd(p)),v=p.redISub(b),y=l.redMul(v);y=y.redIAdd(y).redISub(d);var m=u.redMul(f);r+1<t&&(s=s.redMul(d)),o=b,f=m,u=y}return this.curve.jpoint(o,u.redMul(i),f)},o.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},o.prototype._zeroDbl=function(){var t,e,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n),s=f.redSqr().redISub(a).redISub(a),u=o.redIAdd(o);u=u.redIAdd(u),u=u.redIAdd(u),t=s,e=f.redMul(a.redISub(s)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.x.redSqr(),c=this.y.redSqr(),d=c.redSqr(),l=this.x.redAdd(c).redSqr().redISub(h).redISub(d);l=l.redIAdd(l);var p=h.redAdd(h).redIAdd(h),b=p.redSqr(),v=d.redIAdd(d);v=v.redIAdd(v),v=v.redIAdd(v),t=b.redISub(l).redISub(l),e=p.redMul(l.redISub(t)).redISub(v),r=this.y.redMul(this.z),r=r.redIAdd(r)}return this.curve.jpoint(t,e,r)},o.prototype._threeDbl=function(){var t,e,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);a=a.redIAdd(a);var f=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),s=f.redSqr().redISub(a).redISub(a);t=s;var u=o.redIAdd(o);u=u.redIAdd(u),u=u.redIAdd(u),e=f.redMul(a.redISub(s)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.z.redSqr(),c=this.y.redSqr(),d=this.x.redMul(c),l=this.x.redSub(h).redMul(this.x.redAdd(h));l=l.redAdd(l).redIAdd(l);var p=d.redIAdd(d);p=p.redIAdd(p);var b=p.redAdd(p);t=l.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(c).redISub(h);var v=c.redSqr();v=v.redIAdd(v),v=v.redIAdd(v),v=v.redIAdd(v),e=l.redMul(p.redISub(t)).redISub(v)}return this.curve.jpoint(t,e,r)},o.prototype._dbl=function(){var t=this.curve.a,e=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=e.redSqr(),a=r.redSqr(),f=o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),s=e.redAdd(e);s=s.redIAdd(s);var u=s.redMul(a),h=f.redSqr().redISub(u.redAdd(u)),c=u.redISub(h),d=a.redSqr();d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=f.redMul(c).redISub(d),p=r.redAdd(r).redMul(n);return this.curve.jpoint(h,l,p)},o.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),n=e.redSqr(),i=t.redAdd(t).redIAdd(t),o=i.redSqr(),a=this.x.redAdd(e).redSqr().redISub(t).redISub(n);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(o);var f=a.redSqr(),s=n.redIAdd(n);s=s.redIAdd(s),s=s.redIAdd(s),s=s.redIAdd(s);var u=i.redIAdd(a).redSqr().redISub(o).redISub(f).redISub(s),h=e.redMul(u);h=h.redIAdd(h),h=h.redIAdd(h);var c=this.x.redMul(f).redISub(h);c=c.redIAdd(c),c=c.redIAdd(c);var d=this.y.redMul(u.redMul(s.redISub(u)).redISub(a.redMul(f)));d=d.redIAdd(d),d=d.redIAdd(d),d=d.redIAdd(d);var l=this.z.redAdd(a).redSqr().redISub(r).redISub(f);return this.curve.jpoint(c,d,l)},o.prototype.mul=function(t,e){return t=new s(t,e),this.curve._wnafMul(this,t)},o.prototype.eq=function(t){if("affine"===t.type)return this.eq(t.toJ());if(this===t)return!0;var e=this.z.redSqr(),r=t.z.redSqr();if(0!==this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))return!1;var n=e.redMul(this.z),i=r.redMul(t.z);return 0===this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)},o.prototype.eqXToP=function(t){var e=this.z.redSqr(),r=t.toRed(this.curve.red).redMul(e);if(0===this.x.cmp(r))return!0;for(var n=t.clone(),i=this.curve.redN.redMul(e);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}return!1},o.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},o.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(t,e,r){"use strict";function n(t){"short"===t.type?this.curve=new f.curve.short(t):"edwards"===t.type?this.curve=new f.curve.edwards(t):this.curve=new f.curve.mont(t),this.g=this.curve.g,this.n=this.curve.n,this.hash=t.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function i(t,e){Object.defineProperty(o,t,{configurable:!0,enumerable:!0,get:function(){var r=new n(e);return Object.defineProperty(o,t,{configurable:!0,enumerable:!0,value:r}),r}})}var o=e,a=r(50),f=r(22),s=f.utils.assert;o.PresetCurve=n,i("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:a.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),i("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:a.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),i("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:a.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),i("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:a.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),i("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:a.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),i("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"0",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["9"]}),i("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:a.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var u;try{u=r(557)}catch(t){u=void 0}i("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:a.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",u]})},function(t,e,r){"use strict";function n(t){return this instanceof n?("string"==typeof t&&(f(o.curves.hasOwnProperty(t),"Unknown curve "+t),t=o.curves[t]),t instanceof o.curves.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),void(this.hash=t.hash||t.curve.hash)):new n(t)}var i=r(30),o=r(22),a=o.utils,f=a.assert,s=r(551),u=r(552);t.exports=n,n.prototype.keyPair=function(t){return new s(this,t)},n.prototype.keyFromPrivate=function(t,e){return s.fromPrivate(this,t,e)},n.prototype.keyFromPublic=function(t,e){return s.fromPublic(this,t,e)},n.prototype.genKeyPair=function(t){t||(t={});for(var e=new o.hmacDRBG({hash:this.hash,pers:t.pers,entropy:t.entropy||o.rand(this.hash.hmacStrength),nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new i(2));;){var a=new i(e.generate(r));if(!(a.cmp(n)>0))return a.iaddn(1),this.keyFromPrivate(a)}},n.prototype._truncateToN=function(t,e){var r=8*t.byteLength()-this.n.bitLength();return r>0&&(t=t.ushrn(r)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},n.prototype.sign=function(t,e,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),e=this.keyFromPrivate(e,r),t=this._truncateToN(new i(t,16));for(var a=this.n.byteLength(),f=e.getPrivate().toArray("be",a),s=t.toArray("be",a),h=new o.hmacDRBG({hash:this.hash,entropy:f,nonce:s,pers:n.pers,persEnc:n.persEnc}),c=this.n.sub(new i(1)),d=0;!0;d++){var l=n.k?n.k(d):new i(h.generate(this.n.byteLength()));if(l=this._truncateToN(l,!0),!(l.cmpn(1)<=0||l.cmp(c)>=0)){var p=this.g.mul(l);if(!p.isInfinity()){var b=p.getX(),v=b.umod(this.n);if(0!==v.cmpn(0)){var y=l.invm(this.n).mul(v.mul(e.getPrivate()).iadd(t));if(y=y.umod(this.n),0!==y.cmpn(0)){var m=(p.getY().isOdd()?1:0)|(0!==b.cmp(v)?2:0);return n.canonical&&y.cmp(this.nh)>0&&(y=this.n.sub(y),m^=1),new u({r:v,s:y,recoveryParam:m})}}}}}},n.prototype.verify=function(t,e,r,n){t=this._truncateToN(new i(t,16)),r=this.keyFromPublic(r,n),e=new u(e,"hex");var o=e.r,a=e.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var f=a.invm(this.n),s=f.mul(t).umod(this.n),h=f.mul(o).umod(this.n);if(!this.curve._maxwellTrick){var c=this.g.mulAdd(s,r.getPublic(),h);return!c.isInfinity()&&0===c.getX().umod(this.n).cmp(o)}var c=this.g.jmulAdd(s,r.getPublic(),h);return!c.isInfinity()&&c.eqXToP(o)},n.prototype.recoverPubKey=function(t,e,r,n){f((3&r)===r,"The recovery param is more than two bits"),e=new u(e,n);var o=this.n,a=new i(t),s=e.r,h=e.s,c=1&r,d=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&d)throw new Error("Unable to find sencond key candinate");s=d?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var l=e.r.invm(o),p=o.sub(a).mul(l).umod(o),b=h.mul(l).umod(o);return this.g.mulAdd(p,s,b)},n.prototype.getKeyRecoveryParam=function(t,e,r,n){if(e=new u(e,n),null!==e.recoveryParam)return e.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(t,e,i)}catch(t){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},function(t,e,r){"use strict";function n(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}var i=r(30);t.exports=n,n.fromPublic=function(t,e,r){return e instanceof n?e:new n(t,{pub:e,pubEnc:r})},n.fromPrivate=function(t,e,r){return e instanceof n?e:new n(t,{priv:e,privEnc:r})},n.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},n.prototype.getPublic=function(t,e){return"string"==typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},n.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},n.prototype._importPrivate=function(t,e){this.priv=new i(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},n.prototype._importPublic=function(t,e){return t.x||t.y?void(this.pub=this.ec.curve.point(t.x,t.y)):void(this.pub=this.ec.curve.decodePoint(t,e))},n.prototype.derive=function(t){return t.mul(this.priv).getX()},n.prototype.sign=function(t,e,r){return this.ec.sign(t,this,e,r)},n.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},n.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(t,e,r){"use strict";function n(t,e){return t instanceof n?t:void(this._importDER(t,e)||(c(t.r&&t.s,"Signature without r or s"),this.r=new s(t.r,16),this.s=new s(t.s,16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam))}function i(){this.place=0}function o(t,e){var r=t[e.place++];if(!(128&r))return r;for(var n=15&r,i=0,o=0,a=e.place;o<n;o++,a++)i<<=8,i|=t[a];return e.place=a,i}function a(t){for(var e=0,r=t.length-1;!t[e]&&!(128&t[e+1])&&e<r;)e++;return 0===e?t:t.slice(e)}function f(t,e){if(e<128)return void t.push(e);var r=1+(Math.log(e)/Math.LN2>>>3);for(t.push(128|r);--r;)t.push(e>>>(r<<3)&255);t.push(e)}var s=r(30),u=r(22),h=u.utils,c=h.assert;t.exports=n,n.prototype._importDER=function(t,e){t=h.toArray(t,e);var r=new i;if(48!==t[r.place++])return!1;var n=o(t,r);if(n+r.place!==t.length)return!1;if(2!==t[r.place++])return!1;var a=o(t,r),f=t.slice(r.place,a+r.place);if(r.place+=a,2!==t[r.place++])return!1;var u=o(t,r);if(t.length!==u+r.place)return!1;var c=t.slice(r.place,u+r.place);return 0===f[0]&&128&f[1]&&(f=f.slice(1)),0===c[0]&&128&c[1]&&(c=c.slice(1)),this.r=new s(f),this.s=new s(c),this.recoveryParam=null,!0},n.prototype.toDER=function(t){var e=this.r.toArray(),r=this.s.toArray();for(128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r)),e=a(e),r=a(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];f(n,e.length),n=n.concat(e),n.push(2),f(n,r.length);var i=n.concat(r),o=[48];return f(o,i.length),o=o.concat(i),h.encode(o,t)}},function(t,e,r){"use strict";function n(t){if(f("ed25519"===t,"only tested with ed25519 so far"),!(this instanceof n))return new n(t);var t=o.curves[t].curve;this.curve=t,this.g=t.g,this.g.precompute(t.n.bitLength()+1),this.pointClass=t.point().constructor,this.encodingLength=Math.ceil(t.n.bitLength()/8),this.hash=i.sha512}var i=r(50),o=r(22),a=o.utils,f=a.assert,s=a.parseBytes,u=r(554),h=r(555);t.exports=n,n.prototype.sign=function(t,e){t=s(t);var r=this.keyFromSecret(e),n=this.hashInt(r.messagePrefix(),t),i=this.g.mul(n),o=this.encodePoint(i),a=this.hashInt(o,r.pubBytes(),t).mul(r.priv()),f=n.add(a).umod(this.curve.n);return this.makeSignature({R:i,S:f,Rencoded:o})},n.prototype.verify=function(t,e,r){t=s(t),e=this.makeSignature(e);var n=this.keyFromPublic(r),i=this.hashInt(e.Rencoded(),n.pubBytes(),t),o=this.g.mul(e.S()),a=e.R().add(n.pub().mul(i));return a.eq(o)},n.prototype.hashInt=function(){for(var t=this.hash(),e=0;e<arguments.length;e++)t.update(arguments[e]);return a.intFromLE(t.digest()).umod(this.curve.n)},n.prototype.keyFromPublic=function(t){return u.fromPublic(this,t)},n.prototype.keyFromSecret=function(t){return u.fromSecret(this,t)},n.prototype.makeSignature=function(t){return t instanceof h?t:new h(this,t)},n.prototype.encodePoint=function(t){var e=t.getY().toArray("le",this.encodingLength);return e[this.encodingLength-1]|=t.getX().isOdd()?128:0,e},n.prototype.decodePoint=function(t){t=a.parseBytes(t);var e=t.length-1,r=t.slice(0,e).concat(t[e]&-129),n=0!==(128&t[e]),i=a.intFromLE(r);return this.curve.pointFromY(i,n)},n.prototype.encodeInt=function(t){return t.toArray("le",this.encodingLength)},n.prototype.decodeInt=function(t){return a.intFromLE(t)},n.prototype.isPoint=function(t){return t instanceof this.pointClass}},function(t,e,r){"use strict";function n(t,e){this.eddsa=t,this._secret=f(e.secret),t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=f(e.pub)}var i=r(22),o=i.utils,a=o.assert,f=o.parseBytes,s=o.cachedProperty;n.fromPublic=function(t,e){return e instanceof n?e:new n(t,{pub:e})},n.fromSecret=function(t,e){return e instanceof n?e:new n(t,{secret:e})},n.prototype.secret=function(){return this._secret},s(n,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),s(n,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),s(n,"privBytes",function(){var t=this.eddsa,e=this.hash(),r=t.encodingLength-1,n=e.slice(0,t.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n}),s(n,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),s(n,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),s(n,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),n.prototype.sign=function(t){return a(this._secret,"KeyPair can only verify"),this.eddsa.sign(t,this)},n.prototype.verify=function(t,e){return this.eddsa.verify(t,e,this)},n.prototype.getSecret=function(t){return a(this._secret,"KeyPair is public only"),o.encode(this.secret(),t)},n.prototype.getPublic=function(t){return o.encode(this.pubBytes(),t)},t.exports=n},function(t,e,r){"use strict";function n(t,e){this.eddsa=t,"object"!=typeof e&&(e=u(e)),Array.isArray(e)&&(e={R:e.slice(0,t.encodingLength),S:e.slice(t.encodingLength)}),f(e.R&&e.S,"Signature without R or S"),t.isPoint(e.R)&&(this._R=e.R),e.S instanceof i&&(this._S=e.S),this._Rencoded=Array.isArray(e.R)?e.R:e.Rencoded,this._Sencoded=Array.isArray(e.S)?e.S:e.Sencoded}var i=r(30),o=r(22),a=o.utils,f=a.assert,s=a.cachedProperty,u=a.parseBytes;s(n,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),s(n,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),s(n,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),s(n,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),n.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},n.prototype.toHex=function(){return a.encode(this.toBytes(),"hex").toUpperCase()},t.exports=n},function(t,e,r){"use strict";function n(t){if(!(this instanceof n))return new n(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this.reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=a.toArray(t.entropy,t.entropyEnc),r=a.toArray(t.nonce,t.nonceEnc),i=a.toArray(t.pers,t.persEnc);f(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,r,i)}var i=r(50),o=r(22),a=o.utils,f=a.assert;t.exports=n,n.prototype._init=function(t,e,r){var n=t.concat(e).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this.reseed=1,this.reseedInterval=281474976710656},n.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},n.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},n.prototype.reseed=function(t,e,r,n){"string"!=typeof e&&(n=r,r=e,e=null),t=a.toBuffer(t,e),r=a.toBuffer(r,n),f(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(r||[])),this.reseed=1},n.prototype.generate=function(t,e,r,n){if(this.reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof e&&(n=r,r=e,e=null),r&&(r=a.toArray(r,n),this._update(r));for(var i=[];i.length<t;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,t);return this._update(r),this.reseed++,a.encode(o,e)}},function(t,e){t.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
}}},function(t,e,r){"use strict";function n(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if("string"!=typeof t){for(var n=0;n<t.length;n++)r[n]=0|t[n];return r}if(e){if("hex"===e){t=t.replace(/[^a-z0-9]+/gi,""),t.length%2!==0&&(t="0"+t);for(var n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))}}else for(var n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}return r}function i(t){return 1===t.length?"0"+t:t}function o(t){for(var e="",r=0;r<t.length;r++)e+=i(t[r].toString(16));return e}function a(t,e){for(var r=[],n=1<<e+1,i=t.clone();i.cmpn(1)>=0;){var o;if(i.isOdd()){var a=i.andln(n-1);o=a>(n>>1)-1?(n>>1)-a:a,i.isubn(o)}else o=0;r.push(o);for(var f=0!==i.cmpn(0)&&0===i.andln(n-1)?e+1:1,s=1;s<f;s++)r.push(0);i.iushrn(f)}return r}function f(t,e){var r=[[],[]];t=t.clone(),e=e.clone();for(var n=0,i=0;t.cmpn(-n)>0||e.cmpn(-i)>0;){var o=t.andln(3)+n&3,a=e.andln(3)+i&3;3===o&&(o=-1),3===a&&(a=-1);var f;if(0===(1&o))f=0;else{var s=t.andln(7)+n&7;f=3!==s&&5!==s||2!==a?o:-o}r[0].push(f);var u;if(0===(1&a))u=0;else{var s=e.andln(7)+i&7;u=3!==s&&5!==s||2!==o?a:-a}r[1].push(u),2*n===f+1&&(n=1-n),2*i===u+1&&(i=1-i),t.iushrn(1),e.iushrn(1)}return r}function s(t,e,r){var n="_"+e;t.prototype[e]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}}function u(t){return"string"==typeof t?c.toArray(t,"hex"):t}function h(t){return new d(t,"hex","le")}var c=e,d=r(30);c.assert=function(t,e){if(!t)throw new Error(e||"Assertion failed")},c.toArray=n,c.zero2=i,c.toHex=o,c.encode=function(t,e){return"hex"===e?o(t):t},c.getNAF=a,c.getJSF=f,c.cachedProperty=s,c.parseBytes=u,c.intFromLE=h},function(t,e,r){function n(t){this.rand=t}var i;if(t.exports=function(t){return i||(i=new n(null)),i.generate(t)},t.exports.Rand=n,n.prototype.generate=function(t){return this._rand(t)},"object"==typeof window)window.crypto&&window.crypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.crypto.getRandomValues(e),e}:window.msCrypto&&window.msCrypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.msCrypto.getRandomValues(e),e}:n.prototype._rand=function(){throw new Error("Not implemented yet")};else try{var o=r(610);n.prototype._rand=function(t){return o.randomBytes(t)}}catch(t){n.prototype._rand=function(t){for(var e=new Uint8Array(t),r=0;r<e.length;r++)e[r]=this.rand.getByte();return e}}},function(t,e,r){function n(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var i=r(50),o=i.utils,a=o.assert;e.BlockHash=n,n.prototype.update=function(t,e){if(t=o.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var r=t.length%this._delta8;this.pending=t.slice(t.length-r,t.length),0===this.pending.length&&(this.pending=null),t=o.join32(t,0,t.length-r,this.endian);for(var n=0;n<t.length;n+=this._delta32)this._update(t,n,n+this._delta32)}return this},n.prototype.digest=function(t){return this.update(this._pad()),a(null===this.pending),this._digest(t)},n.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,r=e-(t+this.padLength)%e,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(t<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=t>>>24&255,n[i++]=t>>>16&255,n[i++]=t>>>8&255,n[i++]=255&t}else{n[i++]=255&t,n[i++]=t>>>8&255,n[i++]=t>>>16&255,n[i++]=t>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0;for(var o=8;o<this.padLength;o++)n[i++]=0}return n}},function(t,e,r){function n(t,e,r){return this instanceof n?(this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,void this._init(o.toArray(e,r))):new n(t,e,r)}var i=r(50),o=i.utils,a=o.assert;t.exports=n,n.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),a(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(var e=0;e<t.length;e++)t[e]^=54;this.inner=(new this.Hash).update(t);for(var e=0;e<t.length;e++)t[e]^=106;this.outer=(new this.Hash).update(t)},n.prototype.update=function(t,e){return this.inner.update(t,e),this},n.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},function(t,e,r){function n(){return this instanceof n?(l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],void(this.endian="little")):new n}function i(t,e,r,n){return t<=15?e^r^n:t<=31?e&r|~e&n:t<=47?(e|~r)^n:t<=63?e&n|r&~n:e^(r|~n)}function o(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function a(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}var f=r(50),s=f.utils,u=s.rotl32,h=s.sum32,c=s.sum32_3,d=s.sum32_4,l=f.common.BlockHash;s.inherits(n,l),e.ripemd160=n,n.blockSize=512,n.outSize=160,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(t,e){for(var r=this.h[0],n=this.h[1],f=this.h[2],s=this.h[3],l=this.h[4],m=r,g=n,w=f,_=s,M=l,S=0;S<80;S++){var E=h(u(d(r,i(S,n,f,s),t[p[S]+e],o(S)),v[S]),l);r=l,l=s,s=u(f,10),f=n,n=E,E=h(u(d(m,i(79-S,g,w,_),t[b[S]+e],a(S)),y[S]),M),m=M,M=_,_=u(w,10),w=g,g=E}E=c(this.h[1],f,_),this.h[1]=c(this.h[2],s,M),this.h[2]=c(this.h[3],l,m),this.h[3]=c(this.h[4],r,g),this.h[4]=c(this.h[0],n,w),this.h[0]=E},n.prototype._digest=function(t){return"hex"===t?s.toHex32(this.h,"little"):s.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],v=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],y=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(t,e,r){function n(){return this instanceof n?(X.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Y,void(this.W=new Array(64))):new n}function i(){return this instanceof i?(n.call(this),void(this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])):new i}function o(){return this instanceof o?(X.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=W,void(this.W=new Array(160))):new o}function a(){return this instanceof a?(o.call(this),void(this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428])):new a}function f(){return this instanceof f?(X.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],void(this.W=new Array(80))):new f}function s(t,e,r){return t&e^~t&r}function u(t,e,r){return t&e^t&r^e&r}function h(t,e,r){return t^e^r}function c(t){return R(t,2)^R(t,13)^R(t,22)}function d(t){return R(t,6)^R(t,11)^R(t,25)}function l(t){return R(t,7)^R(t,18)^t>>>3}function p(t){return R(t,17)^R(t,19)^t>>>10}function b(t,e,r,n){return 0===t?s(e,r,n):1===t||3===t?h(e,r,n):2===t?u(e,r,n):void 0}function v(t,e,r,n,i,o){var a=t&r^~t&i;return a<0&&(a+=4294967296),a}function y(t,e,r,n,i,o){var a=e&n^~e&o;return a<0&&(a+=4294967296),a}function m(t,e,r,n,i,o){var a=t&r^t&i^r&i;return a<0&&(a+=4294967296),a}function g(t,e,r,n,i,o){var a=e&n^e&o^n&o;return a<0&&(a+=4294967296),a}function w(t,e){var r=N(t,e,28),n=N(e,t,2),i=N(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function _(t,e){var r=L(t,e,28),n=L(e,t,2),i=L(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function M(t,e){var r=N(t,e,14),n=N(t,e,18),i=N(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function S(t,e){var r=L(t,e,14),n=L(t,e,18),i=L(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function E(t,e){var r=N(t,e,1),n=N(t,e,8),i=U(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function A(t,e){var r=L(t,e,1),n=L(t,e,8),i=z(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function k(t,e){var r=N(t,e,19),n=N(e,t,29),i=U(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}function x(t,e){var r=L(t,e,19),n=L(e,t,29),i=z(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}var I=r(50),B=I.utils,O=B.assert,R=B.rotr32,P=B.rotl32,T=B.sum32,j=B.sum32_4,C=B.sum32_5,N=B.rotr64_hi,L=B.rotr64_lo,U=B.shr64_hi,z=B.shr64_lo,D=B.sum64,q=B.sum64_hi,F=B.sum64_lo,K=B.sum64_4_hi,G=B.sum64_4_lo,V=B.sum64_5_hi,H=B.sum64_5_lo,X=I.common.BlockHash,Y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],W=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],Z=[1518500249,1859775393,2400959708,3395469782];B.inherits(n,X),e.sha256=n,n.blockSize=512,n.outSize=256,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n];for(;n<r.length;n++)r[n]=j(p(r[n-2]),r[n-7],l(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],a=this.h[2],f=this.h[3],h=this.h[4],b=this.h[5],v=this.h[6],y=this.h[7];O(this.k.length===r.length);for(var n=0;n<r.length;n++){var m=C(y,d(h),s(h,b,v),this.k[n],r[n]),g=T(c(i),u(i,o,a));y=v,v=b,b=h,h=T(f,m),f=a,a=o,o=i,i=T(m,g)}this.h[0]=T(this.h[0],i),this.h[1]=T(this.h[1],o),this.h[2]=T(this.h[2],a),this.h[3]=T(this.h[3],f),this.h[4]=T(this.h[4],h),this.h[5]=T(this.h[5],b),this.h[6]=T(this.h[6],v),this.h[7]=T(this.h[7],y)},n.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")},B.inherits(i,n),e.sha224=i,i.blockSize=512,i.outSize=224,i.hmacStrength=192,i.padLength=64,i.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h.slice(0,7),"big"):B.split32(this.h.slice(0,7),"big")},B.inherits(o,X),e.sha512=o,o.blockSize=1024,o.outSize=512,o.hmacStrength=192,o.padLength=128,o.prototype._prepareBlock=function(t,e){for(var r=this.W,n=0;n<32;n++)r[n]=t[e+n];for(;n<r.length;n+=2){var i=k(r[n-4],r[n-3]),o=x(r[n-4],r[n-3]),a=r[n-14],f=r[n-13],s=E(r[n-30],r[n-29]),u=A(r[n-30],r[n-29]),h=r[n-32],c=r[n-31];r[n]=K(i,o,a,f,s,u,h,c),r[n+1]=G(i,o,a,f,s,u,h,c)}},o.prototype._update=function(t,e){this._prepareBlock(t,e);var r=this.W,n=this.h[0],i=this.h[1],o=this.h[2],a=this.h[3],f=this.h[4],s=this.h[5],u=this.h[6],h=this.h[7],c=this.h[8],d=this.h[9],l=this.h[10],p=this.h[11],b=this.h[12],E=this.h[13],A=this.h[14],k=this.h[15];O(this.k.length===r.length);for(var x=0;x<r.length;x+=2){var I=A,B=k,R=M(c,d),P=S(c,d),T=v(c,d,l,p,b,E),j=y(c,d,l,p,b,E),C=this.k[x],N=this.k[x+1],L=r[x],U=r[x+1],z=V(I,B,R,P,T,j,C,N,L,U),K=H(I,B,R,P,T,j,C,N,L,U),I=w(n,i),B=_(n,i),R=m(n,i,o,a,f,s),P=g(n,i,o,a,f,s),G=q(I,B,R,P),X=F(I,B,R,P);A=b,k=E,b=l,E=p,l=c,p=d,c=q(u,h,z,K),d=F(h,h,z,K),u=f,h=s,f=o,s=a,o=n,a=i,n=q(z,K,G,X),i=F(z,K,G,X)}D(this.h,0,n,i),D(this.h,2,o,a),D(this.h,4,f,s),D(this.h,6,u,h),D(this.h,8,c,d),D(this.h,10,l,p),D(this.h,12,b,E),D(this.h,14,A,k)},o.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")},B.inherits(a,o),e.sha384=a,a.blockSize=1024,a.outSize=384,a.hmacStrength=192,a.padLength=128,a.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h.slice(0,12),"big"):B.split32(this.h.slice(0,12),"big")},B.inherits(f,X),e.sha1=f,f.blockSize=512,f.outSize=160,f.hmacStrength=80,f.padLength=64,f.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n];for(;n<r.length;n++)r[n]=P(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);for(var i=this.h[0],o=this.h[1],a=this.h[2],f=this.h[3],s=this.h[4],n=0;n<r.length;n++){var u=~~(n/20),h=C(P(i,5),b(u,o,a,f),s,r[n],Z[u]);s=f,f=a,a=P(o,30),o=i,i=h}this.h[0]=T(this.h[0],i),this.h[1]=T(this.h[1],o),this.h[2]=T(this.h[2],a),this.h[3]=T(this.h[3],f),this.h[4]=T(this.h[4],s)},f.prototype._digest=function(t){return"hex"===t?B.toHex32(this.h,"big"):B.split32(this.h,"big")}},function(t,e,r){function n(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if("string"==typeof t)if(e){if("hex"===e){t=t.replace(/[^a-z0-9]+/gi,""),t.length%2!==0&&(t="0"+t);for(var n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))}}else for(var n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}else for(var n=0;n<t.length;n++)r[n]=0|t[n];return r}function i(t){for(var e="",r=0;r<t.length;r++)e+=f(t[r].toString(16));return e}function o(t){var e=t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24;return e>>>0}function a(t,e){for(var r="",n=0;n<t.length;n++){var i=t[n];"little"===e&&(i=o(i)),r+=s(i.toString(16))}return r}function f(t){return 1===t.length?"0"+t:t}function s(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}function u(t,e,r,n){var i=r-e;y(i%4===0);for(var o=new Array(i/4),a=0,f=e;a<o.length;a++,f+=4){var s;s="big"===n?t[f]<<24|t[f+1]<<16|t[f+2]<<8|t[f+3]:t[f+3]<<24|t[f+2]<<16|t[f+1]<<8|t[f],o[a]=s>>>0}return o}function h(t,e){for(var r=new Array(4*t.length),n=0,i=0;n<t.length;n++,i+=4){var o=t[n];"big"===e?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r}function c(t,e){return t>>>e|t<<32-e}function d(t,e){return t<<e|t>>>32-e}function l(t,e){return t+e>>>0}function p(t,e,r){return t+e+r>>>0}function b(t,e,r,n){return t+e+r+n>>>0}function v(t,e,r,n,i){return t+e+r+n+i>>>0}function y(t,e){if(!t)throw new Error(e||"Assertion failed")}function m(t,e,r,n){var i=t[e],o=t[e+1],a=n+o>>>0,f=(a<n?1:0)+r+i;t[e]=f>>>0,t[e+1]=a}function g(t,e,r,n){var i=e+n>>>0,o=(i<e?1:0)+t+r;return o>>>0}function w(t,e,r,n){var i=e+n;return i>>>0}function _(t,e,r,n,i,o,a,f){var s=0,u=e;u=u+n>>>0,s+=u<e?1:0,u=u+o>>>0,s+=u<o?1:0,u=u+f>>>0,s+=u<f?1:0;var h=t+r+i+a+s;return h>>>0}function M(t,e,r,n,i,o,a,f){var s=e+n+o+f;return s>>>0}function S(t,e,r,n,i,o,a,f,s,u){var h=0,c=e;c=c+n>>>0,h+=c<e?1:0,c=c+o>>>0,h+=c<o?1:0,c=c+f>>>0,h+=c<f?1:0,c=c+u>>>0,h+=c<u?1:0;var d=t+r+i+a+s+h;return d>>>0}function E(t,e,r,n,i,o,a,f,s,u){var h=e+n+o+f+u;return h>>>0}function A(t,e,r){var n=e<<32-r|t>>>r;return n>>>0}function k(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}function x(t,e,r){return t>>>r}function I(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}var B=e,O=r(2);B.toArray=n,B.toHex=i,B.htonl=o,B.toHex32=a,B.zero2=f,B.zero8=s,B.join32=u,B.split32=h,B.rotr32=c,B.rotl32=d,B.sum32=l,B.sum32_3=p,B.sum32_4=b,B.sum32_5=v,B.assert=y,B.inherits=O,e.sum64=m,e.sum64_hi=g,e.sum64_lo=w,e.sum64_4_hi=_,e.sum64_4_lo=M,e.sum64_5_hi=S,e.sum64_5_lo=E,e.rotr64_hi=A,e.rotr64_lo=k,e.shr64_hi=x,e.shr64_lo=I},function(t,e,r){"use strict";(function(t){function r(e,r){if(e.length%o!==0){var n=e.length+(o-e.length%o);e=t.concat([e,a],n)}for(var i=[],f=r?e.readInt32BE:e.readInt32LE,s=0;s<e.length;s+=o)i.push(f.call(e,s));return i}function n(e,r,n){for(var i=new t(r),o=n?i.writeInt32BE:i.writeInt32LE,a=0;a<e.length;a++)o.call(i,e[a],4*a,!0);return i}function i(e,i,o,a){t.isBuffer(e)||(e=new t(e));var s=i(r(e,a),e.length*f);return n(s,o,a)}var o=4,a=new t(o);a.fill(0);var f=8;e.hash=i}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._decoder=null,this._encoding=null}var i=r(31).Transform,o=r(2),a=r(52).StringDecoder;t.exports=n,o(n,i),n.prototype.update=function(t,r,n){"string"==typeof t&&(t=new e(t,r));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},n.prototype._flush=function(t){var e;try{this.push(this._final())}catch(t){e=t}finally{t(e)}},n.prototype._finalOrDigest=function(t){var r=this._final()||new e("");return t&&(r=this._toString(r,t,!0)),r},n.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new a(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function r(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e}function n(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e}function i(t,e,r){for(var n=0;n<16;n++){var i=r+n,c=e[i];e[i]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var m,g,w,_,M,S,E,A,k,x;S=m=t[0],E=g=t[1],A=w=t[2],k=_=t[3],x=M=t[4];var I;for(n=0;n<80;n+=1)I=m+e[r+d[n]]|0,I+=n<16?o(g,w,_)+v[0]:n<32?a(g,w,_)+v[1]:n<48?f(g,w,_)+v[2]:n<64?s(g,w,_)+v[3]:u(g,w,_)+v[4],I|=0,I=h(I,p[n]),I=I+M|0,m=M,M=_,_=h(w,10),w=g,g=I,I=S+e[r+l[n]]|0,I+=n<16?u(E,A,k)+y[0]:n<32?s(E,A,k)+y[1]:n<48?f(E,A,k)+y[2]:n<64?a(E,A,k)+y[3]:o(E,A,k)+y[4],I|=0,I=h(I,b[n]),I=I+x|0,S=x,x=k,k=h(A,10),A=E,E=I;I=t[1]+w+k|0,t[1]=t[2]+_+x|0,t[2]=t[3]+M+S|0,t[3]=t[4]+m+E|0,t[4]=t[0]+g+A|0,t[0]=I}function o(t,e,r){return t^e^r}function a(t,e,r){return t&e|~t&r}function f(t,e,r){return(t|~e)^r}function s(t,e,r){return t&r|e&~r}function u(t,e,r){return t^(e|~r)}function h(t,e){return t<<e|t>>>32-e}function c(t){var o=[1732584193,4023233417,2562383102,271733878,3285377520];"string"==typeof t&&(t=new e(t,"utf8"));var a=r(t),f=8*t.length,s=8*t.length;a[f>>>5]|=128<<24-f%32,a[(f+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8);for(var u=0;u<a.length;u+=16)i(o,a,u);for(u=0;u<5;u++){var h=o[u];o[u]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}var c=n(o);return new e(c)}/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var d=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],l=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],p=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],b=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],v=[0,1518500249,1859775393,2400959708,2840853838],y=[1352829926,1548603684,1836072691,2053994217,0];t.exports=c}).call(e,r(1).Buffer)},function(t,e,r){var e=t.exports=function(t){t=t.toLowerCase();var r=e[t];if(!r)throw new Error(t+" is not supported (we accept pull requests)");return new r};e.sha=r(569),e.sha1=r(570),e.sha224=r(571),e.sha256=r(227),e.sha384=r(572),e.sha512=r(228)},function(t,e,r){(function(e){function n(){this.init(),this._w=h,s.call(this,64,56)}function i(t){return t<<5|t>>>27}function o(t){return t<<30|t>>>2}function a(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}var f=r(2),s=r(60),u=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);f(n,s),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(t){for(var e=this._w,r=0|this._a,n=0|this._b,f=0|this._c,s=0|this._d,h=0|this._e,c=0;c<16;++c)e[c]=t.readInt32BE(4*c);for(;c<80;++c)e[c]=e[c-3]^e[c-8]^e[c-14]^e[c-16];for(var d=0;d<80;++d){var l=~~(d/20),p=i(r)+a(l,n,f,s)+h+e[d]+u[l]|0;h=s,s=f,f=o(n),n=r,r=p}this._a=r+this._a|0,this._b=n+this._b|0,this._c=f+this._c|0,this._d=s+this._d|0,this._e=h+this._e|0},n.prototype._hash=function(){var t=new e(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(){this.init(),this._w=c,u.call(this,64,56)}function i(t){return t<<1|t>>>31}function o(t){return t<<5|t>>>27}function a(t){return t<<30|t>>>2}function f(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}var s=r(2),u=r(60),h=[1518500249,1859775393,-1894007588,-899497514],c=new Array(80);s(n,u),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(t){for(var e=this._w,r=0|this._a,n=0|this._b,s=0|this._c,u=0|this._d,c=0|this._e,d=0;d<16;++d)e[d]=t.readInt32BE(4*d);for(;d<80;++d)e[d]=i(e[d-3]^e[d-8]^e[d-14]^e[d-16]);for(var l=0;l<80;++l){var p=~~(l/20),b=o(r)+f(p,n,s,u)+c+e[l]+h[p]|0;c=u,u=s,s=a(n),n=r,r=b}this._a=r+this._a|0,this._b=n+this._b|0,this._c=s+this._c|0,this._d=u+this._d|0,this._e=c+this._e|0},n.prototype._hash=function(){var t=new e(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(){this.init(),this._w=f,a.call(this,64,56)}var i=r(2),o=r(227),a=r(60),f=new Array(64);i(n,o),n.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},n.prototype._hash=function(){var t=new e(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(){this.init(),this._w=f,a.call(this,128,112)}var i=r(2),o=r(228),a=r(60),f=new Array(160);i(n,o),n.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},n.prototype._hash=function(){function t(t,e,n){r.writeInt32BE(t,n),r.writeInt32BE(e,n+4)}var r=new e(48);return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),r},t.exports=n}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(e){var r=new t(a[e].prime,"hex"),n=new t(a[e].gen,"hex");return new f(r,n)}function i(e,r,n,a){return t.isBuffer(r)||void 0===s[r]?i(e,"binary",r,n):(r=r||"binary",a=a||"binary",n=n||new t([2]),t.isBuffer(n)||(n=new t(n,a)),"number"==typeof e?new f(o(e,n),n,!0):(t.isBuffer(e)||(e=new t(e,r)),new f(e,n,!0)))}var o=r(229),a=r(468),f=r(574),s={binary:!0,hex:!0,base64:!0};e.DiffieHellmanGroup=e.createDiffieHellmanGroup=e.getDiffieHellman=n,e.createDiffieHellman=e.DiffieHellman=i}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r){return r=r||"utf8",e.isBuffer(t)||(t=new e(t,r)),this._pub=new s(t),this}function i(t,r){return r=r||"utf8",e.isBuffer(t)||(t=new e(t,r)),this._priv=new s(t),this}function o(t,e){var r=e.toString("hex"),n=[r,t.toString(16)].join("_");if(n in m)return m[n];var i=0;if(t.isEven()||!v.simpleSieve||!v.fermatTest(t)||!h.test(t))return i+=1,i+="02"===r||"05"===r?8:4,m[n]=i,i;h.test(t.shrn(1))||(i+=2);var o;switch(r){case"02":t.mod(c).cmp(d)&&(i+=8);break;case"05":o=t.mod(l),o.cmp(p)&&o.cmp(b)&&(i+=8);break;default:i+=4}return m[n]=i,i}function a(t,e,r){this.setGenerator(e),this.__prime=new s(t),this._prime=s.mont(this.__prime),this._primeLen=t.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,r?(this.setPublicKey=n,this.setPrivateKey=i):this._primeCode=8}function f(t,r){var n=new e(t.toArray());return r?n.toString(r):n}var s=r(150),u=r(230),h=new u,c=new s(24),d=new s(11),l=new s(10),p=new s(3),b=new s(7),v=r(229),y=r(61);t.exports=a;var m={};Object.defineProperty(a.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=o(this.__prime,this.__gen)),this._primeCode}}),a.prototype.generateKeys=function(){return this._priv||(this._priv=new s(y(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},a.prototype.computeSecret=function(t){t=new s(t),t=t.toRed(this._prime);var r=t.redPow(this._priv).fromRed(),n=new e(r.toArray()),i=this.getPrime();if(n.length<i.length){var o=new e(i.length-n.length);o.fill(0),n=e.concat([o,n])}return n},a.prototype.getPublicKey=function(t){return f(this._pub,t)},a.prototype.getPrivateKey=function(t){return f(this._priv,t)},a.prototype.getPrime=function(t){return f(this.__prime,t)},a.prototype.getGenerator=function(t){return f(this._gen,t)},a.prototype.setGenerator=function(t,r){return r=r||"utf8",e.isBuffer(t)||(t=new e(t,r)),this.__gen=t,this._gen=new s(t),this}}).call(e,r(1).Buffer)},function(t,e,r){function n(t){this.rand=t}var i;if(t.exports=function(t){return i||(i=new n(null)),i.generate(t)},t.exports.Rand=n,n.prototype.generate=function(t){return this._rand(t)},"object"==typeof window)window.crypto&&window.crypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.crypto.getRandomValues(e),e}:window.msCrypto&&window.msCrypto.getRandomValues?n.prototype._rand=function(t){var e=new Uint8Array(t);return window.msCrypto.getRandomValues(e),e}:n.prototype._rand=function(){throw new Error("Not implemented yet")};else try{var o=r(611);n.prototype._rand=function(t){return o.randomBytes(t)}}catch(t){n.prototype._rand=function(t){for(var e=new Uint8Array(t),r=0;r<e.length;r++)e[r]=this.rand.getByte();return e}}},function(t,e){var r=Math.pow(2,30)-1;t.exports=function(t,e){if("number"!=typeof t)throw new TypeError("Iterations not a number");if(t<0)throw new TypeError("Bad iterations");if("number"!=typeof e)throw new TypeError("Key length not a number");if(e<0||e>r||e!==e)throw new TypeError("Bad key length")}},function(t,e,r){e.publicEncrypt=r(593),e.privateDecrypt=r(592),e.privateEncrypt=function(t,r){return e.publicEncrypt(t,r,!0)},e.publicDecrypt=function(t,r){return e.privateDecrypt(t,r,!0)}},function(t,e,r){var n=r(106),i=n.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())});e.RSAPrivateKey=i;var o=n.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())});e.RSAPublicKey=o;var a=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(f),this.key("subjectPublicKey").bitstr())});e.PublicKey=a;var f=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),s=n.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(f),this.key("subjectPrivateKey").octstr())});e.PrivateKey=s;var u=n.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())});e.EncryptedPrivateKey=u;var h=n.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())});e.DSAPrivateKey=h,e.DSAparam=n.define("DSAparam",function(){this.int()});var c=n.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(d),this.key("publicKey").optional().explicit(1).bitstr())});e.ECPrivateKey=c;var d=n.define("ECParameters",function(){this.choice({namedCurve:this.objid()})});e.signature=n.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(t,e,r){(function(e){var n=/Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m,i=/^-----BEGIN (.*) KEY-----\r?\n/m,o=/^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m,a=r(153),f=r(239);t.exports=function(t,r){var s,u=t.toString(),h=u.match(n);if(h){var c="aes"+h[1],d=new e(h[2],"hex"),l=new e(h[3].replace(/\r?\n/g,""),"base64"),p=a(r,d.slice(0,8),parseInt(h[1],10)).key,b=[],v=f.createDecipheriv(c,p,d);b.push(v.update(l)),b.push(v.final()),s=e.concat(b)}else{var y=u.match(o);s=new e(y[2].replace(/\r?\n/g,""),"base64")}var m=u.match(i)[1]+" KEY";return{tag:m,data:s}}}).call(e,r(1).Buffer)},function(t,e,r){function n(t,e){this.name=t,this.body=e,this.decoders={},this.encoders={}}var i=r(106),o=r(2),a=e;a.define=function(t,e){return new n(t,e)},n.prototype._createNamed=function(t){var e;try{e=r(251).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(t){e=function(t){this._initNamed(t)}}return o(e,t),e.prototype._initNamed=function(e){t.call(this,e)},new e(this)},n.prototype._getDecoder=function(t){return t=t||"der",this.decoders.hasOwnProperty(t)||(this.decoders[t]=this._createNamed(i.decoders[t])),this.decoders[t]},n.prototype.decode=function(t,e,r){return this._getDecoder(e).decode(t,r)},n.prototype._getEncoder=function(t){return t=t||"der",this.encoders.hasOwnProperty(t)||(this.encoders[t]=this._createNamed(i.encoders[t])),this.encoders[t]},n.prototype.encode=function(t,e,r){return this._getEncoder(e).encode(t,r)}},function(t,e,r){function n(t,e){var r={};this._baseState=r,r.enc=t,r.parent=e||null,r.children=null,r.tag=null,r.args=null,r.reverseArgs=null,r.choice=null,r.optional=!1,r.any=!1,r.obj=!1,r.use=null,r.useDecoder=null,r.key=null,r.default=null,r.explicit=null,r.implicit=null,r.contains=null,r.parent||(r.children=[],this._wrap())}var i=r(71).Reporter,o=r(71).EncoderBuffer,a=r(71).DecoderBuffer,f=r(588),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],u=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s),h=["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"];t.exports=n;var c=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];n.prototype.clone=function(){var t=this._baseState,e={};c.forEach(function(r){e[r]=t[r]});var r=new this.constructor(e.parent);return r._baseState=e,r},n.prototype._wrap=function(){var t=this._baseState;u.forEach(function(e){this[e]=function(){var r=new this.constructor(this);return t.children.push(r),r[e].apply(r,arguments)}},this)},n.prototype._init=function(t){var e=this._baseState;f(null===e.parent),t.call(this),e.children=e.children.filter(function(t){return t._baseState.parent===this},this),f.equal(e.children.length,1,"Root node can have only one child")},n.prototype._useArgs=function(t){var e=this._baseState,r=t.filter(function(t){return t instanceof this.constructor},this);t=t.filter(function(t){return!(t instanceof this.constructor)},this),0!==r.length&&(f(null===e.children),e.children=r,r.forEach(function(t){t._baseState.parent=this},this)),0!==t.length&&(f(null===e.args),e.args=t,e.reverseArgs=t.map(function(t){if("object"!=typeof t||t.constructor!==Object)return t;var e={};return Object.keys(t).forEach(function(r){r==(0|r)&&(r|=0);var n=t[r];e[n]=r}),e}))},h.forEach(function(t){n.prototype[t]=function(){var e=this._baseState;throw new Error(t+" not implemented for encoding: "+e.enc)}}),s.forEach(function(t){n.prototype[t]=function(){var e=this._baseState,r=Array.prototype.slice.call(arguments);return f(null===e.tag),e.tag=t,this._useArgs(r),this}}),n.prototype.use=function(t){var e=this._baseState;return f(null===e.use),e.use=t,this},n.prototype.optional=function(){var t=this._baseState;return t.optional=!0,this},n.prototype.def=function(t){var e=this._baseState;return f(null===e.default),e.default=t,e.optional=!0,this},n.prototype.explicit=function(t){var e=this._baseState;return f(null===e.explicit&&null===e.implicit),e.explicit=t,this},n.prototype.implicit=function(t){var e=this._baseState;return f(null===e.explicit&&null===e.implicit),e.implicit=t,this},n.prototype.obj=function(){var t=this._baseState,e=Array.prototype.slice.call(arguments);return t.obj=!0,0!==e.length&&this._useArgs(e),this},n.prototype.key=function(t){var e=this._baseState;return f(null===e.key),e.key=t,this},n.prototype.any=function(){var t=this._baseState;return t.any=!0,this},n.prototype.choice=function(t){var e=this._baseState;return f(null===e.choice),e.choice=t,this._useArgs(Object.keys(t).map(function(e){return t[e]})),this},n.prototype.contains=function(t){var e=this._baseState;return f(null===e.use),e.contains=t,this},n.prototype._decode=function(t,e){var r=this._baseState;if(null===r.parent)return t.wrapResult(r.children[0]._decode(t,e));var n=r.default,i=!0,o=null;if(null!==r.key&&(o=t.enterKey(r.key)),r.optional){var f=null;if(null!==r.explicit?f=r.explicit:null!==r.implicit?f=r.implicit:null!==r.tag&&(f=r.tag),null!==f||r.any){if(i=this._peekTag(t,f,r.any),t.isError(i))return i}else{var s=t.save();try{null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e),i=!0}catch(t){i=!1}t.restore(s)}}var u;if(r.obj&&i&&(u=t.enterObject()),i){if(null!==r.explicit){var h=this._decodeTag(t,r.explicit);if(t.isError(h))return h;t=h}var c=t.offset;if(null===r.use&&null===r.choice){if(r.any)var s=t.save();var d=this._decodeTag(t,null!==r.implicit?r.implicit:r.tag,r.any);if(t.isError(d))return d;r.any?n=t.raw(s):t=d}if(e&&e.track&&null!==r.tag&&e.track(t.path(),c,t.length,"tagged"),e&&e.track&&null!==r.tag&&e.track(t.path(),t.offset,t.length,"content"),n=r.any?n:null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e),t.isError(n))return n;if(r.any||null!==r.choice||null===r.children||r.children.forEach(function(r){r._decode(t,e)}),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){var l=new a(n);n=this._getUse(r.contains,t._reporterState.obj)._decode(l,e)}}return r.obj&&i&&(n=t.leaveObject(u)),null===r.key||null===n&&i!==!0?null!==o&&t.exitKey(o):t.leaveKey(o,r.key,n),n},n.prototype._decodeGeneric=function(t,e,r){var n=this._baseState;return"seq"===t||"set"===t?null:"seqof"===t||"setof"===t?this._decodeList(e,t,n.args[0],r):/str$/.test(t)?this._decodeStr(e,t,r):"objid"===t&&n.args?this._decodeObjid(e,n.args[0],n.args[1],r):"objid"===t?this._decodeObjid(e,null,null,r):"gentime"===t||"utctime"===t?this._decodeTime(e,t,r):"null_"===t?this._decodeNull(e,r):"bool"===t?this._decodeBool(e,r):"int"===t||"enum"===t?this._decodeInt(e,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,e._reporterState.obj)._decode(e,r):e.error("unknown tag: "+t)},n.prototype._getUse=function(t,e){var r=this._baseState;return r.useDecoder=this._use(t,e),f(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},n.prototype._decodeChoice=function(t,e){var r=this._baseState,n=null,i=!1;return Object.keys(r.choice).some(function(o){var a=t.save(),f=r.choice[o];try{var s=f._decode(t,e);if(t.isError(s))return!1;n={type:o,value:s},i=!0}catch(e){return t.restore(a),!1}return!0},this),i?n:t.error("Choice not matched")},n.prototype._createEncoderBuffer=function(t){return new o(t,this.reporter)},n.prototype._encode=function(t,e,r){var n=this._baseState;if(null===n.default||n.default!==t){var i=this._encodeValue(t,e,r);if(void 0!==i&&!this._skipDefault(i,e,r))return i}},n.prototype._encodeValue=function(t,e,r){var n=this._baseState;if(null===n.parent)return n.children[0]._encode(t,e||new i);var o=null;if(this.reporter=e,n.optional&&void 0===t){if(null===n.default)return;t=n.default}var a=null,f=!1;if(n.any)o=this._createEncoderBuffer(t);else if(n.choice)o=this._encodeChoice(t,e);else if(n.contains)a=this._getUse(n.contains,r)._encode(t,e),f=!0;else if(n.children)a=n.children.map(function(r){if("null_"===r._baseState.tag)return r._encode(null,e,t);if(null===r._baseState.key)return e.error("Child should have a key");var n=e.enterKey(r._baseState.key);if("object"!=typeof t)return e.error("Child expected, but input is not object");var i=r._encode(t[r._baseState.key],e,t);return e.leaveKey(n),i},this).filter(function(t){return t}),a=this._createEncoderBuffer(a);else if("seqof"===n.tag||"setof"===n.tag){if(!n.args||1!==n.args.length)return e.error("Too many args for : "+n.tag);if(!Array.isArray(t))return e.error("seqof/setof, but data is not Array");var s=this.clone();s._baseState.implicit=null,a=this._createEncoderBuffer(t.map(function(r){var n=this._baseState;return this._getUse(n.args[0],t)._encode(r,e)},s))}else null!==n.use?o=this._getUse(n.use,r)._encode(t,e):(a=this._encodePrimitive(n.tag,t),f=!0);var o;if(!n.any&&null===n.choice){var u=null!==n.implicit?n.implicit:n.tag,h=null===n.implicit?"universal":"context";null===u?null===n.use&&e.error("Tag could be ommited only for .use()"):null===n.use&&(o=this._encodeComposite(u,f,h,a))}return null!==n.explicit&&(o=this._encodeComposite(n.explicit,!1,"context",o)),o},n.prototype._encodeChoice=function(t,e){var r=this._baseState,n=r.choice[t.type];return n||f(!1,t.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(t.value,e)},n.prototype._encodePrimitive=function(t,e){var r=this._baseState;if(/str$/.test(t))return this._encodeStr(e,t);if("objid"===t&&r.args)return this._encodeObjid(e,r.reverseArgs[0],r.args[1]);if("objid"===t)return this._encodeObjid(e,null,null);if("gentime"===t||"utctime"===t)return this._encodeTime(e,t);if("null_"===t)return this._encodeNull();if("int"===t||"enum"===t)return this._encodeInt(e,r.args&&r.reverseArgs[0]);if("bool"===t)return this._encodeBool(e);throw new Error("Unsupported tag: "+t)},n.prototype._isNumstr=function(t){return/^[0-9 ]*$/.test(t)},n.prototype._isPrintstr=function(t){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)}},function(t,e,r){function n(t){this._reporterState={obj:null,path:[],options:t||{},errors:[]}}function i(t,e){this.path=t,this.rethrow(e)}var o=r(2);e.Reporter=n,n.prototype.isError=function(t){return t instanceof i},n.prototype.save=function(){var t=this._reporterState;return{obj:t.obj,pathLen:t.path.length}},n.prototype.restore=function(t){var e=this._reporterState;e.obj=t.obj,e.path=e.path.slice(0,t.pathLen)},n.prototype.enterKey=function(t){return this._reporterState.path.push(t)},n.prototype.exitKey=function(t){var e=this._reporterState;e.path=e.path.slice(0,t-1)},n.prototype.leaveKey=function(t,e,r){var n=this._reporterState;this.exitKey(t),null!==n.obj&&(n.obj[e]=r)},n.prototype.path=function(){return this._reporterState.path.join("/")},n.prototype.enterObject=function(){var t=this._reporterState,e=t.obj;return t.obj={},e},n.prototype.leaveObject=function(t){var e=this._reporterState,r=e.obj;return e.obj=t,r},n.prototype.error=function(t){var e,r=this._reporterState,n=t instanceof i;if(e=n?t:new i(r.path.map(function(t){return"["+JSON.stringify(t)+"]"}).join(""),t.message||t,t.stack),!r.options.partial)throw e;return n||r.errors.push(e),e},n.prototype.wrapResult=function(t){var e=this._reporterState;return e.options.partial?{result:this.isError(t)?null:t,errors:e.errors}:t},o(i,Error),i.prototype.rethrow=function(t){if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,i),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},function(t,e,r){var n=r(235);e.tagClass={0:"universal",1:"application",2:"context",3:"private"},e.tagClassByName=n._reverse(e.tagClass),e.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},e.tagByName=n._reverse(e.tag)},function(t,e,r){var n=e;n.der=r(236),n.pem=r(585)},function(t,e,r){function n(t){a.call(this,t),this.enc="pem"}var i=r(2),o=r(1).Buffer,a=r(236);i(n,a),t.exports=n,n.prototype.decode=function(t,e){for(var r=t.toString().split(/[\r\n]+/g),n=e.label.toUpperCase(),i=/^-----(BEGIN|END) ([^-]+)-----$/,f=-1,s=-1,u=0;u<r.length;u++){var h=r[u].match(i);if(null!==h&&h[2]===n){if(f!==-1){if("END"!==h[1])break;s=u;break}if("BEGIN"!==h[1])break;f=u}}if(f===-1||s===-1)throw new Error("PEM section not found for: "+n);var c=r.slice(f+1,s).join("");c.replace(/[^a-z0-9\+\/=]+/gi,"");var d=new o(c,"base64");return a.prototype.decode.call(this,d,e)}},function(t,e,r){var n=e;n.der=r(237),n.pem=r(587)},function(t,e,r){function n(t){o.call(this,t),this.enc="pem"}var i=r(2),o=r(237);i(n,o),t.exports=n,n.prototype.encode=function(t,e){for(var r=o.prototype.encode.call(this,t),n=r.toString("base64"),i=["-----BEGIN "+e.label+"-----"],a=0;a<n.length;a+=64)i.push(n.slice(a,a+64));return i.push("-----END "+e.label+"-----"),i.join("\n")}},function(t,e){function r(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=r,r.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)}},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(u.call(this),this._cache=new i,this._last=void 0,this._cipher=new s.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(t){for(var e=t[15],r=-1;++r<e;)if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data");if(16!==e)return t.slice(0,16-e)}function a(e,r,i){var o=c[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(b[o.mode],r,i,!0):"auth"===o.type?new l(b[o.mode],r,i,!0):new n(b[o.mode],r,i)}function f(t,e){var r=c[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=p(e,!1,r.key,r.iv);return a(t,n.key,n.iv)}var s=r(107),u=r(109),h=r(2),c=r(152),d=r(246),l=r(238),p=r(153);h(n,u),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get(this._autopadding);)n=this._mode.decrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return o(this._mode.decrypt(this,t));if(t)throw new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(t){var e;if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e;return null},i.prototype.flush=function(){if(this.cache.length)return this.cache};var b={ECB:r(244),CBC:r(240),CFB:r(241),CFB8:r(243),CFB1:r(242),OFB:r(245),CTR:r(108),GCM:r(108)};e.createDecipher=f,e.createDecipheriv=a}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function n(e,r,o){return this instanceof n?(s.call(this),this._cache=new i,this._cipher=new f.AES(r),this._prev=new t(o.length),o.copy(this._prev),this._mode=e,void(this._autopadding=!0)):new n(e,r,o)}function i(){return this instanceof i?void(this.cache=new t("")):new i}function o(e,r,i){var o=h[e.toLowerCase()];if(!o)throw new TypeError("invalid suite type");if("string"==typeof i&&(i=new t(i)),"string"==typeof r&&(r=new t(r)),r.length!==o.key/8)throw new TypeError("invalid key length "+r.length);if(i.length!==o.iv)throw new TypeError("invalid iv length "+i.length);return"stream"===o.type?new d(p[o.mode],r,i):"auth"===o.type?new l(p[o.mode],r,i):new n(p[o.mode],r,i)}function a(t,e){var r=h[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=c(e,!1,r.key,r.iv);return o(t,n.key,n.iv)}var f=r(107),s=r(109),u=r(2),h=r(152),c=r(153),d=r(246),l=r(238);u(n,s),n.prototype._update=function(e){this._cache.add(e);for(var r,n,i=[];r=this._cache.get();)n=this._mode.encrypt(this,r),i.push(n);return t.concat(i)},n.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t;if("10101010101010101010101010101010"!==t.toString("hex"))throw this._cipher.scrub(),new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},i.prototype.add=function(e){this.cache=t.concat([this.cache,e])},i.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16);return this.cache=this.cache.slice(16),t}return null},i.prototype.flush=function(){for(var e=16-this.cache.length,r=new t(e),n=-1;++n<e;)r.writeUInt8(e,n);var i=t.concat([this.cache,r]);return i};var p={ECB:r(244),CBC:r(240),CFB:r(241),CFB8:r(243),CFB1:r(242),OFB:r(245),CTR:r(108),GCM:r(108)};e.createCipheriv=o,e.createCipher=a}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function r(t){this.h=t,this.state=new e(16),this.state.fill(0),this.cache=new e("")}function n(t){return[t.readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)]}function i(t){t=t.map(o);var r=new e(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r}function o(t){var e,r;return e=t>s||t<0?(r=Math.abs(t)%s,t<0?s-r:r):t}function a(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}var f=new e(16);f.fill(0),t.exports=r,r.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e];this._multiply()},r.prototype._multiply=function(){for(var t,e,r,o=n(this.h),f=[0,0,0,0],s=-1;++s<128;){for(e=0!==(this.state[~~(s/8)]&1<<7-s%8),e&&(f=a(f,o)),r=0!==(1&o[3]),t=3;t>0;t--)o[t]=o[t]>>>1|(1&o[t-1])<<31;o[0]=o[0]>>>1,r&&(o[0]=o[0]^225<<24)}this.state=i(f)},r.prototype.update=function(t){this.cache=e.concat([this.cache,t]);for(var r;this.cache.length>=16;)r=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(r)},r.prototype.final=function(t,r){return this.cache.length&&this.ghash(e.concat([this.cache,f],16)),this.ghash(i([0,t,0,r])),this.state};var s=Math.pow(2,32)}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r){var n=(t.modulus,t.modulus.byteLength()),i=(r.length,c("sha1").update(new e("")).digest()),a=i.length;if(0!==r[0])throw new Error("decryption error");var u=r.slice(1,a+1),h=r.slice(a+1),d=s(u,f(h,a)),l=s(h,f(d,n-a-1));if(o(i,l.slice(0,a)))throw new Error("decryption error");for(var p=a;0===l[p];)p++;if(1!==l[p++])throw new Error("decryption error");return l.slice(p)}function i(t,e,r){for(var n=e.slice(0,2),i=2,o=0;0!==e[i++];)if(i>=e.length){o++;break}var a=e.slice(2,i-1);e.slice(i-1,i);if(("0002"!==n.toString("hex")&&!r||"0001"!==n.toString("hex")&&r)&&o++,a.length<8&&o++,o)throw new Error("decryption error");return e.slice(i)}function o(t,r){t=new e(t),r=new e(r);var n=0,i=t.length;t.length!==r.length&&(n++,i=Math.min(t.length,r.length));for(var o=-1;++o<i;)n+=t[o]^r[o];return n}var a=r(233),f=r(231),s=r(248),u=r(70),h=r(232),c=r(59),d=r(247);t.exports=function(t,r,o){var f;f=t.padding?t.padding:o?1:4;var s=a(t),c=s.modulus.byteLength();if(r.length>c||new u(r).cmp(s.modulus)>=0)throw new Error("decryption error");var l;l=o?d(new u(r),s):h(r,s);var p=new e(c-l.length);if(p.fill(0),l=e.concat([p,l],c),4===f)return n(s,l);if(1===f)return i(s,l,o);if(3===f)return l;throw new Error("unknown padding")}}).call(e,r(1).Buffer)},function(t,e,r){(function(e){function n(t,r){var n=t.modulus.byteLength(),i=r.length,o=s("sha1").update(new e("")).digest(),a=o.length,d=2*a;if(i>n-d-2)throw new Error("message too long");var l=new e(n-i-d-2);l.fill(0);var p=n-a-1,b=f(a),v=h(e.concat([o,l,new e([1]),r],p),u(b,p)),y=h(b,u(v,a));return new c(e.concat([new e([0]),y,v],n))}function i(t,r,n){var i=r.length,a=t.modulus.byteLength();if(i>a-11)throw new Error("message too long");var f;return n?(f=new e(a-i-3),f.fill(255)):f=o(a-i-3),new c(e.concat([new e([0,n?1:2]),f,new e([0]),r],a))}function o(t,r){for(var n,i=new e(t),o=0,a=f(2*t),s=0;o<t;)s===a.length&&(a=f(2*t),s=0),n=a[s++],n&&(i[o++]=n);return i}var a=r(233),f=r(61),s=r(59),u=r(231),h=r(248),c=r(70),d=r(247),l=r(232);t.exports=function(t,e,r){var o;o=t.padding?t.padding:r?1:4;var f,s=a(t);if(4===o)f=n(s,e);else if(1===o)f=i(s,e,r);else{if(3!==o)throw new Error("unknown padding");if(f=new c(e),f.cmp(s.modulus)>=0)throw new Error("data too long for modulus")}return r?l(f,s):d(f,s)}}).call(e,r(1).Buffer)},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),
r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=r(n(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===a(t,-1);return t=r(n(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),f=a,s=0;s<a;s++)if(i[s]!==o[s]){f=s;break}for(var u=[],s=f;s<i.length;s++)u.push("..");return u=u.concat(o.slice(f)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(e,r(26))},function(t,e,r){t.exports=r(51)},function(t,e,r){"use strict";function n(){this.head=null,this.tail=null,this.length=0}var i=(r(1).Buffer,r(156));t.exports=n,n.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},n.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},n.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},n.prototype.clear=function(){this.head=this.tail=null,this.length=0},n.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data;return r},n.prototype.concat=function(t){if(0===this.length)return i.alloc(0);if(1===this.length)return this.head.data;for(var e=i.allocUnsafe(t>>>0),r=this.head,n=0;r;)r.data.copy(e,n),n+=r.data.length,r=r.next;return e}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){(function(e){function r(t,e){function r(){if(!i){if(n("throwDeprecation"))throw new Error(e);n("traceDeprecation")?console.trace(e):console.warn(e),i=!0}return t.apply(this,arguments)}if(n("noDeprecation"))return t;var i=!1;return r}function n(t){try{if(!e.localStorage)return!1}catch(t){return!1}var r=e.localStorage[t];return null!=r&&"true"===String(r).toLowerCase()}t.exports=r}).call(e,r(39))},function(t,e,r){t.exports=r(249)},function(t,e,r){(function(n){var i=function(){try{return r(31)}catch(t){}}();e=t.exports=r(250),e.Stream=i||e,e.Readable=e,e.Writable=r(155),e.Duplex=r(51),e.Transform=r(154),e.PassThrough=r(249),!n.browser&&"disable"===n.env.READABLE_STREAM&&i&&(t.exports=i)}).call(e,r(26))},function(t,e,r){t.exports=r(154)},function(t,e,r){t.exports=r(155)},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e,r){(function(t,n){function i(t,r){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&e._extend(n,r),_(n.showHidden)&&(n.showHidden=!1),_(n.depth)&&(n.depth=2),_(n.colors)&&(n.colors=!1),_(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),s(n,t,n.depth)}function o(t,e){var r=i.styles[e];return r?"["+i.colors[r][0]+"m"+t+"["+i.colors[r][1]+"m":t}function a(t,e){return t}function f(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}function s(t,r,n){if(t.customInspect&&r&&k(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return g(i)||(i=s(t,i,n)),i}var o=u(t,r);if(o)return o;var a=Object.keys(r),b=f(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),A(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return h(r);if(0===a.length){if(k(r)){var v=r.name?": "+r.name:"";return t.stylize("[Function"+v+"]","special")}if(M(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(E(r))return t.stylize(Date.prototype.toString.call(r),"date");if(A(r))return h(r)}var y="",m=!1,w=["{","}"];if(p(r)&&(m=!0,w=["[","]"]),k(r)){var _=r.name?": "+r.name:"";y=" [Function"+_+"]"}if(M(r)&&(y=" "+RegExp.prototype.toString.call(r)),E(r)&&(y=" "+Date.prototype.toUTCString.call(r)),A(r)&&(y=" "+h(r)),0===a.length&&(!m||0==r.length))return w[0]+y+w[1];if(n<0)return M(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special");t.seen.push(r);var S;return S=m?c(t,r,n,b,a):a.map(function(e){return d(t,r,n,b,e,m)}),t.seen.pop(),l(S,y,w)}function u(t,e){if(_(e))return t.stylize("undefined","undefined");if(g(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return m(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function c(t,e,r,n,i){for(var o=[],a=0,f=e.length;a<f;++a)R(e,String(a))?o.push(d(t,e,r,n,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(d(t,e,r,n,i,!0))}),o}function d(t,e,r,n,i,o){var a,f,u;if(u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},u.get?f=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(f=t.stylize("[Setter]","special")),R(n,i)||(a="["+i+"]"),f||(t.seen.indexOf(u.value)<0?(f=v(r)?s(t,u.value,null):s(t,u.value,r-1),f.indexOf("\n")>-1&&(f=o?f.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+f.split("\n").map(function(t){return"   "+t}).join("\n"))):f=t.stylize("[Circular]","special")),_(a)){if(o&&i.match(/^\d+$/))return f;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+f}function l(t,e,r){var n=0,i=t.reduce(function(t,e){return n++,e.indexOf("\n")>=0&&n++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function p(t){return Array.isArray(t)}function b(t){return"boolean"==typeof t}function v(t){return null===t}function y(t){return null==t}function m(t){return"number"==typeof t}function g(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function _(t){return void 0===t}function M(t){return S(t)&&"[object RegExp]"===I(t)}function S(t){return"object"==typeof t&&null!==t}function E(t){return S(t)&&"[object Date]"===I(t)}function A(t){return S(t)&&("[object Error]"===I(t)||t instanceof Error)}function k(t){return"function"==typeof t}function x(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function I(t){return Object.prototype.toString.call(t)}function B(t){return t<10?"0"+t.toString(10):t.toString(10)}function O(){var t=new Date,e=[B(t.getHours()),B(t.getMinutes()),B(t.getSeconds())].join(":");return[t.getDate(),C[t.getMonth()],e].join(" ")}function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var P=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(i(arguments[r]));return e.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(t).replace(P,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),f=n[r];r<o;f=n[++r])a+=v(f)||!S(f)?" "+f:" "+i(f);return a},e.deprecate=function(r,i){function o(){if(!a){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),a=!0}return r.apply(this,arguments)}if(_(t.process))return function(){return e.deprecate(r,i).apply(this,arguments)};if(n.noDeprecation===!0)return r;var a=!1;return o};var T,j={};e.debuglog=function(t){if(_(T)&&(T=n.env.NODE_DEBUG||""),t=t.toUpperCase(),!j[t])if(new RegExp("\\b"+t+"\\b","i").test(T)){var r=n.pid;j[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else j[t]=function(){};return j[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=b,e.isNull=v,e.isNullOrUndefined=y,e.isNumber=m,e.isString=g,e.isSymbol=w,e.isUndefined=_,e.isRegExp=M,e.isObject=S,e.isDate=E,e.isError=A,e.isFunction=k,e.isPrimitive=x,e.isBuffer=r(605);var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.log=function(){console.log("%s - %s",O(),e.format.apply(e,arguments))},e.inherits=r(604),e._extend=function(t,e){if(!e||!S(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t}}).call(e,r(39),r(26))},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,r){r(253),t.exports=r(252)}])});

/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.5.7
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
            0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
            2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
            2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
            2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array'];

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(bits, padding, type);
    }
    return method;
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createShakeOutputMethod(bits, padding, type);
    }
    return method;
  };

  var algorithms = [
    {name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod},
    {name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod},
    {name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod}
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits  = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name +'_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    var notString = typeof message !== 'string';
    if (notString && message.constructor === ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var length = message.length, blocks = this.blocks, byteCount = this.byteCount,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.finalize = function () {
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
               HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
               HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
               HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      if (extraBytes > 0) {
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      }
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
        extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      if (extraBytes > 0) {
        array[offset] = block & 0xFF;
      }
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
        b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
        b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
        b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (var i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53), __webpack_require__(10)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(50);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(51);
exports.stringify = __webpack_require__(52);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

(function(nacl) {
'use strict';

// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/

var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};

//  Pluggable, initialized in high-level API below.
var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            // "expand 32-byte k"

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}

/*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/

var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  // t15 left as is

  // first car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  // second car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      // add
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma1
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Ch
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // K
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // w
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      // add
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma0
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Maj
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      // add
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          // add
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma0
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma1
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    // add
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = (x[j] + 128) >> 8;
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}

// Note: difference from C - smlen returned, not passed as argument.
function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i, mlen;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  mlen = -1;
  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  mlen = n;
  return mlen;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES
};

/* High-level API */

function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  var t, i;
  for (i = 0; i < arguments.length; i++) {
     if ((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]')
       throw new TypeError('unexpected type ' + t + ', use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}

// TODO: Completely remove this in v0.15.
if (!nacl.util) {
  nacl.util = {};
  nacl.util.decodeUTF8 = nacl.util.encodeUTF8 = nacl.util.encodeBase64 = nacl.util.decodeBase64 = function() {
    throw new Error('nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js');
  };
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return false;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return false;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  if (arguments.length !== 2)
    throw new Error('nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?');
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  // Zero length arguments are considered not equal.
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  // Initialize PRNG if environment provides CSPRNG.
  // If not, methods calling randombytes will throw.
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    // Browsers.
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (true) {
    // Node.js.
    crypto = __webpack_require__(55);
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
});