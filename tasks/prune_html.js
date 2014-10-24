(function () {
    'use strict';

    module.exports = function (grunt) {

        grunt.registerMultiTask('prune_html', 'Prune HTML using the given filter function', function () {
            var filter = this.options().filter;

            // Returns the pruned HTML string, as well as the number of
            // DOM elements that were pruned.
            var prune = function (html) {
                var _prune = require('prune-html'),
                    count = 0;

                // If the given element is a prune, increment the number of prunes.
                // Return the input for chaining.
                var count_fn = function (is_prune) {
                    if (is_prune) count += 1;
                    return is_prune;
                };

                return { 
                    html: _prune(['*'], html, grunt.util._.compose(count_fn, filter)),
                    count: count,
                };
            };

            this.files.forEach(function (file) {
                file.src.forEach(function (filepath) {
                    var pruned = prune(grunt.file.read(filepath));

                    grunt.file.write(file.dest, pruned.html);

                    if (pruned.count) {
                        grunt.log.writeln('Pruned ' + pruned.count + ' elements from ' + file.dest);
                    }
                });
            });
        });

    };

})();
