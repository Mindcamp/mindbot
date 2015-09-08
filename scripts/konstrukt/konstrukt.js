var Promise = require('bluebird');


module.exports.deploy = deploy;

function deploy() {
	return Promise.delay(5000);	
}