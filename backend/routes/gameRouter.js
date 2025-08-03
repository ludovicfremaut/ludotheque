import express from "express";
import gameController from "../controllers/gameController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validate, validateParams } from "../middlewares/validate.js";
import { gameSchema, gameUpdateSchema } from "../schemas/gameSchema.js";

const gameRouter = express.Router();

// Lister tous les jeux de l'utilisateur connecté
gameRouter.get("/", authMiddleware, gameController.getUserGames);

// Récupérer un jeu par son ID
gameRouter.get("/:id", authMiddleware, validateParams(idParamSchema), gameController.getGameById);

// Ajouter un jeu
gameRouter.post(
  "/",
  authMiddleware,
  validate(gameSchema),
  gameController.createGame
);

// Mettre à jour un jeu
gameRouter.patch("/:id", authMiddleware, validate(gameUpdateSchema), gameController.updateGame);

// Supprimer un jeu
gameRouter.delete("/:id", authMiddleware, gameController.deleteGame);

export default gameRouter;
