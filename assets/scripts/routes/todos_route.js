define(function(require, exports, module) {
  'use strict';

  var Ember = require('ember');
  var Todos = require('scripts/todos_app');
  require('templates/todos');

  Todos.TodosRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('todo');
    }
  });

});
