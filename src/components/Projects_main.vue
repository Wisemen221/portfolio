<template>
    <div class="projects" v-for="project in projects" :key="project.id" v-cloak>
        <router-link :to="{name:'Project_details',params:{id:project.id}}">
            <div class="img_wrapper">
                <img class="project_image" :src="require(`@/assets/images/svg/${project.path}`)" alt="Projects">
            </div>
            <h5>{{ project.title }}</h5>
            <p>{{ project.description.substring(0, 50) + '...' }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['projects']
}
</script>