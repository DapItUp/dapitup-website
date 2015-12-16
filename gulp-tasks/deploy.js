

gulp.task('deploy', function () {

/**
 * Deploy Task
 * -------------------------------------
 *
 * @description
 * Deploy the dist folder to the github pages website.
 */

// Modules
// -------------------------------------

// Exports
// -------------------------------------
module.exports = {
    deploy: deploy
};

// Clean Fn
// -------------------------------------
function deploy(gulp, $, pkg, argv) {
    return function() {
        return gulp.src('./dist/**/*')
          .pipe($.gulpGhPages())
      });
    }
}
