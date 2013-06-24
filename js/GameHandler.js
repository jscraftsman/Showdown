window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     ||  
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();
window.cancelRequestAnimFrame = ( function() {
	return window.cancelAnimationFrame          ||
		window.webkitCancelRequestAnimationFrame    ||
		window.mozCancelRequestAnimationFrame       ||
		window.oCancelRequestAnimationFrame     ||
		window.msCancelRequestAnimationFrame        ||
		clearTimeout
} )();

window.APP = window.APP || {};

APP.pause = function() {
	window.cancelRequestAnimFrame(APP.core.animationFrame);
};
 
APP.play = function() {
	APP.core.then = Date.now();
	APP.core.frame();
};
 
var count = 0;
var z = 0;
APP.core = {
	frame: function() {
		APP.core.setDelta();
		APP.core.update();
		APP.core.render();
		APP.core.animationFrame = window.requestAnimFrame(APP.core.frame);
	},
 
	setDelta: function() {
		APP.core.now = Date.now();
		APP.core.delta = (APP.core.now - APP.core.then) / 1000; // seconds since last frame
		APP.core.then = APP.core.now;
	},
 
	update: function() {
		count += APP.core.delta;
		if(count >= 1){
		console.log(z);
		count = 0;
		z++;
		}
	},
 
	render: function() {}
};
 
