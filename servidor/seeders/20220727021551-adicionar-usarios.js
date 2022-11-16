'use strict';
const {encrypt} = require("../criptografia")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe', senha:encrypt('123'), usuario: "doe" },
      { nome: 'Picolo', senha:encrypt('123'), usuario: "luiz" },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
