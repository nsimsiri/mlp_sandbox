appClient.controller("studentRecordController", ["$scope", "$resource", function($scope, $resources){
	var StudentRecord = $resources("/api/studentRecord");
	$scope.test="aduh"
	StudentRecord.query(function(result){
		console.log("hello" + result);
		$scope.students = result;
		$scope.after = result.length;
	});
	$scope.students = []
	$scope.after = 0;
	$scope.createStudentRecord = function(){
		var newStudentRecord = new StudentRecord();
		newStudentRecord.name = $scope.studentName;
		newStudentRecord.instrument = $scope.studentInstrument;
		newStudentRecord.date = $scope.studentDate;
		newStudentRecord.freq = $scope.studentFreq;
		newStudentRecord.$save(function(result){
			// $scope.students = result;
			StudentRecord.query(function(result){
				console.log("hello" + result);
				$scope.students = result;
				$scope.after = result.length;
			});
			$scope.after = 20;
			$scope.studentName = '';
			$scope.studentInstrument = '';
			$scope.studentDate = '';
			$scope.studentFreq = '';
		});
	};
}]);