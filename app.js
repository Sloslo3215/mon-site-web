const form = document.getElementById('rapportForm');
const listeRapports = document.getElementById('listeRapports');
const rapports = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titre = document.getElementById('titre').value;
  const contenu = document.getElementById('contenu').value;

  const rapport = {
    titre,
    contenu,
    date: new Date().toLocaleString()
  };

  rapports.unshift(rapport); // dernier rapport en haut
  afficherRapports();
  form.reset();
});

function afficherRapports() {
  listeRapports.innerHTML = '';
  rapports.forEach((r) => {
    listeRapports.innerHTML += `
      <div class="rapport">
        <strong>${r.titre}</strong> <br><em>${r.date}</em>
        <p>${r.contenu}</p>
      </div>
    `;
  });
}
