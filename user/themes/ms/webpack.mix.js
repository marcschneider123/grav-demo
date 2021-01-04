const mix = require('laravel-mix');
let buildFolder = 'build';
mix.setPublicPath(buildFolder);

mix.js('js/app.js', 'js')
	.extract();

mix.sass('sass/app.scss', 'css');

mix.browserSync({
	open:		false,
	proxy: 		process.env.MIX_BS_PROXY,
	files: [
		buildFolder + '/css/**/*.css',
		buildFolder + '/js/**/*.js',
		'templates/**/*.html.twig',
		'../../pages/**/*.md'
	]
});

if (mix.config.production) {
	mix.version();
} else {
	mix.sourceMaps(false, 'source-map');
}
