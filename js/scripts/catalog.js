const poiData = [
  {
    name: "Pagudpud Beach",
    address: "Pagudpud, Ilocos Norte",
    description: "A northern paradise known for white sand beaches.",
    image: "images/Pagudpud Beach.jpg"
  },
  {
    name: "Mt. Pulag National Park",
    address: "Kabayan, Benguet",
    description: "Home to the ‘sea of clouds’.",
    image: "images/Mt. Pulag National Park.jpg"
  }
  // ... add the rest
];

// Build POI cards
function buildCards() {
  const grid = document.querySelector('.poi-grid');
  const template = document.getElementById('card-template');

  if (!grid || !template) return;

  poiData.forEach(poi => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.card__title').textContent = poi.name;
    clone.querySelector('figcaption').textContent = poi.name;

    const img = clone.querySelector('img');
    img.dataset.src = poi.image;
    img.alt = poi.name + " photo";
    img.classList.add('lazy');

    clone.querySelector('.card__address').textContent = poi.address;
    clone.querySelector('.card__description').textContent = poi.description;

    clone.querySelector('.card__btn').addEventListener('click', () => {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(poi.address)}`;
      window.open(mapUrl, '_blank');
    });

    grid.appendChild(clone);
  });

  lazyLoadImages(); // from common.js
}

document.addEventListener('DOMContentLoaded', buildCards);
