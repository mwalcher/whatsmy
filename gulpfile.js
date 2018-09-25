var gulp = require('gulp');
var sass = require('gulp-sass');
var sassFiles = 'src/assets/sass/*.scss';

gulp.task('default', ['compile'], () => {
    gulp.watch(sassFiles, ['compile']);
});

gulp.task('compile', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});
