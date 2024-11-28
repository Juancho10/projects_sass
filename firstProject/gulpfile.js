//librerias
import {src, dest, watch} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

//se une el gulp-sass con el sass
const sass = gulpSass(dartSass);

export function css( done){
    //se buscan las rutas de archivos sass y se compilan para guardar en css
    /**
     * para mostrar error de compilación se escucha con el on(1,2) el cual tiene dos parametros. 1. evento, 2. funcion
     *  */    
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css') );
    //Se utiliza para indicar que una tarea termina
    done()
}
export function dev(){
    watch('src/scss/**/*.scss', css);
}