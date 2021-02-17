<template>
    <div class="home_wrapper">
        <Side_nav :home="home" />
        <div class="main_page_wrapper">
            <Search_bar />
            <Main_content :projects="projects" :featured_project="featured_project" />
        </div>
    </div>
</template>

<script>
import Welcome_animation from '../components/Welcome_animation'
import get_projects from '../composables/get_projects'
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Main_content from '../components/Main_content'

export default {
    name: 'Home',
    components: { Side_nav, Search_bar, Main_content, Welcome_animation },
    data(){
        return {
            home: 'home',
        }
    },
    setup(){
        const { projects, featured_project, load } = get_projects()
        
        load()
        
        return { projects, featured_project }
    }
}
</script>