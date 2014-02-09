/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/*'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      }
    },
    uglify: {
      my_target: {
      files: {
        'js/flipper.min.js': ['js/flipper.js']
      }
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task.
  grunt.registerTask('default', ['uglify']);

};
