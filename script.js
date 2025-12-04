/*Задача 1
Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат 
их конкатенации и удаляет все пробелы.*/

const concatenateStrings = (str1, str2) => {

    let concatenated = str1 + str2;
    let result = concatenated.replace(/\s /g, '');
    return result;
}




//Задача 2. Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.

const getStringLength = (str) => {
    return str.length;
}


/*Задача 3
Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName 
и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'.
Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.
*/

const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
}


/*Задача 4
Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке 
и возвращает символ, соответствующий этому порядковому номеру.
*/


const getChar = (str, i) => {
    return str[i - 1];
}


/*Задача 5
Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.
*/

const removeFirstOccurrences = (str, subStr) => {
    const index = str.indexOf(subStr);
    return str.slice(0, index) + str.slice(index + subStr.length);
}

/* Задача 6
Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника 
с заданной шириной и высотой, используя символы '*'.
*/

const getRectangleString = (width, height) => {
    let result = "";
    

    for (let i = 0; i < width; i++) {
        result += "*";
    }
    result += "\n";
    
   
    for (let row = 0; row < height - 2; row++) {
        result += "*"; 
        
        for (let space = 0; space < width - 2; space++) {
            result += " "; 
        }
        
        result += "*"; 
        result += "\n";
    }
    
 
    for (let i = 0; i < width; i++) {
        result += "*";
    }
    result += "\n";
    
    return result;
}

console.log(getRectangleString(60, 8));