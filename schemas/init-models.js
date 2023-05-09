var DataTypes = require("sequelize").DataTypes;
var _produk = require("./produk");

function initModels(sequelize) {
  var produk = _produk(sequelize, DataTypes);


  return {
    produk,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
