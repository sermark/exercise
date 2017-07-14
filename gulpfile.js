'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	concat = require('gulp-concat'),
 	csso = require('gulp-csso'),
 	imagemin = require('gulp-imagemin'),
 	autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    rimraf = require('rimraf'),
    reload = browserSync.reload;

var path = {
    dest: {
        html: 'dest/',
        js: 'dest/js/',
        css: 'dest/css/',
        img: 'dest/img/',
        fonts: 'dest/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        scss: 'src/sccs/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        scss: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dest'
};

gulp.task('webserver', function () {
    browserSync({
        server: {
            baseDir:'./dest'
        },
        host: 'localhost',
        port: 3000,
        tunnel: true
    });
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dest.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.dest.js))
        .pipe(reload({stream: true}));
});


gulp.task('style:build', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false        
        }))
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(gulp.dest('dest/css'))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['html:build', 'js:build', 'style:build']);

gulp.task('watch', function (){
    watch([path.watch.html], function(event, callback) {
        gulp.start('html:build');
    });
    watch([path.watch.js], function(event, callback) {
        gulp.start('js:build');
    });
    watch([path.watch.scss], function(event, callback) {
        gulp.start('style:build'); //style:build
    });
});

gulp.task('clean', function (callback) {
    rimraf(path.clean, callback);
});

gulp.task('default', ['build', 'webserver', 'watch']);

// gulp.task('concat', function() {
//     return gulp.src('src/scss/**/*.scss')
//         .pipe(concat('main.scss'))
//         .pipe(gulp.dest('src/scss/'))
// });

// gulp.task('sass', ['concat'], function() {
//   	return gulp.src('src/scss/main.scss') // Gets all files ending with .scss in app/scss and children dirs
//     	.pipe(sass())
//     	.pipe(gulp.dest('dest/css/'))
// });

// gulp.task('autoprefixer', ['sass'], function () {
//     return gulp.src('dest/css/main.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dest/css'))
// });

// gulp.task('csso', ['autoprefixer'], function () {
//     return gulp.src('dest/css/main.css')
//        .pipe(csso())
//        .pipe(gulp.dest('dest/css'))
// });

// gulp.task('imagemin', function () {
//     return gulp.src('src/img/*')
//         .pipe(imagemin([
//     		imagemin.gifsicle({interlaced: true}),
//     		imagemin.jpegtran({progressive: true}),
//     		imagemin.optipng({optimizationLevel: 5}),
//     		imagemin.svgo({plugins: [{removeViewBox: true}]})
// 		]))
//         .pipe(gulp.dest('dest/img'))
// });

// gulp.task('copy', function () {
// 	gulp.src('src/*.html').pipe(gulp.dest('dest'))
// });


// gulp.task('default', ['concat', 'sass', 'autoprefixer', 'csso', 'imagemin', 'copy']);





// gulp.task('style:build', function () {
//     gulp.src('./src/scss/**/*.scss')
//         .pipe(concat('main.scss'))
//         .pipe(gulp.dest('src/scss/'))
//         .pipe(sass())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(csso())
//         .pipe(gulp.dest('dest/css/'))
//         .pipe(reload({stream: true}));
// });