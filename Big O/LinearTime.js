const groceries =  ["milk", "bread", "eggs", "flour", "cheese","sugar"];

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found ${item}`);
        }
    }

    for (let j = 0; j < groceries.length; j ++) {
        if (groceries[j] === item) {
            console.log(`Found ${item}`);
        }
    }
}

searchForItem("eggs");