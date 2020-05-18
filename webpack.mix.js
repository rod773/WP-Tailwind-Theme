const mix = require('laravel-mix');

mix.postCss('./resources/css/app.css', './public/css/app.css',[
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested')
]).options({
    processCssUrls: false
});

mix.browserSync({
    proxy: 'wordpress.test',
    notify: false,
})
