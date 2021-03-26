<template>
    <div class="about_content_wrapper">
        <div class="about_container">
            <div class="content_container">
                <h1>About</h1>
                <img class="user_pic" aria-label="fox logo" src="../assets/images/svg/about_logo.svg" alt="Fox Logo" loading="eager">
                <h6>Jake Bogan</h6>
                <div class="line_break"></div>
                <p class="about_me_text">
                    Hello, my name is Jake, and I am a UI/UX designer & your new best friend. I build captivating web experiences that always deliver. I have about 3 years of UI/UX experience. I began self-learning web design in 2018 and eventually took professional classes in college. I use a plethora of different designing software to help organize and create web designs quickly and efficiently.
                    <br><br>
                    I am always developing new concepts and designs, that means paying attention to the latest design trends. I have experience with WordPress including pure HTML, CSS, and JavaScript code to develop front-end projects. Currently I am working with a non-profit organization called Epic Marketers, where we help redesign our client websites. I help with not only the redesign aspect but also with SEO, email marketing, amongst other services.
                    <br><br>
                    If you are looking for a better design, please 
                    <router-link :to="{name:'Contact'}">
                        <span>Contact</span>
                    </router-link>
                    me!<br><br>
                </p>
                <div class="links">
                    <a class="linkedin" href="https://www.linkedin.com/in/theron-bogan-574b98209/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Wisemen221?tab=repositories"><i class="fab fa-github-square"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>