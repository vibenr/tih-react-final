import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
    <div className = "flex justify-center align-items-center p-8 "> 
      <div class="wrapper">
    <h2>CONTACT US</h2>
    <form action="" method="POST">
      <div class="form-group mt-2 p-2">
        <label for="name" >Full Name</label>
        <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" className = "mt-2" />
      </div>
      <div class="form-group mt-2">
        <label for="email">Email Address</label>
        <input type="email" name="Email" id="email" className = "mt-2" placeholder="email@domain.tld" required />
      </div>
      <div class="form-group mt-2">
        <label for="message">Message</label>
        <textarea name="Message" id="message" className = "mt-2" rows="5" placeholder="Type your message here...."></textarea>
      </div>
      <div class="form-group mt-2">
        <button type="submit" class="submit">Send</button>
      </div>
    </form>
  </div>
  </div>
    </>
  )
}

export default Contact
