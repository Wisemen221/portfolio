<template>
    <header class="search_bar_wrapper">
        <form>
            <router-link :to="{name:'Search_results'}">
                <input type="text" aria-label="Search" aria-labelledby="Search" placeholder="Search">
            </router-link>
            <div class="search_icon"><i class="fas fa-search"></i></div>
        </form>
    </header>
</template>