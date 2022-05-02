const gulp = require("gulp");
const server = require("gulp-server-livereload");

// En package.json añadir el script "build": "gulp build"
gulp.task("build", (callback) => {
  console.log("Construyendo el sitio");
  setTimeout(callback, 1300);
});

// Debería existir un folder llamado public con el HTML
// Se añade al package.json "serve": "gulp serve"
gulp.task("serve", (callback) => {
  gulp.src("public").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

// Tareas encadenadas
// Se añade al package.json "default": "gulp default"
gulp.task("default", gulp.series("build", "serve"));
