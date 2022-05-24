<template>
    <div class="flex w-auto nagibator-wrapper align-items-center justify-content-center">
        <Button icon="pi pi-chevron-left"
                @click="$emit('prevPage')"
        />
        <ul class="flex w-4  justify-content-center p-0">
            <li class="flex border-1 border-blue-200 mr-3 cursor-pointer text-3xl"
                v-for="(item, idx) in this.paginationList">
                <a>{{ idx + 1}}</a>
            </li>
        </ul>
        <Button icon="pi pi-chevron-right"
                @click="$emit('nextPage')"
        />
    </div>
</template>

<script>
    import Button from 'primevue/button'
    import mixinPagination from '@/mixins/mixin.paginator.js'
    // import _ from 'lodash'
    // import {useStore} from "../../../store/store"
    // import {mapWritableState} from 'pinia'
    export default {
        components: {Button},
        props: {
            paginationList: {
                type: Array,
                required: true
            },
        },
        mixins: [mixinPagination],
        data() {
            return {
                page: 0,
                pageCount: null,
                taskOnPage: 4,
            }
        },
        watch() {

        },
        // created() {
        //     this.paginationList = _.chunk(this.cloneTaskStore, 4)
        // },
        // computed: {
        //     ...mapWritableState(useStore, ['cloneTaskStore']),
        // },
        methods: {

        }

    }
</script>

<style scoped>
    .nagibator-wrapper {
        width: 100%;
    }

</style>