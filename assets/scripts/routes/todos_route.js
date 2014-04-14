define([
  'ember',
  'scripts/todos_app',
  'templates/todos'
], function(Ember, Todos) {

  Todos.TodosRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('todo');
    }
  });

});
