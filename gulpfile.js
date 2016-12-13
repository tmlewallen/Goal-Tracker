var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var vendor_styles =
	['./node_modules/font-awesome/css/font-awesome.min.css',
	 './node_modules/materialize-css/dist/css/materialize.min.css']
var vendor_fonts =
	['./node_modules/font-awesome/fonts/*',
	 './node_modules/materialize-css/dist/fonts/roboto/*'];

gulp.task('styles', function(){
	return gulp.src(vendor_styles)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./src/assets/vendor'));
});

gulp.task('fonts', function(){
  return gulp.src(vendor_fonts)
    .pipe(gulp.dest('./src/assets/fonts'));
});

gulp.task('clean', function(){
	return gulp.src(['./src/assets/vendor', './src/assets/fonts'], {read:false})
		.pipe(clean());
});

gulp.task('default', ['fonts', 'styles']);