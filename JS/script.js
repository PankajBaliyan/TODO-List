let submitBtn = document.querySelector(".submitBtn");
const inputElement = document.getElementById("input");
const ulElement = document.getElementById("ul");

submitBtn.addEventListener("click", addNewItem);
inputElement.addEventListener("keypress", handleKeyPress);

//function to add new note
function addNewItem() {
    if (inputElement.value !== "") {
        const liElement = document.createElement("li");
        liElement.innerText = inputElement.value;
        ulElement.appendChild(liElement);
        inputElement.value = "";
    } else {
        inputElement.classList.toggle("d-none");
    }
}

//to make a delete like effect
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        let clickedLi = event.target;
        clickedLi.classList.toggle('crossed');
    }
})

//to add new note on enter press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addNewItem();
    }
}
