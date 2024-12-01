document.addEventListener('DOMContentLoaded', () => {
  const games = document.querySelector('.games');
  const gamesButton = games.querySelector('.games-button');
  const buttonText = gamesButton.querySelector('.games__button-text');

  gamesButton.addEventListener('click', (e) => {
    e.stopPropagation();
    games.classList.toggle('hide');
    buttonText.textContent = games.classList.contains('hide') 
      ? 'Biancalop games' 
      : 'Close';
  });

  document.addEventListener('click', (e) => {
    if (!games.contains(e.target)) {
      games.classList.add('hide');
      buttonText.textContent = 'Biancalop games';
    }
  });
});
