<template>
    <div class="container">
        <div class="row m-4">
            <div class="col">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
        </div>
        <div class="row m-4">
            <div class="col">
                <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Telephone number" aria-label="Number">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppContact'
    }
</script>