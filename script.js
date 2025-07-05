const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const games = document.querySelectorAll('.divs');

searchButton.addEventListener('click', searchGames);
searchInput.addEventListener('input', searchGames);

function searchGames() {
  const searchValue = searchInput.value.toLowerCase();
  games.forEach(game => {
    const gameName = game.querySelector('h1').textContent.toLowerCase();
    const gameDescription = game.querySelectorAll('p');
    let found = false;
    if (gameName.includes(searchValue)) {
      found = true;
    } else {
      gameDescription.forEach(description => {
        if (description.textContent.toLowerCase().includes(searchValue)) {
          found = true;
        }
      });
    }
    if (found) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
}