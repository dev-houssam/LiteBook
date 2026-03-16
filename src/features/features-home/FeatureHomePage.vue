<template>
  <div class="home">
    <!-- Header style macOS -->
    <div class="macos-header">
      <div class="window-controls">
        <span class="window-control close"></span>
        <span class="window-control minimize"></span>
        <span class="window-control maximize"></span>
      </div>
      <div class="window-title">LiteBook</div>
    </div>

    <!-- Hero section style macOS -->
    <div class="hero">
      <h1>
        <span class="gradient-text">📚 LiteBook</span>
      </h1>
      <p class="subtitle">
        Lire, créer et explorer des livres Markdown intelligents.
      </p>
      
      <!-- Search bar style Spotlight -->
      <div class="spotlight-search">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Rechercher dans vos livres..." readonly>
      </div>
    </div>

    <!-- Cards style macOS Ventura -->
    <div class="cards">
      <!-- Reader Card -->
      <router-link class="feature-card reader" to="/reader">
        <div class="card-content">
          <div class="icon-wrapper">
            <div class="icon">📖</div>
          </div>
          <h2>Reader</h2>
          <p>Ouvrir et lire vos LiteBooks avec un rendu rapide et élégant.</p>
          <div class="card-footer">
            <span class="badge">Nouveau</span>
          </div>
        </div>
      </router-link>

      <!-- Maker Card -->
      <router-link class="feature-card maker" to="/maker">
        <div class="card-content">
          <div class="icon-wrapper">
            <div class="icon">🛠️</div>
          </div>
          <h2>LiteBook Maker</h2>
          <p>Créer et organiser vos livres Markdown interactifs.</p>
          <div class="card-footer">
            <span class="badge">Beta</span>
          </div>
        </div>
      </router-link>

      <!-- Library Card (Désactivée style macOS) -->
      <div class="feature-card library disabled">
        <div class="card-content">
          <div class="icon-wrapper">
            <div class="icon">📚</div>
          </div>
          <h2>Mes LiteBooks</h2>
          <p>Explorer votre bibliothèque personnelle.</p>
          <div class="card-footer">
            <span class="badge disabled">Bientôt</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent books section style macOS -->
    <div class="recent-section">
      <div class="section-header">
        <h3>Récemment ouverts</h3>
        <a href="#" class="see-all">Voir tout</a>
      </div>
      <div class="recent-list">
        <div class="recent-item">
          <span class="recent-icon">📘</span>
          <div class="recent-info">
            <span class="recent-title">Introduction à ZenVeysa</span>
            <span class="recent-meta">Modifié il y a 2h</span>
          </div>
        </div>
        <div class="recent-item">
          <span class="recent-icon">📗</span>
          <div class="recent-info">
            <span class="recent-title">Guide du débutant</span>
            <span class="recent-meta">Modifié hier</span>
          </div>
        </div>
        <div class="recent-item">
          <span class="recent-icon">📙</span>
          <div class="recent-info">
            <span class="recent-title">Philosophie ZenVeysa</span>
            <span class="recent-meta">Modifié il y a 3j</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer style macOS -->
    <footer class="footer">
      <div class="footer-left">
        <span class="footer-icon">⚡️</span>
        <span>LiteBook v1.0</span>
      </div>
      <div class="footer-center">
        <span class="status">● 3 livres disponibles</span>
      </div>
      <div class="footer-right">
        <a href="#" class="footer-link">Aide</a>
        <a href="#" class="footer-link">Préférences</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Pas de logique nécessaire pour le style
</script>

<style>
/* Reset et base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Text",
    "SF Pro Display",
    "Helvetica Neue",
    "Segoe UI",
    Roboto,
    sans-serif;
  
  /* Fond style macOS Ventura */
  background: linear-gradient(
    145deg,
    #f2f2f6 0%,
    #ffffff 100%
  );
  
  padding: 40px 40px 20px 40px;
  position: relative;
  color: #1d1d1f;
}

/* Header style macOS - Barre de fenêtre */
.macos-header {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
}

.window-controls {
  display: flex;
  gap: 8px;
  margin-right: 16px;
}

.window-control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.window-control.close {
  background: #ff5f57;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.window-control.minimize {
  background: #febc2e;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.window-control.maximize {
  background: #28c840;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.window-title {
  color: #6e6e73;
  font-size: 13px;
  font-weight: 500;
  flex: 1;
  text-align: center;
  margin-right: 60px;
}

/* Hero section */
.hero {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
}

.hero h1 {
  font-size: 72px;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #1d1d1f 0%, #434347 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 20px;
  color: #6e6e73;
  margin-top: 16px;
  font-weight: 400;
}

/* Spotlight search style */
.spotlight-search {
  margin-top: 32px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 40px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.search-icon {
  font-size: 18px;
  opacity: 0.5;
}

.spotlight-search input {
  border: none;
  background: transparent;
  font-size: 16px;
  width: 100%;
  outline: none;
  color: #1d1d1f;
}

.spotlight-search input::placeholder {
  color: #8e8e93;
}

/* Cards grid */
.cards {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-bottom: 60px;
}

/* Card style macOS */
.feature-card {
  width: 280px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.02),
    0 1px 2px rgba(0, 0, 0, 0.02),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 32px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.02),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.9);
}

.feature-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  filter: grayscale(0.5);
}

.card-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.icon-wrapper {
  margin-bottom: 20px;
}

.icon {
  font-size: 48px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05));
}

.feature-card h2 {
  margin: 0;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #1d1d1f;
}

.feature-card p {
  font-size: 15px;
  color: #6e6e73;
  line-height: 1.5;
  flex: 1;
  margin-bottom: 20px;
}

.card-footer {
  margin-top: auto;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(0, 113, 227, 0.1);
  color: #0071e3;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.badge.disabled {
  background: rgba(142, 142, 147, 0.1);
  color: #8e8e93;
}

/* Recent section style macOS */
.recent-section {
  width: 100%;
  max-width: 880px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1d1d1f;
}

.see-all {
  color: #0071e3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.see-all:hover {
  text-decoration: underline;
}

.recent-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recent-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.recent-item:hover {
  background: rgba(0, 0, 0, 0.02);
}

.recent-icon {
  font-size: 24px;
}

.recent-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.recent-title {
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1f;
}

.recent-meta {
  font-size: 12px;
  color: #8e8e93;
}

/* Footer style macOS */
.footer {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: 13px;
  color: #8e8e93;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
}

.footer-left, .footer-center, .footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-icon {
  font-size: 16px;
  opacity: 0.5;
}

.status {
  font-size: 12px;
  background: rgba(0, 0, 0, 0.02);
  padding: 4px 12px;
  border-radius: 30px;
}

.status::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #28c840;
  border-radius: 50%;
  margin-right: 6px;
}

.footer-link {
  color: #8e8e93;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #0071e3;
}

/* Responsive */
@media (max-width: 768px) {
  .home {
    padding: 20px;
  }
  
  .hero h1 {
    font-size: 48px;
  }
  
  .subtitle {
    font-size: 18px;
  }
  
  .cards {
    gap: 16px;
  }
  
  .feature-card {
    width: 100%;
    max-width: 340px;
  }
  
  .footer {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>