import planets from "./planets.js";


let scale = 7;

let id = 1;
let angle = 0;
let lastTime = null;
function animate(time) {
    let sun = document.querySelector("#sun")
    console.log(planets)
    let center = {
        x: sun.getBoundingClientRect().left,
        y: sun.getBoundingClientRect().top,
    }
    if (lastTime != null) angle += (time - lastTime) * 0.0011;
    lastTime = time;
    console.log(lastTime, id)
    planets.map(planet => {
        let planetEl = document.querySelector("#" + planet.name)
        planetEl.style.left = (Math.cos(angle * planet.speed) * planet.distance_from_sun / scale + center.x) + "px";
        planetEl.style.top = (Math.sin(angle * planet.speed) * planet.distance_from_sun / scale + center.y) + "px";

        if (id > 10 && id % 5 === 0) planet.recentLocations.push({ x: planetEl.style.left, y: planetEl.style.top, id: id })


        planet.recentLocations.slice(10)
            .map(location => {
                let trail = document.createElement("div");
                trail.className = "trail";
                trail.id = String(location.id);
                trail.style.left = location.x
                trail.style.top = location.y
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                trail.style.backgroundColor = "#" + randomColor;
                trail.textContent = "🦑"
                document.body.appendChild(trail)
            });
        id++;
        if (planet.recentLocations.length > 10) {
            let dot = planet.recentLocations.shift();

            let id = String(dot.id);
            let dotDiv = document.getElementById(id);
            if (dotDiv !== null) document.body.removeChild(dotDiv);
        }

    })
    if (time < 40000) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(animate);
    }

}
requestAnimationFrame(animate);