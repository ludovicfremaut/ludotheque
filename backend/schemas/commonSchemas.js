// schemas/commonSchemas.js
import { z } from "zod";

const objectIdRegex = /^[a-f\d]{24}$/i;

export const idParamSchema = z.object({
  id: z.string().regex(objectIdRegex, "ID invalide"),
});
