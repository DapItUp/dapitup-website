/**
 * Scripts Task
 * -------------------------------------
 *
 * @description
 * This manages all of our JS scripts we are including.
 */

// Modules
// -------------------------------------

// Includes
// -------------------------------------
var js = {
    libs: [
        // Libraries
        './bower_components/jquery/dist/jquery.js',
        // './bower_components/bootstrap/dist/js/bootstrap.js',
        './src/**/*.js'
    ]
};


// Exports
// -------------------------------------
module.exports = {
    app: app,
    files: js
};

// App Fn
// -------------------------------------
function app(gulp, $, pkg, argv) {
    return function () {
        var production = argv.production || argv.p;
        var development = argv.development || argv.dev;

        // Application
        return gulp.src(js.libs)
            .pipe($.if(production, $.uglify()))
            .pipe($.concat('dapitup-' + pkg.version + '.js'))
            .pipe(gulp.dest('./dist/assets/js/'));
    }
}
