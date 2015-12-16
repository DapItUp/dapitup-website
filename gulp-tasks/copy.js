/**
 * Copy Task
 * -------------------------------------
 *
 * @description
 * Copies all the required files.
 */

// Includes
// -------------------------------------
var src = {
    main: [
        './src/'
    ],
    base: [
        './src/**/*.*',
        '!./src/**/*.scss',
        '!./src/*.html',
        '!./src/**/footer.php',
        '!./src/**/header.php',
        '!./src/**/*.js'
    ]
};

// Exports
// -------------------------------------
module.exports = {
    copy: copy,
    files: src
};

// Build Fn
// -------------------------------------
function copy(gulp, $, pkg, argv) {
    return function () {
        var isProd = (argv.production || argv.p) === undefined ? false : true;

        return gulp.src(src.base)
            .pipe(gulp.dest('./dist/'));
    }
}
