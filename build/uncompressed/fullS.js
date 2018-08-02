/* **********************************
 * FullS - Fast Framework Javascript
 * **********************************/

'use strict'
 
/* ***************************************
 * CLASS: DELEGATE
 * ***************************************/
class Delegate 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: CORE
 * ***************************************/
class Core 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: EVENT
 * ***************************************/
class Event 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: AJAX
 * ***************************************/
class Ajax
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: FORM
 * ***************************************/
class Form 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOM
 * ***************************************/
class Dom 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMCSS
 * ***************************************/
class DomCSS 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMDATA
 * ***************************************/
class DomDATA
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMINSITE
 * ***************************************/
class DomINSITE
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMOUTISTE
 * ***************************************/
class DomOUTSITE
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMTRANS
 * ***************************************/
class DomTRANS
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMFILTER
 * ***************************************/
class DomFILTER 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: DOMPLUGIN
 * ***************************************/
class DomPLUGIN 
{
	constructor () 
    {}
}

/* ***************************************
 * CLASS: FULLS
 * ***************************************/
class FullS 
{
	constructor () 
    {}
}

/* ***************************************
 * PARAM: GLOBAL
 * ***************************************/

// Variable global para usar la libreria
window.$ = element => new FullS ( element );

/* ***************************************
 * PARAM: GLOBAL
 * ***************************************/
//Información sobre el desarrollo de la libreria 
$.about = {}	

Object.defineProperties( $.about ,
{
    "NAME" 				: { value: "FullS" },
    "STANDARD_SCRIPT"	: { value: "ECMAScript 6" },
    "VERSION_CURRENT"	: { value: "1.0.0" },
    "VERSION_TYPE"		: { value: "Developer - Alpha" },
    "VERSION_LIB_DATE"	: { value: "02/08/18" },
    "AUTHOR"			: { value: "Sergio Gonzalez Garrido" },
    "LOCATION"			: { value: "Spain (Barcelona)" },
    "CONTACT"			: { value: "sgonzalez@dgame.es" },
    "TYPE_LICENCE"      : { value: "MIT"}, 
    //"LICENCE"			: { value: ""},
    "BUGS"      		: { value: "https://fulls.jscode.es/bugs"}, 
    "OFICIAL WEBSITE"	: { value: "https://fulls.jscode.es"}, 
    //"GITHUB WEBSITE"	: { value: ""},
});
/* ***************************************
 * PROTOTYPE: AJAX
 * ***************************************/

$.ajax = ( ...set ) => {}
/* ***************************************
 * PROTOTYPE: Target event
 * ***************************************/

$.targetEvent = {};
/* ***************************************
 * PROTOTYPE: COOKIE
 * ***************************************/

