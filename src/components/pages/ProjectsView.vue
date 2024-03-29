<template>
    <section>
        <base-card class="main-content">
            <base-card class="project-wrapper">
                <h1>Here you can find my projects</h1>
                <div class="projects">
                    <base-button class="btn-project" :class="projects.kana.open ? 'btn-active' : ''" @click="clickProject('kana')">Kana Quiz App</base-button>
                    <base-button class="btn-project" :class="projects.geometryWars.open ? 'btn-active' : ''" @click="clickProject('geometryWars')">Geometry Wars</base-button>
                    <base-button class="btn-project" :class="projects.openglRust.open ? 'btn-active' : ''" @click="clickProject('openglRust')">OpenGL in Rust</base-button>
                </div>
            </base-card>
                <base-card v-if="projects.kana.open" class="example">
                    <h2>{{ projects.kana.name }}</h2>
                    <div class="image">
                        <img src="../../../public/images/kana-app.png" alt="">
                        <p class="project-links"> <a href="https://tobyeus.github.io/Kana-Learner-Vue/">Production</a> | <a href="https://github.com/Tobyeus/kana-app-vue">Github</a></p>
                    </div>
                    <p class="description">
                        This applications is a quiz game to learn the japanese writing systems Hiragana and Katakana. Initally I wanted to practise these systems myself with the app. 
                        As soon as I finished building this application I was already fluent in both alphabets. If you want to try it and don't know any of the signs you can find the alphabets on <a href="https://en.wikipedia.org/wiki/Kana#Hiragana_and_katakana">Wikipedia</a>.
                        Written in Javascript with the VueJS framework.
                    </p>
                </base-card>
                <base-card v-if="projects.openglRust.open" class="example">
                <h2>{{ projects.openglRust.name }}</h2>
                    <div class="image">
                        <img src="../../../public/images/triangle.png" alt="">
                    </div>
                        <p class="project-links"><a href="https://github.com/Tobyeus/learn_opengl_rust">Github</a></p>
                        <p class="description">
                            This project showcases my progress in learning the graphics API OpenGL. It is following the the famous book/website <a href="https://learnopengl.com">LearnOpenGL</a>, which introduces the API and modern features in C++.
                            Since I was already learning Rust and looking for larger project, I decided to implement the examples in it. 
                            The project offers a variety of examples for basic rendering, lighting algorithms and model loading but is still work in progress. Ultimately the goal of the project is to implement all sections of the book and write a graphics renderer myself.
                        </p>
                </base-card>
                <base-card v-if="projects.geometryWars.open" class="example">
                    <h2>{{ projects.geometryWars.name }}</h2>
                    <div class="image">
                        <img src="../../../public/images/geometry_wars.png" alt="">
                        <p class="project-links"><a href="https://github.com/Tobyeus/GeometryWarsClone">Github</a></p>
                    </div>
                    <p class="description">
                        Geometry Wars is a popluar video game, and this project is a rudimentary clone of this classic. The repository consists of two parts: the game engine and game specific code. The engine is mostly written by myself with the help of the libraries such as SFML for rendering and window management and Dear ImGui for UI purposes.
                        The focus of this project is not developing a fully fledged game but to learn and develop a game engine. There is also a playable version of the game in the release section of the Github repository (only for Windows x64 systems).
                        This project is written in C++.
                    </p>
                </base-card>
            </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: {
                kana: {
                    name: "Kana Quiz",
                    open: false
                },
                commander: {
                    name: "Random Commander",
                    open: false
                },
                openglRust: {
                    name: "OpenGL in Rust",
                    open: false,
                },
                geometryWars: {
                    name: "Geometry Wars",
                    open: false,
                }
            }
        };
    },
    methods: {
        clickProject(project) {
            if( this.projects[project].open === true ) {
                this.projects[project].open = !this.projects[project].open;
            }else {
                this.closeAll();
                this.projects[project].open = !this.projects[project].open;
            }
        },
        closeAll() {
            for(let project in this.projects) {
                this.projects[project].open = false;
            }
        }
    },
};
</script>

<style scoped>
.example{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #000;
    transition: 0.4s;
    margin: 2.0rem auto;
}
img{
    width: 100%;
    border: 2px solid #000;
    border-radius: 20px;
}
.project-wrapper {
    font-size: 1em;
    line-height: 1.5;
    width: 90%;
    border: 2px solid #000;
    margin: 2.0rem auto;
    background-color:rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.projects{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
.headline{
    border: 2px solid #000;
}
.btn-project{
    margin: 0 0.5em;
    margin: 1em 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    width: 80%;
    height: 10%;
}
.image{
    margin: 1em;
    max-width: 500px;
    transition: 0.4s;
}
.description{
    padding: 2em;
}
.project-links{
    text-align: center;
}
h1{
    text-align: center;
}
p{
    font-size: 1.2rem;
}
@media (min-width: 900px) {
    .projects{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .btn-project{
    margin: 0 0.5em;
    margin: 1em 0.5em;
    padding: 1em 1.5em;
    font-size: 1em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    width: 30%;
    height: 75px;
    }
}
</style>