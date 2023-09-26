document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("readingCalculatorForm").addEventListener("submit", hitungRencanaBaca);
    document.querySelectorAll("[name='jenis-tanggal-akhir']").forEach(elem => {
        elem.addEventListener("change", gantiTanggalAkhir);
    });
});

function hitungRencanaBaca(event) {
    event.preventDefault();

    const halamanElem = document.getElementById("halaman");
    const mulaiElem = document.getElementById("mulai");
    const akhirElem = document.getElementById("akhir");
    const hariElem = document.getElementById("hari");
    const hasilElem = document.getElementById("hasil");

    const sisaHalaman = parseInt(halamanElem.value);
    const tanggalMulai = new Date(mulaiElem.value);
    let tanggalAkhir;

    if (document.getElementById("tanggal-akhir").checked) {
        tanggalAkhir = new Date(akhirElem.value);
    } else {
        tanggalAkhir = new Date(tanggalMulai.getTime());
        tanggalAkhir.setDate(tanggalMulai.getDate() + parseInt(hariElem.value));
    }

    if (isNaN(sisaHalaman) || isNaN(tanggalMulai.getTime()) || isNaN(tanggalAkhir.getTime()) || sisaHalaman <= 0 || tanggalAkhir < tanggalMulai) {
        hasilElem.innerText = "Input tidak valid.";
        hasilElem.style.color = "red";
        return;
    }

    const hariAntara = (tanggalAkhir - tanggalMulai) / (1000 * 60 * 60 * 24) + 1;
    const halamanPerHari = Math.ceil(sisaHalaman / hariAntara);
    hasilElem.innerText = `Baca ~${halamanPerHari} halaman/hari.`;
    hasilElem.style.color = "green";
}

function gantiTanggalAkhir() {
    const groupTanggalAkhir = document.getElementById("group-tanggal-akhir");
    const groupHari = document.getElementById("group-hari");
    groupTanggalAkhir.classList.toggle('hidden');
    groupHari.classList.toggle('hidden');

    const akhirElem = document.getElementById("akhir");
    const hariElem = document.getElementById("hari");

    akhirElem.required = !akhirElem.required;
    hariElem.required = !hariElem.required;
}
