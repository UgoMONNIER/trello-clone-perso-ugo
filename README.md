## Clone de Trello en Node.js et React.js
Ce projet a pour objectif de recréer les fonctionnalités principales de la célèbre application de gestion de projets Trello en utilisant Node.js pour le backend et React.js pour l'interface utilisateur (frontend).

## Fonctionnalités principales
## 1. Backend avec Node.js
Le serveur est construit avec Node.js et expose des API REST pour gérer les différentes fonctionnalités du clone de Trello. Les routes permettent, entre autres, de gérer les utilisateurs, les espaces de travail, les projets, ainsi que les tâches et leurs statuts.

## 2. Frontend avec React.js
L'interface utilisateur est développée en React.js, offrant une expérience fluide et réactive pour gérer les tableaux de bord, les projets et les tâches, similaire à l'interface de Trello. Chaque action effectuée par l'utilisateur (comme la création d'un projet ou le déplacement d'une tâche) est immédiatement reflétée dans l'interface grâce à React.

## Authentification avec Firebase
L'inscription, la connexion et la gestion des sessions des utilisateurs sont gérées via Firebase Authentication. Cela permet de garantir un accès sécurisé et une expérience utilisateur simplifiée pour la création de comptes et la connexion.

## Fonctionnalités d'authentification :
Création de compte via e-mail et mot de passe.
Connexion sécurisée avec Firebase Authentication.
Gestion des sessions utilisateur et protection des routes sensibles.
Gestion des tableaux de bord et des espaces de travail
Une fois l'utilisateur connecté, il accède à plusieurs tableaux de bord personnalisés.

## Fonctionnalités des tableaux de bord :
Espace de travail : Chaque utilisateur peut créer plusieurs espaces de travail (ou workspaces). Ces espaces permettent d'organiser les différents projets au sein d'une même équipe ou autour d'un même thème.

Création de projets : À l'intérieur de chaque espace de travail, l'utilisateur peut créer un ou plusieurs projets. Ces projets représentent les grandes lignes du travail à accomplir.

Gestion des tâches : Pour chaque projet, l'utilisateur peut créer des tâches (ou cards), les assigner à des catégories (ou listes), et modifier leur statut en fonction de leur progression (par exemple : À faire, En cours, Terminé).

Fonctionnalités avancées :
Changement de statut des tâches : Les tâches peuvent être déplacées entre différentes catégories (listes) pour refléter leur avancement dans le projet, à l'image du système de Trello.
Catégorisation flexible : L'utilisateur peut créer et personnaliser les catégories de tâches en fonction de ses besoins spécifiques.
Technologies utilisées
Backend :
Node.js : Pour gérer les API REST et l'interaction avec la base de données.
Express.js : Pour simplifier la gestion des routes.
Frontend :
React.js : Pour une interface dynamique et réactive.
React Router : Pour la gestion des différentes pages de l'application (tableaux de bord, projets, etc.).
Authentification :
Firebase Authentication : Pour gérer la création et la gestion des utilisateurs.
Installation et Lancement du Projet
Prérequis :
Node.js et npm doivent être installés sur votre machine.
Un compte Firebase pour la gestion de l'authentification.
Étapes d'installation :
Clonez le dépôt :

git clone https://github.com/UgoMONNIER/trello-clone-perso-ugo.git
cd trello-clone-perso-ugo

Installez les dépendances :
npm install

Configurez Firebase :

Créez un projet Firebase et activez Firebase Authentication.
Récupérez votre fichier de configuration Firebase (API Key, Auth Domain, etc.) et mettez-le à jour dans le projet.
Lancez le projet :

npm start
Le projet sera alors accessible à l'adresse http://localhost:3000.
