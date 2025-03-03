// Fonction pour gérer l'envoi du formulaire de contact
function handleContactFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name && email && message) {
        alert('Merci pour votre message, ' + name + '. Nous vous répondrons bientôt.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
}

// Ajouter un gestionnaire d'événements pour le formulaire de contact
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    // Fonction pour gérer l'envoi du formulaire d'aide
    function handleHelpFormSubmit(event) {
        event.preventDefault();
        const question = document.getElementById('help-question').value;

        if (question) {
            alert('Merci pour votre question. Nous vous répondrons bientôt.');
            document.getElementById('help-form').reset();
        } else {
            alert('Veuillez remplir le champ de la question.');
        }
    }

    // Ajouter un gestionnaire d'événements pour le formulaire d'aide
    document.addEventListener('DOMContentLoaded', function () {
        const helpForm = document.getElementById('help-form');
        if (helpForm) {
            helpForm.addEventListener('submit', handleHelpFormSubmit);
        }
    });

    // Fonction pour gérer l'envoi du formulaire d'ajout
    function handleAddFormSubmit(event) {
        event.preventDefault();
        const itemName = document.getElementById('add-item-name').value;
        const itemDescription = document.getElementById('add-item-description').value;

        if (itemName && itemDescription) {
            alert('L\'élément ' + itemName + ' a été ajouté avec succès.');
            document.getElementById('add-form').reset();
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    }

    // Ajouter un gestionnaire d'événements pour le formulaire d'ajout
    document.addEventListener('DOMContentLoaded', function () {
        const addForm = document.getElementById('add-form');
        if (addForm) {
            addForm.addEventListener('submit', handleAddFormSubmit);
        }
    });

    // Fonction pour gérer l'envoi du formulaire de collection
    function handleCollectionFormSubmit(event) {
        event.preventDefault();
        const collectionName = document.getElementById('collection-name').value;
        const collectionDescription = document.getElementById('collection-description').value;

        if (collectionName && collectionDescription) {
            alert('La collection ' + collectionName + ' a été ajoutée avec succès.');
            document.getElementById('collection-form').reset();
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    }

    // Ajouter un gestionnaire d'événements pour le formulaire de collection
    document.addEventListener('DOMContentLoaded', function () {
        const collectionForm = document.getElementById('collection-form');
        if (collectionForm) {
            collectionForm.addEventListener('submit', handleCollectionFormSubmit);
        }
    });

    // Fonction pour gérer l'envoi du formulaire de critiques
    function handleReviewFormSubmit(event) {
        event.preventDefault();
        const reviewTitle = document.getElementById('review-title').value;
        const reviewContent = document.getElementById('review-content').value;

        if (reviewTitle && reviewContent) {
            alert('Merci pour votre critique. Elle a été soumise avec succès.');
            document.getElementById('review-form').reset();
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    }

    // Ajouter un gestionnaire d'événements pour le formulaire de critiques
    document.addEventListener('DOMContentLoaded', function () {
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
            reviewForm.addEventListener('submit', handleReviewFormSubmit);
        }
    });

    // Vérifier si l'utilisateur est connecté
    document.addEventListener('DOMContentLoaded', function () {
        const userEmail = sessionStorage.getItem('userEmail');
        if (!userEmail) {
            alert('Vous devez être connecté pour accéder à cette page.');
            window.location.href = 'login.html';
        } else {
            // Remplacer les boutons de connexion et de création de compte par un bouton de déconnexion
            const authButtons = document.getElementById('auth-buttons');
            authButtons.innerHTML = '<li class="nav-item"><a class="nav-link" href="#" id="logout-button">Déconnexion</a></li>';

            // Ajouter un gestionnaire d'événements pour le bouton de déconnexion
            document.getElementById('logout-button').addEventListener('click', function () {
                sessionStorage.clear();
                window.location.href = 'login.html';
            });

        }
    })
});
