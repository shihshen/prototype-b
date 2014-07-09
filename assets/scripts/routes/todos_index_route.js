define(function(require, exports, module) {
  'use strict';

  var Ember = require('ember');
  var Todos = require('scripts/todos_app');
  require('templates/todos_index');

  Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('todos');
    }
  });

});
