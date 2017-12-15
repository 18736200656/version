(function(doc,win){
	var docEl = document.documentElement,
	resizeEvt = orientationchange' in window ? 'orientationchange' : 'resize',
	relac = function(){
		var winClient = docEl.clientWidth;
		if(!winClient) return;
		docEl.style.fontSize = (winClient/375) * 20 +'px'
		
	}
	if(!doc.addEventListener) return;
	win.addEventListener('resize',relac,false)
	doc.addEventListener('DOMContentLoaded',relac,false)

})(document,window)