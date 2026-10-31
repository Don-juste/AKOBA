const tarifs = [
  {
    nom: "Journée",
    prix: "3 000 FCFA",
    avantages: ["Un poste partagé", "Connexion fibre"],
  },
  {
    nom: "Mois",
    prix: "45 000 FCFA",
    avantages: [
      "Un poste partagé",
      "Connexion fibre",
      "4 h de salle de réunion",
      "Café offert",
    ],
  },
  {
    nom: "Bureau privé",
    prix: "120 000 FCFA",
    avantages: [
      "Un bureau fermé",
      "Connexion fibre",
      "Salle de réunion illimitée",
    ],
  },
];

// ===== TROUVER le parent =====
const grille = document.querySelector(".grille-tarifs");

// ===== BOUCLE 1 : pour chaque tarif =====
tarifs.forEach((tarif) => {
  // 1. CRÉER
  const carte = document.createElement("article");
  const titre = document.createElement("h3");
  const prix = document.createElement("p");
  const liste = document.createElement("ul"); 

  // 2. REMPLIR
  carte.classList.add("carte-tarif");
  titre.textContent = tarif.nom;
  prix.textContent = tarif.prix;
  prix.classList.add("prix");
  liste.classList.add("liste-avantages"); 

  // ===== BOUCLE 2 : les avantages de CE tarif =====    
  tarif.avantages.forEach((avantage) => {
    const li = document.createElement("li"); 
    li.textContent = avantage; 
    liste.append(li); 
  });

  // 3. PLACER
  carte.append(titre, prix, liste);
  grille.append(carte);
});
