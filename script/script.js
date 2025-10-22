
  // Find all elements with the data-include attribute
  document.querySelectorAll('[data-include]').forEach(el => {

    // Read the file name from that attribute
    const file = el.getAttribute('data-include');

    // Fetch (download) the file
    fetch(file)
      .then(response => response.text()) // Convert to plain text (HTML)
      .then(data => {
        // Replace the element with the fetched HTML
        el.outerHTML = data;
      })
      .catch(err => console.error('Include failed:', file, err));
  });


   // Initialize EmailJS
    (function(){
      emailjs.init("QcA2HC3hu74MPAGAg"); // ← Replace with your Public Key
    })();

    // Form submission
    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const status = document.getElementById("status");
      status.innerText = "Sending...";

      emailjs.sendForm("service_h178e1b", "template_ttmiwe3", this)
        .then(() => {
          status.innerText = "✅ Message sent successfully!";
          this.reset();
        }, (err) => {
          status.innerText = "❌ Failed to send message: " + err.text;
        });
    });