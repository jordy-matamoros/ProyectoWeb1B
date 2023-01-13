const themeSwitchButton = document.getElementById('buttonTheme');

themeSwitchButton.addEventListener('click', function() {
    // Obtener el elemento del formulario
    const themeElements = document.getElementsByClassName('themeSwitch');
    

    // Alternar entre las clases "light-theme" y "dark-theme"
    for (const element of themeElements) {
    element.classList.toggle('lightTheme');
    element.classList.toggle('darkTheme');
    }

    //Alternar entre clases "on" y "off" del botón de cambio de modo oscuro 
    themeSwitchButton.classList.toggle('on');
    themeSwitchButton.classList.toggle('off');

    if (themeSwitchButton.classList.contains('on')){
        themeSwitchButton.textContent = 'Modo noche';
    } else {
        themeSwitchButton.textContent = 'Modo día';
    }
});