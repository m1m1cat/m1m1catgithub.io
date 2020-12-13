	<script type="text/javascript">
var _box=document.getElementById('box');
var _list=document.getElementById('list');
var _li=_list.getElementsByTagName('li');
var _back=document.getElementById('back');
var _next=document.getElementById('next');
var _point=document.getElementById('point');
var _ali=_point.getElementsByTagName('li');
var iNow=0;
var timer=null;


// 第一部分：
// 获取变量暂时不提，接下来的轮播第一步：先自己封装一个函数，如下：
function move(){
	// 自己封装的函数内执行一个for循环，该循环是动态给 圆点（li）通过动态添加class名 
	// 然后在css样式中写li的背景颜色样式改变它的背景颜色。
	for(var i=0;i<_ali.length;i++){
		// 让圆点（li）的class名为空。
		_ali[i].className='';
	}
	// 让当前的li圆点添加class名称
	_ali[iNow].className='active';
	// 让整个ul向左慢慢移动，移动的距离就是当前li的宽度这个宽度是慢慢增加的。
	_list.style.left=-_li[0].offsetWidth*iNow+'px';
}


// 第二部分：主要是点击事件。
// 给我们的左右点击按钮添加点击事件 通过我们的点击按钮的点击事件改变两件事，一：就是让我们的轮播图片执行，也就是执行我们封装好的函数
// 二：让我们的小圆点相对应的执行。
_next.onclick=function(){
	iNow++;
	if(iNow>=_li.length){
		iNow=0;
	}
	move()
}

_back.onclick=function(){
	iNow--;
	if(iNow<=-1){
		iNow=_li.length-1;
	}
	move()
}

// 接下来就是让轮播中的小点 点击让相应的图片进行变换
for(var i=0;i<_ali.length;i++){
	// 先动态获取我们的小点岁所对应的li,
	_ali[i].index=i;
	//给我们的小点添加点击事件
	//点击圆圈让我们的轮播执行。
	_ali[i].onclick=function(){
	//让我们的变量iNow变成当前的小圆点。 
		iNow=this.index;
	//执行我们之前封装好的move函数 
		move()
	}
}
move();
// 接下来就是第三部分：清除定时器：clearInterval（timer）
clearInterval(timer)
// setInterval 无限执行；在我们清除定时器的时候，想让定时器无限执行，执行到达一定地步的时候再清除。也就是说让我们inow一直执行 当其小于li标签的个数（长度）的时候再归0.当然这个过程就是我们轮播图片切换的过程。执行时间是2秒。
timer=setInterval(function(){
	iNow++;
	if(iNow>=_li.length){
		iNow=0;
	}
	move()
},2000)

// 第四部分：鼠标移入移除效果：而鼠标移入移除的范围就是在我们设定的div块元素中。
// 鼠标移入的时候清除定时器。
_box.onmouseover=function(){
	clearInterval(timer);
}
// 鼠标移除的时候开始执行定时器功能。
_box.onmouseout=function(){
	clearInterval(timer);
	timer=setInterval(function(){
		iNow++;
		if(iNow>=_li.length){
			iNow=0;
		}
		move()
	},2000)
}
</script>