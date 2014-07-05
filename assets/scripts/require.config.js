// Set up module management
require.config({
  // Plugins
  map: {
    '*': {
      'css': 'scripts/libs/css.min'
    }
  },
  //By default load any component from assets
  baseUrl: '/',
  paths: {
    'jquery': 'scripts/libs/jquery-1.10.2.min',
    'ember': 'scripts/libs/ember-1.5.0.min',
    'ember-data': 'scripts/libs/ember-data-1.0.0-beta.5.min',
    'handlebars': 'scripts/libs/handlebars.runtime-1.1.2'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    }
  }
});
