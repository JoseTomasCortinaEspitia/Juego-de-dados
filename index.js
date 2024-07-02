// Generar un número aleatorio entre 1 y 6 para el primer dado
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Generar un número aleatorio entre 1 y 6 para el segundo dado
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construir las rutas de las imágenes basadas en los números aleatorios generados
const randomImageSource1 = `./images/dice${randomNumber1}.png`;
const randomImageSource2 = `./images/dice${randomNumber2}.png`;

// Seleccionar los elementos <img> con las clases img1 y img2
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');

// Actualizar el atributo src de los elementos <img> para mostrar las imágenes correspondientes de los dados
image1.setAttribute('src', randomImageSource1);
image2.setAttribute('src', randomImageSource2);

// Seleccionar el elemento <h1>
const heading = document.querySelector('h1');

// Comparar los números generados para determinar el ganador o si hay un empate
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Jugador 1 Gana!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Jugador 2 Gana!";
} else {
    heading.innerHTML = "Empate!";
}