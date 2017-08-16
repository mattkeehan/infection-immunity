module.exports = function(grunt) {

grunt.config.init({
	pkg: grunt.file.readJSON('package.JSON'),
	autoprefixer: {
		options: {
			browsers: ['last 2 versions', '> 1%', 'ie 7', 'ie 8', 'ie 9']
		},
		dist: {
			files: [{
				expand: true,
				cwd: '<%= pkg.styleDestDir %>',
				src: '*.css',
				dest: '<%= pkg.styleDestDir %>'
			}]
		}
	},
	cssmin: {
	  my_target: {
		files: [{
		 	expand: true,
			cwd: '<%= pkg.styleDestDir %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= pkg.styleDestDir %>',
			ext: '.min.css'
		}]
	  }
	},
	sass: {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= pkg.styleSrcDir %>',
				src: ['*.scss'],
				dest: '<%= pkg.styleDestDir %>',
				ext: '.css'
			}]
		}
	},
	watch: {
		sass:{
			files: ['<%= pkg.styleSrcDir %>/*.scss','<%= pkg.styleSrcDir %>/*/*.scss'],
			tasks: ['sass:dist','autoprefixer','cssmin']
		}
	}
});

grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');

grunt.registerTask('default', ['sass','autoprefixer','cssmin','watch']);
};
