const spotlight = document.getElementById('spotlight');

if (spotlight) {
  fetch("../../js/data/data.json")
    .then(response => response.json())
    .then(data => {
      const animals = data.animals;
      if (!animals || animals.length === 0) return;

      const randomIndex = Math.floor(Math.random() * animals.length);
      const place = animals[randomIndex];

      // Insert spotlight content
      spotlight.innerHTML = `
        <h3>Animal Spotlight</h3>
        <img id="spotlightPic" src="${place.image}" alt="${place.breed}"
             style="width:100%; border-radius:6px; margin-bottom:0.5rem; cursor:pointer;">
        <h4>${place.name || "Unnamed"}</h4>
        <p><strong>Breed:</strong> ${place.breed}</p>
        <p>${place.description}</p>
      `;

      // ⭐ Modal logic
      const spotlightPic = document.getElementById("spotlightPic");
      const modal = document.getElementById("spotlightModal");
      const modalImg = document.getElementById("spotlightImg");
      const closeBtn = document.querySelector(".close");

      spotlightPic.onclick = function () {
        console.log("Opening Modal...");
        modal.style.display = "block";
        modalImg.src = this.src;
      };

      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      modal.onclick = function (e) {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      };
    })
    .catch(error => console.error("Error loading spotlight data:", error));
}
