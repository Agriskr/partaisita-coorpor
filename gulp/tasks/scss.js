

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import cleanCss from 'gulp-clean-css';//saspiez failu
import webpcss from 'gulp-webpcss'; //webp bildes caur css bacgraundam
import autoprefixer from 'gulp-autoprefixer'; //pieliek vendor prefixus web moz  
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true }) //sourcemaps var tikt ieslegts uz dev ar app.isDev

        .pipe(app.plugins.plumber(//kludu apstrade
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: ,%=error.message %>"
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/')) // samaina @img uz img lai no stilu faila izietu un samekletu bildi backgraundam piem
        .pipe(sass({
            outputStyle: 'expanded'//kompilators, te izversta veida
        }))
        .pipe(groupCssMediaQueries())
        // .pipe( webpcss({
        //     webpClass: ".webp",
        //     noWebpClass: ".no-webp"
        // }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        //ja vajag nesaspiestu stilu failu, tad atkomentēt šo, izstrādē lai paliek atkomentēts
        .pipe(app.gulp.dest(app.path.build.css))
        
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: true }))
        .pipe(app.plugins.browsersync.stream());
}

