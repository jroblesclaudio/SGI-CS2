/*Si clicamos en el bot�n del sol, borrar�mos la clase css dark-mode del div 
con id page y se aplicar� el estilo active al sol*/
const sun = document.getElementById('id-sun');
const moon = document.getElementById('id-moon');

// Guardar un valor en el localStorage
const key = 'darkMode';  // Clave bajo la cual se almacenar� el valor
const value = 'true';    // Valor que se almacenar�

document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.getElementById('wrapper').classList.add('dark-mode');
        moon.classList.add('active');
    } else {
        sun.classList.add('active');
    }
});

sun.onclick = function () {
    localStorage.removeItem(key, value);
    document.getElementById('wrapper').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
}
/*Si clicamos en el bot�n de la luna, a�adiremos la clase css dark-mode del div 
con id page y se aplicar� el estilo active a la luna*/
moon.onclick = function () {
    localStorage.setItem(key, value);
    document.getElementById('wrapper').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
    console.log("Hola");
}
