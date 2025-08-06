<template>
  <main class="auth-container">
    <section class="auth-card">
      <h1>Inscription</h1>
      <form class="auth-form">
        <input type="text" placeholder="Pseudo" required />
        <input type="email" placeholder="Adresse email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit" class="button">Créer mon compte</button>
      </form>
      <router-link to="/login" class="link">
        Déjà membre ? <b>Connecte-toi</b>
      </router-link>
    </section>
  </main>
</template>

<style scoped>
/* Même style que LoginView.vue, on factorise pour garder la cohérence */
.auth-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0ecff 0%, #e0fff7 100%);
}
.auth-card {
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
.auth-card h1 {
  font-size: 2.1rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
  line-height: 1.1;
}
.auth-form {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}
.auth-form input {
  border-radius: 1.2rem;
  border: 1.5px solid #cbd5e1;
  padding: 0.85rem 1.1rem;
  font-size: 1.08rem;
  background: #f8fafc;
  outline: none;
  transition: border 0.15s;
}
.auth-form input:focus {
  border-color: #14b8a6;
  background: #e0fff7;
}
.button {
  background: linear-gradient(90deg, #38bdf8 0%, #14b8a6 100%);
  color: #fff;
  padding: 0.75rem 0;
  border-radius: 1.4rem;
  font-size: 1.07rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 12px #14b8a622;
  width: 100%;
  transition: background 0.16s, box-shadow 0.16s, transform 0.10s;
}
.button:hover, .button:focus {
  background: linear-gradient(90deg, #0ea5e9 0%, #0d9488 100%);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 4px 18px #38bdf840;
}
.link {
  margin-top: 0.7rem;
  color: #14b8a6;
  font-size: 1.01rem;
  text-decoration: none;
  transition: color 0.16s;
}
.link:hover {
  color: #0ea5e9;
}
@media (max-width: 450px) {
  .auth-card {
    width: 98vw;
    padding: 1.2rem 0.3rem 1rem;
    border-radius: 0.8rem;
  }
  .auth-card h1 {
    font-size: 1.3rem;
  }
  .auth-form input, .button {
    font-size: 0.96rem;
    padding: 0.65rem 0.8rem;
  }
}
</style>
