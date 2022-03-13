const logo = document.getElementById('logo');

function scaleLogo() {
    const scale = Math.min(window.innerWidth, window.innerHeight);
    logo.style.width = scale + 'px';
    logo.style.height = scale + 'px';
}

window.onresize = scaleLogo;

scaleLogo();
