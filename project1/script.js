// Get all the child elements inside the #third-container
const childElements = document.querySelectorAll("#third-container .third-container-child");

let clickedElements = []; // Initialize an empty array to store clicked elements

childElements.forEach((childElement, index) => {
    childElement.addEventListener("click", () => {
        // Push the clicked child element to the clickedElements array
        clickedElements.push(childElement);

        // Change the background color of the clicked child element to red
        childElement.style.backgroundColor = "red";

        // Check if the last child element with id "last" was clicked
        if (childElement.id === "last") {
            // Set a timeout to change the background color of all elements back to blue
               let delay=1000;
                clickedElements.forEach((clickedElement) => {
                    setTimeout(() => {
                    clickedElement.style.backgroundColor = "blue";
                }, delay);
                delay+=1000;
                });

                // Clear the clickedElements array
                clickedElements = [];
             // Adjust the timeout duration (in milliseconds) as needed
        }
    });
});
