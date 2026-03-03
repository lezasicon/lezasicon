document.addEventListener("DOMContentLoaded", () => {
    const availableGallery = document.getElementById("available-gallery");
    const pastGallery = document.getElementById("past-gallery");

    // Συναρτήση δημιουργίας κάρτας (Component)
    function createCard(icon) {
        const card = document.createElement("div");
        card.className = "card";

        // Κατασκευή διαδρομής εικόνας (υποθέτουμε φάκελο img/)
        const imageSrc = `img/${icon.image}`;

        const buyButton = icon.status === "available"
            ? `<a href="${icon.ebayLink}" target="_blank" class="buy-btn">Αγορά στο eBay</a>`
            : `<span class="sold-tag">Εξαντλήθηκε</span>`;

        card.innerHTML = `
            <img src="${imageSrc}" alt="${icon.title}" loading="lazy">
            <div class="card-content">
                <h3>${icon.title}</h3>
                <span class="price">${icon.price}</span>
                ${buyButton}
            </div>
        `;
        return card;
    }

    function loadIcons() {
        const icons = [
            {
                "title": "Αγία Ελένη",
                "price": "150€",
                "image": "agia-eleni.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy1",
                "status": "available"
            },
            {
                "title": "Αγία Αικατερίνη",
                "price": "120€",
                "image": "agia-aikaterini.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy2",
                "status": "available"
            },
            {
                "title": "Ιησούς Χριστός 1",
                "price": "180€",
                "image": "iisous-christos-1.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy3",
                "status": "available"
            },
            {
                "title": "Άγιος Νικόλαος",
                "price": "130€",
                "image": "agios-nikolaos.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy4",
                "status": "available"
            },
            {
                "title": "Παναγία 1",
                "price": "160€",
                "image": "panagia-1.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy5",
                "status": "available"
            },
            {
                "title": "Αγία Μαρίνα",
                "price": "140€",
                "image": "Αγία Μαρίνα.jpg",
                "ebayLink": "https://www.ebay.com/itm/dummy6",
                "status": "available"
            },
            {
                "title": "Άγιος Δημήτριος",
                "price": "Sold",
                "image": "agios-dimitrios.png",
                "ebayLink": "#",
                "status": "past"
            },
            {
                "title": "Αγία Παρασκευή",
                "price": "Sold",
                "image": "Αγία Παρασκευή.jpg",
                "ebayLink": "#",
                "status": "past"
            },
            {
                "title": "Άγιος Εφραίμ",
                "price": "Sold",
                "image": "agios-efraim-neas-makris.jpg",
                "ebayLink": "#",
                "status": "past"
            }
        ];
        
        // Καθαρισμός των container
        if (availableGallery) availableGallery.innerHTML = '';
        if (pastGallery) pastGallery.innerHTML = '';

        icons.forEach(icon => {
            const card = createCard(icon);
            if (icon.status === 'available') {
                if(availableGallery) availableGallery.appendChild(card);
            } else {
                if(pastGallery) pastGallery.appendChild(card);
            }
        });
    }

    loadIcons();
});