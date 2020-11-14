//Prototype (__proto__) : c'est un object qui regreoupe l'ensemble des methodes d'un objet
function Utilisateur(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

//Liaison d'une methode au prototype
Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira');
console.log(util1);