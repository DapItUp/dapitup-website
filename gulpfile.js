/**
 * Gulp Task File
 * -------------------------------------
 *
 * Basic Call: [sudo] gulp [task] [options]
 */

'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var pkg = require('./package.json');
var argv = require('yargs').argv;

/**
 * @name  Require
 * @description
 * Simple task to simply get the required module.
 */
function req(task, fn) {
    var setTask;

    if (task !== undefined) {
        if (fn !== undefined) {
            var mod = require('./gulp-tasks/' + task)[fn];

            if (typeof mod == 'function') {
                setTask = mod(gulp, plugins, pkg, argv);
            } else {
                setTask = mod;
            }
        } else {
            setTask = require('./gulp-tasks/' + task)(gulp, plugins, pkg, argv);
        }
    }

    return setTask;
}
// -------------------------------------
// Tasks
// -------------------------------------

// Clean
gulp.task('clean', req('clean', 'clean'));

// Copy
gulp.task('copy', req('copy', 'copy'));

// SASS
gulp.task('sass', req('sass', 'sass'));

// Scripts
// gulp.task('scripts', req('scripts', 'glob'));

// App Scripts [Sub]
gulp.task('scripts:app', req('scripts', 'app'));

// Inject
gulp.task('inject', req('inject'));

// Server
gulp.task('server', req('server'));

// Deploy
gulp.task('deploy', req('deploy'));


// -------------------------------------
// Sequence
// -------------------------------------
gulp.task('build', req('build'));

// -------------------------------------
// Default Task
// -------------------------------------
gulp.task('default', ['build'], function () {
    var paths = {
        html: req('copy', 'files'),
        js: req('scripts', 'files'),
        sass: req('sass', 'files'),
    };

    // Watch Sass
    gulp.watch([paths.sass.all], ['sass']);

    // Watch JavaScript
    gulp.watch([paths.js.libs], ['scripts:app', browserSync.reload]);

    // Watch static files
    gulp.watch([paths.html.base], ['copy', browserSync.reload]);

    // Watch app templates
    gulp.watch(['./src/**/*.html', './src/*.*', './src/**/*.php'], ['inject', browserSync.reload]);
});

// -------------------------------------
// Clean Up Task
// -------------------------------------

// Catches ctrl+c event
process.on('SIGINT', exitHandler);

function exitHandler(errors) {
    if (errors) {
        console.error(errors);
    }

    gutil.log(gutil.colors.red("Shutting down servers & clearing cache."));
    browserSync.exit();
    process.exit();
}
