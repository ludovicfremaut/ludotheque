# 🎲 Ma Ludothèque

**Ma Ludothèque** est une application web (adaptable en mobile) permettant à un utilisateur de gérer sa collection de jeux de société.

Elle permet à terme de :
- Ajouter un jeu avec son image, son titre, sa catégorie, son style et une description
- Filtrer les jeux par nombre de joueurs, style ou ambiance
- Accéder facilement à sa collection selon le contexte de jeu (soirée entre amis, jeu rapide, etc.)

---

## 🚀 Stack Technique

 Côté Technologie 

Backend | Node.js, Express 
Base de données | MongoDB (NoSQL) 
Authentification | JWT, Argon2 
Architecture | Modularisée (routes, contrôleurs, middlewares) 
Déploiement prévu | Docker + Mongo container (local ou cloud) 

---

## État actuel du projet

> Projet en cours de développement (août 2025)

- [x] Création de la structure backend Express en modules ES6
- [x] Mise en place de la connexion à MongoDB
- [x] Modèle `User` (email, mot de passe hashé, JWT)
- [x] Authentification : `signup` / `login` avec token
- [x] Middleware de vérification du token JWT
- [x] Modèle `Game` (titre, image, catégorie, style, nombre de joueurs, description)
- [x] Routes sécurisées pour :
  - Ajouter un jeu à sa ludothèque
  - Ajouter la modification d’un jeu
  - Ajouter la suppression d’un jeu
  - Lister ses jeux personnels
- [x] Architecture fonctionnelle en local avec Flashpost

---

## Prochaines étapes

- [ ] Ajouter des filtres de recherche (par nombre de joueurs, style, etc.)
- [ ] Implémenter l’upload de l’image de couverture d’un jeu
- [ ] Ajouter la possibilité de liker/favoriser des jeux
- [ ] Créer une interface frontend mobile-friendly (React / React Native / Vite)
- [ ] Ajouter des jeux pré-enregistrés (catalogue de référence pour l’import rapide)

---

## Développeur

**Ludovic Fremaut**  
Formation CDA 2024-2025 – Projet personnel d’entraînement  
GitHub : [@ludovicfremaut](https://github.com/ludovicfremaut)

---

## Licence

Ce projet est développé à des fins pédagogiques.  
Libre de réutiliser avec attribution.
