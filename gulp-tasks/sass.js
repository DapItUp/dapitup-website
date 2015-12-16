/**
 * Sass Task
 * -------------------------------------
 *
 * @description
 * Task to build SCSS files.
 */

// Includes
// -------------------------------------
var files = {
    all: [
        './src/assets/scss/**/*.scss'
    ]
};

// Exports
// -------------------------------------
module.exports = {
    sass: sass,
    files: files
};


// Sass Fn
// -------------------------------------
function sass(gulp, $, pkg, argv) {
    var isProd = (argv.production || argv.p) === undefined ? false : true;
    var prodPrefixes = [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24', // Firefox 24 is the latest ESR
        'Explorer >= 8',
        'iOS >= 5',
        'Opera >= 12',
        'Safari >= 6'
    ];
    var devPrefixes = [
        'Chrome >= 20',
        'Firefox >= 24'
    ];
    var prefixes = (isProd) ? prodPrefixes : devPrefixes;

    // @note Sourcemaps cause a slower build time
    return function () {
        return $.rubySass('src/assets/scss/dapitup.scss', {
                // loadPath: files.foundation,
                style: isProd ? 'compressed' : 'nested',
                bundleExec: true
            })
            .on('error', function (err) {
                console.log(err.message);
            })
            .pipe($.autoprefixer(prodPrefixes))
            .pipe($.concat('dapitup-' + pkg.version + '.css'))
            .pipe(gulp.dest('./dist/assets/css/'));
    }
}
