const fileReader = require("./fileReader");

const urlFile = "log.txt";

fileReader(urlFile, (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan:", err);
    return;
  }

  // Menampilkan isi file log
  console.log("Isi file log.txt:");
  console.log(data);
});
