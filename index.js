// Write your code here!
// Step 1: Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Step 2: Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');

// Step 3: Set the 'id' of the new <h1> to 'victory'
newHeader.id = 'victory';

// Step 4: Set the innerHTML of the new <h1> to include your name in place of 'YOUR-NAME'
newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your name

// Step 5: Append the new header to the body of the document
document.body.appendChild(newHeader);
