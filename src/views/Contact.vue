<template>
    <div class="home_wrapper">
        <Side_nav :contact="contact"/>
        <div class="main_page_wrapper">
            <Search_bar />
            <Contact_content />
        </div>
    </div>
</template>

<script>
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Contact_content from '../components/Contact_content'

export default {
    name: 'Contact',
    components: { Side_nav, Search_bar, Contact_content },
    data(){
        return {
            contact: 'contact'
        }
    }
}
</script>