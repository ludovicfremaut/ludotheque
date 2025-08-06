<template>
  <main class="auth-container">
    <section class="auth-card">
      <h1>Connexion</h1>
      <form class="auth-form">
        <input type="email" placeholder="Adresse email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit" class="button">Se connecter</button>
      </form>
      <router-link to="/signup" class="link">
        Pas encore de compte ? <b>Inscris-toi !</b>
      </router-link>
    </section>
  </main>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0ecff 0%, #e0fff7 100%);
}
.auth-card {
  width: 340px;
  background: #fff;
  border-radius: 1.6rem;
  box-shadow: 0 8px 32px -8px #0ea5e940;
  padding: 2.2rem 1.6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-card h1 {
  margin-bottom: 1.2rem;
  font-size: 2rem;
  font-weight: 900;
  color: #22223b;
  letter-spacing: -0.5px;
}
.auth-form {
  width: 100%;
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
