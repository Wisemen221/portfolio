<template>
    <div class="background">
        <div ref="moduleWrapper" class="module_wrapper">
            <h1 ref="title">Welcome</h1>
            <div ref="module" class="module">
                <div ref="top" class="top_wrapper">
                    <div ref="box1" class="box box_1"></div>
                </div>
                <div ref="bottom" class="bottom_wrapper">
                    <div ref="box2" class="box box_2"></div>
                    <div ref="box3" class="box box_4"></div>
                    <div ref="box4" class="box box_5"></div>
                    <div ref="box5" class="box box_3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { gsap, Back } from 'gsap'

    export default {
        data(){
            return{
                animated: true
            }
        },
        methods:{
            onCompleteAll(){
                if(window.localStorage){
                    localStorage.setItem('animation_done', this.animated)
                    this.$emit('anim_complete',this.animated)
                }else{
                    window.alert('localstorage is not supported')
                }
            }
        },
        mounted() {
            const { moduleWrapper } = this.$refs
            const { module } = this.$refs
            const { title } = this.$refs
            const { box1 } = this.$refs
            const { box2 } = this.$refs
            const { box3 } = this.$refs
            const { box4 } = this.$refs
            const { box5 } = this.$refs
            const { top } = this.$refs
            const { bottom } = this.$refs

            const tl = gsap.timeline({onComplete:this.onCompleteAll})

            tl.to(module,{scale: 1, duration: 1.5, delay: 1, ease: "elastic.out(1, 0.5)" })
            .to(box1,{y: 0, stagger: 0.1, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(box2,{y: 0, stagger: 0.1, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(box3,{y: 0, stagger: 0.1, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(box4,{y: 0, stagger: 0.1, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(box5,{y: 0, stagger: 0.1, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(top,{duration: 0.6, marginLeft: 10+'%', ease: Back.easeInOut},'-=0.4')
            .to(bottom,{duration: 0.6, marginLeft: 10+'%', ease: Back.easeInOut},'-=0.4')
            .to(title,{y: 0, opacity: 1, ease: Back.easeInOut},'-=0.4')
            .to(moduleWrapper,{opacity: 0, ease: Back.easeInOut},'+=0.8')
        }
    }
</script>

<style scoped>
    html, body{
        transform: perspective(0.0625rem) scale(1) translateZ(0);
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
    }
    .background{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(#656565,#000000);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .module_wrapper{
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: perspective(0.0625rem) scale(1) translateZ(0);
        backface-visibility: hidden;
        text-align: center;
        height: 13.4375rem;
        width: 18.75rem;
        margin: 0;
        padding: 0;
        border-radius: 0.75rem;
        z-index: 100;
    }
    h1{
        font-size: 1.4375rem;
        font-weight: 500;
        color: #D9D9D9;
        letter-spacing: 0.5rem;
        cursor: default;
        opacity: 0;
        transform: translateY(0.625rem);
    }
    .module{
        background-color: #fff;
        border-radius: 0.75rem;
        width: 18.75rem;
        height: 11.375rem;
        margin: 0;
        padding: 0;
        transform: scale(0);
    }
    .top_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        padding: 0 1.25rem;
    }
    .bottom_wrapper{
        display: flex;
        align-items: center;
        padding: 0 1.25rem;
        justify-content: space-evenly;
        height: 50%;
    }
    .box{
        background-color: #D9D9D9;
        border-radius: 0.4375rem;
        margin: 0;
        padding: 0;
        transform: translateY(-2.5rem);
        opacity: 0;
    }
    .box_1{
        width: 14.375rem;
        height: 3.6rem;
    }
    .box_2, .box_3, .box_4, .box_5{
        width: 2.875rem;
        height: 3.25rem;
    }
</style>