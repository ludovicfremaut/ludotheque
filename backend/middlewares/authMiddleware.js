// On impporte le module jsonwebtoken pour vérifier le token d'authentification
import jwt from "jsonwebtoken";

// On définit une fonction middleware qui reçoit la requête, la réponse et la fonction next
const authMiddleware = (req, res, next) => {
  // On récupère le header 'Authorization' de la requête HTTP
  const authHeader = req.headers.authorization;

  // Si ce header est absent ou ne commence pas par 'Bearer ', on considère que le token est invalide
  if (!authHeader?.startsWith("Bearer ")) {
    // On renvoie une erreur 401 (non autorisé) avec un message explicite
    return res.status(401).json({ error: "Token manquant ou invalide" });
  }

  // On extrait la valeur du token en supprimant le mot 'Bearer ' (on garde juste le jeton)
  const token = authHeader.split(" ")[1];

  try {
    // On essaye de vérifier et décoder le token
    // On utilise la clé secrète définie dans les variables d’environnement pour vérifier le token
    // Si le token est valide, on récupère les données qu’il contient (ici l’id de l’utilisateur)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // On ajoute l'id de l'utilisateur à l'objet req pour pouvoir l'utiliser dans les contrôleurs
    req.userId = decoded.userId; // transmis aux contrôleurs
    next();
    // On appelle la fonction next() pour continuer le traitement de la requête
  } catch (err) {
    // Si la vérification échoue (token expiré ou modifié), on attrape l’erreur ici
    res.status(403).json({ error: "Token invalide ou expiré" });
  }
};

export default authMiddleware;
