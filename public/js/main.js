var $header=$('.header'),
			$nav=$('.nav'),
			navH=$('.nav').outerHeight(),
			$h1=$('.header h1');

		$(window).scroll(function(){
			var scrollTop=$(window).scrollTop();
			if(scrollTop<380-navH){
				if($nav.hasClass('top')){
					$nav.removeClass('top');
				}
				$header.height(380-scrollTop);
				$h1.fadeTo(0, 1-scrollTop/280);
			}else{
				if(!$nav.hasClass('top')) {
					$nav.addClass('top');
				}
				if($header.height()!=navH){
					console.log($header.height());
					$header.height(navH);
				}
			}
		});