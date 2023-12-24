const User = require("./user-model");
const Role = require("./role-model");
const UserRoleMapping = require("./user-role-mapping");
const sequelize = require("../config/db-connection");

const ConnectToDatabase = async () => [
  await sequelize.authenticate(),
  await sequelize.sync({ alert: true }),
];

module.exports = {
  User,
  Role,
  UserRoleMapping,

  ConnectToDatabase,
};
