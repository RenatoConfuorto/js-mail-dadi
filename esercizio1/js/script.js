const allowedUsers = [
  'renato.confuorto@oulook.it',
  'pinco.palino96@live.com',
  'antonioRusso@gmail.com'
]

console.log(allowedUsers);

//chiedere l'email all'utente
const userMail = prompt('Inserisci la tua e-mail');
console.log(userMail);

let result;

//controllare se l'email è autoriazzata
for(let i = 0; i < allowedUsers.length; i++){
  const currentCheck = allowedUsers[i];

  if(currentCheck === userMail){
    result = 'Accesso consentito';
  }

}

if(result === 'Accesso consentito'){
  console.log(result);
}else{
  console.log('Accesso negato');
}

