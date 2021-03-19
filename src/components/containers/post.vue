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
        <template v-slot:details>
            <div>
                Publicado em {{ post.created_at.formatDate() }}
            </div>
            <div v-if="post.created_at !== post.updated_at">
                Atualizado em {{ post.updated_at.formatDate() }}
            </div>
        </template>
        <template v-slot:content>
            {{
                isPreview && post.content.length > 200
                    ? post.content.slice(0, 197) + '...'
                    : post.content
            }}
        </template>
        <template v-slot:bottom v-if="isPreview || $slots.bottom">
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
}
</script>

<style scoped src="./post.css"></style>