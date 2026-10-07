<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $program = $_POST['program'];

    echo "<h3>Data Berhasil Diterima</h3>";
    echo "Terima kasih, $nama. Anda telah mendaftar di program $program.";
    echo "<br><a href='../index.html'>Kembali ke Beranda</a>";
}
?>