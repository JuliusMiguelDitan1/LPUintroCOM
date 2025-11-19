const poiData = [
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Chihuahua", /* Si Julius na bahala diyan */
    "description": "The Chihuahua is commonly known around the world as the smallest dog breed. Chihuahuas are one of the most popular of the smaller dog breeds. This breed is perfect for those that live in a small space. Chihuahuas are extremely loyal dogs and have very playful personalities and are affectionate toward their humans which makes them great family pets. While Chihuahuas can be territorial they are receptive to training.",
    "image": "../../animal_image/Chihuahua.jpeg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Pomeranian",
    "description": "Pomeranians were originally a much larger breed than the standard breed that we see today. The many years of specialized breeding have made Pomeranians decrease in size from a medium-sized dog to a tiny companion-sized dog. Pomeranians hold all of the typical personality traits that you would find in the smaller dog breeds. They are very affectionate and love to hold the attention of their humans as well as being incredibly loyal.",
    "image": "../../animal_image/Pomeranian.jpeg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Shih Tzu",
    "description": "Shih Tzus are a highly sought-after breed of small dog. They are well-known for being very friendly, alert, and intelligent. The breed is also hypoallergenic which makes them a great option for households with sensitivities. Shih Tzus can be one of the most affectionate breeds but unfortunately, at times this behavior can turn into an over-attachment.",
    "image": "../../animal_image/Shih Tzu.jpeg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Pug",
    "description": "Pugs have always been a popular breed of small dog and one of the breeds with a long history as they have been bred since the Shang Dynasty in 300 BC. This means that Pugs have been the companion dog of choice for over two thousand years. As with some other dog breeds, Pugs were also originally bred as a larger dogs and their size has decreased over time. Pugs are described as having a huge personality for such a small dog and are recommended as the ideal dog for small spaces.",
    "image": "../../animal_image/Pug.jpeg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Bengal Cat",
    "description": "A Bengal cat is a wild-looking cat. Their luxurious coat patterns make them appear more at peace in the forest than that in your house, but they have been tamed. They make great family pets. They are gregarious and need a lot of physical activity like playing fetch.",
    "image": "../../animal_image/Bengal_Cat_Asian_Leopard_Cat.jpg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Egyptian Mau",
    "description": "Whenever you see cats pictured in ancient Egyptian art, you're seeing the Egyptian Mau's so much so a direct ancestor.The Egyptian Mau seems to be the only naturally present spotted cat species recognized by the Cat Fanciers Association, with an aristocratic lineage and an aesthetic suggestive of its old, feral origins.",
    "image": "../../animal_image/Egyptian_Mau.jpg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Maine_Coon_Cat",
    "description": "The Maine coon, with its huge height and dense fur coat patterns, is a cat that seems to be hard to overlook. The Maine coon cats are gentle soul that hails from Maine and is also the town's official cat.They are excellent hunters as compared to other cats that gained popularity just after CFA declared them thoroughbred in the 1970s. They are among the most elegant cats in the world. Polydactylism, or other toes, affects most Maine coon cats, causing their already huge feet to become much larger. .",
    "image": "../../animal_image/Maine_Coon_Cat.jpg",
    "link": ""
  },
  {
    "name": "", /*assigned kayo kung sino pwede mag pangalan*/
    "breed": "Norwegian Cat",
    "description": "The Norwegian Forest cat is a vast, well-boned cat with dense coats. It falls under the category of large cats and has the appearance of a hunter. Its skull is triangular, and the neck is robust and muscular; it is one of the cutest cat breeds. The chin is firm yet somewhat curved, and the ears are medium to large compared to other breeds. The Norwegian's back legs are marginally greater than its front legs. Legs with a lot of muscle..",
    "image": "../../animal_image/Norwegian_Forest_Cat.jpg",
    "link": ""
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


clone.querySelector('.card__breed').textContent = poi.breed;
clone.querySelector('.card__description').textContent = poi.description;


// LINK ADOPT BUTTON → adopt.html
clone.querySelector('.card__btn').addEventListener('click', () => {
const url = `adopt.html?breed=${encodeURIComponent(poi.breed)}`;
window.location.href = url;
});


grid.appendChild(clone);
});


lazyLoadImages();
}


document.addEventListener('DOMContentLoaded', buildCards);
