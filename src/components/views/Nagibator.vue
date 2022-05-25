<template>
    <div class="flex w-auto nagibator-wrapper align-items-center justify-content-center">
        <Button icon="pi pi-chevron-left" class="p-button-rounded active:text-black-alpha-90 p-button-text"
                :disabled="page === 0"
                @click="$emit('prevPage')"
        />
        <ul class="flex w-2 justify-content-center p-0">
            <li class="flex cursor-pointer text-2xl align-items-center justify-content-center p-button-rounded pagination-button"
                v-for="(item, idx) in this.paginationList">
                <a class=""
                   :class="{
                        'text-primary': page === idx,
                        'isActiveBtn' : page === idx
                        }"
                   @click="$emit('changePage', idx)"
                >
                    {{ idx + 1}}
                </a>
            </li>
        </ul>
        <Button icon="pi pi-chevron-right" class="p-button-rounded active:text-black-alpha-90 p-button-text"
                :disabled="page === this.paginationList.length - 1"
                @click="$emit('nextPage')"
        />
    </div>
</template>

<script>
    import Button from 'primevue/button'

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
            page: {
                type: Number
            }
        },

        data() {
            return {
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
        methods: {}

    }
</script>

<style scoped>
    .nagibator-wrapper {
        width: 100%;
    }

    .pagination-button {
        width: 2.5rem;
        height: 2.5rem;

        text-align: center;
        border: 1px;
        border-radius: 100px;
    }

    .pagination-button:hover {
        background: #e6f1ff;
    }

    .isActiveBtn {
        width: 2.5rem;
        height: 2.5rem;

        text-align: center;
        border: 1px;
        border-radius: 100px;
    }

</style>