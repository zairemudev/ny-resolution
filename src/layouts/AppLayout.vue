<script setup lang="ts">
import { useAppStore } from "../store.ts";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const appStore = useAppStore();
</script>
<template>
  <div :class="`${appStore.isDarkMode ? 'dark' : ''}`">
    <div class="h-screen w-screen flex flex-col min-w-sm max-w-md mx-auto">
      <!-- header -->
      <Header />

      <!-- main container -->
      <main
        class="flex flex-col flex-1 gap-6 px-4 h-full overflow-hidden bg-gray-50 dark:bg-slate-800"
      >
        <slot />
      </main>

      <!-- footer -->
      <Footer />
    </div>
  </div>
</template>
