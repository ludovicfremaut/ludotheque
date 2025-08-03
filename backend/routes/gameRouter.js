import express from "express";
import gameController from "../controllers/gameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const gameRouter = express.Router();

// Lister tous les jeux de l'utilisateur connecté
gameRouter.get("/", authMiddleware, gameController.getUserGames);

// Récupérer un jeu par son ID
gameRouter.get("/:id", authMiddleware, gameController.getGameById);

// Ajouter un jeu
gameRouter.post("/", authMiddleware, gameController.createGame);

// Mettre à jour un jeu
gameRouter.patch("/:id", authMiddleware, gameController.updateGame);

// Supprimer un jeu
gameRouter.delete("/:id", authMiddleware, gameController.deleteGame);

export default gameRouter;
