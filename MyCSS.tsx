export const MyCSS = `
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    position: relative; /* Memungkinkan penggunaan z-index pada footer */
}
#map {
    height: 100%; /* Peta mengisi seluruh tinggi halaman */
    width: 100%;  /* Peta mengisi seluruh lebar halaman */
    z-index: 1; /* Z-index untuk peta */
}

#footer {
    position: absolute;
    bottom: 0; /* Mengatur footer di bagian bawah */
    left: 0;
    right: 0;
    height: 0px; /* Tinggi footer */
    background-color: rgba(255, 255, 255, 0.8); /* Warna latar belakang dengan transparansi */
    text-align: center; /* Mengatur teks di tengah */
    line-height: 0px; /* Vertikal align teks */
    z-index: 2; /* Z-index lebih tinggi agar footer di atas peta */
}


`;