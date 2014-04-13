// Set up module management
require.config({
    //By default load any component from assets
    baseUrl: '/',
    paths: {
        'jquery': 'scripts/libs/jquery-1.10.2',
        'ember': 'scripts/libs/ember-1.5.0',
        'ember-data': 'scripts/libs/ember-data',
        'handlebars': 'scripts/libs/handlebars-1.1.2',

        // Plugins
        'css': 'scripts/libs/css'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        },
        'ember-data': {
            deps: ['ember'],
            exports: 'DS'
        }
    }
});
