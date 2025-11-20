const certificateFiles = [
  "C4C.jpg",
  "C5A-1.jpg",
  "CERTIFICATE 24-syllabus Design.jpg",
  "certificate RDK.jpg",
  "Certificate_of_Participation-Certificate.jpg",
  "Certificate-Foresight+and+Formulation.jpg",
  "KALE RAVIKANT DNYANESHWAR RE.jpg",
  "PROF-RAVIKANT-KALE-Moodle-Test.jpg",
  "Prof. RAVIKANT KALE_siph_Publication.jpg",
  "Ravikant Kale_page-0001.jpg",
  "RAVIKANT_DNYANESHWAR_KALE (2).jpg"
];

const grid = document.getElementById("researchGrid");


function cleanName(str) {
  return str
    .replace(/\.(jpg|png|jpeg)$/i, "")     
    .replace(/[_\-]+/g, " ")                 
    .replace(/\s+/g, " ")                    
    .trim();                                 
}


certificateFiles.forEach(file => {
  const card = document.createElement("div");
  card.classList.add("research-img-card");

  card.innerHTML = `
    <img src="assets/certificates/${file}" alt="${file}">
    <p>${cleanName(file)}</p>
  `;

  grid.appendChild(card);
});
