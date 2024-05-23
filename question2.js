function countFrequency(array) {
    const frequency = {};

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (frequency[num] !== undefined) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    return frequency;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = countFrequency(arr);
console.log(result);  // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
