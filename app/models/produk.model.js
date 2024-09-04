module.exports = (sequelize, DataTypes) => {
  

    const produk = sequelize.define("produk", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },

          id_kategori: {
            autoIncrement: false,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },


          kode_sepeda: {
            type: DataTypes.STRING,
            allowNull: false
        },

        status_sepeda: {
          type: DataTypes.STRING,
          allowNull: false
      },


        //   harga:{
        //     type: DataTypes.DECIMAL(10, 2), //1.000.000.000,99 || 10.000.000,99
        //     allowNull :false,
        //     primaryKey:false
        //   },

        //   merk_sepeda: {
        //     type: DataTypes.STRING, // Menambahkan kolom merk_sepeda
        //     allowNull: true // Anda dapat mengatur allowNull sesuai kebutuhan
        // },
          
          
      },{
        sequelize,

        tableName: 'produk',
  
        timestamps: true,
  
        indexes: [
  
          {
  
            name: "PRIMARY",
  
            unique: true,
  
            using: "BTREE",
  
            fields: [
  
              { name: "id" },
  
            ]
  
          },
  
        ]
  
      });

      // produk.associate = function(models) {
      //   produk.hasMany(models.detail_transaksi, {
      //     foreignKey: 'id_produk',
      //     as: 'detail_transaksi'
      //   });
      // };
    
  
      return produk;
  
    }; 