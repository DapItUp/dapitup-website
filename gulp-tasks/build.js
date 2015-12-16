/**
 * Build Task
 * -------------------------------------
 *
 * @description
 * Runs the build sequence.
 */

// Modules
// -------------------------------------
var runSequence = require('run-sequence');
var gutil       = require('gulp-util');

// Exports
// -------------------------------------
module.exports = build;

// Build Fn
// -------------------------------------
function build(gulp, $, pkg, argv) {
    return function () {
        return runSequence(
            [
                'clean'
            ],
            'copy',
            'scripts:app',
            'sass',
            'inject',
            'server',
            function () {
                gutil.log(gutil.colors.green("-----------------------------------------"));
                gutil.log(gutil.colors.cyan("Successfully built - " + pkg.name + " v" + pkg.version));
                gutil.log(gutil.colors.green("-----------------------------------------"));
            });
    }
}
