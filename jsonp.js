
// script 回调函数不执行

function load_jQuery(fn){
    if(window.jQuery){
    	fn && fn(); 
    } else { 
	    var script = document.createElement('script');
   		script.type = 'text/javascript';
	    	script.src = 'http://cdn.bootcss.com/jquery/3.2.1/jquery.js';
		script.onload = fn ? fn : null;
    	document.head.appendChild(script);
	}
}

function test(){
	alert(123);
}
load_jQuery(test);

