!function(e,i,$,t){$.swipebox=function(s,o){var a,r={useCSS:!0,useSVG:!0,initialIndexOnArray:0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,loopAtEnd:!1,autoplayVideos:!1},n=this,l=[],d,p=s.selector,b=$(p),c=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),u=null!==c||i.createTouch!==t||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,h=!!i.createElementNS&&!!i.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,w=e.innerWidth?e.innerWidth:$(e).width(),m=e.innerHeight?e.innerHeight:$(e).height(),f=0,g='<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<div id="swipebox-bottom-bar">							<div id="swipebox-arrows">								<a id="swipebox-prev"></a>								<a id="swipebox-next"></a>							</div>						</div>						<a id="swipebox-close"></a>					</div>			</div>';n.settings={},$.swipebox.close=function(){a.closeSlide()},$.swipebox.extend=function(){return a},n.init=function(){n.settings=$.extend({},r,o),$.isArray(s)?(l=s,a.target=$(e),a.init(n.settings.initialIndexOnArray)):$(i).on("click",p,function(e){if("slide current"===e.target.parentNode.className)return!1;$.isArray(s)||(a.destroy(),d=$(p),a.actions()),l=[];var i,t,o;o||(t="data-rel",o=$(this).attr(t)),o||(t="rel",o=$(this).attr(t)),d=o&&""!==o&&"nofollow"!==o?b.filter("["+t+'="'+o+'"]'):$(p),d.each(function(){var e=null,i=null;$(this).attr("title")&&(e=$(this).attr("title")),$(this).attr("href")&&(i=$(this).attr("href")),l.push({href:i,title:e})}),i=d.index($(this)),e.preventDefault(),e.stopPropagation(),a.target=$(e.target),a.init(i)})},a={init:function(e){n.settings.beforeOpen&&n.settings.beforeOpen(),this.target.trigger("swipebox-start"),$.swipebox.isOpen=!0,this.build(),this.openSlide(e),this.openMedia(e),this.preloadMedia(e+1),this.preloadMedia(e-1),n.settings.afterOpen&&n.settings.afterOpen()},build:function(){var e=this,i;$("body").append(g),h&&n.settings.useSVG===!0&&(i=$("#swipebox-close").css("background-image"),i=i.replace("png","svg"),$("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":i})),c&&$("#swipebox-bottom-bar, #swipebox-top-bar").remove(),$.each(l,function(){$("#swipebox-slider").append('<div class="slide"></div>')}),e.setDim(),e.actions(),u&&e.gesture(),e.keyboard(),e.animBars(),e.resize()},setDim:function(){var i,t,s={};"onorientationchange"in e?e.addEventListener("orientationchange",function(){0===e.orientation?(i=w,t=m):(90===e.orientation||-90===e.orientation)&&(i=m,t=w)},!1):(i=e.innerWidth?e.innerWidth:$(e).width(),t=e.innerHeight?e.innerHeight:$(e).height()),s={width:i,height:t},$("#swipebox-overlay").css(s)},resize:function(){var i=this;$(e).resize(function(){i.setDim()}).resize()},supportTransition:function(){var e="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "),s;for(s=0;s<e.length;s++)if(i.createElement("div").style[e[s]]!==t)return e[s];return!1},doCssTrans:function(){return n.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var e=this,i,t,s,o,a,r,n=!1,d=!1,p=10,b=50,c={},u={},h=$("#swipebox-top-bar, #swipebox-bottom-bar"),m=$("#swipebox-slider");h.addClass("visible-bars"),e.setTimeout(),$("body").bind("touchstart",function(e){return $(this).addClass("touching"),i=$("#swipebox-slider .slide").index($("#swipebox-slider .slide.current")),u=e.originalEvent.targetTouches[0],c.pageX=e.originalEvent.targetTouches[0].pageX,c.pageY=e.originalEvent.targetTouches[0].pageY,$("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),$(".touching").bind("touchmove",function(e){if(e.preventDefault(),e.stopPropagation(),u=e.originalEvent.targetTouches[0],!d&&(a=s,s=u.pageY-c.pageY,Math.abs(s)>=b||n)){var h=.75-Math.abs(s)/m.height();m.css({top:s+"px"}),m.css({opacity:h}),n=!0}o=t,t=u.pageX-c.pageX,r=100*t/w,!d&&!n&&Math.abs(t)>=p&&($("#swipebox-slider").css({"-webkit-transition":"",transition:""}),d=!0),d&&(t>0?0===i?$("#swipebox-overlay").addClass("leftSpringTouch"):($("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),$("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+r)+"%, 0, 0)",transform:"translate3d("+(f+r)+"%, 0, 0)"})):0>t&&(l.length===i+1?$("#swipebox-overlay").addClass("rightSpringTouch"):($("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),$("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+r)+"%, 0, 0)",transform:"translate3d("+(f+r)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(i){if(i.preventDefault(),i.stopPropagation(),$("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),s=u.pageY-c.pageY,t=u.pageX-c.pageX,r=100*t/w,n)if(n=!1,Math.abs(s)>=2*b&&Math.abs(s)>Math.abs(a)){var l=s>0?m.height():-m.height();m.animate({top:l+"px",opacity:0},300,function(){e.closeSlide()})}else m.animate({top:0,opacity:1},300);else d?(d=!1,t>=p&&t>=o?e.getPrev():-p>=t&&o>=t&&e.getNext()):h.hasClass("visible-bars")?(e.clearTimeout(),e.hideBars()):(e.showBars(),e.setTimeout());$("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),$("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),$(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(n.settings.hideBarsDelay>0){var i=this;i.clearTimeout(),i.timeout=e.setTimeout(function(){i.hideBars()},n.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var e=$("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.addClass("visible-bars"):($("#swipebox-top-bar").animate({top:0},500),$("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){e.addClass("visible-bars")},1e3))},hideBars:function(){var e=$("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.removeClass("visible-bars"):($("#swipebox-top-bar").animate({top:"-50px"},500),$("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){e.removeClass("visible-bars")},1e3))},animBars:function(){var e=this,i=$("#swipebox-top-bar, #swipebox-bottom-bar");i.addClass("visible-bars"),e.setTimeout(),$("#swipebox-slider").click(function(){i.hasClass("visible-bars")||(e.showBars(),e.setTimeout())}),$("#swipebox-bottom-bar").hover(function(){e.showBars(),i.addClass("visible-bars"),e.clearTimeout()},function(){n.settings.hideBarsDelay>0&&(i.removeClass("visible-bars"),e.setTimeout())})},keyboard:function(){var i=this;$(e).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?i.getPrev():39===e.keyCode?i.getNext():27===e.keyCode&&i.closeSlide()})},actions:function(){var e=this,i="touchend click";l.length<2?($("#swipebox-bottom-bar").hide(),t===l[1]&&$("#swipebox-top-bar").hide()):($("#swipebox-prev").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getPrev(),e.setTimeout()}),$("#swipebox-next").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getNext(),e.setTimeout()})),$("#swipebox-close").bind(i,function(){e.closeSlide()})},setSlide:function(e,i){i=i||!1;var t=$("#swipebox-slider");f=100*-e,this.doCssTrans()?t.css({"-webkit-transform":"translate3d("+100*-e+"%, 0, 0)",transform:"translate3d("+100*-e+"%, 0, 0)"}):t.animate({left:100*-e+"%"}),$("#swipebox-slider .slide").removeClass("current"),$("#swipebox-slider .slide").eq(e).addClass("current"),this.setTitle(e),i&&t.fadeIn(),$("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===e?$("#swipebox-prev").addClass("disabled"):e===l.length-1&&n.settings.loopAtEnd!==!0&&$("#swipebox-next").addClass("disabled")},openSlide:function(i){$("html").addClass("swipebox-html"),u?($("html").addClass("swipebox-touch"),n.settings.hideCloseButtonOnMobile&&$("html").addClass("swipebox-no-close-button")):$("html").addClass("swipebox-no-touch"),$(e).trigger("resize"),this.setSlide(i,!0)},preloadMedia:function(e){var i=this,s=null;l[e]!==t&&(s=l[e].href),i.isVideo(s)?i.openMedia(e):setTimeout(function(){i.openMedia(e)},1e3)},openMedia:function(e){var i=this,s,o;return l[e]!==t&&(s=l[e].href),0>e||e>=l.length?!1:(o=$("#swipebox-slider .slide").eq(e),void(i.isVideo(s)?o.html(i.getVideo(s)):(o.addClass("slide-loading"),i.loadMedia(s,function(){o.removeClass("slide-loading"),o.html(this)}))))},setTitle:function(e){var i=null;$("#swipebox-title").empty(),l[e]!==t&&(i=l[e].title),i?($("#swipebox-top-bar").show(),$("#swipebox-title").append(i)):$("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},getVideo:function(e){var i="",t=e.match(/watch\?v=([a-zA-Z0-9\-_]+)/),s=e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),o=e.match(/vimeo\.com\/([0-9]*)/);return t||s?(s&&(t=s),i='<iframe width="560" height="315" src="http://www.youtube.com/embed/'+t[1]+"?autoplay="+n.settings.autoplayVideos+'" frameborder="0" allowfullscreen></iframe>'):o&&(i='<iframe width="560" height="315"  src="http://player.vimeo.com/video/'+o[1]+"?byline=0&amp;portrait=0&amp;color="+n.settings.vimeoColor+"&autoplay="+n.settings.autoplayVideos+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),t||s||o||(i='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>'),'<div class="swipebox-video-container" style="max-width:'+n.settings.videomaxWidth+'px"><div class="swipebox-video">'+i+"</div></div>"},loadMedia:function(e,i){if(!this.isVideo(e)){var t=$("<img>").on("load",function(){i.call(t)});t.attr("src",e)}},getNext:function(){var e=this,i,t=$("#swipebox-slider .slide").index($("#swipebox-slider .slide.current"));t+1<l.length?(i=$("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"),$("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src",i),t++,e.setSlide(t),e.preloadMedia(t+1)):n.settings.loopAtEnd===!0?(i=$("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"),$("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src",i),t=0,e.preloadMedia(t),e.setSlide(t),e.preloadMedia(t+1)):($("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){$("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var e=$("#swipebox-slider .slide").index($("#swipebox-slider .slide.current")),i;e>0?(i=$("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src"),$("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src",i),e--,this.setSlide(e),this.preloadMedia(e-1)):($("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){$("#swipebox-overlay").removeClass("leftSpring")},500))},closeSlide:function(){$("html").removeClass("swipebox-html"),$("html").removeClass("swipebox-touch"),$(e).trigger("resize"),this.destroy()},destroy:function(){$(e).unbind("keyup"),$("body").unbind("touchstart"),$("body").unbind("touchmove"),$("body").unbind("touchend"),$("#swipebox-slider").unbind(),$("#swipebox-overlay").remove(),$.isArray(s)||s.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),$.swipebox.isOpen=!1,n.settings.afterClose&&n.settings.afterClose()}},n.init()},$.fn.swipebox=function(e){if(!$.data(this,"_swipebox")){var i=new $.swipebox(this,e);this.data("_swipebox",i)}return this.data("_swipebox")}}(window,document,jQuery);