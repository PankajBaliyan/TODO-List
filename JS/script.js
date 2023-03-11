let submitBtn = document.querySelector(".submitBtn");
const inputElement = document.getElementById("input");
const ulElement = document.getElementById("ul");

//buttons
const saveButton = document.getElementById("save-button");
const retrieveButton = document.getElementById("retrieve-button");
const clearButton = document.getElementById("clear-button");

submitBtn.addEventListener("click", addNewItem);
inputElement.addEventListener("keypress", handleKeyPress);

//function to add new note
function addNewItem() {
    if (inputElement.value !== "") {
        const liElement = document.createElement("li");
        liElement.innerText = inputElement.value;
        const closeElement = document.createElement("img");
        closeElement.src = "../Images/waste.png";
        closeElement.style.height = "20px";
        liElement.appendChild(closeElement);
        ulElement.appendChild(liElement);
        inputElement.value = "";
    } else {
        inputElement.classList.toggle("d-none");
    }
}

//to make a delete like effect
document.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        let clickedLi = event.target;
        clickedLi.classList.toggle("crossed");
    } else if (event.target.tagName === "IMG") {
        let clickedSpan = event.target;
        clickedSpan.parentElement.remove();
    }
});

//to add new note on enter press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addNewItem();
    }
}

// Retrieve saved list from local storage if available
const savedList = localStorage.getItem("taskList");
if (savedList) {
    document.getElementById("ul").innerHTML = savedList;
}

// Function to store the current list in local storage
saveButton.addEventListener("click", () => {
    const taskList = document.getElementById("ul").innerHTML;
    localStorage.setItem("taskList", taskList);
    alert("List saved successfully!");
});

// Function to retrieve the saved list from local storage
retrieveButton.addEventListener("click", () => {
    const savedList = localStorage.getItem("taskList");
    if (savedList) {
        document.getElementById("ul").innerHTML = savedList;
        alert("List retrieved successfully!");
    } else {
        alert("No saved list found!");
    }
});

// Function to clear the saved list from local storage
clearButton.addEventListener("click", () => {
    localStorage.removeItem("taskList");
    alert("List clear successfully!");
    ulElement.innerHTML = "";
});
