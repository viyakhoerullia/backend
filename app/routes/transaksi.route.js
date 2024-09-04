module.exports = (app) => {
    const transaksi = require('../controllers/transaksi.controller'); // Pastikan ini sudah dihubungkan ke controller yang benar
    const router = require('express').Router();
  
    // Debugging log jika diperlukan
    console.log('transaksi:', transaksi);
  
    if (!transaksi.create || !transaksi.readAll || !transaksi.readById || !transaksi.update || !transaksi.delete) {
      throw new Error('Fungsi controller tidak ditemukan!');
    }
  
    router.post('/', transaksi.create);
    router.get('/', transaksi.readAll);
    router.get('/:id', transaksi.readById);
    router.put('/:id', transaksi.update);
    router.delete('/:id', transaksi.delete);
  
    app.use('/api/transaksi', router);
  };
  