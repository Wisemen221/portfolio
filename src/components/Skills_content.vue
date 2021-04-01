<template>
    <div class="skills_content_wrapper">
        <div class="skills_container">
            <div class="content_container">
                <h1>Skills & Knowledge</h1>
                <div class="line_break"></div>
                <section class="skills_section">
                    <div class="skills" v-for="todo in todos" :key="todo.text" :style="{ 'background-color': mycolor }">
                        <!-- <h5>{{ todo.text }}</h5> -->
                        <div class="box" v-html="todo.text"></div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todos: [
                    { text: '<i class="fab fa-html5"></i>' },
                    { text: '<i class="fab fa-css3-alt"></i>' },
                    { text: '<i class="fab fa-js-square"></i>' },
                    { text: '<i class="fab fa-sass"></i>' },
                    { text: '<i class="fab fa-bootstrap"></i>' },
                    { text: '<img class="jquery" src="/img/jquery_icon.82b1b0b7.svg" role="presentation">' },
                    { text: '<img class="ajax" src="/img/ajax_icon.f7739e81.svg" role="presentation">' },
                    { text: '<img class="json" src="/img/json_icon.8b38683e.svg" role="presentation">' },
                    { text: '<i class="fab fa-vuejs"></i>' },
                    { text: '<i class="fab fa-node-js"></i>' },
                    { text: 'UI/UX' },
                    { text: 'SEO' },
                    { text: '<i class="fab fa-wordpress"></i>' },
                    { text: '<img class="jquery" src="/img/jquery_icon.82b1b0b7.svg" role="presentation">' },
                    { text: '<i class="fas fa-database"></i>' },
                    { text: '<i class="fab fa-git"></i>' },
                    { text: '<i class="fab fa-github"></i>' },
                    { text: '<i class="fab fa-figma"></i>' },
                ],
                mycolor: '#2BC7D9'
            }
        }
    }
</script>