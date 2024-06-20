const khodamNames = [
  "Kadal Sakti",
  "Sapu lidi",
  "Kucing Garong",
  "Monyet Sakti",
  "Ular Naga",
  "Kelinci Ajaib",
  "Tupai Gesit",
  "Katak Beracun",
  "Pingiun Sakti",
  "Bandar Bokep",
  "Kambing Hitam",
  "Beruang Kutub",
  "Rubah Ekor Sembilan",
  "Singa Emas",
  "Gajah Biru",
  "Jerapah Terbang",
  "Kangguru Perak",
  "Koala Bermata Satu",
  "Panda Raksasa",
  "Kelelawar Vampir",
  "Burung Merak",
  "Burung Hantu",
  "Burung Kolibri",
  "Burung Bangau",
  "Burung Camar",
  "Ikan Hiu",
  "Ikan Pari",
  "Ikan Mas",
  "Ikan Koi",
  "Ikan Piranha",
  "Laba-laba Tarantula",
  "Kalajengking Raksasa",
  "Lebah Madu",
  "Kupu-kupu Raksasa",
  "Belalang Sembah",
  "Kecoa Terbang",
  "Semut Api",
  "Rayap Pelangi",
  "Kepiting Kenari",
  "Udang Galah",
  "Cacing Besar Alaska",
  "Siput Raksasa",
  "Keong Racun",
  "Bekicot Emas",
  "Lipan Biru",
  "Kumbang Badak",
  "Kunang-kunang",
  "Capung Raksasa",
  "Lalat Hijau",
  "Nyamuk Sakti",
  "Kadal Licin",
  "Burung Elang",
  "Kucing Anggora",
  "Monyet Salto",
  "Ular Kobra",
  "Kelinci Terbang",
  "Tupai Ninja",
  "Katak Loncat",
  "Landak Cerdas",
  "Kura-kura Perkasa",
  "Harimau Loreng",
  "Beruang Coklat",
  "Rubah Cerdik",
  "Singa Putih",
  "Gajah Afrika",
  "Jerapah Langit",
  "Kangguru Biru",
  "Koala Lucu",
  "Panda Mini",
  "Kelelawar Gua",
  "Burung Cendrawasih",
  "Burung Kakaktua",
  "Burung Merpati",
  "Burung Pelikan",
  "Burung Nuri",
  "Kosong",
];

function khodamName() {
  let name = document.getElementById("name").value;
  const notification = document.querySelector(".notification");

  if (name === "") {
    notification.style.display = "block";
  } else {
    let khodamRandom = Math.floor(Math.random() * khodamNames.length);
    const khodam = document.querySelector(".output-khodam");

    if (khodamNames[khodamRandom] === "Kosong") {
      khodam.innerHTML =
        "Maaf, sepertinya Anda belum memiliki khodam. Tenang saja, mungkin khodam Anda lagi nongkrong dulu di warung kopi.";
    }

    const names = document.querySelector(".output-name");
    notification.style.display = "none";
    names.innerHTML = name;
    names.style.textTransform = "capitalize";
    khodam.innerHTML = khodamNames[khodamRandom];
    document.querySelector(".result").style.display = "block";
    document.getElementById("check-button").disabled = true;

    // Clear input field
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-button");
  const nameInput = document.getElementById("name");

  checkButton.addEventListener("click", function () {
    khodamName();
  });
  nameInput.addEventListener("input", function () {
    // Enable button if name input changes
    document.getElementById("check-button").disabled = false;
  });
  nameInput.addEventListener("input", function () {
    document.querySelector(".result").style.display = "none";
    document.querySelector(".notification").style.display = "none";
  });
  checkButton.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      khodamName();
    }
  });
});
