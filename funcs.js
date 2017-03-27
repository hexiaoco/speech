
function load_jQuery(){
	if(window.jQuery){
		return;
	}
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//cdn.bootcss.com/jquery/3.2.1/jquery.js';
	document.head.appendChild(script);
}


function get_token(){
	var token = '';
	var url = 'https://openapi.baidu.com/oauth/2.0/token';
	var data = {
		grant_type: 'client_credentials', 
		client_id: 'GfR3VcXrQiVDNs4b89i0htdi',
		client_secret: '5898ee86ff302904a60fa58e6ef26be8'
	}

	load_jQuery();
	token = callback();
	return token;
	
	function callback(){
		var token = '';
		var args = arguments;
		var loading = false,
			loaded = false;;
		
		while(!loaded){
			if(window.jQuery && !loading){
				$.post(url, data, function(data){
					loading = true;
					console.log('access_token: ' + data.access_token);
					token = data.access_token;
					loaded = true;
					loading = false;
				});
			}
			sleep(300);
		}
		
		return token;
	}
}


function sleep(msec){
	for(var start=Date.now(); Date.now()-start<=msec;){}
}



function text_to_audio(text){
	load_jQuery();
	var url = 'http://tsn.baidu.com/text2audio';
  	var token = '24.5b69e34417c7b25a1583d26b37d15165.2592000.1493205313.282335-9448974';
  	var data = {
    	tex: text,
    	lan: 'zh',
    	tok: token,
    	ctp: 1,
    	'cuid': 'mac'
 	}
  	console.log(22);
  	$.post(url, data, function(data){
    	alert(data);
  	});
}

text_to_audio('你好');
