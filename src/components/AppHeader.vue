<template>
    <div class="ms_header d-flex justify-content-between">
        <div class="d-flex m-4">
            <h4 class="me-2 mt-1">Boolfolio</h4>
            <ul class="navbar-nav mb-lg-0 d-flex flex-row">
                <li class="ms_nav_item ms-4" v-for="item in menuItems"> 
                    <router-link :to="{name: item.routeName}" class="nav-link">{{item.label}}</router-link>
                </li>
            </ul>
        </div>
        
        <a href="#" class="m-4"><h4>Login</h4></a>
    </div>
</template>

<script>
     export default {
        name: "AppHeader",
        data() {
            return {
                menuItems: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Progetti',
                        routeName: 'projects'
                    },
                    {
                        label: 'Contattami',
                        routeName: 'contact'
                    },
                    {
                        label: 'About Me',
                        routeName: 'about'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    h4 {
        color: rgb(60, 0, 180);
        font-family: 'Roboto Mono', monospace;
    }

    .ms_nav_item {
        text-decoration: none;
        color: rgb(60, 0, 180);
        font-family: 'Roboto Mono', monospace;
    }
</style>