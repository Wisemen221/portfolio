<template>
    <div class="contact_content_wrapper">
        <div class="content_container">
            <h1>Contact</h1>
            <div class="line_break"></div>
            <form class="contact_form" autocomplete="on" @submit.prevent="sendEmail">
                <input v-model="first_name" name="first_name" type="text" aria-label="First Name" aria-labelledby="First Name" placeholder="First Name" required>
                <br>
                <input v-model="last_name" name="last_name" type="text" aria-label="Last Name" aria-labelledby="Last Name" placeholder="Last Name" required>
                <br>
                <input v-model="email" name="email" type="email" aria-label="Email" aria-labelledby="Email" placeholder="Email" required>
                <br>
                <textarea v-model="message" name="message" aria-label="Message" aria-labelledby="Message" placeholder="Message Me" cols="30" rows="6" required></textarea>
                <br>
                <button class="contact_btn" type="submit" aria-label="Submit"><i class="fas fa-paper-plane"></i> Send</button>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactUs',
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_8chv6t8', 'template_0bkbgh3', e.target, 'user_3b3cBUCV3GsGHDxqSPZYc', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>