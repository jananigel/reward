
$(function (){

	var rotateTimeOut = function (){
		$('.wheelBG img').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('errow');
			}
		});
	};
	var bRotate = false;

	var rotateFn = function (awards, angles, txt){
		bRotate = !bRotate;
		$('.wheelBG img').stopRotate();
		$('.wheelBG img').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				alert(txt);
				bRotate = !bRotate;
			}
		})
	};

	$('.arrow').click(function (){

		if(bRotate)return;
		var item = rnd(0,7);

		switch (item) {
			case 0:
				//var angle = [26, 88, 137, 185, 235, 287, 337];
				rotateFn(0, 337, '未中奖');
				break;
			case 1:
				//var angle = [88, 137, 185, 235, 287];
				rotateFn(1, 26, '免单4999元');
				break;
			case 2:
				//var angle = [137, 185, 235, 287];
				rotateFn(2, 88, '免单50元');
				break;
			case 3:
				//var angle = [137, 185, 235, 287];
				rotateFn(3, 137, '免单10元');
				break;
			case 4:
				//var angle = [185, 235, 287];
				rotateFn(4, 185, '免单5元');
				break;
			case 5:
				//var angle = [185, 235, 287];
				rotateFn(5, 185, '免单5元');
				break;
			case 6:
				//var angle = [235, 287];
				rotateFn(6, 235, '免分期服务费');
				break;
			case 7:
				//var angle = [287];
				rotateFn(7, 287, '提高白条额度');
				break;
		}

		console.log(item);
	});
});
function rnd(n, m){
	return Math.floor(Math.random()*(m-n+1)+n)
}