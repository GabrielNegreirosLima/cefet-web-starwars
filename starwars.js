// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { play } from "./music-sem-private.js";

const API_ENDPOINT = 'https://swapi.dev/api'

// Exercicio 1
const music = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams"
};

play(music, document.body);
