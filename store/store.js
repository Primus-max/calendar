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
                    time: '12:30',
                    isShow: false
                },
                {
                    id: 'ei-334-4',
                    title: 'Выбросить мусор',
                    description: 'Взять гребанный мусорный пакет и выбросить его нафиг',
                    date: '23/05/22',
                    time: '13:00',
                    isShow: false
                },
                {
                    id: 'ee-45456-454',
                    title: 'Покормить кота',
                    description: 'Найти каго-нибуль кота и покормить его',
                    date: '22/05/22',
                    time: '12:30',
                    isShow: false
                },
                {
                    id: 'ee-3432-21',
                    title: 'Доделать то, что вчера не доделал',
                    description: 'Что вчера не доделал? ВОт и доделай согодня',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'rt-33456-321',
                    title: 'Дописать пагинатор',
                    description: 'Доделать логику пагинатора',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'ао-2345-876',
                    title: 'Доделать TabMenu',
                    description: 'Доделать логику TabMenu',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'ert-234534-457',
                    title: 'Сделать отображнение задач на каждый день',
                    description: 'В календаре сделать отображение задача на каждый день',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'tyu-45345636-76',
                    title: 'Сделать фильтр в TaskList',
                    description: 'Сделать фильтр в TaskList по датам или чего-то там еще',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'er-2334-345',
                    title: 'Сделать анимацию',
                    description: 'СДелать анимацию на открытие и удаление',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'yt-4687-34',
                    title: 'Добавить нумерацию для задач',
                    description: 'Если открыта вкладка с текущими задачами, то добавлвять нумерацию. Чтобы выдно было сколько задач на сегодня',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'en-4568-45637',
                    title: 'Попробовать сделать датчик исполенения',
                    description: 'Добавить прогресс бар на каждую задачу',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'qw-79867-23',
                    title: 'Добавить цвета для задач',
                    description: 'Сделать три цвета для каждой задачи. Зеленый-задача в процессе, Ораньжевый-задача в ожидании, Красный-задача просрочена',
                    date: '22/05/22',
                    time: '12:30'
                },
                {
                    id: 'mh-4534-5798',
                    title: 'Добавить кнопку collapse',
                    description: 'Кнопка сворачивания всех открытых задач, тоесть их описание',
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
        }
    }
})
