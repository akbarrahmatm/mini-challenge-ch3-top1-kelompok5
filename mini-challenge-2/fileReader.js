// Import modul fs
const fs = require("fs");

// Definisikan fungsi untuk membaca isi file log
function readLogFile(namaFile, callback) {
  fs.readFile(namaFile, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, data);
  });
}

module.exports = readLogFile;
