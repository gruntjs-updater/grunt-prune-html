grunt-prune-html
================

[Grunt][] plugin for pruning HTML strings using [prune-html][].


Installation
------------

Install grunt-prune-html by running:

    npm install grunt-prune-html


Documentation
-------------

    prune_html: {
        templates: {
            expand: true,
            src: 'app/**/*.html',
            dest: 'build/tmp/pruned_templates',
        },
        // filter is invoked with `this` as a cheerio object.
        // You can use cheerio attributes: http://cheeriojs.github.io/cheerio/#attributes
        options: {
            filter: function () { return this.attr('prune') !== undefined; },
        },
    },

    grunt.loadNpmTasks('grunt-prune-html');


Contribute
----------

- Issue Tracker: github.com/bodylabs/grunt-prune-html/issues
- Source Code: github.com/bodylabs/grunt-prune-html


License
-------

The project is licensed under the two-clause BSD license.


[Grunt]: http://gruntjs.com/
[prune-html]: https://github.com/thlorenz/prune-html
