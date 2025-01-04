
function findSmallest() {
    let x = (30, 45, 60, 7);
  document.write(Math.min(x));
}
findSmallest()
document.write("<br>")
// ##############################################
// task2
function Alphabetical(revers) {
    return (revers) .split("") .sort() .join("")               
}
document.write(Alphabetical("hello"));
document.write("<br>");
// ##############################################
// task3
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd"; 
    }
}
let y = isEvenOrOdd;
document.write(y(4));
document.write("<br>");
document.write(y(7));
document.write("<br>");
// ##############################################
// task4
function even(sum) {
    let evennum = sum.filter((num) => num % 2 === 0);
    return evennum;
}
document.write (even([1,2,3,4,5,6,7,8,9]))
document.write("<br>");
// ##############################################
// task5
function abssum(sum) {
    return sum.reduce((sum, num) => sum + Math.abs(num),0)    
}
document.write(abssum([-1, -3, -5, -4, -10, 0]));
document.write("<br>");
// #################mid#############################
// task 1
function Factorial(num) {
    let result = 1;
    for (i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
document.write(Factorial(8))
document.write("<br>");
// #################mid#############################
// task 2
function modified(array) {
  return array.filter((item) => typeof item !== "string");
}
document.write(modified(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
document.write("<br>");
// #################mid#############################
// task 3
function root1(num) {
  let result =0;
  for (i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}
document.write(root1(8));
document.write("<br>");
// #################mid#############################
// task 4
function array1(num1) {
    let lowest = Math.min(...num1);
    let highest = Math.max(...num1);
    let length = num1.length;
    let total = num1.reduce((sum, current) => sum + current, 0);
    let Average = total / num1.length;
    return [lowest , highest , length , Average]


}
document.write(array1([7, 13, 3, 77, 100]))
document.write("<br>");
// #################mid#############################
// task 5

function romanNumbers(num) {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = '';
    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }
    return result;
}
document.write(romanNumbers(1989));
document.write("<br>");
// #################Advanced#############################
// task 1
function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.length;
}
document.write(countWords("hello from CodingAcademy!"));
document.write("<br>");
// #################Advanced#############################
// task 2
function multiply(arr) {
    const length = arr.length; 
    return arr.map(element => element * length); 
}
document.write(multiply([4, 2, 5]));
document.write("<br>");
// #################Advanced#############################
// task 3
function end(sWith1, sWith2) {
  return sWith1.endsWith(sWith2);
}
document.write(end("CodingSchool", "Ac"));
document.write("<br>");
// #################Advanced#############################
// task 4
function repeat (text){
    let result="";
    for (let i=0;i<text.length;i++){
        result+=text[i] +text[i]
    }
    return result
}
document.write(repeat("Coding"));
document.write("<br>");
// #################Advanced#############################
//task5
function find(array,element){
    let index=array.indexOf(element)+1
    return index 
}
document.write(find(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));




