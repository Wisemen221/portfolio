<template>
    <div class="skills_content_wrapper">
        <div class="skills_container">
            <div class="content_container">
                <h1>Skills & Knowledge</h1>
                <div class="line_break"></div>
                <section class="skills_section">
                    <div class="skills" v-for="todo in todos" :key="todo.text" :style="{ 'background-color': mycolor }">
                        <h5>{{ todo.text }}</h5>
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
                    { text: 'HTML' },
                    { text: 'CSS' },
                    { text: 'JAVASCRIPT' },
                    { text: 'SASS' },
                    { text: 'BOOTSTRAP' },
                    { text: 'JQUERY' },
                    { text: 'AJAX' },
                    { text: 'JSON' },
                    { text: 'VUE JS' },
                    { text: 'NODE JS' },
                    { text: 'WIREFRAMING' },
                    { text: 'UI/UX' },
                    { text: 'SEO' },
                    { text: 'WORDPRESS' },
                    { text: 'ADOBE Apps' },
                    { text: 'DATABASE' },
                    { text: 'GIT' },
                    { text: 'GITHUB' },
                    { text: 'FIGMA' },
                ],
                mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            }
        }
    }
</script>