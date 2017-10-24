var controllers={};

function jQueryMC(){
	this.init=function(){
		console.log("jQueryMC initialising.");

		var views=$("META[name='jmc-view']");

		views.each(function(i,elm){
			//alert($(elm).prop("content"));
			var ctrLbl=$(elm).prop("content");
			
			controllers[ctrLbl].init();
		});

	};
};
