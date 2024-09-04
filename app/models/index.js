//mulai kembali dari index models

console.log(__dirname);
const pesertaDB = require('../../config/peserta.db.js');


const Sequelize = require('sequelize');

const sequelize = new Sequelize(pesertaDB.DB, pesertaDB.USER, pesertaDB.PASSWORD, {

  host: pesertaDB.HOST,

  dialect: pesertaDB.dialect,

  operatorsAliases: false,
});

// membuat module

const db = {};

// sequelize

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
// model

db.peserta = require("./peserta.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
db.produk = require("./produk.model.js")(sequelize, Sequelize);
db.transaksi = require("./transaksi.model.js")(sequelize, Sequelize);
db.kategori = require("./kategori.model.js")(sequelize, Sequelize);
db.detail_transaksi = require("./detail_transaksi.model.js")(sequelize, Sequelize);
db.metode_pembayaran = require("./metode_pembayaran.model.js")(sequelize, Sequelize);
db.diantar = require("./diantar.model.js")(sequelize, Sequelize);


module.exports = db;