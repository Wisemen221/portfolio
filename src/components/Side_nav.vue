<template>
    <div class="nav_wrapper">
        <div class="logo_wrapper">
            <router-link :to="{name:'Home'}">
                <img src="../assets/images/svg/fox_logo.svg" alt="logo">
            </router-link>
        </div>
        <nav class="side_nav">
            <div class="menu_title">
                <h3>MENU</h3>
            </div>
            <ul>
                <li class="menu_links">
                    <router-link :to="{name:'Home'}">
                        <a href="javascript: void(0)" :id="home">
                            <div class="menu_icon_box projects"><i class="fas fa-toolbox"></i></div>
                            Projects
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'About'}">
                        <a href="javascript: void(0)" :id="about">
                            <div class="menu_icon_box about"><i class="fas fa-user-tie"></i></div>
                            About
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'Skills'}">
                        <a href="javascript: void(0)" :id="skills">
                            <div class="menu_icon_box skills"><i class="fas fa-laptop-code"></i></div>
                            Skills
                        </a>
                    </router-link>
                </li>
                <li class="menu_links">
                    <router-link :to="{name:'Contact'}">
                        <a href="javascript: void(0)" :id="contact">
                            <div class="menu_icon_box contact"><i class="fas fa-envelope"></i>
                            </div>
                            Contact
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