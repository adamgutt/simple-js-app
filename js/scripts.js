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



pokemonRepository.getAll().forEach(function(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('each-poke');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
});
