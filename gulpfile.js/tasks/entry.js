const { parallel, series, task } = require('gulp');

const { scripts } = require('./tasks/scripts');
const { serve } = require('./tasks/render');
const { templating } = require('./tasks/templating');
