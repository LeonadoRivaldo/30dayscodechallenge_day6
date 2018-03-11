(function function_name(window, document) {
	var classes = {
		mage:2, 
		paladin:4
	};


	var char = function(classe){
		var classe = classe;
		var modf = classes[classe];
		var castSpell = function(){
			var s = this;
			return function(){
				return s.spellname + " => " + s.dmg * modf;
			}
		};
		var spells = {};

		return{
			spells, castSpell, classe, modf
		}
	};
	
	var spell = function(name, dmg){
		return {
			spellname:name,
			dmg:dmg
		}
	};

	var mage = new char('mage');
	mage.spells.fireball = mage.castSpell.apply(spell("fireball", 10));
	mage.spells.magicMissle = mage.castSpell.apply(spell("Magic missle", 20));

	console.log( mage.spells.fireball() );
	console.log( mage.spells.magicMissle() );


	var paladin = new char('paladin');
	paladin.spells.hollylight = paladin.castSpell.apply( spell('hollylight', 5) );
	paladin.spells.smite = paladin.castSpell.apply( spell('smite', 10) );

	console.log(paladin.spells.hollylight());
	console.log(paladin.spells.smite());


})(window, document);