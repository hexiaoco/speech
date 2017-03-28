
// 回调函数会得到执行，但是无法将回调函数的执行结果返回（因为在else分支中，有一个异步函数——script.onload）

function load_jQuery(fn){
    if(window.jQuery){
    	fn(); 
    } else { 
	    var script = document.createElement('script');
   		script.type = 'text/javascript';
    	script.src = '//cdn.bootcss.com/jquery/3.2.1/jquery.js?callback='+fn.name;
		script.onload = fn();
    	document.head.appendChild(script);
	}
}

function test(){
	alert(123);
}
load_jQuery(test);

