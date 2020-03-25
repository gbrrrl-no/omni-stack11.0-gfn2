const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  //Indexação de todas as ONGs
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },
  //***************************************************

  //Registro de uma nova ONG no db
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id });
    }
  //*****************************************************
}