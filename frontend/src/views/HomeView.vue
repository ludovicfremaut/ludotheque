<template>
  <main class="main-container">
    <section class="welcome-card">
      <h1>Bienvenue sur <span class="gradient-text">Ludothèque</span> !</h1>
      <p class="subtitle">
        Crée ta collection de jeux de société, partage, explore et amuse-toi&nbsp;
        <span class="dice">🎲</span>
      </p>
      <div class="cta">
        <router-link to="/login" class="button">Connexion</router-link>
        <router-link to="/signup" class="button button-outline">Inscription</router-link>
      </div>
    </section>
    <footer>
      <small>
        © Ludothèque 2025 — Un projet fun pour choisir le bon jeu 👾
      </small>
    </footer>
  </main>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0ecff 0%, #e0fff7 100%);
  padding: 2rem 0 0 0;
}
.welcome-card {
  max-width: 420px;
  width: 95vw;
  background: rgba(255,255,255,0.98);
  border-radius: 2rem;
  box-shadow: 0 8px 32px -8px #0ea5e980, 0 2px 8px #14b8a61a;
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
}
.welcome-card h1 {
  font-size: 2.1rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
  line-height: 1.1;
}
.gradient-text {
  background: linear-gradient(90deg, #38bdf8 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle {
  color: #374151;
  font-size: 1.13rem;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.5;
}
.cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.button {
  background: linear-gradient(90deg, #38bdf8 0%, #14b8a6 100%);
  color: #fff;
  padding: 0.85rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.13rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 12px #14b8a622;
  text-decoration: none;
  transition: background 0.16s, box-shadow 0.16s, transform 0.10s;
}
.button:hover, .button:focus {
  background: linear-gradient(90deg, #0ea5e9 0%, #0d9488 100%);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 4px 18px #38bdf840;
}
.button-outline {
  background: transparent;
  color: #14b8a6;
  border: 2px solid #14b8a6;
  box-shadow: none;
}
.button-outline:hover, .button-outline:focus {
  background: #e0fff7;
  color: #0ea5e9;
  border-color: #0ea5e9;
}
.dice {
  font-size: 1.25em;
  vertical-align: -0.18em;
}
footer {
  margin-top: 1rem;
  color: #a1a1aa;
  font-size: 0.96rem;
  text-align: center;
}
@media (max-width: 500px) {
  .welcome-card {
    padding: 1.2rem 0.6rem 1rem;
    border-radius: 1rem;
  }
  .welcome-card h1 {
    font-size: 1.3rem;
  }
  .subtitle {
    font-size: 0.96rem;
  }
  .button, .button-outline {
    padding: 0.6rem 1rem;
    font-size: 0.98rem;
  }
}
</style>
