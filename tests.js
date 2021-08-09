const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2, c: 4 };
function isEqual (firstObject, secondObject) {
    let param1 = Object.entries(firstObject);
    let param2 = Object.entries(secondObject);
    param1 = param1.sort();
    param2 = param2.sort();
    return JSON.stringify(firstObject) === JSON.stringify(secondObject)
}
console.log(isEqual(data, data2));
console.log(isEqual(data, data3));

const data4 = { a: 1, b: 2 };
let toArr = [];
for(let key in data4){
    toArr.push(key);
    toArr.push(data[key]);
}
console.log(toArr);


