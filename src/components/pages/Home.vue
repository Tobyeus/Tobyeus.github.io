<template>
    <section>
        <base-card class="main-content">
            <!--
            <base-card class='headline'>
                <h1>Tobias Tubandt</h1>
            </base-card>
            -->
            <!--
            <div class="picture-wrapper">
                <img class="profile-pic" src="../../../public/images/profile-pic.png">
            </div>
            -->
            <base-card class="intro">
                <h2>Welcome to my website</h2>
                <h3>My name is Tobias</h3>
                <p>
                    I am a dedicated software developer with a background in physics. During my master's program, I delved into programming in computational physics. This experience proved to be a valuable skill in university, especially in data processing for the master's thesis. Since then, programming has evolved into a deeply rewarding hobby and a skill to pursue professionally.<br><br>
                    Currently, I am employed as an IT consultant specializing in software development. I have contributed to numerous projects for diverse clients, showcasing my expertise primarily in backend development using JavaEE and Spring. Additionally, I have also dived into frontend development using the Angular and VueJS frameworks.<br><br> 
                    Outside of professional endeavors, I am deeply engaged in graphics programming and game engine development. I find a particular fascination in working with low-level languages and have embarked on personal projects involving graphics applications in C++ and Rust. 
                </p>
            </base-card>
        </base-card>
    </section>
</template>

<style scoped>
.picture-wrapper {
    display: flex;
    justify-content: center;
}
.profile-pic {
    border: 2px solid #000;
    border-radius: 200px;
    width: 40%;
    height: 40%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.contact {
    display: flex;
    flex-direction: column;
}
.intro {
    font-size: 1em;
    line-height: 1.5;
    width: 90%;
    border: 2px solid #000;
    margin: 2.0rem 0.75rem;
    background-color:rgba(255, 255, 255, 0.8);
}
h2, h3, p {
    padding: 0.25rem 0.5rem;
}
.headline{
    text-align: left;
    font-size: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.8);
    background-color:rgba(255, 255, 255, 0.8);
}
@media (min-width: 650px) {
    .profile-pic {
        width: 200px;
        height: 200px;
    }
    textarea {
        padding: 0.5rem;
        border: 2px solid #000;
    }
    .headline{
        font-size: 1.5rem;
    }
}
</style>