/*global describe, it, require, __dirname*/

'use strict';

const util = require('brei-util');
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
	'_settings.scss',
	{
		atoms: [
			'_assemble-atoms.scss'
		]
	},
	{
		common: [
			'_body.scss',
			'_defaults.scss',
			'_forms.scss',
			'_headings.scss',
			'_hr.scss',
			'_images.scss',
			'_index.scss',
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
		molecules: [
			'_assemble-molecules.scss'
		]
	},
	{
		organisms: [
			'_assemble-organisms.scss'
		]
	},
	'package.json',
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

describe('brei-sass-boilerplat -- Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root);

		let files = util.ftree(ttree);

		let vvalid = util.filterObject(valid);

		console.log('\n------- files --------\n');
		console.log(u.inspect(files, false, null));

		console.log('\n------- vvalid --------\n');
		console.log(u.inspect(vvalid, false, null));

		util.assert(util.deep(vvalid, files));

	});

});
