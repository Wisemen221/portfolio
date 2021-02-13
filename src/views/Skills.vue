<template>
    <div class="home_wrapper">
        <Side_nav :skills="skills"/>
        <div class="main_page_wrapper">
            <Search_bar />
            <Skills_content />
        </div>
    </div>
</template>

<script>
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Skills_content from '../components/Skills_content'

export default {
    name: 'Skills',
    components: { Side_nav, Search_bar, Skills_content },
    data(){
        return {
            skills: 'skills'
        }
    }
}
</script>