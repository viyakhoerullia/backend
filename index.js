const express = require("express")
const cors = require("cors")

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models")

// Sinkronkan model dengan database
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database & tables synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });


// routes
app.get("/test", (req, res) => {
  console.log(req.body);
     const data ={
      "name":"kelompok 1",
      "massage":"hello world",
    }
    res.json(req.body);
    

//logging
res.json(data);
console.log(data);
console.error("salah");

});

//set template engine
app.set('view engine', 'ejs');

//handling 404 - route not found
app.use((req,res, next) => {
  res.status(404).render('not found', { url : req.originalUrl});
});

// secured routes
require("./app/routes/detail_transaksi.route.js")(app);
require("./app/routes/kategori.route")(app);
require("./app/routes/peserta.route.js")(app);
require("./app/routes/produk.route")(app);
require("./app/routes/transaksi.route")(app);
require("./app/routes/web.js")(app);
require("./app/routes/metode_pembayaran.route.js")(app);
require("./app/routes/diantar.route.js")(app);

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});