function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

//Making my contact form work with emailjs
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_hcpaq39",
    "template_71pimun",
    this
  ).then(
    function () {
      alert("Message sent successfully 🚀");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message ❌");
      console.log(error);
    }
  );
});
