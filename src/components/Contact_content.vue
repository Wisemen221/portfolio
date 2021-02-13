<template>
    <div class="contact_content_wrapper">
        <div class="content_container">
            <h1>Contact</h1>
            <div class="line_break"></div>
            <form class="contact_form">
                <input type="text" aria-label="First Name" aria-labelledby="First Name" placeholder="First Name" required>
                <br>
                <input type="text" aria-label="Last Name" aria-labelledby="Last Name" placeholder="Last Name" required>
                <br>
                <input type="email" aria-label="Email" aria-labelledby="Email" placeholder="Email" required>
                <br>
                <textarea name="message" aria-label="Message" aria-labelledby="Message" placeholder="Message Me" cols="30" rows="6" required></textarea>
                <br>
                <button class="contact_btn" type="submit" aria-label="Submit"><i class="fas fa-paper-plane"></i> Send</button>
            </form>
        </div>
    </div>
</template>