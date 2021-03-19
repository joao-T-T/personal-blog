<template>
    <div class="banner">
        <div
            class="banner__text"
            @click="$router.push({ name: 'home' })"
        >
            {{ title }}
        </div>

        <div class="banner__year">
            Ano {{ year }} - mês {{ month }}
        </div>
    </div>
</template>

<script>
import blog from '~/blog'

export default {
    setup() {
        const now = Date.now()
        const createdAt = new Date(blog.createdAt).getTime()

        const diff = new Date(now - createdAt)

        const year = Math.abs(diff.getUTCFullYear() - 1970) + 1
        const month = Math.abs(diff.getUTCMonth()) + 1

        return {
            ...blog,
            year,
            month
        }
    }
}
</script>

<style scoped src="./banner.css"></style>