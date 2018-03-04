var executeSql = require('./helpers/executeSql').executeSql;

exports.up = function (db) {
  return executeSql(db, '/sqls/20180304132510-init/up.sql');
};

exports.down = function (db) {
  return executeSql(db, '/sqls/20180304132510-init/down.sql');
};
