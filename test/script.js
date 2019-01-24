// function monObjet (hp, name, power) {
//     this.pointsDeVie = hp;
//     this.nom = name;
//     this.puissance = power;

//     this.attaque = function (powerADV){this.pointsDeVie -= powerADV};
//     this.decrire = function () {console.log(this.pointsDeVie)};
// };
// console.log(monObjet);

// var perso1 = new monObjet(100, "Monk", 20);

// perso1.color = "blue";

// console.log(perso1);

// var perso2 = new monObjet(150, "Barb", 50);

// console.log(perso2);

// perso1.decrire();

// perso1.attaque(perso2.puissance);

// perso1.decrire();

// const listeApprenants = ["Quentin", "FabienB", "Maxime", "FabienO", "Francis", "Christophe", "Sylvie", "Corinne", "Edains", "Frédérique", "Jean-Philippe", "Laurent", "Thibaud", "Maximilien"];

// var compteur = 0;

// const domListe = document.getElementById("affichage-liste");
// const domCompteur = document.getElementById("nombre-apprenants");

// listeApprenants.forEach( function (apprenant) {
//     const unApprenant = document.createElement("li");
//     const prenomApprenant = document.createTextNode(apprenant);
//     unApprenant.appendChild(prenomApprenant);
//     domListe.appendChild(unApprenant);
//     compteur++;
// });

// domCompteur.innerHTML = "Nombre d'apprenants : " + compteur;

// var unTableau = [[0,1,1,0,1,0,1,0,0,0,1],[1,0,1,0,1,0,1,1,1,1,0,0,0],[0,1,0,1,0,1,0,1,1,1,1,1,0]];

// const domAffichage = document.getElementById("affichage");

// var nbrLigne = 0;
// unTableau.forEach( function (uneLigne) {
//     var nbrElement = 0;
//     var nbrDeUn = 0;
//     nbrLigne++;
//     uneLigne.forEach( function (unChiffre) {
//         nbrElement++;
//         if (unChiffre === 1) {
//             nbrDeUn++;
//         }
//     })
//     const compteur = document.createElement("p");
//     const recap = document.createTextNode("Dans la ligne " + nbrLigne + " il y a " + nbrElement + " éléments et " + nbrDeUn + " uns.");
//     compteur.appendChild(recap);
//     domAffichage.appendChild(compteur);
// });

// const domItem1 = document.getElementById("item1");
// const domItem2 = document.getElementById("item2");
// const domItem3 = document.getElementById("item3");
const domElement = document.getElementById("element");

domElement.addEventListener("mouseover",
    function (event) {
        console.log(event.target.id);
        var domElementCible = document.getElementById(event.target.id);
        domElementCible.style.backgroundColor = "yellow";
    }
)