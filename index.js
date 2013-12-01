/**
 * External dependencies.
 */

var mini = require('mini');
var color = mini.color;
var Formatter = mini.Formatter;

/**
 * Dot formatter.
 *
 * @constructor
 */

var Dot = Formatter.extend();

/**
 * Before all tests.
 *
 * @param {Array} tests
 * @api public
 */

Dot.prototype.beforeAll = function(tests) {
  this.println();
  this.print(this.padding);
};

/**
 * After each test.
 *
 * @param {Object} test
 * @api public
 */

Dot.prototype.afterTest = function(test) {
  var status = test.failed ? 'red' : 'green';
  this.print(color(status, '.'));
};

/**
 * After all tests.
 *
 * @param {Result} test result
 * @api public
 */

Dot.prototype.afterAll = function(result) {
  this.displayResult(result);
  this.displayFailed(result);
};

/**
 * Primary export.
 */

module.exports = Dot;
