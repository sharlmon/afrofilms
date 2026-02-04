'use strict';
const gulp = require('gulp');
const sort = require('gulp-sort');
const wpPot = require('gulp-wp-pot');

gulp.task('pot', () => {
  return gulp.src('./**/*.php')
    .pipe(sort())
    .pipe(wpPot( {
      domain: 'bezel-addons',
      destFile: 'bezel-addons.pot',
      package: 'bezel-addons',
      bugReport: 'http://hody.co',
      lastTranslator: 'HodyLab <support@hody.co>',
      team: 'Hody <support@hody.co>'
    } ))
    .pipe(gulp.dest('./languages'));
});
