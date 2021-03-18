import { createApp } from 'vue'
import App from 'components/app'

import router from './router'
import store from './store'

import Button from 'components/utils/button'
import FormContainer from 'components/containers/form'
import FormLabelContainer from 'components/containers/form-label'

if( process.env.NODE_ENV === 'development' ) {
    Object.assign(window, {
        router_: router,
        store_: store
    })
}

const mixin = {
    methods: {
        goToPost(post) {
            store.commit('post/ITEM_GET', post)
            router.push({ name: 'post', params: { slug: post.slug } })
        },
    }
}

createApp(App)
    .use(router)
    .use(store)
    .mixin(mixin)
    .component('Button', Button)
    .component('FormContainer', FormContainer)
    .component('FormLabel', FormLabelContainer)
    .mount('#root')