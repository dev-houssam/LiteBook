
<template>
  <div class="layout">

    <Sidebar 
      v-if="bookLoaded"
      :chapters="chapters"
      @open="openChapter"
    />

    <div v-else class="sidebar-start">

      <button class="open-btn" @click="openLiteBook">
        📚 Ouvrir un LiteBook
      </button>

    </div>

    <Reader :content="content"/>
    <ReaderNav />

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Sidebar from "./components/Sidebar.vue"
import Reader from "./components/Reader.vue"
import ReaderNav from "../../ui/components/ReaderNav.vue"
import engine from "../../engine/index.js"

const bookLoaded = ref(false)

const books = ref([
  "books/mon-livre.litebook/book.json",
  "books/second-livre.litebook/book.json"
])

const chapters = ref([])
const content = ref("")
const currentBookPath = ref("")

async function openLiteBook(){

  console.log("📂 Opening file dialog")

  const folder = await window.api.openLiteBook()

  if(!folder){
    console.log("❌ No folder selected")
    return
  }

  if(!folder.endsWith(".litebook")){
  alert("Veuillez sélectionner un dossier .litebook")
  return
}

  console.log("📚 LiteBook folder:", folder)

  const bookPath = folder + "/book.json"

  loadBook(bookPath)

}

async function loadBook(bookPath){

  const bookText = await window.api.readFile(bookPath)

  const book = JSON.parse(bookText)

  chapters.value = book.toc

  currentBookPath.value = bookPath.replace("book.json","")

  bookLoaded.value = true

}

async function openChapter(chapter){

  console.log("📂 Opening chapter:", chapter)

  try{

    const path = currentBookPath.value + chapter.file

    const text = await window.api.readFile(path)

    const html = engine.renderMarkdown(text)

    content.value = html

  }catch(e){

    console.error("❌ Error loading chapter:", e)

  }

}

async function loadDefaultContent(){

  console.log("📄 Loading default content")

  const defaultFilePath = "res/default/default-content.md"

  try{

    const text = await window.api.readFile(defaultFilePath)

    const html = engine.renderMarkdown(text)

    content.value = html

    console.log("🌟 Default content loaded")

  }catch(e){

    console.error("❌ Error loading default content:", e)

  }

}

onMounted(()=>{

  console.log("🚀 App started")

  loadDefaultContent()

})
</script>

<style>

/* GLOBAL */

*{
  box-sizing:border-box;
}

body{

  margin:0;

  font-family:
  -apple-system,
  BlinkMacSystemFont,
  "SF Pro Text",
  "Segoe UI",
  Roboto,
  Helvetica,
  Arial,
  sans-serif;

  background:#f5f5f7;
  color:#1d1d1f;

}

/* LAYOUT */

.layout{

  display:flex;
  height:100vh;
  overflow:hidden;

}

/* SIDEBAR START */

.sidebar-start{

  width:280px;

  background:rgba(255,255,255,0.75);

  backdrop-filter:blur(20px);

  border-right:1px solid #e5e5e7;

  display:flex;
  align-items:center;
  justify-content:center;

}

/* OPEN BUTTON */

.open-btn{

  padding:12px 20px;

  border-radius:10px;

  border:1px solid #d2d2d7;

  background:white;
  color: grey;

  font-size:14px;
  font-weight:500;

  cursor:pointer;

  transition:all .15s ease;

  box-shadow:0 1px 2px rgba(0,0,0,0.05);

}

.open-btn:hover{

  background:#f5f5f7;

  border-color:#c7c7cc;

  transform:translateY(-1px);

  box-shadow:0 6px 14px rgba(0,0,0,0.08);

}

</style>
