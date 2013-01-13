/*
*
*	HN+ for Chrome v1.5
*	by @jarques
*
*/
var HN = {
	init: function() {
		$('td[bgcolor="#ff6600"]').css({
			"backgroundColor" : "none !important"
		});
		$('.pagetop a').each(function(i){
			var link = $(this).attr("href");
			$(this).addClass(link);
		});
		$('.comment *').css({"color" : "#373736"});
		$('td[bgcolor="#ff6600"]').css({"backgroundColor" : "none !important"});
		$('img').each(function(){
      var src = $(this).attr("src");
			if (src == "http://ycombinator.com/images/s.gif" || src == "/sslyc/images/s.gif"){
				var new_width = $(this).attr("width");
				$(this).parent().css({"width": new_width});
			} else if (src == "http://ycombinator.com/images/grayarrow.gif" || src == "/sslyc/images/grayarrow.gif"){
				$(this).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wOkNyZWF0ZURhdGU9IjIwMTEtMDctMDFUMTE6NTY6MzYtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDExLTA3LTAxVDE4OjU3LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDExLTA3LTAxVDE4OjU3LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTY0QTVEQjlDMzgxMUUwOTU2NUY4NTVGNjBBQzBEMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTY0QTVEQzlDMzgxMUUwOTU2NUY4NTVGNjBBQzBEMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFNjRBNUQ5OUMzODExRTA5NTY1Rjg1NUY2MEFDMEQyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFNjRBNURBOUMzODExRTA5NTY1Rjg1NUY2MEFDMEQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zGtZdgAAAG9JREFUeNp8irEJwCAQRc+AOzlEGidwNZ0hWcMRLLSwsrBX+YkHgk3y4MHd5wkAtOOc48EYI+gLay1yzogxYt6fUSkFKSWEENg9PlakteZhjMFOlFK0YrFHrTWqtVLvnaSU/E+99xxeb3PSP/cjwADgr04fe0aDGwAAAABJRU5ErkJggg%3D%3D");
				$(this).css({"margin-top": "7px !important"});
			} 
		});
		$('.subtext').each(function(){
		    var el = $(this).find('span:first');
		    el.addClass("score");
		});
		$('a[onclick="return vote(this)"]').each(function(){
			$(this).parent('center').css({"width" : "20px", "padding-left": "6px"});
			$(this).parent('center').parent().css({"width" : "20px"});
		});
		$('.yclinks').parent('center').css({"width" : "100%"});
		$('img[src="http://ycombinator.com/images/y18.gif"]').parent().attr({"href": "http://news.ycombinator.com/"});
		$('img[src="/sslyc/images/y18.gif"]').parent().attr({"href": "/"});
		$('.title').each(function(){
		    $(this).find('a').addClass("post_title");
		});
		$("input[name='q']").attr('placeholder','Search');
		
		HN.init_inputs();
		
		HN.remove_pipes();
		HN.init_keys();
		HN.check_for_expired_link();
	},
	
	init_inputs: function(){
	    $("textarea, input").focus(function(){
	        $(document).unbind("keydown");
	    });
	    $("textarea, input").blur(function(){
		    HN.init_keys();
	    });
	},
	
	submit_overlay: function(){
		var html = "<div id='submit-overlay'></div>",
		    bg   = "<div id='overlay-bg'></div>";
		$('.pagetop').append(html + bg);
		$('a.submit').click(function(e){
			e.preventDefault();
			$.ajax({
			  url: "/submit",
			  success: function(data){
				$('#submit-overlay').html(data);
				$('#overlay-bg').fadeIn(200, function(){
					$('#submit-overlay').fadeIn(100);
					$('input[name="t"]').focus();
				});
			    $('#overlay-bg').click(function(){
					HN.close_overlay();
				});
			  }
			});
		});
	},
	
	close_overlay: function(){
		$('#submit-overlay').fadeOut(200, function(){
			$('#overlay-bg').fadeOut(100);
		});
	},
	
	remove_pipes: function(){
		var html = $('.pagetop:first').html();
		var i = 0;
		while(html && i<=5) {
		    html = html.replace("|",' &nbsp;&nbsp; ');
		    i++
		}
    $('.pagetop:first').html(html);
		var html = $('.pagetop:last').html();
		var i = 0;
		while(html && i<=1) {
		    html = html.replace("|",' &nbsp;&nbsp; ');
		    i++
		}
    $('.pagetop:last').html(html);
	},
	
	set_input_default: function(el) {
	    el.focus(function(){
            if (el.val() == "Search") {
                el.val("");
            }
	    });
	    el.blur(function(){
	        if (el.val() == "") {
                el.val("Search");
            }
	    })
	},
	
	init_keys: function(){
	    var j = 74, // Next Item
	        k = 75, // Previous Item
	        o = 79, // Open Story
	        p = 80, // View Comments
	        h = 72; // Open Help
	    $(document).bind("keydown", function(e){
	        if (e.which == j) {
	            HN.next_story();
	        } else if (e.which == k) {
	            HN.previous_story();
	        } else if (e.which == o) {
	            HN.open_story();
	        } else if (e.which == p) {
	            HN.view_comments();
	        } else if (e.which == h) {
	            HN.open_help();
	        }
	    })
	},
	
	next_story: function(){
	    if ($('.on_story').length == 0) {
	        $('.post_title:first').addClass("on_story");
	    } else {
	        var current = $('.on_story');
	        var next_lem = current.parent().parent().next().next().next().find(".post_title")
	        next_lem.addClass("on_story");
	        $('html, body').stop();
	        $('html, body').animate({
                   scrollTop: next_lem.offset().top - 10
               }, 200);
	        current.removeClass("on_story");
	    }
	},
	
	previous_story:function(){
	    if ($('.on_story').length == 0) {
	       
	    } else {
	        var current = $('.on_story');
	        var next_lem = current.parent().parent().prev().prev().prev().find(".post_title")
	        next_lem.addClass("on_story");
	        $('html, body').stop();
	        $('html, body').animate({
                   scrollTop: next_lem.offset().top - 10
               }, 200);
	        current.removeClass("on_story");
	    }
	},
	
	open_story: function(){
	    if ($('.on_story').length != 0) {
	        var story = $('.on_story');
   		    window.location = story.attr("href");
	    }
	},
	
	view_comments: function(){
	    if ($('.on_story').length != 0) {
	        var story = $('.on_story');
   		    var comments = story.parent().parent().next().find('.subtext').find('a:last');
   		    window.location = comments.attr("href");
	    }
	},
  
  check_for_expired_link: function(){
    if ($('body').text() == 'Unknown or expired link.') {
      $('body').wrapInner('<div class="expired-link">');
    }
  }
}

$(document).ready(function(){
	HN.submit_overlay();
});

HN.init();
