require(['./require.config'], function() {
    require(['jquery'], function($) {
        $(document).ready(function() {
            // keep all necessary app, router, routes, models, views and  controllers here.
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
