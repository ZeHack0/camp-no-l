let NbCadeaux = 0;

document.getElementById("BoutonPereNoel").addEventListener("click", function() {
    NbCadeaux++;
    document.getElementById("NbCadeaux").textContent = NbCadeaux;
    if (NbCadeaux == 10) {
        alert("🎉 Bravo ! Tu as créé 10 cadeaux ! 🎁 Continue, Noël dépend de toi !");
    }
});

let CoutMachineMagique = 50;
let NbMachineMagique = 0;

document.getElementById("MachineMagique").addEventListener("click", function() {
    if (NbCadeaux >= CoutMachineMagique) {
        NbCadeaux -= CoutMachineMagique;
        NbMachineMagique++;
    }
});

function updateGifts() {
    // Production par machine magique
    NbCadeaux += NbMachineMagique;
    //met a jour l'affichage
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("NbCadeaux").textContent = NbCadeaux;
    document.getElementById("NbMachineMagique").textContent = NbMachineMagique;
}

setInterval(updateGifts, 1000); // Appelle updateGifts toutes les secondes

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Durée en jours
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fonction pour lire un cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}

window.onload = function() {
    const savedGiftCount = getCookie("NbCadeaux");
    if (savedGiftCount) {
        NbCadeaux = parseInt(savedGiftCount, 10);
        document.getElementById("NbCadeaux`").textContent = NbCadeaux
    }
}

function updateGifts() {
    // Production par machine magique
    NbCadeaux += NbMachineMagique;
    // Sauvegarder le nombre de cadeaux dans un cookie
    setCookie("NbCadeaux", NbCadeaux, 7); // Durée : 7 jours
    //met a jour l'affichage
    updateDisplay();
}