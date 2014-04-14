define([
  'ember',
  'scripts/todos_app'
], function(Ember, Todos) {
  // It seems like this controller is not necessary for ember. But it is ok to write one.
  Todos.TodoController = Ember.ObjectController.extend({

    actions: {
      editTodo: function() {
        this.set('isEditing', true);
      },
      acceptChanges: function() {
        this.set('isEditing', false);

        if (Ember.isEmpty(this.get('model.title'))) {
          this.send('removeTodo');
        } else {
          this.get('model').save();
        }
      },
      removeTodo: function() {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
      }
    },

    isEditing: false,

    isCompleted: function(key, value) {
      if (value === undefined) {
        return this.get('model').get('isCompleted');
      } else {
        var model = this.get('model');
        model.set('isCompleted', value);
        model.save();
        return value;
      }
    }.property('model.isCompleted')

  });
});
