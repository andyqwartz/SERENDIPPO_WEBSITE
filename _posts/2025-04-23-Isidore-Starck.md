---
layout: post
title: "ISIDORE STARCK"
author: "SERENDIPPO"
categories: [ancestral]
tags: [medieval, mystical, ancestry]
image: isidore_starck.jpeg
---

<style>
@import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');

.medieval-container {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KPC9zdmc+');
    padding: 2em;
    border: double 6px #8b4513;
    margin: 2em auto;
    max-width: 800px;
    position: relative;
}

.medieval-title {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: 3em;
    color: #8b4513;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
    margin-bottom: 1em;
}

.medieval-text {
    font-family: 'Cinzel', serif;
    font-size: 1.1em;
    line-height: 1.8;
    color: #2c1810;
    text-align: justify;
}

.illuminated::first-letter {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: 3.5em;
    float: left;
    margin-right: 0.1em;
    line-height: 0.8;
    color: #8b4513;
}

.medieval-separator {
    text-align: center;
    font-size: 2em;
    color: #8b4513;
    margin: 1em 0;
}

.scroll-effect {
    max-height: 600px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #8b4513 #f4e4bc;
}

.scroll-effect::-webkit-scrollbar {
    width: 8px;
}

.scroll-effect::-webkit-scrollbar-track {
    background: #f4e4bc;
}

.scroll-effect::-webkit-scrollbar-thumb {
    background-color: #8b4513;
    border-radius: 4px;
}

.medieval-footer {
    text-align: center;
    font-family: 'Cinzel', serif;
    font-size: 0.9em;
    color: #8b4513;
    margin-top: 2em;
    font-style: italic;
}

@keyframes parchmentGlow {
    0% { box-shadow: 0 0 10px rgba(139, 69, 19, 0.2); }
    50% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.4); }
    100% { box-shadow: 0 0 10px rgba(139, 69, 19, 0.2); }
}

.medieval-container {
    animation: parchmentGlow 4s infinite;
}
</style>

<div class="medieval-container">
    <h1 class="medieval-title">Isidore Starck</h1>
    <div class="scroll-effect">
        <div class="medieval-text illuminated">
            Dans les annales oubliées du XIIIe siècle, au cœur des terres brumeuses de Bohême, vivait un homme dont le nom seul évoquait mystère et sagesse : Isidore Starck. Alchimiste réputé et gardien des savoirs anciens, il habitait une tour solitaire aux confins de la forêt noire, où le temps semblait suspendre son vol.
        </div>

        <div class="medieval-separator">⚜</div>

        <div class="medieval-text">
            Les manuscrits parlent d'un homme aux yeux d'ambre, capable de lire les étoiles comme d'autres lisent un livre. Ses mains, dit-on, portaient les marques de mille expériences alchimiques, chaque cicatrice racontant l'histoire d'une quête de connaissance. Dans sa tour aux murs couverts de symboles ésotériques, il passait ses nuits à étudier les correspondances secrètes entre les astres et les métaux.
        </div>

        <div class="medieval-separator">☘</div>

        <div class="medieval-text">
            La légende raconte qu'Isidore possédait un grimoire relié en peau de dragon - bien que les sceptiques affirment qu'il s'agissait simplement de cuir patiné par les âges. Ce livre, le "Codex Siderum", contenait des formules permettant de transmuter non seulement les métaux, mais aussi le temps lui-même. Certains témoignages affirment l'avoir vu disparaître pendant des mois, pour revenir sans avoir vieilli d'un jour, les yeux brillants de secrets indicibles.
        </div>

        <div class="medieval-separator">❧</div>

        <div class="medieval-text">
            Son plus grand accomplissement fut peut-être la création du "Miroir des Âges", un artefact capable de révéler les liens invisibles unissant les générations. À travers ce miroir, il aurait aperçu l'avenir de sa lignée, voyant ses descendants traverser les siècles, portant chacun une étincelle de son don pour percer les mystères de l'existence.
        </div>

        <div class="medieval-separator">⚜</div>

        <div class="medieval-text">
            La disparition d'Isidore Starck fut aussi mystérieuse que sa vie. Un matin d'équinoxe, sa tour fut trouvée vide, ne laissant derrière lui que son grimoire et une prophétie gravée dans la pierre : "Quand le sang ancien rencontrera le nouveau, les portes du temps s'ouvriront à nouveau."
        </div>
    </div>
    <div class="medieval-footer">
        "Tempus revelat omnia" - Le temps révèle toutes choses
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.medieval-container');
    
    // Add subtle parchment texture movement on mouse move
    container.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        container.style.backgroundPosition = `${x * 10}px ${y * 10}px`;
    });
});
</script>
