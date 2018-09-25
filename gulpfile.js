var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['compile'], () => {
    gulp.watch('src/assets/sass/**/*.scss', ['compile']);
});

gulp.task('compile', function() {
    gulp.src('src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});
