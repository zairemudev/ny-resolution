<script setup lang="ts">
// import lib
import { useAppStore } from "../store";
import { Trash2, Check } from "lucide-vue-next";
import type { Goal } from "../types";

type GoalItemProps = {
  data: Goal;
};

const appStore = useAppStore();
const { data } = defineProps<GoalItemProps>();

const handleDeleteGoal = (id: string) => {
  try {
    appStore.deleteGoal(id);
  } catch (error) {}
};

const handleCheckGoal = (id: string) => {
  try {
    appStore.checkGoal(id);
  } catch (error) {}
};
</script>

<template>
  <div
    class="relative p-4 flex items-center justify-between gap-2 border-2 border-black bg-white rounded-2xl text-black"
  >
    <button
      class="cursor-pointer rounded-full border-2 p-1 flex-none w-8 h-8 flex items-center justify-center"
      :class="`${
        data.isDone ? 'border' : 'border-dashed border-black'
      } dark:border-slate-500`"
      @click="handleCheckGoal(data.id)"
    >
      <Check
        v-if="data.isDone"
        strokeWidth="4"
        :size="18"
        class="text-green-600"
      />
    </button>

    <div
      :class="`${data.isDone ? 'italic line-through' : 'not-italic'} flex-1 break-all`"
    >
      {{ data.name }}
    </div>

    <button
      class="cursor-pointer flex items-center justify-center flex-none p-1 w-6 h-6 rounded-full bg-black dark:bg-slate-600"
      @click="handleDeleteGoal(data.id)"
    >
      <Trash2 class="text-white" :size="14" />
    </button>
  </div>
</template>
