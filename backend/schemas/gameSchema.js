import { z } from "zod";

// Regex pour vérifier un ObjectId MongoDB
const objectIdRegex = /^[a-f\d]{24}$/i;

export const gameSchema = z.object({
  id: z.string().regex(objectIdRegex, "ID invalide").optional(),
  title: z.string().min(1, "Le titre est requis"),
  minPlayers: z.number().int().min(1, "Minimum 1 joueur"),
  maxPlayers: z.number().int().min(1, "Minimum 1 joueur"),
  minAge: z.number().int().min(0, "Âge minimum invalide"),
  complexity: z.number().int().min(1).max(5, "Complexité entre 1 et 5"),
  description: z.string().min(1, "Description requise"),
  imageUrl: z.string().url("URL de l’image invalide"),
  owner: z
    .string()
    .regex(objectIdRegex, "ID du propriétaire invalide")
    .optional(),
  createdAt: z.date().optional(),
});

// Schéma partiel pour mise à jour (PATCH)
export const gameUpdateSchema = z.object({
  title: z.string().min(1, "Le titre est requis").optional(),
  minPlayers: z.number().int().min(1, "Minimum 1 joueur").optional(),
  maxPlayers: z.number().int().min(1, "Minimum 1 joueur").optional(),
  minAge: z.number().int().min(0, "Âge minimum invalide").optional(),
  complexity: z.number().int().min(1).max(5, "Complexité entre 1 et 5").optional(),
  description: z.string().min(1, "Description requise").optional(),
  imageUrl: z.string().url("URL de l’image invalide").optional(),
  owner: z.string().regex(objectIdRegex, "ID du propriétaire invalide").optional(),
  createdAt: z.date().optional(),
});
