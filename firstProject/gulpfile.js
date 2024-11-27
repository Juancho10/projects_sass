import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

//se une el gulp-sass con el sass
const sass = gulpSass(dartSass);

export function prueba( done){
    console.log("Estas dentro de gulp");
    //Se utiliza para indicar que una tarea termina
    done()
}