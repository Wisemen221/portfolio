<template>
    <div class="nav_wrapper">
        <div class="logo_wrapper">
            <router-link :to="{name:'Home'}">
                <img aria-label="Logo" src="../assets/images/svg/fox_logo.svg" alt="logo" loading="eager">
            </router-link>
        </div>
        <nav class="side_nav">
            <div class="menu_title">
                <h3><span>MENU</span></h3>
            </div>
            <ul id="link_wrapper">
                <li class="menu_links">
                    <router-link :to="{name:'Home'}">
                        <a href="#" :id="home">
                            <div class="menu_icon_box all_projects"><i class="fas fa-toolbox"></i></div>
                            <span>Projects</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'About'}">
                        <a href="#" :id="about">
                            <div class="menu_icon_box about"><i class="fas fa-user-tie"></i></div>
                            <span>About</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'Skills'}">
                        <a href="#" :id="skills">
                            <div class="menu_icon_box skills"><i class="fas fa-laptop-code"></i></div>
                            <span>Skills</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'Contact'}">
                        <a href="#" :id="contact">
                            <div class="menu_icon_box contact"><i class="fas fa-envelope"></i>
                            </div>
                            <span>Contact</span>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        props: ['home','about','skills','contact']
    }
</script>