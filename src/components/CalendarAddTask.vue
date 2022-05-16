<!--<template>-->

<!--    &lt;!&ndash;        <Dialog&ndash;&gt;-->
<!--    &lt;!&ndash;                v-model:visible="display"&ndash;&gt;-->
<!--    &lt;!&ndash;                :modal="true"&ndash;&gt;-->
<!--    &lt;!&ndash;                :dismissableMask="true"&ndash;&gt;-->
<!--    &lt;!&ndash;                :style="{&ndash;&gt;-->
<!--    &lt;!&ndash;                    width: '55%'&ndash;&gt;-->
<!--    &lt;!&ndash;                }"&ndash;&gt;-->
<!--    &lt;!&ndash;                ref="dialog"&ndash;&gt;-->
<!--    &lt;!&ndash;        >&ndash;&gt;-->

<!--    &lt;!&ndash;            <template #header>&ndash;&gt;-->
<!--    &lt;!&ndash;                <h3>Новая задача</h3>&ndash;&gt;-->
<!--    &lt;!&ndash;            </template>&ndash;&gt;-->

<!--    &lt;!&ndash;            <form @click.prevent>&ndash;&gt;-->
<!--    &lt;!&ndash;                <div class="flex flex-column p-input-filled w-11">&ndash;&gt;-->

<!--    &lt;!&ndash;                <span class="flex mb-3">&ndash;&gt;-->
<!--    &lt;!&ndash;                   <label for="title" class="mr-3 task-title">Название задачи</label>&ndash;&gt;-->
<!--    &lt;!&ndash;	                <InputText id="title" type="text" class="p-inputtext-sm" v-model="value"/>&ndash;&gt;-->
<!--    &lt;!&ndash;                </span>&ndash;&gt;-->

<!--    &lt;!&ndash;                    <span class="flex mb-3">&ndash;&gt;-->
<!--    &lt;!&ndash;                    <label for="description" class="mr-3 task-title">Описание задачи</label>&ndash;&gt;-->
<!--    &lt;!&ndash;                    <Textarea :autoResize="true" rows="2" cols="30" id="description" type="text" class="p-inputtext-lg"&ndash;&gt;-->
<!--    &lt;!&ndash;                              v-model="value"/>&ndash;&gt;-->
<!--    &lt;!&ndash;                </span>&ndash;&gt;-->

<!--    &lt;!&ndash;                    <span class="flex mb-3">&ndash;&gt;-->
<!--    &lt;!&ndash;                    <label for="beginDate" class="mr-3 task-title">Начало задачи</label>&ndash;&gt;-->
<!--    &lt;!&ndash;                        <span class="flex flex-column">&ndash;&gt;-->
<!--    &lt;!&ndash;                    <Calendar class="mb-3" id="beginDate" v-model="value" :showIcon="true" icon="pi pi-calendar"&ndash;&gt;-->
<!--    &lt;!&ndash;                              placeholder="дата"/>&ndash;&gt;-->
<!--    &lt;!&ndash;                    <Calendar v-model="value" :showIcon="true" icon="pi pi-clock" placeholder="время"&ndash;&gt;-->
<!--    &lt;!&ndash;                              :timeOnly="true"/>&ndash;&gt;-->
<!--    &lt;!&ndash;                        </span>&ndash;&gt;-->
<!--    &lt;!&ndash;                </span>&ndash;&gt;-->

<!--    &lt;!&ndash;                </div>&ndash;&gt;-->
<!--    &lt;!&ndash;            </form>&ndash;&gt;-->


<!--    &lt;!&ndash;            <template #footer>&ndash;&gt;-->
<!--    &lt;!&ndash;                <Button  label="отменить" icon="pi pi-times" class="p-button-text"/>&ndash;&gt;-->
<!--    &lt;!&ndash;                <Button label="записать" icon="pi pi-check" class="p-button-success" autofocus/>&ndash;&gt;-->
<!--    &lt;!&ndash;            </template>&ndash;&gt;-->

<!--    &lt;!&ndash;        </Dialog>&ndash;&gt;-->

<!--    <h5>Modal</h5>-->

<!--    <Dialog header="Header" v-model:visible="display" :style="{width: '50vw'}" :modal="true">-->
<!--        <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut-->
<!--            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco-->
<!--            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit-->
<!--            esse cillum dolore eu fugiat nulla pariatur.-->
<!--            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est-->
<!--            laborum.</p>-->
<!--        <template #footer>-->
<!--            <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>-->
<!--            <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus/>-->
<!--        </template>-->
<!--    </Dialog>-->
<!--</template>-->

<!--<script>-->
<!--    import Dialog from 'primevue/dialog'-->
<!--    import InputText from 'primevue/inputtext'-->
<!--    import Button from 'primevue/button'-->
<!--    import Calendar from 'primevue/calendar'-->
<!--    import Textarea from 'primevue/textarea'-->


<!--    export default {-->
<!--        components: {Dialog, InputText, Button, Calendar, Textarea},-->
<!--        props: ['isDisplayModal'],-->

<!--        data() {-->
<!--            return {-->
<!--                display: this.isDisplayModal,-->
<!--                value: null-->
<!--            }-->
<!--        },-->
<!--        watch: {-->
<!--            // isDisplayModal() {-->
<!--            //     this.displayModal = true-->
<!--            //     console.log(this.displayModal)-->
<!--            // }-->
<!--        },-->
<!--        methods: {-->
<!--            // test(){-->
<!--            //     if(this.$refs.dialog.close){-->
<!--            //         this.$refs.dialog.close()-->
<!--            //     }-->
<!--            // }-->
<!--            closeModal() {-->
<!--                this.display = false;-->
<!--            },-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->