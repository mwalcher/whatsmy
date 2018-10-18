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
                </fieldset>

                <fieldset>
                    <legend>Any More Thoughts?</legend>
                    <div class="input-container">
                        <label for="contact-message">Message:</label>
                        <textarea id="contact-message"></textarea>
                    </div>

                    <div class="submit-container">
                        <input class="button" type="submit" value="Get Started" />
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
