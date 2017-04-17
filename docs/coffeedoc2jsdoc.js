ls/*! coffeedoc2jsdoc v0.0.0 */
var coffeedoc2jsdoc =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Represents a particular type of CoffeeScript code.
 */
var SourceType;
(function (SourceType) {
    SourceType[SourceType["AT"] = 1] = "AT";
    SourceType[SourceType["BOOL"] = 2] = "BOOL";
    SourceType[SourceType["BREAK"] = 3] = "BREAK";
    SourceType[SourceType["CATCH"] = 4] = "CATCH";
    SourceType[SourceType["CALL_END"] = 5] = "CALL_END";
    SourceType[SourceType["CALL_START"] = 6] = "CALL_START";
    SourceType[SourceType["CLASS"] = 7] = "CLASS";
    SourceType[SourceType["COLON"] = 8] = "COLON";
    SourceType[SourceType["COMMA"] = 9] = "COMMA";
    SourceType[SourceType["COMMENT"] = 10] = "COMMENT";
    SourceType[SourceType["CONTINUATION"] = 11] = "CONTINUATION";
    SourceType[SourceType["CONTINUE"] = 12] = "CONTINUE";
    SourceType[SourceType["DELETE"] = 13] = "DELETE";
    SourceType[SourceType["DO"] = 14] = "DO";
    SourceType[SourceType["DOT"] = 15] = "DOT";
    SourceType[SourceType["DSTRING_START"] = 16] = "DSTRING_START";
    SourceType[SourceType["DSTRING_END"] = 17] = "DSTRING_END";
    SourceType[SourceType["ELSE"] = 18] = "ELSE";
    SourceType[SourceType["EOF"] = 19] = "EOF";
    SourceType[SourceType["EXISTENCE"] = 20] = "EXISTENCE";
    SourceType[SourceType["FINALLY"] = 21] = "FINALLY";
    SourceType[SourceType["FOR"] = 22] = "FOR";
    SourceType[SourceType["FUNCTION"] = 23] = "FUNCTION";
    SourceType[SourceType["HERECOMMENT"] = 24] = "HERECOMMENT";
    SourceType[SourceType["HEREGEXP_START"] = 25] = "HEREGEXP_START";
    SourceType[SourceType["HEREGEXP_END"] = 26] = "HEREGEXP_END";
    SourceType[SourceType["IF"] = 27] = "IF";
    SourceType[SourceType["INTERPOLATION_START"] = 28] = "INTERPOLATION_START";
    SourceType[SourceType["INTERPOLATION_END"] = 29] = "INTERPOLATION_END";
    SourceType[SourceType["JS"] = 30] = "JS";
    SourceType[SourceType["LBRACE"] = 31] = "LBRACE";
    SourceType[SourceType["LBRACKET"] = 32] = "LBRACKET";
    SourceType[SourceType["LOOP"] = 33] = "LOOP";
    SourceType[SourceType["LPAREN"] = 34] = "LPAREN";
    SourceType[SourceType["NEWLINE"] = 35] = "NEWLINE";
    SourceType[SourceType["NORMAL"] = 36] = "NORMAL";
    SourceType[SourceType["NULL"] = 37] = "NULL";
    SourceType[SourceType["NUMBER"] = 38] = "NUMBER";
    SourceType[SourceType["OPERATOR"] = 39] = "OPERATOR";
    SourceType[SourceType["OWN"] = 40] = "OWN";
    SourceType[SourceType["PROTO"] = 41] = "PROTO";
    SourceType[SourceType["RANGE"] = 42] = "RANGE";
    SourceType[SourceType["REGEXP"] = 43] = "REGEXP";
    SourceType[SourceType["RBRACE"] = 44] = "RBRACE";
    SourceType[SourceType["RBRACKET"] = 45] = "RBRACKET";
    SourceType[SourceType["RELATION"] = 46] = "RELATION";
    SourceType[SourceType["RETURN"] = 47] = "RETURN";
    SourceType[SourceType["RPAREN"] = 48] = "RPAREN";
    SourceType[SourceType["SEMICOLON"] = 49] = "SEMICOLON";
    SourceType[SourceType["SPACE"] = 50] = "SPACE";
    SourceType[SourceType["SUPER"] = 51] = "SUPER";
    SourceType[SourceType["SWITCH"] = 52] = "SWITCH";
    SourceType[SourceType["SSTRING_START"] = 53] = "SSTRING_START";
    SourceType[SourceType["SSTRING_END"] = 54] = "SSTRING_END";
    SourceType[SourceType["STRING_CONTENT"] = 55] = "STRING_CONTENT";
    SourceType[SourceType["STRING_LINE_SEPARATOR"] = 56] = "STRING_LINE_SEPARATOR";
    SourceType[SourceType["STRING_PADDING"] = 57] = "STRING_PADDING";
    SourceType[SourceType["TDSTRING_START"] = 58] = "TDSTRING_START";
    SourceType[SourceType["TDSTRING_END"] = 59] = "TDSTRING_END";
    SourceType[SourceType["THEN"] = 60] = "THEN";
    SourceType[SourceType["THIS"] = 61] = "THIS";
    SourceType[SourceType["TRY"] = 62] = "TRY";
    SourceType[SourceType["TSSTRING_START"] = 63] = "TSSTRING_START";
    SourceType[SourceType["TSSTRING_END"] = 64] = "TSSTRING_END";
    SourceType[SourceType["UNDEFINED"] = 65] = "UNDEFINED";
    SourceType[SourceType["UNKNOWN"] = 66] = "UNKNOWN";
    SourceType[SourceType["WHEN"] = 67] = "WHEN";
    SourceType[SourceType["WHILE"] = 68] = "WHILE";
    SourceType[SourceType["IDENTIFIER"] = 69] = "IDENTIFIER";
    SourceType[SourceType["YIELD"] = 70] = "YIELD";
    SourceType[SourceType["YIELDFROM"] = 71] = "YIELDFROM";
    SourceType[SourceType["INCREMENT"] = 72] = "INCREMENT";
    SourceType[SourceType["DECREMENT"] = 73] = "DECREMENT";
    SourceType[SourceType["NEW"] = 74] = "NEW";
})(SourceType || (SourceType = {}));
exports["default"] = SourceType;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.10.0
(function() {
  var buildLocationData, extend, flatten, ref, repeat, syntaxErrorToString;

  exports.starts = function(string, literal, start) {
    return literal === string.substr(start, literal.length);
  };

  exports.ends = function(string, literal, back) {
    var len;
    len = literal.length;
    return literal === string.substr(string.length - len - (back || 0), len);
  };

  exports.repeat = repeat = function(str, n) {
    var res;
    res = '';
    while (n > 0) {
      if (n & 1) {
        res += str;
      }
      n >>>= 1;
      str += str;
    }
    return res;
  };

  exports.compact = function(array) {
    var i, item, len1, results;
    results = [];
    for (i = 0, len1 = array.length; i < len1; i++) {
      item = array[i];
      if (item) {
        results.push(item);
      }
    }
    return results;
  };

  exports.count = function(string, substr) {
    var num, pos;
    num = pos = 0;
    if (!substr.length) {
      return 1 / 0;
    }
    while (pos = 1 + string.indexOf(substr, pos)) {
      num++;
    }
    return num;
  };

  exports.merge = function(options, overrides) {
    return extend(extend({}, options), overrides);
  };

  extend = exports.extend = function(object, properties) {
    var key, val;
    for (key in properties) {
      val = properties[key];
      object[key] = val;
    }
    return object;
  };

  exports.flatten = flatten = function(array) {
    var element, flattened, i, len1;
    flattened = [];
    for (i = 0, len1 = array.length; i < len1; i++) {
      element = array[i];
      if ('[object Array]' === Object.prototype.toString.call(element)) {
        flattened = flattened.concat(flatten(element));
      } else {
        flattened.push(element);
      }
    }
    return flattened;
  };

  exports.del = function(obj, key) {
    var val;
    val = obj[key];
    delete obj[key];
    return val;
  };

  exports.some = (ref = Array.prototype.some) != null ? ref : function(fn) {
    var e, i, len1;
    for (i = 0, len1 = this.length; i < len1; i++) {
      e = this[i];
      if (fn(e)) {
        return true;
      }
    }
    return false;
  };

  exports.invertLiterate = function(code) {
    var line, lines, maybe_code;
    maybe_code = true;
    lines = (function() {
      var i, len1, ref1, results;
      ref1 = code.split('\n');
      results = [];
      for (i = 0, len1 = ref1.length; i < len1; i++) {
        line = ref1[i];
        if (maybe_code && /^([ ]{4}|[ ]{0,3}\t)/.test(line)) {
          results.push(line);
        } else if (maybe_code = /^\s*$/.test(line)) {
          results.push(line);
        } else {
          results.push('# ' + line);
        }
      }
      return results;
    })();
    return lines.join('\n');
  };

  buildLocationData = function(first, last) {
    if (!last) {
      return first;
    } else {
      return {
        first_line: first.first_line,
        first_column: first.first_column,
        last_line: last.last_line,
        last_column: last.last_column
      };
    }
  };

  exports.addLocationDataFn = function(first, last) {
    return function(obj) {
      if (((typeof obj) === 'object') && (!!obj['updateLocationDataIfMissing'])) {
        obj.updateLocationDataIfMissing(buildLocationData(first, last));
      }
      return obj;
    };
  };

  exports.locationDataToString = function(obj) {
    var locationData;
    if (("2" in obj) && ("first_line" in obj[2])) {
      locationData = obj[2];
    } else if ("first_line" in obj) {
      locationData = obj;
    }
    if (locationData) {
      return ((locationData.first_line + 1) + ":" + (locationData.first_column + 1) + "-") + ((locationData.last_line + 1) + ":" + (locationData.last_column + 1));
    } else {
      return "No location data";
    }
  };

  exports.baseFileName = function(file, stripExt, useWinPathSep) {
    var parts, pathSep;
    if (stripExt == null) {
      stripExt = false;
    }
    if (useWinPathSep == null) {
      useWinPathSep = false;
    }
    pathSep = useWinPathSep ? /\\|\// : /\//;
    parts = file.split(pathSep);
    file = parts[parts.length - 1];
    if (!(stripExt && file.indexOf('.') >= 0)) {
      return file;
    }
    parts = file.split('.');
    parts.pop();
    if (parts[parts.length - 1] === 'coffee' && parts.length > 1) {
      parts.pop();
    }
    return parts.join('.');
  };

  exports.isCoffee = function(file) {
    return /\.((lit)?coffee|coffee\.md)$/.test(file);
  };

  exports.isLiterate = function(file) {
    return /\.(litcoffee|coffee\.md)$/.test(file);
  };

  exports.throwSyntaxError = function(message, location) {
    var error;
    error = new SyntaxError(message);
    error.location = location;
    error.toString = syntaxErrorToString;
    error.stack = error.toString();
    throw error;
  };

  exports.updateSyntaxError = function(error, code, filename) {
    if (error.toString === syntaxErrorToString) {
      error.code || (error.code = code);
      error.filename || (error.filename = filename);
      error.stack = error.toString();
    }
    return error;
  };

  syntaxErrorToString = function() {
    var codeLine, colorize, colorsEnabled, end, filename, first_column, first_line, last_column, last_line, marker, ref1, ref2, ref3, ref4, start;
    if (!(this.code && this.location)) {
      return Error.prototype.toString.call(this);
    }
    ref1 = this.location, first_line = ref1.first_line, first_column = ref1.first_column, last_line = ref1.last_line, last_column = ref1.last_column;
    if (last_line == null) {
      last_line = first_line;
    }
    if (last_column == null) {
      last_column = first_column;
    }
    filename = this.filename || '[stdin]';
    codeLine = this.code.split('\n')[first_line];
    start = first_column;
    end = first_line === last_line ? last_column + 1 : codeLine.length;
    marker = codeLine.slice(0, start).replace(/[^\s]/g, ' ') + repeat('^', end - start);
    if (typeof process !== "undefined" && process !== null) {
      colorsEnabled = ((ref2 = process.stdout) != null ? ref2.isTTY : void 0) && !((ref3 = process.env) != null ? ref3.NODE_DISABLE_COLORS : void 0);
    }
    if ((ref4 = this.colorful) != null ? ref4 : colorsEnabled) {
      colorize = function(str) {
        return "\x1B[1;31m" + str + "\x1B[0m";
      };
      codeLine = codeLine.slice(0, start) + colorize(codeLine.slice(start, end)) + codeLine.slice(end);
      marker = colorize(marker);
    }
    return filename + ":" + (first_line + 1) + ":" + (first_column + 1) + ": error: " + this.message + "\n" + codeLine + "\n" + marker;
  };

  exports.nameWhitespaceCharacter = function(string) {
    switch (string) {
      case ' ':
        return 'space';
      case '\n':
        return 'newline';
      case '\r':
        return 'carriage return';
      case '\t':
        return 'tab';
      default:
        return string;
    }
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceLocation_1 = __webpack_require__(7);
var SourceType_1 = __webpack_require__(0);
/**
 * Helper class for defining the padding (characters to remove, typically
 * whitespace) in a string or heregexp. Also tracks "line separators", which are
 * newline characters in multiline single and double quoted strings that should
 * be turned into space characters.
 *
 * Example usage:
 *
 * let paddingTracker = new PaddingTracker(source, stream, SSTRING_END);
 *
 * // Examine underlying code to see what padding to add.
 * paddingTracker.fragments[0].content;
 *
 * // Mark padding for each fragment, indexed relative to the fragment content.
 * paddingTracker.fragments[0].markPadding(3, 5);
 * paddingTracker.fragments[1].markPadding(1, 4);
 * paddingTracker.fragments[1].markLineSeparator(5);
 *
 * // Compute the replacement source locations for the entire string/heregexp.
 * paddingTracker.computeSourceLocations();
 */
var PaddingTracker = (function () {
    function PaddingTracker(source, stream, endType) {
        this.fragments = [];
        this._originalLocations = [];
        var interpolationLevel = 0;
        var location;
        do {
            location = stream.shift();
            this._originalLocations.push(location);
            if (interpolationLevel === 0 && location.type === SourceType_1["default"].STRING_CONTENT) {
                var start = location.index;
                var end = stream.peek().index;
                var content = source.slice(start, end);
                var index = this.fragments.length;
                this.fragments.push(new TrackedFragment(content, start, end, index));
            }
            else if (location.type === SourceType_1["default"].INTERPOLATION_START) {
                interpolationLevel += 1;
            }
            else if (location.type === SourceType_1["default"].INTERPOLATION_END) {
                interpolationLevel -= 1;
            }
        } while (interpolationLevel > 0 || location.type !== endType);
    }
    PaddingTracker.prototype.computeSourceLocations = function () {
        var resultLocations = [];
        var rangeIndex = 0;
        for (var _i = 0, _a = this._originalLocations; _i < _a.length; _i++) {
            var location = _a[_i];
            var currentRange = this.fragments[rangeIndex];
            if (location.type === SourceType_1["default"].STRING_CONTENT &&
                currentRange && location.index === currentRange.start) {
                resultLocations.push.apply(resultLocations, currentRange.computeSourceLocations());
                rangeIndex++;
            }
            else {
                resultLocations.push(location);
            }
        }
        if (rangeIndex !== this.fragments.length) {
            throw new Error('Expected ranges to correspond to original locations.');
        }
        return resultLocations;
    };
    return PaddingTracker;
}());
exports["default"] = PaddingTracker;
var TrackedFragment = (function () {
    function TrackedFragment(content, start, end, index) {
        this.content = content;
        this.start = start;
        this.end = end;
        this.index = index;
        this._paddingRanges = [];
        this._lineSeparators = [];
    }
    TrackedFragment.prototype.markPadding = function (startIndex, endIndex) {
        this._paddingRanges.push({ start: startIndex, end: endIndex });
    };
    TrackedFragment.prototype.markLineSeparator = function (index) {
        this._lineSeparators.push(index);
    };
    TrackedFragment.prototype.computeSourceLocations = function () {
        if (this.start === this.end) {
            return [new SourceLocation_1["default"](SourceType_1["default"].STRING_CONTENT, this.start)];
        }
        // Break the marked ranges down into events, similar to how you might count
        // paren nesting. At each index, we can then know if we're inside padding,
        // a line separator, or neither.
        var eventsByIndex = [];
        for (var i = 0; i < this.end - this.start + 1; i++) {
            eventsByIndex.push([]);
        }
        for (var _i = 0, _a = this._paddingRanges; _i < _a.length; _i++) {
            var range = _a[_i];
            eventsByIndex[range.start].push('START_PADDING');
            eventsByIndex[range.end].push('END_PADDING');
        }
        for (var _b = 0, _c = this._lineSeparators; _b < _c.length; _b++) {
            var separatorIndex = _c[_b];
            eventsByIndex[separatorIndex].push('START_LINE_SEPARATOR');
            eventsByIndex[separatorIndex + 1].push('END_LINE_SEPARATOR');
        }
        var resultLocations = [];
        var lastSourceType = null;
        var paddingDepth = 0;
        var lineSeparatorDepth = 0;
        for (var sourceIndex = this.start; sourceIndex < this.end; sourceIndex++) {
            for (var _d = 0, _e = eventsByIndex[sourceIndex - this.start]; _d < _e.length; _d++) {
                var event = _e[_d];
                if (event === 'START_PADDING') {
                    paddingDepth += 1;
                }
                else if (event === 'END_PADDING') {
                    paddingDepth -= 1;
                }
                else if (event === 'START_LINE_SEPARATOR') {
                    lineSeparatorDepth += 1;
                }
                else if (event === 'END_LINE_SEPARATOR') {
                    lineSeparatorDepth -= 1;
                }
            }
            if (paddingDepth < 0 || lineSeparatorDepth < 0 || (paddingDepth > 0 && lineSeparatorDepth > 0)) {
                throw new Error("Illegal padding state: paddingDepth: " + paddingDepth + ", lineSeparatorDepth: " + lineSeparatorDepth);
            }
            var sourceType = void 0;
            if (paddingDepth > 0) {
                sourceType = SourceType_1["default"].STRING_PADDING;
            }
            else if (lineSeparatorDepth > 0) {
                sourceType = SourceType_1["default"].STRING_LINE_SEPARATOR;
            }
            else {
                sourceType = SourceType_1["default"].STRING_CONTENT;
            }
            if (sourceType !== lastSourceType) {
                resultLocations.push(new SourceLocation_1["default"](sourceType, sourceIndex));
                lastSourceType = sourceType;
            }
        }
        return resultLocations;
    };
    return TrackedFragment;
}());
exports.TrackedFragment = TrackedFragment;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SourceLocation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SourceLocation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SourceLocation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SourceToken__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SourceToken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SourceToken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SourceTokenList__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SourceTokenList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SourceTokenList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SourceType__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SourceType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SourceType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_BufferedStream__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_BufferedStream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_BufferedStream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_calculateHeregexpPadding__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_calculateHeregexpPadding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_calculateHeregexpPadding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_calculateNormalStringPadding__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_calculateNormalStringPadding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__utils_calculateNormalStringPadding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_calculateTripleQuotedStringPadding__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_calculateTripleQuotedStringPadding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__utils_calculateTripleQuotedStringPadding__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SourceType", function() { return __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a; });
/* harmony export (immutable) */ __webpack_exports__["default"] = lex;
/* harmony export (immutable) */ __webpack_exports__["stream"] = stream;
/* harmony export (immutable) */ __webpack_exports__["consumeStream"] = consumeStream;








/**
 * Generate a list of tokens from CoffeeScript source code.
 */
function lex(source) {
    var location;
    var previousLocation;
    var tokens = [];
    var pending = new __WEBPACK_IMPORTED_MODULE_4__utils_BufferedStream___default.a(stream(source));
    do {
        pending.unshift.apply(pending, __WEBPACK_IMPORTED_MODULE_6__utils_calculateNormalStringPadding___default()(source, pending));
        pending.unshift.apply(pending, __WEBPACK_IMPORTED_MODULE_7__utils_calculateTripleQuotedStringPadding___default()(source, pending));
        pending.unshift.apply(pending, __WEBPACK_IMPORTED_MODULE_5__utils_calculateHeregexpPadding___default()(source, pending));
        pending.unshift.apply(pending, combinedLocationsForMultiwordOperators(pending, source));
        location = pending.shift();
        if (previousLocation && previousLocation.type !== __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE) {
            tokens.push(new __WEBPACK_IMPORTED_MODULE_1__SourceToken___default.a(previousLocation.type, previousLocation.index, location.index));
        }
        previousLocation = location;
    } while (location.type !== __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EOF);
    return new __WEBPACK_IMPORTED_MODULE_2__SourceTokenList___default.a(tokens);
}
function combinedLocationsForMultiwordOperators(stream, source) {
    if (!stream.hasNext(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR) && !stream.hasNext(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RELATION)) {
        return [];
    }
    var not = stream.shift();
    var space = stream.shift();
    var operator = stream.shift();
    var next = stream.peek();
    if (source.slice(not.index, space.index) === 'not') {
        var op = source.slice(operator.index, next.index);
        switch (op) {
            case 'in':
            case 'of':
                return [
                    new __WEBPACK_IMPORTED_MODULE_0__SourceLocation___default.a(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RELATION, not.index)
                ];
            case 'instanceof':
                return [
                    new __WEBPACK_IMPORTED_MODULE_0__SourceLocation___default.a(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR, not.index)
                ];
        }
    }
    // Doesn't match, so put them back.
    return [not, space, operator];
}
var REGEXP_FLAGS = ['i', 'g', 'm', 'y'];

/**
 * Borrowed, with tweaks, from CoffeeScript's lexer.coffee.
 */
var STRING = [__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SSTRING_END, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DSTRING_END, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TSSTRING_END, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TDSTRING_END];
var CALLABLE = [
    __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IDENTIFIER, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_END, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RPAREN, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACKET, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EXISTENCE, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.AT, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.THIS, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SUPER
];
var INDEXABLE = CALLABLE.concat([
    __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NUMBER
].concat(STRING, [
    __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.REGEXP, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HEREGEXP_END,
    __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.BOOL, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NULL, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.UNDEFINED, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACE, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.PROTO
]));
var NOT_REGEXP = INDEXABLE.concat([__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INCREMENT, __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DECREMENT]);
var IDENTIFIER_PATTERN = /^(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)/;
var NUMBER_PATTERN = /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i;
var SPACE_PATTERN = /^[^\n\r\S]+/;
var REGEXP_PATTERN = /^\/(?!\/)((?:[^[\/\n\\]|\\[^\n]|\[(?:\\[^\n]|[^\]\n\\])*\])*)(\/)?/;
var YIELDFROM_PATTERN = /^yield[^\n\r\S]+from/;
var OPERATORS = [
    // equality
    '===', '==', '!==', '!=',
    // assignment
    '=',
    '+=', '-=', '/=', '*=', '%=', '%%=',
    '||=', '&&=', '^=', 'or=', 'and=',
    '?=',
    '|=', '&=', '~=', '<<=', '>>>=', '>>=',
    // increment/decrement
    '++', '--',
    // math
    '+', '-', '//', '/', '*', '%', '%%',
    // logical
    '||', '&&', '^', '!',
    // existence
    '?',
    // bitwise
    '|', '&', '~', '<<', '>>>', '>>',
    // comparison
    '<=', '<', '>=', '>',
    // prototype access
    '::',
];
/**
 * Provides a stream of source type change locations.
 */
function stream(source, index) {
    if (index === void 0) { index = 0; }
    var location = new __WEBPACK_IMPORTED_MODULE_0__SourceLocation___default.a(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL, index);
    var interpolationStack = [];
    var braceStack = [];
    var parenStack = [];
    var stringStack = [];
    var start = index;
    var locations = [];
    return function step() {
        var lastLocation = location;
        var shouldStepAgain = false;
        do {
            start = index;
            if (index >= source.length) {
                setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EOF);
            }
            switch (location.type) {
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IDENTIFIER:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DOT:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NUMBER:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INCREMENT:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DECREMENT:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COMMA:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LPAREN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RPAREN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_END:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEW:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LBRACE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LBRACKET:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACKET:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEWLINE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COLON:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FUNCTION:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.THIS:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.AT:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SEMICOLON:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IF:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.ELSE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.THEN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FOR:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OWN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.WHILE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.BOOL:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NULL:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.UNDEFINED:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.REGEXP:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SSTRING_END:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DSTRING_END:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TSSTRING_END:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TDSTRING_END:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INTERPOLATION_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SUPER:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TRY:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CATCH:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FINALLY:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SWITCH:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.WHEN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.BREAK:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CONTINUE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EXISTENCE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CLASS:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.PROTO:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RANGE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DELETE:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RETURN:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RELATION:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LOOP:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DO:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.YIELD:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.YIELDFROM:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CONTINUATION:
                    if (consume(SPACE_PATTERN)) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE);
                    }
                    else if (consume('\n')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEWLINE);
                    }
                    else if (consume('...') || consume('..')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RANGE);
                    }
                    else if (consume(NUMBER_PATTERN)) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NUMBER);
                    }
                    else if (consume('.')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DOT);
                    }
                    else if (consume('"""')) {
                        stringStack.push({
                            allowInterpolations: true,
                            endingDelimiter: '"""',
                            endSourceType: __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TDSTRING_END
                        });
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TDSTRING_START);
                    }
                    else if (consume('"')) {
                        stringStack.push({
                            allowInterpolations: true,
                            endingDelimiter: '"',
                            endSourceType: __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DSTRING_END
                        });
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DSTRING_START);
                    }
                    else if (consume('\'\'\'')) {
                        stringStack.push({
                            allowInterpolations: false,
                            endingDelimiter: '\'\'\'',
                            endSourceType: __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TSSTRING_END
                        });
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TSSTRING_START);
                    }
                    else if (consume('\'')) {
                        stringStack.push({
                            allowInterpolations: false,
                            endingDelimiter: '\'',
                            endSourceType: __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SSTRING_END
                        });
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SSTRING_START);
                    }
                    else if (consume(/^###[^#]/)) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HERECOMMENT);
                    }
                    else if (consume('#')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COMMENT);
                    }
                    else if (consume('///')) {
                        stringStack.push({
                            allowInterpolations: true,
                            endingDelimiter: '///',
                            endSourceType: __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HEREGEXP_END
                        });
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HEREGEXP_START);
                    }
                    else if (consume('(')) {
                        if (CALLABLE.indexOf(location.type) >= 0) {
                            parenStack.push(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_START);
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_START);
                        }
                        else {
                            parenStack.push(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LPAREN);
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LPAREN);
                        }
                    }
                    else if (consume(')')) {
                        if (parenStack.length === 0) {
                            throw new Error("unexpected ')' at " + start);
                        }
                        else {
                            var lparen = parenStack.pop();
                            switch (lparen) {
                                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LPAREN:
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RPAREN);
                                    break;
                                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_START:
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CALL_END);
                                    break;
                                default:
                                    throw new Error("unexpected token type for '(' matching ')' at " + start + ": " + (lparen ? lparen.toString() : '??'));
                            }
                        }
                    }
                    else if (consume('[')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LBRACKET);
                    }
                    else if (consume(']')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACKET);
                    }
                    else if (consume('{')) {
                        braceStack.push(start);
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LBRACE);
                    }
                    else if (consume('}')) {
                        if (braceStack.length === 0) {
                            popInterpolation();
                        }
                        else {
                            braceStack.pop();
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RBRACE);
                        }
                    }
                    else if (consumeAny(['->', '=>'])) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FUNCTION);
                    }
                    else if (consumeRegexp()) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.REGEXP);
                    }
                    else if (consume('::')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.PROTO);
                    }
                    else if (consume(':')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COLON);
                    }
                    else if (consume(',')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COMMA);
                    }
                    else if (consume('@')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.AT);
                    }
                    else if (consume(';')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SEMICOLON);
                    }
                    else if (consume('`')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.JS);
                    }
                    else if (consumeAny(OPERATORS)) {
                        if (consumed() === '?') {
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EXISTENCE);
                        }
                        else if (consumed() === '++') {
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INCREMENT);
                        }
                        else if (consumed() === '--') {
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DECREMENT);
                        }
                        else {
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR);
                        }
                    }
                    else if (consume(YIELDFROM_PATTERN)) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.YIELDFROM);
                    }
                    else if (consume(IDENTIFIER_PATTERN)) {
                        var prevLocationIndex = locations.length - 1;
                        while (prevLocationIndex > 0 && locations[prevLocationIndex].type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEWLINE) {
                            prevLocationIndex--;
                        }
                        var prev = locations[prevLocationIndex];
                        var nextIsColon = match(/^\s*:/);
                        if (nextIsColon || (prev && (prev.type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DOT || prev.type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.PROTO || prev.type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.AT))) {
                            setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IDENTIFIER);
                        }
                        else {
                            switch (consumed()) {
                                case 'if':
                                case 'unless':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IF);
                                    break;
                                case 'else':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.ELSE);
                                    break;
                                case 'return':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RETURN);
                                    break;
                                case 'for':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FOR);
                                    break;
                                case 'own':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OWN);
                                    break;
                                case 'while':
                                case 'until':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.WHILE);
                                    break;
                                case 'loop':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.LOOP);
                                    break;
                                case 'then':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.THEN);
                                    break;
                                case 'switch':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SWITCH);
                                    break;
                                case 'when':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.WHEN);
                                    break;
                                case 'null':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NULL);
                                    break;
                                case 'undefined':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.UNDEFINED);
                                    break;
                                case 'this':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.THIS);
                                    break;
                                case 'new':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEW);
                                    break;
                                case 'super':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SUPER);
                                    break;
                                case 'true':
                                case 'false':
                                case 'yes':
                                case 'no':
                                case 'on':
                                case 'off':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.BOOL);
                                    break;
                                case 'and':
                                case 'or':
                                case 'not':
                                case 'is':
                                case 'isnt':
                                case 'instanceof':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.OPERATOR);
                                    break;
                                case 'class':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CLASS);
                                    break;
                                case 'break':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.BREAK);
                                    break;
                                case 'continue':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CONTINUE);
                                    break;
                                case 'try':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TRY);
                                    break;
                                case 'catch':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CATCH);
                                    break;
                                case 'finally':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.FINALLY);
                                    break;
                                case 'delete':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DELETE);
                                    break;
                                case 'in':
                                case 'of':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.RELATION);
                                    break;
                                case 'do':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DO);
                                    break;
                                case 'yield':
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.YIELD);
                                    break;
                                default:
                                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.IDENTIFIER);
                            }
                        }
                    }
                    else if (consume('\\')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.CONTINUATION);
                    }
                    else {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.UNKNOWN);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SSTRING_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.DSTRING_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TSSTRING_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.TDSTRING_START:
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HEREGEXP_START:
                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.STRING_CONTENT);
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.STRING_CONTENT: {
                    var stringOptions = stringStack[stringStack.length - 1];
                    if (!stringOptions) {
                        throw new Error('Unexpected STRING_CONTENT without anything on the string stack.');
                    }
                    if (consume('\\')) {
                        index++;
                    }
                    else if (consume(stringOptions.endingDelimiter)) {
                        stringStack.pop();
                        setType(stringOptions.endSourceType);
                    }
                    else if (stringOptions.allowInterpolations && consume('#{')) {
                        pushInterpolation();
                    }
                    else {
                        index++;
                    }
                    break;
                }
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.COMMENT:
                    if (consume('\n')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NEWLINE);
                    }
                    else {
                        index++;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HERECOMMENT:
                    if (consume('###')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL);
                    }
                    else {
                        index++;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INTERPOLATION_END:
                    var lastInterpolation = interpolationStack.pop();
                    if (!lastInterpolation) {
                        throw new Error("found interpolation end without any interpolation start");
                    }
                    var type = lastInterpolation.type, braces = lastInterpolation.braces;
                    setType(type);
                    braceStack = braces;
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.HEREGEXP_END:
                    while (consumeAny(REGEXP_FLAGS)) {
                        // condition has side-effect
                    }
                    setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL);
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.JS:
                    if (consume('\\')) {
                        index++;
                    }
                    else if (consume('`')) {
                        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL);
                    }
                    else {
                        index++;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EOF:
                    if (braceStack.length !== 0) {
                        throw new Error("unexpected EOF while looking for '}' to match '{' " +
                            ("at " + braceStack[braceStack.length - 1]));
                    }
                    if (stringStack.length !== 0) {
                        throw new Error('unexpected EOF while parsing a string');
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.UNKNOWN:
                    // Jump to the end.
                    index = source.length;
                    break;
                default:
                    throw new Error("unknown source type at offset " + location.index + ": " + __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a[location.type]);
            }
            shouldStepAgain = (
            // Don't report on going back to "normal" source code.
            location.type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.NORMAL ||
                // Don't report if nothing has changed, unless we're at the end.
                (location === lastLocation &&
                    location.type !== __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EOF));
        } while (shouldStepAgain);
        locations.push(location);
        return location;
    };
    function consumeAny(strings) {
        return strings.some(function (string) { return consume(string); });
    }
    function consume(value) {
        var matchData = match(value);
        if (matchData) {
            index += matchData[0].length;
            return true;
        }
        else {
            return false;
        }
    }
    function consumeRegexp() {
        var matchData = match(REGEXP_PATTERN);
        if (!matchData) {
            return false;
        }
        var regex = matchData[0], closed = matchData[2];
        var prev = locations[locations.length - 1];
        if (prev) {
            var spaced = false;
            if (prev.type === __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.SPACE) {
                spaced = true;
                prev = locations[locations.length - 2];
            }
            if (spaced && CALLABLE.indexOf(prev.type) >= 0) {
                if (!closed || /^\/=?\s/.test(regex)) {
                    return false;
                }
            }
            else if (NOT_REGEXP.indexOf(prev.type) >= 0) {
                return false;
            }
        }
        if (!closed) {
            throw new Error('missing / (unclosed regex)');
        }
        index += regex.length;
        while (consumeAny(REGEXP_FLAGS)) {
            // condition has side-effect
        }
        return true;
    }
    function consumed() {
        return source.slice(start, index);
    }
    function setType(newType) {
        location = new __WEBPACK_IMPORTED_MODULE_0__SourceLocation___default.a(newType, start);
    }
    function match(value) {
        if (typeof value === 'string') {
            var matches = source.slice(index, index + value.length) === value;
            return matches ? [value] : null;
        }
        else {
            return source.slice(index).match(value);
        }
    }
    function pushInterpolation() {
        interpolationStack.push({ type: location.type, braces: braceStack });
        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INTERPOLATION_START);
        braceStack = [];
    }
    function popInterpolation() {
        if (interpolationStack.length === 0) {
            throw new Error("unexpected '}' found in string at " + index + ": " + JSON.stringify(source));
        }
        setType(__WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.INTERPOLATION_END);
    }
}
function consumeStream(lexer) {
    var result = [];
    var location;
    do {
        location = lexer();
        result.push(location);
    } while (location.type !== __WEBPACK_IMPORTED_MODULE_3__SourceType___default.a.EOF);
    return result;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

class TagLine {
  constructor(type, content) {
    this.content = content;
    this.type = type;
    this.parameter = {
      description: undefined,
      name: undefined,
      type: undefined
    };
    this.coffeeDoc = `${this.type} ${this.content}`;
    this.jsDoc = this.getJSDoc();
  }

  getCoffeeDoc() {
    return this.coffeeDoc;
  }

  getJSDoc() {
    if (this.type == TagLine.TYPE.PARAM) {
      let currentPosition = this.content.indexOf(' ');
      let name = this.content.substr(0, currentPosition);
      name = name.trim();
      this.parameter.name = name;

      currentPosition = this.content.indexOf('[') + 1;
      let paramType = this.content.substr(currentPosition);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();
      this.parameter.type = paramType;

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();
      this.parameter.description = description;

      let text = `${this.type} {${this.parameter.type}} ${this.parameter.name}`;

      if (description) {
        text += ` - ${this.parameter.description}`;
      }

      return text;
    } else if (this.type == TagLine.TYPE.RETURN) {
      let paramType = this.content.substr(this.content.indexOf('[') + 1);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();
      this.parameter.type = paramType;

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();
      this.parameter.description = description;

      let text = `@returns {${this.parameter.type}}`;
      if (description) {
        text += ` ${this.parameter.description}`;
      }

      return text;
    } else {
      return `${this.type} ${this.content}`;
    }
  }

  static get TYPE() {
    return {
      OTHER: '@',
      PARAM: '@param',
      RETURN: '@return'
    }
  }
}

module.exports = TagLine;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Represents a change in source code type at a particular index.
 */
var SourceLocation = (function () {
    function SourceLocation(type, index) {
        this.type = type;
        this.index = index;
    }
    return SourceLocation;
}());
exports["default"] = SourceLocation;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {// Generated by CoffeeScript 1.10.0
(function() {
  var Lexer, SourceMap, base, compile, ext, formatSourcePosition, fs, getSourceMap, helpers, i, len, lexer, parser, path, ref, sourceMaps, vm, withPrettyErrors,
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  vm = __webpack_require__(34);

  path = __webpack_require__(4);

  Lexer = __webpack_require__(10).Lexer;

  parser = __webpack_require__(24).parser;

  helpers = __webpack_require__(2);

  SourceMap = __webpack_require__(28);

  exports.VERSION = '1.10.0';

  exports.FILE_EXTENSIONS = ['.coffee', '.litcoffee', '.coffee.md'];

  exports.helpers = helpers;

  withPrettyErrors = function(fn) {
    return function(code, options) {
      var err, error;
      if (options == null) {
        options = {};
      }
      try {
        return fn.call(this, code, options);
      } catch (error) {
        err = error;
        if (typeof code !== 'string') {
          throw err;
        }
        throw helpers.updateSyntaxError(err, code, options.filename);
      }
    };
  };

  exports.compile = compile = withPrettyErrors(function(code, options) {
    var answer, currentColumn, currentLine, extend, fragment, fragments, header, i, js, len, map, merge, newLines, token, tokens;
    merge = helpers.merge, extend = helpers.extend;
    options = extend({}, options);
    if (options.sourceMap) {
      map = new SourceMap;
    }
    tokens = lexer.tokenize(code, options);
    options.referencedVars = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = tokens.length; i < len; i++) {
        token = tokens[i];
        if (token.variable) {
          results.push(token[1]);
        }
      }
      return results;
    })();
    fragments = parser.parse(tokens).compileToFragments(options);
    currentLine = 0;
    if (options.header) {
      currentLine += 1;
    }
    if (options.shiftLine) {
      currentLine += 1;
    }
    currentColumn = 0;
    js = "";
    for (i = 0, len = fragments.length; i < len; i++) {
      fragment = fragments[i];
      if (options.sourceMap) {
        if (fragment.locationData && !/^[;\s]*$/.test(fragment.code)) {
          map.add([fragment.locationData.first_line, fragment.locationData.first_column], [currentLine, currentColumn], {
            noReplace: true
          });
        }
        newLines = helpers.count(fragment.code, "\n");
        currentLine += newLines;
        if (newLines) {
          currentColumn = fragment.code.length - (fragment.code.lastIndexOf("\n") + 1);
        } else {
          currentColumn += fragment.code.length;
        }
      }
      js += fragment.code;
    }
    if (options.header) {
      header = "Generated by CoffeeScript " + this.VERSION;
      js = "// " + header + "\n" + js;
    }
    if (options.sourceMap) {
      answer = {
        js: js
      };
      answer.sourceMap = map;
      answer.v3SourceMap = map.generate(options, code);
      return answer;
    } else {
      return js;
    }
  });

  exports.tokens = withPrettyErrors(function(code, options) {
    return lexer.tokenize(code, options);
  });

  exports.nodes = withPrettyErrors(function(source, options) {
    if (typeof source === 'string') {
      return parser.parse(lexer.tokenize(source, options));
    } else {
      return parser.parse(source);
    }
  });

  exports.run = function(code, options) {
    var answer, dir, mainModule, ref;
    if (options == null) {
      options = {};
    }
    mainModule = __webpack_require__.c[__webpack_require__.s];
    mainModule.filename = process.argv[1] = options.filename ? fs.realpathSync(options.filename) : '.';
    mainModule.moduleCache && (mainModule.moduleCache = {});
    dir = options.filename ? path.dirname(fs.realpathSync(options.filename)) : fs.realpathSync('.');
    mainModule.paths = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))._nodeModulePaths(dir);
    if (!helpers.isCoffee(mainModule.filename) || (void 0)) {
      answer = compile(code, options);
      code = (ref = answer.js) != null ? ref : answer;
    }
    return mainModule._compile(code, mainModule.filename);
  };

  exports["eval"] = function(code, options) {
    var Module, _module, _require, createContext, i, isContext, js, k, len, o, r, ref, ref1, ref2, ref3, sandbox, v;
    if (options == null) {
      options = {};
    }
    if (!(code = code.trim())) {
      return;
    }
    createContext = (ref = vm.Script.createContext) != null ? ref : vm.createContext;
    isContext = (ref1 = vm.isContext) != null ? ref1 : function(ctx) {
      return options.sandbox instanceof createContext().constructor;
    };
    if (createContext) {
      if (options.sandbox != null) {
        if (isContext(options.sandbox)) {
          sandbox = options.sandbox;
        } else {
          sandbox = createContext();
          ref2 = options.sandbox;
          for (k in ref2) {
            if (!hasProp.call(ref2, k)) continue;
            v = ref2[k];
            sandbox[k] = v;
          }
        }
        sandbox.global = sandbox.root = sandbox.GLOBAL = sandbox;
      } else {
        sandbox = global;
      }
      sandbox.__filename = options.filename || 'eval';
      sandbox.__dirname = path.dirname(sandbox.__filename);
      if (!(sandbox !== global || sandbox.module || sandbox.require)) {
        Module = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        sandbox.module = _module = new Module(options.modulename || 'eval');
        sandbox.require = _require = function(path) {
          return Module._load(path, _module, true);
        };
        _module.filename = sandbox.__filename;
        ref3 = Object.getOwnPropertyNames(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        for (i = 0, len = ref3.length; i < len; i++) {
          r = ref3[i];
          if (r !== 'paths' && r !== 'arguments' && r !== 'caller') {
            _require[r] = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())[r];
          }
        }
        _require.paths = _module.paths = Module._nodeModulePaths(process.cwd());
        _require.resolve = function(request) {
          return Module._resolveFilename(request, _module);
        };
      }
    }
    o = {};
    for (k in options) {
      if (!hasProp.call(options, k)) continue;
      v = options[k];
      o[k] = v;
    }
    o.bare = true;
    js = compile(code, o);
    if (sandbox === global) {
      return vm.runInThisContext(js);
    } else {
      return vm.runInContext(js, sandbox);
    }
  };

  exports.register = function() {
    return __webpack_require__(25);
  };

  if ((void 0)) {
    ref = this.FILE_EXTENSIONS;
    for (i = 0, len = ref.length; i < len; i++) {
      ext = ref[i];
      if ((base = (void 0))[ext] == null) {
        base[ext] = function() {
          throw new Error("Use CoffeeScript.register() or require the coffee-script/register module to require " + ext + " files.");
        };
      }
    }
  }

  exports._compileFile = function(filename, sourceMap) {
    var answer, err, error, raw, stripped;
    if (sourceMap == null) {
      sourceMap = false;
    }
    raw = fs.readFileSync(filename, 'utf8');
    stripped = raw.charCodeAt(0) === 0xFEFF ? raw.substring(1) : raw;
    try {
      answer = compile(stripped, {
        filename: filename,
        sourceMap: sourceMap,
        literate: helpers.isLiterate(filename)
      });
    } catch (error) {
      err = error;
      throw helpers.updateSyntaxError(err, stripped, filename);
    }
    return answer;
  };

  lexer = new Lexer;

  parser.lexer = {
    lex: function() {
      var tag, token;
      token = parser.tokens[this.pos++];
      if (token) {
        tag = token[0], this.yytext = token[1], this.yylloc = token[2];
        parser.errorToken = token.origin || token;
        this.yylineno = this.yylloc.first_line;
      } else {
        tag = '';
      }
      return tag;
    },
    setInput: function(tokens) {
      parser.tokens = tokens;
      return this.pos = 0;
    },
    upcomingInput: function() {
      return "";
    }
  };

  parser.yy = __webpack_require__(11);

  parser.yy.parseError = function(message, arg) {
    var errorLoc, errorTag, errorText, errorToken, token, tokens;
    token = arg.token;
    errorToken = parser.errorToken, tokens = parser.tokens;
    errorTag = errorToken[0], errorText = errorToken[1], errorLoc = errorToken[2];
    errorText = (function() {
      switch (false) {
        case errorToken !== tokens[tokens.length - 1]:
          return 'end of input';
        case errorTag !== 'INDENT' && errorTag !== 'OUTDENT':
          return 'indentation';
        case errorTag !== 'IDENTIFIER' && errorTag !== 'NUMBER' && errorTag !== 'STRING' && errorTag !== 'STRING_START' && errorTag !== 'REGEX' && errorTag !== 'REGEX_START':
          return errorTag.replace(/_START$/, '').toLowerCase();
        default:
          return helpers.nameWhitespaceCharacter(errorText);
      }
    })();
    return helpers.throwSyntaxError("unexpected " + errorText, errorLoc);
  };

  formatSourcePosition = function(frame, getSourceMapping) {
    var as, column, fileLocation, fileName, functionName, isConstructor, isMethodCall, line, methodName, source, tp, typeName;
    fileName = void 0;
    fileLocation = '';
    if (frame.isNative()) {
      fileLocation = "native";
    } else {
      if (frame.isEval()) {
        fileName = frame.getScriptNameOrSourceURL();
        if (!fileName) {
          fileLocation = (frame.getEvalOrigin()) + ", ";
        }
      } else {
        fileName = frame.getFileName();
      }
      fileName || (fileName = "<anonymous>");
      line = frame.getLineNumber();
      column = frame.getColumnNumber();
      source = getSourceMapping(fileName, line, column);
      fileLocation = source ? fileName + ":" + source[0] + ":" + source[1] : fileName + ":" + line + ":" + column;
    }
    functionName = frame.getFunctionName();
    isConstructor = frame.isConstructor();
    isMethodCall = !(frame.isToplevel() || isConstructor);
    if (isMethodCall) {
      methodName = frame.getMethodName();
      typeName = frame.getTypeName();
      if (functionName) {
        tp = as = '';
        if (typeName && functionName.indexOf(typeName)) {
          tp = typeName + ".";
        }
        if (methodName && functionName.indexOf("." + methodName) !== functionName.length - methodName.length - 1) {
          as = " [as " + methodName + "]";
        }
        return "" + tp + functionName + as + " (" + fileLocation + ")";
      } else {
        return typeName + "." + (methodName || '<anonymous>') + " (" + fileLocation + ")";
      }
    } else if (isConstructor) {
      return "new " + (functionName || '<anonymous>') + " (" + fileLocation + ")";
    } else if (functionName) {
      return functionName + " (" + fileLocation + ")";
    } else {
      return fileLocation;
    }
  };

  sourceMaps = {};

  getSourceMap = function(filename) {
    var answer, ref1;
    if (sourceMaps[filename]) {
      return sourceMaps[filename];
    }
    if (ref1 = path != null ? path.extname(filename) : void 0, indexOf.call(exports.FILE_EXTENSIONS, ref1) < 0) {
      return;
    }
    answer = exports._compileFile(filename, true);
    return sourceMaps[filename] = answer.sourceMap;
  };

  Error.prepareStackTrace = function(err, stack) {
    var frame, frames, getSourceMapping;
    getSourceMapping = function(filename, line, column) {
      var answer, sourceMap;
      sourceMap = getSourceMap(filename);
      if (sourceMap) {
        answer = sourceMap.sourceLocation([line - 1, column - 1]);
      }
      if (answer) {
        return [answer[0] + 1, answer[1] + 1];
      } else {
        return null;
      }
    };
    frames = (function() {
      var j, len1, results;
      results = [];
      for (j = 0, len1 = stack.length; j < len1; j++) {
        frame = stack[j];
        if (frame.getFunction() === exports.run) {
          break;
        }
        results.push("  at " + (formatSourcePosition(frame, getSourceMapping)));
      }
      return results;
    })();
    return (err.toString()) + "\n" + (frames.join('\n')) + "\n";
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(12)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.10.0
(function() {
  var BOM, BOOL, CALLABLE, CODE, COFFEE_ALIASES, COFFEE_ALIAS_MAP, COFFEE_KEYWORDS, COMMENT, COMPARE, COMPOUND_ASSIGN, HERECOMMENT_ILLEGAL, HEREDOC_DOUBLE, HEREDOC_INDENT, HEREDOC_SINGLE, HEREGEX, HEREGEX_OMIT, IDENTIFIER, INDENTABLE_CLOSERS, INDEXABLE, INVALID_ESCAPE, INVERSES, JSTOKEN, JS_FORBIDDEN, JS_KEYWORDS, LEADING_BLANK_LINE, LINE_BREAK, LINE_CONTINUER, Lexer, MATH, MULTI_DENT, NOT_REGEX, NUMBER, OPERATOR, POSSIBLY_DIVISION, REGEX, REGEX_FLAGS, REGEX_ILLEGAL, RELATION, RESERVED, Rewriter, SHIFT, SIMPLE_STRING_OMIT, STRICT_PROSCRIBED, STRING_DOUBLE, STRING_OMIT, STRING_SINGLE, STRING_START, TRAILING_BLANK_LINE, TRAILING_SPACES, UNARY, UNARY_MATH, VALID_FLAGS, WHITESPACE, compact, count, invertLiterate, key, locationDataToString, ref, ref1, repeat, starts, throwSyntaxError,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ref = __webpack_require__(26), Rewriter = ref.Rewriter, INVERSES = ref.INVERSES;

  ref1 = __webpack_require__(2), count = ref1.count, starts = ref1.starts, compact = ref1.compact, repeat = ref1.repeat, invertLiterate = ref1.invertLiterate, locationDataToString = ref1.locationDataToString, throwSyntaxError = ref1.throwSyntaxError;

  exports.Lexer = Lexer = (function() {
    function Lexer() {}

    Lexer.prototype.tokenize = function(code, opts) {
      var consumed, end, i, ref2;
      if (opts == null) {
        opts = {};
      }
      this.literate = opts.literate;
      this.indent = 0;
      this.baseIndent = 0;
      this.indebt = 0;
      this.outdebt = 0;
      this.indents = [];
      this.ends = [];
      this.tokens = [];
      this.seenFor = false;
      this.chunkLine = opts.line || 0;
      this.chunkColumn = opts.column || 0;
      code = this.clean(code);
      i = 0;
      while (this.chunk = code.slice(i)) {
        consumed = this.identifierToken() || this.commentToken() || this.whitespaceToken() || this.lineToken() || this.stringToken() || this.numberToken() || this.regexToken() || this.jsToken() || this.literalToken();
        ref2 = this.getLineAndColumnFromChunk(consumed), this.chunkLine = ref2[0], this.chunkColumn = ref2[1];
        i += consumed;
        if (opts.untilBalanced && this.ends.length === 0) {
          return {
            tokens: this.tokens,
            index: i
          };
        }
      }
      this.closeIndentation();
      if (end = this.ends.pop()) {
        this.error("missing " + end.tag, end.origin[2]);
      }
      if (opts.rewrite === false) {
        return this.tokens;
      }
      return (new Rewriter).rewrite(this.tokens);
    };

    Lexer.prototype.clean = function(code) {
      if (code.charCodeAt(0) === BOM) {
        code = code.slice(1);
      }
      code = code.replace(/\r/g, '').replace(TRAILING_SPACES, '');
      if (WHITESPACE.test(code)) {
        code = "\n" + code;
        this.chunkLine--;
      }
      if (this.literate) {
        code = invertLiterate(code);
      }
      return code;
    };

    Lexer.prototype.identifierToken = function() {
      var alias, colon, colonOffset, forcedIdentifier, id, idLength, input, match, poppedToken, prev, ref2, ref3, ref4, ref5, tag, tagToken;
      if (!(match = IDENTIFIER.exec(this.chunk))) {
        return 0;
      }
      input = match[0], id = match[1], colon = match[2];
      idLength = id.length;
      poppedToken = void 0;
      if (id === 'own' && this.tag() === 'FOR') {
        this.token('OWN', id);
        return id.length;
      }
      if (id === 'from' && this.tag() === 'YIELD') {
        this.token('FROM', id);
        return id.length;
      }
      ref2 = this.tokens, prev = ref2[ref2.length - 1];
      forcedIdentifier = colon || (prev != null) && (((ref3 = prev[0]) === '.' || ref3 === '?.' || ref3 === '::' || ref3 === '?::') || !prev.spaced && prev[0] === '@');
      tag = 'IDENTIFIER';
      if (!forcedIdentifier && (indexOf.call(JS_KEYWORDS, id) >= 0 || indexOf.call(COFFEE_KEYWORDS, id) >= 0)) {
        tag = id.toUpperCase();
        if (tag === 'WHEN' && (ref4 = this.tag(), indexOf.call(LINE_BREAK, ref4) >= 0)) {
          tag = 'LEADING_WHEN';
        } else if (tag === 'FOR') {
          this.seenFor = true;
        } else if (tag === 'UNLESS') {
          tag = 'IF';
        } else if (indexOf.call(UNARY, tag) >= 0) {
          tag = 'UNARY';
        } else if (indexOf.call(RELATION, tag) >= 0) {
          if (tag !== 'INSTANCEOF' && this.seenFor) {
            tag = 'FOR' + tag;
            this.seenFor = false;
          } else {
            tag = 'RELATION';
            if (this.value() === '!') {
              poppedToken = this.tokens.pop();
              id = '!' + id;
            }
          }
        }
      }
      if (indexOf.call(JS_FORBIDDEN, id) >= 0) {
        if (forcedIdentifier) {
          tag = 'IDENTIFIER';
          id = new String(id);
          id.reserved = true;
        } else if (indexOf.call(RESERVED, id) >= 0) {
          this.error("reserved word '" + id + "'", {
            length: id.length
          });
        }
      }
      if (!forcedIdentifier) {
        if (indexOf.call(COFFEE_ALIASES, id) >= 0) {
          alias = id;
          id = COFFEE_ALIAS_MAP[id];
        }
        tag = (function() {
          switch (id) {
            case '!':
              return 'UNARY';
            case '==':
            case '!=':
              return 'COMPARE';
            case 'true':
            case 'false':
              return 'BOOL';
            case 'break':
            case 'continue':
              return 'STATEMENT';
            case '&&':
            case '||':
              return id;
            default:
              return tag;
          }
        })();
      }
      tagToken = this.token(tag, id, 0, idLength);
      if (alias) {
        tagToken.origin = [tag, alias, tagToken[2]];
      }
      tagToken.variable = !forcedIdentifier;
      if (poppedToken) {
        ref5 = [poppedToken[2].first_line, poppedToken[2].first_column], tagToken[2].first_line = ref5[0], tagToken[2].first_column = ref5[1];
      }
      if (colon) {
        colonOffset = input.lastIndexOf(':');
        this.token(':', ':', colonOffset, colon.length);
      }
      return input.length;
    };

    Lexer.prototype.numberToken = function() {
      var binaryLiteral, lexedLength, match, number, octalLiteral;
      if (!(match = NUMBER.exec(this.chunk))) {
        return 0;
      }
      number = match[0];
      lexedLength = number.length;
      if (/^0[BOX]/.test(number)) {
        this.error("radix prefix in '" + number + "' must be lowercase", {
          offset: 1
        });
      } else if (/E/.test(number) && !/^0x/.test(number)) {
        this.error("exponential notation in '" + number + "' must be indicated with a lowercase 'e'", {
          offset: number.indexOf('E')
        });
      } else if (/^0\d*[89]/.test(number)) {
        this.error("decimal literal '" + number + "' must not be prefixed with '0'", {
          length: lexedLength
        });
      } else if (/^0\d+/.test(number)) {
        this.error("octal literal '" + number + "' must be prefixed with '0o'", {
          length: lexedLength
        });
      }
      if (octalLiteral = /^0o([0-7]+)/.exec(number)) {
        number = '0x' + parseInt(octalLiteral[1], 8).toString(16);
      }
      if (binaryLiteral = /^0b([01]+)/.exec(number)) {
        number = '0x' + parseInt(binaryLiteral[1], 2).toString(16);
      }
      this.token('NUMBER', number, 0, lexedLength);
      return lexedLength;
    };

    Lexer.prototype.stringToken = function() {
      var $, attempt, delimiter, doc, end, heredoc, i, indent, indentRegex, match, quote, ref2, ref3, regex, token, tokens;
      quote = (STRING_START.exec(this.chunk) || [])[0];
      if (!quote) {
        return 0;
      }
      regex = (function() {
        switch (quote) {
          case "'":
            return STRING_SINGLE;
          case '"':
            return STRING_DOUBLE;
          case "'''":
            return HEREDOC_SINGLE;
          case '"""':
            return HEREDOC_DOUBLE;
        }
      })();
      heredoc = quote.length === 3;
      ref2 = this.matchWithInterpolations(regex, quote), tokens = ref2.tokens, end = ref2.index;
      $ = tokens.length - 1;
      delimiter = quote.charAt(0);
      if (heredoc) {
        indent = null;
        doc = ((function() {
          var j, len, results;
          results = [];
          for (i = j = 0, len = tokens.length; j < len; i = ++j) {
            token = tokens[i];
            if (token[0] === 'NEOSTRING') {
              results.push(token[1]);
            }
          }
          return results;
        })()).join('#{}');
        while (match = HEREDOC_INDENT.exec(doc)) {
          attempt = match[1];
          if (indent === null || (0 < (ref3 = attempt.length) && ref3 < indent.length)) {
            indent = attempt;
          }
        }
        if (indent) {
          indentRegex = RegExp("^" + indent, "gm");
        }
        this.mergeInterpolationTokens(tokens, {
          delimiter: delimiter
        }, (function(_this) {
          return function(value, i) {
            value = _this.formatString(value);
            if (i === 0) {
              value = value.replace(LEADING_BLANK_LINE, '');
            }
            if (i === $) {
              value = value.replace(TRAILING_BLANK_LINE, '');
            }
            if (indentRegex) {
              value = value.replace(indentRegex, '');
            }
            return value;
          };
        })(this));
      } else {
        this.mergeInterpolationTokens(tokens, {
          delimiter: delimiter
        }, (function(_this) {
          return function(value, i) {
            value = _this.formatString(value);
            value = value.replace(SIMPLE_STRING_OMIT, function(match, offset) {
              if ((i === 0 && offset === 0) || (i === $ && offset + match.length === value.length)) {
                return '';
              } else {
                return ' ';
              }
            });
            return value;
          };
        })(this));
      }
      return end;
    };

    Lexer.prototype.commentToken = function() {
      var comment, here, match;
      if (!(match = this.chunk.match(COMMENT))) {
        return 0;
      }
      comment = match[0], here = match[1];
      if (here) {
        if (match = HERECOMMENT_ILLEGAL.exec(comment)) {
          this.error("block comments cannot contain " + match[0], {
            offset: match.index,
            length: match[0].length
          });
        }
        if (here.indexOf('\n') >= 0) {
          here = here.replace(RegExp("\\n" + (repeat(' ', this.indent)), "g"), '\n');
        }
        this.token('HERECOMMENT', here, 0, comment.length);
      }
      return comment.length;
    };

    Lexer.prototype.jsToken = function() {
      var match, script;
      if (!(this.chunk.charAt(0) === '`' && (match = JSTOKEN.exec(this.chunk)))) {
        return 0;
      }
      this.token('JS', (script = match[0]).slice(1, -1), 0, script.length);
      return script.length;
    };

    Lexer.prototype.regexToken = function() {
      var body, closed, end, flags, index, match, origin, prev, ref2, ref3, ref4, regex, tokens;
      switch (false) {
        case !(match = REGEX_ILLEGAL.exec(this.chunk)):
          this.error("regular expressions cannot begin with " + match[2], {
            offset: match.index + match[1].length
          });
          break;
        case !(match = this.matchWithInterpolations(HEREGEX, '///')):
          tokens = match.tokens, index = match.index;
          break;
        case !(match = REGEX.exec(this.chunk)):
          regex = match[0], body = match[1], closed = match[2];
          this.validateEscapes(body, {
            isRegex: true,
            offsetInChunk: 1
          });
          index = regex.length;
          ref2 = this.tokens, prev = ref2[ref2.length - 1];
          if (prev) {
            if (prev.spaced && (ref3 = prev[0], indexOf.call(CALLABLE, ref3) >= 0)) {
              if (!closed || POSSIBLY_DIVISION.test(regex)) {
                return 0;
              }
            } else if (ref4 = prev[0], indexOf.call(NOT_REGEX, ref4) >= 0) {
              return 0;
            }
          }
          if (!closed) {
            this.error('missing / (unclosed regex)');
          }
          break;
        default:
          return 0;
      }
      flags = REGEX_FLAGS.exec(this.chunk.slice(index))[0];
      end = index + flags.length;
      origin = this.makeToken('REGEX', null, 0, end);
      switch (false) {
        case !!VALID_FLAGS.test(flags):
          this.error("invalid regular expression flags " + flags, {
            offset: index,
            length: flags.length
          });
          break;
        case !(regex || tokens.length === 1):
          if (body == null) {
            body = this.formatHeregex(tokens[0][1]);
          }
          this.token('REGEX', "" + (this.makeDelimitedLiteral(body, {
            delimiter: '/'
          })) + flags, 0, end, origin);
          break;
        default:
          this.token('REGEX_START', '(', 0, 0, origin);
          this.token('IDENTIFIER', 'RegExp', 0, 0);
          this.token('CALL_START', '(', 0, 0);
          this.mergeInterpolationTokens(tokens, {
            delimiter: '"',
            double: true
          }, this.formatHeregex);
          if (flags) {
            this.token(',', ',', index - 1, 0);
            this.token('STRING', '"' + flags + '"', index - 1, flags.length);
          }
          this.token(')', ')', end - 1, 0);
          this.token('REGEX_END', ')', end - 1, 0);
      }
      return end;
    };

    Lexer.prototype.lineToken = function() {
      var diff, indent, match, noNewlines, size;
      if (!(match = MULTI_DENT.exec(this.chunk))) {
        return 0;
      }
      indent = match[0];
      this.seenFor = false;
      size = indent.length - 1 - indent.lastIndexOf('\n');
      noNewlines = this.unfinished();
      if (size - this.indebt === this.indent) {
        if (noNewlines) {
          this.suppressNewlines();
        } else {
          this.newlineToken(0);
        }
        return indent.length;
      }
      if (size > this.indent) {
        if (noNewlines) {
          this.indebt = size - this.indent;
          this.suppressNewlines();
          return indent.length;
        }
        if (!this.tokens.length) {
          this.baseIndent = this.indent = size;
          return indent.length;
        }
        diff = size - this.indent + this.outdebt;
        this.token('INDENT', diff, indent.length - size, size);
        this.indents.push(diff);
        this.ends.push({
          tag: 'OUTDENT'
        });
        this.outdebt = this.indebt = 0;
        this.indent = size;
      } else if (size < this.baseIndent) {
        this.error('missing indentation', {
          offset: indent.length
        });
      } else {
        this.indebt = 0;
        this.outdentToken(this.indent - size, noNewlines, indent.length);
      }
      return indent.length;
    };

    Lexer.prototype.outdentToken = function(moveOut, noNewlines, outdentLength) {
      var decreasedIndent, dent, lastIndent, ref2;
      decreasedIndent = this.indent - moveOut;
      while (moveOut > 0) {
        lastIndent = this.indents[this.indents.length - 1];
        if (!lastIndent) {
          moveOut = 0;
        } else if (lastIndent === this.outdebt) {
          moveOut -= this.outdebt;
          this.outdebt = 0;
        } else if (lastIndent < this.outdebt) {
          this.outdebt -= lastIndent;
          moveOut -= lastIndent;
        } else {
          dent = this.indents.pop() + this.outdebt;
          if (outdentLength && (ref2 = this.chunk[outdentLength], indexOf.call(INDENTABLE_CLOSERS, ref2) >= 0)) {
            decreasedIndent -= dent - moveOut;
            moveOut = dent;
          }
          this.outdebt = 0;
          this.pair('OUTDENT');
          this.token('OUTDENT', moveOut, 0, outdentLength);
          moveOut -= dent;
        }
      }
      if (dent) {
        this.outdebt -= moveOut;
      }
      while (this.value() === ';') {
        this.tokens.pop();
      }
      if (!(this.tag() === 'TERMINATOR' || noNewlines)) {
        this.token('TERMINATOR', '\n', outdentLength, 0);
      }
      this.indent = decreasedIndent;
      return this;
    };

    Lexer.prototype.whitespaceToken = function() {
      var match, nline, prev, ref2;
      if (!((match = WHITESPACE.exec(this.chunk)) || (nline = this.chunk.charAt(0) === '\n'))) {
        return 0;
      }
      ref2 = this.tokens, prev = ref2[ref2.length - 1];
      if (prev) {
        prev[match ? 'spaced' : 'newLine'] = true;
      }
      if (match) {
        return match[0].length;
      } else {
        return 0;
      }
    };

    Lexer.prototype.newlineToken = function(offset) {
      while (this.value() === ';') {
        this.tokens.pop();
      }
      if (this.tag() !== 'TERMINATOR') {
        this.token('TERMINATOR', '\n', offset, 0);
      }
      return this;
    };

    Lexer.prototype.suppressNewlines = function() {
      if (this.value() === '\\') {
        this.tokens.pop();
      }
      return this;
    };

    Lexer.prototype.literalToken = function() {
      var match, prev, ref2, ref3, ref4, ref5, ref6, tag, token, value;
      if (match = OPERATOR.exec(this.chunk)) {
        value = match[0];
        if (CODE.test(value)) {
          this.tagParameters();
        }
      } else {
        value = this.chunk.charAt(0);
      }
      tag = value;
      ref2 = this.tokens, prev = ref2[ref2.length - 1];
      if (value === '=' && prev) {
        if (!prev[1].reserved && (ref3 = prev[1], indexOf.call(JS_FORBIDDEN, ref3) >= 0)) {
          if (prev.origin) {
            prev = prev.origin;
          }
          this.error("reserved word '" + prev[1] + "' can't be assigned", prev[2]);
        }
        if ((ref4 = prev[1]) === '||' || ref4 === '&&') {
          prev[0] = 'COMPOUND_ASSIGN';
          prev[1] += '=';
          return value.length;
        }
      }
      if (value === ';') {
        this.seenFor = false;
        tag = 'TERMINATOR';
      } else if (indexOf.call(MATH, value) >= 0) {
        tag = 'MATH';
      } else if (indexOf.call(COMPARE, value) >= 0) {
        tag = 'COMPARE';
      } else if (indexOf.call(COMPOUND_ASSIGN, value) >= 0) {
        tag = 'COMPOUND_ASSIGN';
      } else if (indexOf.call(UNARY, value) >= 0) {
        tag = 'UNARY';
      } else if (indexOf.call(UNARY_MATH, value) >= 0) {
        tag = 'UNARY_MATH';
      } else if (indexOf.call(SHIFT, value) >= 0) {
        tag = 'SHIFT';
      } else if (value === '?' && (prev != null ? prev.spaced : void 0)) {
        tag = 'BIN?';
      } else if (prev && !prev.spaced) {
        if (value === '(' && (ref5 = prev[0], indexOf.call(CALLABLE, ref5) >= 0)) {
          if (prev[0] === '?') {
            prev[0] = 'FUNC_EXIST';
          }
          tag = 'CALL_START';
        } else if (value === '[' && (ref6 = prev[0], indexOf.call(INDEXABLE, ref6) >= 0)) {
          tag = 'INDEX_START';
          switch (prev[0]) {
            case '?':
              prev[0] = 'INDEX_SOAK';
          }
        }
      }
      token = this.makeToken(tag, value);
      switch (value) {
        case '(':
        case '{':
        case '[':
          this.ends.push({
            tag: INVERSES[value],
            origin: token
          });
          break;
        case ')':
        case '}':
        case ']':
          this.pair(value);
      }
      this.tokens.push(token);
      return value.length;
    };

    Lexer.prototype.tagParameters = function() {
      var i, stack, tok, tokens;
      if (this.tag() !== ')') {
        return this;
      }
      stack = [];
      tokens = this.tokens;
      i = tokens.length;
      tokens[--i][0] = 'PARAM_END';
      while (tok = tokens[--i]) {
        switch (tok[0]) {
          case ')':
            stack.push(tok);
            break;
          case '(':
          case 'CALL_START':
            if (stack.length) {
              stack.pop();
            } else if (tok[0] === '(') {
              tok[0] = 'PARAM_START';
              return this;
            } else {
              return this;
            }
        }
      }
      return this;
    };

    Lexer.prototype.closeIndentation = function() {
      return this.outdentToken(this.indent);
    };

    Lexer.prototype.matchWithInterpolations = function(regex, delimiter) {
      var close, column, firstToken, index, lastToken, line, nested, offsetInChunk, open, ref2, ref3, ref4, str, strPart, tokens;
      tokens = [];
      offsetInChunk = delimiter.length;
      if (this.chunk.slice(0, offsetInChunk) !== delimiter) {
        return null;
      }
      str = this.chunk.slice(offsetInChunk);
      while (true) {
        strPart = regex.exec(str)[0];
        this.validateEscapes(strPart, {
          isRegex: delimiter.charAt(0) === '/',
          offsetInChunk: offsetInChunk
        });
        tokens.push(this.makeToken('NEOSTRING', strPart, offsetInChunk));
        str = str.slice(strPart.length);
        offsetInChunk += strPart.length;
        if (str.slice(0, 2) !== '#{') {
          break;
        }
        ref2 = this.getLineAndColumnFromChunk(offsetInChunk + 1), line = ref2[0], column = ref2[1];
        ref3 = new Lexer().tokenize(str.slice(1), {
          line: line,
          column: column,
          untilBalanced: true
        }), nested = ref3.tokens, index = ref3.index;
        index += 1;
        open = nested[0], close = nested[nested.length - 1];
        open[0] = open[1] = '(';
        close[0] = close[1] = ')';
        close.origin = ['', 'end of interpolation', close[2]];
        if (((ref4 = nested[1]) != null ? ref4[0] : void 0) === 'TERMINATOR') {
          nested.splice(1, 1);
        }
        tokens.push(['TOKENS', nested]);
        str = str.slice(index);
        offsetInChunk += index;
      }
      if (str.slice(0, delimiter.length) !== delimiter) {
        this.error("missing " + delimiter, {
          length: delimiter.length
        });
      }
      firstToken = tokens[0], lastToken = tokens[tokens.length - 1];
      firstToken[2].first_column -= delimiter.length;
      if (lastToken[1].substr(-1) === '\n') {
        lastToken[2].last_line += 1;
        lastToken[2].last_column = delimiter.length - 1;
      } else {
        lastToken[2].last_column += delimiter.length;
      }
      if (lastToken[1].length === 0) {
        lastToken[2].last_column -= 1;
      }
      return {
        tokens: tokens,
        index: offsetInChunk + delimiter.length
      };
    };

    Lexer.prototype.mergeInterpolationTokens = function(tokens, options, fn) {
      var converted, firstEmptyStringIndex, firstIndex, i, j, lastToken, len, locationToken, lparen, plusToken, ref2, rparen, tag, token, tokensToPush, value;
      if (tokens.length > 1) {
        lparen = this.token('STRING_START', '(', 0, 0);
      }
      firstIndex = this.tokens.length;
      for (i = j = 0, len = tokens.length; j < len; i = ++j) {
        token = tokens[i];
        tag = token[0], value = token[1];
        switch (tag) {
          case 'TOKENS':
            if (value.length === 2) {
              continue;
            }
            locationToken = value[0];
            tokensToPush = value;
            break;
          case 'NEOSTRING':
            converted = fn(token[1], i);
            if (converted.length === 0) {
              if (i === 0) {
                firstEmptyStringIndex = this.tokens.length;
              } else {
                continue;
              }
            }
            if (i === 2 && (firstEmptyStringIndex != null)) {
              this.tokens.splice(firstEmptyStringIndex, 2);
            }
            token[0] = 'STRING';
            token[1] = this.makeDelimitedLiteral(converted, options);
            locationToken = token;
            tokensToPush = [token];
        }
        if (this.tokens.length > firstIndex) {
          plusToken = this.token('+', '+');
          plusToken[2] = {
            first_line: locationToken[2].first_line,
            first_column: locationToken[2].first_column,
            last_line: locationToken[2].first_line,
            last_column: locationToken[2].first_column
          };
        }
        (ref2 = this.tokens).push.apply(ref2, tokensToPush);
      }
      if (lparen) {
        lastToken = tokens[tokens.length - 1];
        lparen.origin = [
          'STRING', null, {
            first_line: lparen[2].first_line,
            first_column: lparen[2].first_column,
            last_line: lastToken[2].last_line,
            last_column: lastToken[2].last_column
          }
        ];
        rparen = this.token('STRING_END', ')');
        return rparen[2] = {
          first_line: lastToken[2].last_line,
          first_column: lastToken[2].last_column,
          last_line: lastToken[2].last_line,
          last_column: lastToken[2].last_column
        };
      }
    };

    Lexer.prototype.pair = function(tag) {
      var lastIndent, prev, ref2, ref3, wanted;
      ref2 = this.ends, prev = ref2[ref2.length - 1];
      if (tag !== (wanted = prev != null ? prev.tag : void 0)) {
        if ('OUTDENT' !== wanted) {
          this.error("unmatched " + tag);
        }
        ref3 = this.indents, lastIndent = ref3[ref3.length - 1];
        this.outdentToken(lastIndent, true);
        return this.pair(tag);
      }
      return this.ends.pop();
    };

    Lexer.prototype.getLineAndColumnFromChunk = function(offset) {
      var column, lastLine, lineCount, ref2, string;
      if (offset === 0) {
        return [this.chunkLine, this.chunkColumn];
      }
      if (offset >= this.chunk.length) {
        string = this.chunk;
      } else {
        string = this.chunk.slice(0, +(offset - 1) + 1 || 9e9);
      }
      lineCount = count(string, '\n');
      column = this.chunkColumn;
      if (lineCount > 0) {
        ref2 = string.split('\n'), lastLine = ref2[ref2.length - 1];
        column = lastLine.length;
      } else {
        column += string.length;
      }
      return [this.chunkLine + lineCount, column];
    };

    Lexer.prototype.makeToken = function(tag, value, offsetInChunk, length) {
      var lastCharacter, locationData, ref2, ref3, token;
      if (offsetInChunk == null) {
        offsetInChunk = 0;
      }
      if (length == null) {
        length = value.length;
      }
      locationData = {};
      ref2 = this.getLineAndColumnFromChunk(offsetInChunk), locationData.first_line = ref2[0], locationData.first_column = ref2[1];
      lastCharacter = length > 0 ? length - 1 : 0;
      ref3 = this.getLineAndColumnFromChunk(offsetInChunk + lastCharacter), locationData.last_line = ref3[0], locationData.last_column = ref3[1];
      token = [tag, value, locationData];
      return token;
    };

    Lexer.prototype.token = function(tag, value, offsetInChunk, length, origin) {
      var token;
      token = this.makeToken(tag, value, offsetInChunk, length);
      if (origin) {
        token.origin = origin;
      }
      this.tokens.push(token);
      return token;
    };

    Lexer.prototype.tag = function() {
      var ref2, token;
      ref2 = this.tokens, token = ref2[ref2.length - 1];
      return token != null ? token[0] : void 0;
    };

    Lexer.prototype.value = function() {
      var ref2, token;
      ref2 = this.tokens, token = ref2[ref2.length - 1];
      return token != null ? token[1] : void 0;
    };

    Lexer.prototype.unfinished = function() {
      var ref2;
      return LINE_CONTINUER.test(this.chunk) || ((ref2 = this.tag()) === '\\' || ref2 === '.' || ref2 === '?.' || ref2 === '?::' || ref2 === 'UNARY' || ref2 === 'MATH' || ref2 === 'UNARY_MATH' || ref2 === '+' || ref2 === '-' || ref2 === 'YIELD' || ref2 === '**' || ref2 === 'SHIFT' || ref2 === 'RELATION' || ref2 === 'COMPARE' || ref2 === '&' || ref2 === '^' || ref2 === '|' || ref2 === '&&' || ref2 === '||' || ref2 === 'BIN?' || ref2 === 'THROW' || ref2 === 'EXTENDS');
    };

    Lexer.prototype.formatString = function(str) {
      return str.replace(STRING_OMIT, '$1');
    };

    Lexer.prototype.formatHeregex = function(str) {
      return str.replace(HEREGEX_OMIT, '$1$2');
    };

    Lexer.prototype.validateEscapes = function(str, options) {
      var before, hex, invalidEscape, match, message, octal, ref2, unicode;
      if (options == null) {
        options = {};
      }
      match = INVALID_ESCAPE.exec(str);
      if (!match) {
        return;
      }
      match[0], before = match[1], octal = match[2], hex = match[3], unicode = match[4];
      if (options.isRegex && octal && octal.charAt(0) !== '0') {
        return;
      }
      message = octal ? "octal escape sequences are not allowed" : "invalid escape sequence";
      invalidEscape = "\\" + (octal || hex || unicode);
      return this.error(message + " " + invalidEscape, {
        offset: ((ref2 = options.offsetInChunk) != null ? ref2 : 0) + match.index + before.length,
        length: invalidEscape.length
      });
    };

    Lexer.prototype.makeDelimitedLiteral = function(body, options) {
      var regex;
      if (options == null) {
        options = {};
      }
      if (body === '' && options.delimiter === '/') {
        body = '(?:)';
      }
      regex = RegExp("(\\\\\\\\)|(\\\\0(?=[1-7]))|\\\\?(" + options.delimiter + ")|\\\\?(?:(\\n)|(\\r)|(\\u2028)|(\\u2029))|(\\\\.)", "g");
      body = body.replace(regex, function(match, backslash, nul, delimiter, lf, cr, ls, ps, other) {
        switch (false) {
          case !backslash:
            if (options.double) {
              return backslash + backslash;
            } else {
              return backslash;
            }
          case !nul:
            return '\\x00';
          case !delimiter:
            return "\\" + delimiter;
          case !lf:
            return '\\n';
          case !cr:
            return '\\r';
          case !ls:
            return '\\u2028';
          case !ps:
            return '\\u2029';
          case !other:
            if (options.double) {
              return "\\" + other;
            } else {
              return other;
            }
        }
      });
      return "" + options.delimiter + body + options.delimiter;
    };

    Lexer.prototype.error = function(message, options) {
      var first_column, first_line, location, ref2, ref3, ref4;
      if (options == null) {
        options = {};
      }
      location = 'first_line' in options ? options : ((ref3 = this.getLineAndColumnFromChunk((ref2 = options.offset) != null ? ref2 : 0), first_line = ref3[0], first_column = ref3[1], ref3), {
        first_line: first_line,
        first_column: first_column,
        last_column: first_column + ((ref4 = options.length) != null ? ref4 : 1) - 1
      });
      return throwSyntaxError(message, location);
    };

    return Lexer;

  })();

  JS_KEYWORDS = ['true', 'false', 'null', 'this', 'new', 'delete', 'typeof', 'in', 'instanceof', 'return', 'throw', 'break', 'continue', 'debugger', 'yield', 'if', 'else', 'switch', 'for', 'while', 'do', 'try', 'catch', 'finally', 'class', 'extends', 'super'];

  COFFEE_KEYWORDS = ['undefined', 'then', 'unless', 'until', 'loop', 'of', 'by', 'when'];

  COFFEE_ALIAS_MAP = {
    and: '&&',
    or: '||',
    is: '==',
    isnt: '!=',
    not: '!',
    yes: 'true',
    no: 'false',
    on: 'true',
    off: 'false'
  };

  COFFEE_ALIASES = (function() {
    var results;
    results = [];
    for (key in COFFEE_ALIAS_MAP) {
      results.push(key);
    }
    return results;
  })();

  COFFEE_KEYWORDS = COFFEE_KEYWORDS.concat(COFFEE_ALIASES);

  RESERVED = ['case', 'default', 'function', 'var', 'void', 'with', 'const', 'let', 'enum', 'export', 'import', 'native', 'implements', 'interface', 'package', 'private', 'protected', 'public', 'static'];

  STRICT_PROSCRIBED = ['arguments', 'eval', 'yield*'];

  JS_FORBIDDEN = JS_KEYWORDS.concat(RESERVED).concat(STRICT_PROSCRIBED);

  exports.RESERVED = RESERVED.concat(JS_KEYWORDS).concat(COFFEE_KEYWORDS).concat(STRICT_PROSCRIBED);

  exports.STRICT_PROSCRIBED = STRICT_PROSCRIBED;

  BOM = 65279;

  IDENTIFIER = /^(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)([^\n\S]*:(?!:))?/;

  NUMBER = /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i;

  OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>*\/%])\2=?|\?(\.|::)|\.{2,3})/;

  WHITESPACE = /^[^\n\S]+/;

  COMMENT = /^###([^#][\s\S]*?)(?:###[^\n\S]*|###$)|^(?:\s*#(?!##[^#]).*)+/;

  CODE = /^[-=]>/;

  MULTI_DENT = /^(?:\n[^\n\S]*)+/;

  JSTOKEN = /^`[^\\`]*(?:\\.[^\\`]*)*`/;

  STRING_START = /^(?:'''|"""|'|")/;

  STRING_SINGLE = /^(?:[^\\']|\\[\s\S])*/;

  STRING_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|\#(?!\{))*/;

  HEREDOC_SINGLE = /^(?:[^\\']|\\[\s\S]|'(?!''))*/;

  HEREDOC_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|"(?!"")|\#(?!\{))*/;

  STRING_OMIT = /((?:\\\\)+)|\\[^\S\n]*\n\s*/g;

  SIMPLE_STRING_OMIT = /\s*\n\s*/g;

  HEREDOC_INDENT = /\n+([^\n\S]*)(?=\S)/g;

  REGEX = /^\/(?!\/)((?:[^[\/\n\\]|\\[^\n]|\[(?:\\[^\n]|[^\]\n\\])*\])*)(\/)?/;

  REGEX_FLAGS = /^\w*/;

  VALID_FLAGS = /^(?!.*(.).*\1)[imgy]*$/;

  HEREGEX = /^(?:[^\\\/#]|\\[\s\S]|\/(?!\/\/)|\#(?!\{))*/;

  HEREGEX_OMIT = /((?:\\\\)+)|\\(\s)|\s+(?:#.*)?/g;

  REGEX_ILLEGAL = /^(\/|\/{3}\s*)(\*)/;

  POSSIBLY_DIVISION = /^\/=?\s/;

  HERECOMMENT_ILLEGAL = /\*\//;

  LINE_CONTINUER = /^\s*(?:,|\??\.(?![.\d])|::)/;

  INVALID_ESCAPE = /((?:^|[^\\])(?:\\\\)*)\\(?:(0[0-7]|[1-7])|(x(?![\da-fA-F]{2}).{0,2})|(u(?![\da-fA-F]{4}).{0,4}))/;

  LEADING_BLANK_LINE = /^[^\n\S]*\n/;

  TRAILING_BLANK_LINE = /\n[^\n\S]*$/;

  TRAILING_SPACES = /\s+$/;

  COMPOUND_ASSIGN = ['-=', '+=', '/=', '*=', '%=', '||=', '&&=', '?=', '<<=', '>>=', '>>>=', '&=', '^=', '|=', '**=', '//=', '%%='];

  UNARY = ['NEW', 'TYPEOF', 'DELETE', 'DO'];

  UNARY_MATH = ['!', '~'];

  SHIFT = ['<<', '>>', '>>>'];

  COMPARE = ['==', '!=', '<', '>', '<=', '>='];

  MATH = ['*', '/', '%', '//', '%%'];

  RELATION = ['IN', 'OF', 'INSTANCEOF'];

  BOOL = ['TRUE', 'FALSE'];

  CALLABLE = ['IDENTIFIER', ')', ']', '?', '@', 'THIS', 'SUPER'];

  INDEXABLE = CALLABLE.concat(['NUMBER', 'STRING', 'STRING_END', 'REGEX', 'REGEX_END', 'BOOL', 'NULL', 'UNDEFINED', '}', '::']);

  NOT_REGEX = INDEXABLE.concat(['++', '--']);

  LINE_BREAK = ['INDENT', 'OUTDENT', 'TERMINATOR'];

  INDENTABLE_CLOSERS = [')', '}', ']'];

}).call(this);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.10.0
(function() {
  var Access, Arr, Assign, Base, Block, Call, Class, Code, CodeFragment, Comment, Existence, Expansion, Extends, For, HEXNUM, IDENTIFIER, IS_REGEX, IS_STRING, If, In, Index, LEVEL_ACCESS, LEVEL_COND, LEVEL_LIST, LEVEL_OP, LEVEL_PAREN, LEVEL_TOP, Literal, NEGATE, NO, NUMBER, Obj, Op, Param, Parens, RESERVED, Range, Return, SIMPLENUM, STRICT_PROSCRIBED, Scope, Slice, Splat, Switch, TAB, THIS, Throw, Try, UTILITIES, Value, While, YES, addLocationDataFn, compact, del, ends, extend, flatten, fragmentsToText, isComplexOrAssignable, isLiteralArguments, isLiteralThis, locationDataToString, merge, multident, parseNum, ref1, ref2, some, starts, throwSyntaxError, unfoldSoak, utility,
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    slice = [].slice;

  Error.stackTraceLimit = Infinity;

  Scope = __webpack_require__(27).Scope;

  ref1 = __webpack_require__(10), RESERVED = ref1.RESERVED, STRICT_PROSCRIBED = ref1.STRICT_PROSCRIBED;

  ref2 = __webpack_require__(2), compact = ref2.compact, flatten = ref2.flatten, extend = ref2.extend, merge = ref2.merge, del = ref2.del, starts = ref2.starts, ends = ref2.ends, some = ref2.some, addLocationDataFn = ref2.addLocationDataFn, locationDataToString = ref2.locationDataToString, throwSyntaxError = ref2.throwSyntaxError;

  exports.extend = extend;

  exports.addLocationDataFn = addLocationDataFn;

  YES = function() {
    return true;
  };

  NO = function() {
    return false;
  };

  THIS = function() {
    return this;
  };

  NEGATE = function() {
    this.negated = !this.negated;
    return this;
  };

  exports.CodeFragment = CodeFragment = (function() {
    function CodeFragment(parent, code) {
      var ref3;
      this.code = "" + code;
      this.locationData = parent != null ? parent.locationData : void 0;
      this.type = (parent != null ? (ref3 = parent.constructor) != null ? ref3.name : void 0 : void 0) || 'unknown';
    }

    CodeFragment.prototype.toString = function() {
      return "" + this.code + (this.locationData ? ": " + locationDataToString(this.locationData) : '');
    };

    return CodeFragment;

  })();

  fragmentsToText = function(fragments) {
    var fragment;
    return ((function() {
      var j, len1, results;
      results = [];
      for (j = 0, len1 = fragments.length; j < len1; j++) {
        fragment = fragments[j];
        results.push(fragment.code);
      }
      return results;
    })()).join('');
  };

  exports.Base = Base = (function() {
    function Base() {}

    Base.prototype.compile = function(o, lvl) {
      return fragmentsToText(this.compileToFragments(o, lvl));
    };

    Base.prototype.compileToFragments = function(o, lvl) {
      var node;
      o = extend({}, o);
      if (lvl) {
        o.level = lvl;
      }
      node = this.unfoldSoak(o) || this;
      node.tab = o.indent;
      if (o.level === LEVEL_TOP || !node.isStatement(o)) {
        return node.compileNode(o);
      } else {
        return node.compileClosure(o);
      }
    };

    Base.prototype.compileClosure = function(o) {
      var args, argumentsNode, func, jumpNode, meth, parts, ref3;
      if (jumpNode = this.jumps()) {
        jumpNode.error('cannot use a pure statement in an expression');
      }
      o.sharedScope = true;
      func = new Code([], Block.wrap([this]));
      args = [];
      if ((argumentsNode = this.contains(isLiteralArguments)) || this.contains(isLiteralThis)) {
        args = [new Literal('this')];
        if (argumentsNode) {
          meth = 'apply';
          args.push(new Literal('arguments'));
        } else {
          meth = 'call';
        }
        func = new Value(func, [new Access(new Literal(meth))]);
      }
      parts = (new Call(func, args)).compileNode(o);
      if (func.isGenerator || ((ref3 = func.base) != null ? ref3.isGenerator : void 0)) {
        parts.unshift(this.makeCode("(yield* "));
        parts.push(this.makeCode(")"));
      }
      return parts;
    };

    Base.prototype.cache = function(o, level, isComplex) {
      var complex, ref, sub;
      complex = isComplex != null ? isComplex(this) : this.isComplex();
      if (complex) {
        ref = new Literal(o.scope.freeVariable('ref'));
        sub = new Assign(ref, this);
        if (level) {
          return [sub.compileToFragments(o, level), [this.makeCode(ref.value)]];
        } else {
          return [sub, ref];
        }
      } else {
        ref = level ? this.compileToFragments(o, level) : this;
        return [ref, ref];
      }
    };

    Base.prototype.cacheToCodeFragments = function(cacheValues) {
      return [fragmentsToText(cacheValues[0]), fragmentsToText(cacheValues[1])];
    };

    Base.prototype.makeReturn = function(res) {
      var me;
      me = this.unwrapAll();
      if (res) {
        return new Call(new Literal(res + ".push"), [me]);
      } else {
        return new Return(me);
      }
    };

    Base.prototype.contains = function(pred) {
      var node;
      node = void 0;
      this.traverseChildren(false, function(n) {
        if (pred(n)) {
          node = n;
          return false;
        }
      });
      return node;
    };

    Base.prototype.lastNonComment = function(list) {
      var i;
      i = list.length;
      while (i--) {
        if (!(list[i] instanceof Comment)) {
          return list[i];
        }
      }
      return null;
    };

    Base.prototype.toString = function(idt, name) {
      var tree;
      if (idt == null) {
        idt = '';
      }
      if (name == null) {
        name = this.constructor.name;
      }
      tree = '\n' + idt + name;
      if (this.soak) {
        tree += '?';
      }
      this.eachChild(function(node) {
        return tree += node.toString(idt + TAB);
      });
      return tree;
    };

    Base.prototype.eachChild = function(func) {
      var attr, child, j, k, len1, len2, ref3, ref4;
      if (!this.children) {
        return this;
      }
      ref3 = this.children;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        attr = ref3[j];
        if (this[attr]) {
          ref4 = flatten([this[attr]]);
          for (k = 0, len2 = ref4.length; k < len2; k++) {
            child = ref4[k];
            if (func(child) === false) {
              return this;
            }
          }
        }
      }
      return this;
    };

    Base.prototype.traverseChildren = function(crossScope, func) {
      return this.eachChild(function(child) {
        var recur;
        recur = func(child);
        if (recur !== false) {
          return child.traverseChildren(crossScope, func);
        }
      });
    };

    Base.prototype.invert = function() {
      return new Op('!', this);
    };

    Base.prototype.unwrapAll = function() {
      var node;
      node = this;
      while (node !== (node = node.unwrap())) {
        continue;
      }
      return node;
    };

    Base.prototype.children = [];

    Base.prototype.isStatement = NO;

    Base.prototype.jumps = NO;

    Base.prototype.isComplex = YES;

    Base.prototype.isChainable = NO;

    Base.prototype.isAssignable = NO;

    Base.prototype.unwrap = THIS;

    Base.prototype.unfoldSoak = NO;

    Base.prototype.assigns = NO;

    Base.prototype.updateLocationDataIfMissing = function(locationData) {
      if (this.locationData) {
        return this;
      }
      this.locationData = locationData;
      return this.eachChild(function(child) {
        return child.updateLocationDataIfMissing(locationData);
      });
    };

    Base.prototype.error = function(message) {
      return throwSyntaxError(message, this.locationData);
    };

    Base.prototype.makeCode = function(code) {
      return new CodeFragment(this, code);
    };

    Base.prototype.wrapInBraces = function(fragments) {
      return [].concat(this.makeCode('('), fragments, this.makeCode(')'));
    };

    Base.prototype.joinFragmentArrays = function(fragmentsList, joinStr) {
      var answer, fragments, i, j, len1;
      answer = [];
      for (i = j = 0, len1 = fragmentsList.length; j < len1; i = ++j) {
        fragments = fragmentsList[i];
        if (i) {
          answer.push(this.makeCode(joinStr));
        }
        answer = answer.concat(fragments);
      }
      return answer;
    };

    return Base;

  })();

  exports.Block = Block = (function(superClass1) {
    extend1(Block, superClass1);

    function Block(nodes) {
      this.expressions = compact(flatten(nodes || []));
    }

    Block.prototype.children = ['expressions'];

    Block.prototype.push = function(node) {
      this.expressions.push(node);
      return this;
    };

    Block.prototype.pop = function() {
      return this.expressions.pop();
    };

    Block.prototype.unshift = function(node) {
      this.expressions.unshift(node);
      return this;
    };

    Block.prototype.unwrap = function() {
      if (this.expressions.length === 1) {
        return this.expressions[0];
      } else {
        return this;
      }
    };

    Block.prototype.isEmpty = function() {
      return !this.expressions.length;
    };

    Block.prototype.isStatement = function(o) {
      var exp, j, len1, ref3;
      ref3 = this.expressions;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        exp = ref3[j];
        if (exp.isStatement(o)) {
          return true;
        }
      }
      return false;
    };

    Block.prototype.jumps = function(o) {
      var exp, j, jumpNode, len1, ref3;
      ref3 = this.expressions;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        exp = ref3[j];
        if (jumpNode = exp.jumps(o)) {
          return jumpNode;
        }
      }
    };

    Block.prototype.makeReturn = function(res) {
      var expr, len;
      len = this.expressions.length;
      while (len--) {
        expr = this.expressions[len];
        if (!(expr instanceof Comment)) {
          this.expressions[len] = expr.makeReturn(res);
          if (expr instanceof Return && !expr.expression) {
            this.expressions.splice(len, 1);
          }
          break;
        }
      }
      return this;
    };

    Block.prototype.compileToFragments = function(o, level) {
      if (o == null) {
        o = {};
      }
      if (o.scope) {
        return Block.__super__.compileToFragments.call(this, o, level);
      } else {
        return this.compileRoot(o);
      }
    };

    Block.prototype.compileNode = function(o) {
      var answer, compiledNodes, fragments, index, j, len1, node, ref3, top;
      this.tab = o.indent;
      top = o.level === LEVEL_TOP;
      compiledNodes = [];
      ref3 = this.expressions;
      for (index = j = 0, len1 = ref3.length; j < len1; index = ++j) {
        node = ref3[index];
        node = node.unwrapAll();
        node = node.unfoldSoak(o) || node;
        if (node instanceof Block) {
          compiledNodes.push(node.compileNode(o));
        } else if (top) {
          node.front = true;
          fragments = node.compileToFragments(o);
          if (!node.isStatement(o)) {
            fragments.unshift(this.makeCode("" + this.tab));
            fragments.push(this.makeCode(";"));
          }
          compiledNodes.push(fragments);
        } else {
          compiledNodes.push(node.compileToFragments(o, LEVEL_LIST));
        }
      }
      if (top) {
        if (this.spaced) {
          return [].concat(this.joinFragmentArrays(compiledNodes, '\n\n'), this.makeCode("\n"));
        } else {
          return this.joinFragmentArrays(compiledNodes, '\n');
        }
      }
      if (compiledNodes.length) {
        answer = this.joinFragmentArrays(compiledNodes, ', ');
      } else {
        answer = [this.makeCode("void 0")];
      }
      if (compiledNodes.length > 1 && o.level >= LEVEL_LIST) {
        return this.wrapInBraces(answer);
      } else {
        return answer;
      }
    };

    Block.prototype.compileRoot = function(o) {
      var exp, fragments, i, j, len1, name, prelude, preludeExps, ref3, ref4, rest;
      o.indent = o.bare ? '' : TAB;
      o.level = LEVEL_TOP;
      this.spaced = true;
      o.scope = new Scope(null, this, null, (ref3 = o.referencedVars) != null ? ref3 : []);
      ref4 = o.locals || [];
      for (j = 0, len1 = ref4.length; j < len1; j++) {
        name = ref4[j];
        o.scope.parameter(name);
      }
      prelude = [];
      if (!o.bare) {
        preludeExps = (function() {
          var k, len2, ref5, results;
          ref5 = this.expressions;
          results = [];
          for (i = k = 0, len2 = ref5.length; k < len2; i = ++k) {
            exp = ref5[i];
            if (!(exp.unwrap() instanceof Comment)) {
              break;
            }
            results.push(exp);
          }
          return results;
        }).call(this);
        rest = this.expressions.slice(preludeExps.length);
        this.expressions = preludeExps;
        if (preludeExps.length) {
          prelude = this.compileNode(merge(o, {
            indent: ''
          }));
          prelude.push(this.makeCode("\n"));
        }
        this.expressions = rest;
      }
      fragments = this.compileWithDeclarations(o);
      if (o.bare) {
        return fragments;
      }
      return [].concat(prelude, this.makeCode("(function() {\n"), fragments, this.makeCode("\n}).call(this);\n"));
    };

    Block.prototype.compileWithDeclarations = function(o) {
      var assigns, declars, exp, fragments, i, j, len1, post, ref3, ref4, ref5, rest, scope, spaced;
      fragments = [];
      post = [];
      ref3 = this.expressions;
      for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
        exp = ref3[i];
        exp = exp.unwrap();
        if (!(exp instanceof Comment || exp instanceof Literal)) {
          break;
        }
      }
      o = merge(o, {
        level: LEVEL_TOP
      });
      if (i) {
        rest = this.expressions.splice(i, 9e9);
        ref4 = [this.spaced, false], spaced = ref4[0], this.spaced = ref4[1];
        ref5 = [this.compileNode(o), spaced], fragments = ref5[0], this.spaced = ref5[1];
        this.expressions = rest;
      }
      post = this.compileNode(o);
      scope = o.scope;
      if (scope.expressions === this) {
        declars = o.scope.hasDeclarations();
        assigns = scope.hasAssignments;
        if (declars || assigns) {
          if (i) {
            fragments.push(this.makeCode('\n'));
          }
          fragments.push(this.makeCode(this.tab + "var "));
          if (declars) {
            fragments.push(this.makeCode(scope.declaredVariables().join(', ')));
          }
          if (assigns) {
            if (declars) {
              fragments.push(this.makeCode(",\n" + (this.tab + TAB)));
            }
            fragments.push(this.makeCode(scope.assignedVariables().join(",\n" + (this.tab + TAB))));
          }
          fragments.push(this.makeCode(";\n" + (this.spaced ? '\n' : '')));
        } else if (fragments.length && post.length) {
          fragments.push(this.makeCode("\n"));
        }
      }
      return fragments.concat(post);
    };

    Block.wrap = function(nodes) {
      if (nodes.length === 1 && nodes[0] instanceof Block) {
        return nodes[0];
      }
      return new Block(nodes);
    };

    return Block;

  })(Base);

  exports.Literal = Literal = (function(superClass1) {
    extend1(Literal, superClass1);

    function Literal(value1) {
      this.value = value1;
    }

    Literal.prototype.makeReturn = function() {
      if (this.isStatement()) {
        return this;
      } else {
        return Literal.__super__.makeReturn.apply(this, arguments);
      }
    };

    Literal.prototype.isAssignable = function() {
      return IDENTIFIER.test(this.value);
    };

    Literal.prototype.isStatement = function() {
      var ref3;
      return (ref3 = this.value) === 'break' || ref3 === 'continue' || ref3 === 'debugger';
    };

    Literal.prototype.isComplex = NO;

    Literal.prototype.assigns = function(name) {
      return name === this.value;
    };

    Literal.prototype.jumps = function(o) {
      if (this.value === 'break' && !((o != null ? o.loop : void 0) || (o != null ? o.block : void 0))) {
        return this;
      }
      if (this.value === 'continue' && !(o != null ? o.loop : void 0)) {
        return this;
      }
    };

    Literal.prototype.compileNode = function(o) {
      var answer, code, ref3;
      code = this.value === 'this' ? ((ref3 = o.scope.method) != null ? ref3.bound : void 0) ? o.scope.method.context : this.value : this.value.reserved ? "\"" + this.value + "\"" : this.value;
      answer = this.isStatement() ? "" + this.tab + code + ";" : code;
      return [this.makeCode(answer)];
    };

    Literal.prototype.toString = function() {
      return ' "' + this.value + '"';
    };

    return Literal;

  })(Base);

  exports.Undefined = (function(superClass1) {
    extend1(Undefined, superClass1);

    function Undefined() {
      return Undefined.__super__.constructor.apply(this, arguments);
    }

    Undefined.prototype.isAssignable = NO;

    Undefined.prototype.isComplex = NO;

    Undefined.prototype.compileNode = function(o) {
      return [this.makeCode(o.level >= LEVEL_ACCESS ? '(void 0)' : 'void 0')];
    };

    return Undefined;

  })(Base);

  exports.Null = (function(superClass1) {
    extend1(Null, superClass1);

    function Null() {
      return Null.__super__.constructor.apply(this, arguments);
    }

    Null.prototype.isAssignable = NO;

    Null.prototype.isComplex = NO;

    Null.prototype.compileNode = function() {
      return [this.makeCode("null")];
    };

    return Null;

  })(Base);

  exports.Bool = (function(superClass1) {
    extend1(Bool, superClass1);

    Bool.prototype.isAssignable = NO;

    Bool.prototype.isComplex = NO;

    Bool.prototype.compileNode = function() {
      return [this.makeCode(this.val)];
    };

    function Bool(val1) {
      this.val = val1;
    }

    return Bool;

  })(Base);

  exports.Return = Return = (function(superClass1) {
    extend1(Return, superClass1);

    function Return(expression) {
      this.expression = expression;
    }

    Return.prototype.children = ['expression'];

    Return.prototype.isStatement = YES;

    Return.prototype.makeReturn = THIS;

    Return.prototype.jumps = THIS;

    Return.prototype.compileToFragments = function(o, level) {
      var expr, ref3;
      expr = (ref3 = this.expression) != null ? ref3.makeReturn() : void 0;
      if (expr && !(expr instanceof Return)) {
        return expr.compileToFragments(o, level);
      } else {
        return Return.__super__.compileToFragments.call(this, o, level);
      }
    };

    Return.prototype.compileNode = function(o) {
      var answer, exprIsYieldReturn, ref3;
      answer = [];
      exprIsYieldReturn = (ref3 = this.expression) != null ? typeof ref3.isYieldReturn === "function" ? ref3.isYieldReturn() : void 0 : void 0;
      if (!exprIsYieldReturn) {
        answer.push(this.makeCode(this.tab + ("return" + (this.expression ? " " : ""))));
      }
      if (this.expression) {
        answer = answer.concat(this.expression.compileToFragments(o, LEVEL_PAREN));
      }
      if (!exprIsYieldReturn) {
        answer.push(this.makeCode(";"));
      }
      return answer;
    };

    return Return;

  })(Base);

  exports.Value = Value = (function(superClass1) {
    extend1(Value, superClass1);

    function Value(base, props, tag) {
      if (!props && base instanceof Value) {
        return base;
      }
      this.base = base;
      this.properties = props || [];
      if (tag) {
        this[tag] = true;
      }
      return this;
    }

    Value.prototype.children = ['base', 'properties'];

    Value.prototype.add = function(props) {
      this.properties = this.properties.concat(props);
      return this;
    };

    Value.prototype.hasProperties = function() {
      return !!this.properties.length;
    };

    Value.prototype.bareLiteral = function(type) {
      return !this.properties.length && this.base instanceof type;
    };

    Value.prototype.isArray = function() {
      return this.bareLiteral(Arr);
    };

    Value.prototype.isRange = function() {
      return this.bareLiteral(Range);
    };

    Value.prototype.isComplex = function() {
      return this.hasProperties() || this.base.isComplex();
    };

    Value.prototype.isAssignable = function() {
      return this.hasProperties() || this.base.isAssignable();
    };

    Value.prototype.isSimpleNumber = function() {
      return this.bareLiteral(Literal) && SIMPLENUM.test(this.base.value);
    };

    Value.prototype.isString = function() {
      return this.bareLiteral(Literal) && IS_STRING.test(this.base.value);
    };

    Value.prototype.isRegex = function() {
      return this.bareLiteral(Literal) && IS_REGEX.test(this.base.value);
    };

    Value.prototype.isAtomic = function() {
      var j, len1, node, ref3;
      ref3 = this.properties.concat(this.base);
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        node = ref3[j];
        if (node.soak || node instanceof Call) {
          return false;
        }
      }
      return true;
    };

    Value.prototype.isNotCallable = function() {
      return this.isSimpleNumber() || this.isString() || this.isRegex() || this.isArray() || this.isRange() || this.isSplice() || this.isObject();
    };

    Value.prototype.isStatement = function(o) {
      return !this.properties.length && this.base.isStatement(o);
    };

    Value.prototype.assigns = function(name) {
      return !this.properties.length && this.base.assigns(name);
    };

    Value.prototype.jumps = function(o) {
      return !this.properties.length && this.base.jumps(o);
    };

    Value.prototype.isObject = function(onlyGenerated) {
      if (this.properties.length) {
        return false;
      }
      return (this.base instanceof Obj) && (!onlyGenerated || this.base.generated);
    };

    Value.prototype.isSplice = function() {
      var lastProp, ref3;
      ref3 = this.properties, lastProp = ref3[ref3.length - 1];
      return lastProp instanceof Slice;
    };

    Value.prototype.looksStatic = function(className) {
      var ref3;
      return this.base.value === className && this.properties.length === 1 && ((ref3 = this.properties[0].name) != null ? ref3.value : void 0) !== 'prototype';
    };

    Value.prototype.unwrap = function() {
      if (this.properties.length) {
        return this;
      } else {
        return this.base;
      }
    };

    Value.prototype.cacheReference = function(o) {
      var base, bref, name, nref, ref3;
      ref3 = this.properties, name = ref3[ref3.length - 1];
      if (this.properties.length < 2 && !this.base.isComplex() && !(name != null ? name.isComplex() : void 0)) {
        return [this, this];
      }
      base = new Value(this.base, this.properties.slice(0, -1));
      if (base.isComplex()) {
        bref = new Literal(o.scope.freeVariable('base'));
        base = new Value(new Parens(new Assign(bref, base)));
      }
      if (!name) {
        return [base, bref];
      }
      if (name.isComplex()) {
        nref = new Literal(o.scope.freeVariable('name'));
        name = new Index(new Assign(nref, name.index));
        nref = new Index(nref);
      }
      return [base.add(name), new Value(bref || base.base, [nref || name])];
    };

    Value.prototype.compileNode = function(o) {
      var fragments, j, len1, prop, props;
      this.base.front = this.front;
      props = this.properties;
      fragments = this.base.compileToFragments(o, (props.length ? LEVEL_ACCESS : null));
      if ((this.base instanceof Parens || props.length) && SIMPLENUM.test(fragmentsToText(fragments))) {
        fragments.push(this.makeCode('.'));
      }
      for (j = 0, len1 = props.length; j < len1; j++) {
        prop = props[j];
        fragments.push.apply(fragments, prop.compileToFragments(o));
      }
      return fragments;
    };

    Value.prototype.unfoldSoak = function(o) {
      return this.unfoldedSoak != null ? this.unfoldedSoak : this.unfoldedSoak = (function(_this) {
        return function() {
          var fst, i, ifn, j, len1, prop, ref, ref3, ref4, snd;
          if (ifn = _this.base.unfoldSoak(o)) {
            (ref3 = ifn.body.properties).push.apply(ref3, _this.properties);
            return ifn;
          }
          ref4 = _this.properties;
          for (i = j = 0, len1 = ref4.length; j < len1; i = ++j) {
            prop = ref4[i];
            if (!prop.soak) {
              continue;
            }
            prop.soak = false;
            fst = new Value(_this.base, _this.properties.slice(0, i));
            snd = new Value(_this.base, _this.properties.slice(i));
            if (fst.isComplex()) {
              ref = new Literal(o.scope.freeVariable('ref'));
              fst = new Parens(new Assign(ref, fst));
              snd.base = ref;
            }
            return new If(new Existence(fst), snd, {
              soak: true
            });
          }
          return false;
        };
      })(this)();
    };

    return Value;

  })(Base);

  exports.Comment = Comment = (function(superClass1) {
    extend1(Comment, superClass1);

    function Comment(comment1) {
      this.comment = comment1;
    }

    Comment.prototype.isStatement = YES;

    Comment.prototype.makeReturn = THIS;

    Comment.prototype.compileNode = function(o, level) {
      var code, comment;
      comment = this.comment.replace(/^(\s*)#(?=\s)/gm, "$1 *");
      code = "/*" + (multident(comment, this.tab)) + (indexOf.call(comment, '\n') >= 0 ? "\n" + this.tab : '') + " */";
      if ((level || o.level) === LEVEL_TOP) {
        code = o.indent + code;
      }
      return [this.makeCode("\n"), this.makeCode(code)];
    };

    return Comment;

  })(Base);

  exports.Call = Call = (function(superClass1) {
    extend1(Call, superClass1);

    function Call(variable, args1, soak) {
      this.args = args1 != null ? args1 : [];
      this.soak = soak;
      this.isNew = false;
      this.isSuper = variable === 'super';
      this.variable = this.isSuper ? null : variable;
      if (variable instanceof Value && variable.isNotCallable()) {
        variable.error("literal is not a function");
      }
    }

    Call.prototype.children = ['variable', 'args'];

    Call.prototype.updateLocationDataIfMissing = function(locationData) {
      var base, ref3;
      if (this.locationData && this.needsUpdatedStartLocation) {
        this.locationData.first_line = locationData.first_line;
        this.locationData.first_column = locationData.first_column;
        base = ((ref3 = this.variable) != null ? ref3.base : void 0) || this.variable;
        if (base.needsUpdatedStartLocation) {
          this.variable.locationData.first_line = locationData.first_line;
          this.variable.locationData.first_column = locationData.first_column;
          base.updateLocationDataIfMissing(locationData);
        }
        delete this.needsUpdatedStartLocation;
      }
      return Call.__super__.updateLocationDataIfMissing.apply(this, arguments);
    };

    Call.prototype.newInstance = function() {
      var base, ref3;
      base = ((ref3 = this.variable) != null ? ref3.base : void 0) || this.variable;
      if (base instanceof Call && !base.isNew) {
        base.newInstance();
      } else {
        this.isNew = true;
      }
      this.needsUpdatedStartLocation = true;
      return this;
    };

    Call.prototype.superReference = function(o) {
      var accesses, base, bref, klass, method, name, nref, variable;
      method = o.scope.namedMethod();
      if (method != null ? method.klass : void 0) {
        klass = method.klass, name = method.name, variable = method.variable;
        if (klass.isComplex()) {
          bref = new Literal(o.scope.parent.freeVariable('base'));
          base = new Value(new Parens(new Assign(bref, klass)));
          variable.base = base;
          variable.properties.splice(0, klass.properties.length);
        }
        if (name.isComplex() || (name instanceof Index && name.index.isAssignable())) {
          nref = new Literal(o.scope.parent.freeVariable('name'));
          name = new Index(new Assign(nref, name.index));
          variable.properties.pop();
          variable.properties.push(name);
        }
        accesses = [new Access(new Literal('__super__'))];
        if (method["static"]) {
          accesses.push(new Access(new Literal('constructor')));
        }
        accesses.push(nref != null ? new Index(nref) : name);
        return (new Value(bref != null ? bref : klass, accesses)).compile(o);
      } else if (method != null ? method.ctor : void 0) {
        return method.name + ".__super__.constructor";
      } else {
        return this.error('cannot call super outside of an instance method.');
      }
    };

    Call.prototype.superThis = function(o) {
      var method;
      method = o.scope.method;
      return (method && !method.klass && method.context) || "this";
    };

    Call.prototype.unfoldSoak = function(o) {
      var call, ifn, j, left, len1, list, ref3, ref4, rite;
      if (this.soak) {
        if (this.variable) {
          if (ifn = unfoldSoak(o, this, 'variable')) {
            return ifn;
          }
          ref3 = new Value(this.variable).cacheReference(o), left = ref3[0], rite = ref3[1];
        } else {
          left = new Literal(this.superReference(o));
          rite = new Value(left);
        }
        rite = new Call(rite, this.args);
        rite.isNew = this.isNew;
        left = new Literal("typeof " + (left.compile(o)) + " === \"function\"");
        return new If(left, new Value(rite), {
          soak: true
        });
      }
      call = this;
      list = [];
      while (true) {
        if (call.variable instanceof Call) {
          list.push(call);
          call = call.variable;
          continue;
        }
        if (!(call.variable instanceof Value)) {
          break;
        }
        list.push(call);
        if (!((call = call.variable.base) instanceof Call)) {
          break;
        }
      }
      ref4 = list.reverse();
      for (j = 0, len1 = ref4.length; j < len1; j++) {
        call = ref4[j];
        if (ifn) {
          if (call.variable instanceof Call) {
            call.variable = ifn;
          } else {
            call.variable.base = ifn;
          }
        }
        ifn = unfoldSoak(o, call, 'variable');
      }
      return ifn;
    };

    Call.prototype.compileNode = function(o) {
      var arg, argIndex, compiledArgs, compiledArray, fragments, j, len1, preface, ref3, ref4;
      if ((ref3 = this.variable) != null) {
        ref3.front = this.front;
      }
      compiledArray = Splat.compileSplattedArray(o, this.args, true);
      if (compiledArray.length) {
        return this.compileSplat(o, compiledArray);
      }
      compiledArgs = [];
      ref4 = this.args;
      for (argIndex = j = 0, len1 = ref4.length; j < len1; argIndex = ++j) {
        arg = ref4[argIndex];
        if (argIndex) {
          compiledArgs.push(this.makeCode(", "));
        }
        compiledArgs.push.apply(compiledArgs, arg.compileToFragments(o, LEVEL_LIST));
      }
      fragments = [];
      if (this.isSuper) {
        preface = this.superReference(o) + (".call(" + (this.superThis(o)));
        if (compiledArgs.length) {
          preface += ", ";
        }
        fragments.push(this.makeCode(preface));
      } else {
        if (this.isNew) {
          fragments.push(this.makeCode('new '));
        }
        fragments.push.apply(fragments, this.variable.compileToFragments(o, LEVEL_ACCESS));
        fragments.push(this.makeCode("("));
      }
      fragments.push.apply(fragments, compiledArgs);
      fragments.push(this.makeCode(")"));
      return fragments;
    };

    Call.prototype.compileSplat = function(o, splatArgs) {
      var answer, base, fun, idt, name, ref;
      if (this.isSuper) {
        return [].concat(this.makeCode((this.superReference(o)) + ".apply(" + (this.superThis(o)) + ", "), splatArgs, this.makeCode(")"));
      }
      if (this.isNew) {
        idt = this.tab + TAB;
        return [].concat(this.makeCode("(function(func, args, ctor) {\n" + idt + "ctor.prototype = func.prototype;\n" + idt + "var child = new ctor, result = func.apply(child, args);\n" + idt + "return Object(result) === result ? result : child;\n" + this.tab + "})("), this.variable.compileToFragments(o, LEVEL_LIST), this.makeCode(", "), splatArgs, this.makeCode(", function(){})"));
      }
      answer = [];
      base = new Value(this.variable);
      if ((name = base.properties.pop()) && base.isComplex()) {
        ref = o.scope.freeVariable('ref');
        answer = answer.concat(this.makeCode("(" + ref + " = "), base.compileToFragments(o, LEVEL_LIST), this.makeCode(")"), name.compileToFragments(o));
      } else {
        fun = base.compileToFragments(o, LEVEL_ACCESS);
        if (SIMPLENUM.test(fragmentsToText(fun))) {
          fun = this.wrapInBraces(fun);
        }
        if (name) {
          ref = fragmentsToText(fun);
          fun.push.apply(fun, name.compileToFragments(o));
        } else {
          ref = 'null';
        }
        answer = answer.concat(fun);
      }
      return answer = answer.concat(this.makeCode(".apply(" + ref + ", "), splatArgs, this.makeCode(")"));
    };

    return Call;

  })(Base);

  exports.Extends = Extends = (function(superClass1) {
    extend1(Extends, superClass1);

    function Extends(child1, parent1) {
      this.child = child1;
      this.parent = parent1;
    }

    Extends.prototype.children = ['child', 'parent'];

    Extends.prototype.compileToFragments = function(o) {
      return new Call(new Value(new Literal(utility('extend', o))), [this.child, this.parent]).compileToFragments(o);
    };

    return Extends;

  })(Base);

  exports.Access = Access = (function(superClass1) {
    extend1(Access, superClass1);

    function Access(name1, tag) {
      this.name = name1;
      this.name.asKey = true;
      this.soak = tag === 'soak';
    }

    Access.prototype.children = ['name'];

    Access.prototype.compileToFragments = function(o) {
      var name;
      name = this.name.compileToFragments(o);
      if (IDENTIFIER.test(fragmentsToText(name))) {
        name.unshift(this.makeCode("."));
      } else {
        name.unshift(this.makeCode("["));
        name.push(this.makeCode("]"));
      }
      return name;
    };

    Access.prototype.isComplex = NO;

    return Access;

  })(Base);

  exports.Index = Index = (function(superClass1) {
    extend1(Index, superClass1);

    function Index(index1) {
      this.index = index1;
    }

    Index.prototype.children = ['index'];

    Index.prototype.compileToFragments = function(o) {
      return [].concat(this.makeCode("["), this.index.compileToFragments(o, LEVEL_PAREN), this.makeCode("]"));
    };

    Index.prototype.isComplex = function() {
      return this.index.isComplex();
    };

    return Index;

  })(Base);

  exports.Range = Range = (function(superClass1) {
    extend1(Range, superClass1);

    Range.prototype.children = ['from', 'to'];

    function Range(from1, to1, tag) {
      this.from = from1;
      this.to = to1;
      this.exclusive = tag === 'exclusive';
      this.equals = this.exclusive ? '' : '=';
    }

    Range.prototype.compileVariables = function(o) {
      var isComplex, ref3, ref4, ref5, ref6, step;
      o = merge(o, {
        top: true
      });
      isComplex = del(o, 'isComplex');
      ref3 = this.cacheToCodeFragments(this.from.cache(o, LEVEL_LIST, isComplex)), this.fromC = ref3[0], this.fromVar = ref3[1];
      ref4 = this.cacheToCodeFragments(this.to.cache(o, LEVEL_LIST, isComplex)), this.toC = ref4[0], this.toVar = ref4[1];
      if (step = del(o, 'step')) {
        ref5 = this.cacheToCodeFragments(step.cache(o, LEVEL_LIST, isComplex)), this.step = ref5[0], this.stepVar = ref5[1];
      }
      ref6 = [this.fromVar.match(NUMBER), this.toVar.match(NUMBER)], this.fromNum = ref6[0], this.toNum = ref6[1];
      if (this.stepVar) {
        return this.stepNum = this.stepVar.match(NUMBER);
      }
    };

    Range.prototype.compileNode = function(o) {
      var cond, condPart, from, gt, idx, idxName, known, lt, namedIndex, ref3, ref4, stepPart, to, varPart;
      if (!this.fromVar) {
        this.compileVariables(o);
      }
      if (!o.index) {
        return this.compileArray(o);
      }
      known = this.fromNum && this.toNum;
      idx = del(o, 'index');
      idxName = del(o, 'name');
      namedIndex = idxName && idxName !== idx;
      varPart = idx + " = " + this.fromC;
      if (this.toC !== this.toVar) {
        varPart += ", " + this.toC;
      }
      if (this.step !== this.stepVar) {
        varPart += ", " + this.step;
      }
      ref3 = [idx + " <" + this.equals, idx + " >" + this.equals], lt = ref3[0], gt = ref3[1];
      condPart = this.stepNum ? parseNum(this.stepNum[0]) > 0 ? lt + " " + this.toVar : gt + " " + this.toVar : known ? ((ref4 = [parseNum(this.fromNum[0]), parseNum(this.toNum[0])], from = ref4[0], to = ref4[1], ref4), from <= to ? lt + " " + to : gt + " " + to) : (cond = this.stepVar ? this.stepVar + " > 0" : this.fromVar + " <= " + this.toVar, cond + " ? " + lt + " " + this.toVar + " : " + gt + " " + this.toVar);
      stepPart = this.stepVar ? idx + " += " + this.stepVar : known ? namedIndex ? from <= to ? "++" + idx : "--" + idx : from <= to ? idx + "++" : idx + "--" : namedIndex ? cond + " ? ++" + idx + " : --" + idx : cond + " ? " + idx + "++ : " + idx + "--";
      if (namedIndex) {
        varPart = idxName + " = " + varPart;
      }
      if (namedIndex) {
        stepPart = idxName + " = " + stepPart;
      }
      return [this.makeCode(varPart + "; " + condPart + "; " + stepPart)];
    };

    Range.prototype.compileArray = function(o) {
      var args, body, cond, hasArgs, i, idt, j, post, pre, range, ref3, ref4, result, results, vars;
      if (this.fromNum && this.toNum && Math.abs(this.fromNum - this.toNum) <= 20) {
        range = (function() {
          results = [];
          for (var j = ref3 = +this.fromNum, ref4 = +this.toNum; ref3 <= ref4 ? j <= ref4 : j >= ref4; ref3 <= ref4 ? j++ : j--){ results.push(j); }
          return results;
        }).apply(this);
        if (this.exclusive) {
          range.pop();
        }
        return [this.makeCode("[" + (range.join(', ')) + "]")];
      }
      idt = this.tab + TAB;
      i = o.scope.freeVariable('i', {
        single: true
      });
      result = o.scope.freeVariable('results');
      pre = "\n" + idt + result + " = [];";
      if (this.fromNum && this.toNum) {
        o.index = i;
        body = fragmentsToText(this.compileNode(o));
      } else {
        vars = (i + " = " + this.fromC) + (this.toC !== this.toVar ? ", " + this.toC : '');
        cond = this.fromVar + " <= " + this.toVar;
        body = "var " + vars + "; " + cond + " ? " + i + " <" + this.equals + " " + this.toVar + " : " + i + " >" + this.equals + " " + this.toVar + "; " + cond + " ? " + i + "++ : " + i + "--";
      }
      post = "{ " + result + ".push(" + i + "); }\n" + idt + "return " + result + ";\n" + o.indent;
      hasArgs = function(node) {
        return node != null ? node.contains(isLiteralArguments) : void 0;
      };
      if (hasArgs(this.from) || hasArgs(this.to)) {
        args = ', arguments';
      }
      return [this.makeCode("(function() {" + pre + "\n" + idt + "for (" + body + ")" + post + "}).apply(this" + (args != null ? args : '') + ")")];
    };

    return Range;

  })(Base);

  exports.Slice = Slice = (function(superClass1) {
    extend1(Slice, superClass1);

    Slice.prototype.children = ['range'];

    function Slice(range1) {
      this.range = range1;
      Slice.__super__.constructor.call(this);
    }

    Slice.prototype.compileNode = function(o) {
      var compiled, compiledText, from, fromCompiled, ref3, to, toStr;
      ref3 = this.range, to = ref3.to, from = ref3.from;
      fromCompiled = from && from.compileToFragments(o, LEVEL_PAREN) || [this.makeCode('0')];
      if (to) {
        compiled = to.compileToFragments(o, LEVEL_PAREN);
        compiledText = fragmentsToText(compiled);
        if (!(!this.range.exclusive && +compiledText === -1)) {
          toStr = ', ' + (this.range.exclusive ? compiledText : SIMPLENUM.test(compiledText) ? "" + (+compiledText + 1) : (compiled = to.compileToFragments(o, LEVEL_ACCESS), "+" + (fragmentsToText(compiled)) + " + 1 || 9e9"));
        }
      }
      return [this.makeCode(".slice(" + (fragmentsToText(fromCompiled)) + (toStr || '') + ")")];
    };

    return Slice;

  })(Base);

  exports.Obj = Obj = (function(superClass1) {
    extend1(Obj, superClass1);

    function Obj(props, generated) {
      this.generated = generated != null ? generated : false;
      this.objects = this.properties = props || [];
    }

    Obj.prototype.children = ['properties'];

    Obj.prototype.compileNode = function(o) {
      var answer, dynamicIndex, hasDynamic, i, idt, indent, j, join, k, key, l, lastNoncom, len1, len2, len3, node, oref, prop, props, ref3, value;
      props = this.properties;
      if (this.generated) {
        for (j = 0, len1 = props.length; j < len1; j++) {
          node = props[j];
          if (node instanceof Value) {
            node.error('cannot have an implicit value in an implicit object');
          }
        }
      }
      for (dynamicIndex = k = 0, len2 = props.length; k < len2; dynamicIndex = ++k) {
        prop = props[dynamicIndex];
        if ((prop.variable || prop).base instanceof Parens) {
          break;
        }
      }
      hasDynamic = dynamicIndex < props.length;
      idt = o.indent += TAB;
      lastNoncom = this.lastNonComment(this.properties);
      answer = [];
      if (hasDynamic) {
        oref = o.scope.freeVariable('obj');
        answer.push(this.makeCode("(\n" + idt + oref + " = "));
      }
      answer.push(this.makeCode("{" + (props.length === 0 || dynamicIndex === 0 ? '}' : '\n')));
      for (i = l = 0, len3 = props.length; l < len3; i = ++l) {
        prop = props[i];
        if (i === dynamicIndex) {
          if (i !== 0) {
            answer.push(this.makeCode("\n" + idt + "}"));
          }
          answer.push(this.makeCode(',\n'));
        }
        join = i === props.length - 1 || i === dynamicIndex - 1 ? '' : prop === lastNoncom || prop instanceof Comment ? '\n' : ',\n';
        indent = prop instanceof Comment ? '' : idt;
        if (hasDynamic && i < dynamicIndex) {
          indent += TAB;
        }
        if (prop instanceof Assign) {
          if (prop.context !== 'object') {
            prop.operatorToken.error("unexpected " + prop.operatorToken.value);
          }
          if (prop.variable instanceof Value && prop.variable.hasProperties()) {
            prop.variable.error('invalid object key');
          }
        }
        if (prop instanceof Value && prop["this"]) {
          prop = new Assign(prop.properties[0].name, prop, 'object');
        }
        if (!(prop instanceof Comment)) {
          if (i < dynamicIndex) {
            if (!(prop instanceof Assign)) {
              prop = new Assign(prop, prop, 'object');
            }
            (prop.variable.base || prop.variable).asKey = true;
          } else {
            if (prop instanceof Assign) {
              key = prop.variable;
              value = prop.value;
            } else {
              ref3 = prop.base.cache(o), key = ref3[0], value = ref3[1];
            }
            prop = new Assign(new Value(new Literal(oref), [new Access(key)]), value);
          }
        }
        if (indent) {
          answer.push(this.makeCode(indent));
        }
        answer.push.apply(answer, prop.compileToFragments(o, LEVEL_TOP));
        if (join) {
          answer.push(this.makeCode(join));
        }
      }
      if (hasDynamic) {
        answer.push(this.makeCode(",\n" + idt + oref + "\n" + this.tab + ")"));
      } else {
        if (props.length !== 0) {
          answer.push(this.makeCode("\n" + this.tab + "}"));
        }
      }
      if (this.front && !hasDynamic) {
        return this.wrapInBraces(answer);
      } else {
        return answer;
      }
    };

    Obj.prototype.assigns = function(name) {
      var j, len1, prop, ref3;
      ref3 = this.properties;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        prop = ref3[j];
        if (prop.assigns(name)) {
          return true;
        }
      }
      return false;
    };

    return Obj;

  })(Base);

  exports.Arr = Arr = (function(superClass1) {
    extend1(Arr, superClass1);

    function Arr(objs) {
      this.objects = objs || [];
    }

    Arr.prototype.children = ['objects'];

    Arr.prototype.compileNode = function(o) {
      var answer, compiledObjs, fragments, index, j, len1, obj;
      if (!this.objects.length) {
        return [this.makeCode('[]')];
      }
      o.indent += TAB;
      answer = Splat.compileSplattedArray(o, this.objects);
      if (answer.length) {
        return answer;
      }
      answer = [];
      compiledObjs = (function() {
        var j, len1, ref3, results;
        ref3 = this.objects;
        results = [];
        for (j = 0, len1 = ref3.length; j < len1; j++) {
          obj = ref3[j];
          results.push(obj.compileToFragments(o, LEVEL_LIST));
        }
        return results;
      }).call(this);
      for (index = j = 0, len1 = compiledObjs.length; j < len1; index = ++j) {
        fragments = compiledObjs[index];
        if (index) {
          answer.push(this.makeCode(", "));
        }
        answer.push.apply(answer, fragments);
      }
      if (fragmentsToText(answer).indexOf('\n') >= 0) {
        answer.unshift(this.makeCode("[\n" + o.indent));
        answer.push(this.makeCode("\n" + this.tab + "]"));
      } else {
        answer.unshift(this.makeCode("["));
        answer.push(this.makeCode("]"));
      }
      return answer;
    };

    Arr.prototype.assigns = function(name) {
      var j, len1, obj, ref3;
      ref3 = this.objects;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        obj = ref3[j];
        if (obj.assigns(name)) {
          return true;
        }
      }
      return false;
    };

    return Arr;

  })(Base);

  exports.Class = Class = (function(superClass1) {
    extend1(Class, superClass1);

    function Class(variable1, parent1, body1) {
      this.variable = variable1;
      this.parent = parent1;
      this.body = body1 != null ? body1 : new Block;
      this.boundFuncs = [];
      this.body.classBody = true;
    }

    Class.prototype.children = ['variable', 'parent', 'body'];

    Class.prototype.determineName = function() {
      var decl, ref3, tail;
      if (!this.variable) {
        return null;
      }
      ref3 = this.variable.properties, tail = ref3[ref3.length - 1];
      decl = tail ? tail instanceof Access && tail.name.value : this.variable.base.value;
      if (indexOf.call(STRICT_PROSCRIBED, decl) >= 0) {
        this.variable.error("class variable name may not be " + decl);
      }
      return decl && (decl = IDENTIFIER.test(decl) && decl);
    };

    Class.prototype.setContext = function(name) {
      return this.body.traverseChildren(false, function(node) {
        if (node.classBody) {
          return false;
        }
        if (node instanceof Literal && node.value === 'this') {
          return node.value = name;
        } else if (node instanceof Code) {
          if (node.bound) {
            return node.context = name;
          }
        }
      });
    };

    Class.prototype.addBoundFunctions = function(o) {
      var bvar, j, len1, lhs, ref3;
      ref3 = this.boundFuncs;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        bvar = ref3[j];
        lhs = (new Value(new Literal("this"), [new Access(bvar)])).compile(o);
        this.ctor.body.unshift(new Literal(lhs + " = " + (utility('bind', o)) + "(" + lhs + ", this)"));
      }
    };

    Class.prototype.addProperties = function(node, name, o) {
      var acc, assign, base, exprs, func, props;
      props = node.base.properties.slice(0);
      exprs = (function() {
        var results;
        results = [];
        while (assign = props.shift()) {
          if (assign instanceof Assign) {
            base = assign.variable.base;
            delete assign.context;
            func = assign.value;
            if (base.value === 'constructor') {
              if (this.ctor) {
                assign.error('cannot define more than one constructor in a class');
              }
              if (func.bound) {
                assign.error('cannot define a constructor as a bound function');
              }
              if (func instanceof Code) {
                assign = this.ctor = func;
              } else {
                this.externalCtor = o.classScope.freeVariable('class');
                assign = new Assign(new Literal(this.externalCtor), func);
              }
            } else {
              if (assign.variable["this"]) {
                func["static"] = true;
              } else {
                acc = base.isComplex() ? new Index(base) : new Access(base);
                assign.variable = new Value(new Literal(name), [new Access(new Literal('prototype')), acc]);
                if (func instanceof Code && func.bound) {
                  this.boundFuncs.push(base);
                  func.bound = false;
                }
              }
            }
          }
          results.push(assign);
        }
        return results;
      }).call(this);
      return compact(exprs);
    };

    Class.prototype.walkBody = function(name, o) {
      return this.traverseChildren(false, (function(_this) {
        return function(child) {
          var cont, exps, i, j, len1, node, ref3;
          cont = true;
          if (child instanceof Class) {
            return false;
          }
          if (child instanceof Block) {
            ref3 = exps = child.expressions;
            for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
              node = ref3[i];
              if (node instanceof Assign && node.variable.looksStatic(name)) {
                node.value["static"] = true;
              } else if (node instanceof Value && node.isObject(true)) {
                cont = false;
                exps[i] = _this.addProperties(node, name, o);
              }
            }
            child.expressions = exps = flatten(exps);
          }
          return cont && !(child instanceof Class);
        };
      })(this));
    };

    Class.prototype.hoistDirectivePrologue = function() {
      var expressions, index, node;
      index = 0;
      expressions = this.body.expressions;
      while ((node = expressions[index]) && node instanceof Comment || node instanceof Value && node.isString()) {
        ++index;
      }
      return this.directives = expressions.splice(0, index);
    };

    Class.prototype.ensureConstructor = function(name) {
      if (!this.ctor) {
        this.ctor = new Code;
        if (this.externalCtor) {
          this.ctor.body.push(new Literal(this.externalCtor + ".apply(this, arguments)"));
        } else if (this.parent) {
          this.ctor.body.push(new Literal(name + ".__super__.constructor.apply(this, arguments)"));
        }
        this.ctor.body.makeReturn();
        this.body.expressions.unshift(this.ctor);
      }
      this.ctor.ctor = this.ctor.name = name;
      this.ctor.klass = null;
      return this.ctor.noReturn = true;
    };

    Class.prototype.compileNode = function(o) {
      var args, argumentsNode, func, jumpNode, klass, lname, name, ref3, superClass;
      if (jumpNode = this.body.jumps()) {
        jumpNode.error('Class bodies cannot contain pure statements');
      }
      if (argumentsNode = this.body.contains(isLiteralArguments)) {
        argumentsNode.error("Class bodies shouldn't reference arguments");
      }
      name = this.determineName() || '_Class';
      if (name.reserved) {
        name = "_" + name;
      }
      lname = new Literal(name);
      func = new Code([], Block.wrap([this.body]));
      args = [];
      o.classScope = func.makeScope(o.scope);
      this.hoistDirectivePrologue();
      this.setContext(name);
      this.walkBody(name, o);
      this.ensureConstructor(name);
      this.addBoundFunctions(o);
      this.body.spaced = true;
      this.body.expressions.push(lname);
      if (this.parent) {
        superClass = new Literal(o.classScope.freeVariable('superClass', {
          reserve: false
        }));
        this.body.expressions.unshift(new Extends(lname, superClass));
        func.params.push(new Param(superClass));
        args.push(this.parent);
      }
      (ref3 = this.body.expressions).unshift.apply(ref3, this.directives);
      klass = new Parens(new Call(func, args));
      if (this.variable) {
        klass = new Assign(this.variable, klass);
      }
      return klass.compileToFragments(o);
    };

    return Class;

  })(Base);

  exports.Assign = Assign = (function(superClass1) {
    extend1(Assign, superClass1);

    function Assign(variable1, value1, context, options) {
      var forbidden, name, ref3;
      this.variable = variable1;
      this.value = value1;
      this.context = context;
      if (options == null) {
        options = {};
      }
      this.param = options.param, this.subpattern = options.subpattern, this.operatorToken = options.operatorToken;
      forbidden = (ref3 = (name = this.variable.unwrapAll().value), indexOf.call(STRICT_PROSCRIBED, ref3) >= 0);
      if (forbidden && this.context !== 'object') {
        this.variable.error("variable name may not be \"" + name + "\"");
      }
    }

    Assign.prototype.children = ['variable', 'value'];

    Assign.prototype.isStatement = function(o) {
      return (o != null ? o.level : void 0) === LEVEL_TOP && (this.context != null) && indexOf.call(this.context, "?") >= 0;
    };

    Assign.prototype.assigns = function(name) {
      return this[this.context === 'object' ? 'value' : 'variable'].assigns(name);
    };

    Assign.prototype.unfoldSoak = function(o) {
      return unfoldSoak(o, this, 'variable');
    };

    Assign.prototype.compileNode = function(o) {
      var answer, compiledName, isValue, j, name, properties, prototype, ref3, ref4, ref5, ref6, ref7, val, varBase;
      if (isValue = this.variable instanceof Value) {
        if (this.variable.isArray() || this.variable.isObject()) {
          return this.compilePatternMatch(o);
        }
        if (this.variable.isSplice()) {
          return this.compileSplice(o);
        }
        if ((ref3 = this.context) === '||=' || ref3 === '&&=' || ref3 === '?=') {
          return this.compileConditional(o);
        }
        if ((ref4 = this.context) === '**=' || ref4 === '//=' || ref4 === '%%=') {
          return this.compileSpecialMath(o);
        }
      }
      if (this.value instanceof Code) {
        if (this.value["static"]) {
          this.value.klass = this.variable.base;
          this.value.name = this.variable.properties[0];
          this.value.variable = this.variable;
        } else if (((ref5 = this.variable.properties) != null ? ref5.length : void 0) >= 2) {
          ref6 = this.variable.properties, properties = 3 <= ref6.length ? slice.call(ref6, 0, j = ref6.length - 2) : (j = 0, []), prototype = ref6[j++], name = ref6[j++];
          if (((ref7 = prototype.name) != null ? ref7.value : void 0) === 'prototype') {
            this.value.klass = new Value(this.variable.base, properties);
            this.value.name = name;
            this.value.variable = this.variable;
          }
        }
      }
      if (!this.context) {
        varBase = this.variable.unwrapAll();
        if (!varBase.isAssignable()) {
          this.variable.error("\"" + (this.variable.compile(o)) + "\" cannot be assigned");
        }
        if (!(typeof varBase.hasProperties === "function" ? varBase.hasProperties() : void 0)) {
          if (this.param) {
            o.scope.add(varBase.value, 'var');
          } else {
            o.scope.find(varBase.value);
          }
        }
      }
      val = this.value.compileToFragments(o, LEVEL_LIST);
      if (isValue && this.variable.base instanceof Obj) {
        this.variable.front = true;
      }
      compiledName = this.variable.compileToFragments(o, LEVEL_LIST);
      if (this.context === 'object') {
        return compiledName.concat(this.makeCode(": "), val);
      }
      answer = compiledName.concat(this.makeCode(" " + (this.context || '=') + " "), val);
      if (o.level <= LEVEL_LIST) {
        return answer;
      } else {
        return this.wrapInBraces(answer);
      }
    };

    Assign.prototype.compilePatternMatch = function(o) {
      var acc, assigns, code, defaultValue, expandedIdx, fragments, i, idx, isObject, ivar, j, len1, name, obj, objects, olen, ref, ref3, ref4, ref5, ref6, ref7, rest, top, val, value, vvar, vvarText;
      top = o.level === LEVEL_TOP;
      value = this.value;
      objects = this.variable.base.objects;
      if (!(olen = objects.length)) {
        code = value.compileToFragments(o);
        if (o.level >= LEVEL_OP) {
          return this.wrapInBraces(code);
        } else {
          return code;
        }
      }
      obj = objects[0];
      if (olen === 1 && obj instanceof Expansion) {
        obj.error('Destructuring assignment has no target');
      }
      isObject = this.variable.isObject();
      if (top && olen === 1 && !(obj instanceof Splat)) {
        defaultValue = null;
        if (obj instanceof Assign && obj.context === 'object') {
          ref3 = obj, (ref4 = ref3.variable, idx = ref4.base), obj = ref3.value;
          if (obj instanceof Assign) {
            defaultValue = obj.value;
            obj = obj.variable;
          }
        } else {
          if (obj instanceof Assign) {
            defaultValue = obj.value;
            obj = obj.variable;
          }
          idx = isObject ? obj["this"] ? obj.properties[0].name : obj : new Literal(0);
        }
        acc = IDENTIFIER.test(idx.unwrap().value);
        value = new Value(value);
        value.properties.push(new (acc ? Access : Index)(idx));
        if (ref5 = obj.unwrap().value, indexOf.call(RESERVED, ref5) >= 0) {
          obj.error("assignment to a reserved word: " + (obj.compile(o)));
        }
        if (defaultValue) {
          value = new Op('?', value, defaultValue);
        }
        return new Assign(obj, value, null, {
          param: this.param
        }).compileToFragments(o, LEVEL_TOP);
      }
      vvar = value.compileToFragments(o, LEVEL_LIST);
      vvarText = fragmentsToText(vvar);
      assigns = [];
      expandedIdx = false;
      if (!IDENTIFIER.test(vvarText) || this.variable.assigns(vvarText)) {
        assigns.push([this.makeCode((ref = o.scope.freeVariable('ref')) + " = ")].concat(slice.call(vvar)));
        vvar = [this.makeCode(ref)];
        vvarText = ref;
      }
      for (i = j = 0, len1 = objects.length; j < len1; i = ++j) {
        obj = objects[i];
        idx = i;
        if (!expandedIdx && obj instanceof Splat) {
          name = obj.name.unwrap().value;
          obj = obj.unwrap();
          val = olen + " <= " + vvarText + ".length ? " + (utility('slice', o)) + ".call(" + vvarText + ", " + i;
          if (rest = olen - i - 1) {
            ivar = o.scope.freeVariable('i', {
              single: true
            });
            val += ", " + ivar + " = " + vvarText + ".length - " + rest + ") : (" + ivar + " = " + i + ", [])";
          } else {
            val += ") : []";
          }
          val = new Literal(val);
          expandedIdx = ivar + "++";
        } else if (!expandedIdx && obj instanceof Expansion) {
          if (rest = olen - i - 1) {
            if (rest === 1) {
              expandedIdx = vvarText + ".length - 1";
            } else {
              ivar = o.scope.freeVariable('i', {
                single: true
              });
              val = new Literal(ivar + " = " + vvarText + ".length - " + rest);
              expandedIdx = ivar + "++";
              assigns.push(val.compileToFragments(o, LEVEL_LIST));
            }
          }
          continue;
        } else {
          if (obj instanceof Splat || obj instanceof Expansion) {
            obj.error("multiple splats/expansions are disallowed in an assignment");
          }
          defaultValue = null;
          if (obj instanceof Assign && obj.context === 'object') {
            ref6 = obj, (ref7 = ref6.variable, idx = ref7.base), obj = ref6.value;
            if (obj instanceof Assign) {
              defaultValue = obj.value;
              obj = obj.variable;
            }
          } else {
            if (obj instanceof Assign) {
              defaultValue = obj.value;
              obj = obj.variable;
            }
            idx = isObject ? obj["this"] ? obj.properties[0].name : obj : new Literal(expandedIdx || idx);
          }
          name = obj.unwrap().value;
          acc = IDENTIFIER.test(idx.unwrap().value);
          val = new Value(new Literal(vvarText), [new (acc ? Access : Index)(idx)]);
          if (defaultValue) {
            val = new Op('?', val, defaultValue);
          }
        }
        if ((name != null) && indexOf.call(RESERVED, name) >= 0) {
          obj.error("assignment to a reserved word: " + (obj.compile(o)));
        }
        assigns.push(new Assign(obj, val, null, {
          param: this.param,
          subpattern: true
        }).compileToFragments(o, LEVEL_LIST));
      }
      if (!(top || this.subpattern)) {
        assigns.push(vvar);
      }
      fragments = this.joinFragmentArrays(assigns, ', ');
      if (o.level < LEVEL_LIST) {
        return fragments;
      } else {
        return this.wrapInBraces(fragments);
      }
    };

    Assign.prototype.compileConditional = function(o) {
      var fragments, left, ref3, right;
      ref3 = this.variable.cacheReference(o), left = ref3[0], right = ref3[1];
      if (!left.properties.length && left.base instanceof Literal && left.base.value !== "this" && !o.scope.check(left.base.value)) {
        this.variable.error("the variable \"" + left.base.value + "\" can't be assigned with " + this.context + " because it has not been declared before");
      }
      if (indexOf.call(this.context, "?") >= 0) {
        o.isExistentialEquals = true;
        return new If(new Existence(left), right, {
          type: 'if'
        }).addElse(new Assign(right, this.value, '=')).compileToFragments(o);
      } else {
        fragments = new Op(this.context.slice(0, -1), left, new Assign(right, this.value, '=')).compileToFragments(o);
        if (o.level <= LEVEL_LIST) {
          return fragments;
        } else {
          return this.wrapInBraces(fragments);
        }
      }
    };

    Assign.prototype.compileSpecialMath = function(o) {
      var left, ref3, right;
      ref3 = this.variable.cacheReference(o), left = ref3[0], right = ref3[1];
      return new Assign(left, new Op(this.context.slice(0, -1), right, this.value)).compileToFragments(o);
    };

    Assign.prototype.compileSplice = function(o) {
      var answer, exclusive, from, fromDecl, fromRef, name, ref3, ref4, ref5, to, valDef, valRef;
      ref3 = this.variable.properties.pop().range, from = ref3.from, to = ref3.to, exclusive = ref3.exclusive;
      name = this.variable.compile(o);
      if (from) {
        ref4 = this.cacheToCodeFragments(from.cache(o, LEVEL_OP)), fromDecl = ref4[0], fromRef = ref4[1];
      } else {
        fromDecl = fromRef = '0';
      }
      if (to) {
        if (from instanceof Value && from.isSimpleNumber() && to instanceof Value && to.isSimpleNumber()) {
          to = to.compile(o) - fromRef;
          if (!exclusive) {
            to += 1;
          }
        } else {
          to = to.compile(o, LEVEL_ACCESS) + ' - ' + fromRef;
          if (!exclusive) {
            to += ' + 1';
          }
        }
      } else {
        to = "9e9";
      }
      ref5 = this.value.cache(o, LEVEL_LIST), valDef = ref5[0], valRef = ref5[1];
      answer = [].concat(this.makeCode("[].splice.apply(" + name + ", [" + fromDecl + ", " + to + "].concat("), valDef, this.makeCode(")), "), valRef);
      if (o.level > LEVEL_TOP) {
        return this.wrapInBraces(answer);
      } else {
        return answer;
      }
    };

    return Assign;

  })(Base);

  exports.Code = Code = (function(superClass1) {
    extend1(Code, superClass1);

    function Code(params, body, tag) {
      this.params = params || [];
      this.body = body || new Block;
      this.bound = tag === 'boundfunc';
      this.isGenerator = !!this.body.contains(function(node) {
        var ref3;
        return node instanceof Op && ((ref3 = node.operator) === 'yield' || ref3 === 'yield*');
      });
    }

    Code.prototype.children = ['params', 'body'];

    Code.prototype.isStatement = function() {
      return !!this.ctor;
    };

    Code.prototype.jumps = NO;

    Code.prototype.makeScope = function(parentScope) {
      return new Scope(parentScope, this.body, this);
    };

    Code.prototype.compileNode = function(o) {
      var answer, boundfunc, code, exprs, i, j, k, l, len1, len2, len3, len4, len5, len6, lit, m, p, param, params, q, r, ref, ref3, ref4, ref5, ref6, ref7, ref8, splats, uniqs, val, wasEmpty, wrapper;
      if (this.bound && ((ref3 = o.scope.method) != null ? ref3.bound : void 0)) {
        this.context = o.scope.method.context;
      }
      if (this.bound && !this.context) {
        this.context = '_this';
        wrapper = new Code([new Param(new Literal(this.context))], new Block([this]));
        boundfunc = new Call(wrapper, [new Literal('this')]);
        boundfunc.updateLocationDataIfMissing(this.locationData);
        return boundfunc.compileNode(o);
      }
      o.scope = del(o, 'classScope') || this.makeScope(o.scope);
      o.scope.shared = del(o, 'sharedScope');
      o.indent += TAB;
      delete o.bare;
      delete o.isExistentialEquals;
      params = [];
      exprs = [];
      ref4 = this.params;
      for (j = 0, len1 = ref4.length; j < len1; j++) {
        param = ref4[j];
        if (!(param instanceof Expansion)) {
          o.scope.parameter(param.asReference(o));
        }
      }
      ref5 = this.params;
      for (k = 0, len2 = ref5.length; k < len2; k++) {
        param = ref5[k];
        if (!(param.splat || param instanceof Expansion)) {
          continue;
        }
        ref6 = this.params;
        for (l = 0, len3 = ref6.length; l < len3; l++) {
          p = ref6[l];
          if (!(p instanceof Expansion) && p.name.value) {
            o.scope.add(p.name.value, 'var', true);
          }
        }
        splats = new Assign(new Value(new Arr((function() {
          var len4, m, ref7, results;
          ref7 = this.params;
          results = [];
          for (m = 0, len4 = ref7.length; m < len4; m++) {
            p = ref7[m];
            results.push(p.asReference(o));
          }
          return results;
        }).call(this))), new Value(new Literal('arguments')));
        break;
      }
      ref7 = this.params;
      for (m = 0, len4 = ref7.length; m < len4; m++) {
        param = ref7[m];
        if (param.isComplex()) {
          val = ref = param.asReference(o);
          if (param.value) {
            val = new Op('?', ref, param.value);
          }
          exprs.push(new Assign(new Value(param.name), val, '=', {
            param: true
          }));
        } else {
          ref = param;
          if (param.value) {
            lit = new Literal(ref.name.value + ' == null');
            val = new Assign(new Value(param.name), param.value, '=');
            exprs.push(new If(lit, val));
          }
        }
        if (!splats) {
          params.push(ref);
        }
      }
      wasEmpty = this.body.isEmpty();
      if (splats) {
        exprs.unshift(splats);
      }
      if (exprs.length) {
        (ref8 = this.body.expressions).unshift.apply(ref8, exprs);
      }
      for (i = q = 0, len5 = params.length; q < len5; i = ++q) {
        p = params[i];
        params[i] = p.compileToFragments(o);
        o.scope.parameter(fragmentsToText(params[i]));
      }
      uniqs = [];
      this.eachParamName(function(name, node) {
        if (indexOf.call(uniqs, name) >= 0) {
          node.error("multiple parameters named " + name);
        }
        return uniqs.push(name);
      });
      if (!(wasEmpty || this.noReturn)) {
        this.body.makeReturn();
      }
      code = 'function';
      if (this.isGenerator) {
        code += '*';
      }
      if (this.ctor) {
        code += ' ' + this.name;
      }
      code += '(';
      answer = [this.makeCode(code)];
      for (i = r = 0, len6 = params.length; r < len6; i = ++r) {
        p = params[i];
        if (i) {
          answer.push(this.makeCode(", "));
        }
        answer.push.apply(answer, p);
      }
      answer.push(this.makeCode(') {'));
      if (!this.body.isEmpty()) {
        answer = answer.concat(this.makeCode("\n"), this.body.compileWithDeclarations(o), this.makeCode("\n" + this.tab));
      }
      answer.push(this.makeCode('}'));
      if (this.ctor) {
        return [this.makeCode(this.tab)].concat(slice.call(answer));
      }
      if (this.front || (o.level >= LEVEL_ACCESS)) {
        return this.wrapInBraces(answer);
      } else {
        return answer;
      }
    };

    Code.prototype.eachParamName = function(iterator) {
      var j, len1, param, ref3, results;
      ref3 = this.params;
      results = [];
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        param = ref3[j];
        results.push(param.eachName(iterator));
      }
      return results;
    };

    Code.prototype.traverseChildren = function(crossScope, func) {
      if (crossScope) {
        return Code.__super__.traverseChildren.call(this, crossScope, func);
      }
    };

    return Code;

  })(Base);

  exports.Param = Param = (function(superClass1) {
    extend1(Param, superClass1);

    function Param(name1, value1, splat) {
      var name, ref3, token;
      this.name = name1;
      this.value = value1;
      this.splat = splat;
      if (ref3 = (name = this.name.unwrapAll().value), indexOf.call(STRICT_PROSCRIBED, ref3) >= 0) {
        this.name.error("parameter name \"" + name + "\" is not allowed");
      }
      if (this.name instanceof Obj && this.name.generated) {
        token = this.name.objects[0].operatorToken;
        token.error("unexpected " + token.value);
      }
    }

    Param.prototype.children = ['name', 'value'];

    Param.prototype.compileToFragments = function(o) {
      return this.name.compileToFragments(o, LEVEL_LIST);
    };

    Param.prototype.asReference = function(o) {
      var name, node;
      if (this.reference) {
        return this.reference;
      }
      node = this.name;
      if (node["this"]) {
        name = node.properties[0].name.value;
        if (name.reserved) {
          name = "_" + name;
        }
        node = new Literal(o.scope.freeVariable(name));
      } else if (node.isComplex()) {
        node = new Literal(o.scope.freeVariable('arg'));
      }
      node = new Value(node);
      if (this.splat) {
        node = new Splat(node);
      }
      node.updateLocationDataIfMissing(this.locationData);
      return this.reference = node;
    };

    Param.prototype.isComplex = function() {
      return this.name.isComplex();
    };

    Param.prototype.eachName = function(iterator, name) {
      var atParam, j, len1, node, obj, ref3;
      if (name == null) {
        name = this.name;
      }
      atParam = function(obj) {
        return iterator("@" + obj.properties[0].name.value, obj);
      };
      if (name instanceof Literal) {
        return iterator(name.value, name);
      }
      if (name instanceof Value) {
        return atParam(name);
      }
      ref3 = name.objects;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        obj = ref3[j];
        if (obj instanceof Assign && (obj.context == null)) {
          obj = obj.variable;
        }
        if (obj instanceof Assign) {
          this.eachName(iterator, obj.value.unwrap());
        } else if (obj instanceof Splat) {
          node = obj.name.unwrap();
          iterator(node.value, node);
        } else if (obj instanceof Value) {
          if (obj.isArray() || obj.isObject()) {
            this.eachName(iterator, obj.base);
          } else if (obj["this"]) {
            atParam(obj);
          } else {
            iterator(obj.base.value, obj.base);
          }
        } else if (!(obj instanceof Expansion)) {
          obj.error("illegal parameter " + (obj.compile()));
        }
      }
    };

    return Param;

  })(Base);

  exports.Splat = Splat = (function(superClass1) {
    extend1(Splat, superClass1);

    Splat.prototype.children = ['name'];

    Splat.prototype.isAssignable = YES;

    function Splat(name) {
      this.name = name.compile ? name : new Literal(name);
    }

    Splat.prototype.assigns = function(name) {
      return this.name.assigns(name);
    };

    Splat.prototype.compileToFragments = function(o) {
      return this.name.compileToFragments(o);
    };

    Splat.prototype.unwrap = function() {
      return this.name;
    };

    Splat.compileSplattedArray = function(o, list, apply) {
      var args, base, compiledNode, concatPart, fragments, i, index, j, last, len1, node;
      index = -1;
      while ((node = list[++index]) && !(node instanceof Splat)) {
        continue;
      }
      if (index >= list.length) {
        return [];
      }
      if (list.length === 1) {
        node = list[0];
        fragments = node.compileToFragments(o, LEVEL_LIST);
        if (apply) {
          return fragments;
        }
        return [].concat(node.makeCode((utility('slice', o)) + ".call("), fragments, node.makeCode(")"));
      }
      args = list.slice(index);
      for (i = j = 0, len1 = args.length; j < len1; i = ++j) {
        node = args[i];
        compiledNode = node.compileToFragments(o, LEVEL_LIST);
        args[i] = node instanceof Splat ? [].concat(node.makeCode((utility('slice', o)) + ".call("), compiledNode, node.makeCode(")")) : [].concat(node.makeCode("["), compiledNode, node.makeCode("]"));
      }
      if (index === 0) {
        node = list[0];
        concatPart = node.joinFragmentArrays(args.slice(1), ', ');
        return args[0].concat(node.makeCode(".concat("), concatPart, node.makeCode(")"));
      }
      base = (function() {
        var k, len2, ref3, results;
        ref3 = list.slice(0, index);
        results = [];
        for (k = 0, len2 = ref3.length; k < len2; k++) {
          node = ref3[k];
          results.push(node.compileToFragments(o, LEVEL_LIST));
        }
        return results;
      })();
      base = list[0].joinFragmentArrays(base, ', ');
      concatPart = list[index].joinFragmentArrays(args, ', ');
      last = list[list.length - 1];
      return [].concat(list[0].makeCode("["), base, list[index].makeCode("].concat("), concatPart, last.makeCode(")"));
    };

    return Splat;

  })(Base);

  exports.Expansion = Expansion = (function(superClass1) {
    extend1(Expansion, superClass1);

    function Expansion() {
      return Expansion.__super__.constructor.apply(this, arguments);
    }

    Expansion.prototype.isComplex = NO;

    Expansion.prototype.compileNode = function(o) {
      return this.error('Expansion must be used inside a destructuring assignment or parameter list');
    };

    Expansion.prototype.asReference = function(o) {
      return this;
    };

    Expansion.prototype.eachName = function(iterator) {};

    return Expansion;

  })(Base);

  exports.While = While = (function(superClass1) {
    extend1(While, superClass1);

    function While(condition, options) {
      this.condition = (options != null ? options.invert : void 0) ? condition.invert() : condition;
      this.guard = options != null ? options.guard : void 0;
    }

    While.prototype.children = ['condition', 'guard', 'body'];

    While.prototype.isStatement = YES;

    While.prototype.makeReturn = function(res) {
      if (res) {
        return While.__super__.makeReturn.apply(this, arguments);
      } else {
        this.returns = !this.jumps({
          loop: true
        });
        return this;
      }
    };

    While.prototype.addBody = function(body1) {
      this.body = body1;
      return this;
    };

    While.prototype.jumps = function() {
      var expressions, j, jumpNode, len1, node;
      expressions = this.body.expressions;
      if (!expressions.length) {
        return false;
      }
      for (j = 0, len1 = expressions.length; j < len1; j++) {
        node = expressions[j];
        if (jumpNode = node.jumps({
          loop: true
        })) {
          return jumpNode;
        }
      }
      return false;
    };

    While.prototype.compileNode = function(o) {
      var answer, body, rvar, set;
      o.indent += TAB;
      set = '';
      body = this.body;
      if (body.isEmpty()) {
        body = this.makeCode('');
      } else {
        if (this.returns) {
          body.makeReturn(rvar = o.scope.freeVariable('results'));
          set = "" + this.tab + rvar + " = [];\n";
        }
        if (this.guard) {
          if (body.expressions.length > 1) {
            body.expressions.unshift(new If((new Parens(this.guard)).invert(), new Literal("continue")));
          } else {
            if (this.guard) {
              body = Block.wrap([new If(this.guard, body)]);
            }
          }
        }
        body = [].concat(this.makeCode("\n"), body.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab));
      }
      answer = [].concat(this.makeCode(set + this.tab + "while ("), this.condition.compileToFragments(o, LEVEL_PAREN), this.makeCode(") {"), body, this.makeCode("}"));
      if (this.returns) {
        answer.push(this.makeCode("\n" + this.tab + "return " + rvar + ";"));
      }
      return answer;
    };

    return While;

  })(Base);

  exports.Op = Op = (function(superClass1) {
    var CONVERSIONS, INVERSIONS;

    extend1(Op, superClass1);

    function Op(op, first, second, flip) {
      if (op === 'in') {
        return new In(first, second);
      }
      if (op === 'do') {
        return this.generateDo(first);
      }
      if (op === 'new') {
        if (first instanceof Call && !first["do"] && !first.isNew) {
          return first.newInstance();
        }
        if (first instanceof Code && first.bound || first["do"]) {
          first = new Parens(first);
        }
      }
      this.operator = CONVERSIONS[op] || op;
      this.first = first;
      this.second = second;
      this.flip = !!flip;
      return this;
    }

    CONVERSIONS = {
      '==': '===',
      '!=': '!==',
      'of': 'in',
      'yieldfrom': 'yield*'
    };

    INVERSIONS = {
      '!==': '===',
      '===': '!=='
    };

    Op.prototype.children = ['first', 'second'];

    Op.prototype.isSimpleNumber = NO;

    Op.prototype.isYield = function() {
      var ref3;
      return (ref3 = this.operator) === 'yield' || ref3 === 'yield*';
    };

    Op.prototype.isYieldReturn = function() {
      return this.isYield() && this.first instanceof Return;
    };

    Op.prototype.isUnary = function() {
      return !this.second;
    };

    Op.prototype.isComplex = function() {
      var ref3;
      return !(this.isUnary() && ((ref3 = this.operator) === '+' || ref3 === '-') && this.first instanceof Value && this.first.isSimpleNumber());
    };

    Op.prototype.isChainable = function() {
      var ref3;
      return (ref3 = this.operator) === '<' || ref3 === '>' || ref3 === '>=' || ref3 === '<=' || ref3 === '===' || ref3 === '!==';
    };

    Op.prototype.invert = function() {
      var allInvertable, curr, fst, op, ref3;
      if (this.isChainable() && this.first.isChainable()) {
        allInvertable = true;
        curr = this;
        while (curr && curr.operator) {
          allInvertable && (allInvertable = curr.operator in INVERSIONS);
          curr = curr.first;
        }
        if (!allInvertable) {
          return new Parens(this).invert();
        }
        curr = this;
        while (curr && curr.operator) {
          curr.invert = !curr.invert;
          curr.operator = INVERSIONS[curr.operator];
          curr = curr.first;
        }
        return this;
      } else if (op = INVERSIONS[this.operator]) {
        this.operator = op;
        if (this.first.unwrap() instanceof Op) {
          this.first.invert();
        }
        return this;
      } else if (this.second) {
        return new Parens(this).invert();
      } else if (this.operator === '!' && (fst = this.first.unwrap()) instanceof Op && ((ref3 = fst.operator) === '!' || ref3 === 'in' || ref3 === 'instanceof')) {
        return fst;
      } else {
        return new Op('!', this);
      }
    };

    Op.prototype.unfoldSoak = function(o) {
      var ref3;
      return ((ref3 = this.operator) === '++' || ref3 === '--' || ref3 === 'delete') && unfoldSoak(o, this, 'first');
    };

    Op.prototype.generateDo = function(exp) {
      var call, func, j, len1, param, passedParams, ref, ref3;
      passedParams = [];
      func = exp instanceof Assign && (ref = exp.value.unwrap()) instanceof Code ? ref : exp;
      ref3 = func.params || [];
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        param = ref3[j];
        if (param.value) {
          passedParams.push(param.value);
          delete param.value;
        } else {
          passedParams.push(param);
        }
      }
      call = new Call(exp, passedParams);
      call["do"] = true;
      return call;
    };

    Op.prototype.compileNode = function(o) {
      var answer, isChain, lhs, ref3, ref4, rhs;
      isChain = this.isChainable() && this.first.isChainable();
      if (!isChain) {
        this.first.front = this.front;
      }
      if (this.operator === 'delete' && o.scope.check(this.first.unwrapAll().value)) {
        this.error('delete operand may not be argument or var');
      }
      if (((ref3 = this.operator) === '--' || ref3 === '++') && (ref4 = this.first.unwrapAll().value, indexOf.call(STRICT_PROSCRIBED, ref4) >= 0)) {
        this.error("cannot increment/decrement \"" + (this.first.unwrapAll().value) + "\"");
      }
      if (this.isYield()) {
        return this.compileYield(o);
      }
      if (this.isUnary()) {
        return this.compileUnary(o);
      }
      if (isChain) {
        return this.compileChain(o);
      }
      switch (this.operator) {
        case '?':
          return this.compileExistence(o);
        case '**':
          return this.compilePower(o);
        case '//':
          return this.compileFloorDivision(o);
        case '%%':
          return this.compileModulo(o);
        default:
          lhs = this.first.compileToFragments(o, LEVEL_OP);
          rhs = this.second.compileToFragments(o, LEVEL_OP);
          answer = [].concat(lhs, this.makeCode(" " + this.operator + " "), rhs);
          if (o.level <= LEVEL_OP) {
            return answer;
          } else {
            return this.wrapInBraces(answer);
          }
      }
    };

    Op.prototype.compileChain = function(o) {
      var fragments, fst, ref3, shared;
      ref3 = this.first.second.cache(o), this.first.second = ref3[0], shared = ref3[1];
      fst = this.first.compileToFragments(o, LEVEL_OP);
      fragments = fst.concat(this.makeCode(" " + (this.invert ? '&&' : '||') + " "), shared.compileToFragments(o), this.makeCode(" " + this.operator + " "), this.second.compileToFragments(o, LEVEL_OP));
      return this.wrapInBraces(fragments);
    };

    Op.prototype.compileExistence = function(o) {
      var fst, ref;
      if (this.first.isComplex()) {
        ref = new Literal(o.scope.freeVariable('ref'));
        fst = new Parens(new Assign(ref, this.first));
      } else {
        fst = this.first;
        ref = fst;
      }
      return new If(new Existence(fst), ref, {
        type: 'if'
      }).addElse(this.second).compileToFragments(o);
    };

    Op.prototype.compileUnary = function(o) {
      var op, parts, plusMinus;
      parts = [];
      op = this.operator;
      parts.push([this.makeCode(op)]);
      if (op === '!' && this.first instanceof Existence) {
        this.first.negated = !this.first.negated;
        return this.first.compileToFragments(o);
      }
      if (o.level >= LEVEL_ACCESS) {
        return (new Parens(this)).compileToFragments(o);
      }
      plusMinus = op === '+' || op === '-';
      if ((op === 'new' || op === 'typeof' || op === 'delete') || plusMinus && this.first instanceof Op && this.first.operator === op) {
        parts.push([this.makeCode(' ')]);
      }
      if ((plusMinus && this.first instanceof Op) || (op === 'new' && this.first.isStatement(o))) {
        this.first = new Parens(this.first);
      }
      parts.push(this.first.compileToFragments(o, LEVEL_OP));
      if (this.flip) {
        parts.reverse();
      }
      return this.joinFragmentArrays(parts, '');
    };

    Op.prototype.compileYield = function(o) {
      var op, parts;
      parts = [];
      op = this.operator;
      if (o.scope.parent == null) {
        this.error('yield statements must occur within a function generator.');
      }
      if (indexOf.call(Object.keys(this.first), 'expression') >= 0 && !(this.first instanceof Throw)) {
        if (this.isYieldReturn()) {
          parts.push(this.first.compileToFragments(o, LEVEL_TOP));
        } else if (this.first.expression != null) {
          parts.push(this.first.expression.compileToFragments(o, LEVEL_OP));
        }
      } else {
        parts.push([this.makeCode("(" + op + " ")]);
        parts.push(this.first.compileToFragments(o, LEVEL_OP));
        parts.push([this.makeCode(")")]);
      }
      return this.joinFragmentArrays(parts, '');
    };

    Op.prototype.compilePower = function(o) {
      var pow;
      pow = new Value(new Literal('Math'), [new Access(new Literal('pow'))]);
      return new Call(pow, [this.first, this.second]).compileToFragments(o);
    };

    Op.prototype.compileFloorDivision = function(o) {
      var div, floor;
      floor = new Value(new Literal('Math'), [new Access(new Literal('floor'))]);
      div = new Op('/', this.first, this.second);
      return new Call(floor, [div]).compileToFragments(o);
    };

    Op.prototype.compileModulo = function(o) {
      var mod;
      mod = new Value(new Literal(utility('modulo', o)));
      return new Call(mod, [this.first, this.second]).compileToFragments(o);
    };

    Op.prototype.toString = function(idt) {
      return Op.__super__.toString.call(this, idt, this.constructor.name + ' ' + this.operator);
    };

    return Op;

  })(Base);

  exports.In = In = (function(superClass1) {
    extend1(In, superClass1);

    function In(object, array) {
      this.object = object;
      this.array = array;
    }

    In.prototype.children = ['object', 'array'];

    In.prototype.invert = NEGATE;

    In.prototype.compileNode = function(o) {
      var hasSplat, j, len1, obj, ref3;
      if (this.array instanceof Value && this.array.isArray() && this.array.base.objects.length) {
        ref3 = this.array.base.objects;
        for (j = 0, len1 = ref3.length; j < len1; j++) {
          obj = ref3[j];
          if (!(obj instanceof Splat)) {
            continue;
          }
          hasSplat = true;
          break;
        }
        if (!hasSplat) {
          return this.compileOrTest(o);
        }
      }
      return this.compileLoopTest(o);
    };

    In.prototype.compileOrTest = function(o) {
      var cmp, cnj, i, item, j, len1, ref, ref3, ref4, ref5, sub, tests;
      ref3 = this.object.cache(o, LEVEL_OP), sub = ref3[0], ref = ref3[1];
      ref4 = this.negated ? [' !== ', ' && '] : [' === ', ' || '], cmp = ref4[0], cnj = ref4[1];
      tests = [];
      ref5 = this.array.base.objects;
      for (i = j = 0, len1 = ref5.length; j < len1; i = ++j) {
        item = ref5[i];
        if (i) {
          tests.push(this.makeCode(cnj));
        }
        tests = tests.concat((i ? ref : sub), this.makeCode(cmp), item.compileToFragments(o, LEVEL_ACCESS));
      }
      if (o.level < LEVEL_OP) {
        return tests;
      } else {
        return this.wrapInBraces(tests);
      }
    };

    In.prototype.compileLoopTest = function(o) {
      var fragments, ref, ref3, sub;
      ref3 = this.object.cache(o, LEVEL_LIST), sub = ref3[0], ref = ref3[1];
      fragments = [].concat(this.makeCode(utility('indexOf', o) + ".call("), this.array.compileToFragments(o, LEVEL_LIST), this.makeCode(", "), ref, this.makeCode(") " + (this.negated ? '< 0' : '>= 0')));
      if (fragmentsToText(sub) === fragmentsToText(ref)) {
        return fragments;
      }
      fragments = sub.concat(this.makeCode(', '), fragments);
      if (o.level < LEVEL_LIST) {
        return fragments;
      } else {
        return this.wrapInBraces(fragments);
      }
    };

    In.prototype.toString = function(idt) {
      return In.__super__.toString.call(this, idt, this.constructor.name + (this.negated ? '!' : ''));
    };

    return In;

  })(Base);

  exports.Try = Try = (function(superClass1) {
    extend1(Try, superClass1);

    function Try(attempt, errorVariable, recovery, ensure) {
      this.attempt = attempt;
      this.errorVariable = errorVariable;
      this.recovery = recovery;
      this.ensure = ensure;
    }

    Try.prototype.children = ['attempt', 'recovery', 'ensure'];

    Try.prototype.isStatement = YES;

    Try.prototype.jumps = function(o) {
      var ref3;
      return this.attempt.jumps(o) || ((ref3 = this.recovery) != null ? ref3.jumps(o) : void 0);
    };

    Try.prototype.makeReturn = function(res) {
      if (this.attempt) {
        this.attempt = this.attempt.makeReturn(res);
      }
      if (this.recovery) {
        this.recovery = this.recovery.makeReturn(res);
      }
      return this;
    };

    Try.prototype.compileNode = function(o) {
      var catchPart, ensurePart, generatedErrorVariableName, placeholder, tryPart;
      o.indent += TAB;
      tryPart = this.attempt.compileToFragments(o, LEVEL_TOP);
      catchPart = this.recovery ? (generatedErrorVariableName = o.scope.freeVariable('error'), placeholder = new Literal(generatedErrorVariableName), this.errorVariable ? this.recovery.unshift(new Assign(this.errorVariable, placeholder)) : void 0, [].concat(this.makeCode(" catch ("), placeholder.compileToFragments(o), this.makeCode(") {\n"), this.recovery.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab + "}"))) : !(this.ensure || this.recovery) ? [this.makeCode(" catch (" + generatedErrorVariableName + ") {}")] : [];
      ensurePart = this.ensure ? [].concat(this.makeCode(" finally {\n"), this.ensure.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab + "}")) : [];
      return [].concat(this.makeCode(this.tab + "try {\n"), tryPart, this.makeCode("\n" + this.tab + "}"), catchPart, ensurePart);
    };

    return Try;

  })(Base);

  exports.Throw = Throw = (function(superClass1) {
    extend1(Throw, superClass1);

    function Throw(expression) {
      this.expression = expression;
    }

    Throw.prototype.children = ['expression'];

    Throw.prototype.isStatement = YES;

    Throw.prototype.jumps = NO;

    Throw.prototype.makeReturn = THIS;

    Throw.prototype.compileNode = function(o) {
      return [].concat(this.makeCode(this.tab + "throw "), this.expression.compileToFragments(o), this.makeCode(";"));
    };

    return Throw;

  })(Base);

  exports.Existence = Existence = (function(superClass1) {
    extend1(Existence, superClass1);

    function Existence(expression) {
      this.expression = expression;
    }

    Existence.prototype.children = ['expression'];

    Existence.prototype.invert = NEGATE;

    Existence.prototype.compileNode = function(o) {
      var cmp, cnj, code, ref3;
      this.expression.front = this.front;
      code = this.expression.compile(o, LEVEL_OP);
      if (IDENTIFIER.test(code) && !o.scope.check(code)) {
        ref3 = this.negated ? ['===', '||'] : ['!==', '&&'], cmp = ref3[0], cnj = ref3[1];
        code = "typeof " + code + " " + cmp + " \"undefined\" " + cnj + " " + code + " " + cmp + " null";
      } else {
        code = code + " " + (this.negated ? '==' : '!=') + " null";
      }
      return [this.makeCode(o.level <= LEVEL_COND ? code : "(" + code + ")")];
    };

    return Existence;

  })(Base);

  exports.Parens = Parens = (function(superClass1) {
    extend1(Parens, superClass1);

    function Parens(body1) {
      this.body = body1;
    }

    Parens.prototype.children = ['body'];

    Parens.prototype.unwrap = function() {
      return this.body;
    };

    Parens.prototype.isComplex = function() {
      return this.body.isComplex();
    };

    Parens.prototype.compileNode = function(o) {
      var bare, expr, fragments;
      expr = this.body.unwrap();
      if (expr instanceof Value && expr.isAtomic()) {
        expr.front = this.front;
        return expr.compileToFragments(o);
      }
      fragments = expr.compileToFragments(o, LEVEL_PAREN);
      bare = o.level < LEVEL_OP && (expr instanceof Op || expr instanceof Call || (expr instanceof For && expr.returns));
      if (bare) {
        return fragments;
      } else {
        return this.wrapInBraces(fragments);
      }
    };

    return Parens;

  })(Base);

  exports.For = For = (function(superClass1) {
    extend1(For, superClass1);

    function For(body, source) {
      var ref3;
      this.source = source.source, this.guard = source.guard, this.step = source.step, this.name = source.name, this.index = source.index;
      this.body = Block.wrap([body]);
      this.own = !!source.own;
      this.object = !!source.object;
      if (this.object) {
        ref3 = [this.index, this.name], this.name = ref3[0], this.index = ref3[1];
      }
      if (this.index instanceof Value) {
        this.index.error('index cannot be a pattern matching expression');
      }
      this.range = this.source instanceof Value && this.source.base instanceof Range && !this.source.properties.length;
      this.pattern = this.name instanceof Value;
      if (this.range && this.index) {
        this.index.error('indexes do not apply to range loops');
      }
      if (this.range && this.pattern) {
        this.name.error('cannot pattern match over range loops');
      }
      if (this.own && !this.object) {
        this.name.error('cannot use own with for-in');
      }
      this.returns = false;
    }

    For.prototype.children = ['body', 'source', 'guard', 'step'];

    For.prototype.compileNode = function(o) {
      var body, bodyFragments, compare, compareDown, declare, declareDown, defPart, defPartFragments, down, forPartFragments, guardPart, idt1, increment, index, ivar, kvar, kvarAssign, last, lvar, name, namePart, ref, ref3, ref4, resultPart, returnResult, rvar, scope, source, step, stepNum, stepVar, svar, varPart;
      body = Block.wrap([this.body]);
      ref3 = body.expressions, last = ref3[ref3.length - 1];
      if ((last != null ? last.jumps() : void 0) instanceof Return) {
        this.returns = false;
      }
      source = this.range ? this.source.base : this.source;
      scope = o.scope;
      if (!this.pattern) {
        name = this.name && (this.name.compile(o, LEVEL_LIST));
      }
      index = this.index && (this.index.compile(o, LEVEL_LIST));
      if (name && !this.pattern) {
        scope.find(name);
      }
      if (index) {
        scope.find(index);
      }
      if (this.returns) {
        rvar = scope.freeVariable('results');
      }
      ivar = (this.object && index) || scope.freeVariable('i', {
        single: true
      });
      kvar = (this.range && name) || index || ivar;
      kvarAssign = kvar !== ivar ? kvar + " = " : "";
      if (this.step && !this.range) {
        ref4 = this.cacheToCodeFragments(this.step.cache(o, LEVEL_LIST, isComplexOrAssignable)), step = ref4[0], stepVar = ref4[1];
        stepNum = stepVar.match(NUMBER);
      }
      if (this.pattern) {
        name = ivar;
      }
      varPart = '';
      guardPart = '';
      defPart = '';
      idt1 = this.tab + TAB;
      if (this.range) {
        forPartFragments = source.compileToFragments(merge(o, {
          index: ivar,
          name: name,
          step: this.step,
          isComplex: isComplexOrAssignable
        }));
      } else {
        svar = this.source.compile(o, LEVEL_LIST);
        if ((name || this.own) && !IDENTIFIER.test(svar)) {
          defPart += "" + this.tab + (ref = scope.freeVariable('ref')) + " = " + svar + ";\n";
          svar = ref;
        }
        if (name && !this.pattern) {
          namePart = name + " = " + svar + "[" + kvar + "]";
        }
        if (!this.object) {
          if (step !== stepVar) {
            defPart += "" + this.tab + step + ";\n";
          }
          if (!(this.step && stepNum && (down = parseNum(stepNum[0]) < 0))) {
            lvar = scope.freeVariable('len');
          }
          declare = "" + kvarAssign + ivar + " = 0, " + lvar + " = " + svar + ".length";
          declareDown = "" + kvarAssign + ivar + " = " + svar + ".length - 1";
          compare = ivar + " < " + lvar;
          compareDown = ivar + " >= 0";
          if (this.step) {
            if (stepNum) {
              if (down) {
                compare = compareDown;
                declare = declareDown;
              }
            } else {
              compare = stepVar + " > 0 ? " + compare + " : " + compareDown;
              declare = "(" + stepVar + " > 0 ? (" + declare + ") : " + declareDown + ")";
            }
            increment = ivar + " += " + stepVar;
          } else {
            increment = "" + (kvar !== ivar ? "++" + ivar : ivar + "++");
          }
          forPartFragments = [this.makeCode(declare + "; " + compare + "; " + kvarAssign + increment)];
        }
      }
      if (this.returns) {
        resultPart = "" + this.tab + rvar + " = [];\n";
        returnResult = "\n" + this.tab + "return " + rvar + ";";
        body.makeReturn(rvar);
      }
      if (this.guard) {
        if (body.expressions.length > 1) {
          body.expressions.unshift(new If((new Parens(this.guard)).invert(), new Literal("continue")));
        } else {
          if (this.guard) {
            body = Block.wrap([new If(this.guard, body)]);
          }
        }
      }
      if (this.pattern) {
        body.expressions.unshift(new Assign(this.name, new Literal(svar + "[" + kvar + "]")));
      }
      defPartFragments = [].concat(this.makeCode(defPart), this.pluckDirectCall(o, body));
      if (namePart) {
        varPart = "\n" + idt1 + namePart + ";";
      }
      if (this.object) {
        forPartFragments = [this.makeCode(kvar + " in " + svar)];
        if (this.own) {
          guardPart = "\n" + idt1 + "if (!" + (utility('hasProp', o)) + ".call(" + svar + ", " + kvar + ")) continue;";
        }
      }
      bodyFragments = body.compileToFragments(merge(o, {
        indent: idt1
      }), LEVEL_TOP);
      if (bodyFragments && (bodyFragments.length > 0)) {
        bodyFragments = [].concat(this.makeCode("\n"), bodyFragments, this.makeCode("\n"));
      }
      return [].concat(defPartFragments, this.makeCode("" + (resultPart || '') + this.tab + "for ("), forPartFragments, this.makeCode(") {" + guardPart + varPart), bodyFragments, this.makeCode(this.tab + "}" + (returnResult || '')));
    };

    For.prototype.pluckDirectCall = function(o, body) {
      var base, defs, expr, fn, idx, j, len1, ref, ref3, ref4, ref5, ref6, ref7, ref8, ref9, val;
      defs = [];
      ref3 = body.expressions;
      for (idx = j = 0, len1 = ref3.length; j < len1; idx = ++j) {
        expr = ref3[idx];
        expr = expr.unwrapAll();
        if (!(expr instanceof Call)) {
          continue;
        }
        val = (ref4 = expr.variable) != null ? ref4.unwrapAll() : void 0;
        if (!((val instanceof Code) || (val instanceof Value && ((ref5 = val.base) != null ? ref5.unwrapAll() : void 0) instanceof Code && val.properties.length === 1 && ((ref6 = (ref7 = val.properties[0].name) != null ? ref7.value : void 0) === 'call' || ref6 === 'apply')))) {
          continue;
        }
        fn = ((ref8 = val.base) != null ? ref8.unwrapAll() : void 0) || val;
        ref = new Literal(o.scope.freeVariable('fn'));
        base = new Value(ref);
        if (val.base) {
          ref9 = [base, val], val.base = ref9[0], base = ref9[1];
        }
        body.expressions[idx] = new Call(base, expr.args);
        defs = defs.concat(this.makeCode(this.tab), new Assign(ref, fn).compileToFragments(o, LEVEL_TOP), this.makeCode(';\n'));
      }
      return defs;
    };

    return For;

  })(While);

  exports.Switch = Switch = (function(superClass1) {
    extend1(Switch, superClass1);

    function Switch(subject, cases, otherwise) {
      this.subject = subject;
      this.cases = cases;
      this.otherwise = otherwise;
    }

    Switch.prototype.children = ['subject', 'cases', 'otherwise'];

    Switch.prototype.isStatement = YES;

    Switch.prototype.jumps = function(o) {
      var block, conds, j, jumpNode, len1, ref3, ref4, ref5;
      if (o == null) {
        o = {
          block: true
        };
      }
      ref3 = this.cases;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        ref4 = ref3[j], conds = ref4[0], block = ref4[1];
        if (jumpNode = block.jumps(o)) {
          return jumpNode;
        }
      }
      return (ref5 = this.otherwise) != null ? ref5.jumps(o) : void 0;
    };

    Switch.prototype.makeReturn = function(res) {
      var j, len1, pair, ref3, ref4;
      ref3 = this.cases;
      for (j = 0, len1 = ref3.length; j < len1; j++) {
        pair = ref3[j];
        pair[1].makeReturn(res);
      }
      if (res) {
        this.otherwise || (this.otherwise = new Block([new Literal('void 0')]));
      }
      if ((ref4 = this.otherwise) != null) {
        ref4.makeReturn(res);
      }
      return this;
    };

    Switch.prototype.compileNode = function(o) {
      var block, body, cond, conditions, expr, fragments, i, idt1, idt2, j, k, len1, len2, ref3, ref4, ref5;
      idt1 = o.indent + TAB;
      idt2 = o.indent = idt1 + TAB;
      fragments = [].concat(this.makeCode(this.tab + "switch ("), (this.subject ? this.subject.compileToFragments(o, LEVEL_PAREN) : this.makeCode("false")), this.makeCode(") {\n"));
      ref3 = this.cases;
      for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
        ref4 = ref3[i], conditions = ref4[0], block = ref4[1];
        ref5 = flatten([conditions]);
        for (k = 0, len2 = ref5.length; k < len2; k++) {
          cond = ref5[k];
          if (!this.subject) {
            cond = cond.invert();
          }
          fragments = fragments.concat(this.makeCode(idt1 + "case "), cond.compileToFragments(o, LEVEL_PAREN), this.makeCode(":\n"));
        }
        if ((body = block.compileToFragments(o, LEVEL_TOP)).length > 0) {
          fragments = fragments.concat(body, this.makeCode('\n'));
        }
        if (i === this.cases.length - 1 && !this.otherwise) {
          break;
        }
        expr = this.lastNonComment(block.expressions);
        if (expr instanceof Return || (expr instanceof Literal && expr.jumps() && expr.value !== 'debugger')) {
          continue;
        }
        fragments.push(cond.makeCode(idt2 + 'break;\n'));
      }
      if (this.otherwise && this.otherwise.expressions.length) {
        fragments.push.apply(fragments, [this.makeCode(idt1 + "default:\n")].concat(slice.call(this.otherwise.compileToFragments(o, LEVEL_TOP)), [this.makeCode("\n")]));
      }
      fragments.push(this.makeCode(this.tab + '}'));
      return fragments;
    };

    return Switch;

  })(Base);

  exports.If = If = (function(superClass1) {
    extend1(If, superClass1);

    function If(condition, body1, options) {
      this.body = body1;
      if (options == null) {
        options = {};
      }
      this.condition = options.type === 'unless' ? condition.invert() : condition;
      this.elseBody = null;
      this.isChain = false;
      this.soak = options.soak;
    }

    If.prototype.children = ['condition', 'body', 'elseBody'];

    If.prototype.bodyNode = function() {
      var ref3;
      return (ref3 = this.body) != null ? ref3.unwrap() : void 0;
    };

    If.prototype.elseBodyNode = function() {
      var ref3;
      return (ref3 = this.elseBody) != null ? ref3.unwrap() : void 0;
    };

    If.prototype.addElse = function(elseBody) {
      if (this.isChain) {
        this.elseBodyNode().addElse(elseBody);
      } else {
        this.isChain = elseBody instanceof If;
        this.elseBody = this.ensureBlock(elseBody);
        this.elseBody.updateLocationDataIfMissing(elseBody.locationData);
      }
      return this;
    };

    If.prototype.isStatement = function(o) {
      var ref3;
      return (o != null ? o.level : void 0) === LEVEL_TOP || this.bodyNode().isStatement(o) || ((ref3 = this.elseBodyNode()) != null ? ref3.isStatement(o) : void 0);
    };

    If.prototype.jumps = function(o) {
      var ref3;
      return this.body.jumps(o) || ((ref3 = this.elseBody) != null ? ref3.jumps(o) : void 0);
    };

    If.prototype.compileNode = function(o) {
      if (this.isStatement(o)) {
        return this.compileStatement(o);
      } else {
        return this.compileExpression(o);
      }
    };

    If.prototype.makeReturn = function(res) {
      if (res) {
        this.elseBody || (this.elseBody = new Block([new Literal('void 0')]));
      }
      this.body && (this.body = new Block([this.body.makeReturn(res)]));
      this.elseBody && (this.elseBody = new Block([this.elseBody.makeReturn(res)]));
      return this;
    };

    If.prototype.ensureBlock = function(node) {
      if (node instanceof Block) {
        return node;
      } else {
        return new Block([node]);
      }
    };

    If.prototype.compileStatement = function(o) {
      var answer, body, child, cond, exeq, ifPart, indent;
      child = del(o, 'chainChild');
      exeq = del(o, 'isExistentialEquals');
      if (exeq) {
        return new If(this.condition.invert(), this.elseBodyNode(), {
          type: 'if'
        }).compileToFragments(o);
      }
      indent = o.indent + TAB;
      cond = this.condition.compileToFragments(o, LEVEL_PAREN);
      body = this.ensureBlock(this.body).compileToFragments(merge(o, {
        indent: indent
      }));
      ifPart = [].concat(this.makeCode("if ("), cond, this.makeCode(") {\n"), body, this.makeCode("\n" + this.tab + "}"));
      if (!child) {
        ifPart.unshift(this.makeCode(this.tab));
      }
      if (!this.elseBody) {
        return ifPart;
      }
      answer = ifPart.concat(this.makeCode(' else '));
      if (this.isChain) {
        o.chainChild = true;
        answer = answer.concat(this.elseBody.unwrap().compileToFragments(o, LEVEL_TOP));
      } else {
        answer = answer.concat(this.makeCode("{\n"), this.elseBody.compileToFragments(merge(o, {
          indent: indent
        }), LEVEL_TOP), this.makeCode("\n" + this.tab + "}"));
      }
      return answer;
    };

    If.prototype.compileExpression = function(o) {
      var alt, body, cond, fragments;
      cond = this.condition.compileToFragments(o, LEVEL_COND);
      body = this.bodyNode().compileToFragments(o, LEVEL_LIST);
      alt = this.elseBodyNode() ? this.elseBodyNode().compileToFragments(o, LEVEL_LIST) : [this.makeCode('void 0')];
      fragments = cond.concat(this.makeCode(" ? "), body, this.makeCode(" : "), alt);
      if (o.level >= LEVEL_COND) {
        return this.wrapInBraces(fragments);
      } else {
        return fragments;
      }
    };

    If.prototype.unfoldSoak = function() {
      return this.soak && this;
    };

    return If;

  })(Base);

  UTILITIES = {
    extend: function(o) {
      return "function(child, parent) { for (var key in parent) { if (" + (utility('hasProp', o)) + ".call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }";
    },
    bind: function() {
      return 'function(fn, me){ return function(){ return fn.apply(me, arguments); }; }';
    },
    indexOf: function() {
      return "[].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }";
    },
    modulo: function() {
      return "function(a, b) { return (+a % (b = +b) + b) % b; }";
    },
    hasProp: function() {
      return '{}.hasOwnProperty';
    },
    slice: function() {
      return '[].slice';
    }
  };

  LEVEL_TOP = 1;

  LEVEL_PAREN = 2;

  LEVEL_LIST = 3;

  LEVEL_COND = 4;

  LEVEL_OP = 5;

  LEVEL_ACCESS = 6;

  TAB = '  ';

  IDENTIFIER = /^(?!\d)[$\w\x7f-\uffff]+$/;

  SIMPLENUM = /^[+-]?\d+$/;

  HEXNUM = /^[+-]?0x[\da-f]+/i;

  NUMBER = /^[+-]?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)$/i;

  IS_STRING = /^['"]/;

  IS_REGEX = /^\//;

  utility = function(name, o) {
    var ref, root;
    root = o.scope.root;
    if (name in root.utilities) {
      return root.utilities[name];
    } else {
      ref = root.freeVariable(name);
      root.assign(ref, UTILITIES[name](o));
      return root.utilities[name] = ref;
    }
  };

  multident = function(code, tab) {
    code = code.replace(/\n/g, '$&' + tab);
    return code.replace(/\s+$/, '');
  };

  parseNum = function(x) {
    if (x == null) {
      return 0;
    } else if (x.match(HEXNUM)) {
      return parseInt(x, 16);
    } else {
      return parseFloat(x);
    }
  };

  isLiteralArguments = function(node) {
    return node instanceof Literal && node.value === 'arguments' && !node.asKey;
  };

  isLiteralThis = function(node) {
    return (node instanceof Literal && node.value === 'this' && !node.asKey) || (node instanceof Code && node.bound) || (node instanceof Call && node.isSuper);
  };

  isComplexOrAssignable = function(node) {
    return node.isComplex() || (typeof node.isAssignable === "function" ? node.isAssignable() : void 0);
  };

  unfoldSoak = function(o, parent, name) {
    var ifn;
    if (!(ifn = parent[name].unfoldSoak(o))) {
      return;
    }
    parent[name] = ifn.body;
    ifn.body = new Value(parent);
    return ifn;
  };

}).call(this);


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(9), __webpack_require__(11), __webpack_require__(30), __webpack_require__(33), __webpack_require__(0), __webpack_require__(5), __webpack_require__(15)) :
  typeof define === 'function' && define.amd ? define(['exports', 'decaffeinate-coffeescript', 'decaffeinate-coffeescript/lib/coffee-script/nodes', 'lines-and-columns', 'util', 'coffee-lex/dist/SourceType', 'coffee-lex', 'babylon'], factory) :
  (factory((global.decaffeinate = global.decaffeinate || {}, global.decaffeinate.parser = global.decaffeinate.parser || {}),global.CoffeeScript,global.decaffeinateCoffeescript_lib_coffeeScript_nodes,global.LinesAndColumns,global.util,global.SourceType,global.lex,global.babylon));
}(this, (function (exports,CoffeeScript,decaffeinateCoffeescript_lib_coffeeScript_nodes,LinesAndColumns,util,SourceType,lex,babylon) { 'use strict';

LinesAndColumns = 'default' in LinesAndColumns ? LinesAndColumns['default'] : LinesAndColumns;
SourceType = 'default' in SourceType ? SourceType['default'] : SourceType;
var lex__default = 'default' in lex ? lex['default'] : lex;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var ParseError = function (_super) {
    __extends(ParseError, _super);
    function ParseError(syntaxError) {
        var _this = _super.call(this, syntaxError.message) || this;
        _this.syntaxError = syntaxError;
        return _this;
    }
    return ParseError;
}(Error);
var ParseContext = function () {
    function ParseContext(source, sourceTokens, ast) {
        this.source = source;
        this.linesAndColumns = new LinesAndColumns(source);
        this.ast = ast;
        this.sourceTokens = sourceTokens;
    }
    ParseContext.prototype.getRange = function (locatable) {
        if ('range' in locatable) {
            return locatable.range;
        } else if (locatable instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Base) {
            return this.getRange(locatable.locationData);
        } else {
            var locationData = locatable;
            var start = this.linesAndColumns.indexForLocation({ line: locationData.first_line, column: locationData.first_column });
            var end = this.linesAndColumns.indexForLocation({ line: locationData.last_line, column: locationData.last_column });
            if (start === null || end === null) {
                return null;
            }
            return [start, end];
        }
    };
    ParseContext.fromSource = function (source, sourceLex, parse$$1) {
        try {
            var sourceTokens = sourceLex(source);
            return new ParseContext(source, sourceTokens, parse$$1(source));
        } catch (ex) {
            if (ex instanceof SyntaxError) {
                throw new ParseError(ex);
            } else {
                throw ex;
            }
        }
    };
    return ParseContext;
}();

function expandLocationLeftThrough(context, loc, string) {
    var offset = context.linesAndColumns.indexForLocation({ line: loc.first_line, column: loc.first_column });
    offset = context.source.lastIndexOf(string, offset === null ? undefined : offset);
    var newLoc = context.linesAndColumns.locationForIndex(offset);
    if (offset < 0 || newLoc === null) {
        throw new Error("unable to expand location starting at " + (loc.first_line + 1) + ":" + (loc.first_column + 1) + " " + ("because it is not preceded by " + JSON.stringify(string)));
    }
    return {
        first_line: newLoc.line,
        first_column: newLoc.column,
        last_line: loc.last_line,
        last_column: loc.last_column
    };
}

function isComparisonOperator(node) {
    if (!(node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Op)) {
        return false;
    }
    switch (node.operator) {
        case '<':
        case '>':
        case '<=':
        case '>=':
        case '===':
        case '!==':
            return true;
        default:
            return false;
    }
}

function isChainedComparison(node) {
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Op && isComparisonOperator(node)) {
        return isComparisonOperator(node.first) || (node.second ? isComparisonOperator(node.second) : false);
    } else {
        return false;
    }
}

function unwindChainedComparison(node) {
    var operands = [];
    for (var link = node;;) {
        if (link instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Op && isComparisonOperator(link)) {
            var first = link.first,
                second = link.second;
            if (!second) {
                throw new Error("unexpected unary operator inside chained comparison: " + util.inspect(node));
            }
            operands = [second].concat(operands);
            link = first;
        } else {
            operands = [link].concat(operands);
            break;
        }
    }
    return operands;
}

var Node = function () {
    function Node(type, line, column, start, end, raw) {
        this.type = type;
        this.line = line;
        this.column = column;
        this.start = start;
        this.end = end;
        this.raw = raw;
        this.range = [start, end];
        this.raw = raw;
    }
    return Node;
}();
var Identifier = function (_super) {
    __extends(Identifier, _super);
    function Identifier(line, column, start, end, raw, data) {
        var _this = _super.call(this, 'Identifier', line, column, start, end, raw) || this;
        _this.data = data;
        return _this;
    }
    return Identifier;
}(Node);
var Bool$1 = function (_super) {
    __extends(Bool$$1, _super);
    function Bool$$1(line, column, start, end, raw, data) {
        var _this = _super.call(this, 'Bool', line, column, start, end, raw) || this;
        _this.data = data;
        return _this;
    }
    Bool$$1["true"] = function () {
        return new Bool$$1(0, 0, 0, 0, '', true);
    };
    Bool$$1["false"] = function () {
        return new Bool$$1(0, 0, 0, 0, '', false);
    };
    return Bool$$1;
}(Node);
var JavaScript = function (_super) {
    __extends(JavaScript, _super);
    function JavaScript(line, column, start, end, raw, data) {
        var _this = _super.call(this, 'JavaScript', line, column, start, end, raw) || this;
        _this.data = data;
        return _this;
    }
    return JavaScript;
}(Node);
var Number = function (_super) {
    __extends(Number, _super);
    function Number(type, line, column, start, end, raw, data) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.data = data;
        return _this;
    }
    return Number;
}(Node);
var Float = function (_super) {
    __extends(Float, _super);
    function Float(line, column, start, end, raw, data) {
        return _super.call(this, 'Float', line, column, start, end, raw, data) || this;
    }
    return Float;
}(Number);
var Int = function (_super) {
    __extends(Int, _super);
    function Int(line, column, start, end, raw, data) {
        return _super.call(this, 'Int', line, column, start, end, raw, data) || this;
    }
    return Int;
}(Number);
var AccessOp = function (_super) {
    __extends(AccessOp, _super);
    function AccessOp(type, line, column, start, end, raw, expression) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return AccessOp;
}(Node);
var MemberAccessOp = function (_super) {
    __extends(MemberAccessOp, _super);
    function MemberAccessOp(line, column, start, end, raw, expression, member) {
        var _this = _super.call(this, 'MemberAccessOp', line, column, start, end, raw, expression) || this;
        _this.member = member;
        return _this;
    }
    return MemberAccessOp;
}(AccessOp);
var ProtoMemberAccessOp = function (_super) {
    __extends(ProtoMemberAccessOp, _super);
    function ProtoMemberAccessOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'ProtoMemberAccessOp', line, column, start, end, raw, expression) || this;
    }
    return ProtoMemberAccessOp;
}(AccessOp);
var SoakedMemberAccessOp = function (_super) {
    __extends(SoakedMemberAccessOp, _super);
    function SoakedMemberAccessOp(line, column, start, end, raw, expression, member) {
        var _this = _super.call(this, 'SoakedMemberAccessOp', line, column, start, end, raw, expression) || this;
        _this.member = member;
        return _this;
    }
    return SoakedMemberAccessOp;
}(AccessOp);
var SoakedProtoMemberAccessOp = function (_super) {
    __extends(SoakedProtoMemberAccessOp, _super);
    function SoakedProtoMemberAccessOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'SoakedProtoMemberAccessOp', line, column, start, end, raw, expression) || this;
    }
    return SoakedProtoMemberAccessOp;
}(AccessOp);
var Quasi = function (_super) {
    __extends(Quasi, _super);
    function Quasi(line, column, start, end, raw, data) {
        var _this = _super.call(this, 'Quasi', line, column, start, end, raw) || this;
        _this.data = data;
        return _this;
    }
    return Quasi;
}(Node);
var String = function (_super) {
    __extends(String, _super);
    function String(line, column, start, end, raw, quasis, expressions) {
        var _this = _super.call(this, 'String', line, column, start, end, raw) || this;
        _this.quasis = quasis;
        _this.expressions = expressions;
        return _this;
    }
    return String;
}(Node);
var ObjectInitialiser = function (_super) {
    __extends(ObjectInitialiser, _super);
    function ObjectInitialiser(line, column, start, end, raw, members) {
        var _this = _super.call(this, 'ObjectInitialiser', line, column, start, end, raw) || this;
        _this.members = members;
        return _this;
    }
    return ObjectInitialiser;
}(Node);
var ObjectInitialiserMember = function (_super) {
    __extends(ObjectInitialiserMember, _super);
    function ObjectInitialiserMember(line, column, start, end, raw, key, expression) {
        var _this = _super.call(this, 'ObjectInitialiserMember', line, column, start, end, raw) || this;
        _this.key = key;
        _this.expression = expression;
        return _this;
    }
    return ObjectInitialiserMember;
}(Node);
var Conditional = function (_super) {
    __extends(Conditional, _super);
    function Conditional(line, column, start, end, raw, condition, consequent, alternate, isUnless) {
        var _this = _super.call(this, 'Conditional', line, column, start, end, raw) || this;
        _this.condition = condition;
        _this.consequent = consequent;
        _this.alternate = alternate;
        _this.isUnless = isUnless;
        return _this;
    }
    return Conditional;
}(Node);
var Program = function (_super) {
    __extends(Program, _super);
    function Program(line, column, start, end, raw, body) {
        var _this = _super.call(this, 'Program', line, column, start, end, raw) || this;
        _this.body = body;
        return _this;
    }
    return Program;
}(Node);
var Block$1 = function (_super) {
    __extends(Block$$1, _super);
    function Block$$1(line, column, start, end, raw, statements, inline) {
        var _this = _super.call(this, 'Block', line, column, start, end, raw) || this;
        _this.statements = statements;
        _this.inline = inline;
        return _this;
    }
    return Block$$1;
}(Node);
var Loop = function (_super) {
    __extends(Loop, _super);
    function Loop(line, column, start, end, raw, body) {
        var _this = _super.call(this, 'Loop', line, column, start, end, raw) || this;
        _this.body = body;
        return _this;
    }
    return Loop;
}(Node);
var While$1 = function (_super) {
    __extends(While$$1, _super);
    function While$$1(line, column, start, end, raw, condition, guard, body, isUntil) {
        var _this = _super.call(this, 'While', line, column, start, end, raw) || this;
        _this.condition = condition;
        _this.guard = guard;
        _this.body = body;
        _this.isUntil = isUntil;
        return _this;
    }
    return While$$1;
}(Node);
var For$1 = function (_super) {
    __extends(For$$1, _super);
    function For$$1(type, line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.keyAssignee = keyAssignee;
        _this.valAssignee = valAssignee;
        _this.target = target;
        _this.filter = filter;
        _this.body = body;
        return _this;
    }
    return For$$1;
}(Node);
var ForOf = function (_super) {
    __extends(ForOf, _super);
    function ForOf(line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body, isOwn) {
        var _this = _super.call(this, 'ForOf', line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body) || this;
        _this.isOwn = isOwn;
        return _this;
    }
    return ForOf;
}(For$1);
var ForIn = function (_super) {
    __extends(ForIn, _super);
    function ForIn(line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body, step) {
        var _this = _super.call(this, 'ForIn', line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body) || this;
        _this.step = step;
        return _this;
    }
    return ForIn;
}(For$1);
var Switch$1 = function (_super) {
    __extends(Switch$$1, _super);
    function Switch$$1(line, column, start, end, raw, expression, cases, alternate) {
        var _this = _super.call(this, 'Switch', line, column, start, end, raw) || this;
        _this.expression = expression;
        _this.cases = cases;
        _this.alternate = alternate;
        return _this;
    }
    return Switch$$1;
}(Node);
var SwitchCase = function (_super) {
    __extends(SwitchCase, _super);
    function SwitchCase(line, column, start, end, raw, conditions, consequent) {
        var _this = _super.call(this, 'SwitchCase', line, column, start, end, raw) || this;
        _this.conditions = conditions;
        _this.consequent = consequent;
        return _this;
    }
    return SwitchCase;
}(Node);
var RegexFlags = function () {
    function RegexFlags(global, ignoreCase, multiline, sticky) {
        this.global = global;
        this.ignoreCase = ignoreCase;
        this.multiline = multiline;
        this.sticky = sticky;
        this.g = global;
        this.i = ignoreCase;
        this.m = multiline;
        this.y = sticky;
    }
    RegexFlags.parse = function (flags) {
        var global = false;
        var ignoreCase = false;
        var multiline = false;
        var sticky = false;
        for (var i = 0; i < flags.length; i++) {
            switch (flags.charCodeAt(i)) {
                case 103:
                    global = true;
                    break;
                case 105:
                    ignoreCase = true;
                    break;
                case 109:
                    multiline = true;
                    break;
                case 121:
                    sticky = true;
                    break;
                default:
                    throw new Error("invalid regular expression flags: " + flags);
            }
        }
        return new RegexFlags(global, ignoreCase, multiline, sticky);
    };
    return RegexFlags;
}();
var Heregex = function (_super) {
    __extends(Heregex, _super);
    function Heregex(line, column, start, end, raw, quasis, expressions, flags) {
        var _this = _super.call(this, 'Heregex', line, column, start, end, raw) || this;
        _this.quasis = quasis;
        _this.expressions = expressions;
        _this.flags = flags;
        return _this;
    }
    return Heregex;
}(Node);
var Null$1 = function (_super) {
    __extends(Null$$1, _super);
    function Null$$1(line, column, start, end, raw) {
        return _super.call(this, 'Null', line, column, start, end, raw) || this;
    }
    return Null$$1;
}(Node);
var Undefined$1 = function (_super) {
    __extends(Undefined$$1, _super);
    function Undefined$$1(line, column, start, end, raw) {
        return _super.call(this, 'Undefined', line, column, start, end, raw) || this;
    }
    return Undefined$$1;
}(Node);
var Regex = function (_super) {
    __extends(Regex, _super);
    function Regex(line, column, start, end, raw, pattern, flags) {
        var _this = _super.call(this, 'Regex', line, column, start, end, raw) || this;
        _this.pattern = pattern;
        _this.flags = flags;
        return _this;
    }
    return Regex;
}(Node);
var Return$1 = function (_super) {
    __extends(Return$$1, _super);
    function Return$$1(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'Return', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return Return$$1;
}(Node);
var YieldReturn = function (_super) {
    __extends(YieldReturn, _super);
    function YieldReturn(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'YieldReturn', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return YieldReturn;
}(Node);
var This = function (_super) {
    __extends(This, _super);
    function This(line, column, start, end, raw) {
        return _super.call(this, 'This', line, column, start, end, raw) || this;
    }
    return This;
}(Node);
var Throw$1 = function (_super) {
    __extends(Throw$$1, _super);
    function Throw$$1(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'Throw', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return Throw$$1;
}(Node);
var ArrayInitialiser = function (_super) {
    __extends(ArrayInitialiser, _super);
    function ArrayInitialiser(line, column, start, end, raw, members) {
        var _this = _super.call(this, 'ArrayInitialiser', line, column, start, end, raw) || this;
        _this.members = members;
        return _this;
    }
    return ArrayInitialiser;
}(Node);
var DefaultParam = function (_super) {
    __extends(DefaultParam, _super);
    function DefaultParam(line, column, start, end, raw, param, defaultValue) {
        var _this = _super.call(this, 'DefaultParam', line, column, start, end, raw) || this;
        _this.param = param;
        _this["default"] = defaultValue;
        return _this;
    }
    return DefaultParam;
}(Node);
var Rest = function (_super) {
    __extends(Rest, _super);
    function Rest(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'Rest', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return Rest;
}(Node);
var Break = function (_super) {
    __extends(Break, _super);
    function Break(line, column, start, end, raw) {
        return _super.call(this, 'Break', line, column, start, end, raw) || this;
    }
    return Break;
}(Node);
var Continue = function (_super) {
    __extends(Continue, _super);
    function Continue(line, column, start, end, raw) {
        return _super.call(this, 'Continue', line, column, start, end, raw) || this;
    }
    return Continue;
}(Node);
var Spread = function (_super) {
    __extends(Spread, _super);
    function Spread(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'Spread', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return Spread;
}(Node);
var Range$1 = function (_super) {
    __extends(Range$$1, _super);
    function Range$$1(line, column, start, end, raw, left, right, isInclusive) {
        var _this = _super.call(this, 'Range', line, column, start, end, raw) || this;
        _this.left = left;
        _this.right = right;
        _this.isInclusive = isInclusive;
        return _this;
    }
    return Range$$1;
}(Node);
var BinaryOp = function (_super) {
    __extends(BinaryOp, _super);
    function BinaryOp(type, line, column, start, end, raw, left, right) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    return BinaryOp;
}(Node);
var UnaryOp = function (_super) {
    __extends(UnaryOp, _super);
    function UnaryOp(type, line, column, start, end, raw, expression) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return UnaryOp;
}(Node);
var ChainedComparisonOp = function (_super) {
    __extends(ChainedComparisonOp, _super);
    function ChainedComparisonOp(line, column, start, end, raw, operands, operators) {
        var _this = _super.call(this, 'ChainedComparisonOp', line, column, start, end, raw) || this;
        _this.operands = operands;
        _this.operators = operators;
        return _this;
    }
    return ChainedComparisonOp;
}(Node);
var OperatorInfo = function () {
    function OperatorInfo(operator, token) {
        this.operator = operator;
        this.token = token;
    }
    return OperatorInfo;
}();
var EQOp = function (_super) {
    __extends(EQOp, _super);
    function EQOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'EQOp', line, column, start, end, raw, left, right) || this;
    }
    return EQOp;
}(BinaryOp);
var NEQOp = function (_super) {
    __extends(NEQOp, _super);
    function NEQOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'NEQOp', line, column, start, end, raw, left, right) || this;
    }
    return NEQOp;
}(BinaryOp);
var LTOp = function (_super) {
    __extends(LTOp, _super);
    function LTOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'LTOp', line, column, start, end, raw, left, right) || this;
    }
    return LTOp;
}(BinaryOp);
var LTEOp = function (_super) {
    __extends(LTEOp, _super);
    function LTEOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'LTEOp', line, column, start, end, raw, left, right) || this;
    }
    return LTEOp;
}(BinaryOp);
var GTOp = function (_super) {
    __extends(GTOp, _super);
    function GTOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'GTOp', line, column, start, end, raw, left, right) || this;
    }
    return GTOp;
}(BinaryOp);
var GTEOp = function (_super) {
    __extends(GTEOp, _super);
    function GTEOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'GTEOp', line, column, start, end, raw, left, right) || this;
    }
    return GTEOp;
}(BinaryOp);
var LogicalNotOp = function (_super) {
    __extends(LogicalNotOp, _super);
    function LogicalNotOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'LogicalNotOp', line, column, start, end, raw, expression) || this;
    }
    return LogicalNotOp;
}(UnaryOp);
var LogicalAndOp = function (_super) {
    __extends(LogicalAndOp, _super);
    function LogicalAndOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'LogicalAndOp', line, column, start, end, raw, left, right) || this;
    }
    return LogicalAndOp;
}(BinaryOp);
var LogicalOrOp = function (_super) {
    __extends(LogicalOrOp, _super);
    function LogicalOrOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'LogicalOrOp', line, column, start, end, raw, left, right) || this;
    }
    return LogicalOrOp;
}(BinaryOp);
var SubtractOp = function (_super) {
    __extends(SubtractOp, _super);
    function SubtractOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'SubtractOp', line, column, start, end, raw, left, right) || this;
    }
    return SubtractOp;
}(BinaryOp);
var PlusOp = function (_super) {
    __extends(PlusOp, _super);
    function PlusOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'PlusOp', line, column, start, end, raw, left, right) || this;
    }
    return PlusOp;
}(BinaryOp);
var UnaryPlusOp = function (_super) {
    __extends(UnaryPlusOp, _super);
    function UnaryPlusOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'UnaryPlusOp', line, column, start, end, raw, expression) || this;
    }
    return UnaryPlusOp;
}(UnaryOp);
var MultiplyOp = function (_super) {
    __extends(MultiplyOp, _super);
    function MultiplyOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'MultiplyOp', line, column, start, end, raw, left, right) || this;
    }
    return MultiplyOp;
}(BinaryOp);
var DivideOp = function (_super) {
    __extends(DivideOp, _super);
    function DivideOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'DivideOp', line, column, start, end, raw, left, right) || this;
    }
    return DivideOp;
}(BinaryOp);
var UnaryExistsOp = function (_super) {
    __extends(UnaryExistsOp, _super);
    function UnaryExistsOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'UnaryExistsOp', line, column, start, end, raw, expression) || this;
    }
    return UnaryExistsOp;
}(UnaryOp);
var UnaryNegateOp = function (_super) {
    __extends(UnaryNegateOp, _super);
    function UnaryNegateOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'UnaryNegateOp', line, column, start, end, raw, expression) || this;
    }
    return UnaryNegateOp;
}(UnaryOp);
var BitNotOp = function (_super) {
    __extends(BitNotOp, _super);
    function BitNotOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'BitNotOp', line, column, start, end, raw, expression) || this;
    }
    return BitNotOp;
}(UnaryOp);
var BitAndOp = function (_super) {
    __extends(BitAndOp, _super);
    function BitAndOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'BitAndOp', line, column, start, end, raw, left, right) || this;
    }
    return BitAndOp;
}(BinaryOp);
var BitOrOp = function (_super) {
    __extends(BitOrOp, _super);
    function BitOrOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'BitOrOp', line, column, start, end, raw, left, right) || this;
    }
    return BitOrOp;
}(BinaryOp);
var BitXorOp = function (_super) {
    __extends(BitXorOp, _super);
    function BitXorOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'BitXorOp', line, column, start, end, raw, left, right) || this;
    }
    return BitXorOp;
}(BinaryOp);
var LeftShiftOp = function (_super) {
    __extends(LeftShiftOp, _super);
    function LeftShiftOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'LeftShiftOp', line, column, start, end, raw, left, right) || this;
    }
    return LeftShiftOp;
}(BinaryOp);
var SignedRightShiftOp = function (_super) {
    __extends(SignedRightShiftOp, _super);
    function SignedRightShiftOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'SignedRightShiftOp', line, column, start, end, raw, left, right) || this;
    }
    return SignedRightShiftOp;
}(BinaryOp);
var UnsignedRightShiftOp = function (_super) {
    __extends(UnsignedRightShiftOp, _super);
    function UnsignedRightShiftOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'UnsignedRightShiftOp', line, column, start, end, raw, left, right) || this;
    }
    return UnsignedRightShiftOp;
}(BinaryOp);
var PreDecrementOp = function (_super) {
    __extends(PreDecrementOp, _super);
    function PreDecrementOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'PreDecrementOp', line, column, start, end, raw, expression) || this;
    }
    return PreDecrementOp;
}(UnaryOp);
var PreIncrementOp = function (_super) {
    __extends(PreIncrementOp, _super);
    function PreIncrementOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'PreIncrementOp', line, column, start, end, raw, expression) || this;
    }
    return PreIncrementOp;
}(UnaryOp);
var PostDecrementOp = function (_super) {
    __extends(PostDecrementOp, _super);
    function PostDecrementOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'PostDecrementOp', line, column, start, end, raw, expression) || this;
    }
    return PostDecrementOp;
}(UnaryOp);
var PostIncrementOp = function (_super) {
    __extends(PostIncrementOp, _super);
    function PostIncrementOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'PostIncrementOp', line, column, start, end, raw, expression) || this;
    }
    return PostIncrementOp;
}(UnaryOp);
var ExpOp = function (_super) {
    __extends(ExpOp, _super);
    function ExpOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'ExpOp', line, column, start, end, raw, left, right) || this;
    }
    return ExpOp;
}(BinaryOp);
var RemOp = function (_super) {
    __extends(RemOp, _super);
    function RemOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'RemOp', line, column, start, end, raw, left, right) || this;
    }
    return RemOp;
}(BinaryOp);
var ModuloOp = function (_super) {
    __extends(ModuloOp, _super);
    function ModuloOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'ModuloOp', line, column, start, end, raw, left, right) || this;
    }
    return ModuloOp;
}(BinaryOp);
var InOp = function (_super) {
    __extends(InOp, _super);
    function InOp(line, column, start, end, raw, left, right, isNot) {
        var _this = _super.call(this, 'InOp', line, column, start, end, raw, left, right) || this;
        _this.isNot = isNot;
        return _this;
    }
    return InOp;
}(BinaryOp);
var BaseAssignOp = function (_super) {
    __extends(BaseAssignOp, _super);
    function BaseAssignOp(type, line, column, start, end, raw, assignee, expression) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.assignee = assignee;
        _this.expression = expression;
        return _this;
    }
    return BaseAssignOp;
}(Node);
var AssignOp = function (_super) {
    __extends(AssignOp, _super);
    function AssignOp(line, column, start, end, raw, assignee, expression) {
        return _super.call(this, 'AssignOp', line, column, start, end, raw, assignee, expression) || this;
    }
    AssignOp.prototype.withExpression = function (expression) {
        return new AssignOp(this.line, this.column, this.start, this.end, this.raw, this.assignee, expression);
    };
    return AssignOp;
}(BaseAssignOp);
var ExtendsOp = function (_super) {
    __extends(ExtendsOp, _super);
    function ExtendsOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'ExtendsOp', line, column, start, end, raw, left, right) || this;
    }
    return ExtendsOp;
}(BinaryOp);
var SeqOp = function (_super) {
    __extends(SeqOp, _super);
    function SeqOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'SeqOp', line, column, start, end, raw, left, right) || this;
    }
    return SeqOp;
}(BinaryOp);
var TypeofOp = function (_super) {
    __extends(TypeofOp, _super);
    function TypeofOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'TypeofOp', line, column, start, end, raw, expression) || this;
    }
    return TypeofOp;
}(UnaryOp);
var InstanceofOp = function (_super) {
    __extends(InstanceofOp, _super);
    function InstanceofOp(line, column, start, end, raw, left, right, isNot) {
        var _this = _super.call(this, 'InstanceofOp', line, column, start, end, raw, left, right) || this;
        _this.isNot = isNot;
        return _this;
    }
    return InstanceofOp;
}(BinaryOp);
var OfOp = function (_super) {
    __extends(OfOp, _super);
    function OfOp(line, column, start, end, raw, left, right, isNot) {
        var _this = _super.call(this, 'OfOp', line, column, start, end, raw, left, right) || this;
        _this.isNot = isNot;
        return _this;
    }
    return OfOp;
}(BinaryOp);
var DeleteOp = function (_super) {
    __extends(DeleteOp, _super);
    function DeleteOp(line, column, start, end, raw, expression) {
        return _super.call(this, 'DeleteOp', line, column, start, end, raw, expression) || this;
    }
    return DeleteOp;
}(UnaryOp);
var Yield = function (_super) {
    __extends(Yield, _super);
    function Yield(line, column, start, end, raw, expression) {
        return _super.call(this, 'Yield', line, column, start, end, raw, expression) || this;
    }
    return Yield;
}(UnaryOp);
var YieldFrom = function (_super) {
    __extends(YieldFrom, _super);
    function YieldFrom(line, column, start, end, raw, expression) {
        return _super.call(this, 'YieldFrom', line, column, start, end, raw, expression) || this;
    }
    return YieldFrom;
}(UnaryOp);
var Slice$1 = function (_super) {
    __extends(Slice$$1, _super);
    function Slice$$1(line, column, start, end, raw, expression, left, right, isInclusive) {
        var _this = _super.call(this, 'Slice', line, column, start, end, raw) || this;
        _this.expression = expression;
        _this.left = left;
        _this.right = right;
        _this.isInclusive = isInclusive;
        return _this;
    }
    return Slice$$1;
}(Node);
var SoakedSlice = function (_super) {
    __extends(SoakedSlice, _super);
    function SoakedSlice(line, column, start, end, raw, expression, left, right, isInclusive) {
        var _this = _super.call(this, 'SoakedSlice', line, column, start, end, raw) || this;
        _this.expression = expression;
        _this.left = left;
        _this.right = right;
        _this.isInclusive = isInclusive;
        return _this;
    }
    return SoakedSlice;
}(Node);
var BaseFunction = function (_super) {
    __extends(BaseFunction, _super);
    function BaseFunction(type, line, column, start, end, raw, parameters, body) {
        var _this = _super.call(this, type, line, column, start, end, raw) || this;
        _this.parameters = parameters;
        _this.body = body;
        return _this;
    }
    return BaseFunction;
}(Node);
var Function$1 = function (_super) {
    __extends(Function, _super);
    function Function(line, column, start, end, raw, parameters, body) {
        return _super.call(this, 'Function', line, column, start, end, raw, parameters, body) || this;
    }
    Function.prototype.withParameters = function (parameters) {
        return new Function(this.line, this.column, this.start, this.end, this.raw, parameters, this.body);
    };
    return Function;
}(BaseFunction);
var BoundFunction = function (_super) {
    __extends(BoundFunction, _super);
    function BoundFunction(line, column, start, end, raw, parameters, body) {
        return _super.call(this, 'BoundFunction', line, column, start, end, raw, parameters, body) || this;
    }
    BoundFunction.prototype.withParameters = function (parameters) {
        return new BoundFunction(this.line, this.column, this.start, this.end, this.raw, parameters, this.body);
    };
    return BoundFunction;
}(BaseFunction);
var GeneratorFunction = function (_super) {
    __extends(GeneratorFunction, _super);
    function GeneratorFunction(line, column, start, end, raw, parameters, body) {
        return _super.call(this, 'GeneratorFunction', line, column, start, end, raw, parameters, body) || this;
    }
    GeneratorFunction.prototype.withParameters = function (parameters) {
        return new GeneratorFunction(this.line, this.column, this.start, this.end, this.raw, parameters, this.body);
    };
    return GeneratorFunction;
}(BaseFunction);
var BoundGeneratorFunction = function (_super) {
    __extends(BoundGeneratorFunction, _super);
    function BoundGeneratorFunction(line, column, start, end, raw, parameters, body) {
        return _super.call(this, 'BoundGeneratorFunction', line, column, start, end, raw, parameters, body) || this;
    }
    BoundGeneratorFunction.prototype.withParameters = function (parameters) {
        return new BoundGeneratorFunction(this.line, this.column, this.start, this.end, this.raw, parameters, this.body);
    };
    return BoundGeneratorFunction;
}(BaseFunction);
var Try$1 = function (_super) {
    __extends(Try$$1, _super);
    function Try$$1(line, column, start, end, raw, body, catchAssignee, catchBody, finallyBody) {
        var _this = _super.call(this, 'Try', line, column, start, end, raw) || this;
        _this.body = body;
        _this.catchAssignee = catchAssignee;
        _this.catchBody = catchBody;
        _this.finallyBody = finallyBody;
        return _this;
    }
    return Try$$1;
}(Node);
var Constructor = function (_super) {
    __extends(Constructor, _super);
    function Constructor(line, column, start, end, raw, assignee, expression) {
        return _super.call(this, 'Constructor', line, column, start, end, raw, assignee, expression) || this;
    }
    return Constructor;
}(BaseAssignOp);
var ClassProtoAssignOp = function (_super) {
    __extends(ClassProtoAssignOp, _super);
    function ClassProtoAssignOp(line, column, start, end, raw, assignee, expression) {
        return _super.call(this, 'ClassProtoAssignOp', line, column, start, end, raw, assignee, expression) || this;
    }
    return ClassProtoAssignOp;
}(BaseAssignOp);
var Class$1 = function (_super) {
    __extends(Class$$1, _super);
    function Class$$1(line, column, start, end, raw, nameAssignee, name, body, boundMembers, parent, ctor) {
        var _this = _super.call(this, 'Class', line, column, start, end, raw) || this;
        _this.nameAssignee = nameAssignee;
        _this.name = name;
        _this.body = body;
        _this.boundMembers = boundMembers;
        _this.parent = parent;
        _this.ctor = ctor;
        return _this;
    }
    return Class$$1;
}(Node);
var FunctionApplication = function (_super) {
    __extends(FunctionApplication, _super);
    function FunctionApplication(line, column, start, end, raw, fn, args) {
        var _this = _super.call(this, 'FunctionApplication', line, column, start, end, raw) || this;
        _this["function"] = fn;
        _this.arguments = args;
        return _this;
    }
    return FunctionApplication;
}(Node);
var SoakedFunctionApplication = function (_super) {
    __extends(SoakedFunctionApplication, _super);
    function SoakedFunctionApplication(line, column, start, end, raw, fn, args) {
        var _this = _super.call(this, 'SoakedFunctionApplication', line, column, start, end, raw) || this;
        _this["function"] = fn;
        _this.arguments = args;
        return _this;
    }
    return SoakedFunctionApplication;
}(Node);
var Super = function (_super) {
    __extends(Super, _super);
    function Super(line, column, start, end, raw) {
        return _super.call(this, 'Super', line, column, start, end, raw) || this;
    }
    return Super;
}(Node);
var BareSuperFunctionApplication = function (_super) {
    __extends(BareSuperFunctionApplication, _super);
    function BareSuperFunctionApplication(line, column, start, end, raw) {
        return _super.call(this, 'BareSuperFunctionApplication', line, column, start, end, raw) || this;
    }
    return BareSuperFunctionApplication;
}(Node);
var NewOp = function (_super) {
    __extends(NewOp, _super);
    function NewOp(line, column, start, end, raw, ctor, args) {
        var _this = _super.call(this, 'NewOp', line, column, start, end, raw) || this;
        _this.ctor = ctor;
        _this.arguments = args;
        return _this;
    }
    return NewOp;
}(Node);
var SoakedNewOp = function (_super) {
    __extends(SoakedNewOp, _super);
    function SoakedNewOp(line, column, start, end, raw, ctor, args) {
        var _this = _super.call(this, 'SoakedNewOp', line, column, start, end, raw) || this;
        _this.ctor = ctor;
        _this.arguments = args;
        return _this;
    }
    return SoakedNewOp;
}(Node);
var DoOp = function (_super) {
    __extends(DoOp, _super);
    function DoOp(line, column, start, end, raw, expression) {
        var _this = _super.call(this, 'DoOp', line, column, start, end, raw) || this;
        _this.expression = expression;
        return _this;
    }
    return DoOp;
}(Node);
// tslint:disable-next-line:no-any
function makeRealNode(context, type, loc, attrs) {
    if (attrs === void 0) {
        attrs = {};
    }
    // tslint:disable-next-line:no-any
    var result = { type: type };
    var start = context.linesAndColumns.indexForLocation({ line: loc.first_line, column: loc.first_column });
    var last = context.linesAndColumns.indexForLocation({ line: loc.last_line, column: loc.last_column });
    if (start === null || last === null) {
        throw new Error("unable to determine range for location: " + util.inspect(loc) + "}");
    }
    result.line = loc.first_line + 1;
    result.column = loc.first_column + 1;
    result.range = [start, last + 1];
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            var value = attrs[key];
            result[key] = value;
            if (value && result.range) {
                (Array.isArray(value) ? value : [value]).forEach(function (node) {
                    if (node.range) {
                        // Expand the range to contain all the children.
                        if (result.range[0] > node.range[0]) {
                            result.range[0] = node.range[0];
                        }
                        if (result.range[1] < node.range[1]) {
                            result.range[1] = node.range[1];
                        }
                    }
                });
            }
        }
    }
    // Shrink to be within the size of the source.
    if (result.range[0] < 0) {
        result.range[0] = 0;
    }
    if (result.range[1] > context.source.length) {
        result.range[1] = context.source.length;
    }
    // Shrink the end to the nearest semantic token.
    var lastTokenIndexOfNode = context.sourceTokens.lastIndexOfTokenMatchingPredicate(function (token) {
        return token.end <= result.range[1] && token.type !== lex.SourceType.NEWLINE && token.type !== lex.SourceType.COMMENT;
    }, context.sourceTokens.indexOfTokenNearSourceIndex(result.range[1]));
    if (lastTokenIndexOfNode === null) {
        throw new Error("unable to find last token for node: " + util.inspect(result));
    }
    var lastTokenOfNode = context.sourceTokens.tokenAtIndex(lastTokenIndexOfNode);
    if (lastTokenOfNode === null) {
        throw new Error("unable to find last token for node: " + util.inspect(result));
    }
    result.range[1] = lastTokenOfNode.end;
    result.raw = context.source.slice(result.range[0], result.range[1]);
    return result;
}
// tslint:disable-next-line:no-any
function makeNode(context, type, loc, attrs) {
    if (attrs === void 0) {
        attrs = {};
    }
    if (!loc) {
        throw new Error("location data must be provided for node type: " + type);
    }
    return makeRealNode(context, type, loc, attrs);
}

/**
 * Gets information about an operator token found between start and end source
 * offsets, exclusive. When calling, make sure `start` is before the text of
 * the operator in the range, and `end` is after it.
 */
function getOperatorInfoInRange(context, start, end) {
    var startIndex = context.sourceTokens.indexOfTokenNearSourceIndex(start);
    var endIndex = context.sourceTokens.indexOfTokenNearSourceIndex(end);
    if (!startIndex || !endIndex) {
        throw new Error("cannot find token indexes of range bounds: [" + start + ", " + end + "]");
    }
    var operatorIndex = context.sourceTokens.indexOfTokenMatchingPredicate(function (token) {
        return token.type !== SourceType.LPAREN && token.type !== SourceType.RPAREN;
    }, startIndex.next(), endIndex);
    var operatorToken = operatorIndex && context.sourceTokens.tokenAtIndex(operatorIndex);
    if (!operatorToken) {
        throw new Error("cannot find operator token in range: [" + start + ", " + end + "]");
    }
    return new OperatorInfo(context.source.slice(operatorToken.start, operatorToken.end), operatorToken);
}

/**
 * Determine if the given CoffeeScript AST node is an interpolated heregex node
 * that's pretending to be a function call to the RegExp function.
 */
function isHeregexTemplateNode(node, context) {
    if (!(node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Call) || !node.variable || !(node.variable instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Value) || !node.variable.base || !(node.variable.base instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Literal) || node.variable.base.value !== 'RegExp') {
        return false;
    }
    var sourceTokens = context.sourceTokens,
        linesAndColumns = context.linesAndColumns;
    var start = linesAndColumns.indexForLocation({ line: node.locationData.first_line, column: node.locationData.first_column });
    if (start === null) {
        return false;
    }
    var startTokenIndex = sourceTokens.indexOfTokenContainingSourceIndex(start);
    if (startTokenIndex === null) {
        return false;
    }
    var startToken = sourceTokens.tokenAtIndex(startTokenIndex);
    if (startToken === null) {
        return false;
    }
    return startToken.type === lex.SourceType.HEREGEXP_START;
}

/**
 * Given the ranges of two operands, determine from the token list whether there
 * is a real '+' operator between them. A plus operation without an actual '+'
 * operator is an implicit string interpolation operation.
 */
function isPlusTokenBetweenRanges(leftRange, rightRange, context) {
    var tokens = context.sourceTokens;
    var leftEnd = tokens.indexOfTokenContainingSourceIndex(leftRange[1] - 1);
    var rightStart = tokens.indexOfTokenContainingSourceIndex(rightRange[0]);
    // Normal '+' operators should find tokens here, so if we don't, this must be
    // an implicit '+' operator.
    if (!leftEnd || !rightStart) {
        return false;
    }
    var afterLeftEnd = leftEnd.next();
    if (!afterLeftEnd) {
        return false;
    }
    var tokensBetweenOperands = tokens.slice(afterLeftEnd, rightStart);
    // If we find an actual operator, this must have been a real '+'. Otherwise,
    // this must be an implicit '+'.
    var foundPlusToken = false;
    tokensBetweenOperands.forEach(function (_a) {
        var type = _a.type,
            start = _a.start,
            end = _a.end;
        if (type === lex.SourceType.OPERATOR && context.source.slice(start, end) === '+') {
            foundPlusToken = true;
        }
    });
    return foundPlusToken;
}

/**
 * Determine if the operator is a fake + operator for string interpolation.
 */
function isImplicitPlusOp(op, context) {
    if (op.type !== 'PlusOp') {
        return false;
    }
    return !isPlusTokenBetweenRanges(op.left.range, op.right.range, context);
}

function isInterpolatedString(node, ancestors, context) {
    var range = rangeOfInterpolatedStringForNode(node, context);
    if (!range) {
        return false;
    }
    var parentOp = null;
    for (var i = ancestors.length - 1; i >= 0; i--) {
        var ancestor = ancestors[i];
        if (ancestor instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Op) {
            parentOp = ancestor;
            break;
        }
    }
    if (!parentOp) {
        // `node` is in an interpolated string but there is no containing
        // operator, so it must be a root.
        return true;
    }
    var parentRange = rangeOfInterpolatedStringForNode(parentOp, context);
    if (!parentRange) {
        // There's a containing operator, but there's no interpolated string.
        return true;
    }
    // There's a string interpolation containing the parent operator, but is it
    // the same one? If not, then this node is the root of an interpolated string.
    return parentRange[0] !== range[0] || parentRange[1] !== range[1];
}
function rangeOfInterpolatedStringForNode(node, context) {
    if (node.operator !== '+' || !node.second) {
        return null;
    }
    var firstRange = context.getRange(node.first);
    var secondRange = context.getRange(node.second);
    if (!firstRange || !secondRange) {
        return null;
    }
    if (isPlusTokenBetweenRanges(firstRange, secondRange, context)) {
        return null;
    }
    var range = context.getRange(node);
    if (!range) {
        return null;
    }
    var tokens = context.sourceTokens;
    var startTokenIndex = tokens.indexOfTokenContainingSourceIndex(range[0]);
    if (!startTokenIndex) {
        throw new Error("no token containing start of node at " + range[0] + " found");
    }
    return tokens.rangeOfInterpolatedStringTokensContainingTokenIndex(startTokenIndex);
}

/**
 * Assumes first_line/first_column are correct.
 */
function fixInvalidLocationData(locationData, linesAndColumns) {
    var last_line = locationData.last_line,
        last_column = locationData.last_column;
    var indexForLocation = linesAndColumns.indexForLocation({ line: last_line, column: last_column });
    if (indexForLocation !== null) {
        return locationData;
    } else {
        var offset = 1;
        for (;;) {
            var index = linesAndColumns.indexForLocation({ line: last_line, column: last_column - offset });
            offset++;
            if (index !== null) {
                var location = linesAndColumns.locationForIndex(index + offset);
                if (!location) {
                    throw new Error("Unable to determine adjustment offset for incorrect location data: " + (JSON.stringify(locationData) + ". No valid location found for index: ") + ("" + (index + offset)));
                }
                last_line = location.line;
                last_column = location.column;
                break;
            }
        }
        return __assign({}, locationData, { last_line: last_line,
            last_column: last_column });
    }
}

function locationsEqual(first, second) {
    return first.first_line === second.first_line && first.first_column === second.first_column && first.last_line === second.last_line && first.last_column === second.last_column;
}

function mergeLocations(left, right) {
    var first_line;
    var first_column;
    var last_line;
    var last_column;
    if (left.first_line < right.first_line) {
        first_line = left.first_line, first_column = left.first_column;
    } else if (left.first_line > right.first_line) {
        first_line = right.first_line, first_column = right.first_column;
    } else if (left.first_column < right.first_column) {
        first_line = left.first_line, first_column = left.first_column;
    } else {
        first_line = right.first_line, first_column = right.first_column;
    }
    if (left.last_line < right.last_line) {
        last_line = right.last_line, last_column = right.last_column;
    } else if (left.last_line > right.last_line) {
        last_line = left.last_line, last_column = left.last_column;
    } else if (left.last_column < right.last_column) {
        last_line = right.last_line, last_column = right.last_column;
    } else {
        last_line = left.last_line, last_column = left.last_column;
    }
    return { first_line: first_line, first_column: first_column, last_line: last_line, last_column: last_column };
}

function locationContainingNodes() {
    var nodes$$1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nodes$$1[_i] = arguments[_i];
    }
    switch (nodes$$1.length) {
        case 0:
            return null;
        case 1:
            return nodes$$1[0].locationData;
        case 2:
            return mergeLocations(nodes$$1[0].locationData, nodes$$1[1].locationData);
        default:
            // NOTE: force-cast since `nodes.slice(1)` cannot return `null` here.
            var tail = locationContainingNodes.apply(void 0, nodes$$1.slice(1));
            return mergeLocations(nodes$$1[0].locationData, tail);
    }
}

function locationWithLastPosition(loc, last) {
    return {
        first_line: loc.first_line,
        first_column: loc.first_column,
        last_line: last.last_line,
        last_column: last.last_column
    };
}

var UnsupportedNodeError = function (_super) {
    __extends(UnsupportedNodeError, _super);
    function UnsupportedNodeError(node) {
        var _this = _super.call(this, "node type '" + node.constructor.name + "' is not supported: " + util.inspect(node)) || this;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, UnsupportedNodeError.prototype);
        _this.node = node;
        return _this;
    }
    return UnsupportedNodeError;
}(Error);
function mapAnyWithFallback(context, node, fallback) {
    try {
        return mapAny(context, node);
    } catch (err) {
        if (err instanceof UnsupportedNodeError) {
            return fallback();
        } else {
            throw err;
        }
    }
}

function mapBase(context, node) {
    var loc = node.locationData;
    var start = context.linesAndColumns.indexForLocation({ line: loc.first_line, column: loc.first_column });
    var last = context.linesAndColumns.indexForLocation({ line: loc.last_line, column: loc.last_column });
    if (start === null || last === null) {
        throw new Error("unable to determine range for location: " + util.inspect(loc) + "}");
    }
    var line = loc.first_line + 1;
    var column = loc.first_column + 1;
    var end = last + 1;
    // Shrink to be within the size of the source.
    if (start < 0) {
        start = 0;
    }
    if (end > context.source.length) {
        end = context.source.length;
    }
    // Shrink the end to the nearest semantic token.
    var lastTokenIndexOfNode = context.sourceTokens.lastIndexOfTokenMatchingPredicate(function (token) {
        return token.end <= end && token.type !== lex.SourceType.NEWLINE && token.type !== lex.SourceType.COMMENT;
    }, context.sourceTokens.indexOfTokenNearSourceIndex(end));
    if (lastTokenIndexOfNode === null) {
        throw new Error("unable to find last token for node: " + util.inspect(node));
    }
    var lastTokenOfNode = context.sourceTokens.tokenAtIndex(lastTokenIndexOfNode);
    if (lastTokenOfNode === null) {
        throw new Error("unable to find last token for node: " + util.inspect(node));
    }
    end = lastTokenOfNode.end;
    var raw = context.source.slice(start, end);
    return new Node('Node', line, column, start, end, raw);
}

function mapArr(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var members = node.objects.map(function (object) {
        return mapAny(context, object);
    });
    return new ArrayInitialiser(line, column, start, end, raw, members);
}

function mapAssign(context, node) {
    if (node.context === 'object' || node.context && node.context.slice(-1) === '=') {
        throw new UnsupportedNodeError(node);
    }
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new AssignOp(line, column, start, end, raw, mapAny(context, node.variable), mapAny(context, node.value));
}

function mapBlock(context, node) {
    if (node.expressions.length === 0) {
        throw new UnsupportedNodeError(node);
    }
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var previousTokenIndex = context.sourceTokens.indexOfTokenNearSourceIndex(start - 1);
    var previousToken = previousTokenIndex ? context.sourceTokens.tokenAtIndex(previousTokenIndex) : null;
    var inline = previousToken ? previousToken.type !== lex.SourceType.NEWLINE : false;
    return new Block$1(line, column, start, end, raw, node.expressions.filter(function (expression) {
        return !(expression instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Comment);
    }).map(function (expression) {
        return mapAny(context, expression);
    }), inline);
}

function mapBool(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new Bool$1(line, column, start, end, raw, JSON.parse(node.val));
}

function mapCall(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (isHeregexTemplateNode(node, context)) {
        throw new UnsupportedNodeError(node);
    }
    var args = node.args.map(function (arg) {
        return mapAny(context, arg);
    });
    if (!node.variable) {
        // This should only happen when `isSuper` is true.
        if (!node.isSuper) {
            throw new Error("callee unexpectedly null in non-super call: " + util.inspect(node));
        }
        if (node.args.length === 1 && node.args[0] instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Splat && locationsEqual(node.args[0].locationData, node.locationData)) {
            return new BareSuperFunctionApplication(line, column, start, end, raw);
        }
        var superIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(start);
        var superToken = superIndex && context.sourceTokens.tokenAtIndex(superIndex);
        if (!superToken || superToken.type !== SourceType.SUPER) {
            throw new Error("unable to find SUPER token in 'super' function call: " + util.inspect(node));
        }
        var superLocation = context.linesAndColumns.locationForIndex(superToken.start);
        if (!superLocation) {
            throw new Error("unable to locate SUPER token for 'super' function call: " + util.inspect(node));
        }
        return new FunctionApplication(line, column, start, end, raw, new Super(superLocation.line + 1, superLocation.column + 1, superToken.start, superToken.end, context.source.slice(superToken.start, superToken.end)), args);
    }
    var callee = mapAny(context, node.variable);
    if (node.isNew) {
        return mapNewOp(context, node);
    }
    if (node.soak) {
        return new SoakedFunctionApplication(line, column, start, end, raw, callee, args);
    }
    if (node["do"]) {
        return mapDoOp(context, node);
    }
    return new FunctionApplication(line, column, start, end, raw, callee, args);
}
function mapNewOp(context, node) {
    if (!node.variable) {
        // This should only happen when `isSuper` is true.
        throw new UnsupportedNodeError(node);
    }
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var callee = mapAny(context, node.variable);
    var args = node.args.map(function (arg) {
        return mapAny(context, arg);
    });
    if (node.soak) {
        return new SoakedNewOp(line, column, start, end, raw, callee, args);
    } else {
        return new NewOp(line, column, start, end, raw, callee, args);
    }
}
function mapDoOp(context, node) {
    if (!node.variable) {
        // This should only happen when `isSuper` is true.
        throw new UnsupportedNodeError(node);
    }
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var expression = mapAny(context, node.variable);
    var args = node.args.map(function (arg) {
        return mapAny(context, arg);
    });
    if (expression instanceof BaseFunction) {
        expression = augmentDoFunctionWithArgs(context, expression, args);
    } else if (expression instanceof AssignOp && expression.expression instanceof BaseFunction) {
        var newRhs = augmentDoFunctionWithArgs(context, expression.expression, args);
        expression = expression.withExpression(newRhs);
    }
    return new DoOp(line, column, start, end, raw, expression);
}
function augmentDoFunctionWithArgs(context, func, args) {
    var newParameters = func.parameters.map(function (param, i) {
        var arg = args[i];
        // If there's a parameter with no default, CoffeeScript will insert a fake
        // arg with the same value and location.
        if (arg instanceof Identifier && param instanceof Identifier && arg.data === param.data && arg.start === param.start && arg.end === param.end) {
            return param;
        }
        return new DefaultParam(param.line, param.column, param.start, arg.end, context.source.slice(param.start, arg.end), param, arg);
    });
    return func.withParameters(newParameters);
}

function mapClass(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var body = null;
    var ctor = null;
    var boundMethods = [];
    if (node.body && node.body.expressions.length > 0) {
        var statements = [];
        for (var _i = 0, _b = node.body.expressions; _i < _b.length; _i++) {
            var expression = _b[_i];
            if (expression instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Value && expression.base instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Obj) {
                for (var _c = 0, _d = expression.base.properties; _c < _d.length; _c++) {
                    var property = _d[_c];
                    if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Comment) {
                        continue;
                    } else if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Assign) {
                        var _e = mapBase(context, property),
                            line_1 = _e.line,
                            column_1 = _e.column,
                            start_1 = _e.start,
                            end_1 = _e.end,
                            raw_1 = _e.raw;
                        var key = mapAny(context, property.variable);
                        var value = mapAny(context, property.value);
                        var Node_1 = ClassProtoAssignOp;
                        if (key instanceof Identifier && key.data === 'constructor') {
                            Node_1 = Constructor;
                        } else if (key instanceof MemberAccessOp && key.expression instanceof This) {
                            Node_1 = AssignOp;
                        }
                        var assignment = new Node_1(line_1, column_1, start_1, end_1, raw_1, key, value);
                        statements.push(assignment);
                        if (assignment instanceof ClassProtoAssignOp && (assignment.expression instanceof BoundFunction || assignment.expression instanceof BoundGeneratorFunction)) {
                            boundMethods.push(assignment);
                        }
                        if (assignment instanceof Constructor) {
                            ctor = assignment;
                        }
                    } else {
                        throw new Error("unexpected class assignment: " + util.inspect(property));
                    }
                }
            } else {
                statements.push(mapAny(context, expression));
            }
        }
        if (statements.length > 0) {
            var firstStatement = statements[0];
            var lastStatement = statements[statements.length - 1];
            body = new Block$1(firstStatement.line, firstStatement.column, firstStatement.start, lastStatement.end, context.source.slice(firstStatement.start, lastStatement.end), statements, false);
        }
    }
    var nameAssignee = node.variable ? mapAny(context, node.variable) : null;
    var parent = node.parent ? mapAny(context, node.parent) : null;
    return new Class$1(line, column, start, end, raw, nameAssignee, nameAssignee, body, boundMethods, parent, ctor);
}

function mapCode(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var Node$$1 = getNodeTypeForCode(node);
    return new Node$$1(line, column, start, end, raw, node.params.map(function (param) {
        return mapAny(context, param);
    }), mapBlock(context, node.body));
}
function getNodeTypeForCode(node) {
    if (node.isGenerator) {
        if (node.bound) {
            return BoundGeneratorFunction;
        } else {
            return GeneratorFunction;
        }
    } else {
        if (node.bound) {
            return BoundFunction;
        } else {
            return Function$1;
        }
    }
}

function mapExistence(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new UnaryExistsOp(line, column, start, end, raw, mapAny(context, node.expression));
}

function mapExtends(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new ExtendsOp(line, column, start, end, raw, mapAny(context, node.child), mapAny(context, node.parent));
}

function mapFor(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var keyAssignee = node.index ? mapAny(context, node.index) : null;
    var valAssignee = node.name ? mapAny(context, node.name) : null;
    var body = mapBlock(context, node.body);
    var target = mapAny(context, node.source);
    var filter = node.guard ? mapAny(context, node.guard) : null;
    if (node.object) {
        var isOwn = node.own;
        return new ForOf(line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body, isOwn);
    } else {
        var step = node.step ? mapAny(context, node.step) : null;
        return new ForIn(line, column, start, end, raw, keyAssignee, valAssignee, target, filter, body, step);
    }
}

function mapIf(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var condition = mapAny(context, node.condition);
    var consequent = mapBlock(context, node.body);
    var alternate = node.elseBody ? mapBlock(context, node.elseBody) : null;
    var isUnless = false;
    var left = null;
    var right = null;
    if (consequent.start < condition.start) {
        // POST-if, so look for tokens between the consequent and the condition
        left = context.sourceTokens.indexOfTokenEndingAtSourceIndex(consequent.end);
        right = context.sourceTokens.indexOfTokenStartingAtSourceIndex(condition.start);
    } else {
        // regular `if`, so look from the start of the node until the condition
        left = context.sourceTokens.indexOfTokenStartingAtSourceIndex(start);
        right = context.sourceTokens.indexOfTokenStartingAtSourceIndex(condition.start);
    }
    if (left && right) {
        isUnless = context.sourceTokens.indexOfTokenMatchingPredicate(function (token) {
            return token.type === lex.SourceType.IF && context.source.slice(token.start, token.end) === 'unless';
        }, left, right) !== null;
    }
    return new Conditional(line, column, start, end, raw, condition, consequent, alternate, isUnless);
}

function mapIn(context, node) {
    // We don't use the `negated` flag on `node` because it gets set to
    // `true` when a parent `If` is an `unless`.
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var left = mapAny(context, node.object);
    var right = mapAny(context, node.array);
    var isNot = false;
    var lastTokenIndexOfLeft = context.sourceTokens.indexOfTokenEndingAtSourceIndex(left.end);
    var firstTokenIndexOfRight = context.sourceTokens.indexOfTokenStartingAtSourceIndex(right.start);
    var relationTokenIndex = context.sourceTokens.indexOfTokenMatchingPredicate(function (token) {
        return token.type === SourceType.RELATION;
    }, lastTokenIndexOfLeft, firstTokenIndexOfRight);
    if (relationTokenIndex) {
        var relationToken = context.sourceTokens.tokenAtIndex(relationTokenIndex);
        if (relationToken) {
            isNot = context.source.slice(relationToken.start, relationToken.end) !== 'in';
            return new InOp(line, column, start, end, raw, left, right, isNot);
        }
    }
    throw new Error("unable to find RELATION token between operands");
}

/**
 * Determine if the given code position contains a real string. If not, then it
 * is an interpolated string quasi.
 */
function isStringAtPosition(start, end, context) {
    var tokens = context.sourceTokens;
    var startTokenIndex = tokens.indexOfTokenContainingSourceIndex(start);
    var endTokenIndex = tokens.indexOfTokenContainingSourceIndex(end - 1);
    if (startTokenIndex === null || endTokenIndex === null) {
        return false;
    }
    var startToken = tokens.tokenAtIndex(startTokenIndex);
    var endToken = tokens.tokenAtIndex(endTokenIndex);
    if (startToken === null || endToken === null) {
        return false;
    }
    var startType = startToken.type;
    var endType = endToken.type;
    return startType === lex.SourceType.SSTRING_START && endType === lex.SourceType.SSTRING_END || startType === lex.SourceType.DSTRING_START && endType === lex.SourceType.DSTRING_END || startType === lex.SourceType.TSSTRING_START && endType === lex.SourceType.TSSTRING_END || startType === lex.SourceType.TDSTRING_START && endType === lex.SourceType.TDSTRING_END;
}

/**
 * Parses JavaScript source representing a number.
 */
function parseNumber(string) {
  return babylon.parse("(" + string + ")").program.body[0].expression.value;
}

/**
 * Parses JavaScript source representing a regular expression.
 */
function parseRegExp(string) {
  return babylon.parse("(" + string + ")").program.body[0].expression;
}

/**
 * Parses JavaScript source representing a string.
 */
function parseString(string) {
  return babylon.parse("(" + string + ")").program.body[0].expression.value;
}

var HEREGEX_PATTERN = /^\/\/\/((?:.|\s)*)\/\/\/([gimy]*)$/;
function mapLiteral(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (node.value === 'this') {
        return new This(line, column, start, end, raw);
    }
    var startTokenIndex = context.sourceTokens.indexOfTokenContainingSourceIndex(start);
    var lastTokenIndex = context.sourceTokens.indexOfTokenContainingSourceIndex(end - 1);
    if (!startTokenIndex || !lastTokenIndex) {
        throw new Error("cannot find start/end tokens for literal: " + util.inspect(node));
    }
    var startToken = context.sourceTokens.tokenAtIndex(startTokenIndex);
    var lastToken = context.sourceTokens.tokenAtIndex(lastTokenIndex);
    if (!startToken || !lastToken) {
        throw new Error("cannot find start/end tokens for literal: " + util.inspect(node));
    }
    if (startToken.type === SourceType.IDENTIFIER) {
        // Sometimes the CoffeeScript AST contains a string object instead of a
        // string primitive. Convert to string primitive if necessary.
        var value = node.value.valueOf();
        return new Identifier(line, column, start, end, raw, value);
    }
    if (startToken.type === SourceType.JS) {
        return new JavaScript(line, column, start, end, raw, node.value);
    }
    if (startToken.type === SourceType.NUMBER) {
        if (raw.includes('.')) {
            return new Float(line, column, start, end, raw, parseNumber(node.value));
        } else {
            return new Int(line, column, start, end, raw, parseNumber(node.value));
        }
    }
    if (startToken.type === SourceType.REGEXP) {
        var regExp = parseRegExp(node.value);
        return new Regex(line, column, start, end, raw, regExp.pattern, RegexFlags.parse(regExp.flags));
    }
    if (isStringAtPosition(start, end, context)) {
        return new String(line, column, start, end, raw, [new Quasi(line, column, start, end, raw, parseString(node.value))], []);
    }
    if (startToken.type === SourceType.HEREGEXP_START && lastToken.type === SourceType.HEREGEXP_END) {
        var match = raw.match(HEREGEX_PATTERN);
        if (!match) {
            throw new Error("unable to parse flags of heregex: " + util.inspect(node));
        }
        var flags = match[2];
        return new Heregex(line, column, start, end, raw, [new Quasi(line, column, start, end, raw, node.value)], [], RegexFlags.parse(flags));
    }
    if (startToken.type === SourceType.SSTRING_START || startToken.type === SourceType.DSTRING_START || startToken.type === SourceType.TSSTRING_START || startToken.type === SourceType.TDSTRING_START || startToken.type === SourceType.HEREGEXP_START || startToken.type === SourceType.STRING_CONTENT || startToken.type === SourceType.STRING_PADDING || startToken.type === SourceType.STRING_LINE_SEPARATOR) {
        // Top-level strings should all be in the same format: an array of
        // quasis and expressions. For a normal string literal, this is the
        // simple case of one quasi and no expressions. But if this string
        // is actually a quasi that CoffeeScript is calling a string, then
        // just return a Quasi node, and higher-up code should insert it
        // into a string interpolation.
        return new Quasi(line, column, start, end, raw, parseString(node.value));
    }
    if (startToken.type === SourceType.BREAK) {
        return new Break(line, column, start, end, raw);
    }
    if (startToken.type === SourceType.CONTINUE) {
        return new Continue(line, column, start, end, raw);
    }
    // Fall back to identifiers.
    return new Identifier(line, column, start, end, raw, node.value);
}

function mapNull(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new Null$1(line, column, start, end, raw);
}

function mapValue(context, node) {
    var base = mapBase(context, node);
    return node.properties.reduce(function (reduced, property) {
        return propertyReducer(context, base, reduced, property);
    }, mapAny(context, node.base));
}
function propertyReducer(context, base, reduced, property) {
    if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Access) {
        var name = property.name;
        if (!(name instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Literal)) {
            throw new Error("unexpected non-Literal property access name: " + util.inspect(name));
        }
        var startTokenIndex = tokenIndexAtLocation(context, property.locationData);
        var startToken = startTokenIndex && context.sourceTokens.tokenAtIndex(startTokenIndex);
        if (startToken && property.soak) {
            if (startToken.type !== lex.SourceType.EXISTENCE) {
                throw new Error("expected EXISTENCE token ('?') but got " + lex.SourceType[startToken.type] + ": " + util.inspect(startToken));
            }
            startTokenIndex = startTokenIndex && startTokenIndex.next();
            startToken = startTokenIndex && context.sourceTokens.tokenAtIndex(startTokenIndex);
        }
        if (!startToken) {
            throw new Error("cannot find token at start of property: " + util.inspect(property));
        }
        var last = context.linesAndColumns.indexForLocation({
            line: property.locationData.last_line,
            column: property.locationData.last_column
        });
        if (last === null) {
            throw new Error("cannot find offset of last character of property: " + util.inspect(property));
        }
        var isPrototypeAccess = startToken.type === lex.SourceType.PROTO;
        if (isPrototypeAccess) {
            var AccessOp$$1 = property.soak ? SoakedProtoMemberAccessOp : ProtoMemberAccessOp;
            return new AccessOp$$1(base.line, base.column, base.start, last + 1, context.source.slice(base.start, last + 1), reduced);
        } else {
            var member = mapAny(context, name);
            if (!(member instanceof Identifier)) {
                throw new Error("unexpected non-Identifier access member: " + util.inspect(member));
            }
            var AccessOp$$1 = property.soak ? SoakedMemberAccessOp : MemberAccessOp;
            return new AccessOp$$1(base.line, base.column, base.start, last + 1, context.source.slice(base.start, last + 1), reduced, member);
        }
    } else if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Slice) {
        var last = context.linesAndColumns.indexForLocation({
            line: property.locationData.last_line,
            column: property.locationData.last_column
        });
        if (last === null) {
            throw new Error("cannot find offset of last character of slice: " + util.inspect(property));
        }
        var SliceClass = property.soak ? SoakedSlice : Slice$1;
        return new SliceClass(base.line, base.column, base.start, last + 1, context.source.slice(base.start, last + 1), reduced, property.range.from ? mapAny(context, property.range.from) : null, property.range.to ? mapAny(context, property.range.to) : null, !property.range.exclusive);
    } else {
        throw new UnsupportedNodeError(property);
    }
}
function tokenIndexAtLocation(context, location) {
    var start = context.linesAndColumns.indexForLocation({
        line: location.first_line,
        column: location.first_column
    });
    if (start === null) {
        return null;
    }
    return context.sourceTokens.indexOfTokenContainingSourceIndex(start);
}

function mapObj(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var members = node.properties.map(function (property) {
        if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Value) {
            // shorthand property
            var value = mapValue(context, property);
            if (!(value instanceof Identifier)) {
                throw new UnsupportedNodeError(property);
            }
            return new ObjectInitialiserMember(value.line, value.column, value.start, value.end, value.raw, value, value);
        } else if (property instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Assign && property.context === 'object') {
            var _a = mapBase(context, property),
                line_1 = _a.line,
                column_1 = _a.column,
                start_1 = _a.start,
                end_1 = _a.end,
                raw_1 = _a.raw;
            var key = mapAny(context, property.variable);
            var expression = mapAny(context, property.value);
            if (!(key instanceof Identifier) && !(key instanceof String)) {
                throw new UnsupportedNodeError(property);
            }
            return new ObjectInitialiserMember(line_1, column_1, start_1, end_1, raw_1, key, expression);
        } else {
            throw new UnsupportedNodeError(property);
        }
    });
    return new ObjectInitialiser(line, column, start, end, raw, members);
}

function mapOp(context, node) {
    if (isChainedComparison(node)) {
        return mapChainedComparisonOp(context, node);
    } else {
        return mapOpWithoutChainedComparison(context, node);
    }
}
function mapChainedComparisonOp(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var coffeeOperands = unwindChainedComparison(node);
    var operands = coffeeOperands.map(function (operand) {
        return mapAny(context, operand);
    });
    var operators = [];
    for (var i = 0; i < operands.length - 1; i++) {
        var left = operands[i];
        var right = operands[i + 1];
        operators.push(getOperatorInfoInRange(context, left.end - 1, right.start));
    }
    return new ChainedComparisonOp(line, column, start, end, raw, operands, operators);
}
function mapOpWithoutChainedComparison(context, node) {
    switch (node.operator) {
        case '===':
            return mapBinaryOp(context, node, EQOp);
        case '!==':
            return mapBinaryOp(context, node, NEQOp);
        case '!':
            return mapUnaryOp(context, node, LogicalNotOp);
        case '+':
            return mapPlusOp(context, node);
        case '-':
            return mapBinaryOrUnaryOp(context, node, SubtractOp, UnaryNegateOp);
        case '&&':
            return mapBinaryOp(context, node, LogicalAndOp);
        case '||':
            return mapBinaryOp(context, node, LogicalOrOp);
        case '*':
            return mapBinaryOp(context, node, MultiplyOp);
        case '/':
            return mapBinaryOp(context, node, DivideOp);
        case '<':
            return mapBinaryOp(context, node, LTOp);
        case '<=':
            return mapBinaryOp(context, node, LTEOp);
        case '>':
            return mapBinaryOp(context, node, GTOp);
        case '>=':
            return mapBinaryOp(context, node, GTEOp);
        case '++':
            return mapUnaryOp(context, node, node.flip ? PostIncrementOp : PreIncrementOp);
        case '--':
            return mapUnaryOp(context, node, node.flip ? PostDecrementOp : PreDecrementOp);
        case 'typeof':
            return mapUnaryOp(context, node, TypeofOp);
        case 'instanceof':
            return mapNegateableBinaryOp(context, node, InstanceofOp);
        case 'delete':
            return mapUnaryOp(context, node, DeleteOp);
        case 'in':
            return mapNegateableBinaryOp(context, node, OfOp);
        case 'new':
            return mapNewOp$1(context, node);
        case '**':
            return mapBinaryOp(context, node, ExpOp);
        case '%':
            return mapBinaryOp(context, node, RemOp);
        case '%%':
            return mapBinaryOp(context, node, ModuloOp);
        case '&':
            return mapBinaryOp(context, node, BitAndOp);
        case '|':
            return mapBinaryOp(context, node, BitOrOp);
        case '^':
            return mapBinaryOp(context, node, BitXorOp);
        case '<<':
            return mapBinaryOp(context, node, LeftShiftOp);
        case '>>':
            return mapBinaryOp(context, node, SignedRightShiftOp);
        case '>>>':
            return mapBinaryOp(context, node, UnsignedRightShiftOp);
        case '~':
            return mapUnaryOp(context, node, BitNotOp);
        case 'yield':
            return mapYieldOp(context, node);
        case 'yield*':
            return mapUnaryOp(context, node, YieldFrom);
    }
    throw new UnsupportedNodeError(node);
}
function mapPlusOp(context, node) {
    if (node.second) {
        // TODO: string interpolations and binary addition
        throw new UnsupportedNodeError(node);
    }
    return mapUnaryOp(context, node, UnaryPlusOp);
}
function mapNewOp$1(context, node) {
    if (node.second) {
        throw new Error("unexpected 'new' operator with multiple operands: " + util.inspect(node));
    }
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new NewOp(line, column, start, end, raw, mapAny(context, node.first), []);
}
function mapYieldOp(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (node.first instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Return) {
        var expression = node.first.expression;
        return new YieldReturn(line, column, start, end, raw, expression ? mapAny(context, expression) : null);
    } else {
        return new Yield(line, column, start, end, raw, mapAny(context, node.first));
    }
}
function mapBinaryOp(context, node, Op$$1) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (!node.second) {
        throw new Error("unexpected '" + node.operator + "' operator with only one operand: " + util.inspect(node));
    }
    return new Op$$1(line, column, start, end, raw, mapAny(context, node.first), mapAny(context, node.second));
}
function mapUnaryOp(context, node, Op$$1) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (node.second) {
        throw new Error("unexpected '" + node.operator + "' operator with two operands: " + util.inspect(node));
    }
    return new Op$$1(line, column, start, end, raw, mapAny(context, node.first));
}
function mapBinaryOrUnaryOp(context, node, BinaryOp$$1, UnaryOp$$1) {
    if (node.second) {
        return mapBinaryOp(context, node, BinaryOp$$1);
    } else {
        return mapUnaryOp(context, node, UnaryOp$$1);
    }
}
/**
 * This class exists only to serve as a temporary binary operator, do not use.
 */
var TemporaryBinaryOp = function (_super) {
    __extends(TemporaryBinaryOp, _super);
    function TemporaryBinaryOp(line, column, start, end, raw, left, right) {
        return _super.call(this, 'TEMPORARY', line, column, start, end, raw, left, right) || this;
    }
    return TemporaryBinaryOp;
}(BinaryOp);
function mapNegateableBinaryOp(context, node, Op$$1) {
    var _a = mapBinaryOp(context, node, TemporaryBinaryOp),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw,
        left = _a.left,
        right = _a.right;
    var lastTokenIndexOfLeft = context.sourceTokens.indexOfTokenEndingAtSourceIndex(left.end);
    var firstTokenIndexOfRight = context.sourceTokens.indexOfTokenStartingAtSourceIndex(right.start);
    var isNot = false;
    if (lastTokenIndexOfLeft) {
        for (var i = lastTokenIndexOfLeft.next(); i && i !== firstTokenIndexOfRight; i = i.next()) {
            var token = context.sourceTokens.tokenAtIndex(i);
            if (token && (token.type === lex.SourceType.OPERATOR || token.type === lex.SourceType.RELATION)) {
                isNot = context.source.slice(token.start, token.start + 'not'.length) === 'not';
                break;
            }
        }
    }
    return new Op$$1(line, column, start, end, raw, left, right, isNot);
}

function mapParam(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var param = mapAny(context, node.name);
    if (node.value) {
        var value = mapAny(context, node.value);
        return new DefaultParam(line, column, start, end, raw, param, value);
    }
    if (node.splat) {
        return new Rest(line, column, start, end, raw, param);
    }
    return param;
}

function mapParens(context, node) {
    if (!(node.body instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Block)) {
        return mapAny(context, node.body);
    }
    var expressions = node.body.expressions;
    if (expressions.length === 1) {
        return mapAny(context, expressions[0]);
    }
    return expressions.map(function (expression) {
        return mapAny(context, expression);
    }).reduceRight(function (right, left) {
        return new SeqOp(left.line, left.column, left.start, right.end, context.source.slice(left.start, right.end), left, right);
    });
}

function mapRange(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    if (!node.from || !node.to) {
        throw new Error("'from' or 'to' unexpectedly missing: " + util.inspect(node));
    }
    return new Range$1(line, column, start, end, raw, mapAny(context, node.from), mapAny(context, node.to), !node.exclusive);
}

function mapReturn(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var argument = node.expression ? mapAny(context, node.expression) : null;
    return new Return$1(line, column, start, end, raw, argument);
}

function mapSplat(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new Spread(line, column, start, end, raw, mapAny(context, node.name));
}

function mapSwitch(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var expression = node.subject ? mapAny(context, node.subject) : null;
    var cases = node.cases.map(function (_a) {
        var conditions = _a[0],
            body = _a[1];
        if (!Array.isArray(conditions)) {
            conditions = [conditions];
        }
        var switchConditions = conditions.map(function (condition) {
            return mapAny(context, condition);
        });
        var consequent = mapBlock(context, body);
        var whenToken = getWhenTokenBeforeOffset(context, switchConditions[0].start, start);
        var locationForIndex = context.linesAndColumns.locationForIndex(whenToken.start);
        if (!locationForIndex) {
            throw new Error("cannot map WHEN token start to line/column: " + whenToken.start);
        }
        var caseLine = locationForIndex.line,
            caseColumn = locationForIndex.column;
        return new SwitchCase(caseLine + 1, caseColumn + 1, whenToken.start, consequent.end, context.source.slice(whenToken.start, consequent.end), switchConditions, consequent);
    });
    return new Switch$1(line, column, start, end, raw, expression, cases, node.otherwise ? mapBlock(context, node.otherwise) : null);
}
function getWhenTokenBeforeOffset(context, offset, lowerBound) {
    var offsetTokenIndex = context.sourceTokens.indexOfTokenNearSourceIndex(offset);
    var lowerBoundTokenIndex = context.sourceTokens.indexOfTokenNearSourceIndex(lowerBound);
    var whenTokenIndex = context.sourceTokens.lastIndexOfTokenMatchingPredicate(function (token) {
        return token.type === SourceType.WHEN;
    }, offsetTokenIndex, lowerBoundTokenIndex);
    if (whenTokenIndex) {
        var whenToken = context.sourceTokens.tokenAtIndex(whenTokenIndex);
        if (whenToken) {
            return whenToken;
        }
    }
    throw new Error("unable to find WHEN token before " + offset + " (lower bound: " + lowerBound + ")");
}

function mapThrow(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var expression = node.expression ? mapAny(context, node.expression) : null;
    return new Throw$1(line, column, start, end, raw, expression);
}

function mapTry(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new Try$1(line, column, start, end, raw, node.attempt ? mapAny(context, node.attempt) : null, node.errorVariable ? mapAny(context, node.errorVariable) : null, node.recovery ? mapAny(context, node.recovery) : null, node.ensure ? mapAny(context, node.ensure) : null);
}

function mapUndefined(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    return new Undefined$1(line, column, start, end, raw);
}

function mapWhile(context, node) {
    var _a = mapBase(context, node),
        line = _a.line,
        column = _a.column,
        start = _a.start,
        end = _a.end,
        raw = _a.raw;
    var startTokenIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(start);
    var startToken = startTokenIndex && context.sourceTokens.tokenAtIndex(startTokenIndex);
    if (startToken && startToken.type === lex.SourceType.LOOP) {
        return new Loop(line, column, start, end, raw, node.body ? mapAny(context, node.body) : null);
    }
    return new While$1(line, column, start, end, raw, mapAny(context, node.condition), node.guard ? mapAny(context, node.guard) : null, node.body ? mapAny(context, node.body) : null, node.condition.inverted === true);
}

function mapAny(context, node) {
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Value) {
        return mapValue(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Literal) {
        return mapLiteral(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Op) {
        return mapOp(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Call) {
        return mapCall(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Arr) {
        return mapArr(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Bool) {
        return mapBool(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Assign) {
        return mapAssign(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Param) {
        return mapParam(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Return) {
        return mapReturn(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.If) {
        return mapIf(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Null) {
        return mapNull(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Obj) {
        return mapObj(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Parens) {
        return mapParens(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.For) {
        return mapFor(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Throw) {
        return mapThrow(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Undefined) {
        return mapUndefined(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Block) {
        return mapBlock(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Code) {
        return mapCode(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.While && !(node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.For)) {
        return mapWhile(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Try) {
        return mapTry(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Existence) {
        return mapExistence(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Class) {
        return mapClass(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Splat) {
        return mapSplat(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Switch) {
        return mapSwitch(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.In) {
        return mapIn(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Range) {
        return mapRange(context, node);
    }
    if (node instanceof decaffeinateCoffeescript_lib_coffeeScript_nodes.Extends) {
        return mapExtends(context, node);
    }
    throw new UnsupportedNodeError(node);
}

function rangeOfBracketTokensForIndexNode(context, indexNode) {
    var start = context.linesAndColumns.indexForLocation({
        line: indexNode.locationData.first_line,
        column: indexNode.locationData.first_column
    });
    if (start !== null) {
        var startTokenIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(start);
        if (startTokenIndex !== null) {
            var range = context.sourceTokens.rangeOfMatchingTokensContainingTokenIndex(lex.SourceType.LBRACKET, lex.SourceType.RBRACKET, startTokenIndex);
            if (range !== null) {
                return range;
            }
        }
    }
    throw new Error("cannot find braces surrounding index at " + (indexNode.locationData.first_line + 1 + ":" + indexNode.locationData.first_column + ": ") + ("" + util.inspect(indexNode)));
}

// tslint:disable-next-line:no-any
// tslint:disable-next-line:no-any
function type(node) {
    return node.constructor.name;
}

function patchCoffeeScript() {
    decaffeinateCoffeescript_lib_coffeeScript_nodes.Op.prototype.invert = invert;
    decaffeinateCoffeescript_lib_coffeeScript_nodes.Base.prototype.invert = invert;
}
function invert() {
    this.inverted = !this.inverted;
    return this;
}

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function parse$1(source) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$useFallback = _ref.useFallback,
      useFallback = _ref$useFallback === undefined ? true : _ref$useFallback,
      _ref$useMappers = _ref.useMappers,
      useMappers = _ref$useMappers === undefined ? true : _ref$useMappers;

  patchCoffeeScript();

  var context = ParseContext.fromSource(source, lex__default, CoffeeScript.nodes);

  var ast = context.ast;
  if (type(ast) === 'Block' && ast.expressions.every(function (e) {
    return type(e) === 'Comment';
  })) {
    var program = {
      type: 'Program',
      line: 1,
      column: 1,
      raw: source,
      range: [0, 0],
      body: null
    };

    Object.defineProperty(program, 'context', { value: context });
    return program;
  }

  return convert(context, useMappers ?
  // Use mappers, with or without fallback.
  useFallback ? mapAnyWithFallback : mapAny :
  // No mappers, use only the fallback.
  function (context, node, fallback) {
    return fallback();
  });
}

function convert(context, map) {
  var source = context.source,
      linesAndColumns = context.linesAndColumns;

  fixLocations(context.ast);
  return convertNode(context.ast);

  /**
   * @param {Object} node
   * @param ancestors
   */
  function fixLocations(node) {
    var ancestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    node.eachChild(function (child) {
      if (child && child.locationData) {
        fixLocations(child, [node].concat(toConsumableArray(ancestors)));
      }
    });

    node.locationData = fixInvalidLocationData(node.locationData, context.linesAndColumns);

    switch (type(node)) {
      case 'Value':
        {
          var lastChild = node.properties[node.properties.length - 1];
          if (lastChild) {
            node.locationData = locationWithLastPosition(node.locationData, lastChild.locationData);
          }
          break;
        }

      case 'Index':
      case 'Slice':
        {
          var rangeOfBrackets = rangeOfBracketTokensForIndexNode(context, node);
          var lbracket = context.sourceTokens.tokenAtIndex(rangeOfBrackets[0]);
          var lbracketLoc = linesAndColumns.locationForIndex(lbracket.start);
          var rbracket = context.sourceTokens.tokenAtIndex(rangeOfBrackets[1].previous());
          var rbracketLoc = linesAndColumns.locationForIndex(rbracket.start);
          node.locationData = {
            first_line: lbracketLoc.line,
            first_column: lbracketLoc.column,
            last_line: rbracketLoc.line,
            last_column: rbracketLoc.column
          };
          break;
        }

      case 'Access':
      case 'Arr':
      case 'Bool':
      case 'Comment':
      case 'Existence':
      case 'Expansion':
      case 'Literal':
      case 'Null':
      case 'Parens':
      case 'Range':
      case 'Return':
      case 'Splat':
      case 'Throw':
      case 'Undefined':
        break;

      case 'Obj':
        {
          var loc = node.locationData;
          var start = linesAndColumns.indexForLocation({ line: loc.first_line, column: loc.first_column });
          var isImplicitObject = source[start] !== '{';
          if (isImplicitObject) {
            var _lastChild = node.properties[node.properties.length - 1];
            node.locationData = locationWithLastPosition(node.locationData, _lastChild.locationData);
          }
          break;
        }

      case 'Op':
        {
          var _lastChild2 = node.second;
          if (_lastChild2) {
            node.locationData = locationWithLastPosition(node.locationData, _lastChild2.locationData);
          }
          break;
        }

      case 'Assign':
        {
          var _lastChild3 = node.value;
          node.locationData = locationWithLastPosition(node.locationData, _lastChild3.locationData);
          break;
        }

      case 'In':
        {
          var _lastChild4 = node.array;
          node.locationData = locationWithLastPosition(node.locationData, _lastChild4.locationData);
          break;
        }

      case 'Call':
        {
          if (node.variable && !node.do) {
            // `super` won't have a callee (i.e. `node.variable`)
            var calleeLoc = node.variable.locationData;
            var calleeEnd = linesAndColumns.indexForLocation({ line: calleeLoc.last_line, column: calleeLoc.last_column }) + 1;
            // Account for soaked calls, e.g. `a?()`.
            if (source[calleeEnd] === '?') {
              calleeEnd += 1;
            }
            var isImplicitCall = source[calleeEnd] !== '(';
            if (isImplicitCall) {
              var _lastChild5 = node.args[node.args.length - 1] || node.variable;
              if (_lastChild5) {
                node.locationData = locationWithLastPosition(node.locationData, _lastChild5.locationData);
              }
            }
          }
          break;
        }

      case 'Block':
        {
          var _lastChild6 = node.expressions[node.expressions.length - 1];
          if (_lastChild6) {
            node.locationData = locationWithLastPosition(node.locationData, _lastChild6.locationData);
          }
          break;
        }

      case 'If':
        {
          var _lastChild7 = node.elseBody || node.body;
          node.locationData = mergeLocations(node.locationData, _lastChild7.locationData);
          break;
        }

      case 'For':
      case 'While':
        {
          var _lastChild8 = node.body;
          node.locationData = mergeLocations(node.locationData, _lastChild8.locationData);
          break;
        }

      case 'Param':
        {
          if (!node.splat) {
            var _lastChild9 = node.value || node.name;
            node.locationData = locationWithLastPosition(node.locationData, _lastChild9.locationData);
          }
          break;
        }

      case 'Code':
        {
          if (node.body) {
            node.locationData = locationWithLastPosition(node.locationData, node.body.locationData);
          }
          break;
        }

      case 'Class':
        {
          var _lastChild10 = node.body;
          node.locationData = locationWithLastPosition(node.locationData, _lastChild10.locationData);
          break;
        }

      case 'Switch':
        {
          var _lastChild11 = node.otherwise || node.cases[node.cases.length - 1][1];
          node.locationData = locationWithLastPosition(node.locationData, _lastChild11.locationData);
          break;
        }

      case 'Try':
        {
          var _lastChild12 = node.ensure || node.recovery || node.errorVariable || node.attempt;
          node.locationData = locationWithLastPosition(node.locationData, _lastChild12.locationData);
          break;
        }

      case 'Extends':
        {
          var _lastChild13 = node.parent;
          node.locationData = locationWithLastPosition(node.locationData, _lastChild13.locationData);
          break;
        }

      default:
        throw new Error('cannot fix location data for ' + type(node) + ' at ' + (node.locationData.first_line + 1 + ':' + (node.locationData.first_column + 1) + ': ') + util.inspect(node));
    }
  }

  /**
   * @param {Object} node
   * @param ancestors
   * @returns {Node}
   */
  function convertNode(node) {
    var ancestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (ancestors.length === 0) {
      var programNode = {
        type: 'Program',
        line: 1,
        column: 1,
        range: [0, source.length],
        raw: source,
        body: makeNode(context, 'Block', node.locationData, {
          statements: convertChild(node.expressions)
        })
      };
      Object.defineProperty(programNode, 'context', {
        value: context,
        enumerable: false
      });
      return programNode;
    }

    switch (type(node)) {
      case 'Value':
        {
          return map(context, node, function () {
            var value = convertChild(node.base);
            node.properties.forEach(function (prop) {
              value = accessOpForProperty(value, prop, node.base.locationData);
              if (value.type === 'MemberAccessOp' && value.expression.type === 'MemberAccessOp') {
                if (value.expression.member.data === 'prototype' && value.expression.raw.slice(-2) === '::') {
                  value.expression.type = 'ProtoMemberAccessOp';
                }
              }
            });
            return value;
          });
        }

      case 'Call':
        return map(context, node, function () {
          if (isHeregexTemplateNode(node, context)) {
            var firstArgOp = convertOperator(node.args[0].base.body.expressions[0]);
            var heregexResult = createTemplateLiteral(firstArgOp, 'Heregex');
            var flags = void 0;
            if (node.args.length > 1) {
              flags = parseString(node.args[1].base.value);
            } else {
              flags = '';
            }
            heregexResult.flags = RegexFlags.parse(flags);
            return heregexResult;
          }

          if (node.isNew) {
            return makeNode(context, node.soak ? 'SoakedNewOp' : 'NewOp', node.locationData, {
              ctor: convertChild(node.variable),
              arguments: convertChild(node.args)
            });
          } else if (node.isSuper) {
            if (node.args.length === 1 && type(node.args[0]) === 'Splat' && locationsEqual(node.args[0].locationData, node.locationData)) {
              // Virtual splat argument.
              return makeNode(context, 'BareSuperFunctionApplication', node.locationData);
            }
            var superLocationData = {
              first_line: node.locationData.first_line,
              first_column: node.locationData.first_column,
              last_line: node.locationData.first_line,
              last_column: node.locationData.first_column + 'super'.length - 1
            };
            return makeNode(context, 'FunctionApplication', node.locationData, {
              function: makeNode(context, 'Super', superLocationData),
              arguments: convertChild(node.args)
            });
          } else {
            var result = makeNode(context, node.soak ? 'SoakedFunctionApplication' : 'FunctionApplication', node.locationData, {
              function: convertChild(node.variable),
              arguments: convertChild(node.args)
            });

            if (node.do) {
              result.type = 'DoOp';
              result.expression = result.function;

              // The argument to `do` may not always be a function literal.
              if (result.expression.parameters) {
                augmentDoFunctionWithArgs(node, result, result.expression, node.variable);
              } else if (result.expression.type === 'AssignOp' && result.expression.expression.parameters) {
                augmentDoFunctionWithArgs(node, result, result.expression.expression, node.variable.value);
              }
              delete result.function;
              delete result.arguments;
            }

            return result;
          }
        });

      case 'Op':
        {
          return map(context, node, function () {
            var op = convertOperator(node);
            if (isImplicitPlusOp(op, context) && isInterpolatedString(node, ancestors, context)) {
              return createTemplateLiteral(op, 'String');
            }
            if (isChainedComparison(node)) {
              var operands = unwindChainedComparison(node).map(convertChild);
              var operators = [];

              for (var i = 0; i < operands.length - 1; i++) {
                var left = operands[i];
                var right = operands[i + 1];

                operators.push(getOperatorInfoInRange(context, left.range[1] - 1, right.range[0]));
              }

              return makeNode(context, 'ChainedComparisonOp', node.locationData, {
                operands: operands,
                operators: operators
              });
            }
            return op;
          });
        }

      case 'Assign':
        return map(context, node, function () {
          if (node.context === 'object') {
            return makeNode(context, 'ObjectInitialiserMember', node.locationData, {
              key: convertChild(node.variable),
              expression: convertChild(node.value)
            });
          } else if (node.context && node.context.slice(-1) === '=') {
            return makeNode(context, 'CompoundAssignOp', node.locationData, {
              assignee: convertChild(node.variable),
              expression: convertChild(node.value),
              op: binaryOperatorNodeType(node.context.slice(0, -1))
            });
          } else {
            return makeNode(context, 'AssignOp', node.locationData, {
              assignee: convertChild(node.variable),
              expression: convertChild(node.value)
            });
          }
        });

      case 'Obj':
        return map(context, node, function () {
          return makeNode(context, 'ObjectInitialiser', node.locationData, {
            members: node.properties.map(function (property) {
              if (type(property) === 'Value') {
                // shorthand property
                var keyValue = convertChild(property);
                return makeNode(context, 'ObjectInitialiserMember', property.locationData, {
                  key: keyValue,
                  expression: keyValue
                });
              }

              return convertChild(property);
            }).filter(function (node) {
              return node;
            })
          });
        });

      case 'Arr':
        return map(context, node, function () {
          return makeNode(context, 'ArrayInitialiser', node.locationData, {
            members: convertChild(node.objects)
          });
        });

      case 'Parens':
        return map(context, node, function () {
          if (type(node.body) === 'Block') {
            var expressions = node.body.expressions;
            if (expressions.length === 1) {
              return convertChild(expressions[0]);
            } else {
              var lastExpression = expressions[expressions.length - 1];
              var result = convertChild(lastExpression);
              for (var i = expressions.length - 2; i >= 0; i--) {
                var left = expressions[i];
                result = makeNode(context, 'SeqOp', locationContainingNodes(left, lastExpression), {
                  left: convertChild(left),
                  right: result
                });
              }
              return result;
            }
          } else {
            return convertChild(node.body);
          }
        });

      case 'If':
        {
          return map(context, node, function () {
            var condition = convertChild(node.condition);
            var consequent = convertChild(node.body);
            var alternate = convertChild(node.elseBody);
            var isUnless = false;

            if (consequent && consequent.range[0] < condition.range[0]) {
              // POST-if, so look for tokens between the consequent and the condition
              consequent.inline = true;
              var lastConsequentTokenIndex = context.sourceTokens.indexOfTokenEndingAtSourceIndex(consequent.range[1]);
              var firstConditionTokenIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(condition.range[0]);

              for (var i = lastConsequentTokenIndex; i !== firstConditionTokenIndex; i = i.next()) {
                var token = context.sourceTokens.tokenAtIndex(i);
                if (token.type === lex.SourceType.IF) {
                  isUnless = source.slice(token.start, token.end) === 'unless';
                  break;
                }
              }
            } else {
              // Regular `if`, so look at the start of the node.
              var _firstConditionTokenIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(condition.range[0]);

              for (var _i = _firstConditionTokenIndex; _i !== null; _i = _i.previous()) {
                var _token = context.sourceTokens.tokenAtIndex(_i);
                if (_token.type === lex.SourceType.IF) {
                  isUnless = source.slice(_token.start, _token.end) === 'unless';
                  break;
                }
              }
            }

            return makeNode(context, 'Conditional', node.locationData, {
              isUnless: isUnless,
              condition: condition,
              consequent: consequent,
              alternate: alternate
            });
          });
        }

      case 'Code':
        {
          return map(context, node, function () {
            var fnType = void 0;
            if (node.bound) {
              if (node.isGenerator) {
                fnType = 'BoundGeneratorFunction';
              } else {
                fnType = 'BoundFunction';
              }
            } else {
              if (node.isGenerator) {
                fnType = 'GeneratorFunction';
              } else {
                fnType = 'Function';
              }
            }
            return makeNode(context, fnType, node.locationData, {
              body: convertChild(node.body),
              parameters: convertChild(node.params)
            });
          });
        }

      case 'Param':
        {
          return map(context, node, function () {
            var param = convertChild(node.name);
            if (node.value) {
              return makeNode(context, 'DefaultParam', node.locationData, {
                default: convertChild(node.value),
                param: param
              });
            }
            if (node.splat) {
              return makeNode(context, 'Rest', node.locationData, {
                expression: param
              });
            }
            return param;
          });
        }

      case 'Block':
        return map(context, node, function () {
          if (node.expressions.length === 0) {
            return null;
          } else {
            var block = makeNode(context, 'Block', node.locationData, {
              statements: convertChild(node.expressions)
            });

            var previousTokenIndex = context.sourceTokens.indexOfTokenNearSourceIndex(block.range[0] - 1);
            var previousToken = previousTokenIndex ? context.sourceTokens.tokenAtIndex(previousTokenIndex) : null;
            block.inline = previousToken ? previousToken.type !== lex.SourceType.NEWLINE : false;

            return block;
          }
        });

      case 'Return':
        return map(context, node, function () {
          return makeNode(context, 'Return', node.locationData, {
            expression: node.expression ? convertChild(node.expression) : null
          });
        });

      case 'For':
        return map(context, node, function () {
          if (locationsEqual(node.body.locationData, node.locationData)) {
            node.body.locationData = locationContainingNodes.apply(undefined, toConsumableArray(node.body.expressions));
          }
          if (node.object) {
            return makeNode(context, 'ForOf', node.locationData, {
              keyAssignee: convertChild(node.index),
              valAssignee: convertChild(node.name),
              body: convertChild(node.body),
              target: convertChild(node.source),
              filter: convertChild(node.guard),
              isOwn: node.own
            });
          } else {
            return makeNode(context, 'ForIn', node.locationData, {
              keyAssignee: convertChild(node.index),
              valAssignee: convertChild(node.name),
              body: convertChild(node.body),
              target: convertChild(node.source),
              filter: convertChild(node.guard),
              step: convertChild(node.step)
            });
          }
        });

      case 'While':
        {
          return map(context, node, function () {
            var start = linesAndColumns.indexForLocation({ line: node.locationData.first_line, column: node.locationData.first_column });
            var tokens = context.sourceTokens;
            var startTokenIndex = tokens.indexOfTokenContainingSourceIndex(start);
            var startTokenType = tokens.tokenAtIndex(startTokenIndex).type;

            if (startTokenType === lex.SourceType.LOOP) {
              return makeNode(context, 'Loop', locationContainingNodes(node, node.body), {
                body: convertChild(node.body)
              });
            }

            return makeNode(context, 'While', locationContainingNodes(node, node.condition, node.body), {
              condition: convertChild(node.condition),
              guard: convertChild(node.guard),
              body: convertChild(node.body),
              isUntil: node.condition.inverted === true
            });
          });
        }

      case 'Existence':
        return map(context, node, function () {
          return makeNode(context, 'UnaryExistsOp', node.locationData, {
            expression: convertChild(node.expression)
          });
        });

      case 'Class':
        {
          return map(context, node, function () {
            var nameNode = node.variable ? convertChild(node.variable) : null;

            var ctor = null;
            var boundMembers = [];
            var body = !node.body || node.body.expressions.length === 0 ? null : makeNode(context, 'Block', node.body.locationData, {
              statements: node.body.expressions.reduce(function (statements, expr) {
                if (type(expr) === 'Value' && type(expr.base) === 'Obj') {
                  expr.base.properties.forEach(function (property) {
                    var key = void 0;
                    var value = void 0;
                    switch (type(property)) {
                      case 'Value':
                        // shorthand property
                        key = value = convertChild(property);
                        break;

                      case 'Comment':
                        return;

                      default:
                        key = convertChild(property.variable);
                        value = convertChild(property.value);
                        break;
                    }
                    if (key.data === 'constructor') {
                      statements.push(ctor = makeNode(context, 'Constructor', property.locationData, {
                        assignee: key,
                        expression: value
                      }));
                    } else if (key.type === 'MemberAccessOp' && key.expression.type === 'This') {
                      statements.push(makeNode(context, 'AssignOp', property.locationData, {
                        assignee: key,
                        expression: value
                      }));
                    } else {
                      statements.push(makeNode(context, 'ClassProtoAssignOp', property.locationData, {
                        assignee: key,
                        expression: value
                      }));
                    }
                    if (value.type === 'BoundFunction') {
                      boundMembers.push(statements[statements.length - 1]);
                    }
                  });
                } else {
                  statements.push(convertChild(expr));
                }
                return statements;
              }, []),
              inline: false
            });

            return makeNode(context, 'Class', node.locationData, {
              name: nameNode,
              nameAssignee: nameNode,
              body: body,
              boundMembers: boundMembers,
              parent: node.parent ? convertChild(node.parent) : null,
              ctor: ctor
            });
          });
        }

      case 'Switch':
        return map(context, node, function () {
          return makeNode(context, 'Switch', node.locationData, {
            expression: convertChild(node.subject),
            cases: node.cases.map(function (_ref2) {
              var _ref3 = slicedToArray(_ref2, 2),
                  conditions = _ref3[0],
                  body = _ref3[1];

              if (!Array.isArray(conditions)) {
                conditions = [conditions];
              }
              var loc = expandLocationLeftThrough(context, locationContainingNodes(conditions[0], body), 'when ');
              return makeNode(context, 'SwitchCase', loc, {
                conditions: convertChild(conditions),
                consequent: convertChild(body)
              });
            }).filter(function (node) {
              return node;
            }),
            alternate: convertChild(node.otherwise)
          });
        });

      case 'Splat':
        return map(context, node, function () {
          return makeNode(context, 'Spread', node.locationData, {
            expression: convertChild(node.name)
          });
        });

      case 'Throw':
        return map(context, node, function () {
          return makeNode(context, 'Throw', node.locationData, {
            expression: convertChild(node.expression)
          });
        });

      case 'Try':
        return map(context, node, function () {
          return makeNode(context, 'Try', node.locationData, {
            body: convertChild(node.attempt),
            catchAssignee: convertChild(node.errorVariable),
            catchBody: convertChild(node.recovery),
            finallyBody: convertChild(node.ensure)
          });
        });

      case 'Range':
        return map(context, node, function () {
          return makeNode(context, 'Range', node.locationData, {
            left: convertChild(node.from),
            right: convertChild(node.to),
            isInclusive: !node.exclusive
          });
        });

      case 'In':
        {
          return map(context, node, function () {
            // We don't use the `negated` flag on `node` because it gets set to
            // `true` when a parent `If` is an `unless`.
            var left = convertChild(node.object);
            var right = convertChild(node.array);
            var isNot = false;

            var lastTokenIndexOfLeft = context.sourceTokens.indexOfTokenEndingAtSourceIndex(left.range[1]);
            var firstTokenIndexOfRight = context.sourceTokens.indexOfTokenStartingAtSourceIndex(right.range[0]);

            for (var i = lastTokenIndexOfLeft.next(); i !== firstTokenIndexOfRight; i = i.next()) {
              var token = context.sourceTokens.tokenAtIndex(i);
              if (token.type === lex.SourceType.RELATION) {
                isNot = source.slice(token.start, token.end) !== 'in';
              }
            }

            return makeNode(context, 'InOp', node.locationData, {
              left: left,
              right: right,
              isNot: isNot
            });
          });
        }

      case 'Expansion':
        return map(context, node, function () {
          return makeNode(context, 'Expansion', node.locationData);
        });

      case 'Comment':
        return map(context, node, function () {
          return null;
        });

      case 'Extends':
        return map(context, node, function () {
          return makeNode(context, 'ExtendsOp', node.locationData, {
            left: convertChild(node.child),
            right: convertChild(node.parent)
          });
        });

      default:
        // We use `mapAny` here instead of `map` because we removed the
        // fallbacks for terminal node types that had mappers (i.e. Literal),
        // so we use mappers here regardless of whether the options said not to.
        return mapAny(context, node);
    }

    function convertChild(child) {
      if (!child) {
        return null;
      } else if (Array.isArray(child)) {
        return child.map(convertChild).filter(function (node) {
          return node;
        });
      } else {
        return convertNode(child, [].concat(toConsumableArray(ancestors), [node]));
      }
    }

    function createTemplateLiteral(op, nodeType) {
      var tokens = context.sourceTokens;
      var startTokenIndex = tokens.indexOfTokenContainingSourceIndex(op.range[0]);
      var interpolatedStringTokenRange = tokens.rangeOfInterpolatedStringTokensContainingTokenIndex(startTokenIndex);
      if (!interpolatedStringTokenRange) {
        throw new Error('cannot find interpolation end for node');
      }
      var firstToken = tokens.tokenAtIndex(interpolatedStringTokenRange[0]);
      var lastToken = tokens.tokenAtIndex(interpolatedStringTokenRange[1].previous());
      op.type = nodeType;
      op.range = [firstToken.start, lastToken.end];
      op.raw = source.slice.apply(source, toConsumableArray(op.range));

      var elements = [];

      function addElements(_ref4) {
        var left = _ref4.left,
            right = _ref4.right;

        if (isImplicitPlusOp(left, context)) {
          addElements(left);
        } else {
          elements.push(left);
        }
        elements.push(right);
      }
      addElements(op);

      var quasis = [];
      var expressions = [];
      var quote = op.raw.slice(0, 3) === '"""' ? '"""' : '"';

      function findNextToken(position, tokenType) {
        var tokens = context.sourceTokens;
        var startTokenIndex = tokens.indexOfTokenNearSourceIndex(position);
        var tokenIndex = tokens.indexOfTokenMatchingPredicate(function (token) {
          return token.type === tokenType;
        }, startTokenIndex);
        return tokens.tokenAtIndex(tokenIndex);
      }

      function findPrevToken(position, tokenType) {
        var tokens = context.sourceTokens;
        var startTokenIndex = tokens.indexOfTokenNearSourceIndex(position);
        var tokenIndex = tokens.lastIndexOfTokenMatchingPredicate(function (token) {
          return token.type === tokenType;
        }, startTokenIndex);
        return tokens.tokenAtIndex(tokenIndex);
      }

      function buildFirstQuasi() {
        // Find the start of the first interpolation, i.e. "#{a}".
        //                                                  ^
        var interpolationStart = findNextToken(op.range[0], lex.SourceType.INTERPOLATION_START);
        var range = [op.range[0], interpolationStart.start];
        return buildQuasi(range);
      }

      function buildLastQuasi() {
        // Find the close of the last interpolation, i.e. "a#{b}".
        //                                                     ^
        var interpolationEnd = findPrevToken(op.range[1] - 1, lex.SourceType.INTERPOLATION_END);
        return buildQuasi([interpolationEnd.end, op.range[1]]);
      }

      function buildQuasi(range) {
        var loc = linesAndColumns.locationForIndex(range[0]);
        return {
          type: 'Quasi',
          data: '',
          raw: source.slice.apply(source, toConsumableArray(range)),
          line: loc.line + 1,
          column: loc.column + 1,
          range: range
        };
      }

      function buildQuasiWithString(range, raw) {
        var loc = linesAndColumns.locationForIndex(range[0]);
        return {
          type: 'Quasi',
          data: raw,
          raw: source.slice.apply(source, toConsumableArray(range)),
          line: loc.line + 1,
          column: loc.column,
          range: range
        };
      }

      elements.forEach(function (element, i) {
        if (i === 0) {
          if (element.type === 'String') {
            if (element.range[0] === op.range[0]) {
              // This string is not interpolated, it's part of the string interpolation.
              if (element.data === '' && element.raw.length > quote.length) {
                // CoffeeScript includes the `#` in the raw value of a leading
                // empty quasi string, but it shouldn't be there.
                element = buildFirstQuasi();
              }
              quasis.push(element);
              return;
            }
          }
        }

        if (element.type === 'Quasi') {
          quasis.push(element);
        } else {
          if (quasis.length === 0) {
            // This element is interpolated and is first, i.e. "#{a}".
            quasis.push(buildFirstQuasi());
            expressions.push(element);
          } else if (/^"(.*?)"$/.test(element.data)) {
            quasis.push(buildQuasiWithString(element.range, element.raw));
          } else if (quasis.length < expressions.length + 1) {
            var lastInterpolationEnd = findPrevToken(element.range[0], lex.SourceType.INTERPOLATION_END);
            var lastInterpolationStart = findPrevToken(element.range[0], lex.SourceType.INTERPOLATION_START);
            quasis.push(buildQuasi([lastInterpolationEnd.end, lastInterpolationStart.start]));
            expressions.push(element);
          } else {
            expressions.push(element);
          }
        }
      });

      if (quasis.length < expressions.length + 1) {
        quasis.push(buildLastQuasi());
      }

      op.quasis = quasis;
      op.expressions = expressions;
      delete op.left;
      delete op.right;
      return op;
    }

    /**
     * @param expression converted base
     * @param prop CS node to convertNode
     * @param loc CS location data for original base
     */
    function accessOpForProperty(expression, prop, loc) {
      switch (type(prop)) {
        case 'Access':
          {
            var member = convertChild(prop.name);
            var accessTokenIndex = context.sourceTokens.indexOfTokenStartingAtSourceIndex(member.range[0]);
            var accessToken = accessTokenIndex && context.sourceTokens.tokenAtIndex(accessTokenIndex);

            if (prop.soak && accessToken && accessToken.type === lex.SourceType.EXISTENCE) {
              accessTokenIndex = accessTokenIndex.next();
              accessToken = accessTokenIndex && context.sourceTokens.tokenAtIndex(accessTokenIndex);
            }

            if (accessToken && accessToken.type === lex.SourceType.PROTO) {
              return makeNode(context, prop.soak ? 'SoakedProtoMemberAccessOp' : 'ProtoMemberAccessOp', mergeLocations(loc, prop.locationData), {
                expression: expression
              });
            }

            return makeNode(context, prop.soak ? 'SoakedMemberAccessOp' : 'MemberAccessOp', mergeLocations(loc, prop.locationData), {
              expression: expression,
              member: member
            });
          }

        case 'Index':
          return makeNode(context, prop.soak ? 'SoakedDynamicMemberAccessOp' : 'DynamicMemberAccessOp', mergeLocations(loc, prop.locationData), {
            expression: expression,
            indexingExpr: convertNode(prop.index, [].concat(toConsumableArray(ancestors), [node, prop]))
          });

        case 'Slice':
          return makeNode(context, prop.soak ? 'SoakedSlice' : 'Slice', mergeLocations(loc, prop.locationData), {
            expression: expression,
            left: convertChild(prop.range.from),
            right: convertChild(prop.range.to),
            isInclusive: !prop.range.exclusive
          });

        default:
          throw new Error('unknown property type: ' + type(prop) + '\n' + JSON.stringify(prop, null, 2));
      }
    }

    function binaryOperatorNodeType(operator) {
      switch (operator) {
        case '===':
          return 'EQOp';

        case '!==':
          return 'NEQOp';

        case '&&':
          return 'LogicalAndOp';

        case '||':
          return 'LogicalOrOp';

        case '+':
          return 'PlusOp';

        case '-':
          return 'SubtractOp';

        case '*':
          return 'MultiplyOp';

        case '/':
          return 'DivideOp';

        case '%':
          return 'RemOp';

        case '%%':
          return 'ModuloOp';

        case '&':
          return 'BitAndOp';

        case '|':
          return 'BitOrOp';

        case '^':
          return 'BitXorOp';

        case '<':
          return 'LTOp';

        case '>':
          return 'GTOp';

        case '<=':
          return 'LTEOp';

        case '>=':
          return 'GTEOp';

        case 'in':
          return 'OfOp';

        case '?':
          return 'ExistsOp';

        case 'instanceof':
          return 'InstanceofOp';

        case '<<':
          return 'LeftShiftOp';

        case '>>':
          return 'SignedRightShiftOp';

        case '>>>':
          return 'UnsignedRightShiftOp';

        case '**':
          return 'ExpOp';

        case '//':
          return 'FloorDivideOp';

        default:
          return null;
      }
    }

    function convertOperator(op) {
      var nodeType = void 0;

      if (op.second) {
        nodeType = binaryOperatorNodeType(op.operator);

        if (!nodeType) {
          throw new Error('unknown binary operator: ' + op.operator);
        }

        var result = makeNode(context, nodeType, op.locationData, {
          left: convertNode(op.first, [].concat(toConsumableArray(ancestors), [op])),
          right: convertNode(op.second, [].concat(toConsumableArray(ancestors), [op]))
        });
        if (result.type === 'InstanceofOp' || result.type === 'OfOp') {
          var lastTokenIndexOfLeft = context.sourceTokens.indexOfTokenEndingAtSourceIndex(result.left.range[1]);
          var firstTokenIndexOfRight = context.sourceTokens.indexOfTokenStartingAtSourceIndex(result.right.range[0]);
          var isNot = false;

          for (var i = lastTokenIndexOfLeft.next(); i !== firstTokenIndexOfRight; i = i.next()) {
            var token = context.sourceTokens.tokenAtIndex(i);
            if (token.type === lex.SourceType.OPERATOR || token.type === lex.SourceType.RELATION) {
              isNot = source.slice(token.start, token.start + 'not'.length) === 'not';
              break;
            }
          }

          result.isNot = isNot;
        }
        return result;
      } else {
        switch (op.operator) {
          case '+':
            nodeType = 'UnaryPlusOp';
            break;

          case '-':
            nodeType = 'UnaryNegateOp';
            break;

          case 'typeof':
            nodeType = 'TypeofOp';
            break;

          case '!':
            nodeType = 'LogicalNotOp';
            break;

          case '~':
            nodeType = 'BitNotOp';
            break;

          case '--':
            nodeType = op.flip ? 'PostDecrementOp' : 'PreDecrementOp';
            break;

          case '++':
            nodeType = op.flip ? 'PostIncrementOp' : 'PreIncrementOp';
            break;

          case 'delete':
            nodeType = 'DeleteOp';
            break;

          case 'new':
            // Parentheses-less "new".
            return makeNode(context, 'NewOp', op.locationData, {
              ctor: convertChild(op.first),
              arguments: []
            });

          case 'yield':
            {
              if (type(op.first) === 'Return') {
                return makeNode(context, 'YieldReturn', op.locationData, {
                  expression: convertChild(op.first.expression)
                });
              } else {
                return makeNode(context, 'Yield', op.locationData, {
                  expression: convertChild(op.first)
                });
              }
            }

          case 'yield*':
            return makeNode(context, 'YieldFrom', op.locationData, {
              expression: convertChild(op.first)
            });

          default:
            throw new Error('unknown unary operator: ' + op.operator);
        }

        return makeNode(context, nodeType, op.locationData, {
          expression: convertNode(op.first, [].concat(toConsumableArray(ancestors), [op]))
        });
      }
    }
  }

  function augmentDoFunctionWithArgs(csDoNode, doResult, func, csFuncNode) {
    func.parameters = func.parameters.map(function (param, i) {
      var arg = doResult.arguments[i];

      // If there's a parameter with no default, CoffeeScript will insert a fake
      // arg with the same value and location.
      if (arg.type === 'Identifier' && arg.data === param.data && arg.range[0] === param.range[0] && arg.range[1] === param.range[1]) {
        return param;
      }

      return makeNode(context, 'DefaultParam', locationContainingNodes(csDoNode.args[i], csFuncNode.params[i]), {
        param: param,
        default: arg
      });
    });
  }
}

exports.parse = parse$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: It's bad bractice to use a require here... Create a mapper instead!
const TagLine = __webpack_require__(6);

class Comment {
  constructor(sortTags = true) {
    this.sortTags = sortTags;

    this.head = '/**';
    this.body = [];
    this.tail = ' */';

    this.tagParameters = [];
    this.tagReturns = undefined;
    this.tagOthers = [];
  }

  addContent(content) {
    if (content && content.getJSDoc) {
      if (content.type == TagLine.TYPE.PARAM) {
        this.tagParameters.push(content);
        this.tagParameters.sort(function(aTagLine, anotherTagLine) {
          return aTagLine.parameter.name.localeCompare(anotherTagLine.parameter.name);
        });
      } else if (content.type == TagLine.TYPE.RETURN) {
        this.tagReturns = content;
      } else {
        this.tagOthers.push(content);
      }
    } else {
      this.body.push(content);
    }
  }

  getJSDoc(lineSeparator = '\n') {
    let text = this.head;

    this.body.forEach((content) => {
      text += `${lineSeparator} * ${content}`;
    });

    this.tagOthers.sort((a, b) => {
      return a.getJSDoc().localeCompare( b.getJSDoc());
    });
    this.tagOthers.forEach((content) => {
      text += `${lineSeparator} * ${content.getJSDoc()}`;
    });

    if(this.tagParameters) {
      text += `${lineSeparator} *`;
      this.tagParameters.forEach((content) => {
        text += `${lineSeparator} * ${content.getJSDoc()}`;
      });
    }

    if(this.tagReturns) {
      text += `${lineSeparator} * ${this.tagReturns.getJSDoc()}`;
    }

    text += `${lineSeparator}${this.tail}`;
    return text;
  }
}

module.exports = Comment;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

/* eslint max-len: 0 */

// This is a trick taken from Esprima. It turns out that, on
// non-Chrome browsers, to check whether a string is in a set, a
// predicate containing a big ugly `switch` statement is faster than
// a regular expression, and on Chrome the two are about on par.
// This function uses `eval` (non-lexical) to produce such a
// predicate from a space-separated string of words.
//
// It starts by sorting the words by length.

function makePredicate(words) {
  words = words.split(" ");
  return function (str) {
    return words.indexOf(str) >= 0;
  };
}

// Reserved word lists for various dialects of the language

var reservedWords = {
  6: makePredicate("enum await"),
  strict: makePredicate("implements interface let package private protected public static yield"),
  strictBind: makePredicate("eval arguments")
};

// And the keywords

var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super");

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by `bin/generate-identifier-regex.js`.
// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541];
// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) return false;

    pos += set[i + 1];
    if (pos >= code) return true;
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  return isInAstralSet(code, astralIdentifierStartCodes);
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

// A second optional argument can be given to further configure
var defaultOptions = {
  // Source type ("script" or "module") for different semantics
  sourceType: "script",
  // Source filename.
  sourceFilename: undefined,
  // Line from which to start counting source. Useful for
  // integration with other tools.
  startLine: 1,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // TODO
  allowSuperOutsideMethod: false,
  // An array of plugins to enable
  plugins: [],
  // TODO
  strictMode: null
};

// Interpret and default an options object

function getOptions(opts) {
  var options = {};
  for (var key in defaultOptions) {
    options[key] = opts && key in opts ? opts[key] : defaultOptions[key];
  }
  return options;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var beforeExpr = true;
var startsExpr = true;
var isLoop = true;
var isAssign = true;
var prefix = true;
var postfix = true;

var TokenType = function TokenType(label) {
  var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, TokenType);

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.rightAssociative = !!conf.rightAssociative;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

var KeywordTokenType = function (_TokenType) {
  inherits(KeywordTokenType, _TokenType);

  function KeywordTokenType(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, KeywordTokenType);

    options.keyword = name;

    return possibleConstructorReturn(this, _TokenType.call(this, name, options));
  }

  return KeywordTokenType;
}(TokenType);

var BinopTokenType = function (_TokenType2) {
  inherits(BinopTokenType, _TokenType2);

  function BinopTokenType(name, prec) {
    classCallCheck(this, BinopTokenType);
    return possibleConstructorReturn(this, _TokenType2.call(this, name, { beforeExpr: beforeExpr, binop: prec }));
  }

  return BinopTokenType;
}(TokenType);

var types = {
  num: new TokenType("num", { startsExpr: startsExpr }),
  regexp: new TokenType("regexp", { startsExpr: startsExpr }),
  string: new TokenType("string", { startsExpr: startsExpr }),
  name: new TokenType("name", { startsExpr: startsExpr }),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  braceBarL: new TokenType("{|", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  braceR: new TokenType("}"),
  braceBarR: new TokenType("|}"),
  parenL: new TokenType("(", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", { beforeExpr: beforeExpr }),
  semi: new TokenType(";", { beforeExpr: beforeExpr }),
  colon: new TokenType(":", { beforeExpr: beforeExpr }),
  doubleColon: new TokenType("::", { beforeExpr: beforeExpr }),
  dot: new TokenType("."),
  question: new TokenType("?", { beforeExpr: beforeExpr }),
  arrow: new TokenType("=>", { beforeExpr: beforeExpr }),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", { beforeExpr: beforeExpr }),
  backQuote: new TokenType("`", { startsExpr: startsExpr }),
  dollarBraceL: new TokenType("${", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  at: new TokenType("@"),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", { beforeExpr: beforeExpr, isAssign: isAssign }),
  assign: new TokenType("_=", { beforeExpr: beforeExpr, isAssign: isAssign }),
  incDec: new TokenType("++/--", { prefix: prefix, postfix: postfix, startsExpr: startsExpr }),
  prefix: new TokenType("prefix", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
  logicalOR: new BinopTokenType("||", 1),
  logicalAND: new BinopTokenType("&&", 2),
  bitwiseOR: new BinopTokenType("|", 3),
  bitwiseXOR: new BinopTokenType("^", 4),
  bitwiseAND: new BinopTokenType("&", 5),
  equality: new BinopTokenType("==/!=", 6),
  relational: new BinopTokenType("</>", 7),
  bitShift: new BinopTokenType("<</>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: beforeExpr, binop: 9, prefix: prefix, startsExpr: startsExpr }),
  modulo: new BinopTokenType("%", 10),
  star: new BinopTokenType("*", 10),
  slash: new BinopTokenType("/", 10),
  exponent: new TokenType("**", { beforeExpr: beforeExpr, binop: 11, rightAssociative: true })
};

var keywords = {
  "break": new KeywordTokenType("break"),
  "case": new KeywordTokenType("case", { beforeExpr: beforeExpr }),
  "catch": new KeywordTokenType("catch"),
  "continue": new KeywordTokenType("continue"),
  "debugger": new KeywordTokenType("debugger"),
  "default": new KeywordTokenType("default", { beforeExpr: beforeExpr }),
  "do": new KeywordTokenType("do", { isLoop: isLoop, beforeExpr: beforeExpr }),
  "else": new KeywordTokenType("else", { beforeExpr: beforeExpr }),
  "finally": new KeywordTokenType("finally"),
  "for": new KeywordTokenType("for", { isLoop: isLoop }),
  "function": new KeywordTokenType("function", { startsExpr: startsExpr }),
  "if": new KeywordTokenType("if"),
  "return": new KeywordTokenType("return", { beforeExpr: beforeExpr }),
  "switch": new KeywordTokenType("switch"),
  "throw": new KeywordTokenType("throw", { beforeExpr: beforeExpr }),
  "try": new KeywordTokenType("try"),
  "var": new KeywordTokenType("var"),
  "let": new KeywordTokenType("let"),
  "const": new KeywordTokenType("const"),
  "while": new KeywordTokenType("while", { isLoop: isLoop }),
  "with": new KeywordTokenType("with"),
  "new": new KeywordTokenType("new", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  "this": new KeywordTokenType("this", { startsExpr: startsExpr }),
  "super": new KeywordTokenType("super", { startsExpr: startsExpr }),
  "class": new KeywordTokenType("class"),
  "extends": new KeywordTokenType("extends", { beforeExpr: beforeExpr }),
  "export": new KeywordTokenType("export"),
  "import": new KeywordTokenType("import"),
  "yield": new KeywordTokenType("yield", { beforeExpr: beforeExpr, startsExpr: startsExpr }),
  "null": new KeywordTokenType("null", { startsExpr: startsExpr }),
  "true": new KeywordTokenType("true", { startsExpr: startsExpr }),
  "false": new KeywordTokenType("false", { startsExpr: startsExpr }),
  "in": new KeywordTokenType("in", { beforeExpr: beforeExpr, binop: 7 }),
  "instanceof": new KeywordTokenType("instanceof", { beforeExpr: beforeExpr, binop: 7 }),
  "typeof": new KeywordTokenType("typeof", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
  "void": new KeywordTokenType("void", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr }),
  "delete": new KeywordTokenType("delete", { beforeExpr: beforeExpr, prefix: prefix, startsExpr: startsExpr })
};

// Map keyword names to token types.
Object.keys(keywords).forEach(function (name) {
  types["_" + name] = keywords[name];
});

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

// The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var TokContext = function TokContext(token, isExpr, preserveSpace, override) {
  classCallCheck(this, TokContext);

  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
};

var types$1 = {
  braceStatement: new TokContext("{", false),
  braceExpression: new TokContext("{", true),
  templateQuasi: new TokContext("${", true),
  parenStatement: new TokContext("(", false),
  parenExpression: new TokContext("(", true),
  template: new TokContext("`", true, true, function (p) {
    return p.readTmplToken();
  }),
  functionExpression: new TokContext("function", true)
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function () {
  if (this.state.context.length === 1) {
    this.state.exprAllowed = true;
    return;
  }

  var out = this.state.context.pop();
  if (out === types$1.braceStatement && this.curContext() === types$1.functionExpression) {
    this.state.context.pop();
    this.state.exprAllowed = false;
  } else if (out === types$1.templateQuasi) {
    this.state.exprAllowed = true;
  } else {
    this.state.exprAllowed = !out.isExpr;
  }
};

types.name.updateContext = function (prevType) {
  this.state.exprAllowed = false;

  if (prevType === types._let || prevType === types._const || prevType === types._var) {
    if (lineBreak.test(this.input.slice(this.state.end))) {
      this.state.exprAllowed = true;
    }
  }
};

types.braceL.updateContext = function (prevType) {
  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
  this.state.exprAllowed = true;
};

types.dollarBraceL.updateContext = function () {
  this.state.context.push(types$1.templateQuasi);
  this.state.exprAllowed = true;
};

types.parenL.updateContext = function (prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
  this.state.exprAllowed = true;
};

types.incDec.updateContext = function () {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = function () {
  if (this.curContext() !== types$1.braceStatement) {
    this.state.context.push(types$1.functionExpression);
  }

  this.state.exprAllowed = false;
};

types.backQuote.updateContext = function () {
  if (this.curContext() === types$1.template) {
    this.state.context.pop();
  } else {
    this.state.context.push(types$1.template);
  }
  this.state.exprAllowed = false;
};

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  classCallCheck(this, Position);

  this.line = line;
  this.column = col;
};

var SourceLocation = function SourceLocation(start, end) {
  classCallCheck(this, SourceLocation);

  this.start = start;
  this.end = end;
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur);
    }
  }
}

var State = function () {
  function State() {
    classCallCheck(this, State);
  }

  State.prototype.init = function init(options, input) {
    this.strict = options.strictMode === false ? false : options.sourceType === "module";

    this.input = input;

    this.potentialArrowAt = -1;

    this.inMethod = this.inFunction = this.inGenerator = this.inAsync = this.inPropertyName = this.inType = this.noAnonFunctionType = false;

    this.labels = [];

    this.decorators = [];

    this.tokens = [];

    this.comments = [];

    this.trailingComments = [];
    this.leadingComments = [];
    this.commentStack = [];

    this.pos = this.lineStart = 0;
    this.curLine = options.startLine;

    this.type = types.eof;
    this.value = null;
    this.start = this.end = this.pos;
    this.startLoc = this.endLoc = this.curPosition();

    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;

    this.context = [types$1.braceStatement];
    this.exprAllowed = true;

    this.containsEsc = this.containsOctal = false;
    this.octalPosition = null;

    this.exportedIdentifiers = [];

    return this;
  };

  // TODO


  // TODO


  // Used to signify the start of a potential arrow function


  // Flags to track whether we are in a function, a generator.


  // Labels in scope.


  // Leading decorators.


  // Token store.


  // Comment store.


  // Comment attachment store


  // The current position of the tokenizer in the input.


  // Properties of the current token:
  // Its type


  // For tokens that include more information than their type, the value


  // Its start and end offset


  // And, if locations are used, the {line, column} object
  // corresponding to those offsets


  // Position information for the previous token


  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.


  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.


  // TODO


  // Names of exports store. `default` is stored as a name for both
  // `export default foo;` and `export { foo as default };`.


  State.prototype.curPosition = function curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart);
  };

  State.prototype.clone = function clone(skipArrays) {
    var state = new State();
    for (var key in this) {
      var val = this[key];

      if ((!skipArrays || key === "context") && Array.isArray(val)) {
        val = val.slice();
      }

      state[key] = val;
    }
    return state;
  };

  return State;
}();

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(state) {
  classCallCheck(this, Token);

  this.type = state.type;
  this.value = state.value;
  this.start = state.start;
  this.end = state.end;
  this.loc = new SourceLocation(state.startLoc, state.endLoc);
};

// ## Tokenizer

function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) {
    return String.fromCharCode(code);
  } else {
    return String.fromCharCode((code - 0x10000 >> 10) + 0xD800, (code - 0x10000 & 1023) + 0xDC00);
  }
}

var Tokenizer = function () {
  function Tokenizer(options, input) {
    classCallCheck(this, Tokenizer);

    this.state = new State();
    this.state.init(options, input);
  }

  // Move to the next token

  Tokenizer.prototype.next = function next() {
    if (!this.isLookahead) {
      this.state.tokens.push(new Token(this.state));
    }

    this.state.lastTokEnd = this.state.end;
    this.state.lastTokStart = this.state.start;
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  };

  // TODO

  Tokenizer.prototype.eat = function eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  };

  // TODO

  Tokenizer.prototype.match = function match(type) {
    return this.state.type === type;
  };

  // TODO

  Tokenizer.prototype.isKeyword = function isKeyword$$1(word) {
    return isKeyword(word);
  };

  // TODO

  Tokenizer.prototype.lookahead = function lookahead() {
    var old = this.state;
    this.state = old.clone(true);

    this.isLookahead = true;
    this.next();
    this.isLookahead = false;

    var curr = this.state.clone(true);
    this.state = old;
    return curr;
  };

  // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).

  Tokenizer.prototype.setStrict = function setStrict(strict) {
    this.state.strict = strict;
    if (!this.match(types.num) && !this.match(types.string)) return;
    this.state.pos = this.state.start;
    while (this.state.pos < this.state.lineStart) {
      this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
      --this.state.curLine;
    }
    this.nextToken();
  };

  Tokenizer.prototype.curContext = function curContext() {
    return this.state.context[this.state.context.length - 1];
  };

  // Read a single token, updating the parser object's token-related
  // properties.

  Tokenizer.prototype.nextToken = function nextToken() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) this.skipSpace();

    this.state.containsOctal = false;
    this.state.octalPosition = null;
    this.state.start = this.state.pos;
    this.state.startLoc = this.state.curPosition();
    if (this.state.pos >= this.input.length) return this.finishToken(types.eof);

    if (curContext.override) {
      return curContext.override(this);
    } else {
      return this.readToken(this.fullCharCodeAtPos());
    }
  };

  Tokenizer.prototype.readToken = function readToken(code) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code) || code === 92 /* '\' */) {
        return this.readWord();
      } else {
      return this.getTokenFromCode(code);
    }
  };

  Tokenizer.prototype.fullCharCodeAtPos = function fullCharCodeAtPos() {
    var code = this.input.charCodeAt(this.state.pos);
    if (code <= 0xd7ff || code >= 0xe000) return code;

    var next = this.input.charCodeAt(this.state.pos + 1);
    return (code << 10) + next - 0x35fdc00;
  };

  Tokenizer.prototype.pushComment = function pushComment(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "CommentBlock" : "CommentLine",
      value: text,
      start: start,
      end: end,
      loc: new SourceLocation(startLoc, endLoc)
    };

    if (!this.isLookahead) {
      this.state.tokens.push(comment);
      this.state.comments.push(comment);
      this.addComment(comment);
    }
  };

  Tokenizer.prototype.skipBlockComment = function skipBlockComment() {
    var startLoc = this.state.curPosition();
    var start = this.state.pos;
    var end = this.input.indexOf("*/", this.state.pos += 2);
    if (end === -1) this.raise(this.state.pos - 2, "Unterminated comment");

    this.state.pos = end + 2;
    lineBreakG.lastIndex = start;
    var match = void 0;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
      ++this.state.curLine;
      this.state.lineStart = match.index + match[0].length;
    }

    this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
  };

  Tokenizer.prototype.skipLineComment = function skipLineComment(startSkip) {
    var start = this.state.pos;
    var startLoc = this.state.curPosition();
    var ch = this.input.charCodeAt(this.state.pos += startSkip);
    while (this.state.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
      ++this.state.pos;
      ch = this.input.charCodeAt(this.state.pos);
    }

    this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
  };

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  Tokenizer.prototype.skipSpace = function skipSpace() {
    loop: while (this.state.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.state.pos);
      switch (ch) {
        case 32:case 160:
          // ' '
          ++this.state.pos;
          break;

        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }

        case 10:case 8232:case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;

        case 47:
          // '/'
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              // '*'
              this.skipBlockComment();
              break;

            case 47:
              this.skipLineComment(2);
              break;

            default:
              break loop;
          }
          break;

        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.state.pos;
          } else {
            break loop;
          }
      }
    }
  };

  // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.

  Tokenizer.prototype.finishToken = function finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    var prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;

    this.updateContext(prevType);
  };

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //


  Tokenizer.prototype.readToken_dot = function readToken_dot() {
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next >= 48 && next <= 57) {
      return this.readNumber(true);
    }

    var next2 = this.input.charCodeAt(this.state.pos + 2);
    if (next === 46 && next2 === 46) {
      // 46 = dot '.'
      this.state.pos += 3;
      return this.finishToken(types.ellipsis);
    } else {
      ++this.state.pos;
      return this.finishToken(types.dot);
    }
  };

  Tokenizer.prototype.readToken_slash = function readToken_slash() {
    // '/'
    if (this.state.exprAllowed) {
      ++this.state.pos;
      return this.readRegexp();
    }

    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.slash, 1);
    }
  };

  Tokenizer.prototype.readToken_mult_modulo = function readToken_mult_modulo(code) {
    // '%*'
    var type = code === 42 ? types.star : types.modulo;
    var width = 1;
    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 42) {
      // '*'
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = types.exponent;
    }

    if (next === 61) {
      width++;
      type = types.assign;
    }

    return this.finishOp(type, width);
  };

  Tokenizer.prototype.readToken_pipe_amp = function readToken_pipe_amp(code) {
    // '|&'
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
    if (next === 61) return this.finishOp(types.assign, 2);
    if (code === 124 && next === 125 && this.hasPlugin("flow")) return this.finishOp(types.braceBarR, 2);
    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
  };

  Tokenizer.prototype.readToken_caret = function readToken_caret() {
    // '^'
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.bitwiseXOR, 1);
    }
  };

  Tokenizer.prototype.readToken_plus_min = function readToken_plus_min(code) {
    // '+-'
    var next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (next === 45 && this.input.charCodeAt(this.state.pos + 2) === 62 && lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken();
      }
      return this.finishOp(types.incDec, 2);
    }

    if (next === 61) {
      return this.finishOp(types.assign, 2);
    } else {
      return this.finishOp(types.plusMin, 1);
    }
  };

  Tokenizer.prototype.readToken_lt_gt = function readToken_lt_gt(code) {
    // '<>'
    var next = this.input.charCodeAt(this.state.pos + 1);
    var size = 1;

    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(types.assign, size + 1);
      return this.finishOp(types.bitShift, size);
    }

    if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
      if (this.inModule) this.unexpected();
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken();
    }

    if (next === 61) {
      // <= | >=
      size = 2;
    }

    return this.finishOp(types.relational, size);
  };

  Tokenizer.prototype.readToken_eq_excl = function readToken_eq_excl(code) {
    // '=!'
    var next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) return this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
    if (code === 61 && next === 62) {
      // '=>'
      this.state.pos += 2;
      return this.finishToken(types.arrow);
    }
    return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
  };

  Tokenizer.prototype.getTokenFromCode = function getTokenFromCode(code) {
    switch (code) {
      // The interpretation of a dot depends on whether it is followed
      // by a digit or another two dots.
      case 46:
        // '.'
        return this.readToken_dot();

      // Punctuation tokens.
      case 40:
        ++this.state.pos;return this.finishToken(types.parenL);
      case 41:
        ++this.state.pos;return this.finishToken(types.parenR);
      case 59:
        ++this.state.pos;return this.finishToken(types.semi);
      case 44:
        ++this.state.pos;return this.finishToken(types.comma);
      case 91:
        ++this.state.pos;return this.finishToken(types.bracketL);
      case 93:
        ++this.state.pos;return this.finishToken(types.bracketR);

      case 123:
        if (this.hasPlugin("flow") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          return this.finishOp(types.braceBarL, 2);
        } else {
          ++this.state.pos;
          return this.finishToken(types.braceL);
        }

      case 125:
        ++this.state.pos;return this.finishToken(types.braceR);

      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          return this.finishOp(types.doubleColon, 2);
        } else {
          ++this.state.pos;
          return this.finishToken(types.colon);
        }

      case 63:
        ++this.state.pos;return this.finishToken(types.question);
      case 64:
        ++this.state.pos;return this.finishToken(types.at);

      case 96:
        // '`'
        ++this.state.pos;
        return this.finishToken(types.backQuote);

      case 48:
        // '0'
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 120 || next === 88) return this.readRadixNumber(16); // '0x', '0X' - hex number
        if (next === 111 || next === 79) return this.readRadixNumber(8); // '0o', '0O' - octal number
        if (next === 98 || next === 66) return this.readRadixNumber(2); // '0b', '0B' - binary number
      // Anything else beginning with a digit is an integer, octal
      // number, or float.
      case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
        // 1-9
        return this.readNumber(false);

      // Quotes produce strings.
      case 34:case 39:
        // '"', "'"
        return this.readString(code);

      // Operators are parsed inline in tiny state machines. '=' (61) is
      // often referred to. `finishOp` simply skips the amount of
      // characters it is given as second argument, and returns a token
      // of the type given by its first argument.

      case 47:
        // '/'
        return this.readToken_slash();

      case 37:case 42:
        // '%*'
        return this.readToken_mult_modulo(code);

      case 124:case 38:
        // '|&'
        return this.readToken_pipe_amp(code);

      case 94:
        // '^'
        return this.readToken_caret();

      case 43:case 45:
        // '+-'
        return this.readToken_plus_min(code);

      case 60:case 62:
        // '<>'
        return this.readToken_lt_gt(code);

      case 61:case 33:
        // '=!'
        return this.readToken_eq_excl(code);

      case 126:
        // '~'
        return this.finishOp(types.prefix, 1);
    }

    this.raise(this.state.pos, "Unexpected character '" + codePointToString(code) + "'");
  };

  Tokenizer.prototype.finishOp = function finishOp(type, size) {
    var str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    return this.finishToken(type, str);
  };

  Tokenizer.prototype.readRegexp = function readRegexp() {
    var start = this.state.pos;
    var escaped = void 0,
        inClass = void 0;
    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
      var ch = this.input.charAt(this.state.pos);
      if (lineBreak.test(ch)) {
        this.raise(start, "Unterminated regular expression");
      }
      if (escaped) {
        escaped = false;
      } else {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }
        escaped = ch === "\\";
      }
      ++this.state.pos;
    }
    var content = this.input.slice(start, this.state.pos);
    ++this.state.pos;
    // Need to use `readWord1` because '\uXXXX' sequences are allowed
    // here (don't ask).
    var mods = this.readWord1();
    if (mods) {
      var validFlags = /^[gmsiyu]*$/;
      if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag");
    }
    return this.finishToken(types.regexp, {
      pattern: content,
      flags: mods
    });
  };

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  Tokenizer.prototype.readInt = function readInt(radix, len) {
    var start = this.state.pos;
    var total = 0;

    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = this.input.charCodeAt(this.state.pos);
      var val = void 0;
      if (code >= 97) {
        val = code - 97 + 10; // a
      } else if (code >= 65) {
        val = code - 65 + 10; // A
      } else if (code >= 48 && code <= 57) {
        val = code - 48; // 0-9
      } else {
        val = Infinity;
      }
      if (val >= radix) break;
      ++this.state.pos;
      total = total * radix + val;
    }
    if (this.state.pos === start || len != null && this.state.pos - start !== len) return null;

    return total;
  };

  Tokenizer.prototype.readRadixNumber = function readRadixNumber(radix) {
    this.state.pos += 2; // 0x
    var val = this.readInt(radix);
    if (val == null) this.raise(this.state.start + 2, "Expected number in radix " + radix);
    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");
    return this.finishToken(types.num, val);
  };

  // Read an integer, octal integer, or floating-point number.

  Tokenizer.prototype.readNumber = function readNumber(startsWithDot) {
    var start = this.state.pos;
    var octal = this.input.charCodeAt(this.state.pos) === 48;
    var isFloat = false;

    if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number");
    var next = this.input.charCodeAt(this.state.pos);
    if (next === 46) {
      // '.'
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }
    if (next === 69 || next === 101) {
      // 'eE'
      next = this.input.charCodeAt(++this.state.pos);
      if (next === 43 || next === 45) ++this.state.pos; // '+-'
      if (this.readInt(10) === null) this.raise(start, "Invalid number");
      isFloat = true;
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");

    var str = this.input.slice(start, this.state.pos);
    var val = void 0;
    if (isFloat) {
      val = parseFloat(str);
    } else if (!octal || str.length === 1) {
      val = parseInt(str, 10);
    } else if (/[89]/.test(str) || this.state.strict) {
      this.raise(start, "Invalid number");
    } else {
      val = parseInt(str, 8);
    }
    return this.finishToken(types.num, val);
  };

  // Read a string value, interpreting backslash-escapes.

  Tokenizer.prototype.readCodePoint = function readCodePoint() {
    var ch = this.input.charCodeAt(this.state.pos);
    var code = void 0;

    if (ch === 123) {
      var codePos = ++this.state.pos;
      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos);
      ++this.state.pos;
      if (code > 0x10FFFF) this.raise(codePos, "Code point out of bounds");
    } else {
      code = this.readHexChar(4);
    }
    return code;
  };

  Tokenizer.prototype.readString = function readString(quote) {
    var out = "",
        chunkStart = ++this.state.pos;
    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated string constant");
      var ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;
      if (ch === 92) {
        // '\'
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.state.pos;
      } else {
        if (isNewLine(ch)) this.raise(this.state.start, "Unterminated string constant");
        ++this.state.pos;
      }
    }
    out += this.input.slice(chunkStart, this.state.pos++);
    return this.finishToken(types.string, out);
  };

  // Reads template string tokens.

  Tokenizer.prototype.readTmplToken = function readTmplToken() {
    var out = "",
        chunkStart = this.state.pos;
    for (;;) {
      if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated template");
      var ch = this.input.charCodeAt(this.state.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        // '`', '${'
        if (this.state.pos === this.state.start && this.match(types.template)) {
          if (ch === 36) {
            this.state.pos += 2;
            return this.finishToken(types.dollarBraceL);
          } else {
            ++this.state.pos;
            return this.finishToken(types.backQuote);
          }
        }
        out += this.input.slice(chunkStart, this.state.pos);
        return this.finishToken(types.template, out);
      }
      if (ch === 92) {
        // '\'
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        ++this.state.pos;
        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos;
          case 10:
            out += "\n";
            break;
          default:
            out += String.fromCharCode(ch);
            break;
        }
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
  };

  // Used to read escaped characters

  Tokenizer.prototype.readEscapedChar = function readEscapedChar(inTemplate) {
    var ch = this.input.charCodeAt(++this.state.pos);
    ++this.state.pos;
    switch (ch) {
      case 110:
        return "\n"; // 'n' -> '\n'
      case 114:
        return "\r"; // 'r' -> '\r'
      case 120:
        return String.fromCharCode(this.readHexChar(2)); // 'x'
      case 117:
        return codePointToString(this.readCodePoint()); // 'u'
      case 116:
        return "\t"; // 't' -> '\t'
      case 98:
        return "\b"; // 'b' -> '\b'
      case 118:
        return "\x0B"; // 'v' -> '\u000b'
      case 102:
        return "\f"; // 'f' -> '\f'
      case 13:
        if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos; // '\r\n'
      case 10:
        // ' \n'
        this.state.lineStart = this.state.pos;
        ++this.state.curLine;
        return "";
      default:
        if (ch >= 48 && ch <= 55) {
          var octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
          var octal = parseInt(octalStr, 8);
          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }
          if (octal > 0) {
            if (!this.state.containsOctal) {
              this.state.containsOctal = true;
              this.state.octalPosition = this.state.pos - 2;
            }
            if (this.state.strict || inTemplate) {
              this.raise(this.state.pos - 2, "Octal literal in strict mode");
            }
          }
          this.state.pos += octalStr.length - 1;
          return String.fromCharCode(octal);
        }
        return String.fromCharCode(ch);
    }
  };

  // Used to read character escape sequences ('\x', '\u', '\U').

  Tokenizer.prototype.readHexChar = function readHexChar(len) {
    var codePos = this.state.pos;
    var n = this.readInt(16, len);
    if (n === null) this.raise(codePos, "Bad character escape sequence");
    return n;
  };

  // Read an identifier, and return it as a string. Sets `this.state.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.

  Tokenizer.prototype.readWord1 = function readWord1() {
    this.state.containsEsc = false;
    var word = "",
        first = true,
        chunkStart = this.state.pos;
    while (this.state.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) {
        // "\"
        this.state.containsEsc = true;

        word += this.input.slice(chunkStart, this.state.pos);
        var escStart = this.state.pos;

        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          // "u"
          this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
        }

        ++this.state.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, true)) {
          this.raise(escStart, "Invalid Unicode escape");
        }

        word += codePointToString(esc);
        chunkStart = this.state.pos;
      } else {
        break;
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.state.pos);
  };

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  Tokenizer.prototype.readWord = function readWord() {
    var word = this.readWord1();
    var type = types.name;
    if (!this.state.containsEsc && this.isKeyword(word)) {
      type = keywords[word];
    }
    return this.finishToken(type, word);
  };

  Tokenizer.prototype.braceIsBlock = function braceIsBlock(prevType) {
    if (prevType === types.colon) {
      var parent = this.curContext();
      if (parent === types$1.braceStatement || parent === types$1.braceExpression) {
        return !parent.isExpr;
      }
    }

    if (prevType === types._return) {
      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }

    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR) {
      return true;
    }

    if (prevType === types.braceL) {
      return this.curContext() === types$1.braceStatement;
    }

    return !this.state.exprAllowed;
  };

  Tokenizer.prototype.updateContext = function updateContext(prevType) {
    var type = this.state.type;
    var update = void 0;

    if (type.keyword && prevType === types.dot) {
      this.state.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.state.exprAllowed = type.beforeExpr;
    }
  };

  return Tokenizer;
}();

var plugins = {};
var frozenDeprecatedWildcardPluginList = ["jsx", "doExpressions", "objectRestSpread", "decorators", "classProperties", "exportExtensions", "asyncGenerators", "functionBind", "functionSent", "dynamicImport", "flow"];

var Parser = function (_Tokenizer) {
  inherits(Parser, _Tokenizer);

  function Parser(options, input) {
    classCallCheck(this, Parser);

    options = getOptions(options);

    var _this = possibleConstructorReturn(this, _Tokenizer.call(this, options, input));

    _this.options = options;
    _this.inModule = _this.options.sourceType === "module";
    _this.input = input;
    _this.plugins = _this.loadPlugins(_this.options.plugins);
    _this.filename = options.sourceFilename;

    // If enabled, skip leading hashbang line.
    if (_this.state.pos === 0 && _this.input[0] === "#" && _this.input[1] === "!") {
      _this.skipLineComment(2);
    }
    return _this;
  }

  Parser.prototype.isReservedWord = function isReservedWord(word) {
    if (word === "await") {
      return this.inModule;
    } else {
      return reservedWords[6](word);
    }
  };

  Parser.prototype.hasPlugin = function hasPlugin(name) {
    if (this.plugins["*"] && frozenDeprecatedWildcardPluginList.indexOf(name) > -1) {
      return true;
    }

    return !!this.plugins[name];
  };

  Parser.prototype.extend = function extend(name, f) {
    this[name] = f(this[name]);
  };

  Parser.prototype.loadAllPlugins = function loadAllPlugins() {
    var _this2 = this;

    // ensure flow plugin loads last, also ensure estree is not loaded with *
    var pluginNames = Object.keys(plugins).filter(function (name) {
      return name !== "flow" && name !== "estree";
    });
    pluginNames.push("flow");

    pluginNames.forEach(function (name) {
      var plugin = plugins[name];
      if (plugin) plugin(_this2);
    });
  };

  Parser.prototype.loadPlugins = function loadPlugins(pluginList) {
    // TODO: Deprecate "*" option in next major version of Babylon
    if (pluginList.indexOf("*") >= 0) {
      this.loadAllPlugins();

      return { "*": true };
    }

    var pluginMap = {};

    if (pluginList.indexOf("flow") >= 0) {
      // ensure flow plugin loads last
      pluginList = pluginList.filter(function (plugin) {
        return plugin !== "flow";
      });
      pluginList.push("flow");
    }

    if (pluginList.indexOf("estree") >= 0) {
      // ensure estree plugin loads first
      pluginList = pluginList.filter(function (plugin) {
        return plugin !== "estree";
      });
      pluginList.unshift("estree");
    }

    for (var _iterator = pluginList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var name = _ref;

      if (!pluginMap[name]) {
        pluginMap[name] = true;

        var plugin = plugins[name];
        if (plugin) plugin(this);
      }
    }

    return pluginMap;
  };

  Parser.prototype.parse = function parse() {
    var file = this.startNode();
    var program = this.startNode();
    this.nextToken();
    return this.parseTopLevel(file, program);
  };

  return Parser;
}(Tokenizer);

var pp = Parser.prototype;

// ## Parser utilities

// TODO

pp.addExtra = function (node, key, val) {
  if (!node) return;

  var extra = node.extra = node.extra || {};
  extra[key] = val;
};

// TODO

pp.isRelational = function (op) {
  return this.match(types.relational) && this.state.value === op;
};

// TODO

pp.expectRelational = function (op) {
  if (this.isRelational(op)) {
    this.next();
  } else {
    this.unexpected(null, types.relational);
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function (name) {
  return this.match(types.name) && this.state.value === name;
};

// Consumes contextual keyword if possible.

pp.eatContextual = function (name) {
  return this.state.value === name && this.eat(types.name);
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function (name, message) {
  if (!this.eatContextual(name)) this.unexpected(null, message);
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function () {
  return this.match(types.eof) || this.match(types.braceR) || lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
};

// TODO

pp.isLineTerminator = function () {
  return this.eat(types.semi) || this.canInsertSemicolon();
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function () {
  if (!this.isLineTerminator()) this.unexpected(null, types.semi);
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error at given pos.

pp.expect = function (type, pos) {
  return this.eat(type) || this.unexpected(pos, type);
};

// Raise an unexpected token error. Can take the expected token type
// instead of a message string.

pp.unexpected = function (pos) {
  var messageOrType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unexpected token";

  if (messageOrType && (typeof messageOrType === "undefined" ? "undefined" : _typeof(messageOrType)) === "object" && messageOrType.label) {
    messageOrType = "Unexpected token, expected " + messageOrType.label;
  }
  this.raise(pos != null ? pos : this.state.start, messageOrType);
};

/* eslint max-len: 0 */

var pp$1 = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function (file, program) {
  program.sourceType = this.options.sourceType;

  this.parseBlockBody(program, true, true, types.eof);

  file.program = this.finishNode(program, "Program");
  file.comments = this.state.comments;
  file.tokens = this.state.tokens;

  return this.finishNode(file, "File");
};

var loopLabel = { kind: "loop" };
var switchLabel = { kind: "switch" };

// TODO

pp$1.stmtToDirective = function (stmt) {
  var expr = stmt.expression;

  var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
  var directive = this.startNodeAt(stmt.start, stmt.loc.start);

  var raw = this.input.slice(expr.start, expr.end);
  var val = directiveLiteral.value = raw.slice(1, -1); // remove quotes

  this.addExtra(directiveLiteral, "raw", raw);
  this.addExtra(directiveLiteral, "rawValue", val);

  directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);

  return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function (declaration, topLevel) {
  if (this.match(types.at)) {
    this.parseDecorators(true);
  }

  var starttype = this.state.type;
  var node = this.startNode();

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
    case types._break:case types._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types._debugger:
      return this.parseDebuggerStatement(node);
    case types._do:
      return this.parseDoStatement(node);
    case types._for:
      return this.parseForStatement(node);
    case types._function:
      if (!declaration) this.unexpected();
      return this.parseFunctionStatement(node);

    case types._class:
      if (!declaration) this.unexpected();
      return this.parseClass(node, true);

    case types._if:
      return this.parseIfStatement(node);
    case types._return:
      return this.parseReturnStatement(node);
    case types._switch:
      return this.parseSwitchStatement(node);
    case types._throw:
      return this.parseThrowStatement(node);
    case types._try:
      return this.parseTryStatement(node);

    case types._let:
    case types._const:
      if (!declaration) this.unexpected(); // NOTE: falls through to _var

    case types._var:
      return this.parseVarStatement(node, starttype);

    case types._while:
      return this.parseWhileStatement(node);
    case types._with:
      return this.parseWithStatement(node);
    case types.braceL:
      return this.parseBlock();
    case types.semi:
      return this.parseEmptyStatement(node);
    case types._export:
    case types._import:
      if (this.hasPlugin("dynamicImport") && this.lookahead().type === types.parenL) break;

      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
        }

        if (!this.inModule) {
          this.raise(this.state.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types._import ? this.parseImport(node) : this.parseExport(node);

    case types.name:
      if (this.state.value === "async") {
        // peek ahead and see if next token is a function
        var state = this.state.clone();
        this.next();
        if (this.match(types._function) && !this.canInsertSemicolon()) {
          this.expect(types._function);
          return this.parseFunction(node, true, false, true);
        } else {
          this.state = state;
        }
      }
  }

  // If the statement does not start with a statement keyword or a
  // brace, it's an ExpressionStatement or LabeledStatement. We
  // simply start parsing an expression, and afterwards, if the
  // next token is a colon and the expression was a simple
  // Identifier node, we switch to interpreting it as a label.
  var maybeName = this.state.value;
  var expr = this.parseExpression();

  if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
    return this.parseLabeledStatement(node, maybeName, expr);
  } else {
    return this.parseExpressionStatement(node, expr);
  }
};

pp$1.takeDecorators = function (node) {
  if (this.state.decorators.length) {
    node.decorators = this.state.decorators;
    this.state.decorators = [];
  }
};

pp$1.parseDecorators = function (allowExport) {
  while (this.match(types.at)) {
    var decorator = this.parseDecorator();
    this.state.decorators.push(decorator);
  }

  if (allowExport && this.match(types._export)) {
    return;
  }

  if (!this.match(types._class)) {
    this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
  }
};

pp$1.parseDecorator = function () {
  if (!this.hasPlugin("decorators")) {
    this.unexpected();
  }
  var node = this.startNode();
  this.next();
  node.expression = this.parseMaybeAssign();
  return this.finishNode(node, "Decorator");
};

pp$1.parseBreakContinueStatement = function (node, keyword) {
  var isBreak = keyword === "break";
  this.next();

  if (this.isLineTerminator()) {
    node.label = null;
  } else if (!this.match(types.name)) {
    this.unexpected();
  } else {
    node.label = this.parseIdentifier();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = void 0;
  for (i = 0; i < this.state.labels.length; ++i) {
    var lab = this.state.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
      if (node.label && isBreak) break;
    }
  }
  if (i === this.state.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};

pp$1.parseDebuggerStatement = function (node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};

pp$1.parseDoStatement = function (node) {
  this.next();
  this.state.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.state.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  this.eat(types.semi);
  return this.finishNode(node, "DoWhileStatement");
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function (node) {
  this.next();
  this.state.labels.push(loopLabel);

  var forAwait = false;
  if (this.hasPlugin("asyncGenerators") && this.state.inAsync && this.isContextual("await")) {
    forAwait = true;
    this.next();
  }
  this.expect(types.parenL);

  if (this.match(types.semi)) {
    if (forAwait) {
      this.unexpected();
    }
    return this.parseFor(node, null);
  }

  if (this.match(types._var) || this.match(types._let) || this.match(types._const)) {
    var _init = this.startNode();
    var varKind = this.state.type;
    this.next();
    this.parseVar(_init, true, varKind);
    this.finishNode(_init, "VariableDeclaration");

    if (this.match(types._in) || this.isContextual("of")) {
      if (_init.declarations.length === 1 && !_init.declarations[0].init) {
        return this.parseForIn(node, _init, forAwait);
      }
    }
    if (forAwait) {
      this.unexpected();
    }
    return this.parseFor(node, _init);
  }

  var refShorthandDefaultPos = { start: 0 };
  var init = this.parseExpression(true, refShorthandDefaultPos);
  if (this.match(types._in) || this.isContextual("of")) {
    var description = this.isContextual("of") ? "for-of statement" : "for-in statement";
    this.toAssignable(init, undefined, description);
    this.checkLVal(init, undefined, undefined, description);
    return this.parseForIn(node, init, forAwait);
  } else if (refShorthandDefaultPos.start) {
    this.unexpected(refShorthandDefaultPos.start);
  }
  if (forAwait) {
    this.unexpected();
  }
  return this.parseFor(node, init);
};

pp$1.parseFunctionStatement = function (node) {
  this.next();
  return this.parseFunction(node, true);
};

pp$1.parseIfStatement = function (node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement(false);
  node.alternate = this.eat(types._else) ? this.parseStatement(false) : null;
  return this.finishNode(node, "IfStatement");
};

pp$1.parseReturnStatement = function (node) {
  if (!this.state.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.state.start, "'return' outside of function");
  }

  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.isLineTerminator()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }

  return this.finishNode(node, "ReturnStatement");
};

pp$1.parseSwitchStatement = function (node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.state.labels.push(switchLabel);

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur = void 0;
  for (var sawDefault; !this.match(types.braceR);) {
    if (this.match(types._case) || this.match(types._default)) {
      var isCase = this.match(types._case);
      if (cur) this.finishNode(cur, "SwitchCase");
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) this.raise(this.state.lastTokStart, "Multiple default clauses");
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (cur) {
        cur.consequent.push(this.parseStatement(true));
      } else {
        this.unexpected();
      }
    }
  }
  if (cur) this.finishNode(cur, "SwitchCase");
  this.next(); // Closing brace
  this.state.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};

pp$1.parseThrowStatement = function (node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) this.raise(this.state.lastTokEnd, "Illegal newline after throw");
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function (node) {
  this.next();

  node.block = this.parseBlock();
  node.handler = null;

  if (this.match(types._catch)) {
    var clause = this.startNode();
    this.next();

    this.expect(types.parenL);
    clause.param = this.parseBindingAtom();
    this.checkLVal(clause.param, true, Object.create(null), "catch clause");
    this.expect(types.parenR);

    clause.body = this.parseBlock();
    node.handler = this.finishNode(clause, "CatchClause");
  }

  node.guardedHandlers = empty;
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }

  return this.finishNode(node, "TryStatement");
};

pp$1.parseVarStatement = function (node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};

pp$1.parseWhileStatement = function (node) {
  this.next();
  node.test = this.parseParenExpression();
  this.state.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.state.labels.pop();
  return this.finishNode(node, "WhileStatement");
};

pp$1.parseWithStatement = function (node) {
  if (this.state.strict) this.raise(this.state.start, "'with' in strict mode");
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement(false);
  return this.finishNode(node, "WithStatement");
};

pp$1.parseEmptyStatement = function (node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};

pp$1.parseLabeledStatement = function (node, maybeName, expr) {
  for (var _iterator = this.state.labels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _label = _ref;

    if (_label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }

  var kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;
  for (var i = this.state.labels.length - 1; i >= 0; i--) {
    var label = this.state.labels[i];
    if (label.statementStart === node.start) {
      label.statementStart = this.state.start;
      label.kind = kind;
    } else {
      break;
    }
  }

  this.state.labels.push({ name: maybeName, kind: kind, statementStart: this.state.start });
  node.body = this.parseStatement(true);
  this.state.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};

pp$1.parseExpressionStatement = function (node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function (allowDirectives) {
  var node = this.startNode();
  this.expect(types.braceL);
  this.parseBlockBody(node, allowDirectives, false, types.braceR);
  return this.finishNode(node, "BlockStatement");
};

pp$1.isValidDirective = function (stmt) {
  return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
};

pp$1.parseBlockBody = function (node, allowDirectives, topLevel, end) {
  node.body = [];
  node.directives = [];

  var parsedNonDirective = false;
  var oldStrict = void 0;
  var octalPosition = void 0;

  while (!this.eat(end)) {
    if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
      octalPosition = this.state.octalPosition;
    }

    var stmt = this.parseStatement(true, topLevel);

    if (allowDirectives && !parsedNonDirective && this.isValidDirective(stmt)) {
      var directive = this.stmtToDirective(stmt);
      node.directives.push(directive);

      if (oldStrict === undefined && directive.value.value === "use strict") {
        oldStrict = this.state.strict;
        this.setStrict(true);

        if (octalPosition) {
          this.raise(octalPosition, "Octal literal in strict mode");
        }
      }

      continue;
    }

    parsedNonDirective = true;
    node.body.push(stmt);
  }

  if (oldStrict === false) {
    this.setStrict(false);
  }
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function (node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.match(types.semi) ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.match(types.parenR) ? null : this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement(false);
  this.state.labels.pop();
  return this.finishNode(node, "ForStatement");
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function (node, init, forAwait) {
  var type = void 0;
  if (forAwait) {
    this.eatContextual("of");
    type = "ForAwaitStatement";
  } else {
    type = this.match(types._in) ? "ForInStatement" : "ForOfStatement";
    this.next();
  }
  node.left = init;
  node.right = this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement(false);
  this.state.labels.pop();
  return this.finishNode(node, type);
};

// Parse a list of variable declarations.

pp$1.parseVar = function (node, isFor, kind) {
  node.declarations = [];
  node.kind = kind.keyword;
  for (;;) {
    var decl = this.startNode();
    this.parseVarHead(decl);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === types._const && !(this.match(types._in) || this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
      this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) break;
  }
  return node;
};

pp$1.parseVarHead = function (decl) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, true, undefined, "variable declaration");
};

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseFunction = function (node, isStatement, allowExpressionBody, isAsync, optionalId) {
  var oldInMethod = this.state.inMethod;
  this.state.inMethod = false;

  this.initFunction(node, isAsync);

  if (this.match(types.star)) {
    if (node.async && !this.hasPlugin("asyncGenerators")) {
      this.unexpected();
    } else {
      node.generator = true;
      this.next();
    }
  }

  if (isStatement && !optionalId && !this.match(types.name) && !this.match(types._yield)) {
    this.unexpected();
  }

  if (this.match(types.name) || this.match(types._yield)) {
    node.id = this.parseBindingIdentifier();
  }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody);

  this.state.inMethod = oldInMethod;

  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
};

pp$1.parseFunctionParams = function (node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR);
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function (node, isStatement, optionalId) {
  this.next();
  this.takeDecorators(node);
  this.parseClassId(node, isStatement, optionalId);
  this.parseClassSuper(node);
  this.parseClassBody(node);
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};

pp$1.isClassProperty = function () {
  return this.match(types.eq) || this.isLineTerminator();
};

pp$1.isClassMutatorStarter = function () {
  return false;
};

pp$1.parseClassBody = function (node) {
  // class bodies are implicitly strict
  var oldStrict = this.state.strict;
  this.state.strict = true;

  var hadConstructorCall = false;
  var hadConstructor = false;
  var decorators = [];
  var classBody = this.startNode();

  classBody.body = [];

  this.expect(types.braceL);

  while (!this.eat(types.braceR)) {
    if (this.eat(types.semi)) {
      if (decorators.length > 0) {
        this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
      }
      continue;
    }

    if (this.match(types.at)) {
      decorators.push(this.parseDecorator());
      continue;
    }

    var method = this.startNode();

    // steal the decorators if there are any
    if (decorators.length) {
      method.decorators = decorators;
      decorators = [];
    }

    var isConstructorCall = false;
    var isMaybeStatic = this.match(types.name) && this.state.value === "static";
    var isGenerator = this.eat(types.star);
    var isGetSet = false;
    var isAsync = false;

    this.parsePropertyName(method);

    method.static = isMaybeStatic && !this.match(types.parenL);
    if (method.static) {
      isGenerator = this.eat(types.star);
      this.parsePropertyName(method);
    }

    if (!isGenerator) {
      if (this.isClassProperty()) {
        classBody.body.push(this.parseClassProperty(method));
        continue;
      }

      if (method.key.type === "Identifier" && !method.computed && this.hasPlugin("classConstructorCall") && method.key.name === "call" && this.match(types.name) && this.state.value === "constructor") {
        isConstructorCall = true;
        this.parsePropertyName(method);
      }
    }

    var isAsyncMethod = !this.match(types.parenL) && !method.computed && method.key.type === "Identifier" && method.key.name === "async";
    if (isAsyncMethod) {
      if (this.hasPlugin("asyncGenerators") && this.eat(types.star)) isGenerator = true;
      isAsync = true;
      this.parsePropertyName(method);
    }

    method.kind = "method";

    if (!method.computed) {
      var key = method.key;

      // handle get/set methods
      // eg. class Foo { get bar() {} set bar() {} }

      if (!isAsync && !isGenerator && !this.isClassMutatorStarter() && key.type === "Identifier" && !this.match(types.parenL) && (key.name === "get" || key.name === "set")) {
        isGetSet = true;
        method.kind = key.name;
        key = this.parsePropertyName(method);
      }

      // disallow invalid constructors
      var isConstructor = !isConstructorCall && !method.static && (key.name === "constructor" || // Identifier
      key.value === "constructor" // Literal
      );
      if (isConstructor) {
        if (hadConstructor) this.raise(key.start, "Duplicate constructor in the same class");
        if (isGetSet) this.raise(key.start, "Constructor can't have get/set modifier");
        if (isGenerator) this.raise(key.start, "Constructor can't be a generator");
        if (isAsync) this.raise(key.start, "Constructor can't be an async function");
        method.kind = "constructor";
        hadConstructor = true;
      }

      // disallow static prototype method
      var isStaticPrototype = method.static && (key.name === "prototype" || // Identifier
      key.value === "prototype" // Literal
      );
      if (isStaticPrototype) {
        this.raise(key.start, "Classes may not have static property named prototype");
      }
    }

    // convert constructor to a constructor call
    if (isConstructorCall) {
      if (hadConstructorCall) this.raise(method.start, "Duplicate constructor call in the same class");
      method.kind = "constructorCall";
      hadConstructorCall = true;
    }

    // disallow decorators on class constructors
    if ((method.kind === "constructor" || method.kind === "constructorCall") && method.decorators) {
      this.raise(method.start, "You can't attach decorators to a class constructor");
    }

    this.parseClassMethod(classBody, method, isGenerator, isAsync);

    if (isGetSet) {
      this.checkGetterSetterParamCount(method);
    }
  }

  if (decorators.length) {
    this.raise(this.state.start, "You have trailing decorators with no method");
  }

  node.body = this.finishNode(classBody, "ClassBody");

  this.state.strict = oldStrict;
};

pp$1.parseClassProperty = function (node) {
  if (this.match(types.eq)) {
    if (!this.hasPlugin("classProperties")) this.unexpected();
    this.next();
    node.value = this.parseMaybeAssign();
  } else {
    node.value = null;
  }
  this.semicolon();
  return this.finishNode(node, "ClassProperty");
};

pp$1.parseClassMethod = function (classBody, method, isGenerator, isAsync) {
  this.parseMethod(method, isGenerator, isAsync);
  classBody.body.push(this.finishNode(method, "ClassMethod"));
};

pp$1.parseClassId = function (node, isStatement, optionalId) {
  if (this.match(types.name)) {
    node.id = this.parseIdentifier();
  } else {
    if (optionalId || !isStatement) {
      node.id = null;
    } else {
      this.unexpected();
    }
  }
};

pp$1.parseClassSuper = function (node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function (node) {
  this.next();
  // export * from '...'
  if (this.match(types.star)) {
    var specifier = this.startNode();
    this.next();
    if (this.hasPlugin("exportExtensions") && this.eatContextual("as")) {
      specifier.exported = this.parseIdentifier();
      node.specifiers = [this.finishNode(specifier, "ExportNamespaceSpecifier")];
      this.parseExportSpecifiersMaybe(node);
      this.parseExportFrom(node, true);
    } else {
      this.parseExportFrom(node, true);
      return this.finishNode(node, "ExportAllDeclaration");
    }
  } else if (this.hasPlugin("exportExtensions") && this.isExportDefaultSpecifier()) {
    var _specifier = this.startNode();
    _specifier.exported = this.parseIdentifier(true);
    node.specifiers = [this.finishNode(_specifier, "ExportDefaultSpecifier")];
    if (this.match(types.comma) && this.lookahead().type === types.star) {
      this.expect(types.comma);
      var _specifier2 = this.startNode();
      this.expect(types.star);
      this.expectContextual("as");
      _specifier2.exported = this.parseIdentifier();
      node.specifiers.push(this.finishNode(_specifier2, "ExportNamespaceSpecifier"));
    } else {
      this.parseExportSpecifiersMaybe(node);
    }
    this.parseExportFrom(node, true);
  } else if (this.eat(types._default)) {
    // export default ...
    var expr = this.startNode();
    var needsSemi = false;
    if (this.eat(types._function)) {
      expr = this.parseFunction(expr, true, false, false, true);
    } else if (this.match(types._class)) {
      expr = this.parseClass(expr, true, true);
    } else {
      needsSemi = true;
      expr = this.parseMaybeAssign();
    }
    node.declaration = expr;
    if (needsSemi) this.semicolon();
    this.checkExport(node, true, true);
    return this.finishNode(node, "ExportDefaultDeclaration");
  } else if (this.shouldParseExportDeclaration()) {
    node.specifiers = [];
    node.source = null;
    node.declaration = this.parseExportDeclaration(node);
  } else {
    // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers();
    this.parseExportFrom(node);
  }
  this.checkExport(node, true);
  return this.finishNode(node, "ExportNamedDeclaration");
};

pp$1.parseExportDeclaration = function () {
  return this.parseStatement(true);
};

pp$1.isExportDefaultSpecifier = function () {
  if (this.match(types.name)) {
    return this.state.value !== "type" && this.state.value !== "async" && this.state.value !== "interface";
  }

  if (!this.match(types._default)) {
    return false;
  }

  var lookahead = this.lookahead();
  return lookahead.type === types.comma || lookahead.type === types.name && lookahead.value === "from";
};

pp$1.parseExportSpecifiersMaybe = function (node) {
  if (this.eat(types.comma)) {
    node.specifiers = node.specifiers.concat(this.parseExportSpecifiers());
  }
};

pp$1.parseExportFrom = function (node, expect) {
  if (this.eatContextual("from")) {
    node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
    this.checkExport(node);
  } else {
    if (expect) {
      this.unexpected();
    } else {
      node.source = null;
    }
  }

  this.semicolon();
};

pp$1.shouldParseExportDeclaration = function () {
  return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "let" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isContextual("async");
};

pp$1.checkExport = function (node, checkNames, isDefault) {
  if (checkNames) {
    // Check for duplicate exports
    if (isDefault) {
      // Default exports
      this.checkDuplicateExports(node, "default");
    } else if (node.specifiers && node.specifiers.length) {
      // Named exports
      for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var specifier = _ref2;

        this.checkDuplicateExports(specifier, specifier.exported.name);
      }
    } else if (node.declaration) {
      // Exported declarations
      if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
        this.checkDuplicateExports(node, node.declaration.id.name);
      } else if (node.declaration.type === "VariableDeclaration") {
        for (var _iterator3 = node.declaration.declarations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var declaration = _ref3;

          this.checkDeclaration(declaration.id);
        }
      }
    }
  }

  if (this.state.decorators.length) {
    var isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");
    if (!node.declaration || !isClass) {
      this.raise(node.start, "You can only use decorators on an export when exporting a class");
    }
    this.takeDecorators(node.declaration);
  }
};

pp$1.checkDeclaration = function (node) {
  if (node.type === "ObjectPattern") {
    for (var _iterator4 = node.properties, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var prop = _ref4;

      this.checkDeclaration(prop);
    }
  } else if (node.type === "ArrayPattern") {
    for (var _iterator5 = node.elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref5 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref5 = _i5.value;
      }

      var elem = _ref5;

      if (elem) {
        this.checkDeclaration(elem);
      }
    }
  } else if (node.type === "ObjectProperty") {
    this.checkDeclaration(node.value);
  } else if (node.type === "RestElement" || node.type === "RestProperty") {
    this.checkDeclaration(node.argument);
  } else if (node.type === "Identifier") {
    this.checkDuplicateExports(node, node.name);
  }
};

pp$1.checkDuplicateExports = function (node, name) {
  if (this.state.exportedIdentifiers.indexOf(name) > -1) {
    this.raiseDuplicateExportError(node, name);
  }
  this.state.exportedIdentifiers.push(name);
};

pp$1.raiseDuplicateExportError = function (node, name) {
  this.raise(node.start, name === "default" ? "Only one default export allowed per module." : "`" + name + "` has already been exported. Exported identifiers must be unique.");
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function () {
  var nodes = [];
  var first = true;
  var needsFrom = void 0;

  // export { x, y as z } [from '...']
  this.expect(types.braceL);

  while (!this.eat(types.braceR)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
      if (this.eat(types.braceR)) break;
    }

    var isDefault = this.match(types._default);
    if (isDefault && !needsFrom) needsFrom = true;

    var node = this.startNode();
    node.local = this.parseIdentifier(isDefault);
    node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }

  // https://github.com/ember-cli/ember-cli/pull/3739
  if (needsFrom && !this.isContextual("from")) {
    this.unexpected();
  }

  return nodes;
};

// Parses import declaration.

pp$1.parseImport = function (node) {
  this.eat(types._import);

  // import '...'
  if (this.match(types.string)) {
    node.specifiers = [];
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = [];
    this.parseImportSpecifiers(node);
    this.expectContextual("from");
    node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function (node) {
  var first = true;
  if (this.match(types.name)) {
    // import defaultObj, { x, y as z } from '...'
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    node.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(), startPos, startLoc));
    if (!this.eat(types.comma)) return;
  }

  if (this.match(types.star)) {
    var specifier = this.startNode();
    this.next();
    this.expectContextual("as");
    specifier.local = this.parseIdentifier();
    this.checkLVal(specifier.local, true, undefined, "import namespace specifier");
    node.specifiers.push(this.finishNode(specifier, "ImportNamespaceSpecifier"));
    return;
  }

  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (first) {
      first = false;
    } else {
      // Detect an attempt to deep destructure
      if (this.eat(types.colon)) {
        this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
      }

      this.expect(types.comma);
      if (this.eat(types.braceR)) break;
    }

    this.parseImportSpecifier(node);
  }
};

pp$1.parseImportSpecifier = function (node) {
  var specifier = this.startNode();
  specifier.imported = this.parseIdentifier(true);
  if (this.eatContextual("as")) {
    specifier.local = this.parseIdentifier();
  } else {
    this.checkReservedWord(specifier.imported.name, specifier.start, true, true);
    specifier.local = specifier.imported.__clone();
  }
  this.checkLVal(specifier.local, true, undefined, "import specifier");
  node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
};

pp$1.parseImportSpecifierDefault = function (id, startPos, startLoc) {
  var node = this.startNodeAt(startPos, startLoc);
  node.local = id;
  this.checkLVal(node.local, true, undefined, "default import specifier");
  return this.finishNode(node, "ImportDefaultSpecifier");
};

var pp$2 = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function (node, isBinding, contextDescription) {
  if (node) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
        break;

      case "ObjectExpression":
        node.type = "ObjectPattern";
        for (var _iterator = node.properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var prop = _ref;

          if (prop.type === "ObjectMethod") {
            if (prop.kind === "get" || prop.kind === "set") {
              this.raise(prop.key.start, "Object pattern can't contain getter or setter");
            } else {
              this.raise(prop.key.start, "Object pattern can't contain methods");
            }
          } else {
            this.toAssignable(prop, isBinding, "object destructuring pattern");
          }
        }
        break;

      case "ObjectProperty":
        this.toAssignable(node.value, isBinding, contextDescription);
        break;

      case "SpreadProperty":
        node.type = "RestProperty";
        break;

      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, isBinding, contextDescription);
        break;

      case "AssignmentExpression":
        if (node.operator === "=") {
          node.type = "AssignmentPattern";
          delete node.operator;
        } else {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        break;

      case "MemberExpression":
        if (!isBinding) break;

      default:
        {
          var message = "Invalid left-hand side" + (contextDescription ? " in " + contextDescription : /* istanbul ignore next */"expression");
          this.raise(node.start, message);
        }
    }
  }
  return node;
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function (exprList, isBinding, contextDescription) {
  var end = exprList.length;
  if (end) {
    var last = exprList[end - 1];
    if (last && last.type === "RestElement") {
      --end;
    } else if (last && last.type === "SpreadElement") {
      last.type = "RestElement";
      var arg = last.argument;
      this.toAssignable(arg, isBinding, contextDescription);
      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") {
        this.unexpected(arg.start);
      }
      --end;
    }
  }
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) this.toAssignable(elt, isBinding, contextDescription);
  }
  return exprList;
};

// Convert list of expression atoms to a list of

pp$2.toReferencedList = function (exprList) {
  return exprList;
};

// Parses spread element.

pp$2.parseSpread = function (refShorthandDefaultPos) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refShorthandDefaultPos);
  return this.finishNode(node, "SpreadElement");
};

pp$2.parseRest = function () {
  var node = this.startNode();
  this.next();
  node.argument = this.parseBindingIdentifier();
  return this.finishNode(node, "RestElement");
};

pp$2.shouldAllowYieldIdentifier = function () {
  return this.match(types._yield) && !this.state.strict && !this.state.inGenerator;
};

pp$2.parseBindingIdentifier = function () {
  return this.parseIdentifier(this.shouldAllowYieldIdentifier());
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function () {
  switch (this.state.type) {
    case types._yield:
      if (this.state.strict || this.state.inGenerator) this.unexpected();
    // fall-through
    case types.name:
      return this.parseIdentifier(true);

    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true);
      return this.finishNode(node, "ArrayPattern");

    case types.braceL:
      return this.parseObj(true);

    default:
      this.unexpected();
  }
};

pp$2.parseBindingList = function (close, allowEmpty) {
  var elts = [];
  var first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
    }
    if (allowEmpty && this.match(types.comma)) {
      elts.push(null);
    } else if (this.eat(close)) {
      break;
    } else if (this.match(types.ellipsis)) {
      elts.push(this.parseAssignableListItemTypes(this.parseRest()));
      this.expect(close);
      break;
    } else {
      var decorators = [];
      while (this.match(types.at)) {
        decorators.push(this.parseDecorator());
      }
      var left = this.parseMaybeDefault();
      if (decorators.length) {
        left.decorators = decorators;
      }
      this.parseAssignableListItemTypes(left);
      elts.push(this.parseMaybeDefault(left.start, left.loc.start, left));
    }
  }
  return elts;
};

pp$2.parseAssignableListItemTypes = function (param) {
  return param;
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function (startPos, startLoc, left) {
  startLoc = startLoc || this.state.startLoc;
  startPos = startPos || this.state.start;
  left = left || this.parseBindingAtom();
  if (!this.eat(types.eq)) return left;

  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};

// Verify that a node is an lval — something that can be assigned
// to.

pp$2.checkLVal = function (expr, isBinding, checkClashes, contextDescription) {
  switch (expr.type) {
    case "Identifier":
      this.checkReservedWord(expr.name, expr.start, false, true);

      if (checkClashes) {
        // we need to prefix this with an underscore for the cases where we have a key of
        // `__proto__`. there's a bug in old V8 where the following wouldn't work:
        //
        //   > var obj = Object.create(null);
        //   undefined
        //   > obj.__proto__
        //   null
        //   > obj.__proto__ = true;
        //   true
        //   > obj.__proto__
        //   null
        var key = "_" + expr.name;

        if (checkClashes[key]) {
          this.raise(expr.start, "Argument name clash in strict mode");
        } else {
          checkClashes[key] = true;
        }
      }
      break;

    case "MemberExpression":
      if (isBinding) this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression");
      break;

    case "ObjectPattern":
      for (var _iterator2 = expr.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var prop = _ref2;

        if (prop.type === "ObjectProperty") prop = prop.value;
        this.checkLVal(prop, isBinding, checkClashes, "object destructuring pattern");
      }
      break;

    case "ArrayPattern":
      for (var _iterator3 = expr.elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var elem = _ref3;

        if (elem) this.checkLVal(elem, isBinding, checkClashes, "array destructuring pattern");
      }
      break;

    case "AssignmentPattern":
      this.checkLVal(expr.left, isBinding, checkClashes, "assignment pattern");
      break;

    case "RestProperty":
      this.checkLVal(expr.argument, isBinding, checkClashes, "rest property");
      break;

    case "RestElement":
      this.checkLVal(expr.argument, isBinding, checkClashes, "rest element");
      break;

    default:
      {
        var message = (isBinding ? /* istanbul ignore next */"Binding invalid" : "Invalid") + " left-hand side" + (contextDescription ? " in " + contextDescription : /* istanbul ignore next */"expression");
        this.raise(expr.start, message);
      }
  }
};

/* eslint max-len: 0 */

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

var pp$3 = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function (prop, propHash) {
  if (prop.computed || prop.kind) return;

  var key = prop.key;
  // It is either an Identifier or a String/NumericLiteral
  var name = key.type === "Identifier" ? key.name : String(key.value);

  if (name === "__proto__") {
    if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
    propHash.proto = true;
  }
};

// Convenience method to parse an Expression only
pp$3.getExpression = function () {
  this.nextToken();
  var expr = this.parseExpression();
  if (!this.match(types.eof)) {
    this.unexpected();
  }
  return expr;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function (s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function (noIn, refShorthandDefaultPos) {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);
  if (this.match(types.comma)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) {
      node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
    }
    this.toReferencedList(node.expressions);
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function (noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;

  if (this.match(types._yield) && this.state.inGenerator) {
    var _left = this.parseYield();
    if (afterLeftParse) _left = afterLeftParse.call(this, _left, startPos, startLoc);
    return _left;
  }

  var failOnShorthandAssign = void 0;
  if (refShorthandDefaultPos) {
    failOnShorthandAssign = false;
  } else {
    refShorthandDefaultPos = { start: 0 };
    failOnShorthandAssign = true;
  }

  if (this.match(types.parenL) || this.match(types.name)) {
    this.state.potentialArrowAt = this.state.start;
  }

  var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos);
  if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);
  if (this.state.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.state.value;
    node.left = this.match(types.eq) ? this.toAssignable(left, undefined, "assignment expression") : left;
    refShorthandDefaultPos.start = 0; // reset because shorthand default was used correctly

    this.checkLVal(left, undefined, undefined, "assignment expression");

    if (left.extra && left.extra.parenthesized) {
      var errorMsg = void 0;
      if (left.type === "ObjectPattern") {
        errorMsg = "`({a}) = 0` use `({a} = 0)`";
      } else if (left.type === "ArrayPattern") {
        errorMsg = "`([a]) = 0` use `([a] = 0)`";
      }
      if (errorMsg) {
        this.raise(left.start, "You're trying to assign to a parenthesized expression, eg. instead of " + errorMsg);
      }
    }

    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression");
  } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
    this.unexpected(refShorthandDefaultPos.start);
  }

  return left;
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function (noIn, refShorthandDefaultPos, refNeedsArrowPos) {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var expr = this.parseExprOps(noIn, refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;

  return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
};

pp$3.parseConditional = function (expr, noIn, startPos, startLoc) {
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};

// Start the precedence parser.

pp$3.parseExprOps = function (noIn, refShorthandDefaultPos) {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var expr = this.parseMaybeUnary(refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
    return expr;
  } else {
    return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
  }
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.state.type.binop;
  if (prec != null && (!noIn || !this.match(types._in))) {
    if (prec > minPrec) {
      var node = this.startNodeAt(leftStartPos, leftStartLoc);
      node.left = left;
      node.operator = this.state.value;

      if (node.operator === "**" && left.type === "UnaryExpression" && left.extra && !left.extra.parenthesizedArgument && !left.extra.parenthesized) {
        this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
      }

      var op = this.state.type;
      this.next();

      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      node.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);

      this.finishNode(node, op === types.logicalOR || op === types.logicalAND ? "LogicalExpression" : "BinaryExpression");
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
    }
  }
  return left;
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function (refShorthandDefaultPos) {
  if (this.state.type.prefix) {
    var node = this.startNode();
    var update = this.match(types.incDec);
    node.operator = this.state.value;
    node.prefix = true;
    this.next();

    var argType = this.state.type;
    node.argument = this.parseMaybeUnary();

    this.addExtra(node, "parenthesizedArgument", argType === types.parenL && (!node.argument.extra || !node.argument.extra.parenthesized));

    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
      this.unexpected(refShorthandDefaultPos.start);
    }

    if (update) {
      this.checkLVal(node.argument, undefined, undefined, "prefix operation");
    } else if (this.state.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raise(node.start, "Deleting local variable in strict mode");
    }

    return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  }

  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var expr = this.parseExprSubscripts(refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
  while (this.state.type.postfix && !this.canInsertSemicolon()) {
    var _node = this.startNodeAt(startPos, startLoc);
    _node.operator = this.state.value;
    _node.prefix = false;
    _node.argument = expr;
    this.checkLVal(expr, undefined, undefined, "postfix operation");
    this.next();
    expr = this.finishNode(_node, "UpdateExpression");
  }
  return expr;
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function (refShorthandDefaultPos) {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var potentialArrowAt = this.state.potentialArrowAt;
  var expr = this.parseExprAtom(refShorthandDefaultPos);

  if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
    return expr;
  }

  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
    return expr;
  }

  return this.parseSubscripts(expr, startPos, startLoc);
};

pp$3.parseSubscripts = function (base, startPos, startLoc, noCalls) {
  for (;;) {
    if (!noCalls && this.eat(types.doubleColon)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.callee = this.parseNoCallExpr();
      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
    } else if (this.eat(types.dot)) {
      var _node2 = this.startNodeAt(startPos, startLoc);
      _node2.object = base;
      _node2.property = this.parseIdentifier(true);
      _node2.computed = false;
      base = this.finishNode(_node2, "MemberExpression");
    } else if (this.eat(types.bracketL)) {
      var _node3 = this.startNodeAt(startPos, startLoc);
      _node3.object = base;
      _node3.property = this.parseExpression();
      _node3.computed = true;
      this.expect(types.bracketR);
      base = this.finishNode(_node3, "MemberExpression");
    } else if (!noCalls && this.match(types.parenL)) {
      var possibleAsync = this.state.potentialArrowAt === base.start && base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
      this.next();

      var _node4 = this.startNodeAt(startPos, startLoc);
      _node4.callee = base;
      _node4.arguments = this.parseCallExpressionArguments(types.parenR, possibleAsync);
      if (_node4.callee.type === "Import" && _node4.arguments.length !== 1) {
        this.raise(_node4.start, "import() requires exactly one argument");
      }
      base = this.finishNode(_node4, "CallExpression");

      if (possibleAsync && this.shouldParseAsyncArrow()) {
        return this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), _node4);
      } else {
        this.toReferencedList(_node4.arguments);
      }
    } else if (this.match(types.backQuote)) {
      var _node5 = this.startNodeAt(startPos, startLoc);
      _node5.tag = base;
      _node5.quasi = this.parseTemplate();
      base = this.finishNode(_node5, "TaggedTemplateExpression");
    } else {
      return base;
    }
  }
};

pp$3.parseCallExpressionArguments = function (close, possibleAsyncArrow) {
  var elts = [];
  var innerParenStart = void 0;
  var first = true;

  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
      if (this.eat(close)) break;
    }

    // we need to make sure that if this is an async arrow functions, that we don't allow inner parens inside the params
    if (this.match(types.parenL) && !innerParenStart) {
      innerParenStart = this.state.start;
    }

    elts.push(this.parseExprListItem(false, possibleAsyncArrow ? { start: 0 } : undefined, possibleAsyncArrow ? { start: 0 } : undefined));
  }

  // we found an async arrow function so let's not allow any inner parens
  if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
    this.unexpected();
  }

  return elts;
};

pp$3.shouldParseAsyncArrow = function () {
  return this.match(types.arrow);
};

pp$3.parseAsyncArrowFromCallExpression = function (node, call) {
  this.expect(types.arrow);
  return this.parseArrowExpression(node, call.arguments, true);
};

// Parse a no-call expression (like argument of `new` or `::` operators).

pp$3.parseNoCallExpr = function () {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function (refShorthandDefaultPos) {
  var canBeArrow = this.state.potentialArrowAt === this.state.start;
  var node = void 0;

  switch (this.state.type) {
    case types._super:
      if (!this.state.inMethod && !this.options.allowSuperOutsideMethod) {
        this.raise(this.state.start, "'super' outside of function or class");
      }

      node = this.startNode();
      this.next();
      if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
        this.unexpected();
      }
      if (this.match(types.parenL) && this.state.inMethod !== "constructor" && !this.options.allowSuperOutsideMethod) {
        this.raise(node.start, "super() outside of class constructor");
      }
      return this.finishNode(node, "Super");

    case types._import:
      if (!this.hasPlugin("dynamicImport")) this.unexpected();

      node = this.startNode();
      this.next();
      if (!this.match(types.parenL)) {
        this.unexpected(null, types.parenL);
      }
      return this.finishNode(node, "Import");

    case types._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");

    case types._yield:
      if (this.state.inGenerator) this.unexpected();

    case types.name:
      node = this.startNode();
      var allowAwait = this.state.value === "await" && this.state.inAsync;
      var allowYield = this.shouldAllowYieldIdentifier();
      var id = this.parseIdentifier(allowAwait || allowYield);

      if (id.name === "await") {
        if (this.state.inAsync || this.inModule) {
          return this.parseAwait(node);
        }
      } else if (id.name === "async" && this.match(types._function) && !this.canInsertSemicolon()) {
        this.next();
        return this.parseFunction(node, false, false, true);
      } else if (canBeArrow && id.name === "async" && this.match(types.name)) {
        var params = [this.parseIdentifier()];
        this.expect(types.arrow);
        // let foo = bar => {};
        return this.parseArrowExpression(node, params, true);
      }

      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        return this.parseArrowExpression(node, [id]);
      }

      return id;

    case types._do:
      if (this.hasPlugin("doExpressions")) {
        var _node6 = this.startNode();
        this.next();
        var oldInFunction = this.state.inFunction;
        var oldLabels = this.state.labels;
        this.state.labels = [];
        this.state.inFunction = false;
        _node6.body = this.parseBlock(false, true);
        this.state.inFunction = oldInFunction;
        this.state.labels = oldLabels;
        return this.finishNode(_node6, "DoExpression");
      }

    case types.regexp:
      var value = this.state.value;
      node = this.parseLiteral(value.value, "RegExpLiteral");
      node.pattern = value.pattern;
      node.flags = value.flags;
      return node;

    case types.num:
      return this.parseLiteral(this.state.value, "NumericLiteral");

    case types.string:
      return this.parseLiteral(this.state.value, "StringLiteral");

    case types._null:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "NullLiteral");

    case types._true:case types._false:
      node = this.startNode();
      node.value = this.match(types._true);
      this.next();
      return this.finishNode(node, "BooleanLiteral");

    case types.parenL:
      return this.parseParenAndDistinguishExpression(null, null, canBeArrow);

    case types.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types.bracketR, true, refShorthandDefaultPos);
      this.toReferencedList(node.elements);
      return this.finishNode(node, "ArrayExpression");

    case types.braceL:
      return this.parseObj(false, refShorthandDefaultPos);

    case types._function:
      return this.parseFunctionExpression();

    case types.at:
      this.parseDecorators();

    case types._class:
      node = this.startNode();
      this.takeDecorators(node);
      return this.parseClass(node, false);

    case types._new:
      return this.parseNew();

    case types.backQuote:
      return this.parseTemplate();

    case types.doubleColon:
      node = this.startNode();
      this.next();
      node.object = null;
      var callee = node.callee = this.parseNoCallExpr();
      if (callee.type === "MemberExpression") {
        return this.finishNode(node, "BindExpression");
      } else {
        this.raise(callee.start, "Binding should be performed on object property.");
      }

    default:
      this.unexpected();
  }
};

pp$3.parseFunctionExpression = function () {
  var node = this.startNode();
  var meta = this.parseIdentifier(true);
  if (this.state.inGenerator && this.eat(types.dot) && this.hasPlugin("functionSent")) {
    return this.parseMetaProperty(node, meta, "sent");
  } else {
    return this.parseFunction(node, false);
  }
};

pp$3.parseMetaProperty = function (node, meta, propertyName) {
  node.meta = meta;
  node.property = this.parseIdentifier(true);

  if (node.property.name !== propertyName) {
    this.raise(node.property.start, "The only valid meta property for new is " + meta.name + "." + propertyName);
  }

  return this.finishNode(node, "MetaProperty");
};

pp$3.parseLiteral = function (value, type, startPos, startLoc) {
  startPos = startPos || this.state.start;
  startLoc = startLoc || this.state.startLoc;

  var node = this.startNodeAt(startPos, startLoc);
  this.addExtra(node, "rawValue", value);
  this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
  node.value = value;
  this.next();
  return this.finishNode(node, type);
};

pp$3.parseParenExpression = function () {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val;
};

pp$3.parseParenAndDistinguishExpression = function (startPos, startLoc, canBeArrow) {
  startPos = startPos || this.state.start;
  startLoc = startLoc || this.state.startLoc;

  var val = void 0;
  this.expect(types.parenL);

  var innerStartPos = this.state.start;
  var innerStartLoc = this.state.startLoc;
  var exprList = [];
  var refShorthandDefaultPos = { start: 0 };
  var refNeedsArrowPos = { start: 0 };
  var first = true;
  var spreadStart = void 0;
  var optionalCommaStart = void 0;

  while (!this.match(types.parenR)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma, refNeedsArrowPos.start || null);
      if (this.match(types.parenR)) {
        optionalCommaStart = this.state.start;
        break;
      }
    }

    if (this.match(types.ellipsis)) {
      var spreadNodeStartPos = this.state.start;
      var spreadNodeStartLoc = this.state.startLoc;
      spreadStart = this.state.start;
      exprList.push(this.parseParenItem(this.parseRest(), spreadNodeStartLoc, spreadNodeStartPos));
      break;
    } else {
      exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos));
    }
  }

  var innerEndPos = this.state.start;
  var innerEndLoc = this.state.startLoc;
  this.expect(types.parenR);

  var arrowNode = this.startNodeAt(startPos, startLoc);
  if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
    for (var _iterator = exprList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var param = _ref;

      if (param.extra && param.extra.parenthesized) this.unexpected(param.extra.parenStart);
    }

    return this.parseArrowExpression(arrowNode, exprList);
  }

  if (!exprList.length) {
    this.unexpected(this.state.lastTokStart);
  }
  if (optionalCommaStart) this.unexpected(optionalCommaStart);
  if (spreadStart) this.unexpected(spreadStart);
  if (refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);
  if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);

  if (exprList.length > 1) {
    val = this.startNodeAt(innerStartPos, innerStartLoc);
    val.expressions = exprList;
    this.toReferencedList(val.expressions);
    this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
  } else {
    val = exprList[0];
  }

  this.addExtra(val, "parenthesized", true);
  this.addExtra(val, "parenStart", startPos);

  return val;
};

pp$3.shouldParseArrow = function () {
  return !this.canInsertSemicolon();
};

pp$3.parseArrow = function (node) {
  if (this.eat(types.arrow)) {
    return node;
  }
};

pp$3.parseParenItem = function (node) {
  return node;
};

// New's precedence is slightly tricky. It must allow its argument
// to be a `[]` or dot subscript expression, but not a call — at
// least, not without wrapping it in parentheses. Thus, it uses the

pp$3.parseNew = function () {
  var node = this.startNode();
  var meta = this.parseIdentifier(true);

  if (this.eat(types.dot)) {
    return this.parseMetaProperty(node, meta, "target");
  }

  node.callee = this.parseNoCallExpr();

  if (this.eat(types.parenL)) {
    node.arguments = this.parseExprList(types.parenR);
    this.toReferencedList(node.arguments);
  } else {
    node.arguments = [];
  }

  return this.finishNode(node, "NewExpression");
};

// Parse template expression.

pp$3.parseTemplateElement = function () {
  var elem = this.startNode();
  elem.value = {
    raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
    cooked: this.state.value
  };
  this.next();
  elem.tail = this.match(types.backQuote);
  return this.finishNode(elem, "TemplateElement");
};

pp$3.parseTemplate = function () {
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement();
  node.quasis = [curElt];
  while (!curElt.tail) {
    this.expect(types.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node.quasis.push(curElt = this.parseTemplateElement());
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function (isPattern, refShorthandDefaultPos) {
  var decorators = [];
  var propHash = Object.create(null);
  var first = true;
  var node = this.startNode();

  node.properties = [];
  this.next();

  var firstRestLocation = null;

  while (!this.eat(types.braceR)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
      if (this.eat(types.braceR)) break;
    }

    while (this.match(types.at)) {
      decorators.push(this.parseDecorator());
    }

    var prop = this.startNode(),
        isGenerator = false,
        isAsync = false,
        startPos = void 0,
        startLoc = void 0;
    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }

    if (this.hasPlugin("objectRestSpread") && this.match(types.ellipsis)) {
      prop = this.parseSpread(isPattern ? { start: 0 } : undefined);
      prop.type = isPattern ? "RestProperty" : "SpreadProperty";
      if (isPattern) this.toAssignable(prop.argument, true, "object pattern");
      node.properties.push(prop);
      if (isPattern) {
        var position = this.state.start;
        if (firstRestLocation !== null) {
          this.unexpected(firstRestLocation, "Cannot have multiple rest elements when destructuring");
        } else if (this.eat(types.braceR)) {
          break;
        } else if (this.match(types.comma) && this.lookahead().type === types.braceR) {
          // TODO: temporary rollback
          // this.unexpected(position, "A trailing comma is not permitted after the rest element");
          continue;
        } else {
          firstRestLocation = position;
          continue;
        }
      } else {
        continue;
      }
    }

    prop.method = false;
    prop.shorthand = false;

    if (isPattern || refShorthandDefaultPos) {
      startPos = this.state.start;
      startLoc = this.state.startLoc;
    }

    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }

    if (!isPattern && this.isContextual("async")) {
      if (isGenerator) this.unexpected();

      var asyncId = this.parseIdentifier();
      if (this.match(types.colon) || this.match(types.parenL) || this.match(types.braceR) || this.match(types.eq) || this.match(types.comma)) {
        prop.key = asyncId;
        prop.computed = false;
      } else {
        isAsync = true;
        if (this.hasPlugin("asyncGenerators")) isGenerator = this.eat(types.star);
        this.parsePropertyName(prop);
      }
    } else {
      this.parsePropertyName(prop);
    }

    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos);
    this.checkPropClash(prop, propHash);

    if (prop.shorthand) {
      this.addExtra(prop, "shorthand", true);
    }

    node.properties.push(prop);
  }

  if (firstRestLocation !== null) {
    this.unexpected(firstRestLocation, "The rest element has to be the last element when destructuring");
  }

  if (decorators.length) {
    this.raise(this.state.start, "You have trailing decorators with no property");
  }

  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};

pp$3.isGetterOrSetterMethod = function (prop, isPattern) {
  return !isPattern && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.match(types.string) || // get "string"() {}
  this.match(types.num) || // get 1() {}
  this.match(types.bracketL) || // get ["string"]() {}
  this.match(types.name) || // get foo() {}
  this.state.type.keyword // get debugger() {}
  );
};

// get methods aren't allowed to have any parameters
// set methods must have exactly 1 parameter
pp$3.checkGetterSetterParamCount = function (method) {
  var paramCount = method.kind === "get" ? 0 : 1;
  if (method.params.length !== paramCount) {
    var start = method.start;
    if (method.kind === "get") {
      this.raise(start, "getter should have no params");
    } else {
      this.raise(start, "setter should have exactly one param");
    }
  }
};

pp$3.parseObjectMethod = function (prop, isGenerator, isAsync, isPattern) {
  if (isAsync || isGenerator || this.match(types.parenL)) {
    if (isPattern) this.unexpected();
    prop.kind = "method";
    prop.method = true;
    this.parseMethod(prop, isGenerator, isAsync);

    return this.finishNode(prop, "ObjectMethod");
  }

  if (this.isGetterOrSetterMethod(prop, isPattern)) {
    if (isGenerator || isAsync) this.unexpected();
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    this.parseMethod(prop);
    this.checkGetterSetterParamCount(prop);

    return this.finishNode(prop, "ObjectMethod");
  }
};

pp$3.parseObjectProperty = function (prop, startPos, startLoc, isPattern, refShorthandDefaultPos) {
  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);

    return this.finishNode(prop, "ObjectProperty");
  }

  if (!prop.computed && prop.key.type === "Identifier") {
    if (isPattern) {
      this.checkReservedWord(prop.key.name, prop.key.start, true, true);
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
    } else if (this.match(types.eq) && refShorthandDefaultPos) {
      if (!refShorthandDefaultPos.start) {
        refShorthandDefaultPos.start = this.state.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
    } else {
      prop.value = prop.key.__clone();
    }
    prop.shorthand = true;

    return this.finishNode(prop, "ObjectProperty");
  }
};

pp$3.parseObjPropValue = function (prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
  var node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos);

  if (!node) this.unexpected();

  return node;
};

pp$3.parsePropertyName = function (prop) {
  if (this.eat(types.bracketL)) {
    prop.computed = true;
    prop.key = this.parseMaybeAssign();
    this.expect(types.bracketR);
  } else {
    prop.computed = false;
    var oldInPropertyName = this.state.inPropertyName;
    this.state.inPropertyName = true;
    prop.key = this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
    this.state.inPropertyName = oldInPropertyName;
  }
  return prop.key;
};

// Initialize empty function node.

pp$3.initFunction = function (node, isAsync) {
  node.id = null;
  node.generator = false;
  node.expression = false;
  node.async = !!isAsync;
};

// Parse object or class method.

pp$3.parseMethod = function (node, isGenerator, isAsync) {
  var oldInMethod = this.state.inMethod;
  this.state.inMethod = node.kind || true;
  this.initFunction(node, isAsync);
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR);
  node.generator = !!isGenerator;
  this.parseFunctionBody(node);
  this.state.inMethod = oldInMethod;
  return node;
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function (node, params, isAsync) {
  this.initFunction(node, isAsync);
  node.params = this.toAssignableList(params, true, "arrow function parameters");
  this.parseFunctionBody(node, true);
  return this.finishNode(node, "ArrowFunctionExpression");
};

pp$3.isStrictBody = function (node, isExpression) {
  if (!isExpression && node.body.directives.length) {
    for (var _iterator2 = node.body.directives, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var directive = _ref2;

      if (directive.value.value === "use strict") {
        return true;
      }
    }
  }

  return false;
};

// Parse function body and check parameters.
pp$3.parseFunctionBody = function (node, allowExpression) {
  var isExpression = allowExpression && !this.match(types.braceL);

  var oldInAsync = this.state.inAsync;
  this.state.inAsync = node.async;
  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
  } else {
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldInFunc = this.state.inFunction;
    var oldInGen = this.state.inGenerator;
    var oldLabels = this.state.labels;
    this.state.inFunction = true;this.state.inGenerator = node.generator;this.state.labels = [];
    node.body = this.parseBlock(true);
    node.expression = false;
    this.state.inFunction = oldInFunc;this.state.inGenerator = oldInGen;this.state.labels = oldLabels;
  }
  this.state.inAsync = oldInAsync;

  // If this is a strict mode function, verify that argument names
  // are not repeated, and it does not try to bind the words `eval`
  // or `arguments`.
  var isStrict = this.isStrictBody(node, isExpression);
  // Also check when allowExpression === true for arrow functions
  var checkLVal = this.state.strict || allowExpression || isStrict;

  if (isStrict && node.id && node.id.type === "Identifier" && node.id.name === "yield") {
    this.raise(node.id.start, "Binding yield in strict mode");
  }

  if (checkLVal) {
    var nameHash = Object.create(null);
    var oldStrict = this.state.strict;
    if (isStrict) this.state.strict = true;
    if (node.id) {
      this.checkLVal(node.id, true, undefined, "function name");
    }
    for (var _iterator3 = node.params, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var param = _ref3;

      if (isStrict && param.type !== "Identifier") {
        this.raise(param.start, "Non-simple parameter in strict mode");
      }
      this.checkLVal(param, true, nameHash, "function parameter list");
    }
    this.state.strict = oldStrict;
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function (close, allowEmpty, refShorthandDefaultPos) {
  var elts = [];
  var first = true;

  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
      if (this.eat(close)) break;
    }

    elts.push(this.parseExprListItem(allowEmpty, refShorthandDefaultPos));
  }
  return elts;
};

pp$3.parseExprListItem = function (allowEmpty, refShorthandDefaultPos, refNeedsArrowPos) {
  var elt = void 0;
  if (allowEmpty && this.match(types.comma)) {
    elt = null;
  } else if (this.match(types.ellipsis)) {
    elt = this.parseSpread(refShorthandDefaultPos);
  } else {
    elt = this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos);
  }
  return elt;
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdentifier = function (liberal) {
  var node = this.startNode();
  if (!liberal) {
    this.checkReservedWord(this.state.value, this.state.start, !!this.state.type.keyword, false);
  }

  if (this.match(types.name)) {
    node.name = this.state.value;
  } else if (this.state.type.keyword) {
    node.name = this.state.type.keyword;
  } else {
    this.unexpected();
  }

  if (!liberal && node.name === "await" && this.state.inAsync) {
    this.raise(node.start, "invalid use of await inside of an async function");
  }

  node.loc.identifierName = node.name;

  this.next();
  return this.finishNode(node, "Identifier");
};

pp$3.checkReservedWord = function (word, startLoc, checkKeywords, isBinding) {
  if (this.isReservedWord(word) || checkKeywords && this.isKeyword(word)) {
    this.raise(startLoc, word + " is a reserved word");
  }

  if (this.state.strict && (reservedWords.strict(word) || isBinding && reservedWords.strictBind(word))) {
    this.raise(startLoc, word + " is a reserved word in strict mode");
  }
};

// Parses await expression inside async function.

pp$3.parseAwait = function (node) {
  // istanbul ignore next: this condition is checked at the call site so won't be hit here
  if (!this.state.inAsync) {
    this.unexpected();
  }
  if (this.match(types.star)) {
    this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
  }
  node.argument = this.parseMaybeUnary();
  return this.finishNode(node, "AwaitExpression");
};

// Parses yield expression inside generator.

pp$3.parseYield = function () {
  var node = this.startNode();
  this.next();
  if (this.match(types.semi) || this.canInsertSemicolon() || !this.match(types.star) && !this.state.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign();
  }
  return this.finishNode(node, "YieldExpression");
};

// Start an AST node, attaching a start offset.

var pp$4 = Parser.prototype;
var commentKeys = ["leadingComments", "trailingComments", "innerComments"];

var Node = function () {
  function Node(pos, loc, filename) {
    classCallCheck(this, Node);

    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (filename) this.loc.filename = filename;
  }

  Node.prototype.__clone = function __clone() {
    var node2 = new Node();
    for (var key in this) {
      // Do not clone comments that are already attached to the node
      if (commentKeys.indexOf(key) < 0) {
        node2[key] = this[key];
      }
    }

    return node2;
  };

  return Node;
}();

pp$4.startNode = function () {
  return new Node(this.state.start, this.state.startLoc, this.filename);
};

pp$4.startNodeAt = function (pos, loc) {
  return new Node(pos, loc, this.filename);
};

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  node.loc.end = loc;
  this.processComment(node);
  return node;
}

// Finish an AST node, adding `type` and `end` properties.

pp$4.finishNode = function (node, type) {
  return finishNodeAt.call(this, node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
};

// Finish node at given position

pp$4.finishNodeAt = function (node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};

var pp$5 = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$5.raise = function (pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  throw err;
};

/* eslint max-len: 0 */

/**
 * Based on the comment attachment algorithm used in espree and estraverse.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function last(stack) {
  return stack[stack.length - 1];
}

var pp$6 = Parser.prototype;

pp$6.addComment = function (comment) {
  if (this.filename) comment.loc.filename = this.filename;
  this.state.trailingComments.push(comment);
  this.state.leadingComments.push(comment);
};

pp$6.processComment = function (node) {
  if (node.type === "Program" && node.body.length > 0) return;

  var stack = this.state.commentStack;

  var lastChild = void 0,
      trailingComments = void 0,
      i = void 0,
      j = void 0;

  if (this.state.trailingComments.length > 0) {
    // If the first comment in trailingComments comes after the
    // current node, then we're good - all comments in the array will
    // come after the node and so it's safe to add them as official
    // trailingComments.
    if (this.state.trailingComments[0].start >= node.end) {
      trailingComments = this.state.trailingComments;
      this.state.trailingComments = [];
    } else {
      // Otherwise, if the first comment doesn't come after the
      // current node, that means we have a mix of leading and trailing
      // comments in the array and that leadingComments contains the
      // same items as trailingComments. Reset trailingComments to
      // zero items and we'll handle this by evaluating leadingComments
      // later.
      this.state.trailingComments.length = 0;
    }
  } else {
    var lastInStack = last(stack);
    if (stack.length > 0 && lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
      trailingComments = lastInStack.trailingComments;
      lastInStack.trailingComments = null;
    }
  }

  // Eating the stack.
  while (stack.length > 0 && last(stack).start >= node.start) {
    lastChild = stack.pop();
  }

  if (lastChild) {
    if (lastChild.leadingComments) {
      if (lastChild !== node && last(lastChild.leadingComments).end <= node.start) {
        node.leadingComments = lastChild.leadingComments;
        lastChild.leadingComments = null;
      } else {
        // A leading comment for an anonymous class had been stolen by its first ClassMethod,
        // so this takes back the leading comment.
        // See also: https://github.com/eslint/espree/issues/158
        for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
          if (lastChild.leadingComments[i].end <= node.start) {
            node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
            break;
          }
        }
      }
    }
  } else if (this.state.leadingComments.length > 0) {
    if (last(this.state.leadingComments).end <= node.start) {
      if (this.state.commentPreviousNode) {
        for (j = 0; j < this.state.leadingComments.length; j++) {
          if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
            this.state.leadingComments.splice(j, 1);
            j--;
          }
        }
      }
      if (this.state.leadingComments.length > 0) {
        node.leadingComments = this.state.leadingComments;
        this.state.leadingComments = [];
      }
    } else {
      // https://github.com/eslint/espree/issues/2
      //
      // In special cases, such as return (without a value) and
      // debugger, all comments will end up as leadingComments and
      // will otherwise be eliminated. This step runs when the
      // commentStack is empty and there are comments left
      // in leadingComments.
      //
      // This loop figures out the stopping point between the actual
      // leading and trailing comments by finding the location of the
      // first comment that comes after the given node.
      for (i = 0; i < this.state.leadingComments.length; i++) {
        if (this.state.leadingComments[i].end > node.start) {
          break;
        }
      }

      // Split the array based on the location of the first comment
      // that comes after the node. Keep in mind that this could
      // result in an empty array, and if so, the array must be
      // deleted.
      node.leadingComments = this.state.leadingComments.slice(0, i);
      if (node.leadingComments.length === 0) {
        node.leadingComments = null;
      }

      // Similarly, trailing comments are attached later. The variable
      // must be reset to null if there are no trailing comments.
      trailingComments = this.state.leadingComments.slice(i);
      if (trailingComments.length === 0) {
        trailingComments = null;
      }
    }
  }

  this.state.commentPreviousNode = node;

  if (trailingComments) {
    if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
      node.innerComments = trailingComments;
    } else {
      node.trailingComments = trailingComments;
    }
  }

  stack.push(node);
};

var pp$7 = Parser.prototype;

pp$7.estreeParseRegExpLiteral = function (_ref) {
  var pattern = _ref.pattern,
      flags = _ref.flags;

  var regex = null;
  try {
    regex = new RegExp(pattern, flags);
  } catch (e) {
    // In environments that don't support these flags value will
    // be null as the regex can't be represented natively.
  }
  var node = this.estreeParseLiteral(regex);
  node.regex = { pattern: pattern, flags: flags };

  return node;
};

pp$7.estreeParseLiteral = function (value) {
  return this.parseLiteral(value, "Literal");
};

pp$7.directiveToStmt = function (directive) {
  var directiveLiteral = directive.value;

  var stmt = this.startNodeAt(directive.start, directive.loc.start);
  var expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);

  expression.value = directiveLiteral.value;
  expression.raw = directiveLiteral.extra.raw;

  stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
  stmt.directive = directiveLiteral.extra.raw.slice(1, -1);

  return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
};

function isSimpleProperty(node) {
  return node && node.type === "Property" && node.kind === "init" && node.method === false;
}

var estreePlugin = function (instance) {
  instance.extend("checkDeclaration", function (inner) {
    return function (node) {
      if (isSimpleProperty(node)) {
        this.checkDeclaration(node.value);
      } else {
        inner.call(this, node);
      }
    };
  });

  instance.extend("checkGetterSetterParamCount", function () {
    return function (prop) {
      var paramCount = prop.kind === "get" ? 0 : 1;
      if (prop.value.params.length !== paramCount) {
        var start = prop.start;
        if (prop.kind === "get") {
          this.raise(start, "getter should have no params");
        } else {
          this.raise(start, "setter should have exactly one param");
        }
      }
    };
  });

  instance.extend("checkLVal", function (inner) {
    return function (expr, isBinding, checkClashes) {
      var _this = this;

      switch (expr.type) {
        case "ObjectPattern":
          expr.properties.forEach(function (prop) {
            _this.checkLVal(prop.type === "Property" ? prop.value : prop, isBinding, checkClashes, "object destructuring pattern");
          });
          break;
        default:
          for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            args[_key - 3] = arguments[_key];
          }

          inner.call.apply(inner, [this, expr, isBinding, checkClashes].concat(args));
      }
    };
  });

  instance.extend("checkPropClash", function () {
    return function (prop, propHash) {
      if (prop.computed || !isSimpleProperty(prop)) return;

      var key = prop.key;
      // It is either an Identifier or a String/NumericLiteral
      var name = key.type === "Identifier" ? key.name : String(key.value);

      if (name === "__proto__") {
        if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
        propHash.proto = true;
      }
    };
  });

  instance.extend("isStrictBody", function () {
    return function (node, isExpression) {
      if (!isExpression && node.body.body.length > 0) {
        for (var _iterator = node.body.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref2 = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref2 = _i.value;
          }

          var directive = _ref2;

          if (directive.type === "ExpressionStatement" && directive.expression.type === "Literal") {
            if (directive.expression.value === "use strict") return true;
          } else {
            // Break for the first non literal expression
            break;
          }
        }
      }

      return false;
    };
  });

  instance.extend("isValidDirective", function () {
    return function (stmt) {
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && (!stmt.expression.extra || !stmt.expression.extra.parenthesized);
    };
  });

  instance.extend("parseBlockBody", function (inner) {
    return function (node) {
      var _this2 = this;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      inner.call.apply(inner, [this, node].concat(args));

      node.directives.reverse().forEach(function (directive) {
        node.body.unshift(_this2.directiveToStmt(directive));
      });
      delete node.directives;
    };
  });

  instance.extend("parseClassMethod", function (inner) {
    return function (classBody) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      inner.call.apply(inner, [this, classBody].concat(args));

      var body = classBody.body;
      body[body.length - 1].type = "MethodDefinition";
    };
  });

  instance.extend("parseExprAtom", function (inner) {
    return function () {
      switch (this.state.type) {
        case types.regexp:
          return this.estreeParseRegExpLiteral(this.state.value);

        case types.num:
        case types.string:
          return this.estreeParseLiteral(this.state.value);

        case types._null:
          return this.estreeParseLiteral(null);

        case types._true:
          return this.estreeParseLiteral(true);

        case types._false:
          return this.estreeParseLiteral(false);

        default:
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return inner.call.apply(inner, [this].concat(args));
      }
    };
  });

  instance.extend("parseLiteral", function (inner) {
    return function () {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var node = inner.call.apply(inner, [this].concat(args));
      node.raw = node.extra.raw;
      delete node.extra;

      return node;
    };
  });

  instance.extend("parseMethod", function (inner) {
    return function (node) {
      var funcNode = this.startNode();
      funcNode.kind = node.kind; // provide kind, so inner method correctly sets state

      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      funcNode = inner.call.apply(inner, [this, funcNode].concat(args));
      delete funcNode.kind;
      node.value = this.finishNode(funcNode, "FunctionExpression");

      return node;
    };
  });

  instance.extend("parseObjectMethod", function (inner) {
    return function () {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var node = inner.call.apply(inner, [this].concat(args));

      if (node) {
        if (node.kind === "method") node.kind = "init";
        node.type = "Property";
      }

      return node;
    };
  });

  instance.extend("parseObjectProperty", function (inner) {
    return function () {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      var node = inner.call.apply(inner, [this].concat(args));

      if (node) {
        node.kind = "init";
        node.type = "Property";
      }

      return node;
    };
  });

  instance.extend("toAssignable", function (inner) {
    return function (node, isBinding) {
      for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
        args[_key9 - 2] = arguments[_key9];
      }

      if (isSimpleProperty(node)) {
        this.toAssignable.apply(this, [node.value, isBinding].concat(args));

        return node;
      } else if (node.type === "ObjectExpression") {
        node.type = "ObjectPattern";
        for (var _iterator2 = node.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref3 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref3 = _i2.value;
          }

          var prop = _ref3;

          if (prop.kind === "get" || prop.kind === "set") {
            this.raise(prop.key.start, "Object pattern can't contain getter or setter");
          } else if (prop.method) {
            this.raise(prop.key.start, "Object pattern can't contain methods");
          } else {
            this.toAssignable(prop, isBinding, "object destructuring pattern");
          }
        }

        return node;
      }

      return inner.call.apply(inner, [this, node, isBinding].concat(args));
    };
  });
};

/* eslint max-len: 0 */

var primitiveTypes = ["any", "mixed", "empty", "bool", "boolean", "number", "string", "void", "null"];

var pp$8 = Parser.prototype;

pp$8.flowParseTypeInitialiser = function (tok) {
  var oldInType = this.state.inType;
  this.state.inType = true;
  this.expect(tok || types.colon);

  var type = this.flowParseType();
  this.state.inType = oldInType;
  return type;
};

pp$8.flowParsePredicate = function () {
  var node = this.startNode();
  var moduloLoc = this.state.startLoc;
  var moduloPos = this.state.start;
  this.expect(types.modulo);
  var checksLoc = this.state.startLoc;
  this.expectContextual("checks");
  // Force '%' and 'checks' to be adjacent
  if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
    this.raise(moduloPos, "Spaces between ´%´ and ´checks´ are not allowed here.");
  }
  if (this.eat(types.parenL)) {
    node.expression = this.parseExpression();
    this.expect(types.parenR);
    return this.finishNode(node, "DeclaredPredicate");
  } else {
    return this.finishNode(node, "InferredPredicate");
  }
};

pp$8.flowParseTypeAndPredicateInitialiser = function () {
  var oldInType = this.state.inType;
  this.state.inType = true;
  this.expect(types.colon);
  var type = null;
  var predicate = null;
  if (this.match(types.modulo)) {
    this.state.inType = oldInType;
    predicate = this.flowParsePredicate();
  } else {
    type = this.flowParseType();
    this.state.inType = oldInType;
    if (this.match(types.modulo)) {
      predicate = this.flowParsePredicate();
    }
  }
  return [type, predicate];
};

pp$8.flowParseDeclareClass = function (node) {
  this.next();
  this.flowParseInterfaceish(node, true);
  return this.finishNode(node, "DeclareClass");
};

pp$8.flowParseDeclareFunction = function (node) {
  this.next();

  var id = node.id = this.parseIdentifier();

  var typeNode = this.startNode();
  var typeContainer = this.startNode();

  if (this.isRelational("<")) {
    typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
  } else {
    typeNode.typeParameters = null;
  }

  this.expect(types.parenL);
  var tmp = this.flowParseFunctionTypeParams();
  typeNode.params = tmp.params;
  typeNode.rest = tmp.rest;
  this.expect(types.parenR);
  var predicate = null;

  var _flowParseTypeAndPred = this.flowParseTypeAndPredicateInitialiser();

  typeNode.returnType = _flowParseTypeAndPred[0];
  predicate = _flowParseTypeAndPred[1];

  typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
  typeContainer.predicate = predicate;
  id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");

  this.finishNode(id, id.type);

  this.semicolon();

  return this.finishNode(node, "DeclareFunction");
};

pp$8.flowParseDeclare = function (node) {
  if (this.match(types._class)) {
    return this.flowParseDeclareClass(node);
  } else if (this.match(types._function)) {
    return this.flowParseDeclareFunction(node);
  } else if (this.match(types._var)) {
    return this.flowParseDeclareVariable(node);
  } else if (this.isContextual("module")) {
    if (this.lookahead().type === types.dot) {
      return this.flowParseDeclareModuleExports(node);
    } else {
      return this.flowParseDeclareModule(node);
    }
  } else if (this.isContextual("type")) {
    return this.flowParseDeclareTypeAlias(node);
  } else if (this.isContextual("interface")) {
    return this.flowParseDeclareInterface(node);
  } else {
    this.unexpected();
  }
};

pp$8.flowParseDeclareVariable = function (node) {
  this.next();
  node.id = this.flowParseTypeAnnotatableIdentifier();
  this.semicolon();
  return this.finishNode(node, "DeclareVariable");
};

pp$8.flowParseDeclareModule = function (node) {
  this.next();

  if (this.match(types.string)) {
    node.id = this.parseExprAtom();
  } else {
    node.id = this.parseIdentifier();
  }

  var bodyNode = node.body = this.startNode();
  var body = bodyNode.body = [];
  this.expect(types.braceL);
  while (!this.match(types.braceR)) {
    var _bodyNode = this.startNode();

    if (this.match(types._import)) {
      var lookahead = this.lookahead();
      if (lookahead.value !== "type" && lookahead.value !== "typeof") {
        this.unexpected(null, "Imports within a `declare module` body must always be `import type` or `import typeof`");
      }

      this.parseImport(_bodyNode);
    } else {
      this.expectContextual("declare", "Only declares and type imports are allowed inside declare module");

      _bodyNode = this.flowParseDeclare(_bodyNode, true);
    }

    body.push(_bodyNode);
  }
  this.expect(types.braceR);

  this.finishNode(bodyNode, "BlockStatement");
  return this.finishNode(node, "DeclareModule");
};

pp$8.flowParseDeclareModuleExports = function (node) {
  this.expectContextual("module");
  this.expect(types.dot);
  this.expectContextual("exports");
  node.typeAnnotation = this.flowParseTypeAnnotation();
  this.semicolon();

  return this.finishNode(node, "DeclareModuleExports");
};

pp$8.flowParseDeclareTypeAlias = function (node) {
  this.next();
  this.flowParseTypeAlias(node);
  return this.finishNode(node, "DeclareTypeAlias");
};

pp$8.flowParseDeclareInterface = function (node) {
  this.next();
  this.flowParseInterfaceish(node);
  return this.finishNode(node, "DeclareInterface");
};

// Interfaces

pp$8.flowParseInterfaceish = function (node, allowStatic) {
  node.id = this.parseIdentifier();

  if (this.isRelational("<")) {
    node.typeParameters = this.flowParseTypeParameterDeclaration();
  } else {
    node.typeParameters = null;
  }

  node.extends = [];
  node.mixins = [];

  if (this.eat(types._extends)) {
    do {
      node.extends.push(this.flowParseInterfaceExtends());
    } while (this.eat(types.comma));
  }

  if (this.isContextual("mixins")) {
    this.next();
    do {
      node.mixins.push(this.flowParseInterfaceExtends());
    } while (this.eat(types.comma));
  }

  node.body = this.flowParseObjectType(allowStatic);
};

pp$8.flowParseInterfaceExtends = function () {
  var node = this.startNode();

  node.id = this.flowParseQualifiedTypeIdentifier();
  if (this.isRelational("<")) {
    node.typeParameters = this.flowParseTypeParameterInstantiation();
  } else {
    node.typeParameters = null;
  }

  return this.finishNode(node, "InterfaceExtends");
};

pp$8.flowParseInterface = function (node) {
  this.flowParseInterfaceish(node, false);
  return this.finishNode(node, "InterfaceDeclaration");
};

pp$8.flowParseRestrictedIdentifier = function (liberal) {
  if (primitiveTypes.indexOf(this.state.value) > -1) {
    this.raise(this.state.start, "Cannot overwrite primitive type " + this.state.value);
  }

  return this.parseIdentifier(liberal);
};

// Type aliases

pp$8.flowParseTypeAlias = function (node) {
  node.id = this.flowParseRestrictedIdentifier();

  if (this.isRelational("<")) {
    node.typeParameters = this.flowParseTypeParameterDeclaration();
  } else {
    node.typeParameters = null;
  }

  node.right = this.flowParseTypeInitialiser(types.eq);
  this.semicolon();

  return this.finishNode(node, "TypeAlias");
};

// Type annotations

pp$8.flowParseTypeParameter = function () {
  var node = this.startNode();

  var variance = this.flowParseVariance();

  var ident = this.flowParseTypeAnnotatableIdentifier();
  node.name = ident.name;
  node.variance = variance;
  node.bound = ident.typeAnnotation;

  if (this.match(types.eq)) {
    this.eat(types.eq);
    node.default = this.flowParseType();
  }

  return this.finishNode(node, "TypeParameter");
};

pp$8.flowParseTypeParameterDeclaration = function () {
  var oldInType = this.state.inType;
  var node = this.startNode();
  node.params = [];

  this.state.inType = true;

  // istanbul ignore else: this condition is already checked at all call sites
  if (this.isRelational("<") || this.match(types.jsxTagStart)) {
    this.next();
  } else {
    this.unexpected();
  }

  do {
    node.params.push(this.flowParseTypeParameter());
    if (!this.isRelational(">")) {
      this.expect(types.comma);
    }
  } while (!this.isRelational(">"));
  this.expectRelational(">");

  this.state.inType = oldInType;

  return this.finishNode(node, "TypeParameterDeclaration");
};

pp$8.flowParseTypeParameterInstantiation = function () {
  var node = this.startNode();
  var oldInType = this.state.inType;
  node.params = [];

  this.state.inType = true;

  this.expectRelational("<");
  while (!this.isRelational(">")) {
    node.params.push(this.flowParseType());
    if (!this.isRelational(">")) {
      this.expect(types.comma);
    }
  }
  this.expectRelational(">");

  this.state.inType = oldInType;

  return this.finishNode(node, "TypeParameterInstantiation");
};

pp$8.flowParseObjectPropertyKey = function () {
  return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
};

pp$8.flowParseObjectTypeIndexer = function (node, isStatic, variance) {
  node.static = isStatic;

  this.expect(types.bracketL);
  if (this.lookahead().type === types.colon) {
    node.id = this.flowParseObjectPropertyKey();
    node.key = this.flowParseTypeInitialiser();
  } else {
    node.id = null;
    node.key = this.flowParseType();
  }
  this.expect(types.bracketR);
  node.value = this.flowParseTypeInitialiser();
  node.variance = variance;

  this.flowObjectTypeSemicolon();
  return this.finishNode(node, "ObjectTypeIndexer");
};

pp$8.flowParseObjectTypeMethodish = function (node) {
  node.params = [];
  node.rest = null;
  node.typeParameters = null;

  if (this.isRelational("<")) {
    node.typeParameters = this.flowParseTypeParameterDeclaration();
  }

  this.expect(types.parenL);
  while (this.match(types.name)) {
    node.params.push(this.flowParseFunctionTypeParam());
    if (!this.match(types.parenR)) {
      this.expect(types.comma);
    }
  }

  if (this.eat(types.ellipsis)) {
    node.rest = this.flowParseFunctionTypeParam();
  }
  this.expect(types.parenR);
  node.returnType = this.flowParseTypeInitialiser();

  return this.finishNode(node, "FunctionTypeAnnotation");
};

pp$8.flowParseObjectTypeMethod = function (startPos, startLoc, isStatic, key) {
  var node = this.startNodeAt(startPos, startLoc);
  node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(startPos, startLoc));
  node.static = isStatic;
  node.key = key;
  node.optional = false;
  this.flowObjectTypeSemicolon();
  return this.finishNode(node, "ObjectTypeProperty");
};

pp$8.flowParseObjectTypeCallProperty = function (node, isStatic) {
  var valueNode = this.startNode();
  node.static = isStatic;
  node.value = this.flowParseObjectTypeMethodish(valueNode);
  this.flowObjectTypeSemicolon();
  return this.finishNode(node, "ObjectTypeCallProperty");
};

pp$8.flowParseObjectType = function (allowStatic, allowExact) {
  var oldInType = this.state.inType;
  this.state.inType = true;

  var nodeStart = this.startNode();
  var node = void 0;
  var propertyKey = void 0;
  var isStatic = false;

  nodeStart.callProperties = [];
  nodeStart.properties = [];
  nodeStart.indexers = [];

  var endDelim = void 0;
  var exact = void 0;
  if (allowExact && this.match(types.braceBarL)) {
    this.expect(types.braceBarL);
    endDelim = types.braceBarR;
    exact = true;
  } else {
    this.expect(types.braceL);
    endDelim = types.braceR;
    exact = false;
  }

  nodeStart.exact = exact;

  while (!this.match(endDelim)) {
    var optional = false;
    var startPos = this.state.start;
    var startLoc = this.state.startLoc;
    node = this.startNode();
    if (allowStatic && this.isContextual("static") && this.lookahead().type !== types.colon) {
      this.next();
      isStatic = true;
    }

    var variancePos = this.state.start;
    var variance = this.flowParseVariance();

    if (this.match(types.bracketL)) {
      nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
    } else if (this.match(types.parenL) || this.isRelational("<")) {
      if (variance) {
        this.unexpected(variancePos);
      }
      nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
    } else {
      propertyKey = this.flowParseObjectPropertyKey();
      if (this.isRelational("<") || this.match(types.parenL)) {
        // This is a method property
        if (variance) {
          this.unexpected(variancePos);
        }
        nodeStart.properties.push(this.flowParseObjectTypeMethod(startPos, startLoc, isStatic, propertyKey));
      } else {
        if (this.eat(types.question)) {
          optional = true;
        }
        node.key = propertyKey;
        node.value = this.flowParseTypeInitialiser();
        node.optional = optional;
        node.static = isStatic;
        node.variance = variance;
        this.flowObjectTypeSemicolon();
        nodeStart.properties.push(this.finishNode(node, "ObjectTypeProperty"));
      }
    }

    isStatic = false;
  }

  this.expect(endDelim);

  var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");

  this.state.inType = oldInType;

  return out;
};

pp$8.flowObjectTypeSemicolon = function () {
  if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
    this.unexpected();
  }
};

pp$8.flowParseQualifiedTypeIdentifier = function (startPos, startLoc, id) {
  startPos = startPos || this.state.start;
  startLoc = startLoc || this.state.startLoc;
  var node = id || this.parseIdentifier();

  while (this.eat(types.dot)) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.qualification = node;
    node2.id = this.parseIdentifier();
    node = this.finishNode(node2, "QualifiedTypeIdentifier");
  }

  return node;
};

pp$8.flowParseGenericType = function (startPos, startLoc, id) {
  var node = this.startNodeAt(startPos, startLoc);

  node.typeParameters = null;
  node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

  if (this.isRelational("<")) {
    node.typeParameters = this.flowParseTypeParameterInstantiation();
  }

  return this.finishNode(node, "GenericTypeAnnotation");
};

pp$8.flowParseTypeofType = function () {
  var node = this.startNode();
  this.expect(types._typeof);
  node.argument = this.flowParsePrimaryType();
  return this.finishNode(node, "TypeofTypeAnnotation");
};

pp$8.flowParseTupleType = function () {
  var node = this.startNode();
  node.types = [];
  this.expect(types.bracketL);
  // We allow trailing commas
  while (this.state.pos < this.input.length && !this.match(types.bracketR)) {
    node.types.push(this.flowParseType());
    if (this.match(types.bracketR)) break;
    this.expect(types.comma);
  }
  this.expect(types.bracketR);
  return this.finishNode(node, "TupleTypeAnnotation");
};

pp$8.flowParseFunctionTypeParam = function () {
  var name = null;
  var optional = false;
  var typeAnnotation = null;
  var node = this.startNode();
  var lh = this.lookahead();
  if (lh.type === types.colon || lh.type === types.question) {
    name = this.parseIdentifier();
    if (this.eat(types.question)) {
      optional = true;
    }
    typeAnnotation = this.flowParseTypeInitialiser();
  } else {
    typeAnnotation = this.flowParseType();
  }
  node.name = name;
  node.optional = optional;
  node.typeAnnotation = typeAnnotation;
  return this.finishNode(node, "FunctionTypeParam");
};

pp$8.reinterpretTypeAsFunctionTypeParam = function (type) {
  var node = this.startNodeAt(type.start, type.loc);
  node.name = null;
  node.optional = false;
  node.typeAnnotation = type;
  return this.finishNode(node, "FunctionTypeParam");
};

pp$8.flowParseFunctionTypeParams = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var ret = { params: params, rest: null };
  while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
    ret.params.push(this.flowParseFunctionTypeParam());
    if (!this.match(types.parenR)) {
      this.expect(types.comma);
    }
  }
  if (this.eat(types.ellipsis)) {
    ret.rest = this.flowParseFunctionTypeParam();
  }
  return ret;
};

pp$8.flowIdentToTypeAnnotation = function (startPos, startLoc, node, id) {
  switch (id.name) {
    case "any":
      return this.finishNode(node, "AnyTypeAnnotation");

    case "void":
      return this.finishNode(node, "VoidTypeAnnotation");

    case "bool":
    case "boolean":
      return this.finishNode(node, "BooleanTypeAnnotation");

    case "mixed":
      return this.finishNode(node, "MixedTypeAnnotation");

    case "empty":
      return this.finishNode(node, "EmptyTypeAnnotation");

    case "number":
      return this.finishNode(node, "NumberTypeAnnotation");

    case "string":
      return this.finishNode(node, "StringTypeAnnotation");

    default:
      return this.flowParseGenericType(startPos, startLoc, id);
  }
};

// The parsing of types roughly parallels the parsing of expressions, and
// primary types are kind of like primary expressions...they're the
// primitives with which other types are constructed.
pp$8.flowParsePrimaryType = function () {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var node = this.startNode();
  var tmp = void 0;
  var type = void 0;
  var isGroupedType = false;
  var oldNoAnonFunctionType = this.state.noAnonFunctionType;

  switch (this.state.type) {
    case types.name:
      return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

    case types.braceL:
      return this.flowParseObjectType(false, false);

    case types.braceBarL:
      return this.flowParseObjectType(false, true);

    case types.bracketL:
      return this.flowParseTupleType();

    case types.relational:
      if (this.state.value === "<") {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
        this.expect(types.parenL);
        tmp = this.flowParseFunctionTypeParams();
        node.params = tmp.params;
        node.rest = tmp.rest;
        this.expect(types.parenR);

        this.expect(types.arrow);

        node.returnType = this.flowParseType();

        return this.finishNode(node, "FunctionTypeAnnotation");
      }
      break;

    case types.parenL:
      this.next();

      // Check to see if this is actually a grouped type
      if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        if (this.match(types.name)) {
          var token = this.lookahead().type;
          isGroupedType = token !== types.question && token !== types.colon;
        } else {
          isGroupedType = true;
        }
      }

      if (isGroupedType) {
        this.state.noAnonFunctionType = false;
        type = this.flowParseType();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;

        // A `,` or a `) =>` means this is an anonymous function type
        if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
          this.expect(types.parenR);
          return type;
        } else {
          // Eat a comma if there is one
          this.eat(types.comma);
        }
      }

      if (type) {
        tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
      } else {
        tmp = this.flowParseFunctionTypeParams();
      }

      node.params = tmp.params;
      node.rest = tmp.rest;

      this.expect(types.parenR);

      this.expect(types.arrow);

      node.returnType = this.flowParseType();

      node.typeParameters = null;

      return this.finishNode(node, "FunctionTypeAnnotation");

    case types.string:
      return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

    case types._true:case types._false:
      node.value = this.match(types._true);
      this.next();
      return this.finishNode(node, "BooleanLiteralTypeAnnotation");

    case types.plusMin:
      if (this.state.value === "-") {
        this.next();
        if (!this.match(types.num)) this.unexpected(null, "Unexpected token, expected number");

        return this.parseLiteral(-this.state.value, "NumericLiteralTypeAnnotation", node.start, node.loc.start);
      }

      this.unexpected();
    case types.num:
      return this.parseLiteral(this.state.value, "NumericLiteralTypeAnnotation");

    case types._null:
      node.value = this.match(types._null);
      this.next();
      return this.finishNode(node, "NullLiteralTypeAnnotation");

    case types._this:
      node.value = this.match(types._this);
      this.next();
      return this.finishNode(node, "ThisTypeAnnotation");

    case types.star:
      this.next();
      return this.finishNode(node, "ExistentialTypeParam");

    default:
      if (this.state.type.keyword === "typeof") {
        return this.flowParseTypeofType();
      }
  }

  this.unexpected();
};

pp$8.flowParsePostfixType = function () {
  var startPos = this.state.start,
      startLoc = this.state.startLoc;
  var type = this.flowParsePrimaryType();
  while (!this.canInsertSemicolon() && this.match(types.bracketL)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.elementType = type;
    this.expect(types.bracketL);
    this.expect(types.bracketR);
    type = this.finishNode(node, "ArrayTypeAnnotation");
  }
  return type;
};

pp$8.flowParsePrefixType = function () {
  var node = this.startNode();
  if (this.eat(types.question)) {
    node.typeAnnotation = this.flowParsePrefixType();
    return this.finishNode(node, "NullableTypeAnnotation");
  } else {
    return this.flowParsePostfixType();
  }
};

pp$8.flowParseAnonFunctionWithoutParens = function () {
  var param = this.flowParsePrefixType();
  if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
    var node = this.startNodeAt(param.start, param.loc);
    node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
    node.rest = null;
    node.returnType = this.flowParseType();
    node.typeParameters = null;
    return this.finishNode(node, "FunctionTypeAnnotation");
  }
  return param;
};

pp$8.flowParseIntersectionType = function () {
  var node = this.startNode();
  this.eat(types.bitwiseAND);
  var type = this.flowParseAnonFunctionWithoutParens();
  node.types = [type];
  while (this.eat(types.bitwiseAND)) {
    node.types.push(this.flowParseAnonFunctionWithoutParens());
  }
  return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
};

pp$8.flowParseUnionType = function () {
  var node = this.startNode();
  this.eat(types.bitwiseOR);
  var type = this.flowParseIntersectionType();
  node.types = [type];
  while (this.eat(types.bitwiseOR)) {
    node.types.push(this.flowParseIntersectionType());
  }
  return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
};

pp$8.flowParseType = function () {
  var oldInType = this.state.inType;
  this.state.inType = true;
  var type = this.flowParseUnionType();
  this.state.inType = oldInType;
  return type;
};

pp$8.flowParseTypeAnnotation = function () {
  var node = this.startNode();
  node.typeAnnotation = this.flowParseTypeInitialiser();
  return this.finishNode(node, "TypeAnnotation");
};

pp$8.flowParseTypeAndPredicateAnnotation = function () {
  var node = this.startNode();

  var _flowParseTypeAndPred2 = this.flowParseTypeAndPredicateInitialiser();

  node.typeAnnotation = _flowParseTypeAndPred2[0];
  node.predicate = _flowParseTypeAndPred2[1];

  return this.finishNode(node, "TypeAnnotation");
};

pp$8.flowParseTypeAnnotatableIdentifier = function () {
  var ident = this.flowParseRestrictedIdentifier();
  if (this.match(types.colon)) {
    ident.typeAnnotation = this.flowParseTypeAnnotation();
    this.finishNode(ident, ident.type);
  }
  return ident;
};

pp$8.typeCastToParameter = function (node) {
  node.expression.typeAnnotation = node.typeAnnotation;

  return this.finishNodeAt(node.expression, node.expression.type, node.typeAnnotation.end, node.typeAnnotation.loc.end);
};

pp$8.flowParseVariance = function () {
  var variance = null;
  if (this.match(types.plusMin)) {
    if (this.state.value === "+") {
      variance = "plus";
    } else if (this.state.value === "-") {
      variance = "minus";
    }
    this.next();
  }
  return variance;
};

var flowPlugin = function (instance) {
  // plain function return types: function name(): string {}
  instance.extend("parseFunctionBody", function (inner) {
    return function (node, allowExpression) {
      if (this.match(types.colon) && !allowExpression) {
        // if allowExpression is true then we're parsing an arrow function and if
        // there's a return type then it's been handled elsewhere
        node.returnType = this.flowParseTypeAndPredicateAnnotation();
      }

      return inner.call(this, node, allowExpression);
    };
  });

  // interfaces
  instance.extend("parseStatement", function (inner) {
    return function (declaration, topLevel) {
      // strict mode handling of `interface` since it's a reserved word
      if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
        var node = this.startNode();
        this.next();
        return this.flowParseInterface(node);
      } else {
        return inner.call(this, declaration, topLevel);
      }
    };
  });

  // declares, interfaces and type aliases
  instance.extend("parseExpressionStatement", function (inner) {
    return function (node, expr) {
      if (expr.type === "Identifier") {
        if (expr.name === "declare") {
          if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var)) {
            return this.flowParseDeclare(node);
          }
        } else if (this.match(types.name)) {
          if (expr.name === "interface") {
            return this.flowParseInterface(node);
          } else if (expr.name === "type") {
            return this.flowParseTypeAlias(node);
          }
        }
      }

      return inner.call(this, node, expr);
    };
  });

  // export type
  instance.extend("shouldParseExportDeclaration", function (inner) {
    return function () {
      return this.isContextual("type") || this.isContextual("interface") || inner.call(this);
    };
  });

  instance.extend("parseConditional", function (inner) {
    return function (expr, noIn, startPos, startLoc, refNeedsArrowPos) {
      // only do the expensive clone if there is a question mark
      // and if we come from inside parens
      if (refNeedsArrowPos && this.match(types.question)) {
        var state = this.state.clone();
        try {
          return inner.call(this, expr, noIn, startPos, startLoc);
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state;
            refNeedsArrowPos.start = err.pos || this.state.start;
            return expr;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      return inner.call(this, expr, noIn, startPos, startLoc);
    };
  });

  instance.extend("parseParenItem", function (inner) {
    return function (node, startLoc, startPos) {
      node = inner.call(this, node, startLoc, startPos);
      if (this.eat(types.question)) {
        node.optional = true;
      }

      if (this.match(types.colon)) {
        var typeCastNode = this.startNodeAt(startLoc, startPos);
        typeCastNode.expression = node;
        typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();

        return this.finishNode(typeCastNode, "TypeCastExpression");
      }

      return node;
    };
  });

  instance.extend("parseExport", function (inner) {
    return function (node) {
      node = inner.call(this, node);
      if (node.type === "ExportNamedDeclaration") {
        node.exportKind = node.exportKind || "value";
      }
      return node;
    };
  });

  instance.extend("parseExportDeclaration", function (inner) {
    return function (node) {
      if (this.isContextual("type")) {
        node.exportKind = "type";

        var declarationNode = this.startNode();
        this.next();

        if (this.match(types.braceL)) {
          // export type { foo, bar };
          node.specifiers = this.parseExportSpecifiers();
          this.parseExportFrom(node);
          return null;
        } else {
          // export type Foo = Bar;
          return this.flowParseTypeAlias(declarationNode);
        }
      } else if (this.isContextual("interface")) {
        node.exportKind = "type";
        var _declarationNode = this.startNode();
        this.next();
        return this.flowParseInterface(_declarationNode);
      } else {
        return inner.call(this, node);
      }
    };
  });

  instance.extend("parseClassId", function (inner) {
    return function (node) {
      inner.apply(this, arguments);
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }
    };
  });

  // don't consider `void` to be a keyword as then it'll use the void token type
  // and set startExpr
  instance.extend("isKeyword", function (inner) {
    return function (name) {
      if (this.state.inType && name === "void") {
        return false;
      } else {
        return inner.call(this, name);
      }
    };
  });

  // ensure that inside flow types, we bypass the jsx parser plugin
  instance.extend("readToken", function (inner) {
    return function (code) {
      if (this.state.inType && (code === 62 || code === 60)) {
        return this.finishOp(types.relational, 1);
      } else {
        return inner.call(this, code);
      }
    };
  });

  // don't lex any token as a jsx one inside a flow type
  instance.extend("jsx_readToken", function (inner) {
    return function () {
      if (!this.state.inType) return inner.call(this);
    };
  });

  instance.extend("toAssignable", function (inner) {
    return function (node, isBinding, contextDescription) {
      if (node.type === "TypeCastExpression") {
        return inner.call(this, this.typeCastToParameter(node), isBinding, contextDescription);
      } else {
        return inner.call(this, node, isBinding, contextDescription);
      }
    };
  });

  // turn type casts that we found in function parameter head into type annotated params
  instance.extend("toAssignableList", function (inner) {
    return function (exprList, isBinding, contextDescription) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];
        if (expr && expr.type === "TypeCastExpression") {
          exprList[i] = this.typeCastToParameter(expr);
        }
      }
      return inner.call(this, exprList, isBinding, contextDescription);
    };
  });

  // this is a list of nodes, from something like a call expression, we need to filter the
  // type casts that we've found that are illegal in this context
  instance.extend("toReferencedList", function () {
    return function (exprList) {
      for (var i = 0; i < exprList.length; i++) {
        var expr = exprList[i];
        if (expr && expr._exprListItem && expr.type === "TypeCastExpression") {
          this.raise(expr.start, "Unexpected type cast");
        }
      }

      return exprList;
    };
  });

  // parse an item inside a expression list eg. `(NODE, NODE)` where NODE represents
  // the position where this function is called
  instance.extend("parseExprListItem", function (inner) {
    return function () {
      var container = this.startNode();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var node = inner.call.apply(inner, [this].concat(args));
      if (this.match(types.colon)) {
        container._exprListItem = true;
        container.expression = node;
        container.typeAnnotation = this.flowParseTypeAnnotation();
        return this.finishNode(container, "TypeCastExpression");
      } else {
        return node;
      }
    };
  });

  instance.extend("checkLVal", function (inner) {
    return function (node) {
      if (node.type !== "TypeCastExpression") {
        return inner.apply(this, arguments);
      }
    };
  });

  // parse class property type annotations
  instance.extend("parseClassProperty", function (inner) {
    return function (node) {
      delete node.variancePos;
      if (this.match(types.colon)) {
        node.typeAnnotation = this.flowParseTypeAnnotation();
      }
      return inner.call(this, node);
    };
  });

  // determine whether or not we're currently in the position where a class property would appear
  instance.extend("isClassProperty", function (inner) {
    return function () {
      return this.match(types.colon) || inner.call(this);
    };
  });

  // parse type parameters for class methods
  instance.extend("parseClassMethod", function (inner) {
    return function (classBody, method) {
      if (method.variance) {
        this.unexpected(method.variancePos);
      }
      delete method.variance;
      delete method.variancePos;
      if (this.isRelational("<")) {
        method.typeParameters = this.flowParseTypeParameterDeclaration();
      }

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      inner.call.apply(inner, [this, classBody, method].concat(args));
    };
  });

  // parse a the super class type parameters and implements
  instance.extend("parseClassSuper", function (inner) {
    return function (node, isStatement) {
      inner.call(this, node, isStatement);
      if (node.superClass && this.isRelational("<")) {
        node.superTypeParameters = this.flowParseTypeParameterInstantiation();
      }
      if (this.isContextual("implements")) {
        this.next();
        var implemented = node.implements = [];
        do {
          var _node = this.startNode();
          _node.id = this.parseIdentifier();
          if (this.isRelational("<")) {
            _node.typeParameters = this.flowParseTypeParameterInstantiation();
          } else {
            _node.typeParameters = null;
          }
          implemented.push(this.finishNode(_node, "ClassImplements"));
        } while (this.eat(types.comma));
      }
    };
  });

  instance.extend("parsePropertyName", function (inner) {
    return function (node) {
      var variancePos = this.state.start;
      var variance = this.flowParseVariance();
      var key = inner.call(this, node);
      node.variance = variance;
      node.variancePos = variancePos;
      return key;
    };
  });

  // parse type parameters for object method shorthand
  instance.extend("parseObjPropValue", function (inner) {
    return function (prop) {
      if (prop.variance) {
        this.unexpected(prop.variancePos);
      }
      delete prop.variance;
      delete prop.variancePos;

      var typeParameters = void 0;

      // method shorthand
      if (this.isRelational("<")) {
        typeParameters = this.flowParseTypeParameterDeclaration();
        if (!this.match(types.parenL)) this.unexpected();
      }

      inner.apply(this, arguments);

      // add typeParameters if we found them
      if (typeParameters) {
        (prop.value || prop).typeParameters = typeParameters;
      }
    };
  });

  instance.extend("parseAssignableListItemTypes", function () {
    return function (param) {
      if (this.eat(types.question)) {
        param.optional = true;
      }
      if (this.match(types.colon)) {
        param.typeAnnotation = this.flowParseTypeAnnotation();
      }
      this.finishNode(param, param.type);
      return param;
    };
  });

  instance.extend("parseMaybeDefault", function (inner) {
    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var node = inner.apply(this, args);

      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
        this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`");
      }

      return node;
    };
  });

  // parse typeof and type imports
  instance.extend("parseImportSpecifiers", function (inner) {
    return function (node) {
      node.importKind = "value";

      var kind = null;
      if (this.match(types._typeof)) {
        kind = "typeof";
      } else if (this.isContextual("type")) {
        kind = "type";
      }
      if (kind) {
        var lh = this.lookahead();
        if (lh.type === types.name && lh.value !== "from" || lh.type === types.braceL || lh.type === types.star) {
          this.next();
          node.importKind = kind;
        }
      }

      inner.call(this, node);
    };
  });

  // parse import-type/typeof shorthand
  instance.extend("parseImportSpecifier", function () {
    return function (node) {
      var specifier = this.startNode();
      var firstIdentLoc = this.state.start;
      var firstIdent = this.parseIdentifier(true);

      var specifierTypeKind = null;
      if (firstIdent.name === "type") {
        specifierTypeKind = "type";
      } else if (firstIdent.name === "typeof") {
        specifierTypeKind = "typeof";
      }

      var isBinding = false;
      if (this.isContextual("as")) {
        var as_ident = this.parseIdentifier(true);
        if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
          // `import {type as ,` or `import {type as }`
          specifier.imported = as_ident;
          specifier.importKind = specifierTypeKind;
          specifier.local = as_ident.__clone();
        } else {
          // `import {type as foo`
          specifier.imported = firstIdent;
          specifier.importKind = null;
          specifier.local = this.parseIdentifier();
        }
      } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
        // `import {type foo`
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;
        if (this.eatContextual("as")) {
          specifier.local = this.parseIdentifier();
        } else {
          isBinding = true;
          specifier.local = specifier.imported.__clone();
        }
      } else {
        isBinding = true;
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = specifier.imported.__clone();
      }

      if ((node.importKind === "type" || node.importKind === "typeof") && (specifier.importKind === "type" || specifier.importKind === "typeof")) {
        this.raise(firstIdentLoc, "`The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements`");
      }

      if (isBinding) this.checkReservedWord(specifier.local.name, specifier.start, true, true);

      this.checkLVal(specifier.local, true, undefined, "import specifier");
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    };
  });

  // parse function type parameters - function foo<T>() {}
  instance.extend("parseFunctionParams", function (inner) {
    return function (node) {
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }
      inner.call(this, node);
    };
  });

  // parse flow type annotations on variable declarator heads - let foo: string = bar
  instance.extend("parseVarHead", function (inner) {
    return function (decl) {
      inner.call(this, decl);
      if (this.match(types.colon)) {
        decl.id.typeAnnotation = this.flowParseTypeAnnotation();
        this.finishNode(decl.id, decl.id.type);
      }
    };
  });

  // parse the return type of an async arrow function - let foo = (async (): number => {});
  instance.extend("parseAsyncArrowFromCallExpression", function (inner) {
    return function (node, call) {
      if (this.match(types.colon)) {
        var oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        node.returnType = this.flowParseTypeAnnotation();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
      }

      return inner.call(this, node, call);
    };
  });

  // todo description
  instance.extend("shouldParseAsyncArrow", function (inner) {
    return function () {
      return this.match(types.colon) || inner.call(this);
    };
  });

  // We need to support type parameter declarations for arrow functions. This
  // is tricky. There are three situations we need to handle
  //
  // 1. This is either JSX or an arrow function. We'll try JSX first. If that
  //    fails, we'll try an arrow function. If that fails, we'll throw the JSX
  //    error.
  // 2. This is an arrow function. We'll parse the type parameter declaration,
  //    parse the rest, make sure the rest is an arrow function, and go from
  //    there
  // 3. This is neither. Just call the inner function
  instance.extend("parseMaybeAssign", function (inner) {
    return function () {
      var jsxError = null;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      if (types.jsxTagStart && this.match(types.jsxTagStart)) {
        var state = this.state.clone();
        try {
          return inner.apply(this, args);
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state;
            jsxError = err;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      // Need to push something onto the context to stop
      // the JSX plugin from messing with the tokens
      this.state.context.push(types$1.parenExpression);
      if (jsxError != null || this.isRelational("<")) {
        var arrowExpression = void 0;
        var typeParameters = void 0;
        try {
          typeParameters = this.flowParseTypeParameterDeclaration();

          arrowExpression = inner.apply(this, args);
          arrowExpression.typeParameters = typeParameters;
          arrowExpression.start = typeParameters.start;
          arrowExpression.loc.start = typeParameters.loc.start;
        } catch (err) {
          throw jsxError || err;
        }

        if (arrowExpression.type === "ArrowFunctionExpression") {
          return arrowExpression;
        } else if (jsxError != null) {
          throw jsxError;
        } else {
          this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
        }
      }
      this.state.context.pop();

      return inner.apply(this, args);
    };
  });

  // handle return types for arrow functions
  instance.extend("parseArrow", function (inner) {
    return function (node) {
      if (this.match(types.colon)) {
        var state = this.state.clone();
        try {
          var oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          var returnType = this.flowParseTypeAndPredicateAnnotation();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;

          if (this.canInsertSemicolon()) this.unexpected();
          if (!this.match(types.arrow)) this.unexpected();
          // assign after it is clear it is an arrow
          node.returnType = returnType;
        } catch (err) {
          if (err instanceof SyntaxError) {
            this.state = state;
          } else {
            // istanbul ignore next: no such error is expected
            throw err;
          }
        }
      }

      return inner.call(this, node);
    };
  });

  instance.extend("shouldParseArrow", function (inner) {
    return function () {
      return this.match(types.colon) || inner.call(this);
    };
  });

  instance.extend("isClassMutatorStarter", function (inner) {
    return function () {
      if (this.isRelational("<")) {
        return true;
      } else {
        return inner.call(this);
      }
    };
  });
};

// Adapted from String.fromcodepoint to export the function without modifying String
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */

// The MIT License (MIT)
// Copyright (c) Mathias Bynens
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
// associated documentation files (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var fromCodePoint = String.fromCodePoint;

if (!fromCodePoint) {
  var stringFromCharCode = String.fromCharCode;
  var floor = Math.floor;
  fromCodePoint = function fromCodePoint() {
    var MAX_SIZE = 0x4000;
    var codeUnits = [];
    var highSurrogate = void 0;
    var lowSurrogate = void 0;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return "";
    }
    var result = "";
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
      codePoint < 0 || // not a valid Unicode code point
      codePoint > 0x10FFFF || // not a valid Unicode code point
      floor(codePoint) != codePoint // not an integer
      ) {
          throw RangeError("Invalid code point: " + codePoint);
        }
      if (codePoint <= 0xFFFF) {
        // BMP code point
        codeUnits.push(codePoint);
      } else {
        // Astral code point; split in surrogate halves
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = codePoint % 0x400 + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
      if (index + 1 == length || codeUnits.length > MAX_SIZE) {
        result += stringFromCharCode.apply(null, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result;
  };
}

var fromCodePoint$1 = fromCodePoint;

var XHTMLEntities = {
  quot: "\"",
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  "int": "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

var HEX_NUMBER = /^[\da-fA-F]+$/;
var DECIMAL_NUMBER = /^\d+$/;

types$1.j_oTag = new TokContext("<tag", false);
types$1.j_cTag = new TokContext("</tag", false);
types$1.j_expr = new TokContext("<tag>...</tag>", true, true);

types.jsxName = new TokenType("jsxName");
types.jsxText = new TokenType("jsxText", { beforeExpr: true });
types.jsxTagStart = new TokenType("jsxTagStart", { startsExpr: true });
types.jsxTagEnd = new TokenType("jsxTagEnd");

types.jsxTagStart.updateContext = function () {
  this.state.context.push(types$1.j_expr); // treat as beginning of JSX expression
  this.state.context.push(types$1.j_oTag); // start opening tag context
  this.state.exprAllowed = false;
};

types.jsxTagEnd.updateContext = function (prevType) {
  var out = this.state.context.pop();
  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
    this.state.context.pop();
    this.state.exprAllowed = this.curContext() === types$1.j_expr;
  } else {
    this.state.exprAllowed = true;
  }
};

var pp$9 = Parser.prototype;

// Reads inline JSX contents token.

pp$9.jsxReadToken = function () {
  var out = "";
  var chunkStart = this.state.pos;
  for (;;) {
    if (this.state.pos >= this.input.length) {
      this.raise(this.state.start, "Unterminated JSX contents");
    }

    var ch = this.input.charCodeAt(this.state.pos);

    switch (ch) {
      case 60: // "<"
      case 123:
        // "{"
        if (this.state.pos === this.state.start) {
          if (ch === 60 && this.state.exprAllowed) {
            ++this.state.pos;
            return this.finishToken(types.jsxTagStart);
          }
          return this.getTokenFromCode(ch);
        }
        out += this.input.slice(chunkStart, this.state.pos);
        return this.finishToken(types.jsxText, out);

      case 38:
        // "&"
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
        break;

      default:
        if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadNewLine(true);
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
    }
  }
};

pp$9.jsxReadNewLine = function (normalizeCRLF) {
  var ch = this.input.charCodeAt(this.state.pos);
  var out = void 0;
  ++this.state.pos;
  if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
    ++this.state.pos;
    out = normalizeCRLF ? "\n" : "\r\n";
  } else {
    out = String.fromCharCode(ch);
  }
  ++this.state.curLine;
  this.state.lineStart = this.state.pos;

  return out;
};

pp$9.jsxReadString = function (quote) {
  var out = "";
  var chunkStart = ++this.state.pos;
  for (;;) {
    if (this.state.pos >= this.input.length) {
      this.raise(this.state.start, "Unterminated string constant");
    }

    var ch = this.input.charCodeAt(this.state.pos);
    if (ch === quote) break;
    if (ch === 38) {
      // "&"
      out += this.input.slice(chunkStart, this.state.pos);
      out += this.jsxReadEntity();
      chunkStart = this.state.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.state.pos);
      out += this.jsxReadNewLine(false);
      chunkStart = this.state.pos;
    } else {
      ++this.state.pos;
    }
  }
  out += this.input.slice(chunkStart, this.state.pos++);
  return this.finishToken(types.string, out);
};

pp$9.jsxReadEntity = function () {
  var str = "";
  var count = 0;
  var entity = void 0;
  var ch = this.input[this.state.pos];

  var startPos = ++this.state.pos;
  while (this.state.pos < this.input.length && count++ < 10) {
    ch = this.input[this.state.pos++];
    if (ch === ";") {
      if (str[0] === "#") {
        if (str[1] === "x") {
          str = str.substr(2);
          if (HEX_NUMBER.test(str)) entity = fromCodePoint$1(parseInt(str, 16));
        } else {
          str = str.substr(1);
          if (DECIMAL_NUMBER.test(str)) entity = fromCodePoint$1(parseInt(str, 10));
        }
      } else {
        entity = XHTMLEntities[str];
      }
      break;
    }
    str += ch;
  }
  if (!entity) {
    this.state.pos = startPos;
    return "&";
  }
  return entity;
};

// Read a JSX identifier (valid tag or attribute name).
//
// Optimized version since JSX identifiers can"t contain
// escape characters and so can be read as single slice.
// Also assumes that first character was already checked
// by isIdentifierStart in readToken.

pp$9.jsxReadWord = function () {
  var ch = void 0;
  var start = this.state.pos;
  do {
    ch = this.input.charCodeAt(++this.state.pos);
  } while (isIdentifierChar(ch) || ch === 45); // "-"
  return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
};

// Transforms JSX element name to string.

function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }
}

// Parse next token as JSX identifier

pp$9.jsxParseIdentifier = function () {
  var node = this.startNode();
  if (this.match(types.jsxName)) {
    node.name = this.state.value;
  } else if (this.state.type.keyword) {
    node.name = this.state.type.keyword;
  } else {
    this.unexpected();
  }
  this.next();
  return this.finishNode(node, "JSXIdentifier");
};

// Parse namespaced identifier.

pp$9.jsxParseNamespacedName = function () {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var name = this.jsxParseIdentifier();
  if (!this.eat(types.colon)) return name;

  var node = this.startNodeAt(startPos, startLoc);
  node.namespace = name;
  node.name = this.jsxParseIdentifier();
  return this.finishNode(node, "JSXNamespacedName");
};

// Parses element name in any form - namespaced, member
// or single identifier.

pp$9.jsxParseElementName = function () {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  var node = this.jsxParseNamespacedName();
  while (this.eat(types.dot)) {
    var newNode = this.startNodeAt(startPos, startLoc);
    newNode.object = node;
    newNode.property = this.jsxParseIdentifier();
    node = this.finishNode(newNode, "JSXMemberExpression");
  }
  return node;
};

// Parses any type of JSX attribute value.

pp$9.jsxParseAttributeValue = function () {
  var node = void 0;
  switch (this.state.type) {
    case types.braceL:
      node = this.jsxParseExpressionContainer();
      if (node.expression.type === "JSXEmptyExpression") {
        this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
      } else {
        return node;
      }

    case types.jsxTagStart:
    case types.string:
      node = this.parseExprAtom();
      node.extra = null;
      return node;

    default:
      this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
  }
};

// JSXEmptyExpression is unique type since it doesn't actually parse anything,
// and so it should start at the end of last read token (left brace) and finish
// at the beginning of the next one (right brace).

pp$9.jsxParseEmptyExpression = function () {
  var node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
  return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
};

// Parse JSX spread child

pp$9.jsxParseSpreadChild = function () {
  var node = this.startNode();
  this.expect(types.braceL);
  this.expect(types.ellipsis);
  node.expression = this.parseExpression();
  this.expect(types.braceR);

  return this.finishNode(node, "JSXSpreadChild");
};

// Parses JSX expression enclosed into curly brackets.


pp$9.jsxParseExpressionContainer = function () {
  var node = this.startNode();
  this.next();
  if (this.match(types.braceR)) {
    node.expression = this.jsxParseEmptyExpression();
  } else {
    node.expression = this.parseExpression();
  }
  this.expect(types.braceR);
  return this.finishNode(node, "JSXExpressionContainer");
};

// Parses following JSX attribute name-value pair.

pp$9.jsxParseAttribute = function () {
  var node = this.startNode();
  if (this.eat(types.braceL)) {
    this.expect(types.ellipsis);
    node.argument = this.parseMaybeAssign();
    this.expect(types.braceR);
    return this.finishNode(node, "JSXSpreadAttribute");
  }
  node.name = this.jsxParseNamespacedName();
  node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
  return this.finishNode(node, "JSXAttribute");
};

// Parses JSX opening tag starting after "<".

pp$9.jsxParseOpeningElementAt = function (startPos, startLoc) {
  var node = this.startNodeAt(startPos, startLoc);
  node.attributes = [];
  node.name = this.jsxParseElementName();
  while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
    node.attributes.push(this.jsxParseAttribute());
  }
  node.selfClosing = this.eat(types.slash);
  this.expect(types.jsxTagEnd);
  return this.finishNode(node, "JSXOpeningElement");
};

// Parses JSX closing tag starting after "</".

pp$9.jsxParseClosingElementAt = function (startPos, startLoc) {
  var node = this.startNodeAt(startPos, startLoc);
  node.name = this.jsxParseElementName();
  this.expect(types.jsxTagEnd);
  return this.finishNode(node, "JSXClosingElement");
};

// Parses entire JSX element, including it"s opening tag
// (starting after "<"), attributes, contents and closing tag.

pp$9.jsxParseElementAt = function (startPos, startLoc) {
  var node = this.startNodeAt(startPos, startLoc);
  var children = [];
  var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
  var closingElement = null;

  if (!openingElement.selfClosing) {
    contents: for (;;) {
      switch (this.state.type) {
        case types.jsxTagStart:
          startPos = this.state.start;startLoc = this.state.startLoc;
          this.next();
          if (this.eat(types.slash)) {
            closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
            break contents;
          }
          children.push(this.jsxParseElementAt(startPos, startLoc));
          break;

        case types.jsxText:
          children.push(this.parseExprAtom());
          break;

        case types.braceL:
          if (this.lookahead().type === types.ellipsis) {
            children.push(this.jsxParseSpreadChild());
          } else {
            children.push(this.jsxParseExpressionContainer());
          }

          break;

        // istanbul ignore next - should never happen
        default:
          this.unexpected();
      }
    }

    if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
      this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
    }
  }

  node.openingElement = openingElement;
  node.closingElement = closingElement;
  node.children = children;
  if (this.match(types.relational) && this.state.value === "<") {
    this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
  }
  return this.finishNode(node, "JSXElement");
};

// Parses entire JSX element from current position.

pp$9.jsxParseElement = function () {
  var startPos = this.state.start;
  var startLoc = this.state.startLoc;
  this.next();
  return this.jsxParseElementAt(startPos, startLoc);
};

var jsxPlugin = function (instance) {
  instance.extend("parseExprAtom", function (inner) {
    return function (refShortHandDefaultPos) {
      if (this.match(types.jsxText)) {
        var node = this.parseLiteral(this.state.value, "JSXText");
        // https://github.com/babel/babel/issues/2078
        node.extra = null;
        return node;
      } else if (this.match(types.jsxTagStart)) {
        return this.jsxParseElement();
      } else {
        return inner.call(this, refShortHandDefaultPos);
      }
    };
  });

  instance.extend("readToken", function (inner) {
    return function (code) {
      if (this.state.inPropertyName) return inner.call(this, code);

      var context = this.curContext();

      if (context === types$1.j_expr) {
        return this.jsxReadToken();
      }

      if (context === types$1.j_oTag || context === types$1.j_cTag) {
        if (isIdentifierStart(code)) {
          return this.jsxReadWord();
        }

        if (code === 62) {
          ++this.state.pos;
          return this.finishToken(types.jsxTagEnd);
        }

        if ((code === 34 || code === 39) && context === types$1.j_oTag) {
          return this.jsxReadString(code);
        }
      }

      if (code === 60 && this.state.exprAllowed) {
        ++this.state.pos;
        return this.finishToken(types.jsxTagStart);
      }

      return inner.call(this, code);
    };
  });

  instance.extend("updateContext", function (inner) {
    return function (prevType) {
      if (this.match(types.braceL)) {
        var curContext = this.curContext();
        if (curContext === types$1.j_oTag) {
          this.state.context.push(types$1.braceExpression);
        } else if (curContext === types$1.j_expr) {
          this.state.context.push(types$1.templateQuasi);
        } else {
          inner.call(this, prevType);
        }
        this.state.exprAllowed = true;
      } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
        this.state.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
        this.state.context.push(types$1.j_cTag); // reconsider as closing tag context
        this.state.exprAllowed = false;
      } else {
        return inner.call(this, prevType);
      }
    };
  });
};

plugins.estree = estreePlugin;
plugins.flow = flowPlugin;
plugins.jsx = jsxPlugin;

function parse(input, options) {
  return new Parser(options, input).parse();
}

function parseExpression(input, options) {
  var parser = new Parser(options, input);
  if (parser.options.strictMode) {
    parser.state.strict = true;
  }
  return parser.getExpression();
}

exports.parse = parse;
exports.parseExpression = parseExpression;
exports.tokTypes = types;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceToken = (function () {
    function SourceToken(type, start, end) {
        if (start > end) {
            throw new Error("Token start may not be after end. Got " + type + ", " + start + ", " + end);
        }
        this.type = type;
        this.start = start;
        this.end = end;
    }
    return SourceToken;
}());
exports["default"] = SourceToken;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceTokenListIndex_1 = __webpack_require__(18);
var SourceType_1 = __webpack_require__(0);
/**
 * Represents a list of tokens and provides various utility functions for
 * finding tokens within it.
 */
var SourceTokenList = (function () {
    function SourceTokenList(tokens) {
        this._validateTokens(tokens);
        this._tokens = tokens;
        this._indexCache = new Array(tokens.length);
        this.length = tokens.length;
        this.startIndex = this._getIndex(0);
        this.endIndex = this._getIndex(tokens.length);
        // Precompute sparse arrays to do source-to-token mappings later. Iterate
        // backwards through the tokens so that earlier tokens win ties.
        this._indexBySourceIndex = [];
        this._indexByStartSourceIndex = [];
        this._indexByEndSourceIndex = [];
        for (var tokenIndex = tokens.length - 1; tokenIndex >= 0; tokenIndex--) {
            var token = tokens[tokenIndex];
            for (var sourceIndex = token.start; sourceIndex < token.end; sourceIndex++) {
                this._indexBySourceIndex[sourceIndex] = this._getIndex(tokenIndex);
            }
            this._indexByStartSourceIndex[token.start] = this._getIndex(tokenIndex);
            this._indexByEndSourceIndex[token.end] = this._getIndex(tokenIndex);
        }
    }
    /**
     * Iterate over each token.
     */
    SourceTokenList.prototype.forEach = function (iterator) {
        var _this = this;
        this._tokens.forEach(function (token, i) { return iterator(token, _this._getIndex(i), _this); });
    };
    /**
     * Map each token to an element of an array.
     */
    SourceTokenList.prototype.map = function (mapper) {
        var result = [];
        this.forEach(function (token, index, list) { result.push(mapper(token, index, list)); });
        return result;
    };
    /**
     * Filter tokens by a predicate.
     */
    SourceTokenList.prototype.filter = function (predicate) {
        var result = [];
        this.forEach(function (token, index, list) {
            if (predicate(token, index, list)) {
                result.push(token);
            }
        });
        return new SourceTokenList(result);
    };
    /**
     * Get a slice of this token list using the given indexes.
     */
    SourceTokenList.prototype.slice = function (start, end) {
        if (start['_sourceTokenList'] !== this || end['_sourceTokenList'] !== this) {
            throw new Error('cannot slice a list using indexes from another list');
        }
        return new SourceTokenList(this._tokens.slice(start['_index'], end['_index']));
    };
    /**
     * Get the token at the given index, if it exists.
     *
     * NOTE: The only value for which this should return `null` is this list's
     * `endIndex`.
     */
    SourceTokenList.prototype.tokenAtIndex = function (index) {
        this._validateIndex(index);
        return this._tokens[index['_index']] || null;
    };
    /**
     * Get the range of tokens representing an interpolated string that contains
     * the token at `index`. This will return the innermost interpolated string in
     * the case of nesting.
     */
    SourceTokenList.prototype.rangeOfInterpolatedStringTokensContainingTokenIndex = function (index) {
        var bestRange = null;
        for (var _i = 0, _a = [
            [SourceType_1["default"].DSTRING_START, SourceType_1["default"].DSTRING_END], [SourceType_1["default"].TDSTRING_START, SourceType_1["default"].TDSTRING_END], [SourceType_1["default"].HEREGEXP_START, SourceType_1["default"].HEREGEXP_END]
        ]; _i < _a.length; _i++) {
            var _b = _a[_i], startType = _b[0], endType = _b[1];
            var range = this.rangeOfMatchingTokensContainingTokenIndex(startType, endType, index);
            if (bestRange === null || bestRange === undefined ||
                (range !== null && range !== undefined &&
                    range[0].distance(range[1]) < bestRange[0].distance(bestRange[1]))) {
                bestRange = range;
            }
        }
        return bestRange;
    };
    /**
     * Get the range of tokens starting with a token of type `startType` and
     * ending one past a token of type `endType`, ensuring that the tokens match.
     * That is, it ensures they are balanced and properly account for nesting.
     * This range will contain `index`. If no such range can be found, `null` is
     * returned.
     */
    SourceTokenList.prototype.rangeOfMatchingTokensContainingTokenIndex = function (startType, endType, index) {
        this._validateIndex(index);
        var token = this.tokenAtIndex(index);
        if (!token) {
            return null;
        }
        switch (token.type) {
            case startType:
                {
                    var level_1 = 0;
                    var start = index;
                    var endIndex = this.indexOfTokenMatchingPredicate(function (token) {
                        if (token.type === startType) {
                            level_1 += 1;
                        }
                        else if (token.type === endType) {
                            level_1 -= 1;
                            if (level_1 === 0) {
                                return true;
                            }
                        }
                        return false;
                    }, start);
                    if (!endIndex) {
                        return null;
                    }
                    else {
                        var rangeEnd = endIndex.next();
                        if (!rangeEnd) {
                            return null;
                        }
                        return [start, rangeEnd];
                    }
                }
            case endType:
                {
                    var level_2 = 0;
                    var endIndex = index;
                    var startIndex = this.lastIndexOfTokenMatchingPredicate(function (token) {
                        if (token.type === startType) {
                            level_2 -= 1;
                            if (level_2 === 0) {
                                return true;
                            }
                        }
                        else if (token.type === endType) {
                            level_2 += 1;
                        }
                        return false;
                    }, endIndex);
                    if (!startIndex) {
                        return null;
                    }
                    else {
                        var rangeEnd = endIndex.next();
                        if (!rangeEnd) {
                            return null;
                        }
                        else {
                            return [startIndex, rangeEnd];
                        }
                    }
                }
            default:
                {
                    var level_3 = 0;
                    var startIndex = this.lastIndexOfTokenMatchingPredicate(function (token) {
                        if (token.type === startType) {
                            if (level_3 === 0) {
                                return true;
                            }
                            level_3 -= 1;
                        }
                        else if (token.type === endType) {
                            level_3 += 1;
                        }
                        return false;
                    }, index);
                    if (!startIndex) {
                        return null;
                    }
                    else {
                        return this.rangeOfMatchingTokensContainingTokenIndex(startType, endType, startIndex);
                    }
                }
        }
    };
    /**
     * Finds the index of the token whose source range includes the given index.
     * If the given index does not correspond to the range of a token, returns
     * null.
     */
    SourceTokenList.prototype.indexOfTokenContainingSourceIndex = function (index) {
        this._validateSourceIndex(index);
        return this._indexBySourceIndex[index] || null;
    };
    /**
     * If the given source index lands on a token, return the index of that token.
     * Otherwise, return the index of the previous token in the source code, or
     * the first token if there is no previous token.
     */
    SourceTokenList.prototype.indexOfTokenNearSourceIndex = function (index) {
        this._validateSourceIndex(index);
        for (var searchIndex = index; searchIndex >= 0; searchIndex--) {
            var tokenIndex = this._indexBySourceIndex[searchIndex];
            if (tokenIndex) {
                return tokenIndex;
            }
        }
        return this.startIndex;
    };
    /**
     * Finds the index of the token whose source range starts at the given index.
     */
    SourceTokenList.prototype.indexOfTokenStartingAtSourceIndex = function (index) {
        this._validateSourceIndex(index);
        return this._indexByStartSourceIndex[index] || null;
    };
    /**
     * Finds the index of the token whose source range ends at the given index.
     */
    SourceTokenList.prototype.indexOfTokenEndingAtSourceIndex = function (index) {
        this._validateSourceIndex(index);
        return this._indexByEndSourceIndex[index] || null;
    };
    /**
     * Finds the index of the first token matching a predicate.
     */
    SourceTokenList.prototype.indexOfTokenMatchingPredicate = function (predicate, start, end) {
        if (start === void 0) { start = null; }
        if (end === void 0) { end = null; }
        if (!start) {
            start = this.startIndex;
        }
        if (!end) {
            end = this.endIndex;
        }
        this._validateIndex(start);
        this._validateIndex(end);
        for (var i = start; i && i !== end; i = i.next()) {
            var token = this.tokenAtIndex(i);
            if (!token) {
                break;
            }
            else if (predicate(token)) {
                return i;
            }
        }
        return null;
    };
    /**
     * Finds the index of the first token matching a predicate, traversing
     * backwards.
     */
    SourceTokenList.prototype.lastIndexOfTokenMatchingPredicate = function (predicate, start, end) {
        if (start === void 0) { start = null; }
        if (end === void 0) { end = null; }
        if (!start) {
            start = this.endIndex.previous();
            if (!start) {
                return null;
            }
        }
        this._validateIndex(start);
        if (end) {
            this._validateIndex(end);
        }
        var i = start;
        do {
            var token = this.tokenAtIndex(i);
            if (!token) {
                break;
            }
            else if (predicate(token)) {
                return i;
            }
            else if (i) {
                i = i.previous();
            }
        } while (i && i !== end);
        return null;
    };
    /**
     * Allow iterating over the tokens in this list using e.g. `for (… of …)`.
     */
    SourceTokenList.prototype[Symbol.iterator] = function () {
        var _this = this;
        var index = this.startIndex;
        var endIndex = this.endIndex;
        return function () {
            if (index === endIndex) {
                return { done: true, value: undefined };
            }
            else {
                var result = { done: false, value: _this.tokenAtIndex(index) };
                var nextIndex = index.next();
                if (!nextIndex) {
                    throw new Error("unexpected null index before the end index");
                }
                index = nextIndex;
                return result;
            }
        };
    };
    /**
     * @internal
     */
    SourceTokenList.prototype._validateTokens = function (tokens) {
        for (var i = 0; i < tokens.length - 1; i++) {
            if (tokens[i].end > tokens[i + 1].start) {
                throw new Error("Tokens not in order. Expected " + JSON.stringify(tokens[i]) + " before " +
                    ("" + JSON.stringify(tokens[i + 1])));
            }
        }
    };
    /**
     * @internal
     */
    SourceTokenList.prototype._validateIndex = function (index) {
        if (!index) {
            throw new Error("unexpected 'null' index, perhaps you forgot to check the result of " +
                "'indexOfTokenContainingSourceIndex'?");
        }
        if (typeof index === 'number') {
            throw new Error("to get a token at index " + index + ", " +
                ("use list.tokenAtIndex(list.startIndex.advance(" + index + "))"));
        }
        if (index['_sourceTokenList'] !== this) {
            throw new Error('cannot get token in one list using an index from another');
        }
    };
    /**
     * @internal
     */
    SourceTokenList.prototype._validateSourceIndex = function (index) {
        if (typeof index !== 'number') {
            throw new Error("expected source index to be a number, got: " + index);
        }
    };
    /**
     * @internal
     */
    SourceTokenList.prototype._getIndex = function (index) {
        var cached = this._indexCache[index];
        if (!cached) {
            cached = new SourceTokenListIndex_1["default"](this, index);
            this._indexCache[index] = cached;
        }
        return cached;
    };
    /**
     * Get the list of tokens.
     */
    SourceTokenList.prototype.toArray = function () {
        return this._tokens.slice();
    };
    return SourceTokenList;
}());
exports["default"] = SourceTokenList;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Represents a token at a particular index within a list of tokens.
 */
var SourceTokenListIndex = (function () {
    function SourceTokenListIndex(sourceTokenList, index) {
        this._sourceTokenList = sourceTokenList;
        this._index = index;
    }
    /**
     * Get a new index offset from this one, if the resulting offset is within
     * the list range.
     */
    SourceTokenListIndex.prototype.advance = function (offset) {
        var newIndex = this._index + offset;
        if (newIndex < 0 || this._sourceTokenList.length < newIndex) {
            return null;
        }
        return this._sourceTokenList['_getIndex'](newIndex);
    };
    /**
     * Get the index of the token after this one, if it's not the last one.
     */
    SourceTokenListIndex.prototype.next = function () {
        return this.advance(1);
    };
    /**
     * Get the index of the token before this one, if it's not the first one.
     */
    SourceTokenListIndex.prototype.previous = function () {
        return this.advance(-1);
    };
    /**
     * Determines whether this index comes before another.
     */
    SourceTokenListIndex.prototype.isBefore = function (other) {
        return this.compare(other) > 0;
    };
    /**
     * Determines whether this index comes after another.
     */
    SourceTokenListIndex.prototype.isAfter = function (other) {
        return this.compare(other) < 0;
    };
    /**
     * Compare this index to another, returning 0 for equality, a negative number
     * if this is less than `other`, and a positive number otherwise.
     */
    SourceTokenListIndex.prototype.compare = function (other) {
        return this.distance(other);
    };
    /**
     * Returns an int of the relative distance between this index and the other
     * index (positive if the other one is later, negative if the other one is
     * earlier).
     */
    SourceTokenListIndex.prototype.distance = function (other) {
        if (other._sourceTokenList !== this._sourceTokenList) {
            throw new Error('cannot compare indexes from different lists');
        }
        return other._index - this._index;
    };
    return SourceTokenListIndex;
}());
exports["default"] = SourceTokenListIndex;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BufferedStream = (function () {
    function BufferedStream(stream) {
        this.pending = [];
        this._getNextLocation = stream;
    }
    BufferedStream.prototype.shift = function () {
        return this.pending.shift() || this._getNextLocation();
    };
    BufferedStream.prototype.hasNext = function () {
        var _this = this;
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        var locationsToPutBack = [];
        var result = types.every(function (type) {
            var next = _this.shift();
            locationsToPutBack.push(next);
            return next.type === type;
        });
        this.unshift.apply(this, locationsToPutBack);
        return result;
    };
    BufferedStream.prototype.peek = function () {
        var result = this.shift();
        this.unshift(result);
        return result;
    };
    BufferedStream.prototype.unshift = function () {
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        (_a = this.pending).unshift.apply(_a, tokens);
        var _a;
    };
    return BufferedStream;
}());
exports["default"] = BufferedStream;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceType_1 = __webpack_require__(0);
var PaddingTracker_1 = __webpack_require__(3);
/**
 * Compute the whitespace to remove in a heregexp. All unescaped whitespace
 * characters are removed, and comments are respected.
 */
function calculateHeregexpPadding(source, stream) {
    if (!stream.hasNext(SourceType_1["default"].HEREGEXP_START)) {
        return [];
    }
    var paddingTracker = new PaddingTracker_1["default"](source, stream, SourceType_1["default"].HEREGEXP_END);
    for (var _i = 0, _a = paddingTracker.fragments; _i < _a.length; _i++) {
        var fragment = _a[_i];
        var content = fragment.content;
        var pos = 0;
        while (pos < content.length) {
            if (/\s/.test(content[pos])) {
                if (isWhitespaceEscaped(content, pos)) {
                    // The escape character should be removed instead of the space.
                    fragment.markPadding(pos - 1, pos);
                }
                else {
                    fragment.markPadding(pos, pos + 1);
                }
                pos++;
            }
            else if (content[pos] === '#' && (pos === 0 || /\s/.test(content[pos - 1]))) {
                var commentStart = pos;
                while (pos < content.length && content[pos] !== '\n') {
                    pos++;
                }
                fragment.markPadding(commentStart, pos);
            }
            else {
                pos++;
            }
        }
    }
    return paddingTracker.computeSourceLocations();
}
exports["default"] = calculateHeregexpPadding;
/**
 * A space, tab, or newline is escaped if it is preceded by an odd number of
 * backslashes.
 */
function isWhitespaceEscaped(content, whitespacePos) {
    var prevPos = whitespacePos - 1;
    while (prevPos >= 0 && content[prevPos] === '\\') {
        prevPos--;
    }
    return (whitespacePos - prevPos) % 2 === 0;
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceType_1 = __webpack_require__(0);
var PaddingTracker_1 = __webpack_require__(3);
/**
 * Compute the whitespace to remove in a multiline single or double quoted
 * string. The algorithm naturally handles handles the case of a string without
 * newlines, so we don't need a special case for that. We also generally need to
 * mark newlines as "line separators" so that later they will be turned into
 * spaces, and extra whitespace at the start and end of each line (except the
 * start of the first line and the end of the last line) is ignored.
 */
function calculateNormalStringPadding(source, stream) {
    var paddingTracker;
    if (stream.hasNext(SourceType_1["default"].SSTRING_START)) {
        paddingTracker = new PaddingTracker_1["default"](source, stream, SourceType_1["default"].SSTRING_END);
    }
    else if (stream.hasNext(SourceType_1["default"].DSTRING_START)) {
        paddingTracker = new PaddingTracker_1["default"](source, stream, SourceType_1["default"].DSTRING_END);
    }
    else {
        return [];
    }
    // The general strategy is to find each newline character and mark it as a
    // line separator and mark all surrounding whitespace as padding.
    for (var fragmentIndex = 0; fragmentIndex < paddingTracker.fragments.length; fragmentIndex++) {
        var fragment = paddingTracker.fragments[fragmentIndex];
        var content = fragment.content;
        var lastNonWhitespace = -1;
        var pos = 0;
        while (pos < content.length) {
            if (content[pos] === '\n') {
                var startIndex = lastNonWhitespace + 1;
                fragment.markPadding(lastNonWhitespace + 1, pos);
                var newlinePos = pos;
                pos++;
                // Search forward until the next non-whitespace character. Even skip
                // newlines, so that two or more newlines with only spaces between them
                // will result in a single line separator.
                while (pos < content.length &&
                    (content[pos] === ' ' || content[pos] === '\t' || content[pos] === '\n')) {
                    pos++;
                }
                var endIndex = pos;
                if (isNewlineEscaped(content, newlinePos)) {
                    // Escaped newlines behave a bit strangely: whitespace is removed from
                    // the right side but not the left side, and the newline and its
                    // escape character are removed.
                    var backslashPos = content.lastIndexOf('\\', newlinePos);
                    fragment.markPadding(backslashPos, endIndex);
                }
                else if ((fragmentIndex === 0 && startIndex === 0) ||
                    (fragmentIndex === paddingTracker.fragments.length - 1 && endIndex === content.length)) {
                    // We only want spaces between, not around, lines, so if we're up
                    // against the left side or right side of the string, mark the newline
                    // as padding.
                    fragment.markPadding(startIndex, endIndex);
                }
                else {
                    // Otherwise, the newline should be a line separator that will become
                    // a space and everything else should be padding.
                    fragment.markPadding(startIndex, newlinePos);
                    fragment.markLineSeparator(newlinePos);
                    fragment.markPadding(newlinePos + 1, endIndex);
                }
                lastNonWhitespace = pos;
            }
            else {
                if (content[pos] !== ' ' && content[pos] !== '\t') {
                    lastNonWhitespace = pos;
                }
                pos++;
            }
        }
    }
    return paddingTracker.computeSourceLocations();
}
exports["default"] = calculateNormalStringPadding;
/**
 * A newline character is escaped if it's preceded by an odd number of
 * backslashes. Spaces are allowed between the backslashes and the newline.
 */
function isNewlineEscaped(content, newlinePos) {
    var numSeenBackslashes = 0;
    var prevPos = newlinePos - 1;
    while (prevPos >= 0) {
        var char = content[prevPos];
        if (numSeenBackslashes === 0 && (char === ' ' || char === '\t')) {
            prevPos--;
        }
        else if (char === '\\') {
            numSeenBackslashes++;
            prevPos--;
        }
        else {
            break;
        }
    }
    return numSeenBackslashes % 2 === 1;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SourceType_1 = __webpack_require__(0);
var PaddingTracker_1 = __webpack_require__(3);
/**
 * Compute the padding (the extra spacing to remove) for the given herestring.
 *
 * CoffeeScript removes spacing in the following situations:
 * - If the first or last line is completely blank, it is removed.
 * - The "common leading whitespace" is removed from each line if possible. This
 *   is computed by taking the smallest nonzero amount of leading whitespace
 *   among all lines except the partial line immediately after the open quotes
 *   and except lines that consist only of whitespace. Note that this "smallest
 *   nonzero amount" behavior doesn't just ignore blank lines; *any* line with
 *   no leading whitespace will be ignored when calculating this value. Even
 *   though the initial partial line has no effect when computing leading
 *   whitespace, the common leading whitespace is still removed from that line
 *   if possible.
 * - Due to a bug in CoffeeScript, if the first full line (the one after the
 *   partial line) is nonempty and has indent zero, the entire string is
 *   considered to have "common leading whitespace" zero.
 * - Due to another bug in CoffeeScript, if the herestring has exactly two lines
 *   that both consist of only whitespace, the whitespace and newline is removed
 *   from the first line, but the second line keeps all of its whitespace.
 *
 * See the stringToken function in lexer.coffee in the CoffeeScript source code
 * for CoffeeScript's implementation of this.
 */
function calculateTripleQuotedStringPadding(source, stream) {
    var paddingTracker;
    if (stream.hasNext(SourceType_1["default"].TSSTRING_START)) {
        paddingTracker = new PaddingTracker_1["default"](source, stream, SourceType_1["default"].TSSTRING_END);
    }
    else if (stream.hasNext(SourceType_1["default"].TDSTRING_START)) {
        paddingTracker = new PaddingTracker_1["default"](source, stream, SourceType_1["default"].TDSTRING_END);
    }
    else {
        return [];
    }
    var firstFragment = paddingTracker.fragments[0];
    var firstContent = firstFragment.content;
    var lastFragment = paddingTracker.fragments[paddingTracker.fragments.length - 1];
    var lastContent = lastFragment.content;
    var sharedIndent = getIndentForFragments(paddingTracker.fragments);
    if (firstContent.indexOf('\n') > -1 && isWhitespace(firstContent.split('\n')[0])) {
        firstFragment.markPadding(0, firstContent.indexOf('\n') + 1);
    }
    if (!shouldSkipRemovingLastLine(paddingTracker)) {
        var lastLines = lastContent.split('\n');
        if (lastLines.length > 1) {
            var lastLine = lastLines[lastLines.length - 1];
            if (isWhitespace(lastLine)) {
                lastFragment.markPadding(lastFragment.content.length - lastLine.length - 1, lastFragment.content.length);
            }
        }
    }
    for (var _i = 0, _a = paddingTracker.fragments; _i < _a.length; _i++) {
        var fragment = _a[_i];
        for (var i = 0; i < fragment.content.length; i++) {
            var isStartOfLine = i > 0 && fragment.content[i - 1] === '\n';
            var isStartOfString = fragment.index === 0 && i === 0;
            if (isStartOfLine || isStartOfString) {
                var paddingStart = i;
                var paddingEnd = i + sharedIndent.length;
                if (fragment.content.slice(paddingStart, paddingEnd) === sharedIndent) {
                    fragment.markPadding(paddingStart, paddingEnd);
                }
            }
        }
    }
    return paddingTracker.computeSourceLocations();
}
exports["default"] = calculateTripleQuotedStringPadding;
function getIndentForFragments(fragments) {
    var hasSeenLine = false;
    var smallestIndent = null;
    for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
        var fragment = fragments_1[_i];
        var lines = fragment.content.split('\n');
        for (var i = 1; i < lines.length; i++) {
            var line = lines[i];
            var indent = getLineIndent(line);
            // Replicate a bug in CoffeeScript: if the first line considered has
            // indentation zero and is nonempty, the empty indentation isn't ignored
            // like it should be, so the empty string is used as the indentation.
            if (!hasSeenLine && indent.length === 0 && line.length > 0) {
                return '';
            }
            hasSeenLine = true;
            var isFullLine = i < lines.length - 1 || fragment.index === fragments.length - 1;
            // Ignore zero-indentation lines and whitespace-only lines.
            if (indent.length === 0 || (isFullLine && indent === line)) {
                continue;
            }
            if (smallestIndent === null || indent.length < smallestIndent.length) {
                smallestIndent = indent;
            }
        }
    }
    if (smallestIndent === null) {
        return '';
    }
    return smallestIndent;
}
/**
 * Replicate a bug in CoffeeScript: if the string is whitespace-only with
 * exactly two lines, we run the code to remove the first line but not the last
 * line.
 */
function shouldSkipRemovingLastLine(paddingTracker) {
    if (paddingTracker.fragments.length !== 1) {
        return false;
    }
    var lines = paddingTracker.fragments[0].content.split('\n');
    return lines.length === 2 && isWhitespace(lines[0]) && isWhitespace(lines[1]);
}
function getLineIndent(line) {
    var match = /[^\n\S]*/.exec(line);
    if (match) {
        return match[0];
    }
    else {
        return '';
    }
}
function isWhitespace(line) {
    return /^[^\n\S]*$/.test(line);
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: D:\\dev\\projects\\bennyn\\coffeedoc2jsdoc\\node_modules\\decaffeinate-coffeescript\\bin\\coffee Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| #!/usr/bin/env node\n| \n| var path = require('path');");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,20],$V1=[1,75],$V2=[1,71],$V3=[1,76],$V4=[1,77],$V5=[1,73],$V6=[1,74],$V7=[1,50],$V8=[1,52],$V9=[1,53],$Va=[1,54],$Vb=[1,55],$Vc=[1,45],$Vd=[1,46],$Ve=[1,27],$Vf=[1,60],$Vg=[1,61],$Vh=[1,70],$Vi=[1,43],$Vj=[1,26],$Vk=[1,58],$Vl=[1,59],$Vm=[1,57],$Vn=[1,38],$Vo=[1,44],$Vp=[1,56],$Vq=[1,65],$Vr=[1,66],$Vs=[1,67],$Vt=[1,68],$Vu=[1,42],$Vv=[1,64],$Vw=[1,29],$Vx=[1,30],$Vy=[1,31],$Vz=[1,32],$VA=[1,33],$VB=[1,34],$VC=[1,35],$VD=[1,78],$VE=[1,6,26,34,109],$VF=[1,93],$VG=[1,81],$VH=[1,80],$VI=[1,79],$VJ=[1,82],$VK=[1,83],$VL=[1,84],$VM=[1,85],$VN=[1,86],$VO=[1,87],$VP=[1,88],$VQ=[1,89],$VR=[1,90],$VS=[1,91],$VT=[1,92],$VU=[1,96],$VV=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$VW=[1,102],$VX=[1,103],$VY=[1,104],$VZ=[1,105],$V_=[1,107],$V$=[1,108],$V01=[1,101],$V11=[2,115],$V21=[1,6,25,26,34,56,61,64,73,74,75,76,78,80,81,85,91,92,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$V31=[2,82],$V41=[1,113],$V51=[2,61],$V61=[1,117],$V71=[1,122],$V81=[1,123],$V91=[1,125],$Va1=[1,6,25,26,34,46,56,61,64,73,74,75,76,78,80,81,85,91,92,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$Vb1=[2,79],$Vc1=[1,6,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$Vd1=[1,160],$Ve1=[1,162],$Vf1=[1,157],$Vg1=[1,6,25,26,34,46,56,61,64,73,74,75,76,78,80,81,85,87,91,92,93,98,100,109,111,112,113,117,118,133,136,137,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154],$Vh1=[2,98],$Vi1=[1,6,25,26,34,49,56,61,64,73,74,75,76,78,80,81,85,91,92,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$Vj1=[1,6,25,26,34,46,49,56,61,64,73,74,75,76,78,80,81,85,87,91,92,93,98,100,109,111,112,113,117,118,124,125,133,136,137,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154],$Vk1=[1,217],$Vl1=[1,216],$Vm1=[1,6,25,26,34,38,56,61,64,73,74,75,76,78,80,81,85,91,92,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$Vn1=[2,59],$Vo1=[1,227],$Vp1=[6,25,26,56,61],$Vq1=[6,25,26,46,56,61,64],$Vr1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,136,137,143,145,146,147,148,149,150,151,152,153],$Vs1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133],$Vt1=[73,74,75,76,78,81,91,92],$Vu1=[1,246],$Vv1=[2,136],$Vw1=[1,6,25,26,34,46,56,61,64,73,74,75,76,78,80,81,85,91,92,93,98,100,109,111,112,113,117,118,124,125,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$Vx1=[1,255],$Vy1=[6,25,26,61,93,98],$Vz1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,118,133],$VA1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,112,118,133],$VB1=[124,125],$VC1=[61,124,125],$VD1=[1,266],$VE1=[6,25,26,61,85],$VF1=[6,25,26,49,61,85],$VG1=[6,25,26,46,49,61,85],$VH1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,136,137,145,146,147,148,149,150,151,152,153],$VI1=[11,28,30,32,33,36,37,40,41,42,43,44,52,53,54,58,59,80,83,86,90,95,96,97,103,107,108,111,113,115,117,126,132,134,135,136,137,138,140,141],$VJ1=[2,125],$VK1=[6,25,26],$VL1=[2,60],$VM1=[1,280],$VN1=[1,281],$VO1=[1,6,25,26,34,56,61,64,80,85,93,98,100,105,106,109,111,112,113,117,118,128,130,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$VP1=[26,128,130],$VQ1=[1,6,26,34,56,61,64,80,85,93,98,100,109,112,118,133],$VR1=[2,74],$VS1=[1,303],$VT1=[1,304],$VU1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,128,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$VV1=[1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,113,117,118,133],$VW1=[1,315],$VX1=[1,316],$VY1=[6,25,26,61],$VZ1=[1,6,25,26,34,56,61,64,80,85,93,98,100,105,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],$V_1=[25,61];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Body":4,"Line":5,"TERMINATOR":6,"Expression":7,"Statement":8,"Return":9,"Comment":10,"STATEMENT":11,"Value":12,"Invocation":13,"Code":14,"Operation":15,"Assign":16,"If":17,"Try":18,"While":19,"For":20,"Switch":21,"Class":22,"Throw":23,"Block":24,"INDENT":25,"OUTDENT":26,"Identifier":27,"IDENTIFIER":28,"AlphaNumeric":29,"NUMBER":30,"String":31,"STRING":32,"STRING_START":33,"STRING_END":34,"Regex":35,"REGEX":36,"REGEX_START":37,"REGEX_END":38,"Literal":39,"JS":40,"DEBUGGER":41,"UNDEFINED":42,"NULL":43,"BOOL":44,"Assignable":45,"=":46,"AssignObj":47,"ObjAssignable":48,":":49,"SimpleObjAssignable":50,"ThisProperty":51,"RETURN":52,"HERECOMMENT":53,"PARAM_START":54,"ParamList":55,"PARAM_END":56,"FuncGlyph":57,"->":58,"=>":59,"OptComma":60,",":61,"Param":62,"ParamVar":63,"...":64,"Array":65,"Object":66,"Splat":67,"SimpleAssignable":68,"Accessor":69,"Parenthetical":70,"Range":71,"This":72,".":73,"?.":74,"::":75,"?::":76,"Index":77,"INDEX_START":78,"IndexValue":79,"INDEX_END":80,"INDEX_SOAK":81,"Slice":82,"{":83,"AssignList":84,"}":85,"CLASS":86,"EXTENDS":87,"OptFuncExist":88,"Arguments":89,"SUPER":90,"FUNC_EXIST":91,"CALL_START":92,"CALL_END":93,"ArgList":94,"THIS":95,"@":96,"[":97,"]":98,"RangeDots":99,"..":100,"Arg":101,"SimpleArgs":102,"TRY":103,"Catch":104,"FINALLY":105,"CATCH":106,"THROW":107,"(":108,")":109,"WhileSource":110,"WHILE":111,"WHEN":112,"UNTIL":113,"Loop":114,"LOOP":115,"ForBody":116,"FOR":117,"BY":118,"ForStart":119,"ForSource":120,"ForVariables":121,"OWN":122,"ForValue":123,"FORIN":124,"FOROF":125,"SWITCH":126,"Whens":127,"ELSE":128,"When":129,"LEADING_WHEN":130,"IfBlock":131,"IF":132,"POST_IF":133,"UNARY":134,"UNARY_MATH":135,"-":136,"+":137,"YIELD":138,"FROM":139,"--":140,"++":141,"?":142,"MATH":143,"**":144,"SHIFT":145,"COMPARE":146,"&":147,"^":148,"|":149,"&&":150,"||":151,"BIN?":152,"RELATION":153,"COMPOUND_ASSIGN":154,"$accept":0,"$end":1},
terminals_: {2:"error",6:"TERMINATOR",11:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",32:"STRING",33:"STRING_START",34:"STRING_END",36:"REGEX",37:"REGEX_START",38:"REGEX_END",40:"JS",41:"DEBUGGER",42:"UNDEFINED",43:"NULL",44:"BOOL",46:"=",49:":",52:"RETURN",53:"HERECOMMENT",54:"PARAM_START",56:"PARAM_END",58:"->",59:"=>",61:",",64:"...",73:".",74:"?.",75:"::",76:"?::",78:"INDEX_START",80:"INDEX_END",81:"INDEX_SOAK",83:"{",85:"}",86:"CLASS",87:"EXTENDS",90:"SUPER",91:"FUNC_EXIST",92:"CALL_START",93:"CALL_END",95:"THIS",96:"@",97:"[",98:"]",100:"..",103:"TRY",105:"FINALLY",106:"CATCH",107:"THROW",108:"(",109:")",111:"WHILE",112:"WHEN",113:"UNTIL",115:"LOOP",117:"FOR",118:"BY",122:"OWN",124:"FORIN",125:"FOROF",126:"SWITCH",128:"ELSE",130:"LEADING_WHEN",132:"IF",133:"POST_IF",134:"UNARY",135:"UNARY_MATH",136:"-",137:"+",138:"YIELD",139:"FROM",140:"--",141:"++",142:"?",143:"MATH",144:"**",145:"SHIFT",146:"COMPARE",147:"&",148:"^",149:"|",150:"&&",151:"||",152:"BIN?",153:"RELATION",154:"COMPOUND_ASSIGN"},
productions_: [0,[3,0],[3,1],[4,1],[4,3],[4,2],[5,1],[5,1],[8,1],[8,1],[8,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[24,2],[24,3],[27,1],[29,1],[29,1],[31,1],[31,3],[35,1],[35,3],[39,1],[39,1],[39,1],[39,1],[39,1],[39,1],[39,1],[16,3],[16,4],[16,5],[47,1],[47,3],[47,5],[47,3],[47,5],[47,1],[50,1],[50,1],[48,1],[48,1],[9,2],[9,1],[10,1],[14,5],[14,2],[57,1],[57,1],[60,0],[60,1],[55,0],[55,1],[55,3],[55,4],[55,6],[62,1],[62,2],[62,3],[62,1],[63,1],[63,1],[63,1],[63,1],[67,2],[68,1],[68,2],[68,2],[68,1],[45,1],[45,1],[45,1],[12,1],[12,1],[12,1],[12,1],[12,1],[69,2],[69,2],[69,2],[69,2],[69,1],[69,1],[77,3],[77,2],[79,1],[79,1],[66,4],[84,0],[84,1],[84,3],[84,4],[84,6],[22,1],[22,2],[22,3],[22,4],[22,2],[22,3],[22,4],[22,5],[13,3],[13,3],[13,1],[13,2],[88,0],[88,1],[89,2],[89,4],[72,1],[72,1],[51,2],[65,2],[65,4],[99,1],[99,1],[71,5],[82,3],[82,2],[82,2],[82,1],[94,1],[94,3],[94,4],[94,4],[94,6],[101,1],[101,1],[101,1],[102,1],[102,3],[18,2],[18,3],[18,4],[18,5],[104,3],[104,3],[104,2],[23,2],[70,3],[70,5],[110,2],[110,4],[110,2],[110,4],[19,2],[19,2],[19,2],[19,1],[114,2],[114,2],[20,2],[20,2],[20,2],[116,2],[116,4],[116,2],[119,2],[119,3],[123,1],[123,1],[123,1],[123,1],[121,1],[121,3],[120,2],[120,2],[120,4],[120,4],[120,4],[120,6],[120,6],[21,5],[21,7],[21,4],[21,6],[127,1],[127,2],[129,3],[129,4],[131,3],[131,5],[17,1],[17,3],[17,3],[17,3],[15,2],[15,2],[15,2],[15,2],[15,2],[15,2],[15,3],[15,2],[15,2],[15,2],[15,2],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,5],[15,4],[15,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Block);
break;
case 2:
return this.$ = $$[$0];
break;
case 3:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(yy.Block.wrap([$$[$0]]));
break;
case 4:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])($$[$0-2].push($$[$0]));
break;
case 5:
this.$ = $$[$0-1];
break;
case 6: case 7: case 8: case 9: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 27: case 32: case 34: case 47: case 48: case 49: case 50: case 51: case 59: case 60: case 70: case 71: case 72: case 73: case 78: case 79: case 82: case 86: case 92: case 136: case 137: case 139: case 169: case 170: case 186: case 192:
this.$ = $$[$0];
break;
case 10: case 25: case 26: case 28: case 30: case 33: case 35:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Literal($$[$0]));
break;
case 23:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Block);
break;
case 24: case 31: case 93:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])($$[$0-1]);
break;
case 29: case 149:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Parens($$[$0-1]));
break;
case 36:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Undefined);
break;
case 37:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Null);
break;
case 38:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Bool($$[$0]));
break;
case 39:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Assign($$[$0-2], $$[$0]));
break;
case 40:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Assign($$[$0-3], $$[$0]));
break;
case 41:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Assign($$[$0-4], $$[$0-1]));
break;
case 42: case 75: case 80: case 81: case 83: case 84: case 85: case 171: case 172:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Value($$[$0]));
break;
case 43:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0-2])(new yy.Value($$[$0-2])), $$[$0], 'object', {
          operatorToken: yy.addLocationDataFn(_$[$0-1])(new yy.Literal($$[$0-1]))
        }));
break;
case 44:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0-4])(new yy.Value($$[$0-4])), $$[$0-1], 'object', {
          operatorToken: yy.addLocationDataFn(_$[$0-3])(new yy.Literal($$[$0-3]))
        }));
break;
case 45:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0-2])(new yy.Value($$[$0-2])), $$[$0], null, {
          operatorToken: yy.addLocationDataFn(_$[$0-1])(new yy.Literal($$[$0-1]))
        }));
break;
case 46:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0-4])(new yy.Value($$[$0-4])), $$[$0-1], null, {
          operatorToken: yy.addLocationDataFn(_$[$0-3])(new yy.Literal($$[$0-3]))
        }));
break;
case 52:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Return($$[$0]));
break;
case 53:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Return);
break;
case 54:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Comment($$[$0]));
break;
case 55:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Code($$[$0-3], $$[$0], $$[$0-1]));
break;
case 56:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Code([], $$[$0], $$[$0-1]));
break;
case 57:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])('func');
break;
case 58:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])('boundfunc');
break;
case 61: case 98:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])([]);
break;
case 62: case 99: case 131: case 173:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])([$$[$0]]);
break;
case 63: case 100: case 132:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])($$[$0-2].concat($$[$0]));
break;
case 64: case 101: case 133:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])($$[$0-3].concat($$[$0]));
break;
case 65: case 102: case 135:
this.$ = yy.addLocationDataFn(_$[$0-5], _$[$0])($$[$0-5].concat($$[$0-2]));
break;
case 66:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Param($$[$0]));
break;
case 67:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Param($$[$0-1], null, true));
break;
case 68:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Param($$[$0-2], $$[$0]));
break;
case 69: case 138:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Expansion);
break;
case 74:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Splat($$[$0-1]));
break;
case 76:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])($$[$0-1].add($$[$0]));
break;
case 77:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Value($$[$0-1], [].concat($$[$0])));
break;
case 87:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Access($$[$0]));
break;
case 88:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Access($$[$0], 'soak'));
break;
case 89:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])([yy.addLocationDataFn(_$[$0-1])(new yy.Access(new yy.Literal('prototype'))), yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))]);
break;
case 90:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])([yy.addLocationDataFn(_$[$0-1])(new yy.Access(new yy.Literal('prototype'), 'soak')), yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))]);
break;
case 91:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Access(new yy.Literal('prototype')));
break;
case 94:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(yy.extend($$[$0], {
          soak: true
        }));
break;
case 95:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Index($$[$0]));
break;
case 96:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Slice($$[$0]));
break;
case 97:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Obj($$[$0-2], $$[$0-3].generated));
break;
case 103:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Class);
break;
case 104:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Class(null, null, $$[$0]));
break;
case 105:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Class(null, $$[$0]));
break;
case 106:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Class(null, $$[$0-1], $$[$0]));
break;
case 107:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Class($$[$0]));
break;
case 108:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Class($$[$0-1], null, $$[$0]));
break;
case 109:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Class($$[$0-2], $$[$0]));
break;
case 110:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Class($$[$0-3], $$[$0-1], $$[$0]));
break;
case 111: case 112:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Call($$[$0-2], $$[$0], $$[$0-1]));
break;
case 113:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Call('super', [new yy.Splat(new yy.Literal('arguments'))]));
break;
case 114:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Call('super', $$[$0]));
break;
case 115:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(false);
break;
case 116:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(true);
break;
case 117:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])([]);
break;
case 118: case 134:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])($$[$0-2]);
break;
case 119: case 120:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Value(new yy.Literal('this')));
break;
case 121:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Value(yy.addLocationDataFn(_$[$0-1])(new yy.Literal('this')), [yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))], 'this'));
break;
case 122:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Arr([]));
break;
case 123:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Arr($$[$0-2]));
break;
case 124:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])('inclusive');
break;
case 125:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])('exclusive');
break;
case 126:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Range($$[$0-3], $$[$0-1], $$[$0-2]));
break;
case 127:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Range($$[$0-2], $$[$0], $$[$0-1]));
break;
case 128:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Range($$[$0-1], null, $$[$0]));
break;
case 129:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Range(null, $$[$0], $$[$0-1]));
break;
case 130:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Range(null, null, $$[$0]));
break;
case 140:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])([].concat($$[$0-2], $$[$0]));
break;
case 141:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Try($$[$0]));
break;
case 142:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Try($$[$0-1], $$[$0][0], $$[$0][1]));
break;
case 143:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Try($$[$0-2], null, null, $$[$0]));
break;
case 144:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Try($$[$0-3], $$[$0-2][0], $$[$0-2][1], $$[$0]));
break;
case 145:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])([$$[$0-1], $$[$0]]);
break;
case 146:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])([yy.addLocationDataFn(_$[$0-1])(new yy.Value($$[$0-1])), $$[$0]]);
break;
case 147:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])([null, $$[$0]]);
break;
case 148:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Throw($$[$0]));
break;
case 150:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Parens($$[$0-2]));
break;
case 151:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.While($$[$0]));
break;
case 152:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.While($$[$0-2], {
          guard: $$[$0]
        }));
break;
case 153:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.While($$[$0], {
          invert: true
        }));
break;
case 154:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.While($$[$0-2], {
          invert: true,
          guard: $$[$0]
        }));
break;
case 155:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])($$[$0-1].addBody($$[$0]));
break;
case 156: case 157:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])($$[$0].addBody(yy.addLocationDataFn(_$[$0-1])(yy.Block.wrap([$$[$0-1]]))));
break;
case 158:
this.$ = yy.addLocationDataFn(_$[$0], _$[$0])($$[$0]);
break;
case 159:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.While(yy.addLocationDataFn(_$[$0-1])(new yy.Literal('true'))).addBody($$[$0]));
break;
case 160:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.While(yy.addLocationDataFn(_$[$0-1])(new yy.Literal('true'))).addBody(yy.addLocationDataFn(_$[$0])(yy.Block.wrap([$$[$0]]))));
break;
case 161: case 162:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.For($$[$0-1], $$[$0]));
break;
case 163:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.For($$[$0], $$[$0-1]));
break;
case 164:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])({
          source: yy.addLocationDataFn(_$[$0])(new yy.Value($$[$0]))
        });
break;
case 165:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])({
          source: yy.addLocationDataFn(_$[$0-2])(new yy.Value($$[$0-2])),
          step: $$[$0]
        });
break;
case 166:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])((function () {
        $$[$0].own = $$[$0-1].own;
        $$[$0].name = $$[$0-1][0];
        $$[$0].index = $$[$0-1][1];
        return $$[$0];
      }()));
break;
case 167:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])($$[$0]);
break;
case 168:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])((function () {
        $$[$0].own = true;
        return $$[$0];
      }()));
break;
case 174:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])([$$[$0-2], $$[$0]]);
break;
case 175:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])({
          source: $$[$0]
        });
break;
case 176:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])({
          source: $$[$0],
          object: true
        });
break;
case 177:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])({
          source: $$[$0-2],
          guard: $$[$0]
        });
break;
case 178:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])({
          source: $$[$0-2],
          guard: $$[$0],
          object: true
        });
break;
case 179:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])({
          source: $$[$0-2],
          step: $$[$0]
        });
break;
case 180:
this.$ = yy.addLocationDataFn(_$[$0-5], _$[$0])({
          source: $$[$0-4],
          guard: $$[$0-2],
          step: $$[$0]
        });
break;
case 181:
this.$ = yy.addLocationDataFn(_$[$0-5], _$[$0])({
          source: $$[$0-4],
          step: $$[$0-2],
          guard: $$[$0]
        });
break;
case 182:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Switch($$[$0-3], $$[$0-1]));
break;
case 183:
this.$ = yy.addLocationDataFn(_$[$0-6], _$[$0])(new yy.Switch($$[$0-5], $$[$0-3], $$[$0-1]));
break;
case 184:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Switch(null, $$[$0-1]));
break;
case 185:
this.$ = yy.addLocationDataFn(_$[$0-5], _$[$0])(new yy.Switch(null, $$[$0-3], $$[$0-1]));
break;
case 187:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])($$[$0-1].concat($$[$0]));
break;
case 188:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])([[$$[$0-1], $$[$0]]]);
break;
case 189:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])([[$$[$0-2], $$[$0-1]]]);
break;
case 190:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.If($$[$0-1], $$[$0], {
          type: $$[$0-2]
        }));
break;
case 191:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])($$[$0-4].addElse(yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.If($$[$0-1], $$[$0], {
          type: $$[$0-2]
        }))));
break;
case 193:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])($$[$0-2].addElse($$[$0]));
break;
case 194: case 195:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.If($$[$0], yy.addLocationDataFn(_$[$0-2])(yy.Block.wrap([$$[$0-2]])), {
          type: $$[$0-1],
          statement: true
        }));
break;
case 196: case 197: case 200: case 201:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op($$[$0-1], $$[$0]));
break;
case 198:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('-', $$[$0]));
break;
case 199:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('+', $$[$0]));
break;
case 202:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Op($$[$0-2].concat($$[$0-1]), $$[$0]));
break;
case 203:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('--', $$[$0]));
break;
case 204:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('++', $$[$0]));
break;
case 205:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('--', $$[$0-1], null, true));
break;
case 206:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Op('++', $$[$0-1], null, true));
break;
case 207:
this.$ = yy.addLocationDataFn(_$[$0-1], _$[$0])(new yy.Existence($$[$0-1]));
break;
case 208:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Op('+', $$[$0-2], $$[$0]));
break;
case 209:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Op('-', $$[$0-2], $$[$0]));
break;
case 210: case 211: case 212: case 213: case 214: case 215: case 216: case 217: case 218: case 219:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Op($$[$0-1], $$[$0-2], $$[$0]));
break;
case 220:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])((function () {
        if ($$[$0-1].charAt(0) === '!') {
          return new yy.Op($$[$0-1].slice(1), $$[$0-2], $$[$0]).invert();
        } else {
          return new yy.Op($$[$0-1], $$[$0-2], $$[$0]);
        }
      }()));
break;
case 221:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Assign($$[$0-2], $$[$0], $$[$0-1]));
break;
case 222:
this.$ = yy.addLocationDataFn(_$[$0-4], _$[$0])(new yy.Assign($$[$0-4], $$[$0-1], $$[$0-3]));
break;
case 223:
this.$ = yy.addLocationDataFn(_$[$0-3], _$[$0])(new yy.Assign($$[$0-3], $$[$0], $$[$0-2]));
break;
case 224:
this.$ = yy.addLocationDataFn(_$[$0-2], _$[$0])(new yy.Extends($$[$0-2], $$[$0]));
break;
}
},
table: [{1:[2,1],3:1,4:2,5:3,7:4,8:5,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{1:[3]},{1:[2,2],6:$VD},o($VE,[2,3]),o($VE,[2,6],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VE,[2,7],{119:69,110:97,116:98,111:$Vq,113:$Vr,117:$Vt,133:$VU}),o($VV,[2,11],{88:99,69:100,77:106,73:$VW,74:$VX,75:$VY,76:$VZ,78:$V_,81:$V$,91:$V01,92:$V11}),o($VV,[2,12],{77:106,88:109,69:110,73:$VW,74:$VX,75:$VY,76:$VZ,78:$V_,81:$V$,91:$V01,92:$V11}),o($VV,[2,13]),o($VV,[2,14]),o($VV,[2,15]),o($VV,[2,16]),o($VV,[2,17]),o($VV,[2,18]),o($VV,[2,19]),o($VV,[2,20]),o($VV,[2,21]),o($VV,[2,22]),o($VV,[2,8]),o($VV,[2,9]),o($VV,[2,10]),o($V21,$V31,{46:[1,111]}),o($V21,[2,83]),o($V21,[2,84]),o($V21,[2,85]),o($V21,[2,86]),o([1,6,25,26,34,38,56,61,64,73,74,75,76,78,80,81,85,91,93,98,100,109,111,112,113,117,118,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],[2,113],{89:112,92:$V41}),o([6,25,56,61],$V51,{55:114,62:115,63:116,27:118,51:119,65:120,66:121,28:$V1,64:$V61,83:$Vh,96:$V71,97:$V81}),{24:124,25:$V91},{7:126,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:128,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:129,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:130,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:132,8:131,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,139:[1,133],140:$VB,141:$VC},{12:135,13:136,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:137,51:63,65:47,66:48,68:134,70:23,71:24,72:25,83:$Vh,90:$Vj,95:$Vk,96:$Vl,97:$Vm,108:$Vp},{12:135,13:136,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:137,51:63,65:47,66:48,68:138,70:23,71:24,72:25,83:$Vh,90:$Vj,95:$Vk,96:$Vl,97:$Vm,108:$Vp},o($Va1,$Vb1,{87:[1,142],140:[1,139],141:[1,140],154:[1,141]}),o($VV,[2,192],{128:[1,143]}),{24:144,25:$V91},{24:145,25:$V91},o($VV,[2,158]),{24:146,25:$V91},{7:147,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,148],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vc1,[2,103],{39:22,70:23,71:24,72:25,65:47,66:48,29:49,35:51,27:62,51:63,31:72,12:135,13:136,45:137,24:149,68:151,25:$V91,28:$V1,30:$V2,32:$V3,33:$V4,36:$V5,37:$V6,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,83:$Vh,87:[1,150],90:$Vj,95:$Vk,96:$Vl,97:$Vm,108:$Vp}),{7:152,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,142,143,144,145,146,147,148,149,150,151,152,153],[2,53],{12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,70:23,71:24,72:25,57:28,68:36,131:37,110:39,114:40,116:41,65:47,66:48,29:49,35:51,27:62,51:63,119:69,31:72,8:127,7:153,11:$V0,28:$V1,30:$V2,32:$V3,33:$V4,36:$V5,37:$V6,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,52:$Vc,53:$Vd,54:$Ve,58:$Vf,59:$Vg,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,115:$Vs,126:$Vu,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC}),o($VV,[2,54]),o($Va1,[2,80]),o($Va1,[2,81]),o($V21,[2,32]),o($V21,[2,33]),o($V21,[2,34]),o($V21,[2,35]),o($V21,[2,36]),o($V21,[2,37]),o($V21,[2,38]),{4:154,5:3,7:4,8:5,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,155],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:156,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:$Vd1,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,94:158,95:$Vk,96:$Vl,97:$Vm,98:$Vf1,101:159,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($V21,[2,119]),o($V21,[2,120],{27:163,28:$V1}),{25:[2,57]},{25:[2,58]},o($Vg1,[2,75]),o($Vg1,[2,78]),{7:164,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:165,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:166,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:168,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:167,25:$V91,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{27:173,28:$V1,51:174,65:175,66:176,71:169,83:$Vh,96:$V71,97:$Vm,121:170,122:[1,171],123:172},{120:177,124:[1,178],125:[1,179]},o([6,25,61,85],$Vh1,{31:72,84:180,47:181,48:182,50:183,10:184,29:185,27:186,51:187,28:$V1,30:$V2,32:$V3,33:$V4,53:$Vd,96:$V71}),o($Vi1,[2,26]),o($Vi1,[2,27]),o($V21,[2,30]),{12:135,13:188,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:137,51:63,65:47,66:48,68:189,70:23,71:24,72:25,83:$Vh,90:$Vj,95:$Vk,96:$Vl,97:$Vm,108:$Vp},o($Vj1,[2,25]),o($Vi1,[2,28]),{4:190,5:3,7:4,8:5,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VE,[2,5],{7:4,8:5,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,70:23,71:24,72:25,57:28,68:36,131:37,110:39,114:40,116:41,65:47,66:48,29:49,35:51,27:62,51:63,119:69,31:72,5:191,11:$V0,28:$V1,30:$V2,32:$V3,33:$V4,36:$V5,37:$V6,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,52:$Vc,53:$Vd,54:$Ve,58:$Vf,59:$Vg,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,111:$Vq,113:$Vr,115:$Vs,117:$Vt,126:$Vu,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC}),o($VV,[2,207]),{7:192,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:193,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:194,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:195,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:196,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:197,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:198,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:199,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:200,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:201,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:202,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:203,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:204,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:205,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,157]),o($VV,[2,162]),{7:206,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,156]),o($VV,[2,161]),{89:207,92:$V41},o($Vg1,[2,76]),{92:[2,116]},{27:208,28:$V1},{27:209,28:$V1},o($Vg1,[2,91],{27:210,28:$V1}),{27:211,28:$V1},o($Vg1,[2,92]),{7:213,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Vk1,65:47,66:48,68:36,70:23,71:24,72:25,79:212,82:214,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,99:215,100:$Vl1,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{77:218,78:$V_,81:$V$},{89:219,92:$V41},o($Vg1,[2,77]),{6:[1,221],7:220,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,222],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vm1,[2,114]),{7:225,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:$Vd1,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,93:[1,223],94:224,95:$Vk,96:$Vl,97:$Vm,101:159,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([6,25],$Vn1,{60:228,56:[1,226],61:$Vo1}),o($Vp1,[2,62]),o($Vp1,[2,66],{46:[1,230],64:[1,229]}),o($Vp1,[2,69]),o($Vq1,[2,70]),o($Vq1,[2,71]),o($Vq1,[2,72]),o($Vq1,[2,73]),{27:163,28:$V1},{7:225,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:$Vd1,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,94:158,95:$Vk,96:$Vl,97:$Vm,98:$Vf1,101:159,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,56]),{4:232,5:3,7:4,8:5,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,26:[1,231],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,136,137,143,144,145,146,147,148,149,150,151,152,153],[2,196],{119:69,110:94,116:95,142:$VI}),{110:97,111:$Vq,113:$Vr,116:98,117:$Vt,119:69,133:$VU},o($Vr1,[2,197],{119:69,110:94,116:95,142:$VI,144:$VK}),o($Vr1,[2,198],{119:69,110:94,116:95,142:$VI,144:$VK}),o($Vr1,[2,199],{119:69,110:94,116:95,142:$VI,144:$VK}),o($VV,[2,200],{119:69,110:97,116:98}),o($Vs1,[2,201],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{7:233,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,203],{73:$Vb1,74:$Vb1,75:$Vb1,76:$Vb1,78:$Vb1,81:$Vb1,91:$Vb1,92:$Vb1}),{69:100,73:$VW,74:$VX,75:$VY,76:$VZ,77:106,78:$V_,81:$V$,88:99,91:$V01,92:$V11},{69:110,73:$VW,74:$VX,75:$VY,76:$VZ,77:106,78:$V_,81:$V$,88:109,91:$V01,92:$V11},o($Vt1,$V31),o($VV,[2,204],{73:$Vb1,74:$Vb1,75:$Vb1,76:$Vb1,78:$Vb1,81:$Vb1,91:$Vb1,92:$Vb1}),o($VV,[2,205]),o($VV,[2,206]),{6:[1,236],7:234,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,235],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:237,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{24:238,25:$V91,132:[1,239]},o($VV,[2,141],{104:240,105:[1,241],106:[1,242]}),o($VV,[2,155]),o($VV,[2,163]),{25:[1,243],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{127:244,129:245,130:$Vu1},o($VV,[2,104]),{7:247,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vc1,[2,107],{24:248,25:$V91,73:$Vb1,74:$Vb1,75:$Vb1,76:$Vb1,78:$Vb1,81:$Vb1,91:$Vb1,92:$Vb1,87:[1,249]}),o($Vs1,[2,148],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vs1,[2,52],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{6:$VD,109:[1,250]},{4:251,5:3,7:4,8:5,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([6,25,61,98],$Vv1,{119:69,110:94,116:95,99:252,64:[1,253],100:$Vl1,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vw1,[2,122]),o([6,25,98],$Vn1,{60:254,61:$Vx1}),o($Vy1,[2,131]),{7:225,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:$Vd1,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,94:256,95:$Vk,96:$Vl,97:$Vm,101:159,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vy1,[2,137]),o($Vy1,[2,138]),o($Vj1,[2,121]),{24:257,25:$V91,110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},o($Vz1,[2,151],{119:69,110:94,116:95,111:$Vq,112:[1,258],113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vz1,[2,153],{119:69,110:94,116:95,111:$Vq,112:[1,259],113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV,[2,159]),o($VA1,[2,160],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,133,136,137,142,143,144,145,146,147,148,149,150,151,152,153],[2,164],{118:[1,260]}),o($VB1,[2,167]),{27:173,28:$V1,51:174,65:175,66:176,83:$Vh,96:$V71,97:$V81,121:261,123:172},o($VB1,[2,173],{61:[1,262]}),o($VC1,[2,169]),o($VC1,[2,170]),o($VC1,[2,171]),o($VC1,[2,172]),o($VV,[2,166]),{7:263,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:264,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([6,25,85],$Vn1,{60:265,61:$VD1}),o($VE1,[2,99]),o($VE1,[2,42],{49:[1,267]}),o($VF1,[2,50],{46:[1,268]}),o($VE1,[2,47]),o($VF1,[2,51]),o($VG1,[2,48]),o($VG1,[2,49]),{38:[1,269],69:110,73:$VW,74:$VX,75:$VY,76:$VZ,77:106,78:$V_,81:$V$,88:109,91:$V01,92:$V11},o($Vt1,$Vb1),{6:$VD,34:[1,270]},o($VE,[2,4]),o($VH1,[2,208],{119:69,110:94,116:95,142:$VI,143:$VJ,144:$VK}),o($VH1,[2,209],{119:69,110:94,116:95,142:$VI,143:$VJ,144:$VK}),o($Vr1,[2,210],{119:69,110:94,116:95,142:$VI,144:$VK}),o($Vr1,[2,211],{119:69,110:94,116:95,142:$VI,144:$VK}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,145,146,147,148,149,150,151,152,153],[2,212],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,146,147,148,149,150,151,152],[2,213],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,147,148,149,150,151,152],[2,214],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,148,149,150,151,152],[2,215],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,149,150,151,152],[2,216],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,150,151,152],[2,217],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,151,152],[2,218],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,152],[2,219],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,153:$VT}),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,118,133,146,147,148,149,150,151,152,153],[2,220],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL}),o($VA1,[2,195],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VA1,[2,194],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vm1,[2,111]),o($Vg1,[2,87]),o($Vg1,[2,88]),o($Vg1,[2,89]),o($Vg1,[2,90]),{80:[1,271]},{64:$Vk1,80:[2,95],99:272,100:$Vl1,110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{80:[2,96]},{7:273,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,80:[2,130],83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VI1,[2,124]),o($VI1,$VJ1),o($Vg1,[2,94]),o($Vm1,[2,112]),o($Vs1,[2,39],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{7:274,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:275,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vm1,[2,117]),o([6,25,93],$Vn1,{60:276,61:$Vx1}),o($Vy1,$Vv1,{119:69,110:94,116:95,64:[1,277],111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{57:278,58:$Vf,59:$Vg},o($VK1,$VL1,{63:116,27:118,51:119,65:120,66:121,62:279,28:$V1,64:$V61,83:$Vh,96:$V71,97:$V81}),{6:$VM1,25:$VN1},o($Vp1,[2,67]),{7:282,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VO1,[2,23]),{6:$VD,26:[1,283]},o($Vs1,[2,202],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vs1,[2,221],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{7:284,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:285,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vs1,[2,224],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV,[2,193]),{7:286,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,142],{105:[1,287]}),{24:288,25:$V91},{24:291,25:$V91,27:289,28:$V1,66:290,83:$Vh},{127:292,129:245,130:$Vu1},{26:[1,293],128:[1,294],129:295,130:$Vu1},o($VP1,[2,186]),{7:297,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,102:296,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VQ1,[2,105],{119:69,110:94,116:95,24:298,25:$V91,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV,[2,108]),{7:299,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($V21,[2,149]),{6:$VD,26:[1,300]},{7:301,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o([11,28,30,32,33,36,37,40,41,42,43,44,52,53,54,58,59,83,86,90,95,96,97,103,107,108,111,113,115,117,126,132,134,135,136,137,138,140,141],$VJ1,{6:$VR1,25:$VR1,61:$VR1,98:$VR1}),{6:$VS1,25:$VT1,98:[1,302]},o([6,25,26,93,98],$VL1,{12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,9:18,10:19,45:21,39:22,70:23,71:24,72:25,57:28,68:36,131:37,110:39,114:40,116:41,65:47,66:48,29:49,35:51,27:62,51:63,119:69,31:72,8:127,67:161,7:225,101:305,11:$V0,28:$V1,30:$V2,32:$V3,33:$V4,36:$V5,37:$V6,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,52:$Vc,53:$Vd,54:$Ve,58:$Vf,59:$Vg,64:$Ve1,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,111:$Vq,113:$Vr,115:$Vs,117:$Vt,126:$Vu,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC}),o($VK1,$Vn1,{60:306,61:$Vx1}),o($VU1,[2,190]),{7:307,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:308,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:309,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VB1,[2,168]),{27:173,28:$V1,51:174,65:175,66:176,83:$Vh,96:$V71,97:$V81,123:310},o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,113,117,133],[2,175],{119:69,110:94,116:95,112:[1,311],118:[1,312],136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV1,[2,176],{119:69,110:94,116:95,112:[1,313],136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{6:$VW1,25:$VX1,85:[1,314]},o([6,25,26,85],$VL1,{31:72,48:182,50:183,10:184,29:185,27:186,51:187,47:317,28:$V1,30:$V2,32:$V3,33:$V4,53:$Vd,96:$V71}),{7:318,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,319],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:320,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:[1,321],27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($V21,[2,31]),o($Vi1,[2,29]),o($Vg1,[2,93]),{7:322,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,80:[2,128],83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{80:[2,129],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},o($Vs1,[2,40],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{26:[1,323],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{6:$VS1,25:$VT1,93:[1,324]},o($Vy1,$VR1),{24:325,25:$V91},o($Vp1,[2,63]),{27:118,28:$V1,51:119,62:326,63:116,64:$V61,65:120,66:121,83:$Vh,96:$V71,97:$V81},o($VY1,$V51,{62:115,63:116,27:118,51:119,65:120,66:121,55:327,28:$V1,64:$V61,83:$Vh,96:$V71,97:$V81}),o($Vp1,[2,68],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VO1,[2,24]),{26:[1,328],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},o($Vs1,[2,223],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{24:329,25:$V91,110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{24:330,25:$V91},o($VV,[2,143]),{24:331,25:$V91},{24:332,25:$V91},o($VZ1,[2,147]),{26:[1,333],128:[1,334],129:295,130:$Vu1},o($VV,[2,184]),{24:335,25:$V91},o($VP1,[2,187]),{24:336,25:$V91,61:[1,337]},o($V_1,[2,139],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV,[2,106]),o($VQ1,[2,109],{119:69,110:94,116:95,24:338,25:$V91,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{109:[1,339]},{98:[1,340],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},o($Vw1,[2,123]),{7:225,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,101:341,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:225,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,25:$Vd1,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,64:$Ve1,65:47,66:48,67:161,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,94:342,95:$Vk,96:$Vl,97:$Vm,101:159,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vy1,[2,132]),{6:$VS1,25:$VT1,26:[1,343]},o($VA1,[2,152],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VA1,[2,154],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VA1,[2,165],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VB1,[2,174]),{7:344,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:345,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:346,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($Vw1,[2,97]),{10:184,27:186,28:$V1,29:185,30:$V2,31:72,32:$V3,33:$V4,47:347,48:182,50:183,51:187,53:$Vd,96:$V71},o($VY1,$Vh1,{31:72,47:181,48:182,50:183,10:184,29:185,27:186,51:187,84:348,28:$V1,30:$V2,32:$V3,33:$V4,53:$Vd,96:$V71}),o($VE1,[2,100]),o($VE1,[2,43],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{7:349,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VE1,[2,45],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{7:350,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{80:[2,127],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},o($VV,[2,41]),o($Vm1,[2,118]),o($VV,[2,55]),o($Vp1,[2,64]),o($VK1,$Vn1,{60:351,61:$Vo1}),o($VV,[2,222]),o($VU1,[2,191]),o($VV,[2,144]),o($VZ1,[2,145]),o($VZ1,[2,146]),o($VV,[2,182]),{24:352,25:$V91},{26:[1,353]},o($VP1,[2,188],{6:[1,354]}),{7:355,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},o($VV,[2,110]),o($V21,[2,150]),o($V21,[2,126]),o($Vy1,[2,133]),o($VK1,$Vn1,{60:356,61:$Vx1}),o($Vy1,[2,134]),o([1,6,25,26,34,56,61,64,80,85,93,98,100,109,111,112,113,117,133],[2,177],{119:69,110:94,116:95,118:[1,357],136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VV1,[2,179],{119:69,110:94,116:95,112:[1,358],136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vs1,[2,178],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VE1,[2,101]),o($VK1,$Vn1,{60:359,61:$VD1}),{26:[1,360],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{26:[1,361],110:94,111:$Vq,113:$Vr,116:95,117:$Vt,119:69,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT},{6:$VM1,25:$VN1,26:[1,362]},{26:[1,363]},o($VV,[2,185]),o($VP1,[2,189]),o($V_1,[2,140],{119:69,110:94,116:95,111:$Vq,113:$Vr,117:$Vt,133:$VF,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),{6:$VS1,25:$VT1,26:[1,364]},{7:365,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{7:366,8:127,9:18,10:19,11:$V0,12:6,13:7,14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,27:62,28:$V1,29:49,30:$V2,31:72,32:$V3,33:$V4,35:51,36:$V5,37:$V6,39:22,40:$V7,41:$V8,42:$V9,43:$Va,44:$Vb,45:21,51:63,52:$Vc,53:$Vd,54:$Ve,57:28,58:$Vf,59:$Vg,65:47,66:48,68:36,70:23,71:24,72:25,83:$Vh,86:$Vi,90:$Vj,95:$Vk,96:$Vl,97:$Vm,103:$Vn,107:$Vo,108:$Vp,110:39,111:$Vq,113:$Vr,114:40,115:$Vs,116:41,117:$Vt,119:69,126:$Vu,131:37,132:$Vv,134:$Vw,135:$Vx,136:$Vy,137:$Vz,138:$VA,140:$VB,141:$VC},{6:$VW1,25:$VX1,26:[1,367]},o($VE1,[2,44]),o($VE1,[2,46]),o($Vp1,[2,65]),o($VV,[2,183]),o($Vy1,[2,135]),o($Vs1,[2,180],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($Vs1,[2,181],{119:69,110:94,116:95,136:$VG,137:$VH,142:$VI,143:$VJ,144:$VK,145:$VL,146:$VM,147:$VN,148:$VO,149:$VP,150:$VQ,151:$VR,152:$VS,153:$VT}),o($VE1,[2,102])],
defaultActions: {60:[2,57],61:[2,58],101:[2,116],214:[2,96]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).readFileSync(__webpack_require__(4).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(35)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.10.0
(function() {
  var CoffeeScript, Module, binary, child_process, ext, findExtension, fork, helpers, i, len, loadFile, path, ref;

  CoffeeScript = __webpack_require__(9);

  child_process = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"child_process\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  helpers = __webpack_require__(2);

  path = __webpack_require__(4);

  loadFile = function(module, filename) {
    var answer;
    answer = CoffeeScript._compileFile(filename, false);
    return module._compile(answer, filename);
  };

  if ((void 0)) {
    ref = CoffeeScript.FILE_EXTENSIONS;
    for (i = 0, len = ref.length; i < len; i++) {
      ext = ref[i];
      (void 0)[ext] = loadFile;
    }
    Module = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    findExtension = function(filename) {
      var curExtension, extensions;
      extensions = path.basename(filename).split('.');
      if (extensions[0] === '') {
        extensions.shift();
      }
      while (extensions.shift()) {
        curExtension = '.' + extensions.join('.');
        if (Module._extensions[curExtension]) {
          return curExtension;
        }
      }
      return '.js';
    };
    Module.prototype.load = function(filename) {
      var extension;
      this.filename = filename;
      this.paths = Module._nodeModulePaths(path.dirname(filename));
      extension = findExtension(filename);
      Module._extensions[extension](this, filename);
      return this.loaded = true;
    };
  }

  if (child_process) {
    fork = child_process.fork;
    binary = /*require.resolve*/(23);
    child_process.fork = function(path, args, options) {
      if (helpers.isCoffee(path)) {
        if (!Array.isArray(args)) {
          options = args || {};
          args = [];
        }
        args = [path].concat(args);
        path = binary;
      }
      return fork(path, args, options);
    };
  }

}).call(this);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  var BALANCED_PAIRS, CALL_CLOSERS, EXPRESSION_CLOSE, EXPRESSION_END, EXPRESSION_START, IMPLICIT_CALL, IMPLICIT_END, IMPLICIT_FUNC, IMPLICIT_UNSPACED_CALL, INVERSES, LINEBREAKS, SINGLE_CLOSERS, SINGLE_LINERS, generate, k, left, len, ref, rite,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    slice = [].slice;

  generate = function(tag, value, origin) {
    var tok;
    tok = [tag, value];
    tok.generated = true;
    if (origin) {
      tok.origin = origin;
    }
    return tok;
  };

  exports.Rewriter = (function() {
    function Rewriter() {}

    Rewriter.prototype.rewrite = function(tokens1) {
      this.tokens = tokens1;
      this.removeLeadingNewlines();
      this.closeOpenCalls();
      this.closeOpenIndexes();
      this.normalizeLines();
      this.tagPostfixConditionals();
      this.addImplicitBracesAndParens();
      this.addLocationDataToGeneratedTokens();
      this.fixOutdentLocationData();
      return this.tokens;
    };

    Rewriter.prototype.scanTokens = function(block) {
      var i, token, tokens;
      tokens = this.tokens;
      i = 0;
      while (token = tokens[i]) {
        i += block.call(this, token, i, tokens);
      }
      return true;
    };

    Rewriter.prototype.detectEnd = function(i, condition, action) {
      var levels, ref, ref1, token, tokens;
      tokens = this.tokens;
      levels = 0;
      while (token = tokens[i]) {
        if (levels === 0 && condition.call(this, token, i)) {
          return action.call(this, token, i);
        }
        if (!token || levels < 0) {
          return action.call(this, token, i - 1);
        }
        if (ref = token[0], indexOf.call(EXPRESSION_START, ref) >= 0) {
          levels += 1;
        } else if (ref1 = token[0], indexOf.call(EXPRESSION_END, ref1) >= 0) {
          levels -= 1;
        }
        i += 1;
      }
      return i - 1;
    };

    Rewriter.prototype.removeLeadingNewlines = function() {
      var i, k, len, ref, tag;
      ref = this.tokens;
      for (i = k = 0, len = ref.length; k < len; i = ++k) {
        tag = ref[i][0];
        if (tag !== 'TERMINATOR') {
          break;
        }
      }
      if (i) {
        return this.tokens.splice(0, i);
      }
    };

    Rewriter.prototype.closeOpenCalls = function() {
      var action, condition;
      condition = function(token, i) {
        var ref;
        return ((ref = token[0]) === ')' || ref === 'CALL_END') || token[0] === 'OUTDENT' && this.tag(i - 1) === ')';
      };
      action = function(token, i) {
        return this.tokens[token[0] === 'OUTDENT' ? i - 1 : i][0] = 'CALL_END';
      };
      return this.scanTokens(function(token, i) {
        if (token[0] === 'CALL_START') {
          this.detectEnd(i + 1, condition, action);
        }
        return 1;
      });
    };

    Rewriter.prototype.closeOpenIndexes = function() {
      var action, condition;
      condition = function(token, i) {
        var ref;
        return (ref = token[0]) === ']' || ref === 'INDEX_END';
      };
      action = function(token, i) {
        return token[0] = 'INDEX_END';
      };
      return this.scanTokens(function(token, i) {
        if (token[0] === 'INDEX_START') {
          this.detectEnd(i + 1, condition, action);
        }
        return 1;
      });
    };

    Rewriter.prototype.indexOfTag = function() {
      var fuzz, i, j, k, pattern, ref, ref1;
      i = arguments[0], pattern = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      fuzz = 0;
      for (j = k = 0, ref = pattern.length; 0 <= ref ? k < ref : k > ref; j = 0 <= ref ? ++k : --k) {
        while (this.tag(i + j + fuzz) === 'HERECOMMENT') {
          fuzz += 2;
        }
        if (pattern[j] == null) {
          continue;
        }
        if (typeof pattern[j] === 'string') {
          pattern[j] = [pattern[j]];
        }
        if (ref1 = this.tag(i + j + fuzz), indexOf.call(pattern[j], ref1) < 0) {
          return -1;
        }
      }
      return i + j + fuzz - 1;
    };

    Rewriter.prototype.looksObjectish = function(j) {
      var end, index;
      if (this.indexOfTag(j, '@', null, ':') > -1 || this.indexOfTag(j, null, ':') > -1) {
        return true;
      }
      index = this.indexOfTag(j, EXPRESSION_START);
      if (index > -1) {
        end = null;
        this.detectEnd(index + 1, (function(token) {
          var ref;
          return ref = token[0], indexOf.call(EXPRESSION_END, ref) >= 0;
        }), (function(token, i) {
          return end = i;
        }));
        if (this.tag(end + 1) === ':') {
          return true;
        }
      }
      return false;
    };

    Rewriter.prototype.findTagsBackwards = function(i, tags) {
      var backStack, ref, ref1, ref2, ref3, ref4, ref5;
      backStack = [];
      while (i >= 0 && (backStack.length || (ref2 = this.tag(i), indexOf.call(tags, ref2) < 0) && ((ref3 = this.tag(i), indexOf.call(EXPRESSION_START, ref3) < 0) || this.tokens[i].generated) && (ref4 = this.tag(i), indexOf.call(LINEBREAKS, ref4) < 0))) {
        if (ref = this.tag(i), indexOf.call(EXPRESSION_END, ref) >= 0) {
          backStack.push(this.tag(i));
        }
        if ((ref1 = this.tag(i), indexOf.call(EXPRESSION_START, ref1) >= 0) && backStack.length) {
          backStack.pop();
        }
        i -= 1;
      }
      return ref5 = this.tag(i), indexOf.call(tags, ref5) >= 0;
    };

    Rewriter.prototype.addImplicitBracesAndParens = function() {
      var stack, start;
      stack = [];
      start = null;
      return this.scanTokens(function(token, i, tokens) {
        var endImplicitCall, endImplicitObject, forward, inImplicit, inImplicitCall, inImplicitControl, inImplicitObject, newLine, nextTag, offset, prevTag, prevToken, ref, ref1, ref2, ref3, ref4, ref5, s, sameLine, stackIdx, stackTag, stackTop, startIdx, startImplicitCall, startImplicitObject, startsLine, tag;
        tag = token[0];
        prevTag = (prevToken = i > 0 ? tokens[i - 1] : [])[0];
        nextTag = (i < tokens.length - 1 ? tokens[i + 1] : [])[0];
        stackTop = function() {
          return stack[stack.length - 1];
        };
        startIdx = i;
        forward = function(n) {
          return i - startIdx + n;
        };
        inImplicit = function() {
          var ref, ref1;
          return (ref = stackTop()) != null ? (ref1 = ref[2]) != null ? ref1.ours : void 0 : void 0;
        };
        inImplicitCall = function() {
          var ref;
          return inImplicit() && ((ref = stackTop()) != null ? ref[0] : void 0) === '(';
        };
        inImplicitObject = function() {
          var ref;
          return inImplicit() && ((ref = stackTop()) != null ? ref[0] : void 0) === '{';
        };
        inImplicitControl = function() {
          var ref;
          return inImplicit && ((ref = stackTop()) != null ? ref[0] : void 0) === 'CONTROL';
        };
        startImplicitCall = function(j) {
          var idx;
          idx = j != null ? j : i;
          stack.push([
            '(', idx, {
              ours: true
            }
          ]);
          tokens.splice(idx, 0, generate('CALL_START', '('));
          if (j == null) {
            return i += 1;
          }
        };
        endImplicitCall = function() {
          stack.pop();
          tokens.splice(i, 0, generate('CALL_END', ')', ['', 'end of input', token[2]]));
          return i += 1;
        };
        startImplicitObject = function(j, startsLine) {
          var idx, val;
          if (startsLine == null) {
            startsLine = true;
          }
          idx = j != null ? j : i;
          stack.push([
            '{', idx, {
              sameLine: true,
              startsLine: startsLine,
              ours: true
            }
          ]);
          val = new String('{');
          val.generated = true;
          tokens.splice(idx, 0, generate('{', val, token));
          if (j == null) {
            return i += 1;
          }
        };
        endImplicitObject = function(j) {
          j = j != null ? j : i;
          stack.pop();
          tokens.splice(j, 0, generate('}', '}', token));
          return i += 1;
        };
        if (inImplicitCall() && (tag === 'IF' || tag === 'TRY' || tag === 'FINALLY' || tag === 'CATCH' || tag === 'CLASS' || tag === 'SWITCH')) {
          stack.push([
            'CONTROL', i, {
              ours: true
            }
          ]);
          return forward(1);
        }
        if (tag === 'INDENT' && inImplicit()) {
          if (prevTag !== '=>' && prevTag !== '->' && prevTag !== '[' && prevTag !== '(' && prevTag !== ',' && prevTag !== '{' && prevTag !== 'TRY' && prevTag !== 'ELSE' && prevTag !== '=') {
            while (inImplicitCall()) {
              endImplicitCall();
            }
          }
          if (inImplicitControl()) {
            stack.pop();
          }
          stack.push([tag, i]);
          return forward(1);
        }
        if (indexOf.call(EXPRESSION_START, tag) >= 0) {
          stack.push([tag, i]);
          return forward(1);
        }
        if (indexOf.call(EXPRESSION_END, tag) >= 0) {
          while (inImplicit()) {
            if (inImplicitCall()) {
              endImplicitCall();
            } else if (inImplicitObject()) {
              endImplicitObject();
            } else {
              stack.pop();
            }
          }
          start = stack.pop();
        }
        if ((indexOf.call(IMPLICIT_FUNC, tag) >= 0 && token.spaced || tag === '?' && i > 0 && !tokens[i - 1].spaced) && (indexOf.call(IMPLICIT_CALL, nextTag) >= 0 || indexOf.call(IMPLICIT_UNSPACED_CALL, nextTag) >= 0 && !((ref = tokens[i + 1]) != null ? ref.spaced : void 0) && !((ref1 = tokens[i + 1]) != null ? ref1.newLine : void 0))) {
          if (tag === '?') {
            tag = token[0] = 'FUNC_EXIST';
          }
          startImplicitCall(i + 1);
          return forward(2);
        }
        if (indexOf.call(IMPLICIT_FUNC, tag) >= 0 && this.indexOfTag(i + 1, 'INDENT') > -1 && this.looksObjectish(i + 2) && !this.findTagsBackwards(i, ['CLASS', 'EXTENDS', 'IF', 'CATCH', 'SWITCH', 'LEADING_WHEN', 'FOR', 'WHILE', 'UNTIL'])) {
          startImplicitCall(i + 1);
          stack.push(['INDENT', i + 2]);
          return forward(3);
        }
        if (tag === ':') {
          s = (function() {
            var ref2;
            switch (false) {
              case ref2 = this.tag(i - 1), indexOf.call(EXPRESSION_END, ref2) < 0:
                return start[1];
              case this.tag(i - 2) !== '@':
                return i - 2;
              default:
                return i - 1;
            }
          }).call(this);
          while (this.tag(s - 2) === 'HERECOMMENT') {
            s -= 2;
          }
          this.insideForDeclaration = nextTag === 'FOR';
          startsLine = s === 0 || (ref2 = this.tag(s - 1), indexOf.call(LINEBREAKS, ref2) >= 0) || tokens[s - 1].newLine;
          if (stackTop()) {
            ref3 = stackTop(), stackTag = ref3[0], stackIdx = ref3[1];
            if ((stackTag === '{' || stackTag === 'INDENT' && this.tag(stackIdx - 1) === '{') && (startsLine || this.tag(s - 1) === ',' || this.tag(s - 1) === '{')) {
              return forward(1);
            }
          }
          startImplicitObject(s, !!startsLine);
          return forward(2);
        }
        if (inImplicitObject() && indexOf.call(LINEBREAKS, tag) >= 0) {
          stackTop()[2].sameLine = false;
        }
        newLine = prevTag === 'OUTDENT' || prevToken.newLine;
        if (indexOf.call(IMPLICIT_END, tag) >= 0 || indexOf.call(CALL_CLOSERS, tag) >= 0 && newLine) {
          while (inImplicit()) {
            ref4 = stackTop(), stackTag = ref4[0], stackIdx = ref4[1], (ref5 = ref4[2], sameLine = ref5.sameLine, startsLine = ref5.startsLine);
            if (inImplicitCall() && prevTag !== ',') {
              endImplicitCall();
            } else if (inImplicitObject() && !this.insideForDeclaration && sameLine && tag !== 'TERMINATOR' && prevTag !== ':') {
              endImplicitObject();
            } else if (inImplicitObject() && tag === 'TERMINATOR' && prevTag !== ',' && !(startsLine && this.looksObjectish(i + 1))) {
              if (nextTag === 'HERECOMMENT') {
                return forward(1);
              }
              endImplicitObject();
            } else {
              break;
            }
          }
        }
        if (tag === ',' && !this.looksObjectish(i + 1) && inImplicitObject() && !this.insideForDeclaration && (nextTag !== 'TERMINATOR' || !this.looksObjectish(i + 2))) {
          offset = nextTag === 'OUTDENT' ? 1 : 0;
          while (inImplicitObject()) {
            endImplicitObject(i + offset);
          }
        }
        return forward(1);
      });
    };

    Rewriter.prototype.addLocationDataToGeneratedTokens = function() {
      return this.scanTokens(function(token, i, tokens) {
        var column, line, nextLocation, prevLocation, ref, ref1;
        if (token[2]) {
          return 1;
        }
        if (!(token.generated || token.explicit)) {
          return 1;
        }
        if (token[0] === '{' && (nextLocation = (ref = tokens[i + 1]) != null ? ref[2] : void 0)) {
          line = nextLocation.first_line, column = nextLocation.first_column;
        } else if (prevLocation = (ref1 = tokens[i - 1]) != null ? ref1[2] : void 0) {
          line = prevLocation.last_line, column = prevLocation.last_column;
        } else {
          line = column = 0;
        }
        token[2] = {
          first_line: line,
          first_column: column,
          last_line: line,
          last_column: column
        };
        return 1;
      });
    };

    Rewriter.prototype.fixOutdentLocationData = function() {
      return this.scanTokens(function(token, i, tokens) {
        var prevLocationData;
        if (!(token[0] === 'OUTDENT' || (token.generated && token[0] === 'CALL_END') || (token.generated && token[0] === '}'))) {
          return 1;
        }
        prevLocationData = tokens[i - 1][2];
        token[2] = {
          first_line: prevLocationData.last_line,
          first_column: prevLocationData.last_column,
          last_line: prevLocationData.last_line,
          last_column: prevLocationData.last_column
        };
        return 1;
      });
    };

    Rewriter.prototype.normalizeLines = function() {
      var action, condition, indent, outdent, starter;
      starter = indent = outdent = null;
      condition = function(token, i) {
        var ref, ref1, ref2, ref3;
        return token[1] !== ';' && (ref = token[0], indexOf.call(SINGLE_CLOSERS, ref) >= 0) && !(token[0] === 'TERMINATOR' && (ref1 = this.tag(i + 1), indexOf.call(EXPRESSION_CLOSE, ref1) >= 0)) && !(token[0] === 'ELSE' && starter !== 'THEN') && !(((ref2 = token[0]) === 'CATCH' || ref2 === 'FINALLY') && (starter === '->' || starter === '=>')) || (ref3 = token[0], indexOf.call(CALL_CLOSERS, ref3) >= 0) && this.tokens[i - 1].newLine;
      };
      action = function(token, i) {
        return this.tokens.splice((this.tag(i - 1) === ',' ? i - 1 : i), 0, outdent);
      };
      return this.scanTokens(function(token, i, tokens) {
        var j, k, ref, ref1, ref2, tag;
        tag = token[0];
        if (tag === 'TERMINATOR') {
          if (this.tag(i + 1) === 'ELSE' && this.tag(i - 1) !== 'OUTDENT') {
            tokens.splice.apply(tokens, [i, 1].concat(slice.call(this.indentation())));
            return 1;
          }
          if (ref = this.tag(i + 1), indexOf.call(EXPRESSION_CLOSE, ref) >= 0) {
            tokens.splice(i, 1);
            return 0;
          }
        }
        if (tag === 'CATCH') {
          for (j = k = 1; k <= 2; j = ++k) {
            if (!((ref1 = this.tag(i + j)) === 'OUTDENT' || ref1 === 'TERMINATOR' || ref1 === 'FINALLY')) {
              continue;
            }
            tokens.splice.apply(tokens, [i + j, 0].concat(slice.call(this.indentation())));
            return 2 + j;
          }
        }
        if (indexOf.call(SINGLE_LINERS, tag) >= 0 && this.tag(i + 1) !== 'INDENT' && !(tag === 'ELSE' && this.tag(i + 1) === 'IF')) {
          starter = tag;
          ref2 = this.indentation(tokens[i]), indent = ref2[0], outdent = ref2[1];
          if (starter === 'THEN') {
            indent.fromThen = true;
          }
          tokens.splice(i + 1, 0, indent);
          this.detectEnd(i + 2, condition, action);
          if (tag === 'THEN') {
            tokens.splice(i, 1);
          }
          return 1;
        }
        return 1;
      });
    };

    Rewriter.prototype.tagPostfixConditionals = function() {
      var action, condition, original;
      original = null;
      condition = function(token, i) {
        var prevTag, tag;
        tag = token[0];
        prevTag = this.tokens[i - 1][0];
        return tag === 'TERMINATOR' || (tag === 'INDENT' && indexOf.call(SINGLE_LINERS, prevTag) < 0);
      };
      action = function(token, i) {
        if (token[0] !== 'INDENT' || (token.generated && !token.fromThen)) {
          return original[0] = 'POST_' + original[0];
        }
      };
      return this.scanTokens(function(token, i) {
        if (token[0] !== 'IF') {
          return 1;
        }
        original = token;
        this.detectEnd(i + 1, condition, action);
        return 1;
      });
    };

    Rewriter.prototype.indentation = function(origin) {
      var indent, outdent;
      indent = ['INDENT', 2];
      outdent = ['OUTDENT', 2];
      if (origin) {
        indent.generated = outdent.generated = true;
        indent.origin = outdent.origin = origin;
      } else {
        indent.explicit = outdent.explicit = true;
      }
      return [indent, outdent];
    };

    Rewriter.prototype.generate = generate;

    Rewriter.prototype.tag = function(i) {
      var ref;
      return (ref = this.tokens[i]) != null ? ref[0] : void 0;
    };

    return Rewriter;

  })();

  BALANCED_PAIRS = [['(', ')'], ['[', ']'], ['{', '}'], ['INDENT', 'OUTDENT'], ['CALL_START', 'CALL_END'], ['PARAM_START', 'PARAM_END'], ['INDEX_START', 'INDEX_END'], ['STRING_START', 'STRING_END'], ['REGEX_START', 'REGEX_END']];

  exports.INVERSES = INVERSES = {};

  EXPRESSION_START = [];

  EXPRESSION_END = [];

  for (k = 0, len = BALANCED_PAIRS.length; k < len; k++) {
    ref = BALANCED_PAIRS[k], left = ref[0], rite = ref[1];
    EXPRESSION_START.push(INVERSES[rite] = left);
    EXPRESSION_END.push(INVERSES[left] = rite);
  }

  EXPRESSION_CLOSE = ['CATCH', 'THEN', 'ELSE', 'FINALLY'].concat(EXPRESSION_END);

  IMPLICIT_FUNC = ['IDENTIFIER', 'SUPER', ')', 'CALL_END', ']', 'INDEX_END', '@', 'THIS'];

  IMPLICIT_CALL = ['IDENTIFIER', 'NUMBER', 'STRING', 'STRING_START', 'JS', 'REGEX', 'REGEX_START', 'NEW', 'PARAM_START', 'CLASS', 'IF', 'TRY', 'SWITCH', 'THIS', 'BOOL', 'NULL', 'UNDEFINED', 'UNARY', 'YIELD', 'UNARY_MATH', 'SUPER', 'THROW', '@', '->', '=>', '[', '(', '{', '--', '++'];

  IMPLICIT_UNSPACED_CALL = ['+', '-'];

  IMPLICIT_END = ['POST_IF', 'FOR', 'WHILE', 'UNTIL', 'WHEN', 'BY', 'LOOP', 'TERMINATOR'];

  SINGLE_LINERS = ['ELSE', '->', '=>', 'TRY', 'FINALLY', 'THEN'];

  SINGLE_CLOSERS = ['TERMINATOR', 'CATCH', 'FINALLY', 'ELSE', 'OUTDENT', 'LEADING_WHEN'];

  LINEBREAKS = ['TERMINATOR', 'INDENT', 'OUTDENT'];

  CALL_CLOSERS = ['.', '?.', '::', '?::'];

}).call(this);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  var Scope,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  exports.Scope = Scope = (function() {
    function Scope(parent, expressions, method, referencedVars) {
      var ref, ref1;
      this.parent = parent;
      this.expressions = expressions;
      this.method = method;
      this.referencedVars = referencedVars;
      this.variables = [
        {
          name: 'arguments',
          type: 'arguments'
        }
      ];
      this.positions = {};
      if (!this.parent) {
        this.utilities = {};
      }
      this.root = (ref = (ref1 = this.parent) != null ? ref1.root : void 0) != null ? ref : this;
    }

    Scope.prototype.add = function(name, type, immediate) {
      if (this.shared && !immediate) {
        return this.parent.add(name, type, immediate);
      }
      if (Object.prototype.hasOwnProperty.call(this.positions, name)) {
        return this.variables[this.positions[name]].type = type;
      } else {
        return this.positions[name] = this.variables.push({
          name: name,
          type: type
        }) - 1;
      }
    };

    Scope.prototype.namedMethod = function() {
      var ref;
      if (((ref = this.method) != null ? ref.name : void 0) || !this.parent) {
        return this.method;
      }
      return this.parent.namedMethod();
    };

    Scope.prototype.find = function(name) {
      if (this.check(name)) {
        return true;
      }
      this.add(name, 'var');
      return false;
    };

    Scope.prototype.parameter = function(name) {
      if (this.shared && this.parent.check(name, true)) {
        return;
      }
      return this.add(name, 'param');
    };

    Scope.prototype.check = function(name) {
      var ref;
      return !!(this.type(name) || ((ref = this.parent) != null ? ref.check(name) : void 0));
    };

    Scope.prototype.temporary = function(name, index, single) {
      if (single == null) {
        single = false;
      }
      if (single) {
        return (index + parseInt(name, 36)).toString(36).replace(/\d/g, 'a');
      } else {
        return name + (index || '');
      }
    };

    Scope.prototype.type = function(name) {
      var i, len, ref, v;
      ref = this.variables;
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        if (v.name === name) {
          return v.type;
        }
      }
      return null;
    };

    Scope.prototype.freeVariable = function(name, options) {
      var index, ref, temp;
      if (options == null) {
        options = {};
      }
      index = 0;
      while (true) {
        temp = this.temporary(name, index, options.single);
        if (!(this.check(temp) || indexOf.call(this.root.referencedVars, temp) >= 0)) {
          break;
        }
        index++;
      }
      if ((ref = options.reserve) != null ? ref : true) {
        this.add(temp, 'var', true);
      }
      return temp;
    };

    Scope.prototype.assign = function(name, value) {
      this.add(name, {
        value: value,
        assigned: true
      }, true);
      return this.hasAssignments = true;
    };

    Scope.prototype.hasDeclarations = function() {
      return !!this.declaredVariables().length;
    };

    Scope.prototype.declaredVariables = function() {
      var v;
      return ((function() {
        var i, len, ref, results;
        ref = this.variables;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          v = ref[i];
          if (v.type === 'var') {
            results.push(v.name);
          }
        }
        return results;
      }).call(this)).sort();
    };

    Scope.prototype.assignedVariables = function() {
      var i, len, ref, results, v;
      ref = this.variables;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        if (v.type.assigned) {
          results.push(v.name + " = " + v.type.value);
        }
      }
      return results;
    };

    return Scope;

  })();

}).call(this);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  var LineMap, SourceMap;

  LineMap = (function() {
    function LineMap(line1) {
      this.line = line1;
      this.columns = [];
    }

    LineMap.prototype.add = function(column, arg, options) {
      var sourceColumn, sourceLine;
      sourceLine = arg[0], sourceColumn = arg[1];
      if (options == null) {
        options = {};
      }
      if (this.columns[column] && options.noReplace) {
        return;
      }
      return this.columns[column] = {
        line: this.line,
        column: column,
        sourceLine: sourceLine,
        sourceColumn: sourceColumn
      };
    };

    LineMap.prototype.sourceLocation = function(column) {
      var mapping;
      while (!((mapping = this.columns[column]) || (column <= 0))) {
        column--;
      }
      return mapping && [mapping.sourceLine, mapping.sourceColumn];
    };

    return LineMap;

  })();

  SourceMap = (function() {
    var BASE64_CHARS, VLQ_CONTINUATION_BIT, VLQ_SHIFT, VLQ_VALUE_MASK;

    function SourceMap() {
      this.lines = [];
    }

    SourceMap.prototype.add = function(sourceLocation, generatedLocation, options) {
      var base, column, line, lineMap;
      if (options == null) {
        options = {};
      }
      line = generatedLocation[0], column = generatedLocation[1];
      lineMap = ((base = this.lines)[line] || (base[line] = new LineMap(line)));
      return lineMap.add(column, sourceLocation, options);
    };

    SourceMap.prototype.sourceLocation = function(arg) {
      var column, line, lineMap;
      line = arg[0], column = arg[1];
      while (!((lineMap = this.lines[line]) || (line <= 0))) {
        line--;
      }
      return lineMap && lineMap.sourceLocation(column);
    };

    SourceMap.prototype.generate = function(options, code) {
      var buffer, i, j, lastColumn, lastSourceColumn, lastSourceLine, len, len1, lineMap, lineNumber, mapping, needComma, ref, ref1, v3, writingline;
      if (options == null) {
        options = {};
      }
      if (code == null) {
        code = null;
      }
      writingline = 0;
      lastColumn = 0;
      lastSourceLine = 0;
      lastSourceColumn = 0;
      needComma = false;
      buffer = "";
      ref = this.lines;
      for (lineNumber = i = 0, len = ref.length; i < len; lineNumber = ++i) {
        lineMap = ref[lineNumber];
        if (lineMap) {
          ref1 = lineMap.columns;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            mapping = ref1[j];
            if (!(mapping)) {
              continue;
            }
            while (writingline < mapping.line) {
              lastColumn = 0;
              needComma = false;
              buffer += ";";
              writingline++;
            }
            if (needComma) {
              buffer += ",";
              needComma = false;
            }
            buffer += this.encodeVlq(mapping.column - lastColumn);
            lastColumn = mapping.column;
            buffer += this.encodeVlq(0);
            buffer += this.encodeVlq(mapping.sourceLine - lastSourceLine);
            lastSourceLine = mapping.sourceLine;
            buffer += this.encodeVlq(mapping.sourceColumn - lastSourceColumn);
            lastSourceColumn = mapping.sourceColumn;
            needComma = true;
          }
        }
      }
      v3 = {
        version: 3,
        file: options.generatedFile || '',
        sourceRoot: options.sourceRoot || '',
        sources: options.sourceFiles || [''],
        names: [],
        mappings: buffer
      };
      if (options.inline) {
        v3.sourcesContent = [code];
      }
      return JSON.stringify(v3, null, 2);
    };

    VLQ_SHIFT = 5;

    VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT;

    VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1;

    SourceMap.prototype.encodeVlq = function(value) {
      var answer, nextChunk, signBit, valueToEncode;
      answer = '';
      signBit = value < 0 ? 1 : 0;
      valueToEncode = (Math.abs(value) << 1) + signBit;
      while (valueToEncode || !answer) {
        nextChunk = valueToEncode & VLQ_VALUE_MASK;
        valueToEncode = valueToEncode >> VLQ_SHIFT;
        if (valueToEncode) {
          nextChunk |= VLQ_CONTINUATION_BIT;
        }
        answer += this.encodeBase64(nextChunk);
      }
      return answer;
    };

    BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    SourceMap.prototype.encodeBase64 = function(value) {
      return BASE64_CHARS[value] || (function() {
        throw new Error("Cannot Base64 encode value: " + value);
      })();
    };

    return SourceMap;

  })();

  module.exports = SourceMap;

}).call(this);


/***/ }),
/* 29 */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var LF = '\n';
var CR = '\r';
var LinesAndColumns = (function () {
    function LinesAndColumns(string) {
        this.string = string;
        var offsets = [0];
        for (var offset = 0; offset < string.length;) {
            switch (string[offset]) {
                case LF:
                    offset += LF.length;
                    offsets.push(offset);
                    break;
                case CR:
                    offset += CR.length;
                    if (string[offset] === LF) {
                        offset += LF.length;
                    }
                    offsets.push(offset);
                    break;
                default:
                    offset++;
                    break;
            }
        }
        this.offsets = offsets;
    }
    LinesAndColumns.prototype.locationForIndex = function (index) {
        if (index < 0 || index > this.string.length) {
            return null;
        }
        var line = 0;
        var offsets = this.offsets;
        while (offsets[line + 1] <= index) {
            line++;
        }
        var column = index - offsets[line];
        return { line: line, column: column };
    };
    LinesAndColumns.prototype.indexForLocation = function (location) {
        var line = location.line, column = location.column;
        if (line < 0 || line >= this.offsets.length) {
            return null;
        }
        if (column < 0 || column > this.lengthOfLine(line)) {
            return null;
        }
        return this.offsets[line] + column;
    };
    LinesAndColumns.prototype.lengthOfLine = function (line) {
        var offset = this.offsets[line];
        var nextOffset = line === this.offsets.length - 1 ? this.string.length : this.offsets[line + 1];
        return nextOffset - offset;
    };
    return LinesAndColumns;
}());
/* harmony default export */ __webpack_exports__["default"] = (LinesAndColumns);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(32);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(31);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12), __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(29);

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }

    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';

    document.body.appendChild(iframe);

    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }

    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });

    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);

    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });

    document.body.removeChild(iframe);

    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

const Comment = __webpack_require__(14);
const lexer = __webpack_require__(5);
const parser = __webpack_require__(13);
const TagLine = __webpack_require__(6);

function parseBlockComment(block) {
  const BLOCK_COMMENT_DELIMITER = '###';
  const LINE_SEPARATOR = '\n';

  let innerBlock = block.substr(block.indexOf(LINE_SEPARATOR) + LINE_SEPARATOR.length);
  innerBlock = innerBlock.substr(0, innerBlock.lastIndexOf(BLOCK_COMMENT_DELIMITER));
  innerBlock = innerBlock.trim();

  const jsDocComment = new Comment(true);

  const array = innerBlock.split(LINE_SEPARATOR);
  for (let i in array) {
    const line = array[i].trim();
    let content = line;

    if (line.startsWith('@')) {
      const tagName = line.substr(0, line.indexOf(' '));
      content = new TagLine(tagName, line.substr(line.indexOf(' ') + 1));
    }

    jsDocComment.addContent(content);
  }

  return jsDocComment;
}

module.exports = function(code) {
  const ast = parser.parse(code);
  const tokens = ast.context.sourceTokens;
  let comment = undefined;

  tokens.forEach((token) => {
    if (token.type === lexer.SourceType.COMMENT) {
      if (token.start === 0 && ast.context[1] === '!') {
        console.log('shebang comment', token);
      } else {
        console.log('line comment', token);
      }
    } else if (token.type === lexer.SourceType.HERECOMMENT) {
      const {start, end} = token;
      const block = code.substr(start, end);
      comment = parseBlockComment(block);
    }
  });

  return comment;
};


/***/ })
/******/ ]);
//# sourceMappingURL=coffeedoc2jsdoc.js.map
