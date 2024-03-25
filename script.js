// Function untuk memberikan pesan selamat datang yang menarik
function katakanHalo() {
    alert("Hallo aku owy!!");
}

// Mendapatkan tanggal saat ini
const tanggal = new Date();

// Mengubah format tanggal
const tanggalFormatted = tanggal.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

// Mendapatkan tombol berdasarkan ID
const tombolKlik = document.getElementById('klikButton');

// Menambahkan event listener untuk tombol jika tombol tersebut ada
if (tombolKlik) {
    tombolKlik.addEventListener('click', function() {
        katakanHalo();
    });
} else {
    console.error("Tombol dengan ID 'klikButton' tidak ditemukan.");
}
