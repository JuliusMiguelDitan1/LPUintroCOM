function buildCards() {
  const grid = document.querySelector('.poi-grid');
  const template = document.getElementById('card-template');

  if (!grid || !template) return;

  // Fetch data.json
  fetch("../../js/data/data.json") // path relative to HTML
    .then(response => response.json())
    .then(data => {
      const animals = data.animals;

      animals.forEach(poi => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.card__title').textContent = poi.name || "Unnamed";
        clone.querySelector('figcaption').textContent = poi.name || "Unnamed";

        const img = clone.querySelector('img');
        img.dataset.src = poi.image;
        img.alt = poi.breed + " photo";
        img.classList.add('lazy');

        clone.querySelector('.card__breed').textContent = poi.breed;
        clone.querySelector('.card__description').textContent = poi.description;

        // Adopt button → adopt.html
        clone.querySelector('.card__btn').addEventListener('click', () => {
          const url = `adopt.html?breed=${encodeURIComponent(poi.breed)}`;
          window.location.href = url;
        });

        grid.appendChild(clone);
      });

      // After images added → lazy load
      lazyLoadImages();
    })
    .catch(error => console.error("Error loading animal data:", error));
}

document.addEventListener('DOMContentLoaded', buildCards);
