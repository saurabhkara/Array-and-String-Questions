console.log("Jai Pravrajika Mata");

let arr = [4, 8, 7, 1, 2, 3];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    console.log("Pass", i);
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  console.log(arr);
}

// bubbleSort(arr);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let index = i - 1;
    console.log("pass", i);
    while (arr[index] > temp && index >= 0) {
      console.log(arr[index], temp);
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = temp;
  }
  console.log(arr);
}

// insertionSort(arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}

// selectionSort(arr);

function linearSearch(arr, key) {
  let find = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      find = true;
      break;
    }
  }
  return find;
}

// let res =linearSearch(arr,3);
// console.log(res);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
function binarySearch(arr, start, end, key) {
  let mid = parseInt((start + end) / 2);

  if (end < start) {
    return -1;
  }

  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    return binarySearch(arr, start, mid - 1, key);
  } else {
    return binarySearch(arr, mid + 1, end, key);
  }
}

// console.log(binarySearch(arr1,0,7,3));

function iterativeBinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == key) {
      return mid;
    }
    if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
  }

  return -1;
}

// const res1=iterativeBinarySearch(arr1, 4);
// console.log(res1);

//sum of all the sub-arrays
//number of sub-arrays = nC2 +2 = n(n+1)/2
let arr3 = [1, 2, 3, 4, 5];
function sumSubArray(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      totalSum += arr[j];
      console.log(totalSum);
    }
  }
  return totalSum;
}

// console.log(sumSubArray(arr3));

//An arithmetic array is an array that contains at least two integer and the differences
//between consecutive  integers are equal.
//Array Challenge : Time Stamp 16:02

//Q. Saraswati has an array of N non-negative integers. The i-th integer of the array is Ai.
//She wants to choose arithmetic subarray from her array that has the maximum length.
//Please help her to determine the length of longest contiguous arithmetc subarray.

let arr4 = [6, 8, 10, 11, 12, 14];

function contiguousArithmeticSubArray(arr) {
  let pd = arr[1] - arr[0];
  let current = 2;
  let ans = 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] == pd) {
      current++;
    } else {
      pd = arr[i] - arr[i - 1];
      current = 2;
    }
    ans = Math.max(ans, current);
  }

  return ans;
}

// console.log(contiguousArithmeticSubArray(arr4));

//time stamp : 33:11
//Q. Ishiyana record breaking day

let arr5 = [4, 0, 5, 1, 2, 7];
function recordBreakingDay(arr) {
  let record = 0;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && i != arr.length - 1) {
      max = arr[i];
      record++;
    }
    if (i == arr.length - 1 && arr[i] > max) {
      record++;
    }
  }
  console.log(record);
}
// recordBreakingDay(arr5);

//VL: 8.6
//

let arr8 = [1, 5, 3, 4, 3, 5, 6];
function repeatingNumberLowerIndex(arr) {
  let obj = {};
  let minIndex = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = i;
    } else {
      if (obj[arr[i]] < minIndex) {
        minIndex = obj[arr[i]];
      }
    }
  }
  console.log(minIndex);
}

// repeatingNumberLowerIndex(arr8);

//sum of contigious subarray is equals to given sum.

function sumOfsubArrayisEqual(arr) {
  let sum = 5;
  let start = -1;
  let end = -1;
  let currentSum = 0;
  let i = 0,
    j = 0;
  while (i < arr.length && j < arr.length) {
    if (currentSum == sum) {
      break;
    }
    if (currentSum < sum) {
      end++;
      currentSum += arr[end];
      i++;
    }
    if (currentSum > sum) {
      start++;
      currentSum -= arr[start];
      j++;
    }
  }
  console.log(start, end);
}
let arr9 = [1, 2, 3, 7, 5];
// sumOfsubArrayisEqual(arr9);

function minPositiveMissing(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      obj[arr[i]] = 1;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (obj[i] != 1) {
      console.log(i);
    }
  }
}

const arr10 = [1, -1, 7, 3, 2, 4, 6, 8];
// minPositiveMissing(arr10);

function allSubArray(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        str += arr[k] + " ";
      }
      str += "\n";
    }
  }
  console.log(str);
}

// allSubArray(arr10);

//Brute force method t(n)=O(n3)
function maxSumSubArray(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  console.log(maxSum);
}

let arr11 = [-1, 5, 4, 6, 4];
// maxSumSubArray(arr11);

//Commulative Sum approach t(n)= O(n2);
function commulativeSum(arr) {
  let currentSum = [];
  currentSum[0] = 0;
  let maxSum = -Infinity;

  for (let i = 1; i <= arr.length; i++) {
    currentSum[i] = currentSum[i - 1] + arr[i - 1];
  }

  let sum = 0;

  for (let i = 1; i < currentSum.length; i++) {
    for (let j = 0; j < i; j++) {
      sum = currentSum[i] - currentSum[j];
      maxSum = Math.max(sum, maxSum);
    }
  }

  console.log(maxSum);
}

// commulativeSum(arr11);

//kadane's algorithm

function kadane() {}

//String Questions

let string1 = "Asvadhvgkasfddahjasbhgs";

function stringA(str) {
  str = str.toLowerCase();
  let arr = {};
  for (let i = 0; i < str.length; i++) {
    if (arr[str[i]]) {
      arr[str[i]]++;
    } else {
      arr[str[i]] = 1;
    }
  }

  console.log(arr);
}

// stringA(string1);

// loopA : for(let i=0; i<5; i++){
//   for(let j=0;j<6;j++){
//     if(j==5) break loopA;
//     console.log(i,j);
//   }
// }

// console.log('A'.charCodeAt() -65);



//
// sieve of eratosthenes algo used to get all the prime number
function primeSieve(num) {
  const prime = [];
  for (let i = 0; i <= num; i++) {
    prime[i] = 0;
  }

  for (let i = 2; i <= num; i++) {
    if (prime[i] == 0) {
      for (let j = i * i; j <= num; j += i) {
        prime[j] = 1;
      }
    }
  }

  for (i = 2; i <= num; i++) {
    if (prime[i] == 0) {
      console.log(i);
    }
  }
}

// primeSieve(50);
