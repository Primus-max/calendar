import {defineStore} from "pinia";

export const useStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            currentDate: new Date(),
            taskStore: [
                {
                    id: 23434,
                    title: 'Забрать ребенка из садика',
                    description: 'После работы заехать и забрать ребенка из садика, у нас девочка'
                },
                {
                    id: 'ei-334-4',
                    title: 'Выбросить мусор',
                    description: 'Взять гребанный мусорный пакет и выбросить его нафиг'
                }
            ]
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