$.cookie = ( key, val, opt = {}) => {

	let type = typeof val;

	let set = ( key, val, opt) => {

		let expires = new Date(),
		a 		  	= (key 		== undefined) 	? false : true,
		b 			= (val 		== undefined) 	? false : true,
		time 		= (opt.time == undefined) 	? 31536000000 : opt.time;
		// domain
		// path
		// size
		// http
		// secure
		// sameSite		

		expires.setTime(expires.getTime() + time);

		let cookie 	= key + "=" + val + ";expires=" + expires.toUTCString();

		return (a && b) && (document.cookie = cookie);
	};

	let get = ( key ) => {

		let keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
		return (keyValue) ? keyValue[2] : null;
	};

	let remove = ( key ) =>	{
		return document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	return (type === "undefined") ? get(key) : 
	((type === "boolean" && val === false) ? remove(key) :
	set( key, val, opt ));
}
/* ***************************************
 * PROTOTYPE: For
 * ***************************************/

$.for = ( obj , execute )=>{

	for (let i = 0; i < obj.length; i++) 
	{		
		execute(i, obj[i])
	}
	
}

/* ***************************************
 * PROTOTYPE: For in
 * ***************************************/
$.forIn = ( obj , execute )=>{

	for (let i in obj ) 
	{		
		execute(i, obj[i])
	}
	
}

/* ***************************************
 * PROTOTYPE: For of
 * ***************************************/
$.forOf = ( obj , execute )=>{

	for (let i of obj) 
	{		
		execute(i)
	}
	
}

/* ***************************************
 * PROTOTYPE: Lorem
 * ***************************************/
$.lorem = ( type = 'p' )=>{

	let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	(type=='h1'||type=='h2'||type=='h3'||type=='h4'||type=='h5') && (lorem='Lorem ipsum dolor sit amet consectetur adipiscing elit')

	if(type=='article'){
		lorem = '<h1 style="margin-bottom: 20px;color: #797878;">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</h1>'+
		'<p style="color: #444444;margin-bottom: 30px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo congue ligula, vitae faucibus arcu. Sed nec dictum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin laoreet nibh et tincidunt efficitur. Duis nec gravida leo. Donec enim tellus, placerat at sem non, sodales mattis diam. Quisque efficitur tincidunt lectus, eu dapibus erat faucibus ut. Integer eget dui ut mauris porta pretium non porttitor tortor. Aenean venenatis enim eget posuere eleifend. Proin dictum eget ipsum eu auctor. Sed mauris risus, auctor vel elit vitae, ullamcorper suscipit erat. Donec pellentesque neque sit amet porttitor ultrices.</p>'+
		'<h3 style="color: #444444;margin-bottom: 15px;">Donec a hendrerit felis, a posuere turpis. Praesent et gravida mi. Duis laoreet malesuada vehicula</h3>'+
		'<p style="color: #444444;margin-bottom: 30px;">Ut auctor ipsum nec tellus suscipit, sit amet semper mauris eleifend. Suspendisse sagittis leo dui, tempor gravida lectus pellentesque ac. Cras nec mauris aliquam, iaculis lectus varius, tristique ex. Nam feugiat condimentum augue sed pulvinar. Maecenas nec auctor mauris. Ut ac risus in ante vulputate volutpat at placerat sem. Nam mattis lectus quis augue scelerisque malesuada. Duis eu laoreet magna. Fusce molestie tempus nulla sed pellentesque. Cras placerat mi in nunc aliquam mattis. Donec mollis quam justo, tristique dictum erat dignissim quis. Integer placerat, nunc at rutrum pulvinar, nisi leo molestie ipsum, a malesuada elit mi in lacus. Donec non lorem pulvinar, vulputate nibh pretium, ultrices libero. Sed vehicula semper ante eget porta. Integer egestas vulputate ligula, imperdiet sagittis ipsum mollis id. Fusce finibus quam erat, sit amet tincidunt mi finibus ut.</p>'+
		'<p style="color: #444444;margin-bottom: 30px;">Duis convallis lacus faucibus hendrerit tempus. Nam in sem nec massa bibendum pulvinar. Donec a posuere enim. Cras nunc erat, luctus in vulputate nec, tempor sit amet nisl. Praesent bibendum pharetra nunc ut viverra. Nunc pellentesque dui at ligula consequat molestie. Phasellus dapibus rutrum libero, in tristique lorem. Aliquam tristique auctor venenatis. Nullam commodo nisl vel lectus finibus semper. In finibus nec nisl at mattis. In et convallis ante.</p>';
	}

	return '<'+type+'>'+ lorem +'</'+type+'>';
		
}

/* ***************************************
 * PROTOTYPE: Constructor de los plugins
 * ***************************************/
$.plugin = ( execute )=>{

	('undefined' == typeof $.plugin.list) && ($.plugin.list=[])
	$.plugin.list.push(execute);
}

/* ***************************************
 * PROTOTYPE: Random
 * ***************************************/
$.random = ( init = 0 , end = 100 )=>{
	
	return Math.floor( ( Math.random() * end ) + init)
		
}

/* ***************************************
 * PROTOTYPE: Serializar
 * ***************************************/
$.serialize = data =>{

	let serial = "?";

	data = (data.target=="") ? data : data.target.elements;

	$.for(data,(a,b)=>{

		if(b.type != 'submit') {

			if(b.type == 'checkbox' || b.type == 'radio')
				serial += b.name + "=" + b.checked + "&"
			else
				serial += b.name + "=" + b.value + "&"
		};
		

	});

	return encodeURI(serial.substring( 0 , serial.length-1));
		
}

/* ***************************************
 * PROTOTYPE: Serializar array
 * ***************************************/
$.serializeArray = data =>{

	let serial = [];

	data = (data.target=="") ? data : data.target.elements;

	$.for(data,(a,b)=>{

		if(b.type != 'submit') {

			if(b.type == 'checkbox' || b.type == 'radio')
				serial.push({'name':b.name,'value':b.checked});
			else
				serial.push({'name':b.name,'value':b.value});
		};
		

	});

	return serial;

}

/* ***************************************
 * PROTOTYPE: STORAGE
 * ***************************************/
$.storage = ( key, val, opt = {})=>{

	// Validar funcionamiento Storage
	let isExist = ('function' === typeof Storage);

	// Metodo de inicio
	let init = () => {

		// Detectar objecto
		('object'== typeof key) && (opt=key);
		('object'== typeof val) && (opt=val);

		// Determinar el tipo de storage [local, session]
		opt.type = (opt.type == undefined) 	? 'local' : opt.type;	

		// Chekear el typo
		let type = (opt.type=='local' || opt.type=='session');

		if(!type){ throw 'The type storage is not valid. Options valid is: "local" or "session"'}


		let store = window[opt.type+'Storage'];

		let set 	= () => store.setItem( key, val ),
		 	get 	= () => { return store.getItem( key ) },
		 	remove 	= () => store.removeItem( key ),
		 	clear 	= () => store.clear();

		('undefined' == typeof key || 'boolean' == typeof key) && clear(); // CLEAR

		('boolean' == typeof val && false == val || 'object' == typeof key) && remove();

		('string' == typeof key && 'string' == typeof val ) && set();

		return ('undefined' == typeof val || 'object' == typeof val ) && get();



		// $.storage([,option]);
		// $.storage('key','value'[,option]);
		// $.storage('key'[,option]);
		// $.storage('key', false [,option]);

		/*return ('undefined' == typeof key) ? clear():
		("undefined" == typeof val) ? get() : 
		(("boolean" == typeof val && val === false) ? remove() :
		set());*/
	}

	// Si el funcionamiento de Storage es correcto
	return (isExist) && init();
}

/* ***************************************
 * PROTOTYPE: WAIT FOR SECOND
 * ***************************************/
$.waitForSecond = ( execute, second = 1 )=>{

	let s = setTimeout(()=>{ 

		('function' == typeof execute) && execute();
		clearTimeout(s);		

	},(second*1000));
	
}

/* ***************************************
 * PROTOTYPE: Serializar array
 * ***************************************/
$.serializeJSON = data =>{

	let serial = [];

	

	return serial;

}
/* ***************************************
 * APIS HTML5
 * ***************************************/
$.notifer = () =>{

    if (Notification) {
       if (Notification.permission !== "granted") {
       Notification.requestPermission()
       }
       var title = "Xitrus"
       var extra = {
           icon: "http://ep01.epimg.net/elpais/imagenes/2017/06/01/icon/1496334611_889857_1496334959_portadilla_normal.jpg",
           body: "Notificación de prueba en Xitrus"
       }
       var noti = new Notification( title, extra)
       
       noti.onclick = {
       // Al hacer click
       }
       noti.onclose = {
       // Al cerrar
       }
       setTimeout( function() { noti.close() }, 10000)
   }
}
