module.exports = (sequelize, DataTypes) => {

    const metode_pembayaran = sequelize.define("metode_pembayaran", {

      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },

      metode: {
        type: DataTypes.STRING(50),
        allowNull: true
      },//tanya
  
  
      nomor_telepon: {
        type: DataTypes.STRING(15),
        allowNull: false
      },

     nama: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
  
   

    }, {

      sequelize,

      tableName: 'metode_pembayaran',

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

  

    return metode_pembayaran;

  }; 