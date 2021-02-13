<template>
    <div class="home_wrapper">
        <Side_nav :home="home" />
        <div class="main_page_wrapper">
            <Search_bar />
            <Featured_details_content :feature="feature"/>
        </div>
    </div>
</template>

<script>
import get_project from '../composables/get_project'
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Featured_details_content from '../components/Featured_details_content'

export default {
    name: 'Featured_details',
    components: { Side_nav, Search_bar, Featured_details_content },
    props: ['id'],
    data(){
        return {
            home: 'home'
        }
    },
    setup(props){
        const { feature, load } = get_project(props.id)
        
        load()

        return { feature }
    }
}
</script>