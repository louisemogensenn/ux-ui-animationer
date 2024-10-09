

// Ændrer tekst og farve ved klik
const indsend = document.querySelector(".indsend"); // Vælger knappen med klassen 'indsend' og gemmer den i variablen 'indsend'
    indsend.addEventListener("click", function(){ //Tilføjer klik-'event'
    indsend.classList.add("submiting"); // Når knappen klikkes, tilføjes klassen 'submiting' for at starte animationen
    setTimeout(function(){ 
        indsend.classList.remove("submiting"); //Fjerner submiting igen for at stoppe animationen
        indsend.innerHTML = "SENDT!"; // Ændrer teksten til "SENDT"!
        indsend.style.backgroundColor = "#7B0005"; //Ændrer baggrundsfarven
        indsend.style.color = "#FFFFFF";
    },1000) // Sætter timeout varigheden til 1 sek
});

