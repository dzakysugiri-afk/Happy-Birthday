// tombol ngeselin
let clickCount = 0;

const teaseTexts = [
  "open it 💌",
  "YAKIN MAU BUKA? 😏",
  "KEPO BANGET NDUT 😜",
  "HEHE KAMU SAYANG AKU GA? 😆"
];

function handleClick() {
  const btn = document.getElementById("openBtn");

  clickCount++;

  if (clickCount < teaseTexts.length) {
    btn.innerText = teaseTexts[clickCount];

    // tombol pindah random
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
  } else {
    toPage2();
  }
}

// pindah page
function toPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
  startSlideshow();
}

function toPage3() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
  createHearts();
}

// slideshow foto
let images = ["foto1.jpg", "foto2.jpeg", "foto3.jpeg"];
let index = 0;

function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("photo").src = images[index];
  }, 2000);
}

// animasi hati
function createHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}