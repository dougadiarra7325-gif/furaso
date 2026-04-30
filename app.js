// Base de données des pharmacies avec leurs informations
const pharmaciesDB = {
    "Pharmacie Furaso": { lien: "index.html", localisation: "#" },
    "Pharmacie Kene Santé": { lien: "index.html", localisation: "#" },
    "Pharmacie Belco Touré": { lien: "pharmabelcotoure.html", localisation: "https://maps.app.goo.gl/GMKS1BDPwA9Yys1S9?g_st=aw" },
    "Pharmacie Al Fhirdaouss": { lien: "donneepharFHIRDAOUSS.html", localisation: "https://maps.app.goo.gl/Rdx47rcWE8ZoFdVa8?g_st=aw" },
    "Pharmacie Danaya": { lien: "index.html", localisation: "#" }
};

// Base de données des médicaments
const medicamentsDB = [
    // Pharmacie Furaso
    { nom: "Paracétamol", categorie: "Antalgique", description: "Soulage la douleur et la fièvre", pharmacie: "Pharmacie Furaso" },
    { nom: "Doliprane", categorie: "Antalgique", description: "Soulage la douleur et la fièvre", pharmacie: "Pharmacie Furaso" },
    { nom: "Spasfon", categorie: "Antispasmodique", description: "Soulage les douleurs abdominales", pharmacie: "Pharmacie Furaso" },
    { nom: "Zithromax", categorie: "Antibiotique", description: "Antibiotique macrolide", pharmacie: "Pharmacie Furaso" },
    { nom: "Rhinocort", categorie: "Décongestionnant", description: "Traitement du rhume", pharmacie: "Pharmacie Furaso" },
    { nom: "Efferalgan", categorie: "Antalgique", description: "Soulage la douleur et la fièvre", pharmacie: "Pharmacie Furaso" },
    { nom: "Maxilase", categorie: "Anti-inflammatoire", description: "Traitement des inflammations buccales", pharmacie: "Pharmacie Furaso" },
    { nom: "Mopral", categorie: "Anti-ulcéreux", description: "Traitement des ulcères", pharmacie: "Pharmacie Furaso" },
    
    // Pharmacie Kene Santé
    { nom: "Ibuprofène", categorie: "Anti-inflammatoire", description: "Anti-inflammatoire et antidouleur", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Nurofen", categorie: "Anti-inflammatoire", description: "Anti-inflammatoire non stéroïdien", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Imodium", categorie: "Anti-diarrhéique", description: "Traitement des diarrhées aiguës", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Gaviscon", categorie: "Anti-acide", description: "Traitement des brûlures d'estomac", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Otrivin", categorie: "Décongestionnant", description: "Débouche le nez", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Flector", categorie: "Anti-inflammatoire", description: "Traitement des douleurs locales", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Strepsils", categorie: "Antiseptique", description: "Traitement des maux de gorge", pharmacie: "Pharmacie Kene Santé" },
    { nom: "Naquessa", categorie: "Contraceptif", description: "Pilule contraceptive", pharmacie: "Pharmacie Kene Santé" },
    
    // Pharmacie Belco Touré
    { nom: "Amoxicilline", categorie: "Antibiotique", description: "Antibiotique à large spectre", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Augmentin", categorie: "Antibiotique", description: "Antibiotique combiné", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Efferalgan", categorie: "Antalgique", description: "Soulage la douleur et la fièvre", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Motilium", categorie: "Anti-nauséeux", description: "Traitement des nausées et vomissements", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Polaramine", categorie: "Antihistaminique", description: "Traitement des allergies", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Clamoxyl", categorie: "Antibiotique", description: "Antibiotique de la famille des pénicillines", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Zinc", categorie: "Complément alimentaire", description: "Complément en zinc", pharmacie: "Pharmacie Belco Touré" },
    { nom: "Megalium", categorie: "Anti-acide", description: "Traitement des brûlures d'estomac", pharmacie: "Pharmacie Belco Touré" },
    
    // Pharmacie Al Fhirdaouss
    { nom: "Aspirine", categorie: "Antalgique", description: "Soulage la douleur et fluidifie le sang", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Smecta", categorie: "Anti-diarrhéique", description: "Traitement des diarrhées", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Advil", categorie: "Anti-inflammatoire", description: "Anti-inflammatoire et antidouleur", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Fervex", categorie: "Antalgique", description: "Traitement des symptômes grippaux", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Aerius", categorie: "Antihistaminique", description: "Traitement des allergies", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Nifluril", categorie: "Anti-inflammatoire", description: "Anti-inflammatoire non stéroïdien", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Toplexil", categorie: "Antitussif", description: "Traitement de la toux", pharmacie: "Pharmacie Al Fhirdaouss" },
    { nom: "Mucolator", categorie: "Mucolytique", description: "Fluidifiant bronchique", pharmacie: "Pharmacie Al Fhirdaouss" },
    
    // Pharmacie Danaya
    { nom: "Céton", categorie: "Antalgique", description: "Soulage la douleur", pharmacie: "Pharmacie Danaya" },
    { nom: "Quinine", categorie: "Antipaludéen", description: "Traitement du paludisme", pharmacie: "Pharmacie Danaya" },
    { nom: "Fansidar", categorie: "Antipaludéen", description: "Traitement préventif du paludisme", pharmacie: "Pharmacie Danaya" },
    { nom: "Coartem", categorie: "Antipaludéen", description: "Traitement du paludisme", pharmacie: "Pharmacie Danaya" },
    { nom: "Flagyl", categorie: "Antibiotique", description: "Antibiotique antiparasitaire", pharmacie: "Pharmacie Danaya" },
    { nom: "Erytrocine", categorie: "Antibiotique", description: "Antibiotique macrolide", pharmacie: "Pharmacie Danaya" },
    { nom: "Biseptine", categorie: "Antiseptique", description: "Désinfectant", pharmacie: "Pharmacie Danaya" },
    { nom: "Dacryoserum", categorie: "Collyre", description: "Larmes artificielles", pharmacie: "Pharmacie Danaya" }
];

// Fonction de recherche
function rechercherMedicament(terme) {
    const termeLower = terme.toLowerCase().trim();
    if (termeLower === "") return [];
    
    return medicamentsDB.filter(med => 
        med.nom.toLowerCase().includes(termeLower) ||
        med.categorie.toLowerCase().includes(termeLower) ||
        med.description.toLowerCase().includes(termeLower)
    );
}

// Afficher les résultats - juste la pharmacie concernée
function afficherResultats(resultats) {
    const container = document.getElementById('results-container');
    if (!container) return;
    
    container.innerHTML = "";
    
    if (resultats.length === 0) {
        container.innerHTML = '<div class="no-results">Aucun médicament trouvé</div>';
        return;
    }
    
    // Grouper par pharmacie et afficher seulement une pharmacie par médicament
    const pharmaciesAffichees = new Set();
    
    resultats.forEach(med => {
        if (pharmaciesAffichees.has(med.pharmacie)) return;
        pharmaciesAffichees.add(med.pharmacie);
        
        const pharmaInfo = pharmaciesDB[med.pharmacie] || { lien: "index.html", localisation: "#" };
        const resultat = document.createElement('div');
        resultat.className = 'pharmacie-resultat-inline';
        resultat.innerHTML = `
            <div class="pharma-info">
                <span class="pharma-nom">💊 ${med.nom}</span>
                <span class="pharma-separator">→</span>
                <span class="pharma-nom-final">📍 ${med.pharmacie}</span>
            </div>
            <div class="pharmacie-actions">
                <a href="${pharmaInfo.lien}" class="btn-voir">Voir plus</a>
                <a href="${pharmaInfo.localisation}" target="_blank" class="btn-localisation">📍</a>
            </div>
        `;
        container.appendChild(resultat);
    });
}

// Gestionnaire de recherche
document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Recherche de médicaments
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const resultats = rechercherMedicament(searchInput.value);
            afficherResultats(resultats);
        });
        
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const resultats = rechercherMedicament(searchInput.value);
                afficherResultats(resultats);
            } else {
                // Recherche en temps réel (avec debounce)
                clearTimeout(searchInput.debounceTimer);
                searchInput.debounceTimer = setTimeout(() => {
                    const resultats = rechercherMedicament(searchInput.value);
                    afficherResultats(resultats);
                }, 300);
            }
        });
    }
});
