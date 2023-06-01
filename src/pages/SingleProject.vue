<template>
    
    <div class="container mt-2">
        <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="img-fluid">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="img-fluid"/>
        <div class="card-body">
            <h1 class="card-title">{{project.title}}</h1>
            <h3>{{project.type?.name}}</h3>

            <p>{{ project.content }}</p>
        </div>
    </div>  
               
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';    

    export default {
        name: 'SingleProject',
        data() {
            return {
                store,
                project: ''
            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            
            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                this.project = response.data.project;
            });
        }
    }
</script>