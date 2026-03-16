
<template>
<TopNav />
<div class="maker">

  <header class="header">
    <h1>🛠️ LiteBook Maker</h1>
    <p>Créer un LiteBook interactif prêt à être partagé 📖</p>
  </header>

  <!-- BOOK INFO -->

  <section class="panel">

    <h2>📚 Informations du livre</h2>

    <div class="form">

      <label>Titre</label>
      <input v-model="title" placeholder="Titre du LiteBook"/>

      <label>Auteur</label>
      <input v-model="author" placeholder="Auteur"/>

    </div>

  </section>

  <!-- CHAPTERS -->

  <section class="panel">

    <h2>📄 Chapitres</h2>

    <div class="chapter-add">

      <input v-model="chapterTitle" placeholder="Titre du chapitre"/>

      <button @click="addChapter">
        ➕ Ajouter
      </button>

    </div>

    <ul class="chapters">

      <li v-for="(c,i) in chapters" :key="i">

        <span>{{ c.title }}</span>

        <button @click="removeChapter(i)">
          ❌
        </button>

      </li>

    </ul>

  </section>

  <!-- AI SKILLS -->

  <section class="panel">

    <h2>🤖 AI Skills</h2>

    <textarea
      v-model="skills"
      placeholder="Décrire les capacités de l'IA pour aider le lecteur..."
    ></textarea>

  </section>

  <!-- SUPERPOWERS -->

  <section class="panel">

    <h2>✨ Superpowers</h2>

    <textarea
      v-model="superpowers"
      placeholder="Définir les superpowers (animations, effets, ambiance...)"
    ></textarea>

  </section>

  <!-- CREATE -->

  <section class="panel create">

    <button class="create-btn" @click="createLiteBook">

      🚀 Générer le LiteBook

    </button>

  </section>

</div>

</template>

<script setup>
import TopNav from "../../ui/components/TopNav.vue"
import { ref } from "vue"

const title = ref("")
const author = ref("")

const chapterTitle = ref("")
const chapters = ref([])

const skills = ref("")
const superpowers = ref("")

function addChapter(){

  if(!chapterTitle.value) return

  chapters.value.push({
    title:chapterTitle.value,
    file:`chapters/${chapterTitle.value.toLowerCase().replaceAll(" ","-")}.md`
  })

  chapterTitle.value=""

}

function removeChapter(i){

  chapters.value.splice(i,1)

}

async function createLiteBook(){

  const config = {

    title:title.value,
    author:author.value,

    toc:chapters.value,

    ai:{
      skills:skills.value
    },

    superpowers:superpowers.value

  }

  console.log("Creating LiteBook:",config)

  await window.api.createLiteBook(config)

  alert("LiteBook généré 🚀")

}

</script>

<style>

.maker{

  padding:40px;
  max-width:900px;
  margin:auto;

  font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Text",
  "Segoe UI",
  Roboto,
  sans-serif;

}

/* HEADER */

.header{

  margin-bottom:30px;

}

.header h1{

  margin:0;
  font-size:28px;

}

.header p{

  color:#666;

}

/* PANEL */

.panel{

  background:white;

  padding:20px;
  margin-bottom:20px;

  border-radius:12px;

  border:1px solid #e5e5e7;

}

.panel h2{

  margin-top:0;

}

/* FORM */

.form{

  display:flex;
  flex-direction:column;
  gap:10px;

}

input{

  padding:10px;

  border-radius:8px;
  border:1px solid #ccc;

}

/* CHAPTERS */

.chapter-add{

  display:flex;
  gap:10px;
  margin-bottom:10px;

}

.chapters{

  list-style:none;
  padding:0;

}

.chapters li{

  display:flex;
  justify-content:space-between;
  padding:8px 0;

}

/* TEXTAREA */

textarea{

  width:100%;
  min-height:120px;

  padding:10px;

  border-radius:8px;
  border:1px solid #ccc;

}

/* CREATE BUTTON */

.create{

  text-align:center;

}

.create-btn{

  padding:14px 24px;

  font-size:16px;

  border:none;
  border-radius:10px;

  background:#007aff;
  color:white;

  cursor:pointer;

}

.create-btn:hover{

  background:#0060df;

}

</style>