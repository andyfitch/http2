let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/backgrounds.scss', 'public/css')
    .sass('resources/assets/sass/base.scss', 'public/css')
    .sass('resources/assets/sass/blog.scss', 'public/css')
    .sass('resources/assets/sass/buttons.scss', 'public/css')
    .sass('resources/assets/sass/expose_style_fixes.scss', 'public/css')
    .sass('resources/assets/sass/fonts.scss', 'public/css')
    .sass('resources/assets/sass/footer.scss', 'public/css')
    .sass('resources/assets/sass/grunticon.scss', 'public/css')
    .sass('resources/assets/sass/header.scss', 'public/css')
    .sass('resources/assets/sass/headings.scss', 'public/css')
    .sass('resources/assets/sass/helper.scss', 'public/css')
    .sass('resources/assets/sass/hero.scss', 'public/css')
    .sass('resources/assets/sass/icons.scss', 'public/css')
    .sass('resources/assets/sass/info.scss', 'public/css')
    .sass('resources/assets/sass/logo_grid.scss', 'public/css')
    .sass('resources/assets/sass/mega_dropdown.scss', 'public/css')
    .sass('resources/assets/sass/nav.scss', 'public/css')
    .sass('resources/assets/sass/overlay.scss', 'public/css')
    .sass('resources/assets/sass/pill_switch.scss', 'public/css')
    .sass('resources/assets/sass/pricing_table.scss', 'public/css')
    .sass('resources/assets/sass/product_cards.scss', 'public/css')
    .sass('resources/assets/sass/product_grid.scss', 'public/css')
    .sass('resources/assets/sass/regular_dropdown.scss', 'public/css')
    .sass('resources/assets/sass/sections.scss', 'public/css')
    .sass('resources/assets/sass/share_demo.scss', 'public/css')
    .sass('resources/assets/sass/signup_form.scss', 'public/css')
    .sass('resources/assets/sass/simple_info_box.scss', 'public/css')
    .sass('resources/assets/sass/split.scss', 'public/css')
    .sass('resources/assets/sass/stats.scss', 'public/css')
    .sass('resources/assets/sass/templates.scss', 'public/css')
    .sass('resources/assets/sass/testimonials.scss', 'public/css')
    .sass('resources/assets/sass/video_container.scss', 'public/css');
