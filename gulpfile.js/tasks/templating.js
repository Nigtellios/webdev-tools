const { src, dest } = require('gulp');
const nunjucks = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const beautify = require('gulp-beautify');

const { publicDir, sourceDir } = require('../env.config');
const nunjucksScripts = require('../nunjucks-scripts');

const templatingExtensions = ['nj', 'njk', 'nunjucks', 'html'];

const templating = () => src(`${sourceDir}/templates/*.{${templatingExtensions.join(',')}}`)
  .pipe(plumber())
  /**
         * The `data` key in nunjucks config allows us to pass some additional
         * strings/functions to the nunjucks engine. This way we can easily
         * extend capabilities of the nunjucks. The data will be available
         * globally in nunjucks templates
         *
         * @see https://www.npmjs.com/package/gulp-nunjucks-render
         */
  .pipe(
    nunjucks({
      path: `${sourceDir}/templates`,
      data: nunjucksScripts,
    }),
  )
  .pipe(beautify.html({
    indentSize: 4,
    max_preserve_newlines: 0,
  }))
  .pipe(dest(publicDir));

module.exports.templating = templating;
module.exports.templatingExtensions = templatingExtensions;
