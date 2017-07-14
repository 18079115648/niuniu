var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var Config = {
    baseDir: './public'
};

gulp.task('server', ["sassfile"], function() {
    browserSync.init({
        files: ['./*/**.html', './*/**.js', './*/**.css'],
        server: {
            baseDir: Config.baseDir
        },
        notify: false
    });
});

gulp.watch(Config.baseDir + '/sass/**/**.scss', ['sassfile']);
gulp.task('sassfile', function() {
    return gulp.src(Config.baseDir + '/sass/**/style.scss')
           .pipe(sass().on('error', sass.logError))
           .pipe(gulp.dest(Config.baseDir + '/sass'));
});

gulp.task('default', ['server']);
gulp.task('complie', ['sassfile']);


