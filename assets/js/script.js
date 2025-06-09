document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const h2 = card.querySelector('h2');
    const p = card.querySelector('p');

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'rotateY(360deg)';
      card.style.backgroundColor = '#009e78';
      h2.style.color = '#ffffff';
      p.style.color = '#ffffff';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg)';
      card.style.backgroundColor = '#f8fcfb';
      h2.style.color = '#0c1d19';
      p.style.color = '#45a18b';
    });
  });
});
