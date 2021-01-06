const Candidature = require('../modeles/Candidature');

module.exports = {

    ajouterCandidature (req, res) {
        const candidature = new Candidature(req.body);
        return candidature
            .save()
            .then(() => res.status(201).json({ message: 'Candidature ajoutée !'}))
            .catch((error) => res.status(400).send(error));
    },
    afficherListeCandidatures (req, res) {
        Candidature.findAll()
            .then(candidatures => res.render('candidatures', { candidatures }))
            .catch(err => res.render('erreur', {error: err}));
    },
    afficherSuiviCandidature (req, res) {
        const id = req.params.id
        Candidature.findByPk(id)
            .then(candidature => res.status(200)
            .render('suivi-candidature', { candidature }))
            .catch(err => res.status(500).json({
                message: `candidature avec l\'id ${id} non trouvé`,
                error: err
            }));
    }
}
