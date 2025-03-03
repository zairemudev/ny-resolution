import { defineStore } from "pinia";
import type { Goal } from "./types";

export interface State {
  isDarkMode: boolean;
  goals: Goal[];
}

export const useAppStore = defineStore("app", {
  state: (): State => ({ isDarkMode: false, goals: [] }),
  getters: {
    getTotalGoal(state) {
      return state.goals.length;
    },
    getCheckedGoal(state) {
      return state.goals.filter((goal) => goal.isDone).length;
    },
  },
  actions: {
    setGoals(goals: Goal[]) {
      this.goals = goals;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    addGoal(goal: Goal) {
      this.goals.push(goal);
      localStorage.setItem("goals", JSON.stringify(this.goals));
    },
    checkGoal(id: string) {
      let goalIdx = this.goals.findIndex((goal: Goal) => goal.id === id);

      if (goalIdx > -1) {
        let currGoal = this.goals[goalIdx];
        currGoal.isDone = !currGoal.isDone;
        this.goals.splice(goalIdx, 1, currGoal);

        localStorage.setItem("goals", JSON.stringify(this.goals));
      }
    },
    deleteGoal(id: string) {
      let goalIdx = this.goals.findIndex((goal: Goal) => goal.id === id);

      if (goalIdx > -1) {
        this.goals.splice(goalIdx, 1);

        localStorage.setItem("goals", JSON.stringify(this.goals));
      }
    },
  },
});
