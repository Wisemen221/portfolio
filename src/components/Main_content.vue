<template>
    <main class="main_content_wrapper">
        <div class="feature_wrapper" v-show="featured_project">
            <h1>Feautre</h1>
            <div v-for="feature in featured_project" :key="feature.id" v-cloak>
                <router-link :to="{name:'Featured_details',params:{id:feature.id}}">
                    <div class="featured_project">
                        <h2>{{ feature.title }}</h2>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="other_projects_wrapper">
            <h4>Other Projects</h4>
            <div class="container" v-show="projects">
                <div class="projects" v-for="project in projects" :key="project.id" v-cloak>
                    <router-link :to="{name:'Project_details',params:{id:project.id}}">
                        <div class="project_image"></div>
                        <h5>{{ project.title }}</h5>
                        <p>{{ project.description.substring(0, 50) + '...' }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: ['projects','featured_project']
}
</script>