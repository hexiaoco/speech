/****
* 一个函数的返回值依赖于一个异步回调，那么它是无法将异步回调的值返回的，因为这个函数无法等待异步回调完成之后再将值返回，也是因为JavaScript没有sleep函数。
****/


//	location.href = 'https://openapi.baidu.com/oauth/2.0/token'

function load_jQuery(fn){
	var ret;
	if(window.jQuery){
		ret = fn();
	} else {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = '//cdn.bootcss.com/jquery/3.2.1/jquery.js';
		script.onload = function(){
			ret = fn();
		}
		document.head.appendChild(script);
	}
	return ret;
}

function set_token(){
	var token = '';
	var url = 'https://openapi.baidu.com/oauth/2.0/token';
	var data = {
		grant_type: 'client_credentials', 
		client_id: 'GfR3VcXrQiVDNs4b89i0htdi',
		client_secret: '5898ee86ff302904a60fa58e6ef26be8'
	}

	token = load_jQuery(callback);
	return token;
	
	function callback(){
		var token = '';
		$.ajax(url, {
			async: false,	//同步请求
			crossDomain: false,	//不限定域
			data: data,
			dataType: 'json',
			type: 'POST'
		}).done(function(data){
			token = data.access_token;
		}).fail(function(){
			alert('error');
		}).always(function(){
		});

		window.token = token;
		return token;
	}
}
