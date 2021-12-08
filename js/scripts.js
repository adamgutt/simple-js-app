let pokemonRepository = (function () {
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

  function add(pokemon) {
    pokemonList.push(pokemon);
    if (typeOf() !== "object"){
      return true;
    }
  }

  function getAll(){
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();



pokemonRepository.getAll().forEach(function(user){
  document.write('<li>')
  document.write(user.name + " (height: "+ user.height + ") ");
  if (user.height > 1.5){
    document.write(" - Wow, that's big!");
  }
});

document.write(pokemonRepository.getAll());
