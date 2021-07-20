// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { play } from "./music-sem-private.js";
import { toRoman } from "./roman.js";
import { restartAnimation } from "./restart-animation.js";

const API_ENDPOINT = 'https://swapi.dev/api'

// Exercicio 1
const music = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams"
};

play(music, document.body);


// Exercicio 2
const filmes = document.querySelector("#filmes ul");
filmes.innerHTML = "";

(async function (){
    const response = await fetch(`${API_ENDPOINT}/films/`);
    const data = await response.json();
    
    data.results.forEach(element => {
        const filmeEl = document.createElement("li");
        const romanLetter = toRoman(element.episode_id);
        const episode = `Episode ${romanLetter}`.padEnd(12, " ");
        const title = `- ${element.title}`;
        const introEl = document.querySelector("pre.introducao");
        const intro = element.opening_crawl;

        filmeEl.innerHTML = episode + title;

        filmeEl.addEventListener("click", e => {
            introEl.innerHTML = 
            `
            Episode ${romanLetter}
            ${title.toUpperCase()}
            
            ${intro}
            `
            restartAnimation(introEl);
        })
        filmes.appendChild(filmeEl);
    });
})();