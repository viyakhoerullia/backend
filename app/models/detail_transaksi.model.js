module.exports = (sequelize, DataTypes) => {

  const detail_transaksi = sequelize.define("detail_transaksi", {

    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },

    id_transaksi: {
      type: DataTypes.BIGINT,
      allowNull: false,
     
  },

    id_sepeda: {
      type: DataTypes.BIGINT,
      allowNull: false
    },

    harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
  },
    {
      sequelize,

      tableName: 'detail_transaksi',

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

    }
  );

  //   detail_transaksi.associate = function(models) {
  //     detail_transaksi.belongsTo(models.transaksi, {
  //         foreignKey: 'id_transaksi',
  //         as: 'transaksi',
  //     });
  // };

    return detail_transaksi;

  }; 