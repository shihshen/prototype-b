define([
  'ember',
  'scripts/todos_app',
  'templates/todos_index'
], function(Ember, Todos) {

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
