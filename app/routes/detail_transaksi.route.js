module.exports = (app) => {
  const detail_transaksi = require('../controllers/detail_transaksi.controller');
  let router = require('express').Router();

  router.post('/', detail_transaksi.create);
  router.get('/', detail_transaksi.readAll);
  router.get('/:id', detail_transaksi.readById);
  router.put('/:id', detail_transaksi.update);
  router.delete('/:id', detail_transaksi.delete);

  app.use('/api/detail_transaksi', router);
};
