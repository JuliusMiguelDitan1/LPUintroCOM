const spotlight = document.getElementById("spotlight");

if (spotlight) {
  fetch("../../js/data/data.json")
    .then(res => res.json())
    .then(data => {
      const animals = data.animals;
      if (!animals || animals.length === 0) return;

      let index = Math.floor(Math.random() * animals.length);
      let isAnimating = false;

      function updateSpotlight() {
        if (isAnimating) return;
        isAnimating = true;

        const animal = animals[index];

        // Step 1: swipe OUT (slide left)
        spotlight.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        spotlight.style.transform = "translateX(-40px)";
        spotlight.style.opacity = "0";

        setTimeout(() => {
          // Step 2: replace content AFTER sliding out
          spotlight.innerHTML = `
            <h3>Animal Spotlight</h3>
            <img id="spotlightPic" src="${animal.image}" alt="${animal.breed}"
                style="width:100%; border-radius:6px; margin-bottom:0.5rem; cursor:pointer;">
            <h4>${animal.name || "Unnamed"}</h4>
            <p><strong>Breed:</strong> ${animal.breed}</p>
            <p>${animal.description}</p>
          `;

          setupModal();

          // Step 3: reset position (right side, invisible)
          spotlight.style.transition = "none";
          spotlight.style.transform = "translateX(40px)";
          spotlight.style.opacity = "0";

          // allow browser to apply reset before animating in
          requestAnimationFrame(() => {
            // Step 4: swipe IN (slide right → center)
            spotlight.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            spotlight.style.transform = "translateX(0)";
            spotlight.style.opacity = "1";

            setTimeout(() => {
              isAnimating = false;
            }, 500);
          });
        }, 500);

        // move to next animal
        index = (index + 1) % animals.length;
      }

      // Initial show
      updateSpotlight();

      // Change every 15 seconds
      setInterval(updateSpotlight, 15000);

      function setupModal() {
        const spotlightPic = document.getElementById("spotlightPic");
        const modal = document.getElementById("spotlightModal");
        const modalImg = document.getElementById("spotlightImg");
        const closeBtn = document.querySelector(".close");

        if (!spotlightPic) return;

        spotlightPic.onclick = () => {
          modal.style.display = "block";
          modalImg.src = spotlightPic.src;
        };

        closeBtn.onclick = () => {
          modal.style.display = "none";
        };

        modal.onclick = (e) => {
          if (e.target === modal) modal.style.display = "none";
        };
      }
    })
    .catch(err => console.error("Error loading spotlight data:", err));
}
