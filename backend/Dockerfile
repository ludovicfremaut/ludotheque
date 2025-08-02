# Utilise une image Node.js légère optimisée pour la prod
FROM node:20-alpine

# Définit le dossier de travail à l’intérieur du conteneur
WORKDIR /app

# Copie les fichiers de dépendances pour les installer
COPY package.json pnpm-lock.yaml ./

# Installe pnpm globalement puis les dépendances de ton projet
RUN npm install -g pnpm && pnpm install

# Copie le reste du projet dans le conteneur
COPY . .

# Expose le port utilisé par Express (3000)
EXPOSE 3000

# Commande par défaut (remplacée par docker-compose dans notre cas)
CMD ["pnpm", "run", "dev"]
