import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  minPlayers: {
    type: Number,
    required: true,
  },
  maxPlayers: {
    type: Number,
    required: true,
  },
  minAge: {
    type: Number,
    required: true,
  },
  complexity: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  duration: {
    type: Number, // durée en minutes
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Stratégie', 'Famille', 'Party Game', 'Coopératif', 'Deck Building', 'Jeu de rôle', 'Abstrait', 'Ambiance', 'Autre']
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Game", gameSchema);
