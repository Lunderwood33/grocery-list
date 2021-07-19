

const groceryList = [

    {
        id: 1,
        item: "Milk",
        type: "Dairy",
        price: 3.08,
        quantity: 1
    },

    {
        id: 2,
        item: "Eggs",
        type: "Poultry",
        price: 2.98,
        quantity: 1
    },

    {
        id: 3,
        item: "Pizza rolls",
        type: "Fats",
        price: 7.25,
        quantity: 3
    },

    {
        id: 4,
        item: "Strawberries",
        type: "Fruit",
        price: 1.52,
        quantity: 1
    },

    {
        id: 5,
        item: "Sandwich Buns",
        type: "Starch",
        price: 3.75,
        quantity: 1
    },

    {
        id: 6,
        item: "Hot Dogs",
        type: "Protein",
        price: 8.27,
        quantity: 2
    },

    {
        id: 7,
        item: "Ketchup",
        type: "Condiment",
        price: 1.97,
        quantity: 1
    }
]

const newListItem = {
    id: 8,
    item: "Chocolate Milk",
    type: "Dairy",
    price: 3.21,
    quantity: 1
}

groceryList.push(newListItem)

const addingGrocery = {
    item: "Tangerine",
    type: "Fruit",
    price: 2.57,
    quantity: 1
}

const addGroceryToInventory = (groceryObject) => {
    const lastIndex = groceryList.length - 1
    const currentLastGrocery = groceryList[lastIndex]
    const maxId = currentLastGrocery.id
    const idForNewGrocery = maxId + 1

    groceryObject.id = idForNewGrocery
    groceryList.push(groceryObject)
}

addGroceryToInventory(addingGrocery) 
    // for (const item of groceryList) {
    //     console.log(item.id)
        
    // }




console.log(groceryList)

const addingNewGrocery = {
    item: "Watermelon",
    type: "Fruit",
    price: 3.75,
    quantity: 1
}

const addNewGroceryToInventory = (groceryObject) => {
    const lastIndex = groceryList.length - 1
    const currentLastGrocery = groceryList[lastIndex]
    const maxId = currentLastGrocery.id
    const idForNewGrocery = maxId + 1

    groceryObject.id = idForNewGrocery
    groceryList.push(groceryObject)
}

addNewGroceryToInventory(addingNewGrocery) 
    // for (const item of groceryList) {
    //     console.log(item.id)
        
    // }




console.log(groceryList)