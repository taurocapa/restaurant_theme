//Global variables.

// btn reservation handle
document.getElementById("btn-reservation").onclick = function() {
    // Initialize a new instance of Particles to disintegrate/integrate the button
    // wpt_particles("btn-reservation", true);
};


function wpt_particles(ob_class, deintegrate = true, ob) {

    element = document.getElementsByClassName(ob_class);
    element[0].style.remove;
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
        oscillationCoefficient: 0,
        size: 3
    }];
    // Disintegrate the button into particles
    let particlesOpts = arrOpts[0];
    const particles = new Particles("." + ob_class, particlesOpts);
    if (deintegrate) {
        particles.disintegrate();
    } else {
        particles.integrate();
    };


};

window.addEventListener('scroll', function() {
    // change color of scroll-button.

    let iconScroll = this.document.getElementById("iconScroll");
    // retrieving scroll-bottom position.
    let posScrollButton = this.document.getElementById("iconScroll").getBoundingClientRect().bottom;

    //retrieving section height
    let sectionHeight = this.document.getElementById("section-main").clientHeight;

    // windows scroll position.
    let windowsScrolling = this.document.documentElement.scrollTop;

    // changing scroll-button clases.
    if (posScrollButton > (sectionHeight - windowsScrolling)) {
        iconScroll.classList.add("scroll-button-dark");
        iconScroll.classList.remove("scroll-button");

    } else {
        iconScroll.classList.add("scroll-button");
        iconScroll.classList.remove("scroll-button-dark");

    };

    //retrieving the nav position
    let navbarPosition = document.getElementById("navbar-menu").getBoundingClientRect().bottom;
    let navbar = this.document.getElementById("navbar-menu");


    // changing nav menu background.
    if (navbarPosition > (sectionHeight - windowsScrolling)) {
        navbar.classList.add("navbar-bg-dark");
    } else {
        navbar.classList.remove("navbar-bg-dark");

    };

});

//clicking on main menu.
document.getElementById(id = "menu-option").onclick = function(event) {

    wpt_active_on_navbar('.navbar-nav > a', false);

    // wpt_particles("btn-reservation", false);

};

// clicking on scroll-button.
document.getElementById(id = "scroll-button").onclick = function(event) {

    wpt_active_on_navbar('.navbar-nav > a');

    //  wpt_particles("btn-reservation", false);

};

// function to use class active
function wpt_active_on_navbar(class_name, active_option = true) {
    let options = document.querySelectorAll(class_name);
    for (op of options) {
        op.classList.remove("active");
    };
    if (!event.target.classList.contains("active")) {
        event.target.classList.add("active");
    };

    if (active_option) {
        options[0].classList.add("active");
    };

};