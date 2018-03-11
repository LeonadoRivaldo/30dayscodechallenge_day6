(function function_name(window, document) {
	function whoIs(){
		console.log(this.nome + " => " + this.idade + " anos.");
	}

	var pessoa = {};
	//pessoa.nome = prompt("quem é você?");
	//pessoa.idade = prompt("Sua idade?");

	//whoIs.call(pessoa);

	function countFor(){
	    var args= Array.prototype.slice.call(arguments);
	    args.forEach(function(a){
	    	console.log("a =>", a);
	    });
	}

	//countFor("leonardo", "30");


})(window, document);