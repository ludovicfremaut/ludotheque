// middlewares/validate.js
import { z } from "zod";

// Valide le corps de la requête (req.body)
export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body); // on peut modifier req.body avec les données validées
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        error: "Erreur de validation",
        details: err.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      });
    }
    next(err); // erreur autre que Zod
  }
};

// Valide les paramètres d'URL (req.params)
export const validateParams = (schema) => (req, res, next) => {
  try {
    req.params = schema.parse(req.params);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        error: "Erreur de validation des paramètres",
        details: err.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      });
    }
    next(err);
  }
};
