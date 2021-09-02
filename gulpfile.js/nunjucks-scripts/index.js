const fs = require('fs');

const { sourceDir } = require('../env.config');

const nunjucksScripts = {
  /**
     * Returns path to image by providing its name. By default the path is `${publicDirectory}/assets/images/`
     * @example <img src="{{ imageSrc('forest.jpeg') }}" alt="Example forests image">
     */

  imageSrc: (name) => `assets/images/${name}`,
  /**
     * Allows to add inline svg from `${publicDirectory}/assets/icons/`path to nunjucks template simply by svg `name`.
     * @example {{ svg('lock') | safe }}
     */

  svg: (name) => fs.readFileSync(`${sourceDir}/assets/icons/${name}.svg`),
  /**
     * Returns path to svg by providing its name. By default the path is `${publicDirectory}/assets/icons/`
     * @example <img src="{{ svgSrc('lock') }}" alt="Lock svg icon">
     */
  svgSrc: (name) => `assets/icons/${name}.svg`,

  /**
     * Returns slugified version of given string
     * @example <main data-page="{{ slugify('About us') }}"> // <main data-page="about-us">
     */
  slugify: (string) => string.toLowerCase().replace(/ /g, '-'),
};

module.exports = nunjucksScripts;
