<template>
    <header class="search_bar_wrapper">
        <div class="search_bar">
            <div class="input_wrapper">
                <input @keydown="show_projects" ref="search" type="text" v-model="searchString" aria-labelledby="Search" placeholder="Search">
                <div class="search_icon"><i class="fas fa-search"></i></div>
            </div>
        </div>
    </header>
    <div class="search_content_wrapper">
        <div class="search_container">
            <h1>Search For A Project</h1>
            <div class="search_wrapper" v-show="empty">
                <div class="projects" v-for="project in filtered_projects" :key="project.id" v-cloak>
                    <router-link :to="{name:'Project_details',params:{id:project.id}}">
                        <div class="img_wrapper">
                            <img class="project_image" :src="require(`@/assets/images/svg/${project.path}`)" alt="Projects">
                        </div>
                        <h5>{{ project.title }}</h5>
                        <p>{{ project.description }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    props: ['projects','focus'],
    data(){
        return{
            searchString: '',
            project: '',
            empty: false
        }
    },
    setup(){
        const search = ref(null)
        onMounted(()=>{
            search.value.focus()
        })

        return { search }
    },
    methods:{
        show_projects(){
            this.empty = true
        }
    },
    updated(){
        this.project = this.projects
        if(this.searchString === ''){
            this.empty = false
        }
    },
    computed: {
        filtered_projects: function () {

            var articles_array = this.project,
                searchString = this.searchString
 
            if(!searchString){
                return articles_array
            }
 
            searchString = searchString.trim().toLowerCase();
 
            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            return articles_array
        }
    }
}
</script>