const dinoData = [
  {
    species: 'Triceratops',
    weight: 13000,
    height: 114,
    diet: 'herbavor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'First discovered in 1889 by Othniel Charles Marsh',
  },
  {
    species: 'Tyrannosaurus Rex',
    weight: 11905,
    height: 144,
    diet: 'carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'The largest known skull measures in at 5 feet long.',
  },
  {
    species: 'Anklyosaurus',
    weight: 10500,
    height: 55,
    diet: 'herbavor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Anklyosaurus survived for approximately 135 million years.',
  },
  {
    species: 'Brachiosaurus',
    weight: 70000,
    height: '372',
    diet: 'herbavor',
    where: 'North America',
    when: 'Late Jurasic',
    fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
  },
  {
    species: 'Stegosaurus',
    weight: 11600,
    height: 79,
    diet: 'herbavor',
    where: 'North America, Europe, Asia',
    when: 'Late Jurasic to Early Cretaceous',
    fact:
      'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
  },
  {
    species: 'Elasmosaurus',
    weight: 16000,
    height: 59,
    diet: 'carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
  },
  {
    species: 'Pteranodon',
    weight: 44,
    height: 20,
    diet: 'carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
  },
  {
    species: 'Pigeon',
    weight: 0.5,
    height: 9,
    diet: 'herbavor',
    where: 'World Wide',
    when: 'Holocene',
    fact: 'All birds are living dinosaurs.',
  },
];

const dinoImages = [
  './triceratops.png',
  'Tyrannosaurus Rex',
  'Anklyosaurus',
  'Brachiosaurus',
  'Stegosaurus',
  'Elasmosaurus',
  'Pteranodon',
  'Pigeon'
]

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.factsList = [weight, height, diet, where, when, fact]
}

// Create Dino Objects
const dinoObjects = dinoData.map((dinoData) => {
  const dinoObject = new Dino(
    dinoData.species,
    dinoData.weight,
    dinoData.height,
    dinoData.diet,
    dinoData.where,
    dinoData.when,
    dinoData.fact,
  );
  dinoObject.img = `./images/${dinoObject.species.toLowerCase()}.png`

  return dinoObject;
});

// Create Human Object
// Use IIFE to get human data from form

// Compare weight
// NOTE: Weight is in lbs

// Compare height
// NOTE: Height in inches.

// Compare diet



// Remove form from screen


function getRandomFact(factArray) {
  const randomIndex = Math.floor(Math.random() * (factArray.length - 1));
  return factArray[randomIndex];
}

// On button click, prepare and display infographic
const name = document.getElementById('name');
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const diet = document.getElementById('diet');
const compareBTN = document.getElementById('btn');
const grid = document.getElementById('grid');

function createPerson (name, feet, inches, weight, diet) {
  _name = name;
  _feet = feet;
  _inches = inches;
  _weight = weight;
  _diet = diet;

  function getName() {
    return _name;
  }

  function getFeet() {
    return _feet;
  }

  function getInches() {
    return _inches;
  }

  function getWeight() {
    return _weight;
  }

  function getDiet() {
    return _diet;
  }

  return {
    getName: getName,
    getFeet: getFeet,
    getInches: getInches,
    getWeight: getWeight,
    getDiet: getDiet,
  }


}


compareBTN.onclick = () => {
  const person = createPerson(name.value, feet.value, inches.value, weight.value, diet.value);

  // Generate Tiles for each Dino in Array
  dinoObjects.forEach((object, index) => {
    const div = document.createElement('DIV');
    const h3 = document.createElement('H3');
    const species = document.createTextNode(object.species);
    const img = document.createElement('IMG');
    const p = document.createElement('P');
    const randomFact = document.createTextNode(getRandomFact(object.factsList));

    img.src = object.img;
    div.className = 'grid-item';
    h3.appendChild(species);
    p.appendChild(randomFact);
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);

    // Add tiles to DOM
    grid.appendChild(div);
  })
  console.log(dinoObjects);
  console.log(person);
};
