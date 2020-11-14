//Object literal [Encapsulation]
const utilisateur = {
    noms : 'Musole Louis',
    email : 'musole@gmail.com',
    amis : ['Steven', 'Jonathan'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

const utilisateur2 = {
    noms : 'Jonathan Louis',
    email : 'mue@gmail.com',
    amis : ['Steven', 'Jonathan'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

console.log(utilisateur2);
console.log(utilisateur);

//Accès aux propriètés d'un object
console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'Blaise King';
utilisateur['email'] = 'blaise@gmail.com'
console.log(utilisateur);