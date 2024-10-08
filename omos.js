window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    // Beregner ny position til cirklen baseret på scroll-procent
    const newPosition = scrollPercent + '%';

    // Opdaterer top-positionen af cirklen
    document.getElementById('progress-circle').style.top = newPosition;
});


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