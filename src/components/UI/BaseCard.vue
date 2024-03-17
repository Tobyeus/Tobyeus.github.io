<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background-color:rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.75rem;
    margin: 1.5rem auto;
    width: 40rem;
    max-width: 80%;
}
</style>