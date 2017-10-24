module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                files: {
                    'js/app.min.js': [
						'resources/js/config.js',
						'resources/js/lib/*.js',
						'resources/js/models/*.js',
						'resources/js/controllers/*.js',
						'resources/js/app.js',
					]
                }
            }
        },

        less: {
            build: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },

                files: {
                    'css/app.min.css': [
						'resources/less/app.less'
					]
                }
            }
        },

        watch: {
            scripts: {
                files: [
					'resources/js/**/*.js',
					'resources/js/*.js',
				],
                tasks: ['uglify']
            },

            css: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'less']);
    grunt.registerTask('spy', ['watch']);
};
