//generare un numero casuale per il gicatore da 1 a 6
const userNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Il tuo numero è ${userNumber}`);

//generare un numero casuale per il computer da 1 a 6
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(`Il numero del computer è ${computerNumber}`);

//controllare il vincitore
let result;

if(userNumber === computerNumber){
  result = 'Pareggio';
}else if(userNumber < computerNumber){
  result = 'Il computer ha vinto';
}else if(userNumber > computerNumber){
  result = 'Hai vinto';
}

console.log(result);