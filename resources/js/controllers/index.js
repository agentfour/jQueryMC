var ctr={};

ctr.init=function(){
	console.log("Index!!!");

	$("#exampleForm").submit(function(){

		var $input=$("#input");
		var $output=$("#output");
		var data=$input.val();
		if(data.indexOf("@")>0){
			var matches=data.match(/\s([^@]+@[^\s]+)\s/g);
			debug(matches);
		}else{
			alert("There are no email addresses to parse out.");
		}

		return(false);
	});
}

controllers.index=ctr;
