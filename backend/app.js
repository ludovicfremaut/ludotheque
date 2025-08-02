import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";

import gameRouter from "./routes/gameRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();

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

export default app;
