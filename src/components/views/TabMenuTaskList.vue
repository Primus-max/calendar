<template>
    <div>
        <TabMenu :model="items" />
    </div>
</template>

<script>
    import TabMenu from 'primevue/tabmenu'
    export default {
        components:{TabMenu},
        data() {
            return {
                items: [
                    {label: 'на сегодня', icon: 'pi pi-fw pi-star',  command:() => this.test()},
                    {label: 'в процессе', icon: 'pi pi-spin pi-spinner'},
                    {label: 'завершенные', icon: 'pi pi-fw pi-check', text: 'text-green-500'},
                    {label: 'чужие', icon: 'pi pi-fw pi-share-alt'},
                    {label: 'настройки', icon: 'pi pi-fw pi-cog'}
                ]
            }
        },

        methods:{
          test(){
              console.log('test is work')
          }
        }

    }
</script>

<style scoped>

</style>