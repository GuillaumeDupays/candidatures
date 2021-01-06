const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Candidature = require('../modeles/Candidature');

//Afficher le formulaire d'ajout de candidature
router.get('/ajouter', (req, res) => res.render('ajouter'));

const candidatureCtrl = require('../controleurs/candidatures');

//Suivi de chaque candidature
router.get('/:id', candidatureCtrl.afficherSuiviCandidature);
//Liste des candidatures
router.get('/', candidatureCtrl.afficherListeCandidatures);
//Ajouter une candidature
router.post('/ajouter', candidatureCtrl.ajouterCandidature);

//Ajouter une candidature
/*router.post('/ajouter', (req, res) => {
    let { poste, competences, nom_entreprise, url_annonce, recruteur_email } = req.body;
    let errors = [];

    if(!poste) {
        errors.push({ text: 'Ajouter le poste s\'il vous plaît'});
    }
    if(!competences) {
        errors.push({ text: 'Ajouter les compétences requises pour le poste s\'il vous plaît'});
    }
    if(!nom_entreprise) {
        errors.push({ text: 'Ajouter le nom de l\'entreprise s\'il vous plaît'});
    }
    
    //Check errors
    if(errors.length > 0) {
        res.render('ajouter', {
            errors,
            poste,
            competences,
            nom_entreprise
        });
    } else {
        //Insert into table
        Candidature.create({
            poste,
            competences,
            nom_entreprise,
            url_annonce,
            recruteur_email
        })
        .then(candidature => res.redirect('/candidatures'))
        .catch(err => console.log(err));
    }
});
*/

module.exports = router;