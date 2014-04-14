define([
  'ember',
  'scripts/todos_app'
], function(Ember, Todos) {
  Todos.Router.map(function() {
    this.resource('todos', {
      path: '/'
      // because above, there is no this.resource('index', {path: '/'});
    }, function() {
      // this.route('index', {path: '/'});
      this.route('active'); // is equivalent of this.route('active', {path: 'active'});
      this.route('completed');
    });
  });
});
