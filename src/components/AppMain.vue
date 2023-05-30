<template>
    <div class="container ms_container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <div class="card">
                    <img v-if="project.cover_image" :src="`${this.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <h5>{{project.type?.name}}</h5>
    
                        <a href="#" class="btn btn-primary">Vai al Progetto </a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'AppMain', 
        data () {
            return {
                projects: [],
                baseUrl: 'http://localhost:8000'
            }
        },
        methods: {
            getProjects() {
                axios.get(`${this.baseUrl}/api/projects`,)

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