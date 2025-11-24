const spotlight = document.getElementById('spotlight');

if (spotlight) {
  fetch("../../js/data/data.json")
    .then(response => response.json())
    .then(data => {
      const animals = data.animals;
      if (!animals || animals.length === 0) return;

      const randomIndex = Math.floor(Math.random() * animals.length);
      const place = animals[randomIndex];

      spotlight.innerHTML = `
        <h3>Animal Spotlight</h3>
        <img src="${place.image}" alt="${place.breed}" style="width:100%; border-radius:6px; margin-bottom:0.5rem;">
        <h4>${place.name || "Unnamed"}</h4>
        <p><strong>Breed:</strong> ${place.breed}</p>
        <p>${place.description}</p>
      `;
    })
    .catch(error => console.error("Error loading spotlight data:", error));
}
