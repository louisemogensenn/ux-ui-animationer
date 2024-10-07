    // Opdaterer højden af progress-baren baseret på scroll-position
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        document.getElementById('progress-bar').style.height = scrollPercent + '%';
    });