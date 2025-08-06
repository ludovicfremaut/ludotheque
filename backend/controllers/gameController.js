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

const getGameById = async (req, res) => {
  try {
    const game = await Game.findOne({ _id: req.params.id, owner: req.userId });
    if (!game) {
      return res.status(404).json({ error: "Jeu non trouvé" });
    }
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Erreur récupération jeu" });
  }
};

// 🎲 RECHERCHE ALÉATOIRE - La killer feature !
const getRandomGame = async (req, res) => {
  try {
    const { players, maxDuration, minAge, category, complexity } = req.query;
    
    // Construction des filtres
    const filters = { owner: req.userId };
    
    if (players) {
      const playerCount = parseInt(players);
      filters.minPlayers = { $lte: playerCount };
      filters.maxPlayers = { $gte: playerCount };
    }
    
    if (maxDuration) {
      filters.duration = { $lte: parseInt(maxDuration) };
    }
    
    if (minAge) {
      filters.minAge = { $lte: parseInt(minAge) };
    }
    
    if (category) {
      filters.category = category;
    }
    
    if (complexity) {
      filters.complexity = { $lte: parseInt(complexity) };
    }

    // Récupération aléatoire
    const games = await Game.find(filters);
    
    if (games.length === 0) {
      return res.status(404).json({ error: "Aucun jeu trouvé avec ces critères" });
    }
    
    // Sélection aléatoire
    const randomGame = games[Math.floor(Math.random() * games.length)];
    res.json(randomGame);
    
  } catch (err) {
    res.status(500).json({ error: "Erreur recherche aléatoire" });
  }
};

// Filtres avancés
const getFilteredGames = async (req, res) => {
  try {
    const { category, players, maxDuration, minAge, complexity } = req.query;
    
    const filters = { owner: req.userId };
    
    if (category) filters.category = category;
    if (players) {
      const playerCount = parseInt(players);
      filters.minPlayers = { $lte: playerCount };
      filters.maxPlayers = { $gte: playerCount };
    }
    if (maxDuration) filters.duration = { $lte: parseInt(maxDuration) };
    if (minAge) filters.minAge = { $lte: parseInt(minAge) };
    if (complexity) filters.complexity = { $lte: parseInt(complexity) };
    
    const games = await Game.find(filters).sort({ title: 1 });
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Erreur filtrage jeux" });
  }
};

export default { createGame, getUserGames, deleteGame, updateGame, getGameById, getRandomGame, getFilteredGames };
