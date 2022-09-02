const productsArray = [
  {
    id: 1,
    title: "Филадельфия хит рол",
    itemInbox: 6,
    weight: 180,
    price: 300,
    imgSrc: "philadelphia.jpg",
    message: "Cамые ахуенные суши",
  },
  {
    id: 2,
    title: "Калифорния темпура",
    itemInbox: 6,
    weight: 205,
    price: 250,
    imgSrc: "california-tempura.jpg",
    message: "Cуши как суши, есть пиздатей",
  },
  {
    id: 3,
    title: "Запеченый ролл «Калифорния»",
    itemInbox: 6,
    weight: 182,
    price: 230,
    imgSrc: "zapech-california.jpg",
    message: "Запекали как твою бывшую",
  },
  {
    id: 4,
    title: "Филадельфия",
    itemInbox: 6,
    weight: 230,
    price: 320,
    imgSrc: "philadelphia.jpg",
    message: "Холодные как твоя бывшая",
  },
];

const modalCard = document.querySelector(".modalCard");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

document.addEventListener("click", function (event) {
  event.preventDefault();
  const clickImg = event.target.dataset.img;
  const id = +event.target.dataset.id;

  if (clickImg === "modal") {
    const sushi = productsArray.find((element) => element.id === id);

    openModal(sushi);
    console.log(id, sushi);
  }
});

function openModal(sushi) {
  modalCard.classList.add("active");
  overlay.classList.add("active");

  const modalImg = document.querySelector(".modal-img");
  modalImg.src = `img/roll/${sushi.imgSrc}`;
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerHTML = sushi.title;
  const modalMessage = document.querySelector(".modal-message");
  modalMessage.innerHTML = sushi.message;
}
// закрывается при нажатии на крестик

btnClose.addEventListener("click", function () {
  close();
});

// закрывается при нажатии на overloy

overlay.addEventListener("click", function () {
  close();
});

function close() {
  modalCard.classList.remove("active");
  overlay.classList.remove("active");
}
