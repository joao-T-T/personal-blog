<template>
    <div class="banner">
        <div
            class="banner__text"
            @click="$router.push({ name: 'home' })"
        >
            Blog dos Muleke
        </div>

        <div class="banner__year">
            Ano I - Mês IX
        </div>
    </div>
</template>

<style scoped src="./banner.css"></style>