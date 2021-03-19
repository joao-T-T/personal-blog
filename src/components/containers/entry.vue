<template>
    <div class="entry">
        <div
            class="entry__title"
            v-if="$slots.title"
        >
            <slot name="title"></slot>
        </div>
        <div
            class="entry__details"
            v-if="$slots.details"
        >
            <slot name="details"></slot>
        </div>
        <div
            class="entry__content"
            v-if="$slots.content"
        >
            <slot name="content"></slot>
        </div>
        <div
            class="entry__bottom"
            v-if="$slots.bottom"
        >
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isPost: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style scoped src="./entry.css"></style>