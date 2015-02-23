var StudentRecord = require("../model/student-record.js");

module.exports.list = function(req, res){
	console.log("GET to server");
	// console.log(StudentRecord.list());
	res.json(StudentRecord.list());
};

module.exports.create = function(req, res){
	console.log("POST to server");
	var newStudRec = new StudentRecord(req.body.name, req.body.instrument, req.body.date, req.body.freq);
	// console.log(newStudRec);
	newStudRec.create();
	console.log("in ctrl");
	console.log(StudentRecord.list());
	console.log("/in ctrl");
	res.json({});
};