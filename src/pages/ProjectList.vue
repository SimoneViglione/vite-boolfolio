<template>
    <div class="container ms_container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <div class="card">
                    <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <h5>{{project.type?.name}}</h5>
    
                        <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">
                            Vai al Progetto
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>

    import axios from 'axios';
    import { store } from '../store';

    export default {
        name: 'ProjectList', 
        data () {
            return {
                projects: [],
                store
            }
        },
        methods: {
            getProjects() {
                axios.get(`${this.store.baseUrl}/api/projects`,)

                .then(response => {
                    console.log(response);
                    this.projects = response.data.results;
                });
            }
        },
        mounted() {
            this.getProjects();
        }
    }

</script>