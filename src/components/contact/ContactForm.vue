<template>
    <section class="contact-form">
        <div class="container">
            <form>
                <fieldset>
                    <legend>Let Us Know Who You Are:</legend>
                    <div class="input-container required">
                        <label for="contact-name">Full Name:</label>
                        <input id="contact-name" name="name" type="text" required />
                    </div>
                    <div class="input-container required">
                        <label for="contact-email">Email Address:</label>
                        <input id="contact-email" name="email" type="email" required />
                    </div>
                    <div class="input-container required">
                        <label for="contact-company">Company Name:</label>
                        <input id="contact-company" name="company" type="text" required />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>What Are You Interested In?</legend>
                    <div class="checkbox-grid">
                        <div class="checkbox-container">
                            <input id="contact-topic-one" name="topic-one" type="checkbox" />
                            <label for="contact-topic-one">Learning More</label>
                        </div>
                        <div class="checkbox-container">
                            <input id="contact-topic-two" name="topic-two" type="checkbox" />
                            <label for="contact-topic-two">Techinical Support</label>
                        </div>
                        <div class="checkbox-container">
                            <input id="contact-topic-three" name="topic-three" type="checkbox" />
                            <label for="contact-topic-three">Topic 3</label>
                        </div>
                        <div class="checkbox-container">
                            <input id="contact-topic-four" name="topic-four" type="checkbox" />
                            <label for="contact-topic-four">Topic 4</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Any More Thoughts?</legend>
                    <div class="input-container">
                        <label for="contact-message">Message:</label>
                        <textarea id="contact-message"></textarea>
                    </div>

                    <div class="submit-container">
                        <button type="submit" class="button">Get Started</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>
