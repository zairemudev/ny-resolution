<script setup lang="ts">
import { Sun, Moon, Shell } from "lucide-vue-next";
import { useAppStore } from "../store.ts";

const appStore = useAppStore();
</script>
<template>
  <header class="bg-white dark:bg-slate-800">
    <div
      class="mx-auto flex flex-none h-16 min-w-sm max-w-md items-center gap-6 px-4 sm:px-6 justify-between border-b border-gray-100 dark:border-slate-700"
    >
      <!-- logo -->

      <div class="flex font-medium text-2xl font-pacifico ml-2">
        <Shell :size="30" class="text-slate-700 dark:text-slate-500" />
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r dark:from-slate-500 dark:to-white from-black to-slate-500"
        >
          neness
        </span>
      </div>

      <button
        className="items-center justify-end cursor-pointer rounded-full flex gap-2 dark:text-white text-black"
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
