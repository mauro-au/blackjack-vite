
import _ from 'underscore';
import {
  createCards,
  askForCard,
  valorCarta,
  turnoComputadora,
  crearCartaHtml
} from "./usecases";

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['J', 'Q', 'K', 'A'];

// referencias html
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartaJugador = document.querySelector('#jugador-cartas');
const divCartaComputadora = document.querySelector('#computadora-cartas');
const puntosHtml = document.querySelectorAll('small');

let puntosJugador = 0;
let puntosComputadora = 0;

deck = createCards(types, specials);

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = askForCard(deck);
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHtml[0].innerText = puntosJugador;

  const imgCarta = crearCartaHtml(carta);
  divCartaJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento , perdiste looser');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHtml[1], divCartaComputadora, deck )
  } else if (puntosJugador === 21) {
    console.warn('21!!!, que suerte');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    setTimeout(() => {
      if (puntosJugador === 21) {
        alert('🙋🏻‍♂️ Jugador gana')
      }
    }, 50);
  }
})

btnDetener.addEventListener('click', () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  turnoComputadora(puntosJugador, puntosHtml[1], divCartaComputadora, deck)
})

btnNuevo.addEventListener('click', () => {
  deck = []
  deck = createCards(types, specials);

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHtml[0].innerText = 0;
  puntosHtml[1].innerText = 0;

  divCartaJugador.innerHTML = '';
  divCartaComputadora.innerHTML = '';

  btnDetener.disabled = false;
  btnPedir.disabled = false;
})
