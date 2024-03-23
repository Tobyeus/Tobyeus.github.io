<template>
    <section id="navbar">
        <div id="navbar-links">
            <a href='https://github.com/Tobyeus'>
                <icon-button class="btn-contact">
                    <i class="fab fa-github"></i>
                </icon-button>
            </a>
            <a href='https://www.linkedin.com/in/tobias-tubandt-70aa061b5/'>
                <icon-button class="btn-contact">
                    <i class="fab fa-linkedin-in"></i>
                </icon-button>
            </a>
            <a href='https://twitter.com/Tobyeus90'>
                <icon-button class="btn-contact">
                    <i class="fab fa-twitter"></i>
                </icon-button>
            </a>
        </div>
        <div id="navbar-rechts">
            <router-link class="nav-link" to="/">
                <base-button class='btn-nav'>Home</base-button>
            </router-link>
            <!--
            <router-link class="nav-link" to="/about">
                <base-button class='btn-nav'>Contact</base-button>
            </router-link>
            -->
            <router-link class="nav-link" to="/projects">
                <base-button class='btn-nav'>Projects</base-button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
#navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.5em;
}
#navbar-rechts{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 50px;
}
#navbar-links{
    display: flex;
    flex-direction: row;
    align-content: center;
    border: 2px solid #fff;
    margin: 1rem;
    height: 50px;
}
.fab{
    font-size: 1.4rem;
}
.btn-contact{
    transition: 0.4s;
    color: #fff;
}
.btn-contact:hover{
    background-color: #fff;
    color: #000;
}
.btn-nav{
    margin: 0 0.5rem;
    padding: 0.8rem 0.8rem;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: #fff;
    border: 2px solid #fff;
}
@media (min-width: 650px) {
    #navbar {
        flex-direction: row;
        /* background-color: #171b24; */
        justify-content: space-between;
        width: auto;
        padding: 1.5em;
    }
    #navbar-rechts{
        height: 60px;
    }
    #navbar-links{
        border: 2px solid #fff;
        height: 60px;
    }
    .btn-nav{
        padding: 1em 1.5em;
        font-weight: 600;
        font-size: 1.2rem;
    }
    .fab{
    font-size: 2rem;
    }
}
</style>