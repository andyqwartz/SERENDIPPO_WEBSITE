---
layout: post
title: "PHYLLIS STONE"
author: "SERENDIPPO"
categories: [ancestral]
tags: [celtic, mystical, ancestry]
image: logo_white-2.png
---

<html lang="gd">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHANT DES PIERRES</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fondamento&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');

        body {
            background: #0a1f0a;
            color: #a7c4a7;
            font-family: 'Cormorant Garamond', serif;
            margin: 0;
            overflow-x: hidden;
            cursor: none;
        }

        #customCursor {
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(167, 196, 167, 0.8) 0%, rgba(167, 196, 167, 0) 70%);
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            filter: blur(2px);
            transform: translate(-50%, -50%);
        }

        .mist {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5"/><feComponentTransfer><feFuncR type="discrete" tableValues="0 0.5 1 1"/><feFuncG type="discrete" tableValues="0 0.5 0.7 1"/><feFuncB type="discrete" tableValues="0 0.5 0.7 1"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(%23f)"/></svg>');
            opacity: 0.05;
            mix-blend-mode: screen;
            pointer-events: none;
            animation: mistMove 20s linear infinite;
        }

        @keyframes mistMove {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-20px, 10px); }
            100% { transform: translate(0, 0); }
        }

        .title {
            font-family: 'Fondamento', cursive;
            font-size: 4rem;
            text-align: center;
            margin: 2em 0;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 2s forwards;
            text-shadow: 0 0 20px rgba(167, 196, 167, 0.5);
        }

        .content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2em;
            position: relative;
            z-index: 1;
        }

        .text-block {
            opacity: 0;
            transform: translateY(20px);
            text-align: justify;
            margin: 2em 0;
            font-size: 1.2em;
            line-height: 1.6;
            position: relative;
        }

        .reveal {
            animation: fadeInUp 1s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .stone-circle {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            pointer-events: none;
            opacity: 0.1;
        }

        .stone {
            position: absolute;
            width: 20px;
            height: 60px;
            background: rgba(167, 196, 167, 0.2);
            transform-origin: center 200px;
        }

        .rune {
            position: absolute;
            font-family: 'Fondamento', cursive;
            color: rgba(167, 196, 167, 0.2);
            pointer-events: none;
            user-select: none;
            mix-blend-mode: screen;
            animation: float 15s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(15px, -15px) rotate(5deg); }
            50% { transform: translate(0, -30px) rotate(0deg); }
            75% { transform: translate(-15px, -15px) rotate(-5deg); }
        }

        .separator {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(167, 196, 167, 0.5), transparent);
            margin: 3em 0;
            position: relative;
        }

        .separator::before {
            content: '☘';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: rgba(167, 196, 167, 0.5);
            font-size: 1.5em;
        }

        .portal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle at center, 
                rgba(167, 196, 167, 0) 0%,
                rgba(167, 196, 167, 0.1) 50%,
                rgba(167, 196, 167, 0) 100%
            );
            opacity: 0;
            pointer-events: none;
            transition: all 2s;
        }

        .portal.active {
            opacity: 1;
            width: 400px;
            height: 400px;
        }

        header, footer {
            display: none !important;
        }
    </style>
</head>
<body>
    <div id="customCursor"></div>
    <div class="mist"></div>
    <div class="stone-circle"></div>
    <div class="portal"></div>

    <div class="content">
        <h1 class="title">Phyllis Stone</h1>

        <div class="text-block">
            Dans les brumes du XVe siècle écossais vivait une femme dont les cheveux d'argent brillaient comme la lune sur la rosée : Phyllis Stone. Les habitants des Highlands murmuraient que ses yeux changeaient de couleur avec les saisons - verts comme la mousse au printemps, dorés comme les feuilles en automne.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            Son jardin était un lieu de mystère et de guérison, où poussaient des herbes que nul autre ne savait cultiver. Les malades venaient de loin pour ses remèdes, mais aussi pour ses prophéties, car Phyllis entendait ce qu'elle nommait le "Chant des Pierres" - les murmures des anciens cercles de pierre qui parsèment l'Écosse.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            Dans sa chaumière aux murs couverts de tapisseries prophétiques, elle tissait des motifs étranges qui semblaient bouger dans la pénombre. Certains disaient que ces tapisseries racontaient l'histoire de temps qui n'étaient pas encore venus, d'autres qu'elles révélaient des chemins cachés entre les mondes.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            Un soir de Samhain, alors que la frontière entre les mondes s'amenuisait, Phyllis disparut dans la brume, laissant derrière elle une tapisserie inachevée. Sur le métier à tisser, les fils d'or et d'argent formaient une image troublante : celle d'une rencontre future, dans un temps qui n'était pas encore né.
        </div>

        <div class="separator"></div>

        <div class="text-block" style="text-align: center; font-style: italic;">
            "Tha an t-àm a' tighinn"
        </div>
    </div>

    <audio id="ambient" loop>
        <source src="https://www.fesliyanstudios.com/play-mp3/6751" type="audio/mp3">
    </audio>

    <script>
        // Custom cursor with mist effect
        const cursor = document.getElementById('customCursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Reveal text blocks on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        });

        document.querySelectorAll('.text-block').forEach(block => {
            observer.observe(block);
        });

        // Create stone circle
        const stoneCircle = document.querySelector('.stone-circle');
        for (let i = 0; i < 12; i++) {
            const stone = document.createElement('div');
            stone.className = 'stone';
            stone.style.transform = `rotate(${i * 30}deg)`;
            stoneCircle.appendChild(stone);
        }

        // Add floating runes
        const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ'];
        const content = document.querySelector('.content');

        for (let i = 0; i < 15; i++) {
            const rune = document.createElement('div');
            rune.className = 'rune';
            rune.textContent = runes[Math.floor(Math.random() * runes.length)];
            rune.style.left = Math.random() * 100 + '%';
            rune.style.top = Math.random() * 100 + '%';
            rune.style.fontSize = (Math.random() * 20 + 20) + 'px';
            rune.style.animationDelay = (Math.random() * 5) + 's';
            content.appendChild(rune);
        }

        // Portal animation
        let portalActive = false;
        const portal = document.querySelector('.portal');
        
        document.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.7 && !portalActive) {
                portalActive = true;
                portal.classList.add('active');
            }
        });

        // Start ambient sound on first interaction
        document.body.addEventListener('click', () => {
            document.getElementById('ambient').play();
        }, { once: true });

        // Random nature whispers
        const whispers = [
            "Les pierres chantent...",
            "La brume murmure...",
            "Les chemins s'ouvrent...",
            "Le temps se tisse..."
        ];

        setInterval(() => {
            if (Math.random() < 0.3) {
                const whisper = document.createElement('div');
                whisper.style.position = 'fixed';
                whisper.style.left = Math.random() * 80 + 10 + '%';
                whisper.style.top = Math.random() * 80 + 10 + '%';
                whisper.style.color = 'rgba(167, 196, 167, 0.3)';
                whisper.style.fontSize = '1rem';
                whisper.style.fontFamily = 'Fondamento, cursive';
                whisper.style.pointerEvents = 'none';
                whisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];
                document.body.appendChild(whisper);
                
                setTimeout(() => {
                    whisper.style.transition = 'opacity 2s';
                    whisper.style.opacity = '0';
                    setTimeout(() => whisper.remove(), 2000);
                }, 3000);
            }
        }, 5000);
    </script>
</body>
</html>
