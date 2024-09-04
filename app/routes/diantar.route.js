module.exports = (app) => {
    const diantar = require('../controllers/diantar.controller');
    let router = require('express').Router();

    // // Debugging
    // console.log('diantar:', diantar);
    // console.log('diantar.create:', diantar.create);
    // console.log('diantar.readAll:', diantar.readAll);
    // console.log('diantar.readById:', diantar.readById);
    // console.log('diantar.update:', diantar.update);
    // console.log('diantar.delete:', diantar.delete);

    // if (!diantar.create || !diantar.readAll || !diantar.readById || !diantar.update || !diantar.delete) {
    //     throw new Error('Fungsi controller tidak ditemukan!');
    // }

    router.post('/', diantar.create);
    router.get('/', diantar.readAll);
    router.get('/:id', diantar.readById);
    router.put('/:id', diantar.update);
    router.delete('/:id', diantar.delete);

    app.use('/api/diantar', router);
};

