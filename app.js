console.log("Exercise 3.1");

// Step 1: Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."

const listOfItems = ["Milk", "Bread", "Apples"];
console.log(listOfItems);

// Step 2: Check your list length in the console.
console.log("lenght of list Of Items: " , listOfItems.length);

// Step 3: Update "Bread" to "Bananas."
listOfItems [1] = "Bananas";

// Step 4: Output your entire list to the console.
console.log(listOfItems);


console.log("Exercise 3.2");

// Step 1: Create an empty array
let shoppingList = [];

// Step 2: Add Milk, Bread, and Apples to your list.
shoppingList.push("Milk","Bread","Apple");

// Step 3: Update "Bread" with Bananas and Eggs.
shoppingList [1] = "Bananas";
shoppingList.splice(2,0, "Eggs");

// Step 4: Remove the last item from the array and output it into the console.
let removedItem = shoppingList.pop();
console.log("Removed Item :", removedItem);

// Step 5: Sort the list alphabetically.
shoppingList.sort();

// Step 6: Find and output the index value of Milk.
let milkIndex = [shoppingList.indexOf("milk")];
console.log("Index of Milk:" , milkIndex );

// Step 7: After Bananas, add Carrots and Lettuce.
let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

// Step 8: Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];

// Step 9: Combine both lists, adding the new list twice to the end of the first list.
shoppingList = shoppingList.concat(newList,newList);

// Step 10: Get the last index value of Pop and output it to the console.
let lastIndexPop = shoppingList.lastIndexOf("pop");
console.log("Last index of pop: ", lastIndexPop);

// Final Shopping List
console.log(shoppingList);

console.log("Exercise 3.3");

// 1. Create an array containing three values: 1, 2, and 3.
let originalArray = [1,2,3];

// 2. Nest the original array into a new array three times.
let nestedArray = [originalArray,originalArray,originalArray];

// 3. Output the value 2 from one of the arrays into the console.
console.log (nestedArray[1][1]);

console.log("Exercise 3.4");

//  Step 1: Create a new myCar object for a car.
let myCar = {
    model: "Civic",
    make: "Honda",
    year: 2022,
    color: "White",
    automatic: true,
};

// Step 2: Create a variable that can hold the string value color.

let propertyName = "color";
myCar [propertyName] = "black";

// Step 3: Use that same variable and assign a new property string value to it, such as forSale.

propertyName = "forSale";
myCar [propertyName] = true;

// Step 4: Output make and model into the console.

console.log (myCar.make);
console.log (myCar.model);

// Step 5: Output the value of forSale into the console.

console.log (myCar.forSale);

console.log ("Exercise 3.5");

// Step 1: Create an object named people that contains an empty array called friends.
let people = {
    friends : []
};


// Step 2: Create three variables, each containing an object with your friend's first name, last name, and an ID value.
let friend1 = {
    firstName: "Alina",
    lastName: "Waseem",
    id: 4, 
}

let friend2 = {
    firstName: "Zulaikha",
    lastName: "Zameer",
    id: 43,
}

let friend3 = {
    firstName: "Tooba",
    lastName: "Sohaib",
    id: 43,
}

// Step 3: Add the three friends to the friends array.
people.friends.push(friend1,friend2,friend3);

// Step 4: Output it to the console.
console.log(people.friends);

console.log("CHAPTER PROJECTS");
console.log("Manipulating an array");

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

// Remove the first item and the last item.
theList.shift();
theList.pop();

// Add FIRST to the start of the array.
theList.unshift("FIRST");

// Assign hello World to the fourth item value.
theList[3] = "Hello World";

// Assign MIDDLE to the third index value.
theList[2] = "MIDDLE";

// Add LAST to the last position in the array.
theList.push("LAST");

// Output it to the console.
console.log(theList);

console.log("Company product catalog");

// Create an array to hold an inventory of store items
let inventory = [];

// Create three items, each having the properties of name, model, cost, and quantity.

let item1 = {
    name: "Smartphone",
    model: "ABC123",
    cost: 20000,
    quantity: 10,
}

let item2 = {
    name: "Laptop",
    model: "XYZ456",
    cost: 50000,
    quantity: 5,
}

let item3 = {
    name: "Tablet",
    model: "PQR789",
    cost: 30000,
    quantity: 15,
}

// Add all three objects to the main array using an array method, and then log the inventory array to the console.
inventory.push(item1,item2,item3);
console.log(inventory);

// Access the quantity element of your third item, and log it to the console. 
console.log("Quantity of the Third item is: " , inventory[2].quantity);



