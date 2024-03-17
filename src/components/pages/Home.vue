<template>
    <section>
        <base-card class="main-content">
            <base-card class='headline'>
                <h1>Tobias Tubandt</h1>
            </base-card>
            <!--
            <div class="picture-wrapper">
                <img class="profile-pic" src="../../../public/images/profile-pic.png">
            </div>
            -->
            <base-card class="intro">
                <h2>Welcome to my website</h2>
                <p> I am a physics graduate with a passion for programming. In the bachelor's programm, I had my first experiences with programming and data science.
                    Since then, I started my programming journey.<br>
                </p>
            </base-card>
        </base-card>
    </section>
</template>

<style scoped>
.main-content {
    background-color:rgba(255, 255, 255, 0.8);
    border: 4px solid rgba(255, 255, 255, 0);
}
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
.intro{
    font-size: 1em;
    line-height: 1.5;
    border: 2px solid #000;
    background-color:rgba(255, 255, 255, 0.8);
}
p{
    padding: 0.5rem;
}
.headline{
    text-align: center;
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