const poiData = [
  {
    "name": "Pagudpud Beach",
    "address": "Pagudpud, Ilocos Norte",
    "description": "A northern paradise known for white sand beaches.",
    "image": "images/Pagudpud Beach.jpg"
  },
  {
    "name": "Mt. Pulag National Park",
    "address": "Kabayan, Benguet",
    "description": "Home to the ‘sea of clouds’.",
    "image": "images/Mt. Pulag National Park.jpg"
  },
  {
    "name": "Vigan Heritage Village",
    "address": "Calle Crisologo, Vigan City, Ilocos Sur",
    "description": "A UNESCO World Heritage Site showcasing Spanish colonial architecture and cobbled streets.",
    "image": "images/Vigan Heritage Village.JPG"
  },
  {
    "name": "La Mesa Ecopark",
    "address": "Quezon City, Metro Manila",
    "description": "A nature sanctuary offering biking, zip-lining, and family picnics in the city.",
    "image": "images/La Mesa Ecopark.jpg"
  },
  {
    "name": "Taal Volcano and Lake",
    "address": "Talisay, Batangas",
    "description": "A unique volcano-in-a-lake-in-an-island attraction with boat tours and viewing decks.",
    "image": "images/Taal Volcano and Lake.jpg"
  },
  {
    "name": "Mayon Volcano Natural Park",
    "address": "Legazpi City, Albay",
    "description": "Famous for its perfect cone shape, Mayon offers scenic views, ATV rides, and trails.",
    "image": "images/Mayon Volcano Natural Park.webp"
  },
  {
    "name": "Camp John Hay",
    "address": "Loakan Rd, Baguio City",
    "description": "A historical mountain resort with pine forests, golfing, and colonial charm.",
    "image": "images/Camp John Hay.webp"
  },
  {
    "name": "Las Casas Filipinas de Acuzar",
    "address": "Bagac, Bataan",
    "description": "A living museum of reconstructed Spanish-Filipino heritage homes by the sea.",
    "image": "images/Las Casas Filipinas de Acuzar.jpg"
  }
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
