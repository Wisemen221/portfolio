<template>
    <div class="home_wrapper">
        <Side_nav :about="about"/>
        <div class="main_page_wrapper">
            <Search_bar />
            <About_content />
        </div>
    </div>
</template>

<script>
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import About_content from '../components/About_content'

export default {
    name: 'About',
    components: { Side_nav, Search_bar, About_content },
    data(){
        return {
            about: 'about'
        }
    }
}
</script>