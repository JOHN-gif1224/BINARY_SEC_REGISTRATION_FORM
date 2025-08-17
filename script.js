// Remplacez 'YOUR_PUBLIC_KEY' par votre clé publique EmailJS
// Remplacez 'YOUR_SERVICE_ID' et 'YOUR_TEMPLATE_ID' par vos identifiants EmailJS

// Initialisation d'EmailJS
(function () {
  emailjs.init("e36mIRgmUB3tiUKym");
})();

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère le bouton de soumission
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Envoi en cours...";

  // Récupère les données du formulaire
  const formData = {
    name: document.getElementById("name").value,
    prenom: document.getElementById("prenom").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("number").value,
    niveau: document.getElementById("niveau").value,
    motivation: document.getElementById("motivation").value,
  };

  // Envoi de l'email
  emailjs
    .send("service_1ah5aai", "template_jlv79zc", formData)
    .then((response) => {
      console.log("Email envoyé avec succès!", response);
      alert("Votre inscription a été envoyée avec succès!");
      document.querySelector("form").reset(); // Réinitialise le formulaire
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "S'inscrire";
    });
}
