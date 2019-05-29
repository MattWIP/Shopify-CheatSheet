const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);


// Usage
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]