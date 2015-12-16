/**
 * Server Task
 * -------------------------------------
 *
 * @description
 * This starts the server and points the proxys.
 */

// Modules
// -------------------------------------
var compression     = require('compression');
var connect         = require('gulp-connect-php');
var modrewrite      = require('connect-modrewrite');
var browserSync     = require('browser-sync');
var httpProxy       = require('http-proxy');

// Exports
// -------------------------------------
module.exports = server;

// Server Fn
// -------------------------------------
function server(gulp, $, pkg, argv) {
    return function() {
        return connect.server({
            port: 8080,
            https: true,
            keepalive: false,
            base: './dist/',
            middleware: function(connect, opt) {
                return [
                    compression()
                ];
            }
        }, function() {
            browserSync({
                proxy: 'localhost:8080',
                middleware: [
                    compression()
                ]
            });
        });
    }
}
