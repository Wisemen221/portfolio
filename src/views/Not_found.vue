<template>
    <div class="not_found_page">
        <h1>404</h1>
        <br>
        <h2>Page not found</h2>
        <br>
        <p>
            <router-link :to="{name:'Home'}">
                <span>Click</span>
            </router-link>
            here to return to my homepage!
        </p>
    </div>
</template>

<style scoped>
    .not_found_page{
        text-align: center;
        letter-spacing: 0.3rem;
    }
    .not_found_page span{
        color: #32A7E2;
        cursor: pointer;
        font-size: 1.3rem;
    }
</style>