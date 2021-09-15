/*// Добавить такое поведение массиву
const a = [1, 2, 3, 4, 5];

function dublicate(array) {
    array.forEach((item) => {
            array.push(item);
        }
    );
    console.log(a.join(','));
}

dublicate(a);*/


/*// Функция, которая возвращает массив из общих элементов двух массивов

const b = [1,2,3,4,5,6];
const c = [1,44,5,3,7];

function  isSame(arr1, arr2) {
    let unic = [];
    for(let key1 of arr1){
        for(let key2 of arr2){
            if(key1 === key2){
                unic.push(key1);
            }
        }

    }
    return unic;
}
console.log(isSame(b, c));*/




/*//Функция, сложения двух чисел count(1)(2) 3;
const count = a => b => a + b;
console.log(count(1)(2)); */




/*//arr.Foreach(cb(10); 11,12,13,14,15
const d = [1,2,3,4,5];

d.forEach((item,index, array)=>{
    item += 10;
    d.splice(index,1,item);
    console.log(item);

});*/




/*
//Написать функцию myFunc, которая будет работать так
//add(1,2);      3
//add(2)(4);     6

const add = (...elems) => {
    let sum = 0;
    if (elems.length <= 1) {
        return  num => num + elems[0];
    }
    else {
        elems.forEach(i => sum += i);
        return sum;
    }
};

console.log(add(1,2));
*/



/*//Развернуть число
// reverseint(15) === 51
// reverseint(981) === 189
// reverseint(500) === 5
// reverseint(-15) === -51
// reverseint(-90) === -9
const reverce = num => {
    num = num.toString();
    let arr = num.split('');
    arr.reverse();
    arr.forEach((item, index) => {
        if (item === '0') {
            /!*                arr.splice(index,1); Не робит*!/
            delete arr[index];
        } else if (item === '-') {
            let delEl = arr.splice(index, 1);
            arr.unshift(delEl.toString());
        }
    });
    num = arr.join('');
    console.log(num);
};
reverce(-9000);*/






/*//Вывести самую частую букву

//maxChar("abccccccccccd") = c;
//maxChar("apple 123111") === 1

function maxChar(string){
    let sortFn = (a,b) => a - b;
    let arr = string.toString().split('');
    let obj ={};
    arr.forEach(item => !obj[item] ? obj[item] = 1 : obj[item]++);
    arr = Object.values(obj);
    arr.sort(sortFn);
    return Object.keys(obj).find(key => obj[key] === arr[arr.length -1]);
}
console.log(maxChar('olooolo'));*/



