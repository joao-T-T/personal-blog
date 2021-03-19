<template>
    <SidebarItemContainer>
        <template v-slot:title>
            Changelog
        </template>
        <template v-slot:content>
            <a href="https://github.com/ringeringeraja/personal-blog">
                https://github.com/ringeringeraja/personal-blog
            </a>
            <ul>
                <li>v1.0.0: versão minimamente funcional</li>
            </ul>
        </template>
    </SidebarItemContainer>
</template>

<script>
import Base from './base'

export default {
    extends: Base
}
</script>