function rollDice() {

    // Get the number of dice from the input field
    const numOfDice = document.getElementById("numOfDice").value;

    // Get references to the div where the dice results and images will be displayed
    const diceResult = document.getElementById("diceResult"); // For showing the rolled dice values as text
    const diceImages = document.getElementById("diceImages"); // For showing the dice images

    // Arrays to store the rolled dice values and corresponding image HTML
    const values = []; // Will hold the rolled values (1-6)
    const images = []; // Will hold the HTML strings for the dice images

    // Loop to roll the dice as many times as the user specified
    for (let i = 0; i < numOfDice; i++) {
        // Generate a random number between 1 and 6 to simulate dice roll
        const value = Math.floor(Math.random() * 6) + 1;

        // Push the rolled value into the values array
        values.push(value);

        // Create the corresponding dice image HTML string and push it into the images array
        // Assumes you have dice images like 1.png, 2.png, etc., stored in a "dice_images" folder
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    // Update the text content of the diceResult div to show the rolled values as a comma-separated list
    diceResult.textContent = `dice: ${values.join(', ')}`;

    // Update the inner HTML of the diceImages div to show the corresponding dice images
    diceImages.innerHTML = images.join(''); // Join the image tags into a single string and insert them into the div
}
