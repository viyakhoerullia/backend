module.exports = (sequelize, DataTypes) => {

    const diantar = sequelize.define("diantar", {

      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },

      id_transaksi: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
  
     patokan: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
  
      nomor_telepon: {
        type: DataTypes.STRING(15),
        allowNull: false
      }

    }, {

      sequelize,

      tableName: 'diantar',

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

  

    return diantar;

  }; 