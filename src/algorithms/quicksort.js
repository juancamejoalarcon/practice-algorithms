function partition(arr, start, end) {
    var pivot = arr[end];
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, pivotIndex, i);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quicksort(arr, start, high) {
    if (start >= high)
        return;
    var pivot = partition(arr, start, high);
    quicksort(arr, start, pivot - 1);
    quicksort(arr, pivot + 1, arr.length - 1);
}
var arr = [10, 9, 3, 4, 6, 5, 8];
var high = arr.length - 1;
var start = 0;
quicksort(arr, start, high);
console.log(arr);
6, 7,
;
