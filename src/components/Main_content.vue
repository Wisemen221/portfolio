<template>
    <main class="main_content_wrapper">
        <div class="feature_wrapper" v-show="featured_project">
            <h1>Feautre</h1>
            <div v-for="feature in featured_project" :key="feature.id" v-cloak>
                <router-link :to="{name:'Featured_details',params:{id:feature.id}}">
                    <div class="featured_project_wrapper">
                        <h2>{{ feature.title }}</h2>
                        <img class="featured_project" :src="require(`@/assets/images/svg/${feature.path}`)" alt="Featured Project">
                    </div>
                </router-link>
            </div>
        </div>
        <div class="other_projects_wrapper">
            <h4>Other Projects</h4>
            <div class="container" v-show="projects">
                <div class="projects" v-for="project in projects" :key="project.id" v-cloak>
                    <router-link :to="{name:'Project_details',params:{id:project.id}}">
                        <div class="img_wrapper">
                            <img class="project_image" :src="require(`@/assets/images/svg/${project.path}`)" alt="Projects">
                        </div>
                        <h5>{{ project.title }}</h5>
                        <p>{{ project.description.substring(0, 50) + '...' }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { onUpdated, ref } from 'vue'
export default {
    props: ['projects','featured_project'],
    data(){
        return{
            // test: '../assets/images/svg/'
        }
    },
    setup(props){
        const test = ref('')
        onUpdated(()=>{
            if(props.featured_project){
               test.value = '../assets/images/svg/'
            }
        })
        return {test}
    }
}
</script>