

// Forsøg med CTA knapper
const indsend = document.querySelector(".indsend"); // Vælger knappen med klassen 'indsend' og gemmer den i variablen 'indsend'
indsend.addEventListener("click", function(){ //Tilføjer klik-'event'
    indsend.classList.add("submiting"); // Når knappen klikkes, tilføjes klassen 'submiting' for at starte animationen
    setTimeout(function(){ 
        indsend.classList.remove("submiting"); //Fjerner submiting igen for at stoppe animationen
        indsend.innerHTML = "SENDT!"; // Ændrer teksten til "SENDT"!
        indsend.style.backgroundColor = "#7B0005"; //Ændrer baggrundsfarven
    },1000) // Sætter timeout varigheden til 1 sek
});


const knap = document.querySelector(".knap-forside"); // Vælger knappen med klassen 'indsend' og gemmer den i variablen 'indsend'
knap.addEventListener("click", function(){ //Tilføjer klik-'event'
    knap.classList.add("submiting"); // Når knappen klikkes, tilføjes klassen 'submiting' for at starte animationen
    setTimeout(function(){ 
        knap.classList.remove("submiting"); //Fjerner submiting igen for at stoppe animationen
        knap.innerHTML = "SENDT!"; // Ændrer teksten til "SENDT"!
        knap.style.backgroundColor = "#7B0005"; //Ændrer baggrundsfarven
    },1000) // Sætter timeout varigheden til 1 sek
});