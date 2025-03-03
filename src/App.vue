<script setup lang="ts">
// import lib
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useAppStore } from "./store";

// import component
import { Plus } from "lucide-vue-next";
import GoalItem from "./components/GoalItem.vue";
import AppLayout from "./layouts/AppLayout.vue";

// declare constant
const goalNameInput = ref<string>("");
const appStore = useAppStore();

// function
const handleAddGoal = () => {
  try {
    appStore.addGoal({
      id: uuidv4(),
      name: goalNameInput.value,
      isDone: false,
    });
  } catch (error) {
  } finally {
    goalNameInput.value = "";
  }
};

onMounted(() => {
  let goals = localStorage.getItem("goals");
  if (goals) {
    appStore.setGoals(JSON.parse(goals));
  }
});
</script>

<template>
  <AppLayout>
    <div
      class="w-full p-6 flex flex-col gap-4 overflow-hidden"
      :class="`${appStore.isDarkMode ? 'dark' : ''}`"
    >
      <!-- Banner -->
      <div class="font-poppins flex flex-col gap-6 w-full mb-6">
        <!-- top -->
        <div class="flex justify-between">
          <!-- username -->
          <div class="text-lg">
            Welcome, <span class="text-gray-500">{{ "ploy" }}</span>
          </div>
          <!-- count -->
          <div class="flex gap-2 items-center">
            <div
              class="flex items-center justify-center border-2 border-black rounded-full w-8 h-8"
            >
              {{ appStore.getCheckedGoal }}
            </div>
            of
            <div>{{ appStore.getTotalGoal }}</div>
          </div>
        </div>
        <div class="text-3xl font-bold">New Year Resolusion of 2025 🎉</div>
      </div>
      <!-- add goal -->
      <div
        class="flex flex-1 items-center justify-end md:justify-center max-w-md relative"
      >
        <div
          class="items-center w-full flex border-2 border-black rounded-2xl p-4 shadow inset-shadow gap-2"
        >
          <input
            type="text"
            class="w-full focus:outline-none flex-1"
            placeholder="Add your goal..."
            v-model="goalNameInput"
          />
          <button
            class="cursor-pointer rounded-full bg-black p-1"
            @click="handleAddGoal()"
          >
            <Plus class="text-white" :size="20" :strokeWidth="2" />
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-4 py-5 h-full max-w-full overflow-y-scroll">
        <GoalItem :key="goal.id" v-for="goal in appStore.goals" :data="goal" />
      </div>
    </div>
  </AppLayout>
</template>
