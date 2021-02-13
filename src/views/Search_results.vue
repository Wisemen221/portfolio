<template>
    <div class="home_wrapper">
        <Side_nav :home="home" />
        <div class="main_page_wrapper">
            <Search_content :projects="projects" :focus="focus" />
        </div>
    </div>
</template>

<script>
import get_projects from '../composables/get_projects'
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Search_content from '../components/Search_content'
import { ref } from 'vue'

export default {
    name: 'Search_results',
    components: { Side_nav, Search_bar, Search_content },
    data(){
        return {
            home: 'home'
        }
    },
    setup(){
        const focus = ref(true)

        const { projects, featured_project, load } = get_projects()

        load()

        return { projects, featured_project, focus }
    }
}
</script>