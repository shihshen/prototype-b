define([
    'ember',
    'scripts/todos_app'
], function(Ember, Todos) {

    Todos.TodosIndexRoute = Ember.Route.extend({
        model: function() {
            return this.modelFor('todos');
        }
    });

});
