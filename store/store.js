import {defineStore} from "pinia";

export const useStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            currentDate: new Date(),
            taskStore: []
        }
    },
    actions: {
        addNewTask(task) {
            const newTask = {
                title: task.title,
                description: task.description,
                date: task.date,
                time: task.time
                // title: task.title,
                // description: task.description,
                // date: task.date,
                // time: task.time
            }
            this.taskStore.push(newTask)
            console.log(this.taskStore)
        }
    }
})