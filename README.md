# SASS Boilerplate

[![Version npm][version]](http://browsenpm.org/package/brei-sass-boilerplate)
[![Build Status](https://travis-ci.org/BarkleyREI/brei-sass-boilerplate.svg?branch=master)](https://travis-ci.org/BarkleyREI/brei-sass-boilerplate) 

[version]: http://img.shields.io/npm/v/brei-sass-boilerplate.svg?style=flat-square

https://github.com/BarkleyREI/brei-sass-boilerplate

Do not make direct edits to this repository.

Fork the repository and make your edits on your copy, then do a pull request on GitHub.

## Contributing

Add mixins to https://github.com/BarkleyREI/brei-sass-mixins

Add any common QA res CSS you do to common/\*.scss

Don't think these are the limits. If you can think of anything else to include, do it!!

## Contents

### Common

Common QA-fixes and default styles for common elements. This directory is for *global* styles that affect elements on the entire site and are not likely to be overridden.

### Helpers

#### Lib

CSS Libraries (like Animate.css)

#### Mixins

Mixins for use on the entire site.

Please also make use of Foundation mixins whenever possible.

This directory is managed at https://github.com/BarkleyREI/brei-sass-mixins

#### Overrides

Foundation and other library overrides

#### Access

Accessibility classes

#### Theme Variables

Use this file to store common values like font size, z index, etc.

#### Placeholders

Placeholders are for extending styles without adding unwanted class names to the css file. Styles can be shared across multiple tags without weird grouping in the compiled CSS.

### Icons

Icon fonts and SVG

### Layout

Place layout based SCSS files here. A layout should only be positioning or context specific styles for a very specific situation.

### Modules

Modules are multi-use components of the site that can appear one or more times.

### Partials

Partials are smaller multi-use components that often are smaller pieces of modules, and are generally not found by themselves.

### Print

Print styles. Print styles are important. Do not forget to write print styles.
