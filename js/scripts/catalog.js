const poiData = [
  {
    "name": "Chihuahua", /* changed by Clark */
    "address": "Pagudpud, Ilocos Norte", /* Si Julius na bahala diyan */
    "description": "The Chihuahua is commonly known around the world as the smallest dog breed. Chihuahuas are one of the most popular of the smaller dog breeds. This breed is perfect for those that live in a small space. Chihuahuas are extremely loyal dogs and have very playful personalities and are affectionate toward their humans which makes them great family pets. While Chihuahuas can be territorial they are receptive to training.",
    "image": "../../animal_image/Chihuahua.jpeg"
  },
  {
    "name": "Pomeranian", /* changed by Clark */
    "address": "Kabayan, Benguet",
    "description": "Pomeranians were originally a much larger breed than the standard breed that we see today. The many years of specialized breeding have made Pomeranians decrease in size from a medium-sized dog to a tiny companion-sized dog. Pomeranians hold all of the typical personality traits that you would find in the smaller dog breeds. They are very affectionate and love to hold the attention of their humans as well as being incredibly loyal.",
    "image": "../../animal_image/Pomeranian.jpeg"
  },
  {
    "name": "Shih Tzu", /* changed by Clark */
    "address": "Calle Crisologo, Vigan City, Ilocos Sur",
    "description": "Shih Tzus are a highly sought-after breed of small dog. They are well-known for being very friendly, alert, and intelligent. The breed is also hypoallergenic which makes them a great option for households with sensitivities. Shih Tzus can be one of the most affectionate breeds but unfortunately, at times this behavior can turn into an over-attachment.",
    "image": "../../animal_image/Shih Tzu.jpeg"
  },
  {
    "name": "Pug.jpeg", /* changed by Clark */
    "address": "Quezon City, Metro Manila",
    "description": "Pugs have always been a popular breed of small dog and one of the breeds with a long history as they have been bred since the Shang Dynasty in 300 BC. This means that Pugs have been the companion dog of choice for over two thousand years. As with some other dog breeds, Pugs were also originally bred as a larger dogs and their size has decreased over time. Pugs are described as having a huge personality for such a small dog and are recommended as the ideal dog for small spaces.",
    "image": "../../animal_image/Pug.jpeg"
  },
  {
    "name": "Bengal Cat",
    "address": "Talisay, Batangas",
    "description": "A Bengal cat is a wild-looking cat. Their luxurious coat patterns make them appear more at peace in the forest than that in your house, but they have been tamed. They make great family pets. They are gregarious and need a lot of physical activity like playing fetch.",
    "image": "../../animal_image/Bengal_Cat:Asian_Leopard_cat.jpg"
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
