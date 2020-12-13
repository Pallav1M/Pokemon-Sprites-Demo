// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// select the container using querySelector 
const container = document.querySelector('#container');
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 151; i++) {
    // for every i, create a new div and image element with a span showing the label number
    const pokemon = document.createElement('div')
    // adding the pokemon class
    pokemon.classList.add("pokemon")
    const label = document.createElement('span');
    // innertext for the label 
    label.innerText = `#${i}`;
    // create an image element using createElement
    const pokeImage = document.createElement('img');
    pokeImage.src = `${baseURL}${i}.png`
    // append the image created above inside the div pokemon
    pokemon.appendChild(pokeImage);
    pokemon.appendChild(label);
    // appending the div to the container
    container.appendChild(pokemon);
}
