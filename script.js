// Example 1
// create a function that prompts the user for items and returns the list. then create a function that creates an element for each item in a given list and prints the list to the page
let groceryList = createList();
printList(groceryList);

let lastItem = document.querySelector("li:last-child");

// Once the list is on the page, select the last item and add styling
lastItem.classList.add("blue-text", "red-bg");

function createList() {
  let itemList = [];
  while (true) {
    let item = prompt(`What's your next item?`);
    if (item !== null) {
      itemList.push(item);
    } else {
      break;
    }
  }
  return itemList;
}

function printList(list) {
  let listContainer = document.createElement("ul");

  for (let index = 0; index < list.length; index += 1) {
    let currentItem = list[index];
    let newItemElement = document.createElement("li");
    newItemElement.append(currentItem);
    listContainer.append(newItemElement);
  }

  let app = document.querySelector("#app");
  app.append(listContainer);
}

/////////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Example 2
// ask a user for a shape and a color; create a new element and apply styling depending on which shape and which color was chosen.
let shape = prompt("Square or Circle?:").toLowerCase();
console.log(shape);
let color = prompt("Enter a color:").toLowerCase();
console.log(color);

let shapeDiv = document.createElement("div");

if (shape === "square") {
  shapeDiv.classList.add("square");
} else if (shape === "circle") {
  shapeDiv.classList.add("circle");
} else {
  alert("not valid");
}

// an alternative approach to the if...else if above
// shapeDiv.classList.add(`${shape}`);

shapeDiv.style.backgroundColor = color;

document.querySelector("#app").append(shapeDiv);
