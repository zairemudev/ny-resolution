<script setup lang="ts">
import { Sun, Moon, Cctv } from "lucide-vue-next";
import { useAppStore } from "../store.ts";

const appStore = useAppStore();
console.log("isDarkMode:", appStore.isDarkMode);
</script>
<template>
  <header class="bg-white">
    <div
      class="mx-auto flex flex-none h-16 min-w-sm max-w-md items-center gap-6 px-4 sm:px-6 justify-between border-b border-gray-100"
    >
      <!-- logo -->

      <div class="flex items-center border-l-2">
        <Cctv :size="30" class="ml-1" />
        <div class="font-medium text-2xl font-pacifico ml-2 hidden md:block">
          Oneness
        </div>
      </div>

      <button
        className="items-center justify-end cursor-pointer rounded-full  flex gap-2"
        @click="appStore.toggleDarkMode()"
      >
        <Sun v-if="appStore.isDarkMode" />
        <Moon v-else />
        <span class="text-xs hidden md:block">{{
          appStore.isDarkMode ? "Light" : "Dark"
        }}</span>
      </button>
    </div>
  </header>
</template>
