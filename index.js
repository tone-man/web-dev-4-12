
function getUserInput() {
    // Initialize array of numbers
    const numbersArray = [];

    while (true) {
        let userInput = parseInt( //Ensures Integers, pretty cool function
        prompt("Enter a positive integer (or a negative number to stop):")
        );

        // Check for falsy input or negative integers
        if (!userInput || userInput < 0) {
            break; // Exit loop
        }

        // Add values to end of array
        numbersArray.push(userInput);
    }

    // Create a result array to store matrix
    const resultArray = [];

    // Iterate over the array of inputs
    for (let i = 0; i < numbersArray.length; i++) {
        const num = numbersArray[i];
        
        // Array.fill populates an array with the specified element
        const newArray = new Array(num).fill(num);
        resultArray.push(newArray);
    }

    //Write out the arrays using JSON.strigify to the div tag matrix-output
    document.getElementById("matrix-output").innerHTML = "<pre>" + JSON.stringify(resultArray) + "</pre>";
}

