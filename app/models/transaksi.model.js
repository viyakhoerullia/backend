// transaksi.model.js
module.exports = (sequelize, DataTypes) => {
  const Transaksi = sequelize.define("transaksi", {

    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },

    metode_pembayaran: {
      type: DataTypes.ENUM,
      values: ['shopee pay', 'brimo', 'dana', 'ovo', 'gopay'],
      allowNull: false
    },

    jumlah_sepeda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    durasi: {
      type: DataTypes.STRING(10), // durasi dalam jam atau menit, sesuaikan dengan kebutuhan
      allowNull: false
    },

    tanggal_penyewaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    tanggal_sewa: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    tanggal_pengembalian: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    dari_jam: {
      type: DataTypes.TIME,
      allowNull: false
    },

    sampai_jam: {
      type: DataTypes.TIME,
      allowNull: false
    },

    dijemput_diantar: {
      type: DataTypes.ENUM,
      values: ['dijemput', 'diantar'],
      allowNull: false
    },

    total_harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    // table metode pembayaran : id, metode,nomor, nama 
    // 1 shoppay 0978235485 restu 
    // 2 bni 09723737228 restu atika 
    // id_metode_pembayaran:{
    //   type : DataTypes.STRING(5),
    //   allowNull:true
    // }

    bukti_transaks: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,

    tableName: 'transaksi',

    timestamps: true,

    indexes: [

      {

        name: "PRIMARY",

        unique: true,

        using: "BTREE",

        fields: [

          { name: "id" },

        ]

      }
    ]

  });

  // Transaksi.associate = function(models) {
  //   Transaksi.hasMany(models.detail_transaksi, {
  //     foreignKey: 'id_transaksi',
  //     as: 'detail_transaksi'
  //   });
  // };

  return Transaksi;
};
