<template>

<div class="topnav">
   <router-link to="/home">🏠 Home</router-link>
  <router-link to="/reader">📖 Reader</router-link>

  <router-link to="/maker">🛠️ Maker</router-link>

</div>

</template>

<style>

.topnav{

position:fixed;
top:0;
left:0;
right:0;

height:48px;

display:flex;
align-items:center;
gap:12px;

padding:0 16px;

background:rgba(255,255,255,0.85);
backdrop-filter:blur(10px);

border-bottom:1px solid #e5e5e7;

z-index:100;

}

.topnav a{

text-decoration:none;

padding:6px 12px;

border-radius:8px;

background:#f5f5f7;

color:#1d1d1f;

font-size:13px;

}

.topnav a:hover{

background:#e5e5ea;

}

</style>