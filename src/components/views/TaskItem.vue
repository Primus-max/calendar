<template>

    <!--    <Accordion :activeIndex="0">-->
    <!--        <AccordionTab header="Header I">-->
    <!--            Content-->


    <!--                            <div class="flex flex-row">-->
    <!--                            <button class="p-panel-header-icon p-link mr-2 flex" >-->
    <!--                                <span class="pi pi-cog"></span>-->
    <!--                            </button>-->

    <!--                            <button class="p-panel-header-icon p-link mr-2 flex" @click="test(idx)">-->
    <!--                                <span class="pi pi-pencil"></span>-->
    <!--                            </button>-->
    <!--                            </div>-->
    <!--         -->

    <!--        </AccordionTab>-->
    <!--        <AccordionTab header="Header II">-->
    <!--            Content-->
    <!--        </AccordionTab>-->
    <!--        <AccordionTab header="Header III">-->
    <!--            Content-->
    <!--        </AccordionTab>-->
    <!--    </Accordion>-->


        <Panel
                v-for="(task, idx) in this.newTaskStore"
                :key="task.id"
                :header="task.title"
                v-model:collapsed="task.id"
                class="list-item"
        >
            <template #icons>

                <div class="flex">

                    <Button class="p-panel-header-icon p-link mr-2 p-button-info">
                    <span class="pi pi-pause text-blue-500"
                          v-tooltip.top="'Остановить'"
                    >

                    </span>
                    </Button>

                    <Button class="p-panel-header-icon p-link mr-2 p-button-success"
                            v-tooltip.top="'Редактировать'"
                            @click="editTask(task.id)"
                    >
                        <span class="pi pi-pencil text-green-500"></span>
                    </Button>

                    <Button @click="removeTask(task.id)" class="p-panel-header-icon p-link mr-2 p-button-danger"
                            v-tooltip.top="'Удалить'"
                    >
                        <span class="pi pi-trash text-red-500"></span>
                    </Button>

                    <Button class="p-panel-header-icon p-link mr-2" @click="task.id = !task.id">
                    <span class="pi pi-chevron-left"
                          :class="{'pi-chevron-down': !task.id}"
                          v-tooltip.top="task.id ? 'Открыть': 'Закрыть'"
                    >
                    </span>
                    </Button>
                </div>
            </template>

            <p class="flex transition-duration-3000">
                {{task.description}}
            </p>
        </Panel>


</template>

<script>
    import Card from 'primevue/card'
    import Button from 'primevue/button'
    import Panel from 'primevue/panel'

    import {useStore} from "../../../store/store"
    import {mapWritableState} from 'pinia'

    export default {
        components: {Card, Button, Panel},

        data() {
            return {
                newTaskStore: []
            }
        },
        // watch() {
        //     this.newTaskStore()
        // },
        mounted() {
            this.newTaskStore = this.taskStore
        },

        computed: {
            ...mapWritableState(useStore, ['taskStore'])
        },
        methods: {
            editTask(id) {
                this.$router.push(`/edittask/:${id}`)
            },

            removeTask(id) {
                this.newTaskStore.map((task, i) => {
                    if (task.id === id) {
                        this.newTaskStore.splice(i, 1)
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>