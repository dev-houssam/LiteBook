<script setup>
</script>

<template>

<div class="reader-nav">
    <router-link to="/home">🏠</router-link>

  <router-link to="/maker" title="LiteBook Maker">
    🛠️
  </router-link>

</div>

</template>

<style>

.reader-nav{

position:fixed;

bottom:20px;
right:20px;

display:flex;
flex-direction:column;

gap:10px;

opacity:0.3;

transition:opacity .2s;

}

.reader-nav:hover{

opacity:1;

}

.reader-nav a{

width:36px;
height:36px;

display:flex;
align-items:center;
justify-content:center;

border-radius:50%;

background:white;

border:1px solid #ddd;

text-decoration:none;

font-size:16px;

}

</style>