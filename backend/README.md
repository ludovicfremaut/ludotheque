# API Ludothèque – Backend

## Objectif

Ce backend Express permet aux utilisateurs de :
- créer un compte,
- se connecter,
- gérer leur **propre ludothèque de jeux de société** (ajout, suppression, consultation),
le tout via une API REST sécurisée.

---

## Stack utilisée

- **Node.js** avec **Express**
- **MongoDB** via **Mongoose**
- Syntaxe **ES Modules** (`type: module`)
- **argon2** pour le hachage des mots de passe
- **JWT** (JSON Web Token) pour l’authentification sécurisée
- Architecture modulaire claire : `models/`, `controllers/`, `routes/`, `middlewares/`

---

## Fonctionnalités actuelles

### Authentification
| Méthode | Route              | Description                           |
| ------: | ------------------ | ------------------------------------- |
|    POST | `/api/auth/signup` | Crée un compte (hash du mot de passe) |
|    POST | `/api/auth/login`  | Connexion + génération de token JWT   |

### Middleware
- `authMiddleware.js` : vérifie la validité du token JWT
- Injecte automatiquement `userId` dans `req.userId` pour les routes privées

### Gestion des jeux
| Méthode | Route            | Description                             |
| ------: | ---------------- | --------------------------------------- |
|    POST | `/api/games`     | Ajoute un jeu à la ludothèque de l'user |
|     GET | `/api/games`     | Récupère la liste des jeux de l'user    |
|  DELETE | `/api/games/:id` | Supprime un jeu de la ludothèque        |

---

## 🗂 Structure du projet

