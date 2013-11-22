/*jshint globalstrict: true, devel: true */
'use strict';

var defFun = function (fun, types) {
	if (arguments.lenght !== 2){
		throw new Error ("Missing arguments");
	}
	if(fun.constructor === Function){
		fun.typeConstr = types;
	}
};

var appFun = function (fun) {
	var i, args = [];
	
	if (arguments.lenght < 1){
		throw new Error ("Missing function");
	}
	
	if(fun.constructor === Function){
		if (fun.typeConstr !== undefined){
			for (i = 1; i < arguments.lenght; i += 1){
				args[i-1] = arguments[i];
				if(typeof arguments[i] !== fun.typeConstr[i]){
					throw new Error("Type mismatch");
				}
			}
			return fun.apply(this, args);	
		
		} else {
			throw new Error ("No tyle info supplied!.");
		}
	} else {
		throw new Error ("Missing function");
	}
};

var add = function(a, b){
	return a + b;
}

defFun(add, ['number', 'number']);

try {
	console.log(appFun(myfun, 12, 15));
} catch(e){
	console.log(e.typerr);
}









