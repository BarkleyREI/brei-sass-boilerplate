/*global describe, it, require, __dirname*/

'use strict';

// const util = require('brei-util');
const util = require('../../brei-util/index.js');
const u = require('util');

const root = __dirname + '/..';

let valid = [
	{
		'.github': [
			'CONTRIBUTING.md',
			'ISSUE_TEMPLATE.md',
			'PULL_REQUEST_TEMPLATE.md'
		]
	},
	'.gitignore',
	'.stylelintignore',
	'.stylelintrc.json',
	'.travis.yml',
	'README.md',
	{
		common: [
			'_body.scss',
			'_defaults.scss',
			'_forms.scss',
			'_headings.scss',
			'_hr.scss',
			'_images.scss',
			'_links.scss',
			'_lists.scss',
			'_selection.scss',
			'_tables.scss'
		]
	},
	{
		helpers: [
			'_placeholders.scss',
			'_theme-variables.scss',
			'_user-markup.scss',
			{
				lib: [
					'_animate.scss'
				]
			},
			{
				mixins: [
					'_mixins.scss'
				]
			},
			{
				overrides: [
					'_foundation.scss'
				]
			}
		]
	},
	{
		icons: [
			'README.md'
		]
	},
	{
		layout: [
			'_layout.scss'
		]
	},
	'main.scss',
	{
		modules: [
			'_assemble-modules.scss'
		]
	},
	'package.json',
	{
		partials: [
			'_assemble-partials.scss'
		]
	},
	{
		templates: [
			'_assemble-templates.scss'
		]
	},
	{
		test: [
			'test.js'
		]
	}
];

describe('Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root);

		let files = util.ftree(ttree);

		console.log('\n------- files --------\n');
		console.log(u.inspect(files, false, null));

		console.log('\n------- valid --------\n');
		console.log(u.inspect(valid, false, null));

		util.assert(util.deep(valid, files));

	});

});