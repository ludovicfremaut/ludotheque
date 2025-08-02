# API Ludothèque – Backend

## Objectif

Ce backend permet aux utilisateurs de créer un compte, se connecter, et gérer leur propre ludothèque de jeux de société via une API REST sécurisée.

---

## Stack utilisée

- Node.js avec Express
- MongoDB (via Mongoose)
- Modules ES6 (`type: module`)
- Argon2 pour le hachage des mots de passe
- JSON Web Token (JWT) pour l’authentification
- Architecture modulaire claire (`models`, `controllers`, `routes`, `middlewares`)

---

## Fonctionnalités implémentées

### Authentification
- `POST /api/auth/signup` : inscription avec hachage sécurisé du mot de passe
- `POST /api/auth/login` : connexion avec génération de token JWT

### Middleware
- Vérification du token JWT via `authMiddleware`
- Injection de `userId` dans `req` pour les routes protégées

### Gestion des jeux
- `POST /api/games` : ajout d’un jeu dans la ludothèque de l'utilisateur connecté
- `GET /api/games` : récupération de la ludothèque personnelle
- `DELETE /api/games/:id` : suppression d’un jeu

---

## Structure actuelle du projet

