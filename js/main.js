//事件：  当一个事情发生时，会紧跟着另一个事情发生

//$(window) : 选择了整个浏览器
//ready:  加载事件：   当浏览器加载页面完成时，执行里面的代码（所有的jquery的代码，必须都写在这个里面）
$(window).ready(function(){
		$("a[class$='prev']").append("<span class='glyphicon glyphicon-chevron-left'></span>");
		$("a[class$='next']").append("<span class='glyphicon glyphicon-chevron-right'></span>");
		
		//each: 循环标签，让多个标签，执行相同的动作
		$("a[class^='rslides1_s1'],a[class^='rslides1_s2'],a[class^='rslides1_s3'],a[class^='rslides1_s4']" ).each(function(){
				//$(this) :   当前正在被循环的标签（当前正在报数的人）
				//html();  把内容消失
				$(this).html("");
		})
		
		
		//导航栏固定
		//$(document):所有的元素   
		//scroll：是一个事件    当滚动条发生滚动时，会执行里面的代码
		$(document).scroll(function(){
			var  heisetoubu = $("#heisetoubu");  //获取黑色头部的div标签
			var  daohanglan = $("#daohanglan");
			var heisetoubu_height = heisetoubu.height();
			//console.log:用来检测值变化的情况
			console.log("黑色头部的高是："+heisetoubu_height);
			
			var  gundongtiao_top = $(this).scrollTop();
			console.log("导航栏的滚动距离是："+gundongtiao_top);
			
			if(gundongtiao_top>heisetoubu_height){
					daohanglan.addClass("daohanglan");
			}
			else{
					daohanglan.removeClass("daohanglan");
			}
			
		})
		
		
		
		
		
		//导航栏结束
		//放大镜
		var  zhengchang_img = $("#zhengchang");
		var  fangdajing = $("#fangdajing");
		var fangdajing_img = $("#fangdajing_img");
		//mouseover : 鼠标放上去事件   当鼠标放到图片时，会执行里面的代码
		zhengchang_img.mouseover(function(){
			fangdajing.css("display","block");
		})
		//mousemove:鼠标移动事件    当鼠标在图片上移动时，会执行里面的代码
		zhengchang_img.mousemove(function(e){
				//e: 代表的是事件：mousemove               $(this)代表的是图片：zhengchang_img
				//因为e代表的是鼠标事件，所以可以把e看成是鼠标
				var  eX = e.pageX; //鼠标的x轴（鼠标x轴的位置距离页面最左边的距离）
				var  eY = e.pageY;//鼠标的y轴（鼠标y轴的位置距离页面最顶部的距离）
				
				
				
				//scrollLeft:滚动条的left值       offset.left: 标签距离页面左边的距离
				var img_left =  $(this).offset().left;
				var img_top = $(this).offset().top;
				
				var shubiao_x =eX - img_left ; //鼠标在图片上的内间距x轴
				var shubiao_y = eY - img_top;
				
				console.log("鼠标x轴："+shubiao_x+"    ;      鼠标y轴："+shubiao_y);
				fangdajing_img.css("transform-origin",shubiao_x+"px         "+shubiao_y+"px");   //transform-origin:0px   100px
		})
		//mouseover : 鼠标离开事件   当鼠标离开图片时，会执行里面的代码
		zhengchang_img.mouseout(function(){
			fangdajing.css("display","none");
		})
		//放大镜结束
		
		
		//客服开始
			var gotop =  $("#gotop");
			gotop.click(function(){
				//jquery    animate的动画效果
				$("html , body ").animate({scrollTop:0},2000);    //2000毫秒内，让滚动条滚动到页面的顶部
			})
			
			var gotop2 =  $("#gotop2");
			gotop2.click(function(){
				//jquery    animate的动画效果
				$("html , body ").animate({scrollTop:0},2000);    //2000毫秒内，让滚动条滚动到页面的顶部
			})

		//客服结束
		//导航栏开始
			var  zhezhao_dhl = $("#zhezhao_dhl");
			var homes =  $("#home");
			var  heisetoubu = $("#heisetoubu");
			homes.click(function(){
				//jquery    animate的动画效果
				var hstb = heisetoubu.offset().top;
				$("html , body ").animate({scrollTop:(hstb+100+"px")},2000);    //Home
				
				var homes_width = homes.innerWidth(); // about的宽
				zhezhao_dhl.css("width",homes_width+"px");
				var homes_left = homes.offset().left;
				zhezhao_dhl.animate({left:homes_left},1000);
			})
			
			
			var about =  $("#about");
			var lzt= $("#liangzhangtup");
			about.click(function(){
				//jquery    animate的动画效果
				var lzt_top = lzt.offset().top;
				$("html , body ").animate({scrollTop:(lzt_top-230+"px")},2000);    //两张图
				
				var about_width = about.innerWidth(); // about的宽
				zhezhao_dhl.css("width",about_width+"px");
				var about_left = about.offset().left;
				zhezhao_dhl.animate({left:about_left},1000);
			})
			
			var codes =  $("#codes");
			var szt= $("#sanzhangt");
			codes.click(function(){
				//jquery    animate的动画效果
				var sanzhangt = szt.offset().top;
				$("html , body ").animate({scrollTop:sanzhangt},2000);    //三张图
				
				var codes_width = codes.innerWidth(); // about的宽
				zhezhao_dhl.css("width",codes_width+"px");
				var codes_left = codes.offset().left;
				zhezhao_dhl.animate({left:codes_left},1000);
			})
			
			var gallery =  $("#gallery");
			var qjt= $("#qjtudw");
			gallery.click(function(){
				//jquery    animate的动画效果
				var qjtpdw = qjt.offset().top;
				$("html , body ").animate({scrollTop:qjtpdw},2000);    //全景图
				
				var gallery_width = gallery.innerWidth(); // about的宽
				zhezhao_dhl.css("width",gallery_width+"px");
				var gallery_left = gallery.offset().left;
				zhezhao_dhl.animate({left:gallery_left},1000);
			})
			
			var blog =  $("#blog");
			var bddt= $("#baidudit");
			blog.click(function(){
				//jquery    animate的动画效果
				var baidudit = bddt.offset().top;
				$("html , body ").animate({scrollTop:baidudit},2000);    //百度地图
				
				var blog_width = blog.innerWidth(); // about的宽
				zhezhao_dhl.css("width",blog_width+"px");
				var blog_left = blog.offset().left;
				zhezhao_dhl.animate({left:blog_left},1000);
			})
			
			var contact =  $("#contact");
			var zx= $("#zuixia");
			contact.click(function(){
				//jquery    animate的动画效果
				var zuixia = zx.offset().top;
				$("html , body ").animate({scrollTop:zuixia},2000);    //百度地图
				
				var contact_width = contact.innerWidth(); // about的宽
				zhezhao_dhl.css("width",contact_width+"px");
				var contact_left = contact.offset().left;
				zhezhao_dhl.animate({left:contact_left},1000);
			})
		//导航栏结束
		
		
		
		//全景图每次加载动画
		$(document).scroll(function(){
			var  quanjing = $("#quanjing");  //获取黑色头部的div标签
			var  dhzhezhao_z = $("#dhzhezhao_z");
			var quanjing_height = quanjing.offset().top;
			var  gundongtiao_top = $(this).scrollTop();
			if(gundongtiao_top>quanjing_height){
					dhzhezhao_z.addClass("dhzhezhao_z");
			}
			else{
					dhzhezhao_z.removeClass("dhzhezhao_z");
			}
			
		})
		
		//全景图每次加载动画结束
		
})