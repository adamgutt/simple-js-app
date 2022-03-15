let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  // function that creates a button as list item for a passed pokemon
    function addListItem(pokemon) {
      let listGroupElement = document.querySelector('.pokemon-list');
      let listItemButton = document.createElement('button');
      listItemButton.innerText = pokemon.name;
      listItemButton.classList.add('list-group-item', 'list-group-item-action',
        'text-center', 'text-uppercase');

      // Adding the data toggle and data target to trigger the modal
      listItemButton.setAttribute('data-toggle', 'modal');
      listItemButton.setAttribute('data-target', '#pokemonModal');

      // Appending the button to the parent div element
      listGroupElement.appendChild(listItemButton);

  /*
      $('#pokemonModal').on('show.bs.modal', function(e){
        showDetails(pokemon);
      })*/

      // Adding an event listener to newly created button
      buttonEventListener(listItemButton,pokemon);
    }

  // function to add an event listener to a button that will show details of the pokemon when the button is clicked
    function buttonEventListener(button,pokemon){
      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
    }


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function (element){
        item.types.push(element.type.name);
      })
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // function to show modal with pokemon details
    function showModal(pokemon) {
      let modalTitle = $('.modal-title');
      let modalBody = $('.modal-body');

      // Clear preexisting content
      modalTitle.empty();
      modalBody.empty();

      // Adding pokemon name as Title
      let titleElement = $('<h1 class="text-uppercase">' + pokemon.name + '</h1>');
      modalTitle.append(titleElement);

      // Creating elements for the modalBody
      // 1. image
      let imageElement = document.createElement('img');
      imageElement.classList.add('modal-img');
      imageElement.src = pokemon.imageUrl;

      // 2. Height
      let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

      // 3. weight
      let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');

      // 4. Types
      let typesElement = $('<p class="text-capitalize">' + 'Types: ' + pokemon.types.join(', ') + '</p>');

      // Appending elements to modalBody
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
    }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
