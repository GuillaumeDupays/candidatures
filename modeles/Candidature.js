const Sequelize = require('sequelize');
const db = require('../config/database')

const Candidature = db.define('candidature',{
    poste: {
        type: Sequelize.STRING
    },
    competences: {
        type: Sequelize.STRING
    },
    nom_entreprise: {
        type: Sequelize.STRING
    },
    url_annonce: {
        type: Sequelize.STRING
    },
    recruteur_email: {
        type: Sequelize.STRING
    }
});

module.exports = Candidature;