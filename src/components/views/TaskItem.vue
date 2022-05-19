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
            v-for="(task, idx) in this.taskStore"
            :key="task.id"
            :header="task.title"
            v-model:collapsed="task.id"
            class="transition-duration-3000"
    >
        <template #icons>

            <div class="flex">

                <button class="p-panel-header-icon p-link mr-2 flex"
                        v-tooltip.top="'Редактировать'"
                >
                    <span class="pi pi-pencil"></span>
                </button>

                <button class="p-panel-header-icon p-link mr-2 flex"
                        v-tooltip.top="'Удалить'"
                >
                    <span class="pi pi-times"></span>
                </button>

                <button class="p-panel-header-icon p-link mr-2 flex" @click="task.id = !task.id">
                    <span class="pi pi-plus"
                          :class="{'pi-minus': !task.id}"
                          v-tooltip.top="'Открыть'"
                    >
                    </span>
                </button>
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
    import SpeedDial from 'primevue/speeddial'


    import Accordion from 'primevue/accordion';
    import AccordionTab from 'primevue/accordiontab'

    import {useStore} from "../../../store/store"
    import {mapState} from 'pinia'


    export default {
        components: {Card, Button, Panel, SpeedDial, Accordion, AccordionTab},

        data() {
            return {}
        },

        computed: {
            ...mapState(useStore, ['taskStore'])
        },
        methods: {
            test(id) {
                console.log(id)
            }

        }

    }
</script>

<style scoped>
.trans{
    transition: 5000ms;
}

</style>