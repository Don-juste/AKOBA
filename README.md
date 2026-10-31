# AKOBA

Landing page responsive d'un espace de coworking à Cotonou, réalisée à partir d'une maquette visuelle et d'une fiche de style.

🔗 **Démo en ligne :** [lien Netlify à ajouter]

![Aperçu de la page](capture-akoba.png)

## Fonctionnalités

- En-tête collé en haut au défilement, avec un menu qui se réorganise entre le mobile et le grand écran
- Hero en grille : 1 colonne sur mobile, 2 colonnes à partir de 768 px
- Cartes de services adaptatives avec `auto-fit` et `minmax`, sans media query
- Badge « Nouveau » positionné sur la carte concernée
- Grille de tarifs sur 3 colonnes à partir de 1024 px, formule « populaire » mise en avant et boutons alignés en bas des cartes
- Formulaire de contact accessible : étiquettes liées et focus clavier visible
- Pied de page en colonnes adaptatives
- Défilement fluide vers les sections, et respect de la préférence « réduire les animations »

## Technologies

- HTML sémantique
- CSS : Flexbox, Grid, variables CSS, `clamp()`, media queries mobile-first, transitions et animations
- JavaScript : cartes de tarifs générées depuis un tableau de données

## Ce que j'ai appris

- Intégrer une page fidèlement à partir d'une maquette et de valeurs exactes
- Choisir entre Flexbox et Grid selon la mise en page
- Gérer les grilles avec un nombre impair d'éléments (3 tarifs : une media query plutôt qu'`auto-fit`)
- Maîtriser la spécificité CSS et l'ordre de la cascade
- Rendre une page accessible : sémantique, focus clavier, mouvement réduit

## Lancer le projet

Ouvrir `index.html` dans un navigateur (ou avec l'extension Live Server de VS Code).
