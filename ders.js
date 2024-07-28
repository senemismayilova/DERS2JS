// Sual 1:

// const array = [1, 2, 3, 4, 5];
// const sumOfElements = array.reduce((acc, curr) => acc + curr, 0);
// const multiplier = 10;
// const result = sumOfElements * multiplier;
// console.log("Array elementlərinin cəmi:", sumOfElements);
// console.log("Cəmin hasili:",result);

 


// Sual 2:

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 1];
// const result = removeDuplicates(inputArray);
// console.log(result);




// Sual 3:

// function filterNonNumbers(arr) {
//     return arr.filter(element => typeof element === 'number');
// }
// const inputArray = [1, 'hello', 2, true, 3, null, 4, 'world', 5];
// const result = filterNonNumbers(inputArray);
// console.log(result); 




// Sual 4:

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const max_value = Math.max(...array);
// const min_value = Math.min(...array);
// console.log("Maksimum dəyər:", max_value);
// console.log("Minimum dəyər:", min_value);




// Sual 5:

// const sentence = prompt("Cümləni daxil edin:");
// const count = sentence.length;
// console.log("Simvol sayı:", count);



// Sual 6:

// const array = [1, 2, 3, 4, 5];
// const doubledArray = array.map(x => x * 2);
// console.log("Yeni array:", doubledArray);




// Sual 7:

// const array = [1, 2, 3, 4, 5];
// const reversedArray = array.slice().reverse();
// console.log("Tərsinə çevrilmiş array:", reversedArray);


// Sual 8:

// function sumOfDigits(number) {
//     if (number < 0) {
//         number = Math.abs(number);
//     }
//     let sum = 0;
//     const numberStr = number.toString();
//     for (let i = 0; i < numberStr.length; i++) {
//         const digit = parseInt(numberStr[i], 10);
//         sum += digit;
//     }
//     return sum;
// }
// function indexSumArray(arr) {
//     return arr.map((element, index) => sumOfDigits(index));
// }
// const inputArray = [10, 20, 30, 40, 50];
// const result = indexSumArray(inputArray);
// console.log(result); 



// Sual 9:

// const word = prompt("Sözü daxil edin:");
// const reversedWord = word.split('').reverse().join('');
// console.log("Tərsinə çevrilmiş söz:" ,reversedWord);
 


// Sual 10:

// function reverseWordsInSentence(sentence) {
//     const words = sentence.split(' ');
//     const reversedWords = words.reverse();
//     const reversedSentence = reversedWords.join(' ');
//     return reversedSentence;
// }
// const inputSentence = "salam menim adim leyladır";
// const result = reverseWordsInSentence(inputSentence);
// console.log(result);

// Sual 11:

// function numberToWords(num) {
//         if (num === 0) return "sıfır";
        
//         const ones = ["", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"];
//         const teens = ["on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on altı", "on yeddi", "on səkkiz", "on doqquz"];
//         const tens = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];
//         const thousands = ["", "min", "milyon", "milyard", "trilyon"];
        
//         function convertToWords(number) {
//             if (number < 10) return ones[number];
//             if (number < 20) return teens[number - 10];
//             if (number < 100) {
//                 const tenPart = Math.floor(number / 10);
//                 const onePart = number % 10;
//                 return tens[tenPart] + (onePart ? " " + ones[onePart] : "");
//             }
//             if (number < 1000) {
//                 const hundredPart = Math.floor(number / 100);
//                 const rest = number % 100;
//                 return ones[hundredPart] + " yüz" + (rest ? " " + convertToWords(rest) : "");
//             }
//             let word = "";
//             let thousandPart = 0;
//             while (number > 0) {
//                 const chunk = number % 1000;
//                 if (chunk > 0) {
//                     word = convertToWords(chunk) + " " + thousands[thousandPart] + " " + word;
//                 }
//                 number = Math.floor(number / 1000);
//                 thousandPart++;
//             }
//             return word.trim();
//         }
    
//         return convertToWords(num);
//     }

//     console.log(numberToWords(0));       
//     console.log(numberToWords(5));        
//     console.log(numberToWords(12));        
//     console.log(numberToWords(123));       
//     console.log(numberToWords(1234));      
//     console.log(numberToWords(123456));   
//     console.log(numberToWords(123456789)); 
    


   
// Sual 12:
// function countWords(text) {
//             const words = text.trim().split(/\s+/);
//             return words.length;
//         }
//         const inputText = prompt("mətn daxil edin:");
//         const wordCount = countWords(inputText);
//         console.log("Sözlerin sayı:", wordCount);
        
        


