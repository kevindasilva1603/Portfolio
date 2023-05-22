<?php
    // Vérifier si le formulaire a été soumis
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Adresse e-mail où envoyer le message
        $destinataire = "kevinsilva1603@gmail.com";

        // Sujet de l'e-mail
        $sujet = "Nouveau message depuis le formulaire de contact";

        // Construire le corps du message
        $corps_message = "Nom : " . $nom . "\n";
        $corps_message .= "Email : " . $email . "\n";
        $corps_message .= "Message : " . $message;

        // En-têtes de l'e-mail
        $entetes = "From: " . $email . "\r\n";
        $entetes .= "Reply-To: " . $email . "\r\n";

        // Envoyer l'e-mail
        if (mail($destinataire, $sujet, $corps_message, $entetes)) {
            echo "Votre message a été envoyé avec succès.";
        } else {
            echo "Une erreur s'est produite lors de l'envoi du message.";
        }
    }
    ?>