// galvenais modulis
import gulp from "gulp";

// importe celu
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

//ertibai taisa globalos 
global.app = {
    isBuild: process.argv.includes('--build'),//globalas mainigais gulp kura glaba karogu seit-lai noteiktu dev un prod 
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,

}

//importe uzdevumu
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";


//failu izmainu verotajs
function watcher() {
    gulp.watch(path.watch.files, reset);
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); // lai izmaiņas tūlīt tiktu uz ftp serveri un lapā, tad html = gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss); //un tā katram uzdevumam. 
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}
//export { scss }
export { svgSprive };
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(reset,fonts, images, copy, html, js, scss );

//const mainTasks = gulp.series(gulp.parallel(copy, html, js));
//const mainTasks = gulp.series(gulp.parallel(copy, html, scss, js,));
//izpildes scenariji 

//dev - develop mode vispirms kope, tad skatas un palaiž
const dev = gulp.series( mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, server);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//scenariju exports
export { dev }
export { build }
export { deployZIP }
export { deployFTP }
//izpilda scenariju pec noklusejuma
gulp.task('default', dev);

