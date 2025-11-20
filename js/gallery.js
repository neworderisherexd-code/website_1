const galleryImages = [
  "Ravikant_Kale.jpg" 
];


const whatsappFiles = [
  "WhatsApp Image 2025-11-19 at 12.22.37_ef0b2881.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.16_6351753a.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.17_2ce036fa.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.19_b222779d.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.21_6464b8f4.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.31_6feb16f2.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.32_dd3f8aa3.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.32_f87b2ae2.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.38_547d4af4.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.39_b584848e4.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.53_f06c3034.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.53_b44dfff.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.56_6931c5d8.jpg",
  "WhatsApp Image 2025-11-19 at 12.23.57_d2b2601f.jpg"
];

galleryImages.push(...whatsappFiles);

const grid = document.getElementById("galleryGrid");


galleryImages.forEach(filename => {
  const img = document.createElement("img");
  img.src = `assets/images/${filename}`;
  img.alt = filename;
  grid.appendChild(img);
});
