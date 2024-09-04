module.exports = (app) => {
    const metode_pembayaran = require('../controllers/metode_pembayaran.controller');
    let router = require('express').Router();

    // // Debugging
    // console.log('metode_pembayaran:', metode_pembayaran);
    // console.log('metode_pembayaran.create:', metode_pembayaran.create);
    // console.log('metode_pembayaran.readAll:', metode_pembayaran.readAll);
    // console.log('metode_pembayaran.readById:', metode_pembayaran.readById);
    // console.log('metode_pembayaran.update:', metode_pembayaran.update);
    // console.log('metode_pembayaran.delete:', metode_pembayaran.delete);

    // if (!metode_pembayaran.create || !metode_pembayaran.readAll || !metode_pembayaran.readById || !metode_pembayaran.update || !metode_pembayaran.delete) {
    //     throw new Error('Fungsi controller tidak ditemukan!');
    // }

    router.post('/', metode_pembayaran.create);
    router.get('/', metode_pembayaran.readAll);
    router.get('/:id', metode_pembayaran.readById);
    router.put('/:id', metode_pembayaran.update);
    router.delete('/:id', metode_pembayaran.delete);

    app.use('/api/metode_pembayaran', router);
};

