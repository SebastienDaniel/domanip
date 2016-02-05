module.exports = function(grunt) {
    // instructions for grunt
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            src:  [ "src/scripts/**/*.js" ]
        },
        jscs: {
            src: [ "src/scripts/**/*.js" ]
        },
        jsdoc: {
            src: ["src/scripts/*.js"],
            options: {
                destination: "doc",
                private: false
            }
        },
        mocha_phantomjs: {
            all: ["test/**/*.html"]
        },
        browserify: {
            test: {
                options: {
                    browserifyOptions: {
                        standalone: "domanip"
                    }
                },
                files: {
                    "test/domanip.js": ["src/scripts/index.js"]
                }
            }
        },
        jsdoc2md: {
            readme: {
                options: {
                    "no-gfm": true
                },
                src: 'src/scripts/*.js',
                dest: 'README.md'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jsdoc");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-mocha-phantomjs");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-jsdoc-to-markdown");

    grunt.registerTask("test", ["browserify:test", "jshint", "jscs", "mocha_phantomjs"]);
};
