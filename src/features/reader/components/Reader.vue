<template>
  <div class="reader" v-html="content"></div>
</template>

<script setup>
import { watch } from "vue"

const props = defineProps(["content"])

watch(() => props.content, (v) => {
  console.log("📖 Reader updated")
})
</script>

<style>
.reader {
  flex: 1;
  overflow: auto;
  background: #f5f5f7;
  padding: 24px;
  font-family: 
    -apple-system, 
    BlinkMacSystemFont, 
    "SF Pro Text", 
    "HarmonyOS Sans", 
    "Segoe UI", 
    Roboto, 
    Helvetica, 
    Arial, 
    sans-serif;
  color: #1d1d1f;
  line-height: 1.6;
}

/* PAGE CONTAINER - Effet carte flottante Harmony */
.reader > * {
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px 48px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
}

/* TITLES - Hiérarchie claire à la Harmony */
.reader h1 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 0;
  margin-bottom: 24px;
  line-height: 1.2;
}

.reader h2 {
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin-top: 48px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.reader h3 {
  font-size: 22px;
  font-weight: 500;
  color: #2c2c2e;
  margin-top: 36px;
  margin-bottom: 12px;
}

.reader h4 {
  font-size: 18px;
  font-weight: 500;
  color: #3a3a3c;
  margin-top: 28px;
  margin-bottom: 8px;
}

/* TEXT - Lisibilité optimale */
.reader p {
  font-size: 16px;
  line-height: 1.8;
  color: #3a3a3c;
  margin-bottom: 20px;
}

/* LISTS - Espacement Harmony */
.reader ul, 
.reader ol {
  padding-left: 24px;
  margin: 16px 0 24px 0;
}

.reader li {
  margin-bottom: 8px;
  color: #3a3a3c;
  font-size: 16px;
  line-height: 1.6;
}

.reader li:last-child {
  margin-bottom: 0;
}

/* INLINE CODE - Élégant et discret */
.reader code {
  background: rgba(0, 113, 227, 0.05);
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 14px;
  font-family: 
    ui-monospace,
    "HarmonyOS Sans Mono",
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    monospace;
  color: #0071e3;
  border: 1px solid rgba(0, 113, 227, 0.1);
}

/* CODE BLOCK - Style nuit Harmony */
.reader pre {
  background: #1c1c1e;
  color: #f5f5f7;
  padding: 20px;
  border-radius: 18px;
  overflow: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin: 24px 0;
}

.reader pre code {
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: 14px;
  color: #f5f5f7;
  border: none;
  line-height: 1.6;
}

/* BLOCKQUOTE - Citations élégantes */
.reader blockquote {
  margin: 24px 0;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-left: 4px solid #0071e3;
  border-radius: 0 16px 16px 0;
  color: #4a4a4e;
  font-style: italic;
}

.reader blockquote p {
  margin-bottom: 8px;
}

.reader blockquote p:last-child {
  margin-bottom: 0;
}

/* LINKS - HarmonyOS style */
.reader a {
  color: #0071e3;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.reader a:hover {
  opacity: 0.7;
  text-decoration: none;
}

/* IMAGES */
.reader img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* TABLES */
.reader table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.reader th {
  background: rgba(0, 0, 0, 0.02);
  padding: 12px 16px;
  text-align: left;
  font-weight: 500;
  color: #1d1d1f;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.reader td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  color: #3a3a3c;
}

.reader tr:last-child td {
  border-bottom: none;
}

/* HR - Séparateur subtil */
.reader hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0, 0, 0, 0.1), 
    transparent
  );
  margin: 40px 0;
}

/* SELECTION - Accent Harmony */
.reader ::selection {
  background: rgba(0, 113, 227, 0.15);
  color: #1d1d1f;
}

/* SCROLLBAR - Style système */
.reader::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.reader::-webkit-scrollbar-track {
  background: transparent;
}

.reader::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.reader::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* RESPONSIVE - Adaptation mobile */
@media (max-width: 768px) {
  .reader {
    padding: 16px;
  }
  
  .reader > * {
    padding: 24px 20px;
    border-radius: 20px;
  }
  
  .reader h1 {
    font-size: 32px;
  }
  
  .reader h2 {
    font-size: 24px;
    margin-top: 36px;
  }
  
  .reader h3 {
    font-size: 20px;
  }
}
</style>