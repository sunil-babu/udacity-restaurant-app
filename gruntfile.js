module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
    	dev: {
            options: {
              sizes: [
    			      { name: "_small", quality: 60, width: 320, separator: '' },
                { name: "_medium", quality: 60, width: 640, separator: '' },
                { name: "_large", quality: 60, width: 1024, separator: '' }
    			    ]
            },
            files: [{
              expand: true,
              src: ['*.{gif,jpg,png}'],
              cwd: 'img/',
              dest: 'images/'
            }]
          }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['images_src/fixed/*.{gif,jpg,png}'],
          dest: 'images/'
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
