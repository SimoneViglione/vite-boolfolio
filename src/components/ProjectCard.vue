<template>
    <div class="card">
        <img v-if="project.cover_image" :src="`${this.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
        <img v-else src="https://emojis.wiki/thumbs/emojis/grimacing-face.webp" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <h5>{{project.type?.name}}</h5>

            <a href="#" class="btn btn-primary">Vai al Progetto </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: ['project']
    }
</script>