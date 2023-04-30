/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const createCard = () => {
    let palosRandom = palos[Math.floor(Math.random() * palos.length)];
    let valoresRandom = valores[Math.floor(Math.random() * valores.length)];

    let paloSuperior = document.querySelector("#palo-superior");
    paloSuperior.innerHTML = palosRandom;

    let paloInferior = document.querySelector("#palo-inferior");
    paloInferior.innerHTML = palosRandom;

    let valorCarta = document.querySelector(".valor-carta");
    valorCarta.innerHTML = valoresRandom;

    if (palosRandom === "♥" || palosRandom === "♦") {
      paloSuperior.classList.add("text-danger");
      paloInferior.classList.add("text-danger");
      valorCarta.classList.add("text-danger");
    }
  };

  console.log(createCard());

  const botonPickCard = document.querySelector("button");
  botonPickCard.addEventListener("click", createCard);
};
