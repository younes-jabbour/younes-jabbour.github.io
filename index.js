function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_plb0z2e";
  const templateID = "template_5a9uuyg";

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent successfully!");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("There was an error sending your message. Please try again later.");
    }
  );
}
