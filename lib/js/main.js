var latin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '],
	mizu = ['∷','⨅','⊣','ᑑ','⍊','∴','ᓵ','𝙹','リ','ᒲ','ᓭ','⚍','⋮','╎','⍑','||','↸','ᔑ','ꖌ','/','ꖎ','ᒷ','⎓','ʖ','¡!','ℸ',' '];

var a, b, c, x, y, z;

$("#encoder").keyup(function(){
	//.replace(/\n/g,' ') - to remove new lines
	x = $(this).val().toLowerCase().replace(/[^a-z]/gi,'');
	y = '';
	z = '';
		
	for(let i=0; i<x.length; i++) {
		y += x[i]; //transript for later
		let pos = latin.indexOf(x[i]);
		z += mizu[pos];
	}
	
	console.log(y);
	$("#encodedTxt").html(z);
});

$("#decoder").keyup(function(){
	a = $(this).val().replace(/\n/g,' ');
	b = '';
	c = '';
		
	for(let i=0; i<a.length; i++) {
		b += a[i]; //transript for later
		let pos = mizu.indexOf(a[i]);
		
		//console.log("LATIN POS: "+latin[pos]);
		switch(latin[pos]) { //trying to fix the stupid undefined returns
			case "𝙹":
				c += "h"; console.log("H DETECTED"); break;
			case "¡!":
				c += "y"; console.log("Y DETECTED"); break;
			default:
				c += latin[pos];
		}
	}
	
	console.log(b);
	$("#decodedTxt").html(c);
});
