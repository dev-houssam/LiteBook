<template>

<div class="sidebar">

  <div
    v-for="chapter in chapters"
    :key="chapter.file"
    @click="open(chapter)"
    class="chapter"
  >

    📄 {{ chapter.title }}

  </div>

</div>

</template>

<script setup>

const props = defineProps(["chapters"])
const emit = defineEmits(["open"])

function open(chapter){

  console.log("📑 Sidebar click:", chapter.title)

  emit("open", chapter)

}

</script>

<style>

.sidebar{

  width:280px;

  background:rgba(255,255,255,0.75);

  backdrop-filter:blur(20px);

  border-right:1px solid #e5e5e7;

  padding:25px;

  overflow:auto;

}

/* CHAPTER */

.chapter{

  padding:10px 14px;

  border-radius:8px;

  cursor:pointer;

  font-size:14px;

  color:#1d1d1f;

  margin-bottom:4px;

  transition:all .15s ease;

}

.chapter:hover{

  background:#f2f2f5;

}

.chapter:active{

  background:#e5e5ea;

}

</style>