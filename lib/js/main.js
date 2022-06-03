String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

var latin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','0','1','2','3','4','5','6','7','8','9','?','!','?','.',',',':',';','@','#','$','%','^','&','*','(',')','-','+','=','`','\'','"','h','p','y'],
	mizu = ['∷','⨅','⊣','ᑑ','⍊','∴','ᓵ','𝙹','リ','ᒲ','ᓭ','⚍','⋮','╎','⍑','||','↸','ᔑ','ꖌ','/','ꖎ','ᒷ','⎓','ℸ','!¡','ʖ',' ','0','1','2','3','4','5','6','7','8','9','?','!','?','.',',',':',';','@','#','$','%','^','&','*','(',')','-','+','=','`','\'','"','ȝ','Ȝ','Ƞ'];

var a, b, c, x, y, z;

$("#encoder").keyup(function(){
	x = $(this).val().toLowerCase().replace(new RegExp(`[^${latin.join('')}]`, 'g'), '');
	y = '';
	z = '';
		
	for(let i=0; i<x.length; i++) {
		y += x[i]; //transript for later
		let pos = latin.indexOf(x[i]);
		z += mizu[pos];
	}
	
	$("#encodedTxt").html(z);
});

$("#decoder").keyup(function(){
	updateDecoder();
});

function updateDecoder() {
	a = $("#decoder").val().replace(/\n/g,' ').replaceAll("𝙹","ȝ").replaceAll("||","Ȝ").replaceAll("!¡","Ƞ");
	b = '';
	c = '';
	
	for(let i=0; i<a.length; i++) {
		b = a[i];
		let pos = mizu.indexOf(a[i]);
		
		switch(b.length) {
			case "ȝ":
				c += "h"; break;
			case "Ȝ":
				c += "p"; break;
			case "Ƞ":
				c += "y"; break;
			default:
				c += latin[pos];
		}
		
		c = c.replace("undefined", ""); //tidy
	}
	
	$("#decodedTxt").html(c);
	a = ''; c = b = a; //tidy
}

//load buttons for scooby doo mode
var btnC = document.getElementById("btn-container"),
	dec = document.getElementById("decoder");
	
for(var ctr = 0; ctr<26; ctr++) {
	btnC.innerHTML += "<button class=\"decoder-btn\" onclick=\"decodeInsert("+ctr+")\">"+mizu[ctr]+"</button>";
}

function decodeInsert(x) {
	dec.value += mizu[x];
	updateDecoder();
}


//random title xD
var titles = [
	"my brain is too cooked",
	"i need more unias",
	"back to the afk pool we go!",
	"sleep or stinky",
	"chompy keeps stealing our pets",
	"vote, gamble, get corals, repeat",
	"Heptaseazz has joined the server!",
	"please scooby doo this shit",
	"Day 732: my diet still consists of baked potatoes. my poo is now mashed potatoes.",
	"sugar canes = ez moni",
	"my boat trip to Iterna takes me exactly 5 minutes and 24 seconds",
	"No Decia?",
	"youtu.be/dQw4w9WgXcQ",
	"Mr. Fluffy never died :PepeHands:",
	"Pineapple on Pizza is the best thing that ever happened since WWII"
];

window.onload = function() {
	titleroll();
}

function titleroll() {
	//pick random title
	let i = Math.floor((Math.random() * titles.length));
	$(".header-title").html(titles[i]);
}
