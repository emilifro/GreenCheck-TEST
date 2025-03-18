
// kitchen.js - Kitchen module for bakery shop with realistic intensive computations
let inventory = {
  "Chocolate Cake": 0,
  "Vanilla Cupcake": 0,
  "Strawberry Muffin": 0,
};

// Simulate temperature control system
function simulateTemperatureControl(targetTemp, duration) {
  let currentTemp = 20; // Room temperature
  let tempHistory = [];

  for (let i = 0; i < duration; i++) {
    // Simulate complex temperature fluctuations
    currentTemp += Math.sin(i / 100) * 5 + Math.random() * 2;
    tempHistory.push(currentTemp);

    // Intensive temperature calculations
    for (let j = 0; j < 1000; j++) {
      Math.sqrt(Math.abs(currentTemp - targetTemp));
      Math.pow(currentTemp, 2);
    }
  }
  return tempHistory;
}

// Simulate ingredient mixing process
function simulateMixing(ingredients) {
  let mixture = new Array(1000).fill(0);

  // Simulate complex mixing patterns
  for (let i = 0; i < 100000; i++) {
    // Intensive mixing calculations
    for (let j = 0; j < mixture.length; j++) {
      mixture[j] = (mixture[j] + Math.sin(i) * Math.random()) % 1;
    }

    // Simulate viscosity changes
    for (let k = 0; k < 100; k++) {
      Math.sqrt(Math.abs(mixture[k] - mixture[k + 1]));
    }
  }
  return mixture;
}

// Simulate baking process with temperature zones
function simulateBakingZones() {
  const zones = 5;
  let zoneTemps = new Array(zones).fill(0);

  // Simulate different temperature zones in the oven
  for (let i = 0; i < 100000; i++) {
    for (let zone = 0; zone < zones; zone++) {
      // Intensive temperature zone calculations
      zoneTemps[zone] += Math.sin(i / 100 + zone) * 2;
      Math.sqrt(Math.abs(zoneTemps[zone] - 180)); // Target temp 180°C
    }
  }
  return zoneTemps;
}

// Simulate ingredient preparation
function prepareIngredients(quantity) {
  let prepared = [];

  // Simulate chopping, measuring, and mixing
  for (let i = 0; i < quantity * 10000; i++) {
    // Intensive ingredient preparation calculations
    let ingredient = {
      size: Math.random(),
      consistency: Math.sin(i) * Math.cos(i),
      temperature: Math.random() * 100,
    };

    // Simulate texture analysis
    for (let j = 0; j < 100; j++) {
      Math.sqrt(ingredient.size * ingredient.consistency);
    }

    prepared.push(ingredient);
  }
  return prepared;
}

function bakeCake(type, quantity) {
  if (inventory.hasOwnProperty(type)) {
    console.log(`Starting to bake ${quantity} ${type}(s)...`);

    // Simulate preheating
    console.log("Preheating oven...");
    const tempHistory = simulateTemperatureControl(180, 10000);

    // Prepare ingredients
    console.log("Preparing ingredients...");
    const ingredients = prepareIngredients(quantity);

    // Mix ingredients
    console.log("Mixing ingredients...");
    const mixture = simulateMixing(ingredients);

    // Simulate baking process
    console.log("Baking in progress...");
    const zoneTemps = simulateBakingZones();

    // Final temperature stabilization
    simulateTemperatureControl(175, 5000);

    inventory[type] += quantity;
    console.log(`Baked ${quantity} ${type}(s)`);
  } else {
    console.log(`Sorry, we don't make ${type}`);
  }
}

function listInventory() {
  console.log("Current Inventory:");
  for (const [item, quantity] of Object.entries(inventory)) {
    console.log(`${item}: ${quantity}`);
  }
}

// Add direct execution path for testing
if (require.main === module) {
  console.log("Running Kitchen.js directly...");

  // Perform intensive operations
  console.log("Testing temperature control...");
  simulateTemperatureControl(180, 20000);

  console.log("Testing ingredient preparation...");
  prepareIngredients(5);

  console.log("Testing mixing process...");
  simulateMixing([]);

  console.log("Testing baking zones...");
  simulateBakingZones();

  console.log("Testing complete bake process...");
  bakeCake("Chocolate Cake", 2);

  console.log("Final inventory:");
  listInventory();
}

module.exports = {
  bakeCake,
  listInventory,
};
