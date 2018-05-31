let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let FUNC = require('./file');
exports.handler = function (event, context, callback) {



	FUNC.func();









	callback(null, 'Successfully executed');
}