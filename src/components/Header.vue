<template>
    <header>
        <div class="container">
            <router-link to="/" title="Home">
                <img class="logo" src="../assets/images/whatsmy-logo.svg" alt="WhatsMy Logo">
            </router-link>
            <button id="menuToggle">
                <span class="menuLabel">Menu</span>
                <span class="menuIcon">
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
    </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
