var konstrukt = require('./konstrukt');

module.exports.deploy = function (res) {
  return konstrukt.deploy()
    .then(function () {
      res.reply('Deployed Konstrukt to mindutv');
      res.reply('Deployed Konstrukt to mindutv2');

    });
}