//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
/*const day =  2;

if(day <= 10){
    console.log('1 декада')
}
else if(day >= 11 && day <=20){
    console.log('2 декада')
}
else if(day >= 21){
    console.log('3 декада')
}*/

function whatDay(day){
    if (day <= 10){
        return console.log('1 декада');
    }
    else if(day >= 11 && day <= 20){
        return console.log('2 декада');
    }
    else if(day >= 21) {
        console.log('3 декада');
    }
}
whatDay(21);
/*// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = 9;

if(month <= 2 || month === 12) {
    console.log('Зима')
}
else if(month >= 3 && month <= 5){
    console.log('Весна')
}
else if(month >= 6 &&  month <= 8){
    console.log('Лето')
}
else if(month >= 9 &&  month <= 11){
    console.log('Осень')
}
else {
    console.log('Кого ты хочешь обмануть?')
}*/

/*function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
var f = function(x) {
    return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);*/

let whatMounth = function(mounth) {
    if(mounth <= 2 && mounth >= 1 || mounth === 12) {
        return console.log('Зима')
    }
    else if(mounth >= 3 && mounth <= 5){
        return console.log('Весна')
    }
    else if(mounth >= 6 &&  mounth <= 8){
        return console.log('Лето')
    }
    else if(mounth >= 9 &&  mounth <= 11){
        return console.log('Осень')
    }
    else {
        return console.log('Кого ты хочешь обмануть?')
    }
};
whatMounth(1);
//В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
/*

const min = 48;

if(min >= 0 && min <= 15){
    console.log('Первая четверть')
}
else if(min >= 16 && min <= 30){
    console.log('Вторая четверть')
}
else if(min >= 31 && min <= 45){
    console.log('Третья четверть')
}
else if(min >= 46 && min <= 60){
    console.log('Четвертая четверть')
}
*/
let whatMinutes = min => {
    if(min >= 0 && min <= 15){
        console.log('Первая четверть')
    }
    else if(min >= 16 && min <= 30){
        console.log('Вторая четверть')
    }
    else if(min >= 31 && min <= 45){
        console.log('Третья четверть')
    }
    else if(min >= 46 && min <= 60){
        console.log('Четвертая четверть')
    }
};

whatMinutes(17);


//Задать начальное значение возраста в переменную age и проверить, является ли пользователь совершеннолетним или нет, выводя соответствующие сообщения

/*
const age = 55;
if(age < 18){
    console.log('Несовершеннолетний')
}
else{
    console.log('Совершеннолетний')
}
*/
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
console.log(ask(11));