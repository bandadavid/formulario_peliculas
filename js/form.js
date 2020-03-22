document.querySelector('#submit').addEventListener('click',function(){
    
    let nombre = document.querySelector('#nombre').value;
    let nombre_pelicula = document.querySelector('#nombre_pelicula').value;
    let idiomas = document.querySelector('#idiomas').value;
    let añadir_cineban = document.querySelector('#añadir_cineban').value;

    let url = "https://api.whatsapp.com/send?phone=593962709111&text=*_CineBan_*%0A*Peliculas*%0A%0A*¿Cual es tu nombre?*%0A" + nombre + "%0A*¿Que pelicula te gustaria que añadieramos?*%0A" + nombre_pelicula + "%0A*¿Idioma que quisieras para la película puesta anteriormente?*%0A" + idiomas + "%0A*¿Que te gustaria que añadieramos a nuestra pagina CineBan?*%0A" + añadir_cineban;
    window.open(url);
});
