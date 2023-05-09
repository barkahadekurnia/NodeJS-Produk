const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk', {
    prodid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prodname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produk_pkey",
        unique: true,
        fields: [
          { name: "prodid" },
        ]
      },
    ]
  });
};
