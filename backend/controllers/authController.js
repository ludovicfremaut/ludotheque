import argon2 from "argon2";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Création de compte
const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ error: "Email déjà utilisé" });

    const passwordHash = await argon2.hash(password);

    const user = await User.create({ email, username, passwordHash });

    res
      .status(201)
      .json({ message: "Compte créé avec succès", userId: user._id });
  } catch (err) {
    console.error("Erreur signup:", err); // <= AJOUTE CETTE LIGNE
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Connexion
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });

    const isValid = await argon2.verify(user.passwordHash, password);
    if (!isValid)
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({ message: "Connexion réussie", token });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const logout = (req, res) => {
  // Pour la déconnexion, on peut simplement supprimer le token côté client.
  // Le serveur n'a pas besoin de faire quoi que ce soit de spécial.
  res.json({ message: "Déconnexion réussie" });
}

export default { signup, login, logout };
