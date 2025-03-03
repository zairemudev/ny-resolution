<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="h-screen w-screen flex flex-col">
    <!-- header -->
    <Header />

    <!-- main container -->
    <main
      class="mx-auto flex flex-col flex-1 min-w-sm max-w-md gap-6 px-4 h-full overflow-hidden bg-gray-50"
    >
      <slot />
    </main>

    <!-- footer -->
    <Footer />
  </div>
</template>
