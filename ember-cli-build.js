/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      extension: 'scss',
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets',
      ],
    },

    'ember-prism': {
      components: [
        'handlebars',
        'javascript',
      ],
      plugins: [
        'show-language',
      ],
    },

    fingerprint: {
      enabled: false,
    },

    'ember-intl-tel-input': {
      includeUtilsScript: true
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import({
    'development': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
    'production': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
  });

  return app.toTree();
};
