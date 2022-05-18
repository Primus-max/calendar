<template>
    <Menubar :model="items" class="flex align-self-start w-4 h-3rem"/>
</template>

<script>
    import Menubar from 'primevue/menubar'

    export default {
        name: 'MainMenu',
        components: {Menubar},
        data() {
            return {
                items: [
                    {
                        label: 'задачи',
                        items: [{
                            label: 'добавить',
                            icon: 'pi pi-fw pi-plus',
                            to: '/addtask',
                            command:() => {console.log('work')}
                        },
                            {
                                label: 'удалить',
                                icon: 'pi pi-fw pi-trash',
                            }]
                    },
                    {
                        label: 'настройки',
                        items: [{
                            label: 'Options',
                            icon: 'pi pi-fw pi-cog',
                        },
                            {
                                label: 'Sign Out',
                                icon: 'pi pi-fw pi-power-off'
                            }]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>