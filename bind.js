(function function_name(window, document) {
    _log = function(name){
        return function(value){
            console.log( name + " => " + value );
        }
    }

	let _bindLog = _log("bind");
	var func1 = function(a,b){
		_bindLog( this.max(a,b) );
		_bindLog( this.pow(a,b) );
	}

	var calc = func1.bind(Math);
	//calc(2,2);
})(window, document);