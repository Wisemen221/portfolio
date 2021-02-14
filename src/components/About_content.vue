<template>
    <div class="about_content_wrapper">
        <div class="content_container">
            <h1>About</h1>
            <img class="user_pic" src="../assets/images/svg/fox_user.svg" alt="Fox Logo">
            <h6>Jake Bogan</h6>
            <div class="line_break"></div>
            <p class="about_me_text">
                My name is Theron Bogan, however I like to go by my middle name 
                Jake. As you can tell I like to design and create web applications
                on the web. I'm an inspiring developer and I hope to be a full stack 
                developer soon. I'm currently in school for Information Technology and
                will be soon graduating no later than April of this year. 
                <router-link :to="{name:'Contact'}">
                    <span>Contact</span>
                </router-link>
                 me if
                your looking for a better design.
            </p>
        </div>
    </div>
</template>