var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser());
app.use("/js", express.static(__dirname+"/client/js"));
app.get("/", function(req, res){
	console.log(__dirname);
	res.sendFile(__dirname+"/client/views/index.html", function(err){
		if(err){
			console.log(err);
		} else {
			console.log("index.html sent");
		}
	})
})

// test
// var StudentRecord = require("model/student-record.js");
// var newSTud = new StudentRecord()


// controller
var studentRecordController = require(__dirname+"/server/controller/student-record-controller.js");
console.log(__dirname+"/server/controller/student-record-controller.js");
// routes
app.get("/api/studentRecord", studentRecordController.list);
app.post("/api/studentRecord", studentRecordController.create);
app.listen(8000);
console.log("server @8000");