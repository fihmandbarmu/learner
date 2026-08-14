// Step 1: Grab the buttons and the text from the HTML
const feedBtn = document.getElementById("feed-button");
const playBtn = document.getElementById("play-button");
const statusText = document.getElementById("pet-status");
const petPicture = document.getElementById("pet-picture");

// Step 2: Make the "Feed" button listen for a click
feedBtn.addEventListener("click", function() {
  statusText.innerHTML = "Yum, yum! The puppy loves the dog food!";
  statusText.style.color = "darkgreen"; // Changes the text color
  petPicture.innerHTML = "🦴🐶"; // Changes the picture!
});

// Step 3: Make the "Play" button listen for a click
playBtn.addEventListener("click", function() {
  statusText.innerHTML = "Yay! The puppy is chasing the tennis ball!";
  statusText.style.color = "darkorange"; // Changes the text color
  petPicture.innerHTML = "🎾🐶"; // Changes the picture!
});
