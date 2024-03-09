document.addEventListener('DOMContentLoaded', () => {
	let catSadnessTimer = 0;
	let catCuddleCount = 0;
	let cuddleCounter = 0;
	let catCount = 0;
	let milkCount = 0;
	let homeCount = 0;
	let toyCount = 0;
	let groomingCount = 0;
	let catIncomeInterval;
	let homeMultiplier = 1;
	let toyMultiplier = 2;
	let groomingMultiplier = 5;

	let clickPower = 1;
	let milkEfficiency = 1;
	let homeEfficiency = 1;
	let toyEfficiency = 1;
	let groomingEfficiency = 1;
	let costReduction = 1;
	
	let catCoinCount = 0;
	
	let catMood = null;
	let achievedAchievements = [];

    const achievements = [
        { id: 1, name: "First Cat", requirement: 1 },
        { id: 2, name: "Cat Lover", requirement: 10 },
        { id: 3, name: "Cat Hoarder", requirement: 50 }
    ];

	const catCountElement = document.getElementById('cat-count');
	const milkCountElement = document.getElementById('milk-count');
	const homeCountElement = document.getElementById('home-count');
	const toyCountElement = document.getElementById('toy-count');
	const groomingCountElement = document.getElementById('grooming-count');

	const buyMilkButton = document.getElementById('buy-milk');
	const buyHomeButton = document.getElementById('buy-home');
	const buyToyButton = document.getElementById('buy-toy');
	const buyGroomingButton = document.getElementById('buy-grooming');

	const upgradeHomeButton = document.getElementById('upgrade-home');
	const upgradeToyButton = document.getElementById('upgrade-toy');
	const upgradeGroomingButton = document.getElementById('upgrade-grooming');
	const catButton = document.getElementById('cat-button');
	const cuddleButton = document.getElementById('cuddle-button');
	const cuddleCount = document.querySelector("#cat-cuddle-count");

	const clickPowerUpgradeButton = document.getElementById('click-power-upgrade');
	const milkEfficiencyUpgradeButton = document.getElementById('milk-efficiency-upgrade');
	const homeEfficiencyUpgradeButton = document.getElementById('home-efficiency-upgrade');
	const toyEfficiencyUpgradeButton = document.getElementById('toy-efficiency-upgrade');
	const groomingEfficiencyUpgradeButton = document.getElementById('grooming-efficiency-upgrade');
	const costReductionUpgradeButton = document.getElementById('cost-reduction-upgrade');

	const catCoinCountElement = document.getElementById('cat-coin-count');
	const catCuddleCountElement = document.getElementById('cat-cuddle-count');
	const buyCatButton = document.getElementById('buy-cat');
	
	const catMoodElement = document.getElementById('cat-mood');
	const heartImage = document.getElementById("heart-image");
	
	const zoomMessageContainer = document.getElementById('zoom-message-container');
	const zoomMessage2Container = document.getElementById('zoom-message2-container');
	const cuddleCountElement = document.getElementById('hug-count');

	setTimeout(() => {
	  zoomMessageContainer.classList.add('hide-message');
	  setTimeout(() => {
		zoomMessageContainer.style.display = 'none';
	  }, 2000);
	}, 5000);
	setTimeout(() => {
	  zoomMessage2Container.classList.add('hide-message');
	  setTimeout(() => {
		zoomMessage2Container.style.display = 'none';
	  }, 2000);
	}, 5000);
	const catImageNames = ['cat_random_1.png', 'cat_random_2.png', 'cat_random_3.png', 'cat_random_4.png', 'cat_random_5.png', 'cat_random_6.png', 'cat_random_7.png', 'cat_random_8.png', 'cat_random_9.png', 'cat_random_10.png', 'cat_awesome.png'];

	const catBreeds = [
	  {
		name: "Siamese",
		image: "assets/siamese.png",
		initialCost: 300,
		count: 0,
		incomeRate: 1
	  },
	  {
		name: "Persian",
		image: "assets/persian.png",
		initialCost: 500,
		count: 0,
		incomeRate: 2
	  },
	  {
		name: "Bengal",
		image: "assets/bengal.png",
		initialCost: 1000,
		count: 0,
		incomeRate: 3
	  }
	];
	

	catButton.addEventListener('click', (event) => {
		catCoinCount++;
		updateCounts();
	});
	
	cuddleButton.addEventListener('click', (event) => {
		if (catCount > 0) {
			catCuddleCount++;
			cuddleCounter++;
			updateCounts();
		}
	});

	buyCatButton.addEventListener('click', () => {
		if (catCoinCount >= 10) {
		  catCoinCount -= 10;
		  catCount++;
		  updateCounts();
		}
	});
	buyMilkButton.addEventListener('click', () => {
		if (catCoinCount >= 10) {
			catCoinCount -= 10;
			milkCount++;
			updateCounts();
		}
	});

	buyHomeButton.addEventListener('click', () => {
		if (catCoinCount >= 100) {
			catCoinCount -= 100;
			homeCount++;
			updateCounts();
		}
	});

	buyToyButton.addEventListener('click', () => {
		if (catCoinCount >= 200) {
			catCoinCount -= 200;
			toyCount++;
			updateCounts();
		}
	});

	buyGroomingButton.addEventListener('click', () => {
		if (catCoinCount >= 300) {
			catCoinCount -= 300;
			groomingCount++;
			updateCounts();
		}
	});

	upgradeHomeButton.addEventListener('click', () => {
		if (catCoinCount >= 400) {
			catCoinCount -= 400;
			homeMultiplier++;
			updateCounts();
		}
	});

	upgradeToyButton.addEventListener('click', () => {
		if (catCoinCount >= 500) {
			catCoinCount -= 500;
			toyMultiplier++;
			updateCounts();
		}
	});

	upgradeGroomingButton.addEventListener('click', () => {
		if (catCoinCount >= 1000) {
			catCoinCount -= 1000;
			groomingMultiplier++;
			updateCounts();
		}
	});
	
	/* upgrades section */
	clickPowerUpgradeButton.addEventListener('click', () => {
		if (catCount >= 50) {
		  catCount -= 50;
		  clickPower++;
		  updateCounts();
		}
	});

	milkEfficiencyUpgradeButton.addEventListener('click', () => {
		if (catCount >= 100) {
			catCount -= 100;
			milkEfficiency++;
			updateCounts();
		}
	});

	homeEfficiencyUpgradeButton.addEventListener('click', () => {
		if (catCount >= 200) {
			catCount -= 200;
			homeEfficiency++;
			updateCounts();
		}
	});

	toyEfficiencyUpgradeButton.addEventListener('click', () => {
		if (catCount >= 400) {
			catCount -= 400;
			toyEfficiency++;
			updateCounts();
		}
	});

	groomingEfficiencyUpgradeButton.addEventListener('click', () => {
		if (catCount >= 800) {
		  catCount -= 800;
		  groomingEfficiency++;
		  updateCounts();
		}
	});

	costReductionUpgradeButton.addEventListener('click', () => {
		if (catCount >= 1000) {
			catCount -= 1000;
			costReduction++;
			updateCounts();
		}
	});
	


	function startPassiveIncome() {
	  catIncomeInterval = setInterval(() => {
		const totalBreedsIncome = calculateBreedsIncome();
		catCount += homeCount * homeMultiplier * homeEfficiency
		  + toyCount * toyMultiplier * toyEfficiency
		  + groomingCount * groomingMultiplier * groomingEfficiency
		  + totalBreedsIncome;
		updateCounts();
	  }, 1000);
	}

	
		function updateCatMood() {
		  if (catCount === 0) {
			catMood = null;
		  } else {
			const milkCatRatio = (milkCount / catCount) * 100;

			if (milkCatRatio <= 1) {
			  catMood = 'sad';
			} else if (milkCatRatio <= 50) {
			  catMood = 'content';
			} else {
			  catMood = 'happy';
			}
		  }
		


		while (catMoodElement.firstChild) {
			catMoodElement.removeChild(catMoodElement.firstChild);
		}

		if (catMood) {
			const moodText = catMood.charAt(0).toUpperCase() + catMood.slice(1);
			catMoodElement.textContent = `Mood: ${moodText}`;
			const moodImg = document.createElement('img');
			moodImg.id = 'mood-image';
			moodImg.src = `assets/heart_${catMood}.png`;
			catMoodElement.appendChild(moodImg);
		} else {
			catMoodElement.textContent = 'Mood: ';
		}
		if (catMood === 'sad') {
				catSadnessTimer += 1;
		} 	else {
				catSadnessTimer = 0;
		}
	}

	
	function consumeWarmMilk() {
	  if (catCount > 0) {
		const scalingFactor = 0.1; // Adjust this value to change the rate of milk consumption
		const milkToConsume = Math.floor(catCount * scalingFactor);
		milkCount = Math.max(0, milkCount - milkToConsume);
		updateCounts();
	  }
	}



	function checkAchievements() {
	  achievements.forEach((achievement) => {
		if (catCount >= achievement.requirement && !achievedAchievements.includes(achievement.id)) {
		  console.log(`Achievement unlocked: ${achievement.name}`);
		  achievedAchievements.push(achievement.id);

		  // Move this line after pushing the new achievement to the array
		  displayAchievements();

		  const achievementList = document.getElementById('achievement-list');
		  const achievementItem = document.createElement('li');
		  achievementItem.classList.add('achievement');
		  achievementItem.textContent = achievement.name;
		  achievementList.appendChild(achievementItem);
		}
	  });
	}

	
	function displayAchievements() {
	  const achievementList = document.getElementById('achievement-list');
	  achievementList.innerHTML = '';

	  achievements.forEach((achievement) => {
		if (achievedAchievements.includes(achievement.id)) {
		  const achievementItem = document.createElement('li');
		  achievementItem.classList.add('achievement');
		  achievementItem.textContent = achievement.name;
		  achievementList.appendChild(achievementItem);
		}
	  });
	}

	const catBreedList = document.getElementById('cat-breed-list');

	catBreeds.forEach((breed, index) => {
	  const listItem = document.createElement('li');
	  listItem.innerHTML = `
		<img src="${breed.image}" alt="${breed.name}">
		<div>${breed.name} (Count: <span id="breed-count-${index}">0</span>)</div>
		<button id="buy-breed-${index}" class="buy-button">Buy (${breed.initialCost} Cat Coins)</button>
	  `;
	  catBreedList.appendChild(listItem);

	  const buyBreedButton = document.getElementById(`buy-breed-${index}`);
	  buyBreedButton.addEventListener('click', () => {
		if (catCoinCount >= breed.initialCost) {
		  catCoinCount -= breed.initialCost;
		  breed.count++;
		  updateCounts();
		}
	  });
	});

	function calculateBreedsIncome() {
	  let totalBreedsIncome = 0;
	  catBreeds.forEach((breed) => {
		totalBreedsIncome += breed.count * breed.incomeRate;
	  });
	  return totalBreedsIncome;
	}

	function checkCatSadness() {
	  const sadnessFactor = catCount >= 100 ? Math.ceil(catCount / 100) : 1;
	  if (catSadnessTimer > 60 * sadnessFactor) {
		catCount -= 1;
		catSadnessTimer = 0;
		updateCounts();
	  }
	}


	function updateCounts() {
		console.log('Updating counts...'); 
		console.log('Cuddle Counter:', cuddleCounter);
		console.log('Cat Count:', catCount);
		console.log('Milk Count:', milkCount);
		console.log('Home Count:', homeCount);
		console.log('Toy Count:', toyCount);
		console.log('Grooming Count:', groomingCount);
		console.log('Cat Coin Count:', catCoinCount);
		console.log('Cat Mood:', catMood);
		console.log('Achieved Achievements:', achievedAchievements);
			catCountElement.textContent = `Cats: ${catCount}`;
			catCoinCountElement.textContent = `Cat Coins: ${catCoinCount}`;
			cuddleCount.textContent = `Kitty Cuddles: ${cuddleCounter}`;
			milkCountElement.textContent = milkCount;
			homeCountElement.textContent = homeCount;
			toyCountElement.textContent = toyCount;
			groomingCountElement.textContent = groomingCount;
			updateCatMood();
			checkAchievements();
			displayAchievements(); 
			catBreeds.forEach((breed, index) => {
				const breedCountElement = document.getElementById(`breed-count-${index}`);
				breedCountElement.textContent = breed.count;
				});
		}
	function createRandomCat() {
	  const randomIndex = Math.floor(Math.random() * catImageNames.length);
	  const randomCat = document.createElement('img');
	  randomCat.src = `assets/${catImageNames[randomIndex]}`;
	  randomCat.style.position = 'absolute';
	  randomCat.style.top = `${Math.random() * window.innerHeight}px`;
	  randomCat.style.left = `${Math.random() * window.innerWidth}px`;
	  document.getElementById('background-cats').appendChild(randomCat);
	}
	class Collectible {
	  constructor(name, image, type, rarity) {
		this.name = name;
		this.image = image;
		this.type = type;
		this.rarity = rarity;
	  }
	}
	
	const randomImages = [
	  "assets/cat_doughnut.png",
	  "assets/cat_doughnut2.png",
	  "assets/cat_pizza.png",
	  "assets/cat_cheese.png"
	];

	function getRandomImage() {
	  const randomIndex = Math.floor(Math.random() * randomImages.length);
	  return randomImages[randomIndex];
	}

	function getItemCost() {
	  const baseCost = 100;
	  const costFactor = 1;
	  return Math.ceil(baseCost * Math.pow(costFactor, catCoinCount));
	}

	let inventory = [];

	document.getElementById('collectBtn').addEventListener('click', () => {
		const itemCost = getItemCost();
		if (catCoinCount >= itemCost && catCount >= 1) {
		  catCoinCount -= itemCost;
		  catCount++;
		  updateCounts();
		
		  const randomImageUrl = getRandomImage();
		  const newItem = new Collectible('Test Item', randomImageUrl, 'background', 'common');
		  addItemToInventory(newItem);
		  displayInventory();
		}});

	function addItemToInventory(item) {
	  inventory.push(item);
	}



	function displayInventory() {
	  const inventoryDisplay = document.getElementById('inventoryDisplay');
	  inventoryDisplay.innerHTML = '';

	  inventory.forEach(item => {
		const itemElement = document.createElement('div');
		itemElement.className = 'inventoryItem';
		itemElement.style.backgroundImage = `url(${item.image})`;
		itemElement.title = item.name;

		itemElement.addEventListener('click', () => {
		  removeItemFromInventory(item);
		  displayInventory();
		});

		inventoryDisplay.appendChild(itemElement);
	  });
	}


	startPassiveIncome();
	setInterval(consumeWarmMilk, 50000);
	setInterval(createRandomCat, Math.random() * 5000 + 5000); // between 5 and 10 seconds
	displayAchievements();
	setInterval(checkCatSadness, 100); // every 5 seconds



});