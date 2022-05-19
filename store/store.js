import {defineStore} from "pinia";

export const useStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            currentDate: new Date(),
            taskStore: [
                {
                    id: 'ei-34556-655',
                    title: 'Забрать ребенка из садика',
                    description: 'После работы заехать и забрать ребенка из садика, у нас девочка',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'ei-334-4',
                    title: 'Выбросить мусор',
                    description: 'Взять гребанный мусорный пакет и выбросить его нафиг',
                    date: '23/05/22',
                    time: '13:00'
                },
                {
                    id: 'ee-45456-454',
                    title: 'Покормить кота',
                    description: 'Найти каго-нибуль кота и покормить его',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'ee-3432-21',
                    title: 'Доделать то, что вчера не доделал',
                    description: 'Что вчера не доделал? ВОт и доделай согодня',
                    date: '22/05/22',
                    time: '12:30'
                },
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