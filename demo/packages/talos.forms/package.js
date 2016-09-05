Package.describe({
  name: 'talos:forms',
  version: '0.3.5',
  // Brief, one-line summary of the package.
  summary: 'Talos forms package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['livedata', 'underscore', 'deps', 'templating', 'ui', 'blaze', 'ejson', 'reactive-var', 'reactive-dict', 'random', 'jquery', 'sergeyt:typeahead', 'fourseven:scss'], 'client');

  api.use('templates:forms');

  api.imply('aldeed:simple-schema');

  api.addFiles([
    // SCSS
    'stylesheets/main.scss',

    // Templates
    'templates/wrapper.html',

    // Blocks
    'blocks/auth.html',
    'blocks/auth.js',
    'blocks/base.html',
    'blocks/base.js',

    // Inputs
    'inputs/area.html',
    'inputs/area.js',
    'inputs/auth.html',
    'inputs/auth.js',
    'inputs/radio.html',
    'inputs/radio.js',
    'inputs/select.html',
    'inputs/select.js',
    'inputs/text.html',
    'inputs/text.js',
    'inputs/time.html',
    'inputs/typeahead.html',
    'inputs/typeahead.js'
  ], 'client');
});