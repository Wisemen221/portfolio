<template>
    <div class="details_wrapper">
        <div v-if="project" v-cloak>
            <img class="details_image" :src="require(`@/assets/images/svg/${project.path}`)" alt="Project Cover">
            <div class="details_content">
                <div class="project_info_wrapper">
                    <div class="info_title">
                        <h2 ref="project_title">{{ project.title }}</h2>
                        <div class="button_containers">
                            <button aria-label="GitHub Link"><i class="fab fa-github"></i> Code</button>
                            <button aria-label="External Porject Link"><i class="fas fa-external-link-square-alt"></i> Link</button>
                        </div>
                    </div>
                    <div class="line_break"></div>
                    <div class="info_text">
                        <p>{{ project.description }}</p>
                    </div>
                </div>
                <div class="suggested_project">
                    <div class="projects" @click="alert_user" v-for="soon in coming_soon" :key="soon.id" v-cloak>
                        <div class="img_wrapper">
                            <img class="project_image" :src="require(`@/assets/images/svg/${soon.path}`)" alt="Flashcard Project">
                        </div>
                        <h5>{{ soon.title }}</h5>
                        <p>{{ soon.description.substring(0, 100) + '...' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import get_projects from '../composables/get_projects'

export default {
    props: ['project'],
    setup(){

        const alert_user = ()=>{
            window.alert('Sorry! Project is still under developement')
        }

        const { coming_soon, load } = get_projects()

        load()
        
        return { coming_soon, alert_user }
    }
}
</script>