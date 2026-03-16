

<template>
    <TopNav />

  <div class="download-page">

    <h1>📦 LiteBook Archive</h1>

    <p>
      Télécharger l'archive portable du LiteBook.
    </p>

    <div class="card">

      <h2>{{ bookName }}</h2>

      <button @click="download">
        ⬇️ Télécharger le LiteBook
      </button>

    </div>

  </div>

</template>

<script setup>
import TopNav from "../../ui/components/TopNav.vue"

import { useRoute } from "vue-router"

const route = useRoute()

const bookName = route.params.name || "litebook"

async function download(){

  const url = await window.api.downloadLiteBook(bookName)

  window.location.href = url

}

</script>

<style>

.download-page{

  padding:40px;
  font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Text",
  "Segoe UI",
  Roboto,
  sans-serif;

}

.card{

  margin-top:20px;
  padding:20px;

  border-radius:12px;
  border:1px solid #ddd;

  background:white;
  width:300px;

}

button{

  margin-top:10px;
  padding:10px 16px;

  border-radius:8px;
  border:none;

  background:#007aff;
  color:white;

  cursor:pointer;

}

button:hover{

  background:#0060df;

}

</style>