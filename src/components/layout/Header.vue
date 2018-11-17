<template>
    <header>
        <div class="header-container container">
            <div class="content-container">
                <router-link class="logo" exact :to="routes.home" @click.native="$emit('closeNavigation')" title="Home">
                    <img :src="require('@/assets/images/whatsmy-logo.svg')" alt="WhatsMy Logo">
                </router-link>
                <div class="header-cta-container">
                    <button class="menuToggle" @click="$emit('toggleNavigation')">
                        <span class="menuIcon">
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <a href="#" class="button" title="Login">Login</a>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="container">
                <nav>
                    <ul class="main-navigation">
                        <li>
                            <router-link class="line-hover" exact :to="routes.home" @click.native="$emit('closeNavigation')" title="Hello">Hello</router-link>
                        </li>
                        <li>
                            <router-link class="line-hover" exact :to="routes.howItWorks" @click.native="$emit('closeNavigation')" title="How It Works">How It Works</router-link>
                        </li>
                        <li>
                            <router-link class="line-hover" exact :to="routes.ourStory" @click.native="$emit('closeNavigation')" title="Our Story">Our Story</router-link>
                        </li>
                        <li>
                            <router-link class="line-hover" exact :to="routes.contact" @click.native="$emit('closeNavigation')" title="Get In Touch">Get In Touch</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link class="line-hover" exact :to="routes.faq" @click.native="$emit('closeNavigation')" title="FAQ">FAQ</router-link>
                        </li>
                        <li>
                            <router-link class="line-hover" exact :to="routes.privacy" @click.native="$emit('closeNavigation')" title="Privacy Policy">Privacy Policy</router-link>
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
