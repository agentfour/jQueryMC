var controllers={};

function jQueryMC(){
	this.init=function(){
		console.log("jQueryMC initialising.");

		var views=$(CONFIG.CONTROLLER_MATCH);

		views.each(function(i,elm){
			//alert($(elm).prop("content"));
            console.log("Looking for property: "+CONFIG.CONTROLLER_PROPERTY);
			var ctrLbl=$(elm).attr(CONFIG.CONTROLLER_PROPERTY);

            console.log("Found Config: "+CONFIG.CONTROLLER_PROPERTY);
            console.log("Found property: "+ctrLbl);
			controllers[ctrLbl].init();
		});

	};
};

