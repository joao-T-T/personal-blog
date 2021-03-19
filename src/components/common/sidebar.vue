<template>
    <div class="sidebar">
        <About />
        <Changelog />
        <Categories v-if="false" />

        <Privileged v-if="isAuthenticated" />
        <Signin v-else />
    </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        About: defineAsyncComponent(() => import('components/sidebar/about')),
        Changelog: defineAsyncComponent(() => import('components/sidebar/changelog')),
        Categories: defineAsyncComponent(() => import('components/sidebar/categories')),
        Privileged: defineAsyncComponent(() => import('components/sidebar/privileged')),
        Signin: defineAsyncComponent(() => import('components/sidebar/signin'))
    },
    setup() {
        const store = useStore()

        return {
            isAuthenticated: computed(() => store.getters['user/isAuthenticated']),
        }
    }
}
</script>

<style scoped src="./sidebar.css"></style>