function intersection(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
                break;
            }
        }
    }

    return result;
}

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersection(arr1, arr2)); // Output: [2]
