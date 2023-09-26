function hitungRencanaBaca() {
    const sisaHalaman = parseInt(document.getElementById("halaman").value);
    const tanggalMulai = new Date(document.getElementById("mulai").value);
    let tanggalAkhir;
    if (document.getElementById("tanggal-akhir").checked) {
        tanggalAkhir = new Date(document.getElementById("akhir").value);
    } else {
        tanggalAkhir = new Date(tanggalMulai.getTime());
        tanggalAkhir.setDate(tanggalAkhir.getDate() + parseInt(document.getElementById("hari").value));
    }
    const hasil = document.getElementById("hasil");

    if (isNaN(sisaHalaman) || isNaN(tanggalMulai.getTime()) || isNaN(tanggalAkhir.getTime()) || sisaHalaman <= 0 || tanggalAkhir <= tanggalMulai) {
        hasil.innerHTML = "Input tidak valid.";
        hasil.style.color = "red";
        return;
    }

    const hariAntara = (tanggalAkhir - tanggalMulai) / (1000 * 60 * 60 * 24) + 1;
    const halamanPerHari = Math.ceil(sisaHalaman / hariAntara);
    hasil.innerHTML = `Baca ~${halamanPerHari} halaman/hari.`;
    hasil.style.color = "green";
}

function gantiTanggalAkhir() {
    document.getElementById("group-tanggal-akhir").classList.toggle('hidden');
    document.getElementById("group-hari").classList.toggle('hidden');
}
