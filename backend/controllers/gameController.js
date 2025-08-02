import Game from "../models/Game.js";

const createGame = async (req, res) => {
  try {
    const newGame = await Game.create({
      ...req.body,
      owner: req.userId, // injecté par authMiddleware
    });
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: "Erreur création jeu" });
  }
};

const getUserGames = async (req, res) => {
  try {
    const games = await Game.find({ owner: req.userId });
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Erreur récupération jeux" });
  }
};

const updateGame = async (req, res) => {
  try {
    const updatedGame = await Game.findOneAndUpdate(
      { _id: req.params.id, owner: req.userId },
      req.body,
      { new: true }
    );
    if (!updatedGame) {
      return res.status(404).json({ error: "Jeu non trouvé" });
    }
    res.json(updatedGame);
  } catch (err) {
    res.status(500).json({ error: "Erreur mise à jour jeu" });
  }
};

const deleteGame = async (req, res) => {
  try {
    await Game.findOneAndDelete({ _id: req.params.id, owner: req.userId });
    res.json({ message: "Jeu supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur suppression" });
  }
};

export default { createGame, getUserGames, deleteGame, updateGame };
