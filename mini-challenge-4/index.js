// Import library Axios
const axios = require("axios");

// URL API eksternal
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Fungsi untuk mengambil data dari API dan menempatkannya dalam sebuah array
async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Panggil fungsi fetchData untuk mengambil data dari API
fetchData()
  .then((data) => {
    // Menampilkan data yang diperoleh
    console.log("Data dari API:", data);

    // Menyimpan data dalam sebuah array
    const dataArray = Array.isArray(data) ? data : [data];
    console.log("Data dalam bentuk array:", dataArray);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
