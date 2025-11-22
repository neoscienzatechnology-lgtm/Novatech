// EmailJS integration for sending form emails
// This script should be included after EmailJS SDK is loaded
// https://www.emailjs.com/docs/examples/send-email-from-form/

(function(){
  // Replace with your EmailJS user ID and service/template IDs
  const EMAILJS_USER_ID = 'YOUR_EMAILJS_USER_ID';
  const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

  window.sendEmail = function(email) {
    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: 'neoscienzatechnology@gmail.com',
      from_email: email
    }, EMAILJS_USER_ID);
  };
})();
