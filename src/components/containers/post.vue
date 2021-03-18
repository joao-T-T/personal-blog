<template>
    <EntryContainer :is-post="true">
        <template v-slot:title>
            <div
                :class="{
                    'post__title': true,
                    'post__title--preview': isPreview
                }"
                
                @click="isPreview && goToPost(post)"
            >
                {{ post.title }}
            </div>
        </template>
        <template v-slot:content>
            {{
                isPreview && post.content.length > 60
                    ? post.content.slice(0, 57) + '...'
                    : post.content
            }}
        </template>
        <template v-slot:bottom>
            <div
                class="post__readmore"
                @click="goToPost(post)"

                v-if="isPreview"
            >
                Ler mais
            </div>

            <slot name="bottom"></slot>
        </template>
    </EntryContainer>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
        isPreview: {
            type: Boolean,
            default: true,
        }
    },
    components: {
        EntryContainer: defineAsyncComponent(() => import('components/containers/entry'))
    },
}
</script>

<style scoped src="./post.css"></style>