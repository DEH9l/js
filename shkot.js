/*
let intersection = (...arrays) => {
    let allValues = [];
    arrays.map(array => {
        allValues = [...allValues, ...array]
    });
    const unique = [...new Set(allValues)];
    let duplicates = [...allValues];
    unique.forEach(num => {
        const i = allValues.indexOf(num);
        allValues = allValues.slice(0, i).concat(allValues.slice(i + 1, allValues.length))
    });
    return allValue;
};

const arr1 = [1, 2];
const arr2 = [2, 3];






let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.slice(0, 3);
let arr5 = arr3.slice(3,5);
console.log(arr3);
console.log(arr4, arr5);
*/


//Задаем начальную строку чисел. Напишите функцию spliceNum(num, symbol), которая принимает число num в качестве аргумента и symbol в качестве
// разделителя и вставляет symbol после каждого нечетного числа. Если последний элемент также является нечетным, то вставлять symbol не нужно.


const num = '1124356712453';

function spliceNum(num, symbol) {
    let shkot = num.split('');
    /*    shkot.map(function (item, number, array) {
            if (item % 2 === 0) {
                shkot3.push(item);
            }
    /!*        else {
                shkot3.splice(item, 0);
            }*!/
        });*/
    shkot.forEach((item, index) => {
        item % 2 !== 0 && index < shkot.length - 1 && (shkot[index] += "-")
    })
    return shkot.join('')
}

console.log(spliceNum(num, "-"));
