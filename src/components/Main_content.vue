<template>
    <main class="main_content_wrapper">
        <div class="main_container">
            <div class="feature_wrapper" v-show="featured_project.length">
                <h1>Feature</h1>
                <div v-for="feature in featured_project" :key="feature.id" v-cloak>
                    <router-link :to="{name:'Project_details',params:{id:id}}">
                        <div class="featured_project_wrapper">
                            <h2>{{ feature.title }}</h2>
                            <img class="featured_project" :src="require(`@/assets/images/svg/${feature.path}`)" alt="Featured Project">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="other_projects_wrapper" v-show="projects.length">
                <h4>Other Projects</h4>
                <div class="container">
                    <Projects_main :projects="projects"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Projects_main from '../components/Projects_main.vue'

export default {
    props: ['projects','featured_project'],
    components:{Projects_main},
    data(){
        return{
            id: 'live_chat'
        }
    }
}
</script>