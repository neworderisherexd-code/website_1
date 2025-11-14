const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const browse = document.getElementById('browse');
const previewArea = document.getElementById('previewArea');

// 1️⃣ Load existing research papers from backend/data/papers.json
fetch("backend/data/papers.json")
  .then(response => response.json())
  .then(papers => {
    papers.forEach(paper => {
      const card = document.createElement("div");
      card.classList.add("paperCard");
      card.innerHTML = `
        <h3>${paper.title}</h3>
        <p><strong>Author:</strong> ${paper.author} | <strong>Year:</strong> ${paper.year}</p>
        <iframe src="${paper.file}" width="100%" height="400"></iframe>
      `;
      previewArea.appendChild(card);
    });
  })
  .catch(err => console.log("Error loading papers:", err));

// 2️⃣ Local drag-and-drop preview for testing
browse.onclick = () => fileInput.click();

['dragover', 'drop'].forEach(evt => {
  dropArea.addEventListener(evt, e => e.preventDefault());
});

dropArea.addEventListener('dragover', () => dropArea.classList.add('dragover'));
dropArea.addEventListener('dragleave', () => dropArea.classList.remove('dragover'));

dropArea.addEventListener('drop', e => {
  dropArea.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', e => handleFiles(e.target.files));

function handleFiles(files) {
  [...files].forEach(file => {
    if (file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        const card = document.createElement("div");
        card.classList.add("paperCard");
        card.innerHTML = `
          <h3>${file.name}</h3>
          <p>Uploaded: ${new Date().toLocaleString()}</p>
          <iframe src="${reader.result}" width="100%" height="400"></iframe>
        `;
        previewArea.appendChild(card);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload PDF files only.");
    }
  });
}
