<template>
    <div class="about_content_wrapper">
        <div class="about_container">
            <div class="content_container">
                <h1>About</h1>
                <img class="user_pic" src="../assets/images/svg/fox_user.svg" alt="Fox Logo">
                <h6>Jake Bogan</h6>
                <div class="line_break"></div>
                <p class="about_me_text">
                    My name is Theron Bogan; however, I like to go by my middle name Jake. As you can tell I like to design and create web applications on the web. I am an inspiring developer and I hope to be a full stack developer soon. I am currently in school for Information Technology and will be soon graduating no later than April of this year. Contact me if you are looking for a better design. 
                    <router-link :to="{name:'Contact'}">
                        <span>Contact</span>
                    </router-link>
                    me if
                    your looking for a better design.
                </p>
            </div>
        </div>
    </div>
</template>