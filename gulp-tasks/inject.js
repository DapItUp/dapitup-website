/**
 * Inject Task
 * -------------------------------------
 *
 * @description
 * Inject the JS and CSS to the `index.html` file.
 */

// Exports
// -------------------------------------
module.exports = inject;

// Inject Fn
// -------------------------------------
function inject(gulp, $, pkg, argv) {
    return function () {
        return gulp.src('./src/**/*.html')
            .pipe($.inject(
                gulp.src('./dist/assets/js/*.js'), {
                    addRootSlash: true,
                    ignorePath: '/dist/',
                    transform: function (filePath, file) {
                        return '<script type="text/javascript" src="' + filePath + '"></script>';
                    }
                })).pipe($.inject(
                gulp.src('./dist/assets/css/*.css'), {
                    addRootSlash: true,
                    ignorePath: '/dist/',
                    transform: function (filePath, file) {
                        return '<link href="' + filePath + '" rel="stylesheet" type="text/css">';
                    }
                }))
            .pipe($.minifyHtml())
            .pipe(gulp.dest('./dist/'));
    }
}
