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

pokemonList.forEach(function(user){
  document.write('<li>')
  document.write(user.name + " (height: "+ user.height + ") ");
});
  if (pokemonList[i].height > 1.5){
    document.write(" - Wow, that's big!");
  }
  document.write("</li>")
