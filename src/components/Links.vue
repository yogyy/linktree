<script setup>
import ig from "./icons/Instagram.vue";
import tt from "./icons/Tiktok.vue";
import yt from "./icons/Youtube.vue";

const links = [
  {
    name: "tiktok Ver.1",
    icon: tt,
    url: "https://www.tiktok.com/@robeth_gt",
  },
  {
    name: "tiktok Ver.2",
    icon: tt,
    url: "https://www.tiktok.com/@dok.diecast",
  },
  {
    name: "youtube",
    icon: yt,
    url: "https://www.youtube.com/@robetha1322",
  },
  {
    name: "instagram",
    icon: ig,
    url: "https://instagram.com/robeth_gt",
  },
];
</script>

<template>
  <ul class="mt-10 gap-4 flex flex-col">
    <li
      class="flex bg-primary p-2 hover:bg-secondary rounded-md transition duration-300 focus-within:bg-secondary min-w-fit"
      v-for="link in links"
      :key="link.url">
      <a
        target="_blank"
        :href="link.url"
        :title="link.name"
        class="flex gap-5 items-center w-full focus-visible:outline-none group">
        <div class="w-10 p-2">
          <component
            :is="link.icon"
            :class="link.name"
            class="fill-text transition-colors duration-200 w-5" />
        </div>
        <p
          :class="link.name"
          class="capitalize font-medium md:text-lg transition-colors duration-200 hidden min-[200px]:block">
          {{ link.name }}
        </p>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.group:hover .tiktok,
.group:focus-within .tiktok {
  color: #000000;
  fill: #000000;
}
.group:hover .youtube,
.group:focus-within .youtube {
  color: #ff0000;
  fill: #ff0000;
}
.group:hover .instagram,
.group:focus-within .instagram {
  color: #ff0069;
  fill: #ff0069;
}
</style>
