const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const babel = require('babel-register');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');
const server = require('gulp-develop-server');

gulp.task('js', function () {
    return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js:watch', function () {
    gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('sass', function () {
    return gulp.src('./src/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('test', () => {
    return gulp.src('./test/*.spec.js', {read: false})
        .pipe(mocha({
            compilers: babel,
            require: ['./setupTest.js']
        }));
});

gulp.task('images', function () {
    return gulp.src('./images/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('images:watch', function () {
    gulp.watch('./images/*.jpg', ['images']);
});

gulp.task('server', function () {
    server.listen({path: './index.js'});
});

gulp.task('server:watch', function () {
    gulp.watch(['./server.js'], server.restart);
});

gulp.task('default', function () {
    gulp.start('sass', 'sass:watch', 'js', 'js:watch', 'server', 'server:watch', 'images', 'images:watch');
});
