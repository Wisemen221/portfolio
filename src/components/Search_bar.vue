<template>
    <header class="search_bar_wrapper">
        <div class="search_bar">
            <router-link class="input_wrapper" :to="{name:'Search_results'}">
                <input type="text" aria-labelledby="Search" placeholder="Search">
                <div class="search_icon"><i class="fas fa-search"></i></div>
            </router-link>
        </div>
    </header>
</template>