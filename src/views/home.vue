<template>
    <div class="home">
        <PostEdit v-if="newPost" />
        <PostContainer
            v-for="(post, index) in posts"
            :key="`post-${index}`"

            :post="post"
        />
    </div>
</template>

<script>
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: {
        PostContainer: defineAsyncComponent(() => import('components/containers/post')),
        PostEdit: defineAsyncComponent(() => import('components/privileged/post-edit'))
    },

    setup() {
        const store = useStore()
        const posts = store.getters['post/items']

        onMounted(async () => {
            if( posts.length === 0 ) {
                await store.dispatch('post/getAll')
            }
        })

        onBeforeRouteLeave(() => {
            if( store.getters['admin/newPost'] == true ) {
                store.dispatch('admin/shiftNewPost', false)
            }
        })
        
        return {
            posts: computed(() => store.getters['post/items']),
            newPost: computed(() => store.getters['admin/newPost'])
        }
    }
}
</script>

<style scoped src="./home.css"></style>