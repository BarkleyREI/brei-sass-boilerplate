/*global describe, before, it, after, require*/

'use strict';

const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-formatter-pretty');
const assert = require('assert');
const path = require('path');

let lintResults = {};

describe('brei-sass-boilerplate -- Test (test/test.js)', function () {
	before(function (done) {
		stylelint.lint({
			configFile: './.stylelintrc.json',
			ignorePath: './.stylelintignore',
			formatter: styleLintFormatter,
			files: path.join(__dirname, '../**/*.scss')
		}).then(function (data) {
			lintResults = data;
			done();
		}).catch(function (err) {
			// do things with err e.g.
			console.error(err.stack);
			done();
		});

	});
	it('Base boilerplate passes linting', function () {
		assert.equal(lintResults.errored, false);
	});
	after(function () {
		if (lintResults.errored) {
			console.log(lintResults.output);
		}
	});
});
