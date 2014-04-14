define([
  'ember',
  'scripts/todos_app',
  'templates/todos_index'
], function(Ember, Todos) {

  Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('todos');
    }
  });

});
