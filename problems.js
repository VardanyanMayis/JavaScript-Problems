'use strict';
// We need use recursia for problems

// Sum all numbers from arr (problem 4.1)
function SumNumbers(arr){
	if(arr == 0) return 0;
	if(arr.length === 1) return arr[0];

	let n = arr.pop();
	return n + SumNumbers(arr);
}


// Write function like method LENGTH (4.2)
function arrLength(arr, count = 1) {
	if(arr == 0) return 0;

	arr.pop();
	return count + arrLength(arr)
}


// Get max number from Arr (problem 4.3) 
function maxNumber(arr, Number = -Infinity) {
	let max = Number;

	if(arr == 0) return 'arr without Number';
	if(arr.length === 1) return arr[0];

	if(arr.at(-1) > arr.at(-2)) {
		max = arr.at(-1);
		arr.splice(arr.length-2, 1);
	} else {
		max = arr.at(-2);
		arr.pop();
	}
	return maxNumber(arr, max);
}

// Binary search with recursia problem(4.4)
function binarySearch(arr, item, index = 0) {
	if(arr == 0) return 'Your array is empty';
	if(arr.length == 1 && arr[0] === item) {
		return index;
	} else if(arr.length == 1) return 'Your array without your number';

	let middle = Math.round( (arr.length - 1) / 2 )
		,   recursIndex = index;     

	if (arr[middle] == item) return recursIndex += middle;
	if (arr[middle] > item) return binarySearch(arr.slice(0, middle), item);
	else return binarySearch(arr.slice(middle), item, (recursIndex += middle));
}


// test problem (4.1)
console.log( SumNumbers([]) );
console.log( SumNumbers([1]) );
console.log( SumNumbers([2, 4, -4, 10]) );

// test problem (4.2)
console.log( arrLength([]) );
console.log( arrLength([2]) );
console.log( arrLength([1, 4, 6, -1, [4, 6], null ]) );

// test problem (4.3)
console.log( maxNumber([]) );
console.log( maxNumber([-8]) );
console.log( maxNumber([15, 25, -7, 20]) );

// test problem (4.4)
console.log( binarySearch([]) );
console.log( binarySearch([5], 5) );
console.log(binarySearch([-2, 1, 2, 14, 15, 7], 18));
console.log(binarySearch([-2, 1, 2, 14, 15, 18], 14));
console.log(binarySearch([-2, 1, 2, 14, 15, 18], 1));
console.log(binarySearch([-2, 1, 2, 14, 15, 18], 18));
console.log(binarySearch([-2, 1, 2, 14, 15, 7], -2));
