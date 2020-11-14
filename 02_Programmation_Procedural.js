//Création utilisateur1
const nomsUtil1 = 'Musole Louis';
const emailUtil1 = 'musole@gmail.com';
const amisUtil1 = ['Jack', 'Steven'];
console.log(`Nom : ${nomsUtil1}`);
console.log(`Email : ${emailUtil1}`);
console.log(`Amis : ${amisUtil1}`);
console.log('');

//Création utilisateur2
const nomsUtil2 = 'Gloria Hule';
const emailUtil2 = 'gloria@gmail.com';
const amisUtil2 = ['John', 'Alice'];
console.log(`Nom : ${nomsUtil2}`);
console.log(`Email : ${emailUtil2}`);
console.log(`Amis : ${amisUtil2}`);
console.log('');

//Création utilisateur3
const nomsUtil3 = 'Tresor Louis';
const emailUtil3 = 'tresor@gmail.com';
const amisUtil3 = ['Rhema', 'David'];
console.log(`Nom : ${nomsUtil3}`);
console.log(`Email : ${emailUtil3}`);
console.log(`Amis : ${amisUtil3}`);
console.log('');

//fonction 
function login(email){
    console.log(`${email} est connecté(e)`);
}

function logout(email){
    console.log(`${email} est déconnecté(e)`);
}

login(emailUtil1);
logout(emailUtil1);
login(emailUtil2);
login(emailUtil3);