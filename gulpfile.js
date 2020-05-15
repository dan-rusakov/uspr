const { src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const iife = require('gulp-iife');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const inject = require('gulp-inject');
const eslint = require('gulp-eslint');

const isDev = process.env.NODE_ENV === 'development';


function html() {
  return src('./src/*.html')
    .pipe(inject(src('./dist/js/*.js', {read: false}), {
      transform: function (filepath) {
        return `<script src="${filepath.slice(5)}"></script>`;
      }
    }))
    .pipe(inject(src('./dist/css/*.css', {read: false}), {
      transform: function (filepath) {
        return `<link rel="stylesheet" href="${filepath.slice(5)}">`;
      }
    }))
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream())
}

function css() {
  if (isDev) {
    return src('./src/css/app.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(rename('main.css'))
      .pipe(dest('./dist/css/'))
      .pipe(browserSync.stream())
  } else {
    return src('./src/css/app.scss')
      .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 11']))
      .pipe(rename('main.min.css'))
      .pipe(dest('./dist/css/'))
  }
}

function libs() {
  return src([
    './src/libs/jquery/jquery.min.js',
    './src/libs/owlcarousel/owl.carousel.min.js',
    './src/libs/fancybox/jquery.fancybox.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js/'))
    .pipe(browserSync.stream())
}

function js() {
  return src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(iife({ useStrict: false }))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/js/'))
    .pipe(browserSync.stream())
}

function bundleJs() {
  return src([
    './src/libs/jquery/jquery.min.js',
    './src/libs/owlcarousel/owl.carousel.min.js',
    './src/libs/fancybox/jquery.fancybox.min.js'
  ])
    .pipe(src('./src/js/*.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(iife({ useStrict: false }))
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js/'))
}

function fonts() {
  return src('./src/fonts/**/*')
    .pipe(dest('./dist/fonts/'))
    .pipe(browserSync.stream())
}

function cleanDist() {
  return src('./dist/', { read: false, allowEmpty: true })
    .pipe(clean())
}

function img() {
  if (isDev) {
    return src('./src/img/*')
      .pipe(dest('./dist/img/'))
      .pipe(browserSync.stream())
  } else {
    return src('./src/img/*')
      .pipe(imagemin())
      .pipe(dest('./dist/img/'))
  }
}

function server() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
}

function watchFiles() {
  watch(['./src/css/**/*.scss'], css);
  watch(['./src/libs/**/*.js'], libs);
  watch(['./src/js/*.js'], js);
  watch(['./src/fonts/**/*'], fonts);
  watch(['./src/img/*'], img);
  watch(['./src/*.html'], html);
  server();
}

exports.build = series(cleanDist, parallel(css, fonts, img, bundleJs), html);
exports.default = series(cleanDist, parallel(css, fonts, img, js, libs), html, watchFiles);
