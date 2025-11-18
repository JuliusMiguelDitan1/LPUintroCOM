const spotlight = document.getElementById('spotlight');
if (spotlight) {
  const data = [
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
    // Add more or use your original JSON
  ];

  const randomIndex = Math.floor(Math.random() * data.length);
  const place = data[randomIndex];

  spotlight.innerHTML = `
    <h3>Place Spotlight</h3>
    <img src="${place.image}" alt="${place.name}">
    <h4>${place.name}</h4>
    <p><strong>Location:</strong> ${place.address}</p>
    <p>${place.description}</p>
  `;
}
