import {defineStore} from "pinia";

export const useStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            currentDate: new Date(),
            taskDB: []
        }
    },
    actions: {
        addNewTask(task) {
            const newTask = {
                1:2,
                3:2,
                // title: task.title,
                // description: task.description,
                // date: task.date,
                // time: task.time
            }
            state.taskDB.push(newTask)
        }
    }
})