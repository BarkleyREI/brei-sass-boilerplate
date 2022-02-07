/*global describe, it, require*/

'use strict';

const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-formatter-pretty');
const assert = require('assert');
const path = require('path');
const glob = require('glob');

const scssGlob = path.join(__dirname, '../**/*.scss');

let lintResults = {};
let scssFiles = [];

describe('brei-sass-boilerplate -- verify that files exist in this package -- Test (test/test.js)', function () {

	before(function (done) {

		glob(scssGlob, {}, function (er, files) {
			scssFiles = files;
			console.log(scssFiles);

			done();
		});

	});
	it('SCSS Files detected', function () {
		assert.notEqual(scssFiles.length, 0);
	});

});

describe('brei-sass-boilerplate -- Test (test/test.js)', function () {
	before(function (done) {

		console.log('--- before ---');
		console.log(scssGlob);
		console.log(scssFiles);
		console.log('--- before ---');
		
		stylelint.lint({
			configFile: './.stylelintrc.json',
			ignorePath: './.stylelintignore',
			formatter: styleLintFormatter,
			files: scssGlob
		}).then(function (data) {
			console.log(data);
			lintResults = data;
			done();
		}).catch(function (err) {
			// do things with err e.g.
			console.log(err);
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
