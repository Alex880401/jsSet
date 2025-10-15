// 1.

const testSet1 = new Set([1, 2, 3]);

console.log(testSet1.has(3));

console.log(testSet1.has(4));

testSet1.add(4).add(5).add(0);
console.log(testSet1);

for (let item of testSet1) {
    console.log(item);
};

const sum = [...testSet1].reduce((accum, current) => accum + current, 0);
console.log(sum);

testSet1.delete(2);
console.log(testSet1);

testSet1.clear();
console.log(testSet1);

// 2.

const testSet2 = new Set([1,6,9,4,9,1,5,6]);
console.log(testSet2);

for(let item of [5, 10, 11]) {
    testSet2.add(item);
};

console.log(testSet2);

// const arr1 = [1,6,9,4,9,1,5,6];
// const arr2 = [5,10,11];
// const unitedArr = arr1.concat(arr2)

// const testSet3 = new Set(unitedArr);
// console.log(testSet3);




