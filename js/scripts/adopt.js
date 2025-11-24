function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const breedParam = getQueryParam("breed");
  if (!breedParam) return;

  // Fetch data.json
  fetch("../../js/data/data.json")
    .then(response => response.json())
    .then(data => {
      const animals = data.animals;

      // Find animal by breed
      const animal = animals.find(pet => pet.breed === breedParam);
      if (!animal) return;

      // Fill page content
      document.getElementById("adoptName").textContent = animal.name || "Unnamed";
      document.getElementById("adoptBreed").textContent = animal.breed;
      document.getElementById("adoptDescription").textContent = animal.description;
      document.getElementById("adoptImage").src = animal.image;
      document.getElementById("adoptImage").alt = animal.breed + " photo";

      // Button action
      document.getElementById("adoptButton").addEventListener("click", () => {
        alert(`Thank you for choosing to adopt the ${animal.breed}! We will contact you soon.`);
      });
    })
    .catch(error => console.error("Error loading animal data:", error));
});