// Sual 13:

// const sentence = "  Bu,    bir   cümlədir.  ";
// const normalizedSentence = sentence.replace(/\s+/g, ' ').trim();
// console.log(normalizedSentence);

        
        
        
// Sual 14:

// function capitalizeFirstLetterOfSentences(text) {
//     const sentences = text.split(/(?<=[.!?])\s+/);

//     const capitalizedSentences = sentences.map(sentence => {
//         if (sentence.length === 0) return sentence; 
//         return sentence.charAt(0).toUpperCase() + sentence.slice(1);
//     });
//     return capitalizedSentences.join(' ');
// }
// const inputText = prompt("Bir metin yazın:");
// const result = capitalizeFirstLetterOfSentences(inputText);
// console.log("Düzəldilmiş mətn:");
// console.log(result);




// Sual 15:

// function arraysEqual(arr1, arr2) {
//         if (arr1.length !== arr2.length) return false;
    
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) return false;
//         }
//         return true;
//     }
//     const arr1 = [1, 2, 3, 4];
//     const arr2 = [1, 2, 3, 4];
//     const arr3 = [1, 2, 4, 3];
//     console.log(arraysEqual(arr1, arr2)); 
//     console.log(arraysEqual(arr1, arr3));


// Sual 16:
// function bubbleSortAscending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// const array = [64, 34, 25, 12, 22, 11, 90];
// console.log('Artan Sıralama:', bubbleSortAscending(array));




// Sual 17:

// const input = prompt("Bir reqem yaz:");
// const number = input.trim(); 
// const spacedNumber = number.split('').join(' ');
// console.log("Reqemlerin arasina bosluq qoyulsun:");
// console.log(spacedNumber);




// Sual 18:
// function countRepeatedWords(text) {
//     const words = text.toLowerCase().trim().split(/\s+/);
//     const wordCount = {};

//     words.forEach(word => {
//         if (word) {
//             wordCount[word] = (wordCount[word] || 0) + 1;
//         }
//     });
//     let repeatedCount = 0;
//     for (const count of Object.values(wordCount)) {
//         if (count > 1) {
//             repeatedCount++;
//         }
//     }

//     return repeatedCount;
// }
// const inputText = prompt("Bir metin yazın:");
// const result = countRepeatedWords(inputText);

// console.log("Təkrarlanan sözlerin sayı:", result);


// Sual 19:
// const students = [
//     { name: "Nihad", score: 45, passed: false },
//     { name: "Nəzrin", score: 85, passed: true },
//     { name: "Əli", score: 55, passed: true },
//     { name: "Nərmin", score: 30, passed: false },
//     { name: "Kenan", score: 75, passed: true }
// ];

// function removeFailedStudents(students) {
//     return students.filter(student => student.passed);
// }
// const passedStudents = removeFailedStudents(students);
// console.log("İmtahandan keçən teelebeler:");
// console.log(passedStudents);


// Sual 20:

// function getTrigrams(text) {
   
//     const words = text.toLowerCase().split(/\s+/);
//     const trigrams = new Set();
//     for (let i = 0; i <= words.length - 3; i++) {
//         trigrams.add(words.slice(i, i + 3).join(' '));
//     }

//     return trigrams;
// }

// function calculateSimilarity(text1, text2) {
//     const trigrams1 = getTrigrams(text1);
//     const trigrams2 = getTrigrams(text2);
//     const intersection = new Set([...trigrams1].filter(x => trigrams2.has(x)));
//     const totalTrigrams = new Set([...trigrams1, ...trigrams2]);
//     const similarity = intersection.size / totalTrigrams.size;

//     return similarity;
// }

// const text1 = prompt("Birinci metni yazın:");
// const text2 = prompt("İkinci metni yazın:");

// const similarity = calculateSimilarity(text1, text2);
// console.log("Mətinler arasındaki oxşarlıq əmsalı:", similarity);



