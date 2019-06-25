const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('sass', () => {
    return gulp.src('./build/sass/custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sassMin', () => {
    return gulp.src('./build/sass/custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('custom.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('private-policy-sass', () => {
    return gulp.src('./build/sass/private-policy.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});





gulp.task('private-policy-sassMin', () => {
    return gulp.src('./build/sass/private-policy.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('private-policy.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('watch', () => {
    gulp.watch('./build/sass/**/*.scss', gulp.parallel('sass', 'sassMin','private-policy-sass', 'private-policy-sassMin'));
});


gulp.task('build', 
    gulp.series(['sass', 'sassMin','private-policy-sass', 'private-policy-sassMin']));