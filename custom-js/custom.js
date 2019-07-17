document.getElementById("btn-reservation").onclick = () => {
    // Initialize a new instance of Particles to disintegrate/integrate the button
    let buttonVisible = true;
    // array of parameters.
    const arrOpts = [{
        style: 'fill',
        type: 'triangle',
        color: '#be9e0a',
        direction: 'bottom',
        duration: 500,
        easing: 'easeOutSine',
        speed: 2,
        oscillationCoefficient: 5,
        size: 3
    }];
    // Disintegrate the button into particles
    let particlesOpts = arrOpts[0];
    const particles = new Particles('.button', particlesOpts);
    if (buttonVisible) {
        particles.disintegrate();
    }
};