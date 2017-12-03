/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const defaultsDeep = require('lodash.defaultsdeep');
const SassCompiler = require('broccoli-sass-source-maps');
const createFile = require('broccoli-file-creator');
const chalk = require('chalk');

const log = (message) => {
  return chalk.dim('[ember-intl-tel-input]') + ': ' + message;
};

const warn = (message) => {
  return log(chalk.bgYellow(chalk.bold("WARN")) + ' ' + message);
};

const defaultOptions = {
  includeUtilsScript: false,
  exportFlagsImages: true,
  cssVariables: {
    hoverColor: null,
    greyText: null,
    greyBorder: null,

    flagHeight: null,
    flagWidth: null,
    flagPadding: null,

    borderWidth: null,

    arrowHeight: null,
    arrowWidth: null,
    triangleBorder: null,
    arrowPadding: null,
    arrowColor: null,

    inputPadding: null,
    selectedFlagWidth: null,
    selectedFlagArrowWidth: null,
    selectedFlagDialCodeWidth: null,
    selectedFlagArrowDialCodeWidth: null,

    flagsImagePath: '"images/"',
    flagsImageName: null,
    flagsImageExtension: null,

    mobilePopupMargin: null,
  }
};

module.exports = {
  name: 'ember-intl-tel-input',

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);
    let target = (parentAddon || app);

    let options = target.options['ember-intl-tel-input'];

    this._options = defaultsDeep(options, defaultOptions);

    if (this._options.exportFlagsImages) {
      if (this._options.cssVariables.flagsImageName || this._options.cssVariables.flagsImageExtension) {
        console.warn(warn(`${chalk.bold("cssVariables.flagsImageName")} and ${chalk.bold("cssVariables.flagsImageExtension")} options will be ignored due ${chalk.bold("exportFlagsImages")} is ${chalk.green("true")}`));
      }
      this._options.cssVariables.flagsImageName = null;
      this._options.cssVariables.flagsImageExtension = null;
    }

    // Remove initial '.' of flagsImageExtension
    if (this._options.cssVariables.flagsImageExtension && this._options.cssVariables.flagsImageExtension.charAt(0) === '.') {
      this._options.cssVariables.flagsImageExtension = this._options.cssVariables.flagsImageExtension.substr(1);
    }

    this._scssString = this.createScssStringWithVariables(this._options.cssVariables);
    this._shouldBuildCss = this._scssString !== null;

    if (this._options.includeUtilsScript) {
      target.import('vendor/intl-tel-input/js/utils.js');
    }

    target.import({
      development: 'vendor/intl-tel-input/js/intlTelInput.js',
      production: 'vendor/intl-tel-input/js/intlTelInput.min.js'
    });

    target.import('vendor/intl-tel-input/css/intlTelInput.css')
  },

  createScssStringWithVariables(cssVariables) {
    let fileString = '';
    let defaults = true;
    for (let variable in cssVariables) {
      let value = cssVariables[variable];
      if (value && value !== null) {
        defaults = false;
        fileString += `$${variable}: ${value};\n`;
      }
    }

    if (defaults) {
      return null;
    } else {
      fileString += '\n@import "intlTelInput";\n';
      return fileString;
    }
  },

  treeForVendor(vendorTree) {
    let trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }

    let intlTelInputJsTree = new Funnel(`${this.nodeModulesPath}/intl-tel-input/build`, {
      destDir: 'intl-tel-input',
      include: [/js\/.*\.js$/],
    });
    trees.push(intlTelInputJsTree);

    let intlTelInputCssTree;
    if (this._shouldBuildCss) {
      let scssBaseFilename = '/styles/base.scss';
      let intlTelInputScssSrcTrees = [
        new Funnel(`${this.nodeModulesPath}/intl-tel-input/src/css`),
        createFile(scssBaseFilename, this._scssString)
      ];
      intlTelInputCssTree = new SassCompiler(intlTelInputScssSrcTrees, scssBaseFilename, 'intl-tel-input/css/intlTelInput.css');
    } else {
      intlTelInputCssTree = new Funnel(`${this.nodeModulesPath}/intl-tel-input/build`, {
        destDir: 'intl-tel-input',
        include: [/css\/.*\.css$/],
        exclude: ['demo.css']
      });
    }
    trees.push(intlTelInputCssTree);

    return mergeTrees(trees);
  },

  treeForPublic(publicTree) {
    let trees = [];
    if (publicTree) {
      trees.push(publicTree);
    }
    if (this._options.exportFlagsImages) {
      let flagsImagePath = `assets/${this._options.cssVariables.flagsImagePath || '../img/'}`;
      flagsImagePath = flagsImagePath.replace(/"|'/g, '');
      let imagesTree = new Funnel(`${this.nodeModulesPath}/intl-tel-input/build/img`, {
        destDir: flagsImagePath
      });
      trees.push(imagesTree);
    }

    return mergeTrees(trees);
  }
};
