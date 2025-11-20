document.addEventListener("DOMContentLoaded", () => {

  fetch("/assets/certificates/certificates.json")
    .then(res => res.json())
    .then(files => {
      const grid = document.getElementById("researchGrid");

      files.forEach(file => {

        const card = document.createElement("div");
        card.classList.add("research-img-card");

        const name = file
          .replace(/\.(jpg|jpeg|png)$/i, "")
          .replace(/[_-]+/g, " ")
          .trim();

        card.innerHTML = `
          <img src="/assets/certificates/${file}" alt="${name}">
          <p>${name}</p>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to load certificates:", err);
      document.getElementById("researchGrid").innerHTML =
        "<p style='color:red'>Failed to load certificates.</p>";
    });

});
