/**
 * Deploy Task
 * -------------------------------------
 *
 * @description
 * Deploy the dist folder to the github pages website.
 */

// Modules
// -------------------------------------
var deploy = require('gulp-gh-pages');

// Exports
// -------------------------------------
// module.exports = deploy;

// Clean Fn
// -------------------------------------
module.exports = function(gulp, $, pkg, argv) {
    return function() {
        return gulp.src('./dist/**/*')
          .pipe(deploy({
              remoteUrl: 'https://github.com/mikehuebner/dapitup.github.io.git'
          }));
    }
}