// Sual 21:
//         function calculateMonthlySalary(hourlyWage, weeklyHours) {
//             const regularHoursPerWeek = 40;
//             const weeksPerMonth = 4; 
//             const overtimeHours = Math.max(0, weeklyHours - regularHoursPerWeek);
//             const regularHours = Math.min(weeklyHours, regularHoursPerWeek);
//             const weeklyRegularPay = regularHours * hourlyWage;
//             const weeklyOvertimePay = overtimeHours * hourlyWage * 2;
//             const monthlySalary = (weeklyRegularPay + weeklyOvertimePay) * weeksPerMonth;

//             return monthlySalary;
//         }
//         const hourlyWage = parseFloat(prompt("Saatlıq maaşını yaz:"));
//         const weeklyHours = parseFloat(prompt("Həftelik iş saatını yazın:"));

//         if (isNaN(hourlyWage) || isNaN(weeklyHours)) {
//                 console.log("Yalnış reqem. Düzgün reqem yazln");
//         }

//        else {
//             const monthlySalary = calculateMonthlySalary(hourlyWage, weeklyHours)
//             console.log("Aylıq maaş:", monthlySalary.toFixed(2));
//         }
   


// Sual 22:

// function replaceAdnaWithAdnsu(text) {
    
//     return text.replace(/ADNA/g, 'ADNSU');
// }


// const inputText = "ADNA";
// const result = replaceAdnaWithAdnsu(inputText);

// console.log(result); 




// Sual 23:

// function sumOfDigits(number) {
//     if (number >= 100 && number <= 999) {
//         let hundreds = Math.floor(number / 100);
//         let tens = Math.floor((number % 100) / 10);
//         let units = number % 10;
//         return hundreds + tens + units;
//     } else {
//         throw new Error("Ədəd üç rəqəmli olmalıdır");
//     }
// }


// const number = 456;
// console.log(sumOfDigits(number));  



// Sual 24:
    
        // function findUniqueElements(array) {
        //     const elementCount = {};
        //     array.forEach(element => {
        //         elementCount[element] = (elementCount[element] || 0) + 1;
        //     });

        //     const uniqueElements = Object.keys(elementCount)
        //         .filter(key => elementCount[key] === 1)
        //         .map(Number); 

        //     return uniqueElements;
        // }
        // const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

        // const uniqueElements = findUniqueElements(array);

        // console.log("Tekrar etmeyen elementler:");
        // console.log(uniqueElements);
    


// Sual 25:

// function countDivisibleByFive(arr) {
//     let count = 0;
//     arr.forEach(element => {
//         if (element % 5 === 0) {
//             count++;
//         }
//     });

//     return count;
// }
// const inputArray = [10, 23, 35, 44, 50, 55, 60];
// const result = countDivisibleByFive(inputArray);

// console.log(result); 





// Sual 26:

// function findLastDivisibleBySeven(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 7 === 0) {
//             return arr[i];
//         }
//     }
//     return null;
// }
// const inputArray = [10, 23, 35, 44, 50, 49, 60];
// const result = findLastDivisibleBySeven(inputArray);

// console.log(result); 




// Sual 27:

