function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(arr)); // Output: 34
