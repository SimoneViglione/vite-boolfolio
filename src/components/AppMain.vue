<template>
    <div class="container ms_container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                
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
                    this.posts = response.data.results;
                });
            }
        },
        mounted() {
            this.getProjects();
        }
    }

</script>