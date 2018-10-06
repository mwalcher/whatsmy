<template>
    <footer>
        <div class="footer-cta">
            <div class="footer-content">
                <div class="cta-container">
                    <form>
                        <p class="cta-title">Wondering what your home or vehicle is worth?</p>
                        <div class="micro-form">
                            <input type="email" placeholder="Enter your email address" />
                            <input type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
                <div class="footer-legal">
                    <p>© 2018 Mobials Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
        <div class="footer-navigation">
            <nav>
                <ul>
                    <li>
                        <router-link exact :to="routes.home" title="Hello">Hello</router-link>
                    </li>
                    <li>
                        <router-link exact :to="routes.howItWorks" title="How It Works">How It Works</router-link>
                    </li>
                    <li>
                        <router-link exact :to="routes.ourStory" title="Our Story">Our Story</router-link>
                    </li>
                    <li>
                        <router-link exact :to="routes.faq" title="FAQ">FAQ</router-link>
                    </li>
                    <li>
                        <router-link exact :to="routes.contact" title="Contact">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
import { routes } from "../../router";

export default {
  name: "Footer",
  data() {
    return {
      routes
    };
  }
};
</script>
