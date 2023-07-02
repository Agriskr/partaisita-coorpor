import replace from "gulp-replace";//mekle un maina
import plumber from "gulp-plumber";//kludu apstrade
import notify from "gulp-notify";//zinojuma izmete
import browsersync from "browser-sync";//lokalais serveris
import newer from "gulp-newer";//jaunumu meklesans failos
import ifPlugin from "gulp-if";//laiparslegtos starp dev un prod 
//import sass from "sass";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
    //sass: sass,

}