import planets from "./planets.js";


let mercury = document.querySelector("#mercury");
let venus = document.querySelector("#venus");
let earth = document.querySelector("#earth");
let mars = document.querySelector("#mars");

let jupiter = document.querySelector("#jupiter");
let saturn = document.querySelector("#saturn");
let neptune = document.querySelector("#neptune");
let pluto = document.querySelector("#pluto");

let sun = document.querySelector("#sun")



let center = {
    x: sun.getBoundingClientRect().left,
    y: sun.getBoundingClientRect().top,
}
let scale = 7;
console.log(sun)


let angle = 0;
let lastTime = null;
function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.0001;
    lastTime = time;
    planets.map(planet => {
        let planetEl = document.querySelector("#" + planet.name)
        planetEl.style.left = (Math.cos(angle * planet.speed) * planet.distance_from_sun / scale + center.x) + "px";
        planetEl.style.top = (Math.sin(angle * planet.speed) * planet.distance_from_sun / scale + center.y) + "px";
    })

    // venus.style.top = (Math.sin(angle * 1.174) * 72 / scale + center[0]) + "px";
    // venus.style.left = (Math.cos(angle * 1.174) * 72 / scale + center[1]) + "px";

    // earth.style.top = (Math.sin(angle) * 100 / scale + center[0]) + "px";
    // earth.style.left = (Math.cos(angle) * 100 / scale + center[1]) + "px";

    // mars.style.top = (Math.sin(angle * .8) * 150 / scale + center[0]) + "px";
    // mars.style.left = (Math.cos(angle * .8) * 150 / scale + center[1]) + "px";

    // jupiter.style.top = (Math.sin(angle * .434) * 520 / scale + center[0]) + "px";
    // jupiter.style.left = (Math.cos(angle * .434) * 520 / scale + center[1]) + "px";

    // saturn.style.top = (Math.sin(angle * .323) * 950 / scale + center[0]) + "px";
    // saturn.style.left = (Math.cos(angle * .323) * 950 / scale + center[1]) + "px";

    // neptune.style.top = (Math.sin(angle * .228) * 2000 / scale + center[0]) + "px";
    // neptune.style.left = (Math.cos(angle * .228) * 2000 / scale + center[1]) + "px";

    // pluto.style.top = (Math.sin(angle * .182) * 3000 / scale + center[0]) + "px";
    // pluto.style.left = (Math.cos(angle * .182) * 3000 / scale + center[1]) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);