<template>
    <footer>
        <div class="footer-cta">
            <div class="footer-content">
                <div class="cta-container">
                    <form>
                        <p class="cta-title">Wondering what your home or vehicle is worth?</p>
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
                        <router-link to="/" title="Hello">Hello</router-link>
                    </li>
                    <li>
                        <router-link to="/" title="How It Works">How It Works</router-link>
                    </li>
                    <li>
                        <router-link to="/" title="Our Story">Our Story</router-link>
                    </li>
                    <li>
                        <router-link to="/" title="FAQ">FAQ</router-link>
                    </li>
                    <li>
                        <router-link to="/" title="Contact">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
