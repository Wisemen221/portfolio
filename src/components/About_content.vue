<template>
    <div class="about_content_wrapper">
        <div class="about_container">
            <div class="content_container">
                <h1>About</h1>
                <img class="user_pic" src="../assets/images/svg/about_logo.svg" alt="Fox Logo">
                <h6>Jake Bogan</h6>
                <div class="line_break"></div>
                <p class="about_me_text">
                    Hello, my name is Jake and I am a UI/UX designer & your new best friend. I build captivating web experiences that deliver. I am currently in school for Information Technology and will be soon graduating no later than April of this year. If your looking for a better design, 
                    <router-link :to="{name:'Contact'}">
                        <span>Contact</span>
                    </router-link>
                    me.
                </p>
            </div>
        </div>
    </div>
</template>