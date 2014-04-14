define([
  'ember',
  'scripts/todos_app'
], function(Ember, Todos) {
  Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function() {
      this.$().focus();
    }
  });

  Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
});
