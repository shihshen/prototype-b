// Set up module management
require.config({
  // CSS plugin. Try not to use unless it is necessary. The usage: 'css!styles/...'.
  map: {
    '*': {
      'css': 'bower_components/require-css/css.min'
    }
  },
  // By default load any component from assets
  baseUrl: '/',
  paths: {
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'bower_components/jquery/dist/jquery.min'],
    'ember': 'bower_components/ember/ember.min',
    'ember-data': 'bower_components/ember-data/ember-data.min',
    'handlebars': 'bower_components/handlebars/handlebars.runtime.min'
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
