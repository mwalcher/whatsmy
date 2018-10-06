<template>
    <header>
        <div class="header-container container">
            <router-link :to="routes.home" title="Home">
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
                            <router-link :to="routes.home" title="Hello">Hello</router-link>
                        </li>
                        <li>
                            <router-link :to="routes.howItWorks" title="How It Works">How It Works</router-link>
                        </li>
                        <li>
                            <router-link :to="routes.ourStory" title="Our Story">Our Story</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link :to="routes.contact" title="Get In Touch">Get In Touch</router-link>
                        </li>
                        <li>
                            <router-link :to="routes.faq" title="FAQ">FAQ</router-link>
                        </li>
                        <li>
                            <router-link :to="routes.privacy" title="Privacy Policy">Privacy Policy</router-link>
                        </li>
                    </ul>
                    <p class="copyright">© 2018 Mobials Inc.</p>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { routes } from "../../router";

export default {
  name: "Header",
  data() {
    return {
      routes
    };
  }
};
</script>
