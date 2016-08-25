module.exports =function(app){

	app.get('/:time', function(req,res){
	var time = req.params.time;
	var x = parseInt(time);
	var date = unixTime = naturalTime = null;
	if (x){
		date = new Date(x * 1000);
		unixTime = x;
		naturalTime = date.toDateString();
	} else {
		date = new Date(time);
		if(date.getTime()){
			unixTime = date.getTime() / 1000;
			naturalTime = date.toDateString();
		}
	}
	res.json({
		unix : unixTime,
		natural : naturalTime
	});
	});
}
