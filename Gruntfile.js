module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'tests/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        'ot-lbstatus': {
            options: {
                server: '127.0.0.1',
                port: 22,
                file: '/path/to/my/file',
                user: 'myuser',
                password: 'mypass'
            },
            'on': {
                options: {
                    string: 'foo'
                }
            },
            'off': {
                options: {
                    string: 'bar'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
    grunt.loadTasks('tasks');
};
