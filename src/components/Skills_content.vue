<template>
    <div class="skills_content_wrapper">
        <div class="skills_container">
            <div class="content_container">
                <h1>Skills & Knowledge</h1>
                <div class="line_break"></div>
                <section class="rw-wrapper">
                    <h2 class="rw-sentence">
                        <!-- <span>Don't worry, </span>
                        <br />
                        <span>I have skills and experience <br class="break" />in</span> -->
                        <div class="rw-words rw-words-1">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JAVASCRIPT</span>
                            <span>SASS</span>
                            <span>BOOTSTRAP</span>
                            <span>JQUERY</span>
                            <span>VUE</span>
                            <span>WORDPRESS</span>
                            <span>ADOBE</span>
                            <span>DATABASE</span>
                            <span>GIT</span>
                            <span>GITHUB</span>
                        </div>
                    </h2>
                </section>
            </div>
        </div>
    </div>
</template>1
<style scoped>
    .rw-wrapper{
        width: 80%;
        position: relative;
    }
    .rw-sentence{
        margin: 0;
        font-size: 20px;
        line-height: 1.8rem;
        cursor: default;
        text-align: left;
        transition: all 0.15s ease;
    }
    /* .rw-words{
        display: inline;
        text-indent: 0.375rem;
    } */
    .rw-words-1 span{
        position: absolute;
        opacity: 0;
        overflow: hidden;
        color: #FFFFFF;
        animation: rotateWord 25s linear infinite 0s;
    }
    .rw-words-1 span:nth-child(2) { 
        animation-delay: 2s; 
    }
    .rw-words-1 span:nth-child(3) { 
        animation-delay: 4s;
    }
    .rw-words-1 span:nth-child(4) { 
        animation-delay: 6s;
    }
    .rw-words-1 span:nth-child(5) { 
        animation-delay: 8s;
    }
    .rw-words-1 span:nth-child(6) {
        animation-delay: 10s;
    }
    .rw-words-1 span:nth-child(7) {
        animation-delay: 12s;
    }
    .rw-words-1 span:nth-child(8) {
        animation-delay: 14s;
    }
    .rw-words-1 span:nth-child(9) { 
        animation-delay: 16s;
    }
    .rw-words-1 span:nth-child(10) { 
        animation-delay: 18s;
    }
    .rw-words-1 span:nth-child(11) { 
        animation-delay: 20s;
    }
    .rw-words-1 span:nth-child(12) { 
        animation-delay: 22s;
    }
    @keyframes rotateWord {
        0% { opacity: 0; }
        1% { opacity: 0; transform: translateY(1.875rem); }
        5% { opacity: 1; transform: translateY(0);}
        11% { opacity: 1; transform: translateY(0); }
        /* 12% { opacity: 0.1;} */
        /* 13% { opacity: 0;} */
        14% { opacity: 0; transform: translateY(-1.875rem); }
        80% { opacity: 0; }
        100% { opacity: 0; }
    }
</style>