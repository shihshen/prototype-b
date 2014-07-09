define(function(require, exports, module) {
  'use strict';
  
  var Ember = require('ember');
  var DS = require('ember-data');
  var Todos = require('scripts/todos_app');

  Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
  });

  Todos.Todo.FIXTURES = [{
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  }, {
    id: 2,
    title: '...',
    isCompleted: false
  }, {
    id: 3,
    title: 'Profit!',
    isCompleted: false
  }];
});
