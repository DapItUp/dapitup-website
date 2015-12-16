/**
 * Build Task
 * -------------------------------------
 *
 * @description
 * Runs the build sequence.
 */

// Modules
// -------------------------------------
var rimraf = require('rimraf');

// Exports
// -------------------------------------
module.exports = {
    clean: clean
};

// Clean Fn
// -------------------------------------
function clean(gulp, $, pkg, argv) {
    return function(cb) {
        return rimraf('./dist/', cb);
    }
}
