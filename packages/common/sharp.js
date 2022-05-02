const sharp = require("sharp");

sharp("nodejs.png").resize(80).toFile("resized.png");
