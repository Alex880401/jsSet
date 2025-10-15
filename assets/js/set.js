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