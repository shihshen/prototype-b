define(function(require, exports, module) {
  'use strict';
  var Ember = require('ember');
  var DS = require('ember-data');

  var Todos = window.Todos = Ember.Application.create();

  Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
  
  module.exports = Todos;
});
