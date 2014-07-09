define(function(require, exports, module) {
  'use strict';

  var Ember = require('ember');
  var Todos = require('scripts/todos_app');
  require('templates/todos_index');

  Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function() {
      return this.store.filter('todo', function(todo) {
        return todo.get('isCompleted');
      });
    },
    renderTemplate: function(controller) {
      this.render('todos/index', {
        controller: controller
      });
    }
  });
});
