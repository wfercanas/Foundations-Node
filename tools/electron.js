const { app, BrowserWindow } = require("electron");

let mainWindow;

// app empieza un proceso con la aplicación. Es en background.
// El proceso debe estar listo antes de abrir ventanas.
app.on("ready", createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("index.html");
}
