module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.initConfig({
	  jasmine: {
	    JS: {
	      src: 'js/*.js',
	      options: {
	        specs: 'spec/*.spec.js'
	      }
	    }
	  }
	});

	var param = grunt.option('config');
	var config = grunt.readJSOn(param);

	grunt.registerTask('copyIndex', function(){
		grunt.file.copy('index.html', config.buildFolder + '/index.html', {
			process: function(files){
				return grunt.template.process(files,
				{
					data: {
						buildFolder: config.buildFolder,
						appName: config.appName
					}
				});
			}
		});
	});
	grunt.registerTask('copyPage1', function(){
		grunt.file.copy('page1.html', config.buildFolder + '/page1.html', {
			process: function(files){
				return grunt.template.process(files,
				{
					data: {
						buildFolder: config.buildFolder,
						pageOneName: config.pageOneName
					}
				});
			}
		});
	});
	grunt.registerTask('copyPage2', function(){
		grunt.file.copy('page2.html', config.buildFolder + '/page2.html', {
			process: function(files){
				return grunt.template.process(files,
				{
					data: {
						buildFolder: config.buildFolder,
						pageTwoName: config.pageTwoName
					}
				});
			}
		});
	});
	grunt.registerTask('build', ['copyIndex', 'copyPage1', 'copyPage2']);
};