// Jalankan welcomeMessage saat halaman dibuka
window.onload = function () {
  welcomeMessage();
};

// Welcome Message
function welcomeMessage() {
  // Prompt user untuk nama
  let username = prompt("Masukkan nama Anda:");

  if (username) {
    // Tampilkan nama di header
    document.getElementById("username").innerHTML = username;
  } else {
    // Default welcome message kalau kosong
    document.getElementById("username").innerHTML = "Tamu";
    alert("Welcome to our company website!");
  }
}

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai form
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let result = document.getElementById("formResult");

  // Validasi sederhana
  if (name === "" || email === "" || message === "") {
    alert("⚠️ Harap isi semua field!");
    result.innerHTML = "";
    return;
  }

  // Kalau sukses
  result.innerHTML = `
    ✅ Terima kasih <b>${name}</b>, pesan Anda sudah kami terima.<br>
    📧 Email: ${email}<br>
    💬 Pesan: ${message}
  `;

  // Reset form setelah submit
  document.getElementById("messageForm").reset();
});
