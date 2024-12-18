<script setup>
import Profile from "./components/Profile.vue";
import Credit from "./components/Credit.vue";
import Links from "./components/Links.vue";
</script>

<template>
  <main
    class="sm:max-w-sm w-full sm:w-screen min-h-screen mx-auto shadow-lg py-20 px-5 flex flex-col items-stretch justify-center bg-accent/20 backdrop-blur-sm">
    <Profile />
    <Links />
  </main>
  <Credit />
</template>
