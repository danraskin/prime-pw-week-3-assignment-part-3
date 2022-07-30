console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log(removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (let x=0; x<supplyChanges.length;x++) {
    if (supplyChanges[x]>0) {
            console.log(`added ${supplyChanges[x]} parts.`);
        } else if (supplyChanges[x]===0) {    //something very interesting is going on here with the "===" operator.
                                            //when supplyChanges[x]=0, and the for loop seems to *change* the value of supplyChanges[2] and [3] to 0, and then skips the output (doesn't log)
                                            //I am getting to this assignment after class/office hours this week, but I am curious why this is! Will investigate.
            console.log('No change.');
            console.log(supplyChanges)
        } else if (supplyChanges[x]<0) {
            console.log(`Removed ${supplyChanges[x]} parts.`);
        }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (let x of supplyChanges) { 
    if (x>0) {  
        console.log(`added ${x} parts.`);
    } else if (x===0) {
        console.log('No change.');
    } else if (x<0) {
        console.log(`Removed ${x} parts.`);
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');


//this for of loop method is simple, but I don't see a way to nest the console log inside the loop.
//This doesn't matter for the assignment, and I'm not sure why it would matter in functional code, but i dislike the hanging console log.
//It also requires me to declare a variable outside the for loop. messiness on both ends, clean on the inside. the opposite of a sandwich.
let totalSupplies = 0;
for (let x of supplyChanges) { 
    totalSupplies +=x;
}
console.log(`Total supplies available is: ${totalSupplies}`); 


//Here is an alternate method, using the traditional for loop syntax.
//This method only logs the total supplies if the for loop is initiated in the first place.
//VERY pleased i realized i could declare *multiple* variables in the initialization. a real delightful-seeming sandwich situation.

for (let i=0, totalSupp = 0; i<supplyChanges.length; i++) {
    totalSupp +=supplyChanges[i];
    if(i===supplyChanges.length-1) {
        console.log(`For the LAST TIME! Total supplies available is: ${totalSupp}`);
    }
}

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

let partsToShip = 572;
let boxes = 0;
while (partsToShip > 7) {
    partsToShip -=7;
    boxes++;
}
console.log(`There are ${boxes} filled boxes and ${partsToShip} parts remaining.`);