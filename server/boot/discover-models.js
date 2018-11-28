// 'use strict';
//
// var _ = require('lodash');
// var path = require('path');
// var fs = require('fs');
// var loopback = require('loopback');
// var outputPath = '/home/termigiova/Documents/NodeJS/Sakila/common/models';
//
// module.exports = function(app, callback) {
//   // Obtain the datasource registered with the name "db"
//   const dataSource = app.dataSources.mysql;
//
//   dataSource.discoverModelDefinitions({schema: 'sakila'}, function(err, models) {
//     var count = models.length;
//
//     _.each(models, function(model) {
//       // console.log(model.name);
//       dataSource.discoverSchema(model.name, {associations: false}, function(err, schema) { // instead of model.name just mention your table name
//         // console.log("GG0");
//         // console.log("GG"+schema.name);
//         var outputName = outputPath + '/' + schema.name + '.json';
//         fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('JSON saved to ' + outputName);
//           }
//         });
//         fs.writeFile(outputPath + '/' + schema.name + '.js', schema.name, function(err) {
//           if (err) throw err;
//           console.log('Created ' + schema.name + '.json file');
//         });
//         count = count - 1;
//         if (count === 0) {
//           console.log('DONE!', count);
//           dataSource.disconnect();
//           return;
//         }
//       });
//     });
//   });
// };
