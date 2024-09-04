module.exports = (sequelize, DataTypes) => {

    const peserta = sequelize.define("peserta", {

      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
  
      nama: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
  
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true // Menambahkan constraint unique untuk email
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      nomor_telepon: {
        type: DataTypes.STRING(15),
        allowNull: false
      }

    }, {

      sequelize,

      tableName: 'peserta',

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

        {
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },

      ]

    });

  

    return peserta;

  }; 