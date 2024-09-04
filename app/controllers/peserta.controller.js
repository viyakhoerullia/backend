const db = require('../models');
const path = require ( "path");
const multer = require ("multer");
const peserta = db.peserta


exports.create = async (req, res) => { 
    console.log(req.body)
     const data_peserta = {
      id: req.body.id,
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      nomor_telepon: req.body.nomor_telepon,
    }
    console.log("data_peserta",data_peserta)  
      await peserta.create({
        id: req.body.id,
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password,
        nomor_telepon: req.body.nomor_telepon,
      
}) //menyimpan data_peserta ke table peserta
      .then(data => {
        res.send({
          message: "Data was insert successfully."
        })
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating data."
        });
      })
    }

    exports.readAll = async (req, res) => {
        await peserta.findAll()
        .then(data => {
          res.send(data);
        })
      
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving data."
          });
        });
      }
    
      exports.readById = async (req, res) =>{
        const id = req.params.id
        await peserta.findOne({where: { id: id}})
        .then(data => {
          res.send(data);
        })
    
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving data."
          });
        });
    }

    exports.update = async (req, res) => {
        const id = req.params.id
        await peserta.update(req.body, { where: { id: id}})
        .then(num => {
            num == 1 ? res.send({
              message: "Data was updated successfully."
            }) : res.send({
              message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
            });
        })
      
        .catch(err => {
          res.status(500).send({
            message: `Error updating Data with id=${id}`,
            error: err
          })
        })
      }

      exports.delete = async (req, res) => {
        const id = req.params.id
        await peserta.destroy({ where: { 
          id: id
      }})
      
      .then(num => {
        num == 1 ? res.send({
          message: "Data was deleted successfully."
        }) : res.send({
          message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
        });
      })
      
        .catch(err => {
          res.status(500).send({
            message: `Error deleting Data with id=${id}`,
            error: err
          })
        })
      }

     