// const array = [10, 5, 8, 20, 3, 12];
// function swapMinMax(array) {
//     let minIndex = 0;
//     let maxIndex = 0;
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < array[minIndex]) {
//             minIndex = i;
//         }
//         if (array[i] > array[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     const temp = array[minIndex];
//     array[minIndex] = array[maxIndex];
//     array[maxIndex] = temp;

//     return array;
// }
// const updatedArray = swapMinMax(array);
// console.log(updatedArray);

    


// Sual 28:

// const array = [10, 20, 30, 40, 50];
// const index = parseInt(prompt("Ədədi ekrana çıxarın"), 10);
// const number = array[index];
// if (index >= 0 && index < array.length) {
//     console.log(number);
// } else {
//     console.log("Qeyd olunan reqem sehvdir.");
// }



        // Sual 29:
        
                // function hasUniqueDigits(number) {
                //     const str = number.toString();
                //     const digitCount = {};
        
                //     for (const char of str) {
                //         if (digitCount[char]) {
                //             return false;
                //         }
                //         digitCount[char] = 1;
                //     }
                //     return true; 
                // }
        
                // function findUniqueDigitNumbers(start, end) {
                //     const uniqueDigitNumbers = [];
                //     for (let i = start; i <= end; i++) {
                //         if (hasUniqueDigits(i)) {
                //             uniqueDigitNumbers.push(i);
                //         }
                //     }
                //     return uniqueDigitNumbers;
                // }
                // const uniqueNumbers = findUniqueDigitNumbers(1, 100);
                // console.log("Tekliyi  1 olan ədədlər (1-100):");
                // console.log(uniqueNumbers);
            
//       Sual 30:

// function isPalindrome(str) {
//         const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//         const reversedStr = cleanedStr.split('').reverse().join('');
//         return cleanedStr === reversedStr;
//     }
//     const input = prompt("Bir ifadə daxil edin:");
//     if (isPalindrome(input)) {
//         console.log("${input}" polindromdur.);
//     } else {
//         console.log("${input}"  polindrom deyil.);
//     }
    
        
        // Sual 31:
        
        // function areAnagrams(word1, word2) {
        //     const cleanString = str => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
        //     return cleanString(word1) === cleanString(word2);
        // }

        // const word1 = prompt("Birinci Sözü yaz:");
        // const word2 = prompt("İkinci sözü yaz:");

        // const result = areAnagrams(word1, word2);
        // if (result) {
        //     console.log("${word1}" ve "${word2}" anagramdır.);
        // } else {
        //     console.log("${word1}" ve "${word2}" anagram deYIL.);
        // }
 

// Sual 32:


        // function removeVowels(text) {
            
        //     const vowels = 'aeiouAEIOU';

        //     return text.split('').filter(char => !vowels.includes(char)).join('');
        // }

        // const inputText = prompt("Mətiini daxil edin");
        // const resultText = removeVowels(inputText);
        // console.log("Saitleri silinen metin:");
        // console.log(resultText);
   

// Sual 33:

    
        // function generateRandomString(length) {

        //     const characters = 'ABCDEtuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        //     let result = '';
        //     const charactersLength = characters.length;
        //     for (let i = 0; i < length; i++) {
        //         const randomIndex = Math.floor(Math.random() * charactersLength);
        //         result += characters[randomIndex];
        //     }
        //     return result;
        // }
        // const inputLength = parseInt(prompt("İxtiyari simvoldan ibaret string ifade yarat"), 10);

        
        // if (isNaN(inputLength) || inputLength <= 0) {
        //     console.log("Sehv reqem yazdiz.");
        // } else {
           
        //     const randomString = generateRandomString(inputLength);
        //     console.log("Yaradilan string:");
        //     console.log(randomString);
        // }
   

// Sual 34:

        // function countVowelsAndConsonants(text) {
        //     const vowels = 'aeiouAEIOU';
        //     let vowelCount = 0;
        //     let consonantCount = 0;

        //     for (const char of text) {
        //         if (char.match(/[a-zA-Z]/)) {
        //             if (vowels.includes(char)) {
        //                 vowelCount++;
        //             } else {
        //                 consonantCount++;
        //             }
        //         }
        //     }

        //     return { vowelCount, consonantCount };
        // }

        // const inputWord = prompt("Bir metin yaz;n:");

        
        // const { vowelCount, consonantCount } = countVowelsAndConsonants(inputWord);
        // console.log("Metindeki  saitlerin sayı: " + vowelCount);
        // console.log("Metindeki samitlerin sayı: " + consonantCount);

        // Sual 35:

                // function isPerfectNumber(number) {
                //     if (number <= 1) return false;
                //     let sum = 0
                //     for (let i = 1; i <= Math.sqrt(number); i++) {
                //         if (number % i === 0) {
                //             sum += i;
                //             if (i !== number / i && number / i !== number) {
                //                 sum += number / i;
                //             }
                //         }
                //     }
                //     return sum === number;
                // }
                // const inputNumber = parseInt(prompt("Bir sayı girin:"), 10);
                // const result = isPerfectNumber(inputNumber);
                // if (result) {
                //     console.log(inputNumber + " Mükemmel  ədəddir.");
                // } else {
                //     console.log(inputNumber + " Mükemmel ədəd deyil.");
                // }
          


// Sual 36:


// function sumOfDigits(number) {
//     if (number < 0) {
//         number = Math.abs(number);
//     }
//     let sum = 0;
//     const numberStr = number.toString();
//     for (let i = 0; i < numberStr.length; i++) {
//         const digit = parseInt(numberStr[i], 10);
//         sum += digit;
//     }
//     return sum;
// }
// const inputNumber = 1234;
// const result = sumOfDigits(inputNumber);
// console.log(Rəqəmlərin cəmi: ${result});