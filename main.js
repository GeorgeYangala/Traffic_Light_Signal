const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");


function changeLights() {
    setTimeout(() => {
        yellowLight()
    }, 0);
    setTimeout(() => {
        greenLight()
    }, 5000);
    setTimeout(() => {
        yellowLight()
    }, 56000);
    setTimeout(() => {
        redLight()
    }, 61000);
}


function yellowLight() {
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    }, 5000);
}

function greenLight() {
    green.classList.add('active')
    setTimeout(() => {
        green.classList.remove('active')
    }, 51000);
}

function redLight() {
    red.classList.add('active')
    setTimeout(() => {
        red.classList.remove('active')
    }, 55000);
}




changeLights();

/*deuxième feux*/
const red1 = document.querySelector("#red1");
const yellow1 = document.querySelector("#yellow1");
const green1 = document.querySelector("#green1");

function changeLights2() {
    setTimeout(() => {
        yellowLight1()
    }, 0);
    setTimeout(() => {
        redLight1()
    }, 5000);
    setTimeout(() => {
        yellowLight1()
    }, 56000);
    setTimeout(() => {
        greenLight1()
    }, 61000);
}

function yellowLight1() {
    yellow1.classList.add('active')
    setTimeout(() => {
        yellow1.classList.remove('active')
    }, 5000);
}

function redLight1() {
    red1.classList.add('active')
    setTimeout(() => {
        red1.classList.remove('active')
    }, 51000);
}


function greenLight1() {
    green1.classList.add('active')
    setTimeout(() => {
        green1.classList.remove('active')
    }, 55000);
}

changeLights2();


const goMinute = 1;
let time = goMinute * 115;
const compteur = document.getElementById("compteur");

setInterval(increment, 1000);

function increment() {
    const minute = Math.floor(time / 60);
    let second = time % 60;

    second = second < 10 ? '0' + second : second;

    compteur.innerHTML = `${minute}:${second}`;
    time--;

}