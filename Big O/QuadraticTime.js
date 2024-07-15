// function findPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(`Pair: ${arr[i]}, ${arr[j]}`);
//         }
//     }
// }

// const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);

function findPairs(arr) {

    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j ++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }

    // O(n)
    for (let q = 0; q < 5; q++) {
        console.log("--------", q);
    }
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
