---
layout: post
title: "WARNING"
author: "SERENDIPPO"
categories: [WARNING]
permalink: /WARNING/
image: logo_white-2.png
---

<html lang="la">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NON POSSUM FUGERE</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

        body {
            background: black;
            color: white;
            font-family: 'Creepster', cursive;
            text-align: center;
            overflow: hidden;
            transition: background 5s, color 5s;
            cursor: none;
            user-select: none;
        }

        h1 {
            font-size: 5rem;
            position: relative;
            text-shadow: 4px 4px 8px red;
            animation: flicker 2s infinite alternate;
        }

        @keyframes flicker {
            0% { opacity: 1; }
            50% { opacity: 0.5; filter: blur(3px); }
            100% { opacity: 1; }
        }

        .fade-in {
            opacity: 0;
            animation: fadeIn ease 4s forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        .distorted {
            animation: distort 0.1s infinite alternate;
        }

        @keyframes distort {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: rotate(3deg) scale(1.1); }
            100% { transform: rotate(-3deg) scale(1); }
        }

        .hidden {
            display: none;
        }

        .blood-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255, 0, 0, 0);
            pointer-events: none;
            transition: background 10s ease-in-out;
            z-index: 1;
        }

        .latin-cypher {
            margin-top: 50px;
            font-size: 2rem;
            opacity: 0;
            animation: fadeIn ease 10s forwards;
        }

        .satanic-input {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            background: black;
            color: red;
            border: 2px solid red;
            padding: 10px;
            text-align: center;
            font-family: 'Creepster', cursive;
            display: none;
            animation: fadeIn ease 2s forwards;
            z-index: 10;
        }

        #jumpScareIMG {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            display: none;
            background: black url('https://upload.wikimedia.org/wikipedia/commons/7/7b/SATAN_GOAT.jpg') center no-repeat;
            background-size: cover;
            z-index: 1000;
        }
    </style>
    <style>
      header, footer {
        display: none !important;
      }
    </style>
</head>
<body>
    <h1 class="fade-in">NON POSSUM FUGERE</h1>
    <p class="fade-in" style="animation-delay: 3s;">Tu es in obscuro.</p>

    <div class="glitch"></div>

    <div id="bloodScreen" class="blood-screen"></div>

    <p id="latinMessage" class="latin-cypher hidden">
        "Memento mori. Omnes sumus cineres. Aperi oculos."
    </p>

    <input type="text" id="satanicInput" class="satanic-input" placeholder="Type the name..." maxlength="10">

    <audio id="ambience" loop>
        <source src="https://www.fesliyanstudios.com/play-mp3/387" type="audio/mp3">
    </audio>

    <audio id="whisper" preload="auto">
        <source src="https://www.fesliyanstudios.com/play-mp3/1539" type="audio/mp3">
    </audio>

    <audio id="jumpScareSound">
        <source src="https://www.fesliyanstudios.com/play-mp3/4388" type="audio/mp3">
    </audio>

    <div id="jumpScareIMG"></div>

    <script>
        let failedAttempts = 0;
        const correctName = "SERENDIPPO";

        setTimeout(() => {
            document.querySelector("body").style.background = "#300000";
            document.querySelector("body").style.color = "#ff0000";
        }, 5000);

        setTimeout(() => {
            document.getElementById("bloodScreen").style.background = "rgba(255, 0, 0, 0.8)";
        }, 7000);

        setTimeout(() => {
            document.getElementById("latinMessage").classList.remove("hidden");
        }, 8000);

        setTimeout(() => {
            document.querySelector("h1").innerText = "S A N G U I S";
        }, 12000);

        setTimeout(() => {
            document.getElementById("satanicInput").style.display = "block";
        }, 15000);

        window.onload = function() {
            document.getElementById("ambience").play();
            setTimeout(() => { document.getElementById("whisper").play(); }, Math.random() * 10000 + 5000);
        };

        document.getElementById("satanicInput").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                if (this.value.toUpperCase() === correctName) {
                    document.getElementById("jumpScareIMG").style.display = "none";
                    document.getElementById("bloodScreen").style.background = "rgba(0, 0, 0, 1)";
                    document.querySelector("h1").innerText = "LIBERATUS ES...";
                    document.getElementById("satanicInput").style.display = "none";
                } else {
                    failedAttempts++;
                    if (failedAttempts >= 3) {
                        document.getElementById("jumpScareIMG").style.display = "block";
                        document.getElementById("jumpScareSound").play();
                        document.querySelector("body").style.background = "black";
                        document.querySelector("h1").innerText = "ERRAVISTI.";
                        document.getElementById("satanicInput").style.display = "none";
                        setTimeout(() => {
                            document.querySelector("body").innerHTML = "<h1>Tu es apud nos</h1><p>Non effugies.</p>";
                        }, 5000);
                    }
                }
            }
        });
    </script>
</body>
</html>
