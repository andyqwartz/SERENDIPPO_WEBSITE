---
layout: post
title: "ISIDORE STARCK"
author: "SERENDIPPO"
categories: [ancestral]
tags: [alchemy, mystical, ancestry]
image: logo_white-2.png
---

<html lang="la">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEMPUS REVELAT OMNIA</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');

        body {
            background: #0a0a0f;
            color: #c4b47f;
            font-family: 'Cormorant Garamond', serif;
            text-align: center;
            overflow-x: hidden;
            cursor: none;
            perspective: 1000px;
        }

        #customCursor {
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(196, 180, 127, 0.8) 0%, rgba(196, 180, 127, 0) 70%);
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        }

        #customCursor.expanded {
            width: 50px;
            height: 50px;
        }

        .title {
            font-family: 'UnifrakturMaguntia', cursive;
            font-size: 4rem;
            margin: 2em 0;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 2s forwards;
            text-shadow: 0 0 10px rgba(196, 180, 127, 0.5);
        }

        .magic-circle {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 500px;
            pointer-events: none;
            opacity: 0.1;
            mix-blend-mode: screen;
            animation: rotate 60s linear infinite;
        }

        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
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

        .alchemical-symbol {
            position: absolute;
            font-family: 'UnifrakturMaguntia', cursive;
            color: rgba(196, 180, 127, 0.2);
            pointer-events: none;
            user-select: none;
            mix-blend-mode: screen;
            animation: float 10s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -10px) rotate(5deg); }
            50% { transform: translate(0, -20px) rotate(0deg); }
            75% { transform: translate(-10px, -10px) rotate(-5deg); }
        }

        .separator {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(196, 180, 127, 0.5), transparent);
            margin: 3em 0;
        }

        .interactive-element {
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .interactive-element:hover {
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        #magicCircle {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            width: 300px;
            height: 300px;
            border: 2px solid rgba(196, 180, 127, 0.2);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            transition: opacity 1s;
        }

        .ambient-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, #1a1a2f 0%, #0a0a0f 100%);
            opacity: 0.5;
            z-index: -1;
        }

        header, footer {
            display: none !important;
        }
    </style>
</head>
<body>
    <div id="customCursor"></div>
    <div class="ambient-background"></div>
    <div id="magicCircle"></div>

    <div class="content">
        <h1 class="title">Isidore Starck</h1>

        <div class="text-block">
            Dans les profondeurs du XIIIe siècle, au cœur de la Bohême médiévale, vivait un alchimiste dont le nom résonne encore dans les manuscrits anciens : Isidore Starck. Les chroniques de l'époque parlent d'un homme aux yeux d'or liquide, capable de transmuter non seulement les métaux, mais aussi le temps lui-même.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            On raconte qu'il habitait une tour de pierre noire, dont les murs étaient couverts de formules ésotériques tracées à l'encre d'or. Les nuits de pleine lune, des lueurs étranges dansaient aux fenêtres de son laboratoire, et des murmures en langues oubliées s'échappaient de ses voûtes.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            Sa plus grande œuvre, dit-on, fut la création d'un miroir capable de révéler les vérités cachées du temps. Mais un soir d'équinoxe, alors que les étoiles s'alignaient dans une configuration rare, Isidore disparut mystérieusement. Seul son journal resta, ses pages remplies d'énigmes et de prophéties encore inachevées.
        </div>

        <div class="separator"></div>

        <div class="text-block">
            Certains disent qu'il voyage encore entre les époques, guidé par les constellations et les cycles de la lune. D'autres murmurent qu'il a trouvé le secret de l'immortalité, se cachant parmi nous, observant silencieusement le déroulement des siècles.
        </div>

        <div class="separator"></div>

        <div class="text-block" style="text-align: center; font-style: italic;">
            "Tempus revelat omnia"
        </div>
    </div>

    <audio id="ambient" loop>
        <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mp3">
    </audio>

    <script>
        // Custom cursor
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

        // Add floating alchemical symbols
        const symbols = ['☉', '☽', '☿', '♀', '♂', '♃', '♄'];
        const content = document.querySelector('.content');

        for (let i = 0; i < 15; i++) {
            const symbol = document.createElement('div');
            symbol.className = 'alchemical-symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + '%';
            symbol.style.top = Math.random() * 100 + '%';
            symbol.style.fontSize = (Math.random() * 20 + 20) + 'px';
            symbol.style.animationDelay = (Math.random() * 5) + 's';
            content.appendChild(symbol);
        }

        // Interactive elements
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('interactive-element')) {
                cursor.classList.add('expanded');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('interactive-element')) {
                cursor.classList.remove('expanded');
            }
        });

        // Magic circle animation
        const magicCircle = document.getElementById('magicCircle');
        let rotation = 0;
        let opacity = 0;
        let isVisible = false;

        function animateCircle() {
            rotation += 0.5;
            magicCircle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            requestAnimationFrame(animateCircle);
        }

        document.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.3 && !isVisible) {
                isVisible = true;
                magicCircle.style.opacity = '1';
            }
        });

        animateCircle();

        // Start ambient sound on first interaction
        document.body.addEventListener('click', () => {
            document.getElementById('ambient').play();
        }, { once: true });

        // Random text reveal
        const messages = [
            "Les secrets du temps...",
            "La pierre philosophale...",
            "L'or des sages...",
            "Les mystères de l'éternité..."
        ];

        setInterval(() => {
            if (Math.random() < 0.3) {
                const message = document.createElement('div');
                message.style.position = 'fixed';
                message.style.left = Math.random() * 80 + 10 + '%';
                message.style.top = Math.random() * 80 + 10 + '%';
                message.style.color = 'rgba(196, 180, 127, 0.3)';
                message.style.fontSize = '1rem';
                message.style.pointerEvents = 'none';
                message.textContent = messages[Math.floor(Math.random() * messages.length)];
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.style.transition = 'opacity 2s';
                    message.style.opacity = '0';
                    setTimeout(() => message.remove(), 2000);
                }, 3000);
            }
        }, 5000);
    </script>
</body>
</html>
