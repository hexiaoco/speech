
// jsonp 回调函数不执行

function load_jQuery(fn){
    if(window.jQuery){
        return;
    }   
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.bootcss.com/jquery/3.2.1/jquery.js?callback='+fn.name;
    document.head.appendChild(script);
}

function test(){
	alert(123);
}
load_jQuery(test);
