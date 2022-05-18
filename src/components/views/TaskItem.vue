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
            :key="idx"
            :header="task.title"
            v-model:collapsed="isCollapsed"
            :toggleable="true"
            class="relative"

    >
        <template #icons>

            <div class="flex absolute left-100">
                <button class="p-panel-header-icon p-link mr-2 flex">
                    <span class="pi pi-cog"></span>
                </button>

                <button class="p-panel-header-icon p-link mr-2 flex" @click="test(idx)">
                    <span class="pi pi-pencil"></span>
                </button>
                <button class="p-panel-header-icon p-link mr-2 flex" @click="test(idx)">
                    <span class="pi pi-pencil"></span>
                </button>
            </div>

        </template>
        <p>
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
            test(idx) {

            }

        }

    }
</script>

<style scoped>


</style>