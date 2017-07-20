'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	concat = require('gulp-concat'),
 	csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
 	imagemin = require('gulp-imagemin'),
 	autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    spritesmith  = require('gulp.spritesmith'),
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
        js: 'src/js/script.js',
        scss: 'src/scss/**/*.scss',
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
        .pipe(sourcemaps.init()) 
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dest.js))
        .pipe(reload({stream: true}));
});


gulp.task('style:build', function () {
    gulp.src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false        
        }))
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dest.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
       .pipe(imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.jpegtran({progressive: true}),
         imagemin.optipng({optimizationLevel: 5}),
         imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(path.dest.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dest.fonts))
});

gulp.task('build', ['html:build', 'js:build', 'style:build', 'image:build', 'fonts:build']);

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.scss], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('clean', function (callback) {
    rimraf(path.clean, callback);
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src(path.src.img)
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }));

    spriteData.img.pipe(gulp.dest(path.dest.img)); 
    spriteData.css.pipe(gulp.dest(path.dest.css));
});

gulp.task('default', ['build', 'webserver', 'watch']);
