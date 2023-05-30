<template>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'AppMain', 
        data () {
            return {

            }
        },
        methods: {
            getProjects() {
                axios.get('http://127.0.0.1:8000//Api/Projects')
                .then(response => {
                    console.log(response);
                });
            }
        },
        mounted() {
            this.getProjects();
        }
    }

</script>