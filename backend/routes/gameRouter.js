import express from "express";
import gameController from "../controllers/gameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const gameRouter = express.Router();

// Ajouter un jeu
gameRouter.post("/", authMiddleware, gameController.createGame);

// Lister tous les jeux de l'utilisateur connecté
gameRouter.get("/", authMiddleware, gameController.getUserGames);

// Mettre à jour un jeu
gameRouter.patch("/:id", authMiddleware, gameController.updateGame);

// Supprimer un jeu
gameRouter.delete("/:id", authMiddleware, gameController.deleteGame);

export default gameRouter;
