const Sequelize = require('sequelize');
const db = require('../config/database')

const Recruteur = db.define('recruteur',{
   /* societe: {
        type: Sequelize.STRING
    },*/
    nom: {
        type: Sequelize.STRING
    },
    prenom: {
        type: Sequelize.STRING
    },
    fonction: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    profil_linkedin: {
        type: Sequelize.STRING
    }
});

module.exports = Recruteur;