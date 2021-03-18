<template>
    <PostEditComponent />
</template>

<script>
import { defineAsyncComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: {
        PostEditComponent: defineAsyncComponent(() => import('components/privileged/post-edit'))
    },
    
    setup() {
        const route = useRoute()
        const store = useStore()

        onMounted(async () => {
            const { slug } = route.params

            if( slug && !store.getters['post/hasItem'] ) {
                await store.dispatch('post/get', { slug })
            }
        })
    }
}
</script>