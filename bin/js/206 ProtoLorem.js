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
