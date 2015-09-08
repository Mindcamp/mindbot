var konstruktController = require('./konstrukt/konstrukt.controller');

var moment = require('moment');
moment.locale('sv-se');

module.exports = function(robot) {
  robot.hear(/dose/i, function(res) {
    return res.send("Yes Dosé is king");
  });
  
  robot.hear(/klock/i, function(res) {
    return res.send("Klockan är " + moment().format('H:mm:ss'));
  });
  
  robot.respond(/deploy konstrukt mindutv/i, konstruktController.deploy);
  
  
};
