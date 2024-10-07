window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    // Beregner ny position til cirklen baseret på scroll-procent
    const newPosition = scrollPercent + '%';

    // Opdaterer top-positionen af cirklen
    document.getElementById('progress-circle').style.top = newPosition;
});