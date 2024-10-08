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

const indsend = document.querySelector(".indsend");
indsend.addEventListener("click",()=> {
    indsend.classList.add("submiting");
    indsend.innerHTML="";
    setTimeout(()=>{
        indsend.classList.remove("submiting");
        indsend.innerHTML = "SENDT!";
    },3000)
});