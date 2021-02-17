<template>
    <Welcome_animation v-if="!show_home" @anim_complete="update"/>
    <div ref="app" class="home_wrapper" v-if="show_home">
        <Side_nav :home="home" />
        <div id="main_page_wrapper" class="main_page_wrapper">
            <Search_bar />
            <Main_content :projects="projects" :featured_project="featured_project" />
        </div>
    </div>
</template>

<script>
import Welcome_animation from '../components/Welcome_animation'
import get_projects from '../composables/get_projects'
import Side_nav from '../components/Side_nav'
import Search_bar from '../components/Search_bar'
import Main_content from '../components/Main_content'
import { gsap } from "gsap"

export default {
    name: 'Home',
    components: { Side_nav, Search_bar, Main_content, Welcome_animation },
    data(){
        return {
            home: 'home',
            show_home: false,
            animated: null,
            animated_app: null,
            trigger: true
        }
    },
    beforeMount(){
        if(window.localStorage){
            this.animated = localStorage.getItem('animation_done')
            if(this.animated){
                this.show_home = true
            }else{
                this.show_home = false
            }
        }else{
            window.alert('localstorage is not supported')
        }
    },
    setup(){
        const { projects, featured_project, load } = get_projects()

        load()
        
        return { projects, featured_project }
    },
    methods:{
        update(){
            this.show_home = true
        }
    },
    updated(){
        // if (window.matchMedia("(min-width: 25rem)").matches){
            if(window.localStorage){
                this.animated_app = localStorage.getItem('app_done')
                if(!this.animated_app){
                    gsap.fromTo(app, {translateX: -1550}, {translateX: 0, duration: 1, ease: "elastic.out(1, 0.90)", onComplete:()=>{
                        if(window.localStorage){
                            localStorage.setItem('app_done', this.trigger)
                        }else{
                            window.alert('localstorage is not supported')
                        }
                    }})
                }else{
                    return
                }
            }else{
                window.alert('localstorage is not supported')
            }
        // }
    }
}
</script>