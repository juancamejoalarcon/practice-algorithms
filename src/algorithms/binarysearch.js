function binarySearch(arr, searchValue, start, end) {
    var midpoint = Math.floor((start + end) / 2);
    console.log(midpoint);
    if (arr[midpoint] === searchValue)
        return midpoint;
    if (arr[midpoint] < searchValue) {
        return binarySearch(arr, searchValue, midpoint + 1, end);
    }
    if (arr[midpoint] > searchValue) {
        return binarySearch(arr, searchValue, start, midpoint - 1);
    }
}
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = binarySearch(arr, 9, 0, arr.length - 1);
console.log(result);
