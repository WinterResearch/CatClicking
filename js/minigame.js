	// Add event listeners for each minigame button
	document.getElementById('minigame-1-btn').addEventListener('click', function() {
	  // Show the modal for minigame 1
	  document.getElementById('minigame-1-modal').style.display = 'block';
	});

	document.getElementById('minigame-2-btn').addEventListener('click', function() {
	  // Show the modal for minigame 2
	  document.getElementById('minigame-2-modal').style.display = 'block';
	});

	// Add event listeners for the start buttons in each modal
	document.getElementById('minigame-1-start').addEventListener('click', function() {
	  // Get the number of cats selected by the user
	  var numCats = document.getElementById('minigame-1-cats').value;

	  // Start the minigame with the selected number of cats
	  startMinigame1(numCats);
	});

	document.getElementById('minigame-2-start').addEventListener('click', function() {
	  // Get the number of cats selected by the user
	  var numCats = document.getElementById('minigame-2-cats').value;

	  // Start the minigame with the selected number of cats
	  startMinigame2(numCats);
	});

	function startMinigame1(numCats) {
	  // Hide the minigame 1 modal
	  document.getElementById('minigame-1-modal').style.display = 'none';

	  // Set the timer in the missions section
	  var timerDisplay = document.getElementById('minigame-1-timer');
	  var secondsRemaining = numCats * 10;
	  timerDisplay.textContent = secondsRemaining;

	  // Start the countdown
	  var countdown = setInterval(function() {
		secondsRemaining--;
		timerDisplay.textContent = secondsRemaining;

		if (secondsRemaining <= 0) {
		  clearInterval(countdown);
		  showMinigame1Results(numCats);
		}
	  }, 1000);
	}

	function startMinigame2(numCats) {
	  // Hide the minigame 2 modal
	  document.getElementById('minigame-2-modal').style.display = 'none';

	  // Set the timer in the missions section
	  var timerDisplay = document.getElementById('minigame-2-timer');
	  var secondsRemaining = numCats * 15;
	  timerDisplay.textContent = secondsRemaining;

	  // Start the countdown
	  var countdown = setInterval(function() {
		secondsRemaining--;
		timerDisplay.textContent = secondsRemaining;

		if (secondsRemaining <= 0) {
		  clearInterval(countdown);
		  showMinigame2Results(numCats);
		}
	  }, 1000);
	}

	function showMinigame1Results(numCats) {
	  // Show the results section
	  document.getElementById('minigame-1-results').style.display = 'block';

	  // Calculate the rewards
	  var coinsEarned = numCats * 20;
	  var expEarned = numCats * 10;

	  // Update the rewards display
	  document.getElementById('minigame-1-coins').textContent = coinsEarned;
	  document.getElementById('minigame-1-exp').textContent = expEarned;

	  // Update the main resources display
	  updateCoins(coinsEarned);
	  updateExp(expEarned);
	}

	function showMinigame2Results(numCats) {
	  // Show the results section
	  document.getElementById('minigame-2-results').style.display = 'block';

	  // Calculate the rewards
	  var coinsEarned = numCats * 25;
	  var expEarned = numCats * 15;

	// Update the rewards display
	function updateRewardsDisplay(rewards) {
	var rewardsDisplay = document.getElementById('minigame-rewards');
	rewardsDisplay.innerHTML = '';

	for (var i = 0; i < rewards.length; i++) {
	var reward = rewards[i];
	var rewardElement = document.createElement('div');
	rewardElement.className = 'reward';
	rewardElement.innerHTML = reward.name + ' x ' + reward.amount;
	rewardsDisplay.appendChild(rewardElement);
	}
	}

	// Show the results of the minigame
	function showMinigameResults(minigame, numCats) {
	// Calculate the rewards based on the number of cats and the minigame difficulty
	var rewards = calculateRewards(minigame.difficulty, numCats);

	// Update the rewards display
	updateRewardsDisplay(rewards);

	// Show the results modal
	document.getElementById('minigame-results-modal').style.display = 'block';
	}

	// Add event listeners for the start buttons in each modal
	document.getElementById('minigame-1-start').addEventListener('click', function() {
	// Get the number of cats selected by the user
	var numCats = document.getElementById('minigame-1-cats').value;

	// Start the minigame with the selected number of cats
	startMinigame(minigames[0], numCats, function() {
	// The minigame has ended, show the results
	showMinigameResults(minigames[0], numCats);
	});
	});

	document.getElementById('minigame-2-start').addEventListener('click', function() {
	// Get the number of cats selected by the user
	var numCats = document.getElementById('minigame-2-cats').value;

	// Start the minigame with the selected number of cats
	startMinigame(minigames[1], numCats, function() {
	// The minigame has ended, show the results
	showMinigameResults(minigames[1], numCats);
	});
	});