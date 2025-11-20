document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const mailtoLink =
        `mailto:ravikant.kale@pcu.edu.in` +
        `?subject=Message from ${encodeURIComponent(name)}` +
        `&body=` +
        encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

    window.location.href = mailtoLink;

    alert("Opening your email app…");
});
