<template>
    <header>
        <div class="header-container container">
            <router-link exact :to="routes.home" @click.native="$emit('closeNavigation')" title="Home">
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
                            <router-link exact :to="routes.home" @click.native="$emit('closeNavigation')" title="Hello">Hello</router-link>
                        </li>
                        <li>
                            <router-link exact :to="routes.howItWorks" @click.native="$emit('closeNavigation')" title="How It Works">How It Works</router-link>
                        </li>
                        <li>
                            <router-link exact :to="routes.ourStory" @click.native="$emit('closeNavigation')" title="Our Story">Our Story</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link exact :to="routes.contact" @click.native="$emit('closeNavigation')" title="Get In Touch">Get In Touch</router-link>
                        </li>
                        <li>
                            <router-link exact :to="routes.faq" @click.native="$emit('closeNavigation')" title="FAQ">FAQ</router-link>
                        </li>
                        <li>
                            <router-link exact :to="routes.privacy" @click.native="$emit('closeNavigation')" title="Privacy Policy">Privacy Policy</router-link>
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
