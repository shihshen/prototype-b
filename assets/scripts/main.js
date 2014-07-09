require(['config/require'], function() {
  'use restrict';
  // Wait for dom ready first to have better user experience.
  require(['jquery'], function($) {
    $(document).ready(function() {
      // Add more apps here according to your document.location.pathname
      require([
        'scripts/todos_app',
        'scripts/todos_router',
        'scripts/routes/todos_route',
        'scripts/routes/todos_active_route',
        'scripts/routes/todos_completed_route',
        'scripts/routes/todos_index_route',
        'scripts/models/todo',
        'scripts/views/edit_todo_view',
        'scripts/controllers/todos_controller',
        'scripts/controllers/todo_controller',
        'css!styles/compiled/style.css'
      ]);
    });
  });
});
