exports.logIn = function(req, res){
	if(req.params.id == "1234"){
		console.log("1-User to rate has logged !!!!! \n");
		res.send({
			"typeOfUser": "user",
			"supportNumber": "ISP1234"
		});
	}else if (req.params.id == "5678"){
		console.log("2- Already user has logged !!!!! \n");
		res.send({
			"typeOfUser": "user",
			"supportNumber": ""
		});
	}else{
		console.log("3- Tech has logged !!!!! \n");
		res.send({
			"typeOfUser": "tech",
			"supportNumber": ""
		});
	}
	
};

exports.addLikesFromId = function(req, res) {
  console.log("*************** Likes recived ***************\n\n");
  console.log(req.body);
  console.log("\n\n*********************************************\n\n");
  res.send({"status":"ok"});
};

exports.rate = function(req, res){
	console.log("Support Number: " + req.params.supportNumber + " - Rate: " + req.params.rate + " \n");
	res.send({"rate":req.params.rate});
};