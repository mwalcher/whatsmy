<template>
    <header>
        <div class="header-container container">
            <router-link to="/" title="Home">
                <img class="logo" :src="require('@/assets/images/whatsmy-logo.svg')" alt="WhatsMy Logo">
            </router-link>
            <button id="menuToggle" @click="$emit('toggleNavigation')">
                <span class="menuLabel">Menu</span>
                <span class="menuIcon">
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
        <div class="navigation">
            <div class="container">
                <nav>
                    <ul class="main-navigation">
                        <li>
                            <router-link to="/" title="Hello">Hello</router-link>
                        </li>
                        <li>
                            <router-link to="/" title="How It Works">How It Works</router-link>
                        </li>
                        <li>
                            <router-link to="/" title="Our Story">Our Story</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link to="/" title="Get In Touch">Get In Touch</router-link>
                        </li>
                        <li>
                            <router-link to="/" title="FAQ">FAQ</router-link>
                        </li>
                        <li>
                            <router-link to="/" title="Privacy Policy">Privacy Policy</router-link>
                        </li>
                    </ul>
                    <p class="copyright">© 2018 Mobials Inc.</p>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
