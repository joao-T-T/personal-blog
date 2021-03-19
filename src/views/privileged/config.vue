<template>
    <PageContainer>
        Not yet implemented
    </PageContainer>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        PageContainer: defineAsyncComponent(() => import('components/containers/page'))
    }
}
</script>