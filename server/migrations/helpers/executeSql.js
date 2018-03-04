var fs = require('fs');
var path = require('path');

exports.executeSql = function executeSql(db, sqlPath) {
  return new Promise( function( resolve, reject ) {
    fs.readFile(path.join(__dirname + '/../' + sqlPath), {
      encoding: 'utf-8'
    }, function(err,data){
      if (err) {
        return reject(err);
      }
      Console.log(data);
      resolve(data);
    });
  }).then(function(data) {
    return db.sequelize.query(data);
  });
};
