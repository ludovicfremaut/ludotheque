import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import gameRouter from "./routes/gameRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();

// CORS pour le développement
app.use(cors());

// Middleware pour lire le JSON dans les requêtes
app.use(express.json());

// Middleware pour servir les images statiques
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/games", gameRouter);
app.use("/api/auth", authRouter);

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI) // sans options inutiles
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Serveur backend OK !");
});

// Middleware de gestion d’erreurs global
app.use((err, req, res, next) => {
  console.error("Erreur non attrapée :", err); // ← log utile
  res.status(500).json({ error: "Erreur interne du serveur" });
});

export default app;
