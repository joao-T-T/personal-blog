<template>
    <SidebarItemContainer>
        <template v-slot:title>
            Administração
        </template>
        <template v-slot:content>
            <Button @click="shiftNewPost">
                Nova publicação
            </Button>
        </template>
    </SidebarItemContainer>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import Base from './base'

export default {
    extends: Base,
    setup() {
        const router = useRouter()
        const route = useRoute()

        const store = useStore()

        function shiftNewPost() {
            store.dispatch('post/clear')

            if( route.path === '/') {
                store.dispatch('admin/shiftNewPost')
            } else {
                router.push({ name: 'post-new' })
            }
        }

        return {
            shiftNewPost
        }
    }
}
</script>