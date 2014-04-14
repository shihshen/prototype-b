define([
  'ember',
  'ember-data'
], function(Ember, DS) {
  var Todos = window.Todos = Ember.Application.create();

  Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

  return Todos;
});
