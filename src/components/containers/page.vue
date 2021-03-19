<template>
    <EntryContainer>
        <template v-slot:title>
            {{ title }}
        </template>
        <template v-slot:content>
            <slot></slot>
        </template>
    </EntryContainer>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()

        return {
            title: computed(() => route.meta?.title || 'Página')
        }
    }
}
</script>