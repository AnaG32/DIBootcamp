// Daily Challenge - Solar System //

// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4. Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// 5. Be careful, each planet has a certain amount of moons. How should you display them?
// 6. Should you still use an array for the planets ? Or an array of objects ?


let solarSystem = [
    {name:'Mercury', moons: 0, color:'orange', radius:2439},
    {name:'Venus', moons: 0, color:'grey', radius:6051},
    {name:'Earth', moons: 1, color:'blue', radius:6378},
    {name:'Mars', moons: 2, color:'red', radius:3396},
    {name:'Jupiter', moons: 79, color:'darkorange', radius:71492},
    {name:'Saturn', moons: 82, color:'violet', radius:60268},
    {name:'Uranus', moons: 27, color:'lightblue', radius:25559},
    {name:'Neptune', moons: 14, color:'darkblue', radius:24764}
]

let section = document.getElementsByClassName('listPlanets')[0];
console.log(section);

for (let i = 0; i < solarSystem.length; i++) {
    let planets = document.createElement('div');
    planets.innerText = solarSystem[i].name;
    planets.classList.add('planet');
    planets.style.backgroundColor = solarSystem[i].color;
    let x = 1;
    while(x <= solarSystem[i].moons) {
        let moon = document.createElement('div');
        moon.style.left = (x *10) + 'px';
        moon.classList.add('moon');
        planets.appendChild(moon);
        x++;
    }
    

    section.appendChild(planets);
}