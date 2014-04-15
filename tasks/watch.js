module.exports = function(grunt) {

  /**
   * Define "watch" tasks.
   *
   * Add a watch task that automatically runs the test suite when a file in
   * the Drupal docroot changes (except for files in sites/.../files) or when
   * a file in the testing features directory changes.
   */
  grunt.loadTasks(__dirname + '/../node_modules/grunt-contrib-watch/tasks');
  grunt.config(['watch', 'behat'], {
    files: [
      '<%= config.docroot %>/**/*',
      '!<%= config.docroot %>/sites/*/files/**/*',
      'features/**/*'
    ],
    tasks: ['behat']
  });

}