/**
 * Clean Up Task
 * -------------------------------------
 *
 * @description
 * Clears all data.
 */

// Modules
// -------------------------------------
var browserSync = require('browser-sync');

// Exports
// -------------------------------------
module.exports = cleanUp;

// Clean Up Fn
// -------------------------------------
function cleanUp(process, $) {
    return function () {
        // Do something when app is closing
        process.on('exit', exitHandler);

        // Catches ctrl+c event
        process.on('SIGINT', exitHandler);
    }
}


function exitHandler(errors) {
    if (errors) {
        console.error(errors);
    }

    console.log("Shutting down servers & clearing cache.");
    browserSync.exit();
    process.exit();
}
