import { z } from "zod";

// Schéma de validation pour l'inscription
export const signupSchema = z.object({
  email: z.string().email("Email invalide"),
  username: z.string().min(2, "Nom d'utilisateur trop court"),
  password: z
    .string()
    .min(8, "Mot de passe trop court (8 caractères minimum)")
    .regex(/[A-Z]/, "Une majuscule requise")
    .regex(/[a-z]/, "Une minuscule requise")
    .regex(/[0-9]/, "Un chiffre requis"),
});

export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});
