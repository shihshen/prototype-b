define([
  'ember',
  'scripts/todos_app'
], function(Ember, Todos) {

  Todos.TodosRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('todo');
    }
  });

});
