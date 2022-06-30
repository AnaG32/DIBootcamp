// Daily Challenge Gold//

// 1. Using the .toString() method convert the array to a string.
// 2. Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// 3. Bonus : To do this Bonus look up how to work with nested for loops.  
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.

let arr = [5,0,9,1,7,4,2,6,3,8];
console.log (arr);

let temp;
let i, j;
for (i=0; i<arr.length; i++) {
    for (j=0; j<arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
}
console.log(arr);