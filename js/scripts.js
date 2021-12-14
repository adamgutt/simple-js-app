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

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('each-poke');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // Event Listener to log the objects on the console

    button.addEventListener('click', function (event) {
      showDetails(pokemon);
  });
}

  function showDetails(pokemon){
    console.log(pokemonList);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();



pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
