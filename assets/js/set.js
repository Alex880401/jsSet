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

// 3.

const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

// 3.1.

const usersName = [...(new Set(messages.map(item => item.name)))];
console.log(usersName);

// 3.2.

const usersMassages = new Map();

for (const {name, message, date} of messages) {
  if (!usersMassages.has(name)) {
    usersMassages.set(name, []);
  };

  usersMassages.get(name).push({message, date});
};

console.log(usersMassages);
