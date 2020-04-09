window.onload = function(){
	var obj = document.getElementById('wallpaper');
	
//	function pictureSubside(){
//		var val = obj.style.opacity;
//		console.log(val);
//		if (val > 0) {
//			val -= 0.1;
//			console.log(val);
//			obj.style.opacity = val;
//		}
//		else{
//			clearInterval(pictureSubside);
//		}
//	}
	
//	function pictureAppear(){
//		
//	}
	
	function checkTime(){
		var oDate = new Date();
		var oHours = oDate.getHours() % 24;
		
		obj.src = "img/mojave_dynamic_" + oHours + ".jpeg";
		console.log(obj.src);

	}
	
	setInterval(checkTime, 10000);
	checkTime();
}
