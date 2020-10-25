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

const name = document.getElementById('name');
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const diet = document.getElementById('diet');
const compareBTN = document.getElementById('btn');
const grid = document.getElementById('grid');

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
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
// create object data

// Create Human Object
// Use IIFE to get human data from form
function createPerson (name, feet, inches, weight, diet) {
  _name = name;
  _feet = parseFloat(feet);
  _inches = parseFloat(inches);
  _weight = parseFloat(weight);
  _diet = diet;

  function getName() {
    return _name;
  }

  function getHeight() {
    return _feet * 12 + _inches;
  }

  function getWeight() {
    return _weight;
  }

  function getDiet() {
    return _diet;
  }

  return {
    getName: getName,
    getHeight: getHeight,
    getWeight: getWeight,
    getDiet: getDiet,
    getIMG: ''
  }
}

// Compare weight
// NOTE: Weight is in lbs
function compareWeight(species, dinoWeight, personWeight) {
  if (dinoWeight > personWeight) {
    return `You weight ${dinoWeight - personWeight} lbs. less than the ${species}`;
  } else if (dinoWeight < personWeight) {
    return `You weight ${personWeight - dinoWeight} lbs. more than the ${species}`;
  } else {
    return `Amazing, you weight the same as the ${species}`;
  }
}
// Compare height
// NOTE: Height in inches.
function compareHeight(species, dinoHeight, personHeight) {
  if (dinoHeight > personHeight) {
    return `You are ${dinoHeight - personHeight} inches shorter than the ${species}`;
  } else if (dinoHeight < personHeight) {
    return `You are ${personHeight - dinoHeight} inches taller than the ${species}`;
  } else {
    return `Amazing, you are the same height as the ${species}`;
  }
}
// Compare diet
function compareDiet(species, dinoDiet, personDiet) {
  if (dinoDiet.toLowerCase() === personDiet.toLowerCase()) {
    return `You and the ${species} are both ${personDiet}s`;
  } else {
    return `The ${species} is a ${dinoDiet} and you are a ${personDiet}`;
  }
}

// getRandomFact
function getRandomFact(randomKey, dinoObject, person) {
  switch(randomKey.toLowerCase()) {
    case 'weight':
      return compareWeight(dinoObject.species, dinoObject.weight, person.getWeight());
    case 'height':
      return compareHeight(dinoObject.species, dinoObject.height, person.getHeight());
    case 'diet':
      return compareDiet(dinoObject.species, dinoObject.diet, person.getDiet());
    case 'where':
      return `The ${dinoObject.species} could be found in ${dinoObject.where}`;
    case 'when':
      return `The ${dinoObject.species} lived during the ${dinoObject.when} period`;
    case 'fact':
      return `${dinoObject.fact}`;
  }
}

// Provide a random key
function getRandomKey(keyArray) {
  const randomIndex = Math.floor(Math.random() * (keyArray.length - 1));
  return keyArray[randomIndex];
}

// Get dino keys except for species
function getProperties(dinoObject) {
  const dinoKeys = Object.keys(dinoObject);
  return dinoKeys.filter((key) => {
    return key !== 'species' && key !== 'img';
  });
}

function insertPerson(dinoObjects, personObject, insertIndex) {
  const newData = dinoObjects.map((dinoObject, index) => {
    return dinoObject;
  });
  newData.splice(insertIndex, 0, personObject);
  return newData;
}

// Create the info cards
function createTile(dinoObject, fact = undefined) {
  const div = document.createElement('DIV');
  const h3 = document.createElement('H3');
  const h3Content = document.createTextNode(dinoObject.species || dinoObject.getName()) ;
  const img = document.createElement('IMG');
  const p = document.createElement('P');
  const randomFact = document.createTextNode(fact);

  img.src = dinoObject.img || './images/human.png';
  div.className = 'grid-item';
  h3.appendChild(h3Content);

  // Only run when no fact is provided
  if (!(fact === undefined)) {
    p.appendChild(randomFact);
    div.appendChild(p);
  }
  div.appendChild(h3);
  div.appendChild(img);

  // Add tiles to DOM
  grid.appendChild(div);
}

// On button click, prepare and display infographic
compareBTN.onclick = () => {
  const form = document.getElementById('dino-compare');
  const person = createPerson(name.value, feet.value, inches.value, weight.value, diet.value);
  const finalData = insertPerson(dinoObjects, person, 4 );
  const dinoProperties = getProperties(dinoObjects[0]);

  // Remove form from screen
  form.style.display = 'none';
  // Generate Tiles for each Dino in Array
  finalData.forEach((object, index) => {
    if ('getName' in object) {
      createTile(object);
    } else if (object.species.toLowerCase() === 'pigeon') {
    createTile(object, object.fact);
    } else {
      const randomFact = getRandomFact(getRandomKey(dinoProperties), object, person);
      createTile(object, randomFact);
    }
  })
};
