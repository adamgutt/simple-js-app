let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ['grass','poison']
  },
  {
    name: "Venusaur",
    height: 2,
    types: ['grass','poison']
  },
  {
    name: "Beedrill",
    height: 1,
    types: ['bug','poison']
  }
];

for (let i = 0; i < 3; i++){
  document.write('<li>')
  document.write(pokemonList[i].name + " (height: "+ pokemonList[i].height + ") ");
  document.write("</li>")
}
