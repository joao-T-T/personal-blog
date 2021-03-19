<template>
    <div class="footer">
        Versão {{ version }} — {{ email }}
    </div>
</template>

<script>
import { version } from '~/package'
import { email } from '~/blog'


export default {
    setup() {
        return {
            version,
            email
        }
    }
}
</script>

<style scoped src="./footer.css"></style>